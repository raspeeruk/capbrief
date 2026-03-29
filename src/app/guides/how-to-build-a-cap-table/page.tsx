import type { Metadata } from 'next'
import Link from 'next/link'

export const dynamic = 'force-static'

export const metadata: Metadata = {
  title: 'How to Build a Cap Table from Scratch: Step-by-Step for Startup Founders | CapBrief',
  description: 'A practical step-by-step guide to building a cap table from incorporation — what to record, how to structure it, and how to keep it accurate as your company grows.',
  openGraph: {
    title: 'How to Build a Cap Table from Scratch: Step-by-Step for Startup Founders | CapBrief',
    description: 'A practical step-by-step guide to building a cap table from incorporation — what to record, how to structure it, and how to keep it accurate as your company grows.',
    type: 'article',
  },
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'How to Build a Cap Table from Scratch: Step-by-Step for Startup Founders',
  description: 'A practical step-by-step guide to building a cap table from incorporation — what to record, how to structure it, and how to keep it accurate as your company grows.',
  author: { '@type': 'Organization', name: 'CapBrief' },
  publisher: { '@type': 'Organization', name: 'CapBrief', url: 'https://roundbrief.com' },
}

const steps = [
  {
    num: '01',
    title: 'Record the founding share issuance',
    detail: 'Start with the incorporation event. Record each founder\'s full legal name, number of ordinary shares issued, the nominal value per share (typically £0.0001 in the UK), and the date of incorporation. This is your baseline — every subsequent event adds to or modifies this foundation. Check your Companies House confirmation statement to verify these figures are correct.',
  },
  {
    num: '02',
    title: 'Add vesting schedules to founder shares',
    detail: 'If you have co-founders, each founding share package should have a vesting schedule attached — even if it was not formally documented at incorporation. The standard is 4 years with a 1-year cliff. Record the start date, cliff date, vesting end date, and what happens on termination. If a co-founder leaves before their cliff, unvested shares should be bought back at nominal value. Document this now — reconstructing vesting history during due diligence is painful.',
  },
  {
    num: '03',
    title: 'Record any pre-seed instruments (SAFEs or convertible notes)',
    detail: 'If you have raised money on a SAFE or convertible note, add each instrument as a row in a separate section — not as shares yet. Record: investor name, investment amount, date, valuation cap, discount rate (if any), and maturity date (for convertible notes). Show the number of shares each instrument would generate at the cap valuation — this is your "conversion at cap" column. Update this whenever the assumed conversion valuation changes.',
  },
  {
    num: '04',
    title: 'Create the option pool section',
    detail: 'If the board has authorised an option scheme, record the total pool size and any grants made. For each grant: employee name, number of options, grant date, exercise price, vesting start date, cliff, vesting period, and expiry date. Show both the granted and ungranted portions of the pool. Options that have not been granted should appear as "unallocated pool" — they still count in your fully diluted total.',
  },
  {
    num: '05',
    title: 'Calculate fully diluted ownership',
    detail: 'Now calculate the ownership percentages. Fully diluted share count = issued shares + all unexercised options + all unvested options + shares from convertible instruments at assumed conversion. Divide each holder\'s share count by the fully diluted total to get their fully diluted percentage. Run a separate column for issued (basic) percentage using only the actual issued share count as denominator. Both columns should add to 100%.',
  },
  {
    num: '06',
    title: 'Add share class detail',
    detail: 'At seed stage and beyond, you will have multiple share classes — ordinary shares (founders), A-ordinary (seed investors), and possibly preference shares. Each class may have different rights: liquidation preference, dividend preference, anti-dilution provisions, conversion ratio. Record the rights for each class in a separate "Share Classes" tab. When modelling an exit, the class rights determine who gets paid first and how much.',
  },
  {
    num: '07',
    title: 'Build a scenario tab',
    detail: 'Add a separate tab for scenario modelling — specifically, what happens at the next funding round and at various exit values. For the next round: input assumed pre-money valuation and investment amount, calculate new shares issued, show post-round ownership for each holder. For exit scenarios: model proceeds at £5M, £10M, £25M, and £50M — applying any liquidation preferences before distributing remaining proceeds pro-rata. This tab is what you show investors in board meetings.',
  },
]

const faqs = [
  {
    q: 'When should I create a cap table?',
    a: 'At incorporation, before any shares are issued. Most founders delay — then have to reconstruct history from emails, company house filings, and shareholder agreements. Reconstruction introduces errors. Create it on day one with the founding share issuance, and update it within 48 hours of every subsequent equity event.',
  },
  {
    q: 'What software should I use to build my cap table?',
    a: 'At pre-seed and seed stage, a well-structured Google Sheet or Excel spreadsheet is entirely adequate. Dedicated cap table software (Carta, Capdesk, Seedlegals) adds value when you have 20+ shareholders, complex share classes, or need automated legal document generation. The spreadsheet fails not because it is the wrong tool, but because founders use percentages as the source of truth instead of share counts — leading to rounding errors and inconsistencies.',
  },
  {
    q: 'What is the difference between a basic cap table and a fully diluted cap table?',
    a: 'A basic (issued) cap table shows only actual issued shares — shares that have been formally allocated to shareholders. A fully diluted cap table includes issued shares plus all potential shares: unexercised options, unvested equity, warrants, and the shares that convertible instruments (SAFEs, convertible notes) would generate on conversion. Investors always work from the fully diluted total. If you quote ownership on a basic basis to investors, you will have a disagreement when they run their own numbers.',
  },
  {
    q: 'What is a 409A valuation and do UK startups need one?',
    a: 'A 409A valuation is a US IRS requirement — it is the fair market value of a company\'s common stock, used to set the exercise price of stock options. UK companies do not need a 409A valuation. Instead, UK startups set EMI option exercise prices based on an HMRC-agreed valuation. You should agree this valuation with HMRC before granting EMI options — if the exercise price is too low relative to market value, HMRC can challenge it. HMRC valuation agreements are typically valid for 90 days.',
  },
  {
    q: 'How do I handle a cap table error discovered during due diligence?',
    a: 'Immediately. A discrepancy between your cap table and Companies House records is a legal problem, not just an admin one. You will need to either correct the Companies House records (via the relevant form) or correct your cap table to match. Do not try to paper over it — experienced investors\' lawyers will find it, and discovering it mid-deal erodes trust. Better to surface it yourself, explain the history, and have the corrective action already underway.',
  },
  {
    q: 'Do I need a lawyer to build a cap table?',
    a: 'No — the cap table itself is an internal record, not a legal document. However, the events that change the cap table — issuing shares, creating an option scheme, converting a SAFE — require legal documentation: board resolutions, share subscription agreements, option grant letters. The cap table should reflect those documents, not substitute for them. Use legal templates (Seedlegals, standard YC documents adapted for UK) for the underlying paperwork, and update your cap table to match.',
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

export default function HowToBuildACapTablePage() {
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
            How to Build a Cap Table
          </p>
          <h1 className="font-[family-name:var(--font-heading)] text-4xl font-[700] tracking-[0.05em] uppercase text-white mb-6 leading-tight">
            How to Build a Cap Table from Scratch
          </h1>
          <p className="text-lg text-white/60 leading-relaxed font-[300] tracking-wide">
            A cap table is not a complicated spreadsheet. It is a discipline — create it on day one, update it within 48 hours of every equity event, and never let it drift from your Companies House records. Here is exactly how to build and maintain one from incorporation to seed round.
          </p>
        </div>
      </section>

      <article className="max-w-[768px] mx-auto px-6 py-16">

        <section className="mb-14">
          <h2 className="font-[family-name:var(--font-heading)] text-2xl font-[500] tracking-[0.05em] uppercase text-[#1C1917] mb-6">
            Before You Build: Four Rules
          </h2>
          <div className="space-y-3 mb-8">
            {[
              'Use share counts as your source of truth — not percentages. Percentages are derived from share counts. If you store percentages, rounding errors compound across events.',
              'Match Companies House exactly. Every share issuance in your cap table must match the SH01 forms and confirmation statements filed at Companies House.',
              'Version it. Every time the cap table changes, save a dated copy. You need to be able to reconstruct the table at any point in history.',
              'Record the event, not just the outcome. Note what caused each change — priced round, SAFE conversion, option grant — not just the resulting numbers.',
            ].map((rule, i) => (
              <div key={i} className="flex gap-3 items-start border border-[#D4C9B8] bg-[#FDFAF5] p-4">
                <div className="w-6 h-6 bg-[#1C1917] shrink-0 flex items-center justify-center">
                  <span className="font-[family-name:var(--font-mono)] text-[10px] font-[700] text-[#C9A84C]">{i + 1}</span>
                </div>
                <p className="text-sm text-[#6B5B4E] font-[300] leading-relaxed">{rule}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-14">
          <h2 className="font-[family-name:var(--font-heading)] text-2xl font-[500] tracking-[0.05em] uppercase text-[#1C1917] mb-6">
            The 7-Step Build Process
          </h2>
          <div className="space-y-6">
            {steps.map((step) => (
              <div key={step.num} className="border border-[#D4C9B8] bg-[#FDFAF5] p-6">
                <div className="flex items-start gap-4 mb-3">
                  <span className="font-[family-name:var(--font-mono)] text-2xl font-[700] text-[#C9A84C] leading-none shrink-0">{step.num}</span>
                  <h3 className="font-[family-name:var(--font-heading)] text-base font-[600] tracking-[0.05em] uppercase text-[#1C1917] leading-tight pt-1">{step.title}</h3>
                </div>
                <p className="text-sm text-[#6B5B4E] font-[300] leading-relaxed pl-12">{step.detail}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-14">
          <h2 className="font-[family-name:var(--font-heading)] text-2xl font-[500] tracking-[0.05em] uppercase text-[#1C1917] mb-6">
            What Your Cap Table Should Look Like
          </h2>
          <p className="text-[#6B5B4E] text-base font-[300] tracking-wide leading-relaxed mb-6">
            A clean cap table at seed stage has three sections, each in its own tab or clearly delineated block:
          </p>
          <div className="space-y-4">
            {[
              {
                section: 'Tab 1: Shareholder Register',
                contents: 'All issued shares by shareholder — name, share class, shares held, issue price, issue date, vesting schedule. One row per shareholder per share class. Sorted by share class, then by date of issue.',
              },
              {
                section: 'Tab 2: Option Register',
                contents: 'All option grants — employee name, grant date, number of options, exercise price, vesting schedule, expiry date, status (outstanding/exercised/lapsed). Unallocated pool shown as a separate row at the bottom.',
              },
              {
                section: 'Tab 3: Convertible Instruments',
                contents: 'All SAFEs, convertible notes, and warrants — investor name, instrument type, investment amount, date, cap, discount, maturity (if applicable), and calculated shares at conversion scenarios.',
              },
            ].map((item) => (
              <div key={item.section} className="border border-[#D4C9B8] bg-[#FDFAF5] p-5">
                <p className="font-[family-name:var(--font-heading)] text-sm font-[600] tracking-[0.05em] uppercase text-[#1C1917] mb-2">{item.section}</p>
                <p className="text-sm text-[#6B5B4E] font-[300] leading-relaxed">{item.contents}</p>
              </div>
            ))}
          </div>
          <p className="text-sm text-[#6B5B4E] font-[300] leading-relaxed mt-6">
            A fourth tab for scenario modelling is optional but strongly recommended before any fundraising conversation.
          </p>
        </section>

        <div className="bg-[#1C1917] border border-[#C9A84C] p-8 mb-14 relative overflow-hidden">
          <div className="absolute top-3 left-3 w-5 h-5 border-t border-l border-[#C9A84C] opacity-40" />
          <div className="absolute top-3 right-3 w-5 h-5 border-t border-r border-[#C9A84C] opacity-40" />
          <div className="absolute bottom-3 left-3 w-5 h-5 border-b border-l border-[#C9A84C] opacity-40" />
          <div className="absolute bottom-3 right-3 w-5 h-5 border-b border-r border-[#C9A84C] opacity-40" />
          <p className="font-[family-name:var(--font-mono)] text-xs tracking-[0.2em] uppercase text-[#C9A84C] mb-3">CapBrief</p>
          <h3 className="font-[family-name:var(--font-heading)] text-xl font-[500] tracking-[0.05em] uppercase text-white mb-3">
            Turn Your Cap Table CSV into an Investor-Ready Report
          </h3>
          <p className="text-white/60 text-sm font-[300] tracking-wide leading-relaxed mb-6">
            Built your cap table in a spreadsheet? Good. Now upload it to CapBrief — we validate the structure, calculate fully diluted ownership across all share classes and instruments, and generate a clean PDF report with dilution charts suitable for your next investor meeting.
          </p>
          <Link
            href="/auth/signup"
            className="inline-block font-[family-name:var(--font-heading)] text-sm tracking-[0.1em] uppercase bg-[#C9A84C] text-[#1C1917] px-8 py-4 hover:bg-[#B8930A] transition-colors"
          >
            Upload My Cap Table Free →
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
            <Link href="/guides/cap-table-template" className="block text-sm text-white/60 hover:text-white transition-colors font-[300] tracking-wide">
              → Cap Table Template: What to Include
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
