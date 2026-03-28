'use client'

import type { CapTableDTO, Shareholder, ShareClass } from '@/types/cap'

const SHARE_CLASS_COLORS: Record<ShareClass, { bg: string; text: string; label: string }> = {
  'ordinary': { bg: '#0D5C63', text: '#FFFFFF', label: 'Ordinary' },
  'preferred-a': { bg: '#C9A84C', text: '#1C1917', label: 'Preferred A' },
  'preferred-b': { bg: '#B8860B', text: '#FFFFFF', label: 'Preferred B' },
  'preferred-c': { bg: '#8B6914', text: '#FFFFFF', label: 'Preferred C' },
  'options': { bg: '#64748B', text: '#FFFFFF', label: 'Options' },
  'warrants': { bg: '#475569', text: '#FFFFFF', label: 'Warrants' },
  'convertible': { bg: '#94A3B8', text: '#1C1917', label: 'Convertible' },
  'unknown': { bg: '#E8E0D0', text: '#6B5B4E', label: 'Unknown' },
}

interface CapChartProps {
  capTable: CapTableDTO
  mode?: 'ownership' | 'fully-diluted'
}

export function CapChart({ capTable, mode = 'ownership' }: CapChartProps) {
  const shareholders = Object.values(capTable.shareholders)

  // Sort by ownership percentage descending
  const sorted = [...shareholders].sort((a, b) => {
    const pctA = mode === 'fully-diluted' ? a.fullyDilutedPct : a.ownershipPct
    const pctB = mode === 'fully-diluted' ? b.fullyDilutedPct : b.ownershipPct
    return pctB - pctA
  })

  // Group by share class for stacked view
  const byClass = new Map<ShareClass, Shareholder[]>()
  for (const s of sorted) {
    if (!byClass.has(s.shareClass)) byClass.set(s.shareClass, [])
    byClass.get(s.shareClass)!.push(s)
  }

  const classOrder: ShareClass[] = ['ordinary', 'preferred-a', 'preferred-b', 'preferred-c', 'options', 'warrants', 'convertible', 'unknown']

  return (
    <div className="space-y-6">
      {/* Waterfall bar */}
      <div>
        <p className="text-xs font-medium text-[#6B5B4E] uppercase tracking-wider mb-2">
          {mode === 'fully-diluted' ? 'Fully Diluted Ownership' : 'Current Ownership'} Waterfall
        </p>
        <div className="flex h-10 rounded-sm overflow-hidden border border-[#E8E0D0]">
          {sorted.map((s, i) => {
            const pct = mode === 'fully-diluted' ? s.fullyDilutedPct : s.ownershipPct
            const colors = SHARE_CLASS_COLORS[s.shareClass]
            return (
              <div
                key={s.id}
                className="relative group flex-shrink-0 h-full transition-opacity hover:opacity-80"
                style={{ width: `${pct}%`, backgroundColor: colors.bg, minWidth: pct > 0.5 ? undefined : '2px' }}
                title={`${s.name}: ${pct.toFixed(2)}%`}
              >
                {pct > 5 && (
                  <span
                    className="absolute inset-0 flex items-center justify-center text-[9px] font-bold truncate px-1"
                    style={{ color: colors.text }}
                  >
                    {pct.toFixed(1)}%
                  </span>
                )}
                {/* Tooltip */}
                <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 hidden group-hover:block z-10 w-48 bg-[#1C1917] text-white text-xs rounded p-2 pointer-events-none shadow-lg">
                  <p className="font-bold mb-1">{s.name}</p>
                  <p>{pct.toFixed(2)}% ownership</p>
                  <p>{s.sharesHeld.toLocaleString()} shares</p>
                  {s.investmentAmount && (
                    <p>£{s.investmentAmount.toLocaleString()} invested</p>
                  )}
                  <p className="mt-1 opacity-70">{SHARE_CLASS_COLORS[s.shareClass].label}</p>
                </div>
              </div>
            )
          })}
        </div>
        <div className="flex justify-between mt-1 text-[10px] text-[#6B5B4E] font-[family-name:var(--font-mono)]">
          <span>0%</span>
          <span>50%</span>
          <span>100%</span>
        </div>
      </div>

      {/* Legend */}
      <div className="flex flex-wrap gap-3">
        {classOrder
          .filter(cls => byClass.has(cls))
          .map(cls => {
            const colors = SHARE_CLASS_COLORS[cls]
            return (
              <div key={cls} className="flex items-center gap-1.5">
                <div className="w-3 h-3" style={{ backgroundColor: colors.bg }} />
                <span className="text-xs text-[#6B5B4E]">{colors.label}</span>
              </div>
            )
          })}
      </div>

      {/* By-class breakdown */}
      <div className="space-y-4">
        {classOrder
          .filter(cls => byClass.has(cls))
          .map(cls => {
            const holders = byClass.get(cls)!
            const colors = SHARE_CLASS_COLORS[cls]
            const classTotal = holders.reduce((s, h) => s + (mode === 'fully-diluted' ? h.fullyDilutedPct : h.ownershipPct), 0)
            return (
              <div key={cls}>
                <div
                  className="flex items-center justify-between px-3 py-1.5 text-xs font-semibold uppercase tracking-wider"
                  style={{ backgroundColor: colors.bg, color: colors.text }}
                >
                  <span>{colors.label}</span>
                  <span className="font-[family-name:var(--font-mono)]">{classTotal.toFixed(2)}% total</span>
                </div>
                <div className="border border-t-0 border-[#E8E0D0]">
                  {holders.map((s, i) => {
                    const pct = mode === 'fully-diluted' ? s.fullyDilutedPct : s.ownershipPct
                    return (
                      <div
                        key={s.id}
                        className={`flex items-center gap-4 px-3 py-2 text-sm ${i % 2 === 0 ? 'bg-[#FDFAF5]' : 'bg-[#F5F0E8]'}`}
                      >
                        <span className="flex-1 font-medium text-[#1C1917] truncate">{s.name}</span>
                        <span className="font-[family-name:var(--font-mono)] text-[#6B5B4E] w-28 text-right">
                          {s.sharesHeld.toLocaleString()}
                        </span>
                        <span
                          className="font-[family-name:var(--font-mono)] font-semibold w-16 text-right"
                          style={{ color: colors.bg }}
                        >
                          {pct.toFixed(2)}%
                        </span>
                        {s.investmentAmount && (
                          <span className="font-[family-name:var(--font-mono)] text-[#6B5B4E] w-28 text-right text-xs">
                            £{s.investmentAmount.toLocaleString()}
                          </span>
                        )}
                        <span className="text-xs w-16 text-right">
                          {s.confidence === 'high' ? (
                            <span className="text-[#059669]">●</span>
                          ) : s.confidence === 'medium' ? (
                            <span className="text-[#D97706]">●</span>
                          ) : (
                            <span className="text-[#DC2626]">●</span>
                          )}
                        </span>
                      </div>
                    )
                  })}
                </div>
              </div>
            )
          })}
      </div>
    </div>
  )
}
