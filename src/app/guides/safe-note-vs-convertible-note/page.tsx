import type { Metadata } from 'next'
import Link from 'next/link'

export const dynamic = 'force-static'

export const metadata: Metadata = {
  title: 'SAFE Note vs Convertible Note: Which Should You Use to Raise Pre-Seed? | CapBrief',
  description: 'SAFEs and convertible notes are both ways to raise money before a priced round — but they have different legal structures, terms, and implications for your cap table.',
  openGraph: {
    title: 'SAFE Note vs Convertible Note: Which Should You Use to Raise Pre-Seed? | CapBrief',
    description: 'SAFEs and convertible notes are both ways to raise money before a priced round — but they have different legal structures, terms, and implications for your cap table.',
    type: 'article',
  },
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'SAFE Note vs Convertible Note: Which Should You Use to Raise Pre-Seed?',
  description: 'SAFEs and convertible notes are both ways to raise money before a priced round — but they have different legal structures, terms, and implications for your cap table.',
  author: { '@type': 'Organization', name: 'CapBrief' },
  publisher: { '@type': 'Organization', name: 'CapBrief', url: 'https://roundbrief.com' },
}

const comparison = [
  {
    factor: 'Legal structure',
    safe: 'Contract for future equity — not debt',
    convertible: 'Debt instrument — legally a loan',
  },
  {
    factor: 'Repayment obligation',
    safe: 'None. If the company fails, investors lose everything.',
    convertible: 'Technically repayable at maturity. Investors can demand repayment if no round closes.',
  },
  {
    factor: 'Interest accrual',
    safe: 'No interest accrues.',
    convertible: 'Interest accrues (typically 5-8% per year) and converts into additional shares.',
  },
  {
    factor: 'Maturity date',
    safe: 'None. Converts at the next priced round or liquidity event.',
    convertible: 'Has a maturity date (typically 18-24 months). Creates a deadline pressure.',
  },
  {
    factor: 'Valuation cap',
    safe: 'Typically yes — converts at cap or priced round, whichever is lower.',
    convertible: 'Usually yes, with the same mechanics.',
  },
  {
    factor: 'Discount rate',
    safe: 'Optional. If included, typically 10-20%.',
    convertible: 'Common. Typically 15-25% off the priced round price.',
  },
  {
    factor: 'SEIS/EIS eligible (UK)',
    safe: 'SAFEs are generally NOT SEIS/EIS eligible — they are not ordinary shares.',
    convertible: 'Convertible loans are NOT eligible until conversion to shares.',
  },
  {
    factor: 'Balance sheet treatment',
    safe: 'Equity-like (often shown as equity on the balance sheet in the US). UK accounting treatment varies.',
    convertible: 'Liability on the balance sheet until converted.',
  },
  {
    factor: 'Founder-friendliness',
    safe: 'More founder-friendly — no debt, no maturity deadline, simpler.',
    convertible: 'Slightly more investor-friendly — gives investors a repayment option if things go wrong.',
  },
  {
    factor: 'Negotiation overhead',
    safe: 'Very low — standard YC SAFE docs, minimal negotiation.',
    convertible: 'Higher — more terms to negotiate (interest rate, maturity, MFN clause).',
  },
]

const faqs = [
  {
    q: 'What is a SAFE note?',
    a: 'SAFE stands for Simple Agreement for Future Equity. It is a contract where an investor gives you money now in exchange for the right to receive shares later, when you close a priced equity round. SAFEs were created by Y Combinator to simplify early-stage fundraising. They are not debt — there is no maturity date and no interest accrual. If the company never raises a priced round, the SAFE never converts and the investor gets nothing. The standard YC SAFE documents are available free online and are widely accepted in the US and increasingly in the UK.',
  },
  {
    q: 'What is a convertible note?',
    a: 'A convertible note is a short-term loan that converts into equity at the next funding round. Unlike a SAFE, it is legally debt — it accrues interest (typically 5-8% per year), has a maturity date (typically 18-24 months), and the investor can technically demand repayment if the company has not raised a qualifying round by maturity. In practice, most investors would rather convert than demand repayment on a failing startup, but the legal right creates negotiating leverage.',
  },
  {
    q: 'Which should I use in the UK?',
    a: 'In the UK, SAFEs are less standard than in the US — UK angel investors are more familiar with convertible loan notes (CLNs). However, SAFEs are becoming more accepted, particularly in London and with investors who have US experience. The bigger constraint is SEIS/EIS: neither instrument is eligible for SEIS or EIS relief until conversion to ordinary shares. If your investors want SEIS/EIS relief (which most UK angels do), you either need to issue ordinary shares directly or ensure the conversion happens within the SEIS/EIS company age limits.',
  },
  {
    q: 'What is a valuation cap and why does it matter?',
    a: 'A valuation cap is the maximum valuation at which your SAFE or convertible note will convert into shares. If you raise on a SAFE with a £2M cap, and then close a seed round at a £5M pre-money valuation, the SAFE investor converts as if the company were worth £2M — getting 2.5x more shares than a new investor at the same price. The cap is the investor\'s reward for taking early risk. Without a cap, the SAFE is nearly worthless to investors in a successful outcome.',
  },
  {
    q: 'Can I have both SAFEs and convertible notes outstanding at the same time?',
    a: 'Yes, and it is fairly common. Different early investors may prefer different instruments. The key is to track them carefully on your cap table, with all terms (cap, discount, maturity, interest) recorded for each instrument. When the priced round comes, you need to calculate the conversion for each instrument separately — they may convert at different prices depending on their terms.',
  },
  {
    q: 'How do SAFEs and convertible notes affect my cap table?',
    a: 'Before conversion, they appear as future equity obligations — not as shareholder rows, but as instruments that will generate shares. Most cap tables show them in a separate section with the conversion calculations at assumed scenarios. After conversion (at the priced round), each instrument generates a row of shares for each investor, usually in a separate share class from the round investors. CapBrief handles this calculation automatically when you upload your cap table CSV.',
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

export default function SafeNoteVsConvertibleNotePage() {
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
            SAFE vs Convertible Note
          </p>
          <h1 className="font-[family-name:var(--font-heading)] text-4xl font-[700] tracking-[0.05em] uppercase text-white mb-6 leading-tight">
            SAFE Note vs Convertible Note
          </h1>
          <p className="text-lg text-white/60 leading-relaxed font-[300] tracking-wide">
            Both instruments let you raise money before setting a company valuation. Both convert into shares at your next priced round. The differences — in legal structure, investor rights, and SEIS/EIS eligibility — matter significantly at seed stage in the UK. Here is how to choose.
          </p>
        </div>
      </section>

      <article className="max-w-[768px] mx-auto px-6 py-16">

        <section className="mb-14">
          <h2 className="font-[family-name:var(--font-heading)] text-2xl font-[500] tracking-[0.05em] uppercase text-[#1C1917] mb-6">
            Head-to-Head Comparison
          </h2>
          <p className="text-[#6B5B4E] text-base font-[300] tracking-wide leading-relaxed mb-8">
            The table below compares SAFEs and convertible notes across the factors that matter most for a UK seed-stage startup.
          </p>
          <div className="border border-[#D4C9B8] overflow-x-auto">
            <table className="w-full text-sm min-w-[480px]">
              <thead>
                <tr className="bg-[#1C1917]">
                  <th className="text-left py-3 px-4 font-[family-name:var(--font-heading)] text-[10px] tracking-[0.1em] uppercase text-[#C9A84C] w-1/3">Factor</th>
                  <th className="text-left py-3 px-4 font-[family-name:var(--font-heading)] text-[10px] tracking-[0.1em] uppercase text-[#C9A84C] w-1/3">SAFE Note</th>
                  <th className="text-left py-3 px-4 font-[family-name:var(--font-heading)] text-[10px] tracking-[0.1em] uppercase text-[#C9A84C] w-1/3">Convertible Note</th>
                </tr>
              </thead>
              <tbody>
                {comparison.map((row, i) => (
                  <tr key={row.factor} className={`border-t border-[#D4C9B8] ${i % 2 === 0 ? 'bg-[#FDFAF5]' : 'bg-[#F5F0E8]'}`}>
                    <td className="py-3 px-4 font-[family-name:var(--font-mono)] text-[11px] tracking-[0.05em] uppercase text-[#C9A84C] align-top">{row.factor}</td>
                    <td className="py-3 px-4 text-xs text-[#6B5B4E] font-[300] leading-relaxed align-top">{row.safe}</td>
                    <td className="py-3 px-4 text-xs text-[#6B5B4E] font-[300] leading-relaxed align-top">{row.convertible}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="mb-14">
          <h2 className="font-[family-name:var(--font-heading)] text-2xl font-[500] tracking-[0.05em] uppercase text-[#1C1917] mb-6">
            The UK-Specific Wrinkle: SEIS and EIS
          </h2>
          <p className="text-[#6B5B4E] text-base font-[300] tracking-wide leading-relaxed mb-6">
            This is the consideration that matters most for UK founders raising from UK angels, and it is almost never mentioned in US-centric guides.
          </p>
          <p className="text-[#6B5B4E] text-base font-[300] tracking-wide leading-relaxed mb-6">
            SEIS and EIS relief — which give investors up to 50% income tax relief (SEIS) or 30% income tax relief (EIS) on their investment — are only available on qualifying ordinary share subscriptions. Neither SAFEs nor convertible notes are eligible until they convert into shares. And the conversion must happen while the company still meets the age and size limits for SEIS/EIS eligibility.
          </p>
          <p className="text-[#6B5B4E] text-base font-[300] tracking-wide leading-relaxed mb-6">
            In practice, this means:
          </p>
          <div className="space-y-3 mb-6">
            {[
              'If your UK angel investors want SEIS relief, they need ordinary shares — not a SAFE or convertible note.',
              'If you use a convertible note, you must ensure conversion happens while SEIS eligibility remains intact (within 3 years of first commercial sale, and before you cross the employee/asset thresholds).',
              'Advance Assurance from HMRC for SEIS/EIS applies to specific share issuances — not to future convertible instruments.',
              'Some UK founders use a hybrid approach: issue SEIS shares directly to angels at a nominal valuation, then use SAFEs or convertible notes for later, larger cheques from non-SEIS investors.',
            ].map((point, i) => (
              <div key={i} className="flex gap-3 items-start">
                <div className="w-5 h-5 bg-[#C9A84C] shrink-0 mt-0.5 flex items-center justify-center">
                  <span className="font-[family-name:var(--font-mono)] text-[10px] font-[700] text-[#1C1917]">{i + 1}</span>
                </div>
                <p className="text-sm text-[#6B5B4E] font-[300] leading-relaxed">{point}</p>
              </div>
            ))}
          </div>
          <p className="text-[#6B5B4E] text-base font-[300] tracking-wide leading-relaxed">
            Get tax advice on SEIS/EIS structuring before you commit to either instrument. The tax relief available to investors is a significant fundraising advantage — do not accidentally structure it away.
          </p>
        </section>

        <div className="bg-[#1C1917] border border-[#C9A84C] p-8 mb-14 relative overflow-hidden">
          <div className="absolute top-3 left-3 w-5 h-5 border-t border-l border-[#C9A84C] opacity-40" />
          <div className="absolute top-3 right-3 w-5 h-5 border-t border-r border-[#C9A84C] opacity-40" />
          <div className="absolute bottom-3 left-3 w-5 h-5 border-b border-l border-[#C9A84C] opacity-40" />
          <div className="absolute bottom-3 right-3 w-5 h-5 border-b border-r border-[#C9A84C] opacity-40" />
          <p className="font-[family-name:var(--font-mono)] text-xs tracking-[0.2em] uppercase text-[#C9A84C] mb-3">CapBrief</p>
          <h3 className="font-[family-name:var(--font-heading)] text-xl font-[500] tracking-[0.05em] uppercase text-white mb-3">
            Model How Your SAFEs Convert at the Next Round
          </h3>
          <p className="text-white/60 text-sm font-[300] tracking-wide leading-relaxed mb-6">
            Upload your cap table — including outstanding SAFEs and convertible notes — and CapBrief shows exactly how each instrument converts at different valuation scenarios. Know your fully diluted position before you price your next round.
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
            <Link href="/guides/cap-table-explained" className="block text-sm text-white/60 hover:text-white transition-colors font-[300] tracking-wide">
              → Cap Table Explained: What It Is and Why It Matters
            </Link>
            <Link href="/guides/seis-eis-eligibility-guide" className="block text-sm text-white/60 hover:text-white transition-colors font-[300] tracking-wide">
              → SEIS and EIS Eligibility Guide for UK Startups
            </Link>
            <Link href="/guides/startup-dilution-guide" className="block text-sm text-white/60 hover:text-white transition-colors font-[300] tracking-wide">
              → Startup Dilution Guide: How Funding Rounds Shrink Founder Ownership
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
