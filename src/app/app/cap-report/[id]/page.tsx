'use client'

import { useEffect, useState, useCallback } from 'react'
import { useParams, useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { CapChart } from '@/components/chart/cap-chart'
import type { CapTableDTO, Shareholder, ShareClass } from '@/types/cap'

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

interface CapSession {
  id: string
  status: string
  capTable: CapTableDTO | null
}

export default function CapReportPage() {
  const params = useParams()
  const router = useRouter()
  const sessionId = params.id as string
  const [session, setSession] = useState<CapSession | null>(null)
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)
  const [exportingPdf, setExportingPdf] = useState(false)
  const [exportingPptx, setExportingPptx] = useState(false)
  const [checkingOut, setCheckingOut] = useState(false)
  const [dilutionMode, setDilutionMode] = useState<'ownership' | 'fully-diluted'>('ownership')
  const [editingShareholder, setEditingShareholder] = useState<string | null>(null)

  useEffect(() => {
    async function load() {
      try {
        const res = await fetch(`/api/cap-session/${sessionId}`)
        if (res.ok) {
          const data = await res.json() as CapSession
          setSession(data)

          // Persist full cap table to sessionStorage for pay-to-download flow
          if (data.capTable) {
            try {
              sessionStorage.setItem(
                `capbrief_report_${sessionId}`,
                JSON.stringify(data.capTable)
              )
            } catch {
              // sessionStorage full or unavailable — silent fallback
            }
          }
        }
      } catch { /* ignore */ } finally { setLoading(false) }
    }
    load()
  }, [sessionId])

  const capTable = session?.capTable

  const updateShareholder = useCallback((id: string, field: keyof Shareholder, value: string | boolean | ShareClass) => {
    setSession(prev => {
      if (!prev?.capTable) return prev
      return {
        ...prev,
        capTable: {
          ...prev.capTable,
          shareholders: {
            ...prev.capTable.shareholders,
            [id]: {
              ...prev.capTable.shareholders[id],
              [field]: value,
            },
          },
        },
      }
    })
  }, [])

  const handleSave = async () => {
    if (!session) return
    setSaving(true)
    try {
      await fetch(`/api/cap-session/${sessionId}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(session),
      })
    } catch { /* ignore */ } finally { setSaving(false) }
  }

  const handleExportPdf = async () => {
    if (!capTable) return
    setExportingPdf(true)
    try {
      const { generateCapPdf } = await import('@/lib/export/cap-pdf-generator')
      const blob = await generateCapPdf(capTable)
      triggerDownload(blob, `${capTable.companyName.replace(/[^a-zA-Z0-9]+/g, '-')}-cap-table.pdf`)
    } catch (err) {
      console.error('PDF export failed:', err)
      alert('PDF export failed — check the console for details')
    } finally {
      setExportingPdf(false)
    }
  }

  const handleExportPptx = async () => {
    if (!capTable) return
    setExportingPptx(true)
    try {
      const { generateCapPptx } = await import('@/lib/export/cap-pptx-generator')
      const blob = await generateCapPptx(capTable)
      triggerDownload(blob, `${capTable.companyName.replace(/[^a-zA-Z0-9]+/g, '-')}-cap-table.pptx`)
    } catch (err) {
      console.error('PPTX export failed:', err)
      alert('PPTX export failed — check the console for details')
    } finally {
      setExportingPptx(false)
    }
  }

  const handleCheckout = async () => {
    setCheckingOut(true)
    try {
      const res = await fetch('/api/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ reportId: sessionId }),
      })
      const data = await res.json() as { url?: string; error?: string }
      if (data.url) {
        window.location.href = data.url
      } else {
        alert(data.error || 'Could not start checkout')
        setCheckingOut(false)
      }
    } catch {
      alert('Could not connect to payment server')
      setCheckingOut(false)
    }
  }

  function triggerDownload(blob: Blob, filename: string) {
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = filename
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    URL.revokeObjectURL(url)
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center py-24">
        <div className="w-8 h-8 border-2 border-[#C9A84C] border-t-transparent animate-spin" />
      </div>
    )
  }

  if (!capTable) {
    return (
      <div className="text-center py-24">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-[500] uppercase tracking-[0.05em] mb-2">Report not found</h2>
        <p className="text-[#6B5B4E] mb-6 font-[300]">This session may have expired. Please re-upload your CSV.</p>
        <Button onClick={() => router.push('/app/upload')}>Upload new CSV</Button>
      </div>
    )
  }

  const shareholders = Object.values(capTable.shareholders)

  return (
    <div className="max-w-[1000px] mx-auto">
      {/* Report header */}
      <div className="mb-8 flex items-start justify-between">
        <div>
          <p className="font-[family-name:var(--font-mono)] text-[10px] tracking-[0.2em] uppercase text-[#C9A84C] mb-2">
            Equity Report
          </p>
          <h1 className="font-[family-name:var(--font-heading)] text-3xl font-[500] tracking-[0.04em] uppercase text-[#1C1917]">
            {capTable.companyName || 'Cap Table Report'}
          </h1>
          <p className="text-[#6B5B4E] font-[300] text-sm mt-2">
            {capTable.inferenceStats.totalShareholders} shareholders &nbsp;·&nbsp;{' '}
            {capTable.totalSharesIssued.toLocaleString()} shares issued &nbsp;·&nbsp;{' '}
            {capTable.completenessScore}% data completeness
          </p>
        </div>
        <div className="flex items-center gap-3">
          <Button variant="secondary" size="sm" onClick={handleSave} loading={saving}>
            Save
          </Button>
          <Button variant="secondary" size="sm" onClick={handleExportPdf} loading={exportingPdf}>
            Export PDF
          </Button>
          <Button variant="secondary" size="sm" onClick={handleExportPptx} loading={exportingPptx}>
            Export PPTX
          </Button>
        </div>
      </div>

      {/* Summary stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-0 border border-[#D4C9B8] mb-8">
        {[
          { label: 'Total Shareholders', value: capTable.inferenceStats.totalShareholders.toString() },
          { label: 'Shares Issued', value: capTable.totalSharesIssued.toLocaleString() },
          { label: 'Fully Diluted', value: capTable.totalSharesFullyDiluted.toLocaleString() },
          { label: 'Funding Rounds', value: capTable.fundingRounds.length.toString() },
        ].map((stat, i) => (
          <div key={stat.label} className={`p-5 ${i < 3 ? 'border-r border-[#D4C9B8]' : ''} bg-[#FDFAF5]`}>
            <p className="font-[family-name:var(--font-mono)] text-[10px] tracking-[0.15em] uppercase text-[#6B5B4E] mb-1">{stat.label}</p>
            <p className="font-[family-name:var(--font-mono)] text-2xl font-[500] text-[#1C1917]">{stat.value}</p>
          </div>
        ))}
      </div>

      {/* AI inference banner */}
      {capTable.inferenceStats.inferred > 0 && (
        <div className="mb-8 border border-[#C9A84C]/30 bg-[#C9A84C]/5 p-4 flex items-start gap-3">
          <div className="w-4 h-4 mt-0.5 flex-shrink-0 text-[#C9A84C]">
            <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <p className="text-sm text-[#6B5B4E] font-[300]">
            <span className="font-[500] text-[#1C1917]">{capTable.inferenceStats.inferred} fields</span> were inferred by AI.
            Review the shareholder table below and correct any misclassifications before exporting.
          </p>
        </div>
      )}

      {/* Ownership chart */}
      <Card padding="lg" className="mb-8">
        <div className="flex items-center justify-between mb-6">
          <h2 className="font-[family-name:var(--font-heading)] text-lg font-[500] tracking-[0.04em] uppercase text-[#1C1917]">
            Ownership Waterfall
          </h2>
          <div className="flex border border-[#D4C9B8]">
            <button
              onClick={() => setDilutionMode('ownership')}
              className={`px-4 py-1.5 text-xs font-[family-name:var(--font-mono)] transition-colors ${
                dilutionMode === 'ownership'
                  ? 'bg-[#1C1917] text-white'
                  : 'text-[#6B5B4E] hover:text-[#1C1917]'
              }`}
            >
              Current
            </button>
            <button
              onClick={() => setDilutionMode('fully-diluted')}
              className={`px-4 py-1.5 text-xs font-[family-name:var(--font-mono)] border-l border-[#D4C9B8] transition-colors ${
                dilutionMode === 'fully-diluted'
                  ? 'bg-[#1C1917] text-white'
                  : 'text-[#6B5B4E] hover:text-[#1C1917]'
              }`}
            >
              Fully Diluted
            </button>
          </div>
        </div>
        <CapChart capTable={capTable} mode={dilutionMode} />
      </Card>

      {/* Shareholders table — preview (first 3 rows shown, rest blurred) */}
      <Card padding="lg" className="mb-8">
        <h2 className="font-[family-name:var(--font-heading)] text-lg font-[500] tracking-[0.04em] uppercase text-[#1C1917] mb-6">
          Shareholders ({shareholders.length})
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-[#D4C9B8]">
                {['Name', 'Share Class', 'Shares', 'Ownership %', 'Fully Diluted %', 'Invested', 'Type', 'Confidence'].map(h => (
                  <th key={h} className="text-left py-2 px-3 font-[family-name:var(--font-heading)] font-[500] text-[#1C1917] whitespace-nowrap text-xs uppercase tracking-wider">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {shareholders.map((s, i) => (
                <tr key={s.id} className={`border-b border-[#D4C9B8]/50 ${i % 2 === 0 ? 'bg-[#FDFAF5]' : 'bg-[#F5F0E8]/50'} hover:bg-[#C9A84C]/5 transition-colors`}>
                  <td className="py-2 px-3 font-medium text-[#1C1917]">{s.name}</td>
                  <td className="py-2 px-3">
                    {editingShareholder === s.id ? (
                      <select
                        value={s.shareClass}
                        onChange={e => {
                          updateShareholder(s.id, 'shareClass', e.target.value as ShareClass)
                          setEditingShareholder(null)
                        }}
                        className="text-xs border border-[#D4C9B8] px-2 py-1 bg-[#FDFAF5] text-[#1C1917] focus:outline-none focus:border-[#C9A84C]"
                        autoFocus
                        onBlur={() => setEditingShareholder(null)}
                      >
                        {(Object.keys(SHARE_CLASS_LABELS) as ShareClass[]).map(cls => (
                          <option key={cls} value={cls}>{SHARE_CLASS_LABELS[cls]}</option>
                        ))}
                      </select>
                    ) : (
                      <button
                        onClick={() => setEditingShareholder(s.id)}
                        className="text-xs text-[#6B5B4E] hover:text-[#C9A84C] transition-colors underline underline-offset-2"
                        title="Click to edit"
                      >
                        {SHARE_CLASS_LABELS[s.shareClass]}
                      </button>
                    )}
                  </td>
                  <td className="py-2 px-3 font-[family-name:var(--font-mono)] text-xs text-[#1C1917]">
                    {s.sharesHeld.toLocaleString()}
                  </td>
                  <td className="py-2 px-3 font-[family-name:var(--font-mono)] text-xs font-[500] text-[#C9A84C]">
                    {s.ownershipPct.toFixed(2)}%
                  </td>
                  <td className="py-2 px-3 font-[family-name:var(--font-mono)] text-xs text-[#6B5B4E]">
                    {s.fullyDilutedPct.toFixed(2)}%
                  </td>
                  <td className="py-2 px-3 font-[family-name:var(--font-mono)] text-xs text-[#6B5B4E]">
                    {s.investmentAmount ? `£${s.investmentAmount.toLocaleString()}` : '\u2014'}
                  </td>
                  <td className="py-2 px-3 text-xs text-[#6B5B4E]">
                    {s.isFounder ? 'Founder' : s.isInvestor ? 'Investor' : s.isEmployee ? 'Employee' : '\u2014'}
                  </td>
                  <td className="py-2 px-3">
                    <span className={`inline-flex items-center gap-1 text-xs font-[300] ${
                      s.confidence === 'high' ? 'text-[#059669]' :
                      s.confidence === 'medium' ? 'text-[#D97706]' :
                      'text-[#DC2626]'
                    }`}>
                      ● {s.confidence}
                      {s.inferredSource === 'ai-inferred' && <span className="text-[#6B5B4E] opacity-50">(AI)</span>}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-3 text-xs text-[#6B5B4E] font-[300]">Click a share class to edit it. Changes are saved with the Save button.</p>
      </Card>

      {/* Funding rounds */}
      {capTable.fundingRounds.length > 0 && (
        <Card padding="lg" className="mb-8">
          <h2 className="font-[family-name:var(--font-heading)] text-lg font-[500] tracking-[0.04em] uppercase text-[#1C1917] mb-6">
            Funding Rounds ({capTable.fundingRounds.length})
          </h2>
          <div className="space-y-0 border border-[#D4C9B8]">
            {capTable.fundingRounds.map((round, i) => (
              <div key={round.id} className={`p-5 ${i < capTable.fundingRounds.length - 1 ? 'border-b border-[#D4C9B8]' : ''} ${i % 2 === 0 ? 'bg-[#FDFAF5]' : 'bg-[#F5F0E8]/50'}`}>
                <div className="flex items-start justify-between">
                  <div>
                    <p className="font-[family-name:var(--font-heading)] font-[500] tracking-[0.04em] uppercase text-[#1C1917]">{round.name}</p>
                    {round.date && <p className="text-xs text-[#6B5B4E] font-[300] mt-0.5">{round.date}</p>}
                  </div>
                  {round.amountRaised > 0 && (
                    <p className="font-[family-name:var(--font-mono)] font-[500] text-[#C9A84C] text-lg">
                      £{round.amountRaised.toLocaleString()}
                    </p>
                  )}
                </div>
                {round.investors.length > 0 && (
                  <p className="text-xs text-[#6B5B4E] font-[300] mt-2">
                    Investors: {round.investors.map(id => capTable.shareholders[id]?.name).filter(Boolean).join(', ')}
                  </p>
                )}
                {(round.preMoneyValuation || round.postMoneyValuation) && (
                  <div className="flex gap-6 mt-3">
                    {round.preMoneyValuation && (
                      <div>
                        <p className="font-[family-name:var(--font-mono)] text-[10px] tracking-[0.1em] uppercase text-[#6B5B4E]">Pre-money</p>
                        <p className="font-[family-name:var(--font-mono)] font-[500] text-[#1C1917]">£{round.preMoneyValuation.toLocaleString()}</p>
                      </div>
                    )}
                    {round.postMoneyValuation && (
                      <div>
                        <p className="font-[family-name:var(--font-mono)] text-[10px] tracking-[0.1em] uppercase text-[#6B5B4E]">Post-money</p>
                        <p className="font-[family-name:var(--font-mono)] font-[500] text-[#1C1917]">£{round.postMoneyValuation.toLocaleString()}</p>
                      </div>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
        </Card>
      )}

      {/* ── PAY-TO-DOWNLOAD SECTION ── */}
      <div className="mb-8 border border-[#C9A84C]/40 bg-[#FDFAF5]">
        {/* Header bar */}
        <div className="bg-[#1C1917] px-6 py-4 flex items-center justify-between">
          <div>
            <p className="font-[family-name:var(--font-mono)] text-[10px] tracking-[0.2em] uppercase text-[#C9A84C] mb-0.5">
              Export Package
            </p>
            <h3 className="font-[family-name:var(--font-heading)] text-white font-[500] tracking-[0.04em] uppercase text-lg">
              Download Full Report
            </h3>
          </div>
          <div className="text-right">
            <p className="font-[family-name:var(--font-mono)] text-[#C9A84C] text-2xl font-[500]">£19</p>
            <p className="text-xs text-white/50 font-[300]">one-time</p>
          </div>
        </div>

        <div className="px-6 py-5">
          {/* What's included */}
          <ul className="space-y-2 mb-6">
            {[
              'PDF report — print-ready, Art Deco design, all shareholders',
              'PowerPoint deck — 5 slides: cover, ownership, dilution, rounds, AI insights',
              'Instant download — no account required',
            ].map(item => (
              <li key={item} className="flex items-center gap-2 text-sm text-[#6B5B4E] font-[300]">
                <span className="w-1.5 h-1.5 bg-[#C9A84C] flex-shrink-0" />
                {item}
              </li>
            ))}
          </ul>

          <Button
            onClick={handleCheckout}
            loading={checkingOut}
            size="lg"
            className="w-full"
          >
            {checkingOut ? 'Redirecting to Checkout…' : 'Download Full Report (PDF + PPTX) — £19'}
          </Button>

          <p className="text-center text-xs text-[#6B5B4E] font-[300] mt-3">
            One-time payment. No account required. Secure checkout via Stripe.
          </p>
        </div>
      </div>

      {/* Bottom export (free individual downloads) */}
      <div className="flex items-center justify-between py-6 border-t border-[#D4C9B8]">
        <p className="text-sm text-[#6B5B4E] font-[300]">
          {shareholders.length} shareholders &nbsp;·&nbsp; {capTable.totalSharesIssued.toLocaleString()} shares
        </p>
        <div className="flex items-center gap-3">
          <Button variant="secondary" onClick={handleSave} loading={saving}>Save draft</Button>
          <Button variant="secondary" onClick={handleExportPdf} loading={exportingPdf}>Export PDF</Button>
          <Button variant="secondary" onClick={handleExportPptx} loading={exportingPptx}>Export PPTX</Button>
        </div>
      </div>
    </div>
  )
}
