'use client'

import { UserPlus, Video, MessageCircle, Trophy } from 'lucide-react'

const steps = [
  {
    icon: UserPlus,
    title: 'Sign Up & Match',
    description: 'Complete a detailed questionnaire about your goals. Our AI algorithm matches you with the perfect mentor based on your academic background and aspirations.',
    color: 'blue'
  },
  {
    icon: Video,
    title: 'Kickoff Session',
    description: 'Schedule your first video call with your mentor. Together, you\'ll outline your goals and create a personalized roadmap for your study-abroad journey.',
    color: 'green'
  },
  {
    icon: MessageCircle,
    title: 'Ongoing Guidance',
    description: 'Receive continuous support through regular calls, chat support, document reviews, and real-time updates on your application progress.',
    color: 'purple'
  },
  {
    icon: Trophy,
    title: 'Success & Feedback',
    description: 'Celebrate your admission success! Provide feedback to help us improve our program and stay connected through our alumni network.',
    color: 'orange'
  }
]

export default function HowItWorksSection() {
  return (
    <section id="how-it-works" className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            How It Works
          </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Your journey to study abroad success is just four simple steps away. 
                We&apos;ve streamlined the process to make it as smooth and effective as possible.
              </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => {
            const IconComponent = step.icon
            return (
              <div key={index} className="relative text-center">
                {/* Step Number */}
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                    {index + 1}
                  </div>
                </div>

                {/* Icon */}
                <div className={`w-20 h-20 mx-auto mb-6 rounded-full flex items-center justify-center ${
                  step.color === 'blue' ? 'bg-blue-100' :
                  step.color === 'green' ? 'bg-green-100' :
                  step.color === 'purple' ? 'bg-purple-100' :
                  'bg-orange-100'
                }`}>
                  <IconComponent className={`h-10 w-10 ${
                    step.color === 'blue' ? 'text-blue-600' :
                    step.color === 'green' ? 'text-green-600' :
                    step.color === 'purple' ? 'text-purple-600' :
                    'text-orange-600'
                  }`} />
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {step.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {step.description}
                </p>

                {/* Connector Line */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-10 -right-4 w-8 h-0.5 bg-gray-300"></div>
                )}
              </div>
            )
          })}
        </div>

        {/* CTA Button */}
        <div className="text-center mt-16">
          <button className="inline-flex items-center justify-center px-8 py-4 bg-blue-600 text-white font-semibold rounded-full hover:bg-blue-700 transition-colors duration-200 shadow-lg hover:shadow-xl">
            Get Started Today
          </button>
        </div>
      </div>
    </section>
  )
}
