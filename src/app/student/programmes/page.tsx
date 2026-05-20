"use client";

import { DashboardShell } from "@/components/dashboard-shell";
import { BookOpen, Clock, Award, ChevronRight, Play, CheckCircle } from "lucide-react";

const enrolledProgrammes = [
  {
    id: "digital-tech",
    title: "Digital Technology",
    progress: 65,
    currentModule: "Module 4: Data Analytics",
    nextSession: "Tomorrow, 2:00 PM",
    duration: "12 months",
    certification: "National Certificate II",
    image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=400&q=80"
  }
];

const modules = [
  { id: 1, title: "Introduction to Programming", status: "completed", duration: "4 weeks" },
  { id: 2, title: "Web Development Fundamentals", status: "completed", duration: "6 weeks" },
  { id: 3, title: "Database Management", status: "completed", duration: "4 weeks" },
  { id: 4, title: "Data Analytics & Visualization", status: "in-progress", duration: "6 weeks" },
  { id: 5, title: "Cybersecurity Essentials", status: "locked", duration: "4 weeks" },
  { id: 6, title: "Cloud Computing Basics", status: "locked", duration: "4 weeks" },
];

export default function StudentProgrammesPage() {
  return (
    <DashboardShell role="student">
      <div className="space-y-8">
        {/* Page Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-white">My Programmes</h1>
            <p className="text-white/50 mt-2">Track your learning progress and access course materials</p>
          </div>
        </div>

        {/* Enrolled Programme */}
        {enrolledProgrammes.map((prog) => (
          <div key={prog.id} className="bg-[#102948] rounded-3xl border border-white/[0.04] overflow-hidden">
            <div className="grid lg:grid-cols-3 gap-0">
              {/* Image */}
              <div className="relative h-64 lg:h-auto">
                <img src={prog.image} alt={prog.title} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-r from-[#102948] to-transparent lg:bg-gradient-to-t" />
              </div>

              {/* Content */}
              <div className="lg:col-span-2 p-8">
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <h2 className="text-2xl font-bold text-white">{prog.title}</h2>
                    <p className="text-white/50 mt-1">{prog.certification}</p>
                  </div>
                  <span className="bg-heritage-gold/10 text-heritage-gold px-4 py-2 rounded-full text-sm font-medium">
                    In Progress
                  </span>
                </div>

                {/* Progress */}
                <div className="mb-8">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-white/70 text-sm">Course Progress</span>
                    <span className="text-heritage-gold font-semibold">{prog.progress}%</span>
                  </div>
                  <div className="h-3 bg-white/10 rounded-full overflow-hidden">
                    <div className="h-full bg-heritage-gold rounded-full" style={{ width: `${prog.progress}%` }} />
                  </div>
                </div>

                {/* Current Module */}
                <div className="bg-[#06111F] rounded-2xl p-6 mb-6 border border-white/[0.04]">
                  <div className="flex items-center gap-2 text-heritage-gold text-sm font-medium mb-2">
                    <Play className="w-4 h-4" />
                    Currently Learning
                  </div>
                  <h3 className="text-white font-semibold text-lg">{prog.currentModule}</h3>
                  <p className="text-white/50 text-sm mt-1">Next session: {prog.nextSession}</p>
                </div>

                <div className="flex gap-4">
                  <button className="bg-heritage-gold hover:bg-[#E0BB45] text-[#041326] px-6 py-3 rounded-xl font-semibold flex items-center gap-2">
                    Continue Learning
                  </button>
                  <button className="border border-white/20 hover:border-white/40 text-white px-6 py-3 rounded-xl font-semibold">
                    View Curriculum
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Module Progress */}
        <div className="bg-[#102948] rounded-3xl border border-white/[0.04] p-8">
          <h2 className="text-xl font-bold text-white mb-6">Course Modules</h2>
          <div className="space-y-4">
            {modules.map((module, i) => (
              <div 
                key={module.id}
                className={`flex items-center gap-6 p-5 rounded-2xl border transition-all ${
                  module.status === "completed" 
                    ? "bg-trust-green/5 border-trust-green/20" 
                    : module.status === "in-progress"
                    ? "bg-heritage-gold/5 border-heritage-gold/20"
                    : "bg-white/[0.02] border-white/[0.04] opacity-60"
                }`}
              >
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                  module.status === "completed" 
                    ? "bg-trust-green/20" 
                    : module.status === "in-progress"
                    ? "bg-heritage-gold/20"
                    : "bg-white/5"
                }`}>
                  {module.status === "completed" ? (
                    <CheckCircle className="w-5 h-5 text-trust-green" />
                  ) : module.status === "in-progress" ? (
                    <Play className="w-5 h-5 text-heritage-gold" />
                  ) : (
                    <span className="text-white/40 font-semibold">{module.id}</span>
                  )}
                </div>
                <div className="flex-1">
                  <h4 className="text-white font-medium">{module.title}</h4>
                  <p className="text-white/40 text-sm">{module.duration}</p>
                </div>
                <div className="flex items-center gap-2">
                  {module.status === "completed" && (
                    <span className="text-trust-green text-sm font-medium">Completed</span>
                  )}
                  {module.status === "in-progress" && (
                    <span className="text-heritage-gold text-sm font-medium">In Progress</span>
                  )}
                  {module.status === "locked" && (
                    <span className="text-white/30 text-sm font-medium">Locked</span>
                  )}
                  <ChevronRight className="w-5 h-5 text-white/30" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </DashboardShell>
  );
}