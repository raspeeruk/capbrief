import Link from 'next/link'
import { createClient } from '@/lib/supabase/server'
import { getUserTier, getTrialDaysLeft } from '@/lib/auth/tier'
import { redirect } from 'next/navigation'

export default async function DashboardPage() {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()

  if (!user) redirect('/auth/login')

  const { data: profile } = await supabase
    .from('profiles')
    .select('*')
    .eq('id', user.id)
    .single()

  const tier = getUserTier(profile)
  const trialDays = getTrialDaysLeft(profile)

  // Fetch cap sessions from Supabase if available
  let capSessions: Array<{ id: string; created_at: string; cap_table: { companyName: string; inferenceStats: { totalShareholders: number } } | null }> = []
  try {
    const { data } = await supabase
      .from('cap_sessions')
      .select('id, created_at, cap_table')
      .eq('user_id', user.id)
      .order('created_at', { ascending: false })
      .limit(20)
    capSessions = data || []
  } catch {
    // Table may not exist yet — that's OK
  }

  return (
    <div className="max-w-[900px] mx-auto">
      {/* Trial banner */}
      {tier === 'trial' && (
        <div className="mb-6 border border-[#C9A84C]/30 bg-[#C9A84C]/5 px-5 py-4 flex items-center justify-between">
          <div>
            <p className="text-sm font-[500] text-[#1C1917]">
              Free trial — {trialDays} day{trialDays !== 1 ? 's' : ''} remaining
            </p>
            <p className="text-xs text-[#6B5B4E] font-[300] mt-0.5">
              Upgrade to remove PDF watermarks and unlock unlimited reports.
            </p>
          </div>
          <a href="/api/checkout" className="text-sm font-[family-name:var(--font-heading)] tracking-[0.06em] uppercase text-[#C9A84C] hover:underline">
            Upgrade to Pro
          </a>
        </div>
      )}

      {tier === 'trial_expired' && (
        <div className="mb-6 border border-[#D97706]/30 bg-[#D97706]/5 px-5 py-4 flex items-center justify-between">
          <div>
            <p className="text-sm font-[500] text-[#1C1917]">Your free trial has ended</p>
            <p className="text-xs text-[#6B5B4E] font-[300] mt-0.5">
              PDF exports now include a watermark. Upgrade to restore clean exports.
            </p>
          </div>
          <a
            href="/api/checkout"
            className="font-[family-name:var(--font-heading)] text-xs tracking-[0.08em] uppercase bg-[#C9A84C] text-[#1C1917] px-4 py-2 hover:bg-[#B8930A] transition-colors"
          >
            Upgrade now
          </a>
        </div>
      )}

      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="font-[family-name:var(--font-heading)] text-2xl font-[500] tracking-[0.04em] uppercase text-[#1C1917]">
            Cap Table Reports
          </h1>
          <p className="text-sm text-[#6B5B4E] font-[300] mt-1">
            {capSessions.length === 0
              ? 'Upload a cap table CSV to create your first report.'
              : `${capSessions.length} report${capSessions.length !== 1 ? 's' : ''}`
            }
          </p>
        </div>
        <Link
          href="/app/upload"
          className="font-[family-name:var(--font-heading)] text-xs tracking-[0.08em] uppercase bg-[#C9A84C] text-[#1C1917] px-5 py-2.5 hover:bg-[#B8930A] transition-colors"
        >
          New report
        </Link>
      </div>

      {/* Reports list */}
      {capSessions.length > 0 && (
        <div className="space-y-2 border border-[#D4C9B8]">
          {capSessions.map((session, i) => (
            <Link
              key={session.id}
              href={`/app/cap-report/${session.id}`}
              className={`flex items-center justify-between px-5 py-4 hover:bg-[#C9A84C]/5 transition-colors ${i < capSessions.length - 1 ? 'border-b border-[#D4C9B8]' : ''} bg-[#FDFAF5]`}
            >
              <div>
                <h3 className="font-[family-name:var(--font-heading)] text-sm font-[500] tracking-[0.03em] uppercase text-[#1C1917]">
                  {session.cap_table?.companyName || 'Unnamed Report'}
                </h3>
                <p className="text-xs text-[#6B5B4E] font-[300] mt-0.5">
                  {session.cap_table?.inferenceStats.totalShareholders ?? 0} shareholders &middot;{' '}
                  {new Date(session.created_at).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })}
                </p>
              </div>
              <svg className="w-4 h-4 text-[#C9A84C]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
              </svg>
            </Link>
          ))}
        </div>
      )}

      {/* Empty state */}
      {capSessions.length === 0 && (
        <div className="text-center py-16 border border-[#D4C9B8] bg-[#FDFAF5] relative overflow-hidden">
          {/* Corner ornaments */}
          <div className="absolute top-3 left-3 w-5 h-5 border-t border-l border-[#C9A84C] opacity-30" />
          <div className="absolute top-3 right-3 w-5 h-5 border-t border-r border-[#C9A84C] opacity-30" />
          <div className="absolute bottom-3 left-3 w-5 h-5 border-b border-l border-[#C9A84C] opacity-30" />
          <div className="absolute bottom-3 right-3 w-5 h-5 border-b border-r border-[#C9A84C] opacity-30" />

          <div className="w-12 h-12 border border-[#C9A84C]/30 flex items-center justify-center mx-auto mb-4">
            <svg className="w-6 h-6 text-[#C9A84C]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
            </svg>
          </div>
          <h3 className="font-[family-name:var(--font-heading)] text-lg font-[500] tracking-[0.04em] uppercase text-[#1C1917] mb-2">
            No reports yet
          </h3>
          <p className="text-sm text-[#6B5B4E] font-[300] mb-6">
            Upload a cap table CSV to generate your first equity report.
          </p>
          <Link
            href="/app/upload"
            className="inline-block font-[family-name:var(--font-heading)] text-xs tracking-[0.08em] uppercase bg-[#C9A84C] text-[#1C1917] px-6 py-2.5 hover:bg-[#B8930A] transition-colors"
          >
            Upload cap table
          </Link>
        </div>
      )}
    </div>
  )
}
