'use client'

import { useState, useEffect, useCallback } from 'react'
import { User, onAuthStateChanged } from 'firebase/auth'
import { auth } from '@/lib/firebase/config'
import {
  signUpWithEmail,
  signInWithEmail,
  signInWithGoogle,
  signOut,
  resetPassword,
  getDonorProfile,
} from '@/lib/firebase/auth'
import type { Donor } from '@/types'

interface AuthState {
  user: User | null
  donor: Donor | null
  loading: boolean
  error: string | null
}

export function useAuth() {
  const [state, setState] = useState<AuthState>({
    user: null,
    donor: null,
    loading: true,
    error: null,
  })

  useEffect(() => {
    // If auth is not initialized, set loading to false
    if (!auth) {
      setState((prev) => ({ ...prev, loading: false }))
      return
    }

    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        try {
          const donor = await getDonorProfile(user.uid)
          setState({
            user,
            donor,
            loading: false,
            error: null,
          })
        } catch (error) {
          setState({
            user,
            donor: null,
            loading: false,
            error: 'Failed to load profile',
          })
        }
      } else {
        setState({
          user: null,
          donor: null,
          loading: false,
          error: null,
        })
      }
    })

    return () => unsubscribe()
  }, [])

  const handleSignUp = useCallback(
    async (email: string, password: string, displayName: string) => {
      setState((prev) => ({ ...prev, loading: true, error: null }))
      try {
        await signUpWithEmail(email, password, displayName)
      } catch (error: any) {
        setState((prev) => ({
          ...prev,
          loading: false,
          error: error.message || 'Sign up failed',
        }))
        throw error
      }
    },
    []
  )

  const handleSignIn = useCallback(async (email: string, password: string) => {
    setState((prev) => ({ ...prev, loading: true, error: null }))
    try {
      await signInWithEmail(email, password)
    } catch (error: any) {
      setState((prev) => ({
        ...prev,
        loading: false,
        error: error.message || 'Sign in failed',
      }))
      throw error
    }
  }, [])

  const handleGoogleSignIn = useCallback(async () => {
    setState((prev) => ({ ...prev, loading: true, error: null }))
    try {
      await signInWithGoogle()
    } catch (error: any) {
      setState((prev) => ({
        ...prev,
        loading: false,
        error: error.message || 'Google sign in failed',
      }))
      throw error
    }
  }, [])

  const handleSignOut = useCallback(async () => {
    setState((prev) => ({ ...prev, loading: true, error: null }))
    try {
      await signOut()
    } catch (error: any) {
      setState((prev) => ({
        ...prev,
        loading: false,
        error: error.message || 'Sign out failed',
      }))
      throw error
    }
  }, [])

  const handleResetPassword = useCallback(async (email: string) => {
    setState((prev) => ({ ...prev, loading: true, error: null }))
    try {
      await resetPassword(email)
      setState((prev) => ({ ...prev, loading: false }))
    } catch (error: any) {
      setState((prev) => ({
        ...prev,
        loading: false,
        error: error.message || 'Password reset failed',
      }))
      throw error
    }
  }, [])

  return {
    user: state.user,
    donor: state.donor,
    loading: state.loading,
    error: state.error,
    isAuthenticated: !!state.user,
    isAdmin: state.donor?.role === 'admin' || state.donor?.role === 'super_admin',
    signUp: handleSignUp,
    signIn: handleSignIn,
    signInWithGoogle: handleGoogleSignIn,
    signOut: handleSignOut,
    resetPassword: handleResetPassword,
  }
}
