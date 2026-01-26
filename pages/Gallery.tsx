import React, { useState } from "react";
import { X, ZoomIn } from "lucide-react";
import { GALLERY_IMAGES } from "../lib/constants";

const Gallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const getSpanClass = (index: number) => {
    // Create a staggered pattern for visual interest
    const mod = index % 6;
    if (mod === 0) return "md:col-span-2 md:row-span-2";
    if (mod === 3) return "md:col-span-1 md:row-span-2";
    if (mod === 4) return "md:col-span-2 md:row-span-1";
    return "md:col-span-1 md:row-span-1";
  };

  return (
    <section
      id="gallery"
      className="py-16 px-4 md:px-6 bg-primary-900/20 scroll-mt-24"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-7xl font-serif font-bold text-white mb-6 text-glow">
            Gallery
          </h2>
          <p className="text-gray-300 text-lg font-light">
            A glimpse into the serenity that awaits you.
          </p>
        </div>

        {/* Creative Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 auto-rows-[11rem] md:auto-rows-[12rem] lg:auto-rows-[13rem] gap-5 p-4">
          {GALLERY_IMAGES.map((src, index) => (
            <div
              key={index}
              className={`relative group rounded-2xl overflow-hidden cursor-pointer shadow-xl hover:shadow-primary-500/25 transition-all duration-500 border border-white/5 bg-primary-900/20 ${getSpanClass(index)} hover:-translate-y-2 hover:-rotate-1`}
              onClick={() => setSelectedImage(src)}
            >
              <img
                src={src}
                alt={`Gallery ${index + 1}`}
                className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110 filter brightness-90 group-hover:brightness-100"
              />

              {/* Premium overlay effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary-950/70 via-primary-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                <div className="bg-white/10 backdrop-blur-md p-4 rounded-full text-white border border-white/20 transform scale-50 group-hover:scale-100 transition-transform duration-500 delay-100 shadow-lg shadow-primary-700/30">
                  <ZoomIn size={32} className="text-primary-300" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-[100] bg-primary-950/98 backdrop-blur-xl flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setSelectedImage(null)}
        >
          <button className="absolute top-6 right-6 text-white hover:text-primary-400 transition-colors p-2 bg-white/5 rounded-full">
            <X size={32} />
          </button>
          <img
            src={selectedImage}
            alt="Full Preview"
            className="max-w-[80vw] max-h-[80vh] rounded-lg shadow-[0_0_40px_rgba(0,0,0,0.45)] object-contain border border-white/10"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
};

export default Gallery;
