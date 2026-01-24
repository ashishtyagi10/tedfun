'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import {
  User,
  GraduationCap,
  School,
  FileText,
  IndianRupee,
  CheckCircle,
  ArrowLeft,
  ArrowRight,
  Loader2,
} from 'lucide-react'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { Card, CardContent } from '@/components/ui/Card'
import { SubmitterForm, type SubmitterData } from '@/components/submit-case/SubmitterForm'
import { StudentInfoForm, type StudentInfoData } from '@/components/submit-case/StudentInfoForm'
import { SchoolForm, type SchoolData } from '@/components/submit-case/SchoolForm'
import { StoryForm, type StoryData } from '@/components/submit-case/StoryForm'
import { NeedsForm, type NeedData } from '@/components/submit-case/NeedsForm'
import { ReviewStep } from '@/components/submit-case/ReviewStep'
import { submitStudent, addStudentNeed } from '@/lib/firebase/firestore'
import { uploadStudentPhoto } from '@/lib/firebase/storage'
import { Timestamp } from 'firebase/firestore'

type Step = 'submitter' | 'student' | 'school' | 'story' | 'needs' | 'review'

const steps: { id: Step; label: string; icon: React.ElementType }[] = [
  { id: 'submitter', label: 'Your Info', icon: User },
  { id: 'student', label: 'Student', icon: GraduationCap },
  { id: 'school', label: 'School', icon: School },
  { id: 'story', label: 'Story', icon: FileText },
  { id: 'needs', label: 'Needs', icon: IndianRupee },
  { id: 'review', label: 'Review', icon: CheckCircle },
]

function generateSlug(firstName: string, lastName: string): string {
  const base = `${firstName}-${lastName}`.toLowerCase().replace(/[^a-z0-9]+/g, '-')
  const random = Math.random().toString(36).substring(2, 8)
  return `${base}-${random}`
}

export default function SubmitCasePage() {
  const router = useRouter()
  const [currentStep, setCurrentStep] = useState<Step>('submitter')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitError, setSubmitError] = useState<string | null>(null)
  const [isSuccess, setIsSuccess] = useState(false)

  // Form data state
  const [submitterData, setSubmitterData] = useState<SubmitterData | null>(null)
  const [studentData, setStudentData] = useState<StudentInfoData | null>(null)
  const [schoolData, setSchoolData] = useState<SchoolData | null>(null)
  const [storyData, setStoryData] = useState<StoryData | null>(null)
  const [needsData, setNeedsData] = useState<NeedData[]>([])

  const currentStepIndex = steps.findIndex((s) => s.id === currentStep)

  const goToNextStep = () => {
    const nextIndex = currentStepIndex + 1
    if (nextIndex < steps.length) {
      setCurrentStep(steps[nextIndex].id)
    }
  }

  const goToPrevStep = () => {
    const prevIndex = currentStepIndex - 1
    if (prevIndex >= 0) {
      setCurrentStep(steps[prevIndex].id)
    }
  }

  const handleSubmitterComplete = (data: SubmitterData) => {
    setSubmitterData(data)
    goToNextStep()
  }

  const handleStudentComplete = (data: StudentInfoData) => {
    setStudentData(data)
    goToNextStep()
  }

  const handleSchoolComplete = (data: SchoolData) => {
    setSchoolData(data)
    goToNextStep()
  }

  const handleStoryComplete = (data: StoryData) => {
    setStoryData(data)
    goToNextStep()
  }

  const handleNeedsComplete = (data: NeedData[]) => {
    setNeedsData(data)
    goToNextStep()
  }

  const handleFinalSubmit = async () => {
    if (!submitterData || !studentData || !schoolData || !storyData || needsData.length === 0) {
      setSubmitError('Please complete all required fields.')
      return
    }

    setIsSubmitting(true)
    setSubmitError(null)

    try {
      // Generate a temporary ID for file uploads
      const tempId = `temp_${Date.now()}`

      // Upload primary photo
      let photoUrl = ''
      if (studentData.photo) {
        photoUrl = await uploadStudentPhoto(tempId, studentData.photo, true)
      }

      // Upload additional photos
      const additionalPhotos: string[] = []
      if (studentData.additionalPhotos) {
        for (const photo of studentData.additionalPhotos) {
          const url = await uploadStudentPhoto(tempId, photo, false)
          additionalPhotos.push(url)
        }
      }

      // Calculate total needed
      const totalNeeded = needsData.reduce((sum, need) => sum + need.amountNeeded, 0)

      // Parse date of birth
      const dobParts = studentData.dateOfBirth.split('-')
      const dob = new Date(
        parseInt(dobParts[0]),
        parseInt(dobParts[1]) - 1,
        parseInt(dobParts[2])
      )

      // Submit student data
      const studentId = await submitStudent({
        firstName: studentData.firstName,
        lastName: studentData.lastName,
        dateOfBirth: Timestamp.fromDate(dob),
        gender: studentData.gender,
        photoUrl,
        additionalPhotos,
        videoUrl: studentData.videoUrl || undefined,
        school: {
          name: schoolData.schoolName,
          type: schoolData.schoolType,
          grade: schoolData.grade,
          address: schoolData.address,
          city: schoolData.city,
          state: schoolData.state,
          country: schoolData.country,
        },
        story: storyData.story,
        familyBackground: storyData.familyBackground,
        academicPerformance: storyData.academicPerformance,
        aspirations: storyData.aspirations,
        submittedBy: {
          name: submitterData.name,
          email: submitterData.email,
          phone: submitterData.phone,
          relationship: submitterData.relationship,
          organizationName: submitterData.organizationName || undefined,
        },
        totalNeeded,
        fundingDeadline: storyData.fundingDeadline
          ? Timestamp.fromDate(new Date(storyData.fundingDeadline))
          : undefined,
        slug: generateSlug(studentData.firstName, studentData.lastName),
        featured: false,
        priority: 0,
        submittedAt: Timestamp.now(),
      })

      // Add needs
      for (const need of needsData) {
        await addStudentNeed(studentId, {
          category: need.category,
          title: need.title,
          description: need.description,
          amountNeeded: need.amountNeeded,
          priority: need.priority,
          period: need.period,
          status: 'active',
        })
      }

      setIsSuccess(true)
    } catch (error) {
      console.error('Error submitting case:', error)
      setSubmitError('Failed to submit. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSuccess) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-primary-50/30 via-white to-secondary-50/20">
        <Header />
        <div className="pt-24 md:pt-28 pb-16">
          <div className="container-app">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="max-w-2xl mx-auto text-center"
            >
              <Card variant="elevated">
                <CardContent className="p-8 md:p-12">
                  <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-success/10 flex items-center justify-center">
                    <CheckCircle className="w-10 h-10 text-success" />
                  </div>
                  <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                    Case Submitted Successfully!
                  </h1>
                  <p className="text-gray-600 mb-8">
                    Thank you for submitting this student case. Our team will review the application
                    and get back to you within 3-5 business days. You will receive an email
                    notification once the case is approved.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <button
                      onClick={() => router.push('/')}
                      className="btn-primary"
                    >
                      Back to Home
                    </button>
                    <button
                      onClick={() => {
                        setIsSuccess(false)
                        setCurrentStep('submitter')
                        setSubmitterData(null)
                        setStudentData(null)
                        setSchoolData(null)
                        setStoryData(null)
                        setNeedsData([])
                      }}
                      className="btn-outline"
                    >
                      Submit Another Case
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
    <div className="min-h-screen bg-gradient-to-br from-primary-50/30 via-white to-secondary-50/20">
      <Header />

      <div className="pt-24 md:pt-28 pb-16">
        <div className="container-app">
          {/* Page Header */}
          <div className="text-center mb-8 md:mb-12">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
              Submit a Student Case
            </h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Help a deserving student get the support they need. Fill out the form below to submit
              a case for review.
            </p>
          </div>

          {/* Progress Steps */}
          <div className="max-w-4xl mx-auto mb-8">
            <div className="flex items-center justify-between">
              {steps.map((step, index) => {
                const Icon = step.icon
                const isActive = currentStepIndex === index
                const isCompleted = currentStepIndex > index

                return (
                  <div key={step.id} className="flex items-center flex-1">
                    <div className="flex flex-col items-center">
                      <div
                        className={`
                          w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center
                          transition-all duration-300
                          ${isCompleted ? 'bg-primary-600 text-white' : ''}
                          ${isActive ? 'bg-primary-600 text-white ring-4 ring-primary-100' : ''}
                          ${!isActive && !isCompleted ? 'bg-gray-200 text-gray-500' : ''}
                        `}
                      >
                        {isCompleted ? (
                          <CheckCircle className="w-5 h-5 md:w-6 md:h-6" />
                        ) : (
                          <Icon className="w-5 h-5 md:w-6 md:h-6" />
                        )}
                      </div>
                      <span
                        className={`
                          mt-2 text-xs md:text-sm font-medium hidden sm:block
                          ${isActive || isCompleted ? 'text-primary-700' : 'text-gray-500'}
                        `}
                      >
                        {step.label}
                      </span>
                    </div>
                    {index < steps.length - 1 && (
                      <div
                        className={`
                          flex-1 h-1 mx-2 md:mx-4 rounded-full transition-all duration-300
                          ${isCompleted ? 'bg-primary-600' : 'bg-gray-200'}
                        `}
                      />
                    )}
                  </div>
                )
              })}
            </div>
          </div>

          {/* Form Container */}
          <div className="max-w-3xl mx-auto">
            <Card variant="elevated">
              <CardContent className="p-6 md:p-8">
                {submitError && (
                  <div className="mb-6 p-4 bg-error/10 border border-error/20 rounded-lg text-error text-sm">
                    {submitError}
                  </div>
                )}

                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentStep}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                  >
                    {currentStep === 'submitter' && (
                      <SubmitterForm
                        initialData={submitterData}
                        onComplete={handleSubmitterComplete}
                      />
                    )}

                    {currentStep === 'student' && (
                      <StudentInfoForm
                        initialData={studentData}
                        onComplete={handleStudentComplete}
                        onBack={goToPrevStep}
                      />
                    )}

                    {currentStep === 'school' && (
                      <SchoolForm
                        initialData={schoolData}
                        onComplete={handleSchoolComplete}
                        onBack={goToPrevStep}
                      />
                    )}

                    {currentStep === 'story' && (
                      <StoryForm
                        initialData={storyData}
                        onComplete={handleStoryComplete}
                        onBack={goToPrevStep}
                      />
                    )}

                    {currentStep === 'needs' && (
                      <NeedsForm
                        initialData={needsData}
                        onComplete={handleNeedsComplete}
                        onBack={goToPrevStep}
                      />
                    )}

                    {currentStep === 'review' && (
                      <ReviewStep
                        submitterData={submitterData!}
                        studentData={studentData!}
                        schoolData={schoolData!}
                        storyData={storyData!}
                        needsData={needsData}
                        onBack={goToPrevStep}
                        onSubmit={handleFinalSubmit}
                        isSubmitting={isSubmitting}
                      />
                    )}
                  </motion.div>
                </AnimatePresence>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
