"use client";

import { motion } from "framer-motion";
import { Navbar } from "@/components/navbar";
import Link from "next/link";
import { 
  GraduationCap, 
  ArrowRight, 
  CheckCircle, 
  Users, 
  Award, 
  Globe, 
  Target, 
  TrendingUp, 
  MapPin, 
  Calendar,
  Building2,
  Briefcase,
  FileText,
  Shield,
  Heart,
  Lightbulb,
  ChevronRight
} from "lucide-react";

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

const stats = [
  { value: "50,000+", label: "Youth Trained Annually", icon: Users },
  { value: "89%", label: "6-Month Employment Rate", icon: TrendingUp },
  { value: "36", label: "State Operations", icon: MapPin },
  { value: "520+", label: "Hiring Partners", icon: Building2 },
];

const pillars = [
  {
    title: "Technical Competency",
    description: "Industry-validated vocational skills aligned with national occupational standards and employer requirements",
    icon: Target,
  },
  {
    title: "Digital Proficiency",
    description: "Computer fundamentals, software applications, cybersecurity awareness, and digital literacy",
    icon: Globe,
  },
  {
    title: "Entrepreneurial Capacity",
    description: "Business planning, financial literacy, market access skills, and self-employment capabilities",
    icon: Lightbulb,
  },
  {
    title: "Professional Development",
    description: "Communication, teamwork, problem-solving, and workplace readiness competencies",
    icon: Briefcase,
  },
];

const eligibility = [
  { title: "Age Requirement", desc: "18-35 years old" },
  { title: "Education", desc: "Minimum completed secondary education" },
  { title: "Residency", desc: "Nigerian citizen or legal resident" },
  { title: "Commitment", desc: "Full programme participation required" },
];

const trainingCategories = [
  "Information Technology & Software",
  "Automotive Technology",
  "Healthcare & Allied Health",
  "Agriculture & Agribusiness",
  "Hospitality & Tourism",
  "Manufacturing & Technical Trades",
  "Finance & Business Services",
  "Construction & Building Trades",
];

const faqs = [
  {
    q: "What is the duration of the programme?",
    a: "Programmes range from 6-12 months depending on the qualification level and intensity. National Certificate I programmes typically run 6-9 months, while National Certificate II programmes span 9-12 months."
  },
  {
    q: "Are there tuition fees?",
    a: "The TVET Initiative offers subsidized training with flexible payment options. Scholarship provisions are available for qualifying applicants from economically disadvantaged backgrounds."
  },
  {
    q: "Where are training centres located?",
    a: "We operate across 36 states through our network of approved training partners. Training locations include our direct centres, affiliated technical institutes, and employer-based training facilities."
  },
  {
    q: "What certification will I receive?",
    a: "Upon completion, graduates receive National Certificate I or II credentials recognized by the National Certification Council. These qualifications are accepted by employers across Nigeria."
  },
  {
    q: "Is employment guaranteed?",
    a: "While we cannot guarantee employment, our 89% employment rate within 6 months reflects our strong industry partnerships and dedicated employment transition support. Most graduates secure formal employment or self-employment opportunities."
  },
];

export default function TVETInitiativePage() {
  return (
    <div className="min-h-screen bg-institutional-navy">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-24 px-6 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1523240795612-9a054f0b6f67?w=1920&q=80"
            alt="Technical training environment"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#041326] via-[#041326]/90 to-[#041326]" />
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div {...fadeUp} className="text-center max-w-4xl mx-auto">
            <span className="text-trust-green text-sm font-semibold uppercase tracking-wider">National Workforce Development Initiative</span>
            <h1 className="text-5xl md:text-7xl font-bold text-warm-white mt-6 mb-8">
              Technical & Vocational <span className="text-heritage-gold">Education Training</span>
            </h1>
            <p className="text-xl text-warm-white/60 mb-10 max-w-3xl mx-auto">
              Nigeria's comprehensive workforce development platform—connecting ambitious youth with industry-aligned technical skills, nationally recognized certifications, and formal employment pathways.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/initiatives/tvet/register" className="bg-heritage-gold hover:bg-[#E0BB45] text-institutional-navy px-8 py-4 rounded-2xl font-semibold text-lg flex items-center gap-2">
                Register for Initiative <ArrowRight className="w-5 h-5" />
              </Link>
              <a href="#overview" className="border border-white/20 hover:border-white/40 text-warm-white px-8 py-4 rounded-2xl font-semibold text-lg">
                Learn More
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-16 px-6 bg-[#071B34]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-14 h-14 bg-heritage-gold/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-7 h-7 text-heritage-gold" />
                </div>
                <div className="text-4xl font-bold text-warm-white">{stat.value}</div>
                <div className="text-warm-white/50 text-sm mt-2">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Initiative Overview */}
      <section id="overview" className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div {...fadeUp}>
              <span className="text-trust-green text-sm font-semibold uppercase tracking-wider">About the Initiative</span>
              <h2 className="text-4xl font-bold text-warm-white mt-4 mb-6">National Skills Development Platform</h2>
              <p className="text-warm-white/60 text-lg mb-8">
                The TVET Initiative is a national workforce transformation programme designed to address Nigeria's technical skills gap while creating measurable employment outcomes for young Nigerians.
              </p>
              <p className="text-warm-white/60 text-lg mb-8">
                Through strategic partnerships with industry leaders, government agencies, and training institutions, we deliver competency-based education that meets both national certification standards and employer expectations.
              </p>
              <div className="space-y-4">
                {[
                  "Aligned with National TVET Reform Agenda",
                  "Industry-validated curriculum and assessment",
                  "Integrated employment transition support",
                  "Monitoring and evaluation for continuous improvement"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-trust-green flex-shrink-0" />
                    <span className="text-warm-white/80">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div {...fadeUp} transition={{ delay: 0.2 }} className="relative">
              <img 
                src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800&q=80"
                alt="Professional training"
                className="w-full rounded-3xl"
              />
              <div className="absolute inset-0 bg-[rgba(4,19,38,0.35)] rounded-3xl" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Training Pillars */}
      <section className="py-20 px-6 bg-[#071B34]">
        <div className="max-w-7xl mx-auto">
          <motion.div {...fadeUp} className="text-center mb-16">
            <span className="text-trust-green text-sm font-semibold uppercase tracking-wider">Programme Framework</span>
            <h2 className="text-4xl font-bold text-warm-white mt-4">Four Pillars of Competency</h2>
            <p className="text-warm-white/50 mt-4 max-w-2xl mx-auto">
              Our curriculum is built on four integrated competency pillars designed to produce job-ready technical professionals
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {pillars.map((pillar, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="bg-[#0D2342] border border-white/[0.06] rounded-2xl p-6 hover:border-heritage-gold/20 transition-all"
              >
                <div className="w-12 h-12 bg-heritage-gold/10 rounded-xl flex items-center justify-center mb-4">
                  <pillar.icon className="w-6 h-6 text-heritage-gold" />
                </div>
                <h3 className="text-lg font-semibold text-warm-white mb-2">{pillar.title}</h3>
                <p className="text-warm-white/50 text-sm">{pillar.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Eligibility */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div {...fadeUp} className="text-center mb-16">
            <span className="text-trust-green text-sm font-semibold uppercase tracking-wider">Participant Requirements</span>
            <h2 className="text-4xl font-bold text-warm-white mt-4">Eligibility Criteria</h2>
            <p className="text-warm-white/50 mt-4 max-w-2xl mx-auto">
              The programme is open to young Nigerians meeting the following participation requirements
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {eligibility.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="bg-[#0D2342] border border-white/[0.06] rounded-2xl p-6"
              >
                <h3 className="text-heritage-gold font-semibold mb-2">{item.title}</h3>
                <p className="text-warm-white/70">{item.desc}</p>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/initiatives/tvet/register" className="inline-flex items-center gap-2 text-heritage-gold font-semibold">
              Start Eligibility Check <ChevronRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Training Categories */}
      <section className="py-20 px-6 bg-[#071B34]">
        <div className="max-w-7xl mx-auto">
          <motion.div {...fadeUp} className="text-center mb-16">
            <span className="text-trust-green text-sm font-semibold uppercase tracking-wider">Programme Portfolio</span>
            <h2 className="text-4xl font-bold text-warm-white mt-4">Training Categories</h2>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-4">
            {trainingCategories.map((cat, i) => (
              <span 
                key={i} 
                className="bg-[#0D2342] border border-white/[0.06] text-warm-white/80 px-6 py-3 rounded-full text-sm font-medium"
              >
                {cat}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Registration Process */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div {...fadeUp} className="text-center mb-16">
            <span className="text-trust-green text-sm font-semibold uppercase tracking-wider">Application Process</span>
            <h2 className="text-4xl font-bold text-warm-white mt-4">Registration Pathway</h2>
            <p className="text-warm-white/50 mt-4 max-w-2xl mx-auto">
              Our streamlined registration process is designed to be accessible and transparent
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { step: "01", title: "Create Account", desc: "Register with your basic information and contact details", icon: FileText },
              { step: "02", title: "Verify Identity", desc: "Complete identity verification and document upload", icon: Shield },
              { step: "03", title: "Enrol & Start", desc: "Select your programme and begin training", icon: GraduationCap },
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
                <div className="relative z-10 bg-[#0D2342] border border-white/[0.06] rounded-2xl p-8">
                  <div className="w-12 h-12 bg-heritage-gold/20 rounded-xl flex items-center justify-center mb-6">
                    <item.icon className="w-6 h-6 text-heritage-gold" />
                  </div>
                  <h3 className="text-xl font-semibold text-warm-white mb-3">{item.title}</h3>
                  <p className="text-warm-white/50">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/initiatives/tvet/register" className="bg-heritage-gold hover:bg-[#E0BB45] text-institutional-navy px-8 py-4 rounded-2xl font-semibold text-lg">
              Begin Registration
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-6 bg-[#071B34]">
        <div className="max-w-3xl mx-auto">
          <motion.div {...fadeUp} className="text-center mb-16">
            <span className="text-trust-green text-sm font-semibold uppercase tracking-wider">Information</span>
            <h2 className="text-4xl font-bold text-warm-white mt-4">Frequently Asked Questions</h2>
          </motion.div>

          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                viewport={{ once: true }}
                className="bg-[#0D2342] border border-white/[0.06] rounded-2xl p-6"
              >
                <h3 className="text-warm-white font-semibold mb-2">{faq.q}</h3>
                <p className="text-warm-white/50">{faq.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-warm-white mb-6">Ready to Begin Your Technical Career?</h2>
          <p className="text-warm-white/60 text-lg mb-10">
            Register for the TVET Initiative and take the first step toward formal employment and skills certification.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/initiatives/tvet/register" className="bg-heritage-gold hover:bg-[#E0BB45] text-institutional-navy px-8 py-4 rounded-2xl font-semibold text-lg">
              Register Now
            </Link>
            <Link href="/contact" className="border border-white/20 hover:border-white/40 text-warm-white px-8 py-4 rounded-2xl font-semibold text-lg">
              Contact Support
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 px-6 border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-gradient-to-br from-heritage-gold to-yellow-600 rounded-lg flex items-center justify-center">
                <GraduationCap className="w-6 h-6 text-institutional-navy" />
              </div>
              <span className="text-xl font-bold text-warm-white">Dayrunner Academy</span>
            </div>
            <p className="text-warm-white/40 text-sm">© 2026 Dayrunner Academy. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}