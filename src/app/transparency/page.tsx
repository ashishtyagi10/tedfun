'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import {
  Eye,
  PieChart,
  TrendingUp,
  Users,
  FileText,
  Shield,
  CheckCircle,
  Building,
  IndianRupee,
  GraduationCap,
  Heart,
  BarChart3,
  Download,
  ExternalLink,
  Calendar,
  Award,
  Target,
  ArrowRight
} from 'lucide-react'

const sections = [
  { id: 'overview', title: 'Overview', icon: Eye },
  { id: 'fund-allocation', title: 'Fund Allocation', icon: PieChart },
  { id: 'impact-metrics', title: 'Impact Metrics', icon: TrendingUp },
  { id: 'financials', title: 'Financial Reports', icon: FileText },
  { id: 'verification', title: 'Student Verification', icon: Shield },
  { id: 'governance', title: 'Governance', icon: Building },
  { id: 'partners', title: 'Partners & Auditors', icon: Users },
]

const impactStats = [
  { label: 'Students Supported', value: '2,847', icon: GraduationCap, color: 'primary' },
  { label: 'Total Donations', value: '₹4.2Cr', icon: IndianRupee, color: 'green' },
  { label: 'Active Donors', value: '1,523', icon: Heart, color: 'rose' },
  { label: 'Graduation Rate', value: '94%', icon: Award, color: 'amber' },
]

const fundBreakdown = [
  { category: 'Direct Student Support', percentage: 85, amount: '₹3.57 Cr', color: 'bg-green-500', description: 'Tuition fees, books, supplies, and educational materials' },
  { category: 'Program Operations', percentage: 10, amount: '₹42 L', color: 'bg-blue-500', description: 'Student verification, monitoring, mentorship programs' },
  { category: 'Administration', percentage: 5, amount: '₹21 L', color: 'bg-purple-500', description: 'Platform maintenance, payment processing, reporting' },
]

const financialReports = [
  { title: 'Annual Report 2024-25', type: 'PDF', size: '2.4 MB', date: 'March 2025' },
  { title: 'Audited Financial Statements 2024-25', type: 'PDF', size: '1.8 MB', date: 'April 2025' },
  { title: 'Q3 2024-25 Impact Report', type: 'PDF', size: '3.1 MB', date: 'January 2025' },
  { title: 'Q2 2024-25 Impact Report', type: 'PDF', size: '2.9 MB', date: 'October 2024' },
  { title: 'Annual Report 2023-24', type: 'PDF', size: '2.2 MB', date: 'March 2024' },
]

const verificationSteps = [
  { step: 1, title: 'Application Review', description: 'Initial screening of student applications for completeness and eligibility criteria' },
  { step: 2, title: 'Document Verification', description: 'Verification of academic records, identity documents, and income certificates' },
  { step: 3, title: 'School Confirmation', description: 'Direct confirmation with educational institution about enrollment and fees' },
  { step: 4, title: 'Home Visit', description: 'Physical verification of family circumstances and financial need assessment' },
  { step: 5, title: 'Committee Approval', description: 'Final review and approval by our student selection committee' },
  { step: 6, title: 'Ongoing Monitoring', description: 'Regular progress tracking, attendance monitoring, and annual re-verification' },
]

const boardMembers = [
  { name: 'Dr. Priya Sharma', role: 'Chairperson', background: 'Former Education Secretary, Government of India' },
  { name: 'Rajesh Kumar', role: 'Treasurer', background: 'Chartered Accountant, 25+ years experience' },
  { name: 'Anita Desai', role: 'Secretary', background: 'Education Policy Expert, Ex-UNICEF' },
  { name: 'Prof. Vikram Mehta', role: 'Board Member', background: 'Professor of Economics, IIT Delhi' },
  { name: 'Sunita Reddy', role: 'Board Member', background: 'Social Entrepreneur, Ashoka Fellow' },
]

export default function TransparencyPage() {
  const [activeSection, setActiveSection] = useState('overview')

  useEffect(() => {
    const handleScroll = () => {
      const sectionElements = sections.map(s => ({
        id: s.id,
        element: document.getElementById(s.id)
      }))

      for (const section of sectionElements) {
        if (section.element) {
          const rect = section.element.getBoundingClientRect()
          if (rect.top <= 150 && rect.bottom >= 150) {
            setActiveSection(section.id)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      const offset = 100
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - offset
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' })
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <main className="pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary-700 via-primary-600 to-primary-800 text-white py-16 md:py-24">
          <div className="container-app">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Eye className="w-4 h-4" />
                Open & Accountable
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Transparency
              </h1>
              <p className="text-xl text-primary-100 mb-4">
                We believe in complete transparency. See exactly how your donations create impact,
                from fund allocation to student outcomes.
              </p>
              <p className="text-primary-200">
                Last updated: January 2025
              </p>
            </div>
          </div>
        </section>

        {/* Impact Stats Bar */}
        <section className="bg-white border-b border-gray-200 py-8">
          <div className="container-app">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {impactStats.map((stat) => {
                const Icon = stat.icon
                const colorClasses = {
                  primary: 'bg-primary-100 text-primary-600',
                  green: 'bg-green-100 text-green-600',
                  rose: 'bg-rose-100 text-rose-600',
                  amber: 'bg-amber-100 text-amber-600',
                }
                return (
                  <div key={stat.label} className="text-center">
                    <div className={`w-12 h-12 rounded-xl ${colorClasses[stat.color as keyof typeof colorClasses]} flex items-center justify-center mx-auto mb-3`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <div className="text-2xl md:text-3xl font-bold text-gray-900">{stat.value}</div>
                    <div className="text-sm text-gray-600">{stat.label}</div>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Quick Navigation */}
        <section className="bg-white border-b border-gray-200 sticky top-16 md:top-20 z-40">
          <div className="container-app">
            <div className="flex items-center gap-2 py-4 overflow-x-auto scrollbar-hide">
              <span className="text-sm text-gray-500 whitespace-nowrap">Jump to:</span>
              {sections.slice(0, 5).map((section) => (
                <button
                  key={section.id}
                  onClick={() => scrollToSection(section.id)}
                  className={`px-3 py-1.5 text-sm font-medium rounded-full whitespace-nowrap transition-colors ${
                    activeSection === section.id
                      ? 'bg-primary-100 text-primary-700'
                      : 'text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  {section.title}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="py-12 md:py-16">
          <div className="container-app">
            <div className="grid lg:grid-cols-4 gap-8">
              {/* Sidebar */}
              <aside className="hidden lg:block">
                <div className="sticky top-40 bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
                  <h3 className="font-semibold text-gray-900 mb-4">Contents</h3>
                  <nav className="space-y-1">
                    {sections.map((section) => {
                      const Icon = section.icon
                      return (
                        <button
                          key={section.id}
                          onClick={() => scrollToSection(section.id)}
                          className={`w-full flex items-center gap-3 px-3 py-2 text-sm rounded-lg transition-colors text-left ${
                            activeSection === section.id
                              ? 'bg-primary-50 text-primary-700 font-medium'
                              : 'text-gray-600 hover:bg-gray-50'
                          }`}
                        >
                          <Icon className="w-4 h-4 flex-shrink-0" />
                          {section.title}
                        </button>
                      )
                    })}
                  </nav>
                </div>
              </aside>

              {/* Main Content */}
              <div className="lg:col-span-3">
                <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 md:p-12">
                  {/* Overview */}
                  <section id="overview" className="mb-12">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-10 h-10 bg-primary-100 rounded-xl flex items-center justify-center">
                        <Eye className="w-5 h-5 text-primary-600" />
                      </div>
                      <h2 className="text-2xl font-bold text-gray-900">Our Commitment to Transparency</h2>
                    </div>
                    <div className="prose prose-gray max-w-none">
                      <p>
                        At The Education Foundation, transparency isn't just a policy—it's a core value.
                        We believe that every donor has the right to know exactly how their contribution
                        is being used and the impact it creates.
                      </p>
                      <p>
                        This page provides comprehensive information about our operations, finances,
                        governance, and impact. We update this information regularly and welcome
                        questions from our donors and the public.
                      </p>

                      <div className="grid md:grid-cols-3 gap-4 not-prose my-8">
                        <div className="bg-primary-50 rounded-xl p-6 text-center">
                          <Target className="w-8 h-8 text-primary-600 mx-auto mb-3" />
                          <h4 className="font-semibold text-gray-900 mb-2">Clear Goals</h4>
                          <p className="text-sm text-gray-600">
                            Every donation has a defined purpose and measurable outcomes
                          </p>
                        </div>
                        <div className="bg-green-50 rounded-xl p-6 text-center">
                          <BarChart3 className="w-8 h-8 text-green-600 mx-auto mb-3" />
                          <h4 className="font-semibold text-gray-900 mb-2">Regular Reporting</h4>
                          <p className="text-sm text-gray-600">
                            Quarterly impact reports and annual audited financials
                          </p>
                        </div>
                        <div className="bg-amber-50 rounded-xl p-6 text-center">
                          <Shield className="w-8 h-8 text-amber-600 mx-auto mb-3" />
                          <h4 className="font-semibold text-gray-900 mb-2">Independent Oversight</h4>
                          <p className="text-sm text-gray-600">
                            External audits and third-party verification
                          </p>
                        </div>
                      </div>
                    </div>
                  </section>

                  {/* Fund Allocation */}
                  <section id="fund-allocation" className="mb-12">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center">
                        <PieChart className="w-5 h-5 text-green-600" />
                      </div>
                      <h2 className="text-2xl font-bold text-gray-900">Fund Allocation</h2>
                    </div>
                    <div className="prose prose-gray max-w-none">
                      <p>
                        We are committed to maximizing the impact of every rupee donated. Here's how
                        your contributions are allocated (FY 2024-25):
                      </p>
                    </div>

                    {/* Visual Breakdown */}
                    <div className="my-8">
                      <div className="flex h-8 rounded-full overflow-hidden mb-6">
                        {fundBreakdown.map((item) => (
                          <div
                            key={item.category}
                            className={`${item.color} relative group`}
                            style={{ width: `${item.percentage}%` }}
                          >
                            <div className="absolute inset-0 flex items-center justify-center text-white text-sm font-medium">
                              {item.percentage}%
                            </div>
                          </div>
                        ))}
                      </div>

                      <div className="space-y-4">
                        {fundBreakdown.map((item) => (
                          <div key={item.category} className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl">
                            <div className={`w-4 h-4 rounded-full ${item.color} flex-shrink-0 mt-1`} />
                            <div className="flex-1">
                              <div className="flex items-center justify-between mb-1">
                                <h4 className="font-semibold text-gray-900">{item.category}</h4>
                                <div className="text-right">
                                  <span className="font-bold text-gray-900">{item.percentage}%</span>
                                  <span className="text-gray-500 text-sm ml-2">({item.amount})</span>
                                </div>
                              </div>
                              <p className="text-sm text-gray-600">{item.description}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="bg-primary-50 border border-primary-100 rounded-xl p-6">
                      <h4 className="font-semibold text-primary-900 mb-2">Student-Specific Donations</h4>
                      <p className="text-primary-800 text-sm">
                        When you donate to a specific student, 100% of your contribution goes directly
                        to that student's educational expenses. Administrative costs for student-specific
                        donations are covered by our general fund.
                      </p>
                    </div>
                  </section>

                  {/* Impact Metrics */}
                  <section id="impact-metrics" className="mb-12">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-10 h-10 bg-amber-100 rounded-xl flex items-center justify-center">
                        <TrendingUp className="w-5 h-5 text-amber-600" />
                      </div>
                      <h2 className="text-2xl font-bold text-gray-900">Impact Metrics</h2>
                    </div>
                    <div className="prose prose-gray max-w-none">
                      <p>
                        We track comprehensive metrics to measure and improve our impact. Here are our
                        key performance indicators for FY 2024-25:
                      </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6 my-8">
                      <div className="bg-white border border-gray-200 rounded-xl p-6">
                        <h4 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
                          <GraduationCap className="w-5 h-5 text-primary-600" />
                          Student Outcomes
                        </h4>
                        <div className="space-y-3">
                          <div className="flex justify-between items-center">
                            <span className="text-gray-600">Students Supported</span>
                            <span className="font-semibold">2,847</span>
                          </div>
                          <div className="flex justify-between items-center">
                            <span className="text-gray-600">Graduation Rate</span>
                            <span className="font-semibold text-green-600">94%</span>
                          </div>
                          <div className="flex justify-between items-center">
                            <span className="text-gray-600">Avg. Academic Improvement</span>
                            <span className="font-semibold text-green-600">+23%</span>
                          </div>
                          <div className="flex justify-between items-center">
                            <span className="text-gray-600">College Enrollment Rate</span>
                            <span className="font-semibold">78%</span>
                          </div>
                          <div className="flex justify-between items-center">
                            <span className="text-gray-600">Employment Rate (Alumni)</span>
                            <span className="font-semibold">89%</span>
                          </div>
                        </div>
                      </div>

                      <div className="bg-white border border-gray-200 rounded-xl p-6">
                        <h4 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
                          <Heart className="w-5 h-5 text-rose-600" />
                          Donor Engagement
                        </h4>
                        <div className="space-y-3">
                          <div className="flex justify-between items-center">
                            <span className="text-gray-600">Active Donors</span>
                            <span className="font-semibold">1,523</span>
                          </div>
                          <div className="flex justify-between items-center">
                            <span className="text-gray-600">Recurring Donors</span>
                            <span className="font-semibold">847</span>
                          </div>
                          <div className="flex justify-between items-center">
                            <span className="text-gray-600">Donor Retention Rate</span>
                            <span className="font-semibold text-green-600">82%</span>
                          </div>
                          <div className="flex justify-between items-center">
                            <span className="text-gray-600">Avg. Donation Amount</span>
                            <span className="font-semibold">₹27,500</span>
                          </div>
                          <div className="flex justify-between items-center">
                            <span className="text-gray-600">Donor Satisfaction</span>
                            <span className="font-semibold text-green-600">4.8/5</span>
                          </div>
                        </div>
                      </div>

                      <div className="bg-white border border-gray-200 rounded-xl p-6">
                        <h4 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
                          <IndianRupee className="w-5 h-5 text-green-600" />
                          Financial Health
                        </h4>
                        <div className="space-y-3">
                          <div className="flex justify-between items-center">
                            <span className="text-gray-600">Total Funds Raised</span>
                            <span className="font-semibold">₹4.2 Cr</span>
                          </div>
                          <div className="flex justify-between items-center">
                            <span className="text-gray-600">Funds Disbursed</span>
                            <span className="font-semibold">₹3.8 Cr</span>
                          </div>
                          <div className="flex justify-between items-center">
                            <span className="text-gray-600">Operating Reserve</span>
                            <span className="font-semibold">₹40 L</span>
                          </div>
                          <div className="flex justify-between items-center">
                            <span className="text-gray-600">Cost per Student</span>
                            <span className="font-semibold">₹14,750/yr</span>
                          </div>
                          <div className="flex justify-between items-center">
                            <span className="text-gray-600">Admin Cost Ratio</span>
                            <span className="font-semibold text-green-600">5%</span>
                          </div>
                        </div>
                      </div>

                      <div className="bg-white border border-gray-200 rounded-xl p-6">
                        <h4 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
                          <Target className="w-5 h-5 text-purple-600" />
                          Geographic Reach
                        </h4>
                        <div className="space-y-3">
                          <div className="flex justify-between items-center">
                            <span className="text-gray-600">States Covered</span>
                            <span className="font-semibold">18</span>
                          </div>
                          <div className="flex justify-between items-center">
                            <span className="text-gray-600">Districts Reached</span>
                            <span className="font-semibold">142</span>
                          </div>
                          <div className="flex justify-between items-center">
                            <span className="text-gray-600">Partner Schools</span>
                            <span className="font-semibold">385</span>
                          </div>
                          <div className="flex justify-between items-center">
                            <span className="text-gray-600">Rural Students</span>
                            <span className="font-semibold">68%</span>
                          </div>
                          <div className="flex justify-between items-center">
                            <span className="text-gray-600">Female Students</span>
                            <span className="font-semibold">52%</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>

                  {/* Financial Reports */}
                  <section id="financials" className="mb-12">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center">
                        <FileText className="w-5 h-5 text-blue-600" />
                      </div>
                      <h2 className="text-2xl font-bold text-gray-900">Financial Reports</h2>
                    </div>
                    <div className="prose prose-gray max-w-none">
                      <p>
                        All our financial statements are audited by independent chartered accountants.
                        Download our reports to see detailed breakdowns of income, expenses, and fund
                        utilization.
                      </p>
                    </div>

                    <div className="space-y-3 my-8">
                      {financialReports.map((report, index) => (
                        <div
                          key={index}
                          className="flex items-center justify-between p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors group cursor-pointer"
                        >
                          <div className="flex items-center gap-4">
                            <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center">
                              <FileText className="w-5 h-5 text-red-600" />
                            </div>
                            <div>
                              <h4 className="font-medium text-gray-900 group-hover:text-primary-700 transition-colors">
                                {report.title}
                              </h4>
                              <p className="text-sm text-gray-500">
                                {report.type} • {report.size} • {report.date}
                              </p>
                            </div>
                          </div>
                          <Download className="w-5 h-5 text-gray-400 group-hover:text-primary-600 transition-colors" />
                        </div>
                      ))}
                    </div>

                    <div className="bg-blue-50 border border-blue-100 rounded-xl p-6">
                      <h4 className="font-semibold text-blue-900 mb-2">Request Additional Information</h4>
                      <p className="text-blue-800 text-sm mb-4">
                        If you need any additional financial information or have questions about our
                        reports, please contact our finance team.
                      </p>
                      <a
                        href="mailto:finance@theeducationfoundation.org"
                        className="inline-flex items-center gap-2 text-blue-700 font-medium hover:text-blue-800"
                      >
                        finance@theeducationfoundation.org
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </div>
                  </section>

                  {/* Student Verification */}
                  <section id="verification" className="mb-12">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-10 h-10 bg-indigo-100 rounded-xl flex items-center justify-center">
                        <Shield className="w-5 h-5 text-indigo-600" />
                      </div>
                      <h2 className="text-2xl font-bold text-gray-900">Student Verification Process</h2>
                    </div>
                    <div className="prose prose-gray max-w-none">
                      <p>
                        Every student on our platform undergoes a rigorous verification process to
                        ensure authenticity and genuine need. Here's our step-by-step process:
                      </p>
                    </div>

                    <div className="my-8 space-y-4">
                      {verificationSteps.map((step, index) => (
                        <div key={step.step} className="flex gap-4">
                          <div className="flex flex-col items-center">
                            <div className="w-10 h-10 bg-indigo-600 text-white rounded-full flex items-center justify-center font-bold">
                              {step.step}
                            </div>
                            {index < verificationSteps.length - 1 && (
                              <div className="w-0.5 h-full bg-indigo-200 my-2" />
                            )}
                          </div>
                          <div className="flex-1 pb-6">
                            <h4 className="font-semibold text-gray-900 mb-1">{step.title}</h4>
                            <p className="text-gray-600 text-sm">{step.description}</p>
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="grid md:grid-cols-3 gap-4">
                      <div className="bg-green-50 rounded-xl p-4 text-center">
                        <CheckCircle className="w-8 h-8 text-green-600 mx-auto mb-2" />
                        <div className="text-2xl font-bold text-gray-900">100%</div>
                        <div className="text-sm text-gray-600">Verified Students</div>
                      </div>
                      <div className="bg-blue-50 rounded-xl p-4 text-center">
                        <Calendar className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                        <div className="text-2xl font-bold text-gray-900">Annual</div>
                        <div className="text-sm text-gray-600">Re-verification</div>
                      </div>
                      <div className="bg-purple-50 rounded-xl p-4 text-center">
                        <Shield className="w-8 h-8 text-purple-600 mx-auto mb-2" />
                        <div className="text-2xl font-bold text-gray-900">0</div>
                        <div className="text-sm text-gray-600">Fraud Cases</div>
                      </div>
                    </div>
                  </section>

                  {/* Governance */}
                  <section id="governance" className="mb-12">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-10 h-10 bg-rose-100 rounded-xl flex items-center justify-center">
                        <Building className="w-5 h-5 text-rose-600" />
                      </div>
                      <h2 className="text-2xl font-bold text-gray-900">Governance</h2>
                    </div>
                    <div className="prose prose-gray max-w-none">
                      <p>
                        Our organization is governed by an independent board of trustees with diverse
                        expertise in education, finance, and social development.
                      </p>
                    </div>

                    <div className="my-8">
                      <h3 className="font-semibold text-gray-900 mb-4">Board of Trustees</h3>
                      <div className="space-y-4">
                        {boardMembers.map((member) => (
                          <div key={member.name} className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl">
                            <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0">
                              <span className="text-primary-700 font-bold text-lg">
                                {member.name.split(' ').map(n => n[0]).join('')}
                              </span>
                            </div>
                            <div>
                              <h4 className="font-semibold text-gray-900">{member.name}</h4>
                              <p className="text-primary-600 text-sm font-medium">{member.role}</p>
                              <p className="text-gray-600 text-sm mt-1">{member.background}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="prose prose-gray max-w-none">
                      <h3>Governance Policies</h3>
                      <ul>
                        <li>Quarterly board meetings with documented minutes</li>
                        <li>Annual strategic planning and review</li>
                        <li>Conflict of interest policy for all board members</li>
                        <li>Whistleblower protection policy</li>
                        <li>Regular policy reviews and updates</li>
                      </ul>
                    </div>
                  </section>

                  {/* Partners & Auditors */}
                  <section id="partners" className="mb-12">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-10 h-10 bg-cyan-100 rounded-xl flex items-center justify-center">
                        <Users className="w-5 h-5 text-cyan-600" />
                      </div>
                      <h2 className="text-2xl font-bold text-gray-900">Partners & Auditors</h2>
                    </div>
                    <div className="prose prose-gray max-w-none">
                      <h3>External Auditors</h3>
                      <p>
                        Our financial statements are audited annually by <strong>RSM Astute Consulting Pvt. Ltd.</strong>,
                        a member of RSM International, one of the world's leading audit and advisory networks.
                      </p>

                      <h3>Banking Partners</h3>
                      <ul>
                        <li>HDFC Bank - Primary banking partner</li>
                        <li>Stripe - International payment processing</li>
                        <li>Razorpay - Domestic payment processing</li>
                      </ul>

                      <h3>Technology Partners</h3>
                      <ul>
                        <li>Google for Nonprofits - Cloud infrastructure</li>
                        <li>Vercel - Website hosting</li>
                        <li>Firebase - Database and authentication</li>
                      </ul>

                      <h3>Accreditations & Memberships</h3>
                      <ul>
                        <li>Registered under Section 8 of Companies Act, 2013</li>
                        <li>80G Tax Exemption Certificate</li>
                        <li>12A Registration for charitable purposes</li>
                        <li>FCRA Registration for foreign contributions</li>
                        <li>Member of GuideStar India Transparency Initiative</li>
                      </ul>
                    </div>
                  </section>

                  {/* CTA */}
                  <section className="border-t border-gray-200 pt-8 mt-12">
                    <div className="bg-primary-50 rounded-xl p-8">
                      <h3 className="text-xl font-bold text-gray-900 mb-4">Have Questions?</h3>
                      <p className="text-gray-700 mb-6">
                        We're committed to answering any questions you have about our operations,
                        finances, or impact. Transparency is not just a policy—it's how we build
                        trust with our donors.
                      </p>
                      <div className="flex flex-wrap gap-4">
                        <Link
                          href="/contact"
                          className="btn-primary inline-flex items-center gap-2"
                        >
                          Contact Us
                          <ArrowRight className="w-4 h-4" />
                        </Link>
                        <Link
                          href="/donor-agreement"
                          className="btn-outline inline-flex items-center gap-2"
                        >
                          Donor Agreement
                        </Link>
                      </div>
                    </div>
                  </section>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
