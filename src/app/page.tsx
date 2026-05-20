"use client";

import { motion } from "framer-motion";
import { Navbar } from "@/components/navbar";
import { 
  GraduationCap, 
  Users, 
  TrendingUp, 
  Award, 
  ArrowRight, 
  MapPin, 
  Calendar,
  CheckCircle,
  Laptop,
  Zap,
  HeartPulse,
  Sprout,
  Car,
  Hammer,
  Building2,
  Map,
  FileText,
  ClipboardCheck,
  UserCheck,
  ShieldCheck
} from "lucide-react";

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

const statIcons = [Users, TrendingUp, Building2, Map];

export default function Home() {
  return (
    <div className="min-h-screen bg-institutional-navy">
      <Navbar />

      {/* Hero Section with Strategic Image */}
      <section className="pt-32 pb-20 px-6 relative overflow-hidden">
        {/* Background image with overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1523240795612-9a054f0b6f67?w=1920&q=80" 
            alt="African students in modern technical learning environment"
            className="w-full h-full object-cover opacity-25"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#041326] via-[#041326]/90 to-[#041326]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-heritage-gold/5 via-transparent to-transparent" />
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div {...fadeUp} className="text-center lg:text-left">
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

            {/* Right Side - Editorial Image */}
            <motion.div {...fadeUp} transition={{ delay: 0.15 }} className="hidden lg:block relative">
              <div className="relative aspect-[4/3] rounded-[28px] overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800&q=80"
                  alt="African technical students in modern learning environment"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-[rgba(4,19,38,0.35)]" />
                {/* Gold accent frame */}
                <div className="absolute inset-4 border border-heritage-gold/30 rounded-[20px]" />
              </div>
              {/* Floating stat card */}
              <div className="card absolute -bottom-6 -left-6 p-5 rounded-2xl border border-heritage-gold/20">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-trust-green/20 rounded-xl flex items-center justify-center">
                    <Award className="w-6 h-6 text-trust-green" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-warm-white">89%</div>
                    <div className="text-warm-white/50 text-sm">Employment Rate</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Stats with Icons */}
          <motion.div {...fadeUp} transition={{ delay: 0.2 }} className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { value: "15,000+", label: "Students Enrolled", icon: Users },
              { value: "89%", label: "Employment Rate", icon: TrendingUp },
              { value: "50+", label: "Industry Partners", icon: Building2 },
              { value: "36", label: "States Covered", icon: Map },
            ].map((stat, i) => (
              <div key={i} className="card rounded-2xl p-6 text-center hover:border-heritage-gold/20 transition-all group">
                <div className="w-12 h-12 bg-heritage-gold/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-6 h-6 text-heritage-gold" strokeWidth={1.75} />
                </div>
                <div className="text-3xl font-bold text-heritage-gold mb-1">{stat.value}</div>
                <div className="text-warm-white/50 text-sm">{stat.label}</div>
              </div>
            ))}
          </motion.div>
</div>
      </section>

{/* Programme Tracks - Elevated Dark */}
      <section id="programmes" className="py-20 px-6 bg-[#071B34]">
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
                icon: Laptop,
                color: "sky",
                image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=600&q=80"
              },
              {
                title: "Automotive Engineering",
                desc: "Vehicle maintenance, diagnostics, and automotive technology",
                icon: Car,
                color: "gold",
                image: "https://images.unsplash.com/photo-1487754180471-31c1d3f0b8e1?w=600&q=80"
              },
              {
                title: "Agriculture & Agribusiness",
                desc: "Modern farming techniques, food processing, and agricultural technology",
                icon: Sprout,
                color: "green",
                image: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=600&q=80"
              },
              {
                title: "Healthcare & Nursing",
                desc: "Patient care, medical assistance, and healthcare operations",
                icon: HeartPulse,
                color: "sky",
                image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=600&q=80"
              },
              {
                title: "Hospitality & Tourism",
                desc: "Hotel management, culinary arts, and tourism operations",
                icon: Zap,
                color: "gold",
                image: "https://images.unsplash.com/photo-1551632436-cbf8dd35adfa?w=600&q=80"
              },
              {
                title: "Manufacturing & Trades",
                desc: "Welding, fabrication, machining, and industrial production",
                icon: Hammer,
                color: "green",
                image: "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?w=600&q=80"
              },
            ].map((prog, i) => {
              const Icon = prog.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="card border border-white/5 rounded-2xl overflow-hidden hover:border-heritage-gold/30 transition-all group"
                >
                  {/* Programme thumbnail */}
                  <div className="relative h-40 overflow-hidden">
                    <img 
                      src={prog.image}
                      alt={prog.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-[rgba(4,19,38,0.4)]" />
                    <div className="absolute top-4 left-4 w-10 h-10 bg-heritage-gold/90 rounded-lg flex items-center justify-center">
                      <Icon className="w-5 h-5 text-institutional-navy" strokeWidth={2} />
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-warm-white mb-3 group-hover:text-heritage-gold transition-colors">
                      {prog.title}
                    </h3>
                    <p className="text-warm-white/50">{prog.desc}</p>
                    <div className="mt-6 flex items-center text-heritage-gold text-sm font-medium cursor-pointer">
                      View Courses <ArrowRight className="w-4 h-4 ml-1" />
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Benefits Section - Atmospheric Dark */}
      <section className="py-20 px-6 bg-[#0A2240]">
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
                    <CheckCircle className="w-5 h-5 text-trust-green flex-shrink-0" strokeWidth={1.75} />
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
              <div className="relative aspect-square rounded-3xl overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800&q=80"
                  alt="Young African professional in modern workplace"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-[rgba(4,19,38,0.35)]" />
                {/* Overlay stats card */}
                <div className="absolute bottom-6 left-6 right-6 card p-5 rounded-2xl border border-heritage-gold/20">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-trust-green/20 rounded-lg flex items-center justify-center">
                        <TrendingUp className="w-5 h-5 text-trust-green" />
                      </div>
                      <div>
                        <div className="text-lg font-bold text-warm-white">89%</div>
                        <div className="text-warm-white/40 text-xs">Employment Rate</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-heritage-gold/20 rounded-lg flex items-center justify-center">
                        <Award className="w-5 h-5 text-heritage-gold" />
                      </div>
                      <div>
                        <div className="text-lg font-bold text-warm-white">100%</div>
                        <div className="text-warm-white/40 text-xs">Certification</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* How It Works - Elevated */}
      <section className="py-20 px-6 bg-[#071B34]">
        <div className="max-w-7xl mx-auto">
          <motion.div {...fadeUp} className="text-center mb-16">
            <span className="text-trust-green text-sm font-semibold uppercase tracking-wider">Admissions</span>
            <h2 className="text-4xl font-bold text-warm-white mt-4">Your Journey Starts Here</h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { step: "01", title: "Apply Online", desc: "Complete our simple application form with your basic information", icon: FileText },
              { step: "02", title: "Assessment", desc: "Take our eligibility assessment to find the right programme", icon: ClipboardCheck },
              { step: "03", title: "Enroll & Start", desc: "Confirm your placement and begin your transformation", icon: GraduationCap },
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.15 }}
                  viewport={{ once: true }}
                  className="relative"
                >
                  <div className="text-8xl font-bold text-heritage-gold/10 absolute -top-4 -left-2">{item.step}</div>
                  <div className="relative z-10 card border border-white/5 rounded-2xl p-8">
                    <div className="w-12 h-12 bg-heritage-gold/20 rounded-xl flex items-center justify-center mb-6">
                      <Icon className="w-6 h-6 text-heritage-gold" strokeWidth={1.75} />
                    </div>
                    <h3 className="text-xl font-semibold text-warm-white mb-3">{item.title}</h3>
                    <p className="text-warm-white/50">{item.desc}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>

          <div className="text-center mt-12">
            <a href="/admissions" className="inline-block bg-heritage-gold hover:bg-heritage-gold/90 text-institutional-navy px-8 py-4 rounded-xl font-semibold text-lg transition-all">
              Begin Application
            </a>
          </div>
        </div>
      </section>

      {/* CTA Section with Visual */}
      <section className="py-24 px-6 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1920&q=80"
            alt="Students collaborating in modern learning environment"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#041326] via-[#041326]/95 to-[#041326]" />
        </div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-4xl font-bold text-warm-white mb-6">Ready to Transform Your Future?</h2>
          <p className="text-warm-white/60 text-lg mb-10">
            Join thousands of students who have already taken the first step towards a rewarding career.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="/admissions" className="bg-heritage-gold hover:bg-heritage-gold/90 text-institutional-navy px-8 py-4 rounded-xl font-semibold text-lg transition-all">
              Apply Now
            </a>
            <a href="/contact" className="border border-warm-white/20 hover:border-warm-white/40 text-warm-white px-8 py-4 rounded-xl font-semibold text-lg transition-all">
              Contact Admissions
            </a>
          </div>
        </div>
      </section>

      {/* Trust Indicators - Institutional Validation */}
      <section className="py-16 px-6 bg-[#0A2240]">
        <div className="max-w-7xl mx-auto">
          <p className="text-center text-warm-white/40 text-sm mb-10">Trusted by leading organizations</p>
          <div className="flex flex-wrap justify-center items-center gap-16 opacity-40">
            {["Nigerian Government", "World Bank", "UNESCO", "GTBank", "Shell Nigeria"].map((org, i) => (
              <span key={i} className="text-warm-white/50 text-lg font-medium tracking-wide">{org}</span>
            ))}
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
                <li><a href="/about" className="hover:text-warm-white">About Us</a></li>
                <li><a href="/admissions" className="hover:text-warm-white">Admissions</a></li>
                <li><a href="#" className="hover:text-warm-white">Campus Life</a></li>
                <li><a href="/contact" className="hover:text-warm-white">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-warm-white font-semibold mb-4">Contact</h4>
              <div className="space-y-3 text-warm-white/50">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" strokeWidth={1.75} /> Abuja, Nigeria
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" strokeWidth={1.75} /> Mon-Fri 8am-6pm
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