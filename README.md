# The Education Foundation

[![Website](https://img.shields.io/badge/Website-tedfun.org-1A5F7A?style=for-the-badge&logo=google-chrome&logoColor=white)](https://www.tedfun.org/)
[![Next.js](https://img.shields.io/badge/Next.js-16-black?style=for-the-badge&logo=next.js&logoColor=white)](https://nextjs.org/)
[![Firebase](https://img.shields.io/badge/Firebase-FFCA28?style=for-the-badge&logo=firebase&logoColor=black)](https://firebase.google.com/)
[![Stripe](https://img.shields.io/badge/Stripe-008CDD?style=for-the-badge&logo=stripe&logoColor=white)](https://stripe.com/)

**Connecting generous donors with underprivileged students to make education accessible for all.**

🌐 **Live Site:** [https://www.tedfun.org/](https://www.tedfun.org/)

---

## About

The Education Foundation is a non-profit platform dedicated to bridging the gap between deserving students and quality education. We connect generous donors with verified students in need, ensuring transparency, accountability, and maximum impact for every donation.

### Mission

To provide educational opportunities to underprivileged students across India by creating a transparent and efficient platform for donors to directly support students' educational journeys.

## Features

- **Student Profiles** - Browse verified student profiles with their stories, needs, and goals
- **Secure Donations** - Multi-currency support (INR + USD) via Stripe
- **Donor Dashboard** - Track your donations and see the impact you're making
- **Case Submission** - Submit student cases for review and approval
- **Success Stories** - Read about students who achieved their dreams through donor support
- **Transparency** - 85% of donations go directly to student support

## Tech Stack

- **Frontend:** Next.js 16, React 19, TypeScript
- **Styling:** Tailwind CSS with Material Design 3 tokens
- **Backend:** Firebase (Firestore, Auth, Storage, Cloud Functions)
- **Payments:** Stripe (multi-currency)
- **Hosting:** Vercel

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn
- Firebase project
- Stripe account

### Installation

```bash
# Clone the repository
git clone https://github.com/your-username/tedfun.git
cd tedfun

# Install dependencies
npm install

# Copy environment variables
cp .env.local.example .env.local

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the application.

### Environment Variables

Configure the following in `.env.local`:

```env
NEXT_PUBLIC_FIREBASE_API_KEY=
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=
NEXT_PUBLIC_FIREBASE_PROJECT_ID=
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=
NEXT_PUBLIC_FIREBASE_APP_ID=
STRIPE_SECRET_KEY=
STRIPE_WEBHOOK_SECRET=
```

## Project Structure

```
tedfun/
├── src/
│   ├── app/                    # Next.js App Router pages
│   ├── components/             # React components
│   │   ├── ui/                 # UI primitives
│   │   ├── layout/             # Header, Footer
│   │   └── student/            # Student-related components
│   ├── lib/                    # Utilities and Firebase/Stripe config
│   ├── types/                  # TypeScript interfaces
│   └── providers/              # React context providers
├── functions/                  # Firebase Cloud Functions
└── public/                     # Static assets
```

## Contributing

We welcome contributions! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License.

## Contact

- **Website:** [https://www.tedfun.org/](https://www.tedfun.org/)
- **Email:** support@theeducationfoundation.org

---

<p align="center">
  <strong>Together, we can make education accessible for every deserving student.</strong>
</p>
