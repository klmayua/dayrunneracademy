"use client";

import { DashboardShell } from "@/components/dashboard-shell";
import { motion } from "framer-motion";
import { 
  Users, 
  GraduationCap, 
  Award, 
  TrendingUp, 
  Building2, 
  FileText, 
  BarChart3,
  Calendar,
  ArrowUpRight,
  ArrowDownRight,
  ChevronRight,
  BookOpen
} from "lucide-react";

const stats = [
  { label: "Total Students", value: "15,234", change: "+12%", trend: "up", icon: Users },
  { label: "Active Courses", value: "48", change: "+3", trend: "up", icon: BookOpen },
  { label: "Graduates", value: "8,456", change: "+892", trend: "up", icon: Award },
  { label: "Employment Rate", value: "89%", change: "+2%", trend: "up", icon: TrendingUp },
];

const recentAdmissions = [
  { name: "Chioma Adebayo", programme: "Digital Technology", date: "2 hours ago", status: "pending" },
  { name: "Emmanuel Okonkwo", programme: "Automotive Engineering", date: "5 hours ago", status: "approved" },
  { name: "Aisha Mohammed", programme: "Healthcare & Nursing", date: "Yesterday", status: "pending" },
  { name: "David Igwe", programme: "Digital Technology", date: "Yesterday", status: "reviewing" },
];

const topProgrammes = [
  { name: "Digital Technology", students: 3456, growth: "+15%" },
  { name: "Healthcare & Nursing", students: 2890, growth: "+12%" },
  { name: "Automotive Engineering", students: 2156, growth: "+8%" },
  { name: "Hospitality & Tourism", students: 1890, growth: "+5%" },
];

const upcomingEvents = [
  { title: "Quarterly Review Meeting", date: "Tomorrow, 10:00 AM", type: "Internal" },
  { title: "Industry Partner Summit", date: "Friday, 9:00 AM", type: "External" },
  { title: "Student Graduation Ceremony", date: "Next Monday", type: "Event" },
];

export default function InstitutionalDashboardPage() {
  return (
    <DashboardShell role="institutional">
      <div className="space-y-8">
        {/* Page Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-white">Institution Overview</h1>
            <p className="text-white/50 mt-2">Monitor key metrics and institutional performance</p>
          </div>
          <button className="bg-heritage-gold hover:bg-[#E0BB45] text-[#041326] px-6 py-3 rounded-xl font-semibold flex items-center gap-2">
            <FileText className="w-5 h-5" />
            Generate Report
          </button>
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
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 bg-heritage-gold/10 rounded-xl flex items-center justify-center">
                  <stat.icon className="w-5 h-5 text-heritage-gold" />
                </div>
                <span className={`flex items-center text-sm font-medium ${stat.trend === "up" ? "text-trust-green" : "text-red-400"}`}>
                  {stat.trend === "up" ? <ArrowUpRight className="w-4 h-4" /> : <ArrowDownRight className="w-4 h-4" />}
                  {stat.change}
                </span>
              </div>
              <div className="text-2xl font-bold text-white">{stat.value}</div>
              <div className="text-white/50 text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Recent Admissions */}
          <div className="lg:col-span-2 bg-[#102948] rounded-2xl p-6 border border-white/[0.04]">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold text-white">Recent Admissions</h2>
              <a href="/institutional/admissions" className="text-heritage-gold text-sm font-medium flex items-center gap-1">
                View All <ChevronRight className="w-4 h-4" />
              </a>
            </div>
            <div className="space-y-4">
              {recentAdmissions.map((admission, i) => (
                <div key={i} className="flex items-center gap-4 p-4 bg-[#06111F] rounded-xl">
                  <div className="w-10 h-10 bg-heritage-gold/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Users className="w-5 h-5 text-heritage-gold" />
                  </div>
                  <div className="flex-1">
                    <p className="text-white font-medium">{admission.name}</p>
                    <p className="text-white/50 text-sm">{admission.programme}</p>
                  </div>
                  <div className="text-right">
                    <span className={`text-xs font-medium px-3 py-1 rounded-full ${
                      admission.status === "approved" ? "bg-trust-green/10 text-trust-green" :
                      admission.status === "pending" ? "bg-heritage-gold/10 text-heritage-gold" :
                      "bg-sky-blue/10 text-sky-blue"
                    }`}>
                      {admission.status}
                    </span>
                    <p className="text-white/30 text-xs mt-1">{admission.date}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            {/* Top Programmes */}
            <div className="bg-[#102948] rounded-2xl p-6 border border-white/[0.04]">
              <h3 className="text-white font-semibold text-lg mb-4">Top Programmes</h3>
              <div className="space-y-4">
                {topProgrammes.map((prog, i) => (
                  <div key={i} className="flex items-center justify-between p-3 bg-[#06111F] rounded-xl">
                    <div className="flex items-center gap-3">
                      <span className="text-heritage-gold font-bold">{i + 1}</span>
                      <span className="text-white text-sm">{prog.name}</span>
                    </div>
                    <div className="text-right">
                      <span className="text-white text-sm font-medium">{prog.students}</span>
                      <span className="text-trust-green text-xs ml-2">{prog.growth}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Upcoming Events */}
            <div className="bg-[#102948] rounded-2xl p-6 border border-white/[0.04]">
              <h3 className="text-white font-semibold text-lg mb-4">Upcoming Events</h3>
              <div className="space-y-4">
                {upcomingEvents.map((event, i) => (
                  <div key={i} className="flex items-start gap-3 p-3 bg-[#06111F] rounded-xl">
                    <div className="w-10 h-10 bg-heritage-gold/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Calendar className="w-5 h-5 text-heritage-gold" />
                    </div>
                    <div>
                      <p className="text-white text-sm font-medium">{event.title}</p>
                      <p className="text-white/40 text-xs mt-1">{event.date}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardShell>
  );
}