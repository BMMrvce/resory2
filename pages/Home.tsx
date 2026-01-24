import React from 'react';
import { ArrowDown, Star, Leaf, Wind, Sun } from 'lucide-react';

const Home: React.FC = () => {
  const scrollToAccommodations = () => {
    document.getElementById('accommodations')?.scrollIntoView({ behavior: 'smooth' });
  };
  
  const scrollToGallery = () => {
    document.getElementById('gallery')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative">
      {/* Hero Section */}
      <div className="relative h-screen w-full overflow-hidden">
        {/* Background Image with Slow Pan */}
        <div className="absolute inset-0 overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat animate-slow-pan"
            style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80")' }}
          ></div>
        </div>
        
        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-primary-950/40 via-primary-950/20 to-primary-950"></div>

        {/* Hero Content */}
        <div className="relative h-full flex flex-col items-center justify-center text-center px-4 pt-20">
          <div className="animate-fade-in-up space-y-8 max-w-5xl">
            <span className="inline-block px-6 py-2 rounded-full bg-primary-500/10 backdrop-blur-md border border-primary-400/30 text-primary-300 text-xs md:text-sm font-bold tracking-[0.2em] uppercase mb-2 shadow-[0_0_20px_rgba(56,189,248,0.2)]">
              Welcome to Paradise
            </span>
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6 leading-tight drop-shadow-2xl">
              Experience Luxury <br/> 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-200 via-primary-400 to-sky-300 filter drop-shadow-lg">Amidst Nature</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-100 max-w-xl mx-auto font-light leading-relaxed mb-10 drop-shadow-md">
              Unwind in our glass-walled villas, breathe the freshest air, and rediscover yourself in the heart of the lush forest.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <button 
                onClick={scrollToAccommodations}
                className="px-8 py-3 bg-primary-600 hover:bg-primary-500 text-white rounded-full text-base font-bold transition-all shadow-[0_0_30px_rgba(14,165,233,0.4)] hover:shadow-[0_0_50px_rgba(14,165,233,0.6)] w-full sm:w-auto hover:-translate-y-1"
              >
                Book Your Stay
              </button>
              <button 
                onClick={scrollToGallery}
                className="px-8 py-3 bg-white/5 hover:bg-white/10 backdrop-blur-md border border-white/20 hover:border-white/40 text-white rounded-full text-base font-bold transition-all w-full sm:w-auto hover:-translate-y-1"
              >
                View Gallery
              </button>
            </div>
          </div>

          <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 animate-bounce text-primary-200/50">
            <ArrowDown size={32} strokeWidth={1.5} />
          </div>
        </div>
      </div>

      {/* Features Strip */}
      <div className="glass-card border-y border-white/5 relative z-10 -mt-24 mx-4 md:mx-auto max-w-6xl rounded-2xl p-10 grid grid-cols-1 md:grid-cols-3 gap-12 text-center backdrop-blur-2xl bg-primary-950/40 shadow-2xl">
        <div className="flex flex-col items-center space-y-4 group">
          <div className="p-5 bg-primary-500/10 rounded-full group-hover:bg-primary-500/20 transition-colors border border-primary-500/20">
            <Leaf className="text-primary-400 w-10 h-10" />
          </div>
          <h3 className="text-2xl font-serif font-bold text-white">Eco-Friendly</h3>
          <p className="text-gray-300 text-sm leading-relaxed">Sustainable living with minimal footprint designed to protect our forests.</p>
        </div>
        <div className="flex flex-col items-center space-y-4 group">
          <div className="p-5 bg-primary-500/10 rounded-full group-hover:bg-primary-500/20 transition-colors border border-primary-500/20">
            <Wind className="text-primary-400 w-10 h-10" />
          </div>
          <h3 className="text-2xl font-serif font-bold text-white">Fresh Air</h3>
          <p className="text-gray-300 text-sm leading-relaxed">Located deep within oxygen-rich forests, far away from city pollution.</p>
        </div>
        <div className="flex flex-col items-center space-y-4 group">
          <div className="p-5 bg-primary-500/10 rounded-full group-hover:bg-primary-500/20 transition-colors border border-primary-500/20">
            <Sun className="text-primary-400 w-10 h-10" />
          </div>
          <h3 className="text-2xl font-serif font-bold text-white">Natural Light</h3>
          <p className="text-gray-300 text-sm leading-relaxed">Floor-to-ceiling glass architecture for immersive panoramic views.</p>
        </div>
      </div>

      {/* Parallax Banner (Moved to bottom of hero section flow as a divider) */}
      <div 
        className="py-32 relative bg-fixed bg-cover bg-center flex items-center justify-center mt-24"
        style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1544376798-89aa6b82c6cd?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80")' }}
      >
        <div className="absolute inset-0 bg-primary-950/80"></div>
        <div className="relative z-10 text-center px-6">
          <Star className="text-primary-300 w-12 h-12 mx-auto mb-6 drop-shadow-[0_0_15px_rgba(125,211,252,0.5)]" />
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">Unforgettable Moments</h2>
          <p className="text-xl text-gray-200 mb-8 max-w-4xl mx-auto font-serif italic">
            "The most peaceful getaway we've ever had. Waking up to the sound of birds and the view of misty mountains was magical."
          </p>
          <div className="inline-block px-8 py-2 glass-card rounded-full text-primary-300 font-bold tracking-widest uppercase text-xs">
            Sarah & James
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;