import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Investor Update Template: How to Write Monthly Updates That Build Trust | CapBrief',
  description: 'Most founders write investor updates that read like PR — VCs skip them. Here is what high-signal updates look like, with a complete template and the 5 metrics you must include.',
  openGraph: {
    title: 'Investor Update Template: How to Write Monthly Updates That Build Trust | CapBrief',
    description: 'Most founders write investor updates that read like PR — VCs skip them. Here is what high-signal updates look like, with a complete template and the 5 metrics you must include.',
    type: 'article',
  },
}

const updateStructure = [
  {
    number: '01',
    section: 'Subject Line',
    guidance: 'Include the month and one key metric. "[Company] Update — March 2026 | MRR £42K (+18%)" tells the reader everything before they open it.',
  },
  {
    number: '02',
    section: 'Opening Line',
    guidance: 'One sentence. The most important thing that happened this month. Not a pleasantry.',
  },
  {
    number: '03',
    section: 'Metrics Table',
    guidance: 'Five to seven numbers. MRR, growth rate, runway, burn, headcount. This month vs last month vs target. No narrative, just numbers.',
  },
  {
    number: '04',
    section: 'Highlights (2–3 bullets)',
    guidance: 'What went well and why. Be specific — "Signed [Industry] customer for £8K ARR" is better than "Strong sales momentum."',
  },
  {
    number: '05',
    section: 'Lowlights (1–2 bullets)',
    guidance: 'CRITICAL. The section most founders omit. VCs expect problems — if you only send good news, they assume you are hiding something. One honest lowlight builds more trust than ten highlights.',
  },
  {
    number: '06',
    section: 'Asks (2–3 items)',
    guidance: 'Specific requests only. "Introductions to logistics VPs at mid-market retailers" or "Referral to employment lawyers specialising in early-stage". Never "Any help appreciated."',
  },
  {
    number: '07',
    section: 'Forward Look',
    guidance: 'One sentence on next month&apos;s focus. Sets context for the next update and signals you have a plan.',
  },
]

const fiveMetrics = [
  {
    metric: 'MRR / ARR',
    why: 'The headline number. Everyone looks at this first. Show month-over-month and year-over-year where available.',
    format: '£42,000 MRR (+18% MoM)',
  },
  {
    metric: 'MoM Growth Rate',
    why: 'More important than the absolute number at early stage. Investors are underwriting your trajectory, not your current size.',
    format: '18% MoM (target: 15%)',
  },
  {
    metric: 'Runway',
    why: 'How many months until you run out of money at current burn. Investors need this to know whether you have time to execute.',
    format: '14 months',
  },
  {
    metric: 'Net Burn Rate',
    why: 'Monthly cash out minus cash in. Tells investors how efficiently you are operating.',
    format: '£28,000 net burn',
  },
  {
    metric: 'Headcount',
    why: 'Context for burn and for execution capacity. Changes in headcount signal strategy shifts.',
    format: '7 FTE (1 hire this month)',
  },
]

const doNotInclude = [
  {
    item: 'Vanity metrics without context',
    reason: '"100,000 visitors this month" means nothing without conversion rate, churn, or revenue per visitor.',
  },
  {
    item: 'PR-style language',
    reason: 'Words like "exciting", "thrilled", "incredible momentum" — investors read dozens of these. Neutral, factual language reads as more confident.',
  },
  {
    item: 'Long product updates without business impact',
    reason: 'Engineers love writing about new features. Investors care about revenue, retention, and market response — not the feature itself.',
  },
  {
    item: 'Asks that are too vague to act on',
    reason: '"Any help with hiring" is not actionable. "Intro to engineering hiring managers at UK fintechs with 20–100 employees" is.',
  },
  {
    item: 'No lowlights section',
    reason: 'This is the single biggest signal that an update is performative. Every business has problems. Not mentioning them damages credibility.',
  },
]

const faqs = [
  {
    q: 'How long should an investor update be?',
    a: 'Short. 300–500 words maximum, plus a metrics table. If it takes more than 3 minutes to read, it is too long. VCs receive dozens of updates per month. The updates that get read are concise and scannable. Write for someone reading on a phone between meetings.',
  },
  {
    q: 'Monthly or quarterly — which is better?',
    a: 'Monthly is standard for seed-stage companies. Quarterly is acceptable for later-stage companies with established investor relationships. The argument for monthly is simple: it keeps investors engaged, surfaces asks more frequently, and builds trust through consistency. Quarterly risks investors losing context between updates and becoming passive shareholders.',
  },
  {
    q: 'Should I send investor updates to angels who have not yet invested?',
    a: 'Yes — selectively. Sending thoughtful updates to warm leads (angels who have expressed interest but not yet committed) is an effective way to demonstrate execution and build the relationship over time. It also removes the artificial pressure of a pitch meeting — they can watch you build.',
  },
  {
    q: 'What do I do if I have had a bad month?',
    a: 'Send the update anyway — on time. A bad month that is communicated clearly and with a plan demonstrates maturity. The founders who go quiet when things are hard are the ones who lose investor trust permanently. Your lowlights section exists precisely for bad months.',
  },
]

export default function InvestorUpdateTemplatePage() {
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
            Investor Update Template
          </p>
          <h1 className="font-[family-name:var(--font-heading)] text-4xl font-[700] tracking-[0.05em] uppercase text-white mb-6 leading-tight">
            Investor Update Template: What VCs Actually Want to See
          </h1>
          <p className="text-lg text-white/60 leading-relaxed font-[300] tracking-wide">
            Most founders write investor updates that read like press releases — positive spin, vague highlights, no problems. VCs have learned to skim past these. The updates that get read, remembered, and acted on look completely different.
          </p>
        </div>
      </section>

      <article className="max-w-[768px] mx-auto px-6 py-16">

        <section className="mb-14">
          <h2 className="font-[family-name:var(--font-heading)] text-2xl font-[500] tracking-[0.05em] uppercase text-[#1C1917] mb-6">
            The Structure of a Great Investor Update
          </h2>
          <p className="text-[#6B5B4E] text-base font-[300] tracking-wide leading-relaxed mb-8">
            High-signal investor updates follow a consistent structure. Investors learn to expect this structure, which means they can read your update faster and focus on what has changed since last month.
          </p>
          <div className="space-y-4">
            {updateStructure.map((item) => (
              <div key={item.number} className="border border-[#D4C9B8] bg-[#FDFAF5] p-5 flex gap-5">
                <span className="font-[family-name:var(--font-mono)] text-2xl font-[500] text-[#C9A84C] shrink-0 leading-none mt-0.5">{item.number}</span>
                <div>
                  <h3 className="font-[family-name:var(--font-heading)] text-sm font-[500] tracking-[0.05em] uppercase text-[#1C1917] mb-1">{item.section}</h3>
                  <p className="text-sm text-[#6B5B4E] font-[300] tracking-wide leading-relaxed">{item.guidance}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-14">
          <h2 className="font-[family-name:var(--font-heading)] text-2xl font-[500] tracking-[0.05em] uppercase text-[#1C1917] mb-4">
            Monthly vs Quarterly Updates
          </h2>
          <p className="text-[#6B5B4E] text-base font-[300] tracking-wide leading-relaxed mb-4">
            At pre-seed and seed stage, monthly updates are the clear standard. You have limited history, you are building investor relationships, and each month represents a meaningful proportion of your total runway.
          </p>
          <p className="text-[#6B5B4E] text-base font-[300] tracking-wide leading-relaxed mb-4">
            At Series A and beyond, many companies shift to quarterly because the absolute numbers are larger, investor relationships are more established, and management attention is genuinely constrained. Monthly is still fine if you can maintain the cadence.
          </p>
          <p className="text-[#6B5B4E] text-base font-[300] tracking-wide leading-relaxed">
            The worst outcome is inconsistency — sending updates whenever things are going well and going quiet when they are not. Investors notice the silence. Consistent monthly updates, even in a bad month, build more trust than perfect quarterly updates.
          </p>
        </section>

        <section className="mb-14">
          <h2 className="font-[family-name:var(--font-heading)] text-2xl font-[500] tracking-[0.05em] uppercase text-[#1C1917] mb-6">
            The Update Template (Copy and Use This)
          </h2>
          <div className="bg-[#1C1917] p-6 font-[family-name:var(--font-mono)] text-xs text-white/70 leading-relaxed">
            <p className="text-[#C9A84C] mb-4">Subject: [Company] Update — [Month Year] | MRR £X (+Y%)</p>
            <p className="mb-4">Hi [Name],</p>
            <p className="mb-4 text-white/90">[One sentence. The most important thing that happened this month.]</p>
            <p className="text-[#C9A84C] mb-2">— METRICS —</p>
            <div className="mb-4 pl-2 border-l border-[#C9A84C]/30">
              <p className="mb-1">MRR: £[X] (+[Y]% MoM) | Target: £[T]</p>
              <p className="mb-1">Growth: [X]% MoM</p>
              <p className="mb-1">Runway: [X] months</p>
              <p className="mb-1">Net burn: £[X]/month</p>
              <p className="mb-1">Headcount: [X] FTE</p>
              <p>Customers: [X] (new: [Y], churned: [Z])</p>
            </div>
            <p className="text-[#C9A84C] mb-2">— HIGHLIGHTS —</p>
            <div className="mb-4 pl-2 border-l border-[#C9A84C]/30">
              <p className="mb-1">• [Specific win with numbers or named reference]</p>
              <p className="mb-1">• [Second specific win]</p>
              <p>• [Third if needed, otherwise omit]</p>
            </div>
            <p className="text-[#C9A84C] mb-2">— LOWLIGHTS —</p>
            <div className="mb-4 pl-2 border-l border-[#C9A84C]/30">
              <p className="mb-1">• [What went wrong and what you are doing about it]</p>
              <p>• [Second problem if applicable]</p>
            </div>
            <p className="text-[#C9A84C] mb-2">— ASKS —</p>
            <div className="mb-4 pl-2 border-l border-[#C9A84C]/30">
              <p className="mb-1">• [Specific intro request — name the role and company type]</p>
              <p className="mb-1">• [Tool, vendor, or service referral if needed]</p>
              <p>• [Candidate referral with exact role requirements]</p>
            </div>
            <p className="text-[#C9A84C] mb-2">— NEXT MONTH —</p>
            <p className="mb-4 pl-2">[One sentence on the primary focus]</p>
            <p>[Your name]</p>
          </div>
        </section>

        <div className="bg-[#1C1917] border border-[#C9A84C] p-8 mb-14 relative overflow-hidden">
          <div className="absolute top-3 left-3 w-5 h-5 border-t border-l border-[#C9A84C] opacity-40" />
          <div className="absolute top-3 right-3 w-5 h-5 border-t border-r border-[#C9A84C] opacity-40" />
          <div className="absolute bottom-3 left-3 w-5 h-5 border-b border-l border-[#C9A84C] opacity-40" />
          <div className="absolute bottom-3 right-3 w-5 h-5 border-b border-r border-[#C9A84C] opacity-40" />
          <p className="font-[family-name:var(--font-mono)] text-xs tracking-[0.2em] uppercase text-[#C9A84C] mb-3">CapBrief</p>
          <h3 className="font-[family-name:var(--font-heading)] text-xl font-[500] tracking-[0.05em] uppercase text-white mb-3">
            Attach Your Cap Table Report — Not a Spreadsheet
          </h3>
          <p className="text-white/60 text-sm font-[300] tracking-wide leading-relaxed mb-6">
            The best investor updates include a cap table report as a shareable link — not an Excel attachment investors have to download and open. CapBrief generates a clean ownership waterfall and round summary from your CSV, ready to share in 60 seconds.
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
            The 5 Metrics Every Investor Update Must Include
          </h2>
          <div className="space-y-4">
            {fiveMetrics.map((m) => (
              <div key={m.metric} className="border border-[#D4C9B8] bg-[#FDFAF5] p-5">
                <div className="flex items-start justify-between gap-4 mb-2">
                  <h3 className="font-[family-name:var(--font-heading)] text-sm font-[500] tracking-[0.05em] uppercase text-[#1C1917]">{m.metric}</h3>
                  <span className="font-[family-name:var(--font-mono)] text-xs text-[#C9A84C] shrink-0">{m.format}</span>
                </div>
                <p className="text-sm text-[#6B5B4E] font-[300] tracking-wide leading-relaxed">{m.why}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-14">
          <h2 className="font-[family-name:var(--font-heading)] text-2xl font-[500] tracking-[0.05em] uppercase text-[#1C1917] mb-6">
            What NOT to Include in Investor Updates
          </h2>
          <div className="space-y-4">
            {doNotInclude.map((d) => (
              <div key={d.item} className="border-l-2 border-[#DC2626] pl-4">
                <p className="font-[family-name:var(--font-heading)] text-sm font-[500] tracking-[0.03em] uppercase text-[#1C1917] mb-1">{d.item}</p>
                <p className="text-sm text-[#6B5B4E] font-[300] tracking-wide leading-relaxed">{d.reason}</p>
              </div>
            ))}
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
          <p className="font-[family-name:var(--font-mono)] text-xs tracking-[0.2em] uppercase text-[#C9A84C] mb-3">Add to Your Next Update</p>
          <h3 className="font-[family-name:var(--font-heading)] text-xl font-[500] tracking-[0.05em] uppercase text-white mb-3">
            Your Cap Table Report — Investor-Ready in 60 Seconds
          </h3>
          <p className="text-white/60 text-sm font-[300] tracking-wide leading-relaxed mb-6">
            Every investor update is stronger with a clean equity report attached. CapBrief turns your cap table CSV into a professional ownership waterfall and dilution table — shareable as a PDF link, not a messy spreadsheet attachment.
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
