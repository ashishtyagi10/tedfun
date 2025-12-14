import {
  collection,
  doc,
  getDoc,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  query,
  where,
  orderBy,
  limit,
  startAfter,
  DocumentSnapshot,
  QueryConstraint,
  serverTimestamp,
  increment,
  writeBatch,
  Timestamp,
  CollectionReference,
} from 'firebase/firestore'
import { db } from './config'
import type {
  Student,
  StudentNeed,
  Donation,
  Campaign,
  ImpactUpdate,
  StudentStatus,
  NeedCategory,
} from '@/types'

function ensureDb() {
  if (!db) {
    throw new Error('Firebase Firestore is not initialized. Check your environment variables.')
  }
  return db
}

// Collection reference getters (lazy initialization)
function getStudentsRef() {
  return collection(ensureDb(), 'students')
}

function getDonorsRef() {
  return collection(ensureDb(), 'donors')
}

function getDonationsRef() {
  return collection(ensureDb(), 'donations')
}

function getCampaignsRef() {
  return collection(ensureDb(), 'campaigns')
}

// ==================== STUDENTS ====================

export async function getApprovedStudents(
  pageSize: number = 12,
  lastDoc?: DocumentSnapshot,
  filters?: {
    category?: NeedCategory
    school?: string
    featured?: boolean
  }
): Promise<{ students: Student[]; lastDoc: DocumentSnapshot | null }> {
  const constraints: QueryConstraint[] = [
    where('status', '==', 'approved'),
    orderBy('priority', 'desc'),
    orderBy('createdAt', 'desc'),
    limit(pageSize),
  ]

  if (filters?.featured) {
    constraints.unshift(where('featured', '==', true))
  }

  if (lastDoc) {
    constraints.push(startAfter(lastDoc))
  }

  const q = query(getStudentsRef(), ...constraints)
  const snapshot = await getDocs(q)

  const students = snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  })) as Student[]

  const lastVisible = snapshot.docs[snapshot.docs.length - 1] || null

  return { students, lastDoc: lastVisible }
}

export async function getFeaturedStudents(count: number = 6): Promise<Student[]> {
  const q = query(
    getStudentsRef(),
    where('status', '==', 'approved'),
    where('featured', '==', true),
    orderBy('priority', 'desc'),
    limit(count)
  )

  const snapshot = await getDocs(q)
  return snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  })) as Student[]
}

export async function getStudentBySlug(slug: string): Promise<Student | null> {
  const q = query(
    getStudentsRef(),
    where('slug', '==', slug),
    where('status', '==', 'approved'),
    limit(1)
  )

  const snapshot = await getDocs(q)

  if (snapshot.empty) return null

  const doc = snapshot.docs[0]
  return { id: doc.id, ...doc.data() } as Student
}

export async function getStudentById(id: string): Promise<Student | null> {
  const docRef = doc(getStudentsRef(), id)
  const docSnap = await getDoc(docRef)

  if (!docSnap.exists()) return null

  return { id: docSnap.id, ...docSnap.data() } as Student
}

export async function getPendingStudents(): Promise<Student[]> {
  const q = query(
    getStudentsRef(),
    where('status', '==', 'pending'),
    orderBy('submittedAt', 'asc')
  )

  const snapshot = await getDocs(q)
  return snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  })) as Student[]
}

export async function submitStudent(
  studentData: Omit<Student, 'id' | 'status' | 'createdAt' | 'updatedAt' | 'totalRaised' | 'isFullyFunded'>
): Promise<string> {
  const now = serverTimestamp()

  const docRef = await addDoc(getStudentsRef(), {
    ...studentData,
    status: 'pending',
    totalRaised: 0,
    isFullyFunded: false,
    createdAt: now,
    updatedAt: now,
    submittedAt: now,
  })

  return docRef.id
}

export async function updateStudentStatus(
  studentId: string,
  status: StudentStatus,
  reviewedBy: string,
  rejectionReason?: string
): Promise<void> {
  const docRef = doc(getStudentsRef(), studentId)

  await updateDoc(docRef, {
    status,
    reviewedAt: serverTimestamp(),
    reviewedBy,
    ...(rejectionReason && { rejectionReason }),
    updatedAt: serverTimestamp(),
  })
}

// ==================== STUDENT NEEDS ====================

export async function getStudentNeeds(studentId: string): Promise<StudentNeed[]> {
  const needsRef = collection(ensureDb(), `students/${studentId}/needs`)
  const q = query(needsRef, orderBy('priority', 'desc'))

  const snapshot = await getDocs(q)
  return snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  })) as StudentNeed[]
}

export async function addStudentNeed(
  studentId: string,
  needData: Omit<StudentNeed, 'id' | 'studentId' | 'amountRaised' | 'createdAt' | 'updatedAt'>
): Promise<string> {
  const needsRef = collection(ensureDb(), `students/${studentId}/needs`)
  const now = serverTimestamp()

  const docRef = await addDoc(needsRef, {
    ...needData,
    studentId,
    amountRaised: 0,
    createdAt: now,
    updatedAt: now,
  })

  return docRef.id
}

// ==================== DONATIONS ====================

export async function createDonation(
  donationData: Omit<Donation, 'id' | 'createdAt'>
): Promise<string> {
  const docRef = await addDoc(getDonationsRef(), {
    ...donationData,
    createdAt: serverTimestamp(),
  })

  return docRef.id
}

export async function completeDonation(
  donationId: string,
  studentId: string,
  amount: number
): Promise<void> {
  const batch = writeBatch(ensureDb())

  // Update donation status
  const donationRef = doc(getDonationsRef(), donationId)
  batch.update(donationRef, {
    status: 'completed',
    completedAt: serverTimestamp(),
  })

  // Update student funding
  const studentRef = doc(getStudentsRef(), studentId)
  batch.update(studentRef, {
    totalRaised: increment(amount),
    updatedAt: serverTimestamp(),
  })

  await batch.commit()
}

export async function getDonorDonations(donorId: string): Promise<Donation[]> {
  const q = query(
    getDonationsRef(),
    where('donorId', '==', donorId),
    where('status', '==', 'completed'),
    orderBy('createdAt', 'desc')
  )

  const snapshot = await getDocs(q)
  return snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  })) as Donation[]
}

export async function getStudentDonations(studentId: string): Promise<Donation[]> {
  const q = query(
    getDonationsRef(),
    where('studentId', '==', studentId),
    where('status', '==', 'completed'),
    orderBy('createdAt', 'desc')
  )

  const snapshot = await getDocs(q)
  return snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  })) as Donation[]
}

// ==================== CAMPAIGNS ====================

export async function getActiveCampaigns(): Promise<Campaign[]> {
  const now = Timestamp.now()

  const q = query(
    getCampaignsRef(),
    where('isActive', '==', true),
    where('endDate', '>', now),
    orderBy('endDate', 'asc')
  )

  const snapshot = await getDocs(q)
  return snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  })) as Campaign[]
}

export async function getCampaignBySlug(slug: string): Promise<Campaign | null> {
  const q = query(getCampaignsRef(), where('slug', '==', slug), limit(1))

  const snapshot = await getDocs(q)

  if (snapshot.empty) return null

  const doc = snapshot.docs[0]
  return { id: doc.id, ...doc.data() } as Campaign
}

// ==================== IMPACT UPDATES ====================

export async function getStudentUpdates(
  studentId: string,
  publicOnly: boolean = true
): Promise<ImpactUpdate[]> {
  const updatesRef = collection(ensureDb(), `students/${studentId}/updates`)

  const constraints: QueryConstraint[] = [orderBy('createdAt', 'desc')]

  if (publicOnly) {
    constraints.unshift(where('isPublic', '==', true))
  }

  const q = query(updatesRef, ...constraints)

  const snapshot = await getDocs(q)
  return snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  })) as ImpactUpdate[]
}

// ==================== STATS ====================

export async function getGlobalStats(): Promise<{
  totalStudents: number
  totalDonors: number
  totalRaised: number
  totalDonations: number
}> {
  // In production, these would be aggregated in a separate document
  // For now, we'll return placeholder values that would be updated by Cloud Functions
  const statsDoc = await getDoc(doc(ensureDb(), 'stats', 'global'))

  if (statsDoc.exists()) {
    return statsDoc.data() as any
  }

  return {
    totalStudents: 0,
    totalDonors: 0,
    totalRaised: 0,
    totalDonations: 0,
  }
}
