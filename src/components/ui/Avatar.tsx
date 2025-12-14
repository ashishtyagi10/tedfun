import * as React from 'react'
import { cn, getInitials } from '@/lib/utils'

export interface AvatarProps extends React.HTMLAttributes<HTMLDivElement> {
  src?: string
  alt?: string
  name?: string
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl'
  variant?: 'circle' | 'rounded' | 'square'
  fallbackColor?: 'primary' | 'secondary' | 'success' | 'warning' | 'error' | 'gray'
}

/**
 * Material Design 3 Avatar Component
 *
 * User avatar with intelligent fallback system
 * - Image with lazy loading
 * - Initials fallback using getInitials utility
 * - Multiple size variants (24px to 96px)
 * - Shape variants (circle, rounded, square)
 * - Color variants for fallback backgrounds
 * - Accessible with proper alt text
 */
const Avatar = React.forwardRef<HTMLDivElement, AvatarProps>(
  (
    {
      className,
      src,
      alt,
      name,
      size = 'md',
      variant = 'circle',
      fallbackColor = 'primary',
      ...props
    },
    ref
  ) => {
    const [imageError, setImageError] = React.useState(false)
    const [imageLoaded, setImageLoaded] = React.useState(false)

    const handleImageError = () => {
      setImageError(true)
    }

    const handleImageLoad = () => {
      setImageLoaded(true)
    }

    // Reset error state when src changes
    React.useEffect(() => {
      setImageError(false)
      setImageLoaded(false)
    }, [src])

    const sizes = {
      xs: 'h-6 w-6 text-xs',
      sm: 'h-8 w-8 text-sm',
      md: 'h-10 w-10 text-base',
      lg: 'h-12 w-12 text-lg',
      xl: 'h-16 w-16 text-xl',
      '2xl': 'h-24 w-24 text-3xl',
    }

    const variants = {
      circle: 'rounded-full',
      rounded: 'rounded-lg',
      square: 'rounded-md',
    }

    const colors = {
      primary: 'bg-primary text-white',
      secondary: 'bg-secondary text-white',
      success: 'bg-success text-white',
      warning: 'bg-warning text-white',
      error: 'bg-error text-white',
      gray: 'bg-gray-400 text-white',
    }

    const containerStyles = cn(
      'relative inline-flex items-center justify-center flex-shrink-0',
      'overflow-hidden transition-all duration-200',
      sizes[size],
      variants[variant],
      className
    )

    const initials = name ? getInitials(name) : '?'
    const displayAlt = alt || name || 'User avatar'

    const shouldShowImage = src && !imageError
    const shouldShowFallback = !src || imageError

    return (
      <div ref={ref} className={containerStyles} {...props}>
        {shouldShowImage && (
          <img
            src={src}
            alt={displayAlt}
            className={cn(
              'h-full w-full object-cover transition-opacity duration-200',
              imageLoaded ? 'opacity-100' : 'opacity-0'
            )}
            onError={handleImageError}
            onLoad={handleImageLoad}
            loading="lazy"
          />
        )}

        {shouldShowFallback && (
          <div
            className={cn(
              'absolute inset-0 flex items-center justify-center',
              'font-semibold uppercase tracking-wider',
              colors[fallbackColor]
            )}
            aria-label={displayAlt}
          >
            {initials}
          </div>
        )}

        {!imageLoaded && shouldShowImage && (
          <div
            className={cn(
              'absolute inset-0 flex items-center justify-center',
              'bg-gray-200 animate-pulse'
            )}
            aria-hidden="true"
          />
        )}
      </div>
    )
  }
)

Avatar.displayName = 'Avatar'

/**
 * Avatar Group Component
 *
 * Displays multiple avatars in an overlapping stack
 * - Configurable overlap and max display count
 * - Shows "+N" indicator for overflow
 */
export interface AvatarGroupProps extends React.HTMLAttributes<HTMLDivElement> {
  max?: number
  size?: AvatarProps['size']
  variant?: AvatarProps['variant']
}

const AvatarGroup = React.forwardRef<HTMLDivElement, AvatarGroupProps>(
  ({ className, children, max = 5, size = 'md', variant = 'circle', ...props }, ref) => {
    const childrenArray = React.Children.toArray(children)
    const displayChildren = max ? childrenArray.slice(0, max) : childrenArray
    const overflow = max && childrenArray.length > max ? childrenArray.length - max : 0

    return (
      <div ref={ref} className={cn('flex items-center -space-x-2', className)} {...props}>
        {displayChildren.map((child, index) => (
          <div
            key={index}
            className="ring-2 ring-white transition-transform hover:scale-110 hover:z-10"
            style={{ zIndex: displayChildren.length - index }}
          >
            {React.isValidElement(child)
              ? React.cloneElement(child as React.ReactElement<AvatarProps>, {
                  size,
                  variant,
                })
              : child}
          </div>
        ))}

        {overflow > 0 && (
          <Avatar
            size={size}
            variant={variant}
            fallbackColor="gray"
            name={`+${overflow}`}
            className="ring-2 ring-white"
          />
        )}
      </div>
    )
  }
)

AvatarGroup.displayName = 'AvatarGroup'

export { Avatar, AvatarGroup }
