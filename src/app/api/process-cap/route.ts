import { NextRequest } from 'next/server'
import { nanoid } from 'nanoid'
import { runCapPipeline } from '@/lib/engine/cap-pipeline'
import { createClient } from '@/lib/supabase/server'

// In-memory cap session store (mirrors session-store pattern)
const capSessionStore = new Map<string, unknown>()

export function getCapSession(id: string) {
  return capSessionStore.get(id) || null
}

export async function POST(req: NextRequest) {
  try {
    const { csvContent, columnMapping } = await req.json() as {
      csvContent: string
      columnMapping: Record<string, string>
    }

    if (!csvContent || !columnMapping) {
      return new Response(
        JSON.stringify({ error: 'csvContent and columnMapping required' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      )
    }

    // Get current user (optional — demo mode if no auth)
    const supabase = await createClient()
    const { data: { user } } = await supabase.auth.getUser()

    const sessionId = nanoid(12)
    const encoder = new TextEncoder()

    const stream = new ReadableStream({
      async start(controller) {
        const send = (data: Record<string, unknown>) => {
          controller.enqueue(encoder.encode(`data: ${JSON.stringify(data)}\n\n`))
        }

        try {
          const capTable = await runCapPipeline(
            csvContent,
            columnMapping,
            (progress) => {
              send({ type: 'progress', ...progress })
            }
          )

          // Store the cap session
          capSessionStore.set(sessionId, {
            id: sessionId,
            status: 'ready',
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString(),
            capTable,
            columnMapping,
            userId: user?.id || null,
          })

          // Also try to persist to Supabase if available
          if (user) {
            try {
              await supabase.from('cap_sessions').upsert({
                id: sessionId,
                user_id: user.id,
                cap_table: capTable,
                column_mapping: columnMapping,
                created_at: new Date().toISOString(),
              })
            } catch {
              // Supabase table may not exist yet — that's OK, in-memory fallback works
            }
          }

          send({ type: 'complete', sessionId })
        } catch (error) {
          send({ type: 'error', error: error instanceof Error ? error.message : 'Processing failed' })
        } finally {
          controller.close()
        }
      },
    })

    return new Response(stream, {
      headers: {
        'Content-Type': 'text/event-stream',
        'Cache-Control': 'no-cache',
        'Connection': 'keep-alive',
      },
    })
  } catch (error) {
    return new Response(
      JSON.stringify({ error: error instanceof Error ? error.message : 'Processing failed' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    )
  }
}
