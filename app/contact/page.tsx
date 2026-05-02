export default function ContactPage() {
  return (
    <>
      {/* Hero Content */}
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-20 text-center md:text-left">
          <h1 className="font-['Manrope'] text-5xl md:text-6xl font-bold tracking-tight text-[#006485] mb-6">
            Get in Touch
          </h1>
          <p className="text-lg text-[#3f484d] max-w-2xl">
            We're here to discuss your next sustainable construction project.
            Whether you're planning a modern renovation or a large-scale
            development, our team at BASETON MOORE LTD is ready to anchor your
            vision.
          </p>
        </div>
      </div>

      {/* Bento Grid Contact Layout */}
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Contact Info Cards */}
          <div className="md:col-span-5 flex flex-col gap-6">
            {/* Office Address Card */}
            <div className="bg-white p-6 rounded-xl shadow-sm border border-[#e8e1db]/50 hover:shadow-md transition-shadow">
              <div className="flex items-center gap-6 mb-6">
                <div className="w-12 h-12 rounded-full bg-[#92f7c3] flex items-center justify-center text-[#00734d]">
                  <span className="material-symbols-outlined">location_on</span>
                </div>
                <div>
                  <h3 className="font-['Manrope'] text-2xl font-semibold text-[#1d1b18]">
                    Our Office
                  </h3>
                  <p className="text-xs font-semibold tracking-wider text-[#006c48] uppercase">
                    Headquarters
                  </p>
                </div>
              </div>
              <address className="not-italic text-lg text-[#3f484d] leading-relaxed">
                24 CHAMBERLAIN STREET,<br />
                STOKE-ON-TRENT,<br />
                ST1 4NR
              </address>
            </div>

            {/* Email Card */}
            <div className="bg-white p-6 rounded-xl shadow-sm border border-[#e8e1db]/50 hover:shadow-md transition-shadow">
              <div className="flex items-center gap-6 mb-6">
                <div className="w-12 h-12 rounded-full bg-[#c1e8ff] flex items-center justify-center text-[#001e2b]">
                  <span className="material-symbols-outlined">mail</span>
                </div>
                <div>
                  <h3 className="font-['Manrope'] text-2xl font-semibold text-[#1d1b18]">
                    Email Us
                  </h3>
                  <p className="text-xs font-semibold tracking-wider text-[#006485] uppercase">
                    Direct Inquiries
                  </p>
                </div>
              </div>
              <a
                href="mailto:sales@basetonmoore.co.uk"
                className="text-lg text-[#006485] hover:text-[#004d67] font-semibold transition-colors break-all"
              >
                sales@basetonmoore.co.uk
              </a>
            </div>

            {/* Quote Card */}
            <div className="bg-[#92f7c3]/20 p-6 rounded-xl border border-[#006c48]/10">
              <p className="text-[#00734d] italic">
                "Sustainability isn't just a goal; it's our foundation. Let's
                build something that lasts for generations."
              </p>
            </div>
          </div>

          {/* Map / Local Area Image */}
          <div className="md:col-span-7 h-[400px] md:h-full min-h-[400px] rounded-xl overflow-hidden shadow-lg border-4 border-[#e8e1db] relative group">
            <img
              alt="Stoke-on-Trent Area Map"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCj0IeBIFPcu70tS1unMQjKKjlFZdPy0DlFPweUBG7EN_TKdYxtrXpru6y-kM0elHZUfHZwOsMMF058oy7WL0xDt76fnRDvTSTLGU8JE09XQF3jdgGPq3KKzfE9dJM51473-sqeTKL7OUf8sRFgYZ-jcY5A4F4gXnLrkMrUrgTfQ8koNFqhYQWYs0hU4tl1NwzdJQp-QVLlTzoieMuJvLzcJaVfXIBzTR47ue_UO3RYCzp_GtoBwy6fesQKh8GZwf2G_u88R1NIt8KT"
            />
            <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-md p-6 rounded-lg shadow-xl flex items-center justify-between">
              <div>
                <p className="font-['Manrope'] text-2xl font-semibold text-[#1d1b18]">
                  Find us in Stoke-on-Trent
                </p>
                <p className="text-[#3f484d]">Located in the heart of the Midlands</p>
              </div>
              <div className="hidden sm:flex w-10 h-10 bg-[#006c48] rounded-full items-center justify-center text-white">
                <span className="material-symbols-outlined">near_me</span>
              </div>
            </div>
            {/* Map Pin Decorative Overlay */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
              <div className="relative">
                <span
                  className="material-symbols-outlined text-[#006485] text-5xl drop-shadow-xl animate-bounce [font-variation-settings:'FILL'_1]"
                >
                  location_on
                </span>
                <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-4 h-1 bg-[#1d1b18]/20 blur-sm rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Secondary Decorative Section */}
      <div className="max-w-7xl mx-auto px-6 mt-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="flex items-start gap-6">
            <span className="material-symbols-outlined text-[#006c48] text-3xl">eco</span>
            <div>
              <h4 className="font-['Manrope'] text-2xl font-semibold text-[#1d1b18]">
                Eco-Friendly
              </h4>
              <p className="text-[#3f484d]">
                Committed to low-impact construction and sustainable sourcing.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-6">
            <span className="material-symbols-outlined text-[#006485] text-3xl">
              architecture
            </span>
            <div>
              <h4 className="font-['Manrope'] text-2xl font-semibold text-[#1d1b18]">
                Expert Design
              </h4>
              <p className="text-[#3f484d]">
                Precision engineering meets organic, aesthetic functionality.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-6">
            <div className="bg-[#006c48] p-2 rounded-lg text-white">
              <span className="material-symbols-outlined text-white text-2xl">
                verified
              </span>
            </div>
            <div>
              <h4 className="font-['Manrope'] text-2xl font-semibold text-[#1d1b18]">
                Trusted Quality
              </h4>
              <p className="text-[#3f484d]">
                A legacy of reliability and meticulous craftsmanship in every
                brick.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}