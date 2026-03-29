import PptxGenJS from 'pptxgenjs'
import type { CapTableDTO, ShareClass } from '@/types/cap'

// Art Deco colour palette — matches cap-pdf-generator.ts and brand identity
const COLORS = {
  bg: 'FFFFFF',        // white slides
  ink: '1C1917',       // near-black for text
  gold: 'C9A84C',      // antique gold accent
  surface: 'FDFAF5',   // warm ivory surface
  muted: 'E8E0D0',     // muted border
  secondary: '6B5B4E', // secondary text
  teal: '0D5C63',
}

const SHARE_CLASS_COLORS: Record<ShareClass, string> = {
  'ordinary': '0D5C63',
  'preferred-a': 'C9A84C',
  'preferred-b': 'B88E0B',
  'preferred-c': '8B6914',
  'options': '64748B',
  'warrants': '475569',
  'convertible': '94A3B8',
  'unknown': 'D4C9B8',
}

const SHARE_CLASS_LABELS: Record<ShareClass, string> = {
  'ordinary': 'Ordinary',
  'preferred-a': 'Preferred A',
  'preferred-b': 'Preferred B',
  'preferred-c': 'Preferred C',
  'options': 'Options',
  'warrants': 'Warrants',
  'convertible': 'Convertible',
  'unknown': 'Unknown',
}

function formatNumber(n: number): string {
  if (n >= 1_000_000) return `${(n / 1_000_000).toFixed(1)}M`
  if (n >= 1_000) return `${(n / 1_000).toFixed(0)}K`
  return n.toLocaleString()
}

function truncate(s: string, maxLen: number): string {
  return s.length > maxLen ? s.slice(0, maxLen - 1) + '…' : s
}

function typeLabel(s: { isFounder: boolean; isInvestor: boolean; isEmployee: boolean }): string {
  if (s.isFounder) return 'Founder'
  if (s.isInvestor) return 'Investor'
  if (s.isEmployee) return 'Employee'
  return '—'
}

export async function generateCapPptx(capTable: CapTableDTO): Promise<Blob> {
  const pptx = new PptxGenJS()
  pptx.layout = 'LAYOUT_16x9'
  pptx.author = 'CapBrief'
  pptx.title = `${capTable.companyName} — Cap Table Report`

  const today = new Date().toLocaleDateString('en-GB', {
    day: 'numeric', month: 'long', year: 'numeric',
  })

  const shareholders = Object.values(capTable.shareholders).sort(
    (a, b) => b.ownershipPct - a.ownershipPct
  )

  // ─────────────────────────────────────────────────────────
  // SLIDE 1: COVER
  // ─────────────────────────────────────────────────────────
  const slide1 = pptx.addSlide()
  slide1.background = { color: COLORS.ink }

  // Top gold accent bar
  slide1.addShape(pptx.ShapeType.rect, {
    x: 0, y: 0, w: '100%', h: 0.08,
    fill: { color: COLORS.gold },
    line: { type: 'none' },
  })

  // Bottom gold accent bar
  slide1.addShape(pptx.ShapeType.rect, {
    x: 0, y: 5.42, w: '100%', h: 0.08,
    fill: { color: COLORS.gold },
    line: { type: 'none' },
  })

  // Left gold accent stripe
  slide1.addShape(pptx.ShapeType.rect, {
    x: 0.55, y: 0.08, w: 0.04, h: 5.34,
    fill: { color: COLORS.gold },
    line: { type: 'none' },
  })

  // "EQUITY REPORT" label
  slide1.addText('EQUITY REPORT', {
    x: 0.9, y: 1.3, w: 8, h: 0.4,
    fontSize: 9,
    bold: false,
    color: COLORS.gold,
    fontFace: 'Helvetica',
    charSpacing: 4,
  })

  // Company name — large
  slide1.addText(capTable.companyName.toUpperCase(), {
    x: 0.9, y: 1.7, w: 8, h: 1.4,
    fontSize: 40,
    bold: true,
    color: 'FFFFFF',
    fontFace: 'Helvetica',
    breakLine: false,
    shrinkText: true,
  })

  // Gold rule line (simulated with thin rect)
  slide1.addShape(pptx.ShapeType.rect, {
    x: 0.9, y: 3.1, w: 7.5, h: 0.015,
    fill: { color: COLORS.gold },
    line: { type: 'none' },
  })

  // Stats row — 3 metrics
  const stats = [
    { label: 'SHAREHOLDERS', value: String(capTable.inferenceStats.totalShareholders) },
    { label: 'SHARES ISSUED', value: formatNumber(capTable.totalSharesIssued) },
    { label: 'FUNDING ROUNDS', value: String(capTable.fundingRounds.length) },
  ]
  stats.forEach((stat, i) => {
    const x = 0.9 + i * 2.6
    slide1.addText(stat.value, {
      x, y: 3.25, w: 2.4, h: 0.7,
      fontSize: 28,
      bold: true,
      color: COLORS.gold,
      fontFace: 'Courier New',
      align: 'left',
    })
    slide1.addText(stat.label, {
      x, y: 3.95, w: 2.4, h: 0.3,
      fontSize: 7,
      color: 'AAAAAA',
      fontFace: 'Helvetica',
      charSpacing: 2,
    })
  })

  // Date
  slide1.addText(`Generated ${today}`, {
    x: 0.9, y: 4.7, w: 5, h: 0.3,
    fontSize: 9,
    color: '888888',
    fontFace: 'Helvetica',
  })

  // CAPBRIEF branding (bottom right)
  slide1.addText('CAPBRIEF', {
    x: 7, y: 4.7, w: 2.5, h: 0.3,
    fontSize: 9,
    color: COLORS.gold,
    fontFace: 'Helvetica',
    charSpacing: 3,
    align: 'right',
  })

  // ─────────────────────────────────────────────────────────
  // SLIDE 2: OWNERSHIP SUMMARY TABLE
  // ─────────────────────────────────────────────────────────
  const slide2 = pptx.addSlide()
  slide2.background = { color: COLORS.bg }

  // Gold top accent
  slide2.addShape(pptx.ShapeType.rect, {
    x: 0, y: 0, w: '100%', h: 0.05,
    fill: { color: COLORS.gold },
    line: { type: 'none' },
  })

  slide2.addText('OWNERSHIP SUMMARY', {
    x: 0.4, y: 0.15, w: 5, h: 0.3,
    fontSize: 7,
    color: COLORS.gold,
    fontFace: 'Helvetica',
    charSpacing: 3,
  })
  slide2.addText(capTable.companyName.toUpperCase(), {
    x: 0.4, y: 0.45, w: 7, h: 0.5,
    fontSize: 22,
    bold: true,
    color: COLORS.ink,
    fontFace: 'Helvetica',
  })

  // Waterfall bar (ownership proportional)
  const barY = 1.1
  const barH = 0.18
  const barW = 9.2
  const barX = 0.4
  let xOff = barX

  for (const s of shareholders) {
    if (s.ownershipPct <= 0) continue
    const segW = (s.ownershipPct / 100) * barW
    slide2.addShape(pptx.ShapeType.rect, {
      x: xOff, y: barY, w: segW, h: barH,
      fill: { color: SHARE_CLASS_COLORS[s.shareClass] },
      line: { type: 'none' },
    })
    xOff += segW
  }

  // Table header
  const headerRow: PptxGenJS.TableCell[] = [
    { text: 'Shareholder', options: { bold: true, fontSize: 8, color: 'FFFFFF', fill: { color: COLORS.ink }, fontFace: 'Helvetica', align: 'left' } },
    { text: 'Type', options: { bold: true, fontSize: 8, color: 'FFFFFF', fill: { color: COLORS.ink }, fontFace: 'Helvetica', align: 'left' } },
    { text: 'Share Class', options: { bold: true, fontSize: 8, color: 'FFFFFF', fill: { color: COLORS.ink }, fontFace: 'Helvetica', align: 'left' } },
    { text: 'Shares', options: { bold: true, fontSize: 8, color: 'FFFFFF', fill: { color: COLORS.ink }, fontFace: 'Helvetica', align: 'right' } },
    { text: 'Ownership %', options: { bold: true, fontSize: 8, color: 'FFFFFF', fill: { color: COLORS.ink }, fontFace: 'Helvetica', align: 'right' } },
    { text: 'Fully Diluted %', options: { bold: true, fontSize: 8, color: 'FFFFFF', fill: { color: COLORS.ink }, fontFace: 'Helvetica', align: 'right' } },
  ]

  const tableRows: PptxGenJS.TableCell[][] = [headerRow]
  const visibleShareholders = shareholders.slice(0, 14)

  visibleShareholders.forEach((s, i) => {
    const bgFill = i % 2 === 0 ? COLORS.surface : COLORS.bg
    tableRows.push([
      { text: truncate(s.name, 30), options: { fontSize: 8, color: COLORS.ink, fill: { color: bgFill }, fontFace: 'Helvetica', align: 'left' } },
      { text: typeLabel(s), options: { fontSize: 8, color: COLORS.secondary, fill: { color: bgFill }, fontFace: 'Helvetica', align: 'left' } },
      { text: SHARE_CLASS_LABELS[s.shareClass], options: { fontSize: 8, color: COLORS.secondary, fill: { color: bgFill }, fontFace: 'Helvetica', align: 'left' } },
      { text: formatNumber(s.sharesHeld), options: { fontSize: 8, color: COLORS.ink, fill: { color: bgFill }, fontFace: 'Courier New', align: 'right' } },
      { text: `${s.ownershipPct.toFixed(2)}%`, options: { fontSize: 8, bold: true, color: COLORS.gold, fill: { color: bgFill }, fontFace: 'Courier New', align: 'right' } },
      { text: `${s.fullyDilutedPct.toFixed(2)}%`, options: { fontSize: 8, color: COLORS.secondary, fill: { color: bgFill }, fontFace: 'Courier New', align: 'right' } },
    ])
  })

  if (shareholders.length > 14) {
    tableRows.push([
      { text: `+ ${shareholders.length - 14} more shareholders`, options: { fontSize: 7, italic: true, color: COLORS.secondary, fill: { color: COLORS.surface }, fontFace: 'Helvetica', colspan: 6, align: 'left' } },
    ])
  }

  slide2.addTable(tableRows, {
    x: 0.4, y: 1.4, w: 9.2,
    colW: [2.6, 1.0, 1.2, 1.2, 1.3, 1.9],
    border: { type: 'solid', pt: 0.3, color: COLORS.muted },
    rowH: 0.28,
  })

  // Date footer
  slide2.addText(today, {
    x: 0.4, y: 5.3, w: 9, h: 0.2,
    fontSize: 7,
    color: 'AAAAAA',
    fontFace: 'Helvetica',
    align: 'right',
  })

  // ─────────────────────────────────────────────────────────
  // SLIDE 3: DILUTION ANALYSIS
  // ─────────────────────────────────────────────────────────
  const slide3 = pptx.addSlide()
  slide3.background = { color: COLORS.bg }

  slide3.addShape(pptx.ShapeType.rect, {
    x: 0, y: 0, w: '100%', h: 0.05,
    fill: { color: COLORS.gold },
    line: { type: 'none' },
  })

  slide3.addText('DILUTION ANALYSIS', {
    x: 0.4, y: 0.15, w: 5, h: 0.3,
    fontSize: 7,
    color: COLORS.gold,
    fontFace: 'Helvetica',
    charSpacing: 3,
  })
  slide3.addText(capTable.companyName.toUpperCase(), {
    x: 0.4, y: 0.45, w: 7, h: 0.5,
    fontSize: 22,
    bold: true,
    color: COLORS.ink,
    fontFace: 'Helvetica',
  })

  // Key metrics grid
  const dilutionMetrics = [
    {
      label: 'Total Shares Issued',
      value: capTable.totalSharesIssued.toLocaleString(),
      note: 'Current issued shares',
    },
    {
      label: 'Fully Diluted Shares',
      value: capTable.totalSharesFullyDiluted.toLocaleString(),
      note: 'Including options & warrants',
    },
    {
      label: 'Option Pool',
      value: (() => {
        const optionShares = shareholders
          .filter(s => s.shareClass === 'options' || s.shareClass === 'warrants')
          .reduce((sum, s) => sum + s.sharesHeld, 0)
        const pct = capTable.totalSharesFullyDiluted > 0
          ? ((optionShares / capTable.totalSharesFullyDiluted) * 100).toFixed(1)
          : '0.0'
        return `${pct}%`
      })(),
      note: 'Options + warrants / fully diluted',
    },
    {
      label: 'Dilution Factor',
      value: capTable.totalSharesIssued > 0
        ? `${((capTable.totalSharesFullyDiluted / capTable.totalSharesIssued - 1) * 100).toFixed(1)}%`
        : 'N/A',
      note: 'Additional dilution if all options exercised',
    },
    {
      label: 'Founder Ownership',
      value: (() => {
        const founderPct = shareholders
          .filter(s => s.isFounder)
          .reduce((sum, s) => sum + s.ownershipPct, 0)
        return `${founderPct.toFixed(1)}%`
      })(),
      note: 'Combined founder current ownership',
    },
    {
      label: 'Investor Ownership',
      value: (() => {
        const investorPct = shareholders
          .filter(s => s.isInvestor)
          .reduce((sum, s) => sum + s.ownershipPct, 0)
        return `${investorPct.toFixed(1)}%`
      })(),
      note: 'Combined investor current ownership',
    },
  ]

  dilutionMetrics.forEach((m, i) => {
    const col = i % 3
    const row = Math.floor(i / 3)
    const x = 0.4 + col * 3.1
    const y = 1.2 + row * 1.7

    // Card background
    slide3.addShape(pptx.ShapeType.rect, {
      x, y, w: 2.85, h: 1.45,
      fill: { color: COLORS.surface },
      line: { color: COLORS.muted, width: 0.5 },
    })

    // Gold top accent on card
    slide3.addShape(pptx.ShapeType.rect, {
      x, y, w: 2.85, h: 0.04,
      fill: { color: COLORS.gold },
      line: { type: 'none' },
    })

    slide3.addText(m.label, {
      x: x + 0.15, y: y + 0.12, w: 2.55, h: 0.35,
      fontSize: 9,
      color: COLORS.secondary,
      fontFace: 'Helvetica',
    })
    slide3.addText(m.value, {
      x: x + 0.15, y: y + 0.45, w: 2.55, h: 0.55,
      fontSize: 26,
      bold: true,
      color: COLORS.ink,
      fontFace: 'Courier New',
    })
    slide3.addText(m.note, {
      x: x + 0.15, y: y + 1.1, w: 2.55, h: 0.25,
      fontSize: 7,
      italic: true,
      color: 'AAAAAA',
      fontFace: 'Helvetica',
    })
  })

  slide3.addText(today, {
    x: 0.4, y: 5.3, w: 9, h: 0.2,
    fontSize: 7,
    color: 'AAAAAA',
    fontFace: 'Helvetica',
    align: 'right',
  })

  // ─────────────────────────────────────────────────────────
  // SLIDE 4: INVESTOR ROUND HISTORY (if available)
  // ─────────────────────────────────────────────────────────
  if (capTable.fundingRounds.length > 0) {
    const slide4 = pptx.addSlide()
    slide4.background = { color: COLORS.bg }

    slide4.addShape(pptx.ShapeType.rect, {
      x: 0, y: 0, w: '100%', h: 0.05,
      fill: { color: COLORS.gold },
      line: { type: 'none' },
    })

    slide4.addText('INVESTOR ROUND HISTORY', {
      x: 0.4, y: 0.15, w: 6, h: 0.3,
      fontSize: 7,
      color: COLORS.gold,
      fontFace: 'Helvetica',
      charSpacing: 3,
    })
    slide4.addText(capTable.companyName.toUpperCase(), {
      x: 0.4, y: 0.45, w: 7, h: 0.5,
      fontSize: 22,
      bold: true,
      color: COLORS.ink,
      fontFace: 'Helvetica',
    })

    const roundHeaderRow: PptxGenJS.TableCell[] = [
      { text: 'Round', options: { bold: true, fontSize: 8, color: 'FFFFFF', fill: { color: COLORS.ink }, fontFace: 'Helvetica' } },
      { text: 'Date', options: { bold: true, fontSize: 8, color: 'FFFFFF', fill: { color: COLORS.ink }, fontFace: 'Helvetica' } },
      { text: 'Amount Raised', options: { bold: true, fontSize: 8, color: 'FFFFFF', fill: { color: COLORS.ink }, fontFace: 'Helvetica', align: 'right' } },
      { text: 'Pre-money', options: { bold: true, fontSize: 8, color: 'FFFFFF', fill: { color: COLORS.ink }, fontFace: 'Helvetica', align: 'right' } },
      { text: 'Post-money', options: { bold: true, fontSize: 8, color: 'FFFFFF', fill: { color: COLORS.ink }, fontFace: 'Helvetica', align: 'right' } },
      { text: 'Investors', options: { bold: true, fontSize: 8, color: 'FFFFFF', fill: { color: COLORS.ink }, fontFace: 'Helvetica' } },
    ]

    const roundRows: PptxGenJS.TableCell[][] = [roundHeaderRow]

    capTable.fundingRounds.slice(0, 10).forEach((round, i) => {
      const bgFill = i % 2 === 0 ? COLORS.surface : COLORS.bg
      const investorNames = round.investors
        .map(id => capTable.shareholders[id]?.name)
        .filter(Boolean)
        .join(', ')

      roundRows.push([
        { text: round.name, options: { fontSize: 8, bold: true, color: COLORS.ink, fill: { color: bgFill }, fontFace: 'Helvetica' } },
        { text: round.date || '—', options: { fontSize: 8, color: COLORS.secondary, fill: { color: bgFill }, fontFace: 'Helvetica' } },
        { text: round.amountRaised > 0 ? `£${formatNumber(round.amountRaised)}` : '—', options: { fontSize: 8, bold: true, color: COLORS.gold, fill: { color: bgFill }, fontFace: 'Courier New', align: 'right' } },
        { text: round.preMoneyValuation ? `£${formatNumber(round.preMoneyValuation)}` : '—', options: { fontSize: 8, color: COLORS.secondary, fill: { color: bgFill }, fontFace: 'Courier New', align: 'right' } },
        { text: round.postMoneyValuation ? `£${formatNumber(round.postMoneyValuation)}` : '—', options: { fontSize: 8, color: COLORS.secondary, fill: { color: bgFill }, fontFace: 'Courier New', align: 'right' } },
        { text: truncate(investorNames || '—', 40), options: { fontSize: 7, color: COLORS.secondary, fill: { color: bgFill }, fontFace: 'Helvetica' } },
      ])
    })

    slide4.addTable(roundRows, {
      x: 0.4, y: 1.15, w: 9.2,
      colW: [1.3, 0.9, 1.3, 1.2, 1.2, 3.3],
      border: { type: 'solid', pt: 0.3, color: COLORS.muted },
      rowH: 0.32,
    })

    slide4.addText(today, {
      x: 0.4, y: 5.3, w: 9, h: 0.2,
      fontSize: 7,
      color: 'AAAAAA',
      fontFace: 'Helvetica',
      align: 'right',
    })
  }

  // ─────────────────────────────────────────────────────────
  // SLIDE 5: AI INSIGHTS & RECOMMENDATIONS
  // ─────────────────────────────────────────────────────────
  const slide5 = pptx.addSlide()
  slide5.background = { color: COLORS.ink }

  // Gold accent bar top
  slide5.addShape(pptx.ShapeType.rect, {
    x: 0, y: 0, w: '100%', h: 0.05,
    fill: { color: COLORS.gold },
    line: { type: 'none' },
  })

  slide5.addText('AI INSIGHTS & RECOMMENDATIONS', {
    x: 0.4, y: 0.15, w: 9, h: 0.3,
    fontSize: 7,
    color: COLORS.gold,
    fontFace: 'Helvetica',
    charSpacing: 3,
  })
  slide5.addText(capTable.companyName.toUpperCase(), {
    x: 0.4, y: 0.45, w: 7, h: 0.5,
    fontSize: 22,
    bold: true,
    color: 'FFFFFF',
    fontFace: 'Helvetica',
  })

  // Generate data-driven insights
  const insights: { title: string; body: string }[] = []

  // Data completeness
  insights.push({
    title: 'Data Completeness',
    body: `This cap table has a completeness score of ${capTable.completenessScore}%. ${
      capTable.completenessScore >= 80
        ? 'Data quality is strong and suitable for investor reporting.'
        : capTable.completenessScore >= 50
        ? 'Some fields were inferred by AI — review highlighted entries before presenting to investors.'
        : 'Significant data gaps detected. Consider collecting missing shareholder information before finalising.'
    }`,
  })

  // Founder dilution check
  const founderPct = shareholders.filter(s => s.isFounder).reduce((sum, s) => sum + s.ownershipPct, 0)
  if (founderPct < 50 && founderPct > 0) {
    insights.push({
      title: 'Founder Dilution Alert',
      body: `Founders hold a combined ${founderPct.toFixed(1)}% of current ownership — below 50%. This may reduce founder control. Consider reviewing voting rights and board composition before the next round.`,
    })
  } else if (founderPct >= 50) {
    insights.push({
      title: 'Founder Control',
      body: `Founders retain ${founderPct.toFixed(1)}% current ownership. Control is strong heading into any future fundraise.`,
    })
  }

  // Option pool
  const optionShares = shareholders
    .filter(s => s.shareClass === 'options' || s.shareClass === 'warrants')
    .reduce((sum, s) => sum + s.sharesHeld, 0)
  const optionPct = capTable.totalSharesFullyDiluted > 0
    ? (optionShares / capTable.totalSharesFullyDiluted) * 100
    : 0
  if (optionPct > 0) {
    insights.push({
      title: 'Option Pool',
      body: `${optionPct.toFixed(1)}% of fully diluted shares are options or warrants. ${
        optionPct > 20
          ? 'A large option pool may signal aggressive employee incentive plans or pre-Series A top-ups — worth disclosing to new investors.'
          : 'Option pool size is within a typical range for early-stage companies.'
      }`,
    })
  }

  // Investor concentration
  if (shareholders.length > 0) {
    const top = shareholders[0]
    if (top.ownershipPct > 40) {
      insights.push({
        title: 'Ownership Concentration',
        body: `${top.name} holds ${top.ownershipPct.toFixed(1)}% — the single largest stakeholder. High concentration can expedite decisions but may concern institutional investors seeking distributed governance.`,
      })
    }
  }

  // AI inference note
  if (capTable.inferenceStats.inferred > 0) {
    insights.push({
      title: 'AI-Inferred Fields',
      body: `${capTable.inferenceStats.inferred} of ${capTable.inferenceStats.totalShareholders} shareholder records contain AI-inferred classifications. These are marked for review. Always verify share classes and ownership types against your company register before sharing externally.`,
    })
  }

  // Render up to 4 insights in a 2x2 grid
  const visibleInsights = insights.slice(0, 4)
  visibleInsights.forEach((insight, i) => {
    const col = i % 2
    const row = Math.floor(i / 2)
    const x = 0.4 + col * 4.7
    const y = 1.1 + row * 2.0

    slide5.addShape(pptx.ShapeType.rect, {
      x, y, w: 4.4, h: 1.75,
      fill: { color: '2A2520' },
      line: { color: COLORS.gold, width: 0.5 },
    })

    // Gold accent left border on card
    slide5.addShape(pptx.ShapeType.rect, {
      x, y, w: 0.04, h: 1.75,
      fill: { color: COLORS.gold },
      line: { type: 'none' },
    })

    slide5.addText(insight.title, {
      x: x + 0.15, y: y + 0.12, w: 4.1, h: 0.3,
      fontSize: 10,
      bold: true,
      color: COLORS.gold,
      fontFace: 'Helvetica',
    })
    slide5.addText(insight.body, {
      x: x + 0.15, y: y + 0.45, w: 4.1, h: 1.15,
      fontSize: 8,
      color: 'CCCCCC',
      fontFace: 'Helvetica',
      breakLine: true,
    })
  })

  // Footer
  slide5.addText('Generated by CapBrief  |  capbrief.com', {
    x: 0.4, y: 5.3, w: 9, h: 0.2,
    fontSize: 7,
    color: COLORS.gold,
    fontFace: 'Helvetica',
    align: 'right',
  })

  const output = await pptx.write({ outputType: 'blob' }) as Blob
  return output
}
