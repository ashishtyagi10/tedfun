'use client'

import { ReactNode } from 'react'
import { Elements } from '@stripe/react-stripe-js'
import { getStripe } from '@/lib/stripe/config'

interface StripeProviderProps {
  children: ReactNode
}

export function StripeProvider({ children }: StripeProviderProps) {
  const stripePromise = getStripe()

  return (
    <Elements
      stripe={stripePromise}
      options={{
        appearance: {
          theme: 'stripe',
          variables: {
            colorPrimary: '#1A5F7A',
            colorBackground: '#ffffff',
            colorText: '#1a1a1a',
            colorDanger: '#C62828',
            fontFamily: 'system-ui, sans-serif',
            borderRadius: '12px',
            spacingUnit: '4px',
          },
          rules: {
            '.Input': {
              border: '1px solid #d1d5db',
              boxShadow: 'none',
            },
            '.Input:focus': {
              border: '1px solid #1A5F7A',
              boxShadow: '0 0 0 1px #1A5F7A',
            },
          },
        },
      }}
    >
      {children}
    </Elements>
  )
}
