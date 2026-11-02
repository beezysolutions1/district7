'use client';

import React, { useState } from 'react';
import { Download, ArrowUpRight, LayoutGrid, List } from 'lucide-react';

interface PriceOption {
  label: string;
  price: string;
}

interface MenuItem {
  id: string;
  name: string;
  description: string;
  image: string;
  badge?: string;
  prices: PriceOption[];
}

interface MenuSection {
  id: string;
  title: string;
  subtitle: string;
  items: MenuItem[];
}

const restroMenuSections: MenuSection[] = [
  {
    id: 'steaks',
    title: 'Signature Steaks & Sizzlers',
    subtitle: "Kochi's Best Reviewed Steaks & Sizzling Platters",
    items: [
      {
        id: 'd7-steak',
        name: 'District 7 Signature Steak',
        description: 'Prime tender cut, rich black pepper jus, charred greens, and creamy garlic herb butter mash.',
        image: 'https://img1.wsimg.com/isteam/ip/351c4fe6-4561-484e-b03d-17791075b6bf/IMG-20241115-WA0016.jpg',
        badge: "Kochi's Best Steak",
        prices: [
          { label: 'Chicken', price: '₹540' },
          { label: 'Tenderloin', price: '₹620' },
        ],
      },
      {
        id: 'sizzler-platter',
        name: 'Continental Sizzler Platter',
        description: 'Sizzling hot cast-iron skillet, grilled meats or paneer, buttered herb rice, sautéed vegetables, and chef gravy.',
        image: 'https://img1.wsimg.com/isteam/ip/351c4fe6-4561-484e-b03d-17791075b6bf/IMG_20210320_235934.jpg',
        badge: 'Tableside Sizzler',
        prices: [
          { label: 'Veg', price: '₹480' },
          { label: 'Non-Veg', price: '₹560' },
        ],
      },
    ],
  },
  {
    id: 'comfort',
    title: 'Loaded Fries & Gourmet Burgers',
    subtitle: 'Late Night Comfort Food & Fun Bites',
    items: [
      {
        id: 'loaded-fries',
        name: 'Monster Cheesy Loaded Fries',
        description: 'Golden skin-on fries drenched in molten four-cheese sauce, sliced jalapeños, and seasoned chicken or bacon bits.',
        image: 'https://img1.wsimg.com/isteam/ip/351c4fe6-4561-484e-b03d-17791075b6bf/IMG-20241115-WA0019.jpg',
        badge: 'All-Time Favorite',
        prices: [
          { label: 'Cheese Classic', price: '₹280' },
          { label: 'Overloaded Meat', price: '₹360' },
        ],
      },
      {
        id: 'd7-burger',
        name: 'The D7 Gourmet Smash Burger',
        description: 'Handcrafted juicy patty, toasted brioche bun, caramelized onions, melted cheddar cheese, and signature secret sauce.',
        image: 'https://img1.wsimg.com/isteam/ip/351c4fe6-4561-484e-b03d-17791075b6bf/IMG_20190505_200328.jpg',
        badge: 'House Special',
        prices: [
          { label: 'Crispy Veg', price: '₹320' },
          { label: 'Double Beef / Chk', price: '₹390' },
        ],
      },
    ],
  },
  {
    id: 'mains',
    title: 'Artisanal Pastas & Pan-Asian',
    subtitle: 'Rich Continental Sauces & Wok Tossed Bowls',
    items: [
      {
        id: 'truffle-pasta',
        name: 'Creamy Mushroom Alfredo Penne',
        description: 'Slow-simmered rich parmesan garlic cream sauce, sautéed button mushrooms, fresh herbs, and toasted garlic baguette.',
        image: 'https://img1.wsimg.com/isteam/ip/351c4fe6-4561-484e-b03d-17791075b6bf/2023-11-04.jpg',
        prices: [
          { label: 'Vegetarian', price: '₹380' },
          { label: 'Grilled Chicken', price: '₹440' },
        ],
      },
      {
        id: 'pan-asian',
        name: 'Wok Tossed Pan-Asian Delicacy',
        description: 'Aromatic wok-fried noodles or rice tossed in fiery scallion garlic chili sauce with garden greens or tender chicken.',
        image: 'https://img1.wsimg.com/isteam/ip/351c4fe6-4561-484e-b03d-17791075b6bf/IMG_6747.jpg',
        badge: 'Pan-Asian Special',
        prices: [
          { label: 'Egg / Veg', price: '₹320' },
          { label: 'Chicken / Prawn', price: '₹390' },
        ],
      },
      {
        id: 'thickshake',
        name: 'Artisan Thickshake & Coolers',
        description: 'Rich blended thickshake with premium Belgian chocolate, Oreo crumble, or tropical citrus coolers.',
        image: 'https://img1.wsimg.com/isteam/ip/351c4fe6-4561-484e-b03d-17791075b6bf/fb_2912743519002219_540x675.jpg',
        prices: [
          { label: 'Classic Shake', price: '₹220' },
          { label: 'Monster Shake', price: '₹290' },
        ],
      },
    ],
  },
];

export default function RestroCafeMenu() {
  const [activeCategory, setActiveCategory] = useState<'all' | 'steaks' | 'comfort' | 'mains'>('all');
  const [viewMode, setViewMode] = useState<'cards' | 'list'>('cards');

  const filteredSections = activeCategory === 'all'
    ? restroMenuSections
    : restroMenuSections.filter((s) => s.id === activeCategory);

  const getWhatsAppUrl = (item?: MenuItem) => {
    const text = item
      ? `Hi District 7 Restro Cafe, I would like to inquire about ordering / reserving ${item.name}.`
      : `Hi District 7 Restro Cafe, I would like to inquire about table reservations and dining.`;
    return `https://wa.me/917736030777?text=${encodeURIComponent(text)}`;
  };

  return (
    <section id="menu" className="relative py-16 sm:py-24 lg:py-28 px-4 sm:px-6 lg:px-8 max-w-full overflow-hidden border-t border-stone-200/80 bg-[#FAF9F6]">
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14 space-y-3">
          <span className="text-[10px] sm:text-[11px] uppercase tracking-[0.25em] sm:tracking-[0.3em] font-medium text-stone-400 block">
            Curated House Specials
          </span>
          <h2 className="font-playfair text-3xl sm:text-5xl text-neutral-900 font-normal tracking-tight">
            Restro Cafe Highlights
          </h2>
          <div className="w-10 h-px bg-stone-300 mx-auto mt-3" />
          <p className="text-stone-500 text-xs sm:text-sm tracking-wide font-light">
            Iconic Steaks, Sizzlers &amp; Loaded Comfort • Vyttila Hub (Open Till 3 AM)
          </p>

          {/* Filter Pills & View Switcher Row */}
          <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
            {/* Category Pills */}
            <div className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2">
              {[
                { id: 'all', label: 'All Signatures' },
                { id: 'steaks', label: 'Steaks & Sizzlers' },
                { id: 'comfort', label: 'Fries & Burgers' },
                { id: 'mains', label: 'Pastas & Mains' },
              ].map((tab) => (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setActiveCategory(tab.id as typeof activeCategory)}
                  className={`px-4 py-2 rounded-full text-xs tracking-wider transition-all duration-200 ${
                    activeCategory === tab.id
                      ? 'bg-neutral-900 text-white shadow-xs font-medium'
                      : 'bg-white/80 text-stone-600 hover:text-neutral-900 hover:bg-white border border-stone-200/80'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Subtle Layout View Switcher */}
            <div className="hidden sm:inline-flex items-center bg-stone-200/60 p-1 rounded-full border border-stone-200/80">
              <button
                type="button"
                onClick={() => setViewMode('cards')}
                className={`flex items-center space-x-1.5 px-3 py-1 rounded-full text-xs transition-all ${
                  viewMode === 'cards'
                    ? 'bg-white text-neutral-900 shadow-xs font-medium'
                    : 'text-stone-500 hover:text-neutral-900'
                }`}
                title="Visual Cards View"
              >
                <LayoutGrid className="w-3.5 h-3.5" />
                <span>Cards</span>
              </button>
              <button
                type="button"
                onClick={() => setViewMode('list')}
                className={`flex items-center space-x-1.5 px-3 py-1 rounded-full text-xs transition-all ${
                  viewMode === 'list'
                    ? 'bg-white text-neutral-900 shadow-xs font-medium'
                    : 'text-stone-500 hover:text-neutral-900'
                }`}
                title="Classic Menu List View"
              >
                <List className="w-3.5 h-3.5" />
                <span>List</span>
              </button>
            </div>
          </div>
        </div>

        {/* Dynamic Display: Visual Cards View (Default, Understated & Refined) */}
        {viewMode === 'cards' ? (
          <div className="space-y-16">
            {filteredSections.map((section) => (
              <div key={section.id} className="space-y-6">
                {/* Section Title */}
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between border-b border-stone-200/80 pb-3 gap-1">
                  <h3 className="font-playfair text-2xl sm:text-3xl text-neutral-900 font-normal">
                    {section.title}
                  </h3>
                  <span className="text-xs uppercase tracking-widest text-stone-400 font-light">
                    {section.subtitle}
                  </span>
                </div>

                {/* Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
                  {section.items.map((item) => (
                    <div
                      key={item.id}
                      className="group bg-white rounded-2xl border border-stone-200/90 overflow-hidden flex flex-col justify-between hover:shadow-lg hover:border-stone-300 transition-all duration-300"
                    >
                      {/* Authentic Food Photo */}
                      <div className="relative aspect-[4/3] overflow-hidden bg-stone-100">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-700 ease-out"
                        />
                        {item.badge && (
                          <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-xs px-2.5 py-1 rounded-full text-[10px] uppercase tracking-wider font-medium text-stone-800 shadow-xs border border-stone-200/80">
                            {item.badge}
                          </div>
                        )}
                      </div>

                      {/* Card Content */}
                      <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                        <div className="space-y-2">
                          <h4 className="font-playfair text-lg sm:text-xl text-neutral-900 font-normal leading-snug group-hover:text-amber-950 transition-colors">
                            {item.name}
                          </h4>
                          <p className="text-stone-600 text-xs sm:text-sm font-light leading-relaxed line-clamp-2">
                            {item.description}
                          </p>
                        </div>

                        {/* Size & Price Chips */}
                        <div className="space-y-3 pt-2 border-t border-stone-100">
                          <div className="flex flex-wrap gap-1.5">
                            {item.prices.map((p, idx) => (
                              <span
                                key={idx}
                                className="inline-flex items-center px-2.5 py-1 rounded-md bg-stone-50 border border-stone-200/70 text-xs text-stone-700"
                              >
                                <span className="text-[10px] uppercase tracking-wider text-stone-400 mr-1.5 font-medium">
                                  {p.label}
                                </span>
                                <span className="font-medium text-neutral-900">
                                  {p.price}
                                </span>
                              </span>
                            ))}
                          </div>

                          {/* Order Action Link */}
                          <a
                            href={getWhatsAppUrl(item)}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center space-x-1.5 text-xs font-medium text-neutral-900 hover:text-stone-600 transition-colors pt-1"
                          >
                            <span>Order or Inquire</span>
                            <ArrowUpRight className="w-3.5 h-3.5 text-stone-400 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                          </a>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        ) : (
          /* Classic Menu List View */
          <div className="space-y-12">
            {filteredSections.map((section) => (
              <div key={section.id} className="bg-white rounded-2xl border border-stone-200/90 p-6 sm:p-10 shadow-xs space-y-6">
                <div className="border-b border-stone-200/80 pb-3 flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                  <h3 className="font-playfair text-2xl text-neutral-900 font-normal">
                    {section.title}
                  </h3>
                  <span className="text-xs uppercase tracking-widest text-stone-400 font-light">
                    {section.subtitle}
                  </span>
                </div>

                <div className="divide-y divide-stone-100">
                  {section.items.map((item) => (
                    <div
                      key={item.id}
                      className="py-4.5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 group hover:bg-stone-50/50 -mx-3 px-3 rounded-xl transition-colors"
                    >
                      {/* Left: Thumbnail & Details */}
                      <div className="flex items-center space-x-4 min-w-0">
                        <div className="w-14 h-14 rounded-xl overflow-hidden shrink-0 border border-stone-200/80 bg-stone-100">
                          <img
                            src={item.image}
                            alt={item.name}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                        </div>
                        <div className="space-y-1 min-w-0">
                          <div className="flex items-center space-x-2">
                            <h4 className="font-playfair text-base sm:text-lg text-neutral-900 font-normal truncate">
                              {item.name}
                            </h4>
                            {item.badge && (
                              <span className="text-[9px] uppercase tracking-wider px-2 py-0.5 rounded-full bg-stone-100 text-stone-600 font-medium shrink-0">
                                {item.badge}
                              </span>
                            )}
                          </div>
                          <p className="text-xs text-stone-500 font-light line-clamp-1 max-w-lg">
                            {item.description}
                          </p>
                        </div>
                      </div>

                      {/* Right: Price Chips & Order */}
                      <div className="flex items-center space-x-3 self-end sm:self-center shrink-0">
                        <div className="flex flex-wrap items-center gap-1.5">
                          {item.prices.map((p, idx) => (
                            <span
                              key={idx}
                              className="inline-flex items-center px-2 py-0.5 rounded bg-stone-100 text-xs text-stone-700"
                            >
                              <span className="text-[10px] text-stone-400 mr-1">{p.label}</span>
                              <span className="font-medium text-neutral-900">{p.price}</span>
                            </span>
                          ))}
                        </div>

                        <a
                          href={getWhatsAppUrl(item)}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center justify-center w-8 h-8 rounded-full border border-stone-200 hover:border-neutral-900 hover:bg-neutral-900 hover:text-white text-stone-600 transition-colors"
                          title="Order on WhatsApp"
                        >
                          <ArrowUpRight className="w-3.5 h-3.5" />
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Refined Complete Menu Download & Reservation Bar */}
        <div className="mt-14 sm:mt-20 pt-8 border-t border-stone-200/80">
          <div className="bg-white border border-stone-200/90 rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xs">
            <div className="space-y-1 text-center md:text-left">
              <span className="text-[10px] uppercase tracking-[0.25em] text-stone-400 font-medium block">
                Complete Dining Menu
              </span>
              <h4 className="font-playfair text-xl text-neutral-900 font-normal">
                Explore All 80+ Dishes, Pastas &amp; Shakes
              </h4>
              <p className="text-stone-500 text-xs sm:text-sm font-light">
                Discover our full selection of Pan-Asian specialties, loaded sides, burgers, and midnight mocktails.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 w-full sm:w-auto shrink-0">
              <a
                href="https://img1.wsimg.com/blobby/go/351c4fe6-4561-484e-b03d-17791075b6bf/Vytilla%20Resto%20Cafe%20Menu%202025.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center space-x-2 px-5 py-3 rounded-full border border-stone-300 bg-white hover:bg-stone-50 text-neutral-900 text-xs tracking-wider transition-colors shadow-xs text-center font-medium"
              >
                <Download className="w-3.5 h-3.5 text-stone-500" />
                <span>Download Full Menu (PDF)</span>
              </a>

              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center space-x-2 px-6 py-3 rounded-full bg-neutral-900 hover:bg-black text-white text-xs tracking-wider transition-all duration-200 shadow-sm hover:scale-[1.01] text-center font-medium"
              >
                <span>Reserve a Table</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

