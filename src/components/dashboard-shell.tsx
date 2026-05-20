"use client";

import { ReactNode, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
  GraduationCap, 
  LayoutDashboard, 
  BookOpen, 
  Users, 
  FileText, 
  ClipboardList,
  Video,
  FolderOpen,
  Award,
  Briefcase,
  Building2,
  BarChart3,
  MessageSquare,
  Bell,
  Settings,
  LogOut,
  Menu,
  X,
  ChevronRight
} from "lucide-react";

type Role = "student" | "trainer" | "institutional" | "corporate" | "donor";

interface DashboardShellProps {
  role: Role;
  children: ReactNode;
}

const roleConfigs: Record<Role, { title: string; items: { label: string; href: string; icon: any }[] }> = {
  student: {
    title: "Student Dashboard",
    items: [
      { label: "Dashboard", href: "/student/dashboard", icon: LayoutDashboard },
      { label: "My Programmes", href: "/student/programmes", icon: BookOpen },
      { label: "Assignments", href: "/student/assignments", icon: FileText },
      { label: "Assessments", href: "/student/assessments", icon: ClipboardList },
      { label: "Live Classes", href: "/student/live-classes", icon: Video },
      { label: "Resources", href: "/student/resources", icon: FolderOpen },
      { label: "Certifications", href: "/student/certifications", icon: Award },
      { label: "Career Paths", href: "/student/careers", icon: Briefcase },
      { label: "Applications", href: "/student/applications", icon: Building2 },
      { label: "Messages", href: "/student/messages", icon: MessageSquare },
    ]
  },
  trainer: {
    title: "Trainer Dashboard",
    items: [
      { label: "Dashboard", href: "/trainer/dashboard", icon: LayoutDashboard },
      { label: "My Courses", href: "/trainer/courses", icon: BookOpen },
      { label: "Cohorts", href: "/trainer/cohorts", icon: Users },
      { label: "Students", href: "/trainer/students", icon: Users },
      { label: "Assignments", href: "/trainer/assignments", icon: FileText },
      { label: "Assessments", href: "/trainer/assessments", icon: ClipboardList },
      { label: "Live Sessions", href: "/trainer/live-sessions", icon: Video },
      { label: "Resources", href: "/trainer/resources", icon: FolderOpen },
      { label: "Analytics", href: "/trainer/analytics", icon: BarChart3 },
      { label: "Messages", href: "/trainer/messages", icon: MessageSquare },
    ]
  },
  institutional: {
    title: "Admin Dashboard",
    items: [
      { label: "Dashboard", href: "/institutional/dashboard", icon: LayoutDashboard },
      { label: "Students", href: "/institutional/students", icon: Users },
      { label: "Trainers", href: "/institutional/trainers", icon: Users },
      { label: "Programmes", href: "/institutional/programmes", icon: BookOpen },
      { label: "Admissions", href: "/institutional/admissions", icon: FileText },
      { label: "Partnerships", href: "/institutional/partnerships", icon: Building2 },
      { label: "TVET Initiatives", href: "/institutional/tvet", icon: Award },
      { label: "Analytics", href: "/institutional/analytics", icon: BarChart3 },
      { label: "Finance", href: "/institutional/finance", icon: BarChart3 },
      { label: "Reports", href: "/institutional/reports", icon: FileText },
    ]
  },
  corporate: {
    title: "Corporate Dashboard",
    items: [
      { label: "Dashboard", href: "/corporate/dashboard", icon: LayoutDashboard },
      { label: "Programmes", href: "/corporate/programmes", icon: BookOpen },
      { label: "Recruitment", href: "/corporate/recruitment", icon: Users },
      { label: "Candidates", href: "/corporate/candidates", icon: Users },
      { label: "Internships", href: "/corporate/internships", icon: Briefcase },
      { label: "Reports", href: "/corporate/reports", icon: BarChart3 },
      { label: "Partnerships", href: "/corporate/partnerships", icon: Building2 },
      { label: "Messages", href: "/corporate/messages", icon: MessageSquare },
    ]
  },
  donor: {
    title: "Donor Dashboard",
    items: [
      { label: "Dashboard", href: "/donor/dashboard", icon: LayoutDashboard },
      { label: "Initiatives", href: "/donor/initiatives", icon: Award },
      { label: "Scholarships", href: "/donor/scholarships", icon: Award },
      { label: "Impact", href: "/donor/impact", icon: BarChart3 },
      { label: "Beneficiaries", href: "/donor/beneficiaries", icon: Users },
      { label: "Reports", href: "/donor/reports", icon: FileText },
      { label: "Partnerships", href: "/donor/partnerships", icon: Building2 },
      { label: "Messages", href: "/donor/messages", icon: MessageSquare },
    ]
  }
};

function Sidebar({ role }: { role: Role }) {
  const pathname = usePathname();
  const config = roleConfigs[role];

  return (
    <aside className="w-[280px] bg-[#06111F] border-r border-[rgba(212,175,55,0.08)] flex flex-col h-full">
      {/* Logo */}
      <div className="px-6 py-5 border-b border-[rgba(212,175,55,0.08)]">
        <Link href="/" className="flex items-center gap-3">
          <div className="w-9 h-9 bg-heritage-gold rounded-lg flex items-center justify-center">
            <GraduationCap className="w-5 h-5 text-[#041326]" />
          </div>
          <span className="text-[18px] font-semibold text-white">Dayrunner</span>
        </Link>
      </div>

      {/* Navigation */}
      <nav className="flex-1 overflow-y-auto py-4 px-3">
        <div className="space-y-1">
          {config.items.map((item) => {
            const Icon = item.icon;
            const isActive = pathname === item.href || pathname.startsWith(item.href + "/");
            
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
                {isActive && <ChevronRight className="w-4 h-4 ml-auto text-heritage-gold" />}
              </Link>
            );
          })}
        </div>
      </nav>

      {/* Bottom actions */}
      <div className="px-3 py-4 border-t border-[rgba(212,175,55,0.08)]">
        <Link
          href="/settings"
          className="flex items-center gap-3 px-4 py-3 rounded-xl text-[14px] font-medium text-white/[0.72] hover:text-white hover:bg-white/[0.04] transition-all"
        >
          <Settings className="w-5 h-5 text-white/[0.56]" />
          <span>Settings</span>
        </Link>
        <Link
          href="/signin"
          className="flex items-center gap-3 px-4 py-3 rounded-xl text-[14px] font-medium text-white/[0.72] hover:text-white hover:bg-white/[0.04] transition-all"
        >
          <LogOut className="w-5 h-5 text-white/[0.56]" />
          <span>Sign Out</span>
        </Link>
      </div>
    </aside>
  );
}

function Topbar({ role }: { role: Role }) {
  const config = roleConfigs[role];
  
  return (
    <header className="h-[72px] bg-[#0A1A30] border-b border-white/[0.05] flex items-center justify-between px-8">
      <div>
        <h1 className="text-xl font-semibold text-white">{config.title}</h1>
      </div>
      
      <div className="flex items-center gap-4">
        {/* Search */}
        <div className="relative">
          <input 
            type="text" 
            placeholder="Search..." 
            className="bg-white/[0.04] border border-white/[0.06] rounded-xl px-4 py-2.5 pl-10 text-white text-sm w-[280px] placeholder:text-white/[0.32] focus:outline-none focus:border-heritage-gold/30"
          />
          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-white/[0.32]">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </span>
        </div>

        {/* Notifications */}
        <button className="relative p-2.5 rounded-xl bg-white/[0.04] border border-white/[0.06] hover:bg-white/[0.08] transition-colors">
          <Bell className="w-5 h-5 text-white/[0.72]" />
          <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-heritage-gold rounded-full" />
        </button>

        {/* Messages */}
        <button className="p-2.5 rounded-xl bg-white/[0.04] border border-white/[0.06] hover:bg-white/[0.08] transition-colors">
          <MessageSquare className="w-5 h-5 text-white/[0.72]" />
        </button>

        {/* Profile */}
        <button className="flex items-center gap-3 pl-4 border-l border-white/[0.08]">
          <div className="w-9 h-9 bg-heritage-gold/20 rounded-full flex items-center justify-center">
            <span className="text-heritage-gold font-semibold text-sm">JD</span>
          </div>
          <div className="text-left">
            <div className="text-white text-sm font-medium">John Doe</div>
            <div className="text-white/[0.44] text-xs">Student</div>
          </div>
        </button>
      </div>
    </header>
  );
}

export function DashboardShell({ role, children }: DashboardShellProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen bg-[#0D2342]">
      {/* Desktop Sidebar */}
      <div className="hidden md:block">
        <Sidebar role={role} />
      </div>

      {/* Mobile Sidebar */}
      {sidebarOpen && (
        <div className="fixed inset-0 z-50 md:hidden">
          <div className="absolute inset-0 bg-black/50" onClick={() => setSidebarOpen(false)} />
          <div className="absolute left-0 top-0 bottom-0 w-[280px]">
            <Sidebar role={role} />
          </div>
        </div>
      )}

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Topbar */}
        <div className="md:hidden">
          <header className="h-[64px] bg-[#0A1A30] border-b border-white/[0.05] flex items-center justify-between px-4">
            <button onClick={() => setSidebarOpen(true)} className="p-2">
              <Menu className="w-6 h-6 text-white" />
            </button>
            <span className="text-white font-semibold">{roleConfigs[role].title}</span>
            <div className="w-9" />
          </header>
        </div>
        <div className="hidden md:block">
          <Topbar role={role} />
        </div>

        {/* Page Content */}
        <main className="flex-1 overflow-y-auto p-8">
          {children}
        </main>
      </div>
    </div>
  );
}