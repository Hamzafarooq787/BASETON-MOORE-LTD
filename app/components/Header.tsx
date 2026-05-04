"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();
  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
  ];

  return (
    <header className="fixed top-0 w-full z-50 bg-stone-50/80 backdrop-blur-md border-b border-stone-200/50 shadow-sm">
      <nav className="flex justify-between items-center h-16 px-6 md:px-12 max-w-7xl mx-auto">
        
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/logo.webp"
            alt="Baseton Moore Logo"
            width={190}
            height={50}
            priority
          />
        </Link>

        {/* Nav Links */}
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

        {/* Button */}
        <Link
          href="/contact"
          className="bg-[#006485] text-white px-6 py-2 rounded-lg text-sm font-medium hover:opacity-90 active:scale-95 transition-all"
        >
          Contact Us
        </Link>
      </nav>
    </header>
  );
}