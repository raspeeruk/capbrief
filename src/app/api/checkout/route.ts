import Stripe from 'stripe'
import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@/lib/supabase/server'

export async function POST(req: NextRequest) {
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!)
  const origin = req.headers.get('origin') || 'https://roundbrief.com'

  const body = await req.json() as { reportId?: string; plan?: 'pro' | 'agency' }
  const { reportId, plan } = body

  // Subscription checkout (pro/agency plan upgrade)
  if (plan === 'pro' || plan === 'agency') {
    const supabase = await createClient()
    const { data: { user } } = await supabase.auth.getUser()

    if (!user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const priceId = plan === 'pro'
      ? process.env.STRIPE_PRICE_ID_PRO!
      : process.env.STRIPE_PRICE_ID_AGENCY!

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [{ price: priceId, quantity: 1 }],
      mode: 'subscription',
      success_url: `${origin}/app/settings/billing?upgraded=1`,
      cancel_url: `${origin}/app/settings/billing`,
      metadata: { userId: user.id, plan },
      customer_email: user.email,
    })

    return NextResponse.json({ url: session.url })
  }

  // One-time report download checkout (£19 per report)
  if (!reportId) {
    return NextResponse.json({ error: 'Missing reportId' }, { status: 400 })
  }

  const session = await stripe.checkout.sessions.create({
    payment_method_types: ['card'],
    line_items: [{
      price: process.env.STRIPE_PRICE_ID_REPORT!,
      quantity: 1,
    }],
    mode: 'payment',
    success_url: `${origin}/app/success?session_id={CHECKOUT_SESSION_ID}&report_id=${reportId}`,
    cancel_url: `${origin}/app/cap-report/${reportId}`,
    metadata: { reportId },
  })

  return NextResponse.json({ url: session.url })
}
