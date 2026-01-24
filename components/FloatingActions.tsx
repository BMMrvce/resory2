import React from 'react';
import { Phone, MessageCircle } from 'lucide-react';

const FloatingActions: React.FC = () => {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-4">
      {/* WhatsApp Button */}
      <a 
        href="https://wa.me/919876543210" 
        target="_blank" 
        rel="noopener noreferrer"
        className="p-4 bg-[#25D366] hover:bg-[#20b858] text-white rounded-full shadow-[0_0_20px_rgba(37,211,102,0.4)] transition-all hover:scale-110 flex items-center justify-center animate-bounce-slow group"
        title="Chat on WhatsApp"
      >
        <MessageCircle size={28} />
      </a>

      {/* Call Button */}
      <a 
        href="tel:+919876543210" 
        className="p-4 bg-primary-600 hover:bg-primary-500 text-white rounded-full shadow-[0_0_20px_rgba(52,160,109,0.4)] transition-all hover:scale-110 flex items-center justify-center group"
        title="Call Us"
      >
        <Phone size={28} />
      </a>
    </div>
  );
};

export default FloatingActions;