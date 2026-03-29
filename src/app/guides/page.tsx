import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Cap Table and Equity Guides for UK Startup Founders | CapBrief',
  description: 'Practical guides on cap tables, SEIS/EIS, dilution, vesting, and funding rounds. Written for UK founders raising their first or second round.',
  openGraph: {
    title: 'Cap Table and Equity Guides for UK Startup Founders | CapBrief',
    description: 'Practical guides on cap tables, SEIS/EIS, dilution, vesting, and funding rounds. Written for UK founders raising their first or second round.',
    type: 'website',
  },
}

const guides = [
  {
    href: '/guides/cap-table-explained',
    category: 'Cap Tables',
    title: 'Cap Table Explained',
    description: 'What a cap table is, what goes in it, and why it is the most important document in your company that most founders understand least.',
    readTime: '7 min',
  },
  {
    href: '/guides/how-to-build-a-cap-table',
    category: 'Cap Tables',
    title: 'How to Build a Cap Table from Scratch',
    description: 'A 7-step process for building a cap table from incorporation — what to record, how to structure it, and how to keep it accurate as your company grows.',
    readTime: '8 min',
  },
  {
    href: '/guides/cap-table-template',
    category: 'Cap Tables',
    title: 'Cap Table Template: What to Include',
    description: 'A proper cap table has 7 required columns. Most Excel templates miss at least 3 of them — specifically the ones that cause problems in due diligence.',
    readTime: '8 min',
  },
  {
    href: '/guides/cap-table-software',
    category: 'Cap Tables',
    title: 'Best Cap Table Software for Startups',
    description: 'Most cap table software is built for Series A+ companies. Here is what actually matters for early-stage founders — and what to skip.',
    readTime: '7 min',
  },
  {
    href: '/guides/startup-dilution-guide',
    category: 'Dilution',
    title: 'Startup Dilution Guide',
    description: 'How funding rounds shrink founder ownership — with a worked example from incorporation to Series A, plus the three things that accelerate dilution faster than you expect.',
    readTime: '9 min',
  },
  {
    href: '/guides/equity-dilution-calculator',
    category: 'Dilution',
    title: 'Equity Dilution Calculator: How Dilution Works',
    description: 'Every funding round dilutes your ownership. Here is how to calculate exactly what you give up — and how to model multiple rounds before you sign anything.',
    readTime: '9 min',
  },
  {
    href: '/guides/safe-note-vs-convertible-note',
    category: 'Funding Instruments',
    title: 'SAFE Note vs Convertible Note',
    description: 'Both convert into equity at your next priced round — but the legal structure, SEIS/EIS implications, and investor rights are different. Here is how to choose.',
    readTime: '8 min',
  },
  {
    href: '/guides/pre-money-vs-post-money-valuation',
    category: 'Valuation',
    title: 'Pre-Money vs Post-Money Valuation',
    description: 'A £1M raise at "£4M pre" gives investors 20%. The same raise at "£4M post" gives them 25%. That ambiguity is rarely accidental — here is how to protect yourself.',
    readTime: '8 min',
  },
  {
    href: '/guides/investor-update-template',
    category: 'Investor Relations',
    title: 'Investor Update Template',
    description: 'Monthly investor updates take 20 minutes to write and buy you goodwill that takes months to earn any other way. Here is exactly what to include.',
    readTime: '6 min',
  },
  {
    href: '/guides/seis-eis-eligibility-guide',
    category: 'UK Tax Relief',
    title: 'SEIS and EIS Eligibility Guide',
    description: 'SEIS gives investors 50% income tax relief. EIS gives 30%. Here is what your company must do — and must never do — to qualify, including the advance assurance process most founders skip.',
    readTime: '10 min',
  },
  {
    href: '/guides/startup-funding-rounds-explained',
    category: 'Fundraising',
    title: 'Startup Funding Rounds Explained',
    description: 'Pre-seed to Series C — what changes at each round, how much equity to give up, and how UK-specific programmes like SEIS, Innovate UK, and R&D credits fit into your strategy.',
    readTime: '11 min',
  },
  {
    href: '/guides/option-pool-and-vesting-guide',
    category: 'Employee Equity',
    title: 'Option Pool and Vesting Schedules',
    description: 'How to set up an option pool, structure 4-year vesting with a 1-year cliff, use EMI for maximum tax efficiency, and understand how grants appear on your fully diluted cap table.',
    readTime: '9 min',
  },
]

const categories = ['All', 'Cap Tables', 'Dilution', 'Funding Instruments', 'Valuation', 'Fundraising', 'UK Tax Relief', 'Employee Equity', 'Investor Relations']

export default function GuidesHubPage() {
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
        <div className="max-w-[1200px] mx-auto px-6 py-20 relative z-10">
          <p className="font-[family-name:var(--font-mono)] text-xs tracking-[0.2em] uppercase text-[#C9A84C] mb-4">
            <Link href="/" className="hover:text-white transition-colors">CapBrief</Link>
            <span className="mx-2 opacity-40">/</span>
            Guides
          </p>
          <h1 className="font-[family-name:var(--font-heading)] text-4xl font-[700] tracking-[0.05em] uppercase text-white mb-6 leading-tight max-w-[640px]">
            Cap Table and Equity Guides for UK Founders
          </h1>
          <p className="text-lg text-white/60 leading-relaxed font-[300] tracking-wide max-w-[560px]">
            Practical references on dilution, valuation, SEIS, option pools, and funding rounds. Written for founders who are preparing to raise or who have just closed a round and need to understand what they signed.
          </p>
        </div>
      </section>

      <div className="max-w-[1200px] mx-auto px-6 py-4 border-b border-[#D4C9B8] overflow-x-auto">
        <div className="flex items-center gap-2 min-w-max">
          {categories.map((cat) => (
            <span
              key={cat}
              className={`font-[family-name:var(--font-mono)] text-[10px] tracking-[0.15em] uppercase px-3 py-1.5 border cursor-default ${
                cat === 'All'
                  ? 'border-[#C9A84C] text-[#C9A84C] bg-[#1C1917]'
                  : 'border-[#D4C9B8] text-[#6B5B4E]'
              }`}
            >
              {cat}
            </span>
          ))}
        </div>
      </div>

      <main className="max-w-[1200px] mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[#D4C9B8] border border-[#D4C9B8]">
          {guides.map((guide) => (
            <Link
              key={guide.href}
              href={guide.href}
              className="bg-[#F5F0E8] p-8 hover:bg-[#FDFAF5] transition-colors group"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="font-[family-name:var(--font-mono)] text-[9px] tracking-[0.2em] uppercase text-[#C9A84C] border border-[#C9A84C] px-2 py-0.5">
                  {guide.category}
                </span>
                <span className="font-[family-name:var(--font-mono)] text-[10px] tracking-[0.1em] text-[#6B5B4E]">
                  {guide.readTime}
                </span>
              </div>
              <h2 className="font-[family-name:var(--font-heading)] text-lg font-[500] tracking-[0.04em] uppercase text-[#1C1917] mb-3 group-hover:text-[#C9A84C] transition-colors leading-snug">
                {guide.title}
              </h2>
              <p className="text-sm text-[#6B5B4E] font-[300] tracking-wide leading-relaxed">
                {guide.description}
              </p>
              <div className="mt-6 flex items-center gap-2">
                <span className="font-[family-name:var(--font-mono)] text-[10px] tracking-[0.15em] uppercase text-[#C9A84C] group-hover:underline">
                  Read guide
                </span>
                <span className="text-[#C9A84C] text-xs">→</span>
              </div>
            </Link>
          ))}
        </div>
      </main>

      <div className="max-w-[1200px] mx-auto px-6">
        <div className="h-px bg-[#D4C9B8]" />
      </div>

      <section className="bg-[#1C1917] relative overflow-hidden">
        <div className="absolute top-6 left-6 w-8 h-8 border-t border-l border-[#C9A84C] opacity-40" />
        <div className="absolute top-6 right-6 w-8 h-8 border-t border-r border-[#C9A84C] opacity-40" />
        <div className="absolute bottom-6 left-6 w-8 h-8 border-b border-l border-[#C9A84C] opacity-40" />
        <div className="absolute bottom-6 right-6 w-8 h-8 border-b border-r border-[#C9A84C] opacity-40" />
        <div className="max-w-[1200px] mx-auto px-6 py-20 text-center relative z-10">
          <p className="font-[family-name:var(--font-mono)] text-[10px] tracking-[0.2em] uppercase text-[#C9A84C] mb-6">
            Ready when you are
          </p>
          <h2 className="font-[family-name:var(--font-heading)] text-4xl font-[700] tracking-[0.05em] uppercase text-white mb-5 max-w-[560px] mx-auto">
            Turn Your Cap Table CSV into an Investor Report
          </h2>
          <p className="text-white/50 mb-10 max-w-[400px] mx-auto text-sm font-[300] tracking-wide">
            Upload your spreadsheet and CapBrief produces a clean, verified equity report in minutes. No card required for the free plan.
          </p>
          <Link
            href="/auth/signup"
            className="inline-block font-[family-name:var(--font-heading)] text-sm tracking-[0.1em] uppercase bg-[#C9A84C] text-[#1C1917] px-10 py-4 hover:bg-[#B8930A] transition-colors"
          >
            Try CapBrief Free →
          </Link>
        </div>
      </section>

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
