"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { 
  GraduationCap, 
  Home, 
  BookOpen, 
  Users, 
  ClipboardCheck, 
  BarChart3,
  Calendar,
  MessageSquare,
  Bell,
  Settings,
  LogOut,
  ChevronRight,
  Plus,
  Eye,
  CheckCircle,
  Clock,
  TrendingUp
} from "lucide-react";

const navItems = [
  { icon: Home, label: "Dashboard", active: true },
  { icon: BookOpen, label: "My Courses" },
  { icon: Users, label: "Students" },
  { icon: ClipboardCheck, label: "Grading" },
  { icon: BarChart3, label: "Analytics" },
  { icon: Calendar, label: "Schedule" },
  { icon: MessageSquare, label: "Messages" },
];

const courses = [
  { id: 1, name: "Web Development Fundamentals", students: 45, lessons: 24, completed: 18, rating: 4.8 },
  { id: 2, name: "Data Analytics Basics", students: 32, lessons: 18, completed: 8, rating: 4.6 },
];

const pendingGrading = [
  { id: 1, assignment: "HTML Portfolio Project", course: "Web Development", submitted: 28, pending: 12, due: "May 25" },
  { id: 2, assignment: "Data Analysis Quiz", course: "Data Analytics", submitted: 20, pending: 8, due: "May 22" },
  { id: 3, assignment: "CSS Layout Exercise", course: "Web Development", submitted: 35, pending: 5, due: "May 28" },
];

const recentActivity = [
  { id: 1, action: "Graded 15 assignments", course: "Web Development", time: "1 hour ago" },
  { id: 2, action: "Uploaded new lesson", course: "Data Analytics", time: "3 hours ago" },
  { id: 3, action: "Answered student question", course: "Web Development", time: "5 hours ago" },
  { id: 4, action: "Completed attendance", course: "Web Development", time: "1 day ago" },
];

export default function TrainerDashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <div className="min-h-screen bg-institutional-navy flex">
      {/* Sidebar */}
      <aside className={`${sidebarOpen ? 'w-64' : 'w-20'} bg-charcoal-black border-r border-white/5 flex flex-col transition-all`}>
        <div className="p-6 flex items-center justify-between">
          {sidebarOpen && (
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-gradient-to-br from-heritage-gold to-yellow-600 rounded-lg flex items-center justify-center">
                <GraduationCap className="w-6 h-6 text-institutional-navy" />
              </div>
              <div>
                <span className="text-xl font-bold text-warm-white block">Dayrunner</span>
                <span className="text-xs text-sky-blue">Trainer Portal</span>
              </div>
            </div>
          )}
          <button onClick={() => setSidebarOpen(!sidebarOpen)} className="text-warm-white/50">
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

        <div className="p-4 border-t border-white/5 space-y-2">
          <a href="#" className="flex items-center gap-3 px-4 py-3 text-warm-white/60 hover:text-warm-white">
            <Settings className="w-5 h-5" />
            {sidebarOpen && <span>Settings</span>}
          </a>
          <button className="flex items-center gap-3 px-4 py-3 text-warm-white/60 hover:text-warm-white w-full">
            <LogOut className="w-5 h-5" />
            {sidebarOpen && <span>Logout</span>}
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-auto">
        <header className="bg-charcoal-black/50 border-b border-white/5 px-8 py-4 flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-warm-white">Welcome, Dr. Sarah!</h1>
            <p className="text-warm-white/50">Manage your courses and students</p>
          </div>
          <div className="flex items-center gap-4">
            <button className="flex items-center gap-2 bg-trust-green hover:bg-trust-green/90 text-institutional-navy px-4 py-2 rounded-lg font-medium">
              <Plus className="w-4 h-4" /> New Course
            </button>
            <div className="relative">
              <Bell className="w-5 h-5 text-warm-white/60" />
              <span className="absolute -top-1 -right-1 w-2 h-2 bg-heritage-gold rounded-full" />
            </div>
            <div className="w-10 h-10 bg-gradient-to-br from-heritage-gold to-yellow-600 rounded-full flex items-center justify-center text-white font-bold">
              SJ
            </div>
          </div>
        </header>

        <div className="p-8">
          {/* Stats */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {[
              { label: "Total Students", value: "77", change: "+12", icon: Users, color: "sky" },
              { label: "Active Courses", value: "2", change: "0", icon: BookOpen, color: "gold" },
              { label: "Pending Grades", value: "25", change: "-8", icon: ClipboardCheck, color: "green" },
              { label: "Avg. Rating", value: "4.7", change: "+0.2", icon: TrendingUp, color: "gold" },
            ].map((stat, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }} className="bg-charcoal-black border border-white/5 rounded-2xl p-6">
                <div className="flex items-center justify-between mb-4">
                  <stat.icon className={`w-8 h-8 ${stat.color === 'sky' ? 'text-sky-blue' : stat.color === 'green' ? 'text-trust-green' : 'text-heritage-gold'}`} />
                  <span className="text-trust-green text-sm">{stat.change}</span>
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
                  <button className="text-heritage-gold text-sm">View All</button>
                </div>
                <div className="space-y-4">
                  {courses.map((course) => (
                    <div key={course.id} className="bg-white/5 rounded-xl p-5 hover:bg-white/10 transition-colors">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h3 className="text-warm-white font-semibold text-lg">{course.name}</h3>
                          <p className="text-warm-white/40 text-sm">{course.students} students · {course.lessons} lessons</p>
                        </div>
                        <div className="flex items-center gap-1 bg-heritage-gold/20 px-3 py-1 rounded-full">
                          <span className="text-heritage-gold text-sm font-medium">{course.rating}</span>
                          <span className="text-heritage-gold/60 text-xs">★</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="flex-1">
                          <div className="flex justify-between text-sm mb-2">
                            <span className="text-warm-white/60">Progress</span>
                            <span className="text-warm-white">{Math.round((course.completed / course.lessons) * 100)}%</span>
                          </div>
                          <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                            <div className="h-full bg-heritage-gold rounded-full" style={{ width: `${(course.completed / course.lessons) * 100}%` }} />
                          </div>
                        </div>
                        <div className="flex gap-2">
                          <button className="px-4 py-2 bg-white/5 hover:bg-white/10 text-warm-white rounded-lg text-sm transition-colors">
                            <Eye className="w-4 h-4 inline mr-1" /> View
                          </button>
                          <button className="px-4 py-2 bg-heritage-gold/20 hover:bg-heritage-gold/30 text-heritage-gold rounded-lg text-sm">
                            <Plus className="w-4 h-4 inline mr-1" /> Lesson
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Pending Grading */}
              <div className="bg-charcoal-black border border-white/5 rounded-2xl p-6">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-bold text-warm-white">Pending Grading</h2>
                  <span className="bg-heritage-gold/20 text-heritage-gold px-3 py-1 rounded-full text-sm">25 total</span>
                </div>
                <div className="space-y-3">
                  {pendingGrading.map((item) => (
                    <div key={item.id} className="flex items-center justify-between p-4 bg-white/5 rounded-xl">
                      <div>
                        <h4 className="text-warm-white font-medium">{item.assignment}</h4>
                        <p className="text-warm-white/40 text-sm">{item.course}</p>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="text-right">
                          <span className="text-heritage-gold font-medium">{item.pending}</span>
                          <span className="text-warm-white/40 text-sm"> / {item.submitted}</span>
                        </div>
                        <button className="px-4 py-2 bg-trust-green/20 hover:bg-trust-green/30 text-trust-green rounded-lg text-sm">
                          Grade
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Schedule */}
              <div className="bg-charcoal-black border border-white/5 rounded-2xl p-6">
                <h3 className="text-warm-white font-semibold mb-4">Today's Schedule</h3>
                <div className="space-y-3">
                  {[
                    { time: "9:00 AM", event: "Web Dev - Lesson 19", type: "class" },
                    { time: "11:00 AM", event: "Data Analytics - Quiz", type: "exam" },
                    { time: "2:00 PM", event: "Office Hours", type: "meeting" },
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3 p-3 bg-white/5 rounded-xl">
                      <div className={`w-2 h-2 rounded-full ${item.type === 'exam' ? 'bg-heritage-gold' : item.type === 'meeting' ? 'bg-sky-blue' : 'bg-trust-green'}`} />
                      <div className="flex-1">
                        <p className="text-warm-white text-sm">{item.event}</p>
                        <p className="text-warm-white/40 text-xs">{item.time}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Activity */}
              <div className="bg-charcoal-black border border-white/5 rounded-2xl p-6">
                <h3 className="text-warm-white font-semibold mb-4">Recent Activity</h3>
                <div className="space-y-3">
                  {recentActivity.map((activity) => (
                    <div key={activity.id} className="p-3 bg-white/5 rounded-xl">
                      <p className="text-warm-white text-sm">{activity.action}</p>
                      <div className="flex justify-between mt-1">
                        <span className="text-warm-white/40 text-xs">{activity.course}</span>
                        <span className="text-warm-white/40 text-xs">{activity.time}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quick Actions */}
              <div className="bg-charcoal-black border border-white/5 rounded-2xl p-6">
                <h3 className="text-warm-white font-semibold mb-4">Quick Actions</h3>
                <div className="space-y-2">
                  {[
                    "Take Attendance",
                    "Send Announcement",
                    "Create Assignment",
                    "Update Materials"
                  ].map((action, i) => (
                    <button key={i} className="w-full text-left px-4 py-3 bg-white/5 hover:bg-white/10 text-warm-white/70 rounded-xl text-sm transition-colors">
                      {action}
                    </button>
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