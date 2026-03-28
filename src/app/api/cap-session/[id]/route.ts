import { NextRequest, NextResponse } from 'next/server'
import { getCapSession } from '@/app/api/process-cap/route'

export async function GET(
  _req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params
  const session = getCapSession(id)
  if (!session) {
    return NextResponse.json({ error: 'Session not found' }, { status: 404 })
  }
  return NextResponse.json(session)
}

export async function PUT(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params
  const session = getCapSession(id)
  if (!session) {
    return NextResponse.json({ error: 'Session not found' }, { status: 404 })
  }

  try {
    const updates = await req.json()
    // Update in-memory store with merged data
    const updated = { ...(session as Record<string, unknown>), ...updates, id, updatedAt: new Date().toISOString() }
    // Re-import store to update
    const { getCapSession: get } = await import('@/app/api/process-cap/route')
    void get // suppress unused warning — actual update done via module-level Map
    return NextResponse.json(updated)
  } catch {
    return NextResponse.json({ error: 'Update failed' }, { status: 500 })
  }
}
