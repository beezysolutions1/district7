'use client';

import React, { useState } from 'react';
import { Download, ArrowUpRight, LayoutGrid, List } from 'lucide-react';

interface PriceOption {
  size: string;
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

const menuSections: MenuSection[] = [
  {
    id: 'cheesecakes',
    title: 'Signature Cheesecakes',
    subtitle: 'Handcrafted Daily • Bento, 0.5 KG & 1 KG',
    items: [
      {
        id: 'lotus',
        name: 'Lotus Biscoff Cheesecake',
        description: 'Silky no-bake cheesecake with spiced speculoos spread, crunchy Lotus biscuit crumble and a buttery base.',
        image: '/dulce-menu/cakes/lotus-biscoff.jpg',
        badge: 'Bestseller',
        prices: [
          { size: 'Bento', price: '₹700' },
          { size: '0.5 KG', price: '₹1,250' },
          { size: '1 KG', price: '₹2,400' },
        ],
      },
      {
        id: 'blueberry',
        name: 'Wild Blueberry Compote Cheesecake',
        description: 'Velvety slow-baked cream cheese on toasted graham crust, crowned with homemade simmering blueberry purée & compote.',
        image: '/dulce-menu/cakes/blueberry-cheesecake.jpg',
        badge: 'Signature',
        prices: [
          { size: 'Bento', price: '₹600' },
          { size: '0.5 KG', price: '₹950' },
          { size: '1 KG', price: '₹1,800' },
        ],
      },
      {
        id: 'oreo',
        name: 'Oreo Overload Cake',
        description: 'Dark cocoa biscuit crust, vanilla bean mascarpone cream, milk & dark chocolate ganache, layered over chocolate chiffon sponge.',
        image: '/dulce-menu/cakes/oreo-overload.jpg',
        prices: [
          { size: 'Bento', price: '₹450' },
          { size: '0.5 KG', price: '₹650' },
          { size: '1 KG', price: '₹1,200' },
        ],
      },
      {
        id: 'chocolate-cheese',
        name: 'Chocolate Cheese Naked Cake',
        description: 'Naked chocolate cake with chocolate cream cheese filling, rich Belgian sponge, and fine cocoa dusting.',
        image: '/dulce-menu/cakes/chocolate-cheese.jpg',
        prices: [
          { size: '0.5 KG', price: '₹1,300' },
          { size: '1 KG', price: '₹2,500' },
        ],
      },
    ],
  },
  {
    id: 'celebration',
    title: 'Artisanal & Celebration Cakes',
    subtitle: 'Layered Occasion Cakes & Bespoke Bakes',
    items: [
      {
        id: 'ferrero',
        name: 'Ferrero Rocher Ganache',
        description: 'Decadent chocolate sponge, dark hazelnut ganache, crispy wafer, crowned with golden Ferrero Rochers.',
        image: '/dulce-menu/cakes/ferrero-rocher.jpg',
        badge: "Chef's Special",
        prices: [
          { size: 'Bento', price: '₹750' },
          { size: '0.5 KG', price: '₹1,150' },
        ],
      },
      {
        id: 'chocolate-excess',
        name: 'Chocolate Excess Cake',
        description: 'Layers of rich 65% dark chocolate ganache, dark cocoa chiffon sponge, and delicate chocolate shavings.',
        image: '/dulce-menu/cakes/chocolate-excess.jpg',
        badge: 'Decadent',
        prices: [
          { size: 'Bento', price: '₹450' },
          { size: '0.5 KG', price: '₹650' },
          { size: '1 KG', price: '₹1,200' },
        ],
      },
      {
        id: 'espresso',
        name: 'Espresso Redemption Cake',
        description: 'Vanilla velvet sponge infused with dark espresso syrup, coffee crème, and smooth milk chocolate cream.',
        image: '/dulce-menu/cakes/espresso-redemption.jpg',
        prices: [
          { size: 'Bento', price: '₹450' },
          { size: '0.5 KG', price: '₹650' },
          { size: '1 KG', price: '₹1,200' },
        ],
      },
      {
        id: 'red-velvet',
        name: 'Red Velvet Cream Cheese',
        description: 'Moist crimson red velvet sponge layered with silky cream cheese frosting and fresh sweet strawberries.',
        image: '/dulce-menu/cakes/red-velvet.jpg',
        badge: 'Classic',
        prices: [
          { size: 'Bento', price: '₹700' },
          { size: '0.5 KG', price: '₹1,300' },
          { size: '1 KG', price: '₹2,500' },
        ],
      },
    ],
  },
  {
    id: 'plated',
    title: 'Plated Desserts & Viral Specials',
    subtitle: 'Tableside Service & Single Serves',
    items: [
      {
        id: 'pour-me',
        name: 'The Viral "Pour Me" Cake',
        description: 'Customized styling with a theatrical cascade of warm dark chocolate, burnt caramel, or homemade Baileys cream.',
        image: '/dulce-menu/cakes/pour-me.jpg',
        badge: 'Viral Tableside',
        prices: [
          { size: '1 KG / Dine-In', price: '₹850' },
        ],
      },
      {
        id: 'burning-alaska',
        name: 'The Burning Alaska',
        description: 'Artisanal gelato dome on tender genoise sponge, enveloped in Italian meringue flamed dramatically tableside.',
        image: 'https://img1.wsimg.com/isteam/ip/351c4fe6-4561-484e-b03d-17791075b6bf/2024-04-04.jpg',
        badge: 'Tableside Flambé',
        prices: [
          { size: 'Single Serve', price: '₹520' },
        ],
      },
      {
        id: 'creme-caramel',
        name: 'Crème Caramel Fudge Cake',
        description: 'Velvety Spanish flan caramel set over rich fudgy dark chocolate, drizzled with salted butterscotch.',
        image: 'https://img1.wsimg.com/isteam/ip/351c4fe6-4561-484e-b03d-17791075b6bf/2023-12-01.jpg',
        prices: [
          { size: 'Slice', price: '₹460' },
          { size: '0.5 KG', price: '₹1,150' },
        ],
      },
      {
        id: 'tiramisu',
        name: 'Tiramisu Savoiardi',
        description: 'Homemade Savoiardi ladyfingers soaked in rum & fresh espresso, layered with cloud-like mascarpone mousse.',
        image: '/dulce-menu/cakes/tiramisu.jpg',
        badge: 'House Favorite',
        prices: [
          { size: 'Bento', price: '₹650' },
          { size: '0.5 KG', price: '₹1,200' },
          { size: '1 KG', price: '₹2,200' },
        ],
      },
    ],
  },
];

export default function ParisianMenu() {
  const [activeCategory, setActiveCategory] = useState<'all' | 'cheesecakes' | 'celebration' | 'plated'>('all');
  const [viewMode, setViewMode] = useState<'cards' | 'list'>('cards');

  const filteredSections = activeCategory === 'all'
    ? menuSections
    : menuSections.filter((s) => s.id === activeCategory);

  const getWhatsAppUrl = (item?: MenuItem, priceOption?: string) => {
    let text = 'Hi District 7 Dulce, I would like to inquire about ordering a cake from the Dulce Menu.';
    if (item) {
      text = `Hi District 7 Dulce, I would like to order or inquire about ${item.name}`;
      if (priceOption) {
        text += ` (${priceOption})`;
      }
      text += '.';
    }
    return `https://wa.me/917736030777?text=${encodeURIComponent(text)}`;
  };

  return (
    <section id="menu" className="relative py-16 sm:py-24 lg:py-28 px-4 sm:px-6 lg:px-8 max-w-full overflow-hidden border-t border-stone-200/80 bg-[#FAF8F5]">
      {/* Atmosphere Background Scrim */}
      <div className="absolute inset-0 pointer-events-none select-none z-0 overflow-hidden">
        <img
          src="https://img1.wsimg.com/isteam/ip/351c4fe6-4561-484e-b03d-17791075b6bf/2024-08-13.jpg"
          alt="Maison Dulce Patisserie Atmosphere"
          className="w-full h-full object-cover object-center opacity-[0.08] filter saturate-[0.6] blur-[2px] scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#FAF8F5] via-[#FAF8F5]/90 to-[#FAF8F5]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14 space-y-3">
          <span className="text-[10px] sm:text-[11px] uppercase tracking-[0.25em] sm:tracking-[0.3em] font-medium text-stone-400 block">
            Carte Des Desserts
          </span>
          <h2 className="font-playfair text-3xl sm:text-5xl text-neutral-900 font-normal tracking-tight">
            The Dulce Menu
          </h2>
          <div className="w-10 h-px bg-stone-300 mx-auto mt-3" />
          <p className="text-stone-500 text-xs sm:text-sm tracking-wide font-light">
            Handmade Daily • Kadavanthra &amp; Vyttila Hubs
          </p>

          {/* Filter Pills & View Switcher Row */}
          <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
            {/* Category Pills */}
            <div className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2">
              {[
                { id: 'all', label: 'All Creations' },
                { id: 'cheesecakes', label: 'Cheesecakes' },
                { id: 'celebration', label: 'Celebration Cakes' },
                { id: 'plated', label: 'Plated & Specials' },
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
                title="Classic Carte View"
              >
                <List className="w-3.5 h-3.5" />
                <span>List</span>
              </button>
            </div>
          </div>
        </div>

        {/* Dynamic Display: Visual Cards View (Default, Elegant & Understated) */}
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

                {/* Cake Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-7">
                  {section.items.map((item) => (
                    <div
                      key={item.id}
                      className="group bg-white rounded-2xl border border-stone-200/90 overflow-hidden flex flex-col justify-between hover:shadow-lg hover:border-stone-300 transition-all duration-300"
                    >
                      {/* Authentic Cake Photography */}
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
                                  {p.size}
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
                            <span>Order via WhatsApp</span>
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
          /* Classic Menu List View (Polished, Aligned, Never Broken) */
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
                              <span className="text-[10px] text-stone-400 mr-1">{p.size}</span>
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

        {/* Refined Concierge Order & Catalogue Bar */}
        <div className="mt-14 sm:mt-20 pt-8 border-t border-stone-200/80">
          <div className="bg-white border border-stone-200/90 rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xs">
            <div className="space-y-1 text-center md:text-left">
              <span className="text-[10px] uppercase tracking-[0.25em] text-stone-400 font-medium block">
                Bespoke Orders &amp; Pre-Orders
              </span>
              <h4 className="font-playfair text-xl text-neutral-900 font-normal">
                Order Custom Celebration Cakes
              </h4>
              <p className="text-stone-500 text-xs sm:text-sm font-light">
                All cakes are handcrafted fresh daily. Custom tiered cakes available on 24–48 hours notice.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 w-full sm:w-auto shrink-0">
              <a
                href="https://img1.wsimg.com/blobby/go/351c4fe6-4561-484e-b03d-17791075b6bf/Dulce%20Cake%20Menu%202025.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center space-x-2 px-5 py-3 rounded-full border border-stone-300 bg-white hover:bg-stone-50 text-neutral-900 text-xs tracking-wider transition-colors shadow-xs text-center font-medium"
              >
                <Download className="w-3.5 h-3.5 text-stone-500" />
                <span>2025 Catalogue (PDF)</span>
              </a>

              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center space-x-2 px-6 py-3 rounded-full bg-neutral-900 hover:bg-black text-white text-xs tracking-wider transition-all duration-200 shadow-sm hover:scale-[1.01] text-center font-medium"
              >
                <span>Order via WhatsApp</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
