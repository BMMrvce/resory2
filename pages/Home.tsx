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
        {/* Background Image with Zoom In Out Animation */}
        <div className="absolute inset-0 overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat animate-zoom-in-out"
            style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1571896349842-68c47eb17998?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80")' }}
          ></div>
        </div>
        
        {/* Glossy Overlay - Modern Resort Tone */}
        <div className="absolute inset-0 bg-gradient-to-b from-primary-950/60 via-primary-950/30 to-primary-950"></div>

        {/* Hero Content */}
        <div className="relative h-full flex flex-col items-center justify-center text-center px-4">
          <div className="animate-fade-in-up space-y-10 max-w-5xl">
            {/* Pill Badge */}
            <span className="inline-block px-8 py-3 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 text-accent-sand text-xs md:text-sm font-bold tracking-[0.25em] uppercase mb-4 shadow-[0_0_30px_rgba(255,255,255,0.1)] hover:bg-white/20 transition-all cursor-default">
              Welcome to Paradise
            </span>

            {/* Main Headline */}
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-white mb-6 leading-tight drop-shadow-[0_10px_10px_rgba(0,0,0,0.5)]">
              Experience Luxury <br/> 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-sand via-white to-accent-gold filter drop-shadow-lg animate-pulse-glow inline-block py-2">Amidst Nature</span>
            </h1>

            {/* Subtext */}
            <p className="text-lg md:text-xl text-primary-50 max-w-2xl mx-auto font-light leading-relaxed mb-12 drop-shadow-md opacity-90 border-l-2 border-accent-gold/50 pl-6 italic">
              "Unwind in our crystal-glass villas, breathe the purest air, and rediscover yourself in the heart of the royal lush forest."
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <button 
                onClick={scrollToAccommodations}
                className="group relative px-10 py-4 bg-primary-600 hover:bg-primary-500 text-white rounded-full text-lg font-bold transition-all shadow-[0_0_40px_rgba(52,160,109,0.4)] hover:shadow-[0_0_60px_rgba(52,160,109,0.6)] w-full sm:w-auto hover:-translate-y-1 border border-primary-500/50 overflow-hidden"
              >
                <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                Book Your Stay
              </button>
              <button 
                onClick={scrollToGallery}
                className="px-10 py-4 bg-white/5 hover:bg-white/10 backdrop-blur-lg border border-white/30 hover:border-white/60 text-white rounded-full text-lg font-bold transition-all w-full sm:w-auto hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(255,255,255,0.15)]"
              >
                View Gallery
              </button>
            </div>
          </div>

          <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 animate-bounce text-accent-sand/60 cursor-pointer hover:text-white transition-colors" onClick={() => scrollToAccommodations()}>
            <ArrowDown size={32} strokeWidth={1} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;