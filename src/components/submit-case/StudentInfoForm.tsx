'use client'

import { useState, useRef } from 'react'
import { ArrowLeft, ArrowRight, Upload, X, Image as ImageIcon, Video } from 'lucide-react'
import { Input } from '@/components/ui/Input'

export interface StudentInfoData {
  firstName: string
  lastName: string
  dateOfBirth: string
  gender: 'male' | 'female' | 'other'
  photo: File | null
  additionalPhotos: File[]
  videoUrl?: string
}

interface StudentInfoFormProps {
  initialData: StudentInfoData | null
  onComplete: (data: StudentInfoData) => void
  onBack: () => void
}

export function StudentInfoForm({ initialData, onComplete, onBack }: StudentInfoFormProps) {
  const [firstName, setFirstName] = useState(initialData?.firstName || '')
  const [lastName, setLastName] = useState(initialData?.lastName || '')
  const [dateOfBirth, setDateOfBirth] = useState(initialData?.dateOfBirth || '')
  const [gender, setGender] = useState<'male' | 'female' | 'other'>(initialData?.gender || 'male')
  const [photo, setPhoto] = useState<File | null>(initialData?.photo || null)
  const [photoPreview, setPhotoPreview] = useState<string | null>(null)
  const [additionalPhotos, setAdditionalPhotos] = useState<File[]>(initialData?.additionalPhotos || [])
  const [additionalPreviews, setAdditionalPreviews] = useState<string[]>([])
  const [videoUrl, setVideoUrl] = useState(initialData?.videoUrl || '')
  const [errors, setErrors] = useState<Record<string, string>>({})

  const photoInputRef = useRef<HTMLInputElement>(null)
  const additionalInputRef = useRef<HTMLInputElement>(null)

  const handlePhotoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      if (file.size > 10 * 1024 * 1024) {
        setErrors((prev) => ({ ...prev, photo: 'Photo must be less than 10MB' }))
        return
      }
      setPhoto(file)
      setPhotoPreview(URL.createObjectURL(file))
      setErrors((prev) => {
        const { photo, ...rest } = prev
        return rest
      })
    }
  }

  const handleAdditionalPhotos = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || [])
    const validFiles = files.filter((file) => file.size <= 10 * 1024 * 1024)

    if (validFiles.length !== files.length) {
      setErrors((prev) => ({ ...prev, additionalPhotos: 'Some photos exceeded 10MB and were skipped' }))
    }

    const newPhotos = [...additionalPhotos, ...validFiles].slice(0, 5)
    setAdditionalPhotos(newPhotos)

    const newPreviews = newPhotos.map((file) => URL.createObjectURL(file))
    setAdditionalPreviews(newPreviews)
  }

  const removeAdditionalPhoto = (index: number) => {
    const newPhotos = additionalPhotos.filter((_, i) => i !== index)
    setAdditionalPhotos(newPhotos)
    setAdditionalPreviews(newPhotos.map((file) => URL.createObjectURL(file)))
  }

  const validate = (): boolean => {
    const newErrors: Record<string, string> = {}

    if (!firstName.trim()) {
      newErrors.firstName = 'First name is required'
    }

    if (!lastName.trim()) {
      newErrors.lastName = 'Last name is required'
    }

    if (!dateOfBirth) {
      newErrors.dateOfBirth = 'Date of birth is required'
    } else {
      const dob = new Date(dateOfBirth)
      const today = new Date()
      const age = today.getFullYear() - dob.getFullYear()
      if (age < 3 || age > 30) {
        newErrors.dateOfBirth = 'Student must be between 3 and 30 years old'
      }
    }

    if (!photo) {
      newErrors.photo = 'A primary photo is required'
    }

    if (videoUrl && !isValidVideoUrl(videoUrl)) {
      newErrors.videoUrl = 'Please enter a valid YouTube or Vimeo URL'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const isValidVideoUrl = (url: string): boolean => {
    if (!url) return true
    const youtubeRegex = /^(https?:\/\/)?(www\.)?(youtube\.com|youtu\.be)\/.+/
    const vimeoRegex = /^(https?:\/\/)?(www\.)?vimeo\.com\/.+/
    return youtubeRegex.test(url) || vimeoRegex.test(url)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (!validate()) return

    onComplete({
      firstName: firstName.trim(),
      lastName: lastName.trim(),
      dateOfBirth,
      gender,
      photo,
      additionalPhotos,
      videoUrl: videoUrl.trim() || undefined,
    })
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <h2 className="text-xl font-semibold text-gray-900 mb-2">Student Information</h2>
        <p className="text-gray-600 text-sm">
          Enter the basic details about the student you are submitting.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Input
          label="First Name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          error={errors.firstName}
          fullWidth
          required
        />

        <Input
          label="Last Name"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          error={errors.lastName}
          fullWidth
          required
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Date of Birth</label>
          <input
            type="date"
            value={dateOfBirth}
            onChange={(e) => setDateOfBirth(e.target.value)}
            max={new Date().toISOString().split('T')[0]}
            className={`
              w-full px-4 py-3 rounded-lg border-2 bg-white text-gray-900
              focus:outline-none focus:ring-2 focus:ring-offset-1
              ${errors.dateOfBirth
                ? 'border-error focus:border-error focus:ring-error/20'
                : 'border-gray-300 focus:border-primary focus:ring-primary/20'}
            `}
            required
          />
          {errors.dateOfBirth && (
            <p className="mt-1 text-sm text-error">{errors.dateOfBirth}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Gender</label>
          <div className="flex gap-3">
            {(['male', 'female', 'other'] as const).map((g) => (
              <button
                key={g}
                type="button"
                onClick={() => setGender(g)}
                className={`
                  flex-1 px-4 py-3 rounded-lg border-2 text-sm font-medium capitalize transition-all
                  ${
                    gender === g
                      ? 'border-primary-600 bg-primary-50 text-primary-700'
                      : 'border-gray-200 text-gray-700 hover:border-gray-300'
                  }
                `}
              >
                {g}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Primary Photo Upload */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Primary Photo <span className="text-error">*</span>
        </label>
        <div
          onClick={() => photoInputRef.current?.click()}
          className={`
            relative border-2 border-dashed rounded-xl p-6 text-center cursor-pointer
            transition-all hover:border-primary-400 hover:bg-primary-50/50
            ${errors.photo ? 'border-error bg-error/5' : 'border-gray-300'}
            ${photoPreview ? 'p-2' : ''}
          `}
        >
          <input
            ref={photoInputRef}
            type="file"
            accept="image/*"
            onChange={handlePhotoChange}
            className="hidden"
          />

          {photoPreview ? (
            <div className="relative aspect-video">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={photoPreview}
                alt="Preview"
                className="w-full h-full object-cover rounded-lg"
              />
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation()
                  setPhoto(null)
                  setPhotoPreview(null)
                }}
                className="absolute top-2 right-2 p-1.5 rounded-full bg-white/90 text-gray-700 hover:bg-white shadow"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          ) : (
            <>
              <ImageIcon className="w-12 h-12 mx-auto text-gray-400 mb-3" />
              <p className="text-gray-700 font-medium">Click to upload a photo</p>
              <p className="text-gray-500 text-sm mt-1">PNG, JPG up to 10MB</p>
            </>
          )}
        </div>
        {errors.photo && <p className="mt-1 text-sm text-error">{errors.photo}</p>}
      </div>

      {/* Additional Photos */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Additional Photos (Optional)
        </label>
        <p className="text-gray-500 text-sm mb-3">
          Add up to 5 more photos to show the student&apos;s environment, school, etc.
        </p>

        <div className="grid grid-cols-3 sm:grid-cols-5 gap-3">
          {additionalPreviews.map((preview, index) => (
            <div key={index} className="relative aspect-square">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={preview}
                alt={`Additional ${index + 1}`}
                className="w-full h-full object-cover rounded-lg"
              />
              <button
                type="button"
                onClick={() => removeAdditionalPhoto(index)}
                className="absolute -top-2 -right-2 p-1 rounded-full bg-white text-gray-700 hover:bg-gray-100 shadow border"
              >
                <X className="w-3 h-3" />
              </button>
            </div>
          ))}

          {additionalPhotos.length < 5 && (
            <button
              type="button"
              onClick={() => additionalInputRef.current?.click()}
              className="aspect-square border-2 border-dashed border-gray-300 rounded-lg flex flex-col items-center justify-center text-gray-500 hover:border-primary-400 hover:text-primary-600 transition-all"
            >
              <Upload className="w-5 h-5 mb-1" />
              <span className="text-xs">Add</span>
            </button>
          )}
        </div>

        <input
          ref={additionalInputRef}
          type="file"
          accept="image/*"
          multiple
          onChange={handleAdditionalPhotos}
          className="hidden"
        />
        {errors.additionalPhotos && (
          <p className="mt-1 text-sm text-warning">{errors.additionalPhotos}</p>
        )}
      </div>

      {/* Video URL */}
      <Input
        label="Video URL (Optional)"
        value={videoUrl}
        onChange={(e) => setVideoUrl(e.target.value)}
        error={errors.videoUrl}
        leftIcon={<Video className="w-5 h-5" />}
        helperText="YouTube or Vimeo link to a video about the student"
        fullWidth
      />

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
