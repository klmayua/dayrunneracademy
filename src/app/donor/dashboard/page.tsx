"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { 
  GraduationCap, 
  DollarSign, 
  Users, 
  TrendingUp, 
  Globe, 
  BarChart3, 
  FileText,
  ArrowUpRight,
  Calendar,
  MapPin,
  Heart
} from "lucide-react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from "recharts";

const impactData = [
  { month: "Jan", students: 120, employed: 95 },
  { month: "Feb", students: 150, employed: 120 },
  { month: "Mar", students: 180, employed: 145 },
  { month: "Apr", students: 210, employed: 175 },
  { month: "May", students: 250, employed: 200 },
  { month: "Jun", students: 280, employed: 235 },
];

const regionalData = [
  { region: "North Central", students: 3200, employment: 89 },
  { region: "South West", students: 4100, employment: 92 },
  { region: "South East", students: 2800, employment: 87 },
  { region: "North East", students: 1800, employment: 85 },
  { region: "South South", students: 2100, employment: 91 },
];

const stats = [
  { label: "Total Sponsored", value: "2,450", change: "+15%", icon: Users },
  { label: "Employment Rate", value: "89%", change: "+4%", icon: TrendingUp },
  { label: "Active Programmes", value: "12", change: "+2%", icon: GraduationCap },
  { label: "Total Disbursed", value: "₦45M", change: "+22%", icon: DollarSign },
];

const sponsoredStudents = [
  { id: 1, name: "Amina Bello", programme: "Digital Technology", state: "Kano", status: "active", amount: "₦150,000" },
  { id: 2, name: "Chidi Okonkwo", programme: "Healthcare", state: "Lagos", status: "active", amount: "₦180,000" },
  { id: 3, name: "Fatima Ibrahim", programme: "Agriculture", state: "Katsina", status: "completed", amount: "₦120,000" },
  { id: 4, name: "Emeka Nwosu", programme: "Automotive", state: "Enugu", status: "active", amount: "₦160,000" },
];

export default function DonorDashboard() {
  return (
    <div className="min-h-screen bg-institutional-navy">
      {/* Header */}
      <header className="bg-charcoal-black border-b border-white/5 px-8 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-heritage-gold to-yellow-600 rounded-lg flex items-center justify-center">
              <GraduationCap className="w-6 h-6 text-institutional-navy" />
            </div>
            <div>
              <span className="text-xl font-bold text-warm-white block">Dayrunner</span>
              <span className="text-xs text-heritage-gold">Donor Portal</span>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <button className="flex items-center gap-2 bg-heritage-gold/10 border border-heritage-gold/30 text-heritage-gold px-4 py-2 rounded-lg text-sm">
              <Heart className="w-4 h-4" /> Make a Donation
            </button>
            <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold">
              DK
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto p-8">
        {/* Welcome */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-8">
          <h1 className="text-3xl font-bold text-warm-white">Welcome, Foundation Partner</h1>
          <p className="text-warm-white/50 mt-2">Track your impact on Nigeria's workforce development</p>
        </motion.div>

        {/* Stats */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }} className="bg-charcoal-black border border-white/5 rounded-2xl p-6">
              <div className="flex items-center justify-between mb-4">
                <stat.icon className="w-8 h-8 text-heritage-gold" />
                <div className="flex items-center gap-1 text-trust-green text-sm">
                  <ArrowUpRight className="w-4 h-4" />
                  {stat.change}
                </div>
              </div>
              <div className="text-3xl font-bold text-warm-white">{stat.value}</div>
              <div className="text-warm-white/50 text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Charts */}
        <div className="grid lg:grid-cols-2 gap-8 mb-8">
          <div className="bg-charcoal-black border border-white/5 rounded-2xl p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold text-warm-white">Impact Growth</h2>
              <div className="flex items-center gap-4 text-sm">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-heritage-gold rounded-full" />
                  <span className="text-warm-white/60">Sponsored</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-trust-green rounded-full" />
                  <span className="text-warm-white/60">Employed</span>
                </div>
              </div>
            </div>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={impactData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#ffffff10" />
                  <XAxis dataKey="month" stroke="#ffffff40" fontSize={12} />
                  <YAxis stroke="#ffffff40" fontSize={12} />
                  <Tooltip contentStyle={{ backgroundColor: '#111827', border: '1px solid #ffffff10', borderRadius: '8px' }} />
                  <Line type="monotone" dataKey="students" stroke="#D4AF37" strokeWidth={3} name="Sponsored" />
                  <Line type="monotone" dataKey="employed" stroke="#10B981" strokeWidth={3} name="Employed" />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="bg-charcoal-black border border-white/5 rounded-2xl p-6">
            <h2 className="text-xl font-bold text-warm-white mb-6">Regional Impact</h2>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={regionalData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#ffffff10" />
                  <XAxis dataKey="region" stroke="#ffffff40" fontSize={12} />
                  <YAxis stroke="#ffffff40" fontSize={12} />
                  <Tooltip contentStyle={{ backgroundColor: '#111827', border: '1px solid #ffffff10', borderRadius: '8px' }} />
                  <Bar dataKey="students" fill="#38BDF8" radius={[4, 4, 0, 0]} name="Students" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        {/* Sponsored Students */}
        <div className="bg-charcoal-black border border-white/5 rounded-2xl p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold text-warm-white">Sponsored Learners</h2>
            <button className="text-heritage-gold text-sm">View All</button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-white/5">
                  <th className="text-left text-warm-white/40 font-medium text-sm py-3">Name</th>
                  <th className="text-left text-warm-white/40 font-medium text-sm py-3">Programme</th>
                  <th className="text-left text-warm-white/40 font-medium text-sm py-3">State</th>
                  <th className="text-left text-warm-white/40 font-medium text-sm py-3">Amount</th>
                  <th className="text-left text-warm-white/40 font-medium text-sm py-3">Status</th>
                </tr>
              </thead>
              <tbody>
                {sponsoredStudents.map((student) => (
                  <tr key={student.id} className="border-b border-white/5 hover:bg-white/5">
                    <td className="py-4">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-gradient-to-br from-trust-green to-emerald-600 rounded-full flex items-center justify-center text-white text-xs font-bold">
                          {student.name.split(' ').map(n => n[0]).join('')}
                        </div>
                        <span className="text-warm-white">{student.name}</span>
                      </div>
                    </td>
                    <td className="py-4 text-warm-white/70">{student.programme}</td>
                    <td className="py-4 text-warm-white/70">
                      <div className="flex items-center gap-1">
                        <MapPin className="w-3 h-3" /> {student.state}
                      </div>
                    </td>
                    <td className="py-4 text-warm-white">{student.amount}</td>
                    <td className="py-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${student.status === 'active' ? 'bg-trust-green/20 text-trust-green' : 'bg-heritage-gold/20 text-heritage-gold'}`}>
                        {student.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="grid sm:grid-cols-3 gap-6 mt-8">
          <button className="bg-charcoal-black border border-white/5 rounded-2xl p-6 text-left hover:border-heritage-gold/30 transition-all group">
            <FileText className="w-8 h-8 text-heritage-gold mb-4 group-hover:scale-110 transition-transform" />
            <h3 className="text-warm-white font-semibold mb-1">Download Reports</h3>
            <p className="text-warm-white/40 text-sm">Get detailed impact reports</p>
          </button>
          <button className="bg-charcoal-black border border-white/5 rounded-2xl p-6 text-left hover:border-heritage-gold/30 transition-all group">
            <BarChart3 className="w-8 h-8 text-heritage-gold mb-4 group-hover:scale-110 transition-transform" />
            <h3 className="text-warm-white font-semibold mb-1">Analytics Deep Dive</h3>
            <p className="text-warm-white/40 text-sm">Explore detailed metrics</p>
          </button>
          <button className="bg-charcoal-black border border-white/5 rounded-2xl p-6 text-left hover:border-heritage-gold/30 transition-all group">
            <Globe className="w-8 h-8 text-heritage-gold mb-4 group-hover:scale-110 transition-transform" />
            <h3 className="text-warm-white font-semibold mb-1">Partnership Opportunities</h3>
            <p className="text-warm-white/40 text-sm">Expand your impact</p>
          </button>
        </div>
      </div>
    </div>
  );
}