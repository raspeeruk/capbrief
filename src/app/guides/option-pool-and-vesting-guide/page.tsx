import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Employee Stock Options: Setting Up Your Option Pool and Vesting Schedules | CapBrief',
  description: 'How to set up an option pool, structure vesting schedules, use EMI for maximum tax efficiency, and understand how options affect your fully diluted cap table.',
  openGraph: {
    title: 'Employee Stock Options: Setting Up Your Option Pool and Vesting Schedules | CapBrief',
    description: 'How to set up an option pool, structure vesting schedules, use EMI for maximum tax efficiency, and understand how options affect your fully diluted cap table.',
    type: 'article',
  },
}

const poolSizes = [
  {
    stage: 'Pre-Seed',
    poolPct: '5–10%',
    rationale: 'Usually a placeholder — may not have granted anything yet. Size to cover the first 3–5 key hires.',
    vcExpectation: 'Seed investors will likely require a top-up before or at their round.',
  },
  {
    stage: 'Seed',
    poolPct: '10–15%',
    rationale: 'Should cover hiring through to Series A. Include buffer for roles you cannot predict yet.',
    vcExpectation: 'Series A investors typically want 10–15% unallocated pool on a fully diluted basis post-round.',
  },
  {
    stage: 'Series A',
    poolPct: 'Top up to 15–20% total (including granted options)',
    rationale: 'Enough to hire a full leadership team and expand engineering. Reserve for senior hires that will be expensive.',
    vcExpectation: 'If the pool is below 10% unallocated at Series A, expect a pre-money pool expansion that dilutes founders.',
  },
]

const vestingMechanics = [
  {
    term: '4-year vest, 1-year cliff',
    explanation: 'The employee receives no shares for the first 12 months (cliff). At month 12, they receive 25% of their grant in one block. After that, the remaining 75% vests monthly (1/36 per month) for the following 36 months.',
    why: 'The cliff filters out employees who leave before they have made a real contribution. Monthly vesting after the cliff aligns long-term incentives without making employees wait too long between rewards.',
  },
  {
    term: 'Single trigger acceleration',
    explanation: 'The employee\'s unvested options vest immediately on a change of control (acquisition). The employee does not need to be fired — any acquisition triggers full vesting.',
    why: 'Popular with employees; less popular with acquirers, who often want to retain employees post-acquisition. Expect acquirers to negotiate against this.',
  },
  {
    term: 'Double trigger acceleration',
    explanation: 'Unvested options vest only if (1) there is a change of control, AND (2) the employee is terminated or their role materially changes within 12–24 months of the acquisition.',
    why: 'The investor-friendly version. Employees are protected from being fired post-acquisition, but acquirers keep retention leverage for employees who remain.',
  },
  {
    term: 'Strike price (exercise price)',
    explanation: 'The price at which an employee can purchase their vested shares. For EMI options, HMRC must approve the market value used. HMRC typically accepts a discount to recent funding round price to reflect the illiquid, minority nature of the shares.',
    why: 'A lower strike price means a bigger economic benefit to employees. For EMI grants, agreeing a conservative valuation with HMRC upfront is worth the effort.',
  },
]

const optionTypes = [
  {
    type: 'EMI (Enterprise Management Incentive)',
    eligibility: 'Companies with gross assets under £30M and fewer than 250 employees. Most qualifying trades (excludes financial services, property).',
    taxTreatment: 'Employees pay Capital Gains Tax (20%) on the gain above the strike price, not Income Tax (up to 45%) or NI. If shares are held 2+ years, the 10% Business Asset Disposal Relief rate may apply.',
    limit: '£250,000 worth of options per employee (at grant date valuation)',
    recommendation: 'Use this if your company is eligible. The tax saving for employees is enormous and makes your options significantly more competitive versus cash compensation.',
  },
  {
    type: 'Unapproved Options',
    eligibility: 'Any UK company — no size or trade restrictions.',
    taxTreatment: 'Employees pay Income Tax and National Insurance on the gain between strike price and market value at exercise. The company gets a corporation tax deduction for the same gain.',
    limit: 'No limit, but the tax treatment makes them less attractive to employees.',
    recommendation: 'Use for employees who cannot receive EMI (e.g., those who own 30%+ of the company) or grants that exceed the £250K EMI limit.',
  },
  {
    type: 'Growth Shares',
    eligibility: 'Any company. A distinct class of share (not an option) with a hurdle — shares only have value if exit proceeds exceed a certain threshold.',
    taxTreatment: 'If structured correctly, the employee receives shares with low initial market value. Future gain is typically CGT rather than income tax. No exercise event — the shares are issued upfront.',
    limit: 'No statutory limit. Requires careful HMRC valuation.',
    recommendation: 'Consider for senior hires or co-founder equivalents where you want immediate alignment rather than a vesting option. More complex to administer than EMI.',
  },
]

const faqs = [
  {
    q: 'Should I grant options or growth shares?',
    a: 'For most early hires, EMI options are the right structure — they are simpler to administer, have statutory HMRC approval, and the tax treatment is well understood by employees. Growth shares are worth considering for very senior hires (CXO level) who join early enough that a hurdle price makes sense, or for co-founder equivalents who want to be shareholders from day one rather than option holders. If in doubt, EMI options are the default.',
  },
  {
    q: 'What is a typical option grant for a first engineer?',
    a: 'At pre-seed in the UK, a first hire engineer typically receives 0.25–1.0% of the fully diluted cap table. At seed stage, expect 0.1–0.5%. By Series A, grants for individual contributors are usually in the 0.05–0.2% range. These numbers compress significantly at each round because the pie is smaller in percentage terms. For very early hires who are taking real risk, the upper end of these ranges is reasonable and worth competing for.',
  },
  {
    q: 'How does a 1-year cliff work exactly?',
    a: 'The cliff means zero shares vest during the first 12 months of employment. On the cliff date (exactly 12 months from the grant date or start date — confirm which applies in your EMI agreement), 25% of the total grant vests at once. After that, the remaining 75% typically vests monthly — meaning 1/48 of the total grant per month (combining the cliff batch and post-cliff monthly). If an employee leaves before the cliff, they receive nothing. This is intentional design, not an oversight.',
  },
  {
    q: 'Do options affect my SEIS/EIS raise?',
    a: 'Options that have been granted but not yet exercised do not appear as issued shares — they are contingent. However, they do appear on a fully diluted basis. For SEIS/EIS purposes, the key question is the class of shares the options convert into: if options convert into ordinary shares with no preferential rights, they do not disqualify your SEIS/EIS raise. The unallocated portion of your option pool also counts toward fully diluted but similarly does not affect SEIS/EIS eligibility as long as the resulting shares would be qualifying ordinary shares.',
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

export default function OptionPoolVestingPage() {
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
            Option Pool and Vesting Guide
          </p>
          <h1 className="font-[family-name:var(--font-heading)] text-4xl font-[700] tracking-[0.05em] uppercase text-white mb-6 leading-tight">
            Employee Stock Options: Setting Up Your Option Pool and Vesting Schedules
          </h1>
          <p className="text-lg text-white/60 leading-relaxed font-[300] tracking-wide">
            An option pool is how you pay competitive equity compensation when you cannot afford competitive salaries. Get the pool size wrong and investors will carve it out of your pre-money cap table. Get the structure wrong and your EMI options will not qualify. Get vesting wrong and your first engineer walks at month 11 with nothing — which feels like a win until you realise you need them to stay.
          </p>
        </div>
      </section>

      <article className="max-w-[768px] mx-auto px-6 py-16">

        <section className="mb-14">
          <h2 className="font-[family-name:var(--font-heading)] text-2xl font-[500] tracking-[0.05em] uppercase text-[#1C1917] mb-6">
            Why Option Pools Exist
          </h2>
          <p className="text-[#6B5B4E] text-base font-[300] tracking-wide leading-relaxed mb-4">
            Early-stage companies cannot pay market salaries for senior talent. A principal engineer at a FAANG earns £150K–£250K. Your startup might be able to offer £80K. The option pool bridges that gap — in theory, a 0.5% stake in a company that reaches £100M exit value is worth £500K, which compensates for years of below-market salary.
          </p>
          <p className="text-[#6B5B4E] text-base font-[300] tracking-wide leading-relaxed mb-4">
            For this to work, the options need to be real. That means the right size of pool, the right structure, the right tax treatment, and an honest conversation with each hire about dilution and probability of outcome.
          </p>
          <div className="border-l-2 border-[#C9A84C] pl-4 bg-[#FDFAF5] py-3 pr-4 mb-6">
            <p className="text-sm text-[#1C1917] font-[300] tracking-wide leading-relaxed">
              <strong className="font-[500]">On your cap table:</strong> Unexercised options appear in your fully diluted share count even before exercise. Investors evaluate your cap table on a fully diluted basis. A 15% option pool that is 60% ungranted still reduces every other shareholder&apos;s fully diluted percentage.
            </p>
          </div>
        </section>

        <section className="mb-14">
          <h2 className="font-[family-name:var(--font-heading)] text-2xl font-[500] tracking-[0.05em] uppercase text-[#1C1917] mb-6">
            Typical Pool Sizes by Stage
          </h2>
          <div className="space-y-4">
            {poolSizes.map((item) => (
              <div key={item.stage} className="border border-[#D4C9B8] bg-[#FDFAF5] p-6">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="font-[family-name:var(--font-heading)] text-sm font-[500] tracking-[0.05em] uppercase text-[#1C1917]">{item.stage}</h3>
                  <span className="font-[family-name:var(--font-mono)] text-sm text-[#C9A84C] font-[700] shrink-0 ml-4">{item.poolPct}</span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                  <div>
                    <p className="font-[family-name:var(--font-mono)] text-[10px] tracking-[0.15em] uppercase text-[#C9A84C] mb-1">Rationale</p>
                    <p className="text-[#6B5B4E] font-[300] leading-relaxed">{item.rationale}</p>
                  </div>
                  <div>
                    <p className="font-[family-name:var(--font-mono)] text-[10px] tracking-[0.15em] uppercase text-[#DC2626] mb-1">VC Expectation</p>
                    <p className="text-[#6B5B4E] font-[300] leading-relaxed">{item.vcExpectation}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-14">
          <h2 className="font-[family-name:var(--font-heading)] text-2xl font-[500] tracking-[0.05em] uppercase text-[#1C1917] mb-6">
            Vesting Schedule Mechanics
          </h2>
          <p className="text-[#6B5B4E] text-base font-[300] tracking-wide leading-relaxed mb-8">
            The 4-year vest, 1-year cliff is the industry standard in both the UK and US. These are the key terms you need to understand and communicate clearly to employees:
          </p>
          <div className="space-y-6">
            {vestingMechanics.map((item) => (
              <div key={item.term} className="border-l-2 border-[#C9A84C] pl-4">
                <p className="font-[family-name:var(--font-heading)] text-sm font-[500] tracking-[0.03em] uppercase text-[#1C1917] mb-2">{item.term}</p>
                <p className="text-sm text-[#6B5B4E] font-[300] tracking-wide leading-relaxed mb-2">{item.explanation}</p>
                <p className="text-xs text-[#1C1917] font-[300] tracking-wide leading-relaxed">
                  <span className="font-[family-name:var(--font-mono)] text-[10px] tracking-[0.15em] uppercase text-[#C9A84C]">Why: </span>
                  {item.why}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-14">
          <h2 className="font-[family-name:var(--font-heading)] text-2xl font-[500] tracking-[0.05em] uppercase text-[#1C1917] mb-6">
            EMI vs Unapproved Options vs Growth Shares
          </h2>
          <p className="text-[#6B5B4E] text-base font-[300] tracking-wide leading-relaxed mb-8">
            Not all employee equity is equal. The tax treatment differs radically, and that difference determines whether your option package is actually competitive.
          </p>
          <div className="space-y-4">
            {optionTypes.map((item) => (
              <div key={item.type} className="border border-[#D4C9B8] bg-[#FDFAF5] p-6">
                <h3 className="font-[family-name:var(--font-heading)] text-base font-[500] tracking-[0.05em] uppercase text-[#1C1917] mb-4">{item.type}</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs mb-4">
                  <div>
                    <p className="font-[family-name:var(--font-mono)] text-[10px] tracking-[0.15em] uppercase text-[#C9A84C] mb-1">Who Can Use It</p>
                    <p className="text-[#6B5B4E] font-[300] leading-relaxed">{item.eligibility}</p>
                  </div>
                  <div>
                    <p className="font-[family-name:var(--font-mono)] text-[10px] tracking-[0.15em] uppercase text-[#C9A84C] mb-1">Limit</p>
                    <p className="text-[#6B5B4E] font-[300] leading-relaxed">{item.limit}</p>
                  </div>
                </div>
                <div className="mb-4">
                  <p className="font-[family-name:var(--font-mono)] text-[10px] tracking-[0.15em] uppercase text-[#C9A84C] mb-1">Tax Treatment</p>
                  <p className="text-xs text-[#6B5B4E] font-[300] leading-relaxed">{item.taxTreatment}</p>
                </div>
                <div className="border-l-2 border-[#C9A84C] pl-3">
                  <p className="text-xs text-[#1C1917] font-[300] leading-relaxed italic">{item.recommendation}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-14">
          <h2 className="font-[family-name:var(--font-heading)] text-2xl font-[500] tracking-[0.05em] uppercase text-[#1C1917] mb-6">
            How Options Appear on Your Cap Table
          </h2>
          <p className="text-[#6B5B4E] text-base font-[300] tracking-wide leading-relaxed mb-6">
            Options create two distinct numbers on your cap table, and confusing them is one of the most common mistakes founders make when presenting to investors:
          </p>
          <div className="bg-[#1C1917] p-6 font-[family-name:var(--font-mono)] text-xs text-white/70 leading-relaxed">
            <p className="text-[#C9A84C] mb-3"># Issued vs Fully Diluted — the difference matters</p>
            <p className="mb-1">Total issued shares: 10,000,000</p>
            <p className="mb-1">Founder A: 4,500,000 (45.0% issued)</p>
            <p className="mb-1">Founder B: 4,500,000 (45.0% issued)</p>
            <p className="mb-4">Angel investor: 1,000,000 (10.0% issued)</p>
            <p className="text-[#C9A84C] mb-3"># Option pool — dilutive on fully diluted basis</p>
            <p className="mb-1">Total option pool: 2,000,000 (granted + ungranted)</p>
            <p className="mb-1">Granted (3 employees): 1,200,000</p>
            <p className="mb-4">Ungranted (reserved): 800,000</p>
            <p className="text-[#C9A84C] mb-3"># Fully diluted cap table</p>
            <p className="mb-1">Total fully diluted: 12,000,000</p>
            <p className="mb-1">Founder A: 4,500,000 (37.5% fully diluted)</p>
            <p className="mb-1">Founder B: 4,500,000 (37.5% fully diluted)</p>
            <p className="mb-1">Angel investor: 1,000,000 (8.3% fully diluted)</p>
            <p>Option pool: 2,000,000 (16.7% fully diluted)</p>
          </div>
          <p className="text-xs text-[#6B5B4E] font-[300] tracking-wide mt-3 italic">
            Investors price your company on a fully diluted basis. A 10% investor stake on an issued-shares basis becomes 8.3% on fully diluted if there is a 16.7% option pool.
          </p>
        </section>

        <div className="bg-[#1C1917] border border-[#C9A84C] p-8 mb-14 relative overflow-hidden">
          <div className="absolute top-3 left-3 w-5 h-5 border-t border-l border-[#C9A84C] opacity-40" />
          <div className="absolute top-3 right-3 w-5 h-5 border-t border-r border-[#C9A84C] opacity-40" />
          <div className="absolute bottom-3 left-3 w-5 h-5 border-b border-l border-[#C9A84C] opacity-40" />
          <div className="absolute bottom-3 right-3 w-5 h-5 border-b border-r border-[#C9A84C] opacity-40" />
          <p className="font-[family-name:var(--font-mono)] text-xs tracking-[0.2em] uppercase text-[#C9A84C] mb-3">CapBrief</p>
          <h3 className="font-[family-name:var(--font-heading)] text-xl font-[500] tracking-[0.05em] uppercase text-white mb-3">
            See Your Fully Diluted Cap Table Including All Option Grants
          </h3>
          <p className="text-white/60 text-sm font-[300] tracking-wide leading-relaxed mb-6">
            Upload your cap table CSV with your option grants and CapBrief builds the complete fully diluted view — granted, unvested, ungranted pool — so you know what every shareholder actually owns before you step into an investor meeting.
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
          <p className="font-[family-name:var(--font-mono)] text-xs tracking-[0.2em] uppercase text-[#C9A84C] mb-3">Full Dilution, Full Clarity</p>
          <h3 className="font-[family-name:var(--font-heading)] text-xl font-[500] tracking-[0.05em] uppercase text-white mb-3">
            Your Option Pool, Your Cap Table, Complete
          </h3>
          <p className="text-white/60 text-sm font-[300] tracking-wide leading-relaxed mb-6">
            CapBrief imports your option grants alongside your issued shares and produces the fully diluted cap table that investors actually need. Know your numbers before they ask.
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
