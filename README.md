# Lotopital Consult - Business Registration Platform

A stunning, highly animated frontend web application for CAC (Corporate Affairs Commission) business registration in Nigeria.

## Features

### Phase 1 - Frontend (Complete)

- **Animated Hero Section** with gradient CTAs and smooth transitions
- **Multi-step Registration Wizard** with progress tracking and localStorage persistence
- **Business Name Search** with mock API validation
- **Application Tracking** with animated timeline
- **Services Showcase** with detailed pricing and descriptions
- **Toast Notifications** for user feedback
- **Fully Responsive** design (mobile → desktop)
- **Page Transitions** with Framer Motion
- **Modern Design System** with blue/orange brand colors

## Tech Stack

- **Framework**: React 18 with TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Routing**: React Router DOM
- **Icons**: Lucide React
- **Build Tool**: Vite

## Pages & Routes

- `/` - Home page with hero, features, and services preview
- `/services` - Full services catalog with pricing
- `/register` - Multi-step registration wizard
- `/track` - Application tracking page
- `/contact` - Contact information and form
- `/login` - Admin login placeholder
- `/success` - Registration confirmation page
- `/terms` - Terms of service (placeholder)
- `/privacy` - Privacy policy (placeholder)
- `/refund` - Refund policy (placeholder)

## Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

The app will be available at `http://localhost:5173`

### Build

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Mock API Testing

The application uses mock APIs for demonstration. Try these test values:

### Name Search
- Available names: Any name except "lotopital", "google", "microsoft", "apple"
- Unavailable names: "lotopital", "google", "microsoft", "apple"

### Application Tracking
- `APP-2025-001` - Approved application
- `APP-2025-002` - Processing application
- Any other format will create a new mock application

## Project Structure

```
src/
├── components/          # Shared components (Navbar, Footer)
├── contexts/           # React contexts (Toast)
├── mocks/              # Mock API and data
├── pages/              # Page components
├── types/              # TypeScript type definitions
├── utils/              # Utility functions
├── App.tsx             # Main app with routing
└── main.tsx            # Entry point
```

## Design Features

- **Brand Colors**: Blue (#2563EB) and Orange (#F97316)
- **Typography**: Inter font family
- **Animations**: Smooth page transitions, micro-interactions, hover effects
- **Components**: Glassmorphism, gradient backgrounds, soft shadows
- **Accessibility**: ARIA labels, focus states, keyboard navigation

## Services Offered

1. **Business Name Registration** - ₦15,000 (3-5 days)
2. **Limited Liability Company** - ₦50,000 (7-10 days)
3. **NGO/Trustees** - ₦45,000 (10-14 days)
4. **Trademark Registration** - ₦35,000 (30-45 days)
5. **Annual Returns** - ₦20,000 (2-3 days)
6. **Change of Company Name** - ₦25,000 (5-7 days)

## Registration Flow

1. **Select Service** - Choose from available CAC services
2. **Business Name Search** - Search and reserve available business name
3. **Business Details** - Enter business information
4. **Director Details** - Add director/proprietor information
5. **Upload Documents** - Upload required documents
6. **Payment** - Mock payment confirmation
7. **Success** - Receive tracking ID

## Key Features

### Registration Wizard
- Multi-step form with validation
- Progress indicator
- LocalStorage persistence (prevents data loss on refresh)
- Business name availability checking
- Document upload support

### Application Tracking
- Real-time status updates
- Visual timeline with icons
- Status: submitted → processing → approved
- Certificate download (for approved applications)

### Toast Notifications
- Success/Error/Info messages
- Auto-dismiss after 5 seconds
- Bounce-in animation
- Manual dismiss option

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Next Steps (Phase 2)

- Backend integration with Supabase
- Real authentication system
- Admin dashboard
- Payment gateway integration (Remita)
- Email notifications
- Document management system
- Terms, Privacy, and Refund policy pages
- Analytics and reporting

## License

Private - Lotopital Consult © 2025

## Contact

- Email: info@lotopital.com
- Phone: +234 800 123 4567
- Address: 123 Business District, Lagos, Nigeria
