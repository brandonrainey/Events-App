import stripe from 'stripe'
import { NextResponse } from 'next/server'
import { createOrder } from '@/lib/actions/order.actions'

export async function POST(request: Request) {
  const body = await request.text()

  const sig = request.headers.get('stripe-signature') as string
  const endpointSecret = process.env.STRIPE_WEBHOOK_SECRET!

  let event

  try {
    event = stripe.webhooks.constructEvent(body, sig, endpointSecret)
  } catch (err) {
    return NextResponse.json({ message: 'Webhook error', error: err })
  }

  // Get the ID and type
  const eventType = event.type

  // CREATE
  if (eventType === 'checkout.session.completed') {
    const { id, amount_total, metadata } = event.data.object

    // Check if eventId and buyerId are present and not empty
    if (!metadata?.eventId || !metadata?.buyerId) {
      console.error('Missing eventId or buyerId in metadata');
      return NextResponse.json({ message: 'Missing required metadata', status: 'error' });
  }

    const order = {
      stripeId: id,
      eventId: metadata?.eventId,
      buyerId: metadata?.buyerId,
      totalAmount: amount_total ? (amount_total / 100).toString() : '0',
      createdAt: new Date(),
    }

    console.log('Creating order', order)

    const newOrder = await createOrder(order)

    console.log('Created order', newOrder)
    return NextResponse.json({ message: 'OK', order: newOrder })
  }

  return new Response('', { status: 200 })
}