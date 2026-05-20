"use client";

import { motion } from "framer-motion";
import { GraduationCap, User, Briefcase, Shield, Heart, Building2, Settings, ArrowRight } from "lucide-react";
import Link from "next/link";

const roles = [
  {
    id: "student",
    label: "Student",
    description: "Access courses, assignments, and certifications",
    icon: User,
    href: "/student/dashboard",
    color: "sky",
  },
  {
    id: "trainer",
    label: "Trainer",
    description: "Manage courses, students, and assessments",
    icon: Briefcase,
    href: "/trainer/dashboard",
    color: "gold",
  },
  {
    id: "operations",
    label: "Operations",
    description: "Executive dashboards and institutional management",
    icon: Shield,
    href: "/institutional/dashboard",
    color: "green",
  },
  {
    id: "donor",
    label: "Donor",
    description: "Track sponsorship impact and reporting",
    icon: Heart,
    href: "/donor/dashboard",
    color: "gold",
  },
  {
    id: "corporate",
    label: "Corporate",
    description: "Talent pipeline and recruitment management",
    icon: Building2,
    href: "/corporate/dashboard",
    color: "sky",
  },
];

export default function SignInPage() {
  return (
    <div className="min-h-screen bg-institutional-navy">
      {/* Header */}
      <header className="border-b border-white/5 py-6 px-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-heritage-gold to-yellow-600 rounded-lg flex items-center justify-center">
              <GraduationCap className="w-6 h-6 text-institutional-navy" />
            </div>
            <span className="text-xl font-bold text-warm-white">Dayrunner Academy</span>
          </Link>
          <Link href="/" className="text-warm-white/50 text-sm hover:text-warm-white">
            ← Back to Home
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-6 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-warm-white mb-4">Welcome Back</h1>
          <p className="text-warm-white/50 text-lg max-w-xl mx-auto">
            Select your portal to continue to the Dayrunner Academy ecosystem
          </p>
        </motion.div>

        {/* Role Selection Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {roles.map((role, i) => {
            const Icon = role.icon;
            return (
              <motion.div
                key={role.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
              >
                <Link
                  href={role.href}
                  className="block bg-charcoal-black border border-white/5 rounded-2xl p-6 hover:border-heritage-gold/30 transition-all group"
                >
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${
                    role.color === "gold" ? "bg-heritage-gold/10" :
                    role.color === "green" ? "bg-trust-green/10" :
                    "bg-sky-blue/10"
                  }`}>
                    <Icon className={`w-6 h-6 ${
                      role.color === "gold" ? "text-heritage-gold" :
                      role.color === "green" ? "text-trust-green" :
                      "text-sky-blue"
                    }`} strokeWidth={1.75} />
                  </div>
                  <h3 className="text-warm-white font-semibold text-lg mb-2 group-hover:text-heritage-gold transition-colors">
                    {role.label}
                  </h3>
                  <p className="text-warm-white/40 text-sm mb-4">
                    {role.description}
                  </p>
                  <div className="flex items-center text-heritage-gold text-sm font-medium">
                    Enter Portal <ArrowRight className="w-4 h-4 ml-1" />
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>

        {/* Demo Notice */}
        <div className="mt-12 text-center">
          <p className="text-warm-white/30 text-sm">
            This is a demonstration prototype. No authentication required.
          </p>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-white/5 py-8 text-center">
        <p className="text-warm-white/20 text-xs">© 2026 Dayrunner Academy. All rights reserved.</p>
      </footer>
    </div>
  );
}