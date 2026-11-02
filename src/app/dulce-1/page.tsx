import React from 'react';
import SiteHeader from '../../components/SiteHeader';
import SiteFooter from '../../components/SiteFooter';
import EditorialGallery from '../../components/EditorialGallery';
import ParisianMenu from '../../components/ParisianMenu';
import DulceStoryShowcase from '../../components/DulceStoryShowcase';
import { Download, ArrowUpRight } from 'lucide-react';

export const metadata = {
  title: 'Dulce - d7ventures.com',
  description: 'Welcome to d7 Dulce, our in-house patisserie for all things sweet and divine in Kochi.',
};

const dulceGalleryImages = [
  { url: 'https://img1.wsimg.com/isteam/ip/351c4fe6-4561-484e-b03d-17791075b6bf/2023-12-01.jpg', alt: 'Dulce Cake Creation' },
  { url: 'https://img1.wsimg.com/isteam/ip/351c4fe6-4561-484e-b03d-17791075b6bf/2023-10-03.jpg', alt: 'Dulce Handcrafted Patisserie' },
  { url: 'https://img1.wsimg.com/isteam/ip/351c4fe6-4561-484e-b03d-17791075b6bf/2024-08-12.jpg', alt: 'Dulce Celebration Cake' },
  { url: 'https://img1.wsimg.com/isteam/ip/351c4fe6-4561-484e-b03d-17791075b6bf/2024-08-13.jpg', alt: 'Dulce Dessert Styling' },
  { url: 'https://img1.wsimg.com/isteam/ip/351c4fe6-4561-484e-b03d-17791075b6bf/2022-09-17.jpg', alt: 'Dulce Signature Pastry' },
  { url: 'https://img1.wsimg.com/isteam/ip/351c4fe6-4561-484e-b03d-17791075b6bf/2023-04-28.jpg', alt: 'Dulce Bakes & Entremets' },
  { url: 'https://img1.wsimg.com/isteam/ip/351c4fe6-4561-484e-b03d-17791075b6bf/2023-12-19.jpg', alt: 'Dulce Festive Cake Collection' },
  { url: 'https://img1.wsimg.com/isteam/ip/351c4fe6-4561-484e-b03d-17791075b6bf/image_743c3412-acfb-4ec4-b3f2-e6770de6883b.jpg', alt: 'Dulce Custom Cake' },
  { url: 'https://img1.wsimg.com/isteam/ip/351c4fe6-4561-484e-b03d-17791075b6bf/2024-04-04.jpg', alt: 'Dulce Entremet Special' },
  { url: 'https://img1.wsimg.com/isteam/ip/351c4fe6-4561-484e-b03d-17791075b6bf/Ferraro-Rocher-Cake.jpg', alt: 'Ferrero Rocher Cake' },
];

export default function DulcePage() {
  return (
    <div className="min-h-screen bg-white text-[#222222] flex flex-col font-sans selection:bg-neutral-900 selection:text-white">
      <SiteHeader />

      <main className="flex-1">
        {/* Editorial Hero Banner */}
        <section className="relative w-full bg-[#111111] text-white overflow-hidden">
          <div className="relative h-[65vh] min-h-[460px] w-full flex items-center justify-center">
            <img
              src="https://img1.wsimg.com/isteam/ip/351c4fe6-4561-484e-b03d-17791075b6bf/fb_779453880848290_1440x1799.jpg"
              alt="Welcome to d7 Dulce Haute Patisserie"
              className="absolute inset-0 w-full h-full object-cover opacity-55 scale-100 hover:scale-105 transition-transform duration-1000 ease-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/40" />

            <div className="relative z-10 max-w-4xl mx-auto px-6 text-center space-y-4">
              <div className="inline-block border-y border-white/30 py-1.5 px-6 mb-2">
                <span className="text-[11px] uppercase tracking-[0.35em] text-neutral-200 font-light">
                  Kadavanthra &amp; Vyttila • Haute Patisserie
                </span>
              </div>
              <h1 className="font-playfair text-3xl sm:text-5xl lg:text-6xl font-normal tracking-tight text-white leading-[1.15]">
                Welcome to d7 Dulce
              </h1>
            </div>
          </div>
        </section>

        {/* Chapter 01: Sweet Artistry & Philosophy - Clean Editorial Spread */}
        <section className="relative w-full py-14 sm:py-20 lg:py-28 bg-[#FAF9F6] border-y border-stone-200/80 overflow-hidden">
          {/* Subtle Ambient Sunlight Diffusion */}
          <div
            className="absolute -top-32 -right-32 w-96 h-96 rounded-full pointer-events-none blur-3xl"
            style={{
              background: "radial-gradient(circle, rgba(251, 191, 36, 0.10) 0%, transparent 70%)",
            }}
          />
          <div
            className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full pointer-events-none blur-3xl"
            style={{
              background: "radial-gradient(circle, rgba(245, 158, 11, 0.06) 0%, transparent 70%)",
            }}
          />

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
              {/* Left 6 Columns: Narrative */}
              <div className="lg:col-span-6 space-y-12">
                {/* Our Story */}
                <div className="space-y-4">
                  <span className="text-[11px] uppercase tracking-[0.3em] font-medium text-stone-400 block">
                    Sweet Artistry
                  </span>
                  <h2 className="font-playfair text-3xl sm:text-4xl text-neutral-900 font-normal tracking-tight">
                    Our Story
                  </h2>
                  <div className="w-12 h-px bg-stone-300" />
                  <p className="text-stone-600 text-base sm:text-lg leading-relaxed font-light">
                    Welcome to Dulce, a patisserie where every dessert is crafted with passion and precision. Nestled in a cozy corner of our Encore restaurant - Dulce offers a delightful variety of sweet delights and treats that adds just that extra oomph to your meal.
                  </p>
                </div>

                {/* The Dulce Standard */}
                <div className="space-y-4 pt-10 sm:pt-12 border-t border-stone-200/80">
                  <span className="text-[11px] uppercase tracking-[0.3em] font-medium text-stone-400 block">
                    Confectionery &amp; Bakes
                  </span>
                  <h2 className="font-playfair text-3xl sm:text-4xl text-neutral-900 font-normal tracking-tight">
                    The Dulce Standard
                  </h2>
                  <div className="w-12 h-px bg-stone-300" />
                  <p className="text-stone-600 text-base sm:text-lg leading-relaxed font-light">
                    An array of daily specials, breads &amp; bakes, entremets, a large selection of premium full cakes, pastries, tarts, macarons, cheesecakes and so much more all handmade in house with high quality ingredients.
                  </p>
                  <p className="text-stone-600 text-base sm:text-lg leading-relaxed font-light">
                    As well as housing gorgeously curated plated desserts like the viral Burning Alaska, Crème Caramel Fudge Cake, Pour Me Cake, and Tell Me a Secret Cake.
                  </p>
                </div>
              </div>

              {/* Right 6 Columns: Photography & Artisan Philosophy Card */}
              <div className="lg:col-span-6 space-y-8">
                {/* Culinary Artistry Auto-Moving Showcase Card */}
                <DulceStoryShowcase />

                {/* Artisan Philosophy Card - Serene Editorial Card */}
                <div className="bg-white/90 backdrop-blur-sm border border-stone-200/90 rounded-2xl p-8 sm:p-10 shadow-sm text-center space-y-4">
                  <p className="font-playfair text-xl sm:text-2xl text-neutral-900 leading-relaxed font-normal italic">
                    &ldquo;Every dessert is crafted with passion and precision to add just that extra oomph to your meal.&rdquo;
                  </p>
                  <div className="w-12 h-px bg-stone-300 mx-auto" />
                  <span className="text-[10px] uppercase tracking-[0.25em] text-stone-400 font-mono block">
                    Artisan Philosophy
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Chapter 02: The Parisian Editorial Menu */}
        <ParisianMenu />

        {/* Authentic Dulce Photo Gallery from Old Website */}
        <EditorialGallery
          title="Finest Patisserie &amp; Cake Creations"
          subtitle="The Dulce Collection"
          images={dulceGalleryImages}
        />

        {/* Contact Us Section */}
        <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto text-center space-y-8 border-t border-neutral-200">
          <div className="space-y-3">
            <span className="text-[11px] uppercase tracking-[0.3em] font-semibold text-neutral-400 block">
              Orders &amp; Location
            </span>
            <h2 className="font-playfair text-3xl sm:text-5xl text-neutral-900 font-normal">
              Contact Us
            </h2>
            <div className="w-12 h-px bg-neutral-300 mx-auto mt-4" />
          </div>

          <div className="space-y-3 max-w-2xl mx-auto">
            <h3 className="font-playfair text-xl sm:text-2xl text-neutral-800 font-normal">
              Better yet, see us in person!
            </h3>
            <p className="text-neutral-600 text-sm sm:text-base leading-relaxed font-light">
              We love our customers, so feel free to visit anytime during normal business hours.
            </p>
          </div>

          <div className="pt-2">
            <a
              href="https://wa.me/917736030777"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary w-full sm:w-auto inline-flex items-center justify-center"
            >
              Message us on WhatsApp
            </a>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
