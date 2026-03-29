import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'The Investor Update Template Used by Y Combinator Alumni | CapBrief',
  description: 'Write investor updates that build trust and open doors. The YC-style format: what to include, how to structure asks, ideal length, frequency, and a real example you can copy.',
  openGraph: {
    title: 'The Investor Update Template Used by Y Combinator Alumni',
    description: 'MRR, runway, key wins, and asks — the investor update format that gets responses and keeps your cap table engaged.',
    type: 'article',
  },
}

export default function InvestorUpdateTemplatePage() {
  return (
    <div className="min-h-screen bg-[#F5F0E8]">
      {/* Nav */}
      <nav className="max-w-[1200px] mx-auto px-6 py-5 flex items-center justify-between border-b border-[#D4C9B8]">
        <Link href="/" className="font-[family-name:var(--font-heading)] text-xl font-700 tracking-[0.1em] text-[#1C1917] uppercase">
          CapBrief
        </Link>
        <div className="flex items-center gap-6">
          <Link href="/guides/cap-table-template" className="text-sm font-[300] text-[#6B5B4E] hover:text-[#1C1917] transition-colors tracking-wider hidden md:block">
            Cap Table Template
          </Link>
          <Link href="/guides/equity-dilution-calculator" className="text-sm font-[300] text-[#6B5B4E] hover:text-[#1C1917] transition-colors tracking-wider hidden md:block">
            Dilution Calculator
          </Link>
          <Link
            href="https://roundbrief.com/auth/signup"
            className="text-sm font-[family-name:var(--font-heading)] tracking-[0.08em] uppercase bg-[#C9A84C] text-[#1C1917] px-6 py-2 hover:bg-[#B8930A] transition-colors"
          >
            Try Free
          </Link>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative bg-[#1C1917] overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-6 border border-[#C9A84C] opacity-15" />
          <div className="absolute top-6 left-6 w-8 h-8 border-t border-l border-[#C9A84C] opacity-50" />
          <div className="absolute top-6 right-6 w-8 h-8 border-t border-r border-[#C9A84C] opacity-50" />
          <div className="absolute bottom-6 left-6 w-8 h-8 border-b border-l border-[#C9A84C] opacity-50" />
          <div className="absolute bottom-6 right-6 w-8 h-8 border-b border-r border-[#C9A84C] opacity-50" />
        </div>
        <div className="max-w-[1200px] mx-auto px-6 py-20 relative z-10">
          <p className="font-[family-name:var(--font-mono)] text-xs tracking-[0.2em] uppercase text-[#C9A84C] mb-6">
            Founder Guide
          </p>
          <h1 className="font-[family-name:var(--font-heading)] text-4xl md:text-5xl font-[500] tracking-[0.04em] uppercase text-white mb-6 max-w-[760px] leading-tight">
            The Investor Update Template Used by Y Combinator Alumni
          </h1>
          <p className="text-lg text-white/60 leading-relaxed max-w-[560px] font-[300] tracking-wide">
            Most investor updates are ignored. These get responses. Here is the structure, the tone, the length, and a real example — plus why cap table accuracy matters more than founders realise.
          </p>
        </div>
      </section>

      {/* Article body */}
      <article className="max-w-[800px] mx-auto px-6 py-16">

        {/* Why bother */}
        <section className="mb-12">
          <h2 className="font-[family-name:var(--font-heading)] text-2xl font-[500] tracking-[0.05em] uppercase text-[#1C1917] mb-4">
            Why Investor Updates Actually Matter
          </h2>
          <p className="text-[#3D2E22] font-[300] tracking-wide leading-relaxed mb-4">
            Most founders treat investor updates as an obligation — something to get done before the next raise. The founders who raise the fastest treat updates as a relationship management tool. The difference shows up in warm intros, follow-on capital, and response rates when you actually need something.
          </p>
          <p className="text-[#3D2E22] font-[300] tracking-wide leading-relaxed mb-4">
            Paul Graham has noted that the best founders keep investors informed even when things are going badly. Investors who understand your situation can help. Investors who are surprised by bad news at the next round cannot. Consistency builds trust faster than any single metric.
          </p>
          <p className="text-[#3D2E22] font-[300] tracking-wide leading-relaxed">
            The format below is derived from what YC recommends to its batch companies and what experienced angels consistently say gets read and acted upon. It is direct, structured, and respects the investor&apos;s time.
          </p>
        </section>

        {/* The template */}
        <section className="mb-12">
          <h2 className="font-[family-name:var(--font-heading)] text-2xl font-[500] tracking-[0.05em] uppercase text-[#1C1917] mb-6">
            The Template
          </h2>

          <div className="border border-[#D4C9B8] overflow-hidden">
            <div className="bg-[#1C1917] px-6 py-4">
              <p className="font-[family-name:var(--font-mono)] text-xs tracking-[0.15em] uppercase text-[#C9A84C]">Email Structure</p>
            </div>
            <div className="p-6 space-y-5">
              {[
                {
                  section: 'Subject Line',
                  content: '[Company] Update — [Month Year] | MRR: £X | Runway: X months',
                  note: 'Include the headline number in the subject. Investors who track 20 portfolio companies will open this first.',
                },
                {
                  section: 'The One-Line Summary',
                  content: '"We grew 18% MoM in March, signed our first enterprise contract, and are raising a £500K extension closing in 6 weeks."',
                  note: 'One sentence. Busy investors read this and decide whether the rest is worth their time.',
                },
                {
                  section: 'Key Metrics',
                  content: 'MRR / ARR (with MoM growth %), Active customers, CAC and LTV if known, Gross margin, Runway (months)',
                  note: 'Use the same metrics every month. Consistency lets investors spot trends. Never redefine metrics to make numbers look better.',
                },
                {
                  section: 'Wins This Month',
                  content: '3 bullets maximum. Specific and concrete: "Signed Acme Corp (£2,400/year ARR)" not "Made good progress on enterprise sales."',
                  note: 'Vague wins read as nothing happened. Name the customer, cite the number, state what changed.',
                },
                {
                  section: 'Challenges',
                  content: 'What is not working. Where you are stuck. What you are trying.',
                  note: 'This is the section most founders skip. It is also the section that prompts investors to offer help. Be direct. Investors have seen these problems before.',
                },
                {
                  section: 'Asks',
                  content: 'Maximum 3, hyper-specific: "Intro to head of procurement at Unilever", "Referral to a US tax lawyer who knows UK founders", "Thoughts on pricing page copy?"',
                  note: 'Generic asks ("any intros to enterprise buyers?") get ignored. Specific asks get actioned. Do your homework on which investor can actually help with what.',
                },
                {
                  section: 'Next Month Focus',
                  content: 'What the company is focused on in the coming 4 weeks. One or two lines.',
                  note: 'Sets expectations and gives investors a benchmark to evaluate in the next update.',
                },
              ].map(({ section, content, note }, i) => (
                <div key={section} className={`${i > 0 ? 'pt-5 border-t border-[#D4C9B8]' : ''}`}>
                  <p className="font-[family-name:var(--font-heading)] text-sm tracking-[0.06em] uppercase text-[#1C1917] mb-2">{section}</p>
                  <p className="font-[family-name:var(--font-mono)] text-xs text-[#3D2E22] leading-relaxed bg-[#F5F0E8] border border-[#D4C9B8] p-3 mb-2">{content}</p>
                  <p className="text-xs text-[#6B5B4E] font-[300] leading-relaxed">{note}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Frequency and length */}
        <section className="mb-12">
          <h2 className="font-[family-name:var(--font-heading)] text-2xl font-[500] tracking-[0.05em] uppercase text-[#1C1917] mb-4">
            Frequency, Length, and Tone
          </h2>

          <h3 className="font-[family-name:var(--font-heading)] text-lg font-[500] tracking-[0.04em] uppercase text-[#1C1917] mb-3">
            How Often
          </h3>
          <p className="text-[#3D2E22] font-[300] tracking-wide leading-relaxed mb-4">
            Monthly for active raises or fast-growth phases. Quarterly for steady-state operations. Never go more than 90 days without an update — silence is interpreted as bad news by experienced investors. YC specifically recommends monthly throughout the company&apos;s first two years.
          </p>

          <h3 className="font-[family-name:var(--font-heading)] text-lg font-[500] tracking-[0.04em] uppercase text-[#1C1917] mb-3">
            How Long
          </h3>
          <p className="text-[#3D2E22] font-[300] tracking-wide leading-relaxed mb-4">
            Under 300 words in the email body. Investors read this on mobile between meetings. Long updates signal a founder who has not edited their thinking. If you need to share more detail, attach a PDF (CapBrief generates a clean equity report that works as an attachment) or link to a dashboard.
          </p>

          <h3 className="font-[family-name:var(--font-heading)] text-lg font-[500] tracking-[0.04em] uppercase text-[#1C1917] mb-3">
            Tone
          </h3>
          <p className="text-[#3D2E22] font-[300] tracking-wide leading-relaxed">
            Direct and factual. Not cheerleader, not apologetic. Investors respect founders who can state facts without spin. &ldquo;We missed our MRR target by 15% because churn from SMBs was higher than modelled. We are moving upmarket and expect this to correct by Q3.&rdquo; is better than &ldquo;It was a challenging month but we learned a lot and are excited about what is ahead.&rdquo;
          </p>
        </section>

        {/* Example */}
        <section className="mb-12">
          <h2 className="font-[family-name:var(--font-heading)] text-2xl font-[500] tracking-[0.05em] uppercase text-[#1C1917] mb-4">
            A Real-Format Example
          </h2>
          <div className="bg-[#1C1917] border border-[#C9A84C]/20 p-6">
            <p className="font-[family-name:var(--font-mono)] text-[#C9A84C] text-xs tracking-[0.15em] uppercase mb-4">Example Email</p>
            <div className="space-y-4 font-[300] text-white/80 text-sm leading-relaxed">
              <p><span className="text-white/40 font-[family-name:var(--font-mono)] text-xs">SUBJECT:</span> Acme Update — March 2026 | MRR: £28,400 (+22%) | Runway: 14 months</p>
              <p className="pt-2 border-t border-white/10">We grew MRR 22% in March, signed our first £12K ACV enterprise contract, and are on track to hit £35K MRR by end of Q2.</p>
              <div className="pt-2 border-t border-white/10">
                <p className="text-white/50 font-[family-name:var(--font-mono)] text-xs mb-2">METRICS</p>
                <p>MRR: £28,400 (+22% MoM) · ARR: £340,800 · Customers: 47 (+6) · Churn: 2.1% · Runway: 14 months</p>
              </div>
              <div className="pt-2 border-t border-white/10">
                <p className="text-white/50 font-[family-name:var(--font-mono)] text-xs mb-2">WINS</p>
                <p>— Signed Whitmore &amp; Co on a £12K ACV annual contract (our first enterprise deal)<br />— PDF export feature shipped; activated by 38% of users in first week<br />— Shortlisted for TechNation Rising Stars 2026</p>
              </div>
              <div className="pt-2 border-t border-white/10">
                <p className="text-white/50 font-[family-name:var(--font-mono)] text-xs mb-2">CHALLENGES</p>
                <p>SMB churn is running at 4.2% — higher than our 2% target. Investigation points to onboarding drop-off after day 7. Hiring a customer success lead is now a priority hire.</p>
              </div>
              <div className="pt-2 border-t border-white/10">
                <p className="text-white/50 font-[family-name:var(--font-mono)] text-xs mb-2">ASKS</p>
                <p>1. Intro to head of finance at any PE-backed professional services firm (£50M+ revenue)<br />2. Referral to a customer success lead who has scaled a B2B SaaS from 50–500 customers<br />3. Your thoughts on our pricing page — does the enterprise tier justify the price gap?</p>
              </div>
              <div className="pt-2 border-t border-white/10">
                <p className="text-white/50 font-[family-name:var(--font-mono)] text-xs mb-2">APRIL FOCUS</p>
                <p>Fix day-7 onboarding drop-off. Close 2 more enterprise pilots. Hire customer success.</p>
              </div>
              <p className="pt-2 border-t border-white/10 text-white/50 text-xs">Full equity report attached. Cap table accurate as of March 31, 2026.</p>
            </div>
          </div>
        </section>

        {/* Cap table accuracy section */}
        <section className="mb-12">
          <h2 className="font-[family-name:var(--font-heading)] text-2xl font-[500] tracking-[0.05em] uppercase text-[#1C1917] mb-4">
            Why Cap Table Accuracy Matters for Updates
          </h2>
          <p className="text-[#3D2E22] font-[300] tracking-wide leading-relaxed mb-4">
            The metrics section of your update is only as credible as the equity data behind it. When investors receive your update, they will cross-reference your stated dilution, runway, and ownership numbers against what they hold in their own records. Discrepancies erode trust quietly — investors note them and ask about them during the next raise.
          </p>
          <p className="text-[#3D2E22] font-[300] tracking-wide leading-relaxed mb-4">
            Common errors that surface at fundraising: SAFE notes not reflected in fully-diluted share count, option pool size listed as reserved vs. granted, share class data not updated after a secondary. These are all preventable with a clean cap table. See our <Link href="/guides/cap-table-template" className="text-[#C9A84C] hover:underline">cap table template guide</Link> for the columns you need.
          </p>
          <p className="text-[#3D2E22] font-[300] tracking-wide leading-relaxed">
            Before sending any investor update that references ownership or dilution, generate a CapBrief report from your latest cap table CSV. Attach it to the email. It takes five minutes, and it signals that your financial housekeeping is as sharp as your growth metrics. See also: <Link href="/guides/equity-dilution-calculator" className="text-[#C9A84C] hover:underline">how to model dilution before your next round</Link>.
          </p>
        </section>

        {/* CTA */}
        <section className="relative bg-[#1C1917] overflow-hidden p-10 mt-16">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute inset-4 border border-[#C9A84C] opacity-15" />
            <div className="absolute top-4 left-4 w-6 h-6 border-t border-l border-[#C9A84C] opacity-40" />
            <div className="absolute bottom-4 right-4 w-6 h-6 border-b border-r border-[#C9A84C] opacity-40" />
          </div>
          <div className="relative z-10">
            <p className="font-[family-name:var(--font-mono)] text-xs tracking-[0.2em] uppercase text-[#C9A84C] mb-4">
              Send a Better Update This Month
            </p>
            <h2 className="font-[family-name:var(--font-heading)] text-2xl font-[500] tracking-[0.04em] uppercase text-white mb-4">
              Attach a Professional Equity Report to Your Next Update.
            </h2>
            <p className="text-white/60 font-[300] tracking-wide mb-8 max-w-[480px]">
              Upload your cap table CSV to CapBrief. Get a polished PDF showing ownership waterfall, dilution history, and round summary — ready to attach to your investor email in under 5 minutes.
            </p>
            <a
              href="https://roundbrief.com/auth/signup"
              className="inline-block font-[family-name:var(--font-heading)] text-sm tracking-[0.1em] uppercase bg-[#C9A84C] text-[#1C1917] px-8 py-4 hover:bg-[#B8930A] transition-colors"
            >
              Generate Your Report Free
            </a>
          </div>
        </section>

        {/* Internal links */}
        <section className="mt-12 pt-8 border-t border-[#D4C9B8]">
          <p className="font-[family-name:var(--font-heading)] text-sm tracking-[0.08em] uppercase text-[#6B5B4E] mb-4">Continue Reading</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { href: '/guides/cap-table-template', label: 'Cap Table Template', desc: 'Free template with all columns' },
              { href: '/guides/equity-dilution-calculator', label: 'Dilution Calculator', desc: 'Model your next round dilution' },
              { href: '/guides/cap-table-software', label: 'Cap Table Software', desc: 'Carta vs Pulley vs CapBrief' },
            ].map(link => (
              <Link key={link.href} href={link.href} className="border border-[#D4C9B8] p-4 hover:border-[#C9A84C] transition-colors group">
                <p className="font-[family-name:var(--font-heading)] text-sm tracking-[0.04em] uppercase text-[#1C1917] group-hover:text-[#C9A84C] transition-colors mb-1">{link.label}</p>
                <p className="text-xs text-[#6B5B4E] font-[300]">{link.desc}</p>
              </Link>
            ))}
          </div>
        </section>
      </article>

      {/* Footer */}
      <footer className="border-t border-[#D4C9B8] mt-8">
        <div className="max-w-[1200px] mx-auto px-6 py-8 flex items-center justify-between">
          <span className="font-[family-name:var(--font-heading)] text-sm tracking-[0.1em] uppercase text-[#1C1917]">CapBrief</span>
          <p className="text-xs text-[#6B5B4E] font-[300]">
            <a href="https://roundbrief.com" className="hover:text-[#C9A84C] transition-colors">roundbrief.com</a>
          </p>
        </div>
      </footer>
    </div>
  )
}
