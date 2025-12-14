# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

TedFun is a non-profit platform connecting underprivileged students with donors. Built with Next.js 16, Firebase, and Stripe.

**Firebase Project**: `the-education-foundation`

## Commands

### Next.js Frontend (root directory)
```bash
npm install          # Install dependencies
npm run dev          # Start development server (localhost:3000)
npm run build        # Production build
npm run lint         # Run ESLint
```

### Cloud Functions (functions/ directory)
```bash
cd functions
npm install          # Install dependencies
npm run build        # Build TypeScript
npm run serve        # Run Firebase emulator
npm run deploy       # Deploy functions
```

### Firebase
```bash
npm run firebase:emulators   # Run all emulators
npm run firebase:deploy      # Deploy all Firebase services
firebase deploy --only hosting   # Deploy hosting only
firebase deploy --only firestore:rules   # Deploy Firestore rules
```

## Architecture

```
tedfun/
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── (public)/           # Public pages (students, about, etc.)
│   │   ├── auth/               # Authentication pages
│   │   ├── dashboard/          # Donor dashboard (protected)
│   │   ├── admin/              # Admin dashboard (protected)
│   │   └── api/                # API routes (Stripe webhooks)
│   ├── components/
│   │   ├── ui/                 # M3 UI primitives (Button, Card, Input, etc.)
│   │   ├── layout/             # Header, Footer
│   │   ├── student/            # StudentCard, StudentGrid
│   │   └── donation/           # DonationFlow, PaymentForm
│   ├── lib/
│   │   ├── firebase/           # Firebase SDK (auth, firestore, storage)
│   │   ├── stripe/             # Stripe configuration
│   │   ├── hooks/              # Custom React hooks
│   │   └── utils/              # Utility functions
│   ├── types/                  # TypeScript interfaces
│   ├── providers/              # React context providers
│   └── styles/                 # Global CSS and theme
├── functions/                  # Firebase Cloud Functions
├── public/                     # Static assets
├── tedfunstore.rules           # Firestore security rules
├── tedstorage.rules            # Storage security rules
└── firebase.json               # Firebase configuration
```

## Key Data Models (Firestore)

- **students**: Student profiles with approval workflow (pending/approved/rejected)
- **donors**: User profiles with role (donor/admin/super_admin)
- **donations**: All donation records (online via Stripe + offline)
- **campaigns**: Fundraising campaigns

## Tech Stack

- **Frontend**: Next.js 16 (App Router), React 19, TypeScript
- **Styling**: Tailwind CSS with Material Design 3 tokens
- **Backend**: Firebase (Firestore, Auth, Storage, Cloud Functions)
- **Payments**: Stripe (multi-currency: INR + USD)
- **Auth**: Email/password + Google sign-in

## Design System

Material Design 3 components in `src/components/ui/`:
- Button, Card, Input, Progress, Avatar, Badge, Skeleton

Color palette:
- Primary: `#1A5F7A` (teal)
- Secondary: `#F5A623` (amber)

## Environment Variables

Copy `.env.local.example` to `.env.local` and configure:
- `NEXT_PUBLIC_FIREBASE_*` - Firebase client config
- `STRIPE_SECRET_KEY` - Stripe secret key
- `STRIPE_WEBHOOK_SECRET` - Stripe webhook signing secret

## Deployment

- **Frontend**: Deploy to Vercel (`vercel deploy`)
- **Firebase**: Use GitHub Actions or `firebase deploy`
