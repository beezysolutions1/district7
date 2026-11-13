import React from 'react';
import SiteHeader from '../../components/SiteHeader';
import SiteFooter from '../../components/SiteFooter';
import EditorialGallery from '../../components/EditorialGallery';
import EncoreMenu from '../../components/EncoreMenu';
import { Download, ArrowDown, MapPin, Clock, Phone, Navigation, ArrowUpRight } from 'lucide-react';

export const metadata = {
  title: 'Open Late Night, Steaks in Kochi, Restaurant in Kochi - d7ventures.com - Ernakulam, Kerala',
  description: 'Welcome to D7 Encore. Multi cuisines restaurant open late night.',
};

const encoreGalleryImages = [
  { url: 'https://img1.wsimg.com/isteam/ip/351c4fe6-4561-484e-b03d-17791075b6bf/IMG-20241103-WA0046.jpg', alt: 'District 7 Encore Cuisine' },
  { url: 'https://img1.wsimg.com/isteam/ip/351c4fe6-4561-484e-b03d-17791075b6bf/IMG-20241103-WA0024.jpg', alt: 'District 7 Encore Dish' },
  { url: 'https://img1.wsimg.com/isteam/ip/351c4fe6-4561-484e-b03d-17791075b6bf/IMG-20241103-WA0048.jpg', alt: 'Encore Dining Presentation' },
  { url: 'https://img1.wsimg.com/isteam/ip/351c4fe6-4561-484e-b03d-17791075b6bf/IMG-20241103-WA0042.jpg', alt: 'Encore Culinary Art' },
  { url: 'https://img1.wsimg.com/isteam/ip/351c4fe6-4561-484e-b03d-17791075b6bf/IMG-20241103-WA0006.jpg', alt: 'Encore Plated Dish' },
  { url: 'https://img1.wsimg.com/isteam/ip/351c4fe6-4561-484e-b03d-17791075b6bf/IMG-20241103-WA0025.jpg', alt: 'Encore Gastronomy Creation' },
  { url: 'https://img1.wsimg.com/isteam/ip/351c4fe6-4561-484e-b03d-17791075b6bf/IMG-20241103-WA0020.jpg', alt: 'Encore Signature Meal' },
  { url: 'https://img1.wsimg.com/isteam/ip/351c4fe6-4561-484e-b03d-17791075b6bf/2023-12-01-d7cfcc4.jpg', alt: 'Encore Evening Dining' },
  { url: 'https://img1.wsimg.com/isteam/ip/351c4fe6-4561-484e-b03d-17791075b6bf/2024-06-27%203.jpg', alt: 'Encore Summer Special' },
  { url: 'https://img1.wsimg.com/isteam/ip/351c4fe6-4561-484e-b03d-17791075b6bf/2023-08-22.jpg', alt: 'Encore Chef Creation' },
  { url: 'https://img1.wsimg.com/isteam/ip/351c4fe6-4561-484e-b03d-17791075b6bf/2022-04-28.jpg', alt: 'Encore Fine Dining Dish' },
  { url: 'https://img1.wsimg.com/isteam/ip/351c4fe6-4561-484e-b03d-17791075b6bf/2024-08-26.jpg', alt: 'Encore Tasting Menu' },
  { url: 'https://img1.wsimg.com/isteam/ip/351c4fe6-4561-484e-b03d-17791075b6bf/2023-05-04.jpg', alt: 'Encore Kitchen Dish' },
  { url: 'https://img1.wsimg.com/isteam/ip/351c4fe6-4561-484e-b03d-17791075b6bf/2024-06-10.jpg', alt: 'Encore Seasonal Cuisine' },
  { url: 'https://img1.wsimg.com/isteam/ip/351c4fe6-4561-484e-b03d-17791075b6bf/fb_3314447345498499_1080x1080.jpg', alt: 'Encore Plated Gourmet' },
  { url: 'https://img1.wsimg.com/isteam/ip/351c4fe6-4561-484e-b03d-17791075b6bf/fb_3185435848399650_537x537.jpg', alt: 'Encore Special Preparation' },
  { url: 'https://img1.wsimg.com/isteam/ip/351c4fe6-4561-484e-b03d-17791075b6bf/fb_2912743519002219_540x675.jpg', alt: 'Encore Signature Dish' },
];

export default function EncorePage() {
  return (
    <div className="min-h-screen bg-white text-[#222222] flex flex-col font-sans selection:bg-neutral-900 selection:text-white">
      <SiteHeader />

      <main className="flex-1">
        {/* Editorial Hero Banner */}
        <section className="relative w-full bg-[#111111] text-white overflow-hidden">
          <div className="relative h-[65vh] min-h-[460px] w-full flex items-center justify-center">
            <img
              src="https://img1.wsimg.com/isteam/ip/351c4fe6-4561-484e-b03d-17791075b6bf/fb_3183803445229557_1080x733.jpg"
              alt="Welcome to D7 Encore Fine Dining"
              className="absolute inset-0 w-full h-full object-cover opacity-55 scale-100 hover:scale-105 transition-transform duration-1000 ease-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/40" />

            <div className="relative z-10 max-w-4xl mx-auto px-6 text-center space-y-4">
              <div className="inline-block border-y border-white/30 py-1.5 px-6 mb-2">
                <span className="text-[11px] uppercase tracking-[0.35em] text-neutral-200 font-light">
                  Kadavanthra • Fine Dining
                </span>
              </div>
              <h1 className="font-playfair text-3xl sm:text-5xl lg:text-6xl font-normal tracking-tight text-white leading-[1.15]">
                Welcome to D7 Encore (12 noon to 2 am)
              </h1>
            </div>
          </div>
        </section>

        {/* Split Section 1: Our Story & Gastronomy — Architectural Editorial Spread */}
        <section className="py-16 sm:py-20 lg:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-start">
            {/* Left 6 Columns: Our Story Narrative */}
            <div className="lg:col-span-6 space-y-6 sm:space-y-8">
              <div className="space-y-4">
                <span className="text-[11px] uppercase tracking-[0.3em] font-medium text-neutral-400 block">
                  The Experience
                </span>
                <h2 className="font-playfair text-3xl sm:text-4xl text-neutral-900 font-normal tracking-tight">
                  Our Story
                </h2>
                <div className="w-12 h-px bg-neutral-300" />
                <p className="text-neutral-600 text-base sm:text-lg leading-relaxed font-light">
                  At Encore, we pride ourselves on serving delicious cuisine in a warm and welcoming environment. Our chefs use only the freshest ingredients to create dishes that will tantalize your taste buds and leave you wanting more.
                </p>
              </div>

              {/* Quiet Luxury Note */}
              <div className="p-6 sm:p-7 rounded-2xl bg-[#FAF9F6] border border-neutral-200/80 space-y-2">
                <span className="text-[10px] uppercase tracking-[0.25em] font-medium text-neutral-400 block">
                  Late-Night Fine Dining
                </span>
                <h4 className="font-playfair text-xl text-neutral-900 font-normal">
                  Kadavanthra • Ernakulam
                </h4>
                <p className="text-xs sm:text-sm text-neutral-500 font-light leading-relaxed">
                  A sophisticated, intimate dining sanctuary in central Kochi, celebrated for signature artisanal steaks, molecular culinary touches, and late-night dinner service open till 2:00 AM.
                </p>
              </div>
            </div>

            {/* Right 6 Columns: Our Menu & Steaks Heritage */}
            <div className="lg:col-span-6 space-y-6 sm:space-y-8">
              <div className="space-y-4">
                <div className="flex items-center justify-between flex-wrap gap-2">
                  <span className="text-[11px] uppercase tracking-[0.3em] font-medium text-neutral-400 block">
                    Gastronomy
                  </span>
                  <span className="inline-flex items-center px-3 py-1 rounded-full bg-amber-50 border border-amber-200/80 text-[10px] uppercase tracking-[0.2em] font-medium text-amber-900">
                    Kochi&apos;s Signature Steaks
                  </span>
                </div>

                <h2 className="font-playfair text-3xl sm:text-4xl text-neutral-900 font-normal tracking-tight">
                  Our Menu
                </h2>
                <div className="w-12 h-px bg-neutral-300" />
                <p className="text-neutral-600 text-base sm:text-lg leading-relaxed font-light">
                  Our restaurant in kochi features a wide variety of dishes, from classic favorites to innovative new creations. Whether you&apos;re in the mood for seafood, steak, or vegetarian options, there&apos;s something for everyone at Encore. We have been holding a reputation of having the best steaks in kochi, Ernakulam. Our restaurants are open late night upto to 2 am and 3 am.
                </p>

                {/* Quick Context Highlights */}
                <div className="flex flex-wrap gap-2 pt-2 text-xs text-neutral-500 font-light">
                  <span className="px-3 py-1 rounded-full bg-neutral-100 border border-neutral-200/60">
                    Pan-Asian &amp; Continental
                  </span>
                  <span className="px-3 py-1 rounded-full bg-neutral-100 border border-neutral-200/60">
                    Artisanal Steaks
                  </span>
                  <span className="px-3 py-1 rounded-full bg-neutral-100 border border-neutral-200/60">
                    Open Till 2:00 AM
                  </span>
                </div>

                {/* Seamless Action Buttons */}
                <div className="pt-3 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                  <a
                    href="#menu"
                    className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 bg-neutral-950 text-white hover:bg-neutral-800 px-7 py-3.5 rounded-full text-xs sm:text-sm font-medium tracking-[0.08em] transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] shadow-md shadow-neutral-950/10"
                  >
                    <span>Explore Main Dishes</span>
                    <ArrowDown className="w-4 h-4 text-neutral-400" />
                  </a>
                  <a
                    href="https://img1.wsimg.com/blobby/go/351c4fe6-4561-484e-b03d-17791075b6bf/Website%20purpose%20Sept%2012%202024%20ENCORE%20MENU.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 border border-neutral-300 bg-white hover:bg-neutral-50 text-neutral-900 px-6 py-3.5 rounded-full text-xs sm:text-sm font-medium tracking-[0.08em] transition-colors shadow-xs"
                  >
                    <Download className="w-4 h-4 text-neutral-500" />
                    <span>Download Full Menu (PDF)</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Curated Main Dishes Menu (Main Dishes Only) */}
        <EncoreMenu />

        {/* Feast Your Eyes with our Finest Cuisine (17 Authentic Images from Old Website) */}
        <EditorialGallery
          title="Feast Your Eyes with our Finest Cuisine"
          subtitle="Encore Culinary Gallery"
          images={encoreGalleryImages}
        />

        {/* Section 2: Private Events (Editorial Light Warm Aesthetic with Living Ambient Light) */}
        <section className="relative py-20 sm:py-24 bg-[#FAF9F6] border-t border-b border-neutral-200/80 overflow-hidden">
          {/* Living Ambient Warm Sunlight Pools (Hypnotic Breathing Rhythm) */}
          <div className="absolute -top-28 -right-28 w-[420px] h-[420px] rounded-full bg-gradient-to-br from-amber-200/45 via-orange-100/30 to-transparent blur-3xl pointer-events-none animate-ambientBreathe" />
          <div className="absolute -bottom-28 -left-28 w-[460px] h-[460px] rounded-full bg-gradient-to-tr from-stone-300/40 via-amber-100/30 to-transparent blur-3xl pointer-events-none animate-ambientDrift" />

          <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            {/* Clean Editorial Card with subtle tactile hover */}
            <div className="group bg-white/95 backdrop-blur-xs p-8 sm:p-12 lg:p-14 rounded-2xl border border-neutral-200/80 shadow-xs hover:shadow-md hover:border-neutral-300/90 hover:-translate-y-0.5 transition-all duration-700 ease-out space-y-4">
              <span className="text-[10px] uppercase tracking-[0.3em] font-medium text-neutral-400 block">
                Exclusive Celebrations
              </span>

              <h2 className="font-playfair text-3xl sm:text-4xl text-neutral-900 font-normal tracking-tight">
                Private Events
              </h2>

              <div className="w-12 h-px bg-neutral-300 mx-auto group-hover:w-16 group-hover:bg-neutral-400 transition-all duration-700 ease-out" />

              <p className="text-neutral-600 text-sm sm:text-base leading-relaxed font-light pt-1 max-w-xl mx-auto">
                Looking for the perfect venue for your next special event? Look no further than Encore. Our private event spaces are perfect for everything from intimate dinners to large celebrations.
              </p>
            </div>
          </div>
        </section>

        {/* Split Section 3: Molecular Gastronomy Showcase */}
        <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 items-center">
            {/* Left 6 Columns: Image */}
            <div className="lg:col-span-6 overflow-hidden rounded-sm border border-neutral-200 group">
              <img
                src="https://img1.wsimg.com/isteam/ip/351c4fe6-4561-484e-b03d-17791075b6bf/exploring-intersections-molecular-gastronomy-c.jpg"
                alt="Molecular Gastronomy at Encore"
                className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />
            </div>

            {/* Right 6 Columns: Description */}
            <div className="lg:col-span-6 space-y-4">
              <span className="text-[11px] uppercase tracking-[0.25em] font-semibold text-neutral-400 block">
                Art &amp; Science
              </span>
              <h2 className="font-playfair text-2xl sm:text-4xl text-neutral-900 font-normal">
                Molecular Gastronomy
              </h2>
              <div className="w-10 h-px bg-neutral-300" />
              <p className="text-neutral-700 text-base sm:text-lg leading-relaxed font-light pt-2 text-justify sm:text-left">
                Molecular gastronomy is a culinary movement that blends science and art to create innovative dishes that stimulate the senses. Using techniques like spherification, foaming, frothing and sous-vide cooking, molecular gastronomy transforms ingredients into visually intriguing and palate-pleasing creations. We at EncoreD7 delight in trying to inculcate some of the molecular methods to enhance our various dishes.
              </p>
            </div>
          </div>
        </section>

        {/* Contact & Google Maps Section */}
        <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto space-y-12 border-t border-neutral-200/80">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-[11px] uppercase tracking-[0.3em] font-semibold text-neutral-400 block">
              Find Us in Kochi
            </span>
            <h2 className="font-playfair text-3xl sm:text-4xl lg:text-5xl text-neutral-900 font-normal">
              Visit District 7 Encore
            </h2>
            <div className="w-12 h-px bg-neutral-300 mx-auto mt-4" />
          </div>

          <div className="bg-white border border-neutral-200/90 rounded-2xl overflow-hidden shadow-sm grid grid-cols-1 lg:grid-cols-12">
            {/* Left 5 cols: Details */}
            <div className="lg:col-span-5 p-6 sm:p-10 bg-[#FAF9F6] flex flex-col justify-between space-y-8">
              <div className="space-y-5">
                <div className="space-y-2">
                  <span className="text-[10px] uppercase tracking-[0.25em] font-semibold text-neutral-500 block">
                    Kadavanthra, Kochi
                  </span>
                  <h3 className="font-playfair text-2xl sm:text-3xl text-neutral-900 font-normal">
                    District 7 Encore
                  </h3>
                  <p className="text-neutral-500 text-xs sm:text-sm font-light leading-relaxed">
                    Fine Dining, Pan-Asian Gastronomy &amp; Signature Steaks.
                  </p>
                </div>

                <div className="space-y-3.5 text-xs sm:text-sm text-neutral-600 font-light pt-5 border-t border-neutral-200/70">
                  <div className="flex items-start space-x-3">
                    <MapPin className="w-4 h-4 text-neutral-800 shrink-0 mt-0.5" />
                    <span className="leading-relaxed">Ozone Greens, Jawahar Nagar, Kadavanthra, Kochi 682020</span>
                  </div>

                  <div className="flex items-center space-x-3">
                    <Clock className="w-4 h-4 text-neutral-800 shrink-0" />
                    <span>Open Daily: 12:00 PM – 2:00 AM</span>
                  </div>

                  <div className="flex items-center space-x-3">
                    <Phone className="w-4 h-4 text-neutral-800 shrink-0" />
                    <a href="tel:+917736030777" className="hover:text-black transition-colors font-medium text-neutral-900">
                      +91 7736 030 777
                    </a>
                  </div>
                </div>
              </div>

              <div>
                <a
                  href="https://maps.google.com/?q=District+7+Encore+Kadavanthra+Kochi"
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

            {/* Right 7 cols: Edge-to-Edge Map Embed */}
            <div className="lg:col-span-7 relative min-h-[340px] sm:min-h-[380px] lg:min-h-[420px] border-t lg:border-t-0 lg:border-l border-neutral-200/80 bg-neutral-100">
              <iframe
                title="District 7 Encore Kadavanthra Google Map"
                src="https://maps.google.com/maps?q=District%207%20Encore%20Kadavanthra%20Kochi&t=&z=15&ie=UTF8&iwloc=&output=embed"
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
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
