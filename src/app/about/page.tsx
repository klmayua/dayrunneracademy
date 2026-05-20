"use client";

import { motion } from "framer-motion";
import { Navbar } from "@/components/navbar";
import { Award, Users, Globe, MapPin, Target, Heart, Lightbulb } from "lucide-react";

export default function AboutPage() {
  const values = [
    { icon: Target, title: "Excellence", desc: "Delivering world-class vocational education" },
    { icon: Heart, title: "Impact", desc: "Transforming lives through skills" },
    { icon: Lightbulb, title: "Innovation", desc: "Embracing technology in learning" },
    { icon: Globe, title: "Accessibility", desc: "Quality education for all Nigerians" },
  ];

  const stats = [
    { value: "15,000+", label: "Students Trained" },
    { value: "89%", label: "Employment Rate" },
    { value: "36", label: "States Covered" },
    { value: "500+", label: "Hiring Partners" },
  ];

  const team = [
    { name: "Dr. Amina Hassan", role: "Executive Director", image: "AH" },
    { name: "Prof. Chidi Obi", role: "Academic Director", image: "CO" },
    { name: "Mrs. Funke Adeyemi", role: "Operations Lead", image: "FA" },
    { name: "Mr. Ibrahim Yusuf", role: "Partnerships", image: "IY" },
  ];

  return (
    <div className="min-h-screen bg-institutional-navy">
      <Navbar />
      <section className="pt-32 pb-16 px-6 bg-[#071B34]">
        <div className="max-w-7xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center max-w-3xl mx-auto">
            <span className="text-trust-green text-sm font-semibold uppercase tracking-wider">About Us</span>
            <h1 className="text-5xl font-bold text-warm-white mt-4">Building Nigeria's Future Workforce</h1>
            <p className="text-warm-white/60 text-lg mt-6">
              Dayrunner Academy is Nigeria's premier Technical and Vocational Education and Training (TVET) institution, committed to transforming ambitious youth into skilled professionals.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 px-6 bg-[#0A2240]">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}>
              <h2 className="text-3xl font-bold text-warm-white mb-6">Our Story</h2>
              <div className="space-y-4 text-warm-white/60">
                <p>
                  Founded in 2021, Dayrunner Academy emerged from a simple vision: to bridge the gap between Nigeria's youth unemployment and the skills gap in industries across the country.
                </p>
                <p>
                  We recognized that traditional education wasn't equipping young Nigerians with the practical skills employers needed. Through partnerships with industry leaders, we've developed a curriculum that's relevant, practical, and directly aligned with market demands.
                </p>
                <p>
                  Today, we've grown to become one of the most trusted TVET institutions in Nigeria, with programmes spanning technology, healthcare, agriculture, hospitality, and manufacturing.
                </p>
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="grid grid-cols-2 gap-4">
              <div className="bg-charcoal-black border border-white/5 rounded-2xl p-6 text-center">
                <Award className="w-10 h-10 text-heritage-gold mx-auto mb-3" />
                <div className="text-2xl font-bold text-warm-white">2021</div>
                <div className="text-warm-white/40 text-sm">Founded</div>
              </div>
              <div className="bg-charcoal-black border border-white/5 rounded-2xl p-6 text-center">
                <Users className="w-10 h-10 text-sky-blue mx-auto mb-3" />
                <div className="text-2xl font-bold text-warm-white">50+</div>
                <div className="text-warm-white/40 text-sm">Trainers</div>
              </div>
              <div className="bg-charcoal-black border border-white/5 rounded-2xl p-6 text-center">
                <Globe className="w-10 h-10 text-trust-green mx-auto mb-3" />
                <div className="text-2xl font-bold text-warm-white">36</div>
                <div className="text-warm-white/40 text-sm">States</div>
              </div>
              <div className="bg-charcoal-black border border-white/5 rounded-2xl p-6 text-center">
                <MapPin className="w-10 h-10 text-heritage-gold mx-auto mb-3" />
                <div className="text-2xl font-bold text-warm-white">5</div>
                <div className="text-warm-white/40 text-sm">Campuses</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-[#071B34]">
        <div className="max-w-7xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-16">
            <h2 className="text-4xl font-bold text-warm-white">Our Core Values</h2>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }} className="bg-charcoal-black border border-white/5 rounded-2xl p-8 text-center hover:border-heritage-gold/30 transition-all">
                <value.icon className="w-12 h-12 text-heritage-gold mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-warm-white mb-2">{value.title}</h3>
                <p className="text-warm-white/50">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-16">
            <h2 className="text-4xl font-bold text-warm-white">Our Impact</h2>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }} className="bg-gradient-to-br from-charcoal-black to-institutional-navy border border-white/5 rounded-2xl p-8 text-center">
                <div className="text-5xl font-bold text-heritage-gold mb-2">{stat.value}</div>
                <div className="text-warm-white/60">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-[#071B34]">
        <div className="max-w-7xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-16">
            <h2 className="text-4xl font-bold text-warm-white">Leadership Team</h2>
            <p className="text-warm-white/50 mt-4">Meet the people driving Nigeria's TVET transformation</p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }} className="bg-charcoal-black border border-white/5 rounded-2xl p-6 text-center hover:border-heritage-gold/30 transition-all">
                <div className="w-20 h-20 bg-gradient-to-br from-heritage-gold to-yellow-600 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-2xl font-bold">
                  {member.image}
                </div>
                <h3 className="text-warm-white font-semibold">{member.name}</h3>
                <p className="text-warm-white/50 text-sm">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-gradient-to-r from-heritage-gold/20 via-transparent to-transparent">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-warm-white mb-6">Join Our Mission</h2>
          <p className="text-warm-white/60 text-lg mb-10">
            Whether you're a student, trainer, partner, or donor, there's a place for you in the Dayrunner ecosystem.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="bg-heritage-gold hover:bg-heritage-gold/90 text-institutional-navy px-8 py-4 rounded-xl font-semibold text-lg">
              Apply Now
            </button>
            <button className="border border-warm-white/20 hover:border-warm-white/40 text-warm-white px-8 py-4 rounded-xl font-semibold text-lg">
              Partner With Us
            </button>
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