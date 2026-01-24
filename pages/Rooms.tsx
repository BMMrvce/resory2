import React from 'react';
import RoomCard from '../components/RoomCard';
import { ROOMS } from '../lib/constants';

const Rooms: React.FC = () => {
  return (
    <section id="accommodations" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-7xl font-serif font-bold text-white mb-8 text-glow">Our Accommodations</h2>
          <div className="h-1.5 w-32 bg-gradient-to-r from-transparent via-primary-500 to-transparent mx-auto rounded-full mb-8"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto font-light">
            From cozy A-frames for couples to spacious villas for large groups, find your perfect sanctuary in the wild.
          </p>
        </div>

        {/* Grid - Showing All Rooms */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {ROOMS.map((room) => (
            <RoomCard key={room.id} room={room} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Rooms;