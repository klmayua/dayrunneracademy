"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { GraduationCap, Menu, X, LogIn } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { MobileBottomNav } from "./mobile-bottom-nav";
import { FloatingSupportButtons } from "./floating-support";

const navItems = [
  { label: "Programmes", href: "/programmes" },
  { label: "Initiatives", href: "/initiatives/tvet" },
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
      className="relative group flex items-center px-0 py-2 text-[15px] font-medium transition-all duration-220"
    >
      <span className={`relative z-10 transition-colors duration-220 ${
        isActive ? "text-white" : "text-white/[0.78] group-hover:text-white"
      }`}>
        {label}
      </span>
      {/* Animated underline - smooth expand */}
      <span className={`absolute bottom-[8px] left-0 h-[2px] bg-heritage-gold rounded-full transition-all duration-220 ease-out ${
        isActive ? "w-full opacity-100" : "w-0 opacity-0 group-hover:w-full group-hover:opacity-100"
      }`} />
    </Link>
  );
}

function DesktopNav() {
  return (
    <nav className="hidden md:flex fixed top-6 left-1/2 -translate-x-1/2 z-50 w-full max-w-[1480px] px-8">
      <div className="w-full h-[72px] flex items-center justify-between 
        bg-[rgba(3,12,28,0.88)] backdrop-blur-[18px] border border-[rgba(212,175,55,0.08)] 
        shadow-[0_12px_40px_rgba(0,0,0,0.32)] rounded-[20px] px-8">
        
        {/* LEFT ZONE - Brand Authority */}
        <div className="flex items-center flex-shrink-0">
          <Link href="/" className="flex items-center gap-[14px] group">
            <div className="w-10 h-10 bg-heritage-gold rounded-[10px] flex items-center justify-center shadow-sm group-hover:shadow-md transition-shadow">
              <GraduationCap className="w-5 h-5 text-[#041326]" />
            </div>
            <div className="flex items-center">
              <span className="text-[18px] font-semibold tracking-[-0.02em] text-white">Dayrunner</span>
              <span className="text-[14px] text-white/[0.24] mx-[6px]">|</span>
              <span className="text-[18px] font-semibold tracking-[-0.02em] text-white">Academy</span>
            </div>
          </Link>
        </div>

        {/* CENTER ZONE - Primary Navigation */}
        <div className="flex items-center justify-center gap-[40px]">
          {navItems.map((item) => (
            <NavLink key={item.href} href={item.href} label={item.label} />
          ))}
        </div>

        {/* RIGHT ZONE - Action Hierarchy */}
        <div className="flex items-center gap-[18px] flex-shrink-0">
          {/* Sign In - Text-led, lighter */}
          <Link 
            href="/signin" 
            className="group flex items-center gap-2 text-[15px] font-semibold text-white/[0.88] 
              hover:text-white transition-all duration-220"
          >
            <LogIn className="w-4 h-4 text-white/[0.88] group-hover:translate-x-[2px] group-hover:text-heritage-gold transition-all duration-220" />
            <span>Sign In</span>
          </Link>

          {/* Apply Now - Premium rounded rectangle, not pill */}
          <Link 
            href="/admissions" 
            className="group flex items-center px-[28px] h-[52px] text-[15px] font-semibold text-[#041326] 
              bg-heritage-gold rounded-[16px] transition-all duration-220 ease-out
              hover:bg-[#E0BB45] hover:-translate-y-[1px] hover:shadow-lg"
          >
            Apply Now
          </Link>
        </div>
      </div>
    </nav>
  );
}

function MobileNav() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <>
      {/* Premium Floating Mobile Navbar */}
      <nav className="md:hidden fixed top-3.5 left-1/2 -translate-x-1/2 z-50 
        w-[calc(100%-20px)] max-w-[560px] h-[68px] rounded-full
        bg-[rgba(6,21,42,0.78)] backdrop-blur-[24px] 
        border border-[rgba(212,175,55,0.10)] 
        shadow-[0_8px_30px_rgba(0,0,0,0.28)]
        px-4 flex items-center justify-between">
        {/* Compact Brand */}
        <Link href="/" className="flex items-center gap-2.5" onClick={() => setMobileMenuOpen(false)}>
          <div className="w-10 h-10 bg-heritage-gold rounded-[10px] flex items-center justify-center">
            <GraduationCap className="w-5 h-5 text-[#041326]" />
          </div>
          <span className="text-[14px] font-semibold text-white">Dayrunner</span>
        </Link>

        {/* Menu Trigger */}
        <button 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="w-11 h-11 bg-white/[0.04] border border-white/[0.06] rounded-full 
            flex items-center justify-center hover:bg-white/[0.08] hover:border-heritage-gold/20 transition-all"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="w-5 h-5 text-white" /> : <Menu className="w-5 h-5 text-white" />}
        </button>
      </nav>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="md:hidden fixed inset-0 top-0 z-40 bg-[#071A2F] backdrop-blur-[20px]"
          >
            <div className="flex flex-col p-6 space-y-2">
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
                        : "text-white/[0.72] hover:text-white hover:bg-white/[0.04]"
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}
              
              <div className="pt-6 mt-4 border-t border-white/10">
                <Link
                  href="/admissions"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block text-center text-[17px] font-semibold text-[#041326] bg-heritage-gold py-4 px-4 rounded-xl hover:bg-[#E0BB45] transition-all"
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
      <MobileBottomNav />
      <FloatingSupportButtons />
    </>
  );
}