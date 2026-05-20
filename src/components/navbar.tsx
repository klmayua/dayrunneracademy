"use client";

import { useState } from "react";
import Link from "next/link";
import { GraduationCap, ChevronDown, Menu, X } from "lucide-react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Programmes", href: "/programmes" },
  { label: "TVET Initiative", href: "/tvet" },
  { label: "Admissions", href: "/admissions" },
  { label: "Employability", href: "/careers" },
  { label: "Partners", href: "/partners" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      {/* Desktop Premium Pill Navbar */}
      <nav className="navbar-pill hidden md:flex items-center justify-between gap-8">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 flex-shrink-0">
          <div className="w-9 h-9 bg-heritage-gold rounded-lg flex items-center justify-center">
            <GraduationCap className="w-5 h-5 text-surface-primary" />
          </div>
          <span className="text-warm-white font-semibold text-sm whitespace-nowrap">Dayrunner Academy</span>
        </Link>

        {/* Center Navigation */}
        <div className="flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-warm-white/70 hover:text-warm-white px-3 py-2 rounded-lg text-sm font-medium transition-colors hover:bg-white/5"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Right CTAs */}
        <div className="flex items-center gap-3 flex-shrink-0">
          <Link
            href="/signin"
            className="text-warm-white/70 hover:text-warm-white text-sm font-medium px-4 py-2 transition-colors"
          >
            Sign In
          </Link>
          <Link
            href="/admissions"
            className="bg-heritage-gold hover:brightness-110 text-surface-primary text-sm font-semibold px-5 py-2.5 rounded-full transition-all"
          >
            Apply Now
          </Link>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <div className="md:hidden">
        {/* Mobile Header */}
        <nav className="fixed top-0 left-0 right-0 z-50 bg-surface-secondary/95 backdrop-blur-xl border-b border-white/[0.06]">
          <div className="flex items-center justify-between px-4 py-3">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-8 h-8 bg-heritage-gold rounded-lg flex items-center justify-center">
                <GraduationCap className="w-4 h-4 text-surface-primary" />
              </div>
              <span className="text-warm-white font-semibold text-sm">Dayrunner</span>
            </Link>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-warm-white/70"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </nav>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="fixed inset-0 z-40 bg-surface-primary pt-16 px-4">
            <div className="space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block px-4 py-3 text-warm-white/80 hover:text-warm-white hover:bg-white/5 rounded-xl transition-colors"
                >
                  {link.label}
                </Link>
              ))}
              <div className="pt-4 border-t border-white/10 space-y-2">
                <Link
                  href="/signin"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block text-center py-3 text-warm-white/70 border border-white/20 rounded-xl"
                >
                  Sign In
                </Link>
                <Link
                  href="/admissions"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block text-center py-3 bg-heritage-gold text-surface-primary font-semibold rounded-xl"
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