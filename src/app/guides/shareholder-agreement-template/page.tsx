import type { Metadata } from 'next'
import Link from 'next/link'

export const dynamic = 'force-static'

export const metadata: Metadata = {
  title: 'Shareholder Agreement Template: What to Include | CapBrief',
  description: 'A shareholder agreement protects founders, investors, and the company when things go wrong. Learn the 12 essential clauses every UK startup shareholder agreement needs.',
  openGraph: {
    title: 'Shareholder Agreement Template: What to Include | CapBrief',
    description: 'A shareholder agreement protects founders, investors, and the company when things go wrong. Learn the 12 essential clauses every UK startup shareholder agreement needs.',
    type: 'article',
  },
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Shareholder Agreement Template: What to Include',
  description: 'A shareholder agreement protects founders, investors, and the company when things go wrong. Learn the 12 essential clauses every UK startup shareholder agreement needs.',
  author: { '@type': 'Organization', name: 'CapBrief' },
  publisher: { '@type': 'Organization', name: 'CapBrief', url: 'https://roundbrief.com' },
}

const faqs = [
  {
    q: 'Is a shareholder agreement legally required?',
    a: 'No. A UK company can operate without one — the Companies Act 2006 and the company\'s articles of association provide the baseline legal framework. But the default rules are rarely adequate for startups. Without a shareholder agreement, there are no vesting provisions, no leaver clauses, no non-compete protections, no pre-emption rights, and no deadlock resolution mechanism. The articles of association can cover some of this, but a shareholder agreement provides a private, more flexible contract between the specific shareholders.',
  },
  {
    q: 'What is the difference between a shareholder agreement and articles of association?',
    a: 'Articles of association are a public document filed at Companies House. They govern the company\'s internal rules (share classes, director powers, meeting procedures). A shareholder agreement is a private contract between specific shareholders — it is not filed publicly, is not visible to competitors, and can include commercially sensitive terms like vesting schedules, salary caps, and exit preferences. Both documents should be consistent — where they conflict, the shareholder agreement typically prevails between the parties, but the articles govern the company\'s constitutional position.',
  },
  {
    q: 'When should we put a shareholder agreement in place?',
    a: 'At incorporation, or at the very latest when the first external investor comes in. Every week you operate without one is a week where a co-founder could leave with unvested equity, a director could set up a competing business, or a dispute could arise with no resolution mechanism. The cost of a standard shareholder agreement is £2,000-£5,000 with a startup lawyer. The cost of resolving a founder dispute without one is £50,000+ in litigation fees.',
  },
  {
    q: 'Can we write our own shareholder agreement without a lawyer?',
    a: 'You can, but the risks are significant. Template agreements from SeedLegals, Rocket Lawyer, or the British Business Bank cover the basics, but they cannot account for your specific situation — unusual vesting arrangements, IP assignments, existing investor relationships, or founder circumstances that need bespoke drafting. At minimum, have a lawyer review any template you use. The most expensive shareholder agreement is one that does not hold up when tested.',
  },
  {
    q: 'What happens in a deadlock situation?',
    a: 'A deadlock occurs when shareholders with equal voting power disagree on a fundamental decision and cannot resolve it. Without a deadlock clause, the company is stuck — no decision can be made, and the only resolution is court action. A good shareholder agreement includes a deadlock resolution mechanism: escalation to mediation, then arbitration, then a buy/sell mechanism (sometimes called a "shotgun clause" or "Russian roulette clause") where one party offers to buy the other out at a stated price, and the other party must either accept or buy the offeror out at the same price.',
  },
  {
    q: 'Do all shareholders need to sign the shareholder agreement?',
    a: 'Ideally, yes. If a shareholder is not a party to the agreement, they are not bound by its terms — including pre-emption rights, drag-along rights, and non-compete clauses. When new investors or employee shareholders join, they should sign a deed of adherence that makes them a party to the existing agreement. Failing to do this is one of the most common administrative oversights in growing startups.',
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

export default function ShareholderAgreementTemplatePage() {
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
            Shareholder Agreement Template
          </p>
          <h1 className="font-[family-name:var(--font-heading)] text-4xl font-[700] tracking-[0.05em] uppercase text-white mb-6 leading-tight">
            Shareholder Agreement Template: What to Include
          </h1>
          <p className="text-lg text-white/60 leading-relaxed font-[300] tracking-wide">
            A shareholder agreement is the document that governs what happens when things go wrong — and things always go wrong eventually. Most startups either skip it or use a template that misses the clauses that actually matter. This guide covers the 12 essential clauses every UK startup should include.
          </p>
        </div>
      </section>

      <article className="max-w-[768px] mx-auto px-6 py-16">

        <section className="mb-14">
          <h2 className="font-[family-name:var(--font-heading)] text-2xl font-[500] tracking-[0.05em] uppercase text-[#1C1917] mb-6">
            Why You Need a Shareholder Agreement
          </h2>
          <p className="text-[#6B5B4E] text-base font-[300] tracking-wide leading-relaxed mb-6">
            The Companies Act 2006 and your articles of association provide a basic legal framework for your company. But neither document covers the things that actually cause problems in startups: what happens when a co-founder leaves, how equity vests, who can sell shares and to whom, what restrictions apply to founders and directors, how disputes are resolved, and what happens if the company receives an acquisition offer.
          </p>
          <p className="text-[#6B5B4E] text-base font-[300] tracking-wide leading-relaxed mb-6">
            A shareholder agreement fills these gaps. It is a private contract between the shareholders (and usually the company) that sets the rules for how they work together, how equity is managed, and how exit scenarios play out. Unlike articles of association, it is not filed at Companies House — which means you can include commercially sensitive terms without public disclosure.
          </p>
          <p className="text-[#6B5B4E] text-base font-[300] tracking-wide leading-relaxed">
            Every investor — from a £10K angel to a £10M VC fund — will want to see a shareholder agreement before investing. Many will require modifications to it as part of their term sheet. If you do not have one, the negotiation starts from scratch at a time when you have less leverage.
          </p>
        </section>

        <section className="mb-14">
          <h2 className="font-[family-name:var(--font-heading)] text-2xl font-[500] tracking-[0.05em] uppercase text-[#1C1917] mb-6">
            The 12 Essential Clauses
          </h2>
          <p className="text-[#6B5B4E] text-base font-[300] tracking-wide leading-relaxed mb-8">
            These are the clauses that matter for a UK seed-stage startup. Some will need modification as you raise later rounds, but this is the foundation.
          </p>
          <div className="space-y-4">
            {[
              { clause: '1. Share Capital and Ownership', detail: 'Records the current share capital structure: number and class of shares, who holds what, and any outstanding options, warrants, or convertible instruments. This clause should mirror your cap table exactly and be updated after every equity event.' },
              { clause: '2. Vesting and Reverse Vesting', detail: 'Defines how founder equity vests over time. Standard: 4-year vesting with a 1-year cliff. Specifies the mechanism (reverse vesting via buyback at nominal value is typical in the UK), the vesting schedule (monthly or quarterly after the cliff), and any acceleration provisions on change of control.' },
              { clause: '3. Good Leaver / Bad Leaver Provisions', detail: 'Defines what happens to a departing shareholder\'s vested and unvested shares. Good leavers (death, disability, constructive dismissal) typically retain vested shares at fair market value. Bad leavers (voluntary resignation, gross misconduct) have all shares bought back at nominal value. Define the categories precisely — ambiguity leads to expensive disputes.' },
              { clause: '4. Pre-Emption Rights', detail: 'Existing shareholders have the right to buy shares that any other shareholder wants to sell, before those shares can be offered to a third party. This prevents unwanted third parties from becoming shareholders and maintains existing ownership ratios. Typically includes a right of first refusal period (14-30 days) and a mechanism for valuing the shares.' },
              { clause: '5. Drag-Along Rights', detail: 'If shareholders holding a specified majority (typically 75%+) agree to sell the company, they can force all other shareholders to sell on the same terms. Without this, a minority shareholder can block an exit that the majority wants. Essential for investors — no VC will invest without a drag-along clause.' },
              { clause: '6. Tag-Along Rights', detail: 'If a majority shareholder sells their shares, minority shareholders have the right to sell on the same terms and at the same price. This protects minority shareholders (often employees or early angels) from being left behind in a share sale where only the majority benefits.' },
              { clause: '7. Non-Compete and Non-Solicitation', detail: 'Restricts founders and key shareholders from setting up or working for competing businesses during their involvement and for a period after leaving (typically 6-12 months in the UK — courts may not enforce longer periods). Also prevents solicitation of employees and customers. Must be reasonable in scope, geography, and duration to be enforceable under English law.' },
              { clause: '8. IP Assignment', detail: 'Confirms that all intellectual property created by founders and employees in connection with the business belongs to the company, not the individual. This should be comprehensive: code, designs, trade marks, inventions, business processes, and customer data. Without this, a departing founder could claim ownership of the technology they built.' },
              { clause: '9. Board Composition and Reserved Matters', detail: 'Specifies how the board is formed (founder directors, investor directors, independent directors), voting thresholds for board decisions, and reserved matters that require shareholder consent. Reserved matters typically include: issuing new shares, taking on debt over a threshold, making acquisitions, changing the business\'s nature, and setting director remuneration.' },
              { clause: '10. Information Rights', detail: 'Investors receive regular financial and operational updates. Typically: monthly management accounts, annual audited accounts, board meeting minutes, and advance notice of material events. Founders may also get these rights if they are not on the board. Specify the format, frequency, and what constitutes a material event.' },
              { clause: '11. Deadlock Resolution', detail: 'Defines how to resolve disputes when shareholders with blocking power disagree. Escalation: negotiation → mediation → expert determination or arbitration → buy/sell mechanism. Without this clause, deadlock means either stalemate or court — both of which can kill the company.' },
              { clause: '12. Confidentiality', detail: 'All shareholders are bound by confidentiality obligations regarding the company\'s business, financial information, strategy, and customer data. This survives termination of the agreement. Includes carve-outs for legally required disclosures and information that becomes public through no fault of the shareholder.' },
            ].map((item) => (
              <div key={item.clause} className="border border-[#D4C9B8] bg-[#FDFAF5] p-5">
                <p className="font-[family-name:var(--font-heading)] text-sm font-[600] tracking-[0.05em] uppercase text-[#1C1917] mb-2">{item.clause}</p>
                <p className="text-sm text-[#6B5B4E] font-[300] leading-relaxed">{item.detail}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-14">
          <h2 className="font-[family-name:var(--font-heading)] text-2xl font-[500] tracking-[0.05em] uppercase text-[#1C1917] mb-6">
            Clauses Investors Will Want to Add
          </h2>
          <p className="text-[#6B5B4E] text-base font-[300] tracking-wide leading-relaxed mb-6">
            When you raise your first institutional round, expect the investor's lawyer to propose additional clauses. These are standard and should not be resisted without good reason.
          </p>
          <p className="text-[#6B5B4E] text-base font-[300] tracking-wide leading-relaxed mb-6">
            <strong className="text-[#1C1917]">Anti-dilution protection:</strong> If the company raises a future round at a lower valuation (a "down round"), the investor's shares are adjusted to protect their ownership percentage. Weighted average anti-dilution is standard and fair; full ratchet anti-dilution is aggressive and should be negotiated down.
          </p>
          <p className="text-[#6B5B4E] text-base font-[300] tracking-wide leading-relaxed mb-6">
            <strong className="text-[#1C1917]">Liquidation preference:</strong> In an exit, the investor gets their money back first (1x non-participating) or their money back plus a share of the remaining proceeds (participating preferred). Non-participating 1x is standard at seed stage; anything more aggressive should be pushed back on.
          </p>
          <p className="text-[#6B5B4E] text-base font-[300] tracking-wide leading-relaxed">
            <strong className="text-[#1C1917]">Investor consent rights:</strong> A list of actions that require investor approval — typically issuing shares above a threshold, taking on debt, making acquisitions over a certain value, changing the company's registered office, or hiring senior executives. These are reasonable but should have sensible thresholds so they do not create a bottleneck on day-to-day operations.
          </p>
        </section>

        <section className="mb-14">
          <h2 className="font-[family-name:var(--font-heading)] text-2xl font-[500] tracking-[0.05em] uppercase text-[#1C1917] mb-6">
            How to Keep the Agreement Current
          </h2>
          <p className="text-[#6B5B4E] text-base font-[300] tracking-wide leading-relaxed mb-6">
            A shareholder agreement is not a one-time document. It must be updated after every significant equity event: new investment rounds, option grants, founder departures, share transfers, and changes to the board.
          </p>
          <p className="text-[#6B5B4E] text-base font-[300] tracking-wide leading-relaxed mb-6">
            New shareholders join via a deed of adherence — a short document that makes them a party to the existing agreement. This is typically handled by your company lawyer and costs £500-£1,000 per adherence.
          </p>
          <p className="text-[#6B5B4E] text-base font-[300] tracking-wide leading-relaxed">
            At each funding round, the shareholder agreement is often replaced entirely with a new version that reflects the updated share capital, new investor rights, and any renegotiated terms. The old agreement terminates when the new one is signed. Keep all versions in your data room for due diligence purposes.
          </p>
        </section>

        <div className="bg-[#1C1917] border border-[#C9A84C] p-8 mb-14 relative overflow-hidden">
          <div className="absolute top-3 left-3 w-5 h-5 border-t border-l border-[#C9A84C] opacity-40" />
          <div className="absolute top-3 right-3 w-5 h-5 border-t border-r border-[#C9A84C] opacity-40" />
          <div className="absolute bottom-3 left-3 w-5 h-5 border-b border-l border-[#C9A84C] opacity-40" />
          <div className="absolute bottom-3 right-3 w-5 h-5 border-b border-r border-[#C9A84C] opacity-40" />
          <p className="font-[family-name:var(--font-mono)] text-xs tracking-[0.2em] uppercase text-[#C9A84C] mb-3">CapBrief</p>
          <h3 className="font-[family-name:var(--font-heading)] text-xl font-[500] tracking-[0.05em] uppercase text-white mb-3">
            Generate an Investor-Ready Cap Table Report
          </h3>
          <p className="text-white/60 text-sm font-[300] tracking-wide leading-relaxed mb-6">
            Your shareholder agreement references your cap table. CapBrief ensures both documents tell the same story — upload your spreadsheet and get a verified equity report in minutes.
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
            <Link href="/guides/drag-along-tag-along-rights" className="block text-sm text-white/60 hover:text-white transition-colors font-[300] tracking-wide">
              → Drag Along & Tag Along Rights Explained
            </Link>
            <Link href="/guides/investor-rights-explained" className="block text-sm text-white/60 hover:text-white transition-colors font-[300] tracking-wide">
              → Investor Rights Explained: What VCs Get in Your Cap Table
            </Link>
            <Link href="/guides/startup-equity-split-calculator" className="block text-sm text-white/60 hover:text-white transition-colors font-[300] tracking-wide">
              → Startup Equity Split: How to Divide Founder Equity
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
