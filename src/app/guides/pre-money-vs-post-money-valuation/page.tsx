import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Pre-Money vs Post-Money Valuation: Why the Distinction Changes Everything | CapBrief',
  description: 'A $1M raise at "$4M pre" gives investors 20% equity. At "$4M post" they get 25%. That ambiguity is intentional — here is how to protect yourself.',
  openGraph: {
    title: 'Pre-Money vs Post-Money Valuation: Why the Distinction Changes Everything | CapBrief',
    description: 'A $1M raise at "$4M pre" gives investors 20% equity. At "$4M post" they get 25%. That ambiguity is intentional — here is how to protect yourself.',
    type: 'article',
  },
}

const comparisonRows = [
  {
    scenario: '$4M pre-money, $1M raise',
    preMoney: '$4,000,000',
    investment: '$1,000,000',
    postMoney: '$5,000,000',
    investorPct: '20.0%',
    founderPct: '80.0%',
  },
  {
    scenario: '$4M post-money, $1M raise',
    preMoney: '$3,000,000',
    investment: '$1,000,000',
    postMoney: '$4,000,000',
    investorPct: '25.0%',
    founderPct: '75.0%',
  },
  {
    scenario: '$5M pre-money, $1M raise',
    preMoney: '$5,000,000',
    investment: '$1,000,000',
    postMoney: '$6,000,000',
    investorPct: '16.7%',
    founderPct: '83.3%',
  },
  {
    scenario: '$5M post-money, $1M raise',
    preMoney: '$4,000,000',
    investment: '$1,000,000',
    postMoney: '$5,000,000',
    investorPct: '20.0%',
    founderPct: '80.0%',
  },
]

const safeRows = [
  {
    type: 'Pre-money SAFE (old YC standard)',
    howConverts: 'Converts before new round shares are issued; dilutes founders and new investors proportionally',
    founderImpact: 'Moderate — SAFE holders dilute the existing cap table at conversion',
    clarity: 'Ambiguous — valuation cap does not define final ownership until conversion event',
  },
  {
    type: 'Post-money SAFE (current YC standard)',
    howConverts: 'Ownership percentage is locked at the time of signing; new money does not dilute the SAFE',
    founderImpact: 'Higher initial dilution but fully predictable — founder knows exactly what they are giving up',
    clarity: 'Clear — founders know the exact post-money ownership percentage at signing',
  },
]

const faqs = [
  {
    q: 'Is pre-money or post-money valuation better for founders?',
    a: 'Pre-money is almost always better for founders. At a given number, pre-money means investors receive a smaller percentage of equity for the same cheque size. A $1M raise at $4M pre gives investors 20%; the same raise at $4M post gives them 25%. Always clarify which one you are discussing with investors, and default to pre-money in your own pitch materials.',
  },
  {
    q: 'How do SAFEs affect my cap table?',
    a: 'SAFEs sit as a liability on your cap table — they do not appear as issued shares until they convert. On a fully diluted basis you must include the estimated conversion shares (calculated at the valuation cap, discounted if applicable). Post-money SAFEs are cleaner because the ownership percentage is locked; pre-money SAFEs require you to recalculate at every new round as the conversion share count changes.',
  },
  {
    q: 'What is a typical pre-money valuation for a seed round?',
    a: 'In the UK in 2024, pre-money seed valuations typically range from £1.5M to £8M depending on traction, team, and sector. SaaS companies with demonstrable MRR tend to get higher valuations. Pre-seed (pre-revenue) rounds often use SAFEs with a valuation cap of £1M–£3M rather than a priced round, which avoids the valuation negotiation until the seed round.',
  },
  {
    q: 'How does post-money valuation affect the option pool?',
    a: 'If you are creating or expanding an option pool as part of a round, the key question is whether the pool is created pre- or post-money. Investors typically require the pool to be created pre-investment — which means it dilutes founders, not investors. A 10% option pool carved out of the pre-money cap table at a $4M pre-money valuation actually reduces the effective pre-money valuation to $3.6M for founders. This is called the option pool shuffle.',
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

export default function PreMoneyPostMoneyPage() {
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
            Pre-Money vs Post-Money Valuation
          </p>
          <h1 className="font-[family-name:var(--font-heading)] text-4xl font-[700] tracking-[0.05em] uppercase text-white mb-6 leading-tight">
            Pre-Money vs Post-Money Valuation: Why the Distinction Changes Everything
          </h1>
          <p className="text-lg text-white/60 leading-relaxed font-[300] tracking-wide">
            A $1M raise at &ldquo;$4M pre&rdquo; gives investors 20% of your company. The same raise at &ldquo;$4M post&rdquo; gives them 25%. That 5% difference is not rounding error — it is the difference between controlling your company and losing it sooner than you expected. Investors sometimes use the terms interchangeably. That ambiguity is rarely accidental.
          </p>
        </div>
      </section>

      <article className="max-w-[768px] mx-auto px-6 py-16">

        <section className="mb-14">
          <h2 className="font-[family-name:var(--font-heading)] text-2xl font-[500] tracking-[0.05em] uppercase text-[#1C1917] mb-6">
            The Core Formula
          </h2>
          <p className="text-[#6B5B4E] text-base font-[300] tracking-wide leading-relaxed mb-6">
            The relationship between these two numbers is a single equation:
          </p>
          <div className="bg-[#1C1917] p-8 mb-6 relative overflow-hidden">
            <div className="absolute top-3 left-3 w-5 h-5 border-t border-l border-[#C9A84C] opacity-40" />
            <div className="absolute top-3 right-3 w-5 h-5 border-t border-r border-[#C9A84C] opacity-40" />
            <div className="absolute bottom-3 left-3 w-5 h-5 border-b border-l border-[#C9A84C] opacity-40" />
            <div className="absolute bottom-3 right-3 w-5 h-5 border-b border-r border-[#C9A84C] opacity-40" />
            <p className="font-[family-name:var(--font-mono)] text-[#C9A84C] text-lg text-center tracking-widest">
              Post-Money = Pre-Money + Investment Amount
            </p>
          </div>
          <p className="text-[#6B5B4E] text-base font-[300] tracking-wide leading-relaxed mb-4">
            From this, investor ownership percentage is:
          </p>
          <div className="bg-[#1C1917] p-6 mb-6 font-[family-name:var(--font-mono)] text-sm text-white/70 leading-relaxed">
            <p className="text-[#C9A84C] mb-2"># Investor percentage</p>
            <p>Investor % = Investment Amount ÷ Post-Money Valuation</p>
            <p className="mt-4 text-[#C9A84C] mb-2"># Example: $1M into $4M pre</p>
            <p>Post-money = $4M + $1M = $5M</p>
            <p>Investor % = $1M ÷ $5M = 20%</p>
            <p className="mt-4 text-[#C9A84C] mb-2"># Example: $1M into $4M post</p>
            <p>Pre-money = $4M - $1M = $3M</p>
            <p>Investor % = $1M ÷ $4M = 25%</p>
          </div>
          <p className="text-[#6B5B4E] text-sm font-[300] tracking-wide leading-relaxed">
            The investor who says &ldquo;we value your company at $4M&rdquo; without specifying pre or post is telling you something meaningful about how they negotiate.
          </p>
        </section>

        <section className="mb-14">
          <h2 className="font-[family-name:var(--font-heading)] text-2xl font-[500] tracking-[0.05em] uppercase text-[#1C1917] mb-6">
            The Same Raise, Very Different Outcomes
          </h2>
          <p className="text-[#6B5B4E] text-base font-[300] tracking-wide leading-relaxed mb-8">
            The table below shows how framing changes founder ownership across common scenarios. All examples use the same investment amount — only the valuation framing differs.
          </p>
          <div className="border border-[#D4C9B8] overflow-hidden">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-[#1C1917]">
                  <th className="text-left py-3 px-4 font-[family-name:var(--font-heading)] text-[10px] tracking-[0.1em] uppercase text-[#C9A84C]">Scenario</th>
                  <th className="text-left py-3 px-4 font-[family-name:var(--font-heading)] text-[10px] tracking-[0.1em] uppercase text-[#C9A84C]">Pre-Money</th>
                  <th className="text-left py-3 px-4 font-[family-name:var(--font-heading)] text-[10px] tracking-[0.1em] uppercase text-[#C9A84C]">Investment</th>
                  <th className="text-left py-3 px-4 font-[family-name:var(--font-heading)] text-[10px] tracking-[0.1em] uppercase text-[#C9A84C]">Post-Money</th>
                  <th className="text-left py-3 px-4 font-[family-name:var(--font-heading)] text-[10px] tracking-[0.1em] uppercase text-[#C9A84C]">Investor %</th>
                  <th className="text-left py-3 px-4 font-[family-name:var(--font-heading)] text-[10px] tracking-[0.1em] uppercase text-[#C9A84C]">Founder %</th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row, i) => (
                  <tr key={row.scenario} className={`border-t border-[#D4C9B8] ${i % 2 === 0 ? 'bg-[#FDFAF5]' : 'bg-[#F5F0E8]'}`}>
                    <td className="py-3 px-4 text-xs text-[#1C1917] font-[300] leading-relaxed">{row.scenario}</td>
                    <td className="py-3 px-4 font-[family-name:var(--font-mono)] text-xs text-[#6B5B4E]">{row.preMoney}</td>
                    <td className="py-3 px-4 font-[family-name:var(--font-mono)] text-xs text-[#6B5B4E]">{row.investment}</td>
                    <td className="py-3 px-4 font-[family-name:var(--font-mono)] text-xs text-[#6B5B4E]">{row.postMoney}</td>
                    <td className="py-3 px-4 font-[family-name:var(--font-mono)] text-xs text-[#C9A84C] font-[600]">{row.investorPct}</td>
                    <td className="py-3 px-4 font-[family-name:var(--font-mono)] text-xs text-[#1C1917] font-[600]">{row.founderPct}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-[#6B5B4E] font-[300] tracking-wide mt-3 italic">
            Same $1M investment. Founder ends up with between 75% and 83.3% depending on how valuation is framed.
          </p>
        </section>

        <section className="mb-14">
          <h2 className="font-[family-name:var(--font-heading)] text-2xl font-[500] tracking-[0.05em] uppercase text-[#1C1917] mb-6">
            SAFE and Convertible Note Complications
          </h2>
          <p className="text-[#6B5B4E] text-base font-[300] tracking-wide leading-relaxed mb-6">
            Simple Agreements for Future Equity (SAFEs) defer the valuation question — the exact price per share is not set until a priced round. This creates ambiguity about ownership percentage at signing, which is why the distinction between pre- and post-money SAFEs became a significant issue.
          </p>
          <p className="text-[#6B5B4E] text-base font-[300] tracking-wide leading-relaxed mb-8">
            Y Combinator updated its standard SAFE to a post-money SAFE in 2018, and it has become the dominant format for UK and US seed-stage investing. Here is what distinguishes the two:
          </p>
          <div className="border border-[#D4C9B8] overflow-hidden">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-[#1C1917]">
                  <th className="text-left py-3 px-4 font-[family-name:var(--font-heading)] text-[10px] tracking-[0.1em] uppercase text-[#C9A84C]">Type</th>
                  <th className="text-left py-3 px-4 font-[family-name:var(--font-heading)] text-[10px] tracking-[0.1em] uppercase text-[#C9A84C]">How It Converts</th>
                  <th className="text-left py-3 px-4 font-[family-name:var(--font-heading)] text-[10px] tracking-[0.1em] uppercase text-[#C9A84C]">Founder Impact</th>
                  <th className="text-left py-3 px-4 font-[family-name:var(--font-heading)] text-[10px] tracking-[0.1em] uppercase text-[#C9A84C]">Clarity</th>
                </tr>
              </thead>
              <tbody>
                {safeRows.map((row, i) => (
                  <tr key={row.type} className={`border-t border-[#D4C9B8] ${i % 2 === 0 ? 'bg-[#FDFAF5]' : 'bg-[#F5F0E8]'}`}>
                    <td className="py-3 px-4 font-[family-name:var(--font-heading)] text-xs tracking-[0.03em] uppercase text-[#C9A84C] font-[500]">{row.type}</td>
                    <td className="py-3 px-4 text-xs text-[#6B5B4E] font-[300] leading-relaxed">{row.howConverts}</td>
                    <td className="py-3 px-4 text-xs text-[#6B5B4E] font-[300] leading-relaxed">{row.founderImpact}</td>
                    <td className="py-3 px-4 text-xs text-[#1C1917] font-[300] leading-relaxed">{row.clarity}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="mb-14">
          <h2 className="font-[family-name:var(--font-heading)] text-2xl font-[500] tracking-[0.05em] uppercase text-[#1C1917] mb-6">
            Why Post-Money SAFEs Became the Y Combinator Standard
          </h2>
          <p className="text-[#6B5B4E] text-base font-[300] tracking-wide leading-relaxed mb-4">
            Before 2018, multiple SAFEs on a cap table created a compounding ambiguity problem. Each SAFE had a valuation cap, but because they converted pre-money, the order and amount of subsequent raises changed the ownership percentage each SAFE holder received. Founders could not predict dilution, and investors could not predict returns.
          </p>
          <p className="text-[#6B5B4E] text-base font-[300] tracking-wide leading-relaxed mb-4">
            The post-money SAFE solved this with one rule: the percentage is locked at signing. A $500K SAFE at a $5M post-money cap gives the investor exactly 10% — regardless of how many other SAFEs are issued later, regardless of the size of the next round.
          </p>
          <p className="text-[#6B5B4E] text-base font-[300] tracking-wide leading-relaxed mb-4">
            The trade-off is that founders feel more dilution immediately. Issuing four $500K SAFEs at $5M post-money locks in exactly 40% dilution at signing. That number is visible and unavoidable. With pre-money SAFEs, the same dilution was real but hidden — which felt better until the priced round revealed the true position.
          </p>
          <div className="border-l-2 border-[#C9A84C] pl-4 bg-[#FDFAF5] py-3 pr-4">
            <p className="text-sm text-[#1C1917] font-[300] tracking-wide leading-relaxed">
              <strong className="font-[500]">Practical rule:</strong> If you are issuing SAFEs, use the YC post-money template. Your cap table is cleaner, your investors know what they own, and you know exactly how much of your company you have sold.
            </p>
          </div>
        </section>

        <section className="mb-14">
          <h2 className="font-[family-name:var(--font-heading)] text-2xl font-[500] tracking-[0.05em] uppercase text-[#1C1917] mb-6">
            How to Communicate Clearly with Investors
          </h2>
          <p className="text-[#6B5B4E] text-base font-[300] tracking-wide leading-relaxed mb-6">
            Valuation ambiguity is not always malicious — sometimes founders and investors genuinely talk past each other. These habits eliminate the gap:
          </p>
          <div className="space-y-4">
            {[
              {
                rule: 'Always specify pre or post in writing',
                detail: 'In emails, term sheets, and pitch decks: write "$5M pre-money valuation" or "$5M post-money valuation" — never just "$5M valuation". If a term sheet says "valuation of $5M" without qualification, ask for clarification in writing before signing anything.',
              },
              {
                rule: 'Quote your own valuation in pre-money terms',
                detail: 'In your pitch deck and verbal pitches, lead with your pre-money number. It is a higher number (for the same round), so it sounds better — and it is the industry convention that favours founders. Investors will convert it to post-money in their own models.',
              },
              {
                rule: 'For SAFEs, quote the valuation cap clearly',
                detail: 'State explicitly: "We are raising on a post-money SAFE with a $6M valuation cap." That one sentence tells the investor exactly what percentage they are buying and prevents the most common SAFE misunderstandings.',
              },
              {
                rule: 'Verify your cap table reflects both scenarios',
                detail: 'Before your first investor meeting, model your cap table at both pre- and post-money framing for your target raise. Know your dilution numbers cold. Investors will test you.',
              },
            ].map((item) => (
              <div key={item.rule} className="border-l-2 border-[#C9A84C] pl-4">
                <p className="font-[family-name:var(--font-heading)] text-sm font-[500] tracking-[0.03em] uppercase text-[#1C1917] mb-1">{item.rule}</p>
                <p className="text-sm text-[#6B5B4E] font-[300] tracking-wide leading-relaxed">{item.detail}</p>
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
            Model Both Scenarios in One Upload
          </h3>
          <p className="text-white/60 text-sm font-[300] tracking-wide leading-relaxed mb-6">
            CapBrief lets you toggle between pre-money and post-money framing on the same cap table upload. Upload your current equity structure, enter your target raise amount, and see exactly what both scenarios mean for every shareholder before you sit down with investors.
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
          <p className="font-[family-name:var(--font-mono)] text-xs tracking-[0.2em] uppercase text-[#C9A84C] mb-3">Know Your Numbers</p>
          <h3 className="font-[family-name:var(--font-heading)] text-xl font-[500] tracking-[0.05em] uppercase text-white mb-3">
            Upload Your Cap Table. See Every Scenario.
          </h3>
          <p className="text-white/60 text-sm font-[300] tracking-wide leading-relaxed mb-6">
            CapBrief reads your CSV and produces a clean dilution report — pre-money, post-money, SAFE conversions, and fully diluted ownership in one view. Walk into investor meetings with the numbers already done.
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
