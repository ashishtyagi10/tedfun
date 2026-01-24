'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import {
  FileText,
  Scale,
  UserCheck,
  Heart,
  CreditCard,
  Shield,
  AlertTriangle,
  XCircle,
  Globe,
  Gavel,
  Mail,
  ChevronRight,
  CheckCircle,
  Info,
} from 'lucide-react'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { Card, CardContent } from '@/components/ui/Card'

const sections = [
  { id: 'acceptance', title: 'Acceptance of Terms', icon: CheckCircle },
  { id: 'eligibility', title: 'Eligibility', icon: UserCheck },
  { id: 'accounts', title: 'User Accounts', icon: Shield },
  { id: 'donations', title: 'Donations & Payments', icon: Heart },
  { id: 'refunds', title: 'Refund Policy', icon: CreditCard },
  { id: 'case-submission', title: 'Case Submissions', icon: FileText },
  { id: 'conduct', title: 'User Conduct', icon: Scale },
  { id: 'intellectual-property', title: 'Intellectual Property', icon: Globe },
  { id: 'disclaimers', title: 'Disclaimers', icon: AlertTriangle },
  { id: 'limitation', title: 'Limitation of Liability', icon: XCircle },
  { id: 'governing-law', title: 'Governing Law', icon: Gavel },
  { id: 'contact', title: 'Contact Information', icon: Mail },
]

export default function TermsOfServicePage() {
  const lastUpdated = 'January 24, 2025'
  const effectiveDate = 'January 24, 2025'

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-12 md:pt-40 md:pb-16 bg-gradient-to-br from-primary-50/50 via-white to-gray-50">
        <div className="container-app">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-100 text-primary-800 text-sm font-medium mb-6"
            >
              <Scale className="w-4 h-4" />
              Legal Agreement
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6"
            >
              Terms of Service
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg text-gray-600 leading-relaxed mb-4"
            >
              Please read these terms carefully before using our platform. By accessing or using
              The Education Foundation, you agree to be bound by these terms.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-wrap justify-center gap-4 text-sm text-gray-500"
            >
              <span>Effective: {effectiveDate}</span>
              <span className="hidden sm:inline">•</span>
              <span>Last updated: {lastUpdated}</span>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Quick Navigation */}
      <section className="py-8 border-b border-gray-100 sticky top-16 md:top-20 bg-white/95 backdrop-blur-sm z-40">
        <div className="container-app">
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-hide">
            <span className="text-sm text-gray-500 flex-shrink-0">Jump to:</span>
            {sections.map((section) => (
              <a
                key={section.id}
                href={`#${section.id}`}
                className="flex-shrink-0 px-3 py-1.5 text-sm font-medium text-gray-600 hover:text-primary-700 hover:bg-primary-50 rounded-full transition-colors"
              >
                {section.title}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 md:py-16">
        <div className="container-app">
          <div className="max-w-4xl mx-auto">
            <div className="grid lg:grid-cols-4 gap-8">
              {/* Sidebar - Desktop */}
              <div className="hidden lg:block">
                <div className="sticky top-40">
                  <Card variant="outlined">
                    <CardContent className="p-4">
                      <h3 className="font-semibold text-gray-900 text-sm mb-3">Contents</h3>
                      <nav className="space-y-1">
                        {sections.map((section) => {
                          const Icon = section.icon
                          return (
                            <a
                              key={section.id}
                              href={`#${section.id}`}
                              className="flex items-center gap-2 px-2 py-1.5 text-sm text-gray-600 hover:text-primary-700 hover:bg-primary-50 rounded-lg transition-colors"
                            >
                              <Icon className="w-4 h-4 flex-shrink-0" />
                              <span className="truncate">{section.title}</span>
                            </a>
                          )
                        })}
                      </nav>
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* Content */}
              <div className="lg:col-span-3 space-y-12">
                {/* Introduction */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="prose prose-gray max-w-none"
                >
                  <div className="bg-primary-50 border border-primary-100 rounded-xl p-5 mb-6">
                    <div className="flex items-start gap-3">
                      <Info className="w-5 h-5 text-primary-600 mt-0.5 flex-shrink-0" />
                      <div className="text-sm text-primary-800">
                        <p className="font-semibold mb-1">Important Notice</p>
                        <p>
                          These Terms of Service constitute a legally binding agreement between you
                          and The Education Foundation. If you do not agree to these terms, please
                          do not use our services.
                        </p>
                      </div>
                    </div>
                  </div>

                  <p className="text-gray-600 leading-relaxed">
                    Welcome to The Education Foundation. These Terms of Service (&quot;Terms&quot;) govern
                    your access to and use of our website, platform, and services (collectively,
                    the &quot;Services&quot;). The Education Foundation is a non-profit organization
                    dedicated to connecting donors with students in need of educational support.
                  </p>
                </motion.div>

                {/* Section 1: Acceptance of Terms */}
                <motion.div
                  id="acceptance"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="scroll-mt-32"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 rounded-lg bg-primary-100">
                      <CheckCircle className="w-5 h-5 text-primary-700" />
                    </div>
                    <h2 className="text-xl font-bold text-gray-900">1. Acceptance of Terms</h2>
                  </div>

                  <div className="space-y-4 text-gray-600">
                    <p>By accessing or using our Services, you acknowledge that you have read, understood, and agree to be bound by these Terms. This includes:</p>

                    <ul className="space-y-2">
                      {[
                        'Creating an account on our platform',
                        'Making a donation through our Services',
                        'Submitting a student case for consideration',
                        'Browsing student profiles and content',
                        'Subscribing to our newsletters or communications',
                      ].map((item, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <ChevronRight className="w-5 h-5 text-primary-600 mt-0.5 flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>

                    <p>
                      We reserve the right to modify these Terms at any time. Continued use of the
                      Services after changes constitutes acceptance of the modified Terms.
                    </p>
                  </div>
                </motion.div>

                {/* Section 2: Eligibility */}
                <motion.div
                  id="eligibility"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="scroll-mt-32"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 rounded-lg bg-primary-100">
                      <UserCheck className="w-5 h-5 text-primary-700" />
                    </div>
                    <h2 className="text-xl font-bold text-gray-900">2. Eligibility</h2>
                  </div>

                  <div className="space-y-4 text-gray-600">
                    <p>To use our Services, you must:</p>

                    <div className="grid sm:grid-cols-2 gap-3">
                      {[
                        { title: 'Age Requirement', desc: 'Be at least 18 years old, or have parental/guardian consent' },
                        { title: 'Legal Capacity', desc: 'Have the legal capacity to enter into binding agreements' },
                        { title: 'Accurate Information', desc: 'Provide accurate and truthful information' },
                        { title: 'Compliance', desc: 'Comply with all applicable laws and regulations' },
                      ].map((item, i) => (
                        <div key={i} className="p-4 bg-gray-50 rounded-lg">
                          <h3 className="font-semibold text-gray-900 text-sm mb-1">{item.title}</h3>
                          <p className="text-sm">{item.desc}</p>
                        </div>
                      ))}
                    </div>

                    <p className="text-sm">
                      If you are using our Services on behalf of an organization, you represent that
                      you have authority to bind that organization to these Terms.
                    </p>
                  </div>
                </motion.div>

                {/* Section 3: User Accounts */}
                <motion.div
                  id="accounts"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="scroll-mt-32"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 rounded-lg bg-primary-100">
                      <Shield className="w-5 h-5 text-primary-700" />
                    </div>
                    <h2 className="text-xl font-bold text-gray-900">3. User Accounts</h2>
                  </div>

                  <div className="space-y-4 text-gray-600">
                    <p>When you create an account with us, you agree to:</p>

                    <ul className="space-y-2">
                      {[
                        'Provide accurate, current, and complete information during registration',
                        'Maintain and promptly update your account information',
                        'Keep your password secure and confidential',
                        'Accept responsibility for all activities under your account',
                        'Notify us immediately of any unauthorized access or security breach',
                      ].map((item, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <ChevronRight className="w-5 h-5 text-primary-600 mt-0.5 flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>

                    <div className="bg-secondary-50 border border-secondary-100 rounded-xl p-4">
                      <p className="text-sm font-medium text-secondary-800">
                        We reserve the right to suspend or terminate accounts that violate these
                        Terms or engage in fraudulent activity.
                      </p>
                    </div>
                  </div>
                </motion.div>

                {/* Section 4: Donations & Payments */}
                <motion.div
                  id="donations"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="scroll-mt-32"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 rounded-lg bg-primary-100">
                      <Heart className="w-5 h-5 text-primary-700" />
                    </div>
                    <h2 className="text-xl font-bold text-gray-900">4. Donations & Payments</h2>
                  </div>

                  <div className="space-y-4 text-gray-600">
                    <p>When making a donation through our platform:</p>

                    <div className="space-y-3">
                      {[
                        {
                          title: 'Charitable Contribution',
                          desc: 'All donations are charitable contributions to The Education Foundation. We allocate funds to verified student cases based on need and availability.',
                        },
                        {
                          title: 'Payment Processing',
                          desc: 'Payments are processed securely through Stripe. We do not store your complete payment card information on our servers.',
                        },
                        {
                          title: 'Currency',
                          desc: 'Donations can be made in INR (Indian Rupees) or USD (US Dollars). Currency conversion rates are determined by our payment processor.',
                        },
                        {
                          title: 'Tax Receipts',
                          desc: 'Donations are eligible for tax deduction under Section 80G of the Income Tax Act (India). Tax receipts will be sent via email.',
                        },
                        {
                          title: 'Fund Allocation',
                          desc: 'While we make every effort to direct your donation to your chosen student, we reserve the right to reallocate funds if a student\'s needs are fully met or circumstances change.',
                        },
                      ].map((item, i) => (
                        <div key={i} className="p-4 border border-gray-200 rounded-lg">
                          <h3 className="font-semibold text-gray-900 text-sm mb-1">{item.title}</h3>
                          <p className="text-sm">{item.desc}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>

                {/* Section 5: Refund Policy */}
                <motion.div
                  id="refunds"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="scroll-mt-32"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 rounded-lg bg-primary-100">
                      <CreditCard className="w-5 h-5 text-primary-700" />
                    </div>
                    <h2 className="text-xl font-bold text-gray-900">5. Refund Policy</h2>
                  </div>

                  <div className="space-y-4 text-gray-600">
                    <p>
                      As a non-profit organization, donations are generally non-refundable once
                      processed. However, we understand that exceptional circumstances may arise.
                    </p>

                    <div className="bg-gray-50 rounded-xl p-5">
                      <h3 className="font-semibold text-gray-900 mb-3">Refund Eligibility</h3>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-success mt-0.5 flex-shrink-0" />
                          <span><strong>Duplicate charges:</strong> Refund within 30 days</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-success mt-0.5 flex-shrink-0" />
                          <span><strong>Unauthorized transactions:</strong> Full investigation and refund if verified</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-success mt-0.5 flex-shrink-0" />
                          <span><strong>Technical errors:</strong> Refund for system-caused overcharges</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <XCircle className="w-4 h-4 text-error mt-0.5 flex-shrink-0" />
                          <span><strong>Change of mind:</strong> Generally not eligible for refund</span>
                        </li>
                      </ul>
                    </div>

                    <p className="text-sm">
                      To request a refund, please contact us at{' '}
                      <a href="mailto:support@educationfoundation.org" className="text-primary-700 hover:underline">
                        support@educationfoundation.org
                      </a>{' '}
                      within 30 days of your donation with your transaction details.
                    </p>
                  </div>
                </motion.div>

                {/* Section 6: Case Submissions */}
                <motion.div
                  id="case-submission"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="scroll-mt-32"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 rounded-lg bg-primary-100">
                      <FileText className="w-5 h-5 text-primary-700" />
                    </div>
                    <h2 className="text-xl font-bold text-gray-900">6. Case Submissions</h2>
                  </div>

                  <div className="space-y-4 text-gray-600">
                    <p>When submitting a student case for consideration, you represent and warrant that:</p>

                    <ul className="space-y-2">
                      {[
                        'All information provided is accurate, complete, and truthful',
                        'You have proper authorization to submit information about the student',
                        'You have obtained necessary consents for sharing personal information and photographs',
                        'The student genuinely requires financial assistance for education',
                        'You will provide additional documentation if requested during verification',
                      ].map((item, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <ChevronRight className="w-5 h-5 text-primary-600 mt-0.5 flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>

                    <div className="bg-primary-50 border border-primary-100 rounded-xl p-4">
                      <h3 className="font-semibold text-primary-800 text-sm mb-2">Verification Process</h3>
                      <p className="text-sm text-primary-700">
                        All submitted cases undergo a thorough verification process. We reserve the
                        right to reject, modify, or remove any case that does not meet our criteria
                        or is found to contain false information.
                      </p>
                    </div>
                  </div>
                </motion.div>

                {/* Section 7: User Conduct */}
                <motion.div
                  id="conduct"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="scroll-mt-32"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 rounded-lg bg-primary-100">
                      <Scale className="w-5 h-5 text-primary-700" />
                    </div>
                    <h2 className="text-xl font-bold text-gray-900">7. User Conduct</h2>
                  </div>

                  <div className="space-y-4 text-gray-600">
                    <p>You agree not to engage in any of the following prohibited activities:</p>

                    <div className="grid sm:grid-cols-2 gap-3">
                      {[
                        'Submitting false or misleading information',
                        'Impersonating another person or entity',
                        'Using the platform for fraudulent purposes',
                        'Attempting to access unauthorized areas',
                        'Interfering with platform security features',
                        'Harvesting user data without consent',
                        'Posting harmful or offensive content',
                        'Violating any applicable laws or regulations',
                      ].map((item, i) => (
                        <div key={i} className="flex items-start gap-2 p-3 bg-error/5 border border-error/10 rounded-lg">
                          <XCircle className="w-4 h-4 text-error mt-0.5 flex-shrink-0" />
                          <span className="text-sm">{item}</span>
                        </div>
                      ))}
                    </div>

                    <p className="text-sm">
                      Violation of these conduct rules may result in immediate termination of your
                      account and potential legal action.
                    </p>
                  </div>
                </motion.div>

                {/* Section 8: Intellectual Property */}
                <motion.div
                  id="intellectual-property"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="scroll-mt-32"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 rounded-lg bg-primary-100">
                      <Globe className="w-5 h-5 text-primary-700" />
                    </div>
                    <h2 className="text-xl font-bold text-gray-900">8. Intellectual Property</h2>
                  </div>

                  <div className="space-y-4 text-gray-600">
                    <p>
                      All content on our platform, including but not limited to text, graphics,
                      logos, images, and software, is the property of The Education Foundation or
                      its content suppliers and is protected by intellectual property laws.
                    </p>

                    <div className="bg-gray-50 rounded-xl p-5">
                      <h3 className="font-semibold text-gray-900 mb-3">You May:</h3>
                      <ul className="space-y-2 text-sm mb-4">
                        {[
                          'View and access content for personal, non-commercial use',
                          'Share links to our platform on social media',
                          'Print content for personal reference',
                        ].map((item, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-success mt-0.5 flex-shrink-0" />
                            {item}
                          </li>
                        ))}
                      </ul>

                      <h3 className="font-semibold text-gray-900 mb-3">You May Not:</h3>
                      <ul className="space-y-2 text-sm">
                        {[
                          'Copy, modify, or distribute our content without permission',
                          'Use our trademarks or logos without written consent',
                          'Create derivative works based on our content',
                          'Use content for commercial purposes without authorization',
                        ].map((item, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <XCircle className="w-4 h-4 text-error mt-0.5 flex-shrink-0" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>

                {/* Section 9: Disclaimers */}
                <motion.div
                  id="disclaimers"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="scroll-mt-32"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 rounded-lg bg-primary-100">
                      <AlertTriangle className="w-5 h-5 text-primary-700" />
                    </div>
                    <h2 className="text-xl font-bold text-gray-900">9. Disclaimers</h2>
                  </div>

                  <div className="space-y-4 text-gray-600">
                    <div className="bg-secondary-50 border border-secondary-100 rounded-xl p-5">
                      <p className="text-sm text-secondary-800 font-medium uppercase tracking-wide mb-3">
                        Important Disclaimers
                      </p>
                      <div className="space-y-3 text-sm">
                        <p>
                          <strong>AS-IS BASIS:</strong> Our Services are provided &quot;as is&quot; and &quot;as
                          available&quot; without warranties of any kind, either express or implied.
                        </p>
                        <p>
                          <strong>NO GUARANTEE:</strong> While we verify student cases, we cannot
                          guarantee the accuracy of all information provided by third parties or the
                          outcomes of educational support.
                        </p>
                        <p>
                          <strong>THIRD-PARTY SERVICES:</strong> We are not responsible for
                          third-party payment processors, services, or external links on our platform.
                        </p>
                        <p>
                          <strong>AVAILABILITY:</strong> We do not guarantee uninterrupted access to
                          our Services and may suspend or terminate Services for maintenance or other
                          reasons.
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Section 10: Limitation of Liability */}
                <motion.div
                  id="limitation"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="scroll-mt-32"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 rounded-lg bg-primary-100">
                      <XCircle className="w-5 h-5 text-primary-700" />
                    </div>
                    <h2 className="text-xl font-bold text-gray-900">10. Limitation of Liability</h2>
                  </div>

                  <div className="space-y-4 text-gray-600">
                    <p>
                      To the maximum extent permitted by applicable law, The Education Foundation
                      and its directors, employees, partners, and affiliates shall not be liable for:
                    </p>

                    <ul className="space-y-2">
                      {[
                        'Any indirect, incidental, special, consequential, or punitive damages',
                        'Loss of profits, data, or goodwill',
                        'Service interruptions or technical issues',
                        'Actions or omissions of third parties, including students and submitters',
                        'Unauthorized access to or alteration of your data',
                        'Any matter beyond our reasonable control',
                      ].map((item, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <ChevronRight className="w-5 h-5 text-primary-600 mt-0.5 flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>

                    <p className="text-sm">
                      Our total liability for any claims arising from your use of the Services shall
                      not exceed the amount you paid to us in the twelve (12) months preceding the claim.
                    </p>
                  </div>
                </motion.div>

                {/* Section 11: Governing Law */}
                <motion.div
                  id="governing-law"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="scroll-mt-32"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 rounded-lg bg-primary-100">
                      <Gavel className="w-5 h-5 text-primary-700" />
                    </div>
                    <h2 className="text-xl font-bold text-gray-900">11. Governing Law & Disputes</h2>
                  </div>

                  <div className="space-y-4 text-gray-600">
                    <p>
                      These Terms shall be governed by and construed in accordance with the laws of
                      India, without regard to its conflict of law provisions.
                    </p>

                    <div className="bg-gray-50 rounded-xl p-5">
                      <h3 className="font-semibold text-gray-900 mb-3">Dispute Resolution</h3>
                      <ol className="space-y-2 text-sm list-decimal list-inside">
                        <li>
                          <strong>Informal Resolution:</strong> We encourage you to contact us first
                          to resolve any disputes informally.
                        </li>
                        <li>
                          <strong>Mediation:</strong> If informal resolution fails, parties agree to
                          attempt mediation before litigation.
                        </li>
                        <li>
                          <strong>Jurisdiction:</strong> Any legal proceedings shall be conducted
                          exclusively in the courts of Mumbai, Maharashtra, India.
                        </li>
                      </ol>
                    </div>
                  </div>
                </motion.div>

                {/* Section 12: Contact Information */}
                <motion.div
                  id="contact"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="scroll-mt-32"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 rounded-lg bg-primary-100">
                      <Mail className="w-5 h-5 text-primary-700" />
                    </div>
                    <h2 className="text-xl font-bold text-gray-900">12. Contact Information</h2>
                  </div>

                  <div className="space-y-4 text-gray-600">
                    <p>
                      If you have any questions about these Terms of Service, please contact us:
                    </p>

                    <Card variant="outlined">
                      <CardContent className="p-5">
                        <div className="space-y-3">
                          <div>
                            <p className="font-semibold text-gray-900">The Education Foundation</p>
                            <p className="text-sm">Legal Department</p>
                          </div>
                          <div className="space-y-1 text-sm">
                            <p>
                              <span className="text-gray-500">Email:</span>{' '}
                              <a href="mailto:legal@educationfoundation.org" className="text-primary-700 hover:underline">
                                legal@educationfoundation.org
                              </a>
                            </p>
                            <p>
                              <span className="text-gray-500">Address:</span>{' '}
                              123 Education Street, Andheri West, Mumbai, Maharashtra 400053, India
                            </p>
                            <p>
                              <span className="text-gray-500">Phone:</span>{' '}
                              <a href="tel:+919876543210" className="text-primary-700 hover:underline">
                                +91 98765 43210
                              </a>
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </motion.div>

                {/* Related Links */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="pt-8 border-t border-gray-200"
                >
                  <h3 className="font-semibold text-gray-900 mb-4">Related Documents</h3>
                  <div className="flex flex-wrap gap-3">
                    <Link
                      href="/privacy"
                      className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg text-sm font-medium text-gray-700 transition-colors"
                    >
                      <Shield className="w-4 h-4" />
                      Privacy Policy
                    </Link>
                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg text-sm font-medium text-gray-700 transition-colors"
                    >
                      <Mail className="w-4 h-4" />
                      Contact Us
                    </Link>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
