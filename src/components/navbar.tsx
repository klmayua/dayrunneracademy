"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { GraduationCap, Menu, X } from "lucide-react";

const navItems = [
  { label: "Programmes", href: "/programmes" },
  { label: "Initiatives", href: "/tvet" },
  { label: "Admissions", href: "/admissions" },
  { label: "Partners", href: "/partners" },
  { label: "About", href: "/about" },
];

export function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const isActive = (href: string) => {
    if (href === "/programmes") return pathname?.startsWith("/programmes");
    return pathname === href;
  };

  return (
    <>
      {/* Desktop Premium Pill Navbar */}
      <nav className="hidden md:flex fixed top-4 left-1/2 -translate-x-1/2 z-50 items-center gap-6 px-7 py-3 rounded-full bg-[rgba(4,19,38,0.86)] backdrop-blur-xl border border-white/[0.06] shadow-[0_10px_30px_rgba(0,0,0,0.18)]">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 flex-shrink-0 mr-3">
          <div className="w-8 h-8 bg-heritage-gold rounded-lg flex items-center justify-center">
            <GraduationCap className="w-4 h-4 text-[#041326]" />
          </div>
          <span className="text-warm-white font-semibold text-sm">Dayrunner Academy</span>
        </Link>

        {/* Center Navigation */}
        <div className="flex items-center gap-0.5">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`relative px-4 py-2 text-sm font-medium transition-all duration-200 ${
                isActive(item.href)
                  ? "text-warm-white"
                  : "text-warm-white/60 hover:text-warm-white"
              }`}
            >
              {item.label}
              {isActive(item.href) && (
                <span className="absolute bottom-1 left-4 right-4 h-0.5 bg-heritage-gold rounded-full" />
              )}
            </Link>
          ))}
        </div>

        {/* Right CTAs */}
        <div className="flex items-center gap-3 flex-shrink-0 ml-3">
          <Link
            href="/signin"
            className="text-warm-white/60 hover:text-warm-white text-sm font-medium px-4 py-2 transition-colors"
          >
            Sign In
          </Link>
          <Link
            href="/admissions"
            className="bg-heritage-gold hover:bg-[#E5C158] text-[#041326] text-sm font-semibold px-5 py-2.5 rounded-full transition-all"
          >
            Apply Now
          </Link>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <div className="md:hidden">
        <nav className="fixed top-0 left-0 right-0 z-50 bg-[rgba(4,19,38,0.95)] backdrop-blur-xl border-b border-white/[0.06]">
          <div className="flex items-center justify-between px-4 py-3">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-8 h-8 bg-heritage-gold rounded-lg flex items-center justify-center">
                <GraduationCap className="w-4 h-4 text-[#041326]" />
              </div>
              <span className="text-warm-white font-semibold text-sm">Dayrunner</span>
            </Link>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-warm-white/70 hover:text-warm-white transition-colors"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </nav>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="fixed inset-0 z-40 bg-[#041326] pt-16 px-4">
            <div className="space-y-1">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block px-4 py-3 rounded-lg transition-colors ${
                    isActive(item.href)
                      ? "text-heritage-gold bg-heritage-gold/10"
                      : "text-warm-white/80 hover:text-warm-white hover:bg-white/[0.04]"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
              <div className="pt-4 border-t border-white/[0.10] space-y-2">
                <Link
                  href="/signin"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block text-center py-3 text-warm-white/70 border border-white/20 rounded-lg"
                >
                  Sign In
                </Link>
                <Link
                  href="/admissions"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block text-center py-3 bg-heritage-gold text-[#041326] font-semibold rounded-lg"
                >
                  Apply Now
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}