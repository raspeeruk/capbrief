import { jsPDF } from 'jspdf'
import type { CapTableDTO, Shareholder, ShareClass } from '@/types/cap'

const COLORS = {
  bg: '#F5F0E8',
  ink: '#1C1917',
  gold: '#C9A84C',
  surface: '#FDFAF5',
  muted: '#E8E0D0',
  secondary: '#6B5B4E',
  border: '#D4C9B8',
  teal: '#0D5C63',
}

const SHARE_CLASS_COLORS: Record<ShareClass, [number, number, number]> = {
  'ordinary': [13, 92, 99],       // teal
  'preferred-a': [201, 168, 76],  // gold
  'preferred-b': [184, 134, 11],  // dark gold
  'preferred-c': [139, 105, 20],  // darker gold
  'options': [100, 116, 139],     // slate
  'warrants': [71, 85, 105],      // darker slate
  'convertible': [148, 163, 184], // light slate
  'unknown': [212, 201, 184],     // muted
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

function hex(color: string): [number, number, number] {
  const c = color.replace('#', '')
  return [parseInt(c.slice(0, 2), 16), parseInt(c.slice(2, 4), 16), parseInt(c.slice(4, 6), 16)]
}

export async function generateCapPdf(capTable: CapTableDTO): Promise<Blob> {
  const doc = new jsPDF({ orientation: 'portrait', unit: 'mm', format: 'a4' })
  const W = 210
  const H = 297
  const margin = 16
  const today = new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })

  // ── PAGE 1: COVER ──
  // Dark background
  doc.setFillColor(...hex(COLORS.ink))
  doc.rect(0, 0, W, H, 'F')

  // Gold geometric frame
  doc.setDrawColor(...hex(COLORS.gold))
  doc.setLineWidth(0.3)
  doc.rect(margin, margin, W - margin * 2, H - margin * 2)
  doc.setLineWidth(0.15)
  doc.setDrawColor(201, 168, 76, 0.3)
  doc.rect(margin + 4, margin + 4, W - (margin + 4) * 2, H - (margin + 4) * 2)

  // Corner ornaments
  const ornSize = 8
  const orns = [
    [margin, margin], [W - margin - ornSize, margin],
    [margin, H - margin - ornSize], [W - margin - ornSize, H - margin - ornSize],
  ]
  doc.setDrawColor(...hex(COLORS.gold))
  doc.setLineWidth(0.5)
  for (const [x, y] of orns) {
    doc.line(x, y, x + ornSize * (x < W / 2 ? 1 : -1), y)
    doc.line(x, y, x, y + ornSize * (y < H / 2 ? 1 : -1))
  }

  // Subtitle
  doc.setFont('helvetica', 'normal')
  doc.setFontSize(7)
  doc.setTextColor(...hex(COLORS.gold))
  doc.text('EQUITY REPORT', W / 2, 70, { align: 'center', charSpace: 3 })

  // Company name
  doc.setFontSize(24)
  doc.setTextColor(255, 255, 255)
  doc.setFont('helvetica', 'bold')
  const companyLines = doc.splitTextToSize(capTable.companyName.toUpperCase(), W - margin * 4)
  doc.text(companyLines, W / 2, 90, { align: 'center' })

  // Gold rule
  doc.setDrawColor(...hex(COLORS.gold))
  doc.setLineWidth(0.5)
  doc.line(60, 104, W - 60, 104)

  // Stats row
  const stats = [
    { label: 'SHAREHOLDERS', value: capTable.inferenceStats.totalShareholders.toString() },
    { label: 'SHARES ISSUED', value: formatNumber(capTable.totalSharesIssued) },
    { label: 'ROUNDS', value: capTable.fundingRounds.length.toString() },
  ]
  const statW = (W - margin * 2) / stats.length
  stats.forEach((stat, i) => {
    const x = margin + statW * i + statW / 2
    doc.setFontSize(18)
    doc.setTextColor(...hex(COLORS.gold))
    doc.setFont('courier', 'bold')
    doc.text(stat.value, x, 125, { align: 'center' })
    doc.setFontSize(6)
    doc.setTextColor(255, 255, 255, 0.5)
    doc.setFont('helvetica', 'normal')
    doc.text(stat.label, x, 131, { align: 'center', charSpace: 1.5 })
  })

  // Date
  doc.setFontSize(8)
  doc.setTextColor(255, 255, 255, 0.4)
  doc.text(`Generated ${today}`, W / 2, H - 35, { align: 'center' })

  // Powered by
  doc.setFontSize(7)
  doc.setTextColor(...hex(COLORS.gold))
  doc.text('CAPBRIEF', W / 2, H - 25, { align: 'center', charSpace: 2 })

  // ── PAGE 2: OWNERSHIP WATERFALL ──
  doc.addPage()
  doc.setFillColor(...hex(COLORS.bg))
  doc.rect(0, 0, W, H, 'F')

  let y = margin + 5

  // Page header
  doc.setFontSize(6)
  doc.setTextColor(...hex(COLORS.gold))
  doc.setFont('helvetica', 'normal')
  doc.text('OWNERSHIP WATERFALL', margin, y, { charSpace: 2 })
  y += 8

  // Company name subheader
  doc.setFontSize(14)
  doc.setTextColor(...hex(COLORS.ink))
  doc.setFont('helvetica', 'bold')
  doc.text(capTable.companyName.toUpperCase(), margin, y)
  y += 6

  // Gold rule
  doc.setDrawColor(...hex(COLORS.gold))
  doc.setLineWidth(0.4)
  doc.line(margin, y, W - margin, y)
  y += 8

  // Waterfall bar
  const shareholders = Object.values(capTable.shareholders).sort((a, b) => b.ownershipPct - a.ownershipPct)
  const barH = 10
  const barW = W - margin * 2
  let xOff = margin

  for (const s of shareholders) {
    if (s.ownershipPct <= 0) continue
    const w = (s.ownershipPct / 100) * barW
    const [r, g, b] = SHARE_CLASS_COLORS[s.shareClass]
    doc.setFillColor(r, g, b)
    doc.rect(xOff, y, w, barH, 'F')
    xOff += w
  }

  // Axis labels
  y += barH + 2
  doc.setFontSize(6)
  doc.setTextColor(...hex(COLORS.secondary))
  doc.setFont('courier', 'normal')
  doc.text('0%', margin, y)
  doc.text('50%', W / 2, y, { align: 'center' })
  doc.text('100%', W - margin, y, { align: 'right' })
  y += 8

  // Legend
  const classOrder: ShareClass[] = ['ordinary', 'preferred-a', 'preferred-b', 'preferred-c', 'options', 'warrants', 'convertible', 'unknown']
  const usedClasses = classOrder.filter(cls => shareholders.some(s => s.shareClass === cls))
  let lx = margin
  for (const cls of usedClasses) {
    const [r, g, b] = SHARE_CLASS_COLORS[cls]
    doc.setFillColor(r, g, b)
    doc.rect(lx, y, 3, 3, 'F')
    doc.setFontSize(6)
    doc.setTextColor(...hex(COLORS.secondary))
    doc.setFont('helvetica', 'normal')
    doc.text(SHARE_CLASS_LABELS[cls], lx + 4, y + 2.5)
    lx += 30
    if (lx > W - margin - 30) { lx = margin; y += 6 }
  }
  y += 10

  // Gold rule
  doc.setDrawColor(...hex(COLORS.border))
  doc.setLineWidth(0.2)
  doc.line(margin, y, W - margin, y)
  y += 8

  // Shareholders table header
  doc.setFontSize(6)
  doc.setTextColor(...hex(COLORS.gold))
  doc.setFont('helvetica', 'normal')
  doc.text('SHAREHOLDERS', margin, y, { charSpace: 1.5 })
  y += 5

  // Table column headers
  const cols = [
    { label: 'NAME', x: margin, w: 55 },
    { label: 'CLASS', x: margin + 55, w: 28 },
    { label: 'SHARES', x: margin + 83, w: 30 },
    { label: 'OWNERSHIP %', x: margin + 113, w: 25 },
    { label: 'FULLY DILUTED %', x: margin + 138, w: 25 },
    { label: 'INVESTED', x: margin + 163, w: 25 },
  ]

  doc.setFontSize(6)
  doc.setFont('helvetica', 'bold')
  doc.setTextColor(...hex(COLORS.ink))
  for (const col of cols) {
    doc.text(col.label, col.x, y)
  }
  y += 2

  doc.setDrawColor(...hex(COLORS.border))
  doc.setLineWidth(0.2)
  doc.line(margin, y, W - margin, y)
  y += 4

  // Table rows
  doc.setFont('courier', 'normal')
  for (let i = 0; i < shareholders.length && y < H - margin - 20; i++) {
    const s = shareholders[i]
    if (i % 2 === 0) {
      doc.setFillColor(...hex(COLORS.surface))
      doc.rect(margin, y - 2.5, W - margin * 2, 5.5, 'F')
    }

    doc.setFontSize(7)
    doc.setTextColor(...hex(COLORS.ink))
    doc.text(truncate(s.name, 28), margin, y)

    doc.setFontSize(6)
    doc.setTextColor(...hex(COLORS.secondary))
    doc.text(SHARE_CLASS_LABELS[s.shareClass], margin + 55, y)
    doc.text(formatNumber(s.sharesHeld), margin + 83, y)

    doc.setTextColor(...hex(COLORS.gold))
    doc.setFont('courier', 'bold')
    doc.text(`${s.ownershipPct.toFixed(2)}%`, margin + 113, y)

    doc.setFont('courier', 'normal')
    doc.setTextColor(...hex(COLORS.secondary))
    doc.text(`${s.fullyDilutedPct.toFixed(2)}%`, margin + 138, y)
    doc.text(s.investmentAmount ? `£${formatNumber(s.investmentAmount)}` : '—', margin + 163, y)

    y += 6

    // Confidence indicator
    if (s.inferredSource === 'ai-inferred') {
      doc.setFontSize(5)
      doc.setTextColor(...hex(COLORS.secondary))
      doc.text('AI', margin + 55 + 35, y - 4)
    }
  }

  // ── PAGE 3: FUNDING ROUNDS (if any) ──
  if (capTable.fundingRounds.length > 0) {
    doc.addPage()
    doc.setFillColor(...hex(COLORS.bg))
    doc.rect(0, 0, W, H, 'F')

    y = margin + 5
    doc.setFontSize(6)
    doc.setTextColor(...hex(COLORS.gold))
    doc.setFont('helvetica', 'normal')
    doc.text('FUNDING ROUNDS', margin, y, { charSpace: 2 })
    y += 8

    doc.setFontSize(14)
    doc.setTextColor(...hex(COLORS.ink))
    doc.setFont('helvetica', 'bold')
    doc.text(capTable.companyName.toUpperCase(), margin, y)
    y += 6

    doc.setDrawColor(...hex(COLORS.gold))
    doc.setLineWidth(0.4)
    doc.line(margin, y, W - margin, y)
    y += 10

    for (const round of capTable.fundingRounds) {
      // Round header bar
      doc.setFillColor(...hex(COLORS.ink))
      doc.rect(margin, y, W - margin * 2, 8, 'F')

      doc.setFontSize(8)
      doc.setTextColor(255, 255, 255)
      doc.setFont('helvetica', 'bold')
      doc.text(round.name.toUpperCase(), margin + 4, y + 5.5)

      if (round.amountRaised > 0) {
        doc.setTextColor(...hex(COLORS.gold))
        doc.setFont('courier', 'bold')
        doc.text(`£${formatNumber(round.amountRaised)}`, W - margin - 4, y + 5.5, { align: 'right' })
      }

      y += 10

      // Round details
      doc.setFontSize(7)
      doc.setFont('helvetica', 'normal')
      doc.setTextColor(...hex(COLORS.secondary))

      if (round.date) {
        doc.text(`Date: ${round.date}`, margin + 4, y)
        y += 5
      }

      if (round.preMoneyValuation) {
        doc.text(`Pre-money: £${formatNumber(round.preMoneyValuation)}`, margin + 4, y)
        doc.text(`Post-money: £${formatNumber(round.postMoneyValuation || 0)}`, margin + 70, y)
        y += 5
      }

      if (round.investors.length > 0) {
        const investorNames = round.investors
          .map(id => capTable.shareholders[id]?.name)
          .filter(Boolean)
          .join(', ')
        const lines = doc.splitTextToSize(`Investors: ${investorNames}`, W - margin * 2 - 8)
        doc.text(lines, margin + 4, y)
        y += lines.length * 5
      }

      y += 6

      if (y > H - margin - 30) {
        doc.addPage()
        doc.setFillColor(...hex(COLORS.bg))
        doc.rect(0, 0, W, H, 'F')
        y = margin + 10
      }
    }
  }

  return doc.output('blob')
}

function formatNumber(n: number): string {
  if (n >= 1_000_000) return `${(n / 1_000_000).toFixed(1)}M`
  if (n >= 1_000) return `${(n / 1_000).toFixed(0)}K`
  return n.toLocaleString()
}

function truncate(s: string, maxLen: number): string {
  return s.length > maxLen ? s.slice(0, maxLen - 1) + '…' : s
}
