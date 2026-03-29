import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'SEIS and EIS Eligibility: What UK Founders and Investors Need to Know | CapBrief',
  description: 'SEIS gives investors 50% income tax relief. EIS gives 30%. Here is what your company must do — and must never do — to qualify, including the advance assurance process most founders skip.',
  openGraph: {
    title: 'SEIS and EIS Eligibility: What UK Founders and Investors Need to Know | CapBrief',
    description: 'SEIS gives investors 50% income tax relief. EIS gives 30%. Here is what your company must do — and must never do — to qualify, including the advance assurance process most founders skip.',
    type: 'article',
  },
}

const seisEisComparison = [
  {
    criterion: 'Maximum raise',
    seis: '£250,000 lifetime',
    eis: '£12M lifetime (£5M per year)',
  },
  {
    criterion: 'Company age',
    seis: 'Less than 3 years trading',
    eis: 'Less than 7 years trading (first commercial sale)',
  },
  {
    criterion: 'Employees',
    seis: 'Fewer than 25 full-time equivalent',
    eis: 'Fewer than 250 full-time equivalent',
  },
  {
    criterion: 'Gross assets',
    seis: 'Less than £350,000 before the raise',
    eis: 'Less than £15M before the raise; £16M after',
  },
  {
    criterion: 'Income tax relief for investors',
    seis: '50% on up to £200,000 invested per year',
    eis: '30% on up to £1M invested per year (£2M in knowledge-intensive)',
  },
  {
    criterion: 'CGT exemption on gains',
    seis: 'Full CGT exemption after 3 years',
    eis: 'Full CGT exemption after 3 years',
  },
  {
    criterion: 'Loss relief',
    seis: 'Investors can offset losses against income tax after relief',
    eis: 'Same — effective downside is dramatically reduced for investors',
  },
  {
    criterion: 'Shares required',
    seis: 'New ordinary shares, no preferential rights',
    eis: 'New ordinary shares, limited preferential rights permitted',
  },
]

const disqualifyingTrades = [
  'Financial services and banking',
  'Property development and property investment',
  'Farming and forestry',
  'Energy generation (coal, oil, gas; also solar and wind in some cases)',
  'Leasing',
  'Legal and accountancy services',
  'Receiving royalties (where this is the main business)',
  'Running hotels, nursing homes, or care homes',
]

const capTableImpacts = [
  {
    issue: 'SEIS/EIS shares must be ordinary',
    detail: 'HMRC requires that SEIS and EIS shares carry no preferential rights at the time of issue. This means investors cannot receive preference shares, liquidation preferences, or any rights that give them priority over ordinary shareholders. Most angels accept this — but it is a negotiating constraint you need to know in advance.',
  },
  {
    issue: 'Anti-dilution clauses may disqualify',
    detail: 'Full ratchet anti-dilution protection or anything that adjusts the investor\'s share count based on later round pricing is likely to disqualify SEIS/EIS. Broad-based weighted average anti-dilution is usually acceptable but should be confirmed with HMRC advance assurance.',
  },
  {
    issue: 'Liquidation preferences break SEIS/EIS',
    detail: 'Preferred shares with a liquidation preference — even 1x non-participating — are not compatible with SEIS/EIS. Founders sometimes try to compensate angels for the lack of preferences by offering a slightly better price per share. This is the right trade-off when the tax relief more than compensates.',
  },
  {
    issue: 'Each share class is assessed separately',
    detail: 'If you have both ordinary and preference shares, the SEIS/EIS assessment applies per share class. CapBrief flags each share class in your cap table for SEIS/EIS compatibility so you know which investor positions qualify before HMRC review.',
  },
]

const faqs = [
  {
    q: 'Can a company do both SEIS and EIS in the same raise?',
    a: 'Yes — a company can issue SEIS shares up to its £250K lifetime limit and then issue EIS shares for additional investment. In practice, many UK angel rounds use SEIS for the first £250K and EIS for everything above that. HMRC requires that SEIS shares are issued before EIS shares in the same round — not simultaneously.',
  },
  {
    q: 'What disqualifies SEIS?',
    a: 'The main disqualifying factors are: exceeding the £250K lifetime limit, being more than 3 years old at the time of the share issue, having 25 or more employees, having gross assets over £350K, or operating in a disqualified trade (financial services, property, farming, energy generation, leasing). Additionally, the company must not have previously received EIS or VCT investment before using SEIS.',
  },
  {
    q: 'How long must investors hold shares to keep the tax relief?',
    a: 'Investors must hold SEIS or EIS shares for a minimum of 3 years from the date of issue (or 3 years from when the company started trading, if later). If they sell within 3 years, HMRC claws back the income tax relief in full. After 3 years, any gain is exempt from Capital Gains Tax. The loss relief provision survives even if shares are sold before 3 years.',
  },
  {
    q: 'When do I apply for SEIS1/EIS1 certificates?',
    a: 'You apply for SEIS1/EIS1 compliance certificates after the shares have been issued and the company has traded for at least 4 months. The company applies on behalf of investors — investors cannot apply themselves. The certificates are what investors actually use to claim their tax relief via their self-assessment return. Advance assurance is different — it is a pre-raise confirmation from HMRC that your raise is likely to qualify, which most investors require before writing a cheque.',
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

export default function SeisEisEligibilityPage() {
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
            SEIS and EIS Eligibility
          </p>
          <h1 className="font-[family-name:var(--font-heading)] text-4xl font-[700] tracking-[0.05em] uppercase text-white mb-6 leading-tight">
            SEIS and EIS Eligibility: What UK Founders and Investors Need to Know
          </h1>
          <p className="text-lg text-white/60 leading-relaxed font-[300] tracking-wide">
            SEIS and EIS are two of the most powerful fundraising tools available to UK startups. An investor putting £50K into your SEIS round effectively risks just £17K after tax relief. That changes the conversation entirely — but only if your company qualifies and your cap table is structured correctly.
          </p>
        </div>
      </section>

      <article className="max-w-[768px] mx-auto px-6 py-16">

        <section className="mb-14">
          <h2 className="font-[family-name:var(--font-heading)] text-2xl font-[500] tracking-[0.05em] uppercase text-[#1C1917] mb-6">
            SEIS vs EIS at a Glance
          </h2>
          <p className="text-[#6B5B4E] text-base font-[300] tracking-wide leading-relaxed mb-8">
            Both schemes work by reducing the effective cost of investing in your company. SEIS is for very early stage companies and offers the more generous relief. EIS covers a broader range of companies at later stages. Most companies use both — SEIS first, EIS when the SEIS limit is exhausted.
          </p>
          <div className="border border-[#D4C9B8] overflow-hidden">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-[#1C1917]">
                  <th className="text-left py-3 px-4 font-[family-name:var(--font-heading)] text-[10px] tracking-[0.1em] uppercase text-[#C9A84C]">Criterion</th>
                  <th className="text-left py-3 px-4 font-[family-name:var(--font-heading)] text-[10px] tracking-[0.1em] uppercase text-[#C9A84C]">SEIS</th>
                  <th className="text-left py-3 px-4 font-[family-name:var(--font-heading)] text-[10px] tracking-[0.1em] uppercase text-[#C9A84C]">EIS</th>
                </tr>
              </thead>
              <tbody>
                {seisEisComparison.map((row, i) => (
                  <tr key={row.criterion} className={`border-t border-[#D4C9B8] ${i % 2 === 0 ? 'bg-[#FDFAF5]' : 'bg-[#F5F0E8]'}`}>
                    <td className="py-3 px-4 font-[family-name:var(--font-heading)] text-xs tracking-[0.03em] uppercase text-[#1C1917] font-[500]">{row.criterion}</td>
                    <td className="py-3 px-4 text-xs text-[#6B5B4E] font-[300] leading-relaxed">{row.seis}</td>
                    <td className="py-3 px-4 text-xs text-[#6B5B4E] font-[300] leading-relaxed">{row.eis}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="mb-14">
          <h2 className="font-[family-name:var(--font-heading)] text-2xl font-[500] tracking-[0.05em] uppercase text-[#1C1917] mb-6">
            Qualifying Trade Restrictions
          </h2>
          <p className="text-[#6B5B4E] text-base font-[300] tracking-wide leading-relaxed mb-6">
            Both SEIS and EIS exclude certain types of businesses entirely. If your primary trade falls into any of the following categories, you cannot use either scheme regardless of your size or age:
          </p>
          <div className="space-y-2 mb-6">
            {disqualifyingTrades.map((trade) => (
              <div key={trade} className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 bg-[#DC2626] mt-2 shrink-0" />
                <p className="text-[#6B5B4E] text-sm font-[300] tracking-wide leading-relaxed">{trade}</p>
              </div>
            ))}
          </div>
          <div className="border-l-2 border-[#C9A84C] pl-4 bg-[#FDFAF5] py-3 pr-4">
            <p className="text-sm text-[#1C1917] font-[300] tracking-wide leading-relaxed">
              <strong className="font-[500]">Fintech and proptech founders:</strong> These restrictions catch many tech-enabled businesses that touch financial services or property. A software company that &ldquo;facilitates&rdquo; lending may or may not qualify — HMRC&apos;s interpretation is not always consistent. Advance assurance is essential if your business is in a grey area.
            </p>
          </div>
        </section>

        <section className="mb-14">
          <h2 className="font-[family-name:var(--font-heading)] text-2xl font-[500] tracking-[0.05em] uppercase text-[#1C1917] mb-6">
            The Advance Assurance Process
          </h2>
          <p className="text-[#6B5B4E] text-base font-[300] tracking-wide leading-relaxed mb-4">
            Advance assurance is HMRC&apos;s confirmation — before you raise — that your company and the proposed share issue are likely to qualify for SEIS or EIS. It is not legally binding, but sophisticated UK angels will ask for it before committing.
          </p>
          <p className="text-[#6B5B4E] text-base font-[300] tracking-wide leading-relaxed mb-6">
            The process takes 4–8 weeks and requires you to submit:
          </p>
          <div className="space-y-4">
            {[
              { step: '1', item: 'Company details', detail: 'Incorporation documents, Companies House number, description of trade' },
              { step: '2', item: 'Business plan', detail: 'How the raised funds will be used — HMRC checks that money is going into the qualifying business activity' },
              { step: '3', item: 'Financial forecasts', detail: 'Projected income and expenditure for at least two years' },
              { step: '4', item: 'Proposed share structure', detail: 'Draft term sheet or cap table showing the class of shares to be issued' },
              { step: '5', item: 'Previous SEIS/EIS applications', detail: 'HMRC needs to verify you have not exceeded limits or received incompatible investment' },
            ].map((item) => (
              <div key={item.step} className="flex items-start gap-4 border border-[#D4C9B8] bg-[#FDFAF5] p-4">
                <div className="font-[family-name:var(--font-mono)] text-lg text-[#C9A84C] font-[700] shrink-0 w-6">{item.step}</div>
                <div>
                  <p className="font-[family-name:var(--font-heading)] text-sm font-[500] tracking-[0.03em] uppercase text-[#1C1917] mb-1">{item.item}</p>
                  <p className="text-xs text-[#6B5B4E] font-[300] leading-relaxed">{item.detail}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="text-[#6B5B4E] text-sm font-[300] tracking-wide leading-relaxed mt-6">
            Submit through HMRC&apos;s SEIS/EIS online service. You can apply for both SEIS and EIS in the same submission if you plan to use both in your round.
          </p>
        </section>

        <section className="mb-14">
          <h2 className="font-[family-name:var(--font-heading)] text-2xl font-[500] tracking-[0.05em] uppercase text-[#1C1917] mb-6">
            Impact on Your Cap Table
          </h2>
          <p className="text-[#6B5B4E] text-base font-[300] tracking-wide leading-relaxed mb-8">
            SEIS and EIS impose constraints on your share structure that affect every subsequent cap table decision. These are the most important ones:
          </p>
          <div className="space-y-4">
            {capTableImpacts.map((item) => (
              <div key={item.issue} className="border border-[#D4C9B8] bg-[#FDFAF5] p-6">
                <h3 className="font-[family-name:var(--font-heading)] text-sm font-[500] tracking-[0.05em] uppercase text-[#1C1917] mb-2">{item.issue}</h3>
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
            SEIS/EIS Flags on Every Share Class
          </h3>
          <p className="text-white/60 text-sm font-[300] tracking-wide leading-relaxed mb-6">
            Upload your cap table and CapBrief shows which share classes are SEIS/EIS eligible, which have preferential rights that would disqualify, and the remaining SEIS headroom before you exhaust the £250K lifetime limit. Know your position before your investors ask.
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
          <p className="font-[family-name:var(--font-mono)] text-xs tracking-[0.2em] uppercase text-[#C9A84C] mb-3">Raise with Confidence</p>
          <h3 className="font-[family-name:var(--font-heading)] text-xl font-[500] tracking-[0.05em] uppercase text-white mb-3">
            Get Your Cap Table SEIS-Ready Before You Raise
          </h3>
          <p className="text-white/60 text-sm font-[300] tracking-wide leading-relaxed mb-6">
            CapBrief analyses your existing share structure and flags anything that could jeopardise SEIS or EIS eligibility. Upload your CSV and get a compliance report in minutes.
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
