"use client";

import { useState, useEffect, Suspense } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter, useSearchParams } from 'next/navigation';
import MapView from './MapView';

interface TrackingStatus {
  id: string;
  status: 'assigned' | 'en_route' | 'arrived' | 'completed';
  estimatedArrival: string;
  driverName: string;
  vehicleType: string;
  currentLocation: string;
  customerLocation: string;
  startTime: string;
  lastUpdated: string;
}

// Mock tracking IDs and their data
const mockTrackingData: Record<string, TrackingStatus> = {
  'RRR123': {
    id: 'RRR123',
    status: 'en_route',
    estimatedArrival: '15 minutes',
    driverName: 'John Smith',
    vehicleType: 'Recovery Truck',
    currentLocation: 'Newport Road, Cardiff',
    customerLocation: 'M4 Junction 24, Newport',
    startTime: '10:30 AM',
    lastUpdated: '10:45 AM'
  },
  'RRR456': {
    id: 'RRR456',
    status: 'assigned',
    estimatedArrival: '25 minutes',
    driverName: 'Mike Johnson',
    vehicleType: 'Flatbed Truck',
    currentLocation: 'Preparing to depart',
    customerLocation: 'A48, Chepstow',
    startTime: '10:55 AM',
    lastUpdated: '10:55 AM'
  },
  'RRR789': {
    id: 'RRR789',
    status: 'arrived',
    estimatedArrival: 'Arrived',
    driverName: 'Sarah Williams',
    vehicleType: 'Recovery Van',
    currentLocation: 'With customer',
    customerLocation: 'B4245, Magor',
    startTime: '10:15 AM',
    lastUpdated: '10:40 AM'
  }
};

function TrackingContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [trackingId, setTrackingId] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [trackingData, setTrackingData] = useState<TrackingStatus | null>(null);
  const [error, setError] = useState<string | null>(null);

  // Load tracking data from URL parameter
  useEffect(() => {
    const code = searchParams.get('code');
    if (code) {
      setTrackingId(code);
      fetchTrackingData(code);
    }
  }, [searchParams]);

  // Simulate periodic updates
  useEffect(() => {
    if (!trackingData) return;

    const interval = setInterval(() => {
      setTrackingData(current => {
        if (!current) return null;

        // Simulate status progression
        if (current.status === 'assigned') {
          return {
            ...current,
            status: 'en_route',
            lastUpdated: new Date().toLocaleTimeString(),
            estimatedArrival: '20 minutes'
          };
        } else if (current.status === 'en_route') {
          return {
            ...current,
            lastUpdated: new Date().toLocaleTimeString(),
            estimatedArrival: '10 minutes'
          };
        }
        return current;
      });
    }, 15000); // Update every 15 seconds

    return () => clearInterval(interval);
  }, [trackingData]);

  const fetchTrackingData = (code: string) => {
    setIsLoading(true);
    setError(null);

    // Simulate API call
    setTimeout(() => {
      const data = mockTrackingData[code.toUpperCase()];
      if (data) {
        setTrackingData(data);
        setError(null);
      } else {
        setError('Invalid tracking ID. Please check and try again.');
        setTrackingData(null);
      }
      setIsLoading(false);
    }, 1500);
  };

  const handleTrack = (e: React.FormEvent) => {
    e.preventDefault();
    const code = trackingId.trim().toUpperCase();

    // Update URL with tracking code
    router.push(`/track?code=${code}`);
  };

  return (
    <section className="pt-32 pb-24 px-4">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 tracking-tight font-display">Track Your Recovery</h1>
          <p className="text-gray-400">
            Enter your tracking ID to see the status and location of your recovery vehicle.
          </p>
        </div>

        <form onSubmit={handleTrack} className="max-w-md mx-auto mb-12">
          <div className="flex flex-col sm:flex-row gap-4">
            <input
              type="text"
              value={trackingId}
              onChange={(e) => setTrackingId(e.target.value)}
              placeholder="Enter tracking ID (try RRR123)"
              className="flex-1 px-4 py-3 rounded-md border border-gray-800 bg-gray-900 text-gray-100 focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-colors placeholder-gray-500"
              required
            />
            <button
              type="submit"
              disabled={isLoading}
              className={`w-full sm:w-auto bg-purple-600 text-white px-8 py-3 rounded-md font-display font-semibold hover:bg-purple-700 transition-colors flex items-center justify-center gap-2 ${isLoading ? 'opacity-50 cursor-not-allowed' : ''
                }`}
            >
              {isLoading ? (
                <>
                  <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  <span>Tracking...</span>
                </>
              ) : (
                'Track'
              )}
            </button>
          </div>
          {error && (
            <p className="mt-2 text-red-400 text-sm">{error}</p>
          )}
        </form>

        {trackingData && (
          <div className="space-y-6">
            <div className="grid lg:grid-cols-5 gap-6">
              {/* Left Column - Status and Details */}
              <div className="lg:col-span-2 space-y-6">
                {/* Timeline */}
                <div className="bg-gray-900 border border-gray-800 rounded-lg p-6">
                  <div className="flex justify-between items-center mb-8">
                    <h2 className="text-2xl font-semibold font-display">Recovery Progress</h2>

                  </div>
                  <div className="relative">
                    <div className="absolute left-[17px] top-0 h-[calc(100%-2.25rem)] w-0.5 bg-gray-800"></div>
                    <div className="space-y-8 relative">
                      <div className="flex gap-4">
                        <div className={`w-9 h-9 rounded-full border-2 flex items-center justify-center shrink-0 
                          ${trackingData.status !== 'assigned' ? 'border-purple-500 bg-purple-900/50' : 'border-gray-700 bg-gray-900'}`}>
                          {trackingData.status !== 'assigned' ? (
                            <svg className="w-5 h-5 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                          ) : (
                            <div className="w-3 h-3 bg-gray-700 rounded-full"></div>
                          )}
                        </div>
                        <div>
                          <h3 className="font-semibold font-display">Recovery Assigned</h3>
                          <p className="text-sm text-gray-400">Recovery vehicle assigned and preparing for departure</p>
                          <p className="text-sm text-gray-500 mt-1">Started at {trackingData.startTime}</p>
                        </div>
                      </div>
                      <div className="flex gap-4">
                        <div className={`w-9 h-9 rounded-full border-2 flex items-center justify-center shrink-0 
                          ${trackingData.status === 'en_route' ? 'border-purple-500 bg-purple-900/50' :
                            trackingData.status === 'arrived' || trackingData.status === 'completed' ? 'border-purple-500 bg-purple-900/50' :
                              'border-gray-700 bg-gray-900'}`}>
                          {trackingData.status === 'en_route' ? (
                            <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                          ) : trackingData.status === 'arrived' || trackingData.status === 'completed' ? (
                            <svg className="w-5 h-5 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                          ) : (
                            <div className="w-3 h-3 bg-gray-700 rounded-full"></div>
                          )}
                        </div>
                        <div>
                          <h3 className="font-semibold font-display">En Route</h3>
                          <p className="text-sm text-gray-400">Recovery vehicle is on the way to your location</p>
                          <p className="text-sm text-gray-500 mt-1">ETA: {trackingData.estimatedArrival}</p>
                        </div>
                      </div>
                      <div className="flex gap-4">
                        <div className={`w-9 h-9 rounded-full border-2 flex items-center justify-center shrink-0 
                          ${trackingData.status === 'arrived' ? 'border-purple-500 bg-purple-900/50' : 'border-gray-700 bg-gray-900'}`}>
                          {trackingData.status === 'arrived' ? (
                            <svg className="w-5 h-5 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                          ) : (
                            <div className="w-3 h-3 bg-gray-700 rounded-full"></div>
                          )}
                        </div>
                        <div>
                          <h3 className="font-semibold font-display">Arrived</h3>
                          <p className="text-sm text-gray-400">Recovery vehicle has arrived at your location</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Driver and Vehicle Details */}
                <div className="bg-gray-900 border border-gray-800 rounded-lg p-6 mt-6">
                  <h3 className="text-lg font-semibold font-display mb-4">Recovery Details</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm text-gray-400">Driver Name</p>
                      <p className="font-medium">{trackingData.driverName}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-400">Vehicle Type</p>
                      <p className="font-medium">{trackingData.vehicleType}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-400">Current Location</p>
                      <p className="font-medium">{trackingData.currentLocation}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-400">Last Updated</p>
                      <p className="font-medium">{trackingData.lastUpdated}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column - Map */}
              <div className="lg:col-span-3">
                <div className="bg-gray-900 border border-gray-800 rounded-lg p-6 h-[500px]">
                  <Suspense fallback={
                    <div className="w-full h-full flex items-center justify-center">
                      <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-purple-500"></div>
                    </div>
                  }>
                    <MapView
                      customerLocation={trackingData.customerLocation}
                      vehicleLocation={trackingData.currentLocation}
                      isEnRoute={trackingData.status === 'en_route'}
                    />
                  </Suspense>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default function TrackPage() {
  return (
    <main className="min-h-screen bg-gray-950 text-gray-100">
      {/* Navigation */}
      <nav className="fixed w-full bg-gray-950/80 backdrop-blur-lg z-50 border-b border-gray-800">
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
            className="font-display hover:text-purple-400 transition-colors"
          >
            Back to Home
          </Link>
        </div>
      </nav>

      <Suspense fallback={
        <section className="pt-32 pb-24 px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-4 tracking-tight font-display">Loading...</h1>
          </div>
        </section>
      }>
        <TrackingContent />
      </Suspense>

      {/* Contact Info */}
      <section className="py-16 px-4 bg-purple-600 text-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-4 tracking-tight font-display">Need Immediate Assistance?</h2>
          <p className="text-gray-100 mb-8">
            Our team is available 24/7 for emergency recovery services.
          </p>
          <a
            href="tel:+1234567890"
            className="inline-flex items-center gap-2 bg-white text-purple-600 px-8 py-4 rounded-md font-display font-semibold hover:bg-gray-100 transition-colors"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            Call (123) 456-7890
          </a>
        </div>
      </section>
    </main>
  );
} 