import type { Metadata } from 'next'
import Link from 'next/link'

export const dynamic = 'force-static'

export const metadata: Metadata = {
  title: 'Privacy Policy | CapBrief',
  description: 'How CapBrief collects, uses, and protects your account details, cap table data, and site usage information under UK GDPR.',
  openGraph: {
    title: 'Privacy Policy | CapBrief',
    description: 'How CapBrief collects, uses, and protects your account details, cap table data, and site usage information under UK GDPR.',
    type: 'website',
  },
}

const sections = [
  {
    number: '01',
    title: 'Who We Are',
    body: (
      <>
        <p className="text-[#6B5B4E] text-base font-[300] tracking-wide leading-relaxed mb-6">
          CapBrief is operated by <strong className="text-[#1C1917] font-[400]">Two Cores Operations Ltd</strong>, a
          company registered in England and Wales. We are the data controller for the personal data described in this
          policy, which covers the CapBrief service at roundbrief.com.
        </p>
        <p className="text-[#6B5B4E] text-base font-[300] tracking-wide leading-relaxed">
          If you have any question about this policy or your data, reach us through the{' '}
          <Link href="/contact" className="text-[#1C1917] underline decoration-[#C9A84C] underline-offset-4 hover:text-[#C9A84C] transition-colors">contact page</Link>.
        </p>
      </>
    ),
  },
  {
    number: '02',
    title: 'What We Collect',
    body: (
      <>
        <p className="text-[#6B5B4E] text-base font-[300] tracking-wide leading-relaxed mb-6">
          We collect only what the service needs to run:
        </p>
        <ul className="space-y-3 mb-6">
          {[
            ['Account data.', 'Your email address and password when you create an account, plus an optional company name. Passwords are handled by our authentication provider and are never visible to us.'],
            ['Cap table and shareholder data.', 'The CSV files you upload and any corrections you make in the app: shareholder names, share counts, share classes, investment amounts, and dates. You control this content, and we process it only to produce your briefs and reports.'],
            ['Branding assets.', 'If you use white label features, the logo, company details, and accent colour you provide for your exports.'],
            ['Payment data.', 'Payments are processed by Stripe on its own checkout pages. We store your Stripe customer reference and subscription status. Your card details never touch our servers.'],
            ['Usage data.', 'We use Google Analytics 4 to understand how the site is used: pages visited, device type, and approximate location derived from your IP address.'],
            ['Newsletter email.', 'If you subscribe to The Brief in the site footer, we collect the email address you enter.'],
            ['Contact messages.', 'If you use the contact form, we collect your name, email address, and message so we can reply.'],
          ].map(([term, desc]) => (
            <li key={term} className="flex gap-3 text-[#6B5B4E] text-base font-[300] tracking-wide leading-relaxed">
              <span className="w-1.5 h-1.5 bg-[#C9A84C] mt-2.5 shrink-0" aria-hidden />
              <span><strong className="text-[#1C1917] font-[400]">{term}</strong> {desc}</span>
            </li>
          ))}
        </ul>
      </>
    ),
  },
  {
    number: '03',
    title: 'How We Use Your Data',
    body: (
      <>
        <p className="text-[#6B5B4E] text-base font-[300] tracking-wide leading-relaxed mb-6">
          We use account and cap table data to provide the service you signed up for (performance of a contract). The
          shareholder data you enter is processed only to produce your briefs and reports. It is never sold, shared for
          advertising, or used for any purpose beyond generating your output and operating the service.
        </p>
        <p className="text-[#6B5B4E] text-base font-[300] tracking-wide leading-relaxed">
          We use usage data to keep the site working, improve it, and protect it from abuse (legitimate interests). We
          send the newsletter only if you subscribed (consent), and you can unsubscribe at any time. Contact messages
          are used solely to answer your enquiry.
        </p>
      </>
    ),
  },
  {
    number: '04',
    title: 'AI Processing',
    body: (
      <p className="text-[#6B5B4E] text-base font-[300] tracking-wide leading-relaxed">
        To detect columns and infer missing details such as share classes, rows from your uploaded CSV are sent to
        Anthropic&apos;s Claude API for processing. The results come straight back to your session. Your cap table data
        is not used to train AI models.
      </p>
    ),
  },
  {
    number: '05',
    title: 'Third Parties We Rely On',
    body: (
      <>
        <p className="text-[#6B5B4E] text-base font-[300] tracking-wide leading-relaxed mb-6">
          We share data only with the service providers that run CapBrief, and only so they can perform their function
          for us:
        </p>
        <ul className="space-y-3 mb-6">
          {[
            ['Supabase', 'database, authentication, and file storage for your account and reports.'],
            ['Stripe', 'payment processing for subscriptions and one time purchases.'],
            ['Netlify', 'website hosting, and form handling for newsletter signups.'],
            ['Google Analytics', 'aggregated usage statistics.'],
            ['Anthropic', 'AI processing of uploaded cap table rows, as described above.'],
            ['Resend', 'email delivery for contact form messages.'],
          ].map(([name, role]) => (
            <li key={name} className="flex gap-3 text-[#6B5B4E] text-base font-[300] tracking-wide leading-relaxed">
              <span className="w-1.5 h-1.5 bg-[#C9A84C] mt-2.5 shrink-0" aria-hidden />
              <span><strong className="text-[#1C1917] font-[400]">{name}:</strong> {role}</span>
            </li>
          ))}
        </ul>
        <p className="text-[#6B5B4E] text-base font-[300] tracking-wide leading-relaxed">
          Some of these providers process data outside the UK. Where they do, transfers are protected by recognised
          safeguards such as adequacy decisions or standard contractual clauses.
        </p>
      </>
    ),
  },
  {
    number: '06',
    title: 'Cookies',
    body: (
      <p className="text-[#6B5B4E] text-base font-[300] tracking-wide leading-relaxed">
        We use essential cookies to keep you signed in to your account, and Google Analytics cookies to measure site
        usage. We do not use advertising cookies.
      </p>
    ),
  },
  {
    number: '07',
    title: 'Retention',
    body: (
      <>
        <p className="text-[#6B5B4E] text-base font-[300] tracking-wide leading-relaxed mb-6">
          We keep your account data for as long as your account is open. Reports, uploaded cap table data, and branding
          assets are kept until you delete them or close your account, at which point they are removed. You can delete
          any report from the app at any time.
        </p>
        <p className="text-[#6B5B4E] text-base font-[300] tracking-wide leading-relaxed">
          Demo sessions created without an account expire automatically after around two hours. Newsletter emails are
          kept until you unsubscribe. Contact messages are kept only as long as needed to handle your enquiry.
        </p>
      </>
    ),
  },
  {
    number: '08',
    title: 'Your Rights',
    body: (
      <>
        <p className="text-[#6B5B4E] text-base font-[300] tracking-wide leading-relaxed mb-6">
          Under UK GDPR you have the right to access the personal data we hold about you, to have it corrected, and to
          have it deleted. You can also ask us to restrict processing, object to processing, or provide your data in a
          portable format.
        </p>
        <p className="text-[#6B5B4E] text-base font-[300] tracking-wide leading-relaxed">
          To exercise any of these rights, contact us through the{' '}
          <Link href="/contact" className="text-[#1C1917] underline decoration-[#C9A84C] underline-offset-4 hover:text-[#C9A84C] transition-colors">contact page</Link>.
          If you are unhappy with how we handle your data, you can complain to the Information Commissioner&apos;s
          Office (ICO) in the UK.
        </p>
      </>
    ),
  },
  {
    number: '09',
    title: 'Security',
    body: (
      <p className="text-[#6B5B4E] text-base font-[300] tracking-wide leading-relaxed">
        Data is encrypted in transit and stored with row level access controls, so your reports and cap table data can
        only be read by your own account. Access to production systems is limited to what is needed to operate the
        service.
      </p>
    ),
  },
  {
    number: '10',
    title: 'Changes to This Policy',
    body: (
      <p className="text-[#6B5B4E] text-base font-[300] tracking-wide leading-relaxed">
        If we change this policy, we will post the updated version on this page with a revised date at the top. If a
        change materially affects how we handle your data, we will take reasonable steps to bring it to your attention.
      </p>
    ),
  },
]

export default function PrivacyPage() {
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
            Privacy Policy
          </p>
          <h1 className="font-[family-name:var(--font-heading)] text-4xl font-[700] tracking-[0.05em] uppercase text-white mb-6 leading-tight">
            Privacy Policy
          </h1>
          <p className="text-lg text-white/60 leading-relaxed font-[300] tracking-wide mb-8">
            Your cap table is one of the most sensitive documents your company has. This policy explains exactly what
            we collect, why we collect it, who touches it, and how you stay in control.
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
            <Link href="/terms" className="block text-sm text-white/60 hover:text-white transition-colors font-[300] tracking-wide">
              → Terms of Service
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
