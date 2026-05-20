"use client";

import { motion } from "framer-motion";
import { GraduationCap, MapPin, Phone, Mail, MessageCircle, Clock, Send } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-institutional-navy">
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
            <a href="/admissions" className="text-warm-white/70 hover:text-warm-white">Admissions</a>
            <a href="/contact" className="text-heritage-gold">Contact</a>
          </div>
          <button className="bg-heritage-gold hover:bg-heritage-gold/90 text-institutional-navy px-5 py-2 rounded-lg font-semibold">
            Apply Now
          </button>
        </div>
      </nav>

      <section className="pt-32 pb-16 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center">
            <h1 className="text-5xl font-bold text-warm-white">Get In Touch</h1>
            <p className="text-warm-white/50 mt-4 text-lg">We're here to help you on your journey</p>
          </motion.div>
        </div>
      </section>

      <section className="px-6 pb-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="space-y-8">
              <div className="grid sm:grid-cols-2 gap-6">
                {[
                  { icon: Phone, label: "Phone", value: "+234 800 DAYRUNNER", desc: "Mon-Fri 8am-6pm" },
                  { icon: Mail, label: "Email", value: "admissions@dayrunner.edu.ng", desc: "We'll respond within 24hrs" },
                  { icon: MessageCircle, label: "WhatsApp", value: "+234 800 DAYRUNNER", desc: "Quick chat support" },
                  { icon: MapPin, label: "Location", value: "Abuja, Nigeria", desc: "Visit our campus" },
                ].map((item, i) => (
                  <div key={i} className="bg-charcoal-black border border-white/5 rounded-2xl p-6">
                    <item.icon className="w-6 h-6 text-heritage-gold mb-3" />
                    <div className="text-warm-white font-medium">{item.label}</div>
                    <div className="text-warm-white/70 text-sm mt-1">{item.value}</div>
                    <div className="text-warm-white/40 text-xs mt-1">{item.desc}</div>
                  </div>
                ))}
              </div>

              <div className="bg-charcoal-black border border-white/5 rounded-2xl p-6">
                <h3 className="text-warm-white font-semibold mb-4">Campus Hours</h3>
                <div className="space-y-2 text-warm-white/60 text-sm">
                  <div className="flex justify-between"><span>Monday - Friday</span><span>8:00 AM - 6:00 PM</span></div>
                  <div className="flex justify-between"><span>Saturday</span><span>9:00 AM - 2:00 PM</span></div>
                  <div className="flex justify-between"><span>Sunday</span><span>Closed</span></div>
                </div>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="bg-charcoal-black border border-white/5 rounded-3xl p-8">
              <h3 className="text-2xl font-bold text-warm-white mb-6">Send us a Message</h3>
              <form className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <input type="text" placeholder="First Name" className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-warm-white focus:border-heritage-gold focus:outline-none" />
                  <input type="text" placeholder="Last Name" className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-warm-white focus:border-heritage-gold focus:outline-none" />
                </div>
                <input type="email" placeholder="Email Address" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-warm-white focus:border-heritage-gold focus:outline-none" />
                <input type="tel" placeholder="Phone Number" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-warm-white focus:border-heritage-gold focus:outline-none" />
                <select className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-warm-white focus:border-heritage-gold focus:outline-none">
                  <option>Select Topic</option>
                  <option>Admissions Inquiry</option>
                  <option>Programme Information</option>
                  <option>Scholarships</option>
                  <option>Partnership</option>
                  <option>Other</option>
                </select>
                <textarea placeholder="Your Message" rows={5} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-warm-white focus:border-heritage-gold focus:outline-none resize-none" />
                <button type="submit" className="w-full bg-heritage-gold hover:bg-heritage-gold/90 text-institutional-navy py-4 rounded-xl font-semibold flex items-center justify-center gap-2">
                  Send Message <Send className="w-4 h-4" />
                </button>
              </form>
            </motion.div>
          </div>
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