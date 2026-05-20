"use client";

import Link from "next/link";
import { GraduationCap, MapPin, Calendar, Phone, Mail } from "lucide-react";

const footerLinks = {
  programmes: [
    { label: "Digital Technology", href: "/programmes" },
    { label: "Automotive", href: "/programmes" },
    { label: "Healthcare", href: "/programmes" },
    { label: "Hospitality", href: "/programmes" },
    { label: "Agriculture", href: "/programmes" },
  ],
  quickLinks: [
    { label: "TVET Initiative", href: "/tvet" },
    { label: "Careers & Employability", href: "/careers" },
    { label: "Partners", href: "/partners" },
    { label: "Impact Report", href: "/impact" },
    { label: "Events", href: "/events" },
  ],
  resources: [
    { label: "FAQs", href: "/faq" },
    { label: "Scholarships", href: "/scholarships" },
    { label: "Student Registration", href: "/admissions" },
    { label: "Media & News", href: "/news" },
    { label: "Corporate Recruitment", href: "/corporate" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-surface-primary border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-5 gap-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 bg-heritage-gold rounded-lg flex items-center justify-center">
                <GraduationCap className="w-5 h-5 text-surface-primary" />
              </div>
              <span className="text-xl font-bold text-warm-white">Dayrunner Academy</span>
            </Link>
            <p className="text-warm-white/50 text-sm mb-6 max-w-xs">
              Nigeria's premier TVET institution, building the workforce of tomorrow through world-class technical and vocational education.
            </p>
            <div className="space-y-3 text-warm-white/40 text-sm">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" strokeWidth={1.75} />
                <span>Abuja, Nigeria</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4" strokeWidth={1.75} />
                <span>+234 800 DAYRUNNER</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4" strokeWidth={1.75} />
                <span>info@dayrunner.edu.ng</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" strokeWidth={1.75} />
                <span>Mon-Fri 8am-6pm</span>
              </div>
            </div>
          </div>

          {/* Programmes */}
          <div>
            <h4 className="text-warm-white font-semibold mb-4 text-sm">Programmes</h4>
            <ul className="space-y-2.5">
              {footerLinks.programmes.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-warm-white/50 hover:text-warm-white text-sm transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-warm-white font-semibold mb-4 text-sm">Explore</h4>
            <ul className="space-y-2.5">
              {footerLinks.quickLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-warm-white/50 hover:text-warm-white text-sm transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-warm-white font-semibold mb-4 text-sm">Resources</h4>
            <ul className="space-y-2.5">
              {footerLinks.resources.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-warm-white/50 hover:text-warm-white text-sm transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-white/[0.06] mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-warm-white/30 text-xs">
            © 2026 Dayrunner Academy. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-warm-white/30 text-xs">
            <Link href="/privacy" className="hover:text-warm-white/50 transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-warm-white/50 transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}