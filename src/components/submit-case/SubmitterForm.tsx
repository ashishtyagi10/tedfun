'use client'

import { useState } from 'react'
import { ArrowRight, User, Mail, Phone, Building2 } from 'lucide-react'
import { Input } from '@/components/ui/Input'
import type { SubmitterRelationship } from '@/types'

export interface SubmitterData {
  name: string
  email: string
  phone: string
  relationship: SubmitterRelationship
  organizationName?: string
}

interface SubmitterFormProps {
  initialData: SubmitterData | null
  onComplete: (data: SubmitterData) => void
}

const relationships: { value: SubmitterRelationship; label: string }[] = [
  { value: 'teacher', label: 'Teacher' },
  { value: 'principal', label: 'Principal' },
  { value: 'ngo_worker', label: 'NGO Worker' },
  { value: 'family', label: 'Family Member' },
  { value: 'community_member', label: 'Community Member' },
]

export function SubmitterForm({ initialData, onComplete }: SubmitterFormProps) {
  const [name, setName] = useState(initialData?.name || '')
  const [email, setEmail] = useState(initialData?.email || '')
  const [phone, setPhone] = useState(initialData?.phone || '')
  const [relationship, setRelationship] = useState<SubmitterRelationship>(
    initialData?.relationship || 'teacher'
  )
  const [organizationName, setOrganizationName] = useState(initialData?.organizationName || '')
  const [errors, setErrors] = useState<Record<string, string>>({})

  const validate = (): boolean => {
    const newErrors: Record<string, string> = {}

    if (!name.trim()) {
      newErrors.name = 'Name is required'
    }

    if (!email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = 'Please enter a valid email'
    }

    if (!phone.trim()) {
      newErrors.phone = 'Phone number is required'
    } else if (!/^[+]?[\d\s-]{10,}$/.test(phone)) {
      newErrors.phone = 'Please enter a valid phone number'
    }

    if (relationship === 'ngo_worker' && !organizationName.trim()) {
      newErrors.organizationName = 'Organization name is required for NGO workers'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (!validate()) return

    onComplete({
      name: name.trim(),
      email: email.trim(),
      phone: phone.trim(),
      relationship,
      organizationName: organizationName.trim() || undefined,
    })
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <h2 className="text-xl font-semibold text-gray-900 mb-2">Your Information</h2>
        <p className="text-gray-600 text-sm">
          Tell us about yourself. This helps us verify the case and contact you if needed.
        </p>
      </div>

      <div className="space-y-4">
        <Input
          label="Full Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          error={errors.name}
          leftIcon={<User className="w-5 h-5" />}
          fullWidth
          required
        />

        <Input
          label="Email Address"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          error={errors.email}
          leftIcon={<Mail className="w-5 h-5" />}
          fullWidth
          required
        />

        <Input
          label="Phone Number"
          type="tel"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          error={errors.phone}
          leftIcon={<Phone className="w-5 h-5" />}
          helperText="Include country code (e.g., +91 for India)"
          fullWidth
          required
        />

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Your Relationship to the Student
          </label>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {relationships.map((rel) => (
              <button
                key={rel.value}
                type="button"
                onClick={() => setRelationship(rel.value)}
                className={`
                  px-4 py-3 rounded-lg border-2 text-sm font-medium transition-all
                  ${
                    relationship === rel.value
                      ? 'border-primary-600 bg-primary-50 text-primary-700'
                      : 'border-gray-200 text-gray-700 hover:border-gray-300'
                  }
                `}
              >
                {rel.label}
              </button>
            ))}
          </div>
        </div>

        {(relationship === 'ngo_worker' || relationship === 'teacher' || relationship === 'principal') && (
          <Input
            label={relationship === 'ngo_worker' ? 'Organization Name' : 'School/Institution Name'}
            value={organizationName}
            onChange={(e) => setOrganizationName(e.target.value)}
            error={errors.organizationName}
            leftIcon={<Building2 className="w-5 h-5" />}
            fullWidth
            required={relationship === 'ngo_worker'}
          />
        )}
      </div>

      <div className="flex justify-end pt-4">
        <button type="submit" className="btn-primary inline-flex items-center gap-2">
          Continue
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </form>
  )
}
