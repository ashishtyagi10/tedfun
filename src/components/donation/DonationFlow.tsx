'use client'

import { useState, useEffect } from 'react'
import { useStripe, useElements, PaymentElement } from '@stripe/react-stripe-js'
import { useAuthContext } from '@/providers/AuthProvider'
import { formatCurrency, cn, DONATION_AMOUNTS, CURRENCY_SYMBOLS } from '@/lib/utils'
import { formatAmountForStripe } from '@/lib/stripe/config'
import type { Student, Currency } from '@/types'

interface DonationFlowProps {
  student: Student
  onSuccess: (paymentIntentId: string) => void
  onCancel: () => void
}

type Step = 'amount' | 'details' | 'payment' | 'success'

export function DonationFlow({ student, onSuccess, onCancel }: DonationFlowProps) {
  const { user, donor } = useAuthContext()
  const stripe = useStripe()
  const elements = useElements()

  const [step, setStep] = useState<Step>('amount')
  const [currency, setCurrency] = useState<Currency>('INR')
  const [amount, setAmount] = useState<number>(0)
  const [customAmount, setCustomAmount] = useState<string>('')
  const [isAnonymous, setIsAnonymous] = useState(false)
  const [message, setMessage] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [clientSecret, setClientSecret] = useState<string | null>(null)

  const presetAmounts = DONATION_AMOUNTS[currency]

  const handleAmountSelect = (value: number) => {
    setAmount(value)
    setCustomAmount('')
  }

  const handleCustomAmountChange = (value: string) => {
    setCustomAmount(value)
    const parsed = parseFloat(value)
    if (!isNaN(parsed) && parsed > 0) {
      setAmount(parsed)
    } else {
      setAmount(0)
    }
  }

  const proceedToDetails = () => {
    if (amount <= 0) {
      setError('Please select or enter an amount')
      return
    }
    setError(null)
    setStep('details')
  }

  const proceedToPayment = async () => {
    setLoading(true)
    setError(null)

    try {
      const response = await fetch('/api/stripe/create-payment-intent', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          amount: formatAmountForStripe(amount, currency),
          currency,
          studentId: student.id,
          studentName: `${student.firstName} ${student.lastName}`,
          donorId: user?.uid || 'anonymous',
          donorEmail: user?.email || '',
          metadata: {
            isAnonymous: String(isAnonymous),
            message: message || '',
          },
        }),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || 'Failed to create payment')
      }

      setClientSecret(data.clientSecret)
      setStep('payment')
    } catch (err: any) {
      setError(err.message || 'Something went wrong')
    } finally {
      setLoading(false)
    }
  }

  const handlePayment = async () => {
    if (!stripe || !elements || !clientSecret) {
      return
    }

    setLoading(true)
    setError(null)

    try {
      const { error: submitError } = await elements.submit()
      if (submitError) {
        throw submitError
      }

      const { error: confirmError, paymentIntent } = await stripe.confirmPayment({
        elements,
        clientSecret,
        confirmParams: {
          return_url: `${window.location.origin}/donation/success`,
        },
        redirect: 'if_required',
      })

      if (confirmError) {
        throw confirmError
      }

      if (paymentIntent && paymentIntent.status === 'succeeded') {
        setStep('success')
        onSuccess(paymentIntent.id)
      }
    } catch (err: any) {
      setError(err.message || 'Payment failed')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="bg-white rounded-2xl shadow-elevation-4 max-w-lg w-full mx-auto overflow-hidden">
      {/* Header */}
      <div className="bg-primary-700 text-white p-6">
        <h2 className="text-xl font-semibold">Support {student.firstName}</h2>
        <p className="text-primary-100 text-sm mt-1">
          Your donation makes a difference
        </p>
      </div>

      {/* Progress */}
      <div className="flex border-b">
        {(['amount', 'details', 'payment'] as const).map((s, i) => (
          <div
            key={s}
            className={cn(
              'flex-1 py-3 text-center text-sm font-medium',
              step === s
                ? 'text-primary-700 border-b-2 border-primary-700'
                : 'text-gray-400'
            )}
          >
            {i + 1}. {s.charAt(0).toUpperCase() + s.slice(1)}
          </div>
        ))}
      </div>

      {/* Content */}
      <div className="p-6">
        {error && (
          <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-lg text-red-700 text-sm">
            {error}
          </div>
        )}

        {step === 'amount' && (
          <div className="space-y-6">
            {/* Currency Toggle */}
            <div className="flex justify-center gap-2">
              {(['INR', 'USD'] as Currency[]).map((c) => (
                <button
                  key={c}
                  onClick={() => {
                    setCurrency(c)
                    setAmount(0)
                    setCustomAmount('')
                  }}
                  className={cn(
                    'px-4 py-2 rounded-full text-sm font-medium transition-colors',
                    currency === c
                      ? 'bg-primary-700 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  )}
                >
                  {c}
                </button>
              ))}
            </div>

            {/* Preset Amounts */}
            <div className="grid grid-cols-3 gap-3">
              {presetAmounts.map((value) => (
                <button
                  key={value}
                  onClick={() => handleAmountSelect(value)}
                  className={cn(
                    'py-3 rounded-xl font-medium transition-all',
                    amount === value && !customAmount
                      ? 'bg-primary-700 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  )}
                >
                  {formatCurrency(value, currency)}
                </button>
              ))}
            </div>

            {/* Custom Amount */}
            <div>
              <label className="block text-sm text-gray-600 mb-2">
                Or enter a custom amount
              </label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500">
                  {CURRENCY_SYMBOLS[currency]}
                </span>
                <input
                  type="number"
                  value={customAmount}
                  onChange={(e) => handleCustomAmountChange(e.target.value)}
                  placeholder="Enter amount"
                  className="input pl-8"
                  min="1"
                />
              </div>
            </div>

            {/* Summary */}
            {amount > 0 && (
              <div className="bg-primary-50 rounded-xl p-4 text-center">
                <p className="text-sm text-primary-700">You&apos;re donating</p>
                <p className="text-3xl font-bold text-primary-800">
                  {formatCurrency(amount, currency)}
                </p>
              </div>
            )}

            <button
              onClick={proceedToDetails}
              disabled={amount <= 0}
              className="w-full btn-primary disabled:opacity-50"
            >
              Continue
            </button>
          </div>
        )}

        {step === 'details' && (
          <div className="space-y-6">
            {/* Anonymous Toggle */}
            <label className="flex items-center gap-3 cursor-pointer">
              <input
                type="checkbox"
                checked={isAnonymous}
                onChange={(e) => setIsAnonymous(e.target.checked)}
                className="w-5 h-5 rounded border-gray-300 text-primary-700 focus:ring-primary-500"
              />
              <span className="text-gray-700">Make this donation anonymous</span>
            </label>

            {/* Message */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Leave a message for {student.firstName} (optional)
              </label>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Your words of encouragement..."
                rows={3}
                className="input resize-none"
                maxLength={500}
              />
              <p className="text-xs text-gray-500 mt-1">
                {message.length}/500 characters
              </p>
            </div>

            {/* Summary */}
            <div className="bg-gray-50 rounded-xl p-4 space-y-2">
              <div className="flex justify-between">
                <span className="text-gray-600">Donation amount</span>
                <span className="font-medium">{formatCurrency(amount, currency)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Supporting</span>
                <span className="font-medium">{student.firstName}</span>
              </div>
            </div>

            <div className="flex gap-3">
              <button
                onClick={() => setStep('amount')}
                className="flex-1 btn-outline"
              >
                Back
              </button>
              <button
                onClick={proceedToPayment}
                disabled={loading}
                className="flex-1 btn-primary disabled:opacity-50"
              >
                {loading ? 'Processing...' : 'Proceed to Payment'}
              </button>
            </div>
          </div>
        )}

        {step === 'payment' && clientSecret && (
          <div className="space-y-6">
            <PaymentElement />

            <div className="flex gap-3">
              <button
                onClick={() => setStep('details')}
                disabled={loading}
                className="flex-1 btn-outline"
              >
                Back
              </button>
              <button
                onClick={handlePayment}
                disabled={loading || !stripe || !elements}
                className="flex-1 btn-primary disabled:opacity-50"
              >
                {loading ? 'Processing...' : `Pay ${formatCurrency(amount, currency)}`}
              </button>
            </div>
          </div>
        )}

        {step === 'success' && (
          <div className="text-center py-8">
            <div className="w-16 h-16 mx-auto mb-4 bg-green-100 rounded-full flex items-center justify-center">
              <svg
                className="w-8 h-8 text-green-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Thank you for your generosity!
            </h3>
            <p className="text-gray-600 mb-6">
              Your donation of {formatCurrency(amount, currency)} will help{' '}
              {student.firstName} achieve their dreams.
            </p>
            <button onClick={onCancel} className="btn-primary">
              Close
            </button>
          </div>
        )}
      </div>

      {/* Cancel Button */}
      {step !== 'success' && (
        <div className="px-6 pb-6">
          <button
            onClick={onCancel}
            className="w-full text-center text-sm text-gray-500 hover:text-gray-700"
          >
            Cancel
          </button>
        </div>
      )}
    </div>
  )
}
