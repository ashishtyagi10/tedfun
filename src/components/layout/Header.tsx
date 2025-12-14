'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useAuthContext } from '@/providers/AuthProvider'
import { Menu, X, Heart } from 'lucide-react'
import { cn } from '@/lib/utils'

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { isAuthenticated } = useAuthContext()

  const navigation = [
    { name: 'Students', href: '/students' },
    { name: 'How It Works', href: '/how-it-works' },
    { name: 'About', href: '/about' },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <nav className="container-app" aria-label="Main navigation">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2 text-primary-700 hover:text-primary-800 transition-colors"
            aria-label="The Education Foundation Home"
          >
            <Heart className="w-7 h-7 md:w-8 md:h-8 fill-current" />
            <span className="font-bold text-lg md:text-xl tracking-tight">
              The Education Foundation
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:gap-8">
            <div className="flex items-center gap-6">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-sm font-medium text-gray-700 hover:text-primary-700 transition-colors link-underline"
                >
                  {item.name}
                </Link>
              ))}
            </div>

            {/* Auth CTA */}
            <div className="flex items-center gap-3">
              {isAuthenticated ? (
                <Link href="/dashboard" className="btn-primary text-sm">
                  Dashboard
                </Link>
              ) : (
                <>
                  <Link
                    href="/auth/signin"
                    className="text-sm font-medium text-gray-700 hover:text-primary-700 transition-colors"
                  >
                    Sign In
                  </Link>
                  <Link href="/auth/signup" className="btn-primary text-sm">
                    Get Started
                  </Link>
                </>
              )}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="md:hidden p-2 -mr-2 text-gray-700 hover:text-primary-700 transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 animate-slide-down">
            <div className="flex flex-col gap-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-base font-medium text-gray-700 hover:text-primary-700 transition-colors py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}

              <div className="border-t border-gray-100 pt-4 mt-2 flex flex-col gap-3">
                {isAuthenticated ? (
                  <Link
                    href="/dashboard"
                    className="btn-primary text-sm text-center"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Dashboard
                  </Link>
                ) : (
                  <>
                    <Link
                      href="/auth/signin"
                      className="btn-outline text-sm text-center"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Sign In
                    </Link>
                    <Link
                      href="/auth/signup"
                      className="btn-primary text-sm text-center"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Get Started
                    </Link>
                  </>
                )}
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
