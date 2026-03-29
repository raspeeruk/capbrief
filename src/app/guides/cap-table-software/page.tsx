import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Best Cap Table Software for Startups in 2025 | CapBrief Guide',
  description: 'Most cap table software is built for Series A+ companies. If you need a clean equity report fast, here is what actually matters — and what to skip.',
  openGraph: {
    title: 'Best Cap Table Software for Startups in 2025 | CapBrief Guide',
    description: 'Most cap table software is built for Series A+ companies. If you need a clean equity report fast, here is what actually matters — and what to skip.',
    type: 'article',
  },
}

const stageFeatures = [
  {
    stage: 'Pre-seed',
    required: 'Founder shares, simple ownership table, basic PDF export',
    nice: 'Option pool placeholder',
    skip: 'Waterfall analysis, 409A, investor portal',
  },
  {
    stage: 'Seed',
    required: 'SAFE/convertible note modelling, investor share class, dilution table',
    nice: 'Round summary with valuations',
    skip: 'Full governance workflows, board consent tracking',
  },
  {
    stage: 'Series A',
    required: 'Full waterfall analysis, anti-dilution clauses, option vesting schedules, board portal',
    nice: 'Scenario modelling for future rounds',
    skip: 'Nothing — you need the full stack',
  },
]

const softwareCategories = [
  {
    category: 'Enterprise Platforms',
    description: 'Built for post-Series B companies with complex governance needs.',
    pros: 'Full feature set, legal integrations, board portals, electronic consent',
    cons: 'Expensive ($500–$2,000+/month), requires onboarding call, overkill for seed stage',
    bestFor: 'Series B+ companies with active investor relations',
  },
  {
    category: 'Startup-Focused Tools',
    description: 'Designed for growth-stage companies raising actively.',
    pros: 'Good UX, SAFE/note modelling, scenario planning, investor updates',
    cons: 'Still $30–$100/month for full features, some lock you into their legal templates',
    bestFor: 'Seed to Series A companies with multiple share classes',
  },
  {
    category: 'Spreadsheet Solutions',
    description: 'Excel or Google Sheets templates, manual entry.',
    pros: 'Free, flexible, no vendor lock-in',
    cons: 'Error-prone, hard to share, no PDF export, falls apart beyond 10 shareholders',
    bestFor: 'Pre-seed founders with simple founding shares only',
  },
  {
    category: 'AI-Powered Report Tools',
    description: 'Upload your existing data, get an investor-ready output fast.',
    pros: 'Fast (under 5 minutes), handles messy data, generates clean PDFs, no ongoing subscription needed for one-off reports',
    cons: 'Not a full management platform — best for reporting, not ongoing governance',
    bestFor: 'Founders who need a cap table report for a board pack or investor deck',
  },
  {
    category: 'Manual Consultants',
    description: 'Lawyers or accountants who build and maintain your cap table.',
    pros: 'Highly accurate, legally reviewed, someone else\'s problem',
    cons: '£500–£2,000 per engagement, slow turnaround, you depend on their availability',
    bestFor: 'First-time founders who lack confidence in their data, or during live M&A',
  },
]

const faqs = [
  {
    q: 'Do I need cap table software before I raise a seed round?',
    a: 'You need a clean, accurate cap table — but not necessarily a subscription to cap table software. A verified PDF showing ownership, share classes, and fully diluted percentages is usually sufficient for seed investors. You can generate that from a spreadsheet or an AI tool without paying monthly fees.',
  },
  {
    q: 'What is the difference between issued shares and fully diluted shares?',
    a: 'Issued shares are what has actually been granted. Fully diluted shares include all options, warrants, and convertible notes as if they had all converted. Investors care about fully diluted percentages because that is what their ownership looks like after everything converts.',
  },
  {
    q: 'When should I switch from a spreadsheet to dedicated software?',
    a: 'When you have more than two share classes, an active option pool, or convertible notes outstanding. At that point, the dilution maths becomes error-prone in a spreadsheet and mistakes can create real legal problems in a due diligence process.',
  },
  {
    q: 'Can cap table software connect to Companies House?',
    a: 'Some enterprise platforms offer Companies House integration for UK companies, which can auto-populate allotments from filed confirmation statements. For most seed-stage founders, a manual CSV upload is faster and more accurate than relying on Companies House data, which can lag by months.',
  },
]

export default function CapTableSoftwarePage() {
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
            Cap Table Software
          </p>
          <h1 className="font-[family-name:var(--font-heading)] text-4xl font-[700] tracking-[0.05em] uppercase text-white mb-6 leading-tight">
            Cap Table Software: What Founders Need (And What They Don&apos;t)
          </h1>
          <p className="text-lg text-white/60 leading-relaxed font-[300] tracking-wide">
            Most cap table software is built for Series A+ companies with complex governance needs and dedicated finance teams. If you are a seed-stage founder who needs a clean equity report fast, here is what actually matters — and what is a waste of money.
          </p>
        </div>
      </section>

      <article className="max-w-[768px] mx-auto px-6 py-16">

        <section className="mb-14">
          <h2 className="font-[family-name:var(--font-heading)] text-2xl font-[500] tracking-[0.05em] uppercase text-[#1C1917] mb-6">
            What Cap Table Software Actually Does
          </h2>
          <p className="text-[#6B5B4E] text-base font-[300] tracking-wide leading-relaxed mb-4">
            At its core, cap table software does three things: it tracks ownership (who has how many shares of what class), calculates dilution (what happens to everyone&apos;s percentage when new shares are issued), and generates investor reports (ownership waterfalls, round summaries, board packs).
          </p>
          <p className="text-[#6B5B4E] text-base font-[300] tracking-wide leading-relaxed mb-4">
            Enterprise platforms bolt on governance workflows: board consent, electronic signatures, option vesting schedules with automatic cliff triggers, 409A valuations, and investor portals. These are genuinely useful when you have 50+ stakeholders and active board management. At pre-seed, they are overkill.
          </p>
          <p className="text-[#6B5B4E] text-base font-[300] tracking-wide leading-relaxed">
            The 80% use case for most founders is simpler: I have a spreadsheet, I need a professional PDF I can put in front of an investor. That is a solved problem that does not require a £100/month platform.
          </p>
        </section>

        <section className="mb-14">
          <h2 className="font-[family-name:var(--font-heading)] text-2xl font-[500] tracking-[0.05em] uppercase text-[#1C1917] mb-6">
            Features You Actually Need at Each Stage
          </h2>
          <div className="border border-[#D4C9B8] overflow-hidden">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-[#1C1917]">
                  <th className="text-left py-3 px-4 font-[family-name:var(--font-heading)] text-[10px] tracking-[0.1em] uppercase text-[#C9A84C]">Stage</th>
                  <th className="text-left py-3 px-4 font-[family-name:var(--font-heading)] text-[10px] tracking-[0.1em] uppercase text-[#C9A84C]">Required</th>
                  <th className="text-left py-3 px-4 font-[family-name:var(--font-heading)] text-[10px] tracking-[0.1em] uppercase text-[#C9A84C]">Nice to Have</th>
                  <th className="text-left py-3 px-4 font-[family-name:var(--font-heading)] text-[10px] tracking-[0.1em] uppercase text-[#C9A84C]">Skip</th>
                </tr>
              </thead>
              <tbody>
                {stageFeatures.map((row, i) => (
                  <tr key={row.stage} className={`border-t border-[#D4C9B8] ${i % 2 === 0 ? 'bg-[#FDFAF5]' : 'bg-[#F5F0E8]'}`}>
                    <td className="py-3 px-4 font-[family-name:var(--font-heading)] text-xs tracking-[0.05em] uppercase text-[#1C1917] font-[500]">{row.stage}</td>
                    <td className="py-3 px-4 text-xs text-[#1C1917] font-[300] leading-relaxed">{row.required}</td>
                    <td className="py-3 px-4 text-xs text-[#6B5B4E] font-[300] leading-relaxed">{row.nice}</td>
                    <td className="py-3 px-4 text-xs text-[#6B5B4E] font-[300] leading-relaxed italic">{row.skip}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="mb-14">
          <h2 className="font-[family-name:var(--font-heading)] text-2xl font-[500] tracking-[0.05em] uppercase text-[#1C1917] mb-6">
            The Problem With Complex Cap Table Software
          </h2>
          <p className="text-[#6B5B4E] text-base font-[300] tracking-wide leading-relaxed mb-4">
            The main platforms in this space were built in a different era of startup finance. Their pricing reflects that: £50–£200/month before you unlock the features you actually need. For a pre-seed company generating no revenue, that is a meaningful monthly cost.
          </p>
          <p className="text-[#6B5B4E] text-base font-[300] tracking-wide leading-relaxed mb-4">
            Beyond price, there is a complexity problem. Most platforms assume you will migrate all your historical data, connect to your legal documents, and use their templates for future allotments. That is a significant time investment when you just need a clean PDF for a pitch meeting next week.
          </p>
          <p className="text-[#6B5B4E] text-base font-[300] tracking-wide leading-relaxed">
            When your cap table has four shareholders and two share classes, you do not need a governance platform. You need a professional equity report that takes 60 seconds to produce.
          </p>
        </section>

        <div className="bg-[#1C1917] border border-[#C9A84C] p-8 mb-14 relative overflow-hidden">
          <div className="absolute top-3 left-3 w-5 h-5 border-t border-l border-[#C9A84C] opacity-40" />
          <div className="absolute top-3 right-3 w-5 h-5 border-t border-r border-[#C9A84C] opacity-40" />
          <div className="absolute bottom-3 left-3 w-5 h-5 border-b border-l border-[#C9A84C] opacity-40" />
          <div className="absolute bottom-3 right-3 w-5 h-5 border-b border-r border-[#C9A84C] opacity-40" />
          <p className="font-[family-name:var(--font-mono)] text-xs tracking-[0.2em] uppercase text-[#C9A84C] mb-3">CapBrief</p>
          <h3 className="font-[family-name:var(--font-heading)] text-xl font-[500] tracking-[0.05em] uppercase text-white mb-3">
            Upload CSV. Get Investor-Ready Equity Report in 60 Seconds.
          </h3>
          <p className="text-white/60 text-sm font-[300] tracking-wide leading-relaxed mb-6">
            No platform to learn, no monthly subscription required. CapBrief reads your cap table CSV — messy headers, inconsistent formatting — and produces a clean ownership waterfall, dilution table, and round summary in under a minute.
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
            Cap Table Software Comparison
          </h2>
          <p className="text-[#6B5B4E] text-base font-[300] tracking-wide leading-relaxed mb-8">
            Here is an honest breakdown of the five categories of solutions — what each is genuinely good at, and where each falls short.
          </p>
          <div className="space-y-4">
            {softwareCategories.map((cat) => (
              <div key={cat.category} className="border border-[#D4C9B8] bg-[#FDFAF5] p-6">
                <h3 className="font-[family-name:var(--font-heading)] text-base font-[500] tracking-[0.05em] uppercase text-[#1C1917] mb-1">{cat.category}</h3>
                <p className="text-xs text-[#6B5B4E] font-[300] tracking-wide mb-4">{cat.description}</p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
                  <div>
                    <p className="font-[family-name:var(--font-mono)] text-[10px] tracking-[0.15em] uppercase text-[#059669] mb-1">Pros</p>
                    <p className="text-[#6B5B4E] font-[300] leading-relaxed">{cat.pros}</p>
                  </div>
                  <div>
                    <p className="font-[family-name:var(--font-mono)] text-[10px] tracking-[0.15em] uppercase text-[#DC2626] mb-1">Cons</p>
                    <p className="text-[#6B5B4E] font-[300] leading-relaxed">{cat.cons}</p>
                  </div>
                  <div>
                    <p className="font-[family-name:var(--font-mono)] text-[10px] tracking-[0.15em] uppercase text-[#C9A84C] mb-1">Best For</p>
                    <p className="text-[#6B5B4E] font-[300] leading-relaxed">{cat.bestFor}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-14">
          <h2 className="font-[family-name:var(--font-heading)] text-2xl font-[500] tracking-[0.05em] uppercase text-[#1C1917] mb-6">
            When to Upgrade Your Cap Table Management
          </h2>
          <p className="text-[#6B5B4E] text-base font-[300] tracking-wide leading-relaxed mb-4">
            There are clear inflection points where a more comprehensive platform becomes necessary rather than optional:
          </p>
          <ul className="space-y-3 mb-4">
            {[
              'You have 10+ shareholders with different share classes and option grants',
              'You are preparing for a Series A with institutional investors who will run serious due diligence',
              'You have active ESOP vesting schedules that need to be tracked automatically',
              'You are doing a secondary transaction and need waterfall analysis to model liquidation preferences',
              'Your board requires electronic consent workflows and a formal governance trail',
            ].map((item) => (
              <li key={item} className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 bg-[#C9A84C] mt-2 shrink-0" />
                <p className="text-[#6B5B4E] text-sm font-[300] tracking-wide leading-relaxed">{item}</p>
              </li>
            ))}
          </ul>
          <p className="text-[#6B5B4E] text-base font-[300] tracking-wide leading-relaxed">
            Below those thresholds, you are paying for features you will never use. A verified equity report and a well-maintained spreadsheet will serve most seed-stage founders completely adequately.
          </p>
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
          <p className="font-[family-name:var(--font-mono)] text-xs tracking-[0.2em] uppercase text-[#C9A84C] mb-3">Ready to Start</p>
          <h3 className="font-[family-name:var(--font-heading)] text-xl font-[500] tracking-[0.05em] uppercase text-white mb-3">
            Your Cap Table Report in Under a Minute
          </h3>
          <p className="text-white/60 text-sm font-[300] tracking-wide leading-relaxed mb-6">
            No complex setup. No monthly subscription. Upload your CSV and download an investor-ready equity report immediately.
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
