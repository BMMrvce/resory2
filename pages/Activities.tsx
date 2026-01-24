import React, { useEffect, useState } from 'react';
import { Clock, Tag, Loader2, ChevronLeft, ChevronRight } from 'lucide-react';
import { fetchActivities } from '../services/dataService';
import { Activity } from '../lib/types';

const Activities: React.FC = () => {
  const [activities, setActivities] = useState<Activity[]>([]);
  const [loading, setLoading] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const loadData = async () => {
      const data = await fetchActivities();
      setActivities(data);
      setLoading(false);
    };
    loadData();
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % activities.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + activities.length) % activities.length);
  };

  // Auto-play carousel
  useEffect(() => {
    if (activities.length === 0) return;
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [activities.length]);

  return (
    <section id="activities" className="py-24 px-6 flex flex-col items-center relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] bg-primary-500/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl w-full mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-7xl font-serif font-bold text-white mb-8 text-glow">Resort Activities</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto font-light">
            Enhance your stay with our curated experiences designed to bring you closer to nature and adventure.
          </p>
        </div>

        {loading ? (
          <div className="flex justify-center items-center h-96">
            <Loader2 className="w-16 h-16 text-primary-400 animate-spin" />
          </div>
        ) : (
          <div className="relative w-full max-w-5xl mx-auto h-[600px] perspective-1000">
            {/* Carousel Container */}
            <div className="relative w-full h-full overflow-hidden rounded-3xl glass-card shadow-2xl border border-white/10 group">
              
              {/* Background Image of Current Activity */}
              <div key={currentIndex} className="absolute inset-0">
                 <img 
                    src={activities[currentIndex]?.image} 
                    alt={activities[currentIndex]?.title}
                    className="w-full h-full object-cover transition-transform duration-[10s] ease-linear transform scale-105 animate-slow-pan"
                 />
                 <div className="absolute inset-0 bg-gradient-to-t from-primary-950 via-primary-950/40 to-transparent"></div>
              </div>

              {/* Navigation Arrows */}
              <button 
                onClick={(e) => { e.stopPropagation(); prevSlide(); }}
                className="absolute top-1/2 left-4 md:left-8 -translate-y-1/2 z-20 p-4 rounded-full bg-black/20 backdrop-blur-md border border-white/10 text-white hover:bg-primary-500/80 transition-all hover:scale-110"
              >
                <ChevronLeft size={32} />
              </button>
              
              <button 
                onClick={(e) => { e.stopPropagation(); nextSlide(); }}
                className="absolute top-1/2 right-4 md:right-8 -translate-y-1/2 z-20 p-4 rounded-full bg-black/20 backdrop-blur-md border border-white/10 text-white hover:bg-primary-500/80 transition-all hover:scale-110"
              >
                <ChevronRight size={32} />
              </button>

              {/* Content Overlay */}
              <div className="absolute bottom-0 left-0 w-full p-8 md:p-16 z-10 bg-gradient-to-t from-primary-950 to-transparent pt-32">
                 <div className="animate-fade-in-up">
                    <div className="flex flex-wrap items-center gap-4 mb-4">
                        <div className="flex items-center space-x-2 text-primary-300 bg-primary-950/50 px-3 py-1 rounded-full backdrop-blur-sm border border-primary-500/20">
                           <Clock size={16} />
                           <span className="text-sm font-semibold tracking-wide">{activities[currentIndex]?.timing}</span>
                        </div>
                        {activities[currentIndex]?.price && (
                           <div className="flex items-center space-x-2 text-primary-300 bg-primary-950/50 px-3 py-1 rounded-full backdrop-blur-sm border border-primary-500/20">
                              <Tag size={16} />
                              <span className="text-sm font-semibold tracking-wide">{activities[currentIndex]?.price}</span>
                           </div>
                        )}
                    </div>
                    
                    <h2 className="text-4xl md:text-6xl font-serif font-bold text-white mb-4 drop-shadow-lg">
                       {activities[currentIndex]?.title}
                    </h2>
                    <p className="text-lg md:text-xl text-gray-200 max-w-2xl leading-relaxed drop-shadow-md">
                       {activities[currentIndex]?.description}
                    </p>
                 </div>
              </div>

              {/* Indicators */}
              <div className="absolute bottom-8 right-8 z-20 flex space-x-2">
                 {activities.map((_, idx) => (
                    <button 
                      key={idx}
                      onClick={() => setCurrentIndex(idx)}
                      className={`w-3 h-3 rounded-full transition-all duration-300 ${
                         idx === currentIndex ? 'bg-primary-400 w-8' : 'bg-white/30 hover:bg-white/80'
                      }`}
                    />
                 ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Activities;