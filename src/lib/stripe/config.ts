import { loadStripe, Stripe } from '@stripe/stripe-js'

let stripePromise: Promise<Stripe | null> | null = null

export function getStripe(): Promise<Stripe | null> {
  if (!stripePromise) {
    const key = process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
    if (!key) {
      console.error('Stripe publishable key is not set')
      return Promise.resolve(null)
    }
    stripePromise = loadStripe(key)
  }
  return stripePromise
}

export const STRIPE_CURRENCIES = {
  USD: 'usd',
  INR: 'inr',
} as const

export type StripeCurrency = (typeof STRIPE_CURRENCIES)[keyof typeof STRIPE_CURRENCIES]

export function formatAmountForStripe(
  amount: number,
  currency: 'USD' | 'INR'
): number {
  // Stripe expects amounts in smallest currency unit (cents, paise)
  return Math.round(amount * 100)
}

export function formatAmountFromStripe(
  amount: number,
  currency: 'USD' | 'INR'
): number {
  return amount / 100
}
