'use client';

import React from 'react';
import { ArrowUpRight, Clock, MapPin } from 'lucide-react';

const culinaryShowcaseImages = [
  {
    url: 'https://img1.wsimg.com/isteam/ip/351c4fe6-4561-484e-b03d-17791075b6bf/IMG-20241103-WA0046.jpg',
    alt: 'Signature Artisanal Steak at Encore',
  },
  {
    url: 'https://img1.wsimg.com/isteam/ip/351c4fe6-4561-484e-b03d-17791075b6bf/IMG-20241103-WA0048.jpg',
    alt: 'Signature Tableside Sizzler at Encore',
  },
  {
    url: 'https://img1.wsimg.com/isteam/ip/351c4fe6-4561-484e-b03d-17791075b6bf/IMG-20241103-WA0020.jpg',
    alt: 'Grilled Herb Steak with Garlic Butter Jus',
  },
  {
    url: 'https://img1.wsimg.com/isteam/ip/351c4fe6-4561-484e-b03d-17791075b6bf/IMG-20241103-WA0025.jpg',
    alt: 'Continental Grilled Chicken Supreme',
  },
  {
    url: 'https://img1.wsimg.com/isteam/ip/351c4fe6-4561-484e-b03d-17791075b6bf/2024-06-27%203.jpg',
    alt: 'Pan-Seared Atlantic Catch of the Day',
  },
  {
    url: 'https://img1.wsimg.com/isteam/ip/351c4fe6-4561-484e-b03d-17791075b6bf/2024-08-26.jpg',
    alt: 'Wild Forest Mushroom & Truffle Cream Risotto',
  },
  {
    url: 'https://img1.wsimg.com/isteam/ip/351c4fe6-4561-484e-b03d-17791075b6bf/IMG-20241103-WA0006.jpg',
    alt: 'Pan-Asian Wok Specialties at Encore',
  },
  {
    url: 'https://img1.wsimg.com/isteam/ip/351c4fe6-4561-484e-b03d-17791075b6bf/IMG-20241103-WA0024.jpg',
    alt: 'Wok-Tossed Imperial Asian Cuisine',
  },
  {
    url: 'https://img1.wsimg.com/isteam/ip/351c4fe6-4561-484e-b03d-17791075b6bf/fb_3314447345498499_1080x1080.jpg',
    alt: 'Gourmet Plating at Encore',
  },
];

export default function EncoreMenu() {
  const airmenusUrl = 'https://airmenus.in/district7/order/Dine-In/Seasonal%20Menu?sId=1216136';

  return (
    <section id="menu" className="relative py-16 sm:py-24 lg:py-28 px-4 sm:px-6 lg:px-8 max-w-full overflow-hidden border-t border-stone-200/80 bg-[#FAF9F6]">
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14 space-y-3">
          <span className="text-[10px] sm:text-[11px] uppercase tracking-[0.3em] font-medium text-stone-400 block">
            Visual Culinary Showcase
          </span>
          <h2 className="font-playfair text-3xl sm:text-5xl text-neutral-900 font-normal tracking-tight">
            Signature Culinary Creations
          </h2>
          <div className="w-10 h-px bg-stone-300 mx-auto mt-3" />
          <p className="text-stone-500 text-xs sm:text-sm tracking-wide font-light max-w-xl mx-auto">
            A visual showcase of our artisanal steaks, tableside sizzlers, and Pan-Asian &amp; Continental gastronomy.
          </p>
        </div>

        {/* Airmenus Live Digital Ordering Action Banner */}
        <div className="mb-10 sm:mb-12 bg-white rounded-2xl border border-stone-200/90 p-6 sm:p-8 shadow-xs flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1.5 text-center md:text-left">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200/80 text-[10px] uppercase tracking-[0.2em] font-medium text-emerald-900 mb-1">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              <span>Live Digital Menu &amp; Ordering</span>
            </div>
            <h3 className="font-playfair text-2xl sm:text-3xl text-neutral-900 font-normal">
              Explore Full Menu &amp; Live Prices on Airmenus
            </h3>
            <p className="text-stone-500 text-xs sm:text-sm font-light max-w-xl">
              Browse complete real-time pricing, daily chef specials, and dietary choices directly on our official Airmenus portal.
            </p>
          </div>

          <div className="flex items-center justify-center w-full md:w-auto shrink-0">
            <a
              href={airmenusUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 bg-neutral-950 hover:bg-neutral-800 text-white px-8 py-3.5 rounded-full text-xs sm:text-sm font-medium tracking-[0.08em] transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] shadow-md shadow-neutral-950/10 text-center"
            >
              <span>Open Airmenus Digital Menu</span>
              <ArrowUpRight className="w-4 h-4 text-neutral-400" />
            </a>
          </div>
        </div>

        {/* Pure Food Photography Grid (Images Only, No Name / Price / Text Clutter) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
          {culinaryShowcaseImages.map((image, idx) => (
            <div
              key={idx}
              className="group relative aspect-[4/3] rounded-2xl overflow-hidden bg-stone-100 border border-stone-200/90 shadow-xs hover:shadow-lg hover:border-stone-300 transition-all duration-500"
            >
              <img
                src={image.url}
                alt={image.alt}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                loading="lazy"
              />
              {/* Subtle ambient gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            </div>
          ))}
        </div>

        {/* Bottom Concierge & Reservation Card */}
        <div className="mt-14 sm:mt-18 rounded-2xl bg-white border border-stone-200/90 p-6 sm:p-8 lg:p-9 shadow-xs flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1.5 text-center md:text-left">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-stone-100 border border-stone-200 text-[10px] uppercase tracking-[0.2em] font-medium text-stone-600 mb-0.5">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
              <span>Late-Night Dining Sanctuary</span>
            </div>
            <h3 className="font-playfair text-xl sm:text-2xl text-neutral-900 font-normal">
              Table Reservations &amp; Dining Concierge
            </h3>
            <p className="text-stone-500 text-xs sm:text-sm font-light flex items-center justify-center md:justify-start gap-2 flex-wrap">
              <span className="inline-flex items-center space-x-1.5">
                <Clock className="w-3.5 h-3.5 text-stone-400" />
                <span>Open Daily 12:00 PM – 2:00 AM</span>
              </span>
              <span className="text-stone-300 hidden sm:inline">•</span>
              <span className="inline-flex items-center space-x-1.5">
                <MapPin className="w-3.5 h-3.5 text-stone-400" />
                <span>Kadavanthra, Kochi</span>
              </span>
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full md:w-auto shrink-0">
            <a
              href="https://wa.me/917736030777?text=Hi%20District%207%20Encore%2C%20I%20would%20like%20to%20reserve%20a%20table."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center space-x-2 px-6 py-3.5 rounded-full bg-white border border-stone-300 hover:bg-stone-50 text-neutral-900 text-xs sm:text-sm tracking-wider font-medium transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] shadow-xs text-center"
            >
              <span>Reserve a Table</span>
              <ArrowUpRight className="w-4 h-4 text-stone-500" />
            </a>
            <a
              href={airmenusUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center space-x-2 px-7 py-3.5 rounded-full bg-neutral-950 hover:bg-neutral-800 text-white text-xs sm:text-sm tracking-wider font-medium transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] shadow-md shadow-neutral-950/10 text-center"
            >
              <span>Order on Airmenus</span>
              <ArrowUpRight className="w-4 h-4 text-neutral-400" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
