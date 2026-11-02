'use client';

import React, { useEffect, useRef, useState } from 'react';
import { ArrowUpRight, Clock, UtensilsCrossed } from 'lucide-react';

export default function LuxuryVisitSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full bg-[#FAF9F6] py-24 sm:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden select-none border-t border-neutral-200/60"
    >
      {/* Subtle Ambient Radial Lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[450px] bg-[radial-gradient(circle,_rgba(240,235,225,0.85)_0%,_rgba(250,249,246,0)_70%)] blur-3xl pointer-events-none -z-0" />

      {/* Modern Floating Concierge Card */}
      <div
        className={`relative z-10 max-w-3xl mx-auto bg-white rounded-3xl p-6 sm:p-12 lg:p-14 shadow-[0_20px_50px_rgba(0,0,0,0.04)] border border-neutral-200/80 transition-all duration-1000 ease-out ${
          isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-8 scale-[0.99]'
        }`}
      >
        <div className="text-center space-y-6 sm:space-y-7">
          {/* Modern Eyebrow Tag — Clean, No Dots */}
          <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-neutral-100/80 border border-neutral-200/70 text-[10px] sm:text-[11px] font-medium tracking-[0.25em] text-neutral-600 uppercase">
            <span>Reservations &amp; Events</span>
          </div>

          {/* Heading */}
          <div className="space-y-2 sm:space-y-3">
            <h2 className="font-playfair text-3xl sm:text-5xl lg:text-6xl text-neutral-900 font-normal tracking-tight">
              Visit Us
            </h2>
            <div className="w-12 h-px bg-neutral-300 mx-auto" />
          </div>

          {/* Subheading & Narrative */}
          <div className="space-y-2.5 max-w-xl mx-auto">
            <h3 className="font-playfair text-xl sm:text-3xl text-neutral-800 font-normal">
              Special Requests?
            </h3>
            <p className="text-neutral-600 text-sm sm:text-lg leading-relaxed font-light">
              Do you have dietary concerns? Questions about an upcoming event? Drop us a line, and we&apos;ll get back to you soon. Multi cuisines restaurant open late night
            </p>
          </div>

          {/* Modern Quick-Context Chips */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-1 sm:pt-2">
            <span className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-neutral-50 border border-neutral-200/70 text-[11px] sm:text-xs text-neutral-600 font-light">
              <Clock className="w-3.5 h-3.5 text-neutral-500" />
              <span>Open Late Night · Until 2 AM</span>
            </span>
            <span className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-neutral-50 border border-neutral-200/70 text-[11px] sm:text-xs text-neutral-600 font-light">
              <UtensilsCrossed className="w-3.5 h-3.5 text-neutral-500" />
              <span>Multi-Cuisine Dining</span>
            </span>
          </div>

          {/* Modern Action CTA — Full-width on mobile */}
          <div className="pt-3 sm:pt-4">
            <a
              href="https://wa.me/917736030777?text=Hi%20District%207,%20I%20have%20an%20inquiry%20regarding%20reservations%20and%20events."
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center justify-center space-x-2 bg-neutral-950 text-white hover:bg-neutral-800 w-full sm:w-auto px-7 sm:px-10 py-3.5 sm:py-4 rounded-full text-xs sm:text-sm font-semibold tracking-[0.08em] transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-neutral-950/15"
            >
              <span>Message us on WhatsApp</span>
              <ArrowUpRight className="w-4 h-4 text-neutral-400 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
