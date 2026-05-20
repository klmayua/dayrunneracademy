"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Navbar } from "@/components/navbar";
import { Clock, Award, TrendingUp, ArrowRight, Check, Laptop, Car, Sprout, HeartPulse, Zap, Hammer } from "lucide-react";

const programmes = [
  {
    id: "digital-tech",
    title: "Digital Technology",
    subtitle: "Software Development & IT",
    description: "Master the skills of the digital economy with our comprehensive technology programme.",
    duration: "12 months",
    certification: "National Certificate II",
    jobs: "Software Developer, IT Support, Data Analyst, Cybersecurity Analyst",
    courses: ["Web Development", "Mobile App Development", "Data Analytics", "Cybersecurity Fundamentals", "Cloud Computing"],
    color: "sky"
  },
  {
    id: "automotive",
    title: "Automotive Engineering",
    subtitle: "Vehicle Technology & Maintenance",
    description: "Become a skilled automotive technician with hands-on training on modern vehicles.",
    duration: "9 months",
    certification: "National Certificate I",
    jobs: "Automotive Technician, Vehicle Inspector, Service Advisor, Parts Manager",
    courses: ["Engine Repair", "Electrical Systems", "Brake Systems", "Suspension & Steering", "Diagnostic Technology"],
    color: "gold"
  },
  {
    id: "agriculture",
    title: "Agriculture & Agribusiness",
    subtitle: "Modern Farming Technology",
    description: "Learn modern agricultural techniques to feed Nigeria and beyond.",
    duration: "6 months",
    certification: "National Certificate I",
    jobs: "Farm Manager, Agricultural Technician, Food Processor, Agripreneur",
    courses: ["Crop Production", "Livestock Management", "Food Processing", "Agricultural Technology", "Business Management"],
    color: "green"
  },
  {
    id: "healthcare",
    title: "Healthcare & Nursing",
    subtitle: "Patient Care Services",
    description: "Start a rewarding career in healthcare with our comprehensive nursing assistant programme.",
    duration: "12 months",
    certification: "National Certificate II",
    jobs: "Nursing Assistant, Medical Assistant, Patient Care Technician, Health Coordinator",
    courses: ["Patient Care", "Medical Terminology", "First Aid & CPR", "Clinical Procedures", "Healthcare Ethics"],
    color: "sky"
  },
  {
    id: "hospitality",
    title: "Hospitality & Tourism",
    subtitle: "Hotel & Tourism Management",
    description: "Enter the thriving hospitality industry with skills in hotel management and tourism.",
    duration: "6 months",
    certification: "Certificate in Hospitality",
    jobs: "Hotel Receptionist, Restaurant Manager, Event Coordinator, Tour Guide",
    courses: ["Front Office Operations", "Food & Beverage Service", "Customer Service", "Event Management", "Tourism Fundamentals"],
    color: "gold"
  },
  {
    id: "manufacturing",
    title: "Manufacturing & Trades",
    subtitle: "Industrial Skills",
    description: "Build a solid career in manufacturing with skills in welding, fabrication, and machining.",
    duration: "9 months",
    certification: "National Certificate I",
    jobs: "Welder, Fabricator, Machinist, Quality Control Technician",
    courses: ["Welding Techniques", "Metal Fabrication", "Machine Operations", "Quality Assurance", "Safety Standards"],
    color: "green"
  }
];

export default function ProgrammesPage() {
  return (
    <div className="min-h-screen bg-institutional-navy">
      <Navbar />
      <section className="pt-32 pb-16 px-6 bg-[#071B34]">
        <div className="max-w-7xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center">
            <span className="text-trust-green text-sm font-semibold uppercase tracking-wider">Our Programmes</span>
            <h1 className="text-5xl font-bold text-warm-white mt-4">Find Your Path</h1>
            <p className="text-warm-white/50 mt-4 max-w-2xl mx-auto text-lg">
              Choose from our range of accredited TVET programmes designed to launch your career
            </p>
          </motion.div>

          <div className="mt-12 flex flex-wrap justify-center gap-4">
            {["All Programmes", "Technology", "Engineering", "Healthcare", "Business"].map((filter, i) => (
              <button 
                key={i}
                className={`px-6 py-3 rounded-full font-medium transition-all ${i === 0 ? 'bg-heritage-gold text-institutional-navy' : 'bg-charcoal-black text-warm-white/70 border border-white/10 hover:border-heritage-gold/30'}`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 pb-20 bg-[#0A2240]">
        <div className="max-w-7xl mx-auto">
          <div className="grid gap-8">
            {programmes.map((prog, i) => (
              <motion.div
                key={prog.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="bg-charcoal-black border border-white/5 rounded-3xl p-8 hover:border-heritage-gold/30 transition-all"
              >
                <div className="grid lg:grid-cols-3 gap-8">
                  <div className="lg:col-span-2">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-heritage-gold text-sm font-medium uppercase tracking-wider">{prog.subtitle}</span>
                    </div>
                    <h3 className="text-2xl font-bold text-warm-white mb-4">{prog.title}</h3>
                    <p className="text-warm-white/50 mb-6">{prog.description}</p>
                    
                    <div className="grid sm:grid-cols-2 gap-4 mb-6">
                      <div className="flex items-center gap-3 text-warm-white/70">
                        <Clock className="w-5 h-5 text-heritage-gold" />
                        <span>{prog.duration}</span>
                      </div>
                      <div className="flex items-center gap-3 text-warm-white/70">
                        <Award className="w-5 h-5 text-heritage-gold" />
                        <span>{prog.certification}</span>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {prog.courses.map((course, j) => (
                        <span key={j} className="bg-white/5 text-warm-white/60 px-3 py-1 rounded-full text-sm">
                          {course}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="lg:border-l lg:border-white/5 lg:pl-8 flex flex-col justify-between">
                    <div>
                      <h4 className="text-warm-white font-semibold mb-3">Career Paths</h4>
                      <p className="text-warm-white/50 text-sm">{prog.jobs}</p>
                    </div>
                    <div className="mt-6">
                      <Link href={`/programmes/${prog.id}`} className="block w-full bg-heritage-gold hover:bg-heritage-gold/90 text-institutional-navy py-3 rounded-xl font-semibold transition-all flex items-center justify-center gap-2">
                        View Details <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-6 bg-charcoal-black/50 border-y border-white/5">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-2xl font-bold text-warm-white mb-4">Not sure which programme is right for you?</h3>
          <p className="text-warm-white/50 mb-8">
            Our career advisors can help you find the perfect fit based on your interests and goals.
          </p>
          <button className="bg-trust-green hover:bg-trust-green/90 text-institutional-navy px-8 py-4 rounded-xl font-semibold transition-all">
            Talk to an Advisor
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