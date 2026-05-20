"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { 
  GraduationCap, 
  LayoutDashboard, 
  Users, 
  FileText, 
  Shield,
  CreditCard,
  Building2,
  MapPin,
  Award,
  TrendingUp,
  MessageSquare,
  Bell,
  Settings,
  LogOut,
  Menu,
  X,
  Search,
  CheckCircle,
  Clock,
  AlertCircle,
  ChevronRight,
  BarChart3,
  Eye,
  Download,
  RefreshCw
} from "lucide-react";

const sidebarItems = [
  { label: "Overview", href: "/tvet-admin", icon: LayoutDashboard },
  { label: "Applications", href: "/tvet-admin/applications", icon: FileText },
  { label: "Student Verification", href: "/tvet-admin/verification", icon: Shield },
  { label: "NIN Verification", href: "/tvet-admin/nin", icon: CreditCard },
  { label: "BVN Verification", href: "/tvet-admin/bvn", icon: CreditCard },
  { label: "Programme Enrollment", href: "/tvet-admin/enrollment", icon: Award },
  { label: "Regional Analytics", href: "/tvet-admin/regions", icon: MapPin },
  { label: "Institution Performance", href: "/tvet-admin/institutions", icon: Building2 },
  { label: "Attendance Monitoring", href: "/tvet-admin/attendance", icon: Clock },
  { label: "Certification Tracking", href: "/tvet-admin/certifications", icon: Award },
  { label: "Employability", href: "/tvet-admin/employability", icon: TrendingUp },
  { label: "Reports", href: "/tvet-admin/reports", icon: BarChart3 },
];

const stats = [
  { label: "Total Registered", value: "48,234", icon: Users, change: "+12%" },
  { label: "Pending Verification", value: "2,847", icon: Clock, change: "-8%" },
  { label: "Approved Students", value: "42,156", icon: CheckCircle, change: "+15%" },
  { label: "Active Institutions", value: "186", icon: Building2, change: "+5%" },
];

const recentApplications = [
  { name: "Chukwuemeka Okonkwo", programme: "Digital Technology", state: "Lagos", status: "pending", date: "2 hours ago" },
  { name: "Aisha Mohammed", programme: "Healthcare & Nursing", state: "Kano", status: "verified", date: "4 hours ago" },
  { name: "Emmanuel Adeyemi", programme: "Automotive Engineering", state: "Oyo", status: "reviewing", date: "5 hours ago" },
  { name: "Grace Nwosu", programme: "Agriculture & Agribusiness", state: "Anambra", status: "pending", date: "Yesterday" },
];

const verificationStats = [
  { label: "NIN Verified", value: "38,456", percentage: 79.7 },
  { label: "NIN Pending", value: "9,778", percentage: 20.3 },
  { label: "BVN Verified", value: "28,934", percentage: 60.0 },
  { label: "BVN Pending", value: "19,300", percentage: 40.0 },
];

const stateDistribution = [
  { state: "Lagos", registrations: 8420 },
  { state: "Kano", registrations: 6180 },
  { state: "Oyo", registrations: 4120 },
  { state: "Ogun", registrations: 3890 },
  { state: "Rivers", registrations: 3650 },
  { state: "Katsina", registrations: 3210 },
];

export default function TVETAdminDashboard() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="flex h-screen bg-[#0B1F36]">
      {/* Sidebar */}
      <aside className="w-[280px] bg-[#06152A] border-r border-[rgba(212,175,55,0.08)] flex flex-col hidden md:flex">
        {/* Logo */}
        <div className="px-6 py-5 border-b border-[rgba(212,175,55,0.08)]">
          <Link href="/" className="flex items-center gap-3">
            <div className="w-9 h-9 bg-heritage-gold rounded-lg flex items-center justify-center">
              <GraduationCap className="w-5 h-5 text-[#041326]" />
            </div>
            <div>
              <span className="text-[16px] font-semibold text-white">Dayrunner</span>
              <span className="text-[10px] text-white/30 block">TVET Admin</span>
            </div>
          </Link>
        </div>

        {/* Navigation */}
        <nav className="flex-1 overflow-y-auto py-4 px-3">
          <div className="space-y-1">
            {sidebarItems.map((item) => {
              const Icon = item.icon;
              const isActive = pathname === item.href;
              
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`flex items-center gap-3 px-4 py-3 rounded-xl text-[14px] font-medium transition-all ${
                    isActive 
                      ? "bg-heritage-gold/10 text-heritage-gold" 
                      : "text-white/[0.72] hover:text-white hover:bg-white/[0.04]"
                  }`}
                >
                  <Icon className={`w-5 h-5 ${isActive ? "text-heritage-gold" : "text-white/[0.56]"}`} />
                  <span>{item.label}</span>
                </Link>
              );
            })}
          </div>
        </nav>

        {/* Bottom actions */}
        <div className="px-3 py-4 border-t border-[rgba(212,175,55,0.08)]">
          <Link href="/settings" className="flex items-center gap-3 px-4 py-3 rounded-xl text-[14px] font-medium text-white/[0.72] hover:text-white hover:bg-white/[0.04]">
            <Settings className="w-5 h-5" />
            <span>Settings</span>
          </Link>
          <Link href="/" className="flex items-center gap-3 px-4 py-3 rounded-xl text-[14px] font-medium text-white/[0.72] hover:text-white hover:bg-white/[0.04]">
            <LogOut className="w-5 h-5" />
            <span>Exit Admin</span>
          </Link>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Topbar */}
        <header className="h-[72px] bg-[rgba(10,24,44,0.82)] backdrop-blur-md border-b border-white/[0.05] flex items-center justify-between px-6">
          <div className="flex items-center gap-4">
            <button className="md:hidden p-2" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              <Menu className="w-6 h-6 text-white" />
            </button>
            <h1 className="text-xl font-bold text-white">TVET Operations Dashboard</h1>
          </div>
          
          <div className="flex items-center gap-4">
            {/* Search */}
            <div className="relative hidden md:block">
              <input 
                type="text" 
                placeholder="Search applicants..." 
                className="bg-white/[0.04] border border-white/[0.06] rounded-xl px-4 py-2.5 pl-10 text-white text-sm w-[280px] placeholder:text-white/[0.32] focus:outline-none focus:border-heritage-gold/30"
              />
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/[0.32]" />
            </div>

            {/* Notifications */}
            <button className="relative p-2.5 rounded-xl bg-white/[0.04] border border-white/[0.06]">
              <Bell className="w-5 h-5 text-white/[0.72]" />
              <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-heritage-gold rounded-full" />
            </button>

            {/* Profile */}
            <button className="flex items-center gap-3 pl-4 border-l border-white/[0.08]">
              <div className="w-9 h-9 bg-heritage-gold/20 rounded-full flex items-center justify-center">
                <span className="text-heritage-gold font-semibold text-sm">AO</span>
              </div>
              <div className="text-left hidden md:block">
                <div className="text-white text-sm font-medium">Admin Ops</div>
                <div className="text-white/[0.44] text-xs">TVET Manager</div>
              </div>
            </button>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 overflow-y-auto p-6">
          {/* Hero Metrics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="bg-[#102846] rounded-2xl p-6 border border-white/[0.04]"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 bg-heritage-gold/10 rounded-xl flex items-center justify-center">
                    <stat.icon className="w-5 h-5 text-heritage-gold" />
                  </div>
                  <span className="text-trust-green text-xs font-medium">{stat.change}</span>
                </div>
                <div className="text-2xl font-bold text-white">{stat.value}</div>
                <div className="text-white/50 text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </div>

          <div className="grid lg:grid-cols-3 gap-6">
            {/* Recent Applications */}
            <div className="lg:col-span-2 bg-[#102846] rounded-2xl p-6 border border-white/[0.04]">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-white font-semibold text-lg">Recent Registrations</h2>
                <button className="text-heritage-gold text-sm font-medium flex items-center gap-1">
                  View All <ChevronRight className="w-4 h-4" />
                </button>
              </div>
              <div className="space-y-4">
                {recentApplications.map((app, i) => (
                  <div key={i} className="flex items-center gap-4 p-4 bg-[#06152A] rounded-xl">
                    <div className="w-10 h-10 bg-heritage-gold/10 rounded-full flex items-center justify-center">
                      <Users className="w-5 h-5 text-heritage-gold" />
                    </div>
                    <div className="flex-1">
                      <p className="text-white font-medium">{app.name}</p>
                      <p className="text-white/40 text-sm">{app.programme} • {app.state}</p>
                    </div>
                    <div className="text-right">
                      <span className={`text-xs font-medium px-3 py-1 rounded-full ${
                        app.status === "verified" ? "bg-trust-green/10 text-trust-green" :
                        app.status === "pending" ? "bg-heritage-gold/10 text-heritage-gold" :
                        "bg-sky-blue/10 text-sky-blue"
                      }`}>
                        {app.status}
                      </span>
                      <p className="text-white/30 text-xs mt-1">{app.date}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Verification Stats */}
            <div className="bg-[#102846] rounded-2xl p-6 border border-white/[0.04]">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-white font-semibold text-lg">Verification Status</h2>
                <button className="p-2 hover:bg-white/[0.04] rounded-lg">
                  <RefreshCw className="w-4 h-4 text-white/40" />
                </button>
              </div>
              
              <div className="space-y-6">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-white/70 text-sm">NIN Verification</span>
                    <span className="text-heritage-gold text-sm font-medium">79.7%</span>
                  </div>
                  <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                    <div className="h-full bg-heritage-gold rounded-full" style={{ width: "79.7%" }} />
                  </div>
                  <div className="flex justify-between mt-2 text-xs text-white/40">
                    <span>Verified: 38,456</span>
                    <span>Pending: 9,778</span>
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-white/70 text-sm">BVN Verification</span>
                    <span className="text-trust-green text-sm font-medium">60.0%</span>
                  </div>
                  <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                    <div className="h-full bg-trust-green rounded-full" style={{ width: "60%" }} />
                  </div>
                  <div className="flex justify-between mt-2 text-xs text-white/40">
                    <span>Verified: 28,934</span>
                    <span>Pending: 19,300</span>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-white/[0.06]">
                <button className="w-full flex items-center justify-center gap-2 bg-heritage-gold hover:bg-[#E0BB45] text-[#041326] py-3 rounded-xl font-semibold">
                  <Eye className="w-4 h-4" /> Review Pending
                </button>
              </div>
            </div>
          </div>

          {/* State Distribution */}
          <div className="mt-6 bg-[#102846] rounded-2xl p-6 border border-white/[0.04]">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-white font-semibold text-lg">State Distribution</h2>
              <button className="flex items-center gap-2 text-white/50 text-sm hover:text-white">
                <Download className="w-4 h-4" /> Export Data
              </button>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {stateDistribution.map((item, i) => (
                <div key={i} className="flex items-center justify-between p-4 bg-[#06152A] rounded-xl">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-heritage-gold/10 rounded-lg flex items-center justify-center text-heritage-gold font-semibold text-sm">
                      {i + 1}
                    </div>
                    <span className="text-white font-medium">{item.state}</span>
                  </div>
                  <span className="text-heritage-gold font-semibold">{item.registrations.toLocaleString()}</span>
                </div>
              ))}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}