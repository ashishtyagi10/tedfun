'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import {
  FileText,
  Heart,
  Shield,
  DollarSign,
  RefreshCw,
  Eye,
  Users,
  Scale,
  CheckCircle,
  AlertCircle,
  ArrowRight,
  ChevronRight
} from 'lucide-react'

const sections = [
  { id: 'introduction', title: 'Introduction', icon: FileText },
  { id: 'donation-types', title: 'Types of Donations', icon: Heart },
  { id: 'fund-allocation', title: 'Fund Allocation', icon: DollarSign },
  { id: 'donor-recognition', title: 'Donor Recognition', icon: Users },
  { id: 'tax-benefits', title: 'Tax Benefits', icon: Scale },
  { id: 'refund-policy', title: 'Refund Policy', icon: RefreshCw },
  { id: 'transparency', title: 'Transparency', icon: Eye },
  { id: 'donor-rights', title: 'Donor Rights', icon: Shield },
  { id: 'commitments', title: 'Our Commitments', icon: CheckCircle },
  { id: 'restrictions', title: 'Restrictions', icon: AlertCircle },
]

export default function DonorAgreementPage() {
  const [activeSection, setActiveSection] = useState('introduction')

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
                <Heart className="w-4 h-4" />
                Donor Partnership
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Donor Agreement
              </h1>
              <p className="text-xl text-primary-100 mb-4">
                Thank you for choosing to support The Education Foundation. This agreement
                outlines the terms of your generous contribution and our commitment to you.
              </p>
              <p className="text-primary-200">
                Last updated: January 2025
              </p>
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
              <ChevronRight className="w-4 h-4 text-gray-400" />
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
                  {/* Introduction */}
                  <section id="introduction" className="mb-12">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-10 h-10 bg-primary-100 rounded-xl flex items-center justify-center">
                        <FileText className="w-5 h-5 text-primary-600" />
                      </div>
                      <h2 className="text-2xl font-bold text-gray-900">1. Introduction</h2>
                    </div>
                    <div className="prose prose-gray max-w-none">
                      <p>
                        This Donor Agreement ("Agreement") establishes the terms and conditions governing
                        donations made to The Education Foundation ("Foundation," "we," "us," or "our").
                        By making a donation, you ("Donor," "you," or "your") agree to be bound by this Agreement.
                      </p>
                      <p>
                        The Education Foundation is a registered non-profit organization dedicated to
                        providing educational opportunities to underprivileged students across India.
                        Your generosity directly impacts the lives of students who dream of a better future
                        through education.
                      </p>
                      <div className="bg-primary-50 border border-primary-100 rounded-xl p-6 mt-6">
                        <h4 className="font-semibold text-primary-900 mb-2">Our Mission</h4>
                        <p className="text-primary-800 mb-0">
                          To bridge the gap between deserving students and quality education by connecting
                          generous donors with verified students in need, ensuring transparency, accountability,
                          and maximum impact for every donation.
                        </p>
                      </div>
                    </div>
                  </section>

                  {/* Types of Donations */}
                  <section id="donation-types" className="mb-12">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-10 h-10 bg-secondary-100 rounded-xl flex items-center justify-center">
                        <Heart className="w-5 h-5 text-secondary-600" />
                      </div>
                      <h2 className="text-2xl font-bold text-gray-900">2. Types of Donations</h2>
                    </div>
                    <div className="prose prose-gray max-w-none">
                      <h3>2.1 One-Time Donations</h3>
                      <p>
                        Single contributions made to support specific students or the Foundation's general fund.
                        One-time donations can be made via credit/debit card, UPI, net banking, or bank transfer.
                      </p>

                      <h3>2.2 Recurring Donations</h3>
                      <p>
                        Monthly or annual contributions that provide sustained support for students' educational
                        journeys. Recurring donations can be modified or cancelled at any time through your
                        donor dashboard.
                      </p>

                      <h3>2.3 Student-Preferred Donations</h3>
                      <p>
                        Contributions made with a preference for a specific student's educational needs.
                        Your student selection expresses a preference, not a binding restriction — the
                        Foundation retains final discretion over allocation (see Section 3.3). Preferred
                        contributions are applied toward the student's tuition fees, books, supplies, or
                        other educational expenses.
                      </p>

                      <h3>2.4 General Fund Donations</h3>
                      <p>
                        Contributions to our general fund allow us to allocate resources where they are needed
                        most, including emergency assistance, administrative costs, and supporting students
                        who haven't yet found individual sponsors.
                      </p>

                      <h3>2.5 In-Kind Donations</h3>
                      <p>
                        Non-monetary contributions such as books, educational materials, computers, or other
                        supplies. Please contact us before making in-kind donations to ensure we can effectively
                        utilize and distribute your contribution.
                      </p>
                    </div>
                  </section>

                  {/* Fund Allocation */}
                  <section id="fund-allocation" className="mb-12">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center">
                        <DollarSign className="w-5 h-5 text-green-600" />
                      </div>
                      <h2 className="text-2xl font-bold text-gray-900">3. Fund Allocation</h2>
                    </div>
                    <div className="prose prose-gray max-w-none">
                      <p>
                        We are committed to ensuring that your donation creates maximum impact. Here's how
                        your contributions are allocated:
                      </p>

                      <div className="grid md:grid-cols-3 gap-4 not-prose my-6">
                        <div className="bg-green-50 rounded-xl p-6 text-center">
                          <div className="text-3xl font-bold text-green-600 mb-2">85%</div>
                          <div className="text-sm font-medium text-green-800">Direct Student Support</div>
                          <p className="text-xs text-green-700 mt-2">
                            Tuition, books, supplies, and educational expenses
                          </p>
                        </div>
                        <div className="bg-blue-50 rounded-xl p-6 text-center">
                          <div className="text-3xl font-bold text-blue-600 mb-2">10%</div>
                          <div className="text-sm font-medium text-blue-800">Program Operations</div>
                          <p className="text-xs text-blue-700 mt-2">
                            Student verification, monitoring, and support services
                          </p>
                        </div>
                        <div className="bg-purple-50 rounded-xl p-6 text-center">
                          <div className="text-3xl font-bold text-purple-600 mb-2">5%</div>
                          <div className="text-sm font-medium text-purple-800">Administration</div>
                          <p className="text-xs text-purple-700 mt-2">
                            Platform maintenance, payment processing, and reporting
                          </p>
                        </div>
                      </div>

                      <h3>3.1 Student-Preferred Allocation</h3>
                      <p>
                        When you donate with a preference for a specific student, 100% of your
                        contribution is applied to direct student educational expenses, in line with your
                        preference wherever possible. Administrative costs are covered by our general fund.
                      </p>

                      <h3>3.2 Surplus Funds</h3>
                      <p>
                        If a student receives more funds than needed for their current requirements, the
                        surplus may be used for their future educational needs or, with appropriate notice
                        to donors, redirected to students with similar needs.
                      </p>

                      <h3>3.3 Donor Preferences and Foundation Discretion</h3>
                      <p>
                        All donations are contributions to The Education Foundation and become the
                        property of the Foundation upon receipt. When you select a student or program,
                        you are expressing a preference, not imposing a restriction. The Foundation
                        retains exclusive legal control and discretion over the use of all donated funds,
                        and its Board (or designated committee) makes final allocation decisions using
                        objective, need-based criteria. If a preferred student withdraws, is fully funded,
                        or otherwise cannot receive funds, the Foundation will apply your gift to another
                        student or program with similar charitable purposes.
                      </p>
                      <div className="bg-primary-50 border border-primary-100 rounded-xl p-6 mt-6">
                        <h4 className="font-semibold text-primary-900 mb-2">Why this matters</h4>
                        <p className="text-primary-800 mb-0">
                          This discretion is required for donations to qualify as tax-deductible
                          charitable contributions under U.S. Internal Revenue Code Section 170.
                          Gifts earmarked for a designated individual are treated as personal gifts,
                          not charitable donations — retaining Foundation discretion protects both
                          your tax deduction and our exempt status.
                        </p>
                      </div>
                    </div>
                  </section>

                  {/* Donor Recognition */}
                  <section id="donor-recognition" className="mb-12">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-10 h-10 bg-amber-100 rounded-xl flex items-center justify-center">
                        <Users className="w-5 h-5 text-amber-600" />
                      </div>
                      <h2 className="text-2xl font-bold text-gray-900">4. Donor Recognition</h2>
                    </div>
                    <div className="prose prose-gray max-w-none">
                      <p>
                        We believe in acknowledging and celebrating our donors' generosity while respecting
                        their privacy preferences.
                      </p>

                      <h3>4.1 Recognition Levels</h3>
                      <ul>
                        <li><strong>Friend:</strong> Donations up to ₹10,000 / $120</li>
                        <li><strong>Supporter:</strong> Donations from ₹10,001 to ₹50,000 / $121 to $600</li>
                        <li><strong>Champion:</strong> Donations from ₹50,001 to ₹1,00,000 / $601 to $1,200</li>
                        <li><strong>Guardian:</strong> Donations from ₹1,00,001 to ₹5,00,000 / $1,201 to $6,000</li>
                        <li><strong>Patron:</strong> Donations above ₹5,00,000 / $6,000</li>
                      </ul>

                      <h3>4.2 Privacy Options</h3>
                      <p>
                        You may choose to remain anonymous or specify how you'd like to be recognized.
                        Options include:
                      </p>
                      <ul>
                        <li>Full name recognition</li>
                        <li>First name only</li>
                        <li>Initials only</li>
                        <li>Complete anonymity</li>
                      </ul>

                      <h3>4.3 Communication Preferences</h3>
                      <p>
                        You can customize your communication preferences to receive updates about:
                      </p>
                      <ul>
                        <li>Student progress reports</li>
                        <li>Impact newsletters</li>
                        <li>Annual reports</li>
                        <li>Event invitations</li>
                      </ul>
                    </div>
                  </section>

                  {/* Tax Benefits */}
                  <section id="tax-benefits" className="mb-12">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-10 h-10 bg-indigo-100 rounded-xl flex items-center justify-center">
                        <Scale className="w-5 h-5 text-indigo-600" />
                      </div>
                      <h2 className="text-2xl font-bold text-gray-900">5. Tax Benefits</h2>
                    </div>
                    <div className="prose prose-gray max-w-none">
                      <h3>5.1 For Indian Donors</h3>
                      <p>
                        The Education Foundation is registered under Section 80G of the Income Tax Act, 1961.
                        Donations made to us are eligible for tax deduction as per applicable laws.
                      </p>
                      <ul>
                        <li>50% tax deduction on donated amount</li>
                        <li>80G certificate provided within 7 days of donation</li>
                        <li>Annual consolidated tax receipt available on request</li>
                      </ul>

                      <h3>5.2 For International Donors</h3>
                      <p>
                        Tax benefits for international donations vary by country. We recommend consulting
                        with your tax advisor regarding deductibility in your jurisdiction. We provide:
                      </p>
                      <ul>
                        <li>Official donation receipts</li>
                        <li>Documentation of our non-profit status</li>
                        <li>Detailed records of how funds were utilized</li>
                      </ul>

                      <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 mt-6">
                        <h4 className="font-semibold text-amber-900 mb-2">Important Note</h4>
                        <p className="text-amber-800 mb-0">
                          Tax laws are subject to change. Please consult a qualified tax professional for
                          advice specific to your situation. The Foundation cannot provide tax advice.
                        </p>
                      </div>
                    </div>
                  </section>

                  {/* Refund Policy */}
                  <section id="refund-policy" className="mb-12">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-10 h-10 bg-rose-100 rounded-xl flex items-center justify-center">
                        <RefreshCw className="w-5 h-5 text-rose-600" />
                      </div>
                      <h2 className="text-2xl font-bold text-gray-900">6. Refund Policy</h2>
                    </div>
                    <div className="prose prose-gray max-w-none">
                      <p>
                        We understand that circumstances may change. Our refund policy aims to be fair
                        while ensuring committed funds can be utilized effectively.
                      </p>

                      <h3>6.1 Refund Eligibility</h3>
                      <ul>
                        <li><strong>Within 24 hours:</strong> Full refund available for any reason</li>
                        <li><strong>Within 7 days:</strong> Full refund if funds haven't been disbursed</li>
                        <li><strong>After 7 days:</strong> Refunds considered on a case-by-case basis</li>
                      </ul>

                      <h3>6.2 Non-Refundable Situations</h3>
                      <p>Refunds may not be possible when:</p>
                      <ul>
                        <li>Funds have already been disbursed to the student or institution</li>
                        <li>The donation was made more than 30 days ago</li>
                        <li>Tax benefits have been claimed on the donation</li>
                      </ul>

                      <h3>6.3 Requesting a Refund</h3>
                      <p>
                        To request a refund, please contact us at{' '}
                        <a href="mailto:support@theeducationfoundation.org">support@theeducationfoundation.org</a>{' '}
                        with your donation receipt and reason for the refund request. We will respond within
                        3-5 business days.
                      </p>

                      <h3>6.4 Processing Time</h3>
                      <p>
                        Approved refunds will be processed within 7-10 business days using the original
                        payment method. Please note that your bank may take additional time to reflect
                        the refund.
                      </p>
                    </div>
                  </section>

                  {/* Transparency */}
                  <section id="transparency" className="mb-12">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-10 h-10 bg-cyan-100 rounded-xl flex items-center justify-center">
                        <Eye className="w-5 h-5 text-cyan-600" />
                      </div>
                      <h2 className="text-2xl font-bold text-gray-900">7. Transparency</h2>
                    </div>
                    <div className="prose prose-gray max-w-none">
                      <p>
                        Transparency is at the core of our operations. We believe you have the right to
                        know exactly how your donation is being used.
                      </p>

                      <h3>7.1 Impact Tracking</h3>
                      <p>For student-specific donations, you will receive:</p>
                      <ul>
                        <li>Initial confirmation of fund allocation</li>
                        <li>Quarterly progress reports on the student</li>
                        <li>Annual academic performance updates</li>
                        <li>Photos and stories (with student/family consent)</li>
                      </ul>

                      <h3>7.2 Financial Reporting</h3>
                      <p>We publish:</p>
                      <ul>
                        <li>Audited annual financial statements</li>
                        <li>Quarterly financial summaries</li>
                        <li>Detailed breakdown of fund utilization</li>
                        <li>Third-party audit reports</li>
                      </ul>

                      <h3>7.3 Student Verification</h3>
                      <p>Every student on our platform undergoes:</p>
                      <ul>
                        <li>Background verification</li>
                        <li>School/institution confirmation</li>
                        <li>Financial need assessment</li>
                        <li>Home visit (where applicable)</li>
                        <li>Periodic re-verification</li>
                      </ul>
                    </div>
                  </section>

                  {/* Donor Rights */}
                  <section id="donor-rights" className="mb-12">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-10 h-10 bg-primary-100 rounded-xl flex items-center justify-center">
                        <Shield className="w-5 h-5 text-primary-600" />
                      </div>
                      <h2 className="text-2xl font-bold text-gray-900">8. Donor Rights</h2>
                    </div>
                    <div className="prose prose-gray max-w-none">
                      <p>As a donor to The Education Foundation, you have the right to:</p>

                      <div className="grid md:grid-cols-2 gap-4 not-prose my-6">
                        {[
                          'Know how your funds are being used',
                          'Receive prompt and truthful answers to questions',
                          'Access our financial statements and reports',
                          'Be assured your donation is used as intended',
                          'Receive appropriate acknowledgment and recognition',
                          'Have your personal information kept confidential',
                          'Expect professional and ethical conduct',
                          'Discontinue communications at any time',
                        ].map((right, index) => (
                          <div key={index} className="flex items-start gap-3 bg-gray-50 rounded-lg p-4">
                            <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                            <span className="text-sm text-gray-700">{right}</span>
                          </div>
                        ))}
                      </div>

                      <h3>8.1 Data Protection</h3>
                      <p>
                        Your personal and financial information is protected in accordance with our{' '}
                        <Link href="/privacy" className="text-primary-600 hover:text-primary-700">
                          Privacy Policy
                        </Link>
                        . We never sell, trade, or share your information with third parties for
                        marketing purposes.
                      </p>

                      <h3>8.2 Communication Control</h3>
                      <p>
                        You can update your communication preferences at any time through your donor
                        dashboard or by contacting us directly. We respect your choices and will honor
                        opt-out requests within 48 hours.
                      </p>
                    </div>
                  </section>

                  {/* Our Commitments */}
                  <section id="commitments" className="mb-12">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center">
                        <CheckCircle className="w-5 h-5 text-green-600" />
                      </div>
                      <h2 className="text-2xl font-bold text-gray-900">9. Our Commitments</h2>
                    </div>
                    <div className="prose prose-gray max-w-none">
                      <p>The Education Foundation commits to:</p>

                      <h3>9.1 Accountability</h3>
                      <ul>
                        <li>Maintaining accurate records of all donations and expenditures</li>
                        <li>Providing timely and accurate reports to donors</li>
                        <li>Undergoing annual independent audits</li>
                        <li>Complying with all applicable laws and regulations</li>
                      </ul>

                      <h3>9.2 Integrity</h3>
                      <ul>
                        <li>Using donations only for their intended purposes</li>
                        <li>Being truthful in all communications</li>
                        <li>Avoiding conflicts of interest</li>
                        <li>Treating all stakeholders with respect and dignity</li>
                      </ul>

                      <h3>9.3 Impact</h3>
                      <ul>
                        <li>Maximizing the educational impact of every donation</li>
                        <li>Continuously improving our programs and processes</li>
                        <li>Measuring and reporting outcomes honestly</li>
                        <li>Supporting students beyond just financial assistance</li>
                      </ul>

                      <h3>9.4 Responsiveness</h3>
                      <ul>
                        <li>Responding to donor inquiries within 2 business days</li>
                        <li>Addressing concerns promptly and thoroughly</li>
                        <li>Welcoming feedback and suggestions</li>
                        <li>Maintaining open channels of communication</li>
                      </ul>
                    </div>
                  </section>

                  {/* Restrictions */}
                  <section id="restrictions" className="mb-12">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-10 h-10 bg-red-100 rounded-xl flex items-center justify-center">
                        <AlertCircle className="w-5 h-5 text-red-600" />
                      </div>
                      <h2 className="text-2xl font-bold text-gray-900">10. Restrictions</h2>
                    </div>
                    <div className="prose prose-gray max-w-none">
                      <h3>10.1 Donation Restrictions</h3>
                      <p>We cannot accept donations that:</p>
                      <ul>
                        <li>Come from illegal sources or activities</li>
                        <li>Require us to violate any law or regulation</li>
                        <li>Would compromise our independence or integrity</li>
                        <li>Have conditions that conflict with our mission</li>
                        <li>Involve money laundering or terrorist financing</li>
                      </ul>

                      <h3>10.2 Use Restrictions</h3>
                      <p>Donations cannot be used for:</p>
                      <ul>
                        <li>Non-educational purposes</li>
                        <li>Political campaigns or lobbying</li>
                        <li>Religious proselytization</li>
                        <li>Discrimination based on caste, religion, gender, or ethnicity</li>
                        <li>Personal benefit of Foundation staff or board members</li>
                      </ul>

                      <h3>10.3 Right to Decline</h3>
                      <p>
                        The Foundation reserves the right to decline any donation at its sole discretion,
                        including donations with conditions that cannot be fulfilled or that may harm our
                        reputation or mission.
                      </p>
                    </div>
                  </section>

                  {/* Agreement */}
                  <section className="border-t border-gray-200 pt-8 mt-12">
                    <div className="bg-primary-50 rounded-xl p-8">
                      <h3 className="text-xl font-bold text-gray-900 mb-4">Your Agreement</h3>
                      <p className="text-gray-700 mb-6">
                        By making a donation to The Education Foundation, you acknowledge that you have
                        read, understood, and agree to the terms of this Donor Agreement. You confirm that
                        your donation is made voluntarily and without expectation of goods or services in
                        return (beyond those outlined in this agreement). You further acknowledge that any
                        student selection is an expression of preference and that the Foundation retains
                        full discretion and control over all donated funds, as described in Section 3.3.
                      </p>
                      <div className="flex flex-wrap gap-4">
                        <Link
                          href="/students"
                          className="btn-primary inline-flex items-center gap-2"
                        >
                          Support a Student
                          <ArrowRight className="w-4 h-4" />
                        </Link>
                        <Link
                          href="/contact"
                          className="btn-outline inline-flex items-center gap-2"
                        >
                          Contact Us
                        </Link>
                      </div>
                    </div>
                  </section>

                  {/* Contact */}
                  <section className="mt-12 text-center">
                    <p className="text-gray-600">
                      Have questions about this agreement?{' '}
                      <Link href="/contact" className="text-primary-600 hover:text-primary-700 font-medium">
                        Contact our team
                      </Link>
                      {' '}or email us at{' '}
                      <a
                        href="mailto:donors@theeducationfoundation.org"
                        className="text-primary-600 hover:text-primary-700 font-medium"
                      >
                        donors@theeducationfoundation.org
                      </a>
                    </p>
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
