"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { GraduationCap, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { label: "Programmes", href: "/programmes" },
  { label: "Initiatives", href: "/tvet" },
  { label: "Admissions", href: "/admissions" },
  { label: "Partners", href: "/partners" },
  { label: "About", href: "/about" },
];

function NavLink({ href, label }: { href: string; label: string }) {
  const pathname = usePathname();
  const isActive = href === "/programmes" 
    ? pathname?.startsWith("/programmes") 
    : pathname === href;

  return (
    <Link 
      href={href} 
      className="relative group px-5 py-2.5 text-[15px] font-medium transition-all duration-300"
    >
      <span className={`relative z-10 transition-colors duration-220 ${
        isActive ? "text-white" : "text-white/72 hover:text-white"
      }`}>
        {label}
      </span>
      {/* Animated underline */}
      <span className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-[2px] bg-heritage-gold rounded-full transition-all duration-220 ease-out ${
        isActive ? "w-[70%] opacity-100" : "w-0 opacity-0 group-hover:w-[70%] group-hover:opacity-100"
      }`} />
    </Link>
  );
}

function DesktopNav() {
  return (
    <nav className="hidden md:flex fixed top-5 left-1/2 -translate-x-1/2 z-50 items-center px-10 py-3.5 rounded-full 
      bg-[rgba(7,18,38,0.78)] backdrop-blur-[22px] border border-[rgba(212,175,55,0.10)] 
      shadow-[0_10px_40px_rgba(0,0,0,0.28)] w-[max-content] max-w-[96%]">
      
      {/* Logo */}
      <Link href="/" className="flex items-center gap-2.5 flex-shrink-0 mr-6">
        <div className="w-9 h-9 bg-heritage-gold rounded-lg flex items-center justify-center shadow-sm">
          <GraduationCap className="w-5 h-5 text-[#041326]" />
        </div>
        <span className="text-white font-semibold text-[15px] tracking-tight">Dayrunner Academy</span>
      </Link>

      {/* Center Navigation */}
      <div className="flex items-center gap-1">
        {navItems.map((item) => (
          <NavLink key={item.href} href={item.href} label={item.label} />
        ))}
      </div>

      {/* Right CTAs */}
      <div className="flex items-center gap-3 ml-8 flex-shrink-0">
        {/* Sign In - Secondary Premium CTA */}
        <Link
          href="/signin"
          className="group relative px-[18px] py-2.5 text-[15px] font-medium text-white/90 
            bg-white/[0.04] border border-white/[0.08] rounded-full transition-all duration-220
            hover:bg-white/[0.08] hover:border-[rgba(212,175,55,0.22)] hover:-translate-y-0.5"
        >
          <span className="relative z-10">Sign In</span>
        </Link>
        
        {/* Apply Now - Primary CTA */}
        <Link
          href="/admissions"
          className="group relative px-[26px] py-[14px] text-[15px] font-semibold text-[#041326] 
            bg-heritage-gold rounded-full transition-all duration-220 ease-out
            hover:bg-[#E5C158] hover:shadow-lg hover:-translate-y-0.5 hover:scale-[1.02]"
        >
          Apply Now
        </Link>
      </div>
    </nav>
  );
}

function MobileNav() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <>
      <nav className="md:hidden fixed top-0 left-0 right-0 z-50 
        bg-[rgba(7,18,38,0.95)] backdrop-blur-xl border-b border-[rgba(212,175,55,0.08)]">
        <div className="flex items-center justify-between px-5 py-3.5">
          <Link href="/" className="flex items-center gap-2" onClick={() => setMobileMenuOpen(false)}>
            <div className="w-9 h-9 bg-heritage-gold rounded-lg flex items-center justify-center">
              <GraduationCap className="w-5 h-5 text-[#041326]" />
            </div>
            <span className="text-white font-semibold text-[15px]">Dayrunner</span>
          </Link>
          
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-white/80 hover:text-white transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="md:hidden fixed inset-0 top-[60px] z-40 bg-[rgba(7,18,38,0.98)] backdrop-blur-xl"
          >
            <div className="flex flex-col p-6 space-y-3">
              {navItems.map((item) => {
                const isActive = item.href === "/programmes" 
                  ? pathname?.startsWith("/programmes") 
                  : pathname === item.href;
                
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`text-[17px] font-medium py-4 px-4 rounded-xl transition-all duration-200 ${
                      isActive 
                        ? "text-heritage-gold bg-heritage-gold/10" 
                        : "text-white/72 hover:text-white hover:bg-white/[0.04]"
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}
              
              <div className="pt-6 mt-4 border-t border-white/10 space-y-3">
                <Link
                  href="/signin"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block text-center text-[17px] font-medium text-white/80 py-4 px-4 rounded-xl border border-white/10 hover:border-heritage-gold/30 hover:bg-white/[0.04] transition-all"
                >
                  Sign In
                </Link>
                <Link
                  href="/admissions"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block text-center text-[17px] font-semibold text-[#041326] bg-heritage-gold py-4 px-4 rounded-xl hover:bg-[#E5C158] transition-all"
                >
                  Apply Now
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export function Navbar() {
  return (
    <>
      <DesktopNav />
      <MobileNav />
    </>
  );
}