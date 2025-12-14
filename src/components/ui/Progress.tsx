import * as React from 'react'
import { cn } from '@/lib/utils'

export interface ProgressProps extends React.HTMLAttributes<HTMLDivElement> {
  value: number
  max?: number
  size?: 'sm' | 'md' | 'lg'
  variant?: 'default' | 'success' | 'warning' | 'error'
  showLabel?: boolean
  label?: string
  animated?: boolean
}

/**
 * Material Design 3 Progress Component
 *
 * Linear progress indicator for funding goals and loading states
 * - Smooth animations with cubic-bezier easing
 * - Multiple size and color variants
 * - Accessible with ARIA attributes
 * - Optional percentage label
 * - Minimal design with rounded ends
 */
const Progress = React.forwardRef<HTMLDivElement, ProgressProps>(
  (
    {
      className,
      value,
      max = 100,
      size = 'md',
      variant = 'default',
      showLabel = false,
      label,
      animated = true,
      ...props
    },
    ref
  ) => {
    const percentage = Math.min(Math.max((value / max) * 100, 0), 100)
    const isComplete = percentage >= 100

    const sizes = {
      sm: 'h-1.5',
      md: 'h-2.5',
      lg: 'h-4',
    }

    const variants = {
      default: {
        bg: 'bg-primary-100',
        fill: 'bg-primary',
      },
      success: {
        bg: 'bg-success-light/20',
        fill: 'bg-success',
      },
      warning: {
        bg: 'bg-warning-light/20',
        fill: 'bg-warning',
      },
      error: {
        bg: 'bg-error-light/20',
        fill: 'bg-error',
      },
    }

    const variantColors = variants[variant]

    const trackStyles = cn(
      'relative w-full overflow-hidden rounded-full',
      sizes[size],
      variantColors.bg,
      className
    )

    const fillStyles = cn(
      'h-full rounded-full transition-all',
      animated ? 'duration-500 ease-out' : 'duration-200',
      variantColors.fill
    )

    const labelStyles = cn(
      'text-sm font-medium',
      variant === 'default' && 'text-primary',
      variant === 'success' && 'text-success',
      variant === 'warning' && 'text-warning',
      variant === 'error' && 'text-error'
    )

    return (
      <div ref={ref} {...props}>
        {(showLabel || label) && (
          <div className="flex items-center justify-between mb-2">
            {label && <span className="text-sm text-gray-700 font-medium">{label}</span>}
            {showLabel && (
              <span className={labelStyles}>
                {Math.round(percentage)}%
                {isComplete && ' ✓'}
              </span>
            )}
          </div>
        )}

        <div
          className={trackStyles}
          role="progressbar"
          aria-valuenow={value}
          aria-valuemin={0}
          aria-valuemax={max}
          aria-label={label || 'Progress'}
        >
          <div
            className={fillStyles}
            style={{ width: `${percentage}%` }}
          />
        </div>
      </div>
    )
  }
)

Progress.displayName = 'Progress'

export { Progress }
