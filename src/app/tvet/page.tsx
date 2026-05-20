"use client";

import { motion } from "framer-motion";
import { GraduationCap, ArrowRight, CheckCircle, Users, Award, Globe, Target, TrendingUp, MapPin, Calendar } from "lucide-react";

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

const stats = [
  { value: "50,000+", label: "Youth Trained Annually", icon: Users },
  { value: "89%", label: "Employment Rate", icon: TrendingUp },
  { value: "36", label: "States Covered", icon: MapPin },
  { value: "500+", label: "Hiring Partners", icon: Award },
];

const pillars = [
  {
    title: "Technical Skills",
    description: "Industry-relevant vocational training in high-demand sectors",
    icon: Target,
  },
  {
    title: "Digital Literacy",
    description: "Computer fundamentals, software proficiency, and online safety",
    icon: Globe,
  },
  {
    title: "Entrepreneurship",
    description: "Business acumen, startup skills, and financial literacy",
    icon: TrendingUp,
  },
  {
    title: "Soft Skills",
    description: "Communication, teamwork, and professional development",
    icon: Users,
  },
];

export default function TVETPage() {
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
            <a href="/tvet" className="text-heritage-gold">TVET</a>
            <a href="/admissions" className="text-warm-white/70 hover:text-warm-white">Admissions</a>
            <a href="/contact" className="text-warm-white/70 hover:text-warm-white">Contact</a>
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
            <span className="text-trust-green text-sm font-semibold uppercase tracking-wider">National TVET Initiative</span>
            <h1 className="text-5xl md:text-7xl font-bold text-warm-white mt-4 mb-6">
              Transforming Nigeria's <span className="text-heritage-gold">Workforce</span>
            </h1>
            <p className="text-xl text-warm-white/60 mb-10 max-w-2xl mx-auto">
              A national programme dedicated to equipping Nigerian youth with practical skills, 
              certifications, and employment pathways for a thriving economy.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button className="bg-heritage-gold hover:bg-heritage-gold/90 text-institutional-navy px-8 py-4 rounded-xl font-semibold text-lg transition-all flex items-center gap-2">
                Join the Initiative <ArrowRight className="w-5 h-5" />
              </button>
              <button className="border border-warm-white/20 hover:border-warm-white/40 text-warm-white px-8 py-4 rounded-xl font-semibold text-lg transition-all">
                Partner With Us
              </button>
            </div>
          </motion.div>

          {/* Stats */}
          <motion.div {...fadeUp} transition={{ delay: 0.2 }} className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, i) => (
              <div key={i} className="bg-charcoal-black/50 border border-white/5 rounded-2xl p-6 text-center">
                <stat.icon className="w-8 h-8 text-heritage-gold mx-auto mb-3" strokeWidth={1.75} />
                <div className="text-3xl font-bold text-heritage-gold mb-1">{stat.value}</div>
                <div className="text-warm-white/50 text-sm">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* About */}
      <section className="py-20 px-6 bg-[#0A2240]">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div {...fadeUp}>
              <span className="text-trust-green text-sm font-semibold uppercase tracking-wider">About the Initiative</span>
              <h2 className="text-4xl font-bold text-warm-white mt-4 mb-6">Building the Future of Work</h2>
              <p className="text-warm-white/50 text-lg mb-8">
                The Dayrunner Academy TVET Initiative is a national programme designed to bridge the gap 
                between education and employment in Nigeria. By partnering with industry leaders, 
                government agencies, and international organizations, we're creating a pipeline of 
                skilled professionals ready to drive economic growth.
              </p>
              <div className="space-y-4">
                {[
                  "Aligned with National Skills Framework",
                  "Industry-validated curriculum",
                  "Internship and apprenticeship opportunities",
                  "Certification recognized across Africa"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-trust-green flex-shrink-0" strokeWidth={1.75} />
                    <span className="text-warm-white/80">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div {...fadeUp} className="relative">
              <div className="bg-gradient-to-br from-charcoal-black to-institutional-navy border border-white/10 rounded-3xl p-8">
                <h3 className="text-2xl font-bold text-warm-white mb-6">Our Four Pillars</h3>
                <div className="space-y-4">
                  {pillars.map((pillar, i) => {
                    const Icon = pillar.icon;
                    return (
                      <div key={i} className="flex items-start gap-4 p-4 bg-white/5 rounded-xl">
                        <Icon className="w-6 h-6 text-heritage-gold flex-shrink-0 mt-0.5" strokeWidth={1.75} />
                        <div>
                          <h4 className="text-warm-white font-semibold">{pillar.title}</h4>
                          <p className="text-warm-white/50 text-sm">{pillar.description}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-warm-white mb-6">Ready to Transform Your Future?</h2>
          <p className="text-warm-white/60 text-lg mb-10">
            Whether you're a student, employer, or partner, there's a place for you in the TVET ecosystem.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="bg-heritage-gold hover:bg-heritage-gold/90 text-institutional-navy px-8 py-4 rounded-xl font-semibold text-lg">
              Apply Now
            </button>
            <button className="border border-warm-white/20 hover:border-warm-white/40 text-warm-white px-8 py-4 rounded-xl font-semibold text-lg">
              Become a Partner
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-white/5">
        <div className="max-w-7xl mx-auto text-center text-warm-white/30 text-sm">
          © 2026 Dayrunner Academy TVET Initiative. All rights reserved.
        </div>
      </footer>
    </div>
  );
}