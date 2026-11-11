'use client';

import React, { useState } from 'react';
import { ArrowUpRight, Clock, MapPin, Phone, Navigation } from 'lucide-react';

interface LocationInfo {
  id: 'kadavanthra' | 'vyttila';
  tabLabel: string;
  hubTitle: string;
  venues: string;
  address: string;
  hours: string;
  phone: string;
  mapEmbedUrl: string;
  directionsUrl: string;
  whatsappMessage: string;
}

const locationDetails: Record<'kadavanthra' | 'vyttila', LocationInfo> = {
  kadavanthra: {
    id: 'kadavanthra',
    tabLabel: 'Kadavanthra Hub (Encore & Dulce)',
    hubTitle: 'District 7 Encore & Dulce Patisserie',
    venues: 'Fine Dining, Pan-Asian, Signature Steaks & Parisian Bakes',
    address: 'Ozone Greens, Jawahar Nagar, Kadavanthra, Kochi, Kerala 682020',
    hours: 'Open Daily: 12:00 PM – 2:00 AM (Late Night)',
    phone: '+91 7736 030 777',
    mapEmbedUrl: 'https://maps.google.com/maps?q=District%207%20Encore%20Kadavanthra%20Kochi&t=&z=15&ie=UTF8&iwloc=&output=embed',
    directionsUrl: 'https://maps.google.com/?q=District+7+Encore+Kadavanthra+Kochi',
    whatsappMessage: 'Hi District 7, I would like to reserve a table at the Kadavanthra hub (Encore & Dulce).',
  },
  vyttila: {
    id: 'vyttila',
    tabLabel: 'Vyttila Hub (Restro Cafe)',
    hubTitle: 'District 7 Restro Cafe',
    venues: 'Iconic Steaks, Tableside Sizzlers, Gourmet Burgers & Thickshakes',
    address: 'Near Mobility Hub, Vyttila, Ernakulam, Kochi, Kerala 682019',
    hours: 'Open Daily: 12:00 PM – 3:00 AM (Late Night)',
    phone: '+91 7736 030 777',
    mapEmbedUrl: 'https://maps.google.com/maps?q=District%207%20Restro%20Cafe%20Vyttila%20Kochi&t=&z=15&ie=UTF8&iwloc=&output=embed',
    directionsUrl: 'https://maps.google.com/?q=District+7+Restro+Cafe+Vyttila+Kochi',
    whatsappMessage: 'Hi District 7, I would like to reserve a table at the Vyttila Restro Cafe.',
  },
};

export default function LuxuryVisitSection() {
  const [activeTab, setActiveTab] = useState<'kadavanthra' | 'vyttila'>('kadavanthra');
  const loc = locationDetails[activeTab];

  return (
    <section className="relative w-full bg-[#FAF9F6] py-20 sm:py-28 px-4 sm:px-6 lg:px-8 overflow-hidden border-t border-neutral-200/70">
      <div className="relative z-10 max-w-6xl mx-auto space-y-10 sm:space-y-12">
        {/* Section Header */}
        <div className="text-center space-y-3 max-w-2xl mx-auto">
          <span className="text-[11px] uppercase tracking-[0.3em] font-semibold text-neutral-400 block">
            Visit Us in Kochi
          </span>
          <h2 className="font-playfair text-3xl sm:text-5xl text-neutral-900 font-normal">
            Find Our Locations
          </h2>
          <div className="w-12 h-px bg-neutral-300 mx-auto mt-4" />
          <p className="text-neutral-600 text-xs sm:text-sm font-light leading-relaxed">
            Two distinct dining destinations in Kadavanthra &amp; Vyttila, serving signature steaks, continental mains, and late-night cuisine.
          </p>
        </div>

        {/* Location Switcher Tabs */}
        <div className="flex justify-center">
          <div className="inline-flex p-1 rounded-full bg-neutral-200/70 border border-neutral-300/60 max-w-full overflow-x-auto">
            <button
              type="button"
              onClick={() => setActiveTab('kadavanthra')}
              className={`px-4 sm:px-6 py-2.5 rounded-full text-xs font-medium tracking-wide transition-all duration-300 ${
                activeTab === 'kadavanthra'
                  ? 'bg-neutral-950 text-white shadow-sm'
                  : 'text-neutral-600 hover:text-neutral-950'
              }`}
            >
              Kadavanthra Hub (Encore &amp; Dulce)
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('vyttila')}
              className={`px-4 sm:px-6 py-2.5 rounded-full text-xs font-medium tracking-wide transition-all duration-300 ${
                activeTab === 'vyttila'
                  ? 'bg-neutral-950 text-white shadow-sm'
                  : 'text-neutral-600 hover:text-neutral-950'
              }`}
            >
              Vyttila Hub (Restro Cafe)
            </button>
          </div>
        </div>

        {/* Active Location Display Card */}
        <div className="bg-white border border-neutral-200/90 rounded-3xl p-6 sm:p-10 lg:p-12 shadow-sm">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
            {/* Left Column: Details & CTAs (Flushed and Aligned from Top to Bottom) */}
            <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
              <div className="space-y-5">
                <div className="space-y-2">
                  <span className="inline-flex items-center space-x-2 text-[10px] uppercase tracking-[0.25em] text-neutral-500 font-medium bg-neutral-100 px-3 py-1 rounded-full">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-600" />
                    <span>{activeTab === 'kadavanthra' ? 'Kadavanthra Hub • Kochi' : 'Vyttila Hub • Kochi'}</span>
                  </span>
                  <h3 className="font-playfair text-2xl sm:text-3xl text-neutral-900 font-normal">
                    {loc.hubTitle}
                  </h3>
                  <p className="text-neutral-500 text-xs sm:text-sm font-light leading-relaxed">
                    {loc.venues}
                  </p>
                </div>

                {/* Structured Architectural Info Card */}
                <div className="bg-neutral-50/80 border border-neutral-200/70 rounded-2xl p-4 sm:p-5 space-y-4 text-xs sm:text-sm text-neutral-600 font-light">
                  <div className="flex items-start space-x-3.5">
                    <div className="w-8 h-8 rounded-lg bg-white border border-neutral-200/90 flex items-center justify-center shrink-0 mt-0.5 shadow-2xs">
                      <MapPin className="w-4 h-4 text-neutral-900" />
                    </div>
                    <div className="space-y-0.5 min-w-0">
                      <span className="font-medium text-neutral-900 block text-[11px] tracking-wider uppercase">
                        Location
                      </span>
                      <span className="leading-relaxed block">{loc.address}</span>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3.5 pt-3 border-t border-neutral-200/60">
                    <div className="w-8 h-8 rounded-lg bg-white border border-neutral-200/90 flex items-center justify-center shrink-0 mt-0.5 shadow-2xs">
                      <Clock className="w-4 h-4 text-neutral-900" />
                    </div>
                    <div className="space-y-0.5 min-w-0">
                      <span className="font-medium text-neutral-900 block text-[11px] tracking-wider uppercase">
                        Dining Hours
                      </span>
                      <span className="leading-relaxed block">{loc.hours}</span>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3.5 pt-3 border-t border-neutral-200/60">
                    <div className="w-8 h-8 rounded-lg bg-white border border-neutral-200/90 flex items-center justify-center shrink-0 mt-0.5 shadow-2xs">
                      <Phone className="w-4 h-4 text-neutral-900" />
                    </div>
                    <div className="space-y-0.5 min-w-0">
                      <span className="font-medium text-neutral-900 block text-[11px] tracking-wider uppercase">
                        Direct Line
                      </span>
                      <a href={`tel:${loc.phone}`} className="hover:text-black transition-colors font-medium text-neutral-900 block">
                        {loc.phone}
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Symmetrical Dual Action Buttons */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <a
                  href={loc.directionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center space-x-2 border border-neutral-300 bg-white hover:bg-neutral-50 hover:border-neutral-900 text-neutral-900 px-4 py-3.5 rounded-full text-xs font-medium tracking-wide transition-all shadow-2xs"
                >
                  <Navigation className="w-3.5 h-3.5 text-neutral-700" />
                  <span>Get Directions</span>
                  <ArrowUpRight className="w-3 h-3 text-neutral-400" />
                </a>

                <a
                  href={`https://wa.me/917736030777?text=${encodeURIComponent(loc.whatsappMessage)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center space-x-2 bg-neutral-950 text-white hover:bg-neutral-800 px-4 py-3.5 rounded-full text-xs font-medium tracking-wide transition-all shadow-sm"
                >
                  <span>Book on WhatsApp</span>
                  <ArrowUpRight className="w-3 h-3 text-neutral-400" />
                </a>
              </div>
            </div>

            {/* Right Column: Perfectly Aligned Google Maps Canvas */}
            <div className="lg:col-span-7 flex flex-col">
              <div className="relative w-full flex-1 min-h-[380px] sm:min-h-[440px] rounded-2xl overflow-hidden border border-neutral-200/90 shadow-sm bg-neutral-100 group">
                {/* Floating Glassmorphic Pill: Live Status */}
                <div className="absolute top-4 left-4 z-10 pointer-events-none">
                  <span className="inline-flex items-center space-x-2 bg-white/95 backdrop-blur-md px-3.5 py-1.5 rounded-full text-[11px] font-medium text-neutral-800 shadow-sm border border-neutral-200/80">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    <span>Interactive Map • {activeTab === 'kadavanthra' ? 'Kadavanthra' : 'Vyttila'}</span>
                  </span>
                </div>

                {/* Floating Quick Action: Open Full Map */}
                <div className="absolute bottom-4 right-4 z-10">
                  <a
                    href={loc.directionsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-1.5 bg-neutral-900/90 hover:bg-neutral-950 text-white backdrop-blur-md px-3.5 py-2 rounded-full text-[11px] font-medium transition-all shadow-md hover:scale-[1.02]"
                  >
                    <Navigation className="w-3 h-3 text-emerald-400" />
                    <span>Open Full Map</span>
                    <ArrowUpRight className="w-3 h-3 text-neutral-400" />
                  </a>
                </div>

                <iframe
                  key={loc.id}
                  src={loc.mapEmbedUrl}
                  title={`${loc.hubTitle} Google Map`}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="absolute inset-0 w-full h-full grayscale-[25%] group-hover:grayscale-0 transition-all duration-700 ease-in-out"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
