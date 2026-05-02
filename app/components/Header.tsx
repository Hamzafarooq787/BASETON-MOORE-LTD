"use client";
import Link from "next/link";
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
        <div className="text-xl font-extrabold tracking-tight text-sky-800">
          BASETON MOORE LTD
        </div>
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