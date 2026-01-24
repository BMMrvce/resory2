import React from 'react';
import { ArrowDown } from 'lucide-react';

const Home: React.FC = () => {
  const scrollToAccommodations = () => {
    document.getElementById('accommodations')?.scrollIntoView({ behavior: 'smooth' });
  };
  
  const scrollToGallery = () => {
    document.getElementById('gallery')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative h-screen w-full">
      {/* Hero Section */}
      <div className="relative h-full w-full overflow-hidden">
        {/* Background Image with Slow Pan */}
        <div className="absolute inset-0 overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat animate-slow-pan"
            style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80")' }}
          ></div>
        </div>
        
        {/* Overlay gradient - Adjusted for Royal Blue aesthetics */}
        <div className="absolute inset-0 bg-gradient-to-b from-primary-950/30 via-primary-950/20 to-primary-950"></div>

        {/* Hero Content */}
        <div className="relative h-full flex flex-col items-center justify-center text-center px-4">
          <div className="animate-fade-in-up space-y-8 max-w-5xl">
            <span className="inline-block px-6 py-2 rounded-full bg-primary-500/20 backdrop-blur-md border border-primary-400/30 text-primary-200 text-xs md:text-sm font-bold tracking-[0.2em] uppercase mb-4 shadow-[0_0_20px_rgba(67,97,238,0.3)]">
              Welcome to Paradise
            </span>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-white mb-6 leading-tight drop-shadow-2xl">
              Experience Luxury <br/> 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-200 via-primary-400 to-indigo-300 filter drop-shadow-lg">Amidst Nature</span>
            </h1>
            <p className="text-lg text-gray-100 max-w-xl mx-auto font-light leading-relaxed mb-10 drop-shadow-md">
              Unwind in our glass-walled villas, breathe the freshest air, and rediscover yourself in the heart of the lush forest.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <button 
                onClick={scrollToAccommodations}
                className="px-8 py-3 bg-primary-600 hover:bg-primary-500 text-white rounded-full text-base font-bold transition-all shadow-[0_0_30px_rgba(67,97,238,0.5)] hover:shadow-[0_0_50px_rgba(67,97,238,0.7)] w-full sm:w-auto hover:-translate-y-1"
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

          <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 animate-bounce text-primary-300/50">
            <ArrowDown size={32} strokeWidth={1.5} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;