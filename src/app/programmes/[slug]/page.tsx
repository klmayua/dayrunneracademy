"use client";

import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import { Navbar } from "@/components/navbar";
import { 
  GraduationCap, 
  Clock, 
  Award, 
  ArrowRight, 
  CheckCircle, 
  Users, 
  Briefcase, 
  Calendar,
  Download,
  User,
  MapPin,
  ChevronRight
} from "lucide-react";

const programmeData: Record<string, any> = {
  "digital-technology": {
    title: "Digital Technology",
    subtitle: "Software Development & IT",
    description: "Master the skills of the digital economy with our comprehensive technology programme. Learn software development, data analytics, cybersecurity, and IT support from industry experts.",
    duration: "12 months",
    certification: "National Certificate II",
    level: "Intermediate",
    startDate: "June 2026",
    jobs: "Software Developer, IT Support Specialist, Data Analyst, Cybersecurity Analyst, Cloud Engineer",
    image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=800&q=80",
    skills: ["Python Programming", "Web Development", "Data Analysis", "Cybersecurity Fundamentals", "Cloud Computing", "Mobile App Development"],
    courses: [
      { module: "Module 1", title: "Introduction to Programming", duration: "4 weeks" },
      { module: "Module 2", title: "Web Development Fundamentals", duration: "6 weeks" },
      { module: "Module 3", title: "Database Management", duration: "4 weeks" },
      { module: "Module 4", title: "Data Analytics & Visualization", duration: "6 weeks" },
      { module: "Module 5", title: "Cybersecurity Essentials", duration: "4 weeks" },
      { module: "Module 6", title: "Cloud Computing Basics", duration: "4 weeks" },
      { module: "Module 7", title: "Capstone Project", duration: "6 weeks" },
    ],
    outcomes: [
      "Build complete web applications",
      "Analyze and visualize data",
      "Implement basic security protocols",
      "Deploy cloud solutions"
    ]
  },
  "automotive-engineering": {
    title: "Automotive Engineering",
    subtitle: "Vehicle Technology & Maintenance",
    description: "Become a skilled automotive technician with hands-on training on modern vehicles. Master vehicle diagnostics, maintenance, and repair technologies.",
    duration: "9 months",
    certification: "National Certificate I",
    level: "Beginner",
    startDate: "July 2026",
    jobs: "Automotive Technician, Vehicle Inspector, Service Advisor, Parts Manager",
    image: "https://images.unsplash.com/photo-1487754180471-31c1d3f0b8e1?w=800&q=80",
    skills: ["Engine Repair", "Electrical Systems", "Brake Systems", "Suspension & Steering", "Diagnostic Technology", "Vehicle Maintenance"],
    courses: [
      { module: "Module 1", title: "Automotive Fundamentals", duration: "3 weeks" },
      { module: "Module 2", title: "Engine Systems", duration: "6 weeks" },
      { module: "Module 3", title: "Electrical & Electronics", duration: "6 weeks" },
      { module: "Module 4", title: "Brake Systems", duration: "4 weeks" },
      { module: "Module 5", title: "Suspension & Steering", duration: "4 weeks" },
      { module: "Module 6", title: "Diagnostic Technology", duration: "6 weeks" },
      { module: "Module 7", title: "Industry Placement", duration: "8 weeks" },
    ],
    outcomes: [
      "Diagnose vehicle issues accurately",
      "Perform routine maintenance",
      "Repair engine and electrical systems"
    ]
  },
  "healthcare-nursing": {
    title: "Healthcare & Nursing",
    subtitle: "Patient Care Services",
    description: "Start a rewarding career in healthcare with our comprehensive nursing assistant programme. Gain the skills needed to provide quality patient care.",
    duration: "12 months",
    certification: "National Certificate II",
    level: "Beginner",
    startDate: "June 2026",
    jobs: "Nursing Assistant, Medical Assistant, Patient Care Technician, Health Coordinator",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=800&q=80",
    skills: ["Patient Care", "Medical Terminology", "First Aid & CPR", "Clinical Procedures", "Healthcare Ethics"],
    courses: [
      { module: "Module 1", title: "Healthcare Fundamentals", duration: "4 weeks" },
      { module: "Module 2", title: "Medical Terminology", duration: "3 weeks" },
      { module: "Module 3", title: "Patient Care Techniques", duration: "6 weeks" },
      { module: "Module 4", title: "First Aid & CPR", duration: "4 weeks" },
      { module: "Module 5", title: "Clinical Procedures", duration: "6 weeks" },
      { module: "Module 6", title: "Healthcare Ethics", duration: "3 weeks" },
      { module: "Module 7", title: "Clinical Placement", duration: "10 weeks" },
    ],
    outcomes: [
      "Provide compassionate patient care",
      "Assist with medical procedures",
      "Monitor patient vital signs"
    ]
  }
};

export default function ProgrammeDetailPage() {
  const params = useParams();
  const slug = params.slug as string;
  const programme = programmeData[slug];

  if (!programme) {
    return (
      <div className="min-h-screen bg-institutional-navy">
        <Navbar />
        <div className="pt-32 text-center">
          <h1 className="text-3xl font-bold text-warm-white">Programme not found</h1>
          <p className="text-warm-white/50 mt-4">The programme you're looking for doesn't exist.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-institutional-navy">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-28 pb-16 px-6 bg-[#071B34]">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              <a href="/programmes" className="inline-flex items-center text-warm-white/50 text-sm hover:text-heritage-gold mb-6">
                <ChevronRight className="w-4 h-4 rotate-180 mr-1" /> Back to Programmes
              </a>
              <span className="text-trust-green text-sm font-semibold uppercase tracking-wider">{programme.subtitle}</span>
              <h1 className="text-5xl font-bold text-warm-white mt-4 mb-6">{programme.title}</h1>
              <p className="text-xl text-warm-white/60 mb-8">{programme.description}</p>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-10">
                <div className="bg-white/[0.04] rounded-xl p-4 border border-white/[0.06]">
                  <Clock className="w-5 h-5 text-heritage-gold mb-2" />
                  <div className="text-warm-white text-sm">Duration</div>
                  <div className="text-warm-white/60 text-xs">{programme.duration}</div>
                </div>
                <div className="bg-white/[0.04] rounded-xl p-4 border border-white/[0.06]">
                  <Award className="w-5 h-5 text-heritage-gold mb-2" />
                  <div className="text-warm-white text-sm">Certification</div>
                  <div className="text-warm-white/60 text-xs">{programme.certification}</div>
                </div>
                <div className="bg-white/[0.04] rounded-xl p-4 border border-white/[0.06]">
                  <Users className="w-5 h-5 text-heritage-gold mb-2" />
                  <div className="text-warm-white text-sm">Level</div>
                  <div className="text-warm-white/60 text-xs">{programme.level}</div>
                </div>
                <div className="bg-white/[0.04] rounded-xl p-4 border border-white/[0.06]">
                  <Calendar className="w-5 h-5 text-heritage-gold mb-2" />
                  <div className="text-warm-white text-sm">Starts</div>
                  <div className="text-warm-white/60 text-xs">{programme.startDate}</div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <a href="/admissions" className="bg-heritage-gold hover:bg-[#E0BB45] text-[#041326] px-8 py-4 rounded-2xl font-semibold text-lg flex items-center justify-center gap-2">
                  Apply Now <ArrowRight className="w-5 h-5" />
                </a>
                <button className="border border-white/20 hover:border-white/40 text-warm-white px-8 py-4 rounded-2xl font-semibold text-lg flex items-center justify-center gap-2">
                  <Download className="w-5 h-5" /> Download Curriculum
                </button>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="relative">
              <img src={programme.image} alt={programme.title} className="w-full rounded-3xl" />
              <div className="absolute inset-0 bg-[rgba(4,19,38,0.35)] rounded-3xl" />
              <div className="absolute inset-4 border border-heritage-gold/30 rounded-[20px]" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Career Outcomes */}
      <section className="py-20 px-6 bg-[#0A2240]">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-trust-green text-sm font-semibold uppercase tracking-wider">Career Outcomes</span>
              <h2 className="text-4xl font-bold text-warm-white mt-4 mb-6">Launch Your Career</h2>
              <p className="text-warm-white/60 text-lg mb-8">
                Our graduates are recruited by leading employers across Nigeria. Upon completion, you'll have direct access to our hiring network.
              </p>
              <div className="space-y-4">
                {programme.jobs.split(", ").map((job: string, i: number) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-trust-green flex-shrink-0" />
                    <span className="text-warm-white/80">{job}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-[#06111F] rounded-3xl p-8 border border-[rgba(212,175,55,0.08)]">
              <h3 className="text-xl font-semibold text-warm-white mb-6">Employment Statistics</h3>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-4xl font-bold text-heritage-gold">89%</div>
                  <div className="text-warm-white/50 text-sm mt-1">Employment Rate</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-heritage-gold">6mo</div>
                  <div className="text-warm-white/50 text-sm mt-1">Avg. Hiring Time</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-heritage-gold">500+</div>
                  <div className="text-warm-white/50 text-sm mt-1">Hiring Partners</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-heritage-gold">₦150K</div>
                  <div className="text-warm-white/50 text-sm mt-1">Avg. Starting Salary</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Curriculum */}
      <section className="py-20 px-6 bg-[#071B34]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-trust-green text-sm font-semibold uppercase tracking-wider">Curriculum</span>
            <h2 className="text-4xl font-bold text-warm-white mt-4">Structured Learning Path</h2>
            <p className="text-warm-white/50 mt-4 max-w-2xl mx-auto">
              A comprehensive curriculum designed by industry experts to give you practical, job-ready skills.
            </p>
          </div>

          <div className="space-y-4">
            {programme.courses.map((course: any, i: number) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                viewport={{ once: true }}
                className="flex items-center gap-6 bg-[#0D2342] rounded-2xl p-6 border border-white/[0.04] hover:border-heritage-gold/20 transition-all"
              >
                <div className="w-12 h-12 bg-heritage-gold/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <span className="text-heritage-gold font-semibold">{i + 1}</span>
                </div>
                <div className="flex-1">
                  <h4 className="text-warm-white font-semibold">{course.title}</h4>
                  <p className="text-warm-white/50 text-sm">{course.module}</p>
                </div>
                <div className="text-warm-white/50 text-sm flex items-center gap-2">
                  <Clock className="w-4 h-4" /> {course.duration}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Acquired */}
      <section className="py-20 px-6 bg-[#0A2240]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-trust-green text-sm font-semibold uppercase tracking-wider">Skills</span>
            <h2 className="text-4xl font-bold text-warm-white mt-4">What You'll Learn</h2>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            {programme.skills.map((skill: string, i: number) => (
              <span key={i} className="bg-white/[0.04] border border-white/[0.08] text-warm-white/80 px-6 py-3 rounded-full text-sm font-medium">
                {skill}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Meet Trainers CTA */}
      <section className="py-20 px-6 bg-[#071B34]">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-warm-white mb-6">Learn from Industry Experts</h2>
          <p className="text-warm-white/60 text-lg mb-8 max-w-2xl mx-auto">
            Our trainers have years of real-world experience in their fields. You'll learn directly from professionals who have worked in the industry.
          </p>
          <button className="bg-heritage-gold hover:bg-[#E0BB45] text-[#041326] px-8 py-4 rounded-2xl font-semibold text-lg">
            Meet Our Trainers
          </button>
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