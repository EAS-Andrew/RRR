import Image from 'next/image';

export default function Footer() {
    return (
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
                            <li>24/7 Emergency: +447512640063</li>
                            <li>Email: info@rrrecovery.co.uk</li>
                            <li>Location: Pontypool</li>
                        </ul>
                    </div>
                </div>
                <div className="text-center text-gray-600 pt-8 border-t border-gray-100">
                    <p>© {new Date().getFullYear()} RRR. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}