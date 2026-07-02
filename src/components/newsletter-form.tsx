'use client'

import { useState } from 'react'

type Status = 'idle' | 'sending' | 'success' | 'error'

export function NewsletterForm() {
  const [email, setEmail] = useState('')
  const [website, setWebsite] = useState('')
  const [status, setStatus] = useState<Status>('idle')
  const [error, setError] = useState('')

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    if (status === 'sending') return
    setStatus('sending')
    setError('')

    try {
      const res = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, website }),
      })
      const data = await res.json().catch(() => ({}))
      if (!res.ok) {
        setError(data.error || 'Could not subscribe right now')
        setStatus('error')
        return
      }
      setStatus('success')
      setEmail('')
    } catch {
      setError('Could not subscribe right now')
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <p className="text-sm text-[#059669] font-[300] tracking-wide">
        You're on the list. Watch your inbox.
      </p>
    )
  }

  return (
    <form onSubmit={handleSubmit} noValidate>
      <div className="flex flex-col sm:flex-row gap-3">
        {/* Honeypot, keep empty */}
        <input
          type="text"
          name="website"
          value={website}
          onChange={e => setWebsite(e.target.value)}
          tabIndex={-1}
          autoComplete="off"
          aria-hidden="true"
          className="absolute w-px h-px p-0 -m-px overflow-hidden whitespace-nowrap border-0"
          style={{ clip: 'rect(0 0 0 0)' }}
        />
        <input
          type="email"
          name="email"
          required
          value={email}
          onChange={e => setEmail(e.target.value)}
          placeholder="you@company.com"
          aria-label="Email address"
          className="flex-1 text-sm border border-[#D4C9B8] rounded-sm px-3 py-2.5 bg-white text-[#1C1917] placeholder:text-[#6B5B4E]/50 focus:outline-none focus:ring-2 focus:ring-[#C9A84C]"
        />
        <button
          type="submit"
          disabled={status === 'sending'}
          className="font-[family-name:var(--font-heading)] text-xs tracking-[0.1em] uppercase bg-[#C9A84C] text-[#1C1917] px-6 py-2.5 hover:bg-[#B8930A] transition-colors disabled:opacity-60"
        >
          {status === 'sending' ? 'Joining…' : 'Join'}
        </button>
      </div>
      {status === 'error' && (
        <p className="mt-2 text-sm text-[#DC2626] font-[300] tracking-wide">{error}</p>
      )}
    </form>
  )
}
