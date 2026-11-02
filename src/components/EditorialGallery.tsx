'use client';

import React, { useState } from 'react';
import { X, ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';

interface EditorialGalleryProps {
  title?: string;
  subtitle?: string;
  images: { url: string; alt?: string }[];
}

export default function EditorialGallery({
  title = 'Feast Your Eyes with our Finest Cuisine',
  subtitle = 'Visual Journey',
  images,
}: EditorialGalleryProps) {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIdx, setLightboxIdx] = useState(0);
  const touchStartX = React.useRef<number | null>(null);

  // Duplicate images for a seamless, continuous infinite loop
  const duplicatedImages = [...images, ...images];

  const handlePrev = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    setLightboxIdx((prev) => (prev - 1 + images.length) % images.length);
  };

  const handleNext = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    setLightboxIdx((prev) => (prev + 1) % images.length);
  };

  const handleLightboxTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleLightboxTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX.current - touchEndX;
    if (diff > 45) {
      handleNext();
    } else if (diff < -45) {
      handlePrev();
    }
    touchStartX.current = null;
  };

  const currentItem = images[lightboxIdx] || images[0];

  return (
    <section className="py-24 max-w-full overflow-hidden border-t border-neutral-100 bg-white">
      {/* Editorial Section Header */}
      <div className="text-center max-w-2xl mx-auto mb-14 px-4 sm:px-6 space-y-3">
        <span className="text-[11px] uppercase tracking-[0.3em] font-semibold text-neutral-400 block">
          {subtitle}
        </span>
        <h2 className="font-playfair text-3xl sm:text-4xl lg:text-5xl text-neutral-900 font-normal">
          {title}
        </h2>
        <div className="w-12 h-px bg-neutral-300 mx-auto mt-4" />
      </div>

      {/* Seamless Infinite Moving Reel — Edge-To-Edge Ribbon */}
      <div className="relative w-full overflow-hidden py-4 select-none">
        {/* Left & Right Edge Vignette Fades */}
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-8 sm:w-28 z-10 bg-gradient-to-r from-white via-white/80 to-transparent" />
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-8 sm:w-28 z-10 bg-gradient-to-l from-white via-white/80 to-transparent" />

        {/* Continuous Gliding Track */}
        <div className="animate-infiniteReel flex items-center space-x-4 sm:space-x-7 px-4">
          {duplicatedImages.map((img, idx) => {
            const actualIdx = idx % images.length;
            return (
              <div
                key={`${img.url}-${idx}`}
                onClick={() => {
                  setLightboxIdx(actualIdx);
                  setLightboxOpen(true);
                }}
                className="group relative h-[280px] sm:h-[400px] md:h-[480px] shrink-0 rounded-2xl overflow-hidden bg-white border border-neutral-200/90 shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 cursor-pointer flex items-center justify-center p-2 sm:p-2.5"
                title="Click to view full photo"
              >
                <img
                  src={img.url}
                  alt={img.alt || `${title} photo ${actualIdx + 1}`}
                  className="h-full w-auto max-w-none object-contain rounded-xl select-none"
                  loading="lazy"
                />

                {/* Subtle Hover Action Pill */}
                <div className="absolute inset-0 bg-black/25 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center pointer-events-none rounded-2xl">
                  <span className="px-4 py-2 rounded-full bg-black/75 backdrop-blur-md text-white text-xs uppercase tracking-widest font-medium border border-white/20 shadow-xl flex items-center space-x-1.5">
                    <span>Enlarge</span>
                    <Maximize2 className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Fullscreen High-Resolution Lightbox Modal */}
      {lightboxOpen && (
        <div
          onClick={() => setLightboxOpen(false)}
          onTouchStart={handleLightboxTouchStart}
          onTouchEnd={handleLightboxTouchEnd}
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex flex-col items-center justify-between p-4 sm:p-8 animate-fadeIn select-none touch-pan-y"
        >
          {/* Top Bar with Counter & Close */}
          <div className="w-full flex items-center justify-between text-white z-20">
            <div>
              <span className="text-[10px] sm:text-xs uppercase tracking-widest text-neutral-400 font-mono">
                {String(lightboxIdx + 1).padStart(2, '0')} / {String(images.length).padStart(2, '0')}
              </span>
              <p className="text-xs sm:text-sm font-playfair text-white mt-0.5 line-clamp-1">
                {currentItem.alt || title}
              </p>
            </div>
            <button
              onClick={() => setLightboxOpen(false)}
              className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors focus:outline-none"
              aria-label="Close fullscreen"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Active Image */}
          <div
            onClick={(e) => e.stopPropagation()}
            className="max-w-5xl max-h-[75vh] sm:max-h-[80vh] relative flex items-center justify-center my-auto w-full"
          >
            <img
              src={currentItem.url}
              alt={currentItem.alt || `${title} photo ${lightboxIdx + 1}`}
              className="max-h-[75vh] sm:max-h-[80vh] max-w-full object-contain rounded-sm shadow-2xl"
            />

            {/* Previous Arrow */}
            <button
              onClick={handlePrev}
              className="absolute left-2 sm:-left-14 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-black/70 hover:bg-white text-white hover:text-neutral-900 flex items-center justify-center transition-all focus:outline-none z-20 border border-white/20 shadow-lg"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>

            {/* Next Arrow */}
            <button
              onClick={handleNext}
              className="absolute right-2 sm:-right-14 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-black/70 hover:bg-white text-white hover:text-neutral-900 flex items-center justify-center transition-all focus:outline-none z-20 border border-white/20 shadow-lg"
              aria-label="Next image"
            >
              <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>
          </div>

          {/* Bottom status */}
          <div className="text-[10px] sm:text-xs text-neutral-400 tracking-wider uppercase font-light z-20 text-center">
            Swipe or tap arrows to navigate
          </div>
        </div>
      )}
    </section>
  );
}
