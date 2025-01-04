"use client";

import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <main className="min-h-screen bg-white text-black">
      {/* Navigation */}
      <nav className="fixed w-full bg-white/80 backdrop-blur-sm z-50 border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          <a href="#" className="relative w-12 h-12">
            <Image
              src="/logo.png"
              alt="RRR Logo"
              fill
              className="object-contain"
              priority
            />
          </a>
          <div className="hidden md:flex gap-8">
            <a href="#services" className="font-display hover:text-gray-600 transition-colors">Services</a>
            <a href="#promise" className="font-display hover:text-gray-600 transition-colors">Our Promise</a>
            <a href="#contact" className="font-display hover:text-gray-600 transition-colors">Contact</a>
          </div>
          <div className="flex items-center gap-4">
            <button className="bg-black text-white px-4 py-2 text-sm font-display font-semibold hover:bg-gray-900 transition-colors">
              24/7 Emergency
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 hover:bg-gray-100 rounded-md transition-colors"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden ${isMobileMenuOpen ? 'block' : 'hidden'} border-t border-gray-100 bg-white/80 backdrop-blur-sm`}>
          <div className="px-4 py-2 space-y-1">
            <a href="#services" className="block py-2 px-4 font-display hover:bg-gray-100 rounded-md transition-colors">Services</a>
            <a href="#promise" className="block py-2 px-4 font-display hover:bg-gray-100 rounded-md transition-colors">Our Promise</a>
            <a href="#contact" className="block py-2 px-4 font-display hover:bg-gray-100 rounded-md transition-colors">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex flex-col justify-center items-center px-4 border-b border-gray-100 pt-16 bg-gradient-to-b from-white to-gray-50">
        <div className="relative w-48 h-48 mb-8 opacity-0 animate-fade-in" style={{ animationDelay: '0.2s' }}>
          <Image
            src="/logo.png"
            alt="RRR Logo"
            fill
            className="object-contain animate-float"
            priority
          />
        </div>
        <div className="text-center opacity-0 animate-fade-in" style={{ animationDelay: '0.5s' }}>
          <p className="text-3xl md:text-4xl font-display font-bold tracking-tight">
            Reliable Roadside Recovery
          </p>
        </div>
        <div className="mt-12 flex flex-col sm:flex-row gap-4 opacity-0 animate-fade-in" style={{ animationDelay: '0.8s' }}>
          <a href="#contact" className="bg-black text-white px-8 py-4 text-lg font-display font-semibold hover:bg-gray-900 transition-colors rounded-md">
            Get Help Now
          </a>
          <a href="#services" className="border border-black px-8 py-4 text-lg font-display font-semibold hover:bg-black hover:text-white transition-colors rounded-md">
            Our Services
          </a>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 px-4 max-w-6xl mx-auto scroll-mt-16">
        <h2 className="text-4xl font-bold mb-16 tracking-tight font-display text-center">Our Services</h2>
        <div className="grid md:grid-cols-2 gap-12">
          <div className="group p-6 border border-gray-100 hover:border-gray-200 transition-colors rounded-lg hover:shadow-lg">
            <h3 className="text-2xl font-semibold mb-4 font-display">Vehicle Recovery</h3>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-center gap-2">
                <svg className="w-5 h-5 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Emergency breakdown recovery
              </li>
              <li className="flex items-center gap-2">
                <svg className="w-5 h-5 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Accident recovery and transport
              </li>
              <li className="flex items-center gap-2">
                <svg className="w-5 h-5 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Off-road vehicle recovery
              </li>
            </ul>
          </div>
          <div className="group p-6 border border-gray-100 hover:border-gray-200 transition-colors rounded-lg hover:shadow-lg">
            <h3 className="text-2xl font-semibold mb-4 font-display">Vehicle Moving Services</h3>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-center gap-2">
                <svg className="w-5 h-5 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Single or multiple vehicle transportation
              </li>
              <li className="flex items-center gap-2">
                <svg className="w-5 h-5 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Long-distance vehicle moving
              </li>
              <li className="flex items-center gap-2">
                <svg className="w-5 h-5 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Dealership and fleet vehicle logistics
              </li>
            </ul>
          </div>
          <div className="group p-6 border border-gray-100 hover:border-gray-200 transition-colors rounded-lg hover:shadow-lg">
            <h3 className="text-2xl font-semibold mb-4 font-display">Roadside Assistance</h3>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-center gap-2">
                <svg className="w-5 h-5 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Battery jump-starts
              </li>
              <li className="flex items-center gap-2">
                <svg className="w-5 h-5 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Tire changes
              </li>
              <li className="flex items-center gap-2">
                <svg className="w-5 h-5 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Fuel delivery
              </li>
            </ul>
          </div>
          <div className="group p-6 border border-gray-100 hover:border-gray-200 transition-colors rounded-lg hover:shadow-lg">
            <h3 className="text-2xl font-semibold mb-4 font-display">Specialty Vehicle Handling</h3>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-center gap-2">
                <svg className="w-5 h-5 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Motorcycles, vans, and classic cars
              </li>
              <li className="flex items-center gap-2">
                <svg className="w-5 h-5 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Secure and insured transport
              </li>
              <li className="flex items-center gap-2">
                <svg className="w-5 h-5 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                High-value vehicle specialists
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Promise Section */}
      <section id="promise" className="py-24 px-4 bg-black text-white scroll-mt-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-16 tracking-tight font-display text-center">Our Promise</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="p-8 border border-white/10 hover:border-white/20 transition-colors rounded-lg hover:bg-white/5">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold font-display">Fast Response</h3>
              </div>
              <p className="text-gray-300">Available 24/7 for emergency assistance.</p>
            </div>
            <div className="p-8 border border-white/10 hover:border-white/20 transition-colors rounded-lg hover:bg-white/5">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold font-display">Reliability</h3>
              </div>
              <p className="text-gray-300">Fully insured and equipped with the latest tools.</p>
            </div>
            <div className="p-8 border border-white/10 hover:border-white/20 transition-colors rounded-lg hover:bg-white/5">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold font-display">Professionalism</h3>
              </div>
              <p className="text-gray-300">Trained and experienced drivers who treat every vehicle with care.</p>
            </div>
            <div className="p-8 border border-white/10 hover:border-white/20 transition-colors rounded-lg hover:bg-white/5">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold font-display">Transparency</h3>
              </div>
              <p className="text-gray-300">Competitive pricing with no hidden fees.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-4 scroll-mt-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8 tracking-tight font-display">Need Assistance?</h2>
          <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
            Whether you&apos;re stranded on the road or need professional vehicle logistics,
            we&apos;re your trusted partner for dependable service.
          </p>
          <div className="flex flex-col md:flex-row gap-6 justify-center max-w-xl mx-auto">
            <a href="tel:+1234567890" className="flex-1 bg-black text-white px-8 py-4 text-lg font-display font-semibold hover:bg-gray-900 transition-colors rounded-md flex items-center justify-center gap-2">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Call Now
            </a>
            <button className="flex-1 border border-black px-8 py-4 text-lg font-display font-semibold hover:bg-black hover:text-white transition-colors rounded-md flex items-center justify-center gap-2">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Request Quote
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 border-t border-gray-100">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="relative w-16 h-16 mb-4">
                <Image
                  src="/logo.png"
                  alt="RRR Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <p className="text-gray-600">Professional vehicle recovery and transportation services.</p>
            </div>
            <div>
              <h4 className="font-display font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-600">
                <li><a href="#services" className="hover:text-black transition-colors">Services</a></li>
                <li><a href="#promise" className="hover:text-black transition-colors">Our Promise</a></li>
                <li><a href="#contact" className="hover:text-black transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-display font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-600">
                <li>Vehicle Recovery</li>
                <li>Vehicle Moving</li>
                <li>Roadside Assistance</li>
              </ul>
            </div>
            <div>
              <h4 className="font-display font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-gray-600">
                <li>24/7 Emergency: (123) 456-7890</li>
                <li>Email: info@rrr.com</li>
                <li>Location: Your City, State</li>
              </ul>
            </div>
          </div>
          <div className="text-center text-gray-600 pt-8 border-t border-gray-100">
            <p>© {new Date().getFullYear()} RRR. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
