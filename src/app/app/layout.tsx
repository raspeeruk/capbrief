'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { StepIndicator } from '@/components/ui/step-indicator'
import { AuthProvider, useAuth } from '@/components/auth/auth-provider'
import type { Step } from '@/components/ui/step-indicator'

const ORG_CHART_STEPS: Step[] = [
  { id: 'upload', label: 'Upload' },
  { id: 'review', label: 'Review' },
  { id: 'chart', label: 'Chart' },
  { id: 'export', label: 'Export' },
]

const REPORT_STEPS: Step[] = [
  { id: 'upload', label: 'Upload' },
  { id: 'report', label: 'Edit Report' },
  { id: 'export', label: 'Export' },
]

function getCurrentStep(pathname: string): string {
  if (pathname.includes('/upload')) return 'upload'
  if (pathname.includes('/report')) return 'report'
  if (pathname.includes('/review')) return 'review'
  if (pathname.includes('/chart')) return 'chart'
  if (pathname.includes('/export')) return 'export'
  return 'upload'
}

function getCompletedSteps(current: string, steps: Step[]): string[] {
  const order = steps.map(s => s.id)
  const idx = order.indexOf(current)
  return order.slice(0, idx)
}

function AppNav() {
  const pathname = usePathname()
  const { user, tier, trialDaysLeft, signOut } = useAuth()
  const [menuOpen, setMenuOpen] = useState(false)

  const isDashboard = pathname === '/app/dashboard'
  const isSettings = pathname.startsWith('/app/settings')
  const isReportMode = pathname.includes('/report')
  const showSteps = !isDashboard && !isSettings

  const steps = isReportMode ? REPORT_STEPS : ORG_CHART_STEPS
  const currentStep = getCurrentStep(pathname)
  const completedSteps = getCompletedSteps(currentStep, steps)

  return (
    <nav className="bg-[#FDFAF5] border-b border-[#D4C9B8]">
      <div className="max-w-[1200px] mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-6">
          <Link href="/app/dashboard" className="font-[family-name:var(--font-heading)] text-lg font-[700] tracking-[0.1em] uppercase text-[#1C1917]">
            CapBrief
          </Link>
          {user && (
            <Link href="/app/dashboard" className="text-sm text-[#6B5B4E] hover:text-[#1C1917] transition-colors font-[300] tracking-wide">
              My Reports
            </Link>
          )}
        </div>

        {showSteps && (
          <StepIndicator
            steps={steps}
            currentStep={currentStep}
            completedSteps={completedSteps}
          />
        )}

        <div className="flex items-center gap-4">
          {/* Trial badge */}
          {tier === 'trial' && trialDaysLeft > 0 && (
            <span className="text-xs font-medium bg-[#0D7377]/10 text-[#0D7377] px-2.5 py-1 rounded-full">
              {trialDaysLeft}d trial
            </span>
          )}
          {tier === 'trial_expired' && (
            <span className="text-xs font-medium bg-[#D97706]/10 text-[#D97706] px-2.5 py-1 rounded-full">
              Trial ended
            </span>
          )}
          {tier === 'pro' && (
            <span className="text-xs font-medium bg-[#059669]/10 text-[#059669] px-2.5 py-1 rounded-full">
              Pro
            </span>
          )}

          {/* User menu */}
          {user ? (
            <div className="relative">
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="w-8 h-8 rounded-full bg-[#0D7377] text-white text-xs font-semibold flex items-center justify-center hover:bg-[#095B5E] transition-colors"
              >
                {user.email?.charAt(0).toUpperCase() || '?'}
              </button>
              {menuOpen && (
                <>
                  <div className="fixed inset-0 z-40" onClick={() => setMenuOpen(false)} />
                  <div className="absolute right-0 top-10 z-50 bg-white border border-[#E2E1DE] rounded-lg shadow-lg py-1.5 w-52">
                    <div className="px-3 py-2 border-b border-[#E2E1DE]">
                      <p className="text-xs text-[#6B7280] truncate">{user.email}</p>
                    </div>
                    <Link
                      href="/app/settings"
                      onClick={() => setMenuOpen(false)}
                      className="block px-3 py-2 text-sm text-[#1A1A1A] hover:bg-[#F0EFEC] transition-colors"
                    >
                      Account
                    </Link>
                    <Link
                      href="/app/settings/branding"
                      onClick={() => setMenuOpen(false)}
                      className="block px-3 py-2 text-sm text-[#1A1A1A] hover:bg-[#F0EFEC] transition-colors"
                    >
                      Branding
                    </Link>
                    <Link
                      href="/app/settings/billing"
                      onClick={() => setMenuOpen(false)}
                      className="block px-3 py-2 text-sm text-[#1A1A1A] hover:bg-[#F0EFEC] transition-colors"
                    >
                      Billing
                    </Link>
                    <div className="border-t border-[#E2E1DE] mt-1.5 pt-1.5">
                      <button
                        onClick={() => { setMenuOpen(false); signOut() }}
                        className="block w-full text-left px-3 py-2 text-sm text-[#DC2626] hover:bg-[#F0EFEC] transition-colors"
                      >
                        Sign out
                      </button>
                    </div>
                  </div>
                </>
              )}
            </div>
          ) : (
            <Link href="/auth/login" className="text-sm text-[#0D7377] font-medium hover:underline">
              Sign in
            </Link>
          )}
        </div>
      </div>
    </nav>
  )
}

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <AuthProvider>
      <div className="min-h-screen bg-[#F5F0E8]">
        <AppNav />
        <main className="max-w-[1200px] mx-auto px-6 py-10">
          {children}
        </main>
      </div>
    </AuthProvider>
  )
}
