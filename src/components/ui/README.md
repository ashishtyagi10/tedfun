# Material Design 3 UI Components

A comprehensive collection of Material Design 3 components for the TedFun non-profit platform, following Jony Ive-inspired minimal design principles.

## Design Philosophy

- **Minimal & Purposeful**: Every element serves a clear purpose
- **Generous Whitespace**: 24px base padding, consistent spacing
- **Warm Colors**: Primary (#1A5F7A teal), Secondary (#F5A623 amber)
- **Subtle Shadows**: Five elevation levels (elevation-1 through elevation-5)
- **Smooth Transitions**: 200ms cubic-bezier easing for all interactions

## Components Overview

### Button

Material Design 3 button with multiple variants and states.

**Features:**
- 4 variants: `primary`, `secondary`, `outline`, `text`
- 3 sizes: `sm`, `md`, `lg`
- Loading state with spinner
- Icon support (left/right positioning)
- Full accessibility with ARIA attributes

**Usage:**

```tsx
import { Button } from '@/components/ui'

// Primary button
<Button variant="primary" size="md">
  Donate Now
</Button>

// Button with icon
<Button
  variant="secondary"
  icon={<HeartIcon />}
  iconPosition="left"
>
  Support This Cause
</Button>

// Loading state
<Button loading={true}>
  Processing...
</Button>

// Full width
<Button fullWidth variant="primary">
  Submit Application
</Button>
```

**Props:**

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| variant | 'primary' \| 'secondary' \| 'outline' \| 'text' | 'primary' | Button style variant |
| size | 'sm' \| 'md' \| 'lg' | 'md' | Button size |
| fullWidth | boolean | false | Make button full width |
| loading | boolean | false | Show loading spinner |
| icon | ReactNode | - | Icon element to display |
| iconPosition | 'left' \| 'right' | 'left' | Icon position |

---

### Card

Container component with elevated, outlined, and filled variants.

**Features:**
- 3 variants: `elevated`, `outlined`, `filled`
- Hover effects (configurable)
- Clickable state
- Composed with CardHeader, CardContent, CardFooter

**Usage:**

```tsx
import { Card, CardHeader, CardContent, CardFooter, Button, Badge } from '@/components/ui'

<Card variant="elevated" hoverable>
  <CardHeader
    title="Educational Need"
    subtitle="Posted 2 days ago"
    action={<Badge variant="urgent">Urgent</Badge>}
  />
  <CardContent>
    <p>Student needs financial support for tuition fees...</p>
  </CardContent>
  <CardFooter align="between">
    <span>$500 / $2,000</span>
    <Button>Donate</Button>
  </CardFooter>
</Card>
```

**Props:**

**Card**
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| variant | 'elevated' \| 'outlined' \| 'filled' | 'elevated' | Card style variant |
| hoverable | boolean | false | Enable hover effects |
| clickable | boolean | false | Make card clickable |

**CardHeader**
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| title | string | - | Header title |
| subtitle | string | - | Header subtitle |
| action | ReactNode | - | Action element (button/icon) |

**CardFooter**
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| align | 'left' \| 'center' \| 'right' \| 'between' | 'left' | Content alignment |

---

### Input

Material Design 3 text field with floating label animation.

**Features:**
- Floating label on focus
- Helper text and error states
- Icon support (left/right)
- Full accessibility

**Usage:**

```tsx
import { Input } from '@/components/ui'
import { SearchIcon } from 'lucide-react'

// Basic input
<Input
  label="Full Name"
  placeholder="Enter your name"
  helperText="As it appears on official documents"
/>

// With error state
<Input
  label="Email"
  type="email"
  error="Please enter a valid email address"
/>

// With icon
<Input
  label="Search"
  leftIcon={<SearchIcon size={20} />}
  placeholder="Search needs..."
/>

// Full width
<Input label="Description" fullWidth />
```

**Props:**

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| label | string | - | Input label text |
| helperText | string | - | Helper text below input |
| error | string | - | Error message (shows instead of helper text) |
| leftIcon | ReactNode | - | Icon on left side |
| rightIcon | ReactNode | - | Icon on right side |
| fullWidth | boolean | false | Make input full width |

---

### Progress

Linear progress bar for funding goals and loading states.

**Features:**
- Smooth animations
- 4 variants: `default`, `success`, `warning`, `error`
- 3 sizes: `sm`, `md`, `lg`
- Optional percentage label
- Customizable labels

**Usage:**

```tsx
import { Progress } from '@/components/ui'

// Basic progress
<Progress value={75} max={100} />

// With label
<Progress
  value={1500}
  max={2000}
  label="Funding Goal"
  showLabel
/>

// Success variant
<Progress
  value={100}
  max={100}
  variant="success"
  showLabel
/>

// Custom size
<Progress value={50} size="lg" />
```

**Props:**

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| value | number | - | Current progress value |
| max | number | 100 | Maximum value |
| variant | 'default' \| 'success' \| 'warning' \| 'error' | 'default' | Color variant |
| size | 'sm' \| 'md' \| 'lg' | 'md' | Progress bar height |
| showLabel | boolean | false | Show percentage label |
| label | string | - | Custom label text |
| animated | boolean | true | Enable smooth animation |

---

### Avatar

User avatar with intelligent fallback system.

**Features:**
- Image with lazy loading
- Automatic initials fallback
- 6 sizes: `xs`, `sm`, `md`, `lg`, `xl`, `2xl`
- 3 shapes: `circle`, `rounded`, `square`
- Color variants for fallback
- AvatarGroup for displaying multiple avatars

**Usage:**

```tsx
import { Avatar, AvatarGroup } from '@/components/ui'

// Basic avatar
<Avatar
  src="/images/user.jpg"
  alt="John Doe"
  name="John Doe"
/>

// With fallback initials
<Avatar name="Jane Smith" size="lg" />

// Custom variant and color
<Avatar
  name="Support Team"
  variant="rounded"
  fallbackColor="secondary"
  size="xl"
/>

// Avatar group
<AvatarGroup max={3} size="md">
  <Avatar src="/user1.jpg" name="User 1" />
  <Avatar src="/user2.jpg" name="User 2" />
  <Avatar src="/user3.jpg" name="User 3" />
  <Avatar name="User 4" />
</AvatarGroup>
```

**Props:**

**Avatar**
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| src | string | - | Image source URL |
| alt | string | - | Alt text for image |
| name | string | - | Name for initials fallback |
| size | 'xs' \| 'sm' \| 'md' \| 'lg' \| 'xl' \| '2xl' | 'md' | Avatar size |
| variant | 'circle' \| 'rounded' \| 'square' | 'circle' | Avatar shape |
| fallbackColor | 'primary' \| 'secondary' \| 'success' \| 'warning' \| 'error' \| 'gray' | 'primary' | Background color for fallback |

**AvatarGroup**
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| max | number | 5 | Maximum avatars to display |
| size | AvatarProps['size'] | 'md' | Size for all avatars |
| variant | AvatarProps['variant'] | 'circle' | Shape for all avatars |

---

### Badge

Status badges for priority and funding states.

**Features:**
- 8 semantic variants: `urgent`, `high`, `medium`, `low`, `funded`, `active`, `pending`, `default`
- 3 sizes: `sm`, `md`, `lg`
- Optional dot indicator
- Optional icon support
- NotificationBadge for counts

**Usage:**

```tsx
import { Badge, NotificationBadge } from '@/components/ui'
import { AlertCircle } from 'lucide-react'

// Basic badge
<Badge variant="urgent">Urgent Need</Badge>

// With dot
<Badge variant="funded" dot>Fully Funded</Badge>

// With icon
<Badge variant="high" icon={<AlertCircle size={14} />}>
  High Priority
</Badge>

// Different sizes
<Badge size="sm">Small</Badge>
<Badge size="lg">Large</Badge>

// Notification badge (on avatar/icon)
<div className="relative">
  <Avatar name="John" />
  <NotificationBadge count={5} />
</div>

// Notification dot
<div className="relative">
  <BellIcon />
  <NotificationBadge dot />
</div>
```

**Props:**

**Badge**
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| variant | 'urgent' \| 'high' \| 'medium' \| 'low' \| 'funded' \| 'active' \| 'pending' \| 'default' | 'default' | Badge variant |
| size | 'sm' \| 'md' \| 'lg' | 'md' | Badge size |
| dot | boolean | false | Show dot indicator |
| icon | ReactNode | - | Icon element |

**NotificationBadge**
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| count | number | 0 | Count to display |
| max | number | 99 | Maximum count (shows "99+" if exceeded) |
| showZero | boolean | false | Show badge when count is 0 |
| variant | 'primary' \| 'error' \| 'success' \| 'warning' | 'error' | Color variant |
| dot | boolean | false | Show as dot instead of count |

---

### Skeleton

Loading placeholders for content.

**Features:**
- 4 variants: `text`, `circular`, `rectangular`, `rounded`
- 2 animations: `pulse`, `wave`
- Customizable dimensions
- Pre-built SkeletonCard, SkeletonList, SkeletonText

**Usage:**

```tsx
import { Skeleton, SkeletonCard, SkeletonList, SkeletonText } from '@/components/ui'

// Basic skeleton
<Skeleton variant="text" width="80%" />
<Skeleton variant="circular" width={40} height={40} />
<Skeleton variant="rounded" height={200} />

// Card skeleton
<SkeletonCard hasImage hasFooter />

// List skeleton
<SkeletonList count={5} hasAvatar />

// Text skeleton
<SkeletonText lines={3} />

// Custom animation
<Skeleton animation="wave" />
<Skeleton animation="none" />
```

**Props:**

**Skeleton**
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| variant | 'text' \| 'circular' \| 'rectangular' \| 'rounded' | 'rectangular' | Shape variant |
| width | string \| number | - | Width in px or CSS value |
| height | string \| number | - | Height in px or CSS value |
| animation | 'pulse' \| 'wave' \| 'none' | 'pulse' | Animation type |

**SkeletonCard**
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| hasImage | boolean | true | Show image placeholder |
| hasAvatar | boolean | false | Show avatar placeholder |
| hasFooter | boolean | true | Show footer placeholder |

**SkeletonList**
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| count | number | 3 | Number of list items |
| hasAvatar | boolean | true | Show avatar in each item |

**SkeletonText**
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| lines | number | 3 | Number of text lines |

---

## Accessibility

All components follow WCAG 2.1 AA guidelines:

- Proper ARIA attributes (`aria-label`, `aria-busy`, `aria-invalid`, etc.)
- Keyboard navigation support
- Focus indicators (ring-2 with primary color)
- Semantic HTML elements
- Color contrast ratios meet standards
- Screen reader support

## Design Tokens

Components use Tailwind CSS with custom Material Design 3 tokens:

**Colors:**
- Primary: `#1A5F7A` (Deep Teal) with 50-900 scale
- Secondary: `#F5A623` (Warm Amber) with 50-900 scale
- Success: `#2E7D32` (Green)
- Error: `#C62828` (Red)
- Warning: `#F57C00` (Orange)

**Elevation (Shadows):**
- `shadow-elevation-1`: Subtle shadow (1px blur)
- `shadow-elevation-2`: Default card shadow (3px blur)
- `shadow-elevation-3`: Raised elements (6px blur)
- `shadow-elevation-4`: Hover states (15px blur)
- `shadow-elevation-5`: Modal overlays (25px blur)

**Border Radius:**
- `rounded-xs`: 4px
- `rounded-sm`: 8px
- `rounded-md`: 12px
- `rounded-lg`: 16px
- `rounded-xl`: 28px

**Spacing:**
All components use 4px base unit: 4, 8, 12, 16, 24, 32, 40, 48, 64px

## Examples

### Complete Need Card

```tsx
import {
  Card, CardHeader, CardContent, CardFooter,
  Avatar, Badge, Progress, Button
} from '@/components/ui'

<Card variant="elevated" hoverable>
  <CardHeader
    action={<Badge variant="urgent" dot>Urgent</Badge>}
  >
    <div className="flex items-center gap-3">
      <Avatar name="Maria Garcia" size="md" />
      <div>
        <h3 className="font-semibold">Educational Support Needed</h3>
        <p className="text-sm text-gray-600">Posted 2 hours ago</p>
      </div>
    </div>
  </CardHeader>

  <CardContent>
    <p className="text-gray-700 mb-4">
      Maria needs support for college tuition fees this semester...
    </p>
    <Progress
      value={1500}
      max={5000}
      label="Funding Progress"
      showLabel
      variant="default"
    />
  </CardContent>

  <CardFooter align="between">
    <div className="text-sm text-gray-600">
      <span className="font-semibold text-gray-900">$1,500</span> raised of $5,000
    </div>
    <Button variant="primary">Donate Now</Button>
  </CardFooter>
</Card>
```

### Search Form

```tsx
import { Input, Button } from '@/components/ui'
import { Search, Filter } from 'lucide-react'

<form className="flex gap-3">
  <Input
    label="Search needs"
    leftIcon={<Search size={20} />}
    placeholder="Search by name, category..."
    fullWidth
  />
  <Button variant="outline" icon={<Filter size={20} />}>
    Filter
  </Button>
</form>
```

## Contributing

When adding new components:
1. Follow Material Design 3 specifications
2. Use Tailwind CSS with existing design tokens
3. Include proper TypeScript types
4. Add JSDoc comments
5. Ensure accessibility (ARIA, keyboard nav)
6. Use React.forwardRef for ref forwarding
7. Follow the Jony Ive-inspired minimal design philosophy

## Resources

- [Material Design 3 Guidelines](https://m3.material.io/)
- [Tailwind CSS Documentation](https://tailwindcss.com/)
- [WCAG 2.1 Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)
