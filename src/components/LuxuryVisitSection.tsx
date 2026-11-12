'use client';

import React, { useState } from 'react';
import { ArrowUpRight, Clock, MapPin, Phone, Navigation } from 'lucide-react';

interface HubData {
  id: 'kadavanthra' | 'vyttila';
  number: string;
  neighborhood: string;
  name: string;
  subtitle: string;
  address: string;
  hours: string;
  shortHours: string;
  phone: string;
  mapEmbedUrl: string;
  directionsUrl: string;
}

const hubs: HubData[] = [
  {
    id: 'kadavanthra',
    number: '01',
    neighborhood: 'Kadavanthra, Kochi',
    name: 'District 7 Encore & Dulce',
    subtitle: 'Fine dining, Pan-Asian delicacies & Parisian patisserie.',
    address: 'Ozone Greens, Jawahar Nagar, Kadavanthra, Kochi 682020',
    hours: 'Open Daily: 12:00 PM – 2:00 AM',
    shortHours: 'Till 2:00 AM',
    phone: '+91 7736 030 777',
    mapEmbedUrl:
      'https://maps.google.com/maps?q=District%207%20Encore%20Kadavanthra%20Kochi&t=&z=15&ie=UTF8&iwloc=&output=embed',
    directionsUrl: 'https://maps.google.com/?q=District+7+Encore+Kadavanthra+Kochi',
  },
  {
    id: 'vyttila',
    number: '02',
    neighborhood: 'Vyttila, Kochi',
    name: 'District 7 Restro Cafe',
    subtitle: 'Signature steaks, tableside sizzlers & late-night comfort.',
    address: 'Near Mobility Hub, Vyttila, Ernakulam, Kochi 682019',
    hours: 'Open Daily: 12:00 PM – 3:00 AM',
    shortHours: 'Till 3:00 AM',
    phone: '+91 7736 030 777',
    mapEmbedUrl:
      'https://maps.google.com/maps?q=District%207%20Restro%20Cafe%20Vyttila%20Kochi&t=&z=15&ie=UTF8&iwloc=&output=embed',
    directionsUrl: 'https://maps.google.com/?q=District+7+Restro+Cafe+Vyttila+Kochi',
  },
];

export default function LuxuryVisitSection() {
  const [activeId, setActiveId] = useState<'kadavanthra' | 'vyttila'>('kadavanthra');
  const activeHub = hubs.find((h) => h.id === activeId) ?? hubs[0];

  return (
    <section className="w-full bg-white py-20 sm:py-24 px-4 sm:px-6 lg:px-8 border-t border-neutral-200/80">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Editorial Section Header matching site typography */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="text-[11px] uppercase tracking-[0.3em] font-semibold text-neutral-400 block">
            Find Us in Kochi
          </span>
          <h2 className="font-playfair text-3xl sm:text-4xl lg:text-5xl text-neutral-900 font-normal">
            Our Locations
          </h2>
          <div className="w-12 h-px bg-neutral-300 mx-auto mt-4" />
        </div>

        {/* Seamless Architectural Split Frame */}
        <div className="bg-white border border-neutral-200/90 rounded-2xl overflow-hidden shadow-sm grid grid-cols-1 lg:grid-cols-12">
          {/* Left 5 Cols: Interactive Location Index */}
          <div className="lg:col-span-5 flex flex-col divide-y divide-neutral-200/80 bg-white">
            {hubs.map((hub) => {
              const isActive = hub.id === activeId;
              return (
                <div
                  key={hub.id}
                  onClick={() => setActiveId(hub.id)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      setActiveId(hub.id);
                    }
                  }}
                  aria-expanded={isActive}
                  className={`transition-colors duration-300 cursor-pointer text-left ${
                    isActive
                      ? 'bg-[#FAF9F6] p-6 sm:p-8 flex-1 flex flex-col justify-between border-l-2 border-l-neutral-900'
                      : 'bg-white hover:bg-neutral-50/80 p-6 sm:px-8 sm:py-6 border-l-2 border-l-transparent'
                  }`}
                >
                  <div className="space-y-2">
                    <div className="flex items-center justify-between gap-2">
                      <span
                        className={`text-[10px] uppercase tracking-[0.25em] font-semibold ${
                          isActive ? 'text-neutral-900' : 'text-neutral-400'
                        }`}
                      >
                        {hub.number} / {hub.neighborhood}
                      </span>
                      {!isActive && (
                        <span className="text-[11px] text-neutral-400 font-light">
                          {hub.shortHours} →
                        </span>
                      )}
                    </div>

                    <h3
                      className={`font-playfair font-normal transition-colors ${
                        isActive ? 'text-2xl text-neutral-900' : 'text-lg sm:text-xl text-neutral-600'
                      }`}
                    >
                      {hub.name}
                    </h3>

                    {isActive && (
                      <p className="text-neutral-500 text-xs sm:text-sm font-light leading-relaxed pt-0.5">
                        {hub.subtitle}
                      </p>
                    )}
                  </div>

                  {isActive && (
                    <div className="mt-6 space-y-5">
                      <div className="space-y-3 text-xs sm:text-sm text-neutral-600 font-light pt-4 border-t border-neutral-200/70">
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
                            onClick={(e) => e.stopPropagation()}
                            className="hover:text-black transition-colors font-medium text-neutral-900"
                          >
                            {hub.phone}
                          </a>
                        </div>
                      </div>

                      <div>
                        <a
                          href={hub.directionsUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="inline-flex items-center justify-center space-x-2 bg-neutral-900 hover:bg-neutral-800 text-white px-5 py-2.5 rounded-full text-xs font-medium tracking-wide transition-colors"
                        >
                          <Navigation className="w-3.5 h-3.5" />
                          <span>Get Directions</span>
                          <ArrowUpRight className="w-3.5 h-3.5 text-neutral-400" />
                        </a>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Right 7 Cols: Edge-to-Edge Full-Bleed Map Pane */}
          <div className="lg:col-span-7 relative min-h-[340px] sm:min-h-[400px] lg:min-h-[450px] border-t lg:border-t-0 lg:border-l border-neutral-200/80 bg-neutral-100">
            <iframe
              key={activeHub.id}
              src={activeHub.mapEmbedUrl}
              title={`${activeHub.name} Google Map`}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0 w-full h-full grayscale-[20%] hover:grayscale-0 transition-all duration-700"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
