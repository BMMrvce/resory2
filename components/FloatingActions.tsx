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
        className="p-4 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-[0_0_20px_rgba(34,197,94,0.4)] transition-all hover:scale-110 flex items-center justify-center animate-bounce-slow group"
        title="Chat on WhatsApp"
      >
        <MessageCircle size={28} />
      </a>

      {/* Call Button */}
      <a 
        href="tel:+919876543210" 
        className="p-4 bg-primary-500 hover:bg-primary-600 text-white rounded-full shadow-[0_0_20px_rgba(56,189,248,0.4)] transition-all hover:scale-110 flex items-center justify-center group"
        title="Call Us"
      >
        <Phone size={28} />
      </a>
    </div>
  );
};

export default FloatingActions;