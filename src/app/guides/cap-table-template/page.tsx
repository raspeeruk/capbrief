import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Free Cap Table Template for Startups (+ How to Use It) | CapBrief',
  description: 'Download a free cap table template for startups. Includes founder shares, investor rounds, SAFE notes, ESOP pool, vesting schedules, and dilution tracking. Practical examples included.',
  openGraph: {
    title: 'Free Cap Table Template for Startups (+ How to Use It)',
    description: 'Everything a startup needs in a cap table: columns, SAFE notes, dilution examples, and when to move beyond spreadsheets.',
    type: 'article',
  },
}

export default function CapTableTemplatePage() {
  return (
    <div className="min-h-screen bg-[#F5F0E8]">
      {/* Nav */}
      <nav className="max-w-[1200px] mx-auto px-6 py-5 flex items-center justify-between border-b border-[#D4C9B8]">
        <Link href="/" className="font-[family-name:var(--font-heading)] text-xl font-700 tracking-[0.1em] text-[#1C1917] uppercase">
          CapBrief
        </Link>
        <div className="flex items-center gap-6">
          <Link href="/guides/equity-dilution-calculator" className="text-sm font-[300] text-[#6B5B4E] hover:text-[#1C1917] transition-colors tracking-wider hidden md:block">
            Dilution Calculator
          </Link>
          <Link href="/guides/cap-table-software" className="text-sm font-[300] text-[#6B5B4E] hover:text-[#1C1917] transition-colors tracking-wider hidden md:block">
            Software Guide
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
            Founder Guide
          </p>
          <h1 className="font-[family-name:var(--font-heading)] text-4xl md:text-5xl font-[500] tracking-[0.04em] uppercase text-white mb-6 max-w-[760px] leading-tight">
            Free Cap Table Template for Startups (+ How to Use It)
          </h1>
          <p className="text-lg text-white/60 leading-relaxed max-w-[560px] font-[300] tracking-wide">
            Every funded startup needs a cap table. Here is what to put in it, how to handle SAFEs and option pools, and when spreadsheets stop being enough.
          </p>
        </div>
      </section>

      {/* Article body */}
      <article className="max-w-[800px] mx-auto px-6 py-16">

        {/* What is a cap table */}
        <section className="mb-12">
          <h2 className="font-[family-name:var(--font-heading)] text-2xl font-[500] tracking-[0.05em] uppercase text-[#1C1917] mb-4">
            What Is a Cap Table?
          </h2>
          <p className="text-[#3D2E22] font-[300] tracking-wide leading-relaxed mb-4">
            A capitalisation table — cap table — is the definitive record of who owns what in your company. It lists every shareholder, the number and class of shares they hold, the price they paid, and the percentage of the company they represent on both an undiluted and fully-diluted basis.
          </p>
          <p className="text-[#3D2E22] font-[300] tracking-wide leading-relaxed mb-4">
            Investors will ask to see it before any term sheet is signed. Your lawyers will need it before any fundraise closes. Your board will want it at every quarterly meeting. Getting it right from day one saves you from expensive legal corrections later.
          </p>
          <p className="text-[#3D2E22] font-[300] tracking-wide leading-relaxed">
            A clean cap table also signals founder competence. VCs see hundreds of pitches. Founders who show up with a clear, accurate ownership picture get further faster.
          </p>
        </section>

        {/* Columns */}
        <section className="mb-12">
          <h2 className="font-[family-name:var(--font-heading)] text-2xl font-[500] tracking-[0.05em] uppercase text-[#1C1917] mb-4">
            Essential Columns for Every Cap Table
          </h2>
          <p className="text-[#3D2E22] font-[300] tracking-wide leading-relaxed mb-6">
            Whether you are using Excel, Google Sheets, or dedicated software, every cap table needs these columns:
          </p>

          <div className="border border-[#D4C9B8] overflow-hidden mb-6">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-[#1C1917]">
                  <th className="text-left py-3 px-4 font-[family-name:var(--font-heading)] text-[#C9A84C] text-xs tracking-[0.08em] uppercase font-[500]">Column</th>
                  <th className="text-left py-3 px-4 font-[family-name:var(--font-heading)] text-[#C9A84C] text-xs tracking-[0.08em] uppercase font-[500]">What It Records</th>
                  <th className="text-left py-3 px-4 font-[family-name:var(--font-heading)] text-[#C9A84C] text-xs tracking-[0.08em] uppercase font-[500]">Why It Matters</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Shareholder Name', 'Legal name of person or entity', 'Legal compliance; must match Companies House / Delaware filings'],
                  ['Share Class', 'Ordinary, Preferred A, Preferred B, Options', 'Different classes carry different liquidation preferences and voting rights'],
                  ['Shares Held', 'Number of shares issued', 'The core unit of ownership'],
                  ['Issue Price (£/$)', 'Price paid per share at issue', 'Determines cost basis; critical for tax purposes (EMI, 409A)'],
                  ['% Ownership (Undiluted)', 'Shares ÷ total issued shares', 'Current snapshot ownership'],
                  ['% Ownership (Fully Diluted)', 'Shares ÷ total shares including option pool', 'True economic exposure after all conversions'],
                  ['Vesting Start', 'Date vesting schedule begins', 'Required for all employee / founder share grants'],
                  ['Cliff (months)', 'Months before first vest', 'Typically 12 months; protects against early departures'],
                  ['Vest Period (months)', 'Total vesting duration', 'Typically 48 months; standard 4-year schedule'],
                  ['Round / Event', 'Which funding round issued these shares', 'Links each grant to a specific fundraise or incorporation event'],
                ].map(([col, what, why], i) => (
                  <tr key={col} className={`border-t border-[#D4C9B8] ${i % 2 === 0 ? 'bg-white/20' : ''}`}>
                    <td className="py-2.5 px-4 font-[family-name:var(--font-mono)] text-[#1C1917] text-xs font-[500]">{col}</td>
                    <td className="py-2.5 px-4 text-[#3D2E22] font-[300] text-xs">{what}</td>
                    <td className="py-2.5 px-4 text-[#6B5B4E] font-[300] text-xs">{why}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* SAFE notes */}
        <section className="mb-12">
          <h2 className="font-[family-name:var(--font-heading)] text-2xl font-[500] tracking-[0.05em] uppercase text-[#1C1917] mb-4">
            SAFE Notes vs. Equity: How to Record Both
          </h2>
          <p className="text-[#3D2E22] font-[300] tracking-wide leading-relaxed mb-4">
            SAFE (Simple Agreement for Future Equity) notes are promises to issue shares at a future priced round. They are not yet equity, but they will become equity — which means they dilute existing shareholders at conversion and must appear in your fully-diluted share count.
          </p>

          <h3 className="font-[family-name:var(--font-heading)] text-lg font-[500] tracking-[0.04em] uppercase text-[#1C1917] mb-3 mt-6">
            Recording a SAFE in Your Cap Table
          </h3>
          <p className="text-[#3D2E22] font-[300] tracking-wide leading-relaxed mb-4">
            Add a separate section in your cap table for unconverted SAFEs. Record: investor name, investment amount, valuation cap, discount rate, and the MFN (most favoured nation) status. At your next priced round, convert each SAFE using whichever gives the investor more shares: the cap or the discount.
          </p>

          <div className="bg-[#1C1917] border border-[#C9A84C]/30 p-6 mb-6">
            <p className="font-[family-name:var(--font-mono)] text-xs tracking-[0.15em] uppercase text-[#C9A84C] mb-3">Example</p>
            <p className="text-white/70 text-sm font-[300] leading-relaxed">
              Investor puts in <span className="text-[#C9A84C] font-[500]">£100,000</span> on a SAFE with a <span className="text-[#C9A84C] font-[500]">£3M valuation cap</span> and <span className="text-[#C9A84C] font-[500]">20% discount</span>. Your Series A prices at £5M pre-money. The cap gives them shares at £3M pricing; the discount gives them shares at £4M pricing (£5M × 0.8). The cap wins. They receive shares as if they invested at a £3M valuation — more shares, more ownership.
            </p>
          </div>

          <h3 className="font-[family-name:var(--font-heading)] text-lg font-[500] tracking-[0.04em] uppercase text-[#1C1917] mb-3">
            Fully Diluted Share Count
          </h3>
          <p className="text-[#3D2E22] font-[300] tracking-wide leading-relaxed">
            Your fully-diluted share count must include: issued shares + unissued option pool + unconverted SAFEs (modelled at cap conversion). This is the number investors use when they talk about your valuation. Always present ownership percentages on a fully-diluted basis in any investor communication.
          </p>
        </section>

        {/* Dilution example */}
        <section className="mb-12">
          <h2 className="font-[family-name:var(--font-heading)] text-2xl font-[500] tracking-[0.05em] uppercase text-[#1C1917] mb-4">
            A Real Dilution Example
          </h2>
          <p className="text-[#3D2E22] font-[300] tracking-wide leading-relaxed mb-6">
            Two founders incorporate with 10,000,000 shares split 60/40. They raise a seed round, create an option pool, and Series A follows. Watch what happens to founder ownership at each stage:
          </p>

          <div className="border border-[#D4C9B8] overflow-hidden">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-[#1C1917]">
                  {['Stage', 'Founder A', 'Founder B', 'Investor', 'ESOP', 'Total Shares'].map(h => (
                    <th key={h} className="text-left py-3 px-4 font-[family-name:var(--font-heading)] text-[#C9A84C] text-xs tracking-[0.06em] uppercase font-[500]">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[
                  ['Incorporation', '60% (6M)', '40% (4M)', '—', '—', '10,000,000'],
                  ['Seed (10% ESOP + 15% investor)', '51%', '34%', '15%', '10% (reserved)', '11,765,000'],
                  ['Series A (25% new shares)', '38.3%', '25.5%', '26.3%', '10%', '15,686,000'],
                ].map(([stage, ...cells], i) => (
                  <tr key={stage} className={`border-t border-[#D4C9B8] ${i % 2 === 0 ? 'bg-white/20' : ''}`}>
                    <td className="py-2.5 px-4 font-[family-name:var(--font-mono)] text-[#1C1917] text-xs font-[500]">{stage}</td>
                    {cells.map((cell, j) => (
                      <td key={j} className={`py-2.5 px-4 font-[family-name:var(--font-mono)] text-xs ${j < 2 ? 'text-[#C9A84C] font-[500]' : 'text-[#6B5B4E]'}`}>{cell}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-[#6B5B4E] text-xs font-[300] mt-3">
            Founder A went from 60% to 38.3% — diluted by 36%. This is normal and expected. The company is worth more. See our <Link href="/guides/equity-dilution-calculator" className="text-[#C9A84C] hover:underline">equity dilution calculator</Link> for your own numbers.
          </p>
        </section>

        {/* Excel vs software */}
        <section className="mb-12">
          <h2 className="font-[family-name:var(--font-heading)] text-2xl font-[500] tracking-[0.05em] uppercase text-[#1C1917] mb-4">
            Excel vs. Cap Table Software: When to Switch
          </h2>
          <p className="text-[#3D2E22] font-[300] tracking-wide leading-relaxed mb-4">
            A Google Sheet is fine at incorporation. It becomes a liability around your first external raise. Here is the honest breakdown:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border border-[#D4C9B8]">
            <div className="p-6 border-r border-[#D4C9B8]">
              <h3 className="font-[family-name:var(--font-heading)] text-base font-[500] tracking-[0.05em] uppercase text-[#1C1917] mb-3">
                Spreadsheet Works When...
              </h3>
              <ul className="space-y-2">
                {[
                  'Fewer than 20 shareholders',
                  'No complex share classes',
                  'No unconverted SAFEs or convertibles',
                  'Pre-seed, bootstrapped, or friends-and-family round',
                  'No formal board with fiduciary obligations',
                ].map(item => (
                  <li key={item} className="flex items-start gap-2 text-sm font-[300] text-[#3D2E22]">
                    <span className="text-[#C9A84C] font-[family-name:var(--font-mono)] mt-0.5">+</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="p-6">
              <h3 className="font-[family-name:var(--font-heading)] text-base font-[500] tracking-[0.05em] uppercase text-[#1C1917] mb-3">
                Switch to Software When...
              </h3>
              <ul className="space-y-2">
                {[
                  'Closing a priced institutional round',
                  'Issuing options to employees (EMI / 409A)',
                  'Multiple share classes with different rights',
                  'Investors request audit-ready records',
                  'Planning a secondary sale or exit modelling',
                ].map(item => (
                  <li key={item} className="flex items-start gap-2 text-sm font-[300] text-[#3D2E22]">
                    <span className="text-[#C9A84C] font-[family-name:var(--font-mono)] mt-0.5">→</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <p className="text-[#6B5B4E] text-sm font-[300] mt-4">
            See how the main options compare: <Link href="/guides/cap-table-software" className="text-[#C9A84C] hover:underline">Carta vs Pulley vs CapBrief — full software comparison</Link>.
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
              Skip the Template Maintenance
            </p>
            <h2 className="font-[family-name:var(--font-heading)] text-2xl font-[500] tracking-[0.04em] uppercase text-white mb-4">
              Upload Your CSV. Get an Investor-Ready Report.
            </h2>
            <p className="text-white/60 font-[300] tracking-wide mb-8 max-w-[480px]">
              CapBrief reads any cap table CSV, infers missing data, calculates dilution, and generates a polished PDF report — no reformatting required.
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
              { href: '/guides/equity-dilution-calculator', label: 'Equity Dilution Calculator', desc: 'Model your next round dilution' },
              { href: '/guides/cap-table-software', label: 'Cap Table Software Guide', desc: 'Carta vs Pulley vs CapBrief' },
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
