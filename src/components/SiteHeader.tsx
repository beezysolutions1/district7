'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, ArrowUpRight } from 'lucide-react';

export default function SiteHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { label: 'Home', href: '/' },
    { label: 'Encore', href: '/encore' },
    { label: 'Restro Cafe', href: '/restro-cafe-1' },
    { label: 'Dulce', href: '/dulce-1' },
    { label: 'Consultancy', href: '/consultancy' },
    { label: 'Education', href: '/education' },
    { label: 'Career', href: '/career' },
  ];

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/';
    return (
      pathname.startsWith(href) ||
      (href === '/restro-cafe-1' && pathname === '/restro-cafe') ||
      (href === '/dulce-1' && pathname === '/dulce')
    );
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      {/* Main Navigation Bar — Transparent Over Hero, Clean White On Scroll */}
      <div
        className={`w-full transition-all duration-300 ${
          scrolled
            ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-neutral-200 py-3.5'
            : 'bg-gradient-to-b from-black/85 via-black/40 to-transparent py-5 border-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Brand Typographic Identity */}
            <Link
              href="/"
              className="flex items-center group select-none py-1"
              aria-label="District 7 Home"
            >
              <span
                className={`font-playfair text-xl sm:text-2xl font-normal tracking-wider transition-colors duration-200 ${
                  scrolled ? 'text-neutral-900 group-hover:text-black' : 'text-white group-hover:text-neutral-200'
                }`}
              >
                District 7
              </span>
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center space-x-8 text-[13px] font-medium tracking-[0.08em] uppercase">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`transition-all duration-200 relative py-1 ${
                    scrolled
                      ? isActive(link.href)
                        ? 'text-neutral-900 font-semibold'
                        : 'text-neutral-500 hover:text-neutral-900'
                      : isActive(link.href)
                      ? 'text-white font-semibold'
                      : 'text-white/80 hover:text-white'
                  }`}
                >
                  {link.label}
                  {isActive(link.href) && (
                    <span
                      className={`absolute bottom-0 left-0 right-0 h-[1.5px] rounded-full ${
                        scrolled ? 'bg-neutral-900' : 'bg-white'
                      }`}
                    />
                  )}
                </Link>
              ))}
            </nav>

            {/* Quick Action Button */}
            <div className="hidden sm:flex items-center space-x-3">
              <a
                href="https://wa.me/917736030777"
                target="_blank"
                rel="noopener noreferrer"
                className={`text-[11px] font-medium tracking-[0.15em] uppercase px-5 py-2.5 rounded-full border transition-all duration-200 flex items-center space-x-1.5 ${
                  scrolled
                    ? 'border-neutral-900 text-neutral-900 hover:bg-neutral-900 hover:text-white'
                    : 'border-white/80 text-white hover:bg-white hover:text-neutral-950 backdrop-blur-xs'
                }`}
              >
                <span>WhatsApp Us</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Mobile Hamburger Button */}
            <div className="lg:hidden flex items-center space-x-2">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className={`p-2 focus:outline-none transition-colors ${
                  scrolled ? 'text-neutral-800 hover:text-black' : 'text-white hover:text-neutral-200'
                }`}
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Menu Dropdown & Backdrop */}
          {mobileMenuOpen && (
            <>
              {/* Tap-outside Backdrop */}
              <div
                className="fixed inset-0 top-[72px] bg-black/60 backdrop-blur-xs -z-10 lg:hidden"
                onClick={() => setMobileMenuOpen(false)}
                aria-hidden="true"
              />

              {/* Mobile Drawer Panel */}
              <div className="lg:hidden mt-3 max-h-[calc(100vh-90px)] overflow-y-auto space-y-2 bg-neutral-950/98 backdrop-blur-xl rounded-2xl p-5 text-white border border-white/10 shadow-2xl animate-fadeIn">
                <nav className="space-y-1">
                  {navLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`flex items-center min-h-[44px] px-3.5 py-2.5 rounded-xl text-sm tracking-[0.1em] uppercase transition-colors ${
                        isActive(link.href)
                          ? 'text-white font-bold bg-white/15 border-l-2 border-white'
                          : 'text-neutral-300 hover:text-white hover:bg-white/10'
                      }`}
                    >
                      {link.label}
                    </Link>
                  ))}
                </nav>

                <div className="pt-4 border-t border-white/10">
                  <a
                    href="https://wa.me/917736030777"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center space-x-2 w-full min-h-[46px] py-3 bg-white hover:bg-neutral-100 text-neutral-950 rounded-full text-xs uppercase tracking-widest font-semibold transition-all active:scale-[0.98]"
                  >
                    <span>Message on WhatsApp</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </header>
  );
}
