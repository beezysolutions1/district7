import React from 'react';
import SiteHeader from '../../components/SiteHeader';
import SiteFooter from '../../components/SiteFooter';
import EditorialGallery from '../../components/EditorialGallery';
import RestroCafeMenu from '../../components/RestroCafeMenu';
import { Download, ArrowDown, MapPin, Clock, Phone, Navigation, ArrowUpRight } from 'lucide-react';

export const metadata = {
  title: 'Restro Cafe - d7ventures.com',
  description: 'Welcome to D7 Restro Cafe in Vyttila, Kochi. Best reviewed Steaks in Kochi.',
};

const restroCafeGalleryImages = [
  { url: 'https://img1.wsimg.com/isteam/ip/351c4fe6-4561-484e-b03d-17791075b6bf/IMG-20241115-WA0016.jpg', alt: 'Restro Cafe Steak Special' },
  { url: 'https://img1.wsimg.com/isteam/ip/351c4fe6-4561-484e-b03d-17791075b6bf/IMG-20241115-WA0019.jpg', alt: 'Restro Cafe Fries & Bites' },
  { url: 'https://img1.wsimg.com/isteam/ip/351c4fe6-4561-484e-b03d-17791075b6bf/PXL_20230625_164312999.jpg', alt: 'Restro Cafe Dine-In Ambiance' },
  { url: 'https://img1.wsimg.com/isteam/ip/351c4fe6-4561-484e-b03d-17791075b6bf/IMG_20180926_223759_Bokeh.jpg', alt: 'Restro Cafe Late Night Vibe' },
  { url: 'https://img1.wsimg.com/isteam/ip/351c4fe6-4561-484e-b03d-17791075b6bf/IMG_20210320_235934.jpg', alt: 'Restro Cafe Sizzler' },
  { url: 'https://img1.wsimg.com/isteam/ip/351c4fe6-4561-484e-b03d-17791075b6bf/IMG20240603175229.jpg', alt: 'Restro Cafe Continental Cuisine' },
  { url: 'https://img1.wsimg.com/isteam/ip/351c4fe6-4561-484e-b03d-17791075b6bf/PXL_20211113_080116683.jpg', alt: 'Restro Cafe Gathering' },
  { url: 'https://img1.wsimg.com/isteam/ip/351c4fe6-4561-484e-b03d-17791075b6bf/IMG_20190505_200328.jpg', alt: 'Restro Cafe Burger Delights' },
  { url: 'https://img1.wsimg.com/isteam/ip/351c4fe6-4561-484e-b03d-17791075b6bf/IMG_20180926_213715_Bokeh.jpg', alt: 'Restro Cafe Table Feast' },
  { url: 'https://img1.wsimg.com/isteam/ip/351c4fe6-4561-484e-b03d-17791075b6bf/IMG_20180926_204003_Bokeh.jpg', alt: 'Restro Cafe Comfort Food' },
  { url: 'https://img1.wsimg.com/isteam/ip/351c4fe6-4561-484e-b03d-17791075b6bf/IMG_6747.jpg', alt: 'Restro Cafe Signature Dish' },
  { url: 'https://img1.wsimg.com/isteam/ip/351c4fe6-4561-484e-b03d-17791075b6bf/2023-11-13.jpg', alt: 'Restro Cafe Evening Platter' },
  { url: 'https://img1.wsimg.com/isteam/ip/351c4fe6-4561-484e-b03d-17791075b6bf/2023-11-04.jpg', alt: 'Restro Cafe Pasta & Sauces' },
  { url: 'https://img1.wsimg.com/isteam/ip/351c4fe6-4561-484e-b03d-17791075b6bf/2022-07-06.jpg', alt: 'Restro Cafe Dessert & Beverage' },
  { url: 'https://img1.wsimg.com/isteam/ip/351c4fe6-4561-484e-b03d-17791075b6bf/2021-01-02.jpg', alt: 'Restro Cafe Special Occasion' },
  { url: 'https://img1.wsimg.com/isteam/ip/351c4fe6-4561-484e-b03d-17791075b6bf/2020-01-15.jpg', alt: 'Restro Cafe Street-Style Feast' },
  { url: 'https://img1.wsimg.com/isteam/ip/351c4fe6-4561-484e-b03d-17791075b6bf/fb_2912743519002219_540x675.jpg', alt: 'Restro Cafe Beverage Treat' },
];

export default function RestroCafePage() {
  return (
    <div className="min-h-screen bg-white text-[#222222] flex flex-col font-sans selection:bg-neutral-900 selection:text-white">
      <SiteHeader />

      <main className="flex-1">
        {/* Editorial Hero Banner */}
        <section className="relative w-full bg-[#111111] text-white overflow-hidden">
          <div className="relative h-[65vh] min-h-[460px] w-full flex items-center justify-center">
            <img
              src="https://img1.wsimg.com/isteam/ip/351c4fe6-4561-484e-b03d-17791075b6bf/fb_532915142168833_1440x1440.jpg"
              alt="Welcome to D7 Restro Cafe Vyttila"
              className="absolute inset-0 w-full h-full object-cover opacity-55 scale-100 hover:scale-105 transition-transform duration-1000 ease-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/40" />

            <div className="relative z-10 max-w-4xl mx-auto px-6 text-center space-y-4">
              <div className="inline-block border-y border-white/30 py-1.5 px-6 mb-2">
                <span className="text-[11px] uppercase tracking-[0.35em] text-neutral-200 font-light">
                  Vyttila, Kochi • Open Till 3 AM
                </span>
              </div>
              <h1 className="font-playfair text-3xl sm:text-5xl lg:text-6xl font-normal tracking-tight text-white leading-[1.15]">
                Welcome to D7 Restro Cafe
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
                <span className="text-[11px] uppercase tracking-[0.25em] font-semibold text-neutral-400 block">
                  Hangout Culture
                </span>
                <h2 className="font-playfair text-2xl sm:text-4xl text-neutral-900 font-normal tracking-tight">
                  Our Story
                </h2>
                <div className="w-10 h-px bg-neutral-300" />
                <p className="text-neutral-700 text-base sm:text-lg leading-relaxed font-light">
                  Welcome to our D7 Restrocafe where global flavors meet local charm! A space where family and friends can gather, relax, play a game or two, and savor flavors from around the world. A cozy, chic space designed to bring people together over great food and memorable experiences.
                </p>
              </div>

              {/* Quiet Luxury Note */}
              <div className="p-6 sm:p-7 rounded-2xl bg-[#FAF9F6] border border-stone-200/80 space-y-2">
                <span className="text-[10px] uppercase tracking-[0.25em] font-medium text-stone-400 block">
                  Vyttila Mobility Hub
                </span>
                <h4 className="font-playfair text-xl text-neutral-900 font-normal">
                  Late-Night Cafe Culture • Open Till 3:00 AM
                </h4>
                <p className="text-xs sm:text-sm text-stone-500 font-light leading-relaxed">
                  Kochi&apos;s favorite late-night hangout for board games, artisanal thickshakes, sizzling steaks, and loaded comfort food with friends and family.
                </p>
              </div>
            </div>

            {/* Right 6 Columns: Our Menu & Global Flavors */}
            <div className="lg:col-span-6 space-y-6 sm:space-y-8">
              <div className="space-y-4">
                <div className="flex items-center justify-between flex-wrap gap-2">
                  <span className="text-[11px] uppercase tracking-[0.25em] font-semibold text-neutral-400 block">
                    Global Meets Comfort
                  </span>
                  <span className="inline-flex items-center px-3 py-1 rounded-full bg-amber-50 border border-amber-200/80 text-[10px] uppercase tracking-[0.2em] font-medium text-amber-900">
                    Kochi&apos;s Best Steaks
                  </span>
                </div>

                <h2 className="font-playfair text-2xl sm:text-4xl text-neutral-900 font-normal tracking-tight">
                  Our Menu
                </h2>
                <div className="w-10 h-px bg-neutral-300" />
                <p className="text-neutral-700 text-base sm:text-lg leading-relaxed font-light">
                  We’ve curated a menu to satisfy cravings for both the familiar and the adventurous. Our Continental selection includes perfectly cooked steaks, rich pastas, and a carefully chosen selection of Pan Asian delicacies to add a hint of spice and variety to your experience. So whether you&apos;re looking for a comforting classic or an exciting new flavor, there’s something here for everyone to enjoy.
                </p>

                {/* Quick Context Highlights */}
                <div className="flex flex-wrap gap-2 pt-2 text-xs text-neutral-500 font-light">
                  <span className="px-3 py-1 rounded-full bg-neutral-100 border border-neutral-200/60">
                    Continental Steaks &amp; Sizzlers
                  </span>
                  <span className="px-3 py-1 rounded-full bg-neutral-100 border border-neutral-200/60">
                    Loaded Fries &amp; Burgers
                  </span>
                  <span className="px-3 py-1 rounded-full bg-neutral-100 border border-neutral-200/60">
                    Open Till 3:00 AM
                  </span>
                </div>

                {/* Integrated Seamless Menu Action */}
                <div className="pt-3 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                  <a
                    href="#menu"
                    className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 bg-neutral-950 text-white hover:bg-neutral-800 px-7 py-3.5 rounded-full text-xs sm:text-sm font-medium tracking-[0.08em] transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] shadow-md shadow-neutral-950/10"
                  >
                    <span>Explore House Specials</span>
                    <ArrowDown className="w-4 h-4 text-neutral-400" />
                  </a>
                  <a
                    href="https://img1.wsimg.com/blobby/go/351c4fe6-4561-484e-b03d-17791075b6bf/Vytilla%20Resto%20Cafe%20Menu%202025.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 border border-stone-300 bg-white hover:bg-stone-50 text-neutral-900 px-6 py-3.5 rounded-full text-xs sm:text-sm font-medium tracking-[0.08em] transition-colors shadow-xs"
                  >
                    <Download className="w-4 h-4 text-stone-500" />
                    <span>Download Full Menu (PDF)</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Curated House Specials & Signatures (Like Dulce Parisian Menu) */}
        <RestroCafeMenu />

        {/* Feast Your Eyes with our Finest Cuisine (17 Authentic Images from Old Website) */}
        <EditorialGallery
          title="Feast Your Eyes with our Finest Cuisine"
          subtitle="Restro Cafe Visual Feast"
          images={restroCafeGalleryImages}
        />

        {/* Contact & Google Maps Section */}
        <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto space-y-12 border-t border-neutral-200/80">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-[11px] uppercase tracking-[0.3em] font-semibold text-neutral-400 block">
              Find Us in Kochi
            </span>
            <h2 className="font-playfair text-3xl sm:text-4xl lg:text-5xl text-neutral-900 font-normal">
              Visit District 7 Restro Cafe
            </h2>
            <div className="w-12 h-px bg-neutral-300 mx-auto mt-4" />
          </div>

          <div className="bg-white border border-neutral-200/90 rounded-2xl overflow-hidden shadow-sm grid grid-cols-1 lg:grid-cols-12">
            {/* Left 5 cols: Details */}
            <div className="lg:col-span-5 p-6 sm:p-10 bg-[#FAF9F6] flex flex-col justify-between space-y-8">
              <div className="space-y-5">
                <div className="space-y-2">
                  <span className="text-[10px] uppercase tracking-[0.25em] font-semibold text-neutral-500 block">
                    Vyttila, Kochi
                  </span>
                  <h3 className="font-playfair text-2xl sm:text-3xl text-neutral-900 font-normal">
                    District 7 Restro Cafe
                  </h3>
                  <p className="text-neutral-500 text-xs sm:text-sm font-light leading-relaxed">
                    Iconic Steaks, Tableside Sizzlers &amp; Gourmet Burgers.
                  </p>
                </div>

                <div className="space-y-3.5 text-xs sm:text-sm text-neutral-600 font-light pt-5 border-t border-neutral-200/70">
                  <div className="flex items-start space-x-3">
                    <MapPin className="w-4 h-4 text-neutral-800 shrink-0 mt-0.5" />
                    <span className="leading-relaxed">Near Mobility Hub, Vyttila, Ernakulam, Kochi 682019</span>
                  </div>

                  <div className="flex items-center space-x-3">
                    <Clock className="w-4 h-4 text-neutral-800 shrink-0" />
                    <span>Open Daily: 12:00 PM – 3:00 AM</span>
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
                  href="https://maps.google.com/?q=District+7+Restro+Cafe+Vyttila+Kochi"
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
                title="District 7 Restro Cafe Vyttila Google Map"
                src="https://maps.google.com/maps?q=District%207%20Restro%20Cafe%20Vyttila%20Kochi&t=&z=15&ie=UTF8&iwloc=&output=embed"
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
