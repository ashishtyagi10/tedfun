'use client'

import { useState } from 'react'
import { ArrowLeft, ArrowRight, Plus, Trash2, IndianRupee } from 'lucide-react'
import { Input } from '@/components/ui/Input'
import type { NeedCategory, NeedPriority, NeedPeriod } from '@/types'

export interface NeedData {
  category: NeedCategory
  title: string
  description: string
  amountNeeded: number
  priority: NeedPriority
  period: NeedPeriod
}

interface NeedsFormProps {
  initialData: NeedData[]
  onComplete: (data: NeedData[]) => void
  onBack: () => void
}

const categories: { value: NeedCategory; label: string; icon: string }[] = [
  { value: 'tuition', label: 'Tuition Fees', icon: '🎓' },
  { value: 'books', label: 'Books & Stationery', icon: '📚' },
  { value: 'uniforms', label: 'Uniforms', icon: '👕' },
  { value: 'supplies', label: 'School Supplies', icon: '✏️' },
  { value: 'transportation', label: 'Transportation', icon: '🚌' },
  { value: 'meals', label: 'Meals', icon: '🍱' },
  { value: 'medical', label: 'Medical', icon: '🏥' },
  { value: 'other', label: 'Other', icon: '📦' },
]

const priorities: { value: NeedPriority; label: string; color: string }[] = [
  { value: 'urgent', label: 'Urgent', color: 'bg-error text-white' },
  { value: 'high', label: 'High', color: 'bg-warning text-white' },
  { value: 'medium', label: 'Medium', color: 'bg-primary-500 text-white' },
  { value: 'low', label: 'Low', color: 'bg-gray-400 text-white' },
]

const periods: { value: NeedPeriod; label: string }[] = [
  { value: 'one_time', label: 'One-time' },
  { value: 'monthly', label: 'Monthly' },
  { value: 'quarterly', label: 'Quarterly' },
  { value: 'yearly', label: 'Yearly' },
]

const emptyNeed: NeedData = {
  category: 'tuition',
  title: '',
  description: '',
  amountNeeded: 0,
  priority: 'medium',
  period: 'one_time',
}

export function NeedsForm({ initialData, onComplete, onBack }: NeedsFormProps) {
  const [needs, setNeeds] = useState<NeedData[]>(
    initialData.length > 0 ? initialData : [{ ...emptyNeed }]
  )
  const [errors, setErrors] = useState<Record<string, string>>({})

  const addNeed = () => {
    if (needs.length < 10) {
      setNeeds([...needs, { ...emptyNeed }])
    }
  }

  const removeNeed = (index: number) => {
    if (needs.length > 1) {
      setNeeds(needs.filter((_, i) => i !== index))
    }
  }

  const updateNeed = (index: number, field: keyof NeedData, value: any) => {
    const updated = [...needs]
    updated[index] = { ...updated[index], [field]: value }
    setNeeds(updated)
  }

  const validate = (): boolean => {
    const newErrors: Record<string, string> = {}

    needs.forEach((need, index) => {
      if (!need.title.trim()) {
        newErrors[`${index}-title`] = 'Title is required'
      }
      if (!need.description.trim()) {
        newErrors[`${index}-description`] = 'Description is required'
      }
      if (!need.amountNeeded || need.amountNeeded <= 0) {
        newErrors[`${index}-amount`] = 'Amount must be greater than 0'
      }
    })

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (!validate()) return

    onComplete(needs)
  }

  const totalAmount = needs.reduce((sum, need) => sum + (need.amountNeeded || 0), 0)

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <h2 className="text-xl font-semibold text-gray-900 mb-2">Funding Needs</h2>
        <p className="text-gray-600 text-sm">
          List what the student needs and how much each item costs. Be as specific as possible.
        </p>
      </div>

      <div className="space-y-6">
        {needs.map((need, index) => (
          <div
            key={index}
            className="p-4 md:p-5 border-2 border-gray-200 rounded-xl bg-gray-50/50 space-y-4"
          >
            <div className="flex items-center justify-between">
              <h3 className="font-medium text-gray-900">Need #{index + 1}</h3>
              {needs.length > 1 && (
                <button
                  type="button"
                  onClick={() => removeNeed(index)}
                  className="p-2 text-gray-500 hover:text-error hover:bg-error/10 rounded-lg transition-colors"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              )}
            </div>

            {/* Category Selection */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Category</label>
              <div className="grid grid-cols-4 gap-2">
                {categories.map((cat) => (
                  <button
                    key={cat.value}
                    type="button"
                    onClick={() => updateNeed(index, 'category', cat.value)}
                    className={`
                      p-2 rounded-lg border-2 text-xs font-medium transition-all text-center
                      ${
                        need.category === cat.value
                          ? 'border-primary-600 bg-primary-50 text-primary-700'
                          : 'border-gray-200 text-gray-700 hover:border-gray-300'
                      }
                    `}
                  >
                    <span className="block text-lg mb-0.5">{cat.icon}</span>
                    {cat.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Title */}
            <Input
              label="Title"
              value={need.title}
              onChange={(e) => updateNeed(index, 'title', e.target.value)}
              error={errors[`${index}-title`]}
              placeholder="e.g., Annual tuition fees for Class 10"
              fullWidth
              required
            />

            {/* Description */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Description</label>
              <textarea
                value={need.description}
                onChange={(e) => updateNeed(index, 'description', e.target.value)}
                placeholder="Provide details about this need..."
                rows={2}
                className={`
                  w-full px-4 py-3 rounded-lg border-2 bg-white text-gray-900
                  placeholder:text-gray-400 resize-none text-sm
                  focus:outline-none focus:ring-2 focus:ring-offset-1
                  ${errors[`${index}-description`]
                    ? 'border-error focus:border-error focus:ring-error/20'
                    : 'border-gray-300 focus:border-primary focus:ring-primary/20'}
                `}
                required
              />
              {errors[`${index}-description`] && (
                <p className="mt-1 text-sm text-error">{errors[`${index}-description`]}</p>
              )}
            </div>

            {/* Amount, Priority, Period */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Amount Needed (INR)
                </label>
                <div className="relative">
                  <IndianRupee className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
                  <input
                    type="number"
                    value={need.amountNeeded || ''}
                    onChange={(e) => updateNeed(index, 'amountNeeded', parseInt(e.target.value) || 0)}
                    placeholder="0"
                    min="0"
                    className={`
                      w-full pl-9 pr-4 py-3 rounded-lg border-2 bg-white text-gray-900
                      focus:outline-none focus:ring-2 focus:ring-offset-1
                      ${errors[`${index}-amount`]
                        ? 'border-error focus:border-error focus:ring-error/20'
                        : 'border-gray-300 focus:border-primary focus:ring-primary/20'}
                    `}
                    required
                  />
                </div>
                {errors[`${index}-amount`] && (
                  <p className="mt-1 text-sm text-error">{errors[`${index}-amount`]}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Priority</label>
                <select
                  value={need.priority}
                  onChange={(e) => updateNeed(index, 'priority', e.target.value as NeedPriority)}
                  className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-1 focus:border-primary focus:ring-primary/20"
                >
                  {priorities.map((p) => (
                    <option key={p.value} value={p.value}>
                      {p.label}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Period</label>
                <select
                  value={need.period}
                  onChange={(e) => updateNeed(index, 'period', e.target.value as NeedPeriod)}
                  className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-1 focus:border-primary focus:ring-primary/20"
                >
                  {periods.map((p) => (
                    <option key={p.value} value={p.value}>
                      {p.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        ))}

        {/* Add More Button */}
        {needs.length < 10 && (
          <button
            type="button"
            onClick={addNeed}
            className="w-full py-3 border-2 border-dashed border-gray-300 rounded-xl text-gray-600 hover:border-primary-400 hover:text-primary-600 hover:bg-primary-50/50 transition-all flex items-center justify-center gap-2"
          >
            <Plus className="w-4 h-4" />
            Add Another Need
          </button>
        )}

        {/* Total Summary */}
        <div className="p-4 bg-primary-50 border border-primary-200 rounded-xl">
          <div className="flex items-center justify-between">
            <span className="font-medium text-primary-800">Total Amount Needed</span>
            <span className="text-xl font-bold text-primary-700">
              ₹{totalAmount.toLocaleString('en-IN')}
            </span>
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
