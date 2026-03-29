import type { Metadata } from 'next'
import Link from 'next/link'

export const dynamic = 'force-static'

export const metadata: Metadata = {
  title: 'Startup Dilution Guide: How Funding Rounds Shrink Founder Ownership | CapBrief',
  description: 'Every funding round dilutes your ownership. Learn exactly how dilution works, how option pools accelerate it, and how to model your position before you negotiate.',
  openGraph: {
    title: 'Startup Dilution Guide: How Funding Rounds Shrink Founder Ownership | CapBrief',
    description: 'Every funding round dilutes your ownership. Learn exactly how dilution works, how option pools accelerate it, and how to model your position before you negotiate.',
    type: 'article',
  },
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Startup Dilution Guide: How Funding Rounds Shrink Founder Ownership',
  description: 'Every funding round dilutes your ownership. Learn exactly how dilution works, how option pools accelerate it, and how to model your position before you negotiate.',
  author: { '@type': 'Organization', name: 'CapBrief' },
  publisher: { '@type': 'Organization', name: 'CapBrief', url: 'https://roundbrief.com' },
}

const dilutionSteps = [
  {
    round: 'Day 0 — Incorporation',
    founders: '100.0%',
    investors: '—',
    pool: '—',
    note: 'Two founders, 50/50 split. 1,000,000 shares each.',
  },
  {
    round: 'Pre-Seed SAFE (£200K at £2M cap)',
    founders: '90.9%',
    investors: '9.1%',
    pool: '—',
    note: 'SAFE converts at cap: £2M / 2M shares = £1.00 per share, 200,000 new shares.',
  },
  {
    round: 'Seed Option Pool Created (10%)',
    founders: '81.8%',
    investors: '8.2%',
    pool: '10.0%',
    note: 'Option pool created pre-round. Dilutes founders and existing investors, not incoming VC.',
  },
  {
    round: 'Seed Round (£750K at £3M pre)',
    founders: '61.4%',
    investors: '30.1%',
    pool: '8.5%',
    note: 'VC takes 20% post-money. SAFE converts. Option pool shown as remaining ungranted.',
  },
  {
    round: 'Series A (£5M at £12M pre)',
    founders: '44.6%',
    investors: '46.4%',
    pool: '9.0%',
    note: 'Series A option pool top-up. Founders now minority. Series A VC gets board seat.',
  },
]

const faqs = [
  {
    q: 'What is equity dilution?',
    a: 'Dilution is the reduction in your ownership percentage that happens when new shares are issued to investors, employees, or option holders. Your share count stays the same — the total number of shares increases, so your percentage falls. If you own 1,000,000 shares out of 2,000,000 (50%), and a new investor is issued 500,000 shares, you now own 1,000,000 out of 2,500,000 — 40%. Your shares have not changed; the denominator has.',
  },
  {
    q: 'What is the option pool shuffle?',
    a: 'The option pool shuffle is when VCs require you to create or expand the option pool before the round closes, not after. Because the pool is created pre-round, it dilutes the founders and existing shareholders — not the incoming VC. The VC\'s ownership is calculated against the fully diluted total including the new pool. Moving the option pool creation to post-round saves founders 2-5% at seed stage. Most founders don\'t know to ask.',
  },
  {
    q: 'How much dilution is acceptable per round?',
    a: 'A reasonable rule of thumb: give up no more than 20-25% per priced round, and try to keep founder ownership above 50% at seed close and above 40% at Series A close. If you are raising on a SAFE before a priced round, treat that as an advance against seed dilution — not free money. Cumulative dilution across pre-seed SAFE, seed, and Series A typically lands founders at 45-65% post-Series A.',
  },
  {
    q: 'Does dilution mean I lose control of my company?',
    a: 'Not automatically. Control comes from board seats, voting rights, and protective provisions — not just percentage ownership. A founder can own 45% and still control the board if they have the right share class or board seat agreements. Conversely, a founder at 60% can lose practical control if investors have blocking rights over key decisions. Read the shareholder agreement as carefully as the investment terms.',
  },
  {
    q: 'What is anti-dilution protection?',
    a: 'Anti-dilution clauses protect investors if you raise a down round (at a lower valuation than their investment). The most common type is broad-based weighted average — the investor\'s share count is adjusted to partially compensate for the lower price. Full ratchet anti-dilution is more aggressive: the investor\'s price is reset to the new lower price, which can be catastrophically dilutive to founders. Negotiate for weighted average; resist full ratchet.',
  },
  {
    q: 'How do I calculate my post-round ownership?',
    a: 'Post-round founder % = (founder shares) / (total pre-round shares + new option pool shares + new investor shares). The key is getting the denominator right — it must include all new shares, converted instruments, and option pool additions. CapBrief does this calculation automatically when you upload your cap table CSV, so you can see the post-round position before you sign.',
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

export default function StartupDilutionGuidePage() {
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
            Startup Dilution Guide
          </p>
          <h1 className="font-[family-name:var(--font-heading)] text-4xl font-[700] tracking-[0.05em] uppercase text-white mb-6 leading-tight">
            Startup Dilution Guide
          </h1>
          <p className="text-lg text-white/60 leading-relaxed font-[300] tracking-wide">
            Every funding round, every option grant, every SAFE conversion makes you own a smaller percentage of a (hopefully) larger company. Understanding how dilution compounds across rounds is the difference between a founder who reaches Series A with 45% and one who reaches it with 22%. The maths is simple. Most founders just never run it.
          </p>
        </div>
      </section>

      <article className="max-w-[768px] mx-auto px-6 py-16">

        <section className="mb-14">
          <h2 className="font-[family-name:var(--font-heading)] text-2xl font-[500] tracking-[0.05em] uppercase text-[#1C1917] mb-6">
            How Dilution Works
          </h2>
          <p className="text-[#6B5B4E] text-base font-[300] tracking-wide leading-relaxed mb-6">
            Dilution happens when new shares are created and issued to someone other than you. Your share count stays fixed. The total share count increases. Your percentage falls.
          </p>
          <p className="text-[#6B5B4E] text-base font-[300] tracking-wide leading-relaxed mb-6">
            The formula is straightforward: <span className="font-[500] text-[#1C1917]">your new % = your shares ÷ (old total shares + new shares issued)</span>. The complexity comes from stacking multiple dilutive events — SAFEs converting, option pools being created, warrants being exercised — all at different prices and at different times.
          </p>
          <p className="text-[#6B5B4E] text-base font-[300] tracking-wide leading-relaxed">
            The worked example below follows two founders from incorporation to Series A. The numbers are representative UK benchmarks for 2024. Your actual outcome depends on terms, valuation, and how aggressively you negotiate the option pool.
          </p>
        </section>

        <section className="mb-14">
          <h2 className="font-[family-name:var(--font-heading)] text-2xl font-[500] tracking-[0.05em] uppercase text-[#1C1917] mb-6">
            Worked Example: Incorporation to Series A
          </h2>
          <div className="border border-[#D4C9B8] overflow-x-auto">
            <table className="w-full text-sm min-w-[520px]">
              <thead>
                <tr className="bg-[#1C1917]">
                  <th className="text-left py-3 px-4 font-[family-name:var(--font-heading)] text-[10px] tracking-[0.1em] uppercase text-[#C9A84C]">Event</th>
                  <th className="text-left py-3 px-4 font-[family-name:var(--font-heading)] text-[10px] tracking-[0.1em] uppercase text-[#C9A84C]">Founders</th>
                  <th className="text-left py-3 px-4 font-[family-name:var(--font-heading)] text-[10px] tracking-[0.1em] uppercase text-[#C9A84C]">Investors</th>
                  <th className="text-left py-3 px-4 font-[family-name:var(--font-heading)] text-[10px] tracking-[0.1em] uppercase text-[#C9A84C]">Pool</th>
                </tr>
              </thead>
              <tbody>
                {dilutionSteps.map((row, i) => (
                  <tr key={row.round} className={`border-t border-[#D4C9B8] ${i % 2 === 0 ? 'bg-[#FDFAF5]' : 'bg-[#F5F0E8]'}`}>
                    <td className="py-3 px-4 align-top">
                      <p className="text-xs text-[#1C1917] font-[500] mb-1">{row.round}</p>
                      <p className="text-[11px] text-[#6B5B4E] font-[300] leading-relaxed">{row.note}</p>
                    </td>
                    <td className="py-3 px-4 font-[family-name:var(--font-mono)] text-sm text-[#1C1917] font-[700] align-top">{row.founders}</td>
                    <td className="py-3 px-4 font-[family-name:var(--font-mono)] text-sm text-[#C9A84C] align-top">{row.investors}</td>
                    <td className="py-3 px-4 font-[family-name:var(--font-mono)] text-sm text-[#6B5B4E] align-top">{row.pool}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-[#6B5B4E] font-[300] tracking-wide mt-3 italic">
            All percentages on a fully diluted basis. Assumes option pool created pre-seed round (common VC requirement).
          </p>
        </section>

        <section className="mb-14">
          <h2 className="font-[family-name:var(--font-heading)] text-2xl font-[500] tracking-[0.05em] uppercase text-[#1C1917] mb-6">
            Three Things That Accelerate Dilution
          </h2>
          <div className="space-y-4">
            {[
              {
                title: '1. The Option Pool Shuffle',
                body: 'VCs typically require you to expand the option pool to 10-15% before they invest, not after. This means the pool expansion dilutes you and your existing investors — not the VC. If you have 10% left in your pool, the VC might require you to top it up to 15% pre-round. That extra 5% comes entirely out of your ownership and the existing investors\'. Negotiate to create the pool post-round, or at minimum calculate the dilution explicitly.',
              },
              {
                title: '2. SAFE Stacking Without a Valuation Cap',
                body: 'Uncapped SAFEs are extremely founder-hostile. Without a cap, the SAFE converts at whatever the priced round values the company at — which means if you raise a strong seed, those early angels convert at a high price and get very few shares. That sounds good until you realize uncapped SAFEs without a discount give angels no real incentive to invest early. In practice, SAFEs always have a cap and/or discount. Model the conversion as if the cap is the price — because at seed stage, it often is.',
              },
              {
                title: '3. Down Rounds and Anti-Dilution',
                body: 'If you raise at a lower valuation than your previous round, investors with anti-dilution provisions get more shares to compensate for the price drop. In a full ratchet scenario, this can be catastrophically dilutive to founders. Broad-based weighted average anti-dilution is standard and far less punishing. Check every term sheet for the anti-dilution clause type before signing.',
              },
            ].map((item) => (
              <div key={item.title} className="border border-[#D4C9B8] bg-[#FDFAF5] p-6">
                <p className="font-[family-name:var(--font-heading)] text-sm font-[600] tracking-[0.05em] uppercase text-[#1C1917] mb-2">{item.title}</p>
                <p className="text-sm text-[#6B5B4E] font-[300] leading-relaxed">{item.body}</p>
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
            Model Your Dilution Before You Negotiate
          </h3>
          <p className="text-white/60 text-sm font-[300] tracking-wide leading-relaxed mb-6">
            Upload your cap table CSV to CapBrief and model exactly what different valuation, option pool, and investment scenarios do to your ownership. Know your post-round position before you sit down with investors.
          </p>
          <Link
            href="/auth/signup"
            className="inline-block font-[family-name:var(--font-heading)] text-sm tracking-[0.1em] uppercase bg-[#C9A84C] text-[#1C1917] px-8 py-4 hover:bg-[#B8930A] transition-colors"
          >
            Model My Dilution Free →
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
            <Link href="/guides/safe-note-vs-convertible-note" className="block text-sm text-white/60 hover:text-white transition-colors font-[300] tracking-wide">
              → SAFE Note vs Convertible Note: Which to Use
            </Link>
            <Link href="/guides/pre-money-vs-post-money-valuation" className="block text-sm text-white/60 hover:text-white transition-colors font-[300] tracking-wide">
              → Pre-Money vs Post-Money Valuation
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
