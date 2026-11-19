export interface SpecialItem {
  id: string;
  title: string;
  tagline: string;
  description: string;
  image: string;
  badge?: 'Chef’s Special' | 'Limited Edition' | 'Weekend Special' | 'Special Event' | 'Seasonal Creation';
  venue: 'All Venues' | 'Encore Kadavanthra' | 'Restro Cafe Vyttila' | 'Dulce Patisserie';
  category: 'All' | 'Steaks & Mains' | 'Pan-Asian & Bites' | 'Patisserie & Desserts' | 'Events & Popups';
  availability: string;
  featured?: boolean;
  airmenusUrl?: string;
  whatsappMessage?: string;
  isActive: boolean;
}

export const SPECIALS_DATA: SpecialItem[] = [
  {
    id: 'special-tenderloin-steak',
    title: 'Charcoal-Grilled Prime Tenderloin',
    tagline: 'Signature Herb Butter & Truffle Mash',
    description: 'Cut from premium aged tenderloin, seared over open flame, basted in rosemary-thyme compound butter, served with velvet truffle mash and peppercorn jus.',
    image: '/images/gallery/d7-prime-steak.jpg',
    badge: 'Chef’s Special',
    venue: 'Encore Kadavanthra',
    category: 'Steaks & Mains',
    availability: 'Available Daily • 12:00 PM – 2:00 AM',
    featured: true,
    airmenusUrl: 'https://airmenus.in/district7/order/Dine-In/Seasonal%20Menu?sId=1216136',
    whatsappMessage: 'Hi District 7, I would like to reserve a table for the Charcoal-Grilled Prime Tenderloin special.',
    isActive: true,
  },
  {
    id: 'special-korean-wings',
    title: 'Smoked Gochujang Crisp Wings',
    tagline: 'Toasted Sesame, Scallions & Lime',
    description: 'Twice-fried crispy wings glazed in house-fermented sweet and spicy gochujang sauce, toasted sesame seeds, crushed peanuts, and fresh lime.',
    image: '/images/gallery/d7-asian-wings.jpg',
    badge: 'Limited Edition',
    venue: 'Restro Cafe Vyttila',
    category: 'Pan-Asian & Bites',
    availability: 'Daily from 4:00 PM – 3:00 AM',
    airmenusUrl: 'https://airmenus.in/district7/order/Dine-In/Seasonal%20Menu?sId=1216136',
    whatsappMessage: 'Hi District 7, inquiring about the Smoked Gochujang Wings special at Restro Cafe.',
    isActive: true,
  },
  {
    id: 'special-artisan-pesto',
    title: 'Hand-Rolled Basil Pesto Tagliatelle',
    tagline: 'Aged Grana Padano & Toasted Pine Nuts',
    description: 'Fresh artisanal pasta tossed in a vibrant cold-pressed sweet basil and pine nut pesto, finished with shaved Grana Padano and extra virgin olive oil.',
    image: '/images/gallery/d7-pesto-pasta.jpg',
    badge: 'Chef’s Special',
    venue: 'Encore Kadavanthra',
    category: 'Steaks & Mains',
    availability: 'Available Daily • 12:00 PM – 2:00 AM',
    airmenusUrl: 'https://airmenus.in/district7/order/Dine-In/Seasonal%20Menu?sId=1216136',
    whatsappMessage: 'Hi District 7, I would like to inquire about the Hand-Rolled Basil Pesto Tagliatelle.',
    isActive: true,
  },
  {
    id: 'special-dulce-gateau',
    title: 'Belgian Dark Chocolate Opera Gateau',
    tagline: 'Espresso Ganache & Gold Leaf Flakes',
    description: 'Layers of delicate almond sponge soaked in aromatic espresso syrup, dark Belgian chocolate ganache, and light French buttercream.',
    image: '/images/gallery/d7-dulce-cake-slice.jpg',
    badge: 'Seasonal Creation',
    venue: 'Dulce Patisserie',
    category: 'Patisserie & Desserts',
    availability: 'Fresh Daily from the Display Counter',
    airmenusUrl: 'https://airmenus.in/district7/order/Dine-In/Seasonal%20Menu?sId=1216136',
    whatsappMessage: 'Hi Dulce, I would like to order / reserve the Belgian Dark Chocolate Opera Gateau.',
    isActive: true,
  },
  {
    id: 'special-smash-burger',
    title: 'Double Truffle Melt Burger',
    tagline: 'Smoked Cheddar, Brioche & Caramelized Onions',
    description: 'Dual smashed patties with crisp lace edges, aged cheddar melt, slow-caramelized onions, and black truffle aioli in a butter-toasted brioche bun.',
    image: '/images/gallery/d7-gourmet-burger.jpg',
    badge: 'Weekend Special',
    venue: 'Restro Cafe Vyttila',
    category: 'Pan-Asian & Bites',
    availability: 'Friday to Sunday • Open Till 3:00 AM',
    airmenusUrl: 'https://airmenus.in/district7/order/Dine-In/Seasonal%20Menu?sId=1216136',
    whatsappMessage: 'Hi District 7, inquiring about the Double Truffle Melt Burger special.',
    isActive: true,
  },
  {
    id: 'event-late-night-sessions',
    title: 'Midnight Gastronomy & Acoustic Evenings',
    tagline: 'Curated Tasting Platters & Ambient Sounds',
    description: 'Unwind under ambient lighting with handcrafted mocktails, artisanal tasting platters, and quiet acoustic melodies till 2 AM at our Kadavanthra hub.',
    image: '/images/gallery/d7-cocktails-table.jpg',
    badge: 'Special Event',
    venue: 'All Venues',
    category: 'Events & Popups',
    availability: 'Every Friday & Saturday Night',
    whatsappMessage: 'Hi District 7, I would like to reserve a table for Midnight Gastronomy & Acoustic Evenings.',
    isActive: true,
  },
];
