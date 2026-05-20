"use client";

import { motion } from "framer-motion";
import { 
  GraduationCap, 
  Users, 
  TrendingUp, 
  Award, 
  ArrowRight, 
  MapPin, 
  Calendar,
  CheckCircle
} from "lucide-react";

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

export default function Home() {
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
            <a href="#programmes" className="text-warm-white/70 hover:text-warm-white transition-colors">Programmes</a>
            <a href="#about" className="text-warm-white/70 hover:text-warm-white transition-colors">About</a>
            <a href="#admissions" className="text-warm-white/70 hover:text-warm-white transition-colors">Admissions</a>
            <a href="#contact" className="text-warm-white/70 hover:text-warm-white transition-colors">Contact</a>
          </div>
          <button className="bg-heritage-gold hover:bg-heritage-gold/90 text-institutional-navy px-5 py-2 rounded-lg font-semibold transition-all">
            Apply Now
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-heritage-gold/10 via-transparent to-transparent" />
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div {...fadeUp} className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-trust-green/10 border border-trust-green/20 rounded-full px-4 py-2 mb-6">
              <span className="w-2 h-2 bg-trust-green rounded-full animate-pulse" />
              <span className="text-trust-green text-sm font-medium">Nigeria's Premier TVET Institution</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-warm-white mb-6 leading-tight">
              Building Nigeria's
              <span className="text-heritage-gold"> Future Workforce</span>
            </h1>
            <p className="text-xl text-warm-white/60 mb-10 max-w-2xl mx-auto">
              Empowering youth with industry-relevant skills, certifications, and employment pathways through world-class technical and vocational education.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button className="bg-heritage-gold hover:bg-heritage-gold/90 text-institutional-navy px-8 py-4 rounded-xl font-semibold text-lg transition-all flex items-center gap-2">
                Start Your Journey <ArrowRight className="w-5 h-5" />
              </button>
              <button className="border border-warm-white/20 hover:border-warm-white/40 text-warm-white px-8 py-4 rounded-xl font-semibold text-lg transition-all">
                Explore Programmes
              </button>
            </div>
          </motion.div>

          {/* Stats */}
          <motion.div {...fadeUp} transition={{ delay: 0.2 }} className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { value: "15,000+", label: "Students Enrolled" },
              { value: "89%", label: "Employment Rate" },
              { value: "50+", label: "Industry Partners" },
              { value: "36", label: "States Covered" },
            ].map((stat, i) => (
              <div key={i} className="bg-charcoal-black/50 border border-white/5 rounded-2xl p-6 text-center">
                <div className="text-3xl font-bold text-heritage-gold mb-1">{stat.value}</div>
                <div className="text-warm-white/50 text-sm">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-12 px-6 border-y border-white/5 bg-charcoal-black/30">
        <div className="max-w-7xl mx-auto">
          <p className="text-center text-warm-white/40 text-sm mb-8">Trusted by leading organizations</p>
          <div className="flex flex-wrap justify-center items-center gap-12 opacity-50">
            {["Nigerian Government", "World Bank", "UNESCO", "GTBank", "Shell Nigeria"].map((org, i) => (
              <span key={i} className="text-warm-white/60 text-lg font-medium">{org}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Programme Tracks */}
      <section id="programmes" className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div {...fadeUp} className="text-center mb-16">
            <span className="text-trust-green text-sm font-semibold uppercase tracking-wider">Our Programmes</span>
            <h2 className="text-4xl font-bold text-warm-white mt-4">Industry-Ready Skills</h2>
            <p className="text-warm-white/50 mt-4 max-w-2xl mx-auto">
              Choose from our range of accredited TVET programmes designed to meet current market demands
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Digital Technology",
                desc: "Software development, data analytics, cybersecurity, and IT support",
                icon: "💻",
                color: "sky"
              },
              {
                title: "Automotive Engineering",
                desc: "Vehicle maintenance, diagnostics, and automotive technology",
                icon: "🚗",
                color: "gold"
              },
              {
                title: "Agriculture & Agribusiness",
                desc: "Modern farming techniques, food processing, and agricultural technology",
                icon: "🌾",
                color: "green"
              },
              {
                title: "Healthcare & Nursing",
                desc: "Patient care, medical assistance, and healthcare operations",
                icon: "🏥",
                color: "sky"
              },
              {
                title: "Hospitality & Tourism",
                desc: "Hotel management, culinary arts, and tourism operations",
                icon: "🏨",
                color: "gold"
              },
              {
                title: "Manufacturing & Trades",
                desc: "Welding, fabrication, machining, and industrial production",
                icon: "⚙️",
                color: "green"
              },
            ].map((prog, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="bg-charcoal-black border border-white/5 rounded-2xl p-8 hover:border-heritage-gold/30 transition-all group"
              >
                <div className="text-4xl mb-4">{prog.icon}</div>
                <h3 className="text-xl font-semibold text-warm-white mb-3 group-hover:text-heritage-gold transition-colors">
                  {prog.title}
                </h3>
                <p className="text-warm-white/50">{prog.desc}</p>
                <div className="mt-6 flex items-center text-heritage-gold text-sm font-medium cursor-pointer">
                  View Courses <ArrowRight className="w-4 h-4 ml-1" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-6 bg-charcoal-black/50">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div {...fadeUp}>
              <span className="text-trust-green text-sm font-semibold uppercase tracking-wider">Why Dayrunner</span>
              <h2 className="text-4xl font-bold text-warm-white mt-4 mb-6">Your Path to Success</h2>
              <p className="text-warm-white/50 text-lg mb-8">
                We combine world-class education with practical industry experience to transform ambitious youth into skilled professionals.
              </p>
              <div className="space-y-4">
                {[
                  "Industry-recognized certifications",
                  "Hands-on practical training",
                  "Internship placements with top employers",
                  "Career counseling and job placement support",
                  "Flexible learning options",
                  "Scholarship opportunities for qualifying students"
                ].map((benefit, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-trust-green flex-shrink-0" />
                    <span className="text-warm-white/80">{benefit}</span>
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-charcoal-black to-institutional-navy border border-white/10 rounded-3xl p-8">
                <div className="grid grid-cols-2 gap-6">
                  <div className="bg-white/5 rounded-2xl p-6 text-center">
                    <TrendingUp className="w-8 h-8 text-trust-green mx-auto mb-3" />
                    <div className="text-2xl font-bold text-warm-white">89%</div>
                    <div className="text-warm-white/40 text-sm">Employment Rate</div>
                  </div>
                  <div className="bg-white/5 rounded-2xl p-6 text-center">
                    <Award className="w-8 h-8 text-heritage-gold mx-auto mb-3" />
                    <div className="text-2xl font-bold text-warm-white">100%</div>
                    <div className="text-warm-white/40 text-sm">Certification Rate</div>
                  </div>
                  <div className="bg-white/5 rounded-2xl p-6 text-center">
                    <Users className="w-8 h-8 text-sky-blue mx-auto mb-3" />
                    <div className="text-2xl font-bold text-warm-white">500+</div>
                    <div className="text-warm-white/40 text-sm">Hiring Partners</div>
                  </div>
                  <div className="bg-white/5 rounded-2xl p-6 text-center">
                    <GraduationCap className="w-8 h-8 text-heritage-gold mx-auto mb-3" />
                    <div className="text-2xl font-bold text-warm-white">15K+</div>
                    <div className="text-warm-white/40 text-sm">Alumni</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div {...fadeUp} className="text-center mb-16">
            <span className="text-trust-green text-sm font-semibold uppercase tracking-wider">Admissions</span>
            <h2 className="text-4xl font-bold text-warm-white mt-4">Your Journey Starts Here</h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { step: "01", title: "Apply Online", desc: "Complete our simple application form with your basic information" },
              { step: "02", title: "Assessment", desc: "Take our eligibility assessment to find the right programme" },
              { step: "03", title: "Enroll & Start", desc: "Confirm your placement and begin your transformation" },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.15 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="text-8xl font-bold text-heritage-gold/10 absolute -top-4 -left-2">{item.step}</div>
                <div className="relative z-10 bg-charcoal-black border border-white/5 rounded-2xl p-8">
                  <div className="w-12 h-12 bg-heritage-gold/20 rounded-xl flex items-center justify-center mb-6">
                    <span className="text-heritage-gold font-bold">{item.step}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-warm-white mb-3">{item.title}</h3>
                  <p className="text-warm-white/50">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <button className="bg-heritage-gold hover:bg-heritage-gold/90 text-institutional-navy px-8 py-4 rounded-xl font-semibold text-lg transition-all">
              Begin Application
            </button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-heritage-gold/20 via-heritage-gold/10 to-transparent">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-warm-white mb-6">Ready to Transform Your Future?</h2>
          <p className="text-warm-white/60 text-lg mb-10">
            Join thousands of students who have already taken the first step towards a rewarding career.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="bg-heritage-gold hover:bg-heritage-gold/90 text-institutional-navy px-8 py-4 rounded-xl font-semibold text-lg transition-all">
              Apply Now
            </button>
            <button className="border border-warm-white/20 hover:border-warm-white/40 text-warm-white px-8 py-4 rounded-xl font-semibold text-lg transition-all">
              Contact Admissions
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 px-6 border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div>
              <div className="flex items-center gap-2 mb-6">
                <div className="w-10 h-10 bg-gradient-to-br from-heritage-gold to-yellow-600 rounded-lg flex items-center justify-center">
                  <GraduationCap className="w-6 h-6 text-institutional-navy" />
                </div>
                <span className="text-xl font-bold text-warm-white">Dayrunner</span>
              </div>
              <p className="text-warm-white/50">
                Nigeria's leading TVET institution, building the workforce of tomorrow.
              </p>
            </div>
            <div>
              <h4 className="text-warm-white font-semibold mb-4">Programmes</h4>
              <ul className="space-y-2 text-warm-white/50">
                <li><a href="#" className="hover:text-warm-white">Digital Technology</a></li>
                <li><a href="#" className="hover:text-warm-white">Automotive</a></li>
                <li><a href="#" className="hover:text-warm-white">Agriculture</a></li>
                <li><a href="#" className="hover:text-warm-white">Healthcare</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-warm-white font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-warm-white/50">
                <li><a href="#" className="hover:text-warm-white">About Us</a></li>
                <li><a href="#" className="hover:text-warm-white">Admissions</a></li>
                <li><a href="#" className="hover:text-warm-white">Campus Life</a></li>
                <li><a href="#" className="hover:text-warm-white">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-warm-white font-semibold mb-4">Contact</h4>
              <div className="space-y-3 text-warm-white/50">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" /> Abuja, Nigeria
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" /> Mon-Fri 8am-6pm
                </div>
              </div>
            </div>
          </div>
          <div className="border-t border-white/5 pt-8 text-center text-warm-white/30 text-sm">
            © 2026 Dayrunner Academy. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}