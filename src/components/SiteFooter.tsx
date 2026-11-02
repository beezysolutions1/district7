import React from 'react';
import Link from 'next/link';
import { Phone, Mail, MapPin, Clock, ArrowUpRight, Instagram } from 'lucide-react';

export default function SiteFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-[#111111] text-neutral-300 border-t border-neutral-800 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-14 border-b border-neutral-800/80">
          {/* Column 1: Brand & Ethos (4 Columns) */}
          <div className="lg:col-span-4 space-y-4">
            <Link href="/" className="inline-block group">
              <span className="font-playfair text-2xl sm:text-3xl text-white font-normal tracking-wide">
                District 7
              </span>
              <span className="block text-xs uppercase tracking-[0.25em] text-neutral-400 font-light mt-1">
                Kochi, Kerala • Est. 2014
              </span>
            </Link>

            <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed font-light max-w-sm">
              From our quirky food truck in 2014 to multi-cuisine dining, Pan-Asian delicacies, signature steaks, and French haute patisserie. Welcoming guests late night in Kadavanthra and Vyttila.
            </p>

            {/* Social Media Link */}
            <div className="pt-2">
              <a
                href="https://www.instagram.com/district7kochi"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 text-xs text-neutral-300 hover:text-white transition-colors"
                aria-label="District 7 on Instagram"
              >
                <Instagram className="w-4 h-4 text-neutral-400" />
                <span>@district7kochi on Instagram</span>
                <ArrowUpRight className="w-3 h-3 text-neutral-500" />
              </a>
            </div>
          </div>

          {/* Column 2: Restaurants & Bakes (3 Columns) */}
          <div className="lg:col-span-3 space-y-4">
            <span className="text-xs uppercase tracking-[0.2em] font-medium text-neutral-400 block">
              Restaurants &amp; Menus
            </span>
            <ul className="space-y-2.5 text-xs sm:text-sm font-light text-neutral-300">
              <li>
                <Link href="/encore" className="hover:text-white transition-colors block py-0.5">
                  District 7 Encore
                </Link>
              </li>
              <li>
                <Link href="/restro-cafe-1" className="hover:text-white transition-colors block py-0.5">
                  District 7 Restro Cafe
                </Link>
              </li>
              <li>
                <Link href="/dulce-1" className="hover:text-white transition-colors block py-0.5">
                  District 7 Dulce Patisserie
                </Link>
              </li>
              <li className="pt-1">
                <a
                  href="https://img1.wsimg.com/blobby/go/351c4fe6-4561-484e-b03d-17791075b6bf/Website%20purpose%20Sept%2012%202024%20ENCORE%20MENU.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neutral-400 hover:text-white transition-colors inline-flex items-center space-x-1"
                >
                  <span>Encore Carte (PDF)</span>
                  <ArrowUpRight className="w-3 h-3 text-neutral-500" />
                </a>
              </li>
              <li>
                <a
                  href="https://img1.wsimg.com/blobby/go/351c4fe6-4561-484e-b03d-17791075b6bf/Dulce%20Cake%20Menu%202025.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neutral-400 hover:text-white transition-colors inline-flex items-center space-x-1"
                >
                  <span>Dulce Cake Menu (PDF)</span>
                  <ArrowUpRight className="w-3 h-3 text-neutral-500" />
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Company (2 Columns) */}
          <div className="lg:col-span-2 space-y-4">
            <span className="text-xs uppercase tracking-[0.2em] font-medium text-neutral-400 block">
              Company
            </span>
            <ul className="space-y-2.5 text-xs sm:text-sm font-light text-neutral-300">
              <li>
                <Link href="/" className="hover:text-white transition-colors block py-0.5">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/consultancy" className="hover:text-white transition-colors block py-0.5">
                  Consultancy
                </Link>
              </li>
              <li>
                <Link href="/education" className="hover:text-white transition-colors block py-0.5">
                  Education
                </Link>
              </li>
              <li>
                <Link href="/career" className="hover:text-white transition-colors block py-0.5">
                  Careers
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Locations & Reservations (3 Columns) */}
          <div className="lg:col-span-3 space-y-4">
            <span className="text-xs uppercase tracking-[0.2em] font-medium text-neutral-400 block">
              Locations &amp; Contact
            </span>

            {/* Kadavanthra */}
            <div className="space-y-1 text-xs">
              <p className="text-white font-medium">Kadavanthra Hub (Encore &amp; Dulce)</p>
              <p className="text-neutral-400 font-light">
                Ozone Greens, Jawahar Nagar, Kadavanthra, Kochi 682020
              </p>
              <p className="text-neutral-400 font-light">Open Daily: 12:00 PM – 2:00 AM</p>
            </div>

            {/* Vyttila */}
            <div className="space-y-1 text-xs pt-1">
              <p className="text-white font-medium">Vyttila Hub (Restro Cafe)</p>
              <p className="text-neutral-400 font-light">
                Vyttila, Ernakulam, Kochi 682019
              </p>
              <p className="text-neutral-400 font-light">Open Daily: 12:00 PM – 3:00 AM</p>
            </div>

            {/* Direct Contacts */}
            <div className="pt-2 space-y-1.5 text-xs font-light">
              <div>
                <a href="tel:+917736030777" className="text-white hover:text-neutral-300 transition-colors font-medium">
                  +91 7736 030 777
                </a>
              </div>
              <div>
                <a href="mailto:encore@d7ventures.com" className="text-neutral-400 hover:text-white transition-colors">
                  encore@d7ventures.com
                </a>
              </div>
              <div className="pt-1">
                <a
                  href="https://wa.me/917736030777"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-emerald-400 hover:text-emerald-300 transition-colors inline-flex items-center space-x-1"
                >
                  <span>Message on WhatsApp</span>
                  <ArrowUpRight className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-neutral-500 gap-3 font-light text-center sm:text-left">
          <div>
            © {currentYear} District 7 Hospitality Ventures (d7ventures.com). All rights reserved.
          </div>
          <div className="flex items-center space-x-2 text-neutral-500">
            <span>Kochi, Kerala</span>
            <span>•</span>
            <a
              href="https://www.beezysolutions.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-400 hover:text-white transition-colors inline-flex items-center space-x-1"
            >
              <span>Developed by BeezySolutions</span>
              <ArrowUpRight className="w-3 h-3 text-neutral-500" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
