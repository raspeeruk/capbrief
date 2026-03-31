import type { Metadata } from 'next'
import Link from 'next/link'

export const dynamic = 'force-static'

export const metadata: Metadata = {
  title: 'Drag Along & Tag Along Rights Explained | CapBrief',
  description: 'Drag along rights let majority shareholders force a sale. Tag along rights protect minorities from being left behind. Learn how both work, typical thresholds, and SEIS/EIS implications.',
  openGraph: {
    title: 'Drag Along & Tag Along Rights Explained | CapBrief',
    description: 'Drag along rights let majority shareholders force a sale. Tag along rights protect minorities from being left behind. Learn how both work, typical thresholds, and SEIS/EIS implications.',
    type: 'article',
  },
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Drag Along & Tag Along Rights Explained',
  description: 'Drag along rights let majority shareholders force a sale. Tag along rights protect minorities from being left behind. Learn how both work, typical thresholds, and SEIS/EIS implications.',
  author: { '@type': 'Organization', name: 'CapBrief' },
  publisher: { '@type': 'Organization', name: 'CapBrief', url: 'https://roundbrief.com' },
}

const faqs = [
  {
    q: 'What is a drag along right?',
    a: 'A drag along right allows shareholders holding a specified majority (typically 75% or more) to force all remaining shareholders to sell their shares to a buyer on the same terms. The purpose is to prevent a small minority from blocking an acquisition that the overwhelming majority wants. Without drag along rights, a shareholder with even 1% could refuse to sell and derail a trade sale — most acquirers want 100% of the company and will not proceed with holdouts.',
  },
  {
    q: 'What is a tag along right?',
    a: 'A tag along right (also called co-sale right) gives minority shareholders the right to join a sale initiated by majority shareholders, selling their shares on the same terms and at the same price per share. If a founder sells a large block of shares to a third party, tag along rights ensure that smaller shareholders (angels, employees with exercised options) can participate rather than being left holding illiquid shares in a company where control has changed.',
  },
  {
    q: 'Can drag along rights be triggered before the 3-year SEIS/EIS holding period?',
    a: 'Yes, and this is a real concern. If a drag along is exercised within 3 years of SEIS or EIS shares being issued, the forced sale constitutes a disposal — which triggers HMRC clawback of the income tax relief. Investors who invested under SEIS/EIS will lose their tax relief, which typically makes them hostile to any exit within the holding period. Some shareholder agreements include a carve-out that prevents drag along from being exercised within the SEIS/EIS holding period without the affected investors\' consent.',
  },
  {
    q: 'What is a typical drag along threshold?',
    a: 'The most common threshold in UK startup shareholder agreements is 75% of total voting shares. Some agreements use a lower threshold (66% or simple majority) and some require a higher one (90%). The threshold is a critical negotiation point: founders want it high (so they cannot be dragged into a sale they oppose), while investors want it low (so they can force an exit even if a founder disagrees). A 75% threshold is generally considered fair and balanced.',
  },
  {
    q: 'Do tag along rights apply to all share transfers?',
    a: 'It depends on how the shareholder agreement is drafted. Most tag along clauses apply to any sale by a shareholder (or group of shareholders acting in concert) that exceeds a certain percentage — often any sale of 50% or more of the company, or sometimes any sale at all. They typically do not apply to permitted transfers: transfers to family trusts, between spouses, or to wholly-owned investment vehicles controlled by the shareholder.',
  },
  {
    q: 'What happens if a dragged shareholder refuses to sign the transfer documents?',
    a: 'Well-drafted drag along clauses include a power of attorney provision: the minority shareholders irrevocably appoint the company or the majority shareholders as their attorney to execute the share transfer documents on their behalf. This means the sale proceeds even if the minority shareholder refuses to cooperate. Without this power of attorney, enforcing drag along requires a court order — which is slow, expensive, and may kill the deal.',
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

export default function DragAlongTagAlongPage() {
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
            Drag Along & Tag Along Rights
          </p>
          <h1 className="font-[family-name:var(--font-heading)] text-4xl font-[700] tracking-[0.05em] uppercase text-white mb-6 leading-tight">
            Drag Along & Tag Along Rights Explained
          </h1>
          <p className="text-lg text-white/60 leading-relaxed font-[300] tracking-wide">
            Drag along and tag along rights determine what happens when someone wants to sell — and they appear in virtually every shareholder agreement. Understand them before you sign, because they define whether you can be forced to sell your company and whether you can be left behind when others do.
          </p>
        </div>
      </section>

      <article className="max-w-[768px] mx-auto px-6 py-16">

        <section className="mb-14">
          <h2 className="font-[family-name:var(--font-heading)] text-2xl font-[500] tracking-[0.05em] uppercase text-[#1C1917] mb-6">
            Drag Along Rights: Forcing a Sale
          </h2>
          <p className="text-[#6B5B4E] text-base font-[300] tracking-wide leading-relaxed mb-6">
            A drag along right allows a qualified majority of shareholders to compel all remaining shareholders to sell their shares to a buyer on the same terms. The "drag" is literal — minority shareholders are dragged into the transaction whether they want to participate or not.
          </p>
          <p className="text-[#6B5B4E] text-base font-[300] tracking-wide leading-relaxed mb-6">
            This right exists because acquirers almost always want 100% of the company. If a buyer offers £10M for the entire business, they do not want to end up with 95% and a disgruntled 5% minority shareholder who can obstruct operations, demand board seats, or bring minority oppression claims. Without drag along, any shareholder — however small — can hold the deal hostage.
          </p>
          <p className="text-[#6B5B4E] text-base font-[300] tracking-wide leading-relaxed">
            From a founder's perspective, drag along is a double-edged sword. It ensures a clean exit is possible (which is necessary for investors to invest in the first place), but it also means you can be forced to sell your company against your wishes if enough other shareholders agree.
          </p>
        </section>

        <section className="mb-14">
          <h2 className="font-[family-name:var(--font-heading)] text-2xl font-[500] tracking-[0.05em] uppercase text-[#1C1917] mb-6">
            Key Terms in a Drag Along Clause
          </h2>
          <div className="space-y-4">
            {[
              { term: 'Trigger Threshold', detail: 'The percentage of shareholders required to activate the drag along. Standard: 75% of total voting shares. Lower thresholds (51-66%) are aggressive and give investors disproportionate control. Higher thresholds (90%) are protective of founders but may deter investors who fear being unable to exit.' },
              { term: 'Qualifying Sale Definition', detail: 'What constitutes a sale that triggers drag along: a trade sale (100% share purchase), an asset sale, or a merger. Some clauses include IPO — which is controversial because an IPO does not typically require 100% shareholder participation. Define this clearly.' },
              { term: 'Same Terms Requirement', detail: 'All dragged shareholders must receive the same price per share and the same terms as the majority. This prevents a scenario where majority shareholders negotiate side deals (management carve-outs, retention bonuses) that are not available to minority shareholders.' },
              { term: 'Floor Price or Minimum Return', detail: 'Some drag along clauses include a minimum price or minimum return threshold — the drag cannot be exercised unless the sale price exceeds a certain value (often linked to the investor\'s liquidation preference). This protects against being dragged into a fire sale.' },
              { term: 'Power of Attorney', detail: 'An irrevocable appointment of the company (or majority shareholders) as attorney to sign transfer documents on behalf of dragged shareholders. Without this, enforcement requires a court order. With it, the sale completes automatically.' },
              { term: 'Notice Period', detail: 'The amount of advance notice required before drag along is exercised. Typically 15-30 days. This gives minority shareholders time to seek legal advice, evaluate the terms, and exercise any competing rights (such as pre-emption).' },
            ].map((item) => (
              <div key={item.term} className="border border-[#D4C9B8] bg-[#FDFAF5] p-5">
                <p className="font-[family-name:var(--font-heading)] text-sm font-[600] tracking-[0.05em] uppercase text-[#1C1917] mb-2">{item.term}</p>
                <p className="text-sm text-[#6B5B4E] font-[300] leading-relaxed">{item.detail}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-14">
          <h2 className="font-[family-name:var(--font-heading)] text-2xl font-[500] tracking-[0.05em] uppercase text-[#1C1917] mb-6">
            Tag Along Rights: Joining a Sale
          </h2>
          <p className="text-[#6B5B4E] text-base font-[300] tracking-wide leading-relaxed mb-6">
            Tag along rights (also called co-sale rights) are the mirror image of drag along. They protect minority shareholders by giving them the right to join any sale of shares by a majority shareholder, on the same terms and at the same price per share.
          </p>
          <p className="text-[#6B5B4E] text-base font-[300] tracking-wide leading-relaxed mb-6">
            Without tag along, a majority shareholder could sell their shares to a third party at a premium — leaving minority shareholders stuck with a new majority owner they did not choose, potentially with different strategic priorities, management style, or appetite for risk.
          </p>
          <p className="text-[#6B5B4E] text-base font-[300] tracking-wide leading-relaxed">
            Tag along is particularly important for employees who hold exercised options or shares granted through equity compensation. These are often the shareholders with the least influence and the most to lose from a change of control they had no say in.
          </p>
        </section>

        <section className="mb-14">
          <h2 className="font-[family-name:var(--font-heading)] text-2xl font-[500] tracking-[0.05em] uppercase text-[#1C1917] mb-6">
            How Tag Along Works in Practice
          </h2>
          <p className="text-[#6B5B4E] text-base font-[300] tracking-wide leading-relaxed mb-8">
            Here is the typical sequence when tag along is triggered.
          </p>
          <div className="space-y-4">
            {[
              { step: 'Step 1: Notice of Proposed Sale', detail: 'The selling shareholder notifies all other shareholders of the proposed sale: buyer identity, number of shares being sold, price per share, and all material terms. The notice period is typically 15-30 days.' },
              { step: 'Step 2: Tag Along Election', detail: 'Each minority shareholder decides whether to exercise their tag along right. If they elect to tag along, they must sell a proportional number of shares — if the seller is disposing of 50% of their holdings, tag along shareholders can sell up to 50% of theirs.' },
              { step: 'Step 3: Pro-Rata Allocation', detail: 'If the buyer does not want to purchase the additional shares from tag along shareholders, the original seller must reduce their own sale by a corresponding amount. This is the key protection: the seller cannot proceed with a full sale while leaving minority holders behind.' },
              { step: 'Step 4: Completion', detail: 'All participating shareholders transfer their shares to the buyer simultaneously, at the same price per share and on identical terms. The buyer gets a larger stake, the minority shareholders get liquidity, and the original seller may sell fewer shares than planned.' },
            ].map((item, i) => (
              <div key={item.step} className="border border-[#D4C9B8] bg-[#FDFAF5] p-5 flex gap-4">
                <div className="w-7 h-7 bg-[#C9A84C] text-[#1C1917] flex items-center justify-center font-[family-name:var(--font-mono)] text-xs font-[700] shrink-0 mt-0.5">
                  {i + 1}
                </div>
                <div>
                  <p className="font-[family-name:var(--font-heading)] text-sm font-[600] tracking-[0.05em] uppercase text-[#1C1917] mb-1">{item.step}</p>
                  <p className="text-sm text-[#6B5B4E] font-[300] leading-relaxed">{item.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-14">
          <h2 className="font-[family-name:var(--font-heading)] text-2xl font-[500] tracking-[0.05em] uppercase text-[#1C1917] mb-6">
            SEIS/EIS Implications
          </h2>
          <p className="text-[#6B5B4E] text-base font-[300] tracking-wide leading-relaxed mb-6">
            Both drag along and tag along create a disposal event for the shareholders whose shares are sold. If those shares were issued under SEIS or EIS and the 3-year holding period has not elapsed, HMRC will claw back the income tax relief.
          </p>
          <p className="text-[#6B5B4E] text-base font-[300] tracking-wide leading-relaxed mb-6">
            For SEIS investors, this means losing 50% income tax relief and the CGT exemption. For EIS investors, it means losing 30% income tax relief and CGT deferral. The financial impact can be substantial — an investor who put in £200K under SEIS and received £100K income tax relief would have to repay that £100K to HMRC.
          </p>
          <p className="text-[#6B5B4E] text-base font-[300] tracking-wide leading-relaxed mb-6">
            To protect SEIS/EIS investors, consider adding a carve-out to the drag along clause: drag along cannot be exercised within the 3-year SEIS/EIS holding period without the written consent of shareholders who hold SEIS/EIS qualifying shares. This gives those investors a veto on early exits that would destroy their tax relief.
          </p>
          <p className="text-[#6B5B4E] text-base font-[300] tracking-wide leading-relaxed">
            Alternatively, structure the drag along threshold so that SEIS/EIS investors collectively hold enough shares to block it (i.e., more than 100% minus the drag threshold). If drag along requires 75%, SEIS/EIS investors collectively holding more than 25% can prevent it being triggered.
          </p>
        </section>

        <section className="mb-14">
          <h2 className="font-[family-name:var(--font-heading)] text-2xl font-[500] tracking-[0.05em] uppercase text-[#1C1917] mb-6">
            Pre-Emption Rights: The Third Piece of the Puzzle
          </h2>
          <p className="text-[#6B5B4E] text-base font-[300] tracking-wide leading-relaxed mb-6">
            Pre-emption rights sit alongside drag along and tag along to form a complete share transfer framework. Pre-emption gives existing shareholders the right to buy any shares being sold before they can be offered to third parties.
          </p>
          <p className="text-[#6B5B4E] text-base font-[300] tracking-wide leading-relaxed mb-6">
            The typical sequence when a shareholder wants to sell: (1) offer shares to existing shareholders under pre-emption rights, (2) if existing shareholders decline (or cannot match the price), the selling shareholder can proceed to a third party, (3) tag along rights activate, allowing minority shareholders to join the sale.
          </p>
          <p className="text-[#6B5B4E] text-base font-[300] tracking-wide leading-relaxed">
            Drag along overrides pre-emption — if the drag along threshold is met, all shareholders must sell regardless of pre-emption. This hierarchy should be explicitly stated in the shareholder agreement to avoid confusion during a real transaction.
          </p>
        </section>

        <section className="mb-14">
          <h2 className="font-[family-name:var(--font-heading)] text-2xl font-[500] tracking-[0.05em] uppercase text-[#1C1917] mb-6">
            Negotiation Strategy for Founders
          </h2>
          <p className="text-[#6B5B4E] text-base font-[300] tracking-wide leading-relaxed mb-6">
            <strong className="text-[#1C1917]">Drag along threshold:</strong> Push for 75% or higher. At seed stage, founders typically hold 60-80% — a 75% threshold means investors cannot drag you without your consent. At Series A and beyond, as founder ownership drops, the threshold becomes more critical. Consider a higher threshold for early-stage agreements (80-90%) that can be renegotiated at later rounds.
          </p>
          <p className="text-[#6B5B4E] text-base font-[300] tracking-wide leading-relaxed mb-6">
            <strong className="text-[#1C1917]">Minimum price floor:</strong> Insist on a minimum price that the drag along sale must exceed — typically the amount needed to clear all liquidation preferences plus a meaningful return to ordinary shareholders. This prevents fire sales.
          </p>
          <p className="text-[#6B5B4E] text-base font-[300] tracking-wide leading-relaxed mb-6">
            <strong className="text-[#1C1917]">Management carve-out:</strong> If the drag along includes a management incentive payment (bonus pool for founders/executives to incentivise deal completion), ensure it is included in the same-terms requirement so all shareholders benefit equally, or that it is transparently negotiated.
          </p>
          <p className="text-[#6B5B4E] text-base font-[300] tracking-wide leading-relaxed">
            <strong className="text-[#1C1917]">Tag along scope:</strong> Ensure tag along applies to all shareholders, not just a specific class. Early employees with exercised options deserve the same protection as angel investors. Also confirm that tag along survives any amendment to the shareholder agreement — new investors should not be able to strip it out in later rounds.
          </p>
        </section>

        <div className="bg-[#1C1917] border border-[#C9A84C] p-8 mb-14 relative overflow-hidden">
          <div className="absolute top-3 left-3 w-5 h-5 border-t border-l border-[#C9A84C] opacity-40" />
          <div className="absolute top-3 right-3 w-5 h-5 border-t border-r border-[#C9A84C] opacity-40" />
          <div className="absolute bottom-3 left-3 w-5 h-5 border-b border-l border-[#C9A84C] opacity-40" />
          <div className="absolute bottom-3 right-3 w-5 h-5 border-b border-r border-[#C9A84C] opacity-40" />
          <p className="font-[family-name:var(--font-mono)] text-xs tracking-[0.2em] uppercase text-[#C9A84C] mb-3">CapBrief</p>
          <h3 className="font-[family-name:var(--font-heading)] text-xl font-[500] tracking-[0.05em] uppercase text-white mb-3">
            Model Exit Scenarios with Your Current Cap Table
          </h3>
          <p className="text-white/60 text-sm font-[300] tracking-wide leading-relaxed mb-6">
            Upload your cap table and CapBrief models what each shareholder receives at different exit values — accounting for liquidation preferences, drag along thresholds, and share class priorities.
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
            <Link href="/guides/shareholder-agreement-template" className="block text-sm text-white/60 hover:text-white transition-colors font-[300] tracking-wide">
              → Shareholder Agreement Template: What to Include
            </Link>
            <Link href="/guides/investor-rights-explained" className="block text-sm text-white/60 hover:text-white transition-colors font-[300] tracking-wide">
              → Investor Rights Explained: What VCs Get in Your Cap Table
            </Link>
            <Link href="/guides/seis-vs-eis-comparison" className="block text-sm text-white/60 hover:text-white transition-colors font-[300] tracking-wide">
              → SEIS vs EIS: Complete Comparison Guide
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
