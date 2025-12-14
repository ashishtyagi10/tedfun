'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useAuthContext } from '@/providers/AuthProvider'
import { cn } from '@/lib/utils'

export default function ForgotPasswordPage() {
  const { resetPassword, loading, error } = useAuthContext()
  const [email, setEmail] = useState('')
  const [localError, setLocalError] = useState('')
  const [success, setSuccess] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLocalError('')
    setSuccess(false)

    try {
      await resetPassword(email)
      setSuccess(true)
    } catch (err: any) {
      setLocalError(err.message || 'Failed to send reset email')
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-surface px-4">
      <div className="w-full max-w-md">
        <div className="bg-white rounded-2xl shadow-elevation-3 p-8">
          <div className="text-center mb-8">
            <Link href="/" className="inline-block">
              <h1 className="text-2xl font-bold text-primary-700">TedFun</h1>
            </Link>
            <p className="mt-2 text-gray-600">Reset your password</p>
          </div>

          {success ? (
            <div className="text-center">
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
              <h2 className="text-xl font-semibold text-gray-900 mb-2">
                Check your email
              </h2>
              <p className="text-gray-600 mb-6">
                We&apos;ve sent a password reset link to{' '}
                <span className="font-medium">{email}</span>
              </p>
              <Link
                href="/auth/signin"
                className="text-primary-700 font-medium hover:text-primary-800"
              >
                Back to sign in
              </Link>
            </div>
          ) : (
            <>
              {(localError || error) && (
                <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg text-red-700 text-sm">
                  {localError || error}
                </div>
              )}

              <p className="text-gray-600 mb-6 text-sm">
                Enter your email address and we&apos;ll send you a link to reset
                your password.
              </p>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-1.5"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="input"
                    placeholder="you@example.com"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className={cn(
                    'w-full btn-primary',
                    loading && 'opacity-50 cursor-not-allowed'
                  )}
                >
                  {loading ? 'Sending...' : 'Send Reset Link'}
                </button>
              </form>

              <p className="mt-6 text-center text-sm text-gray-600">
                Remember your password?{' '}
                <Link
                  href="/auth/signin"
                  className="text-primary-700 font-medium hover:text-primary-800"
                >
                  Sign in
                </Link>
              </p>
            </>
          )}
        </div>
      </div>
    </div>
  )
}
