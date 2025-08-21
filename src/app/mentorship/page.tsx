import { Metadata } from 'next'
import HeroSection from '@/components/mentorship/HeroSection'
import BenefitsSection from '@/components/mentorship/BenefitsSection'
import PricingSection from '@/components/mentorship/PricingSection'
import HowItWorksSection from '@/components/mentorship/HowItWorksSection'
import TestimonialsSection from '@/components/mentorship/TestimonialsSection'
import FAQSection from '@/components/mentorship/FAQSection'
import CTASection from '@/components/mentorship/CTASection'

export const metadata: Metadata = {
  title: 'Mentorship – Admitt',
  description: 'Personalized study-abroad mentorship from former international students. Get 1:1 guidance, scholarship support and real-time updates.',
  openGraph: {
    title: 'Mentorship – Admitt',
    description: 'Personalized study-abroad mentorship from former international students. Get 1:1 guidance, scholarship support and real-time updates.',
    url: 'https://your-domain.com/mentorship',
  },
}

export default function MentorshipPage() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <BenefitsSection />
      <PricingSection />
      <HowItWorksSection />
      <TestimonialsSection />
      <FAQSection />
      <CTASection />
    </main>
  )
}
