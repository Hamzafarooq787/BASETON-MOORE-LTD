import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#1a2e2a] text-white mt-auto w-full overflow-x-hidden">

      {/* Main Container */}
      <div className="w-full px-4 sm:px-6 md:px-8 py-10 md:py-14">
        <div className="max-w-7xl mx-auto">

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

            {/* COLUMN 1: Brand Info */}
            <div className="space-y-4">

              {/* Logo (BIGGER) */}
              <Link href="/" className="flex items-center">
                <Image
                  src="/logo.webp"
                  alt="Baseton Moore Logo"
                  width={160}
                  height={50}
                  className="object-contain"
                  priority
                />
              </Link>

              <p className="text-stone-300 text-sm leading-relaxed">
                Building a greener future with sustainable craftsmanship since 2009.
              </p>

              <div className="flex gap-3 items-start">
                <span className="material-symbols-outlined text-[#92f7c3]">
                  location_on
                </span>
                <span className="text-stone-300 text-sm">
                  24 Chamberlain Street, Stoke-on-Trent, ST1 4NR
                </span>
              </div>

              <div className="flex gap-3 items-center">
                <span className="material-symbols-outlined text-[#92f7c3]">
                  mail
                </span>
                <a href="mailto:basetonmoore.co.uk" className="text-stone-300 text-sm break-all hover:text-[#92f7c3] transition-colors">
                  basetonmoore.co.uk
                </a>
              </div>
            </div>

            {/* COLUMN 2: Quick Links */}
            <div>
              <h4 className="font-semibold text-base sm:text-lg mb-4">
                Quick Links
              </h4>
              <ul className="space-y-2">
                <li><Link href="/" className="footer-link">Home</Link></li>
                <li><Link href="/about" className="footer-link">About Us</Link></li>
                <li><Link href="/services" className="footer-link">Services</Link></li>
                <li><Link href="/contact" className="footer-link">Contact</Link></li>
              </ul>
            </div>

            {/* COLUMN 3: Newsletter */}
            <div>
              <h4 className="font-semibold text-base sm:text-lg mb-4">
                Stay Updated
              </h4>

              <p className="text-stone-300 text-sm mb-4">
                Subscribe for green building insights.
              </p>

              <div className="flex flex-col sm:flex-row gap-2">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 px-3 py-2 rounded-lg bg-white/10 border border-white/20 text-white placeholder:text-stone-400 text-sm focus:outline-none focus:border-[#92f7c3]"
                />

                <button className="bg-[#006c48] hover:bg-[#008b5e] px-4 py-2 rounded-lg text-sm font-semibold flex items-center justify-center gap-1 transition">
                  Subscribe
                  {/* <span className="material-symbols-outlined text-sm">
                    arrow_forward
                  </span> */}
                </button>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10 py-5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4 text-center sm:text-left">

          <p className="text-stone-400 text-xs sm:text-sm flex items-center justify-center sm:justify-start gap-1 flex-wrap">
            © 2026 BASETON MOORE LTD. All rights reserved. Crafted with
            <span className="material-symbols-outlined text-[#92f7c3] text-base">
              eco
            </span>
            for a sustainable tomorrow.
          </p>

          <p className="text-stone-400 text-xs sm:text-sm">
            Designed by{" "}
            <a
              href="https://linkedo.co.uk/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#92f7c3] hover:underline font-semibold"
            >
              Linkedo
            </a>
          </p>

        </div>
      </div>
    </footer>
  );
}