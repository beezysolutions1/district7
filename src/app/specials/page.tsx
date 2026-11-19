import React from 'react';
import SiteHeader from '../../components/SiteHeader';
import SiteFooter from '../../components/SiteFooter';
import SpecialsShowcase from '../../components/SpecialsShowcase';
import { Sparkles } from 'lucide-react';

export const metadata = {
  title: 'Special Events & Chef’s Specials - District 7 Kochi',
  description: 'Discover limited-edition culinary creations, seasonal specials, weekend popups, and exclusive tasting events across District 7 Encore, Restro Cafe, and Dulce Patisserie in Kochi.',
};

export default function SpecialsPage() {
  return (
    <div className="min-h-screen bg-white text-[#222222] flex flex-col font-sans selection:bg-neutral-900 selection:text-white">
      <SiteHeader />

      <main className="flex-1">
        {/* Editorial Hero Banner */}
        <section className="relative w-full bg-[#111111] text-white overflow-hidden">
          <div className="relative h-[55vh] min-h-[420px] w-full flex items-center justify-center">
            {/* Background image */}
            <img
              src="/images/gallery/d7-ambient-dining-hall.jpg"
              alt="District 7 Special Events and Culinary Creations"
              className="absolute inset-0 w-full h-full object-cover opacity-35 scale-100 hover:scale-105 transition-transform duration-1000 ease-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-black/60" />

            {/* Hero text */}
            <div className="relative z-10 max-w-4xl mx-auto px-6 text-center space-y-4">
              <div className="inline-flex items-center space-x-2 border-y border-white/20 py-1 px-5 mb-2">
                <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                <span className="text-[11px] uppercase tracking-[0.3em] text-neutral-300 font-light">
                  Curated Gastronomy • Limited Editions
                </span>
              </div>
              <h1 className="font-playfair text-3xl sm:text-5xl lg:text-6xl font-normal tracking-tight text-white leading-[1.15]">
                Special Events &amp; Chef’s Specials
              </h1>
              <p className="max-w-2xl mx-auto text-xs sm:text-sm text-neutral-300 font-light leading-relaxed">
                Seasonal delicacies, weekend pop-ups, and signature chef creations crafted fresh across Kadavanthra &amp; Vyttila. Updated regularly with our latest culinary highlights.
              </p>
            </div>
          </div>
        </section>

        {/* Main Content Area */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <SpecialsShowcase />
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}
