export interface SpecialItem {
  id: string;
  title: string;
  tagline: string;
  description: string;
  image: string;
  badge?: 'Chef’s Special' | 'Limited Edition' | 'Weekend Special' | 'Special Event' | 'Exclusive Offer' | 'Seasonal Creation';
  venue: 'All Venues' | 'Encore Kadavanthra' | 'Restro Cafe Vyttila' | 'Dulce Patisserie';
  category: 'Events' | 'Special Dishes' | 'Offers' | 'Limited Items';
  availability: string;
  featured?: boolean;
  airmenusUrl?: string;
  whatsappMessage?: string;
  isActive: boolean;
}

// All placeholder dishes removed. Ready for new events, special dishes, offers & limited items.
export const SPECIALS_DATA: SpecialItem[] = [];
