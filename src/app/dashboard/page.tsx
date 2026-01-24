'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { useAuthContext } from '@/providers/AuthProvider'
import Link from 'next/link'
import { motion } from 'framer-motion'
import {
  Heart,
  Users,
  TrendingUp,
  ArrowRight,
  GraduationCap,
  Calendar,
  Settings,
  Bell,
  Gift,
  History,
  Star,
  ChevronRight,
} from 'lucide-react'
import { Card, CardContent } from '@/components/ui/Card'
import { Progress } from '@/components/ui/Progress'
import { Header } from '@/components/layout/Header'

export default function DashboardPage() {
  const router = useRouter()
  const { user, loading } = useAuthContext()

  useEffect(() => {
    if (!loading && !user) {
      router.push('/auth/signin')
    }
  }, [user, loading, router])

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-50/50 via-white to-secondary-50/30">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary-600"></div>
      </div>
    )
  }

  if (!user) {
    return null
  }

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.4 },
  }

  const stagger = {
    animate: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const stats = [
    {
      label: 'Total Donated',
      value: '$0.00',
      icon: Heart,
      color: 'text-rose-500',
      bgColor: 'bg-rose-50',
    },
    {
      label: 'Students Supported',
      value: '0',
      icon: Users,
      color: 'text-primary-600',
      bgColor: 'bg-primary-50',
    },
    {
      label: 'Impact Score',
      value: '0',
      icon: TrendingUp,
      color: 'text-emerald-500',
      bgColor: 'bg-emerald-50',
    },
    {
      label: 'Donations Made',
      value: '0',
      icon: Gift,
      color: 'text-secondary-500',
      bgColor: 'bg-secondary-50',
    },
  ]

  const quickActions = [
    {
      title: 'Browse Students',
      description: 'Find students who need your support',
      icon: GraduationCap,
      href: '/students',
      color: 'bg-primary-600 hover:bg-primary-700',
    },
    {
      title: 'Donation History',
      description: 'View your past contributions',
      icon: History,
      href: '/dashboard/history',
      color: 'bg-secondary-500 hover:bg-secondary-600',
    },
    {
      title: 'Account Settings',
      description: 'Manage your profile and preferences',
      icon: Settings,
      href: '/dashboard/settings',
      color: 'bg-gray-600 hover:bg-gray-700',
    },
  ]

  const recentActivity = [
    {
      type: 'welcome',
      title: 'Welcome to The Education Foundation!',
      description: 'Start making a difference by supporting a student today.',
      time: 'Just now',
      icon: Star,
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50/30 via-white to-secondary-50/20">
      <Header />

      {/* Hero Section */}
      <div className="relative overflow-hidden pt-16 md:pt-20">
        <div className="absolute inset-0 bg-gradient-to-r from-primary-700 via-primary-600 to-primary-800" />
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />

        <div className="relative container-app py-10 md:py-14">
          <motion.div
            initial="initial"
            animate="animate"
            variants={stagger}
            className="flex flex-col md:flex-row md:items-center md:justify-between gap-6"
          >
            <div className="flex items-center gap-4">
              {/* Avatar */}
              <motion.div variants={fadeInUp}>
                {user.photoURL ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    className="h-16 w-16 md:h-20 md:w-20 rounded-full border-4 border-white/20 shadow-lg"
                    src={user.photoURL}
                    alt={user.displayName || 'User'}
                  />
                ) : (
                  <div className="h-16 w-16 md:h-20 md:w-20 rounded-full bg-white/20 border-4 border-white/20 flex items-center justify-center shadow-lg">
                    <span className="text-white text-2xl md:text-3xl font-bold">
                      {(user.displayName || user.email || 'U').charAt(0).toUpperCase()}
                    </span>
                  </div>
                )}
              </motion.div>

              {/* Welcome Text */}
              <motion.div variants={fadeInUp}>
                <p className="text-primary-100 text-sm md:text-base">Welcome back,</p>
                <h1 className="text-2xl md:text-3xl font-bold text-white">
                  {user.displayName || 'Donor'}
                </h1>
                <p className="text-primary-200 text-sm mt-1">{user.email}</p>
              </motion.div>
            </div>

            {/* CTA Button */}
            <motion.div variants={fadeInUp}>
              <Link
                href="/students"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-primary-700 font-semibold shadow-lg hover:shadow-xl hover:bg-gray-50 transition-all"
              >
                <Heart className="w-5 h-5" />
                Support a Student
                <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>

      <div className="container-app py-8 md:py-12">
        <motion.div
          initial="initial"
          animate="animate"
          variants={stagger}
          className="space-y-8"
        >
          {/* Stats Grid */}
          <motion.div variants={fadeInUp}>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
              {stats.map((stat) => {
                const Icon = stat.icon
                return (
                  <Card key={stat.label} variant="elevated" className="overflow-visible">
                    <CardContent className="p-5 md:p-6">
                      <div className="flex items-start justify-between">
                        <div>
                          <p className="text-sm text-gray-500 font-medium">{stat.label}</p>
                          <p className="text-2xl md:text-3xl font-bold text-gray-900 mt-1">
                            {stat.value}
                          </p>
                        </div>
                        <div className={`p-2.5 rounded-xl ${stat.bgColor}`}>
                          <Icon className={`w-5 h-5 md:w-6 md:h-6 ${stat.color}`} />
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </motion.div>

          {/* Impact Progress */}
          <motion.div variants={fadeInUp}>
            <Card variant="elevated">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">Your Impact Journey</h3>
                    <p className="text-sm text-gray-500">Track your contribution milestones</p>
                  </div>
                  <div className="px-3 py-1 rounded-full bg-primary-100 text-primary-700 text-sm font-medium">
                    Level 1
                  </div>
                </div>
                <Progress value={0} max={100} size="lg" showLabel label="Progress to next level" />
                <div className="flex items-center justify-between mt-4 text-sm">
                  <span className="text-gray-500">Support 1 student to reach Level 2</span>
                  <Link href="/students" className="text-primary-600 hover:text-primary-700 font-medium flex items-center gap-1">
                    Get started <ChevronRight className="w-4 h-4" />
                  </Link>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Quick Actions */}
          <motion.div variants={fadeInUp}>
            <h2 className="text-xl font-bold text-gray-900 mb-4">Quick Actions</h2>
            <div className="grid md:grid-cols-3 gap-4">
              {quickActions.map((action) => {
                const Icon = action.icon
                return (
                  <Link key={action.title} href={action.href}>
                    <Card variant="outlined" hoverable className="h-full">
                      <CardContent className="p-5 flex items-start gap-4">
                        <div className={`p-3 rounded-xl ${action.color} shrink-0`}>
                          <Icon className="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-900">{action.title}</h3>
                          <p className="text-sm text-gray-500 mt-0.5">{action.description}</p>
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                )
              })}
            </div>
          </motion.div>

          {/* Recent Activity & Notifications */}
          <div className="grid lg:grid-cols-2 gap-6">
            {/* Recent Activity */}
            <motion.div variants={fadeInUp}>
              <Card variant="elevated">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-lg font-semibold text-gray-900">Recent Activity</h3>
                    <Bell className="w-5 h-5 text-gray-400" />
                  </div>
                  <div className="space-y-4">
                    {recentActivity.map((activity, index) => {
                      const Icon = activity.icon
                      return (
                        <div key={index} className="flex items-start gap-4 p-3 rounded-xl bg-gray-50">
                          <div className="p-2 rounded-lg bg-secondary-100">
                            <Icon className="w-4 h-4 text-secondary-600" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <p className="font-medium text-gray-900">{activity.title}</p>
                            <p className="text-sm text-gray-500 mt-0.5">{activity.description}</p>
                            <p className="text-xs text-gray-400 mt-1">{activity.time}</p>
                          </div>
                        </div>
                      )
                    })}
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Upcoming & Tips */}
            <motion.div variants={fadeInUp}>
              <Card variant="elevated">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-lg font-semibold text-gray-900">Get Started</h3>
                    <Calendar className="w-5 h-5 text-gray-400" />
                  </div>
                  <div className="space-y-4">
                    <div className="p-4 rounded-xl bg-gradient-to-r from-primary-50 to-primary-100 border border-primary-200">
                      <h4 className="font-semibold text-primary-800 mb-2">Make Your First Donation</h4>
                      <p className="text-sm text-primary-700 mb-3">
                        Browse our verified student cases and choose someone to support. Every contribution matters!
                      </p>
                      <Link
                        href="/students"
                        className="inline-flex items-center text-sm font-medium text-primary-700 hover:text-primary-800"
                      >
                        Browse students <ArrowRight className="w-4 h-4 ml-1" />
                      </Link>
                    </div>

                    <div className="p-4 rounded-xl bg-gradient-to-r from-secondary-50 to-secondary-100 border border-secondary-200">
                      <h4 className="font-semibold text-secondary-800 mb-2">Complete Your Profile</h4>
                      <p className="text-sm text-secondary-700 mb-3">
                        Add your details to receive personalized updates about the students you support.
                      </p>
                      <Link
                        href="/dashboard/settings"
                        className="inline-flex items-center text-sm font-medium text-secondary-700 hover:text-secondary-800"
                      >
                        Update profile <ArrowRight className="w-4 h-4 ml-1" />
                      </Link>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
