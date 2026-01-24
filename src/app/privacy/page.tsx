'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import {
  Shield,
  Lock,
  Eye,
  Database,
  Share2,
  Bell,
  Cookie,
  UserCheck,
  Mail,
  FileText,
  ChevronRight,
} from 'lucide-react'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { Card, CardContent } from '@/components/ui/Card'

const sections = [
  { id: 'information-we-collect', title: 'Information We Collect', icon: Database },
  { id: 'how-we-use', title: 'How We Use Your Information', icon: Eye },
  { id: 'information-sharing', title: 'Information Sharing', icon: Share2 },
  { id: 'data-security', title: 'Data Security', icon: Lock },
  { id: 'cookies', title: 'Cookies & Tracking', icon: Cookie },
  { id: 'your-rights', title: 'Your Rights', icon: UserCheck },
  { id: 'children', title: 'Children\'s Privacy', icon: Shield },
  { id: 'changes', title: 'Policy Changes', icon: Bell },
  { id: 'contact', title: 'Contact Us', icon: Mail },
]

export default function PrivacyPolicyPage() {
  const lastUpdated = 'January 24, 2025'

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
              <Shield className="w-4 h-4" />
              Your Privacy Matters
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6"
            >
              Privacy Policy
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg text-gray-600 leading-relaxed mb-4"
            >
              We are committed to protecting your privacy and ensuring the security of your
              personal information. This policy explains how we collect, use, and safeguard your
              data.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-sm text-gray-500"
            >
              Last updated: {lastUpdated}
            </motion.p>
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
                  <p className="text-gray-600 leading-relaxed">
                    The Education Foundation (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) operates the website
                    and platform that connects donors with students in need of educational support.
                    This Privacy Policy describes how we collect, use, disclose, and protect your
                    personal information when you use our services.
                  </p>
                  <p className="text-gray-600 leading-relaxed">
                    By using our platform, you agree to the collection and use of information in
                    accordance with this policy. If you do not agree with our policies and
                    practices, please do not use our services.
                  </p>
                </motion.div>

                {/* Section 1: Information We Collect */}
                <motion.div
                  id="information-we-collect"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="scroll-mt-32"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 rounded-lg bg-primary-100">
                      <Database className="w-5 h-5 text-primary-700" />
                    </div>
                    <h2 className="text-xl font-bold text-gray-900">1. Information We Collect</h2>
                  </div>

                  <div className="space-y-4 text-gray-600">
                    <p>We collect several types of information from and about users of our platform:</p>

                    <div className="bg-gray-50 rounded-xl p-5 space-y-4">
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-2">Personal Information</h3>
                        <ul className="list-disc list-inside space-y-1 text-sm">
                          <li>Name, email address, and phone number</li>
                          <li>Billing address and payment information</li>
                          <li>Account credentials (username and password)</li>
                          <li>Profile information (photo, bio, preferences)</li>
                        </ul>
                      </div>

                      <div>
                        <h3 className="font-semibold text-gray-900 mb-2">Student Information (for case submissions)</h3>
                        <ul className="list-disc list-inside space-y-1 text-sm">
                          <li>Student name, age, and educational details</li>
                          <li>School information and academic records</li>
                          <li>Family background and financial situation</li>
                          <li>Photographs and supporting documents</li>
                        </ul>
                      </div>

                      <div>
                        <h3 className="font-semibold text-gray-900 mb-2">Automatically Collected Information</h3>
                        <ul className="list-disc list-inside space-y-1 text-sm">
                          <li>Device information (browser type, operating system)</li>
                          <li>IP address and approximate location</li>
                          <li>Usage data (pages visited, time spent, interactions)</li>
                          <li>Cookies and similar tracking technologies</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Section 2: How We Use Your Information */}
                <motion.div
                  id="how-we-use"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="scroll-mt-32"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 rounded-lg bg-primary-100">
                      <Eye className="w-5 h-5 text-primary-700" />
                    </div>
                    <h2 className="text-xl font-bold text-gray-900">2. How We Use Your Information</h2>
                  </div>

                  <div className="space-y-4 text-gray-600">
                    <p>We use the information we collect for the following purposes:</p>

                    <div className="grid sm:grid-cols-2 gap-4">
                      {[
                        { title: 'Provide Services', desc: 'Process donations, connect donors with students, and manage your account' },
                        { title: 'Communication', desc: 'Send donation receipts, updates about supported students, and important notices' },
                        { title: 'Verification', desc: 'Verify student cases and ensure the authenticity of submissions' },
                        { title: 'Improvement', desc: 'Analyze usage patterns to improve our platform and user experience' },
                        { title: 'Legal Compliance', desc: 'Comply with legal obligations, including tax reporting requirements' },
                        { title: 'Security', desc: 'Detect and prevent fraud, abuse, and security incidents' },
                      ].map((item, i) => (
                        <div key={i} className="bg-gray-50 rounded-lg p-4">
                          <h3 className="font-semibold text-gray-900 text-sm mb-1">{item.title}</h3>
                          <p className="text-sm">{item.desc}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>

                {/* Section 3: Information Sharing */}
                <motion.div
                  id="information-sharing"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="scroll-mt-32"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 rounded-lg bg-primary-100">
                      <Share2 className="w-5 h-5 text-primary-700" />
                    </div>
                    <h2 className="text-xl font-bold text-gray-900">3. Information Sharing</h2>
                  </div>

                  <div className="space-y-4 text-gray-600">
                    <p>
                      We do not sell your personal information. We may share your information in the
                      following circumstances:
                    </p>

                    <ul className="space-y-3">
                      {[
                        {
                          title: 'With Service Providers',
                          desc: 'We share data with trusted third parties who assist us in operating our platform, such as payment processors (Stripe), email services, and cloud hosting providers.',
                        },
                        {
                          title: 'For Legal Reasons',
                          desc: 'We may disclose information when required by law, court order, or government regulation, or to protect our rights and safety.',
                        },
                        {
                          title: 'With Your Consent',
                          desc: 'We may share your information with third parties when you explicitly consent to such sharing.',
                        },
                        {
                          title: 'Donor-Student Connection',
                          desc: 'If you choose to donate to a specific student, we may share limited information (first name, donation amount) with the student or their guardian unless you choose to remain anonymous.',
                        },
                      ].map((item, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <ChevronRight className="w-5 h-5 text-primary-600 mt-0.5 flex-shrink-0" />
                          <div>
                            <span className="font-semibold text-gray-900">{item.title}:</span>{' '}
                            {item.desc}
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>

                {/* Section 4: Data Security */}
                <motion.div
                  id="data-security"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="scroll-mt-32"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 rounded-lg bg-primary-100">
                      <Lock className="w-5 h-5 text-primary-700" />
                    </div>
                    <h2 className="text-xl font-bold text-gray-900">4. Data Security</h2>
                  </div>

                  <div className="space-y-4 text-gray-600">
                    <p>
                      We implement appropriate technical and organizational measures to protect your
                      personal information against unauthorized access, alteration, disclosure, or
                      destruction.
                    </p>

                    <div className="bg-primary-50 border border-primary-100 rounded-xl p-5">
                      <h3 className="font-semibold text-gray-900 mb-3">Our Security Measures Include:</h3>
                      <ul className="grid sm:grid-cols-2 gap-2">
                        {[
                          'SSL/TLS encryption for data in transit',
                          'Encrypted storage for sensitive data',
                          'Regular security audits and testing',
                          'Access controls and authentication',
                          'Secure payment processing via Stripe',
                          'Regular data backups',
                        ].map((item, i) => (
                          <li key={i} className="flex items-center gap-2 text-sm">
                            <Shield className="w-4 h-4 text-primary-600 flex-shrink-0" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <p className="text-sm">
                      While we strive to protect your information, no method of transmission over the
                      Internet is 100% secure. We cannot guarantee absolute security but are committed
                      to maintaining industry-standard protections.
                    </p>
                  </div>
                </motion.div>

                {/* Section 5: Cookies */}
                <motion.div
                  id="cookies"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="scroll-mt-32"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 rounded-lg bg-primary-100">
                      <Cookie className="w-5 h-5 text-primary-700" />
                    </div>
                    <h2 className="text-xl font-bold text-gray-900">5. Cookies & Tracking</h2>
                  </div>

                  <div className="space-y-4 text-gray-600">
                    <p>
                      We use cookies and similar tracking technologies to enhance your experience on
                      our platform.
                    </p>

                    <div className="space-y-3">
                      {[
                        {
                          type: 'Essential Cookies',
                          desc: 'Required for the platform to function properly (e.g., authentication, security)',
                          required: true,
                        },
                        {
                          type: 'Analytics Cookies',
                          desc: 'Help us understand how visitors interact with our platform',
                          required: false,
                        },
                        {
                          type: 'Preference Cookies',
                          desc: 'Remember your settings and preferences',
                          required: false,
                        },
                      ].map((cookie, i) => (
                        <div key={i} className="flex items-start justify-between gap-4 p-4 bg-gray-50 rounded-lg">
                          <div>
                            <h3 className="font-semibold text-gray-900 text-sm">{cookie.type}</h3>
                            <p className="text-sm">{cookie.desc}</p>
                          </div>
                          <span className={`text-xs px-2 py-1 rounded-full flex-shrink-0 ${
                            cookie.required
                              ? 'bg-primary-100 text-primary-700'
                              : 'bg-gray-200 text-gray-600'
                          }`}>
                            {cookie.required ? 'Required' : 'Optional'}
                          </span>
                        </div>
                      ))}
                    </div>

                    <p className="text-sm">
                      You can manage your cookie preferences through your browser settings. Note that
                      disabling certain cookies may affect the functionality of our platform.
                    </p>
                  </div>
                </motion.div>

                {/* Section 6: Your Rights */}
                <motion.div
                  id="your-rights"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="scroll-mt-32"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 rounded-lg bg-primary-100">
                      <UserCheck className="w-5 h-5 text-primary-700" />
                    </div>
                    <h2 className="text-xl font-bold text-gray-900">6. Your Rights</h2>
                  </div>

                  <div className="space-y-4 text-gray-600">
                    <p>You have the following rights regarding your personal information:</p>

                    <div className="grid sm:grid-cols-2 gap-3">
                      {[
                        { right: 'Access', desc: 'Request a copy of your personal data' },
                        { right: 'Correction', desc: 'Update or correct inaccurate information' },
                        { right: 'Deletion', desc: 'Request deletion of your account and data' },
                        { right: 'Portability', desc: 'Receive your data in a portable format' },
                        { right: 'Opt-out', desc: 'Unsubscribe from marketing communications' },
                        { right: 'Withdraw Consent', desc: 'Withdraw previously given consent' },
                      ].map((item, i) => (
                        <div key={i} className="p-3 border border-gray-200 rounded-lg">
                          <h3 className="font-semibold text-gray-900 text-sm">{item.right}</h3>
                          <p className="text-sm">{item.desc}</p>
                        </div>
                      ))}
                    </div>

                    <p className="text-sm">
                      To exercise any of these rights, please contact us at{' '}
                      <a href="mailto:privacy@educationfoundation.org" className="text-primary-700 hover:underline">
                        privacy@educationfoundation.org
                      </a>
                      . We will respond to your request within 30 days.
                    </p>
                  </div>
                </motion.div>

                {/* Section 7: Children's Privacy */}
                <motion.div
                  id="children"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="scroll-mt-32"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 rounded-lg bg-primary-100">
                      <Shield className="w-5 h-5 text-primary-700" />
                    </div>
                    <h2 className="text-xl font-bold text-gray-900">7. Children&apos;s Privacy</h2>
                  </div>

                  <div className="space-y-4 text-gray-600">
                    <p>
                      Our platform is not intended for children under 13 years of age. We do not
                      knowingly collect personal information from children under 13. If you are a
                      parent or guardian and believe your child has provided us with personal
                      information, please contact us immediately.
                    </p>

                    <div className="bg-secondary-50 border border-secondary-100 rounded-xl p-5">
                      <h3 className="font-semibold text-gray-900 mb-2">Regarding Student Data</h3>
                      <p className="text-sm">
                        When student cases are submitted, the information is provided by authorized
                        adults (teachers, parents, guardians, or NGO workers) with appropriate consent.
                        Student information is handled with extra care and is only displayed with
                        proper authorization.
                      </p>
                    </div>
                  </div>
                </motion.div>

                {/* Section 8: Policy Changes */}
                <motion.div
                  id="changes"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="scroll-mt-32"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 rounded-lg bg-primary-100">
                      <Bell className="w-5 h-5 text-primary-700" />
                    </div>
                    <h2 className="text-xl font-bold text-gray-900">8. Changes to This Policy</h2>
                  </div>

                  <div className="space-y-4 text-gray-600">
                    <p>
                      We may update this Privacy Policy from time to time to reflect changes in our
                      practices or for legal, operational, or regulatory reasons. When we make
                      significant changes, we will:
                    </p>

                    <ul className="space-y-2">
                      {[
                        'Update the "Last updated" date at the top of this policy',
                        'Notify registered users via email about significant changes',
                        'Display a prominent notice on our platform',
                      ].map((item, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <ChevronRight className="w-5 h-5 text-primary-600 mt-0.5 flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>

                    <p className="text-sm">
                      We encourage you to review this policy periodically to stay informed about how
                      we protect your information.
                    </p>
                  </div>
                </motion.div>

                {/* Section 9: Contact Us */}
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
                    <h2 className="text-xl font-bold text-gray-900">9. Contact Us</h2>
                  </div>

                  <div className="space-y-4 text-gray-600">
                    <p>
                      If you have any questions, concerns, or requests regarding this Privacy Policy
                      or our data practices, please contact us:
                    </p>

                    <Card variant="outlined">
                      <CardContent className="p-5">
                        <div className="space-y-3">
                          <div>
                            <p className="font-semibold text-gray-900">The Education Foundation</p>
                            <p className="text-sm">Data Protection Officer</p>
                          </div>
                          <div className="space-y-1 text-sm">
                            <p>
                              <span className="text-gray-500">Email:</span>{' '}
                              <a href="mailto:privacy@educationfoundation.org" className="text-primary-700 hover:underline">
                                privacy@educationfoundation.org
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

                    <p className="text-sm">
                      We take all privacy concerns seriously and will respond to your inquiry within
                      30 days.
                    </p>
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
                      href="/terms"
                      className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg text-sm font-medium text-gray-700 transition-colors"
                    >
                      <FileText className="w-4 h-4" />
                      Terms of Service
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
