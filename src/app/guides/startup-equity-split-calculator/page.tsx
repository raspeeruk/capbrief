import type { Metadata } from 'next'
import Link from 'next/link'

export const dynamic = 'force-static'

export const metadata: Metadata = {
  title: 'Startup Equity Split: How to Divide Founder Equity | CapBrief',
  description: 'How to split equity between co-founders fairly. Covers contribution-based models, vesting schedules, the 50/50 trap, and what happens when a co-founder leaves early.',
  openGraph: {
    title: 'Startup Equity Split: How to Divide Founder Equity | CapBrief',
    description: 'How to split equity between co-founders fairly. Covers contribution-based models, vesting schedules, the 50/50 trap, and what happens when a co-founder leaves early.',
    type: 'article',
  },
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Startup Equity Split: How to Divide Founder Equity',
  description: 'How to split equity between co-founders fairly. Covers contribution-based models, vesting schedules, the 50/50 trap, and what happens when a co-founder leaves early.',
  author: { '@type': 'Organization', name: 'CapBrief' },
  publisher: { '@type': 'Organization', name: 'CapBrief', url: 'https://roundbrief.com' },
}

const faqs = [
  {
    q: 'Should co-founders split equity 50/50?',
    a: 'It depends, but usually no. A 50/50 split creates deadlock risk — if the founders disagree on a critical decision, neither has a tiebreaker vote. It also ignores the reality that founders rarely contribute equally over the life of the company. The founder who originated the idea, built the first prototype, or is going full-time from day one while the other keeps a job is contributing more early risk and should be compensated for it. A 55/45 or 60/40 split with proper vesting protects both parties better than an equal split that feels fair at the start.',
  },
  {
    q: 'What is founder vesting and why is it important?',
    a: 'Founder vesting means that founders earn their equity over time rather than owning it all from day one. The standard structure is 4-year vesting with a 1-year cliff: no equity vests for the first year, then 25% vests at the 1-year mark, with the remainder vesting monthly or quarterly over the next 3 years. Vesting protects the company and the remaining founders if someone leaves early — without it, a co-founder who departs after 3 months retains their full equity stake, which creates a dead equity problem that will deter future investors.',
  },
  {
    q: 'How do you value non-cash contributions to an equity split?',
    a: 'There is no perfect formula, but experienced founders weight contributions across five dimensions: (1) the original idea and any existing IP, (2) time commitment — full-time vs part-time vs advisory, (3) capital invested, (4) domain expertise and network that are critical to the business, (5) opportunity cost — what the founder is giving up. Assign a relative weight to each, score each founder, and calculate the resulting percentage. The conversation matters more than the exact numbers — founders who cannot negotiate this honestly will struggle with harder decisions later.',
  },
  {
    q: 'What happens to a departed founder\'s equity?',
    a: 'With vesting: unvested shares are forfeited and typically returned to the company (via reverse vesting or a buyback at nominal value). Vested shares remain with the departed founder unless there is a leaver provision. Good leaver provisions allow departure at fair market value; bad leaver provisions allow buyback at nominal value. Without vesting: the departed founder keeps everything — which is exactly why investors insist on vesting for all founders as a condition of investment.',
  },
  {
    q: 'Should an advisor get equity?',
    a: 'Only if the advisor provides genuinely scarce and measurable value. Typical advisor equity is 0.25% to 1% of fully diluted equity, vesting over 12-24 months. Many early-stage founders over-allocate to advisors who provide introductions but no sustained work. Use a vesting schedule with milestones rather than time-based vesting for advisors — they should earn equity by delivering specific outcomes, not by existing.',
  },
  {
    q: 'When should we formalise the equity split?',
    a: 'At incorporation, or immediately after. Do not wait until you have revenue, or until you raise money, or until it feels like a "real" company. The longer you wait, the more emotional and complicated the conversation becomes. Formalise the split in a shareholders\' agreement that includes vesting schedules, good/bad leaver provisions, pre-emption rights, and a drag-along clause. File the share allotment with Companies House via an SH01 form.',
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

export default function StartupEquitySplitPage() {
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
            Startup Equity Split
          </p>
          <h1 className="font-[family-name:var(--font-heading)] text-4xl font-[700] tracking-[0.05em] uppercase text-white mb-6 leading-tight">
            Startup Equity Split: How to Divide Founder Equity
          </h1>
          <p className="text-lg text-white/60 leading-relaxed font-[300] tracking-wide">
            The equity split conversation is the first real negotiation between co-founders — and the one most people handle worst. Get it wrong and you create resentment that compounds for years. Get it right and you build the foundation for a partnership that survives the hard times.
          </p>
        </div>
      </section>

      <article className="max-w-[768px] mx-auto px-6 py-16">

        <section className="mb-14">
          <h2 className="font-[family-name:var(--font-heading)] text-2xl font-[500] tracking-[0.05em] uppercase text-[#1C1917] mb-6">
            Why the Equity Split Matters More Than You Think
          </h2>
          <p className="text-[#6B5B4E] text-base font-[300] tracking-wide leading-relaxed mb-6">
            Your equity split determines three things that will affect every decision for the life of the company. First, who has control — voting rights follow share ownership, and a founder with 51% can outvote a founder with 49% on everything from strategy to hiring to whether to accept an acquisition offer. Second, who gets paid what at exit — a 10% difference in ownership on a £10M exit is £1M. Third, how investors perceive the team — a split that does not reflect reality signals that the founders cannot have hard conversations.
          </p>
          <p className="text-[#6B5B4E] text-base font-[300] tracking-wide leading-relaxed mb-6">
            Most founder teams make this decision in a 20-minute conversation and then never revisit it. The combination of social awkwardness, optimism about the future, and ignorance about the long-term consequences means the split is usually made on vibes rather than structure.
          </p>
          <p className="text-[#6B5B4E] text-base font-[300] tracking-wide leading-relaxed">
            This guide gives you a framework to have the conversation properly — with numbers, with structures, and with protections that make the split work whether the company succeeds or whether a founder leaves.
          </p>
        </section>

        <section className="mb-14">
          <h2 className="font-[family-name:var(--font-heading)] text-2xl font-[500] tracking-[0.05em] uppercase text-[#1C1917] mb-6">
            The Five Factors That Should Drive Your Split
          </h2>
          <p className="text-[#6B5B4E] text-base font-[300] tracking-wide leading-relaxed mb-8">
            No formula is perfect, but weighting these five factors will produce a split that is defensible and fair. Score each founder on each dimension and calculate the resulting equity percentage.
          </p>
          <div className="space-y-4">
            {[
              { factor: '1. Idea and Existing IP', detail: 'Who originated the concept? Is there existing code, research, patents, or domain knowledge that one founder brings? This typically accounts for 5-15% of the weighting. An idea alone is worth very little — execution matters far more — but existing IP that saves 6+ months of development is genuinely valuable.' },
              { factor: '2. Time Commitment', detail: 'Is everyone going full-time from day one? A founder who quits their job immediately takes on more risk than one who stays employed and contributes evenings. Full-time vs part-time is typically the largest single factor in the split. A part-time founder should expect 30-50% less equity than a full-time one.' },
              { factor: '3. Capital Contribution', detail: 'Is one founder putting in their own money? This can be reflected in the equity split, or separately as a convertible note or ordinary share purchase at a nominal premium. Mixing capital and sweat equity in a single number creates confusion — consider keeping them separate on the cap table.' },
              { factor: '4. Skills and Network', detail: 'Does one founder bring a technical skill (engineering, design) while the other brings commercial skills (sales, fundraising, industry connections)? These are worth equity if they are genuinely scarce and critical. A CTO co-founder who builds the entire product is contributing more measurably than a business co-founder who writes a pitch deck.' },
              { factor: '5. Opportunity Cost', detail: 'What is each founder giving up? A founder leaving a £200K banking job takes on more personal financial risk than a recent graduate. This should be acknowledged in the split, though it can also be addressed through salary differentials or convertible notes once the company has revenue.' },
            ].map((item) => (
              <div key={item.factor} className="border border-[#D4C9B8] bg-[#FDFAF5] p-5">
                <p className="font-[family-name:var(--font-heading)] text-sm font-[600] tracking-[0.05em] uppercase text-[#1C1917] mb-2">{item.factor}</p>
                <p className="text-sm text-[#6B5B4E] font-[300] leading-relaxed">{item.detail}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-14">
          <h2 className="font-[family-name:var(--font-heading)] text-2xl font-[500] tracking-[0.05em] uppercase text-[#1C1917] mb-6">
            Worked Example: Two Co-Founders
          </h2>
          <p className="text-[#6B5B4E] text-base font-[300] tracking-wide leading-relaxed mb-6">
            Alice and Bob are starting a SaaS company. Alice originated the idea, has been building the prototype for 4 months, and is going full-time immediately. Bob has 15 years of industry experience, a network of potential customers, and will join full-time in 3 months once he has given notice at his current role.
          </p>
          <div className="border border-[#D4C9B8] overflow-hidden mb-6">
            <div className="grid grid-cols-4 bg-[#1C1917] text-white">
              <div className="p-4 border-r border-[#333]"><p className="font-[family-name:var(--font-heading)] text-xs font-[600] tracking-[0.1em] uppercase">Factor</p></div>
              <div className="p-4 border-r border-[#333]"><p className="font-[family-name:var(--font-heading)] text-xs font-[600] tracking-[0.1em] uppercase">Weight</p></div>
              <div className="p-4 border-r border-[#333]"><p className="font-[family-name:var(--font-heading)] text-xs font-[600] tracking-[0.1em] uppercase">Alice</p></div>
              <div className="p-4"><p className="font-[family-name:var(--font-heading)] text-xs font-[600] tracking-[0.1em] uppercase">Bob</p></div>
            </div>
            {[
              ['Idea & IP', '15%', '9/10', '3/10'],
              ['Time commitment', '30%', '10/10', '6/10'],
              ['Capital', '10%', '5/10', '5/10'],
              ['Skills & network', '25%', '7/10', '9/10'],
              ['Opportunity cost', '20%', '6/10', '8/10'],
            ].map(([factor, weight, alice, bob], i) => (
              <div key={factor} className={`grid grid-cols-4 ${i % 2 === 0 ? 'bg-[#FDFAF5]' : 'bg-[#F5F0E8]'}`}>
                <div className="p-4 border-r border-[#D4C9B8]"><p className="text-sm font-[500] text-[#1C1917]">{factor}</p></div>
                <div className="p-4 border-r border-[#D4C9B8]"><p className="text-sm text-[#6B5B4E] font-[300]">{weight}</p></div>
                <div className="p-4 border-r border-[#D4C9B8]"><p className="text-sm text-[#6B5B4E] font-[300]">{alice}</p></div>
                <div className="p-4"><p className="text-sm text-[#6B5B4E] font-[300]">{bob}</p></div>
              </div>
            ))}
          </div>
          <p className="text-[#6B5B4E] text-base font-[300] tracking-wide leading-relaxed mb-6">
            Running the weighted scores: Alice scores 7.65 weighted points, Bob scores 6.35. That translates to roughly 55% Alice, 45% Bob. Not a dramatic gap, but enough to give Alice a tiebreaker on major decisions and reflect her earlier commitment and IP contribution.
          </p>
          <p className="text-[#6B5B4E] text-base font-[300] tracking-wide leading-relaxed">
            Both founders agree to 4-year vesting with a 1-year cliff, starting from the date they each go full-time. Alice gets a 4-month head start on her vesting clock because she has already been working full-time. This makes the arrangement feel fair while still protecting against early departure.
          </p>
        </section>

        <section className="mb-14">
          <h2 className="font-[family-name:var(--font-heading)] text-2xl font-[500] tracking-[0.05em] uppercase text-[#1C1917] mb-6">
            The 50/50 Trap
          </h2>
          <p className="text-[#6B5B4E] text-base font-[300] tracking-wide leading-relaxed mb-6">
            Equal splits feel fair but create structural problems. The most dangerous is deadlock: with equal voting rights, any disagreement that cannot be resolved through conversation requires a third party to break. At 2am when you are deciding whether to pivot, fire a key hire, or accept an acqui-hire offer, the last thing you need is a governance crisis.
          </p>
          <p className="text-[#6B5B4E] text-base font-[300] tracking-wide leading-relaxed mb-6">
            Investors view 50/50 splits with suspicion because it signals that the founders prioritised avoiding a difficult conversation over building a clear decision-making structure. A 51/49 split with a clear explanation of why is always better than a 50/50 that happened because neither founder wanted to seem greedy.
          </p>
          <p className="text-[#6B5B4E] text-base font-[300] tracking-wide leading-relaxed">
            If you genuinely believe the split should be equal, consider adding a tie-breaking mechanism: a trusted advisor with a casting vote, a rotating CEO role, or clearly defined domains where each founder has final authority (e.g., product decisions vs commercial decisions).
          </p>
        </section>

        <section className="mb-14">
          <h2 className="font-[family-name:var(--font-heading)] text-2xl font-[500] tracking-[0.05em] uppercase text-[#1C1917] mb-6">
            Vesting: The Non-Negotiable Protection
          </h2>
          <p className="text-[#6B5B4E] text-base font-[300] tracking-wide leading-relaxed mb-6">
            Every investor you ever speak to will ask if founders have vesting. If you do not, they will either require it as a condition of investment (resetting the clock for all founders) or walk away. But vesting is not just for investors — it protects co-founders from each other.
          </p>
          <p className="text-[#6B5B4E] text-base font-[300] tracking-wide leading-relaxed mb-6">
            The standard structure is 4-year vesting with a 1-year cliff. This means no equity vests for the first 12 months. At the 12-month mark, 25% vests immediately. After that, the remaining 75% vests monthly or quarterly. If a founder leaves before the cliff, they get nothing. If they leave after 2 years, they keep 50%.
          </p>
          <p className="text-[#6B5B4E] text-base font-[300] tracking-wide leading-relaxed mb-6">
            In the UK, founder vesting is typically implemented through reverse vesting (also called restricted share agreements). The founder receives all shares at incorporation but agrees that unvested shares can be bought back by the company at nominal value if they leave. This avoids the tax complications of issuing shares over time at increasing valuations.
          </p>
          <p className="text-[#6B5B4E] text-base font-[300] tracking-wide leading-relaxed">
            Acceleration clauses are also worth considering. Single-trigger acceleration (full vesting on acquisition) protects founders from being fired after a buyout. Double-trigger (full vesting only if fired within 12 months of acquisition) is more investor-friendly and increasingly standard. Agree on this upfront — it is much harder to negotiate after a term sheet arrives.
          </p>
        </section>

        <section className="mb-14">
          <h2 className="font-[family-name:var(--font-heading)] text-2xl font-[500] tracking-[0.05em] uppercase text-[#1C1917] mb-6">
            Good Leaver vs Bad Leaver Provisions
          </h2>
          <p className="text-[#6B5B4E] text-base font-[300] tracking-wide leading-relaxed mb-6">
            UK shareholder agreements typically include leaver provisions that determine what happens to a departing founder's vested shares — not just their unvested ones. The two categories are good leaver and bad leaver.
          </p>
          <p className="text-[#6B5B4E] text-base font-[300] tracking-wide leading-relaxed mb-6">
            A <strong className="text-[#1C1917]">good leaver</strong> is typically defined as someone who leaves due to ill health, death, redundancy, or constructive dismissal. Good leavers keep their vested shares at fair market value — or they are bought back at fair value, giving the departing founder their fair share.
          </p>
          <p className="text-[#6B5B4E] text-base font-[300] tracking-wide leading-relaxed mb-6">
            A <strong className="text-[#1C1917]">bad leaver</strong> is someone who resigns voluntarily, is terminated for cause (gross misconduct, breach of contract), or sets up a competing business. Bad leavers typically have all shares — including vested shares — bought back at nominal value (often the original subscription price of £0.001 per share).
          </p>
          <p className="text-[#6B5B4E] text-base font-[300] tracking-wide leading-relaxed">
            The definitions matter enormously. "Voluntary resignation" being classified as bad leaver is standard but punitive — it means a founder who leaves after 3 years because they are burnt out gets nothing. Consider adding a middle category (intermediate leaver) or moving voluntary resignation to good leaver after a certain tenure period (e.g., good leaver if they have been with the company for 3+ years).
          </p>
        </section>

        <section className="mb-14">
          <h2 className="font-[family-name:var(--font-heading)] text-2xl font-[500] tracking-[0.05em] uppercase text-[#1C1917] mb-6">
            Three-Plus Founder Splits
          </h2>
          <p className="text-[#6B5B4E] text-base font-[300] tracking-wide leading-relaxed mb-6">
            With three or more founders, the dynamics change. Equal three-way splits (33/33/33) are even more problematic than 50/50 — two founders can always outvote one, creating faction risk. The contribution-weighting approach above becomes even more important because the differences between three people are always larger than between two.
          </p>
          <p className="text-[#6B5B4E] text-base font-[300] tracking-wide leading-relaxed mb-6">
            A common pattern is one lead founder (CEO) with 40-50%, and two co-founders with 25-30% each. The lead founder has clear authority but cannot ignore both co-founders combined. This works well when one person is clearly the driving force and the others bring complementary skills.
          </p>
          <p className="text-[#6B5B4E] text-base font-[300] tracking-wide leading-relaxed">
            With any multi-founder split, consider reserving 10-15% for an employee option pool at incorporation. This is equity that will be allocated to future hires, and it dilutes all founders equally. Setting it up early avoids the argument about whose equity the option pool comes from when you hire your first engineer.
          </p>
        </section>

        <div className="bg-[#1C1917] border border-[#C9A84C] p-8 mb-14 relative overflow-hidden">
          <div className="absolute top-3 left-3 w-5 h-5 border-t border-l border-[#C9A84C] opacity-40" />
          <div className="absolute top-3 right-3 w-5 h-5 border-t border-r border-[#C9A84C] opacity-40" />
          <div className="absolute bottom-3 left-3 w-5 h-5 border-b border-l border-[#C9A84C] opacity-40" />
          <div className="absolute bottom-3 right-3 w-5 h-5 border-b border-r border-[#C9A84C] opacity-40" />
          <p className="font-[family-name:var(--font-mono)] text-xs tracking-[0.2em] uppercase text-[#C9A84C] mb-3">CapBrief</p>
          <h3 className="font-[family-name:var(--font-heading)] text-xl font-[500] tracking-[0.05em] uppercase text-white mb-3">
            Model Your Founder Split Across Future Rounds
          </h3>
          <p className="text-white/60 text-sm font-[300] tracking-wide leading-relaxed mb-6">
            Upload your cap table and CapBrief shows how each founder's ownership changes through seed, Series A, and option pool expansion — so you can see the long-term impact of today's split.
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
            <Link href="/guides/cap-table-for-seed-round" className="block text-sm text-white/60 hover:text-white transition-colors font-[300] tracking-wide">
              → Cap Table for Seed Round: Step-by-Step Setup
            </Link>
            <Link href="/guides/option-pool-and-vesting-guide" className="block text-sm text-white/60 hover:text-white transition-colors font-[300] tracking-wide">
              → Option Pool and Vesting Schedules
            </Link>
            <Link href="/guides/shareholder-agreement-template" className="block text-sm text-white/60 hover:text-white transition-colors font-[300] tracking-wide">
              → Shareholder Agreement Template: What to Include
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
