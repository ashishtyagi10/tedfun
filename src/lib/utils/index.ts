import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatCurrency(
  amount: number,
  currency: 'USD' | 'INR' = 'INR'
): string {
  const formatter = new Intl.NumberFormat(currency === 'INR' ? 'en-IN' : 'en-US', {
    style: 'currency',
    currency,
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  })

  return formatter.format(amount)
}

export function formatNumber(num: number): string {
  if (num >= 1000000) {
    return (num / 1000000).toFixed(1) + 'M'
  }
  if (num >= 1000) {
    return (num / 1000).toFixed(1) + 'K'
  }
  return num.toString()
}

export function formatDate(date: Date | { toDate: () => Date }): string {
  const d = 'toDate' in date ? date.toDate() : date

  return new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(d)
}

export function formatRelativeTime(date: Date | { toDate: () => Date }): string {
  const d = 'toDate' in date ? date.toDate() : date
  const now = new Date()
  const diffInSeconds = Math.floor((now.getTime() - d.getTime()) / 1000)

  if (diffInSeconds < 60) {
    return 'just now'
  }
  if (diffInSeconds < 3600) {
    const mins = Math.floor(diffInSeconds / 60)
    return `${mins} minute${mins > 1 ? 's' : ''} ago`
  }
  if (diffInSeconds < 86400) {
    const hours = Math.floor(diffInSeconds / 3600)
    return `${hours} hour${hours > 1 ? 's' : ''} ago`
  }
  if (diffInSeconds < 604800) {
    const days = Math.floor(diffInSeconds / 86400)
    return `${days} day${days > 1 ? 's' : ''} ago`
  }

  return formatDate(d)
}

export function calculateProgress(raised: number, needed: number): number {
  if (needed === 0) return 0
  const progress = (raised / needed) * 100
  return Math.min(Math.round(progress), 100)
}

export function generateSlug(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '')
}

export function truncateText(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text
  return text.slice(0, maxLength).trim() + '...'
}

export function getInitials(name: string): string {
  return name
    .split(' ')
    .map((n) => n[0])
    .join('')
    .toUpperCase()
    .slice(0, 2)
}

export function getNeedCategoryLabel(category: string): string {
  const labels: Record<string, string> = {
    tuition: 'Tuition Fees',
    books: 'Books & Materials',
    uniforms: 'Uniforms',
    supplies: 'School Supplies',
    transportation: 'Transportation',
    meals: 'Meals',
    medical: 'Medical',
    other: 'Other Needs',
  }
  return labels[category] || category
}

export function getNeedPriorityColor(priority: string): string {
  const colors: Record<string, string> = {
    urgent: 'text-red-600 bg-red-100',
    high: 'text-orange-600 bg-orange-100',
    medium: 'text-yellow-600 bg-yellow-100',
    low: 'text-green-600 bg-green-100',
  }
  return colors[priority] || 'text-gray-600 bg-gray-100'
}

export function getSchoolTypeLabel(type: string): string {
  const labels: Record<string, string> = {
    primary: 'Primary School',
    secondary: 'Secondary School',
    high_school: 'High School',
    college: 'College',
  }
  return labels[type] || type
}

export const DONATION_AMOUNTS = {
  USD: [25, 50, 100, 250, 500],
  INR: [500, 1000, 2500, 5000, 10000],
}

export const CURRENCY_SYMBOLS = {
  USD: '$',
  INR: '₹',
}
