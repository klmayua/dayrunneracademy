"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { 
  GraduationCap, 
  ArrowRight, 
  ArrowLeft, 
  Check, 
  Upload, 
  User, 
  Shield, 
  FileText,
  Building2,
  Mail,
  Phone,
  MapPin,
  Calendar,
  Eye,
  EyeOff
} from "lucide-react";

const steps = [
  { id: 1, title: "Account", icon: User },
  { id: 2, title: "Identity", icon: Shield },
  { id: 3, title: "Education", icon: FileText },
  { id: 4, title: "Programme", icon: Building2 },
  { id: 5, title: "Review", icon: Check },
];

const nigerianStates = [
  "Abia", "Adamawa", "Akwa Ibom", "Anambra", "Bauchi", "Bayelsa", "Benue", "Borno",
  "Cross River", "Delta", "Ebonyi", "Edo", "Ekiti", "Enugu", "Gombe", "Imo",
  "Jigawa", "Kaduna", "Kano", "Katsina", "Kebbi", "Kogi", "Kwara", "Lagos",
  "Nasarawa", "Niger", "Ogun", "Ondo", "Osun", "Oyo", "Plateau", "Sokoto",
  "Taraba", "Yobe", "Zamfara", "FCT"
];

const programmeOptions = [
  "Digital Technology (Software Development)",
  "Digital Technology (Data Analytics)",
  "Automotive Engineering",
  "Healthcare & Nursing",
  "Agriculture & Agribusiness",
  "Hospitality & Tourism",
  "Manufacturing & Technical Trades"
];

export default function TVETRegistrationPage() {
  const [currentStep, setCurrentStep] = useState(1);
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    password: "",
    dob: "",
    gender: "",
    state: "",
    lga: "",
    nin: "",
    educationLevel: "",
    schoolName: "",
    graduationYear: "",
    programme: "",
    learningMode: "full-time",
    agreedTerms: false
  });

  const updateField = (field: string, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const nextStep = () => setCurrentStep(prev => Math.min(prev + 1, 5));
  const prevStep = () => setCurrentStep(prev => Math.max(prev - 1, 1));

  return (
    <div className="min-h-screen bg-institutional-navy">
      {/* Header */}
      <header className="border-b border-white/5 py-5 px-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link href="/initiatives/tvet" className="flex items-center gap-2">
            <div className="w-9 h-9 bg-heritage-gold rounded-lg flex items-center justify-center">
              <GraduationCap className="w-5 h-5 text-[#041326]" />
            </div>
            <span className="text-xl font-bold text-white">Dayrunner Academy</span>
          </Link>
          <Link href="/signin" className="text-warm-white/60 hover:text-white text-sm">
            Already registered? Sign in
          </Link>
        </div>
      </header>

      {/* Progress */}
      <div className="bg-[#071B34] border-b border-white/5 py-5 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center justify-between mb-3">
            {steps.map((step, i) => (
              <div key={step.id} className="flex items-center">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium transition-all
                  ${currentStep >= step.id ? 'bg-heritage-gold text-[#041326]' : 'bg-white/10 text-warm-white/40'}`}>
                  {currentStep > step.id ? <Check className="w-4 h-4" /> : step.id}
                </div>
                {i < steps.length - 1 && (
                  <div className={`w-20 h-0.5 mx-2 transition-all ${currentStep > step.id ? 'bg-heritage-gold' : 'bg-white/10'}`} />
                )}
              </div>
            ))}
          </div>
          <div className="flex justify-between text-xs text-warm-white/40">
            {steps.map(step => (
              <span key={step.id}>{step.title}</span>
            ))}
          </div>
        </div>
      </div>

      {/* Form */}
      <div className="py-10 px-6">
        <div className="max-w-3xl mx-auto">
          <AnimatePresence mode="wait">
            {/* Step 1: Account */}
            {currentStep === 1 && (
              <motion.div
                key="step1"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="bg-[#0D2342] border border-white/[0.06] rounded-2xl p-8"
              >
                <h2 className="text-2xl font-bold text-white mb-6">Create Your Account</h2>
                <p className="text-warm-white/50 mb-8">Enter your basic information to begin the registration process.</p>
                
                <div className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-warm-white/70 text-sm mb-2">First Name</label>
                      <input
                        type="text"
                        value={formData.firstName}
                        onChange={(e) => updateField("firstName", e.target.value)}
                        className="w-full bg-white/[0.04] border border-white/[0.08] rounded-xl px-4 py-3 text-white placeholder:text-white/[0.24] focus:border-heritage-gold/50 focus:outline-none"
                        placeholder="Enter first name"
                      />
                    </div>
                    <div>
                      <label className="block text-warm-white/70 text-sm mb-2">Last Name</label>
                      <input
                        type="text"
                        value={formData.lastName}
                        onChange={(e) => updateField("lastName", e.target.value)}
                        className="w-full bg-white/[0.04] border border-white/[0.08] rounded-xl px-4 py-3 text-white placeholder:text-white/[0.24] focus:border-heritage-gold/50 focus:outline-none"
                        placeholder="Enter last name"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-warm-white/70 text-sm mb-2">Email Address</label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => updateField("email", e.target.value)}
                      className="w-full bg-white/[0.04] border border-white/[0.08] rounded-xl px-4 py-3 text-white placeholder:text-white/[0.24] focus:border-heritage-gold/50 focus:outline-none"
                      placeholder="Enter email address"
                    />
                  </div>

                  <div>
                    <label className="block text-warm-white/70 text-sm mb-2">Phone Number</label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => updateField("phone", e.target.value)}
                      className="w-full bg-white/[0.04] border border-white/[0.08] rounded-xl px-4 py-3 text-white placeholder:text-white/[0.24] focus:border-heritage-gold/50 focus:outline-none"
                      placeholder="Enter phone number"
                    />
                  </div>

                  <div>
                    <label className="block text-warm-white/70 text-sm mb-2">Create Password</label>
                    <div className="relative">
                      <input
                        type={showPassword ? "text" : "password"}
                        value={formData.password}
                        onChange={(e) => updateField("password", e.target.value)}
                        className="w-full bg-white/[0.04] border border-white/[0.08] rounded-xl px-4 py-3 text-white placeholder:text-white/[0.24] focus:border-heritage-gold/50 focus:outline-none"
                        placeholder="Create a password"
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-white/40 hover:text-white"
                      >
                        {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Step 2: Identity */}
            {currentStep === 2 && (
              <motion.div
                key="step2"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="bg-[#0D2342] border border-white/[0.06] rounded-2xl p-8"
              >
                <h2 className="text-2xl font-bold text-white mb-6">Identity Information</h2>
                <p className="text-warm-white/50 mb-8">Please provide your personal identification details.</p>
                
                <div className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-warm-white/70 text-sm mb-2">Date of Birth</label>
                      <input
                        type="date"
                        value={formData.dob}
                        onChange={(e) => updateField("dob", e.target.value)}
                        className="w-full bg-white/[0.04] border border-white/[0.08] rounded-xl px-4 py-3 text-white focus:border-heritage-gold/50 focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-warm-white/70 text-sm mb-2">Gender</label>
                      <select
                        value={formData.gender}
                        onChange={(e) => updateField("gender", e.target.value)}
                        className="w-full bg-white/[0.04] border border-white/[0.08] rounded-xl px-4 py-3 text-white focus:border-heritage-gold/50 focus:outline-none"
                      >
                        <option value="">Select gender</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-warm-white/70 text-sm mb-2">State of Origin</label>
                      <select
                        value={formData.state}
                        onChange={(e) => updateField("state", e.target.value)}
                        className="w-full bg-white/[0.04] border border-white/[0.08] rounded-xl px-4 py-3 text-white focus:border-heritage-gold/50 focus:outline-none"
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
                        onChange={(e) => updateField("lga", e.target.value)}
                        className="w-full bg-white/[0.04] border border-white/[0.08] rounded-xl px-4 py-3 text-white placeholder:text-white/[0.24] focus:border-heritage-gold/50 focus:outline-none"
                        placeholder="Local Government Area"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-warm-white/70 text-sm mb-2">National Identity Number (NIN)</label>
                    <input
                      type="text"
                      value={formData.nin}
                      onChange={(e) => updateField("nin", e.target.value)}
                      className="w-full bg-white/[0.04] border border-white/[0.08] rounded-xl px-4 py-3 text-white placeholder:text-white/[0.24] focus:border-heritage-gold/50 focus:outline-none"
                      placeholder="Enter your 11-digit NIN"
                      maxLength={11}
                    />
                  </div>
                </div>
              </motion.div>
            )}

            {/* Step 3: Education */}
            {currentStep === 3 && (
              <motion.div
                key="step3"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="bg-[#0D2342] border border-white/[0.06] rounded-2xl p-8"
              >
                <h2 className="text-2xl font-bold text-white mb-6">Educational Background</h2>
                <p className="text-warm-white/50 mb-8">Tell us about your educational history.</p>
                
                <div className="space-y-6">
                  <div>
                    <label className="block text-warm-white/70 text-sm mb-2">Highest Education Level</label>
                    <select
                      value={formData.educationLevel}
                      onChange={(e) => updateField("educationLevel", e.target.value)}
                      className="w-full bg-white/[0.04] border border-white/[0.08] rounded-xl px-4 py-3 text-white focus:border-heritage-gold/50 focus:outline-none"
                    >
                      <option value="">Select education level</option>
                      <option value="ssce">SSCE / WASC / GCE</option>
                      <option value="nd">National Diploma (ND)</option>
                      <option value="hnd">Higher National Diploma (HND)</option>
                      <option value="bsc">Bachelor's Degree</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-warm-white/70 text-sm mb-2">Last School Attended</label>
                    <input
                      type="text"
                      value={formData.schoolName}
                      onChange={(e) => updateField("schoolName", e.target.value)}
                      className="w-full bg-white/[0.04] border border-white/[0.08] rounded-xl px-4 py-3 text-white placeholder:text-white/[0.24] focus:border-heritage-gold/50 focus:outline-none"
                      placeholder="Enter school name"
                    />
                  </div>

                  <div>
                    <label className="block text-warm-white/70 text-sm mb-2">Year of Graduation</label>
                    <input
                      type="number"
                      value={formData.graduationYear}
                      onChange={(e) => updateField("graduationYear", e.target.value)}
                      className="w-full bg-white/[0.04] border border-white/[0.08] rounded-xl px-4 py-3 text-white placeholder:text-white/[0.24] focus:border-heritage-gold/50 focus:outline-none"
                      placeholder="Enter year"
                      min={1990}
                      max={2026}
                    />
                  </div>
                </div>
              </motion.div>
            )}

            {/* Step 4: Programme */}
            {currentStep === 4 && (
              <motion.div
                key="step4"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="bg-[#0D2342] border border-white/[0.06] rounded-2xl p-8"
              >
                <h2 className="text-2xl font-bold text-white mb-6">Programme Selection</h2>
                <p className="text-warm-white/50 mb-8">Select your preferred programme and learning mode.</p>
                
                <div className="space-y-6">
                  <div>
                    <label className="block text-warm-white/70 text-sm mb-2">Programme of Interest</label>
                    <select
                      value={formData.programme}
                      onChange={(e) => updateField("programme", e.target.value)}
                      className="w-full bg-white/[0.04] border border-white/[0.08] rounded-xl px-4 py-3 text-white focus:border-heritage-gold/50 focus:outline-none"
                    >
                      <option value="">Select a programme</option>
                      {programmeOptions.map(prog => (
                        <option key={prog} value={prog}>{prog}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-warm-white/70 text-sm mb-2">Preferred Learning Mode</label>
                    <div className="grid grid-cols-2 gap-4">
                      {["Full-time", "Part-time", "Weekend Only"].map((mode) => (
                        <button
                          key={mode}
                          onClick={() => updateField("learningMode", mode.toLowerCase().replace("-", ""))}
                          className={`p-4 rounded-xl border text-sm font-medium transition-all ${
                            formData.learningMode === mode.toLowerCase().replace("-", "")
                              ? "bg-heritage-gold/10 border-heritage-gold/30 text-heritage-gold"
                              : "bg-white/[0.04] border-white/[0.08] text-warm-white/60 hover:border-white/20"
                          }`}
                        >
                          {mode}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Step 5: Review */}
            {currentStep === 5 && (
              <motion.div
                key="step5"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="bg-[#0D2342] border border-white/[0.06] rounded-2xl p-8"
              >
                <h2 className="text-2xl font-bold text-white mb-6">Review Your Application</h2>
                <p className="text-warm-white/50 mb-8">Please review your information before submitting.</p>
                
                <div className="space-y-6">
                  <div className="bg-white/[0.04] rounded-xl p-6">
                    <h3 className="text-warm-white font-semibold mb-4">Personal Information</h3>
                    <div className="grid sm:grid-cols-2 gap-4 text-sm">
                      <div><span className="text-warm-white/50">Name:</span> <span className="text-white ml-2">{formData.firstName} {formData.lastName}</span></div>
                      <div><span className="text-warm-white/50">Email:</span> <span className="text-white ml-2">{formData.email}</span></div>
                      <div><span className="text-warm-white/50">Phone:</span> <span className="text-white ml-2">{formData.phone}</span></div>
                      <div><span className="text-warm-white/50">State:</span> <span className="text-white ml-2">{formData.state}</span></div>
                    </div>
                  </div>

                  <div className="bg-white/[0.04] rounded-xl p-6">
                    <h3 className="text-warm-white font-semibold mb-4">Programme Selection</h3>
                    <div className="text-sm">
                      <div><span className="text-warm-white/50">Programme:</span> <span className="text-white ml-2">{formData.programme || "Not selected"}</span></div>
                      <div><span className="text-warm-white/50">Mode:</span> <span className="text-white ml-2 capitalize">{formData.learningMode.replace("-", " ")}</span></div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-4 bg-heritage-gold/5 border border-heritage-gold/20 rounded-xl">
                    <input
                      type="checkbox"
                      id="terms"
                      checked={formData.agreedTerms}
                      onChange={(e) => updateField("agreedTerms", e.target.checked)}
                      className="mt-1"
                    />
                    <label htmlFor="terms" className="text-warm-white/70 text-sm">
                      I confirm that all information provided is accurate and I agree to the Terms and Conditions and Privacy Policy of Dayrunner Academy.
                    </label>
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
              onClick={currentStep === 5 ? () => {} : nextStep}
              disabled={currentStep === 5 && !formData.agreedTerms}
              className="flex items-center gap-2 bg-heritage-gold hover:bg-heritage-gold/90 text-institutional-navy px-8 py-3 rounded-xl font-semibold transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {currentStep === 5 ? 'Submit Application' : 'Continue'} 
              {currentStep !== 5 && <ArrowRight className="w-4 h-4" />}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}