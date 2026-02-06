import React, { useEffect, useState, useRef } from "react";
import { Loader2, ChevronLeft, ChevronRight, X, ZoomIn } from "lucide-react";
import { fetchActivities } from "../services/dataService";
import { Activity } from "../lib/types";

const Activities: React.FC = () => {
  const [activities, setActivities] = useState<Activity[]>([]);
  const [loading, setLoading] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // Touch handling state
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

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
    setCurrentIndex(
      (prev) => (prev - 1 + activities.length) % activities.length,
    );
  };

  // Touch Handlers
  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;
    const minSwipeDistance = 50;

    if (distance > minSwipeDistance) {
      nextSlide();
    } else if (distance < -minSwipeDistance) {
      prevSlide();
    }
  };

  // Auto-play carousel
  useEffect(() => {
    if (activities.length === 0) return;
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [activities.length]);

  return (
    <section
      id="activities"
      className="py-16 px-6 flex flex-col items-center relative overflow-hidden scroll-mt-24"
    >
      {/* Decorative background element */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] bg-primary-500/10 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl w-full mx-auto relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6 text-glow">
            Resort Activities
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto font-light">
            Enhance your stay with our curated experiences designed to bring you
            closer to nature and adventure.
          </p>
        </div>

        {loading ? (
          <div className="flex justify-center items-center h-80">
            <Loader2 className="w-12 h-12 text-primary-400 animate-spin" />
          </div>
        ) : (
          <div
            className="relative w-full max-w-4xl mx-auto h-[450px] perspective-1000"
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
          >
            {/* Carousel Container */}
            <div
              className="relative w-full h-full overflow-hidden rounded-3xl glass-card shadow-2xl border border-white/10 group hover:border-primary-500/30 transition-colors duration-500 select-none cursor-zoom-in md:cursor-default"
              onClick={() =>
                window.innerWidth < 768 &&
                setSelectedImage(activities[currentIndex]?.image)
              }
            >
              {/* Background Image of Current Activity */}
              <div key={currentIndex} className="absolute inset-0">
                <img
                  src={activities[currentIndex]?.image}
                  alt={activities[currentIndex]?.title}
                  className="w-full h-full object-cover transition-transform duration-[10s] ease-linear transform scale-105 animate-slow-pan"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-950 via-primary-950/50 to-transparent"></div>
              </div>

              {/* Navigation Arrows */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  prevSlide();
                }}
                className="absolute top-1/2 left-4 z-20 p-3 rounded-full bg-black/20 backdrop-blur-md border border-white/10 text-white hover:bg-primary-500/80 transition-all hover:scale-110 opacity-0 group-hover:opacity-100 hidden md:block"
              >
                <ChevronLeft size={24} />
              </button>

              <button
                onClick={(e) => {
                  e.stopPropagation();
                  nextSlide();
                }}
                className="absolute top-1/2 right-4 z-20 p-3 rounded-full bg-black/20 backdrop-blur-md border border-white/10 text-white hover:bg-primary-500/80 transition-all hover:scale-110 opacity-0 group-hover:opacity-100 hidden md:block"
              >
                <ChevronRight size={24} />
              </button>

              {/* Content Overlay with Title - Hidden */}
              {/* Title hidden per user request */}

              {/* Indicators */}
              <div className="absolute bottom-6 right-8 z-20 flex space-x-2">
                {activities.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentIndex(idx)}
                    className={`h-2 rounded-full transition-all duration-300 shadow-md ${
                      idx === currentIndex
                        ? "bg-primary-400 w-8"
                        : "bg-white/30 w-2 hover:bg-white/80"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Mobile Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-[100] bg-primary-950/98 backdrop-blur-xl flex flex-col items-center justify-center p-4 animate-fade-in md:hidden"
          onClick={() => setSelectedImage(null)}
        >
          <button className="absolute top-6 right-6 text-white hover:text-primary-400 transition-colors p-2 bg-white/5 rounded-full">
            <X size={32} />
          </button>
          <img
            src={selectedImage}
            alt="Activity Full View"
            className="max-w-full max-h-[70vh] rounded-lg shadow-[0_0_40px_rgba(0,0,0,0.45)] object-contain border border-white/10"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
};

export default Activities;
