/**
 * Material Design 3 UI Components - Type Definitions
 *
 * Centralized type definitions for the TedFun UI component library
 */

/**
 * Common Props
 */

/** Standard HTML div attributes */
export type DivProps = React.HTMLAttributes<HTMLDivElement>

/** Standard HTML button attributes */
export type ButtonHTMLProps = React.ButtonHTMLAttributes<HTMLButtonElement>

/** Standard HTML input attributes */
export type InputHTMLProps = React.InputHTMLAttributes<HTMLInputElement>

/** Standard HTML span attributes */
export type SpanProps = React.HTMLAttributes<HTMLSpanElement>

/**
 * Size Variants
 */

/** Standard component sizes */
export type Size = 'sm' | 'md' | 'lg'

/** Extended sizes for avatars and typography */
export type ExtendedSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl'

/**
 * Color Variants
 */

/** Primary color variants from design system */
export type ColorVariant = 'primary' | 'secondary' | 'success' | 'warning' | 'error' | 'gray'

/** Status color variants for badges and progress */
export type StatusVariant = 'default' | 'success' | 'warning' | 'error'

/** Priority levels for needs */
export type PriorityVariant = 'urgent' | 'high' | 'medium' | 'low'

/** Badge state variants */
export type BadgeVariant =
  | 'urgent'
  | 'high'
  | 'medium'
  | 'low'
  | 'funded'
  | 'active'
  | 'pending'
  | 'default'

/**
 * Component Variants
 */

/** Button style variants following Material Design 3 */
export type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'text'

/** Card container variants */
export type CardVariant = 'elevated' | 'outlined' | 'filled'

/** Avatar shape variants */
export type AvatarVariant = 'circle' | 'rounded' | 'square'

/** Skeleton loading variants */
export type SkeletonVariant = 'text' | 'circular' | 'rectangular' | 'rounded'

/**
 * Alignment Options
 */

/** Horizontal alignment for footer and content */
export type HorizontalAlign = 'left' | 'center' | 'right' | 'between'

/** Icon position in buttons */
export type IconPosition = 'left' | 'right'

/**
 * Animation Types
 */

/** Skeleton animation styles */
export type SkeletonAnimation = 'pulse' | 'wave' | 'none'

/**
 * Component State Types
 */

/** Loading state for buttons and forms */
export interface LoadingState {
  loading?: boolean
}

/** Disabled state for interactive components */
export interface DisabledState {
  disabled?: boolean
}

/** Error state for inputs and forms */
export interface ErrorState {
  error?: string
}

/** Full width option for components */
export interface FullWidthOption {
  fullWidth?: boolean
}

/**
 * Icon Props
 */

/** Icon with position option */
export interface IconWithPosition {
  icon?: React.ReactNode
  iconPosition?: IconPosition
}

/** Left and right icon options */
export interface DualIconOption {
  leftIcon?: React.ReactNode
  rightIcon?: React.ReactNode
}

/**
 * Label and Text Props
 */

/** Label and helper text for inputs */
export interface LabeledInput {
  label?: string
  helperText?: string
}

/** Title and subtitle for headers */
export interface TitledContent {
  title?: string
  subtitle?: string
}

/**
 * Progress and Value Props
 */

/** Progress/value tracking */
export interface ValueTracking {
  value: number
  max?: number
}

/** Progress display options */
export interface ProgressDisplay extends ValueTracking {
  showLabel?: boolean
  label?: string
  animated?: boolean
}

/**
 * Avatar Props
 */

/** Avatar image props */
export interface AvatarImage {
  src?: string
  alt?: string
  name?: string
}

/**
 * Badge and Notification Props
 */

/** Notification count props */
export interface NotificationCount {
  count?: number
  max?: number
  showZero?: boolean
}

/** Badge indicator options */
export interface BadgeIndicator {
  dot?: boolean
  icon?: React.ReactNode
}

/**
 * Skeleton Props
 */

/** Skeleton dimension options */
export interface SkeletonDimensions {
  width?: string | number
  height?: string | number
}

/** Skeleton card options */
export interface SkeletonCardOptions {
  hasImage?: boolean
  hasAvatar?: boolean
  hasFooter?: boolean
}

/** Skeleton list options */
export interface SkeletonListOptions {
  count?: number
  hasAvatar?: boolean
}

/**
 * Utility Types
 */

/** Omit className from props (for internal use) */
export type OmitClassName<T> = Omit<T, 'className'>

/** Make all properties optional */
export type PartialProps<T> = {
  [P in keyof T]?: T[P]
}

/** Extract variant type from component props */
export type ExtractVariant<T> = T extends { variant?: infer V } ? V : never

/**
 * Component Ref Types
 */

/** Button ref type */
export type ButtonRef = HTMLButtonElement

/** Input ref type */
export type InputRef = HTMLInputElement

/** Div ref type */
export type DivRef = HTMLDivElement

/** Span ref type */
export type SpanRef = HTMLSpanElement

/**
 * Forwarded Ref Component Type
 */

/** Generic forwarded ref component type */
export type ForwardRefComponent<T, P> = React.ForwardRefExoticComponent<
  React.PropsWithoutRef<P> & React.RefAttributes<T>
>

/**
 * Event Handler Types
 */

/** Generic change event handler */
export type ChangeHandler<T = HTMLInputElement> = (event: React.ChangeEvent<T>) => void

/** Generic click event handler */
export type ClickHandler<T = HTMLButtonElement> = (event: React.MouseEvent<T>) => void

/** Generic focus event handler */
export type FocusHandler<T = HTMLInputElement> = (event: React.FocusEvent<T>) => void

/** Generic submit event handler */
export type SubmitHandler = (event: React.FormEvent<HTMLFormElement>) => void

/**
 * Composite Component Types
 */

/** Card with all sub-components */
export interface CardComposition {
  Card: ForwardRefComponent<DivRef, any>
  CardHeader: ForwardRefComponent<DivRef, any>
  CardContent: ForwardRefComponent<DivRef, any>
  CardFooter: ForwardRefComponent<DivRef, any>
}

/** Avatar with group component */
export interface AvatarComposition {
  Avatar: ForwardRefComponent<DivRef, any>
  AvatarGroup: ForwardRefComponent<DivRef, any>
}

/** Badge with notification variant */
export interface BadgeComposition {
  Badge: ForwardRefComponent<SpanRef, any>
  NotificationBadge: ForwardRefComponent<SpanRef, any>
}

/** Skeleton with preset variants */
export interface SkeletonComposition {
  Skeleton: ForwardRefComponent<DivRef, any>
  SkeletonCard: ForwardRefComponent<DivRef, any>
  SkeletonList: ForwardRefComponent<DivRef, any>
  SkeletonText: ForwardRefComponent<DivRef, any>
}

/**
 * Design System Constants
 */

/** Material Design 3 elevation levels */
export const ELEVATION_LEVELS = [0, 1, 2, 3, 4, 5] as const
export type ElevationLevel = (typeof ELEVATION_LEVELS)[number]

/** Border radius values from design system */
export const BORDER_RADIUS = {
  xs: '4px',
  sm: '8px',
  md: '12px',
  lg: '16px',
  xl: '28px',
  full: '9999px',
} as const

/** Spacing scale (4px base unit) */
export const SPACING_SCALE = [0, 4, 8, 12, 16, 24, 32, 40, 48, 64] as const
export type SpacingValue = (typeof SPACING_SCALE)[number]

/** Animation duration values */
export const ANIMATION_DURATION = {
  fast: 150,
  normal: 200,
  slow: 300,
} as const

/** Transition easing curves */
export const EASING = {
  standard: 'cubic-bezier(0.2, 0, 0, 1)',
  emphasized: 'cubic-bezier(0.05, 0.7, 0.1, 1)',
  decelerated: 'cubic-bezier(0.0, 0.0, 0.2, 1)',
  accelerated: 'cubic-bezier(0.4, 0.0, 1, 1)',
} as const

/**
 * Theme Types
 */

/** Color palette structure */
export interface ColorPalette {
  50: string
  100: string
  200: string
  300: string
  400: string
  500: string
  600: string
  700: string
  800: string
  900: string
  DEFAULT: string
}

/** Surface color tokens */
export interface SurfaceColors {
  DEFAULT: string
  dim: string
  bright: string
  container: {
    lowest: string
    low: string
    DEFAULT: string
    high: string
    highest: string
  }
}

/** Complete theme structure */
export interface Theme {
  colors: {
    primary: ColorPalette
    secondary: ColorPalette
    surface: SurfaceColors
    success: {
      DEFAULT: string
      light: string
      dark: string
    }
    error: {
      DEFAULT: string
      light: string
      dark: string
    }
    warning: {
      DEFAULT: string
      light: string
      dark: string
    }
  }
  elevation: {
    1: string
    2: string
    3: string
    4: string
    5: string
  }
  borderRadius: typeof BORDER_RADIUS
  spacing: typeof SPACING_SCALE
}

/**
 * Accessibility Props
 */

/** ARIA label props */
export interface AriaLabeled {
  'aria-label'?: string
  'aria-labelledby'?: string
}

/** ARIA described props */
export interface AriaDescribed {
  'aria-describedby'?: string
}

/** ARIA state props */
export interface AriaState {
  'aria-busy'?: boolean
  'aria-invalid'?: boolean
  'aria-disabled'?: boolean
}

/** Complete accessibility props */
export interface AccessibilityProps extends AriaLabeled, AriaDescribed, AriaState {
  role?: string
  tabIndex?: number
}
