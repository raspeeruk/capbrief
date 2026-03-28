import { NextRequest, NextResponse } from 'next/server'
import { autoDetectCapColumns } from '@/lib/engine/cap-pipeline'

export async function POST(req: NextRequest) {
  try {
    const { headers } = await req.json()

    if (!headers || !Array.isArray(headers)) {
      return NextResponse.json({ error: 'headers array required' }, { status: 400 })
    }

    const mapping = autoDetectCapColumns(headers)
    return NextResponse.json({ mapping })
  } catch (error) {
    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'Detection failed' },
      { status: 500 }
    )
  }
}
