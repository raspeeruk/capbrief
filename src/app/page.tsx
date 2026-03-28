import Link from 'next/link'

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-[#F5F0E8]">
      {/* Nav */}
      <nav className="max-w-[1200px] mx-auto px-6 py-5 flex items-center justify-between border-b border-[#D4C9B8]">
        <span className="font-[family-name:var(--font-heading)] text-xl font-700 tracking-[0.1em] text-[#1C1917] uppercase">
          CapBrief
        </span>
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

      {/* Hero — dark background with geometric gold frame */}
      <section className="relative bg-[#1C1917] overflow-hidden">
        {/* Geometric frame decorations */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-6 border border-[#C9A84C] opacity-15" />
          <div className="absolute inset-10 border border-[#C9A84C] opacity-10" />
          {/* Corner ornaments */}
          <div className="absolute top-6 left-6 w-8 h-8 border-t border-l border-[#C9A84C] opacity-50" />
          <div className="absolute top-6 right-6 w-8 h-8 border-t border-r border-[#C9A84C] opacity-50" />
          <div className="absolute bottom-6 left-6 w-8 h-8 border-b border-l border-[#C9A84C] opacity-50" />
          <div className="absolute bottom-6 right-6 w-8 h-8 border-b border-r border-[#C9A84C] opacity-50" />
        </div>

        <div className="max-w-[1200px] mx-auto px-6 py-28 relative z-10">
          <p className="font-[family-name:var(--font-mono)] text-xs tracking-[0.2em] uppercase text-[#C9A84C] mb-8">
            For Founders &amp; CFOs
          </p>
          <h1 className="hero-heading text-white mb-6 max-w-[800px]">
            Your cap table.<br />Investor-ready.
          </h1>
          <p className="text-lg text-white/60 leading-relaxed max-w-[540px] mb-12 font-[300] tracking-wide">
            Upload a messy CSV. AI infers missing data, calculates dilution, and generates
            a professional equity report your board can present with confidence.
          </p>
          <div className="flex items-center gap-5 flex-wrap">
            <Link
              href="/auth/signup"
              className="font-[family-name:var(--font-heading)] text-sm tracking-[0.1em] uppercase bg-[#C9A84C] text-[#1C1917] px-8 py-4 hover:bg-[#B8930A] transition-colors"
            >
              Start free — upload your CSV
            </Link>
            <Link
              href="/app/upload"
              className="font-[family-name:var(--font-heading)] text-sm tracking-[0.1em] uppercase border border-[#C9A84C]/40 text-[#C9A84C] px-8 py-4 hover:border-[#C9A84C] hover:text-white transition-colors"
            >
              Try demo
            </Link>
          </div>
        </div>
      </section>

      {/* Mock PDF Report preview */}
      <section className="max-w-[1200px] mx-auto px-6 py-20">
        <div className="flex items-end justify-between mb-8">
          <div>
            <h2 className="font-[family-name:var(--font-heading)] text-3xl font-[500] tracking-[0.05em] text-[#1C1917] uppercase mb-2">
              The Report Your Investors Expect
            </h2>
            <p className="text-[#6B5B4E] text-sm font-[300] tracking-wide max-w-[500px]">
              A structured ownership waterfall, dilution table, and round summary — all from a single CSV upload.
            </p>
          </div>
        </div>

        {/* Mock report */}
        <div className="border border-[#D4C9B8] bg-[#FDFAF5] shadow-[0_2px_16px_rgba(28,25,23,0.08)]">
          {/* Cover bar */}
          <div className="bg-[#1C1917] px-8 py-6 flex items-center justify-between">
            <div>
              <p className="font-[family-name:var(--font-mono)] text-[10px] tracking-[0.2em] uppercase text-[#C9A84C] mb-1">Equity Report</p>
              <h3 className="font-[family-name:var(--font-heading)] text-white text-lg tracking-[0.05em] uppercase">Acme Technologies Ltd.</h3>
              <p className="text-white/40 text-xs mt-1 font-[300]">4 Shareholders &nbsp;·&nbsp; 3 Rounds &nbsp;·&nbsp; March 2026</p>
            </div>
            <div className="text-right">
              <p className="font-[family-name:var(--font-mono)] text-[#C9A84C] text-2xl font-[500]">10,000,000</p>
              <p className="text-white/40 text-xs font-[300]">Total shares issued</p>
            </div>
          </div>

          {/* Waterfall bar mock */}
          <div className="p-6 border-b border-[#D4C9B8]">
            <p className="font-[family-name:var(--font-mono)] text-[10px] tracking-[0.15em] uppercase text-[#6B5B4E] mb-3">Ownership Waterfall</p>
            <div className="flex h-8 border border-[#D4C9B8]">
              <div className="bg-[#0D5C63]" style={{ width: '45%' }} title="Founders — 45%" />
              <div className="bg-[#C9A84C]" style={{ width: '30%' }} title="Series A — 30%" />
              <div className="bg-[#B8860B]" style={{ width: '15%' }} title="Series B — 15%" />
              <div className="bg-[#64748B]" style={{ width: '10%' }} title="ESOP — 10%" />
            </div>
            <div className="flex gap-4 mt-2">
              {[
                { color: '#0D5C63', label: 'Ordinary', pct: '45.00%' },
                { color: '#C9A84C', label: 'Preferred A', pct: '30.00%' },
                { color: '#B8860B', label: 'Preferred B', pct: '15.00%' },
                { color: '#64748B', label: 'Options', pct: '10.00%' },
              ].map(item => (
                <div key={item.label} className="flex items-center gap-1.5">
                  <div className="w-2.5 h-2.5" style={{ backgroundColor: item.color }} />
                  <span className="text-[10px] text-[#6B5B4E]">{item.label}</span>
                  <span className="font-[family-name:var(--font-mono)] text-[10px] text-[#1C1917] font-[500]">{item.pct}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Shareholders table mock */}
          <div className="p-6">
            <p className="font-[family-name:var(--font-mono)] text-[10px] tracking-[0.15em] uppercase text-[#6B5B4E] mb-3">Shareholders</p>
            <table className="w-full text-xs">
              <thead>
                <tr className="border-b border-[#D4C9B8]">
                  {['Shareholder', 'Class', 'Shares', 'Ownership %', 'Fully Diluted %', 'Invested'].map(h => (
                    <th key={h} className="text-left py-2 px-2 font-[family-name:var(--font-heading)] text-[#1C1917] text-[10px] tracking-[0.05em] uppercase font-[500]">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[
                  { name: 'Sarah Chen', class: 'Ordinary', shares: '4,500,000', own: '45.00%', fd: '40.91%', inv: '—' },
                  { name: 'James Okafor', class: 'Ordinary', shares: '500,000', own: '5.00%', fd: '4.55%', inv: '—' },
                  { name: 'Sequoia Capital', class: 'Preferred A', shares: '3,000,000', own: '30.00%', fd: '27.27%', inv: '£2,500,000' },
                  { name: 'Index Ventures', class: 'Preferred B', shares: '1,500,000', own: '15.00%', fd: '13.64%', inv: '£3,000,000' },
                  { name: 'ESOP Pool', class: 'Options', shares: '500,000', own: '5.00%', fd: '4.55%', inv: '—' },
                ].map((row, i) => (
                  <tr key={row.name} className={`border-b border-[#D4C9B8]/50 ${i % 2 === 0 ? '' : 'bg-[#F5F0E8]/50'}`}>
                    <td className="py-1.5 px-2 font-medium text-[#1C1917]">{row.name}</td>
                    <td className="py-1.5 px-2 text-[#6B5B4E]">{row.class}</td>
                    <td className="py-1.5 px-2 font-[family-name:var(--font-mono)] text-[#1C1917]">{row.shares}</td>
                    <td className="py-1.5 px-2 font-[family-name:var(--font-mono)] text-[#C9A84C] font-[500]">{row.own}</td>
                    <td className="py-1.5 px-2 font-[family-name:var(--font-mono)] text-[#6B5B4E]">{row.fd}</td>
                    <td className="py-1.5 px-2 font-[family-name:var(--font-mono)] text-[#6B5B4E]">{row.inv}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <div className="max-w-[1200px] mx-auto px-6"><div className="h-px bg-[#D4C9B8]" /></div>

      {/* How it works */}
      <section className="max-w-[1200px] mx-auto px-6 py-20">
        <h2 className="font-[family-name:var(--font-heading)] text-3xl font-[500] tracking-[0.05em] uppercase text-[#1C1917] mb-4">
          Three Steps
        </h2>
        <p className="text-[#6B5B4E] mb-14 max-w-[480px] text-sm font-[300] tracking-wide">
          From messy spreadsheet to investor-ready report in under five minutes.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-[#D4C9B8]">
          {[
            {
              step: '01',
              title: 'Upload CSV',
              desc: 'Drop your cap table export from any source — Companies House, Carta, or a manual spreadsheet. Messy headers, inconsistent formatting — we handle it.',
            },
            {
              step: '02',
              title: 'AI Processes',
              desc: 'Claude identifies founders, investors, and ESOP pools. Share classes inferred. Dilution calculated. Missing data flagged with confidence scores.',
            },
            {
              step: '03',
              title: 'Download Report',
              desc: 'Ownership waterfall chart, dilution table, funding round summary — all in a clean PDF ready for your board pack or investor deck.',
            },
          ].map((item, i) => (
            <div key={item.step} className={`p-8 ${i < 2 ? 'border-r border-[#D4C9B8]' : ''}`}>
              <span className="font-[family-name:var(--font-mono)] text-2xl font-[500] text-[#C9A84C]">
                {item.step}
              </span>
              <h3 className="font-[family-name:var(--font-heading)] text-lg font-[500] tracking-[0.04em] uppercase text-[#1C1917] mt-4 mb-3">
                {item.title}
              </h3>
              <p className="text-[#6B5B4E] text-sm font-[300] tracking-wide leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="max-w-[1200px] mx-auto px-6"><div className="h-px bg-[#D4C9B8]" /></div>

      {/* What you get */}
      <section className="max-w-[1200px] mx-auto px-6 py-20">
        <h2 className="font-[family-name:var(--font-heading)] text-3xl font-[500] tracking-[0.05em] uppercase text-[#1C1917] mb-4">
          What You Get
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              number: '1',
              title: 'Ownership Waterfall',
              desc: 'Visual breakdown of every shareholder by share class. Hover to see shares, percentage, and investment amount. Exportable as PDF.',
            },
            {
              number: '2',
              title: 'Dilution Table',
              desc: 'Current ownership and fully diluted percentages side by side. Options, warrants, and convertibles modelled correctly.',
            },
            {
              number: '3',
              title: 'Round Summary',
              desc: 'AI groups investors by funding round based on dates and share class. Pre-money and post-money valuations calculated where data allows.',
            },
          ].map(item => (
            <div key={item.number} className="border border-[#D4C9B8] p-8 bg-[#FDFAF5]">
              <div className="font-[family-name:var(--font-mono)] text-4xl font-[500] text-[#C9A84C] mb-4">{item.number}</div>
              <h3 className="font-[family-name:var(--font-heading)] text-base font-[500] tracking-[0.05em] uppercase text-[#1C1917] mb-3">
                {item.title}
              </h3>
              <p className="text-[#6B5B4E] text-sm font-[300] tracking-wide leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="max-w-[1200px] mx-auto px-6"><div className="h-px bg-[#D4C9B8]" /></div>

      {/* Pricing */}
      <section className="max-w-[1200px] mx-auto px-6 py-20">
        <h2 className="font-[family-name:var(--font-heading)] text-3xl font-[500] tracking-[0.05em] uppercase text-[#1C1917] mb-4">
          Pricing
        </h2>
        <p className="text-[#6B5B4E] mb-14 max-w-[480px] text-sm font-[300] tracking-wide">
          Start free. Upgrade when you need more reports or team access.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-[#D4C9B8]">
          {[
            {
              plan: 'Free',
              price: '£0',
              period: 'forever',
              desc: 'For founders just getting started',
              features: ['Up to 10 shareholders', 'Ownership waterfall chart', 'PDF export with CapBrief watermark', '1 saved report'],
              cta: 'Start free',
              href: '/auth/signup',
              highlight: false,
            },
            {
              plan: 'Pro',
              price: '£29',
              period: '/month',
              desc: 'For active fundraising rounds',
              features: ['Unlimited shareholders', 'Unlimited reports', 'PDF export — no watermark', 'Dilution modelling', 'Round summary with valuations', 'Edit and correct AI inferences'],
              cta: 'Start Pro trial',
              href: '/auth/signup?plan=pro',
              highlight: true,
            },
            {
              plan: 'Agency',
              price: '£79',
              period: '/month',
              desc: 'For advisors managing multiple companies',
              features: ['Everything in Pro', '5 team seats', 'White-label PDF exports', 'Multiple company workspaces', 'Priority support'],
              cta: 'Start Agency trial',
              href: '/auth/signup?plan=agency',
              highlight: false,
            },
          ].map((tier, i) => (
            <div
              key={tier.plan}
              className={`p-8 relative ${i < 2 ? 'border-r border-[#D4C9B8]' : ''} ${tier.highlight ? 'bg-[#1C1917]' : 'bg-[#FDFAF5]'}`}
            >
              {tier.highlight && (
                <div className="absolute -top-px left-0 right-0 h-0.5 bg-[#C9A84C]" />
              )}
              <p className={`font-[family-name:var(--font-mono)] text-[10px] tracking-[0.2em] uppercase mb-4 ${tier.highlight ? 'text-[#C9A84C]' : 'text-[#6B5B4E]'}`}>
                {tier.plan}
              </p>
              <div className="mb-2">
                <span className={`font-[family-name:var(--font-mono)] text-4xl font-[500] ${tier.highlight ? 'text-white' : 'text-[#1C1917]'}`}>
                  {tier.price}
                </span>
                <span className={`text-sm ml-1 font-[300] ${tier.highlight ? 'text-white/50' : 'text-[#6B5B4E]'}`}>
                  {tier.period}
                </span>
              </div>
              <p className={`text-xs font-[300] tracking-wide mb-6 ${tier.highlight ? 'text-white/60' : 'text-[#6B5B4E]'}`}>{tier.desc}</p>
              <ul className="space-y-2.5 mb-8">
                {tier.features.map(f => (
                  <li key={f} className="flex items-start gap-2">
                    <svg className={`w-3.5 h-3.5 mt-0.5 shrink-0 ${tier.highlight ? 'text-[#C9A84C]' : 'text-[#059669]'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                    <span className={`text-xs font-[300] tracking-wide ${tier.highlight ? 'text-white/70' : 'text-[#6B5B4E]'}`}>{f}</span>
                  </li>
                ))}
              </ul>
              <Link
                href={tier.href}
                className={`block text-center font-[family-name:var(--font-heading)] text-xs tracking-[0.1em] uppercase py-3 px-6 transition-colors ${
                  tier.highlight
                    ? 'bg-[#C9A84C] text-[#1C1917] hover:bg-[#B8930A]'
                    : 'border border-[#D4C9B8] text-[#1C1917] hover:border-[#C9A84C] hover:text-[#C9A84C]'
                }`}
              >
                {tier.cta}
              </Link>
            </div>
          ))}
        </div>
      </section>

      <div className="max-w-[1200px] mx-auto px-6"><div className="h-px bg-[#D4C9B8]" /></div>

      {/* FAQ */}
      <section className="max-w-[1200px] mx-auto px-6 py-20">
        <h2 className="font-[family-name:var(--font-heading)] text-3xl font-[500] tracking-[0.05em] uppercase text-[#1C1917] mb-12">
          Frequently Asked
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-10 max-w-[900px]">
          {[
            {
              q: 'What CSV formats do you accept?',
              a: 'Any CSV with shareholder names and share counts. We auto-detect column headers — they don\'t need to be perfectly formatted. Companies House exports, Carta, Seedlegals, or manual spreadsheets all work.',
            },
            {
              q: 'What if my share classes are missing or wrong?',
              a: 'AI infers share classes from context — share counts, investment amounts, dates, and investor names. Every inference is flagged with a confidence level so you can review and correct before exporting.',
            },
            {
              q: 'Is my data secure?',
              a: 'Data is processed server-side and stored encrypted. We never use your cap table data for model training. You can delete any report at any time.',
            },
            {
              q: 'Can I edit the AI\'s inferences?',
              a: 'Yes. Every shareholder record is fully editable — you can correct share classes, add notes, and fix any errors before generating your PDF.',
            },
            {
              q: 'What if I have convertible notes or SAFEs?',
              a: 'CapBrief models convertibles as a separate class and includes them in the fully diluted percentage calculation. Valuation caps and discounts can be added manually.',
            },
            {
              q: 'Can I white-label the PDF?',
              a: 'Yes — on the Agency plan. Upload your logo and set your accent color. The PDF removes the CapBrief watermark and presents as your own work.',
            },
          ].map(faq => (
            <div key={faq.q}>
              <div className="border-l-2 border-[#C9A84C] pl-4 mb-2">
                <h3 className="font-[family-name:var(--font-heading)] text-sm font-[500] tracking-[0.04em] uppercase text-[#1C1917]">{faq.q}</h3>
              </div>
              <p className="text-sm text-[#6B5B4E] font-[300] tracking-wide leading-relaxed">{faq.a}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="max-w-[1200px] mx-auto px-6"><div className="h-px bg-[#D4C9B8]" /></div>

      {/* Final CTA */}
      <section className="bg-[#1C1917] relative overflow-hidden">
        {/* Corner ornaments */}
        <div className="absolute top-6 left-6 w-8 h-8 border-t border-l border-[#C9A84C] opacity-40" />
        <div className="absolute top-6 right-6 w-8 h-8 border-t border-r border-[#C9A84C] opacity-40" />
        <div className="absolute bottom-6 left-6 w-8 h-8 border-b border-l border-[#C9A84C] opacity-40" />
        <div className="absolute bottom-6 right-6 w-8 h-8 border-b border-r border-[#C9A84C] opacity-40" />

        <div className="max-w-[1200px] mx-auto px-6 py-20 text-center relative z-10">
          <p className="font-[family-name:var(--font-mono)] text-[10px] tracking-[0.2em] uppercase text-[#C9A84C] mb-6">
            Get started today
          </p>
          <h2 className="font-[family-name:var(--font-heading)] text-4xl font-[700] tracking-[0.05em] uppercase text-white mb-5 max-w-[600px] mx-auto">
            Your Cap Table Deserves Better Than a Spreadsheet
          </h2>
          <p className="text-white/50 mb-10 max-w-[400px] mx-auto text-sm font-[300] tracking-wide">
            Upload your CSV and get an investor-ready report in minutes. No card required for the free plan.
          </p>
          <Link
            href="/auth/signup"
            className="inline-block font-[family-name:var(--font-heading)] text-sm tracking-[0.1em] uppercase bg-[#C9A84C] text-[#1C1917] px-10 py-4 hover:bg-[#B8930A] transition-colors"
          >
            Upload your cap table free
          </Link>
        </div>
      </section>

      {/* Footer */}
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
