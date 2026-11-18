'use client';

import React from 'react';
import { ArrowUpRight } from 'lucide-react';

const dulceShowcaseImages = [
  {
    url: '/dulce-menu/cakes/lotus-biscoff.jpg',
    alt: 'Signature Lotus Biscoff Cheesecake at Dulce',
  },
  {
    url: '/dulce-menu/cakes/blueberry-cheesecake.jpg',
    alt: 'Wild Blueberry Compote Cheesecake at Dulce',
  },
  {
    url: '/dulce-menu/cakes/ferrero-rocher.jpg',
    alt: 'Ferrero Rocher Ganache Cake at Dulce',
  },
  {
    url: '/dulce-menu/cakes/chocolate-excess.jpg',
    alt: 'Belgian Dark Chocolate Excess Cake at Dulce',
  },
  {
    url: '/dulce-menu/cakes/pour-me.jpg',
    alt: 'The Viral Pour Me Cake at Dulce',
  },
  {
    url: 'https://img1.wsimg.com/isteam/ip/351c4fe6-4561-484e-b03d-17791075b6bf/2024-04-04.jpg',
    alt: 'Handmade Glazed French Entremets at Dulce',
  },
  {
    url: 'https://img1.wsimg.com/isteam/ip/351c4fe6-4561-484e-b03d-17791075b6bf/2023-12-01.jpg',
    alt: 'Artisanal French Strawberry Gateau at Dulce',
  },
  {
    url: '/dulce-menu/cakes/red-velvet.jpg',
    alt: 'Classic Red Velvet Cream Cheese Cake at Dulce',
  },
  {
    url: '/dulce-menu/cakes/oreo-overload.jpg',
    alt: 'Oreo Overload Mascarpone Cake at Dulce',
  },
  {
    url: '/dulce-menu/cakes/espresso-redemption.jpg',
    alt: 'Espresso Redemption Coffee Gateau at Dulce',
  },
  {
    url: '/dulce-menu/cakes/chocolate-cheese.jpg',
    alt: 'Chocolate Cheese Naked Cake at Dulce',
  },
  {
    url: '/dulce-menu/cakes/tiramisu.jpg',
    alt: 'Authentic Tiramisu Savoiardi at Dulce',
  },
];

export default function ParisianMenu() {
  const airmenusUrl = 'https://airmenus.in/district7/order/Dine-In/Seasonal%20Menu?sId=1216136';

  return (
    <section id="menu" className="relative py-16 sm:py-24 lg:py-28 px-4 sm:px-6 lg:px-8 max-w-full overflow-hidden border-t border-stone-200/80 bg-[#FAF8F5]">
      {/* Atmosphere Background Scrim */}
      <div className="absolute inset-0 pointer-events-none select-none z-0 overflow-hidden">
        <img
          src="https://img1.wsimg.com/isteam/ip/351c4fe6-4561-484e-b03d-17791075b6bf/2024-08-13.jpg"
          alt="Maison Dulce Patisserie Atmosphere"
          className="w-full h-full object-cover object-center opacity-[0.05] filter saturate-[0.6] blur-[2px] scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#FAF8F5] via-[#FAF8F5]/90 to-[#FAF8F5]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14 space-y-3">
          <span className="text-[10px] sm:text-[11px] uppercase tracking-[0.25em] sm:tracking-[0.3em] font-medium text-stone-400 block">
            Visual Patisserie Showcase
          </span>
          <h2 className="font-playfair text-3xl sm:text-5xl text-neutral-900 font-normal tracking-tight">
            The Dulce Menu
          </h2>
          <div className="w-10 h-px bg-stone-300 mx-auto mt-3" />
          <p className="text-stone-500 text-xs sm:text-sm tracking-wide font-light">
            Handmade Daily • Kadavanthra &amp; Vyttila Hubs
          </p>
        </div>

        {/* Airmenus Live Digital Ordering Action Banner */}
        <div className="mb-10 sm:mb-12 bg-white rounded-2xl border border-stone-200/90 p-6 sm:p-8 shadow-xs flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1.5 text-center md:text-left">
            <h3 className="font-playfair text-2xl sm:text-3xl text-neutral-900 font-normal">
              Explore Full Menu &amp; Live Prices on Airmenus
            </h3>
            <p className="text-stone-500 text-xs sm:text-sm font-light max-w-xl">
              Browse complete real-time pricing, daily chef specials, and custom cake selections directly on our official Airmenus portal.
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
          {dulceShowcaseImages.map((image, idx) => (
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
        <div className="mt-12 sm:mt-16 rounded-2xl bg-white border border-stone-200/90 p-6 sm:p-8 shadow-xs flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center sm:text-left">
            <span className="text-[10px] sm:text-[11px] uppercase tracking-[0.25em] text-stone-400 font-medium block">
              Bespoke Orders &amp; Pre-Orders
            </span>
            <p className="text-stone-700 text-xs sm:text-sm font-light">
              Handcrafted Fresh Daily • Kadavanthra &amp; Vyttila Hubs
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full sm:w-auto shrink-0">
            <a
              href="https://wa.me/917736030777?text=Hi%20District%207%20Dulce%2C%20I%20would%20like%20to%20inquire%20about%20ordering%20a%20cake."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center space-x-2 px-6 py-3 rounded-full bg-white border border-stone-300 hover:bg-stone-50 text-neutral-900 text-xs tracking-wider transition-colors shadow-xs font-medium text-center"
            >
              <span>Order via WhatsApp</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-stone-500" />
            </a>
            <a
              href={airmenusUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center space-x-2 px-6 py-3 rounded-full bg-neutral-950 hover:bg-neutral-800 text-white text-xs tracking-wider transition-all duration-200 shadow-sm font-medium text-center"
            >
              <span>Order on Airmenus</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
