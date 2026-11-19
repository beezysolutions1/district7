'use client';

import React, { useState, useMemo } from 'react';
import { SPECIALS_DATA, SpecialItem } from '../data/specialsData';
import { Clock, MapPin, Sparkles, ArrowUpRight, MessageCircle, Utensils } from 'lucide-react';

const VENUES = ['All Venues', 'Encore Kadavanthra', 'Restro Cafe Vyttila', 'Dulce Patisserie'] as const;
const CATEGORIES = ['All Categories', 'Steaks & Mains', 'Pan-Asian & Bites', 'Patisserie & Desserts', 'Events & Popups'] as const;

export default function SpecialsShowcase() {
  const [selectedVenue, setSelectedVenue] = useState<string>('All Venues');
  const [selectedCategory, setSelectedCategory] = useState<string>('All Categories');

  const activeItems = useMemo(() => {
    return SPECIALS_DATA.filter((item) => item.isActive);
  }, []);

  const featuredItem = useMemo(() => {
    return activeItems.find((item) => item.featured) || activeItems[0];
  }, [activeItems]);

  const filteredItems = useMemo(() => {
    return activeItems.filter((item) => {
      const matchVenue = selectedVenue === 'All Venues' || item.venue === selectedVenue || item.venue === 'All Venues';
      const matchCategory = selectedCategory === 'All Categories' || item.category === selectedCategory;
      return matchVenue && matchCategory;
    });
  }, [activeItems, selectedVenue, selectedCategory]);

  const getWhatsAppUrl = (item: SpecialItem) => {
    const text = item.whatsappMessage || `Hi District 7, I would like to inquire about "${item.title}".`;
    return `https://wa.me/917736030777?text=${encodeURIComponent(text)}`;
  };

  return (
    <div className="w-full">
      {/* Featured Spotlight Card */}
      {featuredItem && selectedVenue === 'All Venues' && selectedCategory === 'All Categories' && (
        <section className="mb-20">
          <div className="relative overflow-hidden rounded-2xl bg-neutral-900 border border-neutral-800 shadow-2xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
              {/* Image side */}
              <div className="lg:col-span-7 relative min-h-[340px] sm:min-h-[420px] overflow-hidden group">
                <img
                  src={featuredItem.image}
                  alt={featuredItem.title}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent lg:hidden" />
                <div className="absolute top-4 left-4 z-10 flex flex-wrap gap-2">
                  <span className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full text-[11px] font-medium tracking-wider uppercase bg-amber-500/20 text-amber-300 border border-amber-500/30 backdrop-blur-md">
                    <Sparkles className="w-3 h-3" />
                    <span>Spotlight Creation</span>
                  </span>
                  <span className="inline-flex items-center space-x-1 px-3 py-1 rounded-full text-[11px] font-light tracking-wider uppercase bg-black/60 text-neutral-300 border border-white/10 backdrop-blur-md">
                    <MapPin className="w-3 h-3 text-neutral-400" />
                    <span>{featuredItem.venue}</span>
                  </span>
                </div>
              </div>

              {/* Text side */}
              <div className="lg:col-span-5 p-8 sm:p-12 flex flex-col justify-between bg-gradient-to-br from-neutral-900 to-neutral-950 text-white">
                <div className="space-y-4">
                  <div className="inline-block text-[11px] uppercase tracking-[0.25em] text-amber-400 font-medium">
                    {featuredItem.badge || 'Chef’s Selection'}
                  </div>
                  <h2 className="font-playfair text-2xl sm:text-3xl lg:text-4xl font-normal leading-tight">
                    {featuredItem.title}
                  </h2>
                  <p className="text-xs sm:text-sm text-neutral-400 italic">
                    {featuredItem.tagline}
                  </p>
                  <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed font-light">
                    {featuredItem.description}
                  </p>

                  <div className="pt-2 flex items-center space-x-2 text-xs text-neutral-400">
                    <Clock className="w-3.5 h-3.5 text-neutral-500" />
                    <span>{featuredItem.availability}</span>
                  </div>
                </div>

                <div className="pt-8 flex flex-wrap items-center gap-3">
                  {featuredItem.airmenusUrl && (
                    <a
                      href={featuredItem.airmenusUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-full bg-white text-black text-xs font-medium hover:bg-neutral-200 transition-colors shadow-sm"
                    >
                      <Utensils className="w-3.5 h-3.5" />
                      <span>Order on AirMenus</span>
                      <ArrowUpRight className="w-3 h-3" />
                    </a>
                  )}
                  <a
                    href={getWhatsAppUrl(featuredItem)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-full bg-emerald-600/90 hover:bg-emerald-600 text-white text-xs font-medium transition-colors"
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                    <span>Reserve on WhatsApp</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Filter Tabs */}
      <section className="mb-12 space-y-5">
        {/* Venue Filter */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-neutral-200 pb-4">
          <div>
            <span className="text-[11px] uppercase tracking-[0.2em] text-neutral-500 block mb-1">
              Select Destination
            </span>
            <div className="flex flex-wrap gap-2">
              {VENUES.map((venue) => (
                <button
                  key={venue}
                  onClick={() => setSelectedVenue(venue)}
                  className={`text-xs px-3.5 py-1.5 rounded-full transition-all duration-200 ${
                    selectedVenue === venue
                      ? 'bg-neutral-900 text-white font-medium shadow-sm'
                      : 'bg-neutral-100 text-neutral-600 hover:bg-neutral-200 hover:text-neutral-900'
                  }`}
                >
                  {venue}
                </button>
              ))}
            </div>
          </div>

          {/* Counter info */}
          <div className="text-xs text-neutral-500 font-light self-start sm:self-end">
            Showing <span className="font-medium text-neutral-900">{filteredItems.length}</span> special{filteredItems.length === 1 ? '' : 's'}
          </div>
        </div>

        {/* Category Pills */}
        <div className="flex flex-wrap items-center gap-2">
          {CATEGORIES.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`text-xs px-3 py-1 rounded-md transition-colors ${
                selectedCategory === category
                  ? 'border border-neutral-900 text-neutral-900 font-medium bg-neutral-50'
                  : 'text-neutral-500 hover:text-neutral-900 border border-transparent'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </section>

      {/* Specials & Events Grid */}
      <section className="mb-24">
        {filteredItems.length === 0 ? (
          <div className="py-20 text-center border border-dashed border-neutral-300 rounded-2xl bg-neutral-50">
            <p className="text-neutral-500 text-sm">No specials currently matching this filter.</p>
            <button
              onClick={() => {
                setSelectedVenue('All Venues');
                setSelectedCategory('All Categories');
              }}
              className="mt-4 text-xs font-medium text-neutral-900 underline underline-offset-4"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item) => (
              <article
                key={item.id}
                className="group flex flex-col bg-white border border-neutral-200 rounded-xl overflow-hidden hover:shadow-xl hover:border-neutral-300 transition-all duration-300"
              >
                {/* Image */}
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-neutral-100">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Badge */}
                  {item.badge && (
                    <div className="absolute top-3 right-3">
                      <span className="text-[10px] uppercase tracking-wider font-semibold px-2.5 py-1 rounded-full bg-neutral-900/80 backdrop-blur-md text-amber-300 border border-amber-400/20">
                        {item.badge}
                      </span>
                    </div>
                  )}

                  {/* Venue */}
                  <div className="absolute bottom-3 left-3">
                    <span className="inline-flex items-center space-x-1 text-[11px] font-medium px-2.5 py-0.5 rounded-full bg-black/70 backdrop-blur-md text-white border border-white/10">
                      <MapPin className="w-3 h-3 text-amber-400" />
                      <span>{item.venue}</span>
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <h3 className="font-playfair text-xl font-normal text-neutral-900 group-hover:text-amber-800 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs text-neutral-500 italic">
                      {item.tagline}
                    </p>
                    <p className="text-xs text-neutral-600 leading-relaxed font-light line-clamp-3">
                      {item.description}
                    </p>
                  </div>

                  <div className="pt-2 border-t border-neutral-100 space-y-3">
                    <div className="flex items-center space-x-1.5 text-[11px] text-neutral-500">
                      <Clock className="w-3.5 h-3.5 text-neutral-400" />
                      <span>{item.availability}</span>
                    </div>

                    <div className="flex items-center justify-between gap-2 pt-1">
                      {item.airmenusUrl ? (
                        <a
                          href={item.airmenusUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center space-x-1.5 text-xs font-medium text-neutral-900 hover:text-black transition-colors"
                        >
                          <span>AirMenus</span>
                          <ArrowUpRight className="w-3.5 h-3.5 text-neutral-500" />
                        </a>
                      ) : (
                        <span className="text-xs text-neutral-400 font-light">Dine-in Only</span>
                      )}

                      <a
                        href={getWhatsAppUrl(item)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center space-x-1.5 text-xs font-medium text-emerald-700 hover:text-emerald-800 transition-colors"
                      >
                        <MessageCircle className="w-3.5 h-3.5" />
                        <span>Reserve / Ask</span>
                      </a>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}
      </section>

      {/* Private Events & Concierge Section */}
      <section className="rounded-2xl bg-[#111111] text-white p-8 sm:p-12 border border-neutral-800 text-center sm:text-left flex flex-col lg:flex-row items-center justify-between gap-8 mb-16 shadow-xl">
        <div className="space-y-3 max-w-xl">
          <span className="text-[11px] uppercase tracking-[0.25em] text-neutral-400 font-light block">
            Private Gatherings &amp; Special Events
          </span>
          <h3 className="font-playfair text-2xl sm:text-3xl font-normal leading-snug">
            Hosting a Celebration or Private Dinner?
          </h3>
          <p className="text-xs sm:text-sm text-neutral-400 font-light leading-relaxed">
            From bespoke multi-course menus to curated celebration cakes from Dulce Patisserie, our culinary team designs unforgettable dining experiences in Kadavanthra and Vyttila.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0">
          <a
            href="https://wa.me/917736030777?text=Hi%20District%207%2C%20I%20would%20like%20to%20inquire%20about%20hosting%20a%20special%20event%20or%20private%20dinner."
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-6 py-3 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-medium transition-colors"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Chat on WhatsApp</span>
          </a>
          <a
            href="tel:+917736030777"
            className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-6 py-3 rounded-full bg-neutral-800 hover:bg-neutral-700 text-white text-xs font-medium transition-colors border border-neutral-700"
          >
            <span>Call +91 7736 030 777</span>
          </a>
        </div>
      </section>
    </div>
  );
}
