import type { Metadata } from 'next'
import Link from 'next/link'

export const dynamic = 'force-static'

export const metadata: Metadata = {
  title: 'Investor Rights Explained: What VCs Get in Your Cap Table | CapBrief',
  description: 'Understand the rights investors negotiate: liquidation preferences, anti-dilution, board seats, information rights, pro-rata rights, and how they affect your cap table and exit economics.',
  openGraph: {
    title: 'Investor Rights Explained: What VCs Get in Your Cap Table | CapBrief',
    description: 'Understand the rights investors negotiate: liquidation preferences, anti-dilution, board seats, information rights, pro-rata rights, and how they affect your cap table and exit economics.',
    type: 'article',
  },
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Investor Rights Explained: What VCs Get in Your Cap Table',
  description: 'Understand the rights investors negotiate: liquidation preferences, anti-dilution, board seats, information rights, pro-rata rights, and how they affect your cap table and exit economics.',
  author: { '@type': 'Organization', name: 'CapBrief' },
  publisher: { '@type': 'Organization', name: 'CapBrief', url: 'https://roundbrief.com' },
}

const faqs = [
  {
    q: 'What is a liquidation preference?',
    a: 'A liquidation preference determines the order in which shareholders get paid when the company is sold, wound up, or distributes proceeds. A "1x non-participating" preference means the investor gets their original investment back first before any proceeds are shared with ordinary shareholders. If the exit value exceeds their preference amount, they can choose to convert to ordinary shares and take their pro-rata share instead. "Participating preferred" means the investor gets their money back first AND shares in the remaining proceeds — this is much more aggressive and should be resisted at seed stage.',
  },
  {
    q: 'What is anti-dilution protection?',
    a: 'Anti-dilution protection adjusts an investor\'s share price downward if the company raises a future round at a lower valuation (a "down round"). "Weighted average" anti-dilution is standard and fair — it adjusts the price based on the size of the down round relative to the existing shares. "Full ratchet" anti-dilution adjusts the investor\'s price to match the new round\'s price exactly, regardless of round size — this can be devastating for founders and should be strongly resisted.',
  },
  {
    q: 'What are pro-rata rights?',
    a: 'Pro-rata rights give an investor the right to participate in future funding rounds to maintain their ownership percentage. If an investor holds 10% after the seed round, pro-rata rights let them invest enough in the Series A to still hold 10% afterward. This is standard and generally fair — it rewards investors who continue to support the company. The downside: if multiple investors exercise pro-rata rights, it can squeeze the allocation available for new investors in later rounds.',
  },
  {
    q: 'What are information rights?',
    a: 'Information rights give investors access to the company\'s financial and operational data. Typically: monthly management accounts (P&L, balance sheet, cash position), annual audited accounts, board meeting minutes, and advance notice of material events (fundraising, major contracts, litigation, key hires/departures). The scope should be reasonable — investors need enough information to monitor their investment, but excessive reporting obligations burden the team.',
  },
  {
    q: 'Can investor rights be removed or changed?',
    a: 'Generally, no — not without the investor\'s consent. Investor rights are contractual (in the shareholder agreement) or constitutional (in the articles of association). Changing them requires the investor to agree to the change, usually via a variation to the shareholder agreement or a special resolution to amend the articles. In practice, investor rights are renegotiated at each funding round, when the new lead investor may demand different terms that override or supplement the existing ones.',
  },
  {
    q: 'What is a board seat vs a board observer seat?',
    a: 'A board seat gives the investor (or their nominee) full voting rights at board meetings, the ability to propose resolutions, and the same fiduciary duties as other directors. A board observer seat allows attendance at board meetings and access to board materials, but no vote. Seed investors typically get an observer seat; Series A investors typically get a full board seat. The distinction matters because a board director has legal responsibilities under the Companies Act 2006, while an observer does not.',
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

export default function InvestorRightsExplainedPage() {
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
            Investor Rights Explained
          </p>
          <h1 className="font-[family-name:var(--font-heading)] text-4xl font-[700] tracking-[0.05em] uppercase text-white mb-6 leading-tight">
            Investor Rights Explained: What VCs Get in Your Cap Table
          </h1>
          <p className="text-lg text-white/60 leading-relaxed font-[300] tracking-wide">
            When a VC invests in your company, they do not just buy shares. They buy a set of rights that affect your decision-making, your exit options, and how much you actually take home. Understanding these rights before you sign a term sheet is not optional — it is the difference between a good deal and a trap.
          </p>
        </div>
      </section>

      <article className="max-w-[768px] mx-auto px-6 py-16">

        <section className="mb-14">
          <h2 className="font-[family-name:var(--font-heading)] text-2xl font-[500] tracking-[0.05em] uppercase text-[#1C1917] mb-6">
            Why Investor Rights Matter More Than Valuation
          </h2>
          <p className="text-[#6B5B4E] text-base font-[300] tracking-wide leading-relaxed mb-6">
            Most founders obsess over valuation and ignore the rights attached to the investment. This is backwards. A £5M valuation with aggressive investor rights (2x participating preferred, full ratchet anti-dilution, extensive veto rights) can leave founders with less at exit than a £3M valuation with clean terms (1x non-participating, weighted average anti-dilution, sensible consent thresholds).
          </p>
          <p className="text-[#6B5B4E] text-base font-[300] tracking-wide leading-relaxed mb-6">
            The term sheet is where investor rights are negotiated. Once signed, they are codified in the shareholder agreement and the articles of association. Changing them later requires investor consent — which means you will only succeed in removing aggressive terms if you have exceptional leverage (a hot Series A round, for example).
          </p>
          <p className="text-[#6B5B4E] text-base font-[300] tracking-wide leading-relaxed">
            This guide covers every right a UK startup investor might negotiate, explains what is standard vs aggressive, and tells you which ones to push back on.
          </p>
        </section>

        <section className="mb-14">
          <h2 className="font-[family-name:var(--font-heading)] text-2xl font-[500] tracking-[0.05em] uppercase text-[#1C1917] mb-6">
            Economic Rights
          </h2>
          <p className="text-[#6B5B4E] text-base font-[300] tracking-wide leading-relaxed mb-8">
            These rights determine how much the investor gets paid relative to founders and employees at exit.
          </p>
          <div className="space-y-4">
            {[
              {
                right: 'Liquidation Preference',
                standard: '1x non-participating is standard at seed and Series A.',
                aggressive: '2x+ multiples or participating preferred significantly reduce founder payout at moderate exits. A 2x participating preferred on a £1M investment means the investor gets £2M back PLUS their pro-rata share of the remaining proceeds. On a £5M exit, this could leave founders with a fraction of what they expect.',
              },
              {
                right: 'Anti-Dilution Protection',
                standard: 'Broad-based weighted average is standard and fair.',
                aggressive: 'Full ratchet reprices the investor\'s shares to match any down round, regardless of size. A tiny bridge round at a lower price could dramatically increase the investor\'s share count at founders\' expense.',
              },
              {
                right: 'Dividends',
                standard: 'No cumulative dividends at seed stage. Any dividends declared are paid pro-rata across all share classes.',
                aggressive: 'Cumulative preferred dividends (e.g., 8% annually) that accrue and must be paid before any distribution to ordinary shareholders. Rare in UK seed deals but common in US later-stage rounds. Resist this — it turns equity into quasi-debt.',
              },
              {
                right: 'Pay-to-Play',
                standard: 'Not common at seed stage but increasingly seen at Series A+.',
                aggressive: 'Investors who do not participate in future rounds lose their preference rights and convert to ordinary shares. This is actually founder-friendly — it penalises passive investors and rewards those who continue to support the company.',
              },
            ].map((item) => (
              <div key={item.right} className="border border-[#D4C9B8] bg-[#FDFAF5] p-5">
                <p className="font-[family-name:var(--font-heading)] text-sm font-[600] tracking-[0.05em] uppercase text-[#1C1917] mb-2">{item.right}</p>
                <p className="text-sm text-[#6B5B4E] font-[300] leading-relaxed mb-2"><strong className="text-[#1C1917]">Standard:</strong> {item.standard}</p>
                <p className="text-sm text-[#6B5B4E] font-[300] leading-relaxed"><strong className="text-[#1C1917]">Watch for:</strong> {item.aggressive}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-14">
          <h2 className="font-[family-name:var(--font-heading)] text-2xl font-[500] tracking-[0.05em] uppercase text-[#1C1917] mb-6">
            Governance Rights
          </h2>
          <p className="text-[#6B5B4E] text-base font-[300] tracking-wide leading-relaxed mb-8">
            These rights give investors control over key company decisions — sometimes with more influence than their ownership percentage would suggest.
          </p>
          <div className="space-y-4">
            {[
              {
                right: 'Board Seat or Observer',
                detail: 'Seed investors typically get a board observer seat. Series A leads get a full board seat. Board composition should maintain founder control: a common structure is 2 founder directors, 1 investor director, and 1 independent director (mutually agreed). If the investor wants 2 board seats, they are seeking effective veto power over board decisions.',
              },
              {
                right: 'Consent Rights (Veto Powers)',
                detail: 'A list of actions that require investor consent before the company can proceed. Standard items: issuing new shares, taking on debt above a threshold (e.g., £50K), making acquisitions, changing the company\'s business, hiring/firing the CEO. Be careful about the thresholds — consent required for expenditure over £5K will paralyse your operations.',
              },
              {
                right: 'Protective Provisions',
                detail: 'Specific shareholder votes that require a supermajority or investor class consent. Typically: changing share rights, creating a new share class with superior rights, winding up the company, or selling substantially all assets. These are reasonable protections against founders acting against investor interests.',
              },
              {
                right: 'Founder Removal',
                detail: 'Some term sheets include provisions for removing a founder as CEO or director. Standard: requires board majority and a reasonable cause threshold. Aggressive: investor can remove the founder unilaterally or on vaguely defined "underperformance." Negotiate for clear, measurable criteria and a right to cure before removal.',
              },
            ].map((item) => (
              <div key={item.right} className="border border-[#D4C9B8] bg-[#FDFAF5] p-5">
                <p className="font-[family-name:var(--font-heading)] text-sm font-[600] tracking-[0.05em] uppercase text-[#1C1917] mb-2">{item.right}</p>
                <p className="text-sm text-[#6B5B4E] font-[300] leading-relaxed">{item.detail}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-14">
          <h2 className="font-[family-name:var(--font-heading)] text-2xl font-[500] tracking-[0.05em] uppercase text-[#1C1917] mb-6">
            Exit-Related Rights
          </h2>
          <div className="space-y-4">
            {[
              {
                right: 'Drag-Along',
                detail: 'If shareholders holding a specified majority (typically 75%) agree to sell the company, all other shareholders must sell on the same terms. This prevents a minority shareholder from blocking an exit. Standard and essential — no investor will invest without drag-along. The threshold percentage is negotiable: founders want it higher (harder for investor to trigger), investors want it lower (easier to force a sale).',
              },
              {
                right: 'Tag-Along',
                detail: 'If a majority shareholder sells their shares to a third party, minority shareholders can sell on the same terms. Protects small shareholders from being left out of a share sale. Standard and fair. Ensure it applies to all share classes, not just one.',
              },
              {
                right: 'Redemption Rights',
                detail: 'The investor can require the company to buy back their shares at a specified price after a certain period (typically 5-7 years). This gives the investor a guaranteed exit if the company has not been sold or gone public. Rare in UK seed deals but common in US deals. Resist if possible — it creates a ticking clock that can force a fire sale or liquidation.',
              },
              {
                right: 'Registration Rights',
                detail: 'Relevant primarily for companies planning an IPO. Gives the investor the right to have their shares included in the IPO registration (demand registration) or to join a registration initiated by the company (piggyback registration). Not relevant at seed stage but will appear in later rounds.',
              },
            ].map((item) => (
              <div key={item.right} className="border border-[#D4C9B8] bg-[#FDFAF5] p-5">
                <p className="font-[family-name:var(--font-heading)] text-sm font-[600] tracking-[0.05em] uppercase text-[#1C1917] mb-2">{item.right}</p>
                <p className="text-sm text-[#6B5B4E] font-[300] leading-relaxed">{item.detail}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-14">
          <h2 className="font-[family-name:var(--font-heading)] text-2xl font-[500] tracking-[0.05em] uppercase text-[#1C1917] mb-6">
            What to Push Back On
          </h2>
          <p className="text-[#6B5B4E] text-base font-[300] tracking-wide leading-relaxed mb-6">
            Not all investor rights are created equal. Here are the ones where pushback is both reasonable and expected.
          </p>
          <p className="text-[#6B5B4E] text-base font-[300] tracking-wide leading-relaxed mb-6">
            <strong className="text-[#1C1917]">Always push back on:</strong> participating preferred liquidation preferences at seed stage, full ratchet anti-dilution, cumulative dividends, unilateral founder removal rights, consent thresholds below £25K, and redemption rights within 5 years.
          </p>
          <p className="text-[#6B5B4E] text-base font-[300] tracking-wide leading-relaxed mb-6">
            <strong className="text-[#1C1917]">Accept as standard:</strong> 1x non-participating liquidation preference, weighted average anti-dilution, board observer seat (seed) or one board seat (Series A), reasonable consent thresholds (£50K+ for debt, £100K+ for capex), pro-rata rights, standard information rights, drag-along at 75%+.
          </p>
          <p className="text-[#6B5B4E] text-base font-[300] tracking-wide leading-relaxed">
            <strong className="text-[#1C1917]">Negotiate the details on:</strong> the specific consent list (remove items that are operational, not strategic), the drag-along threshold percentage, founder vesting acceleration on change of control, and non-compete duration (cap at 12 months).
          </p>
        </section>

        <div className="bg-[#1C1917] border border-[#C9A84C] p-8 mb-14 relative overflow-hidden">
          <div className="absolute top-3 left-3 w-5 h-5 border-t border-l border-[#C9A84C] opacity-40" />
          <div className="absolute top-3 right-3 w-5 h-5 border-t border-r border-[#C9A84C] opacity-40" />
          <div className="absolute bottom-3 left-3 w-5 h-5 border-b border-l border-[#C9A84C] opacity-40" />
          <div className="absolute bottom-3 right-3 w-5 h-5 border-b border-r border-[#C9A84C] opacity-40" />
          <p className="font-[family-name:var(--font-mono)] text-xs tracking-[0.2em] uppercase text-[#C9A84C] mb-3">CapBrief</p>
          <h3 className="font-[family-name:var(--font-heading)] text-xl font-[500] tracking-[0.05em] uppercase text-white mb-3">
            See How Investor Rights Affect Your Exit Payout
          </h3>
          <p className="text-white/60 text-sm font-[300] tracking-wide leading-relaxed mb-6">
            Upload your cap table and CapBrief models exit scenarios with liquidation preferences, anti-dilution adjustments, and participation rights — so you can see what founders actually receive at different exit values.
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
            <Link href="/guides/shareholder-agreement-template" className="block text-sm text-white/60 hover:text-white transition-colors font-[300] tracking-wide">
              → Shareholder Agreement Template: What to Include
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
