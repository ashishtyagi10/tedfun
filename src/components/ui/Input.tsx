import * as React from 'react'
import { cn } from '@/lib/utils'

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string
  helperText?: string
  error?: string
  leftIcon?: React.ReactNode
  rightIcon?: React.ReactNode
  fullWidth?: boolean
}

/**
 * Material Design 3 Input Component
 *
 * Implements M3 text field specifications with filled style
 * - Label animation on focus
 * - Helper text and error states
 * - Icon support (left and right)
 * - Accessible with proper ARIA attributes
 * - Minimal design with generous spacing
 */
const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      className,
      label,
      helperText,
      error,
      leftIcon,
      rightIcon,
      fullWidth = false,
      disabled,
      id,
      type = 'text',
      ...props
    },
    ref
  ) => {
    const [isFocused, setIsFocused] = React.useState(false)
    const [hasValue, setHasValue] = React.useState(false)
    const inputId = id || React.useId()
    const helperId = helperText ? `${inputId}-helper` : undefined
    const errorId = error ? `${inputId}-error` : undefined

    const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
      setIsFocused(true)
      props.onFocus?.(e)
    }

    const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
      setIsFocused(false)
      setHasValue(!!e.target.value)
      props.onBlur?.(e)
    }

    const containerStyles = cn(
      'relative flex flex-col gap-1',
      fullWidth && 'w-full'
    )

    const inputWrapperStyles = cn(
      'relative flex items-center',
      'rounded-lg border-2 bg-white transition-all duration-200',
      'focus-within:ring-2 focus-within:ring-offset-1',
      error
        ? 'border-error focus-within:border-error focus-within:ring-error/20'
        : 'border-gray-300 focus-within:border-primary focus-within:ring-primary/20',
      disabled && 'bg-gray-50 cursor-not-allowed opacity-60'
    )

    const inputStyles = cn(
      'flex-1 px-4 py-3 bg-transparent',
      'text-base text-gray-900 placeholder:text-gray-400',
      'outline-none transition-all duration-200',
      'disabled:cursor-not-allowed',
      leftIcon && 'pl-2',
      rightIcon && 'pr-2'
    )

    const labelStyles = cn(
      'absolute left-4 pointer-events-none transition-all duration-200',
      'text-gray-600 font-medium',
      isFocused || hasValue || props.value || props.defaultValue
        ? '-top-2.5 text-xs bg-white px-1.5'
        : 'top-3 text-base',
      error ? 'text-error' : 'text-gray-600',
      disabled && 'text-gray-400',
      leftIcon && (isFocused || hasValue || props.value || props.defaultValue ? 'left-4' : 'left-12')
    )

    const iconStyles = 'flex items-center justify-center text-gray-500 px-3'

    return (
      <div className={containerStyles}>
        <div className={inputWrapperStyles}>
          {leftIcon && <div className={iconStyles}>{leftIcon}</div>}

          <input
            ref={ref}
            id={inputId}
            type={type}
            className={inputStyles}
            disabled={disabled}
            onFocus={handleFocus}
            onBlur={handleBlur}
            aria-invalid={!!error}
            aria-describedby={error ? errorId : helperId}
            {...props}
          />

          {label && (
            <label htmlFor={inputId} className={labelStyles}>
              {label}
            </label>
          )}

          {rightIcon && <div className={iconStyles}>{rightIcon}</div>}
        </div>

        {error && (
          <p id={errorId} className="text-sm text-error font-medium px-1" role="alert">
            {error}
          </p>
        )}

        {helperText && !error && (
          <p id={helperId} className="text-sm text-gray-600 px-1">
            {helperText}
          </p>
        )}
      </div>
    )
  }
)

Input.displayName = 'Input'

export { Input }
