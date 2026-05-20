"use client";

import { motion } from "framer-motion";
import { GraduationCap, ArrowRight, Briefcase, TrendingUp, Users, MapPin, Building2, Globe, CheckCircle } from "lucide-react";

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

const metrics = [
  { value: "89%", label: "Placement Rate", icon: TrendingUp },
  { value: "₦2.5M", label: "Avg. Starting Salary", icon: Briefcase },
  { value: "500+", label: "Hiring Partners", icon: Building2 },
  { value: "36", label: "States Active", icon: Globe },
];

const pathways = [
  {
    title: "Direct Employment",
    description: "Get matched with leading companies seeking skilled graduates",
    companies: ["MTN", "Jumia", "Flutterwave", "Shell", "Nestle"],
  },
  {
    title: "Internship to Hire",
    description: "Start with an internship and convert to full-time employment",
    companies: ["Andela", "Interswitch", "UAC", "Dangote", "Nigerian Breweries"],
  },
  {
    title: "Entrepreneurship",
    description: "Launch your own business with our startup support programme",
    companies: ["Self-employed", "Franchise", "Digital Business"],
  },
  {
    title: "Further Education",
    description: "Continue your studies with recognized pathways to higher education",
    companies: ["Universities", "Technical Institutes", "Online Degrees"],
  },
];

export default function CareersPage() {
  return (
    <div className="min-h-screen bg-institutional-navy">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-institutional-navy/95 backdrop-blur-sm border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-heritage-gold to-yellow-600 rounded-lg flex items-center justify-center">
              <GraduationCap className="w-6 h-6 text-institutional-navy" />
            </div>
            <span className="text-xl font-bold text-warm-white">Dayrunner Academy</span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="/" className="text-warm-white/70 hover:text-warm-white">Home</a>
            <a href="/programmes" className="text-warm-white/70 hover:text-warm-white">Programmes</a>
            <a href="/tvet" className="text-warm-white/70 hover:text-warm-white">TVET</a>
            <a href="/careers" className="text-heritage-gold">Employability</a>
            <a href="/admissions" className="text-warm-white/70 hover:text-warm-white">Admissions</a>
          </div>
          <button className="bg-heritage-gold hover:bg-heritage-gold/90 text-institutional-navy px-5 py-2 rounded-lg font-semibold">
            Apply Now
          </button>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-32 pb-20 px-6 bg-[#071B34]">
        <div className="max-w-7xl mx-auto">
          <motion.div {...fadeUp} className="text-center max-w-4xl mx-auto">
            <span className="text-trust-green text-sm font-semibold uppercase tracking-wider">Employability & Careers</span>
            <h1 className="text-5xl md:text-7xl font-bold text-warm-white mt-4 mb-6">
              Your Career Starts <span className="text-heritage-gold">Here</span>
            </h1>
            <p className="text-xl text-warm-white/60 mb-10 max-w-2xl mx-auto">
              From training to employment, we guide you through every step of your professional journey.
            </p>
          </motion.div>

          {/* Metrics */}
          <motion.div {...fadeUp} transition={{ delay: 0.2 }} className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {metrics.map((metric, i) => (
              <div key={i} className="bg-charcoal-black/50 border border-white/5 rounded-2xl p-6 text-center">
                <metric.icon className="w-8 h-8 text-heritage-gold mx-auto mb-3" strokeWidth={1.75} />
                <div className="text-3xl font-bold text-heritage-gold mb-1">{metric.value}</div>
                <div className="text-warm-white/50 text-sm">{metric.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Career Pathways */}
      <section className="py-20 px-6 bg-[#0A2240]">
        <div className="max-w-7xl mx-auto">
          <motion.div {...fadeUp} className="text-center mb-16">
            <span className="text-trust-green text-sm font-semibold uppercase tracking-wider">Career Pathways</span>
            <h2 className="text-4xl font-bold text-warm-white mt-4">Multiple Routes to Success</h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {pathways.map((pathway, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="bg-charcoal-black border border-white/5 rounded-2xl p-8 hover:border-heritage-gold/30 transition-all"
              >
                <h3 className="text-xl font-semibold text-warm-white mb-3">{pathway.title}</h3>
                <p className="text-warm-white/50 mb-6">{pathway.description}</p>
                <div className="flex flex-wrap gap-2">
                  {pathway.companies.map((company, j) => (
                    <span key={j} className="bg-white/5 text-warm-white/60 px-3 py-1 rounded-full text-sm">
                      {company}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-warm-white mb-6">Ready to Launch Your Career?</h2>
          <p className="text-warm-white/60 text-lg mb-10">
            Join thousands of graduates who have successfully transitioned into meaningful careers.
          </p>
          <button className="bg-heritage-gold hover:bg-heritage-gold/90 text-institutional-navy px-8 py-4 rounded-xl font-semibold text-lg">
            Start Your Journey
          </button>
        </div>
      </section>

      <footer className="py-12 px-6 border-t border-white/5">
        <div className="max-w-7xl mx-auto text-center text-warm-white/30 text-sm">
          © 2026 Dayrunner Academy. All rights reserved.
        </div>
      </footer>
    </div>
  );
}