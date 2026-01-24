import React, { useState } from 'react';
import { X, ZoomIn } from 'lucide-react';
import { GALLERY_IMAGES } from '../lib/constants';

const Gallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section id="gallery" className="py-24 px-4 md:px-6 bg-primary-900/20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-7xl font-serif font-bold text-white mb-6 text-glow">Gallery</h2>
          <p className="text-gray-300 text-lg font-light">A glimpse into the serenity that awaits you.</p>
        </div>

        {/* Collage Masonry Grid */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8 p-4">
          {GALLERY_IMAGES.map((src, index) => (
            <div 
              key={index} 
              className="break-inside-avoid relative group rounded-2xl overflow-hidden cursor-pointer shadow-xl hover:shadow-primary-500/20 transition-all duration-500 hover:-translate-y-2 border border-white/5"
              onClick={() => setSelectedImage(src)}
            >
              <img 
                src={src} 
                alt={`Gallery ${index + 1}`} 
                className="w-full h-auto transform transition-transform duration-1000 group-hover:scale-110 filter brightness-90 group-hover:brightness-100"
              />
              
              {/* Premium overlay effect */}
              <div className="absolute inset-0 bg-primary-950/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                <div className="bg-white/10 backdrop-blur-md p-4 rounded-full text-white border border-white/20 transform scale-50 group-hover:scale-100 transition-transform duration-500 delay-100">
                  <ZoomIn size={32} className="text-primary-300" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div className="fixed inset-0 z-[100] bg-primary-950/98 backdrop-blur-xl flex items-center justify-center p-4 animate-fade-in" onClick={() => setSelectedImage(null)}>
          <button className="absolute top-6 right-6 text-white hover:text-primary-400 transition-colors p-2 bg-white/5 rounded-full">
            <X size={32} />
          </button>
          <img 
            src={selectedImage} 
            alt="Full Preview" 
            className="max-w-full max-h-[90vh] rounded-lg shadow-[0_0_50px_rgba(0,0,0,0.5)] object-contain border border-white/10"
            onClick={(e) => e.stopPropagation()} 
          />
        </div>
      )}
    </section>
  );
};

export default Gallery;