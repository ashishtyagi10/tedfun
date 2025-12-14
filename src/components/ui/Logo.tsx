/**
 * The Education Foundation Logo
 *
 * Design Philosophy (Jony Ive inspired):
 * - Minimal form with maximum meaning
 * - A rising figure/path representing student growth and upliftment
 * - The arch suggests both a graduation cap and protective support
 * - Clean geometric shapes that work at any size
 */

import { cn } from '@/lib/utils'

interface LogoProps {
  className?: string
  size?: 'sm' | 'md' | 'lg' | 'xl'
  variant?: 'default' | 'white'
}

const sizes = {
  sm: 'w-6 h-6',
  md: 'w-8 h-8',
  lg: 'w-10 h-10',
  xl: 'w-12 h-12',
}

export function Logo({ className, size = 'md', variant = 'default' }: LogoProps) {
  const colorClass = variant === 'white' ? 'text-white' : 'text-primary-700'

  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn(sizes[size], colorClass, className)}
      aria-label="The Education Foundation Logo"
    >
      {/* Base: Rising figure/path - represents student growth */}
      <path
        d="M24 42C24 42 8 32 8 20C8 14 12 8 24 8C36 8 40 14 40 20C40 32 24 42 24 42Z"
        fill="currentColor"
        fillOpacity="0.15"
      />

      {/* Inner rising element - the student/knowledge growing */}
      <path
        d="M24 38C24 38 12 30 12 21C12 16 16 12 24 12C32 12 36 16 36 21C36 30 24 38 24 38Z"
        fill="currentColor"
        fillOpacity="0.3"
      />

      {/* Core: Graduation cap silhouette - education */}
      <path
        d="M24 10L8 18L24 26L40 18L24 10Z"
        fill="currentColor"
      />

      {/* Cap tassel/rising line - aspiration */}
      <path
        d="M24 26V34"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
      />

      {/* Small circle at base - the student */}
      <circle
        cx="24"
        cy="36"
        r="3"
        fill="currentColor"
      />
    </svg>
  )
}

/**
 * Simplified icon version for favicon and small contexts
 */
export function LogoMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Graduation cap */}
      <path
        d="M16 4L2 12L16 20L30 12L16 4Z"
        fill="currentColor"
      />
      {/* Rising stem */}
      <path
        d="M16 20V26"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      {/* Student dot */}
      <circle cx="16" cy="28" r="2" fill="currentColor" />
    </svg>
  )
}
