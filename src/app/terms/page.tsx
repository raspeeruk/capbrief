import type { Metadata } from 'next'
import Link from 'next/link'

export const dynamic = 'force-static'

export const metadata: Metadata = {
  title: 'Terms of Service | CapBrief',
  description: 'The terms that govern your use of CapBrief: plans and payment, your data and responsibilities, acceptable use, and our liability to you.',
  openGraph: {
    title: 'Terms of Service | CapBrief',
    description: 'The terms that govern your use of CapBrief: plans and payment, your data and responsibilities, acceptable use, and our liability to you.',
    type: 'website',
  },
}

const sections = [
  {
    number: '01',
    title: 'The Agreement',
    body: (
      <p className="text-[#6B5B4E] text-base font-[300] tracking-wide leading-relaxed">
        These terms are a contract between you and <strong className="text-[#1C1917] font-[400]">Two Cores
        Operations Ltd</strong>, a company registered in England and Wales, for your use of the CapBrief service at
        roundbrief.com. By creating an account or using the service, you accept these terms. If you use CapBrief on
        behalf of a company, you confirm you have authority to bind that company, and &quot;you&quot; means the company.
      </p>
    ),
  },
  {
    number: '02',
    title: 'The Service',
    body: (
      <p className="text-[#6B5B4E] text-base font-[300] tracking-wide leading-relaxed">
        CapBrief turns cap table spreadsheets into structured equity reports. You upload a CSV, AI detects the columns
        and infers missing details such as share classes with confidence scores, and the service calculates ownership,
        dilution, and funding round summaries. You can review and correct every inference, then export the result as a
        report for your board or investors. We may add, change, or remove features as the product evolves.
      </p>
    ),
  },
  {
    number: '03',
    title: 'Your Account',
    body: (
      <p className="text-[#6B5B4E] text-base font-[300] tracking-wide leading-relaxed">
        You must provide accurate account information and keep your login credentials secure. You are responsible for
        all activity that happens under your account. Tell us promptly through the{' '}
        <Link href="/contact" className="text-[#1C1917] underline decoration-[#C9A84C] underline-offset-4 hover:text-[#C9A84C] transition-colors">contact page</Link>{' '}
        if you believe your account has been accessed without your permission.
      </p>
    ),
  },
  {
    number: '04',
    title: 'Plans and Payment',
    body: (
      <>
        <p className="text-[#6B5B4E] text-base font-[300] tracking-wide leading-relaxed mb-6">
          The free plan is for smaller cap tables and carries the limits shown on our homepage, including a cap on the
          number of shareholders, watermarked exports, and a limit on saved reports. Paid subscriptions and one time
          report purchases unlock the full feature set. The exact price is always shown at checkout before you pay.
        </p>
        <p className="text-[#6B5B4E] text-base font-[300] tracking-wide leading-relaxed">
          Payments are processed by Stripe. Subscriptions renew automatically until cancelled. You can cancel at any
          time from your billing settings, and cancellation takes effect at the end of the current billing period.
          Where we offer a trial, the trial terms are shown when you start it. If we change prices, the new price
          applies from your next billing period and we will give you reasonable notice.
        </p>
      </>
    ),
  },
  {
    number: '05',
    title: 'Your Data and Your Responsibility',
    body: (
      <>
        <p className="text-[#6B5B4E] text-base font-[300] tracking-wide leading-relaxed mb-6">
          You keep all rights to the cap table data you upload and to the reports generated from it. You grant us a
          limited licence to host and process that data solely to provide the service to you, as described in our{' '}
          <Link href="/privacy" className="text-[#1C1917] underline decoration-[#C9A84C] underline-offset-4 hover:text-[#C9A84C] transition-colors">Privacy Policy</Link>.
          We claim no other rights over it.
        </p>
        <p className="text-[#6B5B4E] text-base font-[300] tracking-wide leading-relaxed">
          Cap tables contain personal information about shareholders. You are responsible for making sure you have the
          right to upload that information, for example because you act for the company whose register it is or have
          its authority. You must not upload data you have no right to process.
        </p>
      </>
    ),
  },
  {
    number: '06',
    title: 'Acceptable Use',
    body: (
      <>
        <p className="text-[#6B5B4E] text-base font-[300] tracking-wide leading-relaxed mb-6">
          You agree not to:
        </p>
        <ul className="space-y-3">
          {[
            'use the service for any unlawful purpose or in breach of any applicable law or regulation,',
            'attempt to access accounts, data, or systems that are not yours,',
            'interfere with or disrupt the service, or probe, scan, or test its security without permission,',
            'upload malicious code or content designed to harm the service or its users,',
            'resell or provide the service to third parties except as your plan allows (for example white label exports on the Agency plan),',
            'copy, scrape, or systematically extract the service or its content to build a competing product.',
          ].map(item => (
            <li key={item} className="flex gap-3 text-[#6B5B4E] text-base font-[300] tracking-wide leading-relaxed">
              <span className="w-1.5 h-1.5 bg-[#C9A84C] mt-2.5 shrink-0" aria-hidden />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </>
    ),
  },
  {
    number: '07',
    title: 'AI Output and No Advice',
    body: (
      <>
        <p className="text-[#6B5B4E] text-base font-[300] tracking-wide leading-relaxed mb-6">
          Parts of your report are produced by AI inference. Inferences are flagged with confidence levels, and they
          can be wrong. You are responsible for reviewing and correcting the output before you rely on it or share it.
        </p>
        <p className="text-[#6B5B4E] text-base font-[300] tracking-wide leading-relaxed">
          CapBrief briefs and reports are provided for information only. They are not legal, tax, accounting,
          financial, or investment advice, and they are not a substitute for your statutory records or professional
          advisers. Always verify figures against your company&apos;s official register before making decisions.
        </p>
      </>
    ),
  },
  {
    number: '08',
    title: 'Intellectual Property',
    body: (
      <p className="text-[#6B5B4E] text-base font-[300] tracking-wide leading-relaxed">
        The CapBrief software, website, brand, and report templates belong to Two Cores Operations Ltd or its
        licensors. Apart from your right to use the service under these terms, and your ownership of your own data and
        generated reports, no rights in the service are transferred to you.
      </p>
    ),
  },
  {
    number: '09',
    title: 'Availability',
    body: (
      <p className="text-[#6B5B4E] text-base font-[300] tracking-wide leading-relaxed">
        The service is provided on an &quot;as is&quot; and &quot;as available&quot; basis. We work to keep it fast
        and reliable, but we do not guarantee uninterrupted or error free operation, and we may suspend the service
        for maintenance where needed.
      </p>
    ),
  },
  {
    number: '10',
    title: 'Liability',
    body: (
      <>
        <p className="text-[#6B5B4E] text-base font-[300] tracking-wide leading-relaxed mb-6">
          To the fullest extent permitted by law, our total liability to you arising out of or in connection with the
          service is limited to the fees you paid us in the twelve months before the event giving rise to the claim.
          We are not liable for indirect or consequential losses, loss of profit, or loss of business.
        </p>
        <p className="text-[#6B5B4E] text-base font-[300] tracking-wide leading-relaxed">
          Nothing in these terms excludes or limits liability that cannot be excluded under the law of England and
          Wales, including liability for death or personal injury caused by negligence, or for fraud.
        </p>
      </>
    ),
  },
  {
    number: '11',
    title: 'Termination',
    body: (
      <p className="text-[#6B5B4E] text-base font-[300] tracking-wide leading-relaxed">
        You can stop using CapBrief and close your account at any time. We may suspend or terminate your access if you
        materially breach these terms and, where the breach can be fixed, fail to fix it within a reasonable time. On
        closure, your data is handled as described in our{' '}
        <Link href="/privacy" className="text-[#1C1917] underline decoration-[#C9A84C] underline-offset-4 hover:text-[#C9A84C] transition-colors">Privacy Policy</Link>.
        Sections that by their nature should survive termination (including liability and governing law) survive it.
      </p>
    ),
  },
  {
    number: '12',
    title: 'Changes to These Terms',
    body: (
      <p className="text-[#6B5B4E] text-base font-[300] tracking-wide leading-relaxed">
        We may update these terms from time to time. The current version will always be posted on this page with a
        revised date at the top. If a change is material, we will take reasonable steps to notify you, for example on
        the site or by email. Continuing to use the service after a change takes effect means you accept the updated
        terms.
      </p>
    ),
  },
  {
    number: '13',
    title: 'Governing Law',
    body: (
      <p className="text-[#6B5B4E] text-base font-[300] tracking-wide leading-relaxed">
        These terms are governed by the law of England and Wales, and the courts of England and Wales have exclusive
        jurisdiction over any dispute arising from them or from your use of the service.
      </p>
    ),
  },
  {
    number: '14',
    title: 'Contact',
    body: (
      <p className="text-[#6B5B4E] text-base font-[300] tracking-wide leading-relaxed">
        Questions about these terms? Reach us through the{' '}
        <Link href="/contact" className="text-[#1C1917] underline decoration-[#C9A84C] underline-offset-4 hover:text-[#C9A84C] transition-colors">contact page</Link>{' '}
        and we will get back to you.
      </p>
    ),
  },
]

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-[#F5F0E8]">
      {/* Nav */}
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

      {/* Hero */}
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
            Terms of Service
          </p>
          <h1 className="font-[family-name:var(--font-heading)] text-4xl font-[700] tracking-[0.05em] uppercase text-white mb-6 leading-tight">
            Terms of Service
          </h1>
          <p className="text-lg text-white/60 leading-relaxed font-[300] tracking-wide mb-8">
            The plain rules for using CapBrief: what the service does, what you pay, what you are responsible for, and
            where we stand behind our work.
          </p>
          <p className="font-[family-name:var(--font-mono)] text-xs tracking-[0.15em] uppercase text-white/40">
            Last updated: 4 July 2026
          </p>
        </div>
      </section>

      {/* Body */}
      <article className="max-w-[768px] mx-auto px-6 py-16">
        {sections.map(section => (
          <section key={section.number} className="mb-14">
            <h2 className="font-[family-name:var(--font-heading)] text-2xl font-[500] tracking-[0.05em] uppercase text-[#1C1917] mb-6">
              <span className="font-[family-name:var(--font-mono)] text-[#C9A84C] mr-3">{section.number}.</span>
              {section.title}
            </h2>
            {section.body}
          </section>
        ))}

        {/* Cross links */}
        <div className="bg-[#1C1917] border border-[#C9A84C] p-8 relative overflow-hidden">
          <div className="absolute top-3 left-3 w-5 h-5 border-t border-l border-[#C9A84C] opacity-40" />
          <div className="absolute top-3 right-3 w-5 h-5 border-t border-r border-[#C9A84C] opacity-40" />
          <div className="absolute bottom-3 left-3 w-5 h-5 border-b border-l border-[#C9A84C] opacity-40" />
          <div className="absolute bottom-3 right-3 w-5 h-5 border-b border-r border-[#C9A84C] opacity-40" />
          <p className="font-[family-name:var(--font-mono)] text-xs tracking-[0.2em] uppercase text-[#C9A84C] mb-3">Legal</p>
          <h3 className="font-[family-name:var(--font-heading)] text-xl font-[500] tracking-[0.05em] uppercase text-white mb-4">
            Related Pages
          </h3>
          <div className="space-y-3">
            <Link href="/privacy" className="block text-sm text-white/60 hover:text-white transition-colors font-[300] tracking-wide">
              → Privacy Policy
            </Link>
            <Link href="/contact" className="block text-sm text-white/60 hover:text-white transition-colors font-[300] tracking-wide">
              → Contact Us
            </Link>
          </div>
        </div>
      </article>

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
