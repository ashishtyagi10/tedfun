'use client'

import { useState } from 'react'
import { ArrowLeft, ArrowRight, School, MapPin } from 'lucide-react'
import { Input } from '@/components/ui/Input'
import type { SchoolType } from '@/types'

export interface SchoolData {
  schoolName: string
  schoolType: SchoolType
  grade: string
  address: string
  city: string
  state: string
  country: string
}

interface SchoolFormProps {
  initialData: SchoolData | null
  onComplete: (data: SchoolData) => void
  onBack: () => void
}

const schoolTypes: { value: SchoolType; label: string }[] = [
  { value: 'primary', label: 'Primary School (1-5)' },
  { value: 'secondary', label: 'Secondary School (6-10)' },
  { value: 'high_school', label: 'High School (11-12)' },
  { value: 'college', label: 'College/University' },
]

const indianStates = [
  'Andhra Pradesh', 'Arunachal Pradesh', 'Assam', 'Bihar', 'Chhattisgarh',
  'Goa', 'Gujarat', 'Haryana', 'Himachal Pradesh', 'Jharkhand', 'Karnataka',
  'Kerala', 'Madhya Pradesh', 'Maharashtra', 'Manipur', 'Meghalaya', 'Mizoram',
  'Nagaland', 'Odisha', 'Punjab', 'Rajasthan', 'Sikkim', 'Tamil Nadu',
  'Telangana', 'Tripura', 'Uttar Pradesh', 'Uttarakhand', 'West Bengal',
  'Delhi', 'Jammu and Kashmir', 'Ladakh', 'Puducherry', 'Chandigarh',
]

export function SchoolForm({ initialData, onComplete, onBack }: SchoolFormProps) {
  const [schoolName, setSchoolName] = useState(initialData?.schoolName || '')
  const [schoolType, setSchoolType] = useState<SchoolType>(initialData?.schoolType || 'primary')
  const [grade, setGrade] = useState(initialData?.grade || '')
  const [address, setAddress] = useState(initialData?.address || '')
  const [city, setCity] = useState(initialData?.city || '')
  const [state, setState] = useState(initialData?.state || '')
  const [country, setCountry] = useState(initialData?.country || 'India')
  const [errors, setErrors] = useState<Record<string, string>>({})

  const validate = (): boolean => {
    const newErrors: Record<string, string> = {}

    if (!schoolName.trim()) {
      newErrors.schoolName = 'School name is required'
    }

    if (!grade.trim()) {
      newErrors.grade = 'Current grade/class is required'
    }

    if (!address.trim()) {
      newErrors.address = 'School address is required'
    }

    if (!city.trim()) {
      newErrors.city = 'City is required'
    }

    if (!state.trim()) {
      newErrors.state = 'State is required'
    }

    if (!country.trim()) {
      newErrors.country = 'Country is required'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (!validate()) return

    onComplete({
      schoolName: schoolName.trim(),
      schoolType,
      grade: grade.trim(),
      address: address.trim(),
      city: city.trim(),
      state: state.trim(),
      country: country.trim(),
    })
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <h2 className="text-xl font-semibold text-gray-900 mb-2">School Information</h2>
        <p className="text-gray-600 text-sm">
          Provide details about the student&apos;s current school or educational institution.
        </p>
      </div>

      <div className="space-y-4">
        <Input
          label="School/Institution Name"
          value={schoolName}
          onChange={(e) => setSchoolName(e.target.value)}
          error={errors.schoolName}
          leftIcon={<School className="w-5 h-5" />}
          fullWidth
          required
        />

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">School Type</label>
          <div className="grid grid-cols-2 gap-3">
            {schoolTypes.map((type) => (
              <button
                key={type.value}
                type="button"
                onClick={() => setSchoolType(type.value)}
                className={`
                  px-4 py-3 rounded-lg border-2 text-sm font-medium transition-all text-left
                  ${
                    schoolType === type.value
                      ? 'border-primary-600 bg-primary-50 text-primary-700'
                      : 'border-gray-200 text-gray-700 hover:border-gray-300'
                  }
                `}
              >
                {type.label}
              </button>
            ))}
          </div>
        </div>

        <Input
          label="Current Grade/Class"
          value={grade}
          onChange={(e) => setGrade(e.target.value)}
          error={errors.grade}
          placeholder="e.g., Class 8, 12th Standard, BSc 2nd Year"
          fullWidth
          required
        />

        <div className="border-t border-gray-200 pt-4 mt-4">
          <h3 className="text-sm font-medium text-gray-700 mb-3 flex items-center gap-2">
            <MapPin className="w-4 h-4" />
            School Location
          </h3>

          <div className="space-y-4">
            <Input
              label="Street Address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              error={errors.address}
              fullWidth
              required
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Input
                label="City/Town"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                error={errors.city}
                fullWidth
                required
              />

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  State/Province
                </label>
                <select
                  value={state}
                  onChange={(e) => setState(e.target.value)}
                  className={`
                    w-full px-4 py-3 rounded-lg border-2 bg-white text-gray-900
                    focus:outline-none focus:ring-2 focus:ring-offset-1
                    ${errors.state
                      ? 'border-error focus:border-error focus:ring-error/20'
                      : 'border-gray-300 focus:border-primary focus:ring-primary/20'}
                  `}
                  required
                >
                  <option value="">Select State</option>
                  {indianStates.map((s) => (
                    <option key={s} value={s}>
                      {s}
                    </option>
                  ))}
                </select>
                {errors.state && <p className="mt-1 text-sm text-error">{errors.state}</p>}
              </div>
            </div>

            <Input
              label="Country"
              value={country}
              onChange={(e) => setCountry(e.target.value)}
              error={errors.country}
              fullWidth
              required
            />
          </div>
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
