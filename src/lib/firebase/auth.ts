'use client'

import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  signOut as firebaseSignOut,
  sendPasswordResetEmail,
  updateProfile,
  User,
  UserCredential,
} from 'firebase/auth'
import { doc, setDoc, getDoc, serverTimestamp } from 'firebase/firestore'
import { auth, db } from './config'
import type { Donor, DonorRole } from '@/types'

const googleProvider = new GoogleAuthProvider()

function ensureAuth() {
  if (!auth) {
    throw new Error('Firebase Auth is not initialized. Check your environment variables.')
  }
  return auth
}

function ensureDb() {
  if (!db) {
    throw new Error('Firebase Firestore is not initialized. Check your environment variables.')
  }
  return db
}

export async function signUpWithEmail(
  email: string,
  password: string,
  displayName: string
): Promise<UserCredential> {
  const userCredential = await createUserWithEmailAndPassword(ensureAuth(), email, password)

  // Update display name
  await updateProfile(userCredential.user, { displayName })

  // Create donor document
  await createDonorDocument(userCredential.user, 'email')

  return userCredential
}

export async function signInWithEmail(
  email: string,
  password: string
): Promise<UserCredential> {
  const userCredential = await signInWithEmailAndPassword(ensureAuth(), email, password)
  await updateLastLogin(userCredential.user.uid)
  return userCredential
}

export async function signInWithGoogle(): Promise<UserCredential> {
  const userCredential = await signInWithPopup(ensureAuth(), googleProvider)

  // Check if donor document exists, create if not
  const donorRef = doc(ensureDb(), 'donors', userCredential.user.uid)
  const donorSnap = await getDoc(donorRef)

  if (!donorSnap.exists()) {
    await createDonorDocument(userCredential.user, 'google')
  } else {
    await updateLastLogin(userCredential.user.uid)
  }

  return userCredential
}

export async function signOut(): Promise<void> {
  await firebaseSignOut(ensureAuth())
}

export async function resetPassword(email: string): Promise<void> {
  await sendPasswordResetEmail(ensureAuth(), email)
}

async function createDonorDocument(
  user: User,
  provider: 'email' | 'google'
): Promise<void> {
  const donorRef = doc(ensureDb(), 'donors', user.uid)

  const donorData: Omit<Donor, 'id'> = {
    displayName: user.displayName || 'Anonymous Donor',
    email: user.email || '',
    photoUrl: user.photoURL || undefined,
    isAnonymous: false,
    receiveUpdates: true,
    receiveNewsletter: false,
    totalDonated: 0,
    donationCount: 0,
    studentsSupported: [],
    authProvider: provider,
    createdAt: serverTimestamp() as any,
    lastLoginAt: serverTimestamp() as any,
    role: 'donor' as DonorRole,
  }

  await setDoc(donorRef, donorData)
}

async function updateLastLogin(uid: string): Promise<void> {
  const donorRef = doc(ensureDb(), 'donors', uid)
  await setDoc(donorRef, { lastLoginAt: serverTimestamp() }, { merge: true })
}

export async function getDonorRole(uid: string): Promise<DonorRole | null> {
  const donorRef = doc(ensureDb(), 'donors', uid)
  const donorSnap = await getDoc(donorRef)

  if (donorSnap.exists()) {
    return donorSnap.data().role as DonorRole
  }

  return null
}

export async function getDonorProfile(uid: string): Promise<Donor | null> {
  const donorRef = doc(ensureDb(), 'donors', uid)
  const donorSnap = await getDoc(donorRef)

  if (donorSnap.exists()) {
    return { id: donorSnap.id, ...donorSnap.data() } as Donor
  }

  return null
}
