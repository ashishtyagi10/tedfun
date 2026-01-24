'use client'

import { useState } from 'react'
import { ArrowLeft, ArrowRight, FileText, Heart, BookOpen, Star, Calendar } from 'lucide-react'

export interface StoryData {
  story: string
  familyBackground: string
  academicPerformance: string
  aspirations: string
  fundingDeadline?: string
}

interface StoryFormProps {
  initialData: StoryData | null
  onComplete: (data: StoryData) => void
  onBack: () => void
}

export function StoryForm({ initialData, onComplete, onBack }: StoryFormProps) {
  const [story, setStory] = useState(initialData?.story || '')
  const [familyBackground, setFamilyBackground] = useState(initialData?.familyBackground || '')
  const [academicPerformance, setAcademicPerformance] = useState(initialData?.academicPerformance || '')
  const [aspirations, setAspirations] = useState(initialData?.aspirations || '')
  const [fundingDeadline, setFundingDeadline] = useState(initialData?.fundingDeadline || '')
  const [errors, setErrors] = useState<Record<string, string>>({})

  const validate = (): boolean => {
    const newErrors: Record<string, string> = {}

    if (!story.trim()) {
      newErrors.story = "The student's story is required"
    } else if (story.trim().length < 100) {
      newErrors.story = 'Please provide a more detailed story (at least 100 characters)'
    }

    if (!familyBackground.trim()) {
      newErrors.familyBackground = 'Family background is required'
    } else if (familyBackground.trim().length < 50) {
      newErrors.familyBackground = 'Please provide more details about the family (at least 50 characters)'
    }

    if (!academicPerformance.trim()) {
      newErrors.academicPerformance = 'Academic performance is required'
    }

    if (!aspirations.trim()) {
      newErrors.aspirations = "The student's aspirations are required"
    }

    if (fundingDeadline) {
      const deadline = new Date(fundingDeadline)
      const today = new Date()
      if (deadline <= today) {
        newErrors.fundingDeadline = 'Deadline must be in the future'
      }
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (!validate()) return

    onComplete({
      story: story.trim(),
      familyBackground: familyBackground.trim(),
      academicPerformance: academicPerformance.trim(),
      aspirations: aspirations.trim(),
      fundingDeadline: fundingDeadline || undefined,
    })
  }

  const charCount = (text: string, min: number) => {
    const count = text.trim().length
    return (
      <span className={count < min ? 'text-warning' : 'text-gray-400'}>
        {count}/{min} min characters
      </span>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <h2 className="text-xl font-semibold text-gray-900 mb-2">Student Story</h2>
        <p className="text-gray-600 text-sm">
          Tell us about the student&apos;s background, situation, and dreams. This helps donors connect
          with the cause.
        </p>
      </div>

      <div className="space-y-5">
        {/* Main Story */}
        <div>
          <div className="flex items-center justify-between mb-2">
            <label className="flex items-center gap-2 text-sm font-medium text-gray-700">
              <FileText className="w-4 h-4" />
              Student&apos;s Story <span className="text-error">*</span>
            </label>
            {charCount(story, 100)}
          </div>
          <textarea
            value={story}
            onChange={(e) => setStory(e.target.value)}
            placeholder="Describe the student's situation, challenges, and why they need support..."
            rows={5}
            className={`
              w-full px-4 py-3 rounded-lg border-2 bg-white text-gray-900
              placeholder:text-gray-400 resize-none
              focus:outline-none focus:ring-2 focus:ring-offset-1
              ${errors.story
                ? 'border-error focus:border-error focus:ring-error/20'
                : 'border-gray-300 focus:border-primary focus:ring-primary/20'}
            `}
            required
          />
          {errors.story && <p className="mt-1 text-sm text-error">{errors.story}</p>}
        </div>

        {/* Family Background */}
        <div>
          <div className="flex items-center justify-between mb-2">
            <label className="flex items-center gap-2 text-sm font-medium text-gray-700">
              <Heart className="w-4 h-4" />
              Family Background <span className="text-error">*</span>
            </label>
            {charCount(familyBackground, 50)}
          </div>
          <textarea
            value={familyBackground}
            onChange={(e) => setFamilyBackground(e.target.value)}
            placeholder="Describe the family situation, economic condition, number of members..."
            rows={4}
            className={`
              w-full px-4 py-3 rounded-lg border-2 bg-white text-gray-900
              placeholder:text-gray-400 resize-none
              focus:outline-none focus:ring-2 focus:ring-offset-1
              ${errors.familyBackground
                ? 'border-error focus:border-error focus:ring-error/20'
                : 'border-gray-300 focus:border-primary focus:ring-primary/20'}
            `}
            required
          />
          {errors.familyBackground && (
            <p className="mt-1 text-sm text-error">{errors.familyBackground}</p>
          )}
        </div>

        {/* Academic Performance */}
        <div>
          <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-2">
            <BookOpen className="w-4 h-4" />
            Academic Performance <span className="text-error">*</span>
          </label>
          <textarea
            value={academicPerformance}
            onChange={(e) => setAcademicPerformance(e.target.value)}
            placeholder="Describe the student's grades, achievements, favorite subjects..."
            rows={3}
            className={`
              w-full px-4 py-3 rounded-lg border-2 bg-white text-gray-900
              placeholder:text-gray-400 resize-none
              focus:outline-none focus:ring-2 focus:ring-offset-1
              ${errors.academicPerformance
                ? 'border-error focus:border-error focus:ring-error/20'
                : 'border-gray-300 focus:border-primary focus:ring-primary/20'}
            `}
            required
          />
          {errors.academicPerformance && (
            <p className="mt-1 text-sm text-error">{errors.academicPerformance}</p>
          )}
        </div>

        {/* Aspirations */}
        <div>
          <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-2">
            <Star className="w-4 h-4" />
            Dreams & Aspirations <span className="text-error">*</span>
          </label>
          <textarea
            value={aspirations}
            onChange={(e) => setAspirations(e.target.value)}
            placeholder="What does the student want to become? What are their dreams?"
            rows={3}
            className={`
              w-full px-4 py-3 rounded-lg border-2 bg-white text-gray-900
              placeholder:text-gray-400 resize-none
              focus:outline-none focus:ring-2 focus:ring-offset-1
              ${errors.aspirations
                ? 'border-error focus:border-error focus:ring-error/20'
                : 'border-gray-300 focus:border-primary focus:ring-primary/20'}
            `}
            required
          />
          {errors.aspirations && <p className="mt-1 text-sm text-error">{errors.aspirations}</p>}
        </div>

        {/* Funding Deadline */}
        <div>
          <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-2">
            <Calendar className="w-4 h-4" />
            Funding Deadline (Optional)
          </label>
          <input
            type="date"
            value={fundingDeadline}
            onChange={(e) => setFundingDeadline(e.target.value)}
            min={new Date().toISOString().split('T')[0]}
            className={`
              w-full px-4 py-3 rounded-lg border-2 bg-white text-gray-900
              focus:outline-none focus:ring-2 focus:ring-offset-1
              ${errors.fundingDeadline
                ? 'border-error focus:border-error focus:ring-error/20'
                : 'border-gray-300 focus:border-primary focus:ring-primary/20'}
            `}
          />
          {errors.fundingDeadline && (
            <p className="mt-1 text-sm text-error">{errors.fundingDeadline}</p>
          )}
          <p className="mt-1 text-sm text-gray-500">
            Set a deadline if funds are needed by a specific date (e.g., for admission fees)
          </p>
        </div>
      </div>

      <div className="flex justify-between pt-4">
        <button
          type="button"
          onClick={onBack}
          className="btn-outline inline-flex items-center gap-2"
        >
          <ArrowLeft className="w-4 h-4" />
          Back
        </button>
        <button type="submit" className="btn-primary inline-flex items-center gap-2">
          Continue
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </form>
  )
}
