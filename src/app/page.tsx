import Image from "next/image";

export default function Home() {
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
          <button className="bg-black text-white px-4 py-2 text-sm font-display font-semibold hover:bg-gray-900 transition-colors">
            24/7 Emergency
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex flex-col justify-center items-center px-4 border-b border-gray-100 pt-16">
        <div className="relative w-48 h-48 mb-8">
          <Image
            src="/logo.png"
            alt="RRR Logo"
            fill
            className="object-contain"
            priority
          />
        </div>
        <p className="text-xl md:text-2xl text-gray-600 text-center max-w-2xl tracking-wide font-display">
          Rapid, Reliable, Recovery – Anytime, Anywhere!
        </p>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 px-4 max-w-6xl mx-auto scroll-mt-16">
        <h2 className="text-4xl font-bold mb-16 tracking-tight font-display">Services</h2>
        <div className="grid md:grid-cols-2 gap-12">
          <div className="group p-6 border border-gray-100 hover:border-gray-200 transition-colors">
            <h3 className="text-2xl font-semibold mb-4 font-display">Vehicle Recovery</h3>
            <ul className="space-y-2 text-gray-600">
              <li>Emergency breakdown recovery</li>
              <li>Accident recovery and transport</li>
              <li>Off-road vehicle recovery</li>
            </ul>
          </div>
          <div className="group p-6 border border-gray-100 hover:border-gray-200 transition-colors">
            <h3 className="text-2xl font-semibold mb-4 font-display">Vehicle Moving Services</h3>
            <ul className="space-y-2 text-gray-600">
              <li>Single or multiple vehicle transportation</li>
              <li>Long-distance vehicle moving</li>
              <li>Dealership and fleet vehicle logistics</li>
            </ul>
          </div>
          <div className="group p-6 border border-gray-100 hover:border-gray-200 transition-colors">
            <h3 className="text-2xl font-semibold mb-4 font-display">Roadside Assistance</h3>
            <ul className="space-y-2 text-gray-600">
              <li>Battery jump-starts</li>
              <li>Tire changes</li>
              <li>Fuel delivery</li>
            </ul>
          </div>
          <div className="group p-6 border border-gray-100 hover:border-gray-200 transition-colors">
            <h3 className="text-2xl font-semibold mb-4 font-display">Specialty Vehicle Handling</h3>
            <ul className="space-y-2 text-gray-600">
              <li>Motorcycles, vans, and classic cars</li>
              <li>Secure and insured transport</li>
              <li>High-value vehicle specialists</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Promise Section */}
      <section id="promise" className="py-24 px-4 bg-black text-white scroll-mt-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-16 tracking-tight font-display">Our Promise</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="p-6 border border-white/10 hover:border-white/20 transition-colors">
              <h3 className="text-2xl font-semibold mb-4 font-display">Fast Response</h3>
              <p className="text-gray-300">Available 24/7 for emergency assistance.</p>
            </div>
            <div className="p-6 border border-white/10 hover:border-white/20 transition-colors">
              <h3 className="text-2xl font-semibold mb-4 font-display">Reliability</h3>
              <p className="text-gray-300">Fully insured and equipped with the latest tools.</p>
            </div>
            <div className="p-6 border border-white/10 hover:border-white/20 transition-colors">
              <h3 className="text-2xl font-semibold mb-4 font-display">Professionalism</h3>
              <p className="text-gray-300">Trained and experienced drivers who treat every vehicle with care.</p>
            </div>
            <div className="p-6 border border-white/10 hover:border-white/20 transition-colors">
              <h3 className="text-2xl font-semibold mb-4 font-display">Transparency</h3>
              <p className="text-gray-300">Competitive pricing with no hidden fees.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-4 scroll-mt-16">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8 tracking-tight font-display">Need Assistance?</h2>
          <p className="text-xl text-gray-600 mb-8">
            Whether you&apos;re stranded on the road or need professional vehicle logistics,
            we&apos;re your trusted partner for dependable service.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <button className="bg-black text-white px-8 py-4 text-lg font-display font-semibold hover:bg-gray-900 transition-colors">
              Contact Us
            </button>
            <button className="border border-black px-8 py-4 text-lg font-display font-semibold hover:bg-black hover:text-white transition-colors">
              Request Quote
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-gray-100">
        <div className="max-w-6xl mx-auto text-center text-gray-600">
          <p>© {new Date().getFullYear()} RRR. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}
