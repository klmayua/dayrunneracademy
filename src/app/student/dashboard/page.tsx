"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { 
  GraduationCap, 
  Home, 
  BookOpen, 
  FileText, 
  Award, 
  MessageSquare, 
  Bell, 
  Settings,
  LogOut,
  ChevronRight,
  Play,
  CheckCircle,
  Clock,
  TrendingUp,
  Users,
  Calendar
} from "lucide-react";

const navItems = [
  { icon: Home, label: "Dashboard", active: true },
  { icon: BookOpen, label: "My Courses" },
  { icon: FileText, label: "Assignments" },
  { icon: Award, label: "Certifications" },
  { icon: MessageSquare, label: "Messages" },
  { icon: Bell, label: "Notifications" },
  { icon: Settings, label: "Settings" },
];

const courses = [
  { id: 1, name: "Web Development Fundamentals", progress: 75, nextLesson: "CSS Grid Layout", total: 24, completed: 18 },
  { id: 2, name: "Data Analytics Basics", progress: 45, nextLesson: "Data Visualization", total: 18, completed: 8 },
  { id: 3, name: "Professional Skills", progress: 90, nextLesson: "Final Project", total: 12, completed: 11 },
];

const assignments = [
  { id: 1, title: "HTML Portfolio Project", course: "Web Development", due: "May 25, 2026", status: "pending" },
  { id: 2, title: "Data Analysis Report", course: "Data Analytics", due: "May 22, 2026", status: "submitted" },
  { id: 3, title: "Presentation Skills", course: "Professional Skills", due: "May 28, 2026", status: "pending" },
];

const notifications = [
  { id: 1, title: "New course available: Cloud Computing", time: "2 hours ago", unread: true },
  { id: 2, title: "Assignment deadline extended", time: "5 hours ago", unread: true },
  { id: 3, title: "Certificate ready for download", time: "1 day ago", unread: false },
];

export default function StudentDashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <div className="min-h-screen bg-institutional-navy flex">
      {/* Sidebar */}
      <aside className={`${sidebarOpen ? 'w-64' : 'w-20'} bg-charcoal-black border-r border-white/5 flex flex-col transition-all duration-300`}>
        <div className="p-6 flex items-center justify-between">
          {sidebarOpen && (
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-gradient-to-br from-heritage-gold to-yellow-600 rounded-lg flex items-center justify-center">
                <GraduationCap className="w-6 h-6 text-institutional-navy" />
              </div>
              <span className="text-xl font-bold text-warm-white">Dayrunner</span>
            </div>
          )}
          <button onClick={() => setSidebarOpen(!sidebarOpen)} className="text-warm-white/50 hover:text-warm-white">
            <ChevronRight className={`w-5 h-5 transition-transform ${sidebarOpen ? 'rotate-180' : ''}`} />
          </button>
        </div>

        <nav className="flex-1 px-4 py-4">
          <ul className="space-y-2">
            {navItems.map((item, i) => (
              <li key={i}>
                <a href="#" className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${item.active ? 'bg-heritage-gold/10 text-heritage-gold' : 'text-warm-white/60 hover:text-warm-white hover:bg-white/5'}`}>
                  <item.icon className="w-5 h-5" />
                  {sidebarOpen && <span>{item.label}</span>}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="p-4 border-t border-white/5">
          <button className="flex items-center gap-3 px-4 py-3 text-warm-white/60 hover:text-warm-white w-full">
            <LogOut className="w-5 h-5" />
            {sidebarOpen && <span>Logout</span>}
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-auto">
        {/* Header */}
        <header className="bg-charcoal-black/50 border-b border-white/5 px-8 py-4 flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-warm-white">Welcome back, Chidi!</h1>
            <p className="text-warm-white/50">Track your learning progress</p>
          </div>
          <div className="flex items-center gap-4">
            <div className="relative">
              <Bell className="w-5 h-5 text-warm-white/60" />
              <span className="absolute -top-1 -right-1 w-2 h-2 bg-heritage-gold rounded-full" />
            </div>
            <div className="w-10 h-10 bg-gradient-to-br from-trust-green to-emerald-600 rounded-full flex items-center justify-center text-white font-bold">
              CO
            </div>
          </div>
        </header>

        <div className="p-8">
          {/* Stats */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {[
              { label: "Courses Enrolled", value: "3", icon: BookOpen, color: "sky" },
              { label: "Completed", value: "37", icon: CheckCircle, color: "green" },
              { label: "In Progress", value: "8", icon: Clock, color: "gold" },
              { label: "Avg. Score", value: "82%", icon: TrendingUp, color: "gold" },
            ].map((stat, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }} className="bg-charcoal-black border border-white/5 rounded-2xl p-6">
                <div className="flex items-center justify-between mb-4">
                  <stat.icon className={`w-8 h-8 ${stat.color === 'sky' ? 'text-sky-blue' : stat.color === 'green' ? 'text-trust-green' : 'text-heritage-gold'}`} />
                </div>
                <div className="text-3xl font-bold text-warm-white">{stat.value}</div>
                <div className="text-warm-white/50 text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Courses */}
            <div className="lg:col-span-2 space-y-6">
              <div className="bg-charcoal-black border border-white/5 rounded-2xl p-6">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-bold text-warm-white">My Courses</h2>
                  <a href="#" className="text-heritage-gold text-sm">View All</a>
                </div>
                <div className="space-y-4">
                  {courses.map((course) => (
                    <div key={course.id} className="bg-white/5 rounded-xl p-4 hover:bg-white/10 transition-colors">
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <h3 className="text-warm-white font-medium">{course.name}</h3>
                          <p className="text-warm-white/40 text-sm">{course.completed}/{course.total} lessons</p>
                        </div>
                        <button className="w-8 h-8 bg-heritage-gold/20 rounded-lg flex items-center justify-center text-heritage-gold hover:bg-heritage-gold/30">
                          <Play className="w-4 h-4" />
                        </button>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="flex-1 h-2 bg-white/10 rounded-full overflow-hidden">
                          <div className="h-full bg-gradient-to-r from-heritage-gold to-yellow-500 rounded-full" style={{ width: `${course.progress}%` }} />
                        </div>
                        <span className="text-warm-white/60 text-sm w-12">{course.progress}%</span>
                      </div>
                      <p className="text-warm-white/40 text-xs mt-2">Next: {course.nextLesson}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Assignments */}
              <div className="bg-charcoal-black border border-white/5 rounded-2xl p-6">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-bold text-warm-white">Upcoming Assignments</h2>
                  <a href="#" className="text-heritage-gold text-sm">View All</a>
                </div>
                <div className="space-y-3">
                  {assignments.map((assign) => (
                    <div key={assign.id} className="flex items-center justify-between p-4 bg-white/5 rounded-xl">
                      <div>
                        <h4 className="text-warm-white font-medium">{assign.title}</h4>
                        <p className="text-warm-white/40 text-sm">{assign.course}</p>
                      </div>
                      <div className="text-right">
                        <span className={`text-sm ${assign.status === 'pending' ? 'text-heritage-gold' : 'text-trust-green'}`}>
                          {assign.status === 'pending' ? 'Due ' : 'Submitted '}
                        </span>
                        <span className="text-warm-white/40 text-sm">{assign.due}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Progress */}
              <div className="bg-charcoal-black border border-white/5 rounded-2xl p-6">
                <h3 className="text-warm-white font-semibold mb-4">Weekly Progress</h3>
                <div className="space-y-3">
                  {[
                    { day: "Mon", hours: 3.5 },
                    { day: "Tue", hours: 2 },
                    { day: "Wed", hours: 4 },
                    { day: "Thu", hours: 1.5 },
                    { day: "Fri", hours: 3 },
                  ].map((day, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <span className="text-warm-white/40 text-sm w-8">{day.day}</span>
                      <div className="flex-1 h-2 bg-white/10 rounded-full overflow-hidden">
                        <div className="h-full bg-trust-green rounded-full" style={{ width: `${(day.hours / 4) * 100}%` }} />
                      </div>
                      <span className="text-warm-white/60 text-sm w-12">{day.hours}h</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Notifications */}
              <div className="bg-charcoal-black border border-white/5 rounded-2xl p-6">
                <h3 className="text-warm-white font-semibold mb-4">Recent Notifications</h3>
                <div className="space-y-3">
                  {notifications.map((notif) => (
                    <div key={notif.id} className={`p-3 rounded-xl ${notif.unread ? 'bg-heritage-gold/10' : 'bg-white/5'}`}>
                      <p className="text-warm-white text-sm">{notif.title}</p>
                      <p className="text-warm-white/40 text-xs mt-1">{notif.time}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Calendar */}
              <div className="bg-charcoal-black border border-white/5 rounded-2xl p-6">
                <h3 className="text-warm-white font-semibold mb-4">Upcoming Events</h3>
                <div className="space-y-3">
                  {[
                    { event: "Web Dev Quiz", date: "May 22", type: "quiz" },
                    { event: "Data Analysis Demo", date: "May 25", type: "demo" },
                    { event: "Certificate Ceremony", date: "June 1", type: "event" },
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3 p-3 bg-white/5 rounded-xl">
                      <Calendar className="w-5 h-5 text-heritage-gold" />
                      <div>
                        <p className="text-warm-white text-sm">{item.event}</p>
                        <p className="text-warm-white/40 text-xs">{item.date}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}