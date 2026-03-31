import type { Metadata } from 'next'
import Link from 'next/link'

export const dynamic = 'force-static'

export const metadata: Metadata = {
  title: 'Cap Table for Seed Round: Step-by-Step Setup | CapBrief',
  description: 'How to set up and manage your cap table for a seed funding round. Covers pre-money valuation, option pool creation, SEIS/EIS share classes, and post-round ownership calculations.',
  openGraph: {
    title: 'Cap Table for Seed Round: Step-by-Step Setup | CapBrief',
    description: 'How to set up and manage your cap table for a seed funding round. Covers pre-money valuation, option pool creation, SEIS/EIS share classes, and post-round ownership calculations.',
    type: 'article',
  },
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Cap Table for Seed Round: Step-by-Step Setup',
  description: 'How to set up and manage your cap table for a seed funding round. Covers pre-money valuation, option pool creation, SEIS/EIS share classes, and post-round ownership calculations.',
  author: { '@type': 'Organization', name: 'CapBrief' },
  publisher: { '@type': 'Organization', name: 'CapBrief', url: 'https://roundbrief.com' },
}

const faqs = [
  {
    q: 'What should a cap table look like before a seed round?',
    a: 'Before a seed round, a clean cap table has: founder shares with vesting schedules, any angel/pre-seed investors (either as shareholders or convertible note holders), and an authorised but unallocated option pool. Each founder should be listed with their share count, share class (ordinary), vesting start date, and cliff date. Convertible notes appear as a separate line with principal, interest rate, cap, and discount terms. The option pool appears as a reserved block showing total authorised options and any grants already made.',
  },
  {
    q: 'How much dilution should I expect at seed stage?',
    a: 'UK seed rounds typically dilute founders by 15-25%. If you raise £500K at a £2M pre-money valuation, investors get 20% of the post-money company (£500K / £2.5M). Add a 10% option pool expansion and founders might go from 100% to 70% ownership after the seed round. This is normal. The key is ensuring the price per share reflects genuine traction, not just hope — otherwise you are giving away equity too cheaply.',
  },
  {
    q: 'Should I create an option pool before or during the seed round?',
    a: 'Before, if you want to preserve your negotiating position. When an investor says "we need a 15% option pool," they mean 15% of the pre-money company — which dilutes only the founders, not the new investor. If you create the pool before the round, you can negotiate its size as part of the pre-money valuation. Creating it during the round means the dilution comes entirely from founder equity. This is the single biggest source of unexpected dilution at seed stage.',
  },
  {
    q: 'What share class do seed investors get?',
    a: 'UK seed investors typically receive a new class of shares — often called "Seed" shares or "A Ordinary" shares. These carry the same economic rights as founder ordinary shares but may include additional rights: anti-dilution protection, information rights, and board observer or board seat rights. In SEIS/EIS rounds, the shares must be "full risk" ordinary shares to qualify for tax relief — preference shares and guaranteed return mechanisms will disqualify the entire round.',
  },
  {
    q: 'How do convertible notes appear on a seed-round cap table?',
    a: 'Before conversion, convertible notes appear as a separate section showing the principal amount, interest accrued, conversion cap, and discount rate. When the seed round closes and the notes convert, the note holders move to the shareholder section with their converted share count calculated using whichever mechanism (cap or discount) gives them more shares. The fully diluted cap table should always include convertible notes — even before conversion — to give a realistic ownership picture.',
  },
  {
    q: 'What filings are required at Companies House after a seed round?',
    a: 'You must file a Return of Allotments (SH01 form) within one month of issuing new shares. This includes details of the shares issued: number, class, nominal value, and amount paid. If you created a new share class, you may also need to file amended articles of association. If new directors were appointed (e.g., an investor board seat), file form AP01 (individual) or AP02 (corporate). Late filing of the SH01 is a criminal offence for directors — set a calendar reminder for the day shares are issued.',
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

export default function CapTableForSeedRoundPage() {
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
            Cap Table for Seed Round
          </p>
          <h1 className="font-[family-name:var(--font-heading)] text-4xl font-[700] tracking-[0.05em] uppercase text-white mb-6 leading-tight">
            Cap Table for Seed Round: Step-by-Step Setup
          </h1>
          <p className="text-lg text-white/60 leading-relaxed font-[300] tracking-wide">
            Your seed round is when your cap table goes from simple (two founders, 100%) to complex (multiple share classes, option pool, convertible notes, investor rights). Getting the cap table right at this stage prevents compounding errors that become expensive at Series A.
          </p>
        </div>
      </section>

      <article className="max-w-[768px] mx-auto px-6 py-16">

        <section className="mb-14">
          <h2 className="font-[family-name:var(--font-heading)] text-2xl font-[500] tracking-[0.05em] uppercase text-[#1C1917] mb-6">
            Step 1: Clean Up Your Pre-Seed Cap Table
          </h2>
          <p className="text-[#6B5B4E] text-base font-[300] tracking-wide leading-relaxed mb-6">
            Before you raise a seed round, your cap table must be accurate and complete. This means reconciling it with Companies House records, confirming all convertible instruments are properly documented, and ensuring vesting schedules are in place for all founders.
          </p>
          <p className="text-[#6B5B4E] text-base font-[300] tracking-wide leading-relaxed mb-6">
            Common issues to fix before going to investors: shares issued but not filed with Companies House (SH01 missing), founder shares without vesting agreements, convertible notes with unclear conversion terms, and option pool that was discussed but never formally authorised by the board.
          </p>
          <p className="text-[#6B5B4E] text-base font-[300] tracking-wide leading-relaxed">
            Run a Companies House check: download your company's filing history and confirm that every share allotment matches your internal cap table. If there are discrepancies, fix them before investor due diligence starts — not during it.
          </p>
        </section>

        <section className="mb-14">
          <h2 className="font-[family-name:var(--font-heading)] text-2xl font-[500] tracking-[0.05em] uppercase text-[#1C1917] mb-6">
            Step 2: Model the Round Economics
          </h2>
          <p className="text-[#6B5B4E] text-base font-[300] tracking-wide leading-relaxed mb-6">
            Before negotiating with investors, model the round yourself. You need to understand how much you are giving up under different scenarios.
          </p>
          <p className="text-[#6B5B4E] text-base font-[300] tracking-wide leading-relaxed mb-6">
            <strong className="text-[#1C1917]">Pre-money valuation:</strong> This is the value of your company before the new investment. If you are raising £500K at a £2M pre-money, the post-money valuation is £2.5M, and investors get 20%.
          </p>
          <p className="text-[#6B5B4E] text-base font-[300] tracking-wide leading-relaxed mb-6">
            <strong className="text-[#1C1917]">Option pool:</strong> Investors typically want a 10-15% option pool included in the pre-money valuation. This means the pool dilutes founders, not investors. If the pre-money is £2M and you create a 10% pool, the effective pre-money for founders is £1.8M (the pool is carved out of your equity, not the investor's).
          </p>
          <p className="text-[#6B5B4E] text-base font-[300] tracking-wide leading-relaxed">
            <strong className="text-[#1C1917]">Convertible note conversion:</strong> If you have outstanding convertible notes with a cap lower than the round's pre-money valuation, they convert at the cap — creating additional dilution for founders. Model this precisely: a £100K note with a £1M cap converting into a round at £2M pre-money takes 10% of pre-money equity, not 5%.
          </p>
        </section>

        <section className="mb-14">
          <h2 className="font-[family-name:var(--font-heading)] text-2xl font-[500] tracking-[0.05em] uppercase text-[#1C1917] mb-6">
            Step 3: Structure the Share Classes
          </h2>
          <p className="text-[#6B5B4E] text-base font-[300] tracking-wide leading-relaxed mb-6">
            At seed stage, you will typically have two share classes: Ordinary shares (held by founders and possibly early angels) and Seed shares (issued to the new round's investors). If you raised a SEIS round earlier, those investors may hold a separate class.
          </p>
          <p className="text-[#6B5B4E] text-base font-[300] tracking-wide leading-relaxed mb-6">
            Seed shares usually carry the same economic rights as ordinary shares (same dividends, same pro-rata share of exit proceeds) but may include additional governance rights: a board seat, information rights, consent rights on reserved matters, and anti-dilution protection.
          </p>
          <p className="text-[#6B5B4E] text-base font-[300] tracking-wide leading-relaxed">
            For SEIS/EIS purposes, the Seed shares must be "full risk" ordinary shares. They cannot have a preferential right to capital on a winding-up that exceeds a reasonable commercial return. If your investor wants a 1x liquidation preference, discuss with your lawyer whether this can be structured in the shareholder agreement (contractual) rather than in the share rights (constitutional) to preserve EIS eligibility.
          </p>
        </section>

        <section className="mb-14">
          <h2 className="font-[family-name:var(--font-heading)] text-2xl font-[500] tracking-[0.05em] uppercase text-[#1C1917] mb-6">
            Step 4: Calculate Post-Round Ownership
          </h2>
          <p className="text-[#6B5B4E] text-base font-[300] tracking-wide leading-relaxed mb-8">
            Here is a worked example for a typical UK seed round.
          </p>
          <div className="border border-[#D4C9B8] overflow-hidden mb-6">
            <div className="grid grid-cols-4 bg-[#1C1917] text-white">
              <div className="p-4 border-r border-[#333]"><p className="font-[family-name:var(--font-heading)] text-xs font-[600] tracking-[0.1em] uppercase">Shareholder</p></div>
              <div className="p-4 border-r border-[#333]"><p className="font-[family-name:var(--font-heading)] text-xs font-[600] tracking-[0.1em] uppercase">Shares</p></div>
              <div className="p-4 border-r border-[#333]"><p className="font-[family-name:var(--font-heading)] text-xs font-[600] tracking-[0.1em] uppercase">Issued %</p></div>
              <div className="p-4"><p className="font-[family-name:var(--font-heading)] text-xs font-[600] tracking-[0.1em] uppercase">Fully Diluted %</p></div>
            </div>
            {[
              ['Founder A', '550,000', '38.6%', '33.0%'],
              ['Founder B', '450,000', '31.6%', '27.0%'],
              ['SEIS Angels', '150,000', '10.5%', '9.0%'],
              ['Conv. Note (converted)', '100,000', '7.0%', '6.0%'],
              ['Seed Investor', '175,000', '12.3%', '10.5%'],
              ['Option Pool (unallocated)', '—', '—', '14.5%'],
              ['Total', '1,425,000', '100%', '100%'],
            ].map(([name, shares, issued, fd], i) => (
              <div key={name} className={`grid grid-cols-4 ${i % 2 === 0 ? 'bg-[#FDFAF5]' : 'bg-[#F5F0E8]'} ${i === 6 ? 'font-[600]' : ''}`}>
                <div className="p-4 border-r border-[#D4C9B8]"><p className="text-sm text-[#1C1917]">{name}</p></div>
                <div className="p-4 border-r border-[#D4C9B8]"><p className="text-sm text-[#6B5B4E] font-[300]">{shares}</p></div>
                <div className="p-4 border-r border-[#D4C9B8]"><p className="text-sm text-[#6B5B4E] font-[300]">{issued}</p></div>
                <div className="p-4"><p className="text-sm text-[#6B5B4E] font-[300]">{fd}</p></div>
              </div>
            ))}
          </div>
          <p className="text-[#6B5B4E] text-base font-[300] tracking-wide leading-relaxed">
            Notice the difference between issued and fully diluted percentages. Founder A holds 38.6% of issued shares but only 33.0% on a fully diluted basis — because the option pool and unexercised options reduce everyone's percentage. Investors always think in fully diluted terms. So should you.
          </p>
        </section>

        <section className="mb-14">
          <h2 className="font-[family-name:var(--font-heading)] text-2xl font-[500] tracking-[0.05em] uppercase text-[#1C1917] mb-6">
            Step 5: Set Up the Option Pool
          </h2>
          <p className="text-[#6B5B4E] text-base font-[300] tracking-wide leading-relaxed mb-6">
            Most seed investors will require a 10-15% option pool as part of the deal. The pool is reserved for future employee grants — typically using an EMI (Enterprise Management Incentive) scheme, which gives employees the most favourable tax treatment (capital gains tax at 10% on exercise, rather than income tax at up to 45%).
          </p>
          <p className="text-[#6B5B4E] text-base font-[300] tracking-wide leading-relaxed mb-6">
            The pool should be sized based on your hiring plan for the next 18-24 months. If you plan to hire a CTO (3-5% equity), two senior engineers (1-2% each), and a head of sales (1-2%), you need a 7-11% pool. Adding a buffer for unexpected hires, a 10-12% pool is reasonable. Resist investor pressure for a 20% pool — it dilutes founders without a clear need.
          </p>
          <p className="text-[#6B5B4E] text-base font-[300] tracking-wide leading-relaxed">
            Apply for HMRC EMI advance approval before making grants. EMI-qualifying options are exempt from income tax and National Insurance on exercise, and the gain is taxed at 10% CGT (under Business Asset Disposal Relief, formerly Entrepreneurs' Relief, on the first £1M of lifetime gains). The company must have fewer than 250 employees and gross assets under £30M to qualify for EMI.
          </p>
        </section>

        <section className="mb-14">
          <h2 className="font-[family-name:var(--font-heading)] text-2xl font-[500] tracking-[0.05em] uppercase text-[#1C1917] mb-6">
            Step 6: File Everything
          </h2>
          <p className="text-[#6B5B4E] text-base font-[300] tracking-wide leading-relaxed mb-6">
            After closing the seed round, file within these deadlines:
          </p>
          <div className="space-y-4">
            {[
              { filing: 'Return of Allotments (SH01)', deadline: 'Within 1 month of share issue. Criminal offence for directors if late.' },
              { filing: 'Updated Articles of Association', deadline: 'Within 15 days of the special resolution adopting new articles (if share classes changed).' },
              { filing: 'Director appointments (AP01)', deadline: 'Within 14 days of the appointment of any new director (e.g., investor board seat).' },
              { filing: 'EMI option notifications', deadline: 'Within 92 days of each individual option grant, via the company\'s online ERS service with HMRC.' },
              { filing: 'SEIS/EIS compliance statement', deadline: 'After the trade has been carried on for at least 4 months (or if less than 4 months, when the company starts trading). File via the EIS1 form.' },
            ].map((item) => (
              <div key={item.filing} className="border border-[#D4C9B8] bg-[#FDFAF5] p-5">
                <p className="font-[family-name:var(--font-heading)] text-sm font-[600] tracking-[0.05em] uppercase text-[#1C1917] mb-2">{item.filing}</p>
                <p className="text-sm text-[#6B5B4E] font-[300] leading-relaxed">{item.deadline}</p>
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
            Model Your Seed Round Before You Negotiate
          </h3>
          <p className="text-white/60 text-sm font-[300] tracking-wide leading-relaxed mb-6">
            Upload your pre-round cap table and CapBrief models different seed round scenarios — varying the pre-money, investment size, option pool, and convertible note terms — so you know exactly what you are giving up before you sign.
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
            <Link href="/guides/startup-dilution-guide" className="block text-sm text-white/60 hover:text-white transition-colors font-[300] tracking-wide">
              → Startup Dilution Guide: How Ownership Shrinks
            </Link>
            <Link href="/guides/seis-vs-eis-comparison" className="block text-sm text-white/60 hover:text-white transition-colors font-[300] tracking-wide">
              → SEIS vs EIS: Complete Comparison Guide
            </Link>
            <Link href="/guides/convertible-note-template-uk" className="block text-sm text-white/60 hover:text-white transition-colors font-[300] tracking-wide">
              → Convertible Note Template UK: Free Download + Guide
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
