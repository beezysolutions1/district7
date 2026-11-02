'use client';

import React from 'react';
import { Instagram, ArrowUpRight } from 'lucide-react';

interface ReelItem {
  id: string;
  url: string;
  videoSrc: string;
}

export default function InstagramReelsSection() {
  // 4 authentic, auto-playing video reels — clean full-bleed video with zero unwanted text clutter
  const reels: ReelItem[] = [
    {
      id: 'DXrRYoRAdiE',
      url: 'https://www.instagram.com/p/DXrRYoRAdiE/',
      videoSrc: '/instagram/DXrRYoRAdiE.mp4',
    },
    {
      id: 'Dcld14jBPJn',
      url: 'https://www.instagram.com/p/Dcld14jBPJn/',
      videoSrc: '/instagram/Dcld14jBPJn.mp4',
    },
    {
      id: 'Ddl1hCchoye',
      url: 'https://www.instagram.com/p/Ddl1hCchoye/',
      videoSrc: '/instagram/Ddl1hCchoye.mp4',
    },
    {
      id: 'DdY6WBPhkR2',
      url: 'https://www.instagram.com/p/DdY6WBPhkR2/',
      videoSrc: '/instagram/DdY6WBPhkR2.mp4',
    },
  ];

  return (
    <section className="py-14 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-b border-neutral-100">
      {/* Section Header */}
      <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14 space-y-3">
        <div className="inline-flex items-center space-x-2 text-[11px] uppercase tracking-[0.3em] font-semibold text-neutral-400">
          <Instagram className="w-3.5 h-3.5 text-neutral-900" />
          <span>Follow Our Food Journey on Instagram</span>
        </div>
        <h2 className="font-playfair text-3xl sm:text-4xl lg:text-5xl text-neutral-900 font-normal">
          Behind the Pass &amp; Late Nights
        </h2>
        <div className="w-12 h-px bg-neutral-300 mx-auto mt-4" />
      </div>

      {/* 4-Reel Showcase — Pure, uninterrupted video reels (unwanted text removed) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-sm sm:max-w-none mx-auto">
        {reels.map((reel) => (
          <a
            key={reel.id}
            href={reel.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative rounded-2xl overflow-hidden bg-neutral-950 aspect-[9/16] flex flex-col justify-between border border-neutral-200/90 shadow-md hover:shadow-2xl transition-all duration-500"
          >
            {/* Auto-playing video loop — Full-bleed video */}
            <video
              src={reel.videoSrc}
              autoPlay
              loop
              muted
              playsInline
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
            />

            {/* Soft gradient only on hover for gentle contrast */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

            {/* Top Instagram Glyph */}
            <div className="relative z-10 p-4 flex justify-end">
              <div className="w-8 h-8 rounded-full bg-black/40 backdrop-blur-md border border-white/20 flex items-center justify-center text-white group-hover:scale-110 group-hover:bg-black/70 transition-all duration-300">
                <Instagram className="w-4 h-4" />
              </div>
            </div>

            {/* Bottom Clean Link — Minimal and Elegant */}
            <div className="relative z-10 p-4 flex justify-between items-end">
              <span className="inline-flex items-center space-x-1.5 text-[10px] font-mono uppercase tracking-widest text-white bg-black/40 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/15 group-hover:bg-black/70 group-hover:border-white/30 transition-all duration-300 shadow-sm">
                <span>View Reel</span>
                <ArrowUpRight className="w-3 h-3 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </span>
            </div>
          </a>
        ))}
      </div>

      {/* Primary Follow Button */}
      <div className="text-center pt-10 sm:pt-12">
        <a
          href="https://www.instagram.com/district7kochi"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center space-x-2.5 px-7 py-3.5 rounded-full border border-neutral-900 bg-white hover:bg-neutral-900 text-neutral-900 hover:text-white text-xs font-mono uppercase tracking-wider transition-all duration-300 shadow-sm w-full sm:w-auto"
        >
          <Instagram className="w-4 h-4 shrink-0" />
          <span>Follow @district7kochi on Instagram</span>
          <ArrowUpRight className="w-3.5 h-3.5 shrink-0" />
        </a>
      </div>
    </section>
  );
}
