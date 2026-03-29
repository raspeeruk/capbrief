import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Cap Table Template: What to Include (Plus Free Download Guide) | CapBrief',
  description: 'A proper cap table has 7 required columns — most Excel templates miss 3 of them. Here is exactly what to include and the mistakes that cause problems in due diligence.',
  openGraph: {
    title: 'Cap Table Template: What to Include (Plus Free Download Guide) | CapBrief',
    description: 'A proper cap table has 7 required columns — most Excel templates miss 3 of them. Here is exactly what to include and the mistakes that cause problems in due diligence.',
    type: 'article',
  },
}

const essentialColumns = [
  {
    column: 'Shareholder Name',
    tracks: 'Legal name of each equity holder',
    why: 'Matches against legal register; Companies House requires exact match',
  },
  {
    column: 'Share Class',
    tracks: 'Ordinary, Preferred A, Preferred B, Options, Warrants, SAFE',
    why: 'Different classes have different liquidation preferences and voting rights — missing this makes your table meaningless for waterfall analysis',
  },
  {
    column: 'Number of Shares',
    tracks: 'Issued shares held by this shareholder in this class',
    why: 'The base figure for all ownership percentage calculations',
  },
  {
    column: 'Issue Price',
    tracks: 'Price paid per share at issuance',
    why: 'Needed to calculate total investment amount and verify valuations; anti-dilution clauses reference this',
  },
  {
    column: 'Issue Date',
    tracks: 'Date shares were allotted or options granted',
    why: 'Establishes round chronology; critical for tax treatment (EMI options, SEIS/EIS eligibility)',
  },
  {
    column: 'Conversion Ratio',
    tracks: 'For preferred shares and convertibles: how many ordinary shares each converts into',
    why: 'The most commonly missing column; without it, your fully diluted calculation is wrong',
  },
  {
    column: 'Fully Diluted %',
    tracks: 'Ownership percentage assuming all options, warrants, and convertibles have converted',
    why: 'What investors actually care about — this is the number that appears in term sheets',
  },
]

const templateTypes = [
  {
    type: 'Founding Stage',
    description: 'Two or three founders, ordinary shares only, no options.',
    what: 'Shareholder name, ordinary shares, issue price, percentage. That is genuinely all you need.',
    limitation: 'Falls apart the moment you add an option pool or a first investor.',
  },
  {
    type: 'Post-Seed',
    description: 'Founders plus 2–5 angels or a seed fund, SAFE notes possibly outstanding.',
    what: 'Adds preferred class columns, SAFE note entries with valuation caps, basic fully diluted calculation.',
    limitation: 'Convertible maths is easy to get wrong — verify every formula.',
  },
  {
    type: 'Post-Series A',
    description: 'Multiple investor classes, anti-dilution provisions, active ESOP.',
    what: 'Separate sheets per round, liquidation preference stack, pro-rata rights tracking, vesting schedule summary.',
    limitation: 'At this point you almost certainly need dedicated software, not a template.',
  },
  {
    type: 'ESOP Included',
    description: 'Option pool with individual grants, cliff and vesting schedules.',
    what: 'Grant date, strike price, cliff date, vesting period, number of options, current vested/unvested split.',
    limitation: 'Vesting maths across many employees is error-prone in spreadsheets — any calculation error flows into your fully diluted total.',
  },
]

const mistakes = [
  {
    mistake: 'Missing conversion ratios for preferred shares',
    impact: 'Your fully diluted percentage calculation will be wrong. Investors will spot this immediately.',
  },
  {
    mistake: 'Wrong share class for early investors',
    impact: 'Angels on SAFEs are often entered as ordinary shareholders before conversion, which overstates dilution incorrectly.',
  },
  {
    mistake: 'Option pool not included in fully diluted calculation',
    impact: 'The ESOP pool exists as dilution whether or not options have been granted. It must appear in fully diluted.',
  },
  {
    mistake: 'Calculating dilution on issued shares, not post-money shares',
    impact: 'Classic error. New investor percentage should be calculated on the total post-money share count, not the pre-money count.',
  },
]

const faqs = [
  {
    q: 'Can I use Google Sheets instead of Excel for my cap table?',
    a: 'Yes — Google Sheets works fine for simple cap tables and has the advantage of easy sharing and real-time collaboration. The main risk is formula errors that are harder to audit than in dedicated software. If you share a Google Sheet with an investor, make sure it is view-only and has no broken formula references.',
  },
  {
    q: 'Does my cap table need to match Companies House exactly?',
    a: 'Yes — shareholder names and share counts must match your filed confirmation statement and SH01 forms exactly. Discrepancies cause problems in due diligence and can delay closings. If there is a mismatch, Companies House is the legal record — your cap table must be corrected to match it.',
  },
  {
    q: 'How do I handle SAFE notes in my cap table template?',
    a: 'List SAFEs as a separate section with the investor name, principal amount, valuation cap, and discount rate. Calculate the converted share count at each cap and show the conversion as a separate line in your fully diluted table. Until they convert, they appear in fully diluted but not in issued shares.',
  },
  {
    q: 'What is the option pool shuffle and why does it matter?',
    a: 'When investors require you to create or expand an option pool pre-investment, that pool dilutes founders — not the new investors. This is called the option pool shuffle. Many templates miss this because the pool appears to be created as part of the round, when in fact it was created before the round closes and dilutes the pre-money cap table.',
  },
]

export default function CapTableTemplatePage() {
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
            Cap Table Template
          </p>
          <h1 className="font-[family-name:var(--font-heading)] text-4xl font-[700] tracking-[0.05em] uppercase text-white mb-6 leading-tight">
            Cap Table Template: What to Include (Plus Free Download Guide)
          </h1>
          <p className="text-lg text-white/60 leading-relaxed font-[300] tracking-wide">
            A proper cap table has 7 required columns. Most Excel templates that circulate online miss at least 3 of them — specifically the ones that cause problems the moment an investor runs due diligence on your company.
          </p>
        </div>
      </section>

      <article className="max-w-[768px] mx-auto px-6 py-16">

        <section className="mb-14">
          <h2 className="font-[family-name:var(--font-heading)] text-2xl font-[500] tracking-[0.05em] uppercase text-[#1C1917] mb-6">
            The 7 Essential Cap Table Columns
          </h2>
          <p className="text-[#6B5B4E] text-base font-[300] tracking-wide leading-relaxed mb-8">
            These are non-negotiable. Miss any of them and your cap table cannot be used for due diligence, board reporting, or investor communication without significant rework.
          </p>
          <div className="border border-[#D4C9B8] overflow-hidden">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-[#1C1917]">
                  <th className="text-left py-3 px-4 font-[family-name:var(--font-heading)] text-[10px] tracking-[0.1em] uppercase text-[#C9A84C]">Column</th>
                  <th className="text-left py-3 px-4 font-[family-name:var(--font-heading)] text-[10px] tracking-[0.1em] uppercase text-[#C9A84C]">What It Tracks</th>
                  <th className="text-left py-3 px-4 font-[family-name:var(--font-heading)] text-[10px] tracking-[0.1em] uppercase text-[#C9A84C]">Why It Matters</th>
                </tr>
              </thead>
              <tbody>
                {essentialColumns.map((row, i) => (
                  <tr key={row.column} className={`border-t border-[#D4C9B8] ${i % 2 === 0 ? 'bg-[#FDFAF5]' : 'bg-[#F5F0E8]'}`}>
                    <td className="py-3 px-4 font-[family-name:var(--font-heading)] text-xs tracking-[0.03em] uppercase text-[#C9A84C] font-[500] whitespace-nowrap">{row.column}</td>
                    <td className="py-3 px-4 text-xs text-[#6B5B4E] font-[300] leading-relaxed">{row.tracks}</td>
                    <td className="py-3 px-4 text-xs text-[#1C1917] font-[300] leading-relaxed">{row.why}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="mb-14">
          <h2 className="font-[family-name:var(--font-heading)] text-2xl font-[500] tracking-[0.05em] uppercase text-[#1C1917] mb-6">
            Types of Cap Table Templates
          </h2>
          <p className="text-[#6B5B4E] text-base font-[300] tracking-wide leading-relaxed mb-8">
            The right template depends on where you are in your company&apos;s life. A founding-stage template will not survive contact with a seed investor. Here is what each stage actually needs.
          </p>
          <div className="space-y-4">
            {templateTypes.map((t) => (
              <div key={t.type} className="border border-[#D4C9B8] bg-[#FDFAF5] p-6">
                <h3 className="font-[family-name:var(--font-heading)] text-base font-[500] tracking-[0.05em] uppercase text-[#1C1917] mb-1">{t.type}</h3>
                <p className="text-xs text-[#6B5B4E] font-[300] tracking-wide mb-4">{t.description}</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                  <div>
                    <p className="font-[family-name:var(--font-mono)] text-[10px] tracking-[0.15em] uppercase text-[#059669] mb-1">What to include</p>
                    <p className="text-[#6B5B4E] font-[300] leading-relaxed">{t.what}</p>
                  </div>
                  <div>
                    <p className="font-[family-name:var(--font-mono)] text-[10px] tracking-[0.15em] uppercase text-[#DC2626] mb-1">Limitation</p>
                    <p className="text-[#6B5B4E] font-[300] leading-relaxed">{t.limitation}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-14">
          <h2 className="font-[family-name:var(--font-heading)] text-2xl font-[500] tracking-[0.05em] uppercase text-[#1C1917] mb-6">
            Common Cap Table Template Mistakes
          </h2>
          <div className="space-y-4">
            {mistakes.map((m) => (
              <div key={m.mistake} className="border-l-2 border-[#DC2626] pl-4">
                <p className="font-[family-name:var(--font-heading)] text-sm font-[500] tracking-[0.03em] uppercase text-[#1C1917] mb-1">{m.mistake}</p>
                <p className="text-sm text-[#6B5B4E] font-[300] tracking-wide leading-relaxed">{m.impact}</p>
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
            No Template Required
          </h3>
          <p className="text-white/60 text-sm font-[300] tracking-wide leading-relaxed mb-6">
            CapBrief reads your messy CSV — whatever columns you have, whatever the formatting — and produces a clean, verified cap table report. It finds missing data, flags errors, and calculates fully diluted ownership correctly. Skip the template entirely.
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
            When a Template Is Not Enough
          </h2>
          <p className="text-[#6B5B4E] text-base font-[300] tracking-wide leading-relaxed mb-4">
            Spreadsheet templates work fine for simple structures. They break down when:
          </p>
          <ul className="space-y-3 mb-6">
            {[
              'Investor due diligence: a VC doing serious DD will want a verified, auditable equity register — not an Excel file they cannot trust',
              'Board reporting: board packs require structured waterfall charts and round summaries, not raw spreadsheet data',
              'Waterfall analysis: calculating liquidation preferences across multiple preferred share classes with anti-dilution provisions requires either dedicated software or a forensic accountant',
              'Secondary transactions: any sale of existing shares requires accurate fully diluted calculations that have been independently verified',
            ].map((item) => (
              <li key={item} className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 bg-[#C9A84C] mt-2 shrink-0" />
                <p className="text-[#6B5B4E] text-sm font-[300] tracking-wide leading-relaxed">{item}</p>
              </li>
            ))}
          </ul>
        </section>

        <section className="mb-14">
          <h2 className="font-[family-name:var(--font-heading)] text-2xl font-[500] tracking-[0.05em] uppercase text-[#1C1917] mb-6">
            Build Your Own Cap Table: What to Include
          </h2>
          <p className="text-[#6B5B4E] text-base font-[300] tracking-wide leading-relaxed mb-6">
            If you are building your cap table from scratch, here is the complete structure to follow:
          </p>
          <div className="bg-[#1C1917] p-6 font-[family-name:var(--font-mono)] text-xs text-white/70 leading-relaxed overflow-x-auto">
            <p className="text-[#C9A84C] mb-3"># Cap Table Structure — Required Fields</p>
            <p className="mb-1">Sheet 1: Issued Shares</p>
            <p className="mb-1 pl-4">- Shareholder Name (legal)</p>
            <p className="mb-1 pl-4">- Share Class (Ordinary / Preferred A / Preferred B / etc.)</p>
            <p className="mb-1 pl-4">- Number of Shares</p>
            <p className="mb-1 pl-4">- Issue Price Per Share</p>
            <p className="mb-1 pl-4">- Issue Date</p>
            <p className="mb-1 pl-4">- Total Investment (Shares × Issue Price)</p>
            <p className="mb-1 pl-4">- % of Issued Share Capital</p>
            <p className="mb-4 pl-4">- % Fully Diluted (including options + convertibles)</p>
            <p className="mb-1">Sheet 2: Option Pool</p>
            <p className="mb-1 pl-4">- Grantee Name</p>
            <p className="mb-1 pl-4">- Options Granted</p>
            <p className="mb-1 pl-4">- Grant Date</p>
            <p className="mb-1 pl-4">- Strike Price</p>
            <p className="mb-1 pl-4">- Cliff (months)</p>
            <p className="mb-1 pl-4">- Vesting Period (months)</p>
            <p className="mb-4 pl-4">- Currently Vested / Unvested</p>
            <p className="mb-1">Sheet 3: Convertibles (SAFEs / Notes)</p>
            <p className="mb-1 pl-4">- Investor Name</p>
            <p className="mb-1 pl-4">- Principal Amount</p>
            <p className="mb-1 pl-4">- Valuation Cap</p>
            <p className="mb-1 pl-4">- Discount Rate</p>
            <p className="mb-4 pl-4">- Estimated Converted Shares (at cap)</p>
            <p className="mb-1">Sheet 4: Summary</p>
            <p className="mb-1 pl-4">- Total Issued Shares</p>
            <p className="mb-1 pl-4">- Total Option Pool (granted + ungranted)</p>
            <p className="mb-1 pl-4">- Total Convertible Shares (estimated)</p>
            <p className="pl-4">- Fully Diluted Total</p>
          </div>
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
          <p className="font-[family-name:var(--font-mono)] text-xs tracking-[0.2em] uppercase text-[#C9A84C] mb-3">Skip the Template</p>
          <h3 className="font-[family-name:var(--font-heading)] text-xl font-[500] tracking-[0.05em] uppercase text-white mb-3">
            Upload What You Have. Get What You Need.
          </h3>
          <p className="text-white/60 text-sm font-[300] tracking-wide leading-relaxed mb-6">
            CapBrief turns any cap table CSV into a verified investor report. It handles the messy columns, calculates the dilution correctly, and produces a PDF you can put in a board pack today.
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
