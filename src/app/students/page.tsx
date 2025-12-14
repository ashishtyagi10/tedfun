'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Search, Filter, GraduationCap, MapPin, Target } from 'lucide-react'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'

export default function StudentsPage() {
  const [searchQuery, setSearchQuery] = useState('')

  // Placeholder students data
  const students = [
    {
      id: '1',
      name: 'Priya Sharma',
      school: 'Government High School, Delhi',
      grade: '10th Grade',
      story: 'Priya dreams of becoming a doctor to serve her village community. She needs support for tuition fees and medical entrance exam preparation.',
      goal: 45000,
      raised: 28000,
      image: null,
    },
    {
      id: '2',
      name: 'Rahul Kumar',
      school: 'Municipal School, Mumbai',
      grade: '8th Grade',
      story: 'Rahul is passionate about technology and wants to become a software engineer. He needs a laptop and coding course materials.',
      goal: 35000,
      raised: 12000,
      image: null,
    },
    {
      id: '3',
      name: 'Ananya Patel',
      school: 'Village School, Gujarat',
      grade: '12th Grade',
      story: 'Ananya wants to pursue engineering. She needs support for entrance exam coaching and study materials.',
      goal: 60000,
      raised: 45000,
      image: null,
    },
    {
      id: '4',
      name: 'Mohammed Irfan',
      school: 'Government School, Hyderabad',
      grade: '9th Grade',
      story: 'Irfan loves mathematics and dreams of becoming a teacher. He needs help with school fees and books.',
      goal: 25000,
      raised: 8000,
      image: null,
    },
    {
      id: '5',
      name: 'Lakshmi Devi',
      school: 'Primary School, Karnataka',
      grade: '6th Grade',
      story: 'Lakshmi is the first in her family to attend school. She needs uniforms, books, and school supplies.',
      goal: 15000,
      raised: 15000,
      image: null,
    },
    {
      id: '6',
      name: 'Arjun Singh',
      school: 'High School, Rajasthan',
      grade: '11th Grade',
      story: 'Arjun aspires to become a civil servant to help his community. He needs coaching and study materials.',
      goal: 50000,
      raised: 22000,
      image: null,
    },
  ]

  const filteredStudents = students.filter(
    (student) =>
      student.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      student.school.toLowerCase().includes(searchQuery.toLowerCase())
  )

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-12 md:pt-40 md:pb-16 bg-gradient-to-br from-primary-50/50 via-white to-secondary-50/30">
        <div className="container-app">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4"
            >
              Students Who Need Your Support
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-lg text-gray-600"
            >
              Browse verified cases of students in need. Your contribution can
              transform their educational journey.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-8 border-b border-gray-100">
        <div className="container-app">
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
            <div className="relative w-full sm:w-96">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search by name or school..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 rounded-full border border-gray-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-100 outline-none transition-all"
              />
            </div>
            <button className="flex items-center gap-2 px-4 py-3 text-gray-700 hover:text-primary-700 transition-colors">
              <Filter className="w-5 h-5" />
              <span className="font-medium">Filters</span>
            </button>
          </div>
        </div>
      </section>

      {/* Students Grid */}
      <section className="py-12 md:py-16">
        <div className="container-app">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredStudents.map((student, index) => {
              const progress = Math.round((student.raised / student.goal) * 100)
              const isFullyFunded = progress >= 100

              return (
                <motion.div
                  key={student.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="card-elevated overflow-hidden group"
                >
                  {/* Image Placeholder */}
                  <div className="aspect-video bg-gradient-to-br from-primary-100 to-secondary-100 relative">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <GraduationCap className="w-16 h-16 text-primary-300" />
                    </div>
                    {isFullyFunded && (
                      <div className="absolute top-4 right-4 px-3 py-1 bg-green-500 text-white text-xs font-medium rounded-full">
                        Fully Funded
                      </div>
                    )}
                  </div>

                  <div className="p-6">
                    {/* Name and School */}
                    <h3 className="text-xl font-bold text-gray-900 mb-1">
                      {student.name}
                    </h3>
                    <div className="flex items-center gap-2 text-sm text-gray-600 mb-3">
                      <MapPin className="w-4 h-4" />
                      <span>{student.school}</span>
                    </div>
                    <div className="inline-block px-2 py-1 bg-primary-50 text-primary-700 text-xs font-medium rounded mb-4">
                      {student.grade}
                    </div>

                    {/* Story */}
                    <p className="text-gray-600 text-sm line-clamp-3 mb-4">
                      {student.story}
                    </p>

                    {/* Progress */}
                    <div className="mb-4">
                      <div className="flex items-center justify-between text-sm mb-2">
                        <span className="text-gray-600">
                          <span className="font-semibold text-gray-900">
                            ₹{student.raised.toLocaleString()}
                          </span>{' '}
                          raised
                        </span>
                        <span className="text-gray-600">
                          Goal: ₹{student.goal.toLocaleString()}
                        </span>
                      </div>
                      <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                        <div
                          className={`h-full rounded-full transition-all ${
                            isFullyFunded ? 'bg-green-500' : 'bg-primary-600'
                          }`}
                          style={{ width: `${Math.min(progress, 100)}%` }}
                        />
                      </div>
                      <div className="text-right text-xs text-gray-500 mt-1">
                        {progress}% funded
                      </div>
                    </div>

                    {/* CTA */}
                    <Link
                      href={`/students/${student.id}`}
                      className={`block w-full text-center py-3 rounded-full font-medium transition-colors ${
                        isFullyFunded
                          ? 'bg-gray-100 text-gray-500 cursor-default'
                          : 'btn-primary'
                      }`}
                    >
                      {isFullyFunded ? 'Fully Funded' : 'Support This Student'}
                    </Link>
                  </div>
                </motion.div>
              )
            })}
          </div>

          {filteredStudents.length === 0 && (
            <div className="text-center py-16">
              <Target className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                No students found
              </h3>
              <p className="text-gray-600">
                Try adjusting your search or filters
              </p>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  )
}
