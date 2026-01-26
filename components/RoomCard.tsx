import React from "react";
import { Users, CheckCircle, ArrowRight } from "lucide-react";
import { Room } from "../lib/types";

interface RoomCardProps {
  room: Room;
}

const RoomCard: React.FC<RoomCardProps> = ({ room }) => {
  const scrollToContact = (roomName: string) => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      const url = new URL(window.location.href);
      url.searchParams.set("room", roomName);
      window.history.pushState({}, "", url);
      window.dispatchEvent(new Event("popstate"));
    }
  };

  // Show day pricing for the dayout package
  const priceSuffix = room.id === "dayout" ? "/ day" : "/ night";

  return (
    <div className="glass-card rounded-3xl group flex flex-col h-full hover:shadow-[0_20px_60px_rgba(52,160,109,0.2)] transition-all duration-500 hover:-translate-y-2">
      {/* Shine Effect Container */}
      <div className="shine-effect absolute inset-0 w-full h-full z-10 pointer-events-none"></div>

      {/* Image Container */}
      <div className="relative h-56 overflow-hidden rounded-t-3xl">
        <img
          src={room.imageUrl}
          alt={room.name}
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-1000 ease-out"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary-950/90 via-transparent to-transparent opacity-80"></div>

        <div className="absolute top-4 right-4 bg-white/10 backdrop-blur-md px-5 py-2 rounded-full border border-white/20 text-white font-bold shadow-lg flex items-baseline gap-1 z-20">
          <span className="text-xl drop-shadow-md text-accent-sand">
            ₹{room.price}
          </span>
          <span className="text-xs font-medium text-primary-100 opacity-80">
            {priceSuffix}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-8 flex-1 flex flex-col relative z-20">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-serif font-bold text-white group-hover:text-accent-gold transition-colors drop-shadow-sm">
            {room.name}
          </h3>
        </div>

        <p className="text-primary-100/70 text-xs mb-4 leading-relaxed font-light border-b border-white/10 pb-4">
          {room.description}
        </p>

        <div className="flex items-center space-x-2 mb-4 bg-white/5 px-3 py-2 rounded-lg w-fit border border-white/10 backdrop-blur-sm">
          <Users size={16} className="text-accent-sand" />
          <span className="text-xs font-medium text-primary-50">
            {room.capacity}
          </span>
        </div>

        {/* Highlights */}
        <div className="space-y-2 mb-6 flex-1">
          {room.highlights.map((highlight, index) => (
            <div key={index} className="flex items-center space-x-2">
              <CheckCircle
                size={14}
                className="text-primary-500 flex-shrink-0 drop-shadow-[0_0_8px_rgba(52,160,109,0.5)]"
              />
              <span className="text-xs text-primary-100/90 font-light tracking-wide">
                {highlight}
              </span>
            </div>
          ))}
        </div>

        {/* Action */}
        <button
          onClick={() => scrollToContact(room.name)}
          className="w-full mt-auto py-3 bg-gradient-to-r from-primary-600 to-primary-500 hover:from-primary-500 hover:to-primary-400 rounded-lg text-center font-bold text-white text-sm shadow-lg shadow-primary-700/30 border border-primary-500/30 flex items-center justify-center space-x-2 group-hover:space-x-3 transition-all duration-300 group-hover:shadow-primary-600/50"
        >
          <span className="tracking-wider uppercase text-xs">Enquire</span>
          <ArrowRight size={14} />
        </button>
      </div>
    </div>
  );
};

export default RoomCard;
