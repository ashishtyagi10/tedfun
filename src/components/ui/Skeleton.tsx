import * as React from 'react'
import { cn } from '@/lib/utils'

export interface SkeletonProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'text' | 'circular' | 'rectangular' | 'rounded'
  width?: string | number
  height?: string | number
  animation?: 'pulse' | 'wave' | 'none'
}

/**
 * Material Design 3 Skeleton Component
 *
 * Loading placeholder for content
 * - Multiple shape variants
 * - Smooth pulse animation
 * - Customizable dimensions
 * - Accessible with proper ARIA attributes
 * - Minimal design with subtle animation
 */
const Skeleton = React.forwardRef<HTMLDivElement, SkeletonProps>(
  (
    {
      className,
      variant = 'rectangular',
      width,
      height,
      animation = 'pulse',
      style,
      ...props
    },
    ref
  ) => {
    const baseStyles = cn(
      'bg-gray-200',
      animation === 'pulse' && 'animate-pulse',
      animation === 'wave' && 'animate-shimmer'
    )

    const variants = {
      text: 'h-4 rounded',
      circular: 'rounded-full',
      rectangular: 'rounded-none',
      rounded: 'rounded-lg',
    }

    const combinedStyle = {
      width: typeof width === 'number' ? `${width}px` : width,
      height: typeof height === 'number' ? `${height}px` : height,
      ...style,
    }

    return (
      <div
        ref={ref}
        className={cn(baseStyles, variants[variant], className)}
        style={combinedStyle}
        aria-busy="true"
        aria-live="polite"
        {...props}
      />
    )
  }
)

Skeleton.displayName = 'Skeleton'

/**
 * Skeleton Card Component
 *
 * Pre-built skeleton for card loading states
 * Matches the structure of the Card component
 */
export interface SkeletonCardProps extends React.HTMLAttributes<HTMLDivElement> {
  hasImage?: boolean
  hasAvatar?: boolean
  hasFooter?: boolean
}

const SkeletonCard = React.forwardRef<HTMLDivElement, SkeletonCardProps>(
  ({ className, hasImage = true, hasAvatar = false, hasFooter = true, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn('rounded-lg border border-gray-200 bg-white p-6 space-y-4', className)}
        {...props}
      >
        {hasImage && <Skeleton variant="rounded" height={192} className="mb-4" />}

        <div className="space-y-4">
          {hasAvatar && (
            <div className="flex items-center gap-3">
              <Skeleton variant="circular" width={40} height={40} />
              <div className="flex-1 space-y-2">
                <Skeleton variant="text" width="40%" />
                <Skeleton variant="text" width="60%" />
              </div>
            </div>
          )}

          {!hasAvatar && (
            <>
              <Skeleton variant="text" width="70%" className="h-6" />
              <Skeleton variant="text" width="90%" />
            </>
          )}

          <div className="space-y-2">
            <Skeleton variant="text" width="100%" />
            <Skeleton variant="text" width="95%" />
            <Skeleton variant="text" width="85%" />
          </div>

          {hasFooter && (
            <div className="flex items-center justify-between pt-2">
              <Skeleton variant="text" width="30%" />
              <Skeleton variant="rounded" width={80} height={36} />
            </div>
          )}
        </div>
      </div>
    )
  }
)

SkeletonCard.displayName = 'SkeletonCard'

/**
 * Skeleton List Component
 *
 * Pre-built skeleton for list item loading states
 */
export interface SkeletonListProps extends React.HTMLAttributes<HTMLDivElement> {
  count?: number
  hasAvatar?: boolean
}

const SkeletonList = React.forwardRef<HTMLDivElement, SkeletonListProps>(
  ({ className, count = 3, hasAvatar = true, ...props }, ref) => {
    return (
      <div ref={ref} className={cn('space-y-3', className)} {...props}>
        {Array.from({ length: count }).map((_, index) => (
          <div key={index} className="flex items-center gap-3 p-4 rounded-lg border border-gray-200">
            {hasAvatar && <Skeleton variant="circular" width={40} height={40} />}
            <div className="flex-1 space-y-2">
              <Skeleton variant="text" width="40%" />
              <Skeleton variant="text" width="70%" />
            </div>
            <Skeleton variant="rounded" width={24} height={24} />
          </div>
        ))}
      </div>
    )
  }
)

SkeletonList.displayName = 'SkeletonList'

/**
 * Skeleton Text Component
 *
 * Pre-built skeleton for text paragraph loading states
 */
export interface SkeletonTextProps extends React.HTMLAttributes<HTMLDivElement> {
  lines?: number
}

const SkeletonText = React.forwardRef<HTMLDivElement, SkeletonTextProps>(
  ({ className, lines = 3, ...props }, ref) => {
    return (
      <div ref={ref} className={cn('space-y-2', className)} {...props}>
        {Array.from({ length: lines }).map((_, index) => (
          <Skeleton
            key={index}
            variant="text"
            width={index === lines - 1 ? '80%' : '100%'}
          />
        ))}
      </div>
    )
  }
)

SkeletonText.displayName = 'SkeletonText'

export { Skeleton, SkeletonCard, SkeletonList, SkeletonText }
