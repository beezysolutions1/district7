'use client';

import React, { useState } from 'react';
import { ArrowUpRight, Clock, MapPin, Phone, Navigation, Compass, Sparkles } from 'lucide-react';

interface DestinationHub {
  id: 'kadavanthra' | 'vyttila';
  hubNumber: string;
  hubBadge: string;
  title: string;
  venues: string;
  closingBadge: string;
  cuisines: string[];
  address: string;
  landmark: string;
  hours: string;
  phone: string;
  mapEmbedUrl: string;
  directionsUrl: string;
  whatsappMessage: string;
}

const destinationHubs: DestinationHub[] = [
  {
    id: 'kadavanthra',
    hubNumber: '01',
    hubBadge: 'Fine Dining & Patisserie',
    title: 'District 7 Encore & Dulce',
    venues: 'Luxe multi-cuisine dining, Pan-Asian gastronomy, signature steaks & Parisian patisserie.',
    closingBadge: 'Open Tonight until 2:00 AM',
    cuisines: ['Pan-Asian', 'Signature Steaks', 'Molecular Gastronomy', 'French Patisserie'],
    address: 'Ozone Greens, Jawahar Nagar, Kadavanthra, Kochi, Kerala 682020',
    landmark: 'Behind GCDA Complex • Kadavanthra',
    hours: 'Daily: 12:00 PM – 2:00 AM (Late Night)',
    phone: '+91 7736 030 777',
    mapEmbedUrl: 'https://maps.google.com/maps?q=District%207%20Encore%20Kadavanthra%20Kochi&t=&z=15&ie=UTF8&iwloc=&output=embed',
    directionsUrl: 'https://maps.google.com/?q=District+7+Encore+Kadavanthra+Kochi',
    whatsappMessage: 'Hi District 7, I would like to reserve a table at the Kadavanthra hub (Encore & Dulce).',
  },
  {
    id: 'vyttila',
    hubNumber: '02',
    hubBadge: 'Steaks, Sizzlers & Midnight Bistro',
    title: 'District 7 Restro Cafe',
    venues: 'Kochi’s original midnight haven with sizzling platters, gourmet burgers & thickshakes.',
    closingBadge: 'Open Tonight until 3:00 AM',
    cuisines: ['Legendary Steaks', 'Tableside Sizzlers', 'Gourmet Burgers', 'Midnight Shakes'],
    address: 'Near Mobility Hub, Vyttila, Ernakulam, Kochi, Kerala 682019',
    landmark: 'Adjacent to Vyttila Mobility Hub & Metro',
    hours: 'Daily: 12:00 PM – 3:00 AM (Late Night)',
    phone: '+91 7736 030 777',
    mapEmbedUrl: 'https://maps.google.com/maps?q=District%207%20Restro%20Cafe%20Vyttila%20Kochi&t=&z=15&ie=UTF8&iwloc=&output=embed',
    directionsUrl: 'https://maps.google.com/?q=District+7+Restro+Cafe+Vyttila+Kochi',
    whatsappMessage: 'Hi District 7, I would like to reserve a table at the Vyttila Restro Cafe.',
  },
];

export default function LuxuryVisitSection() {
  const [activeFilter, setActiveFilter] = useState<'all' | 'kadavanthra' | 'vyttila'>('all');

  const visibleHubs =
    activeFilter === 'all'
      ? destinationHubs
      : destinationHubs.filter((h) => h.id === activeFilter);

  return (
    <section className="relative w-full bg-[#FAF9F6] py-20 sm:py-28 px-4 sm:px-6 lg:px-8 overflow-hidden border-t border-neutral-200/80">
      {/* Decorative ambient background accents */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-amber-100/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-stone-200/40 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto space-y-12 sm:space-y-14">
        {/* Section Header */}
        <div className="text-center space-y-4 max-w-2xl mx-auto">
          <div className="inline-flex items-center space-x-2 text-[10px] uppercase tracking-[0.3em] font-semibold text-neutral-500 bg-neutral-200/70 border border-neutral-300/60 px-3.5 py-1.5 rounded-full shadow-2xs">
            <Compass className="w-3.5 h-3.5 text-neutral-700" />
            <span>Kochi Culinary Destinations</span>
          </div>

          <h2 className="font-playfair text-3xl sm:text-5xl text-neutral-900 font-normal tracking-tight">
            Find Our Locations
          </h2>

          <div className="w-12 h-px bg-neutral-300 mx-auto" />

          <p className="text-neutral-600 text-xs sm:text-sm font-light leading-relaxed max-w-xl mx-auto">
            Two distinct dining spaces across Kochi—from refined Pan-Asian fine dining in Kadavanthra to legendary late-night steaks in Vyttila.
          </p>
        </div>

        {/* Interactive Filter Switcher */}
        <div className="flex justify-center">
          <div className="inline-flex p-1.5 rounded-full bg-white border border-neutral-200/90 shadow-sm max-w-full overflow-x-auto">
            <button
              type="button"
              onClick={() => setActiveFilter('all')}
              className={`px-4 sm:px-6 py-2 rounded-full text-xs font-medium tracking-wide transition-all duration-300 ${
                activeFilter === 'all'
                  ? 'bg-neutral-950 text-white shadow-sm'
                  : 'text-neutral-600 hover:text-neutral-950 hover:bg-neutral-50'
              }`}
            >
              Both Destinations (2)
            </button>
            <button
              type="button"
              onClick={() => setActiveFilter('kadavanthra')}
              className={`px-4 sm:px-6 py-2 rounded-full text-xs font-medium tracking-wide transition-all duration-300 ${
                activeFilter === 'kadavanthra'
                  ? 'bg-neutral-950 text-white shadow-sm'
                  : 'text-neutral-600 hover:text-neutral-950 hover:bg-neutral-50'
              }`}
            >
              Kadavanthra Hub
            </button>
            <button
              type="button"
              onClick={() => setActiveFilter('vyttila')}
              className={`px-4 sm:px-6 py-2 rounded-full text-xs font-medium tracking-wide transition-all duration-300 ${
                activeFilter === 'vyttila'
                  ? 'bg-neutral-950 text-white shadow-sm'
                  : 'text-neutral-600 hover:text-neutral-950 hover:bg-neutral-50'
              }`}
            >
              Vyttila Hub
            </button>
          </div>
        </div>

        {/* Twin Architectural Destination Cards */}
        <div
          className={`grid grid-cols-1 ${
            visibleHubs.length === 1 ? 'max-w-3xl mx-auto' : 'lg:grid-cols-2'
          } gap-8 lg:gap-10 items-stretch`}
        >
          {visibleHubs.map((hub) => (
            <div
              key={hub.id}
              className="bg-white border border-neutral-200/90 rounded-3xl p-6 sm:p-8 lg:p-10 shadow-sm hover:shadow-xl hover:border-neutral-300/80 transition-all duration-500 flex flex-col justify-between group"
            >
              <div className="space-y-6">
                {/* Hub Header & Live Night Beacon */}
                <div className="flex items-center justify-between flex-wrap gap-2 pb-4 border-b border-neutral-100">
                  <div className="flex items-center space-x-2">
                    <span className="font-playfair text-lg sm:text-xl font-normal text-neutral-400">
                      {hub.hubNumber}
                    </span>
                    <span className="text-neutral-300">•</span>
                    <span className="text-[11px] uppercase tracking-[0.2em] font-semibold text-neutral-800">
                      {hub.id === 'kadavanthra' ? 'Kadavanthra' : 'Vyttila'} Hub
                    </span>
                  </div>

                  <span className="inline-flex items-center space-x-1.5 text-[10px] sm:text-[11px] font-medium text-emerald-800 bg-emerald-50/90 border border-emerald-200/70 px-3 py-1 rounded-full shadow-2xs">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    <span>{hub.closingBadge}</span>
                  </span>
                </div>

                {/* Hub Title & Description */}
                <div className="space-y-2.5">
                  <span className="text-[10px] uppercase tracking-[0.2em] font-semibold text-stone-500 block">
                    {hub.hubBadge}
                  </span>
                  <h3 className="font-playfair text-2xl sm:text-3xl text-neutral-900 font-normal group-hover:text-black transition-colors">
                    {hub.title}
                  </h3>
                  <p className="text-neutral-600 text-xs sm:text-sm font-light leading-relaxed">
                    {hub.venues}
                  </p>
                </div>

                {/* Cuisine Tags */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {hub.cuisines.map((c) => (
                    <span
                      key={c}
                      className="text-[10px] sm:text-[11px] font-medium text-neutral-700 bg-neutral-100/80 border border-neutral-200/60 px-2.5 py-1 rounded-md"
                    >
                      {c}
                    </span>
                  ))}
                </div>

                {/* Interactive Map Frame with Glassmorphic Floating Overlays */}
                <div className="relative w-full aspect-[16/10] rounded-2xl overflow-hidden border border-neutral-200/90 shadow-inner bg-neutral-100 my-4 group/map">
                  {/* Floating Glassmorphic Location Label */}
                  <div className="absolute top-3.5 left-3.5 z-10 pointer-events-none">
                    <span className="inline-flex items-center space-x-1.5 bg-white/95 backdrop-blur-md px-3 py-1.5 rounded-full text-[10px] sm:text-[11px] font-medium text-neutral-800 shadow-sm border border-neutral-200/80">
                      <MapPin className="w-3 h-3 text-neutral-900" />
                      <span>{hub.landmark}</span>
                    </span>
                  </div>

                  {/* Floating Quick Action: Open Full Map */}
                  <div className="absolute bottom-3.5 right-3.5 z-10">
                    <a
                      href={hub.directionsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-1 bg-neutral-950/90 hover:bg-neutral-950 text-white backdrop-blur-md px-3 py-1.5 rounded-full text-[10px] sm:text-[11px] font-medium transition-all shadow-md hover:scale-105"
                    >
                      <span>Open Map</span>
                      <ArrowUpRight className="w-3 h-3 text-neutral-400" />
                    </a>
                  </div>

                  <iframe
                    key={hub.id}
                    src={hub.mapEmbedUrl}
                    title={`${hub.title} Google Map`}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="absolute inset-0 w-full h-full grayscale-[25%] group-hover/map:grayscale-0 transition-all duration-700 ease-in-out"
                  />
                </div>

                {/* Structured Architectural Location Details */}
                <div className="bg-neutral-50/80 border border-neutral-200/70 rounded-2xl p-4 sm:p-5 space-y-3.5 text-xs sm:text-sm text-neutral-600 font-light">
                  <div className="flex items-start space-x-3.5">
                    <div className="w-7 h-7 rounded-lg bg-white border border-neutral-200/90 flex items-center justify-center shrink-0 mt-0.5 shadow-2xs">
                      <MapPin className="w-3.5 h-3.5 text-neutral-900" />
                    </div>
                    <div className="space-y-0.5 min-w-0">
                      <span className="font-medium text-neutral-900 block text-[10px] sm:text-[11px] tracking-wider uppercase">
                        Address
                      </span>
                      <span className="leading-relaxed block">{hub.address}</span>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3.5 pt-3 border-t border-neutral-200/60">
                    <div className="w-7 h-7 rounded-lg bg-white border border-neutral-200/90 flex items-center justify-center shrink-0 mt-0.5 shadow-2xs">
                      <Clock className="w-3.5 h-3.5 text-neutral-900" />
                    </div>
                    <div className="space-y-0.5 min-w-0">
                      <span className="font-medium text-neutral-900 block text-[10px] sm:text-[11px] tracking-wider uppercase">
                        Operating Hours
                      </span>
                      <span className="leading-relaxed block">{hub.hours}</span>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3.5 pt-3 border-t border-neutral-200/60">
                    <div className="w-7 h-7 rounded-lg bg-white border border-neutral-200/90 flex items-center justify-center shrink-0 mt-0.5 shadow-2xs">
                      <Phone className="w-3.5 h-3.5 text-neutral-900" />
                    </div>
                    <div className="space-y-0.5 min-w-0">
                      <span className="font-medium text-neutral-900 block text-[10px] sm:text-[11px] tracking-wider uppercase">
                        Direct Line
                      </span>
                      <a
                        href={`tel:${hub.phone}`}
                        className="hover:text-black transition-colors font-medium text-neutral-900 block"
                      >
                        {hub.phone}
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Symmetrical Action Buttons */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-6">
                <a
                  href={hub.directionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center space-x-2 border border-neutral-300 bg-white hover:bg-neutral-50 hover:border-neutral-900 text-neutral-900 px-4 py-3.5 rounded-full text-xs font-medium tracking-wide transition-all shadow-2xs"
                >
                  <Navigation className="w-3.5 h-3.5 text-neutral-700" />
                  <span>Get Directions</span>
                  <ArrowUpRight className="w-3 h-3 text-neutral-400" />
                </a>

                <a
                  href={`https://wa.me/917736030777?text=${encodeURIComponent(hub.whatsappMessage)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center space-x-2 bg-neutral-950 text-white hover:bg-neutral-800 px-4 py-3.5 rounded-full text-xs font-medium tracking-wide transition-all shadow-sm"
                >
                  <span>Book on WhatsApp</span>
                  <ArrowUpRight className="w-3 h-3 text-neutral-400" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
