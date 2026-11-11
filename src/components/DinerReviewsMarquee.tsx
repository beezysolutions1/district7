'use client';

import React from 'react';
import { Star, Quote } from 'lucide-react';

interface Review {
  id: string;
  quote: string;
  author: string;
  venue: string;
  rating: number;
}

const reviews: Review[] = [
  {
    id: '1',
    quote:
      'The steak and loaded cheesy fries at Restro-Café are an absolute staple in Kochi. The late-night vibe until 3 AM is unmatched!',
    author: 'Rohit Menon',
    venue: 'District 7 Restro-Café',
    rating: 5,
  },
  {
    id: '2',
    quote:
      'Encore brings true fine dining to Kerala. The Pan-Asian delicacies and the tableside flamed Burning Alaska were spectacular.',
    author: 'Anjali & Vivek Nambiar',
    venue: 'District 7 Encore',
    rating: 5,
  },
  {
    id: '3',
    quote:
      "Dulce's Lotus Biscoff Cheesecake is hands down the best in the city. The crust, texture, and velvety balance are pure perfection.",
    author: 'Sneha Thomas',
    venue: 'Dulce Patisserie',
    rating: 5,
  },
  {
    id: '4',
    quote:
      'Started visiting their quirky Panampilly food truck in 2014, and 10 years later the craft, passion, and hospitality have only gotten better.',
    author: 'Karthik R.',
    venue: 'Patron Since 2014',
    rating: 5,
  },
  {
    id: '5',
    quote:
      'The "Pour Me" cake was such a theatrical dessert! The ambiance is cozy, elegant, and the staff service is delightfully genteel.',
    author: 'Meera George',
    venue: 'District 7 Encore',
    rating: 5,
  },
  {
    id: '6',
    quote:
      'Kochi finally has a genuine midnight culinary haven with world-class multi-cuisine flavors that never cut corners on quality.',
    author: 'Dr. Arjun Kurup',
    venue: 'Late Night Dining',
    rating: 5,
  },
];

export default function DinerReviewsMarquee() {
  const doubledReviews = [...reviews, ...reviews];

  return (
    <section className="py-24 bg-[#FAFAF8] border-t border-b border-neutral-200/80 overflow-hidden relative select-none">
      {/* Section Header */}
      <div className="max-w-4xl mx-auto px-4 text-center space-y-3 mb-14">
        <span className="text-[11px] uppercase tracking-[0.3em] font-semibold text-neutral-400 block">
          Guest Impressions &amp; Accolades
        </span>
        <h2 className="font-playfair text-3xl sm:text-4xl lg:text-5xl text-neutral-900 font-normal">
          Discover What Our Diners Are Raving About!
        </h2>
        <div className="w-12 h-px bg-neutral-300 mx-auto mt-4" />

        {/* Aggregate Rating Badge */}
        <div className="pt-2 flex items-center justify-center space-x-2">
          <div className="flex text-amber-400 space-x-0.5">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-amber-400" />
            ))}
          </div>
          <span className="text-xs uppercase tracking-wider text-neutral-600 font-medium font-mono">
            4.6 / 5.0 • 1,500+ Verified Diners
          </span>
        </div>
      </div>

      {/* Infinite Moving Marquee Track */}
      <div className="relative w-full overflow-hidden">
        {/* Left & Right Soft Edge Fade Masks */}
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-8 sm:w-28 bg-gradient-to-r from-[#FAFAF8] via-[#FAFAF8]/80 to-transparent z-20" />
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-8 sm:w-28 bg-gradient-to-l from-[#FAFAF8] via-[#FAFAF8]/80 to-transparent z-20" />

        {/* Marquee Track */}
        <div className="animate-infiniteReel flex items-stretch space-x-4 sm:space-x-6 py-2 px-3 sm:px-4 cursor-grab active:cursor-grabbing">
          {doubledReviews.map((rev, idx) => (
            <div
              key={`${rev.id}-${idx}`}
              className="w-[280px] sm:w-[360px] shrink-0 bg-white rounded-2xl p-5 sm:p-7 border border-neutral-200/90 shadow-xs hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between space-y-4 sm:space-y-6"
            >
              {/* Quote & Stars */}
              <div className="space-y-3 sm:space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex text-amber-400 space-x-1">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                    ))}
                  </div>
                  <Quote className="w-4 h-4 sm:w-5 sm:h-5 text-neutral-300" />
                </div>

                <p className="font-playfair text-sm sm:text-base text-neutral-800 leading-snug font-normal italic">
                  &ldquo;{rev.quote}&rdquo;
                </p>
              </div>

              {/* Author Info & Venue Tag */}
              <div className="pt-3 sm:pt-4 border-t border-neutral-100 flex items-center justify-between">
                <div>
                  <h4 className="text-xs sm:text-sm font-semibold text-neutral-900">
                    {rev.author}
                  </h4>
                  <span className="text-[10px] sm:text-[11px] text-neutral-400 font-light block">
                    Verified Guest
                  </span>
                </div>

                <span className="px-2.5 py-1 rounded-full text-[9px] sm:text-[10px] uppercase font-mono tracking-wider bg-neutral-100 text-neutral-600 font-medium">
                  {rev.venue}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

