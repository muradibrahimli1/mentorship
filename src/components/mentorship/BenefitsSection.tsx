'use client'

import { Phone, Map, GraduationCap, Bell } from 'lucide-react'

const benefits = [
  {
    icon: Phone,
    title: 'Unlimited Calls & Chat',
    description: 'Get unlimited mentor calls and 24/7 chat support. Build lasting relationships with your dedicated mentor.',
    color: 'blue',
    bgColor: 'bg-blue-50',
    iconColor: 'text-blue-600'
  },
  {
    icon: Map,
    title: 'Personalized Roadmap',
    description: 'Receive a step-by-step roadmap tailored to your goals, from application to visa approval.',
    color: 'green',
    bgColor: 'bg-green-50',
    iconColor: 'text-green-600'
  },
  {
    icon: GraduationCap,
    title: 'Scholarship & Visa Support',
    description: 'Expert guidance on finding scholarships and completing all visa paperwork correctly.',
    color: 'purple',
    bgColor: 'bg-purple-50',
    iconColor: 'text-purple-600'
  },
  {
    icon: Bell,
    title: 'Real-time Updates',
    description: 'Stay informed with notifications about deadlines, status updates, and important milestones.',
    color: 'orange',
    bgColor: 'bg-orange-50',
    iconColor: 'text-orange-600'
  }
]

export default function BenefitsSection() {
  return (
    <section className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Why Choose Our Mentorship?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We provide comprehensive support that covers every aspect of your study-abroad journey, 
            ensuring you have the guidance and resources needed for success.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon
            return (
              <div
                key={index}
                className={`${benefit.bgColor} rounded-2xl p-8 text-center hover:shadow-lg transition-shadow duration-300`}
              >
                <div className={`w-16 h-16 ${benefit.bgColor} rounded-full flex items-center justify-center mx-auto mb-6`}>
                  <IconComponent className={`h-8 w-8 ${benefit.iconColor}`} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
