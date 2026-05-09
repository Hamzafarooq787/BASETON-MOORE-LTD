"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header className="fixed top-0 w-full z-50 bg-stone-50/80 backdrop-blur-md border-b border-stone-200/50 shadow-sm">
      <nav className="flex justify-between items-center h-16 px-4 sm:px-6 md:px-12 max-w-7xl mx-auto">

        {/* Logo */}
        <Link href="/" className="flex items-center" onClick={() => setOpen(false)}>
          <Image
            src="/logo.webp"
            alt="Baseton Moore Logo"
            width={160}
            height={42}
            priority
            className="w-[140px] sm:w-[170px] md:w-[190px] h-auto"
          />
        </Link>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.path}
              href={item.path}
              className={`text-sm font-medium transition-colors ${
                pathname === item.path
                  ? "text-sky-700 font-bold border-b-2 border-sky-700 pb-1"
                  : "text-stone-600 hover:text-sky-600"
              }`}
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Desktop Contact Button */}
        <Link
          href="/contact"
          className="hidden md:inline-flex bg-[#006485] text-white px-6 py-2 rounded-lg text-sm font-medium hover:opacity-90 active:scale-95 transition-all"
        >
          Contact Us
        </Link>

        {/* Mobile Menu Button */}
        <button
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-lg text-[#006485] hover:bg-stone-200/60 transition-colors"
        >
          <span className="material-symbols-outlined text-3xl">
            {open ? "close" : "menu"}
          </span>
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-[max-height,opacity] duration-300 bg-stone-50/95 backdrop-blur-md border-t border-stone-200/50 ${
          open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-4 sm:px-6 py-4 flex flex-col gap-1">
          {navItems.map((item) => (
            <Link
              key={item.path}
              href={item.path}
              onClick={() => setOpen(false)}
              className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                pathname === item.path
                  ? "bg-[#c1e8ff] text-sky-700 font-bold"
                  : "text-stone-700 hover:bg-stone-200/60"
              }`}
            >
              {item.name}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            className="mt-2 bg-[#006485] text-white text-center px-6 py-2.5 rounded-lg text-sm font-medium hover:opacity-90 transition-all"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </header>
  );
}
