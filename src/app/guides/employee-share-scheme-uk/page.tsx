import type { Metadata } from 'next'
import Link from 'next/link'

export const dynamic = 'force-static'

export const metadata: Metadata = {
  title: 'Employee Share Scheme UK: EMI, CSOP & Growth Shares | CapBrief',
  description: 'A complete guide to UK employee share schemes. Covers EMI options, CSOP, growth shares, unapproved options, tax treatment, HMRC reporting, and how each scheme appears on your cap table.',
  openGraph: {
    title: 'Employee Share Scheme UK: EMI, CSOP & Growth Shares | CapBrief',
    description: 'A complete guide to UK employee share schemes. Covers EMI options, CSOP, growth shares, unapproved options, tax treatment, HMRC reporting, and how each scheme appears on your cap table.',
    type: 'article',
  },
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Employee Share Scheme UK: EMI, CSOP & Growth Shares',
  description: 'A complete guide to UK employee share schemes. Covers EMI options, CSOP, growth shares, unapproved options, tax treatment, HMRC reporting, and how each scheme appears on your cap table.',
  author: { '@type': 'Organization', name: 'CapBrief' },
  publisher: { '@type': 'Organization', name: 'CapBrief', url: 'https://roundbrief.com' },
}

const faqs = [
  {
    q: 'What is the best employee share scheme for a UK startup?',
    a: 'EMI (Enterprise Management Incentive) is the best option for most UK startups. It offers the most favourable tax treatment for employees: no income tax on exercise (if the exercise price equals the agreed market value at grant), and capital gains taxed at just 10% under Business Asset Disposal Relief (on the first £1 million of lifetime gains). The company must have fewer than 250 employees and gross assets under £30 million to qualify. Each employee can hold EMI options worth up to £250,000 (based on the share value at grant).',
  },
  {
    q: 'What is the difference between EMI and CSOP?',
    a: 'EMI is for smaller companies (under 250 employees, under £30M gross assets) and offers 10% CGT on exercise gains via Business Asset Disposal Relief. CSOP (Company Share Option Plan) works for larger companies that do not qualify for EMI. CSOP offers no income tax on exercise (if shares are held for 3+ years from grant), but gains are taxed at normal CGT rates (20% for higher-rate taxpayers) rather than the 10% EMI rate. CSOP has a lower per-employee limit of £60,000 (increased from £30,000 in 2023).',
  },
  {
    q: 'What are growth shares?',
    a: 'Growth shares are a separate class of share that only participate in company value above a specified hurdle (the "base value"). An employee receives shares with a hurdle of, say, £2M — meaning they only benefit from growth in company value above £2M. Because the shares have no value at grant (the hurdle equals or exceeds the current company value), there is no income tax charge on receipt. Gains above the hurdle are taxed as capital gains. Growth shares are useful when EMI is not available or when the per-employee EMI limit (£250K) is insufficient for senior hires.',
  },
  {
    q: 'Do I need HMRC approval before granting EMI options?',
    a: 'You do not need advance approval, but you must notify HMRC within 92 days of each option grant via the company\'s online Employment Related Securities (ERS) return. Late notification means the options lose EMI status — converting them to unapproved options with significantly worse tax treatment (income tax on the gain at exercise). You should also obtain a formal share valuation (HMRC\'s SAV team can provide one using the Val 231 form, which takes 4-6 weeks) to establish the exercise price that will be accepted by HMRC.',
  },
  {
    q: 'What happens to EMI options when an employee leaves?',
    a: 'It depends on the option agreement. Typically: if the employee is a "good leaver" (made redundant, leaves by mutual agreement after a certain period), they have 90 days to exercise their vested options. Unvested options lapse. If they are a "bad leaver" (dismissed for cause, voluntary resignation within the cliff period), all options — vested and unvested — lapse. Some agreements allow longer exercise periods for good leavers (6-12 months). The terms must be specified in the option agreement signed at grant.',
  },
  {
    q: 'How do employee share schemes appear on the cap table?',
    a: 'Unexercised options appear on the cap table as a reserved pool (reducing fully diluted ownership for all other shareholders) but do not appear in the issued share count. When an employee exercises their options, they receive actual shares — which are then added to the issued share count and the cap table as a new row. The cap table should always show both: the total option pool (allocated and unallocated) and individual option grants (with vesting status, exercise price, and expiry date).',
  },
]

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((faq) => ({
    '@type': 'Question',
    name: faq.q,
    acceptedAnswer: { '@type': 'Answer', text: faq.a },
  })),
}

export default function EmployeeShareSchemeUKPage() {
  return (
    <div className="min-h-screen bg-[#F5F0E8]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

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
            Employee Share Scheme UK
          </p>
          <h1 className="font-[family-name:var(--font-heading)] text-4xl font-[700] tracking-[0.05em] uppercase text-white mb-6 leading-tight">
            Employee Share Scheme UK: EMI, CSOP & Growth Shares
          </h1>
          <p className="text-lg text-white/60 leading-relaxed font-[300] tracking-wide">
            Equity compensation is how startups compete with big-company salaries. The UK offers several tax-advantaged share schemes — EMI being the most generous — but each has different eligibility rules, tax treatment, and cap table implications. This guide covers the options that matter for UK startups.
          </p>
        </div>
      </section>

      <article className="max-w-[768px] mx-auto px-6 py-16">

        <section className="mb-14">
          <h2 className="font-[family-name:var(--font-heading)] text-2xl font-[500] tracking-[0.05em] uppercase text-[#1C1917] mb-6">
            Why Employee Equity Matters
          </h2>
          <p className="text-[#6B5B4E] text-base font-[300] tracking-wide leading-relaxed mb-6">
            Early-stage startups cannot match market salaries. A senior engineer earning £120K at a bank will not join your seed-stage company for £60K unless there is meaningful equity upside. The gap between the below-market salary and the market rate is effectively being "paid" in equity — and the employee needs to believe the equity could be worth multiples of the salary sacrifice.
          </p>
          <p className="text-[#6B5B4E] text-base font-[300] tracking-wide leading-relaxed mb-6">
            The UK tax system supports this through several approved share schemes that reduce or eliminate income tax on equity compensation. The most powerful is EMI — which can reduce the effective tax rate on share gains to just 10%, compared to up to 45% income tax + 2% NI on a cash bonus.
          </p>
          <p className="text-[#6B5B4E] text-base font-[300] tracking-wide leading-relaxed">
            Getting the scheme structure right is not optional. A badly structured equity grant can result in an employee receiving an unexpected income tax bill at exercise — sometimes for tens of thousands of pounds on shares they cannot sell. This destroys trust and makes future equity grants worthless as a recruitment tool.
          </p>
        </section>

        <section className="mb-14">
          <h2 className="font-[family-name:var(--font-heading)] text-2xl font-[500] tracking-[0.05em] uppercase text-[#1C1917] mb-6">
            EMI: Enterprise Management Incentive
          </h2>
          <p className="text-[#6B5B4E] text-base font-[300] tracking-wide leading-relaxed mb-8">
            EMI is the gold standard for UK startup employee equity. It offers the best tax treatment of any HMRC-approved scheme.
          </p>
          <div className="space-y-4">
            {[
              { label: 'Eligibility — Company', detail: 'Fewer than 250 full-time equivalent employees, gross assets under £30 million, carrying on a qualifying trade (same excluded trades as SEIS/EIS: property development, financial services, legal, etc.). Must have a UK permanent establishment.' },
              { label: 'Eligibility — Employee', detail: 'Must work at least 25 hours per week for the company (or, if less, at least 75% of their working time). Must not hold more than 30% of the ordinary share capital. Directors qualify if they meet the working time test. Contractors and consultants do not qualify.' },
              { label: 'Per-Employee Limit', detail: '£250,000 per employee, calculated as the market value of the shares at the date of grant. If the share price increases after grant, the value above £250K is still covered by EMI — the limit is tested at grant only.' },
              { label: 'Company-Wide Limit', detail: '£3 million total outstanding EMI options across all employees. Options that have been exercised no longer count towards this limit.' },
              { label: 'Tax on Grant', detail: 'No income tax or National Insurance on the date the option is granted — provided the exercise price is set at or above the agreed market value (the "AMV") at grant. If you set the exercise price below AMV, the difference is taxable as employment income at exercise.' },
              { label: 'Tax on Exercise', detail: 'No income tax if the exercise price equals the AMV at grant and the option has not been "disqualifying event" affected. The employee pays the exercise price to receive shares. No NI for employer or employee.' },
              { label: 'Tax on Sale', detail: 'Capital gains tax on the gain from exercise price to sale price. Under Business Asset Disposal Relief (BADR, formerly Entrepreneurs\' Relief), the rate is just 10% on the first £1 million of lifetime gains. Above £1M, the normal CGT rate applies (20% for higher-rate taxpayers).' },
              { label: 'HMRC Notification', detail: 'Must be filed within 92 days of each individual option grant via the company\'s ERS annual return online. Late filing loses EMI status permanently for that grant — it becomes an unapproved option with full income tax liability at exercise.' },
            ].map((item) => (
              <div key={item.label} className="border border-[#D4C9B8] bg-[#FDFAF5] p-5">
                <p className="font-[family-name:var(--font-heading)] text-sm font-[600] tracking-[0.05em] uppercase text-[#1C1917] mb-2">{item.label}</p>
                <p className="text-sm text-[#6B5B4E] font-[300] leading-relaxed">{item.detail}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-14">
          <h2 className="font-[family-name:var(--font-heading)] text-2xl font-[500] tracking-[0.05em] uppercase text-[#1C1917] mb-6">
            CSOP: Company Share Option Plan
          </h2>
          <p className="text-[#6B5B4E] text-base font-[300] tracking-wide leading-relaxed mb-6">
            CSOP is the fallback when EMI is not available — typically because the company exceeds the 250-employee or £30M asset threshold, or because the employee does not meet the 25-hour working time requirement.
          </p>
          <p className="text-[#6B5B4E] text-base font-[300] tracking-wide leading-relaxed mb-6">
            <strong className="text-[#1C1917]">Per-employee limit:</strong> £60,000 (increased from £30,000 in April 2023). This is the market value of shares under option at the date of grant — significantly less than EMI's £250,000 limit.
          </p>
          <p className="text-[#6B5B4E] text-base font-[300] tracking-wide leading-relaxed mb-6">
            <strong className="text-[#1C1917]">Tax treatment:</strong> No income tax on exercise if the option is exercised between 3 and 10 years from grant. Gains on sale are taxed at normal CGT rates (10% for basic-rate taxpayers, 20% for higher-rate). Unlike EMI, BADR does not automatically apply to CSOP shares — the employee must meet the standard BADR qualifying conditions (5% holding, officer/employee for 2+ years).
          </p>
          <p className="text-[#6B5B4E] text-base font-[300] tracking-wide leading-relaxed">
            <strong className="text-[#1C1917]">When to use CSOP:</strong> For companies that are too large for EMI, for employees who do not meet the EMI working time test (e.g., part-time board advisors with employment contracts), or to supplement EMI grants above the £250,000 per-employee limit.
          </p>
        </section>

        <section className="mb-14">
          <h2 className="font-[family-name:var(--font-heading)] text-2xl font-[500] tracking-[0.05em] uppercase text-[#1C1917] mb-6">
            Growth Shares
          </h2>
          <p className="text-[#6B5B4E] text-base font-[300] tracking-wide leading-relaxed mb-6">
            Growth shares are not an HMRC-approved scheme — they are a share structure. The company creates a new class of ordinary shares that only participate in value above a specified hurdle amount (the "base value"). At grant, the shares have zero or negligible value because the hurdle equals or exceeds the current company valuation.
          </p>
          <p className="text-[#6B5B4E] text-base font-[300] tracking-wide leading-relaxed mb-6">
            <strong className="text-[#1C1917]">How the hurdle works:</strong> If the company is currently valued at £5M, growth shares might be issued with a £5M hurdle. The employee pays nominal value (say, £0.001 per share) at issue. On a future exit at £20M, the growth shares participate in the £15M of growth above the hurdle, pro-rata with other shareholders. On an exit at £5M or below, the growth shares receive nothing.
          </p>
          <p className="text-[#6B5B4E] text-base font-[300] tracking-wide leading-relaxed mb-6">
            <strong className="text-[#1C1917]">Tax treatment:</strong> Because the shares have negligible value at issue, there is minimal income tax on receipt (HMRC accepts the nominal value as fair market value because of the hurdle). All gains above the hurdle are taxed as capital gains on disposal. If the employee holds the shares for 2+ years and meets other BADR conditions, the 10% CGT rate may apply.
          </p>
          <p className="text-[#6B5B4E] text-base font-[300] tracking-wide leading-relaxed">
            <strong className="text-[#1C1917]">When to use growth shares:</strong> For senior hires where the EMI £250K limit is insufficient, for non-qualifying employees (consultants, non-executive directors), or when the company does not qualify for EMI. Growth shares require a share valuation and typically cost £3,000-£5,000 to set up with a lawyer.
          </p>
        </section>

        <section className="mb-14">
          <h2 className="font-[family-name:var(--font-heading)] text-2xl font-[500] tracking-[0.05em] uppercase text-[#1C1917] mb-6">
            Unapproved Options
          </h2>
          <p className="text-[#6B5B4E] text-base font-[300] tracking-wide leading-relaxed mb-6">
            Unapproved options are the catch-all — any option grant that does not qualify under EMI, CSOP, or another approved scheme is "unapproved." The tax treatment is significantly worse.
          </p>
          <p className="text-[#6B5B4E] text-base font-[300] tracking-wide leading-relaxed mb-6">
            <strong className="text-[#1C1917]">Tax on exercise:</strong> The difference between the market value of the shares at exercise and the exercise price is taxed as employment income — at the employee's marginal income tax rate (up to 45%) plus employee NI (2%). The company also pays employer NI (13.8%) on the gain. This can create a significant cash tax bill for the employee on shares they may not be able to sell.
          </p>
          <p className="text-[#6B5B4E] text-base font-[300] tracking-wide leading-relaxed">
            <strong className="text-[#1C1917]">When unapproved is unavoidable:</strong> For non-UK employees (EMI requires a UK permanent establishment), for employees who exceed the EMI or CSOP limits, or when EMI notification deadlines were missed and the options reverted to unapproved status. In these cases, consider whether growth shares might be a better alternative.
          </p>
        </section>

        <section className="mb-14">
          <h2 className="font-[family-name:var(--font-heading)] text-2xl font-[500] tracking-[0.05em] uppercase text-[#1C1917] mb-6">
            Side-by-Side Tax Comparison
          </h2>
          <div className="border border-[#D4C9B8] overflow-hidden">
            <div className="grid grid-cols-4 bg-[#1C1917] text-white">
              <div className="p-4 border-r border-[#333]"><p className="font-[family-name:var(--font-heading)] text-[10px] font-[600] tracking-[0.1em] uppercase">Scheme</p></div>
              <div className="p-4 border-r border-[#333]"><p className="font-[family-name:var(--font-heading)] text-[10px] font-[600] tracking-[0.1em] uppercase">Tax on Exercise</p></div>
              <div className="p-4 border-r border-[#333]"><p className="font-[family-name:var(--font-heading)] text-[10px] font-[600] tracking-[0.1em] uppercase">Tax on Sale</p></div>
              <div className="p-4"><p className="font-[family-name:var(--font-heading)] text-[10px] font-[600] tracking-[0.1em] uppercase">Per-Employee Limit</p></div>
            </div>
            {[
              ['EMI', 'None (if exercise price = AMV)', '10% CGT (BADR)', '£250,000'],
              ['CSOP', 'None (if held 3-10 years)', '10-20% CGT', '£60,000'],
              ['Growth Shares', 'Minimal (nominal value)', '10-20% CGT', 'No statutory limit'],
              ['Unapproved', 'Income tax up to 45% + NI', '10-20% CGT on further gains', 'No statutory limit'],
            ].map(([scheme, exercise, sale, limit], i) => (
              <div key={scheme} className={`grid grid-cols-4 ${i % 2 === 0 ? 'bg-[#FDFAF5]' : 'bg-[#F5F0E8]'}`}>
                <div className="p-4 border-r border-[#D4C9B8]"><p className="text-sm font-[500] text-[#1C1917]">{scheme}</p></div>
                <div className="p-4 border-r border-[#D4C9B8]"><p className="text-xs text-[#6B5B4E] font-[300]">{exercise}</p></div>
                <div className="p-4 border-r border-[#D4C9B8]"><p className="text-xs text-[#6B5B4E] font-[300]">{sale}</p></div>
                <div className="p-4"><p className="text-xs text-[#6B5B4E] font-[300]">{limit}</p></div>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-14">
          <h2 className="font-[family-name:var(--font-heading)] text-2xl font-[500] tracking-[0.05em] uppercase text-[#1C1917] mb-6">
            Setting Up an EMI Scheme: Step by Step
          </h2>
          <div className="space-y-4">
            {[
              { step: '1. Confirm Company Eligibility', detail: 'Check employee count (< 250 FTE), gross assets (< £30M), and qualifying trade status. If you carry on any non-qualifying trade activities, ensure they represent less than 20% of total activity.' },
              { step: '2. Obtain a Share Valuation', detail: 'Apply to HMRC\'s Shares and Assets Valuation (SAV) team using the Val 231 form. This establishes the agreed market value (AMV) that will be used as the exercise price. The process takes 4-6 weeks and is free. You can alternatively use an independent valuation, but HMRC may challenge it.' },
              { step: '3. Draft the Option Agreement', detail: 'Work with a lawyer to draft the EMI option agreement and scheme rules. These specify: number of options, exercise price (= AMV), vesting schedule, cliff period, exercise conditions (typically exit-only or time-based), leaver provisions, and expiry date (typically 10 years from grant).' },
              { step: '4. Board Approval', detail: 'The board must formally approve the EMI scheme and each individual option grant. Minute the resolution, including the share valuation basis and the total options being authorised.' },
              { step: '5. Grant Options and Sign Agreements', detail: 'Each employee signs an individual option agreement. Record the grant date, number of options, exercise price, vesting schedule, and any specific conditions. The grant date triggers the 92-day HMRC notification deadline.' },
              { step: '6. Notify HMRC Within 92 Days', detail: 'File the notification via the company\'s online ERS (Employment Related Securities) annual return. This is the most commonly missed step — and missing it is fatal. The options permanently lose EMI status. Set a calendar reminder for every grant.' },
              { step: '7. Annual ERS Return', detail: 'File the annual ERS return by July 6 following the end of each tax year, reporting all option grants, exercises, and lapses during the year. This is a separate obligation from the 92-day notification.' },
            ].map((item, i) => (
              <div key={item.step} className="border border-[#D4C9B8] bg-[#FDFAF5] p-5 flex gap-4">
                <div className="w-7 h-7 bg-[#C9A84C] text-[#1C1917] flex items-center justify-center font-[family-name:var(--font-mono)] text-xs font-[700] shrink-0 mt-0.5">
                  {i + 1}
                </div>
                <div>
                  <p className="font-[family-name:var(--font-heading)] text-sm font-[600] tracking-[0.05em] uppercase text-[#1C1917] mb-1">{item.step}</p>
                  <p className="text-sm text-[#6B5B4E] font-[300] leading-relaxed">{item.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-14">
          <h2 className="font-[family-name:var(--font-heading)] text-2xl font-[500] tracking-[0.05em] uppercase text-[#1C1917] mb-6">
            Cap Table Impact
          </h2>
          <p className="text-[#6B5B4E] text-base font-[300] tracking-wide leading-relaxed mb-6">
            Employee share schemes affect your cap table in two ways: the reserved option pool (which reduces fully diluted ownership for all shareholders) and individual option grants (which are tracked within the pool).
          </p>
          <p className="text-[#6B5B4E] text-base font-[300] tracking-wide leading-relaxed mb-6">
            A 10% option pool means that even before any options are granted, all existing shareholders' fully diluted percentages are reduced by 10%. When individual options are granted, they are carved out of the pool — but the total dilution stays the same until the pool is expanded.
          </p>
          <p className="text-[#6B5B4E] text-base font-[300] tracking-wide leading-relaxed mb-6">
            When an employee exercises options, they pay the exercise price and receive actual shares. The shares move from "options outstanding" to "shares issued" on the cap table. The fully diluted percentage does not change (it was already counted), but the issued share count increases.
          </p>
          <p className="text-[#6B5B4E] text-base font-[300] tracking-wide leading-relaxed">
            Your cap table should track, for each option holder: grant date, number of options, exercise price, vesting schedule (vested vs unvested), expiry date, and scheme type (EMI, CSOP, unapproved). This information is required for due diligence and for the annual ERS return to HMRC.
          </p>
        </section>

        <div className="bg-[#1C1917] border border-[#C9A84C] p-8 mb-14 relative overflow-hidden">
          <div className="absolute top-3 left-3 w-5 h-5 border-t border-l border-[#C9A84C] opacity-40" />
          <div className="absolute top-3 right-3 w-5 h-5 border-t border-r border-[#C9A84C] opacity-40" />
          <div className="absolute bottom-3 left-3 w-5 h-5 border-b border-l border-[#C9A84C] opacity-40" />
          <div className="absolute bottom-3 right-3 w-5 h-5 border-b border-r border-[#C9A84C] opacity-40" />
          <p className="font-[family-name:var(--font-mono)] text-xs tracking-[0.2em] uppercase text-[#C9A84C] mb-3">CapBrief</p>
          <h3 className="font-[family-name:var(--font-heading)] text-xl font-[500] tracking-[0.05em] uppercase text-white mb-3">
            Track Your Option Pool and Employee Grants
          </h3>
          <p className="text-white/60 text-sm font-[300] tracking-wide leading-relaxed mb-6">
            CapBrief tracks your EMI option pool, individual grants, vesting schedules, and exercise events alongside your shareholder cap table — so you always have an accurate fully diluted view for investors.
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
          <p className="font-[family-name:var(--font-mono)] text-xs tracking-[0.2em] uppercase text-[#C9A84C] mb-3">Related Guides</p>
          <h3 className="font-[family-name:var(--font-heading)] text-xl font-[500] tracking-[0.05em] uppercase text-white mb-4">
            Keep Reading
          </h3>
          <div className="space-y-3">
            <Link href="/guides/option-pool-and-vesting-guide" className="block text-sm text-white/60 hover:text-white transition-colors font-[300] tracking-wide">
              → Option Pool and Vesting Schedules
            </Link>
            <Link href="/guides/seis-vs-eis-comparison" className="block text-sm text-white/60 hover:text-white transition-colors font-[300] tracking-wide">
              → SEIS vs EIS: Complete Comparison Guide
            </Link>
            <Link href="/guides/startup-equity-split-calculator" className="block text-sm text-white/60 hover:text-white transition-colors font-[300] tracking-wide">
              → Startup Equity Split: How to Divide Founder Equity
            </Link>
          </div>
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
