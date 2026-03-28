import type { Shareholder, FundingRound, CapTableDTO, ShareClass } from '@/types/cap'
import { nanoid } from 'nanoid'
import { getClient } from '@/lib/ai/client'

export interface CapPipelineProgress {
  step: string
  progress: number
  detail?: string
}

/**
 * Run the full cap table processing pipeline on CSV data
 */
export async function runCapPipeline(
  csvContent: string,
  columnMapping: Record<string, string>,
  onProgress?: (p: CapPipelineProgress) => void
): Promise<CapTableDTO> {
  // Step 1: Parse CSV
  onProgress?.({ step: 'Parsing CSV', progress: 10 })
  const { headers, rows } = parseCapCSV(csvContent)

  // Step 2: Build raw shareholders from mapped columns
  onProgress?.({ step: 'Building shareholder records', progress: 25, detail: `Processing ${rows.length} rows` })
  const rawShareholders = buildRawShareholders(rows, headers, columnMapping)

  // Step 3: Calculate total shares issued
  onProgress?.({ step: 'Calculating ownership', progress: 45 })
  const totalSharesIssued = rawShareholders.reduce((sum, s) => sum + s.sharesHeld, 0)
  const optionShares = rawShareholders
    .filter(s => s.shareClass === 'options' || s.shareClass === 'warrants' || s.shareClass === 'convertible')
    .reduce((sum, s) => sum + s.sharesHeld, 0)
  const totalSharesFullyDiluted = totalSharesIssued + optionShares

  // Calculate basic ownership percentages
  for (const s of rawShareholders) {
    s.ownershipPct = totalSharesIssued > 0 ? (s.sharesHeld / totalSharesIssued) * 100 : 0
    s.fullyDilutedPct = totalSharesFullyDiluted > 0 ? (s.sharesHeld / totalSharesFullyDiluted) * 100 : 0
  }

  // Step 4: Call Claude to enrich data
  onProgress?.({ step: 'AI enrichment — classifying shareholders', progress: 65, detail: 'Identifying founders, investors, ESOP' })
  const enriched = await enrichWithAI(rawShareholders)

  // Step 5: Apply AI enrichment back to shareholders
  const shareholdersMap: Record<string, Shareholder> = {}
  for (const s of rawShareholders) {
    const aiData = enriched.shareholders[s.id] || {}
    shareholdersMap[s.id] = {
      ...s,
      isFounder: aiData.isFounder ?? s.isFounder,
      isInvestor: aiData.isInvestor ?? s.isInvestor,
      isEmployee: aiData.isEmployee ?? s.isEmployee,
      shareClass: aiData.shareClass ?? s.shareClass,
      confidence: aiData.confidence ?? s.confidence,
      inferredSource: aiData.shareClassInferred ? 'ai-inferred' : s.inferredSource,
      notes: s.notes,
    }
  }

  // Step 6: Build funding rounds
  onProgress?.({ step: 'Building funding round waterfall', progress: 80 })
  const fundingRounds = buildFundingRounds(enriched.rounds || [], shareholdersMap)

  // Step 7: Score completeness
  onProgress?.({ step: 'Scoring completeness', progress: 95 })
  const completenessScore = scoreCompleteness(rawShareholders)

  const inferred = rawShareholders.filter(s => s.inferredSource !== 'explicit').length

  onProgress?.({ step: 'Complete', progress: 100 })

  return {
    companyName: enriched.companyName || 'Unknown Company',
    totalSharesIssued,
    totalSharesFullyDiluted,
    shareholders: shareholdersMap,
    fundingRounds,
    completenessScore,
    inferenceStats: {
      totalShareholders: rawShareholders.length,
      inferred,
      explicit: rawShareholders.length - inferred,
    },
  }
}

function parseCapCSV(csvContent: string): { headers: string[]; rows: string[][] } {
  const lines = csvContent.trim().split('\n')
  if (lines.length < 2) throw new Error('CSV must have at least a header row and one data row')

  const parseRow = (line: string): string[] => {
    const result: string[] = []
    let field = ''
    let inQuotes = false
    for (let i = 0; i < line.length; i++) {
      const c = line[i]
      if (c === '"') {
        inQuotes = !inQuotes
      } else if (c === ',' && !inQuotes) {
        result.push(field.trim())
        field = ''
      } else {
        field += c
      }
    }
    result.push(field.trim())
    return result
  }

  const headers = parseRow(lines[0])
  const rows = lines.slice(1).filter(l => l.trim()).map(parseRow)
  return { headers, rows }
}

function buildRawShareholders(
  rows: string[][],
  headers: string[],
  columnMapping: Record<string, string>
): Shareholder[] {
  // Reverse mapping: fieldName → headerIndex
  const fieldToIdx: Record<string, number> = {}
  for (const [header, field] of Object.entries(columnMapping)) {
    if (field !== 'ignore') {
      const idx = headers.indexOf(header)
      if (idx >= 0) fieldToIdx[field] = idx
    }
  }

  const shareholders: Shareholder[] = []
  for (const row of rows) {
    const get = (field: string) => {
      const idx = fieldToIdx[field]
      return idx !== undefined ? (row[idx] || '').trim() : ''
    }

    const name = get('name')
    if (!name) continue

    const sharesStr = get('shares_held').replace(/[,\s]/g, '')
    const sharesHeld = parseFloat(sharesStr) || 0

    const investmentStr = get('investment_amount').replace(/[£$,\s]/g, '')
    const investmentAmount = parseFloat(investmentStr) || null

    const rawShareClass = get('share_class').toLowerCase()
    const shareClass = inferShareClass(rawShareClass)

    shareholders.push({
      id: nanoid(10),
      name,
      shareClass,
      sharesHeld,
      investmentAmount: investmentAmount && investmentAmount > 0 ? investmentAmount : null,
      investmentDate: get('investment_date') || null,
      ownershipPct: 0,
      fullyDilutedPct: 0,
      isFounder: false,
      isInvestor: false,
      isEmployee: shareClass === 'options',
      inferredSource: rawShareClass ? 'explicit' : 'calculated',
      confidence: rawShareClass ? 'high' : 'low',
      notes: '',
    })
  }

  return shareholders
}

function inferShareClass(raw: string): ShareClass {
  if (!raw) return 'unknown'
  if (/ordinary|common|founder/i.test(raw)) return 'ordinary'
  if (/preferred.*(a|series.?a|seed)/i.test(raw) || /series.?a/i.test(raw)) return 'preferred-a'
  if (/preferred.*(b|series.?b)/i.test(raw) || /series.?b/i.test(raw)) return 'preferred-b'
  if (/preferred.*(c|series.?c)/i.test(raw) || /series.?c/i.test(raw)) return 'preferred-c'
  if (/preferred/i.test(raw)) return 'preferred-a'
  if (/option|esop|emi/i.test(raw)) return 'options'
  if (/warrant/i.test(raw)) return 'warrants'
  if (/convert|safe|note/i.test(raw)) return 'convertible'
  return 'unknown'
}

interface AIEnrichmentResult {
  companyName: string
  shareholders: Record<string, {
    isFounder?: boolean
    isInvestor?: boolean
    isEmployee?: boolean
    shareClass?: ShareClass
    confidence?: 'high' | 'medium' | 'low'
    shareClassInferred?: boolean
  }>
  rounds: Array<{
    name: string
    date: string
    investorIds: string[]
    estimatedAmount?: number
  }>
}

async function enrichWithAI(shareholders: Shareholder[]): Promise<AIEnrichmentResult> {
  const shareholderSummary = shareholders.map(s => ({
    id: s.id,
    name: s.name,
    shareClass: s.shareClass,
    sharesHeld: s.sharesHeld,
    investmentAmount: s.investmentAmount,
    investmentDate: s.investmentDate,
  }))

  const prompt = `Given this cap table data, please analyze the shareholders and return structured JSON.

Shareholders:
${JSON.stringify(shareholderSummary, null, 2)}

Please:
1. Identify which shareholders are founders (usually hold ordinary shares from day 1, often named individuals with large stakes)
2. Identify which shareholders are investors (hold preferred shares, VCs, angels, funds)
3. Identify ESOP/option pool entries (options, EMI, ESOP pools)
4. Group shareholders by funding round based on dates and share classes
5. Infer any missing share class labels based on context (name, amount, date patterns)
6. Try to identify the company name if visible in the data

Return ONLY valid JSON in exactly this format:
{
  "companyName": "string or empty",
  "shareholders": {
    "<shareholder_id>": {
      "isFounder": boolean,
      "isInvestor": boolean,
      "isEmployee": boolean,
      "shareClass": "ordinary|preferred-a|preferred-b|preferred-c|options|warrants|convertible|unknown",
      "confidence": "high|medium|low",
      "shareClassInferred": boolean
    }
  },
  "rounds": [
    {
      "name": "Seed|Series A|Series B|Pre-Seed|etc",
      "date": "YYYY-MM or approximate",
      "investorIds": ["shareholder_id_1", "shareholder_id_2"],
      "estimatedAmount": number_or_null
    }
  ]
}`

  try {
    const response = await getClient().messages.create({
      model: 'claude-haiku-4-5',
      max_tokens: 2000,
      messages: [{ role: 'user', content: prompt }],
    })

    const text = response.content[0].type === 'text' ? response.content[0].text : ''
    const jsonMatch = text.match(/\{[\s\S]*\}/)
    if (jsonMatch) {
      return JSON.parse(jsonMatch[0]) as AIEnrichmentResult
    }
  } catch (err) {
    console.error('AI enrichment failed:', err)
  }

  // Fallback: basic heuristic enrichment
  const fallbackShareholders: AIEnrichmentResult['shareholders'] = {}
  for (const s of shareholders) {
    fallbackShareholders[s.id] = {
      isFounder: s.shareClass === 'ordinary' && s.sharesHeld > 100000,
      isInvestor: s.shareClass.startsWith('preferred'),
      isEmployee: s.shareClass === 'options',
      shareClass: s.shareClass,
      confidence: 'low',
      shareClassInferred: false,
    }
  }
  return { companyName: '', shareholders: fallbackShareholders, rounds: [] }
}

function buildFundingRounds(
  aiRounds: AIEnrichmentResult['rounds'],
  shareholders: Record<string, Shareholder>
): FundingRound[] {
  return aiRounds.map((r, i) => {
    const investors = r.investorIds.filter(id => shareholders[id])
    const totalRaised = investors.reduce((sum, id) => {
      return sum + (shareholders[id]?.investmentAmount || 0)
    }, 0)

    const investorNames = investors.map(id => shareholders[id]?.name).filter(Boolean)
    const firstInvestor = investors[0] ? shareholders[investors[0]] : null
    const valuation = firstInvestor?.investmentAmount && firstInvestor.ownershipPct > 0
      ? (firstInvestor.investmentAmount / (firstInvestor.ownershipPct / 100))
      : null

    return {
      id: nanoid(8),
      name: r.name || `Round ${i + 1}`,
      date: r.date || '',
      amountRaised: r.estimatedAmount || totalRaised,
      preMoneyValuation: valuation ? valuation - (r.estimatedAmount || totalRaised) : null,
      postMoneyValuation: valuation,
      investors,
    }
  })
}

function scoreCompleteness(shareholders: Shareholder[]): number {
  if (shareholders.length === 0) return 0
  let score = 0
  const weights = {
    hasName: 20,
    hasShares: 25,
    hasShareClass: 20,
    hasInvestmentAmount: 20,
    hasDate: 15,
  }

  for (const s of shareholders) {
    if (s.name) score += weights.hasName
    if (s.sharesHeld > 0) score += weights.hasShares
    if (s.shareClass !== 'unknown') score += weights.hasShareClass
    if (s.investmentAmount) score += weights.hasInvestmentAmount
    if (s.investmentDate) score += weights.hasDate
  }

  return Math.round(score / shareholders.length)
}

/**
 * Auto-detect cap table column mapping from header names
 */
export function autoDetectCapColumns(headers: string[]): Record<string, string> {
  const mapping: Record<string, string> = {}

  const patterns: Record<string, RegExp> = {
    name: /^(name|shareholder|investor|holder|person|full.?name|shareholder.?name|investor.?name)$/i,
    share_class: /^(share.?class|class|type|security.?type|share.?type|instrument|instrument.?type)$/i,
    shares_held: /^(shares|shares.?held|number.?of.?shares|share.?count|quantity|no.?.?shares|num.?shares)$/i,
    investment_amount: /^(amount|investment|invested|consideration|price|cost|value|investment.?amount|amount.?invested|£|gbp|usd|\$)$/i,
    investment_date: /^(date|investment.?date|date.?of.?investment|round.?date|completion.?date|subscription.?date)$/i,
  }

  for (const header of headers) {
    let matched = false
    for (const [field, pattern] of Object.entries(patterns)) {
      if (pattern.test(header.trim())) {
        mapping[header] = field
        matched = true
        break
      }
    }
    if (!matched) {
      mapping[header] = 'ignore'
    }
  }

  return mapping
}
