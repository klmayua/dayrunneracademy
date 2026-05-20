"use client";

import { MessageCircle, Bot } from "lucide-react";

export function FloatingSupportButtons() {
  const openWhatsApp = () => {
    const message = "Hello! I'm interested in the Dayrunner Academy TVET programmes. Can you help?";
    window.open(`https://wa.me/234800DAYRUNNER?text=${encodeURIComponent(message)}`, "_blank");
  };

  const openChatbot = () => {
    alert("AI Support Assistant coming soon. For immediate help, use WhatsApp.");
  };

  return (
    <div className="fixed bottom-6 right-6 md:bottom-8 md:right-7 z-40 flex flex-col gap-3.5">
      {/* Chatbot Button */}
      <button
        onClick={openChatbot}
        className="w-14 h-14 md:w-[60px] md:h-[60px] rounded-full bg-[#0D2342] border border-[rgba(212,175,55,0.18)] 
          shadow-[0_8px_24px_rgba(0,0,0,0.32)] flex items-center justify-center 
          hover:scale-105 hover:shadow-lg transition-all duration-200 group"
        aria-label="AI Support Assistant"
      >
        <Bot className="w-6 h-6 text-heritage-gold" strokeWidth={1.75} />
      </button>

      {/* WhatsApp Button */}
      <button
        onClick={openWhatsApp}
        className="w-14 h-14 md:w-[60px] md:h-[60px] rounded-full bg-[#25D366] 
          shadow-[0_8px_24px_rgba(37,211,102,0.25)] flex items-center justify-center 
          hover:scale-105 hover:shadow-lg transition-all duration-200 group"
        aria-label="WhatsApp Support"
      >
        <MessageCircle className="w-6 h-6 text-white" strokeWidth={1.75} />
      </button>
    </div>
  );
}