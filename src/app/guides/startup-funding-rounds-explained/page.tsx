import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Startup Funding Rounds: From Pre-Seed to Series C and Beyond | CapBrief',
  description: 'Pre-seed to Series C — what changes at each round, how much equity you should expect to give up, and how UK-specific programmes like SEIS and Innovate UK fit in.',
  openGraph: {
    title: 'Startup Funding Rounds: From Pre-Seed to Series C and Beyond | CapBrief',
    description: 'Pre-seed to Series C — what changes at each round, how much equity you should expect to give up, and how UK-specific programmes like SEIS and Innovate UK fit in.',
    type: 'article',
  },
}

const rounds = [
  {
    name: 'Pre-Seed',
    amount: '£50K – £500K',
    sources: 'Friends and family, angel investors, pre-seed micro-funds',
    focus: 'Validate the idea exists. Usually pre-product or very early MVP.',
    valuation: '£500K – £2M (often SAFE with cap, not priced)',
    dilution: '5–15%',
    metrics: 'Founding team quality, market size, early prototype or waitlist',
    seis: true,
    eis: false,
  },
  {
    name: 'Seed',
    amount: '£500K – £3M',
    sources: 'Seed funds, angel syndicates, some early-stage VCs',
    focus: 'Build the product and prove early market fit.',
    valuation: '£2M – £8M pre-money',
    dilution: '15–25%',
    metrics: 'Early revenue or strong user growth, retention signals, product-market fit indicators',
    seis: true,
    eis: true,
  },
  {
    name: 'Series A',
    amount: '£3M – £15M',
    sources: 'Institutional VCs, some growth equity funds',
    focus: 'Scale what works. Expand team and accelerate customer acquisition.',
    valuation: '£10M – £50M pre-money',
    dilution: '20–30%',
    metrics: 'Revenue (£200K+ ARR typical), demonstrable unit economics, clear path to scale',
    seis: false,
    eis: true,
  },
  {
    name: 'Series B',
    amount: '£15M – £50M',
    sources: 'Growth equity VCs, sometimes strategic investors',
    focus: 'Expand into new markets or verticals. Scale the team significantly.',
    valuation: '£50M – £200M pre-money',
    dilution: '15–25%',
    metrics: 'Strong ARR growth (100%+ YoY typical), positive or clear unit economics, leadership team in place',
    seis: false,
    eis: false,
  },
  {
    name: 'Series C+',
    amount: '£50M+',
    sources: 'Late-stage VCs, growth equity, sovereign wealth funds, crossover funds',
    focus: 'Prepare for IPO or major acquisition. International expansion.',
    valuation: '£200M+',
    dilution: '10–20%',
    metrics: 'Profitability or clear path to it, dominant market position, proven international expansion',
    seis: false,
    eis: false,
  },
]

const dilutionExample = [
  {
    round: 'Founding',
    founders: '100.0%',
    investors: '—',
    optionPool: '—',
    notes: 'Two founders, equal split',
  },
  {
    round: 'Pre-Seed SAFE (£200K at £2M post)',
    founders: '89.5%',
    investors: '10.0% (SAFE)',
    optionPool: '—',
    notes: 'SAFE on fully diluted basis at cap',
  },
  {
    round: 'Seed (£750K at £3M pre)',
    founders: '64.2%',
    investors: '28.1% (seed + SAFE converted)',
    optionPool: '10.0% (created pre-round)',
    notes: 'Option pool created before seed closes — dilutes founders',
  },
  {
    round: 'Series A (£5M at £12M pre)',
    founders: '47.2%',
    investors: '44.7% (all classes)',
    optionPool: '8.1% (remaining ungranted)',
    notes: 'Series A top-up to option pool included',
  },
]

const ukProgrammes = [
  {
    programme: 'Innovate UK Smart Grants',
    type: 'Grant (non-dilutive)',
    amount: '£25K – £2M+',
    when: 'Pre-seed through Series A',
    detail: 'Competitive grants for innovation projects. No equity given up. Cash goes to R&D. Application process takes 3–6 months — apply in parallel with fundraising, not instead of it.',
  },
  {
    programme: 'British Business Bank (Future Fund successor)',
    type: 'Convertible loan / co-investment',
    amount: 'Varies by programme',
    when: 'Seed through Series B',
    detail: 'Multiple BBB programmes including managed funds and regional investment. Check the BBB programme finder — UK geography and sector affect eligibility.',
  },
  {
    programme: 'R&D Tax Credits (RDEC / SME scheme)',
    type: 'Tax relief (non-dilutive)',
    amount: 'Up to 27p per £1 of qualifying R&D spend',
    when: 'Any stage',
    detail: 'If your startup does qualifying R&D, you can claim cash back from HMRC. Loss-making companies can receive a cash payment rather than a tax reduction. Often overlooked by early-stage founders.',
  },
  {
    programme: 'SEIS / EIS',
    type: 'Investor tax relief',
    amount: 'SEIS: up to £250K | EIS: up to £12M',
    when: 'Pre-seed and seed (SEIS); seed through growth (EIS)',
    detail: 'Not a grant to you — a tax incentive for investors. But it effectively reduces the risk of investing in your company, making it easier to raise from UK angels.',
  },
]

const faqs = [
  {
    q: 'Do I need revenue for a seed round?',
    a: 'In the UK in 2024–2025, most seed investors want to see at least some evidence of demand — but not necessarily revenue. Strong pre-launch waitlists, letters of intent from potential customers, or very early paying pilots can substitute for revenue at seed stage. Pure pre-revenue seed rounds are still possible for exceptional teams in large markets, but they are significantly harder than they were in 2021–2022.',
  },
  {
    q: 'How much equity should I give up per round?',
    a: 'A rough target is no more than 20–25% per institutional round, and no more than 10–15% on pre-seed angel/SAFE money. The cumulative dilution across pre-seed, seed, and Series A typically leaves founders with 45–65% at Series A close. If you are significantly below 45% after Series A, you may struggle to attract Series B investors who want founder-led companies with aligned incentives.',
  },
  {
    q: 'What is a typical Series A valuation multiple?',
    a: 'Series A valuations in the UK are typically based on a revenue multiple — commonly 8x–15x ARR for SaaS businesses at growth stage in 2024. High-growth companies with 150%+ YoY ARR growth and strong retention can command higher multiples. Pure pre-revenue Series As are uncommon and typically require a strategic or market-timing argument rather than a financial one.',
  },
  {
    q: 'When should I raise vs bootstrap?',
    a: 'Bootstrapping is underrated for businesses that can become profitable early — services, marketplaces, and niche SaaS. Raise when: (1) the market requires speed and capital to win, (2) you need to hire before you can generate revenue, or (3) SEIS/EIS makes the angel round cheap enough to take without giving up meaningful control. Avoid raising out of desperation or because it feels like validation — the terms of a distressed raise are almost always punishing.',
  },
]

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((faq) => ({
    '@type': 'Question',
    name: faq.q,
    acceptedAnswer: {
      '@type': 'Answer',
      text: faq.a,
    },
  })),
}

export default function StartupFundingRoundsPage() {
  return (
    <div className="min-h-screen bg-[#F5F0E8]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <nav className="max-w-[1200px] mx-auto px-6 py-5 flex items-center justify-between border-b border-[#D4C9B8]">
        <Link href="/" className="font-[family-name:var(--font-heading)] text-xl tracking-[0.1em] text-[#1C1917] uppercase">
          CapBrief
        </Link>
        <div className="flex items-center gap-6">
          <Link href="/auth/login" className="text-sm font-[300] text-[#6B5B4E] hover:text-[#1C1917] transition-colors tracking-wider">
            Login
          </Link>
          <Link
            href="/auth/signup"
            className="text-sm font-[family-name:var(--font-heading)] tracking-[0.08em] uppercase bg-[#C9A84C] text-[#1C1917] px-6 py-2 hover:bg-[#B8930A] transition-colors"
          >
            Start Free
          </Link>
        </div>
      </nav>

      <section className="relative bg-[#1C1917] overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-6 border border-[#C9A84C] opacity-15" />
          <div className="absolute inset-10 border border-[#C9A84C] opacity-10" />
          <div className="absolute top-6 left-6 w-8 h-8 border-t border-l border-[#C9A84C] opacity-50" />
          <div className="absolute top-6 right-6 w-8 h-8 border-t border-r border-[#C9A84C] opacity-50" />
          <div className="absolute bottom-6 left-6 w-8 h-8 border-b border-l border-[#C9A84C] opacity-50" />
          <div className="absolute bottom-6 right-6 w-8 h-8 border-b border-r border-[#C9A84C] opacity-50" />
        </div>
        <div className="max-w-[768px] mx-auto px-6 py-20 relative z-10">
          <p className="font-[family-name:var(--font-mono)] text-xs tracking-[0.2em] uppercase text-[#C9A84C] mb-4">
            <Link href="/" className="hover:text-white transition-colors">CapBrief</Link>
            <span className="mx-2 opacity-40">/</span>
            <Link href="/guides" className="hover:text-white transition-colors">Guides</Link>
            <span className="mx-2 opacity-40">/</span>
            Startup Funding Rounds
          </p>
          <h1 className="font-[family-name:var(--font-heading)] text-4xl font-[700] tracking-[0.05em] uppercase text-white mb-6 leading-tight">
            Startup Funding Rounds: From Pre-Seed to Series C and Beyond
          </h1>
          <p className="text-lg text-white/60 leading-relaxed font-[300] tracking-wide">
            Each funding round has different investors, different metrics, different dilution expectations, and different implications for your cap table. Understanding the full sequence before you raise your first round is the difference between founders who retain control and those who discover too late that they negotiated poorly.
          </p>
        </div>
      </section>

      <article className="max-w-[768px] mx-auto px-6 py-16">

        <section className="mb-14">
          <h2 className="font-[family-name:var(--font-heading)] text-2xl font-[500] tracking-[0.05em] uppercase text-[#1C1917] mb-6">
            The Funding Round Landscape
          </h2>
          <p className="text-[#6B5B4E] text-base font-[300] tracking-wide leading-relaxed mb-8">
            Each round below represents what a typical UK startup encounters. The ranges are 2024 benchmarks — they vary significantly by sector, team, and macroeconomic conditions.
          </p>
          <div className="space-y-6">
            {rounds.map((round) => (
              <div key={round.name} className="border border-[#D4C9B8] bg-[#FDFAF5] p-6">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="font-[family-name:var(--font-heading)] text-lg font-[600] tracking-[0.05em] uppercase text-[#1C1917]">{round.name}</h3>
                  <div className="flex items-center gap-2 shrink-0 ml-4">
                    {round.seis && (
                      <span className="font-[family-name:var(--font-mono)] text-[9px] tracking-[0.15em] uppercase text-[#059669] border border-[#059669] px-2 py-0.5">SEIS</span>
                    )}
                    {round.eis && (
                      <span className="font-[family-name:var(--font-mono)] text-[9px] tracking-[0.15em] uppercase text-[#2563EB] border border-[#2563EB] px-2 py-0.5">EIS</span>
                    )}
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4 text-xs mb-4">
                  <div>
                    <p className="font-[family-name:var(--font-mono)] text-[10px] tracking-[0.15em] uppercase text-[#C9A84C] mb-1">Typical Amount</p>
                    <p className="text-[#1C1917] font-[500]">{round.amount}</p>
                  </div>
                  <div>
                    <p className="font-[family-name:var(--font-mono)] text-[10px] tracking-[0.15em] uppercase text-[#C9A84C] mb-1">Typical Dilution</p>
                    <p className="text-[#1C1917] font-[500]">{round.dilution}</p>
                  </div>
                  <div>
                    <p className="font-[family-name:var(--font-mono)] text-[10px] tracking-[0.15em] uppercase text-[#C9A84C] mb-1">Valuation Range</p>
                    <p className="text-[#6B5B4E] font-[300]">{round.valuation}</p>
                  </div>
                  <div>
                    <p className="font-[family-name:var(--font-mono)] text-[10px] tracking-[0.15em] uppercase text-[#C9A84C] mb-1">Lead Investors</p>
                    <p className="text-[#6B5B4E] font-[300]">{round.sources}</p>
                  </div>
                </div>
                <div className="mb-3">
                  <p className="font-[family-name:var(--font-mono)] text-[10px] tracking-[0.15em] uppercase text-[#C9A84C] mb-1">Focus</p>
                  <p className="text-xs text-[#6B5B4E] font-[300] leading-relaxed">{round.focus}</p>
                </div>
                <div>
                  <p className="font-[family-name:var(--font-mono)] text-[10px] tracking-[0.15em] uppercase text-[#C9A84C] mb-1">What Investors Look For</p>
                  <p className="text-xs text-[#6B5B4E] font-[300] leading-relaxed">{round.metrics}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-14">
          <h2 className="font-[family-name:var(--font-heading)] text-2xl font-[500] tracking-[0.05em] uppercase text-[#1C1917] mb-6">
            Worked Dilution Example: Pre-Seed Through Series A
          </h2>
          <p className="text-[#6B5B4E] text-base font-[300] tracking-wide leading-relaxed mb-8">
            The table below shows how founder ownership erodes across a typical three-round journey. These numbers assume market-rate terms — each round is negotiable, and better terms compound significantly.
          </p>
          <div className="border border-[#D4C9B8] overflow-hidden">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-[#1C1917]">
                  <th className="text-left py-3 px-4 font-[family-name:var(--font-heading)] text-[10px] tracking-[0.1em] uppercase text-[#C9A84C]">Round</th>
                  <th className="text-left py-3 px-4 font-[family-name:var(--font-heading)] text-[10px] tracking-[0.1em] uppercase text-[#C9A84C]">Founders</th>
                  <th className="text-left py-3 px-4 font-[family-name:var(--font-heading)] text-[10px] tracking-[0.1em] uppercase text-[#C9A84C]">Investors</th>
                  <th className="text-left py-3 px-4 font-[family-name:var(--font-heading)] text-[10px] tracking-[0.1em] uppercase text-[#C9A84C]">Option Pool</th>
                </tr>
              </thead>
              <tbody>
                {dilutionExample.map((row, i) => (
                  <tr key={row.round} className={`border-t border-[#D4C9B8] ${i % 2 === 0 ? 'bg-[#FDFAF5]' : 'bg-[#F5F0E8]'}`}>
                    <td className="py-3 px-4 text-xs text-[#1C1917] font-[300] leading-relaxed">{row.round}</td>
                    <td className="py-3 px-4 font-[family-name:var(--font-mono)] text-xs text-[#1C1917] font-[600]">{row.founders}</td>
                    <td className="py-3 px-4 font-[family-name:var(--font-mono)] text-xs text-[#C9A84C]">{row.investors}</td>
                    <td className="py-3 px-4 font-[family-name:var(--font-mono)] text-xs text-[#6B5B4E]">{row.optionPool}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-[#6B5B4E] font-[300] tracking-wide mt-3 italic">
            Note: Option pool created before seed round closes — this is the option pool shuffle, and it dilutes founders not investors.
          </p>
        </section>

        <section className="mb-14">
          <h2 className="font-[family-name:var(--font-heading)] text-2xl font-[500] tracking-[0.05em] uppercase text-[#1C1917] mb-6">
            UK-Specific Programmes
          </h2>
          <p className="text-[#6B5B4E] text-base font-[300] tracking-wide leading-relaxed mb-8">
            UK founders have access to non-dilutive and tax-advantaged funding that US founders do not. Use them. They do not replace equity fundraising — they reduce how much you need to raise and therefore how much you dilute.
          </p>
          <div className="space-y-4">
            {ukProgrammes.map((prog) => (
              <div key={prog.programme} className="border border-[#D4C9B8] bg-[#FDFAF5] p-6">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="font-[family-name:var(--font-heading)] text-sm font-[500] tracking-[0.05em] uppercase text-[#1C1917]">{prog.programme}</h3>
                  <span className="font-[family-name:var(--font-mono)] text-[9px] tracking-[0.15em] uppercase text-[#059669] border border-[#059669] px-2 py-0.5 shrink-0 ml-4">{prog.type}</span>
                </div>
                <div className="grid grid-cols-2 gap-4 text-xs mb-3">
                  <div>
                    <p className="font-[family-name:var(--font-mono)] text-[10px] tracking-[0.15em] uppercase text-[#C9A84C] mb-1">Amount</p>
                    <p className="text-[#6B5B4E] font-[300]">{prog.amount}</p>
                  </div>
                  <div>
                    <p className="font-[family-name:var(--font-mono)] text-[10px] tracking-[0.15em] uppercase text-[#C9A84C] mb-1">Best Used At</p>
                    <p className="text-[#6B5B4E] font-[300]">{prog.when}</p>
                  </div>
                </div>
                <p className="text-xs text-[#6B5B4E] font-[300] leading-relaxed">{prog.detail}</p>
              </div>
            ))}
          </div>
        </section>

        <div className="bg-[#1C1917] border border-[#C9A84C] p-8 mb-14 relative overflow-hidden">
          <div className="absolute top-3 left-3 w-5 h-5 border-t border-l border-[#C9A84C] opacity-40" />
          <div className="absolute top-3 right-3 w-5 h-5 border-t border-r border-[#C9A84C] opacity-40" />
          <div className="absolute bottom-3 left-3 w-5 h-5 border-b border-l border-[#C9A84C] opacity-40" />
          <div className="absolute bottom-3 right-3 w-5 h-5 border-b border-r border-[#C9A84C] opacity-40" />
          <p className="font-[family-name:var(--font-mono)] text-xs tracking-[0.2em] uppercase text-[#C9A84C] mb-3">CapBrief</p>
          <h3 className="font-[family-name:var(--font-heading)] text-xl font-[500] tracking-[0.05em] uppercase text-white mb-3">
            Model Multi-Round Dilution from Your Current Cap Table
          </h3>
          <p className="text-white/60 text-sm font-[300] tracking-wide leading-relaxed mb-6">
            Upload your current cap table and CapBrief models what subsequent rounds will do to founder ownership. See your Series A position before you raise your seed round — and negotiate accordingly.
          </p>
          <Link
            href="/auth/signup"
            className="inline-block font-[family-name:var(--font-heading)] text-sm tracking-[0.1em] uppercase bg-[#C9A84C] text-[#1C1917] px-8 py-4 hover:bg-[#B8930A] transition-colors"
          >
            Try CapBrief Free →
          </Link>
        </div>

        <section className="mb-14">
          <h2 className="font-[family-name:var(--font-heading)] text-2xl font-[500] tracking-[0.05em] uppercase text-[#1C1917] mb-8">
            Frequently Asked
          </h2>
          <div className="space-y-8">
            {faqs.map((faq) => (
              <div key={faq.q}>
                <div className="border-l-2 border-[#C9A84C] pl-4 mb-2">
                  <h3 className="font-[family-name:var(--font-heading)] text-sm font-[500] tracking-[0.04em] uppercase text-[#1C1917]">{faq.q}</h3>
                </div>
                <p className="text-sm text-[#6B5B4E] font-[300] tracking-wide leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </section>

        <div className="bg-[#1C1917] border border-[#C9A84C] p-8 relative overflow-hidden">
          <div className="absolute top-3 left-3 w-5 h-5 border-t border-l border-[#C9A84C] opacity-40" />
          <div className="absolute top-3 right-3 w-5 h-5 border-t border-r border-[#C9A84C] opacity-40" />
          <div className="absolute bottom-3 left-3 w-5 h-5 border-b border-l border-[#C9A84C] opacity-40" />
          <div className="absolute bottom-3 right-3 w-5 h-5 border-b border-r border-[#C9A84C] opacity-40" />
          <p className="font-[family-name:var(--font-mono)] text-xs tracking-[0.2em] uppercase text-[#C9A84C] mb-3">Plan Ahead</p>
          <h3 className="font-[family-name:var(--font-heading)] text-xl font-[500] tracking-[0.05em] uppercase text-white mb-3">
            See Every Round Before You Raise
          </h3>
          <p className="text-white/60 text-sm font-[300] tracking-wide leading-relaxed mb-6">
            CapBrief turns your cap table into a multi-round dilution model. Know exactly where you stand before you talk to investors — and what each round will cost you in ownership.
          </p>
          <Link
            href="/auth/signup"
            className="inline-block font-[family-name:var(--font-heading)] text-sm tracking-[0.1em] uppercase bg-[#C9A84C] text-[#1C1917] px-8 py-4 hover:bg-[#B8930A] transition-colors"
          >
            Try CapBrief Free →
          </Link>
        </div>
      </article>

      <footer className="max-w-[1200px] mx-auto px-6 py-10 border-t border-[#D4C9B8]">
        <div className="flex items-center justify-between">
          <span className="font-[family-name:var(--font-heading)] text-base tracking-[0.1em] uppercase text-[#6B5B4E]">CapBrief</span>
          <div className="flex items-center gap-6 text-sm text-[#6B5B4E] font-[300] tracking-wide">
            <Link href="/auth/login" className="hover:text-[#1C1917] transition-colors">Login</Link>
            <Link href="/privacy" className="hover:text-[#1C1917] transition-colors">Privacy</Link>
            <Link href="/terms" className="hover:text-[#1C1917] transition-colors">Terms</Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
