'use client'

import { useState } from 'react'
import { Check, Star } from 'lucide-react'

interface PricingPlan {
  name: string
  monthlyPrice: number
  annualPrice: number
  features: string[]
  popular?: boolean
  cta: string
  color: string
}

const pricingPlans: PricingPlan[] = [
  {
    name: 'Starter',
    monthlyPrice: 29,
    annualPrice: 23,
    features: [
      '2 mentor calls per month',
      'Email support',
      'Basic application guidance',
      'University matching (5 options)',
      'Document templates'
    ],
    cta: 'Start Free Trial',
    color: 'border-gray-200'
  },
  {
    name: 'Pro',
    monthlyPrice: 49,
    annualPrice: 39,
    features: [
      'Unlimited mentor calls',
      'Priority chat support',
      'Personalized roadmap',
      'Scholarship guidance',
      'Visa application support',
      'Document review (3 rounds)',
      'University matching (unlimited)',
      'Progress tracking'
    ],
    popular: true,
    cta: 'Start Free Trial',
    color: 'border-blue-500'
  },
  {
    name: 'Elite',
    monthlyPrice: 79,
    annualPrice: 63,
    features: [
      'Everything in Pro',
      'Dedicated mentor',
      '24/7 priority support',
      'Application strategy sessions',
      'Interview preparation',
      'Document review (unlimited)',
      'Visa interview coaching',
      'Post-admission support',
      'Alumni network access'
    ],
    cta: 'Start Free Trial',
    color: 'border-gray-200'
  }
]

export default function PricingSection() {
  const [isAnnual, setIsAnnual] = useState(false)

  const handleSubscribe = (planName: string) => {
    // TODO: Implement checkout logic
    console.log(`Subscribing to ${planName} plan`)
  }

  return (
    <section id="pricing" className="py-20 bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Choose Your Mentorship Plan
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Start with a 14-day free trial. No commitment required. 
            Cancel anytime during your trial period.
          </p>
        </div>

        {/* Billing Toggle */}
        <div className="flex justify-center mb-12">
          <div className="bg-white rounded-full p-1 shadow-lg">
            <div className="flex">
              <button
                onClick={() => setIsAnnual(false)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-200 ${
                  !isAnnual
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Monthly
              </button>
              <button
                onClick={() => setIsAnnual(true)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-200 ${
                  isAnnual
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Annual
                <span className="ml-2 text-sm bg-green-100 text-green-800 px-2 py-1 rounded-full">
                  Save 20%
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {pricingPlans.map((plan, index) => (
            <div
              key={index}
              className={`relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 ${
                plan.popular ? 'ring-2 ring-blue-500 scale-105' : ''
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-medium flex items-center">
                    <Star className="h-4 w-4 mr-1" />
                    Most Popular
                  </div>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                <div className="mb-4">
                  <span className="text-4xl font-bold text-gray-900">
                    ${isAnnual ? plan.annualPrice : plan.monthlyPrice}
                  </span>
                  <span className="text-gray-600">/month</span>
                </div>
                {isAnnual && (
                  <p className="text-sm text-green-600 font-medium">
                    Billed annually (${plan.annualPrice * 12})
                  </p>
                )}
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                onClick={() => handleSubscribe(plan.name)}
                className={`w-full py-4 px-6 rounded-full font-semibold transition-colors duration-200 ${
                  plan.popular
                    ? 'bg-blue-600 text-white hover:bg-blue-700 shadow-lg'
                    : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                }`}
              >
                {plan.cta}
              </button>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">
            All plans include a 14-day free trial. No credit card required to start.
          </p>
          <p className="text-sm text-gray-500">
            * Prices shown are in USD. Additional taxes may apply based on your location.
          </p>
        </div>
      </div>
    </section>
  )
}
