"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

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

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle form submission
        console.log(formData);
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
                                className="bg-black text-white px-8 py-4 text-lg font-display font-semibold hover:bg-gray-900 transition-colors rounded-md inline-flex items-center gap-2"
                            >
                                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                                Submit Quote Request
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
                        href="tel:+1234567890"
                        className="inline-flex items-center gap-2 bg-white text-black px-8 py-4 rounded-md font-display font-semibold hover:bg-gray-100 transition-colors"
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