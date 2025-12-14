import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { AuthProvider } from '@/providers/AuthProvider'
import '@/styles/globals.css'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: {
    default: 'The Education Foundation - Empowering Students Through Community Support',
    template: '%s | The Education Foundation',
  },
  description:
    'The Education Foundation is a non-profit platform connecting donors with students in need. Help fund education, books, uniforms, and essential supplies for deserving students.',
  keywords: [
    'education',
    'non-profit',
    'student support',
    'donations',
    'scholarships',
    'community',
    'charity',
  ],
  authors: [{ name: 'The Education Foundation' }],
  creator: 'The Education Foundation',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://tedfun.org',
    title: 'The Education Foundation - Empowering Students Through Community Support',
    description:
      'Connect with students in need and make a lasting impact through education funding.',
    siteName: 'The Education Foundation',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The Education Foundation - Empowering Students Through Community Support',
    description:
      'Connect with students in need and make a lasting impact through education funding.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
    ],
    apple: '/icon.svg',
  },
  manifest: '/site.webmanifest',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className={inter.className}>
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  )
}
