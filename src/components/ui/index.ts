/**
 * Material Design 3 UI Components
 *
 * A comprehensive collection of M3-compliant components
 * for the TedFun non-profit platform.
 *
 * Design Philosophy (Jony Ive-inspired):
 * - Minimal, purposeful elements
 * - Generous whitespace
 * - Warm colors: Primary (#1A5F7A), Secondary (#F5A623)
 * - Subtle shadows (elevation-1 through elevation-5)
 * - Smooth transitions (200ms cubic-bezier)
 *
 * All components are:
 * - Fully accessible (WCAG 2.1 AA compliant)
 * - Type-safe with TypeScript
 * - Responsive and mobile-first
 * - Theme-aware with consistent design tokens
 */

// Actions
export { Button } from './Button'
export type { ButtonProps } from './Button'

// Containment
export { Card, CardHeader, CardContent, CardFooter } from './Card'
export type { CardProps, CardHeaderProps, CardContentProps, CardFooterProps } from './Card'

// Text Inputs
export { Input } from './Input'
export type { InputProps } from './Input'

// Communication
export { Progress } from './Progress'
export type { ProgressProps } from './Progress'

export { Badge, NotificationBadge } from './Badge'
export type { BadgeProps, NotificationBadgeProps } from './Badge'

// Display
export { Avatar, AvatarGroup } from './Avatar'
export type { AvatarProps, AvatarGroupProps } from './Avatar'

export { Skeleton, SkeletonCard, SkeletonList, SkeletonText } from './Skeleton'
export type { SkeletonProps, SkeletonCardProps, SkeletonListProps, SkeletonTextProps } from './Skeleton'
