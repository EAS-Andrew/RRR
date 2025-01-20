"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Footer from "../components/Footer";

export default function QuotePage() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        vehicleType: "",
        pickupLocation: "",
        dropoffLocation: "",
        date: "",
        additionalInfo: "",
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<{ type: 'success' | 'error' | null; message: string }>({
        type: null,
        message: ''
    });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus({ type: null, message: '' });

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
                body: JSON.stringify({
                    access_key: "YOUR_ACCESS_KEY_HERE", // Replace with your actual access key
                    ...formData,
                    subject: "New Quote Request from RRR Website",
                }),
            });

            const result = await response.json();
            if (result.success) {
                setSubmitStatus({
                    type: 'success',
                    message: 'Thank you! Your quote request has been submitted successfully.'
                });
                setFormData({
                    name: "",
                    email: "",
                    phone: "",
                    vehicleType: "",
                    pickupLocation: "",
                    dropoffLocation: "",
                    date: "",
                    additionalInfo: "",
                });
            } else {
                throw new Error('Submission failed');
            }
        } catch {
            setSubmitStatus({
                type: 'error',
                message: 'Sorry, there was an error submitting your request. Please try again or contact us directly.'
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    return (
        <main className="min-h-screen bg-white text-black">
            {/* Navigation */}
            <nav className="fixed w-full bg-white/80 backdrop-blur-sm z-50 border-b border-gray-100">
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

            {/* Quote Form Section */}
            <section className="pt-32 pb-24 px-4">
                <div className="max-w-3xl mx-auto">
                    <div className="text-center mb-12 opacity-0 animate-fade-in">
                        <h1 className="text-4xl font-bold mb-4 tracking-tight font-display">Request a Quote</h1>
                        <p className="text-gray-600">
                            Fill out the form below and we&apos;ll get back to you with a detailed quote for our services.
                        </p>
                    </div>

                    {submitStatus.type && (
                        <div className={`mb-8 p-4 rounded-md ${submitStatus.type === 'success' ? 'bg-green-50 text-green-800' : 'bg-red-50 text-red-800'
                            }`}>
                            <p className="text-center font-display">{submitStatus.message}</p>
                        </div>
                    )}

                    <form onSubmit={handleSubmit} className="space-y-8 opacity-0 animate-fade-in" style={{ animationDelay: '0.2s' }}>
                        <div className="grid md:grid-cols-2 gap-8">
                            <div className="space-y-4">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-display font-semibold mb-2">Full Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 rounded-md border border-gray-200 focus:border-black focus:ring-1 focus:ring-black transition-colors"
                                        required
                                    />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-display font-semibold mb-2">Email Address</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 rounded-md border border-gray-200 focus:border-black focus:ring-1 focus:ring-black transition-colors"
                                        required
                                    />
                                </div>
                                <div>
                                    <label htmlFor="phone" className="block text-sm font-display font-semibold mb-2">Phone Number</label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 rounded-md border border-gray-200 focus:border-black focus:ring-1 focus:ring-black transition-colors"
                                        required
                                    />
                                </div>
                                <div>
                                    <label htmlFor="vehicleType" className="block text-sm font-display font-semibold mb-2">Vehicle Type</label>
                                    <select
                                        id="vehicleType"
                                        name="vehicleType"
                                        value={formData.vehicleType}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 rounded-md border border-gray-200 focus:border-black focus:ring-1 focus:ring-black transition-colors"
                                        required
                                    >
                                        <option value="">Select vehicle type</option>
                                        <option value="car">Car</option>
                                        <option value="motorcycle">Motorcycle</option>
                                        <option value="van">Van</option>
                                        <option value="truck">Truck</option>
                                        <option value="other">Other</option>
                                    </select>
                                </div>
                            </div>

                            <div className="space-y-4">
                                <div>
                                    <label htmlFor="pickupLocation" className="block text-sm font-display font-semibold mb-2">Pickup Location</label>
                                    <input
                                        type="text"
                                        id="pickupLocation"
                                        name="pickupLocation"
                                        value={formData.pickupLocation}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 rounded-md border border-gray-200 focus:border-black focus:ring-1 focus:ring-black transition-colors"
                                        required
                                    />
                                </div>
                                <div>
                                    <label htmlFor="dropoffLocation" className="block text-sm font-display font-semibold mb-2">Dropoff Location</label>
                                    <input
                                        type="text"
                                        id="dropoffLocation"
                                        name="dropoffLocation"
                                        value={formData.dropoffLocation}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 rounded-md border border-gray-200 focus:border-black focus:ring-1 focus:ring-black transition-colors"
                                        required
                                    />
                                </div>
                                <div>
                                    <label htmlFor="date" className="block text-sm font-display font-semibold mb-2">Preferred Date</label>
                                    <input
                                        type="date"
                                        id="date"
                                        name="date"
                                        value={formData.date}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 rounded-md border border-gray-200 focus:border-black focus:ring-1 focus:ring-black transition-colors"
                                        required
                                    />
                                </div>
                                <div>
                                    <label htmlFor="additionalInfo" className="block text-sm font-display font-semibold mb-2">Additional Information</label>
                                    <textarea
                                        id="additionalInfo"
                                        name="additionalInfo"
                                        value={formData.additionalInfo}
                                        onChange={handleChange}
                                        rows={4}
                                        className="w-full px-4 py-3 rounded-md border border-gray-200 focus:border-black focus:ring-1 focus:ring-black transition-colors resize-none"
                                    ></textarea>
                                </div>
                            </div>
                        </div>

                        <div className="flex justify-center pt-8">
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className={`bg-black text-white px-8 py-4 text-lg font-display font-semibold hover:bg-gray-900 transition-colors rounded-md inline-flex items-center gap-2 ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
                                    }`}
                            >
                                {isSubmitting ? (
                                    <>
                                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                        </svg>
                                        Submitting...
                                    </>
                                ) : (
                                    <>
                                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                        </svg>
                                        Submit Quote Request
                                    </>
                                )}
                            </button>
                        </div>
                    </form>
                </div>
            </section>

            {/* Contact Info */}
            <section className="py-16 px-4 bg-black text-white">
                <div className="max-w-3xl mx-auto text-center">
                    <h2 className="text-2xl font-bold mb-4 tracking-tight font-display">Need Immediate Assistance?</h2>
                    <p className="text-gray-300 mb-8">
                        Our team is available 24/7 for emergency recovery services.
                    </p>
                    <a
                        href="tel:+447512640063"
                        className="inline-flex items-center gap-2 bg-white text-black px-8 py-4 rounded-md font-display font-semibold hover:bg-gray-100 transition-colors"
                    >
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                        Call +447512640063
                    </a>
                </div>
            </section>

            {/* Footer */}
            <Footer />
        </main>
    );
} 