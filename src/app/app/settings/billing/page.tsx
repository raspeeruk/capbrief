'use client'

import { useState } from 'react'
import { useAuth } from '@/components/auth/auth-provider'

export default function BillingSettingsPage() {
  const { tier, profile } = useAuth()
  const [loading, setLoading] = useState(false)
  const [upgradeLoading, setUpgradeLoading] = useState(false)

  const openPortal = async () => {
    setLoading(true)
    try {
      const res = await fetch('/api/billing-portal', { method: 'POST' })
      const data = await res.json() as { url?: string }
      if (data.url) {
        window.location.href = data.url
      }
    } catch {
      // ignore
    } finally {
      setLoading(false)
    }
  }

  const startUpgrade = async (plan: 'pro' | 'agency') => {
    setUpgradeLoading(true)
    try {
      const res = await fetch('/api/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ plan }),
      })
      const data = await res.json() as { url?: string; error?: string }
      if (data.url) {
        window.location.href = data.url
      } else {
        alert(data.error || 'Could not start checkout')
      }
    } catch {
      alert('Could not connect to payment server')
    } finally {
      setUpgradeLoading(false)
    }
  }

  return (
    <div>
      <h2 className="font-[family-name:var(--font-heading)] text-2xl font-semibold text-[#1A1A1A] mb-1">
        Billing
      </h2>
      <p className="text-sm text-[#6B7280] mb-8">
        Manage your subscription and payment method.
      </p>

      <div className="bg-[#FAFAF8] border border-[#E2E1DE] rounded-lg p-6 max-w-[500px]">
        <div className="flex items-center justify-between mb-4">
          <div>
            <p className="text-sm font-medium text-[#1A1A1A]">
              {tier === 'pro' ? 'Professional' : tier === 'trial' ? 'Free Trial' : 'No active plan'}
            </p>
            <p className="text-xs text-[#6B7280]">
              {tier === 'pro' ? '£29/month' : tier === 'trial' ? '7-day trial' : 'Upgrade to unlock full features'}
            </p>
          </div>
          <span className={`text-xs font-medium px-2.5 py-1 rounded-full ${
            tier === 'pro' ? 'bg-[#059669]/10 text-[#059669]' :
            tier === 'trial' ? 'bg-[#0D7377]/10 text-[#0D7377]' :
            'bg-[#D97706]/10 text-[#D97706]'
          }`}>
            {tier === 'pro' ? 'Active' : tier === 'trial' ? 'Trial' : 'Inactive'}
          </span>
        </div>

        {profile?.stripe_customer_id ? (
          <button
            onClick={openPortal}
            disabled={loading}
            className="text-sm font-medium text-[#0D7377] hover:underline disabled:opacity-50"
          >
            {loading ? 'Opening...' : 'Manage subscription'}
          </button>
        ) : tier !== 'pro' ? (
          <div className="flex flex-col gap-3">
            <button
              onClick={() => startUpgrade('pro')}
              disabled={upgradeLoading}
              className="inline-block bg-[#0D7377] text-white text-sm font-medium rounded-md px-5 py-2.5 hover:bg-[#095B5E] transition-colors disabled:opacity-50 text-center"
            >
              {upgradeLoading ? 'Redirecting…' : 'Upgrade to Professional — £29/mo'}
            </button>
            <button
              onClick={() => startUpgrade('agency')}
              disabled={upgradeLoading}
              className="inline-block border border-[#0D7377] text-[#0D7377] text-sm font-medium rounded-md px-5 py-2.5 hover:bg-[#0D7377]/5 transition-colors disabled:opacity-50 text-center"
            >
              {upgradeLoading ? 'Redirecting…' : 'Upgrade to Agency — £79/mo'}
            </button>
          </div>
        ) : null}
      </div>
    </div>
  )
}
