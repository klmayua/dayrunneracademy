"use client";

import Link from "next/link";
import { MessageCircle, Bot } from "lucide-react";

const WHATSAPP_NUMBER = "+2347067281296";

export function FloatingSupportButtons() {
  const openWhatsApp = () => {
    const message = `Hello Dayrunner Academy,
I would like assistance regarding admissions and programmes.`;
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`, "_blank");
  };

  return (
    <div className="fixed bottom-[calc(120px+56px+14px)] right-[18px] md:bottom-8 md:right-7 z-40">
      {/* Chatbot Button - routes to /assistant */}
      <Link
        href="/assistant"
        className="w-14 h-14 md:w-[60px] md:h-[60px] rounded-full bg-[#0D2342] border border-[rgba(212,175,55,0.18)] 
          shadow-[0_8px_24px_rgba(0,0,0,0.32)] flex items-center justify-center 
          hover:scale-105 hover:shadow-lg transition-all duration-200 group"
        aria-label="AI Support Assistant"
      >
        <Bot className="w-6 h-6 text-heritage-gold" strokeWidth={1.75} />
      </Link>

      {/* WhatsApp Button */}
      <button
        onClick={openWhatsApp}
        className="w-14 h-14 md:w-[60px] md:h-[60px] rounded-full bg-[#25D366] mt-3.5
          shadow-[0_8px_24px_rgba(37,211,102,0.25)] flex items-center justify-center 
          hover:scale-105 hover:shadow-lg transition-all duration-200 group"
        aria-label="WhatsApp Support"
      >
        <MessageCircle className="w-6 h-6 text-white" strokeWidth={1.75} />
      </button>
    </div>
  );
}