"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { 
  GraduationCap, 
  TrendingUp, 
  Users, 
  Award, 
  BookOpen, 
  DollarSign,
  Activity,
  BarChart3,
  PieChart,
  Calendar,
  ArrowUpRight,
  ArrowDownRight,
  Bell,
  Search,
  Menu
} from "lucide-react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, PieChart as RePieChart, Pie, Cell } from "recharts";

const enrollmentData = [
  { month: "Jan", students: 1200 },
  { month: "Feb", students: 1450 },
  { month: "Mar", students: 1600 },
  { month: "Apr", students: 1800 },
  { month: "May", students: 2100 },
  { month: "Jun", students: 2400 },
];

const programmeData = [
  { name: "Digital Tech", value: 35, color: "#38BDF8" },
  { name: "Automotive", value: 25, color: "#D4AF37" },
  { name: "Healthcare", value: 20, color: "#10B981" },
  { name: "Hospitality", value: 12, color: "#8B5CF6" },
  { name: "Others", value: 8, color: "#6B7280" },
];

const regionData = [
  { region: "Lagos", students: 4200, revenue: 84000000 },
  { region: "Kano", students: 2800, revenue: 56000000 },
  { region: "Rivers", students: 2100, revenue: 42000000 },
  { region: "Delta", students: 1800, revenue: 36000000 },
  { region: "Others", students: 4100, revenue: 82000000 },
];

const stats = [
  { label: "Total Students", value: "15,000", change: "+12%", up: true, icon: Users },
  { label: "Active Courses", value: "48", change: "+5%", up: true, icon: BookOpen },
  { label: "Completion Rate", value: "89%", change: "+3%", up: true, icon: Award },
  { label: "Revenue (MTD)", value: "₦250M", change: "-8%", up: false, icon: DollarSign },
];

const recentActivities = [
  { id: 1, action: "New student enrolled", user: "Chidinma Okafor", time: "2 mins ago", type: "enrollment" },
  { id: 2, action: "Certificate issued", user: "Ahmad Ibrahim", time: "15 mins ago", type: "certificate" },
  { id: 3, action: "Course completed", user: "Blessing Adeyemi", time: "1 hour ago", type: "completion" },
  { id: 4, action: "Payment received", user: "Corporate Training Ltd", time: "2 hours ago", type: "payment" },
  { id: 5, action: "Trainer added", user: "Dr. Sarah Johnson", time: "3 hours ago", type: "trainer" },
];

export default function InstitutionalDashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <div className="min-h-screen bg-institutional-navy flex">
      {/* Sidebar */}
      <aside className={`${sidebarOpen ? 'w-72' : 'w-20'} bg-charcoal-black border-r border-white/5 flex flex-col transition-all`}>
        <div className="p-6 flex items-center justify-between">
          {sidebarOpen && (
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-gradient-to-br from-heritage-gold to-yellow-600 rounded-lg flex items-center justify-center">
                <GraduationCap className="w-6 h-6 text-institutional-navy" />
              </div>
              <div>
                <span className="text-xl font-bold text-warm-white block">Dayrunner</span>
                <span className="text-xs text-warm-white/40">Admin Portal</span>
              </div>
            </div>
          )}
          <button onClick={() => setSidebarOpen(!sidebarOpen)} className="text-warm-white/50 hover:text-warm-white">
            <Menu className="w-5 h-5" />
          </button>
        </div>

        {sidebarOpen && (
          <div className="px-6 mb-6">
            <div className="relative">
              <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-warm-white/40" />
              <input type="text" placeholder="Search..." className="w-full bg-white/5 border border-white/10 rounded-lg pl-10 pr-4 py-2 text-warm-white placeholder:text-warm-white/40 text-sm focus:border-heritage-gold focus:outline-none" />
            </div>
          </div>
        )}

        <nav className="flex-1 px-4 overflow-auto">
          <div className="mb-6">
            {sidebarOpen && <div className="text-warm-white/40 text-xs uppercase tracking-wider mb-3 px-4">Overview</div>}
            <ul className="space-y-1">
              {[
                { icon: Activity, label: "Dashboard", active: true },
                { icon: BarChart3, label: "Analytics" },
                { icon: PieChart, label: "Reports" },
              ].map((item, i) => (
                <li key={i}>
                  <a href="#" className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${item.active ? 'bg-heritage-gold/10 text-heritage-gold' : 'text-warm-white/60 hover:text-warm-white hover:bg-white/5'}`}>
                    <item.icon className="w-5 h-5" />
                    {sidebarOpen && <span>{item.label}</span>}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="mb-6">
            {sidebarOpen && <div className="text-warm-white/40 text-xs uppercase tracking-wider mb-3 px-4">Management</div>}
            <ul className="space-y-1">
              {[
                { icon: Users, label: "Students" },
                { icon: BookOpen, label: "Programmes" },
                { icon: Award, label: "Certificates" },
                { icon: DollarSign, label: "Revenue" },
              ].map((item, i) => (
                <li key={i}>
                  <a href="#" className="flex items-center gap-3 px-4 py-3 rounded-xl text-warm-white/60 hover:text-warm-white hover:bg-white/5 transition-all">
                    <item.icon className="w-5 h-5" />
                    {sidebarOpen && <span>{item.label}</span>}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-auto">
        <header className="bg-charcoal-black/50 border-b border-white/5 px-8 py-4 flex items-center justify-between sticky top-0 z-10">
          <div>
            <h1 className="text-2xl font-bold text-warm-white">Executive Dashboard</h1>
            <p className="text-warm-white/50">Nigeria TVET Institutional Platform</p>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 bg-trust-green/10 border border-trust-green/20 px-4 py-2 rounded-lg">
              <span className="w-2 h-2 bg-trust-green rounded-full animate-pulse" />
              <span className="text-trust-green text-sm font-medium">System Operational</span>
            </div>
            <button className="relative">
              <Bell className="w-5 h-5 text-warm-white/60" />
              <span className="absolute -top-1 -right-1 w-2 h-2 bg-heritage-gold rounded-full" />
            </button>
            <div className="w-10 h-10 bg-gradient-to-br from-heritage-gold to-yellow-600 rounded-full flex items-center justify-center text-white font-bold">
              EA
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
                  <div className={`flex items-center gap-1 text-sm ${stat.up ? 'text-trust-green' : 'text-red-400'}`}>
                    {stat.up ? <ArrowUpRight className="w-4 h-4" /> : <ArrowDownRight className="w-4 h-4" />}
                    {stat.change}
                  </div>
                </div>
                <div className="text-3xl font-bold text-warm-white">{stat.value}</div>
                <div className="text-warm-white/50 text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </div>

          {/* Charts Row 1 */}
          <div className="grid lg:grid-cols-2 gap-8 mb-8">
            <div className="bg-charcoal-black border border-white/5 rounded-2xl p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-warm-white">Student Enrollment Trend</h2>
                <select className="bg-white/5 border border-white/10 rounded-lg px-3 py-1 text-warm-white text-sm">
                  <option>Last 6 months</option>
                  <option>Last year</option>
                </select>
              </div>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={enrollmentData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#ffffff10" />
                    <XAxis dataKey="month" stroke="#ffffff40" fontSize={12} />
                    <YAxis stroke="#ffffff40" fontSize={12} />
                    <Tooltip contentStyle={{ backgroundColor: '#111827', border: '1px solid #ffffff10', borderRadius: '8px' }} />
                    <Line type="monotone" dataKey="students" stroke="#D4AF37" strokeWidth={3} dot={{ fill: '#D4AF37' }} />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>

            <div className="bg-charcoal-black border border-white/5 rounded-2xl p-6">
              <h2 className="text-xl font-bold text-warm-white mb-6">Programme Distribution</h2>
              <div className="h-64 flex items-center justify-center">
                <ResponsiveContainer width="100%" height="100%">
                  <RePieChart>
                    <Pie data={programmeData} cx="50%" cy="50%" innerRadius={60} outerRadius={80} paddingAngle={5} dataKey="value">
                      {programmeData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip contentStyle={{ backgroundColor: '#111827', border: '1px solid #ffffff10', borderRadius: '8px' }} />
                  </RePieChart>
                </ResponsiveContainer>
              </div>
              <div className="flex flex-wrap justify-center gap-4 mt-4">
                {programmeData.map((item, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }} />
                    <span className="text-warm-white/60 text-sm">{item.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Charts Row 2 */}
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Regional Performance */}
            <div className="lg:col-span-2 bg-charcoal-black border border-white/5 rounded-2xl p-6">
              <h2 className="text-xl font-bold text-warm-white mb-6">Regional Performance</h2>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={regionData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#ffffff10" />
                    <XAxis dataKey="region" stroke="#ffffff40" fontSize={12} />
                    <YAxis stroke="#ffffff40" fontSize={12} />
                    <Tooltip contentStyle={{ backgroundColor: '#111827', border: '1px solid #ffffff10', borderRadius: '8px' }} />
                    <Bar dataKey="students" fill="#38BDF8" radius={[4, 4, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Recent Activity */}
            <div className="bg-charcoal-black border border-white/5 rounded-2xl p-6">
              <h2 className="text-xl font-bold text-warm-white mb-6">Recent Activity</h2>
              <div className="space-y-4">
                {recentActivities.map((activity) => (
                  <div key={activity.id} className="flex items-start gap-3 p-3 hover:bg-white/5 rounded-xl transition-colors">
                    <div className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 ${
                      activity.type === 'enrollment' ? 'bg-trust-green/20 text-trust-green' :
                      activity.type === 'payment' ? 'bg-heritage-gold/20 text-heritage-gold' :
                      activity.type === 'certificate' ? 'bg-sky-blue/20 text-sky-blue' :
                      'bg-white/10 text-warm-white'
                    }`}>
                      {activity.type === 'enrollment' ? <Users className="w-4 h-4" /> :
                       activity.type === 'payment' ? <DollarSign className="w-4 h-4" /> :
                       activity.type === 'certificate' ? <Award className="w-4 h-4" /> :
                       <Activity className="w-4 h-4" />}
                    </div>
                    <div className="min-w-0">
                      <p className="text-warm-white text-sm">{activity.action}</p>
                      <p className="text-warm-white/40 text-xs">{activity.user} · {activity.time}</p>
                    </div>
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