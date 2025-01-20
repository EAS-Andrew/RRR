'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function NotFound() {
  return (
    <main className="min-h-screen bg-white text-black">
      {/* Navigation */}
      <nav className="fixed w-full bg-white z-50 border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          <Link href="/" className="relative w-12 h-12">
            <Image
              src="/logo.png"
              alt="RRR Logo"
              fill
              className="object-contain"
              priority
            />
          </Link>
          <Link
            href="/"
            className="font-display hover:text-gray-600 transition-colors"
          >
            Back to Home
          </Link>
        </div>
      </nav>

      {/* 404 Content */}
      <section className="pt-32 pb-24 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-8xl font-bold mb-4 tracking-tight font-display">404</h1>
          <h2 className="text-2xl font-bold mb-8 tracking-tight font-display">Page Not Found</h2>
          <p className="text-gray-600 mb-12">
            The page you&apos;re looking for doesn&apos;t exist or has been moved.
          </p>
          <Link
            href="/"
            className="inline-flex items-center gap-2 bg-black text-white px-8 py-4 rounded-md font-display font-semibold hover:bg-gray-900 transition-colors"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Return Home
          </Link>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-16 px-4 bg-black text-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-4 tracking-tight font-display">Need Help?</h2>
          <p className="text-gray-300 mb-8">
            If you need immediate assistance, we&apos;re here to help.
          </p>
          <a
            href="tel:07512640063"
            className="inline-flex items-center gap-2 bg-white text-black px-8 py-4 rounded-md font-display font-semibold hover:bg-gray-100 transition-colors"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            Call 07512640063
          </a>
        </div>
      </section>
    </main>
  );
} 