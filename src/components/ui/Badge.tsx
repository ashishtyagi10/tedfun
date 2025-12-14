import * as React from 'react'
import { cn } from '@/lib/utils'

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: 'urgent' | 'high' | 'medium' | 'low' | 'funded' | 'active' | 'pending' | 'default'
  size?: 'sm' | 'md' | 'lg'
  dot?: boolean
  icon?: React.ReactNode
}

/**
 * Material Design 3 Badge Component
 *
 * Status badges for needs priority and funding status
 * - Semantic color variants (urgent, funded, etc.)
 * - Multiple sizes with consistent padding
 * - Optional dot indicator
 * - Optional icon support
 * - Accessible with proper ARIA attributes
 * - Minimal design with subtle backgrounds
 */
const Badge = React.forwardRef<HTMLSpanElement, BadgeProps>(
  (
    {
      className,
      variant = 'default',
      size = 'md',
      dot = false,
      icon,
      children,
      ...props
    },
    ref
  ) => {
    const baseStyles = cn(
      'inline-flex items-center gap-1.5 font-medium',
      'rounded-full transition-all duration-200',
      'border border-transparent'
    )

    const variants = {
      urgent: cn(
        'bg-error-light/10 text-error-dark',
        'border-error-light/20',
        'shadow-sm'
      ),
      high: cn(
        'bg-warning/10 text-warning-dark',
        'border-warning/20'
      ),
      medium: cn(
        'bg-secondary/10 text-secondary-700',
        'border-secondary/20'
      ),
      low: cn(
        'bg-success-light/10 text-success-dark',
        'border-success-light/20'
      ),
      funded: cn(
        'bg-success/10 text-success-dark',
        'border-success/20',
        'shadow-sm'
      ),
      active: cn(
        'bg-primary/10 text-primary-800',
        'border-primary/20'
      ),
      pending: cn(
        'bg-gray-100 text-gray-700',
        'border-gray-200'
      ),
      default: cn(
        'bg-gray-100 text-gray-700',
        'border-gray-200'
      ),
    }

    const sizes = {
      sm: 'px-2 py-0.5 text-xs',
      md: 'px-2.5 py-1 text-sm',
      lg: 'px-3 py-1.5 text-base',
    }

    const dotColors = {
      urgent: 'bg-error',
      high: 'bg-warning',
      medium: 'bg-secondary',
      low: 'bg-success-light',
      funded: 'bg-success',
      active: 'bg-primary',
      pending: 'bg-gray-400',
      default: 'bg-gray-400',
    }

    const dotSizes = {
      sm: 'h-1.5 w-1.5',
      md: 'h-2 w-2',
      lg: 'h-2.5 w-2.5',
    }

    return (
      <span
        ref={ref}
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        role="status"
        {...props}
      >
        {dot && (
          <span
            className={cn('rounded-full', dotColors[variant], dotSizes[size])}
            aria-hidden="true"
          />
        )}
        {icon && (
          <span className="flex items-center" aria-hidden="true">
            {icon}
          </span>
        )}
        {children}
      </span>
    )
  }
)

Badge.displayName = 'Badge'

/**
 * Notification Badge Component
 *
 * Small badge for displaying counts (e.g., on avatars, icons)
 * - Positioned absolutely in top-right corner
 * - Auto-sizes based on content
 * - Max count with "+" indicator
 */
export interface NotificationBadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  count?: number
  max?: number
  showZero?: boolean
  variant?: 'primary' | 'error' | 'success' | 'warning'
  dot?: boolean
}

const NotificationBadge = React.forwardRef<HTMLSpanElement, NotificationBadgeProps>(
  (
    {
      className,
      count = 0,
      max = 99,
      showZero = false,
      variant = 'error',
      dot = false,
      ...props
    },
    ref
  ) => {
    const displayCount = count > max ? `${max}+` : count

    if (!showZero && count === 0) {
      return null
    }

    const variants = {
      primary: 'bg-primary text-white',
      error: 'bg-error text-white',
      success: 'bg-success text-white',
      warning: 'bg-warning text-white',
    }

    if (dot) {
      return (
        <span
          ref={ref}
          className={cn(
            'absolute top-0 right-0 h-2.5 w-2.5 rounded-full',
            'ring-2 ring-white',
            variants[variant],
            className
          )}
          {...props}
        />
      )
    }

    return (
      <span
        ref={ref}
        className={cn(
          'absolute -top-1 -right-1 flex items-center justify-center',
          'min-w-[1.25rem] h-5 px-1.5 rounded-full',
          'text-xs font-bold ring-2 ring-white',
          variants[variant],
          className
        )}
        {...props}
      >
        {displayCount}
      </span>
    )
  }
)

NotificationBadge.displayName = 'NotificationBadge'

export { Badge, NotificationBadge }
