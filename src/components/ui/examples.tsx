/**
 * Material Design 3 UI Components - Usage Examples
 *
 * This file demonstrates how to use the TedFun UI components
 * in real-world scenarios for the non-profit platform.
 */

import React from 'react'
import {
  Button,
  Card,
  CardHeader,
  CardContent,
  CardFooter,
  Input,
  Progress,
  Avatar,
  AvatarGroup,
  Badge,
  NotificationBadge,
  Skeleton,
  SkeletonCard,
  SkeletonList,
  SkeletonText,
} from './index'

/**
 * Example 1: Need Card - Complete funding need display
 *
 * Shows a student's educational need with:
 * - Avatar and metadata
 * - Priority badge
 * - Description
 * - Funding progress
 * - Call-to-action button
 */
export function NeedCardExample() {
  return (
    <Card variant="elevated" hoverable className="max-w-md">
      <CardHeader
        action={
          <Badge variant="urgent" dot>
            Urgent
          </Badge>
        }
      >
        <div className="flex items-center gap-3">
          <Avatar name="Maria Garcia" size="md" fallbackColor="primary" />
          <div>
            <h3 className="font-semibold text-gray-900">College Tuition Support</h3>
            <p className="text-sm text-gray-600">Posted 2 hours ago</p>
          </div>
        </div>
      </CardHeader>

      <CardContent>
        <p className="text-gray-700 mb-4">
          Maria is a dedicated student pursuing her engineering degree. She needs financial
          support for this semester's tuition fees to continue her education.
        </p>

        <Progress
          value={1500}
          max={5000}
          label="Funding Progress"
          showLabel
          variant="default"
          size="md"
        />
      </CardContent>

      <CardFooter align="between">
        <div className="text-sm">
          <span className="font-semibold text-gray-900">$1,500</span>
          <span className="text-gray-600"> raised of $5,000</span>
        </div>
        <Button variant="primary" size="md">
          Donate Now
        </Button>
      </CardFooter>
    </Card>
  )
}

/**
 * Example 2: Search and Filter Section
 *
 * Demonstrates input fields with icons and buttons
 */
export function SearchFilterExample() {
  const SearchIcon = () => (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
      />
    </svg>
  )

  const FilterIcon = () => (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"
      />
    </svg>
  )

  return (
    <div className="flex gap-3 max-w-2xl">
      <Input
        label="Search needs"
        leftIcon={<SearchIcon />}
        placeholder="Search by name, category, or location..."
        fullWidth
      />
      <Button variant="outline" icon={<FilterIcon />} iconPosition="left">
        Filter
      </Button>
    </div>
  )
}

/**
 * Example 3: Donation Form
 *
 * Shows various input states and validation
 */
export function DonationFormExample() {
  const [amount, setAmount] = React.useState('')
  const [email, setEmail] = React.useState('')
  const [emailError, setEmailError] = React.useState('')
  const [loading, setLoading] = React.useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    // Simulate API call
    setTimeout(() => setLoading(false), 2000)
  }

  return (
    <Card variant="outlined" className="max-w-md">
      <CardHeader title="Make a Donation" subtitle="Support a student's education" />

      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            label="Donation Amount"
            type="number"
            placeholder="0.00"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            helperText="Minimum donation is $5"
            fullWidth
          />

          <Input
            label="Email Address"
            type="email"
            placeholder="your@email.com"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value)
              setEmailError('')
            }}
            error={emailError}
            helperText="We'll send you a receipt"
            fullWidth
          />

          <Button type="submit" variant="primary" fullWidth loading={loading}>
            {loading ? 'Processing...' : 'Donate Now'}
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}

/**
 * Example 4: Priority Badges Showcase
 *
 * Displays all badge variants for need prioritization
 */
export function PriorityBadgesExample() {
  return (
    <div className="flex flex-wrap gap-3">
      <Badge variant="urgent" dot>
        Urgent Need
      </Badge>
      <Badge variant="high">High Priority</Badge>
      <Badge variant="medium">Medium Priority</Badge>
      <Badge variant="low">Low Priority</Badge>
      <Badge variant="funded" dot>
        Fully Funded
      </Badge>
      <Badge variant="active">Active</Badge>
      <Badge variant="pending">Pending Review</Badge>
    </div>
  )
}

/**
 * Example 5: Avatar Group for Donors
 *
 * Shows recent donors using avatar group
 */
export function RecentDonorsExample() {
  return (
    <Card variant="filled" className="max-w-md">
      <CardContent>
        <div className="flex items-center justify-between">
          <div>
            <h4 className="font-semibold text-gray-900 mb-1">Recent Donors</h4>
            <p className="text-sm text-gray-600">15 people donated in the last 24 hours</p>
          </div>
          <AvatarGroup max={4} size="md">
            <Avatar name="John Smith" fallbackColor="primary" />
            <Avatar name="Sarah Johnson" fallbackColor="secondary" />
            <Avatar name="Michael Brown" fallbackColor="success" />
            <Avatar name="Emily Davis" fallbackColor="warning" />
            <Avatar name="David Wilson" fallbackColor="error" />
          </AvatarGroup>
        </div>
      </CardContent>
    </Card>
  )
}

/**
 * Example 6: Loading States
 *
 * Demonstrates skeleton components for loading UX
 */
export function LoadingStatesExample() {
  const [loading, setLoading] = React.useState(true)

  React.useEffect(() => {
    // Simulate data loading
    const timer = setTimeout(() => setLoading(false), 3000)
    return () => clearTimeout(timer)
  }, [])

  if (loading) {
    return (
      <div className="space-y-4 max-w-md">
        <SkeletonCard hasImage hasFooter />
        <SkeletonList count={3} hasAvatar />
      </div>
    )
  }

  return <NeedCardExample />
}

/**
 * Example 7: Progress Indicators
 *
 * Shows different progress bar configurations
 */
export function ProgressIndicatorsExample() {
  return (
    <div className="space-y-6 max-w-md">
      <Progress
        value={75}
        max={100}
        label="Overall Platform Impact"
        showLabel
        variant="default"
        size="md"
      />

      <Progress
        value={5000}
        max={5000}
        label="Goal Achieved!"
        showLabel
        variant="success"
        size="lg"
      />

      <Progress
        value={300}
        max={1000}
        label="Running Low on Time"
        showLabel
        variant="warning"
        size="md"
      />

      <Progress value={45} max={100} size="sm" />
    </div>
  )
}

/**
 * Example 8: Button Variants Showcase
 *
 * Displays all button styles and states
 */
export function ButtonVariantsExample() {
  const HeartIcon = () => (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
      <path
        fillRule="evenodd"
        d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
        clipRule="evenodd"
      />
    </svg>
  )

  return (
    <div className="space-y-4 max-w-md">
      <div className="flex flex-wrap gap-3">
        <Button variant="primary" size="lg">
          Large Primary
        </Button>
        <Button variant="secondary" size="md">
          Medium Secondary
        </Button>
        <Button variant="outline" size="sm">
          Small Outline
        </Button>
      </div>

      <div className="flex flex-wrap gap-3">
        <Button variant="primary" icon={<HeartIcon />} iconPosition="left">
          With Icon
        </Button>
        <Button variant="text">Text Button</Button>
        <Button variant="primary" loading>
          Loading...
        </Button>
      </div>

      <Button variant="primary" fullWidth>
        Full Width Button
      </Button>
    </div>
  )
}

/**
 * Example 9: Notification Badge on Avatar
 *
 * Shows notification badge usage
 */
export function NotificationExample() {
  return (
    <div className="flex gap-6 items-center">
      <div className="relative">
        <Avatar name="Admin User" size="lg" fallbackColor="primary" />
        <NotificationBadge count={5} variant="error" />
      </div>

      <div className="relative">
        <Avatar
          src="https://api.dicebear.com/7.x/avataaars/svg?seed=John"
          name="John Doe"
          size="xl"
        />
        <NotificationBadge dot variant="success" />
      </div>

      <div className="relative">
        <Avatar name="Support" size="md" fallbackColor="secondary" />
        <NotificationBadge count={150} max={99} variant="primary" />
      </div>
    </div>
  )
}

/**
 * Example 10: Complete Dashboard Widget
 *
 * Combines multiple components for a dashboard view
 */
export function DashboardWidgetExample() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl">
      <Card variant="elevated">
        <CardHeader title="Active Needs" subtitle="Total educational needs" />
        <CardContent>
          <div className="text-4xl font-bold text-primary mb-2">127</div>
          <Progress value={127} max={200} showLabel size="sm" />
        </CardContent>
      </Card>

      <Card variant="elevated">
        <CardHeader title="Total Donations" subtitle="This month" />
        <CardContent>
          <div className="text-4xl font-bold text-secondary mb-2">$45,280</div>
          <Progress value={45280} max={50000} variant="success" showLabel size="sm" />
        </CardContent>
      </Card>

      <Card variant="outlined" className="md:col-span-2">
        <CardHeader title="Recent Activity" />
        <CardContent>
          <div className="space-y-3">
            {[
              { name: 'Sarah M.', action: 'donated $500', time: '5 min ago' },
              { name: 'John D.', action: 'donated $250', time: '15 min ago' },
              { name: 'Emily R.', action: 'donated $1,000', time: '1 hour ago' },
            ].map((activity, i) => (
              <div key={i} className="flex items-center gap-3 p-2">
                <Avatar name={activity.name} size="sm" fallbackColor="primary" />
                <div className="flex-1">
                  <p className="text-sm">
                    <span className="font-semibold">{activity.name}</span> {activity.action}
                  </p>
                  <p className="text-xs text-gray-500">{activity.time}</p>
                </div>
                <Badge variant="funded" size="sm">
                  Success
                </Badge>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
