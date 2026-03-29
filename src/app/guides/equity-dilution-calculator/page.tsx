import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Equity Dilution Calculator: How to Calculate Dilution in Funding Rounds | CapBrief',
  description: 'Every time you raise a round, your ownership percentage shrinks. Here is exactly how dilution is calculated — with worked examples, a dilution formula, and the hidden traps founders miss.',
  openGraph: {
    title: 'Equity Dilution Calculator: How to Calculate Dilution in Funding Rounds | CapBrief',
    description: 'Every time you raise a round, your ownership percentage shrinks. Here is exactly how dilution is calculated — with worked examples, a dilution formula, and the hidden traps founders miss.',
    type: 'article',
  },
}

const cumulativeRounds = [
  {
    round: 'Pre-seed (Founding)',
    newShares: '—',
    totalShares: '10,000,000',
    founderShares: '10,000,000',
    founderPct: '100.00%',
    founderFD: '100.00%',
    notes: 'Founding shares only',
  },
  {
    round: 'Pre-seed (SAFE)',
    newShares: '~1,111,111',
    totalShares: '11,111,111',
    founderShares: '10,000,000',
    founderPct: '90.00%',
    founderFD: '90.00%',
    notes: '$500K SAFE at $5M cap, converted at 1:1',
  },
  {
    round: 'Seed',
    newShares: '2,000,000',
    totalShares: '13,111,111',
    founderShares: '10,000,000',
    founderPct: '76.26%',
    founderFD: '74.12%',
    notes: '15% new option pool added pre-close',
  },
  {
    round: 'Series A',
    newShares: '4,000,000',
    totalShares: '17,111,111',
    founderShares: '10,000,000',
    founderPct: '58.44%',
    founderFD: '55.21%',
    notes: 'Typical 20-25% VC ownership at Series A',
  },
]

const dilutionByStage = [
  { stage: 'Angel / Pre-seed', typical: '5–15%', notes: 'Single angel or small syndicate' },
  { stage: 'Seed', typical: '10–20%', notes: 'Including option pool expansion' },
  { stage: 'Series A', typical: '15–25%', notes: 'Lead VC takes meaningful ownership' },
  { stage: 'Series B', typical: '10–20%', notes: 'Smaller dilution as valuation rises' },
  { stage: 'Growth rounds', typical: '5–15%', notes: 'Late-stage, higher pre-money' },
]

const faqs = [
  {
    q: 'Is 20% dilution per round normal?',
    a: 'At seed and Series A, yes — 15–25% dilution per round is typical for a meaningful round from institutional investors. Pre-seed angel rounds tend to be smaller (5–15%). What matters more than the percentage is the valuation: 20% dilution at a £10M pre-money is very different from 20% at a £2M pre-money.',
  },
  {
    q: 'What is the difference between dilution and down rounds?',
    a: 'Dilution happens in every round — your percentage ownership decreases as new shares are issued. A down round is when new shares are issued at a lower price per share than the previous round. Down rounds cause both dilution and a reduction in the value of existing shares. They can also trigger anti-dilution provisions that cause additional share issuance.',
  },
  {
    q: 'Do SAFE notes dilute founders immediately?',
    a: 'No. SAFE notes do not dilute you at the time of investment — they convert into shares at the next qualifying round. However, they appear in your fully diluted share count from the moment they are issued, which affects how future investors calculate their ownership percentage. The dilution is real, just deferred.',
  },
  {
    q: 'How do I calculate post-money ownership for a new investor?',
    a: 'New investor % = Investment Amount / Post-money Valuation. Example: $500K investment at $5M post-money = 10% ownership. Post-money valuation = Pre-money valuation + Investment amount. The key trap is that the option pool, if created pre-close, reduces pre-money ownership and should be included in the pre-money share count.',
  },
]

export default function EquityDilutionCalculatorPage() {
  return (
    <div className="min-h-screen bg-[#F5F0E8]">
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
            Equity Dilution Calculator
          </p>
          <h1 className="font-[family-name:var(--font-heading)] text-4xl font-[700] tracking-[0.05em] uppercase text-white mb-6 leading-tight">
            Equity Dilution: How It Works and How to Calculate It
          </h1>
          <p className="text-lg text-white/60 leading-relaxed font-[300] tracking-wide">
            Every time you raise a funding round, new shares are issued and your percentage ownership shrinks. This is dilution — and it is not inherently bad, but you need to understand exactly how the maths works before you negotiate your next term sheet.
          </p>
        </div>
      </section>

      <article className="max-w-[768px] mx-auto px-6 py-16">

        <section className="mb-14">
          <h2 className="font-[family-name:var(--font-heading)] text-2xl font-[500] tracking-[0.05em] uppercase text-[#1C1917] mb-6">
            The Dilution Formula
          </h2>
          <p className="text-[#6B5B4E] text-base font-[300] tracking-wide leading-relaxed mb-6">
            Dilution is straightforward: when new shares are issued, the total share count increases, which reduces everyone else&apos;s percentage. The formula is:
          </p>
          <div className="bg-[#1C1917] p-6 mb-6">
            <p className="font-[family-name:var(--font-mono)] text-[#C9A84C] text-sm leading-relaxed">
              Post-round ownership % =<br />
              Pre-round ownership % × (Pre-money shares / Post-money shares)
            </p>
          </div>
          <p className="text-[#6B5B4E] text-base font-[300] tracking-wide leading-relaxed mb-6">
            Where: Post-money shares = Pre-money shares + New shares issued
          </p>
          <h3 className="font-[family-name:var(--font-heading)] text-base font-[500] tracking-[0.05em] uppercase text-[#1C1917] mb-4">
            Worked Example
          </h3>
          <div className="border border-[#D4C9B8] overflow-hidden">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-[#1C1917]">
                  {['', 'Pre-seed Round'].map(h => (
                    <th key={h} className="text-left py-3 px-4 font-[family-name:var(--font-heading)] text-[10px] tracking-[0.1em] uppercase text-[#C9A84C]">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[
                  { label: 'Founder pre-round ownership', value: '80%' },
                  { label: 'Investment amount', value: '$500,000' },
                  { label: 'Pre-money valuation', value: '$2,000,000' },
                  { label: 'Post-money valuation', value: '$2,500,000' },
                  { label: 'New investor ownership', value: '20% ($500K / $2.5M)' },
                  { label: 'Founder post-round ownership', value: '64% (80% × 2M/2.5M)' },
                  { label: 'Founder dilution', value: '16 percentage points' },
                ].map((row, i) => (
                  <tr key={row.label} className={`border-t border-[#D4C9B8] ${i % 2 === 0 ? 'bg-[#FDFAF5]' : 'bg-[#F5F0E8]'}`}>
                    <td className="py-3 px-4 text-xs text-[#6B5B4E] font-[300]">{row.label}</td>
                    <td className="py-3 px-4 font-[family-name:var(--font-mono)] text-xs text-[#C9A84C] font-[500]">{row.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="mb-14">
          <h2 className="font-[family-name:var(--font-heading)] text-2xl font-[500] tracking-[0.05em] uppercase text-[#1C1917] mb-6">
            Cumulative Dilution Across Multiple Rounds
          </h2>
          <p className="text-[#6B5B4E] text-base font-[300] tracking-wide leading-relaxed mb-8">
            Dilution compounds across rounds. A founder who starts at 100% and raises three rounds will typically retain 50–65% by Series A — before any option pool. Here is how it stacks up in a realistic example:
          </p>
          <div className="border border-[#D4C9B8] overflow-hidden">
            <table className="w-full text-xs">
              <thead>
                <tr className="bg-[#1C1917]">
                  {['Round', 'New Shares', 'Total Shares', 'Founder Shares', 'Founder %', 'Fully Diluted %', 'Notes'].map(h => (
                    <th key={h} className="text-left py-3 px-3 font-[family-name:var(--font-heading)] text-[9px] tracking-[0.1em] uppercase text-[#C9A84C]">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {cumulativeRounds.map((row, i) => (
                  <tr key={row.round} className={`border-t border-[#D4C9B8] ${i % 2 === 0 ? 'bg-[#FDFAF5]' : 'bg-[#F5F0E8]'}`}>
                    <td className="py-2.5 px-3 font-[family-name:var(--font-heading)] text-[10px] tracking-[0.03em] uppercase text-[#1C1917] font-[500]">{row.round}</td>
                    <td className="py-2.5 px-3 font-[family-name:var(--font-mono)] text-[#6B5B4E]">{row.newShares}</td>
                    <td className="py-2.5 px-3 font-[family-name:var(--font-mono)] text-[#1C1917]">{row.totalShares}</td>
                    <td className="py-2.5 px-3 font-[family-name:var(--font-mono)] text-[#1C1917]">{row.founderShares}</td>
                    <td className="py-2.5 px-3 font-[family-name:var(--font-mono)] text-[#C9A84C] font-[500]">{row.founderPct}</td>
                    <td className="py-2.5 px-3 font-[family-name:var(--font-mono)] text-[#6B5B4E]">{row.founderFD}</td>
                    <td className="py-2.5 px-3 text-[#6B5B4E] font-[300] leading-relaxed">{row.notes}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-[#6B5B4E] font-[300] tracking-wide mt-3 italic">
            Note: Fully diluted % includes the option pool as if all options were issued and exercised.
          </p>
        </section>

        <section className="mb-14">
          <h2 className="font-[family-name:var(--font-heading)] text-2xl font-[500] tracking-[0.05em] uppercase text-[#1C1917] mb-6">
            What Is a Reasonable Amount of Dilution Per Round?
          </h2>
          <div className="border border-[#D4C9B8] overflow-hidden mb-6">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-[#1C1917]">
                  <th className="text-left py-3 px-4 font-[family-name:var(--font-heading)] text-[10px] tracking-[0.1em] uppercase text-[#C9A84C]">Stage</th>
                  <th className="text-left py-3 px-4 font-[family-name:var(--font-heading)] text-[10px] tracking-[0.1em] uppercase text-[#C9A84C]">Typical Dilution</th>
                  <th className="text-left py-3 px-4 font-[family-name:var(--font-heading)] text-[10px] tracking-[0.1em] uppercase text-[#C9A84C]">Notes</th>
                </tr>
              </thead>
              <tbody>
                {dilutionByStage.map((row, i) => (
                  <tr key={row.stage} className={`border-t border-[#D4C9B8] ${i % 2 === 0 ? 'bg-[#FDFAF5]' : 'bg-[#F5F0E8]'}`}>
                    <td className="py-3 px-4 font-[family-name:var(--font-heading)] text-xs tracking-[0.03em] uppercase text-[#1C1917] font-[500]">{row.stage}</td>
                    <td className="py-3 px-4 font-[family-name:var(--font-mono)] text-[#C9A84C] font-[500]">{row.typical}</td>
                    <td className="py-3 px-4 text-xs text-[#6B5B4E] font-[300]">{row.notes}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-[#6B5B4E] text-sm font-[300] tracking-wide leading-relaxed">
            These are ranges, not rules. What matters is whether the valuation at which you are diluting is fair. 25% dilution at a £20M pre-money is significantly better for founders than 15% at a £2M pre-money.
          </p>
        </section>

        <div className="bg-[#1C1917] border border-[#C9A84C] p-8 mb-14 relative overflow-hidden">
          <div className="absolute top-3 left-3 w-5 h-5 border-t border-l border-[#C9A84C] opacity-40" />
          <div className="absolute top-3 right-3 w-5 h-5 border-t border-r border-[#C9A84C] opacity-40" />
          <div className="absolute bottom-3 left-3 w-5 h-5 border-b border-l border-[#C9A84C] opacity-40" />
          <div className="absolute bottom-3 right-3 w-5 h-5 border-b border-r border-[#C9A84C] opacity-40" />
          <p className="font-[family-name:var(--font-mono)] text-xs tracking-[0.2em] uppercase text-[#C9A84C] mb-3">CapBrief</p>
          <h3 className="font-[family-name:var(--font-heading)] text-xl font-[500] tracking-[0.05em] uppercase text-white mb-3">
            Dilution Calculated Automatically. Shown Visually.
          </h3>
          <p className="text-white/60 text-sm font-[300] tracking-wide leading-relaxed mb-6">
            CapBrief calculates dilution automatically from your CSV — across every share class, every convertible note, every option grant. It shows the ownership waterfall visually and produces a round summary with pre-money and post-money ownership for every stakeholder.
          </p>
          <Link
            href="/auth/signup"
            className="inline-block font-[family-name:var(--font-heading)] text-sm tracking-[0.1em] uppercase bg-[#C9A84C] text-[#1C1917] px-8 py-4 hover:bg-[#B8930A] transition-colors"
          >
            Upload Your Cap Table Free →
          </Link>
        </div>

        <section className="mb-14">
          <h2 className="font-[family-name:var(--font-heading)] text-2xl font-[500] tracking-[0.05em] uppercase text-[#1C1917] mb-6">
            The Option Pool Shuffle — The Hidden Dilution Founders Miss
          </h2>
          <p className="text-[#6B5B4E] text-base font-[300] tracking-wide leading-relaxed mb-4">
            The option pool shuffle is one of the most commonly misunderstood aspects of startup funding, and it exclusively benefits investors at the expense of founders.
          </p>
          <p className="text-[#6B5B4E] text-base font-[300] tracking-wide leading-relaxed mb-4">
            Here is how it works: Investors require you to create or expand an option pool as a condition of investment. The term sheet specifies the pool must exist <em>pre-investment</em>. This means the pool is created from the pre-money share count — which dilutes founders before the investor even writes a cheque.
          </p>
          <p className="text-[#6B5B4E] text-base font-[300] tracking-wide leading-relaxed mb-4">
            The investor&apos;s effective pre-money valuation is lower than the stated number because the pool reduces the per-share price. Founders pay for the option pool in dilution; investors do not.
          </p>
          <div className="bg-[#F5F0E8] border border-[#D4C9B8] p-5">
            <p className="font-[family-name:var(--font-mono)] text-xs tracking-[0.15em] uppercase text-[#6B5B4E] mb-2">How to negotiate</p>
            <p className="text-sm text-[#6B5B4E] font-[300] tracking-wide leading-relaxed">
              Ask for the option pool to be created post-investment, or for the stated pre-money valuation to include the pool. Either approach eliminates the shuffle. Many investors will accept this if you raise it clearly during term sheet negotiation.
            </p>
          </div>
        </section>

        <section className="mb-14">
          <h2 className="font-[family-name:var(--font-heading)] text-2xl font-[500] tracking-[0.05em] uppercase text-[#1C1917] mb-6">
            Anti-Dilution Clauses — How They Work
          </h2>
          <p className="text-[#6B5B4E] text-base font-[300] tracking-wide leading-relaxed mb-4">
            Anti-dilution provisions protect investors if you raise a down round — a round at a lower price per share than their investment. There are two main types:
          </p>
          <div className="space-y-4 mb-4">
            <div className="border-l-2 border-[#C9A84C] pl-4">
              <p className="font-[family-name:var(--font-heading)] text-sm font-[500] tracking-[0.03em] uppercase text-[#1C1917] mb-1">Full Ratchet</p>
              <p className="text-sm text-[#6B5B4E] font-[300] tracking-wide leading-relaxed">
                The investor&apos;s conversion price resets to the new lower price. This can be highly punitive — the investor receives additional shares to make them whole at the expense of founders. Aggressive investors may push for this; founders should resist.
              </p>
            </div>
            <div className="border-l-2 border-[#C9A84C] pl-4">
              <p className="font-[family-name:var(--font-heading)] text-sm font-[500] tracking-[0.03em] uppercase text-[#1C1917] mb-1">Weighted Average</p>
              <p className="text-sm text-[#6B5B4E] font-[300] tracking-wide leading-relaxed">
                The conversion price adjusts proportionally based on the number of new shares issued and their price. This is the standard market approach — much more founder-friendly than full ratchet. Almost always preferable.
              </p>
            </div>
          </div>
          <p className="text-[#6B5B4E] text-sm font-[300] tracking-wide leading-relaxed">
            Anti-dilution clauses only trigger in down rounds. If you raise at a higher price than the previous round (an up round), they are irrelevant. The best protection against anti-dilution provisions is not raising a down round — which means being careful about the valuation you set in earlier rounds.
          </p>
        </section>

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
          <p className="font-[family-name:var(--font-mono)] text-xs tracking-[0.2em] uppercase text-[#C9A84C] mb-3">Know Your Numbers</p>
          <h3 className="font-[family-name:var(--font-heading)] text-xl font-[500] tracking-[0.05em] uppercase text-white mb-3">
            See Your Exact Dilution Before Your Next Meeting
          </h3>
          <p className="text-white/60 text-sm font-[300] tracking-wide leading-relaxed mb-6">
            Upload your cap table and CapBrief shows you every shareholder&apos;s fully diluted ownership — with visual waterfall chart and round-by-round breakdown. Free to start.
          </p>
          <Link
            href="/auth/signup"
            className="inline-block font-[family-name:var(--font-heading)] text-sm tracking-[0.1em] uppercase bg-[#C9A84C] text-[#1C1917] px-8 py-4 hover:bg-[#B8930A] transition-colors"
          >
            Upload Your Cap Table Free →
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
