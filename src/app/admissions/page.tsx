"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  GraduationCap, 
  ArrowRight, 
  ArrowLeft, 
  Check, 
  Upload, 
  MapPin, 
  Phone, 
  Mail,
  User,
  BookOpen,
  Briefcase,
  FileText
} from "lucide-react";

const steps = [
  { id: 1, title: "Account", icon: User },
  { id: 2, title: "Personal Info", icon: User },
  { id: 3, title: "Education", icon: BookOpen },
  { id: 4, title: "Programme", icon: Briefcase },
  { id: 5, title: "Documents", icon: FileText },
  { id: 6, title: "Review", icon: Check },
];

const nigerianStates = [
  "Abia", "Adamawa", "Akwa Ibom", "Anambra", "Bauchi", "Bayelsa", "Benue", "Borno",
  "Cross River", "Delta", "Ebonyi", "Edo", "Ekiti", "Enugu", "Gombe", "Imo",
  "Jigawa", "Kaduna", "Kano", "Katsina", "Kebbi", "Kogi", "Kwara", "Lagos",
  "Nasarawa", "Niger", "Ogun", "Ondo", "Osun", "Oyo", "Plateau", "Sokoto",
  "Taraba", "Yobe", "Zamfara", "FCT"
];

export default function AdmissionsPage() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    email: "",
    phone: "",
    firstName: "",
    lastName: "",
    dob: "",
    gender: "",
    state: "",
    lga: "",
    nin: "",
    educationLevel: "",
    schoolName: "",
    yearCompleted: "",
    programme: "",
    employmentStatus: "",
    documents: [] as string[]
  });

  const updateForm = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const nextStep = () => setCurrentStep(prev => Math.min(prev + 1, 6));
  const prevStep = () => setCurrentStep(prev => Math.max(prev - 1, 1));

  return (
    <div className="min-h-screen bg-institutional-navy">
      {/* Hero Section with Image */}
      <section className="relative py-16 px-6 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=1920&q=80"
            alt="African students in modern institutional environment"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#041326] via-[#041326]/95 to-[#041326]" />
        </div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-warm-white mb-4">
                Begin Your <span className="text-heritage-gold">Transformation</span>
              </h1>
              <p className="text-warm-white/60 text-lg mb-6">
                Join Nigeria's premier workforce development institution. Your journey to a rewarding career starts here.
              </p>
              <div className="flex items-center gap-6 text-warm-white/50">
                <div className="flex items-center gap-2">
                  <Check className="w-5 h-5 text-trust-green" />
                  <span>Accredited Certifications</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-5 h-5 text-trust-green" />
                  <span>89% Employment Rate</span>
                </div>
              </div>
            </div>
            <div className="hidden lg:block relative">
              <img 
                src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&q=80"
                alt="Students in modern learning environment"
                className="w-full rounded-3xl"
              />
              <div className="absolute inset-0 bg-[rgba(4,19,38,0.35)] rounded-3xl" />
              <div className="absolute inset-4 border border-heritage-gold/30 rounded-[20px]" />
            </div>
          </div>
        </div>
      </section>

      {/* Header */}
      <header className="border-b border-white/5 py-6 px-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-heritage-gold to-yellow-600 rounded-lg flex items-center justify-center">
              <GraduationCap className="w-6 h-6 text-institutional-navy" />
            </div>
            <span className="text-xl font-bold text-warm-white">Dayrunner Academy</span>
          </div>
          <span className="text-warm-white/50">Already applied? <a href="#" className="text-heritage-gold">Login</a></span>
        </div>
      </header>

      {/* Progress */}
      <div className="bg-charcoal-black/50 border-b border-white/5 py-4 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center justify-between">
            {steps.map((step, i) => (
              <div key={step.id} className="flex items-center">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium transition-all
                  ${currentStep >= step.id ? 'bg-heritage-gold text-institutional-navy' : 'bg-white/10 text-warm-white/40'}`}>
                  {currentStep > step.id ? <Check className="w-4 h-4" /> : step.id}
                </div>
                {i < steps.length - 1 && (
                  <div className={`w-16 h-0.5 mx-2 transition-all ${currentStep > step.id ? 'bg-heritage-gold' : 'bg-white/10'}`} />
                )}
              </div>
            ))}
          </div>
          <div className="flex justify-between mt-2 text-xs text-warm-white/40">
            {steps.map(step => (
              <span key={step.id}>{step.title}</span>
            ))}
          </div>
        </div>
      </div>

      {/* Form */}
      <div className="py-12 px-6">
        <div className="max-w-3xl mx-auto">
          <AnimatePresence mode="wait">
            {currentStep === 1 && (
              <motion.div
                key="step1"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="bg-charcoal-black border border-white/5 rounded-3xl p-8"
              >
                <h2 className="text-2xl font-bold text-warm-white mb-6">Create Your Account</h2>
                <div className="space-y-6">
                  <div>
                    <label className="block text-warm-white/70 text-sm mb-2">Email Address</label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => updateForm("email", e.target.value)}
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-warm-white focus:border-heritage-gold focus:outline-none transition-colors"
                      placeholder="your@email.com"
                    />
                  </div>
                  <div>
                    <label className="block text-warm-white/70 text-sm mb-2">Phone Number</label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => updateForm("phone", e.target.value)}
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-warm-white focus:border-heritage-gold focus:outline-none transition-colors"
                      placeholder="+2348000000000"
                    />
                  </div>
                  <div className="bg-trust-green/10 border border-trust-green/20 rounded-xl p-4">
                    <p className="text-trust-green text-sm">
                      We'll send a verification code to your phone number for OTP verification.
                    </p>
                  </div>
                </div>
              </motion.div>
            )}

            {currentStep === 2 && (
              <motion.div
                key="step2"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="bg-charcoal-black border border-white/5 rounded-3xl p-8"
              >
                <h2 className="text-2xl font-bold text-warm-white mb-6">Personal Information</h2>
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-warm-white/70 text-sm mb-2">First Name</label>
                    <input
                      type="text"
                      value={formData.firstName}
                      onChange={(e) => updateForm("firstName", e.target.value)}
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-warm-white focus:border-heritage-gold focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-warm-white/70 text-sm mb-2">Last Name</label>
                    <input
                      type="text"
                      value={formData.lastName}
                      onChange={(e) => updateForm("lastName", e.target.value)}
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-warm-white focus:border-heritage-gold focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-warm-white/70 text-sm mb-2">Date of Birth</label>
                    <input
                      type="date"
                      value={formData.dob}
                      onChange={(e) => updateForm("dob", e.target.value)}
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-warm-white focus:border-heritage-gold focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-warm-white/70 text-sm mb-2">Gender</label>
                    <select
                      value={formData.gender}
                      onChange={(e) => updateForm("gender", e.target.value)}
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-warm-white focus:border-heritage-gold focus:outline-none"
                    >
                      <option value="">Select gender</option>
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-warm-white/70 text-sm mb-2">State</label>
                    <select
                      value={formData.state}
                      onChange={(e) => updateForm("state", e.target.value)}
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-warm-white focus:border-heritage-gold focus:outline-none"
                    >
                      <option value="">Select state</option>
                      {nigerianStates.map(state => (
                        <option key={state} value={state}>{state}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-warm-white/70 text-sm mb-2">LGA</label>
                    <input
                      type="text"
                      value={formData.lga}
                      onChange={(e) => updateForm("lga", e.target.value)}
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-warm-white focus:border-heritage-gold focus:outline-none"
                      placeholder="Local Government Area"
                    />
                  </div>
                  <div className="sm:col-span-2">
                    <label className="block text-warm-white/70 text-sm mb-2">NIN (Optional)</label>
                    <input
                      type="text"
                      value={formData.nin}
                      onChange={(e) => updateForm("nin", e.target.value)}
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-warm-white focus:border-heritage-gold focus:outline-none"
                      placeholder="National Identity Number"
                    />
                  </div>
                </div>
              </motion.div>
            )}

            {currentStep === 3 && (
              <motion.div
                key="step3"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="bg-charcoal-black border border-white/5 rounded-3xl p-8"
              >
                <h2 className="text-2xl font-bold text-warm-white mb-6">Educational Background</h2>
                <div className="space-y-6">
                  <div>
                    <label className="block text-warm-white/70 text-sm mb-2">Highest Education Level</label>
                    <select
                      value={formData.educationLevel}
                      onChange={(e) => updateForm("educationLevel", e.target.value)}
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-warm-white focus:border-heritage-gold focus:outline-none"
                    >
                      <option value="">Select level</option>
                      <option value="primary">Primary School</option>
                      <option value="secondary">Secondary School (SSCE)</option>
                      <option value="tertiary">Tertiary Institution</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-warm-white/70 text-sm mb-2">School / Institution Name</label>
                    <input
                      type="text"
                      value={formData.schoolName}
                      onChange={(e) => updateForm("schoolName", e.target.value)}
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-warm-white focus:border-heritage-gold focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-warm-white/70 text-sm mb-2">Year Completed</label>
                    <input
                      type="number"
                      value={formData.yearCompleted}
                      onChange={(e) => updateForm("yearCompleted", e.target.value)}
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-warm-white focus:border-heritage-gold focus:outline-none"
                      placeholder="2024"
                    />
                  </div>
                </div>
              </motion.div>
            )}

            {currentStep === 4 && (
              <motion.div
                key="step4"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="bg-charcoal-black border border-white/5 rounded-3xl p-8"
              >
                <h2 className="text-2xl font-bold text-warm-white mb-6">Select Programme</h2>
                <div className="space-y-4">
                  {[
                    { id: "digital", name: "Digital Technology", duration: "12 months" },
                    { id: "automotive", name: "Automotive Engineering", duration: "9 months" },
                    { id: "agriculture", name: "Agriculture & Agribusiness", duration: "6 months" },
                    { id: "healthcare", name: "Healthcare & Nursing", duration: "12 months" },
                    { id: "hospitality", name: "Hospitality & Tourism", duration: "6 months" },
                    { id: "manufacturing", name: "Manufacturing & Trades", duration: "9 months" },
                  ].map((prog) => (
                    <label
                      key={prog.id}
                      className={`flex items-center justify-between p-4 rounded-xl border cursor-pointer transition-all ${
                        formData.programme === prog.id 
                          ? 'border-heritage-gold bg-heritage-gold/10' 
                          : 'border-white/10 hover:border-white/20'
                      }`}
                    >
                      <div className="flex items-center gap-4">
                        <input
                          type="radio"
                          name="programme"
                          value={prog.id}
                          checked={formData.programme === prog.id}
                          onChange={(e) => updateForm("programme", e.target.value)}
                          className="w-4 h-4 accent-heritage-gold"
                        />
                        <span className="text-warm-white">{prog.name}</span>
                      </div>
                      <span className="text-warm-white/50 text-sm">{prog.duration}</span>
                    </label>
                  ))}
                </div>
              </motion.div>
            )}

            {currentStep === 5 && (
              <motion.div
                key="step5"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="bg-charcoal-black border border-white/5 rounded-3xl p-8"
              >
                <h2 className="text-2xl font-bold text-warm-white mb-6">Upload Documents</h2>
                <div className="space-y-4">
                  {[
                    "Passport Photograph",
                    "O'Level Certificate",
                    "Birth Certificate",
                    "Local Government ID"
                  ].map((doc, i) => (
                    <div key={i} className="border border-dashed border-white/20 rounded-xl p-8 text-center hover:border-heritage-gold/50 transition-colors cursor-pointer">
                      <Upload className="w-8 h-8 text-warm-white/40 mx-auto mb-2" />
                      <p className="text-warm-white/70">{doc}</p>
                      <p className="text-warm-white/30 text-sm mt-1">Click or drag to upload</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}

            {currentStep === 6 && (
              <motion.div
                key="step6"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="bg-charcoal-black border border-white/5 rounded-3xl p-8"
              >
                <h2 className="text-2xl font-bold text-warm-white mb-6">Review Your Application</h2>
                <div className="space-y-6">
                  <div className="bg-white/5 rounded-xl p-6">
                    <h3 className="text-warm-white font-semibold mb-4">Personal Details</h3>
                    <div className="grid sm:grid-cols-2 gap-4 text-sm">
                      <div><span className="text-warm-white/50">Name:</span> <span className="text-warm-white">{formData.firstName} {formData.lastName}</span></div>
                      <div><span className="text-warm-white/50">Email:</span> <span className="text-warm-white">{formData.email}</span></div>
                      <div><span className="text-warm-white/50">Phone:</span> <span className="text-warm-white">{formData.phone}</span></div>
                      <div><span className="text-warm-white/50">State:</span> <span className="text-warm-white">{formData.state}</span></div>
                    </div>
                  </div>
                  <div className="bg-heritage-gold/10 border border-heritage-gold/20 rounded-xl p-6">
                    <p className="text-warm-white/70">
                      By submitting this application, you confirm that all information provided is accurate and you agree to our terms and conditions.
                    </p>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex justify-between mt-8">
            <button
              onClick={prevStep}
              disabled={currentStep === 1}
              className="flex items-center gap-2 px-6 py-3 rounded-xl font-medium text-warm-white/70 hover:text-warm-white disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
            >
              <ArrowLeft className="w-4 h-4" /> Back
            </button>
            <button
              onClick={currentStep === 6 ? () => {} : nextStep}
              className="flex items-center gap-2 bg-heritage-gold hover:bg-heritage-gold/90 text-institutional-navy px-8 py-3 rounded-xl font-semibold transition-all"
            >
              {currentStep === 6 ? 'Submit Application' : 'Continue'} 
              {currentStep !== 6 && <ArrowRight className="w-4 h-4" />}
            </button>
          </div>
        </div>
      </div>

      {/* Employability Section */}
      <section className="py-20 px-6 border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=800&q=80"
                alt="Young African professional in corporate environment"
                className="w-full rounded-3xl"
              />
              <div className="absolute inset-0 bg-[rgba(4,19,38,0.35)] rounded-3xl" />
              {/* Floating employment stats */}
              <div className="absolute -bottom-6 -right-6 card p-5 rounded-2xl border border-heritage-gold/20">
                <div className="text-3xl font-bold text-heritage-gold mb-1">89%</div>
                <div className="text-warm-white/50 text-sm">Employed within 6 months</div>
              </div>
            </div>
            <div>
              <span className="text-trust-green text-sm font-semibold uppercase tracking-wider">Career Outcomes</span>
              <h2 className="text-4xl font-bold text-warm-white mt-4 mb-6">Your Career is Our Mission</h2>
              <p className="text-warm-white/50 text-lg mb-8">
                Our programmes are designed with industry partners to ensure you graduate job-ready. We don't just teach skills – we build careers.
              </p>
              <div className="space-y-4">
                {[
                  "Direct hiring partnerships with 500+ employers",
                  "Internship placements in your chosen field",
                  "Career counseling from day one",
                  "Resume building and interview preparation"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-trust-green flex-shrink-0" />
                    <span className="text-warm-white/80">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Student Journey Section */}
      <section className="py-20 px-6 card/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-trust-green text-sm font-semibold uppercase tracking-wider">Your Journey</span>
            <h2 className="text-4xl font-bold text-warm-white mt-4">From Admission to Employment</h2>
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { step: "01", title: "Apply", desc: "Complete your application online", icon: User },
              { step: "02", title: "Assess", desc: "Take our eligibility assessment", icon: BookOpen },
              { step: "03", title: "Learn", desc: "Begin your programme", icon: GraduationCap },
              { step: "04", title: "Graduate", desc: "Start your career", icon: Briefcase }
            ].map((item, i) => (
              <div key={i} className="card border border-white/10 rounded-2xl p-6 text-center">
                <div className="text-5xl font-bold text-heritage-gold/20 mb-4">{item.step}</div>
                <h3 className="text-xl font-semibold text-warm-white mb-2">{item.title}</h3>
                <p className="text-warm-white/50 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}