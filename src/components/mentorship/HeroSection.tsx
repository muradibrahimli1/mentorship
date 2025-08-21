'use client'

import { ArrowRight, Users, GraduationCap, Globe } from 'lucide-react'
import Link from 'next/link'

export default function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-blue-50 to-indigo-100 py-20 lg:py-32">
      <div className="absolute inset-0 bg-white/50"></div>
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Unlock Success with{' '}
                <span className="text-blue-600">Expert Mentorship</span>
              </h1>
              <p className="text-xl lg:text-2xl text-gray-600 leading-relaxed">
                Get personalized guidance from former international students who&apos;ve walked your path. 
                From university selection to visa approval, we&apos;re with you every step of the way.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="#pricing"
                className="inline-flex items-center justify-center px-8 py-4 bg-blue-600 text-white font-semibold rounded-full hover:bg-blue-700 transition-colors duration-200 shadow-lg hover:shadow-xl"
              >
                Start Free Trial
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                href="#how-it-works"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-gray-300 text-gray-700 font-semibold rounded-full hover:border-gray-400 hover:bg-gray-50 transition-colors duration-200"
              >
                Learn More
              </Link>
            </div>

            {/* Social proof */}
            <div className="flex items-center space-x-6 pt-4">
              <div className="flex items-center space-x-2">
                <Users className="h-5 w-5 text-blue-600" />
                <span className="text-sm text-gray-600">2,000+ students mentored</span>
              </div>
              <div className="flex items-center space-x-2">
                <GraduationCap className="h-5 w-5 text-green-600" />
                <span className="text-sm text-gray-600">95% success rate</span>
              </div>
            </div>
          </div>

          {/* Hero Illustration with Professional Headshot */}
          <div className="relative">
            {/* Professional Headshot */}
            <div className="relative z-20 mb-8 flex justify-center">
              <div className="w-48 h-48 rounded-full overflow-hidden shadow-2xl border-4 border-white">
                <img 
                  src="/images/mentor-headshot.png" 
                  alt="Professional study abroad mentor"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            
            {/* Study Abroad Success Card */}
            <div className="relative z-10 bg-white rounded-3xl p-8 shadow-2xl">
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <Globe className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Study Abroad Success</h3>
                    <p className="text-sm text-gray-600">Personalized roadmap</p>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-sm text-gray-700">University matching</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span className="text-sm text-gray-700">Scholarship guidance</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                    <span className="text-sm text-gray-700">Visa support</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                    <span className="text-sm text-gray-700">Application review</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Decorative elements - matching the image style */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-yellow-200 rounded-full opacity-40 blur-sm"></div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-pink-200 rounded-full opacity-40 blur-sm"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
