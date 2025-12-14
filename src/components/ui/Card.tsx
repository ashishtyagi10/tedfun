import * as React from 'react'
import { cn } from '@/lib/utils'

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'elevated' | 'outlined' | 'filled'
  hoverable?: boolean
  clickable?: boolean
}

export interface CardHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  title?: string
  subtitle?: string
  action?: React.ReactNode
}

export interface CardContentProps extends React.HTMLAttributes<HTMLDivElement> {}

export interface CardFooterProps extends React.HTMLAttributes<HTMLDivElement> {
  align?: 'left' | 'center' | 'right' | 'between'
}

/**
 * Material Design 3 Card Component
 *
 * Implements M3 card specifications with elevated, outlined, and filled variants
 * - Subtle shadows following M3 elevation system
 * - Generous whitespace (24px padding)
 * - Smooth transitions on hover
 * - Accessible with proper semantic HTML
 */
const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, variant = 'elevated', hoverable = false, clickable = false, ...props }, ref) => {
    const baseStyles = cn(
      // Base layout and spacing
      'rounded-lg overflow-hidden transition-all duration-200',
      'bg-white',
      // Clickable cursor
      clickable && 'cursor-pointer'
    )

    const variants = {
      elevated: cn(
        'shadow-elevation-2',
        (hoverable || clickable) && 'hover:shadow-elevation-4 hover:-translate-y-0.5'
      ),
      outlined: cn(
        'border border-gray-200',
        (hoverable || clickable) && 'hover:border-primary-300 hover:shadow-elevation-1'
      ),
      filled: cn(
        'bg-surface-container',
        (hoverable || clickable) && 'hover:bg-surface-container-high hover:shadow-elevation-1'
      ),
    }

    return (
      <div
        ref={ref}
        className={cn(baseStyles, variants[variant], className)}
        role={clickable ? 'button' : undefined}
        tabIndex={clickable ? 0 : undefined}
        {...props}
      />
    )
  }
)

Card.displayName = 'Card'

/**
 * Card Header Component
 *
 * Displays title, subtitle, and optional action element
 * - 24px top/horizontal padding, 16px bottom padding
 * - Supports action buttons/icons aligned to the right
 */
const CardHeader = React.forwardRef<HTMLDivElement, CardHeaderProps>(
  ({ className, title, subtitle, action, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn('flex items-start justify-between gap-4 px-6 pt-6 pb-4', className)}
        {...props}
      >
        <div className="flex-1 space-y-1.5">
          {title && (
            <h3 className="text-lg font-semibold tracking-tight text-gray-900">{title}</h3>
          )}
          {subtitle && <p className="text-sm text-gray-600">{subtitle}</p>}
          {children}
        </div>
        {action && <div className="flex items-center">{action}</div>}
      </div>
    )
  }
)

CardHeader.displayName = 'CardHeader'

/**
 * Card Content Component
 *
 * Main content area with generous padding
 * - 24px horizontal padding, 16px vertical padding
 */
const CardContent = React.forwardRef<HTMLDivElement, CardContentProps>(
  ({ className, ...props }, ref) => {
    return <div ref={ref} className={cn('px-6 py-4', className)} {...props} />
  }
)

CardContent.displayName = 'CardContent'

/**
 * Card Footer Component
 *
 * Footer section for actions and metadata
 * - 24px horizontal padding, 16px vertical padding
 * - Supports different alignment options
 */
const CardFooter = React.forwardRef<HTMLDivElement, CardFooterProps>(
  ({ className, align = 'left', ...props }, ref) => {
    const alignments = {
      left: 'justify-start',
      center: 'justify-center',
      right: 'justify-end',
      between: 'justify-between',
    }

    return (
      <div
        ref={ref}
        className={cn('flex items-center gap-4 px-6 pb-6 pt-4', alignments[align], className)}
        {...props}
      />
    )
  }
)

CardFooter.displayName = 'CardFooter'

export { Card, CardHeader, CardContent, CardFooter }
