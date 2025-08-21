# Admitt Mentorship Subscription Page

A modern, responsive mentorship subscription page built with Next.js, TypeScript, and Tailwind CSS. This project provides a comprehensive landing page for study-abroad mentorship services with pricing plans, testimonials, and interactive features.

## Features

### 🎯 Core Sections
- **Hero Section**: Compelling headline with CTA buttons and hero illustration
- **Benefits Section**: Four feature cards highlighting key mentorship benefits
- **Pricing Section**: Three-tier pricing with monthly/annual toggle and highlighted recommended plan
- **How It Works**: Step-by-step process explanation
- **Testimonials**: Social proof from successful students with success metrics
- **FAQ Section**: Interactive accordion with common questions
- **CTA Section**: Final call-to-action with contact information

### 🎨 Design Features
- Modern, minimalist design with rounded corners
- Pastel backgrounds and bold blue accent color
- Responsive design for all device sizes
- Smooth hover animations and transitions
- Consistent typography and spacing

### ⚡ Interactive Elements
- Monthly/Annual pricing toggle with automatic price updates
- FAQ accordion with smooth expand/collapse
- Responsive navigation with active state indicators
- Hover effects on cards and buttons

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **UI Components**: Headless UI (for future enhancements)

## Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout with navigation
│   ├── page.tsx            # Home page
│   └── mentorship/
│       └── page.tsx        # Mentorship subscription page
├── components/
│   ├── Navigation.tsx      # Main navigation component
│   └── mentorship/         # Mentorship page components
│       ├── HeroSection.tsx
│       ├── BenefitsSection.tsx
│       ├── PricingSection.tsx
│       ├── HowItWorksSection.tsx
│       ├── TestimonialsSection.tsx
│       ├── FAQSection.tsx
│       └── CTASection.tsx
```

## Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd mentorship-app
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm start
```

## Key Components

### PricingSection
- Three pricing tiers (Starter, Pro, Elite)
- Monthly/Annual billing toggle with 20% annual discount
- Highlighted "Most Popular" plan
- Feature lists for each tier
- CTA buttons for each plan

### BenefitsSection
- Four benefit cards with icons and descriptions
- Color-coded icons (blue, green, purple, orange)
- Hover effects and responsive grid layout

### FAQSection
- Interactive accordion functionality
- State management with React hooks
- Smooth expand/collapse animations

## Customization

### Colors
The design system uses a consistent color palette:
- Primary: Blue (`blue-600`)
- Secondary: Green (`green-600`)
- Accent: Purple (`purple-600`) and Orange (`orange-600`)
- Backgrounds: Light pastels (`blue-50`, `green-50`, etc.)

### Typography
- Headings: Large, bold text with proper hierarchy
- Body: Readable, medium-sized text
- Font: Geist Sans (Google Fonts)

### Spacing
- Consistent spacing using Tailwind's spacing scale
- Section padding: `py-20` (80px)
- Component margins: `mb-16` (64px)

## Future Enhancements

### Payment Integration
- Stripe Checkout integration for subscription management
- Webhook handling for subscription lifecycle events
- Trial period management

### User Management
- User authentication and profiles
- Mentor matching algorithm
- Progress tracking dashboard

### Analytics
- Conversion tracking
- User behavior analytics
- A/B testing for pricing optimization

## Best Practices Implemented

### Pricing Page Best Practices
- Maximum of three plans to avoid analysis paralysis
- Clear feature differentiation between tiers
- Highlighted recommended plan
- Annual discount promotion
- Transparent pricing with no hidden fees

### UX Best Practices
- Clear call-to-action buttons
- Social proof through testimonials
- FAQ section for common questions
- Responsive design for all devices
- Accessible color contrast and ARIA labels

### SEO Best Practices
- Proper meta tags and descriptions
- Semantic HTML structure
- Canonical URLs
- Open Graph tags for social sharing

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is licensed under the MIT License.

## Support

For questions or support, please contact:
- Email: hello@admitt.com
- Phone: +1 (555) 123-4567

---

Built with ❤️ for international students pursuing their study-abroad dreams.
