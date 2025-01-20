"use client";

import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
import Footer from "./components/Footer";

export default function Home() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  const [isTrackingBannerVisible, setIsTrackingBannerVisible] = useState(true);

  const toggleFaq = (index: number) => {
    setExpandedFaq(expandedFaq === index ? null : index);
  };

  return (
    <main className="min-h-screen bg-white text-black">
      {/* Tracking Banner */}
      {isTrackingBannerVisible && (
        <div className="fixed w-full bg-black text-white z-[60] top-0">
          <div className="max-w-6xl mx-auto px-4 py-2 flex items-center justify-between">
            <p className="text-sm font-medium">
              Track your recovery vehicle in real-time
            </p>
            <div className="flex items-center gap-4">
              <Link
                href="/track"
                className="text-sm font-semibold hover:text-gray-300 transition-colors flex items-center gap-1"
              >
                Track Now
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
              <button
                onClick={() => setIsTrackingBannerVisible(false)}
                className="text-white hover:text-gray-300 transition-colors"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Navigation */}
      <nav className={`fixed w-full bg-white z-50 border-b border-gray-100 ${isTrackingBannerVisible ? 'top-8' : 'top-0'}`}>
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
            <a href="tel:+447512640063" className="bg-black text-white px-4 py-2 text-sm font-display font-semibold hover:bg-gray-900 transition-colors">
              24/7 Emergency
            </a>
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
        <div className={`md:hidden ${isMobileMenuOpen ? 'block' : 'hidden'} border-t border-gray-100 bg-white`}>
          <div className="px-4 py-2 space-y-1">
            <a href="#services" className="block py-2 px-4 font-display hover:bg-gray-100 rounded-md transition-colors">Services</a>
            <a href="#promise" className="block py-2 px-4 font-display hover:bg-gray-100 rounded-md transition-colors">Our Promise</a>
            <a href="#contact" className="block py-2 px-4 font-display hover:bg-gray-100 rounded-md transition-colors">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className={`min-h-[90vh] md:min-h-screen flex flex-col justify-center items-center px-4 border-b border-gray-100 ${isTrackingBannerVisible ? 'pt-32' : 'pt-24'} md:pt-16 bg-gradient-to-b from-white to-gray-50`}>
        <div className="w-full max-w-6xl mx-auto flex flex-col-reverse lg:flex-row items-center justify-between gap-8 lg:gap-16">
          <div className="flex-1 text-center lg:text-left opacity-0 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold tracking-tight mb-4 md:mb-6">
              Reliable Roadside Recovery
            </h1>
            <p className="text-base md:text-lg text-gray-600 mb-6 md:mb-8 max-w-xl mx-auto lg:mx-0">
              Professional vehicle recovery and transportation services available 24/7. Your trusted partner on the road.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
              <a href="#contact" className="bg-black text-white px-6 py-3 md:px-8 md:py-4 text-base md:text-lg font-display font-semibold hover:bg-gray-900 transition-colors rounded-md">
                Get Help Now
              </a>
              <a href="#services" className="border border-black px-6 py-3 md:px-8 md:py-4 text-base md:text-lg font-display font-semibold hover:bg-black hover:text-white transition-colors rounded-md">
                Our Services
              </a>
            </div>
          </div>
          <div className="w-full lg:w-[45%] relative h-52 sm:h-72 md:h-96 opacity-0 animate-fade-in" style={{ animationDelay: '0.5s' }}>
            <div className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-transparent z-10 pointer-events-none" />
            <Image
              src="/van.png"
              alt="RRR Recovery Van"
              fill
              className="object-contain object-center"
              priority
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 45vw, 600px"
            />
          </div>
        </div>
      </section>

      {/* Tracking Banner */}
      <section className="py-12 bg-black text-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold font-display mb-2">Track Your Recovery</h2>
              <p className="text-gray-300">Follow your recovery vehicle in real-time</p>
            </div>
            <Link
              href="/track"
              className="bg-white text-black px-8 py-4 text-lg font-display font-semibold hover:bg-gray-100 transition-colors rounded-md flex items-center gap-2"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
              Track Now
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 px-4 max-w-6xl mx-auto scroll-mt-16 bg-white">
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

      {/* FAQ Section */}
      <section className="py-24 px-4 bg-white scroll-mt-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-16 tracking-tight font-display text-center">Frequently Asked Questions</h2>
          <div className="space-y-3">
            {[
              {
                question: "How quickly can you respond to an emergency?",
                answer: "We aim to reach you within 30-60 minutes in emergency situations, depending on your location and traffic conditions. Our 24/7 service ensures we're always ready to help."
              },
              {
                question: "What areas do you cover?",
                answer: "We provide comprehensive coverage across Uskvale and surrounding areas. For specific location queries, please contact our team."
              },
              {
                question: "Are you fully insured?",
                answer: "Yes, we are fully insured for vehicle recovery and transportation. Our comprehensive insurance coverage protects your vehicle during the entire recovery and transportation process."
              },
              {
                question: "What payment methods do you accept?",
                answer: "We accept all major credit/debit cards, cash, and bank transfers. For corporate clients, we can arrange account-based billing."
              },
              {
                question: "Do you handle specialist vehicles?",
                answer: "Yes, we have experience with a wide range of vehicles including classic cars, motorcycles, and high-performance vehicles. Our team is trained to handle specialist vehicles with extra care."
              },
              {
                question: "What should I do while waiting for recovery?",
                answer: "Ensure you're in a safe position, ideally away from moving traffic. Turn on your hazard lights and place a warning triangle if available. Our team will guide you through any specific safety measures when you call."
              }
            ].map((faq, index) => (
              <div key={index} className="border border-gray-100 rounded-lg overflow-hidden">
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full p-4 text-left bg-gray-50 hover:bg-gray-100 transition-colors flex items-center justify-between"
                >
                  <h3 className="text-lg font-semibold font-display">{faq.question}</h3>
                  <svg
                    className={`w-5 h-5 transform transition-transform ${expandedFaq === index ? 'rotate-180' : ''}`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div
                  className={`overflow-hidden transition-all duration-200 ${expandedFaq === index ? 'max-h-48' : 'max-h-0'
                    }`}
                >
                  <p className="p-4 text-gray-600 bg-white">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-4 scroll-mt-16 bg-gray-50">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8 tracking-tight font-display">Need Assistance?</h2>
          <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
            Whether you&apos;re stranded on the road or need professional vehicle logistics,
            we&apos;re your trusted partner for dependable service.
          </p>
          <div className="flex flex-col md:flex-row gap-6 justify-center max-w-xl mx-auto">
            <a href="tel:+447512640063" className="flex-1 bg-black text-white px-8 py-4 text-lg font-display font-semibold hover:bg-gray-900 transition-colors rounded-md flex items-center justify-center gap-2">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Call Now
            </a>
            <Link
              href="/quote"
              className="flex-1 border border-black px-8 py-4 text-lg font-display font-semibold hover:bg-black hover:text-white transition-colors rounded-md flex items-center justify-center gap-2"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Request Quote
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </main>
  );
}
