import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact Us | CapBrief',
  description: 'Get in touch with the CapBrief team.',
}

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[#F0EFEC] flex items-center justify-center px-4 py-16">
      <div className="max-w-2xl w-full">
        <div className="text-center mb-8">
          <Link href="/" className="font-[family-name:var(--font-heading)] text-2xl font-semibold text-[#1C1917]">CapBrief</Link>
        </div>
        <div className="bg-[#FDFAF5] border border-[#D4C9B8] rounded-sm p-8">
          <h1 className="font-[family-name:var(--font-heading)] text-xl font-semibold text-[#1C1917] mb-1">Get in touch</h1>
          <p className="text-sm text-[#6B5B4E] mb-6">Have a question or need help? We'll get back to you within 24 hours.</p>

          <form name="contact" method="POST" data-netlify="true" netlify-honeypot="bot-field" action="/contact/thanks">
            <input type="hidden" name="form-name" value="contact" />
            <p className="hidden"><label>Don't fill this out: <input name="bot-field" /></label></p>

            <label className="block text-xs font-medium text-[#6B5B4E] uppercase tracking-wide mb-1.5">Name</label>
            <input name="name" type="text" required placeholder="Your name" className="w-full text-sm border border-[#D4C9B8] rounded-sm px-3 py-2.5 bg-white text-[#1C1917] placeholder:text-[#6B5B4E]/50 focus:outline-none focus:ring-2 focus:ring-[#C9A84C] mb-4" />

            <label className="block text-xs font-medium text-[#6B5B4E] uppercase tracking-wide mb-1.5">Email</label>
            <input name="email" type="email" required placeholder="you@company.com" className="w-full text-sm border border-[#D4C9B8] rounded-sm px-3 py-2.5 bg-white text-[#1C1917] placeholder:text-[#6B5B4E]/50 focus:outline-none focus:ring-2 focus:ring-[#C9A84C] mb-4" />

            <label className="block text-xs font-medium text-[#6B5B4E] uppercase tracking-wide mb-1.5">Message</label>
            <textarea name="message" rows={5} required placeholder="How can we help?" className="w-full text-sm border border-[#D4C9B8] rounded-sm px-3 py-2.5 bg-white text-[#1C1917] placeholder:text-[#6B5B4E]/50 focus:outline-none focus:ring-2 focus:ring-[#C9A84C] resize-none mb-6" />

            <button type="submit" className="bg-[#C9A84C] text-white text-sm font-medium rounded-sm px-8 py-2.5 hover:bg-[#B8930A] transition-colors">Send message</button>
          </form>
        </div>
      </div>
    </div>
  )
}
