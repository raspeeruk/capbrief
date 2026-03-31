import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = { title: 'Message Sent | CapBrief' }

export default function ThanksPage() {
  return (
    <div className="min-h-screen bg-[#F0EFEC] flex items-center justify-center px-4">
      <div className="max-w-md w-full bg-[#FDFAF5] border border-[#D4C9B8] rounded-sm p-8 text-center">
        <h1 className="font-[family-name:var(--font-heading)] text-2xl font-semibold text-[#1C1917] mb-2">Thanks for reaching out</h1>
        <p className="text-sm text-[#6B5B4E] mb-6">We've received your message and will get back to you within 24 hours.</p>
        <Link href="/" className="text-sm font-medium bg-[#C9A84C] text-white px-6 py-2.5 rounded-sm hover:bg-[#B8930A] transition-colors inline-block">Back to homepage</Link>
      </div>
    </div>
  )
}
