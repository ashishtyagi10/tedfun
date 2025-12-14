'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import {
  Heart,
  Users,
  GraduationCap,
  TrendingUp,
  ArrowRight,
  CheckCircle2,
  Search,
  FileText,
  HeartHandshake,
} from 'lucide-react'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'

export default function HomePage() {
  const stats = [
    { label: 'Students Helped', value: '500+', icon: Users },
    { label: 'Funds Raised', value: '₹25L+', icon: TrendingUp },
    { label: 'Active Donors', value: '300+', icon: Heart },
    { label: 'Success Stories', value: '150+', icon: GraduationCap },
  ]

  const howItWorks = [
    {
      step: 1,
      title: 'Browse Students',
      description:
        'Explore verified cases of students in need. Read their stories and understand their specific educational requirements.',
      icon: Search,
    },
    {
      step: 2,
      title: 'Choose to Support',
      description:
        'Select a student whose story resonates with you. Contribute any amount towards their education goals.',
      icon: Heart,
    },
    {
      step: 3,
      title: 'Track Impact',
      description:
        'Receive updates on how your contribution is making a difference. See the real impact of your generosity.',
      icon: TrendingUp,
    },
  ]

  const features = [
    'Verified student cases',
    '100% transparent donations',
    'Direct impact tracking',
    'Tax-deductible receipts',
    'Regular progress updates',
    'Secure payment processing',
  ]

  // Animation variants
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 },
  }

  const stagger = {
    animate: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary-50/50 via-white to-secondary-50/30" />

        <div className="container-app">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial="initial"
              animate="animate"
              variants={stagger}
              className="space-y-8"
            >
              {/* Badge */}
              <motion.div variants={fadeInUp} className="inline-flex">
                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-100 text-primary-800 text-sm font-medium">
                  <Heart className="w-4 h-4 fill-current" />
                  Non-Profit Education Platform
                </span>
              </motion.div>

              {/* Headline */}
              <motion.h1
                variants={fadeInUp}
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 tracking-tight text-balance"
              >
                Empowering Students Through{' '}
                <span className="text-primary-700">Community Support</span>
              </motion.h1>

              {/* Subheading */}
              <motion.p
                variants={fadeInUp}
                className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed"
              >
                Connect with deserving students in need. Fund their education,
                books, uniforms, and essential supplies. Transform lives, one
                student at a time.
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                variants={fadeInUp}
                className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4"
              >
                <Link href="/students" className="btn-primary text-base group">
                  Browse Students
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link href="/submit-case" className="btn-outline text-base">
                  Submit a Case
                </Link>
              </motion.div>

              {/* Trust Indicators */}
              <motion.div
                variants={fadeInUp}
                className="flex flex-wrap items-center justify-center gap-6 pt-8 text-sm text-gray-600"
              >
                {features.slice(0, 3).map((feature) => (
                  <div key={feature} className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary-700" />
                    <span>{feature}</span>
                  </div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="container-app">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
            {stats.map((stat, index) => {
              const Icon = stat.icon
              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 md:w-16 md:h-16 rounded-full bg-primary-100 text-primary-700 mb-4">
                    <Icon className="w-6 h-6 md:w-8 md:h-8" />
                  </div>
                  <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm md:text-base text-gray-600">
                    {stat.label}
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 md:py-28">
        <div className="container-app">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              How It Works
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Making a difference is simple. Follow these three steps to start
              supporting students today.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 md:gap-12 max-w-5xl mx-auto">
            {howItWorks.map((item, index) => {
              const Icon = item.icon
              return (
                <motion.div
                  key={item.step}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  className="relative"
                >
                  {/* Connector Line */}
                  {index < howItWorks.length - 1 && (
                    <div className="hidden md:block absolute top-12 left-[calc(50%+3rem)] right-[calc(-50%+3rem)] h-0.5 bg-gradient-to-r from-primary-200 to-secondary-200" />
                  )}

                  <div className="relative bg-white rounded-2xl p-8 card-elevated text-center">
                    {/* Step Number */}
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-secondary text-white text-sm font-bold flex items-center justify-center">
                      {item.step}
                    </div>

                    {/* Icon */}
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary-100 text-primary-700 mb-6">
                      <Icon className="w-8 h-8" />
                    </div>

                    {/* Content */}
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Featured Students Section - Placeholder */}
      <section className="py-20 md:py-28 bg-gray-50">
        <div className="container-app">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Students Who Need Your Support
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Meet some of the bright students waiting for your help to continue
              their education journey.
            </p>
          </div>

          {/* Placeholder Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {[1, 2, 3].map((i) => (
              <div key={i} className="card-elevated p-6 animate-pulse">
                <div className="aspect-video bg-gray-200 rounded-lg mb-4" />
                <div className="h-6 bg-gray-200 rounded mb-3 w-2/3" />
                <div className="space-y-2">
                  <div className="h-4 bg-gray-200 rounded w-full" />
                  <div className="h-4 bg-gray-200 rounded w-5/6" />
                </div>
                <div className="flex items-center gap-3 mt-6">
                  <div className="h-10 bg-gray-200 rounded flex-1" />
                  <div className="h-10 bg-gray-200 rounded w-20" />
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link href="/students" className="btn-primary text-base group">
              View All Students
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-28 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-700 via-primary-600 to-primary-800" />
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />

        <div className="container-app relative">
          <div className="max-w-3xl mx-auto text-center text-white">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <HeartHandshake className="w-16 h-16 mx-auto" />

              <h2 className="text-3xl md:text-4xl font-bold">
                Ready to Make a Difference?
              </h2>

              <p className="text-lg text-primary-100 leading-relaxed">
                Join hundreds of donors who are already changing lives. Whether
                you want to support a student or submit a case, we're here to
                help you make an impact.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  href="/students"
                  className="inline-flex items-center justify-center px-8 py-3 rounded-full bg-white text-primary-700 font-medium hover:bg-gray-100 transition-colors"
                >
                  Start Supporting
                </Link>
                <Link
                  href="/submit-case"
                  className="inline-flex items-center justify-center px-8 py-3 rounded-full border-2 border-white text-white font-medium hover:bg-white/10 transition-colors"
                >
                  Submit a Case
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
