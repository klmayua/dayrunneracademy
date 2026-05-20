"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, BookOpen, Award, FileText, User } from "lucide-react";

const navItems = [
  { label: "Home", href: "/", icon: Home },
  { label: "Programmes", href: "/programmes", icon: BookOpen },
  { label: "Initiatives", href: "/initiatives/tvet", icon: Award },
  { label: "Admissions", href: "/admissions", icon: FileText },
  { label: "Profile", href: "/signin", icon: User },
];

export function MobileBottomNav() {
  const pathname = usePathname();

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 md:hidden">
      <div className="bg-[rgba(6,21,42,0.88)] backdrop-blur-[24px] border-t border-[rgba(212,175,55,0.08)] 
        shadow-[0_-4px_20px_rgba(0,0,0,0.15)]">
        <div className="max-w-[560px] mx-auto flex items-center justify-around px-2 py-3 pb-4">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = item.href === "/" 
              ? pathname === "/" 
              : pathname?.startsWith(item.href);

            return (
              <Link
                key={item.href}
                href={item.href}
                className="flex flex-col items-center gap-1.5 py-2 px-3 min-w-[64px]"
              >
                <div className="relative">
                  <Icon 
                    className={`w-6 h-6 transition-all duration-200 ${
                      isActive ? "text-heritage-gold" : "text-white/72"
                    }`}
                    strokeWidth={isActive ? 2 : 1.75}
                  />
                  {isActive && (
                    <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-5 h-0.5 bg-heritage-gold rounded-full" />
                  )}
                </div>
                <span className={`text-[11px] font-medium tracking-wide ${
                  isActive ? "text-heritage-gold" : "text-white/72"
                }`}>
                  {item.label}
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}