import { Timestamp } from 'firebase/firestore'

// Student Types
export type StudentStatus = 'pending' | 'approved' | 'rejected' | 'archived'
export type SubmitterRelationship = 'teacher' | 'principal' | 'ngo_worker' | 'family' | 'community_member'
export type SchoolType = 'primary' | 'secondary' | 'high_school' | 'college'
export type NeedCategory = 'tuition' | 'books' | 'uniforms' | 'supplies' | 'transportation' | 'meals' | 'medical' | 'other'
export type NeedPriority = 'urgent' | 'high' | 'medium' | 'low'
export type NeedPeriod = 'one_time' | 'monthly' | 'quarterly' | 'yearly'
export type NeedStatus = 'active' | 'fulfilled' | 'cancelled'

export interface School {
  name: string
  type: SchoolType
  grade: string
  address: string
  city: string
  state: string
  country: string
}

export interface Submitter {
  name: string
  email: string
  phone: string
  relationship: SubmitterRelationship
  organizationName?: string
}

export interface Student {
  id: string
  firstName: string
  lastName: string
  dateOfBirth: Timestamp
  gender: 'male' | 'female' | 'other'
  school: School
  photoUrl: string
  additionalPhotos: string[]
  videoUrl?: string
  story: string
  familyBackground: string
  academicPerformance: string
  aspirations: string
  status: StudentStatus
  submittedAt: Timestamp
  reviewedAt?: Timestamp
  reviewedBy?: string
  rejectionReason?: string
  submittedBy: Submitter
  totalNeeded: number
  totalRaised: number
  isFullyFunded: boolean
  fundingDeadline?: Timestamp
  createdAt: Timestamp
  updatedAt: Timestamp
  slug: string
  featured: boolean
  priority: number
}

export interface StudentNeed {
  id: string
  studentId: string
  category: NeedCategory
  title: string
  description: string
  amountNeeded: number
  amountRaised: number
  priority: NeedPriority
  period: NeedPeriod
  startDate?: Timestamp
  endDate?: Timestamp
  status: NeedStatus
  createdAt: Timestamp
  updatedAt: Timestamp
}

// Donor Types
export type DonorRole = 'donor' | 'admin' | 'super_admin'
export type AuthProvider = 'email' | 'google'

export interface DonorAddress {
  line1: string
  line2?: string
  city: string
  state: string
  postalCode: string
  country: string
}

export interface Donor {
  id: string
  displayName: string
  email: string
  photoUrl?: string
  phone?: string
  address?: DonorAddress
  isAnonymous: boolean
  receiveUpdates: boolean
  receiveNewsletter: boolean
  totalDonated: number
  donationCount: number
  studentsSupported: string[]
  stripeCustomerId?: string
  authProvider: AuthProvider
  createdAt: Timestamp
  lastLoginAt: Timestamp
  role: DonorRole
}

// Donation Types
export type DonationType = 'online' | 'offline'
export type PaymentMethod = 'card' | 'upi' | 'bank_transfer'
export type OfflineMethod = 'cash' | 'check' | 'bank_transfer' | 'other'
export type DonationStatus = 'pending' | 'completed' | 'failed' | 'refunded'
export type Currency = 'USD' | 'INR'

export interface Donation {
  id: string
  donorId: string
  donorName: string
  isAnonymous: boolean
  studentId: string
  studentName: string
  needId?: string
  amount: number
  currency: Currency
  platformFee: number
  netAmount: number
  type: DonationType
  stripePaymentIntentId?: string
  stripeChargeId?: string
  paymentMethod?: PaymentMethod
  offlineMethod?: OfflineMethod
  offlineReference?: string
  recordedBy?: string
  proofDocumentUrl?: string
  status: DonationStatus
  taxReceiptSent: boolean
  taxReceiptUrl?: string
  message?: string
  createdAt: Timestamp
  completedAt?: Timestamp
}

// Campaign Types
export type CampaignType = 'general' | 'category' | 'school' | 'region'

export interface Campaign {
  id: string
  title: string
  description: string
  coverImageUrl: string
  goalAmount: number
  raisedAmount: number
  donorCount: number
  startDate: Timestamp
  endDate: Timestamp
  isActive: boolean
  type: CampaignType
  targetCategory?: NeedCategory
  targetSchool?: string
  targetRegion?: string
  featuredStudentIds: string[]
  slug: string
  createdAt: Timestamp
  updatedAt: Timestamp
  createdBy: string
}

// Impact Update Types
export type UpdateType = 'progress' | 'achievement' | 'thank_you' | 'milestone'

export interface ImpactUpdate {
  id: string
  studentId: string
  title: string
  content: string
  mediaUrls: string[]
  type: UpdateType
  isPublic: boolean
  createdAt: Timestamp
  createdBy: string
}

// UI Types
export interface NavItem {
  label: string
  href: string
  icon?: React.ComponentType<{ className?: string }>
}

export interface FilterOption {
  value: string
  label: string
}

export interface PaginationInfo {
  page: number
  limit: number
  total: number
  hasMore: boolean
}
