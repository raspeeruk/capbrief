import type { Metadata } from 'next'
import Link from 'next/link'

export const dynamic = 'force-static'

export const metadata: Metadata = {
  title: 'Convertible Note Template UK: Free Download + Guide | CapBrief',
  description: 'A complete guide to convertible notes for UK startups. Covers key terms, valuation caps, discounts, interest rates, maturity dates, and how notes convert at your next priced round.',
  openGraph: {
    title: 'Convertible Note Template UK: Free Download + Guide | CapBrief',
    description: 'A complete guide to convertible notes for UK startups. Covers key terms, valuation caps, discounts, interest rates, maturity dates, and how notes convert at your next priced round.',
    type: 'article',
  },
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Convertible Note Template UK: Free Download + Guide',
  description: 'A complete guide to convertible notes for UK startups. Covers key terms, valuation caps, discounts, interest rates, maturity dates, and how notes convert at your next priced round.',
  author: { '@type': 'Organization', name: 'CapBrief' },
  publisher: { '@type': 'Organization', name: 'CapBrief', url: 'https://roundbrief.com' },
}

const faqs = [
  {
    q: 'What is a convertible note?',
    a: 'A convertible note is a short-term loan that converts into equity at a future priced round. The investor lends money to the company, and instead of being repaid in cash, the loan converts into shares when the company raises a qualifying equity round. The conversion typically happens at a discount to the round price, rewarding the early investor for taking more risk. In the UK, convertible notes are structured as loan agreements with conversion mechanics, interest provisions, and maturity dates.',
  },
  {
    q: 'What is the difference between a convertible note and a SAFE?',
    a: 'A convertible note is a debt instrument with an interest rate and maturity date — it creates a legal obligation for the company to repay the money if conversion does not happen. A SAFE (Simple Agreement for Future Equity) is not debt: it is a contractual right to future shares with no maturity date, no interest, and no repayment obligation. In the UK, SAFEs have gained popularity but are less common than in the US because they do not qualify for SEIS/EIS tax relief (the shares have not been issued yet). Most UK angel rounds still use convertible notes or advance subscription agreements (ASAs) to preserve SEIS eligibility.',
  },
  {
    q: 'What is a valuation cap on a convertible note?',
    a: 'A valuation cap is the maximum company valuation at which the note converts into equity. If the company raises its next round at a higher valuation than the cap, the note converts at the cap — giving the note holder more shares per pound invested. Example: an investor puts £100K into a note with a £2M cap. The company later raises at a £5M pre-money valuation. Without the cap, £100K buys 2% (100K/5M). With the cap, £100K buys 5% (100K/2M). The cap is the investor\'s upside protection.',
  },
  {
    q: 'What is a typical discount rate for a UK convertible note?',
    a: 'Typical discount rates in the UK range from 15% to 25%. A 20% discount is the most common. This means the note converts at 80% of the price paid by the next round investors. Some notes have both a cap and a discount, with conversion at whichever gives the note holder more shares. Others have only one or the other. Having both gives the investor the best possible deal in all scenarios.',
  },
  {
    q: 'What happens if the convertible note reaches maturity without a qualifying round?',
    a: 'This is the scenario nobody wants. The investor can technically demand repayment — which most early-stage startups cannot afford. In practice, the options are: (1) extend the maturity date by mutual agreement, (2) convert at a pre-agreed floor valuation, (3) renegotiate entirely. Good convertible note templates address this explicitly with an automatic conversion at maturity provision, typically at a predetermined valuation. Without this clause, you are at the mercy of the note holder\'s goodwill.',
  },
  {
    q: 'Are convertible notes SEIS/EIS eligible?',
    a: 'Not directly. SEIS and EIS tax relief requires shares to be issued. A convertible note is debt until conversion. However, advance subscription agreements (ASAs) — which are economically similar — can be structured to be SEIS/EIS eligible because the investor is subscribing for shares in advance rather than lending money. If SEIS/EIS eligibility matters (it almost always does in the UK), use an ASA rather than a convertible note, or issue shares alongside the note.',
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

export default function ConvertibleNoteTemplateUKPage() {
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
            Convertible Note Template UK
          </p>
          <h1 className="font-[family-name:var(--font-heading)] text-4xl font-[700] tracking-[0.05em] uppercase text-white mb-6 leading-tight">
            Convertible Note Template UK: Free Download + Guide
          </h1>
          <p className="text-lg text-white/60 leading-relaxed font-[300] tracking-wide">
            Convertible notes let you raise money without setting a valuation — which is the right move when your company is too early to price. But the terms inside a convertible note determine who gets what when it converts, and most founders sign them without understanding the mechanics.
          </p>
        </div>
      </section>

      <article className="max-w-[768px] mx-auto px-6 py-16">

        <section className="mb-14">
          <h2 className="font-[family-name:var(--font-heading)] text-2xl font-[500] tracking-[0.05em] uppercase text-[#1C1917] mb-6">
            Why Use a Convertible Note
          </h2>
          <p className="text-[#6B5B4E] text-base font-[300] tracking-wide leading-relaxed mb-6">
            A convertible note solves the valuation problem. At pre-seed or very early seed stage, neither you nor your investors have enough data to agree on a fair company valuation. Revenue is zero or near zero, the product may be a prototype, and comparable company data is unreliable.
          </p>
          <p className="text-[#6B5B4E] text-base font-[300] tracking-wide leading-relaxed mb-6">
            Rather than spending weeks negotiating a valuation that both parties know is guesswork, a convertible note defers the pricing to the next round — when a lead investor with a term sheet will set the price based on actual traction. The early investor gets a reward for taking more risk (via the discount and/or cap), and you get capital faster with lower legal costs.
          </p>
          <p className="text-[#6B5B4E] text-base font-[300] tracking-wide leading-relaxed">
            Typical legal costs for a convertible note in the UK are £2,000-£5,000, compared to £10,000-£25,000 for a priced round with full investment agreements. For a £50K-£250K angel round, the savings are material.
          </p>
        </section>

        <section className="mb-14">
          <h2 className="font-[family-name:var(--font-heading)] text-2xl font-[500] tracking-[0.05em] uppercase text-[#1C1917] mb-6">
            The 8 Key Terms in Every Convertible Note
          </h2>
          <p className="text-[#6B5B4E] text-base font-[300] tracking-wide leading-relaxed mb-8">
            These are the terms that matter. Every one of them affects how much equity the note holder ends up with — and therefore how much you give up.
          </p>
          <div className="space-y-4">
            {[
              { term: '1. Principal Amount', detail: 'The amount of money the investor is lending. This is the starting number from which all conversion calculations flow. A £100K note with no interest converts £100K of value into shares. Simple — until you add the other terms.' },
              { term: '2. Interest Rate', detail: 'UK convertible notes typically carry 4-8% annual interest. The interest accrues and converts alongside the principal — it does not get paid in cash. A £100K note at 6% that converts after 18 months converts £109K of value (principal + accrued interest). HMRC treats this as real interest for tax purposes.' },
              { term: '3. Valuation Cap', detail: 'The maximum valuation at which the note converts. If you set a £2M cap and your next round prices at £5M pre-money, the note converts at the £2M cap — giving the note holder 2.5x more shares than if they invested at the round price. Caps typically range from £1M to £5M for UK pre-seed rounds.' },
              { term: '4. Discount Rate', detail: 'The percentage discount applied to the next round\'s price per share. A 20% discount means the note holder pays 80p for every £1 share. Standard range is 15-25%. If both a cap and discount apply, the note converts at whichever produces more shares for the investor.' },
              { term: '5. Maturity Date', detail: 'The date by which the note must either convert or be repaid. Typically 12-24 months. At maturity, if no qualifying round has occurred, the investor can demand repayment (which most startups cannot do) or the note converts automatically at a pre-agreed valuation.' },
              { term: '6. Qualifying Round Threshold', detail: 'The minimum size of the next equity round that triggers automatic conversion. Typically £250K-£1M. This prevents the note from converting on a tiny friends-and-family round that does not represent a real market valuation.' },
              { term: '7. Conversion Mechanics', detail: 'The specific formula that determines how many shares the note holder receives. Most notes convert into the same share class issued in the qualifying round (e.g., Series Seed preferred). The conversion price is the lower of: (cap valuation / fully diluted share count) or (round price per share x (1 - discount rate)).' },
              { term: '8. Maturity Conversion Floor', detail: 'The valuation at which the note converts if it reaches maturity without a qualifying round. Without this clause, the investor can demand cash repayment. With it, the note converts automatically — protecting the company from a cash crisis. The floor is typically set at the valuation cap or lower.' },
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
            Worked Example: How a Convertible Note Converts
          </h2>
          <p className="text-[#6B5B4E] text-base font-[300] tracking-wide leading-relaxed mb-6">
            Sarah invests £100,000 into your company via a convertible note. The terms: £2M valuation cap, 20% discount, 6% interest, 18-month maturity.
          </p>
          <p className="text-[#6B5B4E] text-base font-[300] tracking-wide leading-relaxed mb-6">
            Twelve months later, you raise a seed round at £4M pre-money valuation. There are 10,000,000 fully diluted shares. The seed round price per share is £0.40 (£4M / 10M shares).
          </p>
          <p className="text-[#6B5B4E] text-base font-[300] tracking-wide leading-relaxed mb-6">
            <strong className="text-[#1C1917]">Using the cap:</strong> Conversion price = £2M / 10M shares = £0.20 per share. Sarah's note (£100K + £6K accrued interest = £106K) converts at £0.20 = 530,000 shares.
          </p>
          <p className="text-[#6B5B4E] text-base font-[300] tracking-wide leading-relaxed mb-6">
            <strong className="text-[#1C1917]">Using the discount:</strong> Conversion price = £0.40 x 0.80 = £0.32 per share. £106K at £0.32 = 331,250 shares.
          </p>
          <p className="text-[#6B5B4E] text-base font-[300] tracking-wide leading-relaxed">
            The cap produces more shares (530,000 vs 331,250), so Sarah converts at the cap. She ends up with 5.3% of the company on a fully diluted basis — compared to 2.65% if she had invested at the round price. The cap rewarded her for investing 12 months earlier when the risk was higher.
          </p>
        </section>

        <section className="mb-14">
          <h2 className="font-[family-name:var(--font-heading)] text-2xl font-[500] tracking-[0.05em] uppercase text-[#1C1917] mb-6">
            UK-Specific Considerations
          </h2>
          <p className="text-[#6B5B4E] text-base font-[300] tracking-wide leading-relaxed mb-6">
            <strong className="text-[#1C1917]">SEIS/EIS compatibility:</strong> Convertible notes are debt, not equity. SEIS and EIS require shares to be issued. If your investor needs tax relief, use an advance subscription agreement (ASA) instead — it achieves the same economic outcome but structures the investment as a share subscription rather than a loan. Most UK startup lawyers can draft an ASA that mirrors convertible note terms while preserving SEIS eligibility.
          </p>
          <p className="text-[#6B5B4E] text-base font-[300] tracking-wide leading-relaxed mb-6">
            <strong className="text-[#1C1917]">Companies House filings:</strong> A convertible note does not require a Companies House filing until conversion. When the note converts, you must file a Return of Allotments (SH01) within one month of issuing the new shares. Late filing is a criminal offence for directors — set a reminder.
          </p>
          <p className="text-[#6B5B4E] text-base font-[300] tracking-wide leading-relaxed mb-6">
            <strong className="text-[#1C1917]">Tax on accrued interest:</strong> HMRC treats accrued interest on convertible notes as taxable income for the investor, even though they do not receive cash. The company may also need to account for it as a deductible expense. Get your accountant involved before the note matures.
          </p>
          <p className="text-[#6B5B4E] text-base font-[300] tracking-wide leading-relaxed">
            <strong className="text-[#1C1917]">Stamp duty:</strong> The issue of new shares on conversion of a note is exempt from stamp duty because no transfer of existing shares occurs. This is a minor but helpful cost saving compared to a share purchase.
          </p>
        </section>

        <section className="mb-14">
          <h2 className="font-[family-name:var(--font-heading)] text-2xl font-[500] tracking-[0.05em] uppercase text-[#1C1917] mb-6">
            The Advance Subscription Agreement Alternative
          </h2>
          <p className="text-[#6B5B4E] text-base font-[300] tracking-wide leading-relaxed mb-6">
            For UK founders, the advance subscription agreement (ASA) is often the better choice. It works like a convertible note — deferred pricing, cap, discount — but it is structured as a subscription for shares rather than a loan. This means shares are issued immediately (or as soon as practicable), which triggers SEIS or EIS eligibility.
          </p>
          <p className="text-[#6B5B4E] text-base font-[300] tracking-wide leading-relaxed mb-6">
            The key difference: with an ASA, the investor receives shares at the time of investment, but the price per share is adjusted retroactively when the next round closes. Additional shares are issued (or existing shares re-designated) to reflect the cap or discount. With a convertible note, no shares exist until conversion.
          </p>
          <p className="text-[#6B5B4E] text-base font-[300] tracking-wide leading-relaxed">
            The SeedLegals ASA and the British Business Bank's template are widely used starting points. Legal costs are similar to a convertible note — £2,000-£5,000 for a straightforward deal.
          </p>
        </section>

        <section className="mb-14">
          <h2 className="font-[family-name:var(--font-heading)] text-2xl font-[500] tracking-[0.05em] uppercase text-[#1C1917] mb-6">
            Common Traps to Avoid
          </h2>
          <div className="space-y-4">
            {[
              { trap: 'No Valuation Cap', detail: 'A convertible note without a cap gives the investor no downside protection. If your company raises at a high valuation, the note converts at that price — the investor gets no reward for investing earlier. Most experienced angels will refuse to invest without a cap.' },
              { trap: 'Stacking Multiple Notes', detail: 'Raising multiple convertible notes with different caps and discounts creates a conversion waterfall that is difficult to model and produces unexpected dilution. Each note converts separately, and the resulting cap table can be significantly worse for founders than expected. Model all outstanding notes together before issuing a new one.' },
              { trap: 'Ignoring the Maturity Date', detail: 'If you have not raised a qualifying round when the note matures, you have a problem. The investor can demand repayment, and if you cannot pay, this can trigger insolvency. Always negotiate an automatic conversion at maturity as part of the original note terms.' },
              { trap: 'Forgetting Pro-Rata Rights', detail: 'Some convertible notes include a right for the note holder to participate in the qualifying round (pro-rata). This means they can invest additional money at the round price on top of their note conversion. If multiple note holders have pro-rata rights, the round can fill up before you have room for a lead investor.' },
            ].map((item, i) => (
              <div key={item.trap} className="border border-[#D4C9B8] bg-[#FDFAF5] p-5 flex gap-4">
                <div className="w-7 h-7 bg-[#C9A84C] text-[#1C1917] flex items-center justify-center font-[family-name:var(--font-mono)] text-xs font-[700] shrink-0 mt-0.5">
                  {i + 1}
                </div>
                <div>
                  <p className="font-[family-name:var(--font-heading)] text-sm font-[600] tracking-[0.05em] uppercase text-[#1C1917] mb-1">{item.trap}</p>
                  <p className="text-sm text-[#6B5B4E] font-[300] leading-relaxed">{item.detail}</p>
                </div>
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
            Model Convertible Note Conversion on Your Cap Table
          </h3>
          <p className="text-white/60 text-sm font-[300] tracking-wide leading-relaxed mb-6">
            Upload your cap table and CapBrief shows exactly how each convertible note converts at different round sizes and valuations — before you sign the term sheet.
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
            <Link href="/guides/safe-note-vs-convertible-note" className="block text-sm text-white/60 hover:text-white transition-colors font-[300] tracking-wide">
              → SAFE Note vs Convertible Note: Which to Use
            </Link>
            <Link href="/guides/seis-vs-eis-comparison" className="block text-sm text-white/60 hover:text-white transition-colors font-[300] tracking-wide">
              → SEIS vs EIS: Complete Comparison Guide
            </Link>
            <Link href="/guides/cap-table-for-seed-round" className="block text-sm text-white/60 hover:text-white transition-colors font-[300] tracking-wide">
              → Cap Table for Seed Round: Step-by-Step Setup
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
