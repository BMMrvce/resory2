import React from 'react';
import { Users, CheckCircle, ArrowRight } from 'lucide-react';
import { Room } from '../lib/types';

interface RoomCardProps {
  room: Room;
}

const RoomCard: React.FC<RoomCardProps> = ({ room }) => {
  const scrollToContact = (roomName: string) => {
     // This needs to handle scrolling and pre-filling the form.
     // In a single page app, we might need to set state or URL param.
     const element = document.getElementById('contact');
     if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        // Dispatch custom event or update URL so contact form picks it up
        const url = new URL(window.location.href);
        url.searchParams.set('room', roomName);
        window.history.pushState({}, '', url);
        // Force a small delay to allow the Contact component to read the param if it re-renders
        // or just let the user fill it. Better: dispatch event.
        window.dispatchEvent(new Event('popstate')); 
     }
  };

  return (
    <div className="glass-card rounded-2xl overflow-hidden hover:shadow-[0_20px_50px_rgba(56,189,248,0.15)] transition-all duration-500 group flex flex-col h-full hover:-translate-y-2">
      {/* Image Container */}
      <div className="relative h-72 overflow-hidden">
        <img
          src={room.imageUrl}
          alt={room.name}
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-1000 ease-out"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary-950/80 via-transparent to-transparent opacity-60"></div>
        
        <div className="absolute top-4 right-4 bg-primary-900/60 backdrop-blur-md px-4 py-2 rounded-full border border-primary-500/30 text-white font-bold shadow-lg flex items-baseline gap-1">
          <span className="text-lg">₹{room.price}</span> 
          <span className="text-xs font-normal text-primary-200">/ night</span>
        </div>
      </div>

      {/* Content */}
      <div className="p-8 flex-1 flex flex-col relative">
        <div className="flex justify-between items-start mb-3">
          <h3 className="text-2xl font-serif font-bold text-white group-hover:text-primary-300 transition-colors">
            {room.name}
          </h3>
        </div>
        
        <p className="text-gray-300 text-sm mb-6 leading-relaxed font-light">{room.description}</p>
        
        <div className="flex items-center space-x-2 mb-8 bg-white/5 p-2 rounded-lg w-fit border border-white/5">
          <Users size={18} className="text-primary-400" />
          <span className="text-sm font-medium text-gray-200">{room.capacity}</span>
        </div>

        {/* Highlights */}
        <div className="space-y-3 mb-8 flex-1">
          {room.highlights.slice(0, 3).map((highlight, index) => (
            <div key={index} className="flex items-center space-x-3">
              <CheckCircle size={16} className="text-primary-500 flex-shrink-0" />
              <span className="text-sm text-gray-300 font-light">{highlight}</span>
            </div>
          ))}
          {room.highlights.length > 3 && (
            <span className="text-xs text-primary-400/80 italic pl-8 mt-2 block">+ {room.highlights.length - 3} more amenities</span>
          )}
        </div>

        {/* Action */}
        <button 
          onClick={() => scrollToContact(room.name)}
          className="w-full mt-auto py-4 bg-gradient-to-r from-primary-500/10 to-primary-400/10 hover:from-primary-600 hover:to-primary-500 border border-primary-500/30 hover:border-primary-400 rounded-xl text-center font-semibold text-primary-100 hover:text-white transition-all duration-300 flex items-center justify-center space-x-2 group-hover:space-x-4 shadow-lg group-hover:shadow-primary-500/20"
        >
          <span>Enquire Now</span>
          <ArrowRight size={18} />
        </button>
      </div>
    </div>
  );
};

export default RoomCard;