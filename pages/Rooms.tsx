import React from "react";
import RoomCard from "../components/RoomCard";
import { ROOMS } from "../lib/constants";

const Rooms: React.FC = () => {
  return (
    <section id="accommodations" className="pt-4 pb-16 px-6 scroll-mt-24">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-4 md:mb-6 text-glow">
            Our Accommodations
          </h2>
          <div className="h-1.5 w-32 bg-gradient-to-r from-transparent via-primary-500 to-transparent mx-auto rounded-full mb-6"></div>
        </div>

        {/* Grid/Slider Container */}
        <div className="relative">
          {/* Mobile: Horizontal Slider, Desktop: Grid */}
          <div className="flex overflow-x-auto pb-8 gap-6 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-10 md:overflow-visible md:pb-0 snap-x snap-mandatory -mx-6 px-6 md:mx-0 md:px-0 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
            {ROOMS.map((room) => (
              <div
                key={room.id}
                className="min-w-[85vw] sm:min-w-[400px] md:min-w-0 snap-center md:snap-align-none h-full"
              >
                <RoomCard room={room} />
              </div>
            ))}
          </div>

          {/* Visual hint for mobile users */}
          <div className="md:hidden flex justify-center mt-2 space-x-1 animate-pulse">
            <div className="w-1.5 h-1.5 bg-primary-400 rounded-full"></div>
            <div className="w-1.5 h-1.5 bg-primary-400 rounded-full"></div>
            <div className="w-1.5 h-1.5 bg-primary-400 rounded-full"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Rooms;
