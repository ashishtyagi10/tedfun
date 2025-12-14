'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import {
  Heart,
  Target,
  Eye,
  Users,
  Shield,
  Award,
  ArrowRight,
  GraduationCap,
  Lightbulb,
  HandHeart,
} from 'lucide-react'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'

export default function AboutPage() {
  const values = [
    {
      title: 'Transparency',
      description:
        'Every donation is tracked and reported. Donors see exactly how their contributions are used.',
      icon: Eye,
    },
    {
      title: 'Integrity',
      description:
        'We verify every case thoroughly. Only genuine students in need are listed on our platform.',
      icon: Shield,
    },
    {
      title: 'Impact',
      description:
        'We focus on measurable outcomes. Education changes lives, and we help make it accessible.',
      icon: Target,
    },
    {
      title: 'Community',
      description:
        'We believe in the power of collective action. Together, we can transform education access.',
      icon: Users,
    },
  ]

  const stats = [
    { label: 'Students Supported', value: '500+' },
    { label: 'Total Funds Raised', value: '₹25L+' },
    { label: 'Active Donors', value: '300+' },
    { label: 'Success Rate', value: '95%' },
  ]

  const team = [
    {
      name: 'Our Mission',
      role: 'Why We Exist',
      description:
        'To bridge the gap between generous donors and deserving students, ensuring that financial constraints never stand in the way of education.',
      icon: Target,
    },
    {
      name: 'Our Vision',
      role: 'What We Aim For',
      description:
        'A world where every student has access to quality education, supported by a community that believes in their potential.',
      icon: Lightbulb,
    },
    {
      name: 'Our Approach',
      role: 'How We Work',
      description:
        'We verify, connect, and track. Every student is verified, every donation is tracked, and every impact is measured.',
      icon: HandHeart,
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 bg-gradient-to-br from-primary-50/50 via-white to-secondary-50/30">
        <div className="container-app">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-100 text-primary-800 text-sm font-medium mb-6"
            >
              <Heart className="w-4 h-4 fill-current" />
              About Us
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6"
            >
              Empowering Students Through{' '}
              <span className="text-primary-700">Community Support</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg text-gray-600 leading-relaxed"
            >
              The Education Foundation is a non-profit platform dedicated to
              connecting generous donors with deserving students. We believe
              every child deserves access to quality education, regardless of
              their financial background.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-gray-50">
        <div className="container-app">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-3xl md:text-4xl font-bold text-primary-700 mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission, Vision, Approach */}
      <section className="py-16 md:py-24">
        <div className="container-app">
          <div className="grid md:grid-cols-3 gap-8">
            {team.map((item, index) => {
              const Icon = item.icon
              return (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="card-elevated p-8 text-center"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary-100 text-primary-700 mb-6">
                    <Icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {item.name}
                  </h3>
                  <p className="text-sm text-primary-600 font-medium mb-4">
                    {item.role}
                  </p>
                  <p className="text-gray-600 leading-relaxed">
                    {item.description}
                  </p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container-app">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                  Our Story
                </h2>
                <div className="space-y-4 text-gray-600 leading-relaxed">
                  <p>
                    The Education Foundation was born from a simple observation:
                    countless bright students are forced to abandon their
                    educational dreams due to financial constraints.
                  </p>
                  <p>
                    We started with a mission to change this. By creating a
                    transparent platform that connects donors directly with
                    students, we've helped hundreds of young minds continue
                    their education.
                  </p>
                  <p>
                    Today, we're proud to have built a community of supporters
                    who believe that education is the most powerful tool for
                    change.
                  </p>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="aspect-square bg-gradient-to-br from-primary-100 to-secondary-100 rounded-2xl flex items-center justify-center"
              >
                <GraduationCap className="w-32 h-32 text-primary-300" />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 md:py-24" id="mission">
        <div className="container-app">
          <div className="text-center mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Our Values
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              These core values guide everything we do at The Education
              Foundation.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon
              return (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-primary-100 text-primary-700 mb-4">
                    <Icon className="w-7 h-7" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    {value.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {value.description}
                  </p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Recognition */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container-app">
          <div className="max-w-3xl mx-auto text-center">
            <Award className="w-16 h-16 text-primary-600 mx-auto mb-6" />
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Recognized & Trusted
            </h2>
            <p className="text-gray-600 mb-8">
              We're registered as a non-profit organization and all donations
              are eligible for tax deductions under Section 80G of the Income
              Tax Act.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="px-4 py-2 bg-white rounded-full text-sm text-gray-600 shadow-sm">
                Registered Non-Profit
              </div>
              <div className="px-4 py-2 bg-white rounded-full text-sm text-gray-600 shadow-sm">
                80G Certified
              </div>
              <div className="px-4 py-2 bg-white rounded-full text-sm text-gray-600 shadow-sm">
                Transparent Operations
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-primary-700">
        <div className="container-app">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Join Our Mission
            </h2>
            <p className="text-primary-100 mb-8">
              Whether you want to donate, volunteer, or submit a student case,
              there's a place for you in our community.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/students"
                className="inline-flex items-center justify-center px-8 py-3 rounded-full bg-white text-primary-700 font-medium hover:bg-gray-100 transition-colors group"
              >
                Support a Student
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-3 rounded-full border-2 border-white text-white font-medium hover:bg-white/10 transition-colors"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
