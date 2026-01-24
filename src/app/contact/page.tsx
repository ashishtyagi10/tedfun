'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  MessageSquare,
  HelpCircle,
  ArrowRight,
  CheckCircle,
  Loader2,
  Heart,
  Users,
  FileText,
  ExternalLink,
} from 'lucide-react'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { Card, CardContent } from '@/components/ui/Card'
import { Input } from '@/components/ui/Input'

type InquiryType = 'general' | 'donation' | 'submit_case' | 'volunteer' | 'media' | 'other'

const inquiryTypes: { value: InquiryType; label: string; icon: React.ElementType }[] = [
  { value: 'general', label: 'General Inquiry', icon: MessageSquare },
  { value: 'donation', label: 'Donation Support', icon: Heart },
  { value: 'submit_case', label: 'Submit a Case', icon: FileText },
  { value: 'volunteer', label: 'Volunteer', icon: Users },
  { value: 'media', label: 'Media & Press', icon: ExternalLink },
  { value: 'other', label: 'Other', icon: HelpCircle },
]

const contactInfo = [
  {
    icon: Mail,
    title: 'Email Us',
    description: 'We respond within 24 hours',
    value: 'hello@educationfoundation.org',
    href: 'mailto:hello@educationfoundation.org',
  },
  {
    icon: Phone,
    title: 'Call Us',
    description: 'Mon-Fri, 9am-6pm IST',
    value: '+91 98765 43210',
    href: 'tel:+919876543210',
  },
  {
    icon: MapPin,
    title: 'Visit Us',
    description: 'Our office location',
    value: 'Mumbai, Maharashtra, India',
    href: 'https://maps.google.com',
  },
  {
    icon: Clock,
    title: 'Office Hours',
    description: 'When we\'re available',
    value: 'Mon-Fri: 9:00 AM - 6:00 PM',
    href: null,
  },
]

const faqs = [
  {
    question: 'How can I donate to a specific student?',
    answer: 'Browse our Students page, select a student whose story resonates with you, and click "Donate" to contribute any amount directly to their education fund.',
  },
  {
    question: 'Are donations tax-deductible?',
    answer: 'Yes! We are a registered non-profit under Section 80G. You will receive a tax receipt via email after your donation is processed.',
  },
  {
    question: 'How do I submit a student case?',
    answer: 'Click on "Submit a Case" in the navigation menu. You\'ll need to provide details about the student, their situation, and funding requirements. All cases are verified before being published.',
  },
  {
    question: 'Can I volunteer with The Education Foundation?',
    answer: 'Absolutely! We welcome volunteers for case verification, mentoring students, content creation, and community outreach. Fill out the contact form with "Volunteer" selected.',
  },
]

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    inquiryType: 'general' as InquiryType,
    subject: '',
    message: '',
  })
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const validate = (): boolean => {
    const newErrors: Record<string, string> = {}

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required'
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email'
    }

    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required'
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required'
    } else if (formData.message.trim().length < 20) {
      newErrors.message = 'Please provide more details (at least 20 characters)'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validate()) return

    setIsSubmitting(true)

    // Simulate form submission (in production, this would send to an API)
    await new Promise((resolve) => setTimeout(resolve, 1500))

    setIsSubmitting(false)
    setIsSuccess(true)
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
    if (errors[field]) {
      setErrors((prev) => {
        const { [field]: _, ...rest } = prev
        return rest
      })
    }
  }

  if (isSuccess) {
    return (
      <div className="min-h-screen bg-white">
        <Header />
        <div className="pt-32 pb-20">
          <div className="container-app">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="max-w-lg mx-auto text-center"
            >
              <Card variant="elevated">
                <CardContent className="p-8 md:p-12">
                  <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-success/10 flex items-center justify-center">
                    <CheckCircle className="w-10 h-10 text-success" />
                  </div>
                  <h1 className="text-2xl font-bold text-gray-900 mb-4">Message Sent!</h1>
                  <p className="text-gray-600 mb-8">
                    Thank you for reaching out. We&apos;ve received your message and will get back to
                    you within 24-48 hours.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link href="/" className="btn-primary">
                      Back to Home
                    </Link>
                    <button
                      onClick={() => {
                        setIsSuccess(false)
                        setFormData({
                          name: '',
                          email: '',
                          phone: '',
                          inquiryType: 'general',
                          subject: '',
                          message: '',
                        })
                      }}
                      className="btn-outline"
                    >
                      Send Another Message
                    </button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
        <Footer />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-12 md:pt-40 md:pb-16 bg-gradient-to-br from-primary-50/50 via-white to-secondary-50/30">
        <div className="container-app">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-100 text-primary-800 text-sm font-medium mb-6"
            >
              <MessageSquare className="w-4 h-4" />
              Get in Touch
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6"
            >
              We&apos;d Love to <span className="text-primary-700">Hear From You</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg text-gray-600 leading-relaxed"
            >
              Have questions about donating, submitting a case, or volunteering? We&apos;re here to
              help. Reach out and our team will respond within 24 hours.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-8 -mt-4">
        <div className="container-app">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {contactInfo.map((info, index) => {
              const Icon = info.icon
              const content = (
                <Card variant="elevated" className="h-full">
                  <CardContent className="p-4 md:p-5 text-center">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary-100 text-primary-700 mb-3">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="font-semibold text-gray-900 text-sm mb-1">{info.title}</h3>
                    <p className="text-xs text-gray-500 mb-2">{info.description}</p>
                    <p className="text-sm font-medium text-primary-700 break-words">{info.value}</p>
                  </CardContent>
                </Card>
              )

              return (
                <motion.div
                  key={info.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  {info.href ? (
                    <a href={info.href} target={info.href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer" className="block h-full">
                      {content}
                    </a>
                  ) : (
                    content
                  )}
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Main Content: Form + FAQ */}
      <section className="py-12 md:py-16">
        <div className="container-app">
          <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-3">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
              >
                <Card variant="elevated">
                  <CardContent className="p-6 md:p-8">
                    <h2 className="text-xl font-bold text-gray-900 mb-2">Send us a Message</h2>
                    <p className="text-gray-600 text-sm mb-6">
                      Fill out the form below and we&apos;ll get back to you as soon as possible.
                    </p>

                    <form onSubmit={handleSubmit} className="space-y-5">
                      {/* Inquiry Type Selection */}
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          What can we help you with?
                        </label>
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                          {inquiryTypes.map((type) => {
                            const Icon = type.icon
                            return (
                              <button
                                key={type.value}
                                type="button"
                                onClick={() => handleInputChange('inquiryType', type.value)}
                                className={`
                                  flex items-center gap-2 px-3 py-2.5 rounded-lg border-2 text-sm font-medium transition-all
                                  ${
                                    formData.inquiryType === type.value
                                      ? 'border-primary-600 bg-primary-50 text-primary-700'
                                      : 'border-gray-200 text-gray-600 hover:border-gray-300'
                                  }
                                `}
                              >
                                <Icon className="w-4 h-4 flex-shrink-0" />
                                <span className="truncate">{type.label}</span>
                              </button>
                            )
                          })}
                        </div>
                      </div>

                      {/* Name & Email */}
                      <div className="grid sm:grid-cols-2 gap-4">
                        <Input
                          label="Your Name"
                          value={formData.name}
                          onChange={(e) => handleInputChange('name', e.target.value)}
                          error={errors.name}
                          fullWidth
                          required
                        />
                        <Input
                          label="Email Address"
                          type="email"
                          value={formData.email}
                          onChange={(e) => handleInputChange('email', e.target.value)}
                          error={errors.email}
                          fullWidth
                          required
                        />
                      </div>

                      {/* Phone (Optional) */}
                      <Input
                        label="Phone Number (Optional)"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => handleInputChange('phone', e.target.value)}
                        helperText="We'll only call if necessary"
                        fullWidth
                      />

                      {/* Subject */}
                      <Input
                        label="Subject"
                        value={formData.subject}
                        onChange={(e) => handleInputChange('subject', e.target.value)}
                        error={errors.subject}
                        placeholder="Brief summary of your inquiry"
                        fullWidth
                        required
                      />

                      {/* Message */}
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Message <span className="text-error">*</span>
                        </label>
                        <textarea
                          value={formData.message}
                          onChange={(e) => handleInputChange('message', e.target.value)}
                          placeholder="Tell us more about how we can help..."
                          rows={5}
                          className={`
                            w-full px-4 py-3 rounded-lg border-2 bg-white text-gray-900
                            placeholder:text-gray-400 resize-none
                            focus:outline-none focus:ring-2 focus:ring-offset-1
                            ${errors.message
                              ? 'border-error focus:border-error focus:ring-error/20'
                              : 'border-gray-300 focus:border-primary focus:ring-primary/20'}
                          `}
                          required
                        />
                        {errors.message && (
                          <p className="mt-1 text-sm text-error">{errors.message}</p>
                        )}
                      </div>

                      {/* Submit Button */}
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="btn-primary w-full inline-flex items-center justify-center gap-2"
                      >
                        {isSubmitting ? (
                          <>
                            <Loader2 className="w-4 h-4 animate-spin" />
                            Sending...
                          </>
                        ) : (
                          <>
                            <Send className="w-4 h-4" />
                            Send Message
                          </>
                        )}
                      </button>
                    </form>
                  </CardContent>
                </Card>
              </motion.div>
            </div>

            {/* FAQ Section */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
              >
                <h2 className="text-xl font-bold text-gray-900 mb-2">
                  Frequently Asked Questions
                </h2>
                <p className="text-gray-600 text-sm mb-6">
                  Quick answers to common questions
                </p>

                <div className="space-y-4">
                  {faqs.map((faq, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 + index * 0.1 }}
                    >
                      <Card variant="outlined">
                        <CardContent className="p-4">
                          <h3 className="font-medium text-gray-900 text-sm mb-2 flex items-start gap-2">
                            <HelpCircle className="w-4 h-4 text-primary-600 mt-0.5 flex-shrink-0" />
                            {faq.question}
                          </h3>
                          <p className="text-sm text-gray-600 pl-6">{faq.answer}</p>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>

                {/* Quick Links */}
                <div className="mt-8 p-5 bg-primary-50 rounded-xl border border-primary-100">
                  <h3 className="font-semibold text-gray-900 mb-3">Quick Links</h3>
                  <div className="space-y-2">
                    <Link
                      href="/students"
                      className="flex items-center gap-2 text-sm text-primary-700 hover:text-primary-800 font-medium"
                    >
                      <ArrowRight className="w-4 h-4" />
                      Browse Students to Support
                    </Link>
                    <Link
                      href="/submit-case"
                      className="flex items-center gap-2 text-sm text-primary-700 hover:text-primary-800 font-medium"
                    >
                      <ArrowRight className="w-4 h-4" />
                      Submit a Student Case
                    </Link>
                    <Link
                      href="/how-it-works"
                      className="flex items-center gap-2 text-sm text-primary-700 hover:text-primary-800 font-medium"
                    >
                      <ArrowRight className="w-4 h-4" />
                      Learn How It Works
                    </Link>
                    <Link
                      href="/stories"
                      className="flex items-center gap-2 text-sm text-primary-700 hover:text-primary-800 font-medium"
                    >
                      <ArrowRight className="w-4 h-4" />
                      Read Success Stories
                    </Link>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Map / Location Section */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="container-app">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Office</h2>
                <p className="text-gray-600 mb-6">
                  While we primarily operate online to maximize our reach, you&apos;re welcome to
                  visit our office in Mumbai for in-person meetings.
                </p>

                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-primary-600 mt-0.5" />
                    <div>
                      <p className="font-medium text-gray-900">The Education Foundation</p>
                      <p className="text-gray-600 text-sm">
                        123 Education Street, Andheri West<br />
                        Mumbai, Maharashtra 400053<br />
                        India
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-primary-600 mt-0.5" />
                    <div>
                      <p className="font-medium text-gray-900">Office Hours</p>
                      <p className="text-gray-600 text-sm">
                        Monday - Friday: 9:00 AM - 6:00 PM<br />
                        Saturday: 10:00 AM - 2:00 PM<br />
                        Sunday: Closed
                      </p>
                    </div>
                  </div>
                </div>

                <p className="text-sm text-gray-500 mt-6">
                  * Please schedule an appointment before visiting
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="aspect-video bg-gradient-to-br from-primary-100 to-secondary-100 rounded-2xl flex items-center justify-center overflow-hidden"
              >
                {/* Placeholder for map - in production, embed Google Maps */}
                <div className="text-center p-8">
                  <MapPin className="w-16 h-16 text-primary-300 mx-auto mb-4" />
                  <p className="text-primary-600 font-medium">Mumbai, India</p>
                  <a
                    href="https://maps.google.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-sm text-primary-700 hover:underline mt-2"
                  >
                    Open in Google Maps
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-primary-700">
        <div className="container-app">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Ready to Make a Difference?
            </h2>
            <p className="text-primary-100 mb-8">
              Whether you want to donate, volunteer, or submit a student case, we&apos;re here to
              help you create impact.
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
                href="/submit-case"
                className="inline-flex items-center justify-center px-8 py-3 rounded-full border-2 border-white text-white font-medium hover:bg-white/10 transition-colors"
              >
                Submit a Case
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
