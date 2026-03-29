'use client'

import { Suspense, useEffect, useState } from 'react'
import { useSearchParams, useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import type { CapTableDTO } from '@/types/cap'

// Inner component that uses useSearchParams — must be wrapped in Suspense
function SuccessContent() {
  const searchParams = useSearchParams()
  const router = useRouter()
  const reportId = searchParams.get('report_id')

  const [status, setStatus] = useState<'loading' | 'downloading' | 'done' | 'no-data'>('loading')
  const [errorMsg, setErrorMsg] = useState<string | null>(null)

  function triggerDownload(blob: Blob, filename: string) {
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = filename
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    URL.revokeObjectURL(url)
  }

  async function runDownloads(capTable: CapTableDTO) {
    setStatus('downloading')
    setErrorMsg(null)
    try {
      const { generateCapPdf } = await import('@/lib/export/cap-pdf-generator')
      const pdfBlob = await generateCapPdf(capTable)
      triggerDownload(
        pdfBlob,
        `${capTable.companyName.replace(/[^a-zA-Z0-9]+/g, '-')}-cap-table.pdf`
      )

      // Small delay so browsers don't block simultaneous downloads
      await new Promise(r => setTimeout(r, 800))

      const { generateCapPptx } = await import('@/lib/export/cap-pptx-generator')
      const pptxBlob = await generateCapPptx(capTable)
      triggerDownload(
        pptxBlob,
        `${capTable.companyName.replace(/[^a-zA-Z0-9]+/g, '-')}-cap-table.pptx`
      )

      setStatus('done')
    } catch (err) {
      console.error('Download failed:', err)
      setErrorMsg(err instanceof Error ? err.message : 'Download failed')
      setStatus('done')
    }
  }

  useEffect(() => {
    if (!reportId) {
      setStatus('no-data')
      return
    }

    const raw = sessionStorage.getItem(`capbrief_report_${reportId}`)
    if (!raw) {
      setStatus('no-data')
      return
    }

    let capTable: CapTableDTO
    try {
      capTable = JSON.parse(raw) as CapTableDTO
    } catch {
      setStatus('no-data')
      return
    }

    runDownloads(capTable)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [reportId])

  async function retryDownload() {
    if (!reportId) return
    const raw = sessionStorage.getItem(`capbrief_report_${reportId}`)
    if (!raw) return
    const capTable = JSON.parse(raw) as CapTableDTO
    await runDownloads(capTable)
  }

  return (
    <div className="min-h-screen bg-[#F5F0E8] flex items-center justify-center px-4">
      <div className="max-w-lg w-full text-center">
        {/* Art Deco gold rule */}
        <div className="w-16 h-0.5 bg-[#C9A84C] mx-auto mb-8" />

        {status === 'loading' && (
          <>
            <div className="w-8 h-8 border-2 border-[#C9A84C] border-t-transparent animate-spin mx-auto mb-6" />
            <p className="font-[family-name:var(--font-heading)] text-sm tracking-[0.15em] uppercase text-[#6B5B4E]">
              Preparing your downloads…
            </p>
          </>
        )}

        {status === 'downloading' && (
          <>
            <div className="w-8 h-8 border-2 border-[#C9A84C] border-t-transparent animate-spin mx-auto mb-6" />
            <h1 className="font-[family-name:var(--font-heading)] text-2xl font-[500] tracking-[0.04em] uppercase text-[#1C1917] mb-3">
              Payment Confirmed
            </h1>
            <p className="text-[#6B5B4E] font-[300] mb-2">
              Your downloads are starting now.
            </p>
            <p className="text-sm text-[#6B5B4E] font-[300]">
              PDF + PPTX files will appear in your downloads folder.
            </p>
          </>
        )}

        {status === 'done' && !errorMsg && (
          <>
            {/* Gold checkmark */}
            <div className="w-12 h-12 rounded-full border-2 border-[#C9A84C] flex items-center justify-center mx-auto mb-6">
              <svg className="w-6 h-6 text-[#C9A84C]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h1 className="font-[family-name:var(--font-heading)] text-2xl font-[500] tracking-[0.04em] uppercase text-[#1C1917] mb-3">
              Downloads Complete
            </h1>
            <p className="text-[#6B5B4E] font-[300] mb-8">
              Your cap table report has been downloaded as PDF and PPTX.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <Button onClick={retryDownload} variant="secondary" size="sm">
                Download Again
              </Button>
              <Button onClick={() => router.push('/app/upload')} size="sm">
                Analyse Another Cap Table
              </Button>
            </div>
          </>
        )}

        {status === 'done' && errorMsg && (
          <>
            <h1 className="font-[family-name:var(--font-heading)] text-2xl font-[500] tracking-[0.04em] uppercase text-[#1C1917] mb-3">
              Payment Confirmed
            </h1>
            <p className="text-[#6B5B4E] font-[300] mb-2">
              Your payment was successful, but the download encountered an issue:
            </p>
            <p className="text-sm text-red-600 font-mono mb-6">{errorMsg}</p>
            <Button onClick={retryDownload} size="sm">
              Try Download Again
            </Button>
          </>
        )}

        {status === 'no-data' && (
          <>
            <h1 className="font-[family-name:var(--font-heading)] text-2xl font-[500] tracking-[0.04em] uppercase text-[#1C1917] mb-3">
              Payment Confirmed
            </h1>
            <p className="text-[#6B5B4E] font-[300] mb-4">
              Your payment went through, but the report data is no longer in this browser session.
            </p>
            <p className="text-sm text-[#6B5B4E] font-[300] mb-8">
              This can happen if you opened Stripe in a new tab or browser. Please re-upload your CSV to regenerate the report — it only takes a moment.
            </p>
            <Button onClick={() => router.push('/app/upload')} size="sm">
              Re-upload CSV
            </Button>
          </>
        )}

        <div className="mt-12 w-16 h-0.5 bg-[#C9A84C] mx-auto" />
        <p className="mt-4 text-xs text-[#6B5B4E] font-[300]">
          Questions? Email hello@roundbrief.com
        </p>
      </div>
    </div>
  )
}

// Outer page wraps SuccessContent in Suspense (required by Next.js for useSearchParams)
export default function SuccessPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-[#F5F0E8] flex items-center justify-center">
          <div className="w-8 h-8 border-2 border-[#C9A84C] border-t-transparent animate-spin" />
        </div>
      }
    >
      <SuccessContent />
    </Suspense>
  )
}
