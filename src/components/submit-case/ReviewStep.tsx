'use client'

import { ArrowLeft, Loader2, Send, User, GraduationCap, School, FileText, IndianRupee } from 'lucide-react'
import type { SubmitterData } from './SubmitterForm'
import type { StudentInfoData } from './StudentInfoForm'
import type { SchoolData } from './SchoolForm'
import type { StoryData } from './StoryForm'
import type { NeedData } from './NeedsForm'

interface ReviewStepProps {
  submitterData: SubmitterData
  studentData: StudentInfoData
  schoolData: SchoolData
  storyData: StoryData
  needsData: NeedData[]
  onBack: () => void
  onSubmit: () => void
  isSubmitting: boolean
}

const relationshipLabels: Record<string, string> = {
  teacher: 'Teacher',
  principal: 'Principal',
  ngo_worker: 'NGO Worker',
  family: 'Family Member',
  community_member: 'Community Member',
}

const schoolTypeLabels: Record<string, string> = {
  primary: 'Primary School',
  secondary: 'Secondary School',
  high_school: 'High School',
  college: 'College/University',
}

const categoryLabels: Record<string, string> = {
  tuition: 'Tuition Fees',
  books: 'Books & Stationery',
  uniforms: 'Uniforms',
  supplies: 'School Supplies',
  transportation: 'Transportation',
  meals: 'Meals',
  medical: 'Medical',
  other: 'Other',
}

const priorityLabels: Record<string, { label: string; color: string }> = {
  urgent: { label: 'Urgent', color: 'bg-error/10 text-error' },
  high: { label: 'High', color: 'bg-warning/10 text-warning' },
  medium: { label: 'Medium', color: 'bg-primary-100 text-primary-700' },
  low: { label: 'Low', color: 'bg-gray-100 text-gray-600' },
}

const periodLabels: Record<string, string> = {
  one_time: 'One-time',
  monthly: 'Monthly',
  quarterly: 'Quarterly',
  yearly: 'Yearly',
}

export function ReviewStep({
  submitterData,
  studentData,
  schoolData,
  storyData,
  needsData,
  onBack,
  onSubmit,
  isSubmitting,
}: ReviewStepProps) {
  const totalAmount = needsData.reduce((sum, need) => sum + need.amountNeeded, 0)

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl font-semibold text-gray-900 mb-2">Review & Submit</h2>
        <p className="text-gray-600 text-sm">
          Please review all the information before submitting. You can go back to make changes.
        </p>
      </div>

      <div className="space-y-4">
        {/* Submitter Info */}
        <div className="p-4 border border-gray-200 rounded-xl">
          <h3 className="flex items-center gap-2 font-medium text-gray-900 mb-3">
            <User className="w-4 h-4 text-primary-600" />
            Submitter Information
          </h3>
          <dl className="grid grid-cols-2 gap-x-4 gap-y-2 text-sm">
            <div>
              <dt className="text-gray-500">Name</dt>
              <dd className="text-gray-900 font-medium">{submitterData.name}</dd>
            </div>
            <div>
              <dt className="text-gray-500">Relationship</dt>
              <dd className="text-gray-900 font-medium">
                {relationshipLabels[submitterData.relationship]}
              </dd>
            </div>
            <div>
              <dt className="text-gray-500">Email</dt>
              <dd className="text-gray-900 font-medium">{submitterData.email}</dd>
            </div>
            <div>
              <dt className="text-gray-500">Phone</dt>
              <dd className="text-gray-900 font-medium">{submitterData.phone}</dd>
            </div>
            {submitterData.organizationName && (
              <div className="col-span-2">
                <dt className="text-gray-500">Organization</dt>
                <dd className="text-gray-900 font-medium">{submitterData.organizationName}</dd>
              </div>
            )}
          </dl>
        </div>

        {/* Student Info */}
        <div className="p-4 border border-gray-200 rounded-xl">
          <h3 className="flex items-center gap-2 font-medium text-gray-900 mb-3">
            <GraduationCap className="w-4 h-4 text-primary-600" />
            Student Information
          </h3>
          <div className="flex gap-4">
            {studentData.photo && (
              <div className="w-20 h-20 rounded-lg overflow-hidden bg-gray-100 flex-shrink-0">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={URL.createObjectURL(studentData.photo)}
                  alt="Student"
                  className="w-full h-full object-cover"
                />
              </div>
            )}
            <dl className="grid grid-cols-2 gap-x-4 gap-y-2 text-sm flex-1">
              <div>
                <dt className="text-gray-500">Name</dt>
                <dd className="text-gray-900 font-medium">
                  {studentData.firstName} {studentData.lastName}
                </dd>
              </div>
              <div>
                <dt className="text-gray-500">Gender</dt>
                <dd className="text-gray-900 font-medium capitalize">{studentData.gender}</dd>
              </div>
              <div>
                <dt className="text-gray-500">Date of Birth</dt>
                <dd className="text-gray-900 font-medium">
                  {new Date(studentData.dateOfBirth).toLocaleDateString('en-IN', {
                    day: 'numeric',
                    month: 'long',
                    year: 'numeric',
                  })}
                </dd>
              </div>
              <div>
                <dt className="text-gray-500">Additional Photos</dt>
                <dd className="text-gray-900 font-medium">
                  {studentData.additionalPhotos.length} photos
                </dd>
              </div>
            </dl>
          </div>
        </div>

        {/* School Info */}
        <div className="p-4 border border-gray-200 rounded-xl">
          <h3 className="flex items-center gap-2 font-medium text-gray-900 mb-3">
            <School className="w-4 h-4 text-primary-600" />
            School Information
          </h3>
          <dl className="grid grid-cols-2 gap-x-4 gap-y-2 text-sm">
            <div className="col-span-2">
              <dt className="text-gray-500">School Name</dt>
              <dd className="text-gray-900 font-medium">{schoolData.schoolName}</dd>
            </div>
            <div>
              <dt className="text-gray-500">Type</dt>
              <dd className="text-gray-900 font-medium">{schoolTypeLabels[schoolData.schoolType]}</dd>
            </div>
            <div>
              <dt className="text-gray-500">Grade/Class</dt>
              <dd className="text-gray-900 font-medium">{schoolData.grade}</dd>
            </div>
            <div className="col-span-2">
              <dt className="text-gray-500">Location</dt>
              <dd className="text-gray-900 font-medium">
                {schoolData.city}, {schoolData.state}, {schoolData.country}
              </dd>
            </div>
          </dl>
        </div>

        {/* Story */}
        <div className="p-4 border border-gray-200 rounded-xl">
          <h3 className="flex items-center gap-2 font-medium text-gray-900 mb-3">
            <FileText className="w-4 h-4 text-primary-600" />
            Student Story
          </h3>
          <div className="space-y-3 text-sm">
            <div>
              <dt className="text-gray-500 mb-1">Story</dt>
              <dd className="text-gray-900 line-clamp-3">{storyData.story}</dd>
            </div>
            <div>
              <dt className="text-gray-500 mb-1">Aspirations</dt>
              <dd className="text-gray-900">{storyData.aspirations}</dd>
            </div>
            {storyData.fundingDeadline && (
              <div>
                <dt className="text-gray-500 mb-1">Funding Deadline</dt>
                <dd className="text-gray-900 font-medium">
                  {new Date(storyData.fundingDeadline).toLocaleDateString('en-IN', {
                    day: 'numeric',
                    month: 'long',
                    year: 'numeric',
                  })}
                </dd>
              </div>
            )}
          </div>
        </div>

        {/* Needs */}
        <div className="p-4 border border-gray-200 rounded-xl">
          <h3 className="flex items-center gap-2 font-medium text-gray-900 mb-3">
            <IndianRupee className="w-4 h-4 text-primary-600" />
            Funding Needs
          </h3>
          <div className="space-y-3">
            {needsData.map((need, index) => (
              <div
                key={index}
                className="flex items-center justify-between py-2 border-b border-gray-100 last:border-0"
              >
                <div className="flex-1">
                  <p className="text-sm font-medium text-gray-900">{need.title}</p>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="text-xs text-gray-500">{categoryLabels[need.category]}</span>
                    <span className={`text-xs px-2 py-0.5 rounded-full ${priorityLabels[need.priority].color}`}>
                      {priorityLabels[need.priority].label}
                    </span>
                    <span className="text-xs text-gray-500">{periodLabels[need.period]}</span>
                  </div>
                </div>
                <span className="text-sm font-semibold text-gray-900">
                  ₹{need.amountNeeded.toLocaleString('en-IN')}
                </span>
              </div>
            ))}
            <div className="flex items-center justify-between pt-2 border-t-2 border-gray-200">
              <span className="font-semibold text-gray-900">Total Amount</span>
              <span className="text-lg font-bold text-primary-700">
                ₹{totalAmount.toLocaleString('en-IN')}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Terms */}
      <div className="p-4 bg-gray-50 rounded-xl text-sm text-gray-600">
        <p>
          By submitting this case, you confirm that all information provided is accurate and that you
          have the necessary permissions to share the student&apos;s details. Cases are subject to
          verification before being published.
        </p>
      </div>

      <div className="flex justify-between pt-4">
        <button
          type="button"
          onClick={onBack}
          disabled={isSubmitting}
          className="btn-outline inline-flex items-center gap-2"
        >
          <ArrowLeft className="w-4 h-4" />
          Back
        </button>
        <button
          type="button"
          onClick={onSubmit}
          disabled={isSubmitting}
          className="btn-primary inline-flex items-center gap-2"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin" />
              Submitting...
            </>
          ) : (
            <>
              <Send className="w-4 h-4" />
              Submit Case
            </>
          )}
        </button>
      </div>
    </div>
  )
}
