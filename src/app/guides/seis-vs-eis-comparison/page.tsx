import type { Metadata } from 'next'
import Link from 'next/link'

export const dynamic = 'force-static'

export const metadata: Metadata = {
  title: 'SEIS vs EIS: Complete Comparison Guide | CapBrief',
  description: 'SEIS gives investors 50% income tax relief on up to £200,000. EIS gives 30% on up to £2M. Learn the eligibility rules, limits, and which scheme your startup should use first.',
  openGraph: {
    title: 'SEIS vs EIS: Complete Comparison Guide | CapBrief',
    description: 'SEIS gives investors 50% income tax relief on up to £200,000. EIS gives 30% on up to £2M. Learn the eligibility rules, limits, and which scheme your startup should use first.',
    type: 'article',
  },
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'SEIS vs EIS: Complete Comparison Guide',
  description: 'SEIS gives investors 50% income tax relief on up to £200,000. EIS gives 30% on up to £2M. Learn the eligibility rules, limits, and which scheme your startup should use first.',
  author: { '@type': 'Organization', name: 'CapBrief' },
  publisher: { '@type': 'Organization', name: 'CapBrief', url: 'https://roundbrief.com' },
}

const faqs = [
  {
    q: 'What is the difference between SEIS and EIS?',
    a: 'SEIS (Seed Enterprise Investment Scheme) offers 50% income tax relief on investments up to £200,000 per tax year, aimed at very early-stage companies under 3 years old with fewer than 25 employees and under £350,000 in gross assets. EIS (Enterprise Investment Scheme) offers 30% income tax relief on up to £2 million per year (£1 million standard, plus £1 million in knowledge-intensive companies), targeting slightly more established startups with under 250 employees and under £15 million in gross assets. Both require shares to be held for at least 3 years.',
  },
  {
    q: 'Can a company use both SEIS and EIS?',
    a: 'Yes, and most startups should. The typical pattern is to raise your first £250,000 under SEIS, then move to EIS for subsequent rounds. You cannot use both schemes on the same share issue — the SEIS round must complete before EIS shares are issued. Many angels specifically look for SEIS-eligible deals first because the tax relief and CGT exemption are substantially better.',
  },
  {
    q: 'What happens if my company loses SEIS or EIS status?',
    a: 'If your company ceases to qualify within the 3-year holding period — for example by starting a non-qualifying trade, exceeding asset limits, or being acquired — HMRC will claw back the tax relief from your investors. This means they receive a demand for the income tax relief they originally claimed. This is one of the most common reasons angel investors walk away from deals: they want certainty that the relief will stick.',
  },
  {
    q: 'Do I need advance assurance before raising SEIS or EIS money?',
    a: 'Legally, no. Practically, always. Advance assurance is a letter from HMRC confirming your company qualifies. Without it, investors take the risk that HMRC later rejects their claim. Most experienced angels will not invest without advance assurance in hand. The application is free and typically takes 4-6 weeks via the EIS1 form submitted to HMRC\'s Small Company Enterprise Centre.',
  },
  {
    q: 'How does carry-back work for SEIS and EIS?',
    a: 'Investors can carry back their SEIS or EIS investment to the previous tax year, claiming tax relief against the prior year\'s income tax liability. This is particularly valuable for investors who had a high-income year and want to reduce that year\'s tax bill retrospectively. For SEIS, this means up to £200,000 can be carried back. The investment must be made in the current tax year, but the relief is applied to the previous year\'s return.',
  },
  {
    q: 'What is the SEIS reinvestment relief for capital gains?',
    a: 'SEIS offers a unique CGT reinvestment relief: if an investor puts capital gains into SEIS-qualifying shares in the same tax year the gain arose, 50% of the gain is exempt from CGT. Combined with the 50% income tax relief, this makes SEIS one of the most generous tax incentive schemes in the world. EIS offers CGT deferral (not exemption) — the gain is deferred until the EIS shares are disposed of.',
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

export default function SeisVsEisPage() {
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
            SEIS vs EIS
          </p>
          <h1 className="font-[family-name:var(--font-heading)] text-4xl font-[700] tracking-[0.05em] uppercase text-white mb-6 leading-tight">
            SEIS vs EIS: Complete Comparison Guide
          </h1>
          <p className="text-lg text-white/60 leading-relaxed font-[300] tracking-wide">
            The UK offers two of the most generous tax relief schemes for startup investors anywhere in the world. SEIS and EIS can make or break your fundraise — but most founders confuse the eligibility rules, miss the advance assurance step, or raise under the wrong scheme. Here is everything you need to get it right.
          </p>
        </div>
      </section>

      <article className="max-w-[768px] mx-auto px-6 py-16">

        <section className="mb-14">
          <h2 className="font-[family-name:var(--font-heading)] text-2xl font-[500] tracking-[0.05em] uppercase text-[#1C1917] mb-6">
            Why SEIS and EIS Matter for Your Fundraise
          </h2>
          <p className="text-[#6B5B4E] text-base font-[300] tracking-wide leading-relaxed mb-6">
            Angel investors in the UK are not just buying equity — they are buying tax relief. Under SEIS, an investor who puts in £100,000 gets £50,000 back from HMRC as income tax relief. Under EIS, the same investor gets £30,000 back. This is not theoretical: it is money that hits their self-assessment refund.
          </p>
          <p className="text-[#6B5B4E] text-base font-[300] tracking-wide leading-relaxed mb-6">
            The effect on your fundraise is dramatic. An investor who would balk at a £500K pre-money valuation without tax relief will happily invest at the same terms when SEIS effectively halves their risk. If your company loses its qualifying status, those investors get clawback demands from HMRC — and they will blame you.
          </p>
          <p className="text-[#6B5B4E] text-base font-[300] tracking-wide leading-relaxed">
            Understanding the differences between SEIS and EIS is not optional for UK founders. It is the single most important fundraising advantage the UK offers over the US, and most founders either waste it or lose it through ignorance of the rules.
          </p>
        </section>

        <section className="mb-14">
          <h2 className="font-[family-name:var(--font-heading)] text-2xl font-[500] tracking-[0.05em] uppercase text-[#1C1917] mb-6">
            SEIS: The Seed Enterprise Investment Scheme
          </h2>
          <p className="text-[#6B5B4E] text-base font-[300] tracking-wide leading-relaxed mb-8">
            SEIS is designed for the earliest-stage companies. It offers the most generous tax reliefs but has the tightest eligibility rules.
          </p>
          <div className="space-y-4">
            {[
              { label: 'Income Tax Relief', detail: '50% — an investor putting in £100,000 claims £50,000 back against their income tax bill. This is the headline incentive.' },
              { label: 'Annual Investment Limit', detail: '£200,000 per investor per tax year. Investors can also carry back to the previous tax year, effectively claiming against two years of income.' },
              { label: 'Company Fundraising Limit', detail: '£250,000 total raised under SEIS (lifetime). Once you exceed this, you must move to EIS for subsequent rounds.' },
              { label: 'CGT Exemption', detail: 'If shares are held for 3+ years, any gain on disposal is completely exempt from capital gains tax. This is unique to SEIS — EIS only defers CGT.' },
              { label: 'CGT Reinvestment Relief', detail: '50% of capital gains reinvested into SEIS shares in the same tax year are exempt from CGT. Combined with income tax relief, the effective risk is very low.' },
              { label: 'Loss Relief', detail: 'If the company fails, investors can claim loss relief at their marginal income tax rate on the net cost (investment minus tax relief already claimed). For a 45% taxpayer who invested £100K and got £50K SEIS relief, the loss relief on the remaining £50K at risk is £22,500.' },
              { label: 'Holding Period', detail: '3 years minimum. If shares are sold or the company exits before 3 years, all tax reliefs are clawed back by HMRC.' },
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
            SEIS Eligibility Requirements
          </h2>
          <p className="text-[#6B5B4E] text-base font-[300] tracking-wide leading-relaxed mb-6">
            Your company must meet ALL of these at the time the shares are issued. Fail one and the entire round loses SEIS status — there is no partial qualification.
          </p>
          <div className="space-y-4">
            {[
              { rule: 'Company Age', detail: 'Must be less than 3 years old from the date of first commercial sale (not incorporation). If you incorporated in 2023 but did not make your first sale until 2024, the clock starts in 2024.' },
              { rule: 'Gross Assets', detail: 'Must have gross assets of £350,000 or less immediately before the share issue. This catches companies that have already raised significant money or have valuable IP on their balance sheet.' },
              { rule: 'Employee Count', detail: 'Fewer than 25 full-time equivalent employees at the time of share issue. Part-timers are counted proportionally.' },
              { rule: 'UK Permanent Establishment', detail: 'The company must have a permanent establishment in the UK, though it can trade internationally. A registered office alone may not suffice — HMRC looks for genuine trading presence.' },
              { rule: 'Qualifying Trade', detail: 'The company must carry on or be preparing to carry on a qualifying trade. Excluded trades include: property development, financial services, legal services, accountancy, farming, hotels, nursing homes, and energy generation with subsidies.' },
              { rule: 'No Prior SEIS/EIS Investment', detail: 'The company must not have previously received investment under EIS, VCT, or the old Corporate Venturing Scheme. SEIS must come first.' },
              { rule: 'Independence', detail: 'The company must not be controlled by another company or be a subsidiary. Connected persons (family members, business partners) face additional restrictions.' },
            ].map((item) => (
              <div key={item.rule} className="border border-[#D4C9B8] bg-[#FDFAF5] p-5">
                <p className="font-[family-name:var(--font-heading)] text-sm font-[600] tracking-[0.05em] uppercase text-[#1C1917] mb-2">{item.rule}</p>
                <p className="text-sm text-[#6B5B4E] font-[300] leading-relaxed">{item.detail}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-14">
          <h2 className="font-[family-name:var(--font-heading)] text-2xl font-[500] tracking-[0.05em] uppercase text-[#1C1917] mb-6">
            EIS: The Enterprise Investment Scheme
          </h2>
          <p className="text-[#6B5B4E] text-base font-[300] tracking-wide leading-relaxed mb-8">
            EIS picks up where SEIS leaves off. The tax reliefs are less generous per pound, but the investment limits are dramatically higher — making it the workhorse scheme for seed and Series A rounds.
          </p>
          <div className="space-y-4">
            {[
              { label: 'Income Tax Relief', detail: '30% — an investor putting in £500,000 claims £150,000 back. Less than SEIS per pound but applicable to much larger amounts.' },
              { label: 'Annual Investment Limit', detail: '£1 million per investor per tax year (£2 million if at least £1 million goes into knowledge-intensive companies — broadly, R&D-heavy or IP-rich businesses). Carry-back also available.' },
              { label: 'Company Fundraising Limit', detail: '£12 million lifetime limit under EIS and VCT combined (£20 million for knowledge-intensive companies). This is generous enough for most startups through Series A.' },
              { label: 'CGT Deferral', detail: 'Capital gains invested into EIS shares are deferred — not exempted. The deferred gain becomes payable when the EIS shares are disposed of. This is less valuable than SEIS\'s full exemption.' },
              { label: 'Loss Relief', detail: 'Same structure as SEIS. If the company fails, investors claim loss relief at their marginal rate on the net cost after income tax relief.' },
              { label: 'Holding Period', detail: '3 years minimum, same as SEIS. Disposal or exit before 3 years triggers full clawback.' },
              { label: 'Inheritance Tax Relief', detail: 'EIS shares qualify for Business Relief after 2 years, meaning they are exempt from inheritance tax. This makes EIS attractive for estate planning — a factor that matters for older angel investors.' },
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
            EIS Eligibility Requirements
          </h2>
          <p className="text-[#6B5B4E] text-base font-[300] tracking-wide leading-relaxed mb-6">
            EIS eligibility is broader than SEIS but still has rules that catch out unprepared founders.
          </p>
          <div className="space-y-4">
            {[
              { rule: 'Company Age', detail: 'Must be less than 7 years from first commercial sale (10 years for knowledge-intensive companies). After this, the company is considered mature and no longer eligible.' },
              { rule: 'Gross Assets', detail: 'Must have gross assets of £15 million or less before the share issue and £16 million or less immediately after. This is generous enough for most seed and Series A companies.' },
              { rule: 'Employee Count', detail: 'Fewer than 250 full-time equivalent employees (500 for knowledge-intensive companies).' },
              { rule: 'Qualifying Trade', detail: 'Same excluded trade list as SEIS. The trade must be carried on for at least 4 months after the share issue, or HMRC may deny the relief.' },
              { rule: 'Risk-to-Capital Condition', detail: 'Introduced in 2018, this requires that the investment has a genuine risk of loss and a genuine potential for growth. It blocks guaranteed-return structures and asset-backed schemes that abused EIS historically.' },
              { rule: 'No Guaranteed Exit', detail: 'The company cannot have arrangements in place that guarantee the investor a return or an exit within the 3-year holding period. Drag-along provisions in shareholder agreements need careful drafting to avoid triggering this.' },
            ].map((item) => (
              <div key={item.rule} className="border border-[#D4C9B8] bg-[#FDFAF5] p-5">
                <p className="font-[family-name:var(--font-heading)] text-sm font-[600] tracking-[0.05em] uppercase text-[#1C1917] mb-2">{item.rule}</p>
                <p className="text-sm text-[#6B5B4E] font-[300] leading-relaxed">{item.detail}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-14">
          <h2 className="font-[family-name:var(--font-heading)] text-2xl font-[500] tracking-[0.05em] uppercase text-[#1C1917] mb-6">
            Side-by-Side Comparison
          </h2>
          <div className="border border-[#D4C9B8] overflow-hidden">
            <div className="grid grid-cols-3 bg-[#1C1917] text-white">
              <div className="p-4 border-r border-[#333]">
                <p className="font-[family-name:var(--font-heading)] text-xs font-[600] tracking-[0.1em] uppercase">Feature</p>
              </div>
              <div className="p-4 border-r border-[#333]">
                <p className="font-[family-name:var(--font-heading)] text-xs font-[600] tracking-[0.1em] uppercase">SEIS</p>
              </div>
              <div className="p-4">
                <p className="font-[family-name:var(--font-heading)] text-xs font-[600] tracking-[0.1em] uppercase">EIS</p>
              </div>
            </div>
            {[
              ['Income tax relief', '50%', '30%'],
              ['Annual investor limit', '£200,000', '£1M (£2M for KICs)'],
              ['Company lifetime limit', '£250,000', '£12M (£20M for KICs)'],
              ['Company age limit', '< 3 years', '< 7 years (10 for KICs)'],
              ['Gross asset limit', '£350,000', '£15 million'],
              ['Employee limit', '< 25 FTE', '< 250 FTE (500 for KICs)'],
              ['CGT on gains', 'Full exemption', 'Deferral only'],
              ['CGT reinvestment relief', '50% exempt', 'Deferral only'],
              ['Holding period', '3 years', '3 years'],
              ['Loss relief', 'Yes', 'Yes'],
              ['IHT relief', 'No', 'Yes (after 2 years)'],
            ].map(([feature, seis, eis], i) => (
              <div key={feature} className={`grid grid-cols-3 ${i % 2 === 0 ? 'bg-[#FDFAF5]' : 'bg-[#F5F0E8]'}`}>
                <div className="p-4 border-r border-[#D4C9B8]">
                  <p className="text-sm font-[500] text-[#1C1917]">{feature}</p>
                </div>
                <div className="p-4 border-r border-[#D4C9B8]">
                  <p className="text-sm text-[#6B5B4E] font-[300]">{seis}</p>
                </div>
                <div className="p-4">
                  <p className="text-sm text-[#6B5B4E] font-[300]">{eis}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-14">
          <h2 className="font-[family-name:var(--font-heading)] text-2xl font-[500] tracking-[0.05em] uppercase text-[#1C1917] mb-6">
            The Advance Assurance Process
          </h2>
          <p className="text-[#6B5B4E] text-base font-[300] tracking-wide leading-relaxed mb-6">
            Advance assurance is a free letter from HMRC confirming your company qualifies for SEIS or EIS. It is not legally required, but raising without it is like selling a house without a survey — technically possible, practically unwise.
          </p>
          <p className="text-[#6B5B4E] text-base font-[300] tracking-wide leading-relaxed mb-6">
            Submit the EIS1 form (which covers both SEIS and EIS) to HMRC's Small Company Enterprise Centre. Include your business plan, financial projections, and articles of association. HMRC typically responds in 4-6 weeks. If they have questions, expect follow-up correspondence that can extend this to 8-10 weeks.
          </p>
          <p className="text-[#6B5B4E] text-base font-[300] tracking-wide leading-relaxed mb-6">
            After receiving advance assurance and issuing shares, you must file a compliance statement (EIS1/SEIS1) within the filing window. HMRC then issues EIS3 or SEIS3 certificates to each investor, which they use to claim the relief on their self-assessment return.
          </p>
          <p className="text-[#6B5B4E] text-base font-[300] tracking-wide leading-relaxed">
            The most common reason advance assurance is denied: the company has a non-qualifying trade element (such as providing consultancy services to fund development), or the share structure includes non-ordinary shares with preferential rights that disqualify the issue.
          </p>
        </section>

        <section className="mb-14">
          <h2 className="font-[family-name:var(--font-heading)] text-2xl font-[500] tracking-[0.05em] uppercase text-[#1C1917] mb-6">
            Common Mistakes That Kill SEIS/EIS Status
          </h2>
          <p className="text-[#6B5B4E] text-base font-[300] tracking-wide leading-relaxed mb-8">
            These are the mistakes we see most often. Any one of them can disqualify your entire round retroactively.
          </p>
          <div className="space-y-4">
            {[
              {
                mistake: 'Issuing Preference Shares',
                detail: 'SEIS and EIS shares must be full-risk ordinary shares. If your investor term sheet includes liquidation preferences, anti-dilution provisions attached to the share class, or guaranteed dividends, those shares will not qualify. Investors can still have contractual rights in the shareholder agreement — but the shares themselves must be plain ordinary.',
              },
              {
                mistake: 'Exceeding the Gross Asset Limit',
                detail: 'For SEIS, assets must be under £350,000 at the time of share issue. If you raise a SEIS round that pushes assets over this limit, only shares issued while you were under the limit qualify. Timing matters down to the day.',
              },
              {
                mistake: 'Connected Person Investing',
                detail: 'Directors, employees, and their associates (spouses, business partners, family members who hold 30%+ of the company) cannot claim SEIS/EIS relief on their own investments. A founder investing more money into their own company gets no tax relief.',
              },
              {
                mistake: 'Non-Qualifying Trade Activities',
                detail: 'If more than 20% of your revenue comes from a non-qualifying trade (consultancy, financial services, property, legal), you risk disqualification. Many startups fund early development through consulting — which can torpedo their SEIS status if not structured carefully.',
              },
              {
                mistake: 'Missing the Filing Window',
                detail: 'You must file the compliance statement with HMRC after issuing shares. If you miss the window or fail to file, your investors cannot claim their relief — even if the company is perfectly eligible. Set a calendar reminder.',
              },
            ].map((item, i) => (
              <div key={item.mistake} className="border border-[#D4C9B8] bg-[#FDFAF5] p-5 flex gap-4">
                <div className="w-7 h-7 bg-[#C9A84C] text-[#1C1917] flex items-center justify-center font-[family-name:var(--font-mono)] text-xs font-[700] shrink-0 mt-0.5">
                  {i + 1}
                </div>
                <div>
                  <p className="font-[family-name:var(--font-heading)] text-sm font-[600] tracking-[0.05em] uppercase text-[#1C1917] mb-1">{item.mistake}</p>
                  <p className="text-sm text-[#6B5B4E] font-[300] leading-relaxed">{item.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-14">
          <h2 className="font-[family-name:var(--font-heading)] text-2xl font-[500] tracking-[0.05em] uppercase text-[#1C1917] mb-6">
            The Optimal Fundraising Sequence
          </h2>
          <p className="text-[#6B5B4E] text-base font-[300] tracking-wide leading-relaxed mb-6">
            The ideal pattern for a UK startup is to use SEIS first, then graduate to EIS. Here is the practical sequence most companies should follow.
          </p>
          <p className="text-[#6B5B4E] text-base font-[300] tracking-wide leading-relaxed mb-6">
            <strong className="text-[#1C1917]">Step 1:</strong> Incorporate and apply for SEIS advance assurance immediately — before you start fundraising. Do not wait until you have a term sheet.
          </p>
          <p className="text-[#6B5B4E] text-base font-[300] tracking-wide leading-relaxed mb-6">
            <strong className="text-[#1C1917]">Step 2:</strong> Raise up to £250,000 under SEIS from angel investors. Issue ordinary shares. File the SEIS compliance statement promptly.
          </p>
          <p className="text-[#6B5B4E] text-base font-[300] tracking-wide leading-relaxed mb-6">
            <strong className="text-[#1C1917]">Step 3:</strong> When you need more capital, apply for EIS advance assurance (or include EIS in your original application). Raise your seed round under EIS — the £12M lifetime limit gives you substantial headroom.
          </p>
          <p className="text-[#6B5B4E] text-base font-[300] tracking-wide leading-relaxed">
            <strong className="text-[#1C1917]">Step 4:</strong> If you raise subsequent rounds, continue under EIS until you exceed the eligibility limits (age, assets, or employees). At that point, you are likely at Series A or beyond and institutional VCs — who do not need tax relief — will lead the round.
          </p>
        </section>

        <div className="bg-[#1C1917] border border-[#C9A84C] p-8 mb-14 relative overflow-hidden">
          <div className="absolute top-3 left-3 w-5 h-5 border-t border-l border-[#C9A84C] opacity-40" />
          <div className="absolute top-3 right-3 w-5 h-5 border-t border-r border-[#C9A84C] opacity-40" />
          <div className="absolute bottom-3 left-3 w-5 h-5 border-b border-l border-[#C9A84C] opacity-40" />
          <div className="absolute bottom-3 right-3 w-5 h-5 border-b border-r border-[#C9A84C] opacity-40" />
          <p className="font-[family-name:var(--font-mono)] text-xs tracking-[0.2em] uppercase text-[#C9A84C] mb-3">CapBrief</p>
          <h3 className="font-[family-name:var(--font-heading)] text-xl font-[500] tracking-[0.05em] uppercase text-white mb-3">
            Model Your SEIS and EIS Rounds Before You Raise
          </h3>
          <p className="text-white/60 text-sm font-[300] tracking-wide leading-relaxed mb-6">
            CapBrief lets you model how SEIS and EIS rounds affect your cap table, calculate dilution at each stage, and generate investor-ready reports showing the tax relief your investors will receive.
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
            <Link href="/guides/seis-eis-eligibility-guide" className="block text-sm text-white/60 hover:text-white transition-colors font-[300] tracking-wide">
              → SEIS and EIS Eligibility Guide
            </Link>
            <Link href="/guides/employee-share-scheme-uk" className="block text-sm text-white/60 hover:text-white transition-colors font-[300] tracking-wide">
              → Employee Share Scheme UK: EMI, CSOP & Growth Shares
            </Link>
            <Link href="/guides/investor-rights-explained" className="block text-sm text-white/60 hover:text-white transition-colors font-[300] tracking-wide">
              → Investor Rights Explained: What VCs Get in Your Cap Table
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
