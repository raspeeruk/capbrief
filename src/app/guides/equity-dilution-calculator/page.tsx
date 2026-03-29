import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Equity Dilution Calculator: How Much Will Your Next Round Dilute You? | CapBrief',
  description: 'Understand equity dilution before you sign a term sheet. Pre-money vs post-money, anti-dilution provisions, pro-rata rights, and real founder dilution examples with numbers.',
  openGraph: {
    title: 'Equity Dilution Calculator: How Much Will Your Next Round Dilute You?',
    description: 'Model your next funding round dilution. Pre-money, post-money, option pool shuffle, anti-dilution — explained with real numbers.',
    type: 'article',
  },
}

export default function EquityDilutionCalculatorPage() {
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
            Equity Dilution Calculator: How Much Will Your Next Round Dilute You?
          </h1>
          <p className="text-lg text-white/60 leading-relaxed max-w-[560px] font-[300] tracking-wide">
            The dilution formula, pre/post-money mechanics, option pool shuffle, anti-dilution provisions, and pro-rata rights — with real numbers so you can model your own round.
          </p>
        </div>
      </section>

      {/* Article body */}
      <article className="max-w-[800px] mx-auto px-6 py-16">

        {/* The formula */}
        <section className="mb-12">
          <h2 className="font-[family-name:var(--font-heading)] text-2xl font-[500] tracking-[0.05em] uppercase text-[#1C1917] mb-4">
            The Dilution Formula
          </h2>
          <p className="text-[#3D2E22] font-[300] tracking-wide leading-relaxed mb-4">
            Dilution happens whenever new shares are issued. Your existing percentage shrinks because the denominator — total shares outstanding — grows. The formula is straightforward:
          </p>

          <div className="bg-[#1C1917] border border-[#C9A84C]/30 p-6 mb-6">
            <p className="font-[family-name:var(--font-mono)] text-xs tracking-[0.15em] uppercase text-[#C9A84C] mb-3">The Formula</p>
            <p className="font-[family-name:var(--font-mono)] text-white text-sm leading-relaxed">
              New ownership % = Your shares ÷ (Existing shares + New shares issued)
            </p>
            <div className="mt-4 pt-4 border-t border-[#C9A84C]/20">
              <p className="font-[family-name:var(--font-mono)] text-xs tracking-[0.15em] uppercase text-[#C9A84C] mb-2">Dilution % =</p>
              <p className="font-[family-name:var(--font-mono)] text-white/70 text-sm">
                1 − (Your shares ÷ Post-round total shares)
              </p>
            </div>
          </div>

          <p className="text-[#3D2E22] font-[300] tracking-wide leading-relaxed">
            The key insight: dilution is not inherently bad. A smaller slice of a much larger pie can be worth far more. A founder who raises a £10M Series A at a £40M valuation sees their 60% stake dilute to around 48% — but the company is now worth significantly more per share.
          </p>
        </section>

        {/* Pre/post money */}
        <section className="mb-12">
          <h2 className="font-[family-name:var(--font-heading)] text-2xl font-[500] tracking-[0.05em] uppercase text-[#1C1917] mb-4">
            Pre-Money vs. Post-Money: Why It Matters
          </h2>
          <p className="text-[#3D2E22] font-[300] tracking-wide leading-relaxed mb-4">
            The difference between pre-money and post-money valuation is the investment amount itself. This distinction directly determines how much of the company an investor receives.
          </p>

          <div className="border border-[#D4C9B8] overflow-hidden mb-6">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-[#1C1917]">
                  <th className="text-left py-3 px-4 font-[family-name:var(--font-heading)] text-[#C9A84C] text-xs tracking-[0.06em] uppercase font-[500]">Scenario</th>
                  <th className="text-left py-3 px-4 font-[family-name:var(--font-heading)] text-[#C9A84C] text-xs tracking-[0.06em] uppercase font-[500]">Pre-Money</th>
                  <th className="text-left py-3 px-4 font-[family-name:var(--font-heading)] text-[#C9A84C] text-xs tracking-[0.06em] uppercase font-[500]">Investment</th>
                  <th className="text-left py-3 px-4 font-[family-name:var(--font-heading)] text-[#C9A84C] text-xs tracking-[0.06em] uppercase font-[500]">Post-Money</th>
                  <th className="text-left py-3 px-4 font-[family-name:var(--font-heading)] text-[#C9A84C] text-xs tracking-[0.06em] uppercase font-[500]">Investor %</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Seed Round', '£3,000,000', '£500,000', '£3,500,000', '14.3%'],
                  ['Series A', '£8,000,000', '£2,000,000', '£10,000,000', '20.0%'],
                  ['Series B', '£20,000,000', '£5,000,000', '£25,000,000', '20.0%'],
                ].map(([stage, pre, inv, post, pct], i) => (
                  <tr key={stage} className={`border-t border-[#D4C9B8] ${i % 2 === 0 ? 'bg-white/20' : ''}`}>
                    <td className="py-2.5 px-4 font-[family-name:var(--font-mono)] text-[#1C1917] text-xs font-[500]">{stage}</td>
                    <td className="py-2.5 px-4 font-[family-name:var(--font-mono)] text-[#6B5B4E] text-xs">{pre}</td>
                    <td className="py-2.5 px-4 font-[family-name:var(--font-mono)] text-[#C9A84C] text-xs font-[500]">{inv}</td>
                    <td className="py-2.5 px-4 font-[family-name:var(--font-mono)] text-[#6B5B4E] text-xs">{post}</td>
                    <td className="py-2.5 px-4 font-[family-name:var(--font-mono)] text-[#1C1917] text-xs font-[500]">{pct}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="text-[#3D2E22] font-[300] tracking-wide leading-relaxed">
            When a VC says they want &ldquo;20% of the company&rdquo; at a Series A, they mean 20% of the post-money cap table. The pre-money valuation you negotiate directly determines how many new shares are issued and how much you dilute.
          </p>
        </section>

        {/* Option pool shuffle */}
        <section className="mb-12">
          <h2 className="font-[family-name:var(--font-heading)] text-2xl font-[500] tracking-[0.05em] uppercase text-[#1C1917] mb-4">
            The Option Pool Shuffle
          </h2>
          <p className="text-[#3D2E22] font-[300] tracking-wide leading-relaxed mb-4">
            One of the most misunderstood sources of dilution is the option pool expansion that investors typically require before closing a round. VCs will ask for a 10–15% unissued option pool to exist <em>before</em> the money goes in — meaning the pool is created from the pre-money shares, diluting founders rather than investors.
          </p>
          <div className="bg-[#1C1917] border border-[#C9A84C]/30 p-6 mb-4">
            <p className="font-[family-name:var(--font-mono)] text-xs tracking-[0.15em] uppercase text-[#C9A84C] mb-3">The Shuffle in Practice</p>
            <p className="text-white/70 text-sm font-[300] leading-relaxed">
              Company has 8M shares. VC wants 20% at £10M post-money with a 15% option pool. The option pool must be created <em>before</em> investment. So: 8M existing + 1.4M new options = 9.4M pre-investment shares. VC buys 20% of post-money = 2.35M new shares for £2M. Founders hold 8M shares out of 11.75M total = <span className="text-[#C9A84C] font-[500]">68%</span>, not 80%.
            </p>
          </div>
          <p className="text-[#3D2E22] font-[300] tracking-wide leading-relaxed">
            Counter: negotiate the option pool size based on your actual 18-month hiring plan. VCs often ask for 15–20% when 8–10% would cover realistic hires. Every unnecessary option pool share comes directly from founders.
          </p>
        </section>

        {/* Founder vs investor dilution */}
        <section className="mb-12">
          <h2 className="font-[family-name:var(--font-heading)] text-2xl font-[500] tracking-[0.05em] uppercase text-[#1C1917] mb-4">
            Founder vs. Investor Dilution
          </h2>
          <p className="text-[#3D2E22] font-[300] tracking-wide leading-relaxed mb-4">
            Not all shareholders dilute equally. Investors with preferred shares often carry protections that limit their economic dilution even when new shares are issued.
          </p>

          <h3 className="font-[family-name:var(--font-heading)] text-lg font-[500] tracking-[0.04em] uppercase text-[#1C1917] mb-3">
            Anti-Dilution Provisions
          </h3>
          <p className="text-[#3D2E22] font-[300] tracking-wide leading-relaxed mb-4">
            Anti-dilution provisions protect investors if you raise a down round (new shares priced lower than previous rounds). The two main types:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border border-[#D4C9B8] mb-6">
            <div className="p-5 border-r border-[#D4C9B8]">
              <h4 className="font-[family-name:var(--font-heading)] text-sm font-[500] tracking-[0.05em] uppercase text-[#1C1917] mb-2">Full Ratchet</h4>
              <p className="text-sm font-[300] text-[#3D2E22] leading-relaxed">Investor&apos;s conversion price resets to the new, lower price. Most investor-friendly. Rare in UK/EU deals. Can wipe out founder equity in a severe down round.</p>
            </div>
            <div className="p-5">
              <h4 className="font-[family-name:var(--font-heading)] text-sm font-[500] tracking-[0.05em] uppercase text-[#1C1917] mb-2">Weighted Average</h4>
              <p className="text-sm font-[300] text-[#3D2E22] leading-relaxed">Conversion price adjusts based on how many new shares are issued at the lower price. More balanced. Standard in most UK VC term sheets. Broad-based (all dilutive securities) vs narrow-based (only preferred) — always push for broad-based.</p>
            </div>
          </div>

          <h3 className="font-[family-name:var(--font-heading)] text-lg font-[500] tracking-[0.04em] uppercase text-[#1C1917] mb-3">
            Pro-Rata Rights
          </h3>
          <p className="text-[#3D2E22] font-[300] tracking-wide leading-relaxed">
            Pro-rata rights allow existing investors to participate in future rounds to maintain their ownership percentage. If your seed investor holds 15% and has pro-rata rights at Series A, they can invest enough to stay at 15% post-round. This limits dilution for investors — but not for founders, unless founders also negotiate pro-rata rights (uncommon but possible).
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
              Model Your Actual Round
            </p>
            <h2 className="font-[family-name:var(--font-heading)] text-2xl font-[500] tracking-[0.04em] uppercase text-white mb-4">
              Upload Your Cap Table. See Dilution Instantly.
            </h2>
            <p className="text-white/60 font-[300] tracking-wide mb-8 max-w-[480px]">
              CapBrief calculates your exact dilution across every funding round and generates a board-ready PDF report showing ownership waterfalls, fully-diluted percentages, and round summaries.
            </p>
            <a
              href="https://roundbrief.com/auth/signup"
              className="inline-block font-[family-name:var(--font-heading)] text-sm tracking-[0.1em] uppercase bg-[#C9A84C] text-[#1C1917] px-8 py-4 hover:bg-[#B8930A] transition-colors"
            >
              Calculate My Dilution Free
            </a>
          </div>
        </section>

        {/* Internal links */}
        <section className="mt-12 pt-8 border-t border-[#D4C9B8]">
          <p className="font-[family-name:var(--font-heading)] text-sm tracking-[0.08em] uppercase text-[#6B5B4E] mb-4">Continue Reading</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { href: '/guides/cap-table-template', label: 'Cap Table Template', desc: 'Free template with all columns' },
              { href: '/guides/cap-table-software', label: 'Cap Table Software', desc: 'Carta vs Pulley vs CapBrief' },
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
