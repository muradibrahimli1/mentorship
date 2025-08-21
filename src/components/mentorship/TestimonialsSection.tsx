'use client'

import { Star, Quote } from 'lucide-react'

interface Testimonial {
  id: number
  name: string
  location: string
  university: string
  quote: string
  rating: number
  avatar: string
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Sarah J.',
    location: 'India',
    university: 'University of Toronto',
    quote: 'The mentorship program was incredible! My mentor helped me secure a $25,000 scholarship and guided me through every step of the visa process. I couldn&apos;t have done it without them.',
    rating: 5,
    avatar: '/api/placeholder/60/60'
  },
  {
    id: 2,
    name: 'Ahmed M.',
    location: 'Egypt',
    university: 'McGill University',
    quote: 'From university selection to final admission, the personalized roadmap made everything so clear. My mentor&apos;s experience as a former international student was invaluable.',
    rating: 5,
    avatar: '/api/placeholder/60/60'
  },
  {
    id: 3,
    name: 'Maria L.',
    location: 'Brazil',
    university: 'University of British Columbia',
    quote: 'The unlimited calls and real-time updates kept me on track throughout the entire process. I got into my dream university with a full scholarship!',
    rating: 5,
    avatar: '/api/placeholder/60/60'
  }
]

export default function TestimonialsSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Success Stories from Our Students
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don&apos;t just take our word for it. Here&apos;s what our mentees have to say about 
            their study-abroad journey with us.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              {/* Quote Icon */}
              <div className="mb-6">
                <Quote className="h-8 w-8 text-blue-200" />
              </div>

              {/* Rating */}
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, index) => (
                  <Star key={index} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-gray-700 mb-6 leading-relaxed">
                &ldquo;{testimonial.quote}&rdquo;
              </blockquote>

              {/* Author */}
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full mr-4 overflow-hidden">
                  <div className="w-full h-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center">
                    <span className="text-white font-semibold text-lg">
                      {testimonial.name.charAt(0)}
                    </span>
                  </div>
                </div>
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-600">
                    {testimonial.location} → {testimonial.university}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Success Metrics */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-4xl font-bold text-blue-600 mb-2">2,000+</div>
            <div className="text-gray-600">Students Mentored</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-green-600 mb-2">95%</div>
            <div className="text-gray-600">Success Rate</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-purple-600 mb-2">$2.5M+</div>
            <div className="text-gray-600">Scholarships Secured</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-orange-600 mb-2">4.9/5</div>
            <div className="text-gray-600">Average Rating</div>
          </div>
        </div>
      </div>
    </section>
  )
}
