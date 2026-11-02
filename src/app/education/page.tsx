import React from 'react';
import SiteHeader from '../../components/SiteHeader';
import SiteFooter from '../../components/SiteFooter';
import { ArrowUpRight } from 'lucide-react';

export const metadata = {
  title: 'Educational Services | d7ventures.com - Future Learning Opportunities',
  description: 'Educational Services at d7ventures.com - Future Learning Opportunities.',
};

export default function EducationPage() {
  return (
    <div className="min-h-screen bg-white text-[#222222] flex flex-col font-sans selection:bg-neutral-900 selection:text-white">
      <SiteHeader />

      <main className="flex-1">
        {/* Editorial Hero Banner */}
        <section className="relative w-full bg-[#111111] text-white overflow-hidden">
          <div className="relative h-[55vh] min-h-[400px] w-full flex items-center justify-center">
            <img
              src="https://img1.wsimg.com/isteam/ip/351c4fe6-4561-484e-b03d-17791075b6bf/exploring-intersections-molecular-gastronomy-c.jpg"
              alt="Educational Services at District 7"
              className="absolute inset-0 w-full h-full object-cover opacity-55 scale-100 hover:scale-105 transition-transform duration-1000 ease-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/35 to-black/50" />

            <div className="relative z-10 max-w-4xl mx-auto px-6 text-center space-y-4 pt-12">
              <div className="inline-block border-y border-white/30 py-1.5 px-6 mb-2">
                <span className="text-[11px] uppercase tracking-[0.35em] text-neutral-200 font-light">
                  Future Learning Opportunities
                </span>
              </div>

              <h1 className="font-playfair text-3xl sm:text-5xl lg:text-6xl font-normal tracking-tight text-white leading-[1.15]">
                Educational Services
              </h1>
            </div>
          </div>
        </section>

        {/* Clean, Minimalist Coming Soon Announcement */}
        <section className="py-16 sm:py-28 px-4 sm:px-6 lg:px-8 max-w-2xl mx-auto text-center space-y-6">
          <span className="text-[11px] uppercase tracking-[0.3em] font-medium text-stone-400 block">
            D7 Ventures
          </span>

          <h2 className="font-playfair text-3xl sm:text-5xl text-neutral-900 font-normal tracking-tight">
            Coming Soon
          </h2>

          <div className="w-12 h-px bg-stone-300 mx-auto" />

          <p className="text-stone-600 text-sm sm:text-base font-light leading-relaxed">
            We are preparing future learning opportunities in culinary craft, patisserie, and hospitality. Details will be announced soon.
          </p>

          <div className="pt-4 sm:pt-6">
            <a
              href="https://wa.me/917736030777?text=Hi%20District%207%2C%20I%20would%20like%20to%20inquire%20about%20your%20Educational%20Services."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 bg-neutral-950 text-white hover:bg-neutral-800 px-7 py-3.5 rounded-full text-xs font-mono uppercase tracking-wider transition-all duration-300 shadow-sm hover:scale-[1.02] active:scale-[0.98]"
            >
              <span>Inquire via WhatsApp</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
