"use client";

import { motion } from "framer-motion";
import { GraduationCap, Users, Briefcase, TrendingUp, FileText, Globe, Target, ArrowUpRight, Search, Bell, Menu } from "lucide-react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const pipelineData = [
  { month: "Jan", candidates: 45 },
  { month: "Feb", candidates: 52 },
  { month: "Mar", candidates: 68 },
  { month: "Apr", candidates: 78 },
  { month: "May", candidates: 95 },
  { month: "Jun", candidates: 112 },
];

const stats = [
  { label: "Active Candidates", value: "2,450", change: "+18%", icon: Users },
  { label: "Placements", value: "892", change: "+12%", icon: Briefcase },
  { label: "Employment Rate", value: "94%", change: "+3%", icon: TrendingUp },
  { label: "Partner Companies", value: "48", change: "+5%", icon: Globe },
];

const recentHires = [
  { name: "Chidi Okafor", role: "Frontend Developer", company: "Flutterwave", status: "Hired" },
  { name: "Amina Bello", role: "Data Analyst", company: "MTN Nigeria", status: "Hired" },
  { name: "Emeka Nwosu", role: "QA Engineer", company: "Jumia", status: "Interview" },
  { name: "Fatima Ibrahim", role: "DevOps Engineer", company: "Andela", status: "Pending" },
];

export default function CorporateDashboard() {
  return (
    <div className="min-h-screen bg-institutional-navy flex">
      {/* Sidebar */}
      <aside className="w-64 bg-charcoal-black border-r border-white/5 flex flex-col">
        <div className="p-6 border-b border-white/5">
          <div className="flex items-center gap-2">
            <div className="w-9 h-9 bg-gradient-to-br from-heritage-gold to-yellow-600 rounded-lg flex items-center justify-center">
              <GraduationCap className="w-5 h-5 text-institutional-navy" />
            </div>
            <div>
              <span className="text-lg font-bold text-warm-white block">Dayrunner</span>
              <span className="text-xs text-sky-blue">Corporate</span>
            </div>
          </div>
        </div>

        <nav className="flex-1 p-4">
          <ul className="space-y-1">
            {[
              { icon: Briefcase, label: "Talent Pipeline", active: true },
              { icon: Users, label: "Graduate Profiles" },
              { icon: TrendingUp, label: "Hiring Metrics" },
              { icon: FileText, label: "Recruitment Requests" },
              { icon: Globe, label: "Partnerships" },
            ].map((item, i) => (
              <li key={i}>
                <a href="#" className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${item.active ? 'bg-heritage-gold/10 text-heritage-gold' : 'text-warm-white/60 hover:text-warm-white hover:bg-white/5'}`}>
                  <item.icon className="w-5 h-5" />
                  <span>{item.label}</span>
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </aside>

      {/* Main */}
      <main className="flex-1 overflow-auto">
        <header className="bg-charcoal-black/50 border-b border-white/5 px-8 py-4 flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-warm-white">Talent Pipeline</h1>
            <p className="text-warm-white/50">Access skilled graduates from Dayrunner Academy</p>
          </div>
          <div className="flex items-center gap-4">
            <div className="relative">
              <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-warm-white/40" />
              <input type="text" placeholder="Search candidates..." className="bg-white/5 border border-white/10 rounded-lg pl-10 pr-4 py-2 text-warm-white placeholder:text-warm-white/40 text-sm w-64" />
            </div>
            <button className="relative">
              <Bell className="w-5 h-5 text-warm-white/60" />
            </button>
            <div className="w-9 h-9 bg-gradient-to-br from-sky-blue to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
              CO
            </div>
          </div>
        </header>

        <div className="p-8">
          {/* Stats */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {stats.map((stat, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }} className="bg-charcoal-black border border-white/5 rounded-2xl p-6">
                <div className="flex items-center justify-between mb-4">
                  <stat.icon className="w-8 h-8 text-heritage-gold" />
                  <div className="flex items-center gap-1 text-trust-green text-sm">
                    <ArrowUpRight className="w-3 h-3" />
                    {stat.change}
                  </div>
                </div>
                <div className="text-3xl font-bold text-warm-white">{stat.value}</div>
                <div className="text-warm-white/50 text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Pipeline Chart */}
            <div className="bg-charcoal-black border border-white/5 rounded-2xl p-6">
              <h2 className="text-xl font-bold text-warm-white mb-6">Candidate Pipeline Growth</h2>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={pipelineData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#ffffff10" />
                    <XAxis dataKey="month" stroke="#ffffff40" fontSize={12} />
                    <YAxis stroke="#ffffff40" fontSize={12} />
                    <Tooltip contentStyle={{ backgroundColor: '#111827', border: '1px solid #ffffff10', borderRadius: '8px' }} />
                    <Line type="monotone" dataKey="candidates" stroke="#D4AF37" strokeWidth={3} />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Recent Hires */}
            <div className="bg-charcoal-black border border-white/5 rounded-2xl p-6">
              <h2 className="text-xl font-bold text-warm-white mb-6">Recent Activity</h2>
              <div className="space-y-4">
                {recentHires.map((hire, i) => (
                  <div key={i} className="flex items-center justify-between p-4 bg-white/5 rounded-xl">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-trust-green/20 rounded-full flex items-center justify-center text-trust-green font-bold text-sm">
                        {hire.name.split(' ').map(n => n[0]).join('')}
                      </div>
                      <div>
                        <p className="text-warm-white font-medium">{hire.name}</p>
                        <p className="text-warm-white/40 text-sm">{hire.role} at {hire.company}</p>
                      </div>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      hire.status === 'Hired' ? 'bg-trust-green/20 text-trust-green' :
                      hire.status === 'Interview' ? 'bg-heritage-gold/20 text-heritage-gold' :
                      'bg-white/10 text-warm-white/60'
                    }`}>
                      {hire.status}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}