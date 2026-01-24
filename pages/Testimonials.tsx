import React from 'react';
import { Star } from 'lucide-react';

const Testimonials: React.FC = () => {
  return (
    <section className="py-32 relative bg-fixed bg-cover bg-center flex items-center justify-center border-t border-white/5"
      style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1544376798-89aa6b82c6cd?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80")' }}
    >
      <div className="absolute inset-0 bg-primary-950/80"></div>
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        <Star className="text-primary-300 w-12 h-12 mx-auto mb-8 drop-shadow-[0_0_15px_rgba(111,150,255,0.6)]" />
        <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-8">Unforgettable Moments</h2>
        <p className="text-xl md:text-2xl text-gray-200 mb-10 leading-relaxed font-serif italic opacity-90">
          "The most peaceful getaway we've ever had. Waking up to the sound of birds and the view of misty mountains was magical. A true royal retreat."
        </p>
        <div className="inline-block px-8 py-2 glass-card rounded-full text-primary-200 font-bold tracking-widest uppercase text-xs border border-primary-500/30">
          Sarah & James
        </div>
      </div>
    </section>
  );
};

export default Testimonials;