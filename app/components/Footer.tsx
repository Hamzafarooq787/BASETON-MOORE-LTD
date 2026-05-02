import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#1a2e2a] text-white mt-auto w-full overflow-x-hidden">
      {/* Main Container */}
      <div className="w-full px-4 sm:px-6 md:px-8 py-8 md:py-12">
        
        {/* Responsive Grid: 1 column mobile, 2 columns tablet, 4 columns desktop */}
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            
            {/* COLUMN 1: Brand Info */}
            <div className="space-y-3">
              <div className="text-xl sm:text-2xl font-bold tracking-tight">
                BASETON MOORE <span className="text-[#92f7c3]">LTD</span>
              </div>
              <p className="text-stone-300 text-sm leading-relaxed">
                Building a greener future with sustainable craftsmanship since 2009.
              </p>
              <div className="flex gap-3 items-start">
                <span className="material-symbols-outlined text-[#92f7c3] text-lg shrink-0">location_on</span>
                <span className="text-stone-300 text-sm">123 Earth Anchor Way, Sustainability District, ST 45678</span>
              </div>
              <div className="flex gap-3 items-center">
                <span className="material-symbols-outlined text-[#92f7c3] text-lg shrink-0">mail</span>
                <span className="text-stone-300 text-sm break-all">contact@basetonmoore.com</span>
              </div>
              <div className="flex gap-3 items-center">
                <span className="material-symbols-outlined text-[#92f7c3] text-lg shrink-0">call</span>
                <span className="text-stone-300 text-sm">+1 (555) 123-4567</span>
              </div>
            </div>
            
            {/* COLUMN 2: Quick Links */}
            <div>
              <h4 className="font-semibold text-white text-base sm:text-lg mb-3">Quick Links</h4>
              <ul className="space-y-2">
                <li><Link href="/" className="text-stone-300 hover:text-[#92f7c3] transition text-sm">Home</Link></li>
                <li><Link href="/about" className="text-stone-300 hover:text-[#92f7c3] transition text-sm">About Us</Link></li>
                <li><Link href="/services" className="text-stone-300 hover:text-[#92f7c3] transition text-sm">Services</Link></li>
                <li><Link href="/contact" className="text-stone-300 hover:text-[#92f7c3] transition text-sm">Contact</Link></li>
                <li><a href="#" className="text-stone-300 hover:text-[#92f7c3] transition text-sm">Projects</a></li>
              </ul>
            </div>
            
            {/* COLUMN 3: Resources */}
            <div>
              <h4 className="font-semibold text-white text-base sm:text-lg mb-3">Resources</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-stone-300 hover:text-[#92f7c3] transition text-sm">Privacy Policy</a></li>
                <li><a href="#" className="text-stone-300 hover:text-[#92f7c3] transition text-sm">Terms of Service</a></li>
                <li><a href="#" className="text-stone-300 hover:text-[#92f7c3] transition text-sm">Cookie Policy</a></li>
                <li><a href="#" className="text-stone-300 hover:text-[#92f7c3] transition text-sm">Sustainability Report</a></li>
                <li><a href="#" className="text-stone-300 hover:text-[#92f7c3] transition text-sm">Careers</a></li>
              </ul>
            </div>
            
            {/* COLUMN 4: Newsletter & Social */}
            <div>
              <h4 className="font-semibold text-white text-base sm:text-lg mb-3">Stay Updated</h4>
              <p className="text-stone-300 text-sm mb-3">
                Subscribe for green building insights.
              </p>
              <div className="flex flex-col gap-2">
                <input
                  type="email"
                  placeholder="Your email"
                  className="w-full px-3 py-2 rounded-lg bg-white/10 border border-white/20 text-white placeholder:text-stone-400 text-sm focus:outline-none focus:border-[#92f7c3] transition"
                />
                <button className="bg-[#006c48] hover:bg-[#008b5e] w-full sm:w-auto px-4 py-2 rounded-lg text-sm font-semibold transition flex items-center justify-center gap-1">
                  Subscribe
                  <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </button>
              </div>
              {/* <div className="flex gap-4 mt-4">
                <a href="#" className="text-stone-300 hover:text-[#92f7c3] transition">
                  <span className="material-symbols-outlined text-xl">facebook</span>
                </a>
                <a href="#" className="text-stone-300 hover:text-[#92f7c3] transition">
                  <span className="material-symbols-outlined text-xl">twitter</span>
                </a>
                <a href="#" className="text-stone-300 hover:text-[#92f7c3] transition">
                  <span className="material-symbols-outlined text-xl">linkedin</span>
                </a>
                <a href="#" className="text-stone-300 hover:text-[#92f7c3] transition">
                  <span className="material-symbols-outlined text-xl">instagram</span>
                </a>
              </div> */}
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom Bar - Responsive */}
      <div className="border-t border-white/10 py-4 md:py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 text-center">
          <p className="text-stone-400 text-xs sm:text-sm">
            © 2025 BASETON MOORE LTD. All rights reserved. Crafted with <span className="text-[#92f7c3]">🌱</span> for a sustainable tomorrow.
          </p>
        </div>
      </div>
    </footer>
  );
}