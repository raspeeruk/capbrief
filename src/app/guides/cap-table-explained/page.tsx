import type { Metadata } from 'next'
import Link from 'next/link'

export const dynamic = 'force-static'

export const metadata: Metadata = {
  title: 'Cap Table Explained: What It Is, What Goes In It, and Why It Matters | CapBrief',
  description: 'A cap table records who owns what in your company. Learn the key columns, how it changes with each funding round, and what investors look for during due diligence.',
  openGraph: {
    title: 'Cap Table Explained: What It Is, What Goes In It, and Why It Matters | CapBrief',
    description: 'A cap table records who owns what in your company. Learn the key columns, how it changes with each funding round, and what investors look for during due diligence.',
    type: 'article',
  },
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Cap Table Explained: What It Is, What Goes In It, and Why It Matters',
  description: 'A cap table records who owns what in your company. Learn the key columns, how it changes with each funding round, and what investors look for during due diligence.',
  author: { '@type': 'Organization', name: 'CapBrief' },
  publisher: { '@type': 'Organization', name: 'CapBrief', url: 'https://roundbrief.com' },
}

const faqs = [
  {
    q: 'What is a cap table?',
    a: 'A capitalization table (cap table) is a spreadsheet or software record that shows who owns equity in a company, in what amounts, and in what form. It lists every shareholder, every share class, every option holder, and every convertible instrument. It is the single source of truth for company ownership — updated at every round, grant, transfer, or exercise event.',
  },
  {
    q: 'When should a startup create a cap table?',
    a: 'At incorporation, before any shares are issued or options granted. Most founders delay and then have to reconstruct history — which introduces errors and creates due diligence headaches. Create it on day one and update it after every equity event. A stale cap table is worse than no cap table because it creates false confidence.',
  },
  {
    q: 'What is the difference between issued shares and fully diluted shares?',
    a: 'Issued shares are shares that have actually been issued to shareholders. Fully diluted shares include issued shares plus all potential shares — unexercised options, unvested equity, warrants, and the potential shares from converting convertible notes or SAFEs. Investors almost always calculate ownership on a fully diluted basis. If you quote ownership on an issued basis, you will disagree with your investor\'s numbers.',
  },
  {
    q: 'Does a cap table need to be filed anywhere?',
    a: 'In the UK, share allotments are reported to Companies House via a Confirmation Statement and a Return of Allotments (SH01). The cap table itself is not filed, but the data must be consistent with your Companies House records. Discrepancies between your internal cap table and Companies House filings are a common due diligence failure point.',
  },
  {
    q: 'What do investors look for in a cap table during due diligence?',
    a: 'Investors check: (1) that founder shares have vesting schedules — unfounded equity in departed co-founders is a red flag; (2) that option pool size is appropriate and properly authorised; (3) that there are no surprise rights — drag-along, anti-dilution, or pre-emption rights that could complicate the deal; (4) that convertible instruments are correctly captured with full terms; (5) that Companies House records match the cap table exactly.',
  },
  {
    q: 'Can I manage my cap table in Excel?',
    a: 'Yes — at pre-seed and seed stage, a well-structured spreadsheet is entirely adequate. Problems arise when Excel is used as a calculation tool rather than a record-keeping tool: circular references, hard-coded percentages, and no version history. Use Excel to record facts (shares issued, option grants) and calculate percentages from those facts. Use CapBrief to model scenarios and generate investor-ready reports from your Excel data.',
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

export default function CapTableExplainedPage() {
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
            Cap Table Explained
          </p>
          <h1 className="font-[family-name:var(--font-heading)] text-4xl font-[700] tracking-[0.05em] uppercase text-white mb-6 leading-tight">
            Cap Table Explained
          </h1>
          <p className="text-lg text-white/60 leading-relaxed font-[300] tracking-wide">
            Your cap table is the most important document in your company that most founders understand least. It determines who gets paid what at exit, who has control in a dispute, and whether investors will back your next round. Here is everything you need to know before you sign anything.
          </p>
        </div>
      </section>

      <article className="max-w-[768px] mx-auto px-6 py-16">

        <section className="mb-14">
          <h2 className="font-[family-name:var(--font-heading)] text-2xl font-[500] tracking-[0.05em] uppercase text-[#1C1917] mb-6">
            What a Cap Table Actually Is
          </h2>
          <p className="text-[#6B5B4E] text-base font-[300] tracking-wide leading-relaxed mb-6">
            A capitalization table — cap table — is a complete record of every equity stake in your company. It lists every shareholder by name, the type of security they hold (ordinary shares, preference shares, options, warrants, convertible notes), the quantity, and the resulting percentage ownership on both an issued and fully diluted basis.
          </p>
          <p className="text-[#6B5B4E] text-base font-[300] tracking-wide leading-relaxed mb-6">
            It is not a static document. Every time you issue shares, grant options, convert a SAFE, or bring on a new investor, the cap table must be updated. A cap table that has not been updated is not a cap table — it is a historical record with unknown errors baked in.
          </p>
          <p className="text-[#6B5B4E] text-base font-[300] tracking-wide leading-relaxed">
            In the UK context, your cap table must also be consistent with your Companies House records. Share allotments filed on an SH01 form, director details, and your confirmation statement all feed into what Companies House knows about your ownership structure. If these conflict, you have a legal problem — not just an admin one.
          </p>
        </section>

        <section className="mb-14">
          <h2 className="font-[family-name:var(--font-heading)] text-2xl font-[500] tracking-[0.05em] uppercase text-[#1C1917] mb-6">
            The 7 Required Columns
          </h2>
          <p className="text-[#6B5B4E] text-base font-[300] tracking-wide leading-relaxed mb-8">
            Most templates only include 3 or 4 of these. The missing ones are exactly the ones that cause problems at due diligence.
          </p>
          <div className="space-y-4">
            {[
              { col: '1. Shareholder Name', detail: 'Full legal name, not a nickname or trading name. For companies, include registered company number. Errors here create complications at exit.' },
              { col: '2. Security Type', detail: 'Ordinary shares, A-ordinary, preference shares, options (with plan name), warrants, SAFEs, convertible notes. Each type has different rights and different treatment at exit.' },
              { col: '3. Number of Shares / Units', detail: 'The raw share count. Never use percentages as the primary record — percentages change with every new issuance. Shares do not (unless you do a split or consolidation).' },
              { col: '4. Issue Price / Strike Price', detail: 'For shares: price paid per share. For options: exercise price. For SAFEs/notes: investment amount and any cap or discount. Critical for calculating returns at exit.' },
              { col: '5. Vesting Schedule', detail: 'For founders and employee equity: start date, cliff, vesting period, acceleration provisions. A co-founder who left after 6 months holding 25% unvested is a red flag — or should be if it was handled correctly.' },
              { col: '6. Issued % (Basic)', detail: 'Ownership calculated against total issued shares only. This is the legal ownership percentage on the register.' },
              { col: '7. Fully Diluted %', detail: 'Ownership calculated against total issued shares plus all potential shares (options, warrants, convertibles). This is how investors measure your ownership and how exit proceeds are modelled.' },
            ].map((item) => (
              <div key={item.col} className="border border-[#D4C9B8] bg-[#FDFAF5] p-5">
                <p className="font-[family-name:var(--font-heading)] text-sm font-[600] tracking-[0.05em] uppercase text-[#1C1917] mb-2">{item.col}</p>
                <p className="text-sm text-[#6B5B4E] font-[300] leading-relaxed">{item.detail}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-14">
          <h2 className="font-[family-name:var(--font-heading)] text-2xl font-[500] tracking-[0.05em] uppercase text-[#1C1917] mb-6">
            How a Cap Table Evolves
          </h2>
          <p className="text-[#6B5B4E] text-base font-[300] tracking-wide leading-relaxed mb-8">
            Each equity event changes the cap table. Here is the typical sequence for a UK seed-stage startup.
          </p>
          <div className="space-y-4">
            {[
              {
                event: 'Incorporation',
                change: '2 founders issue 1,000,000 shares each. Share price: £0.0001 nominal. Cap table has 2 rows, 100% founder-owned.',
              },
              {
                event: 'Pre-Seed Angel Round (or SAFE)',
                change: 'Angel investors provide £150K on a SAFE with a £2M cap. No new shares issued yet — but the SAFE appears on the cap table as a convertible instrument. Fully diluted percentage is calculated at the cap.',
              },
              {
                event: 'Option Pool Created',
                change: 'Board authorises an EMI option scheme with 200,000 options (10% of total). No options granted yet but the pool appears as a reserved block. This dilutes founders on a fully diluted basis immediately.',
              },
              {
                event: 'Seed Round (Priced)',
                change: 'VC invests £750K at £3M pre-money. New shares issued at £1.50 per share. SAFEs convert at their cap price. Option pool is topped up. Cap table now has 5-6 rows and multiple share classes.',
              },
              {
                event: 'Employee Option Grants',
                change: 'Individual option grants to employees appear as rows with name, grant date, quantity, exercise price, and vesting schedule. Until exercised, they count in fully diluted totals but not in issued totals.',
              },
            ].map((item, i) => (
              <div key={item.event} className="border border-[#D4C9B8] bg-[#FDFAF5] p-5 flex gap-4">
                <div className="w-7 h-7 bg-[#C9A84C] text-[#1C1917] flex items-center justify-center font-[family-name:var(--font-mono)] text-xs font-[700] shrink-0 mt-0.5">
                  {i + 1}
                </div>
                <div>
                  <p className="font-[family-name:var(--font-heading)] text-sm font-[600] tracking-[0.05em] uppercase text-[#1C1917] mb-1">{item.event}</p>
                  <p className="text-sm text-[#6B5B4E] font-[300] leading-relaxed">{item.change}</p>
                </div>
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
            Upload Your Cap Table CSV — Get an Investor-Ready Report
          </h3>
          <p className="text-white/60 text-sm font-[300] tracking-wide leading-relaxed mb-6">
            CapBrief reads your existing cap table (Excel, Google Sheets, or CSV), calculates fully diluted ownership, models future round scenarios, and generates a clean PDF report for investor meetings — in under 2 minutes.
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
            <Link href="/guides/how-to-build-a-cap-table" className="block text-sm text-white/60 hover:text-white transition-colors font-[300] tracking-wide">
              → How to Build a Cap Table from Scratch
            </Link>
            <Link href="/guides/startup-dilution-guide" className="block text-sm text-white/60 hover:text-white transition-colors font-[300] tracking-wide">
              → Startup Dilution Guide: How Ownership Shrinks
            </Link>
            <Link href="/guides/safe-note-vs-convertible-note" className="block text-sm text-white/60 hover:text-white transition-colors font-[300] tracking-wide">
              → SAFE Note vs Convertible Note: Which to Use
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
