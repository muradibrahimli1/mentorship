'use client'

import { ArrowRight, Mail, MapPin, Phone } from 'lucide-react'
import Link from 'next/link'

export default function CTASection() {
  return (
    <section className="bg-blue-600 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-white rounded-full translate-x-1/2 translate-y-1/2"></div>
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Ready to Start Your Study-Abroad Journey?
          </h2>
                      <p className="text-xl lg:text-2xl text-blue-100 max-w-3xl mx-auto mb-8">
              Join thousands of successful students who&apos;ve achieved their dreams with expert mentorship. 
              Start your free trial today and take the first step towards your future.
            </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="#pricing"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-full hover:bg-gray-100 transition-colors duration-200 shadow-lg hover:shadow-xl"
            >
              Start Free Trial
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              href="#how-it-works"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-semibold rounded-full hover:bg-white hover:text-blue-600 transition-colors duration-200"
            >
              Learn More
            </Link>
          </div>
        </div>

        {/* Contact Info */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mb-4">
              <Mail className="h-6 w-6" />
            </div>
            <h3 className="font-semibold mb-2">Email Us</h3>
            <p className="text-blue-100">hello@admitt.com</p>
          </div>
          
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mb-4">
              <Phone className="h-6 w-6" />
            </div>
            <h3 className="font-semibold mb-2">Call Us</h3>
            <p className="text-blue-100">+1 (555) 123-4567</p>
          </div>
          
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mb-4">
              <MapPin className="h-6 w-6" />
            </div>
            <h3 className="font-semibold mb-2">Visit Us</h3>
            <p className="text-blue-100">Toronto, Canada</p>
          </div>
        </div>

        {/* Footer Links */}
        <div className="border-t border-blue-500 mt-16 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-blue-100 mb-4 md:mb-0">
              © 2024 Admitt. All rights reserved.
            </div>
            
            <div className="flex space-x-6">
              <Link href="/terms" className="text-blue-100 hover:text-white transition-colors">
                Terms of Service
              </Link>
              <Link href="/privacy" className="text-blue-100 hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="/cookies" className="text-blue-100 hover:text-white transition-colors">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
