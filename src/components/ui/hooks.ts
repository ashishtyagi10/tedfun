/**
 * Material Design 3 UI Components - Custom Hooks
 *
 * Reusable hooks for common UI component patterns
 */

import { useState, useEffect, useCallback, useRef } from 'react'

/**
 * useToggle - Simple boolean toggle hook
 *
 * @param initialValue - Initial boolean value
 * @returns [value, toggle, setValue]
 */
export function useToggle(initialValue = false): [boolean, () => void, (value: boolean) => void] {
  const [value, setValue] = useState(initialValue)

  const toggle = useCallback(() => {
    setValue((v) => !v)
  }, [])

  return [value, toggle, setValue]
}

/**
 * useDisclosure - Hook for managing open/close state
 *
 * Useful for modals, dialogs, dropdowns, etc.
 *
 * @returns {isOpen, onOpen, onClose, onToggle}
 */
export function useDisclosure(defaultIsOpen = false) {
  const [isOpen, setIsOpen] = useState(defaultIsOpen)

  const onOpen = useCallback(() => setIsOpen(true), [])
  const onClose = useCallback(() => setIsOpen(false), [])
  const onToggle = useCallback(() => setIsOpen((prev) => !prev), [])

  return {
    isOpen,
    onOpen,
    onClose,
    onToggle,
  }
}

/**
 * useHover - Detect hover state on an element
 *
 * @returns [ref, isHovered]
 */
export function useHover<T extends HTMLElement = HTMLElement>(): [
  React.RefObject<T | null>,
  boolean
] {
  const [isHovered, setIsHovered] = useState(false)
  const ref = useRef<T>(null)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    const handleMouseEnter = () => setIsHovered(true)
    const handleMouseLeave = () => setIsHovered(false)

    node.addEventListener('mouseenter', handleMouseEnter)
    node.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      node.removeEventListener('mouseenter', handleMouseEnter)
      node.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [])

  return [ref, isHovered]
}

/**
 * useFocus - Detect focus state on an element
 *
 * @returns [ref, isFocused]
 */
export function useFocus<T extends HTMLElement = HTMLElement>(): [
  React.RefObject<T | null>,
  boolean
] {
  const [isFocused, setIsFocused] = useState(false)
  const ref = useRef<T>(null)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    const handleFocus = () => setIsFocused(true)
    const handleBlur = () => setIsFocused(false)

    node.addEventListener('focus', handleFocus)
    node.addEventListener('blur', handleBlur)

    return () => {
      node.removeEventListener('focus', handleFocus)
      node.removeEventListener('blur', handleBlur)
    }
  }, [])

  return [ref, isFocused]
}

/**
 * useDebounce - Debounce a value
 *
 * Useful for search inputs, preventing excessive API calls
 *
 * @param value - Value to debounce
 * @param delay - Delay in milliseconds
 * @returns Debounced value
 */
export function useDebounce<T>(value: T, delay = 300): T {
  const [debouncedValue, setDebouncedValue] = useState<T>(value)

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value)
    }, delay)

    return () => {
      clearTimeout(handler)
    }
  }, [value, delay])

  return debouncedValue
}

/**
 * useMediaQuery - Detect if a media query matches
 *
 * @param query - Media query string
 * @returns Whether the query matches
 */
export function useMediaQuery(query: string): boolean {
  const [matches, setMatches] = useState(() => {
    if (typeof window !== 'undefined') {
      return window.matchMedia(query).matches
    }
    return false
  })

  useEffect(() => {
    if (typeof window === 'undefined') return

    const mediaQuery = window.matchMedia(query)
    const handler = (event: MediaQueryListEvent) => setMatches(event.matches)

    // Modern browsers
    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener('change', handler)
      return () => mediaQuery.removeEventListener('change', handler)
    }
    // Fallback for older browsers
    else {
      mediaQuery.addListener(handler)
      return () => mediaQuery.removeListener(handler)
    }
  }, [query])

  return matches
}

/**
 * useClickOutside - Detect clicks outside of an element
 *
 * Useful for closing dropdowns, modals, etc.
 *
 * @param callback - Function to call when clicked outside
 * @returns ref to attach to the element
 */
export function useClickOutside<T extends HTMLElement = HTMLElement>(
  callback: () => void
): React.RefObject<T | null> {
  const ref = useRef<T>(null)

  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        callback()
      }
    }

    document.addEventListener('mousedown', handleClick)
    return () => document.removeEventListener('mousedown', handleClick)
  }, [callback])

  return ref
}

/**
 * useKeyPress - Detect when a key is pressed
 *
 * @param targetKey - Key to detect (e.g., 'Escape', 'Enter')
 * @param callback - Function to call when key is pressed
 */
export function useKeyPress(targetKey: string, callback: () => void) {
  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      if (event.key === targetKey) {
        callback()
      }
    }

    document.addEventListener('keydown', handleKeyPress)
    return () => document.removeEventListener('keydown', handleKeyPress)
  }, [targetKey, callback])
}

/**
 * useLocalStorage - Persist state in localStorage
 *
 * @param key - localStorage key
 * @param initialValue - Initial value if key doesn't exist
 * @returns [value, setValue, removeValue]
 */
export function useLocalStorage<T>(
  key: string,
  initialValue: T
): [T, (value: T) => void, () => void] {
  const [storedValue, setStoredValue] = useState<T>(() => {
    if (typeof window === 'undefined') return initialValue

    try {
      const item = window.localStorage.getItem(key)
      return item ? JSON.parse(item) : initialValue
    } catch (error) {
      console.error(`Error reading localStorage key "${key}":`, error)
      return initialValue
    }
  })

  const setValue = useCallback(
    (value: T) => {
      try {
        setStoredValue(value)
        if (typeof window !== 'undefined') {
          window.localStorage.setItem(key, JSON.stringify(value))
        }
      } catch (error) {
        console.error(`Error setting localStorage key "${key}":`, error)
      }
    },
    [key]
  )

  const removeValue = useCallback(() => {
    try {
      setStoredValue(initialValue)
      if (typeof window !== 'undefined') {
        window.localStorage.removeItem(key)
      }
    } catch (error) {
      console.error(`Error removing localStorage key "${key}":`, error)
    }
  }, [key, initialValue])

  return [storedValue, setValue, removeValue]
}

/**
 * useInterval - Declarative setInterval hook
 *
 * @param callback - Function to call on interval
 * @param delay - Delay in milliseconds (null to pause)
 */
export function useInterval(callback: () => void, delay: number | null) {
  const savedCallback = useRef(callback)

  useEffect(() => {
    savedCallback.current = callback
  }, [callback])

  useEffect(() => {
    if (delay === null) return

    const id = setInterval(() => savedCallback.current(), delay)
    return () => clearInterval(id)
  }, [delay])
}

/**
 * useWindowSize - Get current window dimensions
 *
 * @returns {width, height}
 */
export function useWindowSize() {
  const [windowSize, setWindowSize] = useState<{
    width: number
    height: number
  }>(() => {
    if (typeof window !== 'undefined') {
      return {
        width: window.innerWidth,
        height: window.innerHeight,
      }
    }
    return { width: 0, height: 0 }
  })

  useEffect(() => {
    if (typeof window === 'undefined') return

    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      })
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return windowSize
}

/**
 * useScrollPosition - Get current scroll position
 *
 * @returns {x, y}
 */
export function useScrollPosition() {
  const [scrollPosition, setScrollPosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    if (typeof window === 'undefined') return

    const handleScroll = () => {
      setScrollPosition({
        x: window.scrollX,
        y: window.scrollY,
      })
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return scrollPosition
}

/**
 * usePrevious - Get previous value of a state
 *
 * @param value - Value to track
 * @returns Previous value
 */
export function usePrevious<T>(value: T): T | undefined {
  const ref = useRef<T | undefined>(undefined)

  useEffect(() => {
    ref.current = value
  }, [value])

  return ref.current
}

/**
 * useMounted - Check if component is mounted
 *
 * @returns Whether component is mounted
 */
export function useMounted(): boolean {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    return () => setMounted(false)
  }, [])

  return mounted
}

/**
 * useClipboard - Copy text to clipboard
 *
 * @returns {copy, copied}
 */
export function useClipboard(timeout = 2000) {
  const [copied, setCopied] = useState(false)

  const copy = useCallback(
    (text: string) => {
      if (typeof navigator === 'undefined' || !navigator.clipboard) {
        console.warn('Clipboard API not available')
        return
      }

      navigator.clipboard.writeText(text).then(() => {
        setCopied(true)
        setTimeout(() => setCopied(false), timeout)
      })
    },
    [timeout]
  )

  return { copy, copied }
}
