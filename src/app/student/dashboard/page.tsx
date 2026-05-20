"use client";

import { DashboardShell } from "@/components/dashboard-shell";
import { motion } from "framer-motion";
import { Play, Clock, Award, TrendingUp, Calendar, ChevronRight, FileText, MessageSquare, CheckCircle, BookOpen } from "lucide-react";

const stats = [
  { label: "Courses Enrolled", value: "3", icon: BookOpen, color: "sky" },
  { label: "Completed", value: "12", icon: CheckCircle, color: "green" },
  { label: "In Progress", value: "2", icon: TrendingUp, color: "gold" },
  { label: "Certifications", value: "1", icon: Award, color: "purple" },
];

const courses = [
  { 
    id: 1, 
    name: "Digital Technology", 
    progress: 65, 
    currentLesson: "Data Analytics & Visualization",
    nextSession: "Tomorrow, 2:00 PM",
    totalModules: 7,
    completedModules: 4
  },
  { 
    id: 2, 
    name: "Professional Skills", 
    progress: 90, 
    currentLesson: "Final Project",
    nextSession: "Today, 4:00 PM",
    totalModules: 6,
    completedModules: 5
  },
];

const upcomingSessions = [
  { title: "Data Analytics: Visualization Tools", time: "Tomorrow, 2:00 PM", trainer: "Dr. Sarah Johnson" },
  { title: "Professional Skills: Presentation", time: "Today, 4:00 PM", trainer: "Mr. David Peters" },
  { title: "Web Development: React Basics", time: "Friday, 10:00 AM", trainer: "Mrs. Grace Williams" },
];

const recentMessages = [
  { from: "Dr. Sarah Johnson", subject: "Assignment Feedback", time: "2 hours ago" },
  { from: "Admissions Office", subject: "Your scholarship application", time: "Yesterday" },
];

export default function StudentDashboardPage() {
  return (
    <DashboardShell role="student">
      <div className="space-y-8">
        {/* Welcome */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-white">Welcome back, John!</h1>
            <p className="text-white/50 mt-2">Continue your learning journey</p>
          </div>
          <div className="text-right">
            <div className="text-heritage-gold text-2xl font-bold">65%</div>
            <div className="text-white/50 text-sm">Overall Progress</div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="bg-[#102948] rounded-2xl p-6 border border-white/[0.04]"
            >
              <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-4 ${
                stat.color === "sky" ? "bg-sky-blue/20" :
                stat.color === "green" ? "bg-trust-green/20" :
                stat.color === "gold" ? "bg-heritage-gold/20" :
                "bg-purple-500/20"
              }`}>
                <stat.icon className={`w-5 h-5 ${
                  stat.color === "sky" ? "text-sky-blue" :
                  stat.color === "green" ? "text-trust-green" :
                  stat.color === "gold" ? "text-heritage-gold" :
                  "text-purple-500"
                }`} />
              </div>
              <div className="text-2xl font-bold text-white">{stat.value}</div>
              <div className="text-white/50 text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Active Courses */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-bold text-white">Active Courses</h2>
              <a href="/student/programmes" className="text-heritage-gold text-sm font-medium flex items-center gap-1">
                View All <ChevronRight className="w-4 h-4" />
              </a>
            </div>

            {courses.map((course) => (
              <motion.div
                key={course.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-[#102948] rounded-2xl p-6 border border-white/[0.04] hover:border-heritage-gold/20 transition-all"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-white font-semibold text-lg">{course.name}</h3>
                    <p className="text-white/50 text-sm mt-1">Module {course.completedModules} of {course.totalModules}</p>
                  </div>
                  <span className="bg-heritage-gold/10 text-heritage-gold px-3 py-1 rounded-full text-sm font-medium">
                    {course.progress}%
                  </span>
                </div>

                <div className="mb-4">
                  <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                    <div className="h-full bg-heritage-gold rounded-full" style={{ width: `${course.progress}%` }} />
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2 text-white/50 text-sm">
                      <Play className="w-4 h-4 text-heritage-gold" />
                      <span>{course.currentLesson}</span>
                    </div>
                  </div>
                  <button className="bg-heritage-gold hover:bg-[#E0BB45] text-[#041326] px-4 py-2 rounded-xl font-medium text-sm">
                    Continue
                  </button>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            {/* Upcoming Sessions */}
            <div className="bg-[#102948] rounded-2xl p-6 border border-white/[0.04]">
              <h3 className="text-white font-semibold text-lg mb-4">Upcoming Sessions</h3>
              <div className="space-y-4">
                {upcomingSessions.map((session, i) => (
                  <div key={i} className="flex items-start gap-3 p-3 bg-[#06111F] rounded-xl">
                    <div className="w-10 h-10 bg-heritage-gold/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Calendar className="w-5 h-5 text-heritage-gold" />
                    </div>
                    <div>
                      <p className="text-white text-sm font-medium">{session.title}</p>
                      <p className="text-white/40 text-xs mt-1">{session.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Recent Messages */}
            <div className="bg-[#102948] rounded-2xl p-6 border border-white/[0.04]">
              <h3 className="text-white font-semibold text-lg mb-4">Recent Messages</h3>
              <div className="space-y-3">
                {recentMessages.map((msg, i) => (
                  <div key={i} className="flex items-center gap-3 p-3 hover:bg-white/[0.02] rounded-xl cursor-pointer">
                    <div className="w-10 h-10 bg-trust-green/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <MessageSquare className="w-5 h-5 text-trust-green" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-white text-sm font-medium truncate">{msg.from}</p>
                      <p className="text-white/40 text-xs">{msg.subject}</p>
                    </div>
                    <span className="text-white/30 text-xs">{msg.time}</span>
                  </div>
                ))}
              </div>
              <button className="w-full mt-4 text-center text-heritage-gold text-sm font-medium">
                View All Messages
              </button>
            </div>
          </div>
        </div>
      </div>
    </DashboardShell>
  );
}