'use client'

import { Suspense, useState, useCallback } from 'react'
import { useRouter } from 'next/navigation'
import { FileDropzone } from '@/components/ui/file-dropzone'
import { Button } from '@/components/ui/button'
import { Card, CardHeader, CardTitle } from '@/components/ui/card'
import { ProgressBar } from '@/components/ui/progress-bar'
import type { ParsedCSV } from '@/types'

type CapField =
  | 'name'
  | 'share_class'
  | 'shares_held'
  | 'investment_amount'
  | 'investment_date'
  | 'ignore'

const CAP_TABLE_FIELDS: { value: CapField; label: string; required?: boolean }[] = [
  { value: 'name', label: 'Shareholder Name', required: true },
  { value: 'share_class', label: 'Share Class' },
  { value: 'shares_held', label: 'Shares Held', required: true },
  { value: 'investment_amount', label: 'Investment Amount' },
  { value: 'investment_date', label: 'Investment Date' },
  { value: 'ignore', label: 'Ignore' },
]

export default function UploadPageWrapper() {
  return (
    <Suspense fallback={
      <div className="flex items-center justify-center py-24">
        <div className="w-8 h-8 border-2 border-[#C9A84C] border-t-transparent rounded-sm animate-spin" />
      </div>
    }>
      <UploadPage />
    </Suspense>
  )
}

function UploadPage() {
  const router = useRouter()
  const [file, setFile] = useState<File | null>(null)
  const [parsed, setParsed] = useState<ParsedCSV | null>(null)
  const [mapping, setMapping] = useState<Record<string, CapField>>({})
  const [processing, setProcessing] = useState(false)
  const [progress, setProgress] = useState({ step: '', progress: 0, detail: '' })
  const [error, setError] = useState<string | null>(null)
  const [pasteText, setPasteText] = useState('')

  const parseCSVText = useCallback(async (text: string, fileName?: string) => {
    setError(null)
    const Papa = (await import('papaparse')).default
    const result = Papa.parse(text, { header: false, skipEmptyLines: true })
    const rows = result.data as string[][]
    if (rows.length < 2) {
      setError('CSV must have at least a header row and one data row')
      return
    }
    const headers = rows[0].map((h: string) => (h || '').trim())
    const dataRows = rows.slice(1).filter((r: string[]) => r.some((c: string) => c?.trim()))
    setParsed({ headers, rows: dataRows, totalRows: dataRows.length, preview: dataRows.slice(0, 5) })
    if (fileName) setFile(new File([text], fileName, { type: 'text/csv' }))
    try {
      const res = await fetch('/api/detect-cap-columns', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ headers }),
      })
      const data = await res.json()
      if (data.mapping) setMapping(data.mapping)
    } catch {
      const m: Record<string, CapField> = {}
      headers.forEach(h => { m[h] = 'ignore' })
      setMapping(m)
    }
  }, [])

  const handleFileSelect = useCallback(async (selectedFile: File) => {
    setFile(selectedFile)
    const text = await selectedFile.text()
    await parseCSVText(text)
  }, [parseCSVText])

  const handlePaste = async () => {
    if (!pasteText.trim()) return
    await parseCSVText(pasteText, 'pasted-data.csv')
  }

  const updateMapping = (header: string, field: CapField) => {
    setMapping(prev => ({ ...prev, [header]: field }))
  }

  const hasNameColumn = Object.values(mapping).includes('name')
  const hasSharesColumn = Object.values(mapping).includes('shares_held')
  const canProcess = hasNameColumn && hasSharesColumn

  const handleProcess = async () => {
    if (!parsed) return
    setProcessing(true)
    setError(null)
    const csvContent = file ? await file.text() : pasteText
    try {
      const res = await fetch('/api/process-cap', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ csvContent, columnMapping: mapping }),
      })
      if (!res.ok) {
        const data = await res.json()
        throw new Error(data.error || 'Processing failed')
      }
      const reader = res.body?.getReader()
      const decoder = new TextDecoder()
      let resultId = ''
      if (reader) {
        while (true) {
          const { done, value } = await reader.read()
          if (done) break
          const text = decoder.decode(value)
          const lines = text.split('\n').filter(l => l.startsWith('data: '))
          for (const line of lines) {
            try {
              const data = JSON.parse(line.slice(6))
              if (data.type === 'progress') {
                setProgress({ step: data.step, progress: data.progress, detail: data.detail || '' })
              } else if (data.type === 'complete') {
                resultId = data.sessionId
              } else if (data.type === 'error') {
                throw new Error(data.error)
              }
            } catch (e) {
              if (e instanceof Error && e.message !== 'Unexpected end of JSON input') throw e
            }
          }
        }
      }
      if (resultId) router.push(`/app/cap-report/${resultId}`)
    } catch (e) {
      setError(e instanceof Error ? e.message : 'Something went wrong')
      setProcessing(false)
    }
  }

  const resetData = () => { setFile(null); setParsed(null); setMapping({}); setPasteText('') }

  return (
    <div className="max-w-[800px] mx-auto">
      <div className="mb-10">
        <h1 className="font-[family-name:var(--font-heading)] text-3xl font-[500] tracking-[0.05em] uppercase text-[#1C1917] mb-3">
          Upload Cap Table
        </h1>
        <p className="text-[#6B5B4E] font-[300] tracking-wide">
          Drop a CSV from Companies House, Carta, Seedlegals, or any spreadsheet. Map the columns and we handle the rest.
        </p>
      </div>

      {!parsed && (
        <div className="mb-6 p-4 border border-[#D4C9B8] bg-[#FDFAF5] text-xs text-[#6B5B4E] font-[300]">
          <p className="font-[family-name:var(--font-mono)] font-[500] text-[#1C1917] mb-1 text-[10px] uppercase tracking-[0.1em]">Expected format</p>
          <p className="font-[family-name:var(--font-mono)]">Name, Share Class, Shares Held, Investment Amount, Date</p>
          <p className="mt-1">Only Name and Shares Held are required.</p>
        </div>
      )}

      {!parsed && (
        <div className="space-y-6">
          <FileDropzone onFileSelect={handleFileSelect} disabled={processing} />
          <div className="relative">
            <div className="absolute inset-0 flex items-center" aria-hidden="true">
              <div className="w-full border-t border-[#D4C9B8]" />
            </div>
            <div className="relative flex justify-center">
              <span className="bg-[#F5F0E8] px-3 text-sm text-[#6B5B4E] font-[300]">or paste your data</span>
            </div>
          </div>
          <div>
            <textarea
              value={pasteText}
              onChange={e => setPasteText(e.target.value)}
              placeholder={"Paste CSV data here...\n\nName,Share Class,Shares Held,Investment Amount,Date\nSarah Chen,Ordinary,4500000,,\nSequoia Capital,Preferred A,3000000,2500000,2024-03-15"}
              className="w-full h-40 border border-[#D4C9B8] p-4 text-sm font-[family-name:var(--font-mono)] bg-[#FDFAF5] text-[#1C1917] placeholder:text-[#6B5B4E]/40 focus:outline-none focus:border-[#C9A84C] resize-y"
              disabled={processing}
            />
            {pasteText.trim() && (
              <div className="mt-3 flex justify-end">
                <Button size="sm" onClick={handlePaste}>Parse pasted data</Button>
              </div>
            )}
          </div>
        </div>
      )}

      {parsed && !processing && (
        <div className="space-y-6">
          <Card>
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium text-[#1C1917] font-[family-name:var(--font-heading)] text-sm tracking-wide uppercase">{file?.name || 'Pasted data'}</p>
                <p className="text-sm text-[#6B5B4E] font-[300] mt-0.5">{parsed.totalRows} rows, {parsed.headers.length} columns</p>
              </div>
              <Button variant="ghost" size="sm" onClick={resetData}>Change file</Button>
            </div>
          </Card>

          <Card padding="lg">
            <CardHeader>
              <CardTitle>Map Your Columns</CardTitle>
              <p className="text-sm text-[#6B5B4E] mt-1 font-[300]">
                Map at minimum <strong>Shareholder Name</strong> and <strong>Shares Held</strong>. Everything else improves AI analysis.
              </p>
            </CardHeader>
            <div className="mt-6 space-y-3">
              {parsed.headers.map(header => (
                <div key={header} className="flex items-center gap-4">
                  <span className="w-48 text-sm font-[family-name:var(--font-mono)] text-[#6B5B4E] truncate" title={header}>{header}</span>
                  <svg className="w-4 h-4 text-[#D4C9B8] flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                  <select
                    value={mapping[header] || 'ignore'}
                    onChange={e => updateMapping(header, e.target.value as CapField)}
                    className="flex-1 text-sm border border-[#D4C9B8] px-3 py-2 bg-[#FDFAF5] text-[#1C1917] focus:outline-none focus:border-[#C9A84C]"
                  >
                    {CAP_TABLE_FIELDS.map(f => (
                      <option key={f.value} value={f.value}>{f.label}{f.required ? ' *' : ''}</option>
                    ))}
                  </select>
                </div>
              ))}
            </div>
            <p className="mt-4 text-xs text-[#6B5B4E] font-[300]">* Required</p>
          </Card>

          <Card padding="lg">
            <CardHeader>
              <CardTitle>Data Preview</CardTitle>
              <p className="text-sm text-[#6B5B4E] mt-1 font-[300]">First 5 rows</p>
            </CardHeader>
            <div className="mt-6 overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-[#D4C9B8]">
                    {parsed.headers.map(h => (
                      <th key={h} className="text-left py-2 px-3 font-[family-name:var(--font-heading)] font-[500] text-[#1C1917] whitespace-nowrap text-xs uppercase tracking-wider">{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {parsed.preview.map((row, i) => (
                    <tr key={i} className="border-b border-[#D4C9B8]/50">
                      {row.map((cell, j) => (
                        <td key={j} className="py-2 px-3 font-[family-name:var(--font-mono)] text-xs text-[#6B5B4E] whitespace-nowrap max-w-[200px] truncate">{cell || '\u2014'}</td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>

          {error && <div className="border border-red-200 bg-red-50 p-4 text-sm text-red-700">{error}</div>}

          <div className="flex justify-end">
            <Button size="lg" onClick={handleProcess} disabled={!canProcess}>
              {!canProcess ? 'Map Name and Shares Held columns first' : 'Process cap table'}
            </Button>
          </div>
        </div>
      )}

      {processing && (
        <Card padding="lg">
          <div className="text-center py-8">
            <div className="mb-6">
              <div className="w-16 h-16 mx-auto mb-4 border border-[#C9A84C] flex items-center justify-center">
                <svg className="w-8 h-8 text-[#C9A84C] animate-spin" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                </svg>
              </div>
              <h3 className="font-[family-name:var(--font-heading)] text-lg font-[500] tracking-[0.04em] uppercase mb-2">
                {progress.step || 'Processing...'}
              </h3>
              {progress.detail && <p className="text-sm text-[#6B5B4E] font-[300]">{progress.detail}</p>}
            </div>
            <ProgressBar progress={progress.progress} />
          </div>
        </Card>
      )}
    </div>
  )
}
