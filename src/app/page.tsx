import React from 'react';
import Link from 'next/link';
import SiteHeader from '../components/SiteHeader';
import SiteFooter from '../components/SiteFooter';
import InstagramReelsSection from '../components/InstagramReelsSection';
import EditorialGallery from '../components/EditorialGallery';
import EditorialHistory from '../components/EditorialHistory';
import DinerReviewsMarquee from '../components/DinerReviewsMarquee';
import LuxuryVisitSection from '../components/LuxuryVisitSection';
import { ArrowUpRight } from 'lucide-react';

export const metadata = {
  title: 'Multi Cuisine at district 7 - d7ventures.com',
  description: 'Savor multi cuisine with Pan-Asian, Continental, Mediterranean and exquisite cakes and desserts served late night until 2 AM. Perfect for any craving!',
};

const homeGalleryImages = [
  { url: 'https://img1.wsimg.com/isteam/ip/351c4fe6-4561-484e-b03d-17791075b6bf/ig_18072126436443892.jpg', alt: 'District 7 Culinary Showcase' },
  { url: 'https://img1.wsimg.com/isteam/ip/351c4fe6-4561-484e-b03d-17791075b6bf/fb_3220127014930533_1080x1080.jpg', alt: 'District 7 Dish Presentation' },
  { url: 'https://img1.wsimg.com/isteam/ip/351c4fe6-4561-484e-b03d-17791075b6bf/2022-12-01.jpg', alt: 'District 7 Dining Room' },
  { url: 'https://img1.wsimg.com/isteam/ip/351c4fe6-4561-484e-b03d-17791075b6bf/fb_878749324252078_1440x1440.jpg', alt: 'District 7 Gourmet Dessert' },
  { url: 'https://img1.wsimg.com/isteam/ip/351c4fe6-4561-484e-b03d-17791075b6bf/fb_878749320918745_1440x1440.jpg', alt: 'District 7 Sweet Treat' },
  { url: 'https://img1.wsimg.com/isteam/ip/351c4fe6-4561-484e-b03d-17791075b6bf/fb_3286596174950283_1080x1080.jpg', alt: 'District 7 Signature Entree' },
  { url: 'https://img1.wsimg.com/isteam/ip/351c4fe6-4561-484e-b03d-17791075b6bf/fb_532915142168833_1440x1440.jpg', alt: 'District 7 Cafe Experience' },
  { url: 'https://img1.wsimg.com/isteam/ip/351c4fe6-4561-484e-b03d-17791075b6bf/IMG-20241115-WA0015.jpg', alt: 'District 7 Table Spread' },
  { url: 'https://img1.wsimg.com/isteam/ip/351c4fe6-4561-484e-b03d-17791075b6bf/fb_779453877514957_1440x1799.jpg', alt: 'District 7 Sizzler Platter' },
];

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white text-[#222222] flex flex-col font-sans selection:bg-neutral-900 selection:text-white">
      <SiteHeader />

      <main className="flex-1">
        {/* Editorial Hero Banner — Fullscreen Immersive, No White Area */}
        <section className="relative w-full h-screen min-h-[640px] flex items-center justify-center overflow-hidden bg-black text-white">
          {/* Background Image — Shown fully with zero white area */}
          <img
            src="https://img1.wsimg.com/isteam/ip/351c4fe6-4561-484e-b03d-17791075b6bf/fb_3323984874544746_1440x1440.jpg"
            alt="Embark on a Gastronomic Journey at District 7"
            className="absolute inset-0 w-full h-full object-cover object-center opacity-85 scale-100 hover:scale-105 transition-transform duration-1000 ease-out"
          />
          {/* Gradient Overlay for Text Legibility */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-black/45" />

          {/* Centered Editorial Typography */}
          <div className="relative z-10 max-w-4xl mx-auto px-6 text-center space-y-6 pt-16">
            <div className="inline-block border-y border-white/40 py-1.5 px-6 backdrop-blur-xs">
              <span className="text-[11px] sm:text-xs uppercase tracking-[0.35em] text-neutral-200 font-light">
                Kochi, Kerala • Est. 2014
              </span>
            </div>

            <h1 className="font-playfair text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-normal tracking-tight text-white leading-[1.15] drop-shadow-md">
              Embark on a Gastronomic Journey at District 7
            </h1>
          </div>
        </section>

        {/* Our History — Editorial Heritage Section with Subtle Scroll-Reveal */}
        <EditorialHistory />

        {/* 3 Pillars Grid Section — High-End Architectural Gallery */}
        <section className="py-16 sm:py-24 lg:py-28 bg-[#FAFAFA] border-t border-b border-neutral-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16 space-y-3">
              <h2 className="font-playfair text-3xl sm:text-4xl lg:text-5xl text-neutral-900 font-normal">
                The Destinations
              </h2>
              <div className="w-12 h-px bg-neutral-300 mx-auto mt-4" />
            </div>

            <div className="grid md:grid-cols-3 gap-8 lg:gap-10">
              {/* Encore Card */}
              <div className="group bg-white border border-neutral-200/90 rounded-sm overflow-hidden flex flex-col justify-between hover:shadow-xl transition-all duration-500">
                <div className="relative aspect-[4/3] overflow-hidden bg-neutral-100">
                  <img
                    src="https://img1.wsimg.com/isteam/ip/351c4fe6-4561-484e-b03d-17791075b6bf/fb_3183803445229557_1080x733.jpg"
                    alt="District 7 Encore"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 text-[10px] uppercase tracking-[0.2em] font-medium text-neutral-800">
                    Kadavanthra
                  </div>
                </div>

                <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between space-y-6">
                  <div className="space-y-3">
                    <span className="text-[10px] uppercase tracking-[0.25em] text-neutral-400 font-medium">
                      01 / Fine Dining
                    </span>
                    <h3 className="font-playfair text-2xl text-neutral-900">
                      District 7 Encore
                    </h3>
                    <p className="text-neutral-600 text-sm leading-relaxed font-light">
                      Luxe Dining with Pan Asian, Continental and Mediterranean delicacies
                    </p>
                  </div>

                  <div className="pt-4 border-t border-neutral-100">
                    <Link
                      href="/encore"
                      className="inline-flex items-center space-x-2 text-xs uppercase tracking-[0.15em] font-semibold text-neutral-900 hover:text-neutral-600 transition-colors"
                    >
                      <span>Explore Encore</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </div>

              {/* Restro Cafe Card */}
              <div className="group bg-white border border-neutral-200/90 rounded-sm overflow-hidden flex flex-col justify-between hover:shadow-xl transition-all duration-500">
                <div className="relative aspect-[4/3] overflow-hidden bg-neutral-100">
                  <img
                    src="https://img1.wsimg.com/isteam/ip/351c4fe6-4561-484e-b03d-17791075b6bf/fb_532915142168833_1440x1440.jpg"
                    alt="District 7 RESTRO Cafe"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 text-[10px] uppercase tracking-[0.2em] font-medium text-neutral-800">
                    Vyttila
                  </div>
                </div>

                <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between space-y-6">
                  <div className="space-y-3">
                    <span className="text-[10px] uppercase tracking-[0.25em] text-neutral-400 font-medium">
                      02 / Steaks &amp; Chill
                    </span>
                    <h3 className="font-playfair text-2xl text-neutral-900">
                      District 7 RESTRO Cafe
                    </h3>
                    <p className="text-neutral-600 text-sm leading-relaxed font-light">
                      Classic warm Cafe for Friends, Family and Fun
                    </p>
                  </div>

                  <div className="pt-4 border-t border-neutral-100">
                    <Link
                      href="/restro-cafe-1"
                      className="inline-flex items-center space-x-2 text-xs uppercase tracking-[0.15em] font-semibold text-neutral-900 hover:text-neutral-600 transition-colors"
                    >
                      <span>Explore Restro Cafe</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </div>

              {/* Dulce Card */}
              <div className="group bg-white border border-neutral-200/90 rounded-sm overflow-hidden flex flex-col justify-between hover:shadow-xl transition-all duration-500">
                <div className="relative aspect-[4/3] overflow-hidden bg-neutral-100">
                  <img
                    src="https://img1.wsimg.com/isteam/ip/351c4fe6-4561-484e-b03d-17791075b6bf/fb_779453880848290_1440x1799.jpg"
                    alt="District 7 Dulce"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 text-[10px] uppercase tracking-[0.2em] font-medium text-neutral-800">
                    Patisserie
                  </div>
                </div>

                <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between space-y-6">
                  <div className="space-y-3">
                    <span className="text-[10px] uppercase tracking-[0.25em] text-neutral-400 font-medium">
                      03 / French Bakes
                    </span>
                    <h3 className="font-playfair text-2xl text-neutral-900">
                      District 7 Dulce
                    </h3>
                    <p className="text-neutral-600 text-sm leading-relaxed font-light">
                      Our in-house patisserie for all things sweet &amp; divine
                    </p>
                  </div>

                  <div className="pt-4 border-t border-neutral-100">
                    <Link
                      href="/dulce-1"
                      className="inline-flex items-center space-x-2 text-xs uppercase tracking-[0.15em] font-semibold text-neutral-900 hover:text-neutral-600 transition-colors"
                    >
                      <span>Explore Dulce</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Feast Your Eyes with our Finest Cuisine — Authentic Old Website Gallery (9 Photos) */}
        <EditorialGallery
          title="Feast Your Eyes with our Finest Cuisine"
          subtitle="District 7 Culinary Showcase"
          images={homeGalleryImages}
        />

        {/* Follow Our Food Journey on Instagram — Aesthetic Reels Showcase */}
        <InstagramReelsSection />

        {/* Discover What Our Diners Are Raving About! — Infinite Moving Praise Marquee */}
        <DinerReviewsMarquee />

        {/* Visit Us & Reservations — Elegant Editorial Section with Scroll-Reveal Micro-Animations */}
        <LuxuryVisitSection />
      </main>

      <SiteFooter />
    </div>
  );
}
