import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'RRR - Professional Vehicle Recovery & Transportation Services',
  description: 'Reliable roadside recovery services available 24/7. Expert vehicle transportation, emergency breakdown assistance, and professional recovery solutions.',
  openGraph: {
    title: 'RRR - Professional Vehicle Recovery & Transportation Services',
    description: 'Reliable roadside recovery services available 24/7. Expert vehicle transportation, emergency breakdown assistance, and professional recovery solutions.',
    type: 'website',
    locale: 'en_GB',
    siteName: 'RRR Vehicle Recovery',
    images: [
      {
        url: '/logo.png',
        width: 512,
        height: 512,
        alt: 'RRR Vehicle Recovery Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'RRR - Professional Vehicle Recovery Services',
    description: 'Reliable roadside recovery services available 24/7. Expert vehicle transportation and emergency breakdown assistance.',
    images: ['/logo.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  keywords: [
    'vehicle recovery',
    'roadside assistance',
    'emergency breakdown recovery',
    'car transport service',
    'vehicle transportation',
    'accident recovery',
    '24/7 recovery service',
    'professional vehicle recovery',
    'motorcycle recovery',
    'van recovery',
    'classic car transport',
    'breakdown assistance',
  ],
  authors: [{ name: 'RRR Vehicle Recovery' }],
  creator: 'RRR Vehicle Recovery',
  publisher: 'RRR Vehicle Recovery',
  formatDetection: {
    email: false,
    address: true,
    telephone: true,
  },
  viewport: 'width=device-width, initial-scale=1',
  themeColor: '#000000',
  category: 'Vehicle Recovery Services',
  alternates: {
    canonical: 'https://www.rrrecovery.co.uk',
  },
  verification: {
    google: 'your-google-verification-code', // Replace with your verification code
  },
}; 