'use client'

import { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'

interface FAQItem {
  id: number
  question: string
  answer: string
}

const faqs: FAQItem[] = [
  {
    id: 1,
    question: "What&apos;s included in the mentorship subscription?",
    answer: "Each subscription includes personalized guidance from experienced mentors, application support, document review, university matching, and ongoing support throughout your study-abroad journey. The specific features vary by plan - check our pricing section for detailed comparisons."
  },
  {
    id: 2,
    question: "Can I switch plans later?",
    answer: "Yes, you can upgrade or downgrade your plan at any time. Changes will take effect at the start of your next billing cycle. If you upgrade, you&apos;ll be charged the prorated difference. If you downgrade, the new rate applies at renewal."
  },
  {
    id: 3,
    question: "Do you offer refunds?",
    answer: "We offer a 14-day free trial with no commitment. If you&apos;re not satisfied within the first 14 days, you can cancel without any charges. After the trial period, we don&apos;t offer refunds, but you can cancel your subscription at any time."
  },
  {
    id: 4,
    question: "How does the free trial work?",
    answer: "The free trial gives you full access to your chosen plan for 14 days. No credit card is required to start. You can explore all features, have mentor calls, and experience the full value of our service. Cancel anytime during the trial period."
  },
  {
    id: 5,
    question: "How are mentors matched to students?",
    answer: "We use a sophisticated matching algorithm that considers your academic background, target universities, field of study, and personal goals. Mentors are former international students who have successfully navigated similar paths and can provide relevant guidance."
  },
  {
    id: 6,
    question: "What if I&apos;m not satisfied with my mentor?",
    answer: "We want you to have the best possible experience. If you&apos;re not satisfied with your mentor match, you can request a new mentor at any time. We&apos;ll work to find someone who better fits your needs and communication style."
  }
]

export default function FAQSection() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(1)

  const toggleFAQ = (id: number) => {
    setOpenFAQ(openFAQ === id ? null : id)
  }

  return (
    <section className="py-20 bg-white">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600">
            Got questions? We&apos;ve got answers. Here are the most common questions about our mentorship program.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq) => (
            <div
              key={faq.id}
              className="border border-gray-200 rounded-2xl overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(faq.id)}
                className="w-full px-6 py-6 text-left bg-gray-50 hover:bg-gray-100 transition-colors duration-200 flex items-center justify-between"
              >
                <span className="text-lg font-semibold text-gray-900">
                  {faq.question}
                </span>
                {openFAQ === faq.id ? (
                  <ChevronUp className="h-5 w-5 text-gray-500" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-gray-500" />
                )}
              </button>
              
              {openFAQ === faq.id && (
                <div className="px-6 py-6 bg-white">
                  <p className="text-gray-700 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Additional Help */}
        <div className="text-center mt-12">
                        <p className="text-gray-600 mb-4">
                Still have questions? We&apos;re here to help!
              </p>
          <button className="inline-flex items-center justify-center px-6 py-3 border-2 border-blue-600 text-blue-600 font-semibold rounded-full hover:bg-blue-600 hover:text-white transition-colors duration-200">
            Contact Support
          </button>
        </div>
      </div>
    </section>
  )
}
