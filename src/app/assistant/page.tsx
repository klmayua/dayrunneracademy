"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { 
  GraduationCap, 
  Send, 
  Bot, 
  ArrowLeft, 
  MessageSquare,
  FileText,
  Award,
  Users,
  HelpCircle,
  X
} from "lucide-react";

interface Message {
  id: number;
  role: "user" | "assistant";
  content: string;
}

const quickActions = [
  { label: "How do I apply?", action: "How do I apply to Dayrunner Academy?" },
  { label: "Registration help", action: "I need help with TVET registration" },
  { label: "Scholarships", action: "What scholarship opportunities are available?" },
  { label: "Programme guidance", action: "Which programme is right for me?" },
  { label: "Admissions requirements", action: "What are the admission requirements?" },
  { label: "Corporate partnerships", action: "How can my organization partner with Dayrunner?" },
];

export default function AssistantPage() {
  const [messages, setMessages] = useState<Message[]>([
    { id: 1, role: "assistant", content: "Hello! I'm your Dayrunner Academy AI Assistant. I'm here to help you with information about our TVET programmes, admissions, and institutional services. How can I assist you today?" }
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage: Message = { id: Date.now(), role: "user", content: input };
    setMessages(prev => [...prev, userMessage]);
    setInput("");
    setIsTyping(true);

    // Simulate AI response
    setTimeout(() => {
      const responses = [
        "Thank you for your question. Let me provide you with detailed information about that.",
        "I'd be happy to help you with that. Here's what you need to know...",
        "Great question! Let me explain the process for you.",
        "That's a popular topic. Here's everything you need to know about...",
      ];
      const randomResponse = responses[Math.floor(Math.random() * responses.length)];
      
      const aiMessage: Message = { 
        id: Date.now() + 1, 
        role: "assistant", 
        content: `${randomResponse} For more detailed information, please visit our admissions page or contact our support team directly.` 
      };
      setMessages(prev => [...prev, aiMessage]);
      setIsTyping(false);
    }, 1500);
  };

  const handleQuickAction = (action: string) => {
    setInput(action);
    const userMessage: Message = { id: Date.now(), role: "user", content: action };
    setMessages(prev => [...prev, userMessage]);
    setIsTyping(true);

    setTimeout(() => {
      const responses = [
        "Thank you for your question about applying to Dayrunner Academy. Here's what you need to know...",
        "For TVET registration assistance, let me guide you through the process...",
        "Scholarship opportunities at Dayrunner Academy include our merit-based and need-based programmes...",
        "Choosing the right programme depends on your career goals and current skill level...",
      ];
      const randomResponse = responses[Math.floor(Math.random() * responses.length)];
      
      const aiMessage: Message = { 
        id: Date.now() + 1, 
        role: "assistant", 
        content: randomResponse 
      };
      setMessages(prev => [...prev, aiMessage]);
      setIsTyping(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-institutional-navy pb-20 md:pb-0">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-[rgba(3,12,28,0.96)] backdrop-blur-xl border-b border-white/[0.06]">
        <div className="flex items-center justify-between px-5 h-[64px]">
          <Link href="/" className="flex items-center gap-3">
            <div className="w-9 h-9 bg-heritage-gold rounded-lg flex items-center justify-center">
              <GraduationCap className="w-5 h-5 text-[#041326]" />
            </div>
            <div className="flex items-center">
              <span className="text-[16px] font-semibold text-white">Dayrunner</span>
              <span className="text-[12px] text-white/[0.24] mx-1.5">|</span>
              <span className="text-[16px] font-semibold text-white">Assistant</span>
            </div>
          </Link>
          <Link href="/" className="p-2">
            <X className="w-6 h-6 text-white/80" />
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <div className="pt-[88px] px-4 max-w-3xl mx-auto">
        {/* Chat Header */}
        <div className="flex items-center gap-4 mb-6 p-4 bg-[#0D2342] rounded-2xl border border-white/[0.06]">
          <div className="w-12 h-12 bg-heritage-gold/10 rounded-full flex items-center justify-center">
            <Bot className="w-6 h-6 text-heritage-gold" />
          </div>
          <div>
            <h2 className="text-white font-semibold">AI Support Assistant</h2>
            <p className="text-white/50 text-sm">Dayrunner Academy</p>
          </div>
        </div>

        {/* Messages */}
        <div className="space-y-4 mb-6 min-h-[400px]">
          {messages.map((msg) => (
            <motion.div
              key={msg.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
            >
              <div className={`max-w-[85%] p-4 rounded-2xl ${
                msg.role === "user" 
                  ? "bg-heritage-gold text-[#041326]" 
                  : "bg-[#0D2342] border border-white/[0.06] text-white"
              }`}>
                <p className="text-sm leading-relaxed">{msg.content}</p>
              </div>
            </motion.div>
          ))}
          
          {isTyping && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex justify-start"
            >
              <div className="bg-[#0D2342] border border-white/[0.06] p-4 rounded-2xl">
                <div className="flex gap-1">
                  <span className="w-2 h-2 bg-heritage-gold rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
                  <span className="w-2 h-2 bg-heritage-gold rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
                  <span className="w-2 h-2 bg-heritage-gold rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
                </div>
              </div>
            </motion.div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Quick Actions */}
        <div className="mb-6">
          <p className="text-white/40 text-xs mb-3">Quick actions</p>
          <div className="flex flex-wrap gap-2">
            {quickActions.map((action, i) => (
              <button
                key={i}
                onClick={() => handleQuickAction(action.action)}
                className="bg-white/[0.04] border border-white/[0.06] text-white/70 px-4 py-2 rounded-full text-xs font-medium hover:bg-white/[0.08] hover:border-heritage-gold/20 transition-all"
              >
                {action.label}
              </button>
            ))}
          </div>
        </div>

        {/* Input Area */}
        <div className="fixed bottom-20 md:bottom-8 left-0 right-0 px-4 md:px-0">
          <div className="max-w-3xl mx-auto">
            <div className="bg-[#0D2342] border border-white/[0.08] rounded-2xl p-2 flex items-center gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSend()}
                placeholder="Type your message..."
                className="flex-1 bg-transparent text-white placeholder:text-white/30 px-4 py-3 focus:outline-none"
              />
              <button
                onClick={handleSend}
                disabled={!input.trim()}
                className="w-11 h-11 bg-heritage-gold rounded-xl flex items-center justify-center hover:bg-[#E0BB45] disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                <Send className="w-5 h-5 text-[#041326]" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}