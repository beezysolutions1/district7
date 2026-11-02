'use client';

import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface ShowcaseSlide {
  url: string;
  location: string;
  title: string;
  tag: string;
}

const baseSlides: ShowcaseSlide[] = [
  {
    url: 'https://img1.wsimg.com/isteam/ip/351c4fe6-4561-484e-b03d-17791075b6bf/2023-12-01.jpg',
    location: 'Kadavanthra & Vyttila, Kochi',
    title: 'Artisanal French and European Patisserie & Celebration Cakes',
    tag: 'Signature Creation',
  },
  {
    url: 'https://img1.wsimg.com/isteam/ip/351c4fe6-4561-484e-b03d-17791075b6bf/Ferraro-Rocher-Cake.jpg',
    location: 'Bespoke Gateau • Handcrafted Daily',
    title: 'Ferrero Rocher Ganache & Belgian Dark Truffle',
    tag: 'Celebration Favourite',
  },
  {
    url: 'https://img1.wsimg.com/isteam/ip/351c4fe6-4561-484e-b03d-17791075b6bf/2024-04-04.jpg',
    location: 'Haute Patisserie • Parisian Technique',
    title: 'Handmade Glazed Entremets & Single Serves',
    tag: 'Chef Selection',
  },
  {
    url: 'https://img1.wsimg.com/isteam/ip/351c4fe6-4561-484e-b03d-17791075b6bf/2024-08-12.jpg',
    location: 'Custom Orders • Kochi Atelier',
    title: 'Bespoke Tiered Celebration & Wedding Cakes',
    tag: 'Curated on Order',
  },
  {
    url: 'https://img1.wsimg.com/isteam/ip/351c4fe6-4561-484e-b03d-17791075b6bf/2023-10-03.jpg',
    location: 'Tableside Service • Encore Restaurant',
    title: 'Burning Alaska & Plated Dessert Artistry',
    tag: 'Viral Plated Special',
  },
  {
    url: 'https://img1.wsimg.com/isteam/ip/351c4fe6-4561-484e-b03d-17791075b6bf/2023-12-19.jpg',
    location: 'Fresh Daily • Confectionery & Bakes',
    title: 'Belgian Chocolate Excess & Daily Specials',
    tag: 'Artisan Bakes',
  },
];

// Append cloned first slide for seamless infinite forward sliding loop
const slides = [...baseSlides, baseSlides[0]];

export default function DulceStoryShowcase() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [disableTransition, setDisableTransition] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  // Auto-move images continuously every 2.6 seconds
  useEffect(() => {
    timerRef.current = setInterval(() => {
      setCurrentIndex((prev) => prev + 1);
    }, 2600);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, []);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (touchStartX.current === null || touchEndX.current === null) return;
    const distance = touchStartX.current - touchEndX.current;
    if (distance > 40) {
      // Swiped left -> next
      setCurrentIndex((prev) => prev + 1);
    } else if (distance < -40) {
      // Swiped right -> prev
      if (currentIndex === 0) {
        setDisableTransition(true);
        setCurrentIndex(baseSlides.length);
        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            setDisableTransition(false);
            setCurrentIndex(baseSlides.length - 1);
          });
        });
      } else {
        setCurrentIndex((prev) => prev - 1);
      }
    }
    touchStartX.current = null;
    touchEndX.current = null;
  };

  // When reaching the cloned slide (index === baseSlides.length), snap seamlessly back to index 0
  const handleTransitionEnd = () => {
    if (currentIndex === baseSlides.length) {
      setDisableTransition(true);
      setCurrentIndex(0);
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setDisableTransition(false);
        });
      });
    }
  };

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (currentIndex === 0) {
      setDisableTransition(true);
      setCurrentIndex(baseSlides.length);
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setDisableTransition(false);
          setCurrentIndex(baseSlides.length - 1);
        });
      });
    } else {
      setCurrentIndex((prev) => prev - 1);
    }
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prev) => prev + 1);
  };

  const displayIndex = currentIndex % baseSlides.length;
  const currentSlide = baseSlides[displayIndex];

  return (
    <div
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      className="relative rounded-2xl overflow-hidden border border-stone-200/90 shadow-lg shadow-neutral-900/[0.06] bg-neutral-950 group aspect-[4/3] select-none touch-pan-y"
      role="region"
      aria-label="Dulce Patisserie Craftsmanship Auto-Moving Showcase"
    >
      {/* Sliding Carousel Track — Real physical translateX motion */}
      <div
        className={`flex w-full h-full ${
          disableTransition
            ? 'transition-none'
            : 'transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]'
        }`}
        style={{
          transform: `translateX(-${currentIndex * 100}%)`,
        }}
        onTransitionEnd={handleTransitionEnd}
      >
        {slides.map((slide, idx) => (
          <div key={`${slide.url}-${idx}`} className="min-w-full w-full h-full relative shrink-0">
            <img
              src={slide.url}
              alt={slide.title}
              className="w-full h-full object-cover"
              loading={idx < 2 ? 'eager' : 'lazy'}
            />
          </div>
        ))}
      </div>

      {/* Elegant Vignette & Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-black/15 pointer-events-none z-10" />

      {/* Top Floating Badge & Slide Counter */}
      <div className="absolute top-3 sm:top-4 left-3 sm:left-4 right-3 sm:right-4 z-20 flex items-center justify-between pointer-events-none">
        <span className="bg-black/50 backdrop-blur-md border border-white/20 text-white text-[10px] font-mono uppercase tracking-widest px-2.5 sm:px-3 py-1 rounded-full shadow-sm">
          {currentSlide.tag}
        </span>
        <span className="bg-white/90 backdrop-blur-md text-neutral-900 text-[10px] font-mono font-medium px-2.5 py-0.5 rounded-full shadow-sm">
          {displayIndex + 1} / {baseSlides.length}
        </span>
      </div>

      {/* Manual Navigation Arrows (Visible on mobile touch and desktop hover) */}
      <button
        type="button"
        onClick={handlePrev}
        aria-label="Previous slide"
        className="absolute left-2.5 sm:left-3 top-1/2 -translate-y-1/2 z-20 w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-black/45 hover:bg-black/80 backdrop-blur-md text-white border border-white/20 flex items-center justify-center opacity-70 sm:opacity-0 sm:group-hover:opacity-100 transition-all duration-300 hover:scale-105 active:scale-95"
      >
        <ChevronLeft className="w-4 h-4" />
      </button>
      <button
        type="button"
        onClick={handleNext}
        aria-label="Next slide"
        className="absolute right-2.5 sm:right-3 top-1/2 -translate-y-1/2 z-20 w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-black/45 hover:bg-black/80 backdrop-blur-md text-white border border-white/20 flex items-center justify-center opacity-70 sm:opacity-0 sm:group-hover:opacity-100 transition-all duration-300 hover:scale-105 active:scale-95"
      >
        <ChevronRight className="w-4 h-4" />
      </button>

      {/* Bottom Content & Synchronized Moving Progress Indicator */}
      <div className="absolute bottom-3.5 sm:bottom-5 left-4 sm:left-6 right-4 sm:right-6 z-20 text-white space-y-2">
        <div className="space-y-0.5 sm:space-y-1">
          <span className="text-[9px] sm:text-[10px] uppercase tracking-[0.2em] sm:tracking-[0.25em] text-neutral-300 font-mono block">
            {currentSlide.location}
          </span>
          <p className="text-sm sm:text-lg font-playfair font-normal text-white line-clamp-2 drop-shadow-sm transition-all duration-300">
            {currentSlide.title}
          </p>
        </div>

        {/* Minimal Progress Bar Indicators */}
        <div className="flex items-center space-x-1.5 pt-1">
          {baseSlides.map((_, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => {
                setDisableTransition(false);
                setCurrentIndex(idx);
              }}
              aria-label={`Go to slide ${idx + 1}`}
              className="h-1 flex-1 rounded-full overflow-hidden bg-white/25 transition-all duration-300 hover:bg-white/40"
            >
              <div
                className={`h-full bg-white transition-all duration-300 ${
                  idx === displayIndex ? 'w-full' : 'w-0'
                }`}
              />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
