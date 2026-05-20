"use client";

import { motion } from "framer-motion";
import { Navbar } from "@/components/navbar";
import { ArrowRight, Building2, Globe, Heart, Users, TrendingUp, Award } from "lucide-react";

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

const partners = [
  { name: "MTN Nigeria", type: "Hiring Partner", logo: "MTN" },
  { name: "Jumia", type: "Hiring Partner", logo: "JUM" },
  { name: "Flutterwave", type: "Hiring Partner", logo: "FW" },
  { name: "Shell Nigeria", type: "Hiring Partner", logo: "SHL" },
  { name: "Andela", type: "Hiring Partner", logo: "AND" },
  { name: "Interswitch", type: "Hiring Partner", logo: "INT" },
  { name: "World Bank", type: "Funder", logo: "WB" },
  { name: "UNESCO", type: "Funder", logo: "UNESCO" },
  { name: "Nigerian Government", type: "Government", logo: "NG" },
  { name: "GTBank", type: "Hiring Partner", logo: "GTB" },
];

const benefits = [
  {
    title: "Access Talent Pipeline",
    description: "Get direct access to our pool of trained, certified graduates ready for hire",
    icon: Users,
  },
  {
    title: "Customized Training",
    description: "Partner with us to develop customized training programmes for your needs",
    icon: Building2,
  },
  {
    title: "Internship Programmes",
    description: "Host students for internships and convert top performers to full-time employees",
    icon: TrendingUp,
  },
  {
    title: "Industry Recognition",
    description: "Align your brand with Nigeria's leading TVET institution and national development",
    icon: Award,
  },
];

export default function PartnersPage() {
  return (
    <div className="min-h-screen bg-institutional-navy">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-20 px-6 bg-[#071B34]">
        <div className="max-w-7xl mx-auto">
          <motion.div {...fadeUp} className="text-center max-w-4xl mx-auto">
            <span className="text-trust-green text-sm font-semibold uppercase tracking-wider">Partners & Sponsors</span>
            <h1 className="text-5xl md:text-7xl font-bold text-warm-white mt-4 mb-6">
              Together <span className="text-heritage-gold">We Build</span>
            </h1>
            <p className="text-xl text-warm-white/60 mb-10 max-w-2xl mx-auto">
              Join the network of organizations transforming Nigeria's workforce through strategic partnerships.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Partner Logos */}
      <section className="py-12 px-6 border-y border-white/5 bg-[#0A2240]">
        <div className="max-w-7xl mx-auto">
          <p className="text-center text-warm-white/40 text-sm mb-8">Our Partners</p>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            {partners.map((partner, i) => (
              <div key={i} className="bg-charcoal-black border border-white/5 rounded-xl p-6 text-center hover:border-heritage-gold/20 transition-all">
                <div className="w-12 h-12 bg-heritage-gold/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <span className="text-heritage-gold font-bold">{partner.logo}</span>
                </div>
                <p className="text-warm-white font-medium text-sm">{partner.name}</p>
                <p className="text-warm-white/40 text-xs">{partner.type}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Benefits */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div {...fadeUp} className="text-center mb-16">
            <h2 className="text-4xl font-bold text-warm-white mt-4">Why Partner With Us</h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {benefits.map((benefit, i) => {
              const Icon = benefit.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-charcoal-black border border-white/5 rounded-2xl p-8"
                >
                  <div className="w-12 h-12 bg-heritage-gold/10 rounded-xl flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-heritage-gold" strokeWidth={1.75} />
                  </div>
                  <h3 className="text-xl font-semibold text-warm-white mb-3">{benefit.title}</h3>
                  <p className="text-warm-white/50">{benefit.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-[#071B34]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-warm-white mb-6">Become a Partner</h2>
          <p className="text-warm-white/60 text-lg mb-10">
            Join hundreds of organizations investing in Nigeria's future workforce.
          </p>
          <button className="bg-heritage-gold hover:bg-heritage-gold/90 text-institutional-navy px-8 py-4 rounded-xl font-semibold text-lg">
            Contact Our Partnerships Team
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