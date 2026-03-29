import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Best Cap Table Software for Startups in 2026 | CapBrief',
  description: 'Compare Carta, Pulley, Captable.io, and CapBrief. Honest pricing, feature comparison, and which tool fits which stage of startup. Updated for 2026.',
  openGraph: {
    title: 'Best Cap Table Software for Startups in 2026',
    description: 'Carta vs Pulley vs Captable.io vs CapBrief — pricing, features, and which tool you actually need at each stage.',
    type: 'article',
  },
}

export default function CapTableSoftwarePage() {
  return (
    <div className="min-h-screen bg-[#F5F0E8]">
      {/* Nav */}
      <nav className="max-w-[1200px] mx-auto px-6 py-5 flex items-center justify-between border-b border-[#D4C9B8]">
        <Link href="/" className="font-[family-name:var(--font-heading)] text-xl font-700 tracking-[0.1em] text-[#1C1917] uppercase">
          CapBrief
        </Link>
        <div className="flex items-center gap-6">
          <Link href="/guides/cap-table-template" className="text-sm font-[300] text-[#6B5B4E] hover:text-[#1C1917] transition-colors tracking-wider hidden md:block">
            Cap Table Template
          </Link>
          <Link href="/guides/equity-dilution-calculator" className="text-sm font-[300] text-[#6B5B4E] hover:text-[#1C1917] transition-colors tracking-wider hidden md:block">
            Dilution Calculator
          </Link>
          <Link
            href="https://roundbrief.com/auth/signup"
            className="text-sm font-[family-name:var(--font-heading)] tracking-[0.08em] uppercase bg-[#C9A84C] text-[#1C1917] px-6 py-2 hover:bg-[#B8930A] transition-colors"
          >
            Try Free
          </Link>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative bg-[#1C1917] overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-6 border border-[#C9A84C] opacity-15" />
          <div className="absolute top-6 left-6 w-8 h-8 border-t border-l border-[#C9A84C] opacity-50" />
          <div className="absolute top-6 right-6 w-8 h-8 border-t border-r border-[#C9A84C] opacity-50" />
          <div className="absolute bottom-6 left-6 w-8 h-8 border-b border-l border-[#C9A84C] opacity-50" />
          <div className="absolute bottom-6 right-6 w-8 h-8 border-b border-r border-[#C9A84C] opacity-50" />
        </div>
        <div className="max-w-[1200px] mx-auto px-6 py-20 relative z-10">
          <p className="font-[family-name:var(--font-mono)] text-xs tracking-[0.2em] uppercase text-[#C9A84C] mb-6">
            Software Comparison
          </p>
          <h1 className="font-[family-name:var(--font-heading)] text-4xl md:text-5xl font-[500] tracking-[0.04em] uppercase text-white mb-6 max-w-[760px] leading-tight">
            Best Cap Table Software for Startups in 2026
          </h1>
          <p className="text-lg text-white/60 leading-relaxed max-w-[560px] font-[300] tracking-wide">
            Carta, Pulley, Captable.io, and CapBrief compared honestly. What each costs, what each does well, and which one matches your current stage.
          </p>
        </div>
      </section>

      {/* Article body */}
      <article className="max-w-[800px] mx-auto px-6 py-16">

        {/* When do you need software */}
        <section className="mb-12">
          <h2 className="font-[family-name:var(--font-heading)] text-2xl font-[500] tracking-[0.05em] uppercase text-[#1C1917] mb-4">
            Do You Actually Need Cap Table Software?
          </h2>
          <p className="text-[#3D2E22] font-[300] tracking-wide leading-relaxed mb-4">
            Google Sheets is a perfectly reasonable cap table for many pre-seed startups. Dedicated software earns its cost when complexity grows: multiple share classes, EMI option grants, secondary transactions, board reporting requirements, or investor portal access.
          </p>
          <p className="text-[#3D2E22] font-[300] tracking-wide leading-relaxed mb-4">
            The forcing function is usually a term sheet. Before Series A closes, your lawyers will want a clean, audit-ready cap table. That is when most founders make the switch.
          </p>
          <p className="text-[#3D2E22] font-[300] tracking-wide leading-relaxed">
            If you are not there yet but need to present your ownership structure clearly to investors or a board, CapBrief offers a lighter-weight alternative: upload your CSV, get a professional PDF report without committing to an annual software contract.
          </p>
        </section>

        {/* Comparison table */}
        <section className="mb-12">
          <h2 className="font-[family-name:var(--font-heading)] text-2xl font-[500] tracking-[0.05em] uppercase text-[#1C1917] mb-6">
            Side-by-Side Comparison
          </h2>
          <div className="border border-[#D4C9B8] overflow-x-auto">
            <table className="w-full text-sm min-w-[600px]">
              <thead>
                <tr className="bg-[#1C1917]">
                  {['Feature', 'Carta', 'Pulley', 'Captable.io', 'CapBrief'].map(h => (
                    <th key={h} className={`text-left py-3 px-4 font-[family-name:var(--font-heading)] text-xs tracking-[0.06em] uppercase font-[500] ${h === 'CapBrief' ? 'text-[#C9A84C]' : 'text-white/70'}`}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[
                  ['Pricing (starter)', '$149/mo', '$50/mo', 'Free–$99/mo', 'Free to start'],
                  ['Equity plan management', 'Yes', 'Yes', 'Limited', 'No'],
                  ['EMI / 409A valuations', 'Paid add-on', 'Yes', 'No', 'No'],
                  ['Investor portal', 'Yes', 'Yes', 'Basic', 'No'],
                  ['PDF board reports', 'Yes', 'Yes', 'Basic', 'Yes — core feature'],
                  ['AI data inference', 'No', 'No', 'No', 'Yes'],
                  ['Upload messy CSV', 'Manual import', 'Import wizard', 'Manual import', 'AI-parsed'],
                  ['Secondary transactions', 'Yes', 'Yes', 'No', 'No'],
                  ['Best for', 'Series A+', 'Seed–Series B', 'Pre-seed', 'Any stage needing a report'],
                ].map(([feature, carta, pulley, captableio, capbrief], i) => (
                  <tr key={feature} className={`border-t border-[#D4C9B8] ${i % 2 === 0 ? 'bg-white/20' : ''}`}>
                    <td className="py-2.5 px-4 font-[family-name:var(--font-heading)] text-[#1C1917] text-xs tracking-[0.03em] uppercase font-[500]">{feature}</td>
                    <td className="py-2.5 px-4 text-[#6B5B4E] font-[300] text-xs">{carta}</td>
                    <td className="py-2.5 px-4 text-[#6B5B4E] font-[300] text-xs">{pulley}</td>
                    <td className="py-2.5 px-4 text-[#6B5B4E] font-[300] text-xs">{captableio}</td>
                    <td className="py-2.5 px-4 font-[family-name:var(--font-mono)] text-[#C9A84C] text-xs font-[500]">{capbrief}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Individual reviews */}
        <section className="mb-12">
          <h2 className="font-[family-name:var(--font-heading)] text-2xl font-[500] tracking-[0.05em] uppercase text-[#1C1917] mb-6">
            Honest Takes on Each Tool
          </h2>

          <h3 className="font-[family-name:var(--font-heading)] text-lg font-[500] tracking-[0.04em] uppercase text-[#1C1917] mb-3">
            Carta
          </h3>
          <p className="text-[#3D2E22] font-[300] tracking-wide leading-relaxed mb-6">
            Carta is the market leader. If you are raising a US Series A with institutional VCs, your lawyers and investors will likely expect it. The platform handles everything: equity plan administration, 409A valuations, secondary transactions, and investor portals. The cost reflects this — starter plans start around $149/month and grow significantly with headcount. The onboarding is thorough and the legal integrations are best-in-class. If your company is scaling fast and investor reporting is a weekly task, Carta is worth it. If you are a 3-person seed-stage team, it is significant overhead for features you will not use for 12–18 months.
          </p>

          <h3 className="font-[family-name:var(--font-heading)] text-lg font-[500] tracking-[0.04em] uppercase text-[#1C1917] mb-3">
            Pulley
          </h3>
          <p className="text-[#3D2E22] font-[300] tracking-wide leading-relaxed mb-6">
            Pulley was built explicitly to compete with Carta at a lower price point for early-stage companies. It covers the core use cases well: EMI and 409A valuations, scenario modelling for fundraising, investor updates, and option grant management. Pricing starts around $50/month with a free tier for very early startups. The UI is cleaner than Carta and the migration process from a spreadsheet is more guided. For a Seed-to-Series B company that wants Carta-level features at a Seed-stage budget, Pulley is a strong choice.
          </p>

          <h3 className="font-[family-name:var(--font-heading)] text-lg font-[500] tracking-[0.04em] uppercase text-[#1C1917] mb-3">
            Captable.io
          </h3>
          <p className="text-[#3D2E22] font-[300] tracking-wide leading-relaxed mb-6">
            Captable.io targets the pre-seed and YC-cohort segment with a free tier that covers basic cap table management. It handles SAFE conversions cleanly — a genuinely useful feature for US startups that have raised on Y Combinator SAFEs. The free plan is limited: no equity plan management, minimal reporting, and basic investor views. The paid tiers add more, but the product has not grown into the feature depth of Carta or Pulley. Best for: YC-funded founders who want something free and functional during the SAFE stage.
          </p>

          <h3 className="font-[family-name:var(--font-heading)] text-lg font-[500] tracking-[0.04em] uppercase text-[#1C1917] mb-3">
            CapBrief
          </h3>
          <p className="text-[#3D2E22] font-[300] tracking-wide leading-relaxed mb-6">
            CapBrief is not a full cap table management platform — it is a reporting tool. You upload a CSV from any source, and AI parses and enriches the data, calculates dilution, and generates a polished PDF report. It is the right tool when you have an existing cap table (in a spreadsheet, Carta, Pulley, or anywhere else) and need to produce investor-ready documentation quickly — without reformatting your data or buying a platform subscription. At any stage, before any board meeting or fundraise, CapBrief can turn your messy CSV into a professional report in under five minutes.
          </p>
        </section>

        {/* Decision guide */}
        <section className="mb-12">
          <h2 className="font-[family-name:var(--font-heading)] text-2xl font-[500] tracking-[0.05em] uppercase text-[#1C1917] mb-4">
            Which Tool Should You Use?
          </h2>
          <div className="space-y-4">
            {[
              { stage: 'Pre-incorporation', rec: 'Nothing yet. Start a spreadsheet with our free template.', link: '/guides/cap-table-template', linkLabel: 'Free Cap Table Template' },
              { stage: 'Pre-seed / Friends & Family', rec: 'Google Sheet or Captable.io free tier. Keep it simple.' },
              { stage: 'Seed round closing', rec: 'Pulley (best value) or Carta (if US-based VCs require it).' },
              { stage: 'Need a board report this week', rec: 'CapBrief. Upload your CSV, get your PDF, done.' },
              { stage: 'Series A and beyond', rec: 'Carta. The legal integrations and investor portal are worth the price at scale.' },
            ].map(({ stage, rec, link, linkLabel }) => (
              <div key={stage} className="border border-[#D4C9B8] p-4 flex gap-4">
                <span className="font-[family-name:var(--font-mono)] text-[#C9A84C] text-xs font-[500] whitespace-nowrap mt-0.5">→</span>
                <div>
                  <p className="font-[family-name:var(--font-heading)] text-sm tracking-[0.04em] uppercase text-[#1C1917] mb-1">{stage}</p>
                  <p className="text-sm font-[300] text-[#3D2E22]">{rec} {link && <Link href={link} className="text-[#C9A84C] hover:underline">{linkLabel}</Link>}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Pricing note */}
        <section className="mb-12">
          <h2 className="font-[family-name:var(--font-heading)] text-2xl font-[500] tracking-[0.05em] uppercase text-[#1C1917] mb-4">
            The Real Cost of Cap Table Software
          </h2>
          <p className="text-[#3D2E22] font-[300] tracking-wide leading-relaxed mb-4">
            The listed monthly price is rarely the total cost. Factor in: migration time (moving from a spreadsheet to Carta takes days, not hours), legal review of the imported data, 409A valuation fees if required by your investors, and the ongoing admin burden of keeping the platform updated with every option grant and transfer.
          </p>
          <p className="text-[#3D2E22] font-[300] tracking-wide leading-relaxed">
            For many founders at the Seed stage, the honest calculation is: use a well-maintained spreadsheet alongside a quarterly CapBrief report for board packs, and migrate to Carta or Pulley when the legal complexity genuinely demands it. See our <Link href="/guides/cap-table-template" className="text-[#C9A84C] hover:underline">free cap table template</Link> and <Link href="/guides/equity-dilution-calculator" className="text-[#C9A84C] hover:underline">dilution calculator guide</Link> to stay on top of the numbers in the meantime.
          </p>
        </section>

        {/* CTA */}
        <section className="relative bg-[#1C1917] overflow-hidden p-10 mt-16">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute inset-4 border border-[#C9A84C] opacity-15" />
            <div className="absolute top-4 left-4 w-6 h-6 border-t border-l border-[#C9A84C] opacity-40" />
            <div className="absolute bottom-4 right-4 w-6 h-6 border-b border-r border-[#C9A84C] opacity-40" />
          </div>
          <div className="relative z-10">
            <p className="font-[family-name:var(--font-mono)] text-xs tracking-[0.2em] uppercase text-[#C9A84C] mb-4">
              Board Report in 5 Minutes
            </p>
            <h2 className="font-[family-name:var(--font-heading)] text-2xl font-[500] tracking-[0.04em] uppercase text-white mb-4">
              Whatever Cap Table Tool You Use, CapBrief Makes It Board-Ready.
            </h2>
            <p className="text-white/60 font-[300] tracking-wide mb-8 max-w-[480px]">
              Export a CSV from Carta, Pulley, or your spreadsheet. Upload to CapBrief. Get a polished PDF with ownership waterfalls, dilution tables, and round summaries — ready for your next board meeting.
            </p>
            <a
              href="https://roundbrief.com/auth/signup"
              className="inline-block font-[family-name:var(--font-heading)] text-sm tracking-[0.1em] uppercase bg-[#C9A84C] text-[#1C1917] px-8 py-4 hover:bg-[#B8930A] transition-colors"
            >
              Generate Your Report Free
            </a>
          </div>
        </section>

        {/* Internal links */}
        <section className="mt-12 pt-8 border-t border-[#D4C9B8]">
          <p className="font-[family-name:var(--font-heading)] text-sm tracking-[0.08em] uppercase text-[#6B5B4E] mb-4">Continue Reading</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { href: '/guides/cap-table-template', label: 'Cap Table Template', desc: 'Free template with all columns' },
              { href: '/guides/equity-dilution-calculator', label: 'Dilution Calculator', desc: 'Model your next round dilution' },
              { href: '/guides/investor-update-template', label: 'Investor Update Template', desc: 'YC-style update format' },
            ].map(link => (
              <Link key={link.href} href={link.href} className="border border-[#D4C9B8] p-4 hover:border-[#C9A84C] transition-colors group">
                <p className="font-[family-name:var(--font-heading)] text-sm tracking-[0.04em] uppercase text-[#1C1917] group-hover:text-[#C9A84C] transition-colors mb-1">{link.label}</p>
                <p className="text-xs text-[#6B5B4E] font-[300]">{link.desc}</p>
              </Link>
            ))}
          </div>
        </section>
      </article>

      {/* Footer */}
      <footer className="border-t border-[#D4C9B8] mt-8">
        <div className="max-w-[1200px] mx-auto px-6 py-8 flex items-center justify-between">
          <span className="font-[family-name:var(--font-heading)] text-sm tracking-[0.1em] uppercase text-[#1C1917]">CapBrief</span>
          <p className="text-xs text-[#6B5B4E] font-[300]">
            <a href="https://roundbrief.com" className="hover:text-[#C9A84C] transition-colors">roundbrief.com</a>
          </p>
        </div>
      </footer>
    </div>
  )
}
