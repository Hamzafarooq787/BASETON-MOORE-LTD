import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[700px] md:min-h-[870px] flex items-center overflow-hidden pt-12 md:pt-0">
        <div className="absolute inset-0 z-0">
          <img
            className="w-full h-full object-cover"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBRgal42RoXZOwyCMVkYrmxtYbyKla3pie7WlDpr6uXOR6I58DB5EaA5qAfVE343LeAXsBDHwwCsC2OTCGGD0dR4-MCtZUo8aZv7bOP-AAASAq3aHHBMms6II0yT8Cfa8wYGBxzYhFkzrz07whikLGMo9PlexYTtsLQMk0Z1IM07LRli4AXEzmeBNIiG1AzT1nxEuRd1EU63tVq8oKkbtCgu1zCTGFzbcPg1kOlkPDksLT96bV07ctzmGad2gQehs63plZXwdZZHkps"
            alt="Sustainable residence"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#fff8f2]/90 via-[#fff8f2]/40 to-transparent"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full">
          <div className="max-w-2xl space-y-6">
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-[#92f7c3] text-[#00734d] rounded-full text-xs font-semibold tracking-wide">
              <span className="material-symbols-outlined text-[18px]">eco</span>
              Sustainable Excellence
            </span>
            <h1 className="font-['Manrope'] text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-[#004d67]">
              Building a Greener Future, Together.
            </h1>
            <p className="text-base sm:text-lg font-normal text-[#3f484d] max-w-xl">
              We blend meticulous craftsmanship with organic sustainability to create structures that anchor communities while respecting the earth.
            </p>
            <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 pt-4">
              <Link href="/services" className="bg-[#006485] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl text-sm font-medium shadow-lg shadow-[#006485]/20 hover:shadow-xl hover:-translate-y-0.5 transition-all text-center">
                View Our Services
              </Link>
              <Link href="/about" className="border-2 border-[#006c48] text-[#006c48] px-6 sm:px-8 py-3 sm:py-4 rounded-xl text-sm font-medium hover:bg-[#006c48]/5 transition-all text-center">
                Our Impact
              </Link>
            </div>
          </div>
        </div>
      </section>

             {/* Services Section - Compact Design */}
      <section className="py-16 max-w-6xl mx-auto px-6 md:px-8">
        <div className="text-center mb-12">
          <h2 className="font-['Manrope'] text-3xl md:text-4xl font-bold text-[#006485] mb-2">
            Our Core Capabilities
          </h2>
          <div className="w-20 h-0.5 bg-[#006c48] mx-auto rounded-full mb-4"></div>
          <p className="text-[#3f484d] max-w-xl mx-auto">
            Sustainable solutions delivered with precision.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition p-5">
            <div className="bg-[#c1e8ff] w-12 h-12 rounded-lg flex items-center justify-center mb-3">
              <span className="material-symbols-outlined text-[#006485] text-2xl">architecture</span>
            </div>
            <h3 className="font-['Manrope'] text-xl font-bold text-[#006485] mb-1">Eco Architecture</h3>
            <p className="text-sm text-[#3f484d]">Passive house & LEED certified designs that last generations.</p>
          </div>
          {/* Card 2 */}
          <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition p-5">
            <div className="bg-[#92f7c3] w-12 h-12 rounded-lg flex items-center justify-center mb-3">
              <span className="material-symbols-outlined text-[#006c48] text-2xl">solar_power</span>
            </div>
            <h3 className="font-['Manrope'] text-xl font-bold text-[#006485] mb-1">Renewable Integration</h3>
            <p className="text-sm text-[#3f484d]">Solar, geothermal & wind energy systems seamlessly installed.</p>
          </div>
          {/* Card 3 */}
          <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition p-5">
            <div className="bg-[#f9f2ec] w-12 h-12 rounded-lg flex items-center justify-center mb-3">
              <span className="material-symbols-outlined text-[#006485] text-2xl">foundation</span>
            </div>
            <h3 className="font-['Manrope'] text-xl font-bold text-[#006485] mb-1">Green Foundations</h3>
            <p className="text-sm text-[#3f484d]">Carbon-neutral concrete & ethically sourced materials.</p>
          </div>
        </div>
      </section>

             {/* Values Section - Compact & Balanced */}
      <section className="bg-gradient-to-r from-[#ede7e1] to-[#f3ede7] py-16">
        <div className="max-w-6xl mx-auto px-6 md:px-8">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="w-full md:w-2/5">
              <img
                className="rounded-xl shadow-lg w-full object-cover h-64 md:h-72"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCsvQRsqLif3RpfPzfLZ9NpNfCWyS2hSixi-FAjh0j5U6KkxKsiGq_-gQ4D-ZHb8EzCZtf0kwW4M5UWF2lKwFwE4VOrKIMeGHR2yT1IeVq6ikLbwTh6M8pV_mGOILjOhutq2KHDeTT1_PBvdDy6sGY7Vj1IQv71_a3kYUzAUQU01rSVs3a7Hi9kV-JBSeNz9R7yuxX-S7To-TERvwJSAYBGmQeKH3cHnUAq0EWRf5VxLr_NMGK811RXv5tmzGqJOT8gyFe5sOdVM5M6"
                alt="Sustainable construction"
              />
            </div>
            <div className="w-full md:w-3/5 space-y-4">
              <div className="inline-flex items-center gap-2 bg-[#006c48]/10 px-3 py-1 rounded-full">
                <span className="material-symbols-outlined text-[#006c48] text-sm">forest</span>
                <span className="text-[#006c48] text-xs font-semibold tracking-wide">Our Philosophy</span>
              </div>
              <h2 className="font-['Manrope'] text-3xl md:text-4xl font-bold text-[#006485]">
                Rooted in <span className="text-[#006c48]">Reliability</span>
              </h2>
              <p className="text-[#3f484d] leading-relaxed">
                At BASETON MOORE LTD, we anchor visions in reality. Our <strong>"Earth &amp; Anchor"</strong> philosophy ensures every project is sustainable without compromising structural integrity.
              </p>
              <div className="grid grid-cols-2 gap-4 pt-2">
                <div className="bg-white/70 rounded-lg p-3 text-center shadow-sm">
                  <div className="text-2xl font-['Manrope'] font-bold text-[#006485]">15+</div>
                  <div className="text-xs text-[#3f484d]">Years</div>
                </div>
                <div className="bg-white/70 rounded-lg p-3 text-center shadow-sm">
                  <div className="text-2xl font-['Manrope'] font-bold text-[#006485]">100%</div>
                  <div className="text-xs text-[#3f484d]">Green Materials</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-20">
          <h2 className="font-['Manrope'] text-3xl md:text-4xl font-semibold text-[#006485] mb-4">Why Choose Us</h2>
          <div className="w-24 h-1 bg-[#006c48] mx-auto rounded-full"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center p-6 bg-[#f9f2ec] rounded-xl shadow-sm">
            <span className="material-symbols-outlined text-5xl text-[#006485]">verified</span>
            <h3 className="font-['Manrope'] text-2xl font-semibold text-[#006485] mt-4">Certified Experts</h3>
            <p className="text-[#3f484d] mt-2">LEED & Passive House certified professionals.</p>
          </div>
          <div className="text-center p-6 bg-[#f9f2ec] rounded-xl shadow-sm">
            <span className="material-symbols-outlined text-5xl text-[#006485]">recycling</span>
            <h3 className="font-['Manrope'] text-2xl font-semibold text-[#006485] mt-4">Zero Waste Goal</h3>
            <p className="text-[#3f484d] mt-2">We recycle & repurpose over 95% of construction waste.</p>
          </div>
          <div className="text-center p-6 bg-[#f9f2ec] rounded-xl shadow-sm">
            <span className="material-symbols-outlined text-5xl text-[#006485]">handshake</span>
            <h3 className="font-['Manrope'] text-2xl font-semibold text-[#006485] mt-4">End-to-End Service</h3>
            <p className="text-[#3f484d] mt-2">From design to maintenance – we handle everything.</p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-[#ede7e1] py-20">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center mb-20">
            <h2 className="font-['Manrope'] text-3xl md:text-4xl font-semibold text-[#006485] mb-4">What Our Clients Say</h2>
            <div className="w-24 h-1 bg-[#006c48] mx-auto rounded-full"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-[#fff8f2] p-6 rounded-xl shadow-md border border-[#f3ede7]">
              <span className="material-symbols-outlined text-[#006c48] text-3xl">format_quote</span>
              <p className="text-lg text-[#3f484d] mt-2 italic">"Baseton Moore transformed our vision into a net-zero masterpiece. Their attention to sustainability is unmatched."</p>
              <div className="flex items-center gap-3 mt-4">
                <span className="material-symbols-outlined text-[#006485]">account_circle</span>
                <div>
                  <div className="font-bold text-[#006485]">Sarah Johnson</div>
                  <div className="text-xs font-semibold tracking-wide text-[#3f484d]">Eco-Home Owner</div>
                </div>
              </div>
            </div>
            <div className="bg-[#fff8f2] p-6 rounded-xl shadow-md border border-[#f3ede7]">
              <span className="material-symbols-outlined text-[#006c48] text-3xl">format_quote</span>
              <p className="text-lg text-[#3f484d] mt-2 italic">"Professional, reliable, and genuinely green. They helped us achieve LEED Platinum certification."</p>
              <div className="flex items-center gap-3 mt-4">
                <span className="material-symbols-outlined text-[#006485]">business</span>
                <div>
                  <div className="font-bold text-[#006485]">Michael Chen</div>
                  <div className="text-xs font-semibold tracking-wide text-[#3f484d]">GreenSpace Developers</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Accordion */}
      <section className="py-20 max-w-5xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="font-['Manrope'] text-3xl md:text-4xl font-semibold text-[#006485] mb-4">Frequently Asked Questions</h2>
          <div className="w-24 h-1 bg-[#006c48] mx-auto rounded-full"></div>
        </div>
        <div className="space-y-4">
          <details className="group bg-[#f9f2ec] rounded-xl p-4 shadow-sm">
            <summary className="font-['Manrope'] text-xl font-semibold text-[#006485] cursor-pointer list-none flex justify-between items-center">
              What makes your construction eco-friendly?
              <span className="material-symbols-outlined group-open:rotate-180 transition-transform">expand_more</span>
            </summary>
            <p className="text-[#3f484d] mt-3 pl-2">We use sustainable materials like cross-laminated timber, recycled aggregates, and carbon-neutral concrete. Plus, we integrate renewable energy systems and passive designs.</p>
          </details>
          <details className="group bg-[#f9f2ec] rounded-xl p-4 shadow-sm">
            <summary className="font-['Manrope'] text-xl font-semibold text-[#006485] cursor-pointer list-none flex justify-between items-center">
              Do you offer LEED certification consulting?
              <span className="material-symbols-outlined group-open:rotate-180 transition-transform">expand_more</span>
            </summary>
            <p className="text-[#3f484d] mt-3 pl-2">Yes, our team includes LEED-accredited professionals who guide your project from design to final certification.</p>
          </details>
          <details className="group bg-[#f9f2ec] rounded-xl p-4 shadow-sm">
            <summary className="font-['Manrope'] text-xl font-semibold text-[#006485] cursor-pointer list-none flex justify-between items-center">
              What is your service area?
              <span className="material-symbols-outlined group-open:rotate-180 transition-transform">expand_more</span>
            </summary>
            <p className="text-[#3f484d] mt-3 pl-2">We operate nationally and also take on international projects. Our main office is in the Sustainability District.</p>
          </details>
          <details className="group bg-[#f9f2ec] rounded-xl p-4 shadow-sm">
            <summary className="font-['Manrope'] text-xl font-semibold text-[#006485] cursor-pointer list-none flex justify-between items-center">
              How long does a typical project take?
              <span className="material-symbols-outlined group-open:rotate-180 transition-transform">expand_more</span>
            </summary>
            <p className="text-[#3f484d] mt-3 pl-2">Timelines vary, but a residential project averages 6–12 months. We provide detailed schedules at the start.</p>
          </details>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 max-w-5xl mx-auto px-6 text-center">
        <div className="bg-[#fff8f2] rounded-3xl p-12 md:p-20 shadow-2xl shadow-[#006485]/5 border border-[#f3ede7]">
          <h2 className="font-['Manrope'] text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-[#006485] mb-6">Ready to anchor your project?</h2>
          <p className="text-base sm:text-lg text-[#3f484d] mb-6 max-w-2xl mx-auto">
            Join us in redefining the skyline with environmental stewardship and professional excellence. Let's start the conversation about your greener future today.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
            <Link href="/contact" className="bg-[#006c48] text-white px-8 sm:px-10 py-3 sm:py-4 rounded-xl font-['Manrope'] font-semibold hover:opacity-90 transition-all text-center">
              Get in Touch
            </Link>
            <Link href="/services" className="bg-[#ede7e1] text-[#006485] px-8 sm:px-10 py-3 sm:py-4 rounded-xl font-['Manrope'] font-semibold hover:bg-[#e8e1db] transition-all text-center">
              Explore Our Services
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}