'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import {
  Heart,
  GraduationCap,
  Quote,
  ArrowRight,
  Sparkles,
  TrendingUp,
  Users,
  BookOpen,
  Star,
  MapPin,
  Calendar,
  Target,
  Award,
  CheckCircle2,
} from 'lucide-react'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { Card, CardContent } from '@/components/ui/Card'
import { Progress } from '@/components/ui/Progress'

// Success story data (placeholder - would come from Firestore in production)
const successStories = [
  {
    id: '1',
    name: 'Priya Sharma',
    age: 17,
    location: 'Mumbai, Maharashtra',
    school: 'St. Xavier\'s College',
    image: null,
    story: 'Priya dreamed of becoming a doctor but her family couldn\'t afford college fees. With support from 23 donors, she\'s now pursuing MBBS at a top medical college.',
    raised: 250000,
    goal: 250000,
    donors: 23,
    graduatedYear: 2024,
    currentStatus: 'Studying MBBS at Grant Medical College',
    quote: 'Education changed everything for me. I will become a doctor and serve my community.',
    category: 'Medical Education',
  },
  {
    id: '2',
    name: 'Rahul Kumar',
    age: 19,
    location: 'Patna, Bihar',
    school: 'IIT Delhi',
    image: null,
    story: 'From a small village in Bihar, Rahul cracked IIT JEE but lacked funds for hostel and fees. The community raised his entire first-year expenses.',
    raised: 180000,
    goal: 180000,
    donors: 45,
    graduatedYear: 2024,
    currentStatus: 'B.Tech Computer Science at IIT Delhi',
    quote: 'I never thought someone from my village could study at IIT. Your support made the impossible possible.',
    category: 'Engineering',
  },
  {
    id: '3',
    name: 'Anjali Devi',
    age: 15,
    location: 'Jaipur, Rajasthan',
    school: 'Government Senior Secondary School',
    image: null,
    story: 'Anjali was about to drop out to help her family. A small monthly scholarship for books and supplies kept her in school. She now ranks first in her class.',
    raised: 24000,
    goal: 24000,
    donors: 12,
    graduatedYear: 2024,
    currentStatus: 'Class 10 topper, preparing for NEET',
    quote: 'The books I received opened a new world for me. I want to become a scientist.',
    category: 'School Supplies',
  },
  {
    id: '4',
    name: 'Mohammed Irfan',
    age: 20,
    location: 'Hyderabad, Telangana',
    school: 'BITS Pilani',
    image: null,
    story: 'Irfan\'s father lost his job during COVID. The scholarship helped him continue his engineering degree without taking a gap year.',
    raised: 320000,
    goal: 320000,
    donors: 67,
    graduatedYear: 2023,
    currentStatus: 'Software Engineer at a leading tech company',
    quote: 'I\'m now earning enough to support my family and help other students like me.',
    category: 'Higher Education',
  },
  {
    id: '5',
    name: 'Lakshmi Naidu',
    age: 16,
    location: 'Visakhapatnam, Andhra Pradesh',
    school: 'Kendriya Vidyalaya',
    image: null,
    story: 'Lakshmi needed a laptop for online classes during the pandemic. Within a week, donors funded her laptop and internet connection for a year.',
    raised: 35000,
    goal: 35000,
    donors: 8,
    graduatedYear: 2024,
    currentStatus: 'Cleared JEE Mains, pursuing B.Tech',
    quote: 'That laptop became my window to the world. I attended classes, learned coding, and cracked JEE.',
    category: 'Digital Access',
  },
  {
    id: '6',
    name: 'Deepak Yadav',
    age: 18,
    location: 'Lucknow, Uttar Pradesh',
    school: 'King George\'s Medical University',
    image: null,
    story: 'Son of a daily wage worker, Deepak secured admission in MBBS but couldn\'t afford the fees. 89 donors came together to fund his dream.',
    raised: 450000,
    goal: 450000,
    donors: 89,
    graduatedYear: 2024,
    currentStatus: 'First-year MBBS student',
    quote: 'My father cried when he heard the news. He said, "Beta, now you can become what I could never be."',
    category: 'Medical Education',
  },
]

const impactStats = [
  { label: 'Students Graduated', value: '150+', icon: GraduationCap },
  { label: 'Lives Transformed', value: '500+', icon: Sparkles },
  { label: 'Funds Utilized', value: '₹25L+', icon: TrendingUp },
  { label: 'Repeat Donors', value: '85%', icon: Heart },
]

const milestones = [
  { year: '2021', title: 'Founded', description: 'Started with 5 students and a mission to change lives' },
  { year: '2022', title: '100 Students', description: 'Reached our first milestone of 100 students supported' },
  { year: '2023', title: 'First Graduates', description: '25 students graduated from college with our support' },
  { year: '2024', title: '500+ Lives', description: 'Now supporting over 500 students across India' },
]

const testimonials = [
  {
    quote: 'Watching Priya receive her white coat at the medical college was the most fulfilling moment. Every rupee donated was worth it.',
    author: 'Rajesh Mehta',
    role: 'Donor since 2022',
    type: 'donor',
  },
  {
    quote: 'This platform gave my daughter a chance I never had. She\'s the first in our family to attend college.',
    author: 'Sunita Devi',
    role: 'Parent of a supported student',
    type: 'parent',
  },
  {
    quote: 'The verification process is thorough. I know my donations are reaching genuine students who truly need help.',
    author: 'Dr. Anita Krishnan',
    role: 'Monthly donor',
    type: 'donor',
  },
]

export default function SuccessStoriesPage() {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
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
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-secondary-50 via-white to-primary-50/30" />
        <div className="absolute top-20 right-10 w-72 h-72 bg-secondary-200/30 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-primary-200/20 rounded-full blur-3xl" />

        <div className="container-app relative">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary-100 text-secondary-800 text-sm font-medium mb-6"
            >
              <Sparkles className="w-4 h-4" />
              Real Impact, Real Stories
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6"
            >
              Stories of <span className="text-primary-700">Hope</span> &{' '}
              <span className="text-secondary-600">Transformation</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg text-gray-600 leading-relaxed mb-8"
            >
              Every donation tells a story. Meet the students whose lives have been transformed
              through the generosity of our community. These are not just numbers—they are dreams
              realized.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-wrap justify-center gap-4"
            >
              <Link href="/students" className="btn-primary inline-flex items-center gap-2">
                <Heart className="w-4 h-4" />
                Create Another Success Story
              </Link>
              <Link href="/submit-case" className="btn-outline">
                Submit a Student Case
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-12 bg-primary-700">
        <div className="container-app">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {impactStats.map((stat, index) => {
              const Icon = stat.icon
              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center text-white"
                >
                  <Icon className="w-8 h-8 mx-auto mb-3 text-primary-200" />
                  <div className="text-3xl md:text-4xl font-bold mb-1">{stat.value}</div>
                  <div className="text-sm text-primary-200">{stat.label}</div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Featured Success Stories */}
      <section className="py-16 md:py-24">
        <div className="container-app">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Featured Success Stories
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              These students achieved their dreams with support from donors like you. Their success
              is proof that every contribution matters.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {successStories.map((story, index) => (
              <motion.div
                key={story.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card variant="elevated" className="h-full overflow-hidden group">
                  {/* Header with gradient */}
                  <div className="h-32 bg-gradient-to-br from-primary-600 to-primary-800 relative">
                    <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
                    <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/50 to-transparent">
                      <span className="text-xs font-medium text-white/80 bg-white/20 px-2 py-1 rounded-full">
                        {story.category}
                      </span>
                    </div>
                    {/* Avatar placeholder */}
                    <div className="absolute -bottom-8 left-4">
                      <div className="w-16 h-16 rounded-full bg-white shadow-lg flex items-center justify-center border-4 border-white">
                        <span className="text-2xl font-bold text-primary-600">
                          {story.name.charAt(0)}
                        </span>
                      </div>
                    </div>
                    {/* Success badge */}
                    <div className="absolute top-3 right-3">
                      <div className="flex items-center gap-1 bg-success/90 text-white text-xs font-medium px-2 py-1 rounded-full">
                        <CheckCircle2 className="w-3 h-3" />
                        Funded
                      </div>
                    </div>
                  </div>

                  <CardContent className="pt-10 pb-6 px-4">
                    <h3 className="font-bold text-gray-900 text-lg mb-1">{story.name}</h3>
                    <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
                      <MapPin className="w-3 h-3" />
                      {story.location}
                    </div>

                    <p className="text-sm text-gray-600 mb-4 line-clamp-3">{story.story}</p>

                    {/* Current Status */}
                    <div className="p-3 bg-success/5 border border-success/20 rounded-lg mb-4">
                      <div className="flex items-start gap-2">
                        <Award className="w-4 h-4 text-success mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="text-xs text-gray-500">Current Status</p>
                          <p className="text-sm font-medium text-gray-900">{story.currentStatus}</p>
                        </div>
                      </div>
                    </div>

                    {/* Quote */}
                    <div className="relative pl-4 border-l-2 border-secondary-300 mb-4">
                      <Quote className="absolute -left-2.5 -top-1 w-5 h-5 text-secondary-400 bg-white" />
                      <p className="text-sm italic text-gray-600">&ldquo;{story.quote}&rdquo;</p>
                    </div>

                    {/* Stats */}
                    <div className="flex items-center justify-between text-sm pt-4 border-t border-gray-100">
                      <div>
                        <span className="font-bold text-primary-700">
                          ₹{(story.raised / 1000).toFixed(0)}K
                        </span>
                        <span className="text-gray-500"> raised</span>
                      </div>
                      <div className="flex items-center gap-1 text-gray-500">
                        <Users className="w-4 h-4" />
                        {story.donors} donors
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Journey Timeline */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container-app">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Our Journey</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              From a small initiative to a movement transforming education access across India.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-600 via-secondary-500 to-primary-600" />

              {milestones.map((milestone, index) => (
                <motion.div
                  key={milestone.year}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="relative pl-20 pb-10 last:pb-0"
                >
                  {/* Year badge */}
                  <div className="absolute left-0 w-16 h-16 rounded-full bg-white shadow-lg border-4 border-primary-100 flex items-center justify-center">
                    <span className="text-sm font-bold text-primary-700">{milestone.year}</span>
                  </div>

                  <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100">
                    <h3 className="font-bold text-gray-900 mb-1">{milestone.title}</h3>
                    <p className="text-sm text-gray-600">{milestone.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 md:py-24">
        <div className="container-app">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Voices of Our Community
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Hear from donors and families whose lives have been touched by this movement.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.author}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card variant="outlined" className="h-full">
                  <CardContent className="p-6">
                    <Quote className="w-8 h-8 text-secondary-400 mb-4" />
                    <p className="text-gray-700 mb-6 leading-relaxed">&ldquo;{testimonial.quote}&rdquo;</p>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center">
                        <span className="text-sm font-bold text-primary-700">
                          {testimonial.author.charAt(0)}
                        </span>
                      </div>
                      <div>
                        <p className="font-medium text-gray-900 text-sm">{testimonial.author}</p>
                        <p className="text-xs text-gray-500">{testimonial.role}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Before & After Impact */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-primary-50 to-secondary-50/50">
        <div className="container-app">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                The Power of Your Support
              </h2>
              <p className="text-gray-600">
                See how your donations transform lives and create ripple effects in communities.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Before */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-6 shadow-sm"
              >
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gray-100 text-gray-600 text-sm font-medium mb-4">
                  Before Support
                </div>
                <ul className="space-y-3">
                  {[
                    'Struggling to afford basic school supplies',
                    'At risk of dropping out due to financial constraints',
                    'Limited access to quality education resources',
                    'Dreams put on hold due to circumstances',
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-gray-600">
                      <div className="w-5 h-5 rounded-full bg-gray-200 flex items-center justify-center mt-0.5 flex-shrink-0">
                        <span className="text-xs text-gray-500">{i + 1}</span>
                      </div>
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* After */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-6 shadow-sm border-2 border-success/20"
              >
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-success/10 text-success text-sm font-medium mb-4">
                  <Sparkles className="w-4 h-4" />
                  After Support
                </div>
                <ul className="space-y-3">
                  {[
                    'Fully equipped with books, uniforms, and supplies',
                    'Confidently pursuing education without financial worry',
                    'Access to quality learning materials and mentorship',
                    'Actively working towards achieving their dreams',
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-gray-700">
                      <CheckCircle2 className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-primary-700 via-primary-600 to-primary-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />

        <div className="container-app relative">
          <div className="max-w-3xl mx-auto text-center text-white">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <Heart className="w-16 h-16 mx-auto mb-6 text-white/80" />
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Be Part of the Next Success Story
              </h2>
              <p className="text-primary-100 mb-8 leading-relaxed">
                Every student we support has a story waiting to be told. Your donation today could
                be the beginning of someone&apos;s journey to success. Join us in making education
                accessible to all.
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
                  href="/how-it-works"
                  className="inline-flex items-center justify-center px-8 py-3 rounded-full border-2 border-white text-white font-medium hover:bg-white/10 transition-colors"
                >
                  Learn How It Works
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
