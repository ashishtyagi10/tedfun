import * as React from 'react'
import { cn } from '@/lib/utils'

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'text'
  size?: 'sm' | 'md' | 'lg'
  fullWidth?: boolean
  loading?: boolean
  icon?: React.ReactNode
  iconPosition?: 'left' | 'right'
}

/**
 * Material Design 3 Button Component
 *
 * Implements M3 button specifications with Jony Ive-inspired minimal design
 * - Generous whitespace and purposeful elements
 * - Smooth transitions (200ms cubic-bezier)
 * - Proper state layers (hover, focus, active, disabled)
 * - Accessible with ARIA attributes
 */
const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = 'primary',
      size = 'md',
      fullWidth = false,
      loading = false,
      icon,
      iconPosition = 'left',
      disabled,
      children,
      ...props
    },
    ref
  ) => {
    const baseStyles = cn(
      // Base layout and typography
      'inline-flex items-center justify-center gap-2',
      'font-medium tracking-wide',
      'rounded-xl border transition-all duration-200',
      'focus:outline-none focus:ring-2 focus:ring-primary-400 focus:ring-offset-2',
      'disabled:cursor-not-allowed disabled:opacity-50',
      // Smooth transform on interaction
      'active:scale-[0.98]',
      // Full width if specified
      fullWidth && 'w-full'
    )

    const variants = {
      primary: cn(
        'bg-primary text-white border-primary',
        'hover:bg-primary-800 hover:shadow-elevation-2',
        'active:shadow-none',
        'disabled:bg-primary-200 disabled:border-primary-200'
      ),
      secondary: cn(
        'bg-secondary text-white border-secondary',
        'hover:bg-secondary-600 hover:shadow-elevation-2',
        'active:shadow-none',
        'disabled:bg-secondary-200 disabled:border-secondary-200'
      ),
      outline: cn(
        'bg-transparent text-primary border-primary',
        'hover:bg-primary-50 hover:border-primary-700',
        'active:bg-primary-100',
        'disabled:text-primary-200 disabled:border-primary-200'
      ),
      text: cn(
        'bg-transparent text-primary border-transparent',
        'hover:bg-primary-50',
        'active:bg-primary-100',
        'disabled:text-primary-200'
      ),
    }

    const sizes = {
      sm: 'h-9 px-4 text-sm',
      md: 'h-11 px-6 text-base',
      lg: 'h-14 px-8 text-lg',
    }

    return (
      <button
        ref={ref}
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        disabled={disabled || loading}
        aria-busy={loading}
        {...props}
      >
        {loading ? (
          <svg
            className="h-5 w-5 animate-spin"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            />
          </svg>
        ) : (
          <>
            {icon && iconPosition === 'left' && (
              <span className="flex items-center" aria-hidden="true">
                {icon}
              </span>
            )}
            {children}
            {icon && iconPosition === 'right' && (
              <span className="flex items-center" aria-hidden="true">
                {icon}
              </span>
            )}
          </>
        )}
      </button>
    )
  }
)

Button.displayName = 'Button'

export { Button }
