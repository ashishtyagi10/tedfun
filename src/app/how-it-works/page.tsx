'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import {
  Search,
  Heart,
  TrendingUp,
  Shield,
  CheckCircle2,
  Users,
  FileText,
  CreditCard,
  Bell,
  ArrowRight,
} from 'lucide-react'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'

export default function HowItWorksPage() {
  const donorSteps = [
    {
      step: 1,
      title: 'Browse Students',
      description:
        'Explore verified profiles of students in need. Read their stories, understand their educational goals, and see exactly what support they need.',
      icon: Search,
    },
    {
      step: 2,
      title: 'Choose to Support',
      description:
        'Select a student whose story resonates with you. Contribute any amount - every rupee makes a difference in their educational journey.',
      icon: Heart,
    },
    {
      step: 3,
      title: 'Make a Donation',
      description:
        'Complete your donation securely through our payment system. Choose one-time or recurring support. Get instant tax receipts.',
      icon: CreditCard,
    },
    {
      step: 4,
      title: 'Track Impact',
      description:
        'Receive regular updates on how your contribution is being used. See the real impact of your generosity through progress reports.',
      icon: TrendingUp,
    },
  ]

  const submissionSteps = [
    {
      step: 1,
      title: 'Submit a Case',
      description:
        'Fill out our detailed form with student information, educational needs, and supporting documents.',
      icon: FileText,
    },
    {
      step: 2,
      title: 'Verification',
      description:
        'Our team verifies all information, including school enrollment, family situation, and financial need.',
      icon: Shield,
    },
    {
      step: 3,
      title: 'Profile Creation',
      description:
        'Once approved, we create a detailed profile that helps donors understand and connect with the student.',
      icon: Users,
    },
    {
      step: 4,
      title: 'Receive Support',
      description:
        'Donations are collected and disbursed directly for educational expenses as specified.',
      icon: Bell,
    },
  ]

  const trustFeatures = [
    {
      title: '100% Verified Cases',
      description:
        'Every student case goes through a thorough verification process before being listed.',
    },
    {
      title: 'Transparent Tracking',
      description:
        'Track exactly how donations are used with detailed expense reports and updates.',
    },
    {
      title: 'Direct Impact',
      description:
        'Funds go directly towards educational expenses - fees, books, uniforms, supplies.',
    },
    {
      title: 'Tax Benefits',
      description:
        'All donations are eligible for tax deductions under Section 80G.',
    },
    {
      title: 'Secure Payments',
      description:
        'Industry-standard encryption ensures your payment information is always safe.',
    },
    {
      title: 'Regular Updates',
      description:
        'Receive progress reports and updates on students you support.',
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 bg-gradient-to-br from-primary-50/50 via-white to-secondary-50/30">
        <div className="container-app">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6"
            >
              How It Works
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-lg text-gray-600 leading-relaxed"
            >
              Whether you want to support a student or submit a case for
              assistance, our platform makes it simple, transparent, and
              impactful.
            </motion.p>
          </div>
        </div>
      </section>

      {/* For Donors Section */}
      <section className="py-16 md:py-24">
        <div className="container-app">
          <div className="text-center mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              For Donors
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Making a difference is simple. Follow these steps to start
              supporting students today.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {donorSteps.map((item, index) => {
              const Icon = item.icon
              return (
                <motion.div
                  key={item.step}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="relative"
                >
                  <div className="card-elevated p-8 text-center h-full">
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-primary-600 text-white text-sm font-bold flex items-center justify-center">
                      {item.step}
                    </div>
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary-100 text-primary-700 mb-6">
                      <Icon className="w-8 h-8" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              )
            })}
          </div>

          <div className="text-center mt-12">
            <Link href="/students" className="btn-primary text-base group">
              Browse Students
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* For Case Submission Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container-app">
          <div className="text-center mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              For Case Submissions
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Know a student who needs help? Here's how to submit their case for
              support.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {submissionSteps.map((item, index) => {
              const Icon = item.icon
              return (
                <motion.div
                  key={item.step}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="relative"
                >
                  <div className="bg-white rounded-2xl p-8 text-center h-full shadow-sm">
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-secondary text-white text-sm font-bold flex items-center justify-center">
                      {item.step}
                    </div>
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-secondary-100 text-secondary-700 mb-6">
                      <Icon className="w-8 h-8" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              )
            })}
          </div>

          <div className="text-center mt-12">
            <Link href="/submit-case" className="btn-outline text-base">
              Submit a Case
            </Link>
          </div>
        </div>
      </section>

      {/* Trust & Transparency Section */}
      <section className="py-16 md:py-24">
        <div className="container-app">
          <div className="text-center mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Trust & Transparency
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We're committed to ensuring every donation makes a real impact.
              Here's how we maintain trust.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {trustFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="flex gap-4 p-6 rounded-xl bg-gray-50"
              >
                <CheckCircle2 className="w-6 h-6 text-primary-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-gray-600">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-primary-700">
        <div className="container-app">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Ready to Make a Difference?
            </h2>
            <p className="text-primary-100 mb-8">
              Join our community of donors and help transform lives through
              education.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/students"
                className="inline-flex items-center justify-center px-8 py-3 rounded-full bg-white text-primary-700 font-medium hover:bg-gray-100 transition-colors"
              >
                Start Supporting
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center justify-center px-8 py-3 rounded-full border-2 border-white text-white font-medium hover:bg-white/10 transition-colors"
              >
                Learn More About Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
