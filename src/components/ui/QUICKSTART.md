# Quick Start Guide - TedFun UI Components

Get started with Material Design 3 components in under 5 minutes.

## Installation

No installation needed! All components are already in your project at:
```
/Users/ashish/code/tedfun/src/components/ui/
```

## Basic Usage

### 1. Import Components

```tsx
import { Button, Card, Input } from '@/components/ui'
```

### 2. Use in Your Page/Component

```tsx
export default function MyPage() {
  return (
    <Card variant="elevated">
      <Input label="Name" placeholder="Enter your name" />
      <Button variant="primary">Submit</Button>
    </Card>
  )
}
```

## Common Patterns

### Need Card (Most Common Use Case)

```tsx
import {
  Card,
  CardHeader,
  CardContent,
  CardFooter,
  Avatar,
  Badge,
  Progress,
  Button,
} from '@/components/ui'

function NeedCard({ need }) {
  return (
    <Card variant="elevated" hoverable>
      <CardHeader
        action={<Badge variant="urgent">Urgent</Badge>}
      >
        <div className="flex items-center gap-3">
          <Avatar name={need.studentName} />
          <div>
            <h3 className="font-semibold">{need.title}</h3>
            <p className="text-sm text-gray-600">{need.timeAgo}</p>
          </div>
        </div>
      </CardHeader>

      <CardContent>
        <p className="text-gray-700 mb-4">{need.description}</p>
        <Progress
          value={need.raised}
          max={need.goal}
          showLabel
          label="Funding Progress"
        />
      </CardContent>

      <CardFooter align="between">
        <span className="text-sm">
          <strong>${need.raised}</strong> / ${need.goal}
        </span>
        <Button variant="primary">Donate</Button>
      </CardFooter>
    </Card>
  )
}
```

### Search Form

```tsx
import { Input, Button } from '@/components/ui'

function SearchForm() {
  return (
    <form className="flex gap-3">
      <Input
        label="Search"
        placeholder="Search needs..."
        fullWidth
      />
      <Button variant="primary" type="submit">
        Search
      </Button>
    </form>
  )
}
```

### Donation Form

```tsx
import { Input, Button } from '@/components/ui'

function DonationForm() {
  return (
    <form className="space-y-4">
      <Input
        label="Amount"
        type="number"
        helperText="Minimum $5"
        fullWidth
      />
      <Input
        label="Email"
        type="email"
        helperText="For receipt"
        fullWidth
      />
      <Button variant="primary" fullWidth>
        Donate Now
      </Button>
    </form>
  )
}
```

### Loading State

```tsx
import { SkeletonCard } from '@/components/ui'

function NeedsList({ loading, needs }) {
  if (loading) {
    return (
      <div className="space-y-4">
        <SkeletonCard />
        <SkeletonCard />
        <SkeletonCard />
      </div>
    )
  }

  return needs.map(need => <NeedCard key={need.id} need={need} />)
}
```

## Component Cheat Sheet

### Buttons

```tsx
// Variants
<Button variant="primary">Primary</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="outline">Outline</Button>
<Button variant="text">Text</Button>

// Sizes
<Button size="sm">Small</Button>
<Button size="md">Medium</Button>
<Button size="lg">Large</Button>

// States
<Button loading>Loading...</Button>
<Button disabled>Disabled</Button>
<Button fullWidth>Full Width</Button>
```

### Cards

```tsx
// Variants
<Card variant="elevated">Elevated (default)</Card>
<Card variant="outlined">Outlined</Card>
<Card variant="filled">Filled</Card>

// Interactive
<Card hoverable>Hover Effect</Card>
<Card clickable onClick={handleClick}>Clickable</Card>
```

### Inputs

```tsx
// Basic
<Input label="Name" />

// With helper text
<Input label="Email" helperText="We'll never share" />

// With error
<Input label="Password" error="Too short" />

// Full width
<Input label="Message" fullWidth />
```

### Progress

```tsx
// Basic
<Progress value={75} max={100} />

// With label
<Progress value={75} showLabel label="Progress" />

// Variants
<Progress value={100} variant="success" />
<Progress value={50} variant="warning" />
<Progress value={25} variant="error" />
```

### Avatars

```tsx
// With image
<Avatar src="/user.jpg" alt="User" />

// With initials
<Avatar name="John Doe" />

// Sizes
<Avatar name="User" size="sm" />
<Avatar name="User" size="md" />
<Avatar name="User" size="lg" />

// Group
<AvatarGroup max={3}>
  <Avatar name="User 1" />
  <Avatar name="User 2" />
  <Avatar name="User 3" />
</AvatarGroup>
```

### Badges

```tsx
// Priority levels
<Badge variant="urgent">Urgent</Badge>
<Badge variant="high">High</Badge>
<Badge variant="medium">Medium</Badge>
<Badge variant="low">Low</Badge>

// Status
<Badge variant="funded">Funded</Badge>
<Badge variant="active">Active</Badge>
<Badge variant="pending">Pending</Badge>

// With dot
<Badge variant="urgent" dot>Urgent Need</Badge>
```

## Styling Tips

### Custom Spacing

Use Tailwind's spacing scale (matches our 4px system):

```tsx
<div className="space-y-4">  {/* 16px gap */}
  <Card />
  <Card />
</div>

<div className="p-6">  {/* 24px padding */}
  <p>Content</p>
</div>
```

### Custom Colors

Use the design system colors:

```tsx
<div className="bg-primary text-white">Primary</div>
<div className="bg-secondary text-white">Secondary</div>
<div className="bg-surface-container">Surface</div>
```

### Shadows

Use Material Design elevation:

```tsx
<div className="shadow-elevation-1">Subtle</div>
<div className="shadow-elevation-2">Default</div>
<div className="shadow-elevation-3">Raised</div>
<div className="shadow-elevation-4">Hover</div>
```

### Rounded Corners

```tsx
<div className="rounded-sm">Small (8px)</div>
<div className="rounded-md">Medium (12px)</div>
<div className="rounded-lg">Large (16px)</div>
<div className="rounded-xl">Extra Large (28px)</div>
```

## Hooks

Use custom hooks for common patterns:

```tsx
import { useToggle, useDebounce, useMediaQuery } from '@/components/ui/hooks'

function MyComponent() {
  // Toggle state
  const [isOpen, toggle] = useToggle(false)

  // Debounced search
  const [search, setSearch] = useState('')
  const debouncedSearch = useDebounce(search, 300)

  // Responsive design
  const isMobile = useMediaQuery('(max-width: 640px)')

  return (
    <div>
      <Button onClick={toggle}>
        {isOpen ? 'Close' : 'Open'}
      </Button>
    </div>
  )
}
```

## Accessibility

All components are accessible by default. No extra work needed!

- Keyboard navigation works
- Screen readers supported
- ARIA attributes included
- Focus indicators visible
- Color contrast compliant

## TypeScript

Full TypeScript support with autocomplete:

```tsx
import type { ButtonProps, CardProps } from '@/components/ui'

const buttonProps: ButtonProps = {
  variant: 'primary',  // Autocomplete works!
  size: 'md',
  onClick: () => console.log('clicked')
}

<Button {...buttonProps}>Click Me</Button>
```

## Responsive Design

Components are mobile-first and responsive:

```tsx
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
  <Card />
  <Card />
  <Card />
</div>
```

## Dark Mode (Future)

Components are designed to support dark mode. Theme can be toggled:

```tsx
// Coming soon - theme provider
<ThemeProvider theme="dark">
  <App />
</ThemeProvider>
```

## Performance Tips

1. Use SkeletonCard for loading states
2. Lazy load images in Avatar
3. Debounce search inputs
4. Use React.memo for Card components in lists

```tsx
import { memo } from 'react'

const NeedCard = memo(({ need }) => (
  <Card>...</Card>
))
```

## Common Mistakes to Avoid

1. Don't forget `fullWidth` on inputs in forms
2. Always provide `label` for accessibility
3. Use proper variant names (check docs)
4. Don't override core styles unnecessarily

## Next Steps

1. Check `/src/components/ui/README.md` for full documentation
2. See `/src/components/ui/examples.tsx` for more examples
3. View `/src/components/ui/types.ts` for TypeScript types
4. Use `/src/components/ui/hooks.ts` for custom hooks

## Need Help?

- Full docs: `README.md`
- Examples: `examples.tsx`
- Types: `types.ts`
- Hooks: `hooks.ts`

## File Structure

```
src/components/ui/
├── Avatar.tsx          # Avatar component
├── Badge.tsx           # Badge & NotificationBadge
├── Button.tsx          # Button component
├── Card.tsx            # Card with Header/Content/Footer
├── Input.tsx           # Text input field
├── Progress.tsx        # Progress bar
├── Skeleton.tsx        # Loading skeletons
├── index.ts            # Barrel exports
├── types.ts            # TypeScript definitions
├── hooks.ts            # Custom React hooks
├── examples.tsx        # Usage examples
├── README.md           # Full documentation
└── QUICKSTART.md       # This file
```

Happy coding!
