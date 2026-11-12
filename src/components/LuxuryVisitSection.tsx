'use client';

import React, { useState } from 'react';
import { ArrowUpRight, Clock, MapPin, Phone, Navigation } from 'lucide-react';

interface HubData {
  id: 'kadavanthra' | 'vyttila';
  tabLabel: string;
  name: string;
  subtitle: string;
  address: string;
  hours: string;
  phone: string;
  mapEmbedUrl: string;
  directionsUrl: string;
}

const hubs: Record<'kadavanthra' | 'vyttila', HubData> = {
  kadavanthra: {
    id: 'kadavanthra',
    tabLabel: 'Kadavanthra (Encore & Dulce)',
    name: 'District 7 Encore & Dulce',
    subtitle: 'Fine Dining, Pan-Asian Cuisine & Parisian Patisserie',
    address: 'Ozone Greens, Jawahar Nagar, Kadavanthra, Kochi 682020',
    hours: 'Open Daily: 12:00 PM – 2:00 AM',
    phone: '+91 7736 030 777',
    mapEmbedUrl: 'https://maps.google.com/maps?q=District%207%20Encore%20Kadavanthra%20Kochi&t=&z=15&ie=UTF8&iwloc=&output=embed',
    directionsUrl: 'https://maps.google.com/?q=District+7+Encore+Kadavanthra+Kochi',
  },
  vyttila: {
    id: 'vyttila',
    tabLabel: 'Vyttila (Restro Cafe)',
    name: 'District 7 Restro Cafe',
    subtitle: 'Signature Steaks, Sizzlers, Burgers & Shakes',
    address: 'Near Mobility Hub, Vyttila, Ernakulam, Kochi 682019',
    hours: 'Open Daily: 12:00 PM – 3:00 AM',
    phone: '+91 7736 030 777',
    mapEmbedUrl: 'https://maps.google.com/maps?q=District%207%20Restro%20Cafe%20Vyttila%20Kochi&t=&z=15&ie=UTF8&iwloc=&output=embed',
    directionsUrl: 'https://maps.google.com/?q=District+7+Restro+Cafe+Vyttila+Kochi',
  },
};

export default function LuxuryVisitSection() {
  const [activeTab, setActiveTab] = useState<'kadavanthra' | 'vyttila'>('kadavanthra');
  const hub = hubs[activeTab];

  return (
    <section className="w-full bg-[#FAF9F6] py-14 sm:py-20 px-4 sm:px-6 lg:px-8 border-t border-neutral-200/70">
      <div className="max-w-5xl mx-auto space-y-8">
        {/* Section Header */}
        <div className="text-center space-y-2">
          <span className="text-[11px] uppercase tracking-[0.25em] font-medium text-neutral-400 block">
            Locations
          </span>
          <h2 className="font-playfair text-2xl sm:text-4xl text-neutral-900 font-normal">
            Visit Us in Kochi
          </h2>
        </div>

        {/* Minimal Tab Switcher */}
        <div className="flex justify-center">
          <div className="inline-flex p-1 rounded-full bg-neutral-200/60 border border-neutral-300/50">
            <button
              type="button"
              onClick={() => setActiveTab('kadavanthra')}
              className={`px-4 sm:px-5 py-2 rounded-full text-xs font-medium transition-all ${
                activeTab === 'kadavanthra'
                  ? 'bg-neutral-900 text-white shadow-xs'
                  : 'text-neutral-600 hover:text-neutral-900'
              }`}
            >
              Kadavanthra (Encore &amp; Dulce)
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('vyttila')}
              className={`px-4 sm:px-5 py-2 rounded-full text-xs font-medium transition-all ${
                activeTab === 'vyttila'
                  ? 'bg-neutral-900 text-white shadow-xs'
                  : 'text-neutral-600 hover:text-neutral-900'
              }`}
            >
              Vyttila (Restro Cafe)
            </button>
          </div>
        </div>

        {/* Clean, Aligned Location Card */}
        <div className="bg-white border border-neutral-200/80 rounded-2xl p-6 sm:p-8 shadow-xs">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-stretch">
            {/* Left 5 Cols: Details */}
            <div className="md:col-span-5 flex flex-col justify-between space-y-6">
              <div className="space-y-5">
                <div className="space-y-1.5">
                  <h3 className="font-playfair text-xl sm:text-2xl text-neutral-900 font-normal">
                    {hub.name}
                  </h3>
                  <p className="text-neutral-500 text-xs sm:text-sm font-light leading-relaxed">
                    {hub.subtitle}
                  </p>
                </div>

                <div className="space-y-3.5 text-xs sm:text-sm text-neutral-600 font-light pt-3 border-t border-neutral-100">
                  <div className="flex items-start space-x-3">
                    <MapPin className="w-4 h-4 text-neutral-800 shrink-0 mt-0.5" />
                    <span className="leading-relaxed">{hub.address}</span>
                  </div>

                  <div className="flex items-center space-x-3">
                    <Clock className="w-4 h-4 text-neutral-800 shrink-0" />
                    <span>{hub.hours}</span>
                  </div>

                  <div className="flex items-center space-x-3">
                    <Phone className="w-4 h-4 text-neutral-800 shrink-0" />
                    <a
                      href={`tel:${hub.phone}`}
                      className="hover:text-black transition-colors font-medium text-neutral-900"
                    >
                      {hub.phone}
                    </a>
                  </div>
                </div>
              </div>

              <div className="pt-2">
                <a
                  href={hub.directionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 bg-neutral-900 hover:bg-neutral-800 text-white px-6 py-3 rounded-full text-xs font-medium tracking-wide transition-colors"
                >
                  <Navigation className="w-3.5 h-3.5" />
                  <span>Get Directions</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-neutral-400" />
                </a>
              </div>
            </div>

            {/* Right 7 Cols: Flush-Aligned Map Embed */}
            <div className="md:col-span-7 flex flex-col">
              <div className="relative w-full flex-1 min-h-[280px] sm:min-h-[320px] rounded-xl overflow-hidden border border-neutral-200 bg-neutral-100 shadow-2xs">
                <iframe
                  key={hub.id}
                  src={hub.mapEmbedUrl}
                  title={`${hub.name} Google Map`}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="absolute inset-0 w-full h-full grayscale-[15%] hover:grayscale-0 transition-all duration-500"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
