'use client';

import React, { useState } from 'react';
import SiteHeader from '../../components/SiteHeader';
import SiteFooter from '../../components/SiteFooter';
import {
  CheckCircle2,
  ArrowUpRight,
  Compass,
  Utensils,
  Layers,
  Building2,
  DollarSign,
  MonitorCheck,
  Scale,
  Users,
  Palette,
  TrendingUp,
  MessageSquare,
  Clock,
  ShieldCheck,
} from 'lucide-react';

export default function ConsultancyPage() {
  const [activeCategoryIndex, setActiveCategoryIndex] = useState(0);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const messageInfo = formData.message ? ` | Message: ${formData.message}` : '';
    const text = `Hello D7 Consultancy! Name: ${formData.name}, Phone: ${formData.phone}, Email: ${formData.email}${messageInfo}. I would like to post an advisory query regarding your hospitality consultancy services.`;

    window.open(`https://wa.me/917736030777?text=${encodeURIComponent(text)}`, '_blank');
    setSubmitted(true);
  };

  const coreCompetencies = [
    { title: 'Full Business Set-ups', desc: 'Turnkey concept formulation, kitchen layout, and complete store launch.' },
    { title: 'Audit & Operating SOPs', desc: 'Comprehensive operational audits, hygiene standards, and service manuals.' },
    { title: 'Kitchen & Bar Execution', desc: 'Commercial equipment procurement, ventilation, and MEP coordination.' },
    { title: 'Menu R&D & Costing', desc: 'Culinary research, recipe engineering, plate assembly, and food costing.' },
    { title: 'Recruitment & Staffing', desc: 'Talent hiring, service training, roster management, and floor standards.' },
    { title: 'Financial Feasibility', desc: 'Budgeting, break-even forecasts, and ongoing P&L profitability control.' },
    { title: 'Brand Identity & Design', desc: 'Concept book, logos, packaging, architectural styling, and marketing.' },
    { title: 'Technology & POS Systems', desc: 'Cloud POS setups, kitchen display systems, and automated accounting.' },
  ];

  const serviceCategories = [
    {
      index: '01',
      title: 'Restaurant Design, Theme & Decor',
      icon: Palette,
      items: [
        'Restaurant Design Theme and Décor Creation',
        'Complete Exterior Restaurant Façade, Design or Upgrade',
        'Architectural and Interior Design Planning',
        'Mechanical, Electrical & Plumbing (MEP) Requirements',
        'Conceptual 3D Color Renderings (Interior & Exterior)',
        'Food Service Layout and Spatial Planning',
        'Material Sample Selection, Finish Schedule & Color Boards',
        'Uniform Design and Ambient Styling',
        'Complete Coordination of Architectural Drawings',
      ],
    },
    {
      index: '02',
      title: 'Branding & Brand Development',
      icon: Compass,
      items: [
        'Comprehensive Marketing & Positioning Advice',
        'Brand Identity (Logos, Color Palette, Typography, Signage)',
        'Brand Strategy (Positioning, Brand Story, Naming Systems)',
        'Brand Experience (Website, Collateral, Guest Journey)',
        'Concept Book, Architectural Concept Creation & Presentation',
        'Menu Design, Product Packaging, and Stationery Design',
        'Digital Marketing (Local Business Listings, Social Pages, Content)',
        'Specialty Merchandising & Launch Promotions Development',
      ],
    },
    {
      index: '03',
      title: 'Kitchen Space Management',
      icon: Utensils,
      items: [
        'Commercial Kitchen Equipment Fabrication',
        'Equipment Selection, Sourcing and Procurement',
        'Kitchen Extraction, Chimney & Ventilation Systems',
        'Commercial Hoods, Coolers and Walk-in Freezers',
        'Electricals, Gas Line Connections, Plumbing & Drainage',
        'Wall Paneling, False Ceiling & Non-Slip Flooring',
        'Chef’s Prep Counters and Beverage Stations',
        'Commercial Fire Suppression Systems',
      ],
    },
    {
      index: '04',
      title: 'Dine-In Space Management',
      icon: Building2,
      items: [
        'Cashier & Reception Counter Fabrication',
        'Ambient Lighting, Décor Accents and Guest Displays',
        'Centralized and Split Air Conditioning Coordination',
        'Guest Restroom Design, Plumbing and Sanitation',
        'Fixtures, Furnishings & Equipment (FF&E) Specifications',
        'Selection and Procurement of Smallwares & Tableware',
        'Odor Control, Air Quality & Acoustical Management',
      ],
    },
    {
      index: '05',
      title: 'Menu Research & Development',
      icon: Layers,
      items: [
        'Culinary Concept, Menu and Recipe Development',
        'Food Tasting & Recipe Prep Documentation',
        'Vendor Selection and Raw Material Sourcing',
        'Menu Engineering, Pricing & Portion Optimization',
        'Plateware, Glassware and Cutlery Selection',
        'Food Waste Control and Inventory Optimization',
        'Take-out and Delivery Packaging Recommendations',
      ],
    },
    {
      index: '06',
      title: 'Employee Optimization & Management',
      icon: Users,
      items: [
        'Leadership & Kitchen Team Recruitment',
        'Comprehensive Service & Kitchen Staff Training',
        'Rosters, Shift Schedules & Labor Optimization',
        'Standardized Employee Training Manuals',
        'Detailed Job Description & Metric Drafting',
        'Food Sanitation, Hygiene & Safety Compliance',
        'Quality Control Protocols (Food, Beverage & Hospitality)',
      ],
    },
    {
      index: '07',
      title: 'Financial Advisory & Controls',
      icon: DollarSign,
      items: [
        'Initial Project Feasibility Studies & Break-even Analysis',
        'Budget Creation, Capital Expenditure & Cashflow Management',
        'Food & Beverage Cost Control Systems',
        'Sales Reporting & Daily Operational Audits',
        'Profit & Loss (P&L) Statement Structuring',
        'Revenue Forecasting & Balance Sheet Oversight',
      ],
    },
    {
      index: '08',
      title: 'Restaurant Technology & Systems',
      icon: MonitorCheck,
      items: [
        'Cloud Point of Sale Systems (POS) Integration',
        'Kitchen Display Systems (KDS) & Order Automation',
        'Accounting, Inventory & Payroll Software Setup',
        'High-Speed Guest-Accessible Wi-Fi Networks',
        'Multi-Zone Background Music & Acoustic Sound Systems',
        'Security Cameras, Surveillance & Network Cable Infrastructure',
      ],
    },
    {
      index: '09',
      title: 'Legal, Licensing & Compliance',
      icon: Scale,
      items: [
        'FSSAI Food Safety Licensing & Compliance',
        'Corporation, Trade & Municipality Licenses Procurement',
        'Assistance with Licensing, Clearances & Regulatory Approvals',
        'Employee Health Certificates & Occupational Health Standards',
        'Brand Trademark Registration Guidance',
        'GST Registration and Commercial Tax Compliance',
      ],
    },
    {
      index: '10',
      title: 'Continued Advisory & Expansion',
      icon: TrendingUp,
      items: [
        'Ongoing Operational Audits & Mystery Dining Reports',
        'Sales Growth Strategies & Revenue Management',
        'Multi-Unit Expansion & Franchise Architecture',
        'Cost-Effective Scheduling & Labor Cost Optimization',
        'Continuous Menu Refreshment & Seasonal Culinary Launches',
        'Executive Management Coaching & Leadership Governance',
      ],
    },
  ];

  const activeCategory = serviceCategories[activeCategoryIndex];
  const ActiveIcon = activeCategory.icon;

  return (
    <div className="min-h-screen bg-white text-[#222222] flex flex-col font-sans selection:bg-neutral-900 selection:text-white">
      <SiteHeader />

      <main className="flex-1">
        {/* Editorial Hero Banner */}
        <section className="relative w-full bg-[#111111] text-white overflow-hidden">
          <div className="relative h-[55vh] min-h-[420px] w-full flex items-center justify-center">
            <img
              src="https://img1.wsimg.com/isteam/ip/351c4fe6-4561-484e-b03d-17791075b6bf/2022-12-01.jpg"
              alt="D7 Ventures Hospitality Consultancy & Architecture"
              className="absolute inset-0 w-full h-full object-cover opacity-50 scale-100 hover:scale-105 transition-transform duration-1000 ease-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/45 to-black/60" />

            <div className="relative z-10 max-w-4xl mx-auto px-6 text-center space-y-4">
              <div className="inline-block border-y border-white/30 py-1.5 px-6 mb-1">
                <span className="text-[11px] uppercase tracking-[0.35em] text-neutral-200 font-light">
                  Hospitality Advisory • D7 Ventures
                </span>
              </div>

              <h1 className="font-playfair text-3xl sm:text-5xl lg:text-6xl font-normal tracking-tight text-white leading-[1.15]">
                Hospitality Consultancy Services
              </h1>

              <p className="text-neutral-300 text-sm sm:text-lg max-w-2xl mx-auto font-light leading-relaxed pt-1">
                Designing, planning, and executing multi-scale projects across restaurant, food service, and late-night dining destinations.
              </p>

              <div className="pt-3 flex flex-wrap justify-center gap-3">
                <a
                  href="#scopes"
                  className="inline-flex items-center space-x-2 bg-white/10 hover:bg-white/20 text-white backdrop-blur-sm border border-white/20 px-6 py-2.5 rounded-full text-xs font-medium tracking-wide transition-colors"
                >
                  <span>Explore Practice Areas</span>
                  <span>↓</span>
                </a>
                <a
                  href="#query-form"
                  className="inline-flex items-center space-x-2 bg-white text-neutral-950 hover:bg-neutral-100 px-6 py-2.5 rounded-full text-xs font-medium tracking-wide transition-colors shadow-sm"
                >
                  <span>Post a Query</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Foundation & Track Record (Warm Pinterest Editorial Aesthetic Background) */}
        <section className="relative w-full py-24 sm:py-32 overflow-hidden bg-[#FBF9F5] border-b border-stone-200/70">
          {/* Ambient Pinterest Architectural Canvas Layers */}
          {/* 1. Warm Golden Hour Sunlight Pools */}
          <div className="absolute -top-32 -right-32 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-amber-100/60 via-orange-50/25 to-transparent blur-3xl pointer-events-none" />
          <div className="absolute -bottom-32 -left-32 w-[550px] h-[550px] rounded-full bg-gradient-to-tr from-stone-200/40 via-amber-100/20 to-transparent blur-3xl pointer-events-none" />

          {/* 2. Top-down warm sun wash */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_100%_70%_at_50%_-10%,rgba(245,237,220,0.6),rgba(251,249,245,0.95))] pointer-events-none" />

          {/* 3. Soft Botanical Leaf Shadows (Signature Pinterest Editorial Aesthetic) */}
          <svg
            className="absolute -top-12 -right-12 w-96 h-96 text-stone-900/[0.045] pointer-events-none select-none blur-[2px] transform rotate-12"
            viewBox="0 0 400 400"
            fill="currentColor"
            aria-hidden="true"
          >
            <path d="M400,20 Q260,120 160,260 Q100,340 40,380" stroke="currentColor" strokeWidth="8" fill="none" strokeLinecap="round" />
            <path d="M340,65 C320,40 270,50 260,75 C250,100 290,110 320,95 Z" />
            <path d="M320,85 C330,60 370,45 390,65 C410,85 385,115 350,105 Z" />
            <path d="M270,125 C240,110 210,130 205,155 C200,180 235,185 260,165 Z" />
            <path d="M250,145 C270,120 305,115 320,135 C335,155 315,185 285,175 Z" />
            <path d="M200,195 C170,180 145,205 145,230 C145,255 175,255 195,235 Z" />
            <path d="M190,210 C210,190 240,190 250,210 C260,230 240,255 215,245 Z" />
            <path d="M140,270 C110,260 90,285 95,310 C100,335 130,330 145,305 Z" />
            <path d="M135,285 C155,265 180,270 185,290 C190,310 170,330 150,320 Z" />
            <path d="M85,340 C60,335 45,360 55,380 C65,400 95,395 100,370 Z" />
          </svg>

          <svg
            className="absolute -bottom-16 -left-16 w-[420px] h-[420px] text-stone-900/[0.04] pointer-events-none select-none blur-[2px] transform -rotate-45"
            viewBox="0 0 400 400"
            fill="currentColor"
            aria-hidden="true"
          >
            <path d="M0,380 Q140,280 240,140 Q300,60 360,20" stroke="currentColor" strokeWidth="8" fill="none" strokeLinecap="round" />
            <path d="M60,335 C80,360 130,350 140,325 C150,300 110,290 80,305 Z" />
            <path d="M80,315 C70,340 30,355 10,335 C-10,315 15,285 50,295 Z" />
            <path d="M130,275 C160,290 190,270 195,245 C200,220 165,215 140,235 Z" />
            <path d="M150,255 C130,280 95,285 80,265 C65,245 85,215 115,225 Z" />
            <path d="M200,205 C230,220 255,195 255,170 C255,145 225,145 205,165 Z" />
            <path d="M210,190 C190,210 160,210 150,190 C140,170 160,145 185,155 Z" />
            <path d="M260,130 C290,140 310,115 305,90 C300,65 270,70 255,95 Z" />
          </svg>

          {/* 4. Fine Tactile Linen / Plaster Micro-Grain Texture */}
          <div
            className="absolute inset-0 opacity-[0.035] pointer-events-none mix-blend-multiply"
            style={{
              backgroundImage:
                "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E\")",
            }}
          />

          {/* 5. Main Content Container */}
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
              <span className="text-[11px] uppercase tracking-[0.3em] font-medium text-stone-500 block">
                The Foundation
              </span>
              <h2 className="font-playfair text-3xl sm:text-4xl lg:text-5xl text-neutral-900 font-normal tracking-tight">
                Designing, Planning &amp; Executing Multi-Scale Projects
              </h2>
              <div className="w-12 h-px bg-stone-300 mx-auto" />
              <p className="text-stone-600 text-sm sm:text-base leading-relaxed font-light pt-2">
                With 5+ years of hands-on management and advisory leadership across restaurant, food service, and hospitality industries, D7 Ventures focuses on establishing and elevating brand value, operational consistency, and bottom-line profitability.
              </p>
            </div>

            {/* Core Competencies Grid (Clean Floating Ceramic Cards - The Classic Elegant Way) */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {coreCompetencies.map((comp, idx) => (
                <div
                  key={idx}
                  className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 space-y-2.5 border border-stone-200/90 shadow-[0_4px_20px_rgba(0,0,0,0.02)] hover:border-neutral-400 hover:shadow-[0_10px_24px_rgba(0,0,0,0.05)] hover:-translate-y-0.5 transition-all duration-300 select-none"
                >
                  <div className="text-[11px] font-mono font-medium text-stone-400">
                    {`0${idx + 1}`}
                  </div>
                  <h3 className="font-playfair text-lg text-neutral-900 font-normal">
                    {comp.title}
                  </h3>
                  <p className="text-stone-600 text-xs sm:text-sm leading-relaxed font-light">
                    {comp.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* Editorial Philosophy Statement */}
            <div className="mt-16 bg-white/90 backdrop-blur-md border border-stone-200/90 rounded-2xl p-8 sm:p-12 text-center max-w-4xl mx-auto space-y-4 shadow-[0_4px_24px_rgba(0,0,0,0.02)]">
              <p className="font-playfair text-xl sm:text-2xl text-neutral-900 font-normal leading-relaxed italic max-w-3xl mx-auto">
                &ldquo;We share our expertise in the hospitality business to help contemporary businesses build strong foundations, analyze untapped opportunities, and find decisive answers to the critical needs of every enterprise we collaborate with.&rdquo;
              </p>
              <div className="w-10 h-px bg-stone-300 mx-auto" />
              <p className="text-xs uppercase tracking-widest text-stone-500 font-medium">
                District 7 Advisory Leadership
              </p>
            </div>
          </div>
        </section>

        {/* Practice Areas: Interactive Split-Screen Explorer (Option 1) */}
        <section id="scopes" className="py-20 sm:py-28 bg-[#FAF9F6] border-y border-neutral-200/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
            <div className="text-center max-w-2xl mx-auto space-y-3">
              <span className="text-[11px] uppercase tracking-[0.3em] font-medium text-neutral-400 block">
                Practice Areas
              </span>
              <h2 className="font-playfair text-3xl sm:text-4xl text-neutral-900 font-normal tracking-tight">
                Our Advisory Scopes
              </h2>
              <div className="w-12 h-px bg-neutral-300 mx-auto" />
              <p className="text-neutral-600 text-sm sm:text-base leading-relaxed font-light">
                Select a practice area below to explore its comprehensive deliverables and operational scopes.
              </p>
            </div>

            {/* Mobile / Tablet Horizontal Carousel Selector */}
            <div className="flex lg:hidden overflow-x-auto pb-2 gap-2 -mx-4 px-4 scrollbar-none">
              {serviceCategories.map((cat, idx) => {
                const isActive = activeCategoryIndex === idx;
                return (
                  <button
                    key={cat.index}
                    onClick={() => setActiveCategoryIndex(idx)}
                    className={`whitespace-nowrap px-4 py-2.5 rounded-full text-xs font-medium tracking-wide transition-all shrink-0 flex items-center space-x-2 ${
                      isActive
                        ? 'bg-neutral-950 text-white shadow-sm'
                        : 'bg-white text-neutral-700 hover:bg-neutral-100 border border-neutral-200/80'
                    }`}
                  >
                    <span className="font-mono text-[10px] opacity-60">{cat.index}</span>
                    <span>{cat.title}</span>
                  </button>
                );
              })}
            </div>

            {/* Desktop Split-Screen Grid */}
            <div className="grid lg:grid-cols-12 gap-8 items-start">
              {/* Left Column: 10 Interactive Practice Tabs (Sticky on Desktop) */}
              <div className="hidden lg:flex lg:col-span-5 flex-col space-y-2 sticky top-28">
                {serviceCategories.map((cat, idx) => {
                  const isActive = activeCategoryIndex === idx;
                  return (
                    <button
                      key={cat.index}
                      onClick={() => setActiveCategoryIndex(idx)}
                      className={`w-full text-left p-4 rounded-xl transition-all duration-200 flex items-center justify-between group ${
                        isActive
                          ? 'bg-neutral-950 text-white shadow-md'
                          : 'bg-white hover:bg-neutral-100/80 text-neutral-800 border border-neutral-200/80'
                      }`}
                    >
                      <div className="flex items-center space-x-3.5 min-w-0">
                        <span
                          className={`text-xs font-mono font-medium transition-colors ${
                            isActive ? 'text-neutral-300' : 'text-neutral-400 group-hover:text-neutral-600'
                          }`}
                        >
                          {cat.index}
                        </span>
                        <span
                          className={`text-sm font-medium tracking-tight truncate transition-colors ${
                            isActive ? 'text-white' : 'text-neutral-800 group-hover:text-neutral-950'
                          }`}
                        >
                          {cat.title}
                        </span>
                      </div>
                      <ArrowUpRight
                        className={`w-4 h-4 transition-transform shrink-0 ${
                          isActive
                            ? 'text-white translate-x-0.5 -translate-y-0.5'
                            : 'text-neutral-400 opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5'
                        }`}
                      />
                    </button>
                  );
                })}
              </div>

              {/* Right Column: Detailed Interactive Showcase Card */}
              <div className="lg:col-span-7">
                <div
                  key={activeCategory.index}
                  className="bg-white border border-neutral-200/90 rounded-2xl p-7 sm:p-10 shadow-xl shadow-neutral-900/[0.03] space-y-8 animate-fadeIn"
                >
                  {/* Card Header */}
                  <div className="space-y-4 border-b border-neutral-100 pb-6">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3.5">
                        <div className="w-12 h-12 rounded-xl bg-neutral-50 border border-neutral-200 flex items-center justify-center text-neutral-900">
                          <ActiveIcon className="w-6 h-6 stroke-[1.5]" />
                        </div>
                        <div>
                          <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-neutral-400 block">
                            Practice Scope {activeCategory.index}
                          </span>
                          <h3 className="font-playfair text-2xl sm:text-3xl text-neutral-900 font-normal">
                            {activeCategory.title}
                          </h3>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Deliverables 2-Column Grid */}
                  <div className="space-y-3">
                    <span className="text-[11px] uppercase tracking-[0.2em] font-semibold text-neutral-400 block">
                      Scope &amp; Deliverables ({activeCategory.items.length} Modules)
                    </span>
                    <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-3.5 pt-1">
                      {activeCategory.items.map((item, itemIdx) => (
                        <li key={itemIdx} className="flex items-start space-x-2.5">
                          <span className="text-neutral-400 mt-1 select-none font-light">—</span>
                          <span className="text-xs sm:text-sm text-neutral-700 leading-relaxed font-light">
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Card Footer / Direct Consultation Link */}
                  <div className="pt-6 border-t border-neutral-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <p className="text-xs text-neutral-500 font-light">
                      Ready to execute this scope with our senior hospitality team?
                    </p>
                    <a
                      href="#query-form"
                      onClick={() => setFormData((prev) => ({ ...prev, service: activeCategory.title }))}
                      className="inline-flex items-center justify-center space-x-2 bg-neutral-950 text-white hover:bg-neutral-800 px-6 py-3 rounded-full text-xs font-medium uppercase tracking-[0.1em] transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] shrink-0 shadow-md shadow-neutral-950/10"
                    >
                      <span>Inquire About This Scope</span>
                      <ArrowUpRight className="w-3.5 h-3.5 text-neutral-400" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* POST AN ADVISORY QUERY - Refined Light Aesthetic with Ambient Light Animations */}
        <section id="query-form" className="relative w-full py-20 sm:py-28 bg-[#FBF9F5] border-t border-stone-200/80 overflow-hidden">
          {/* Custom Keyframes for Subtle Light Motion */}
          <style dangerouslySetInnerHTML={{ __html: `
            @keyframes lightDrift {
              0%, 100% { transform: translate(0, 0) scale(1); opacity: 0.55; }
              50% { transform: translate(15px, -15px) scale(1.08); opacity: 0.85; }
            }
            @keyframes lightSweep {
              0% { transform: translateX(-150%); }
              50%, 100% { transform: translateX(250%); }
            }
            @keyframes leafSway {
              0%, 100% { transform: rotate(0deg) scale(1); }
              50% { transform: rotate(1.5deg) scale(1.02); }
            }
          `}} />

          {/* 1. Ambient Sunbeam / Warm Caustic Light Aura (Breathing Light Behind Card) */}
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] sm:w-[850px] h-[550px] rounded-full pointer-events-none blur-3xl mix-blend-multiply"
            style={{
              background: "radial-gradient(circle, rgba(251, 191, 36, 0.22) 0%, rgba(245, 158, 11, 0.08) 45%, rgba(251, 249, 245, 0) 70%)",
              animation: "lightDrift 8s ease-in-out infinite",
            }}
          />

          {/* 2. Floating Luminous Light Orbs */}
          <div
            className="absolute -top-24 -right-24 w-80 h-80 rounded-full bg-gradient-to-br from-amber-200/35 via-orange-100/20 to-transparent blur-3xl pointer-events-none"
            style={{ animation: "lightDrift 10s ease-in-out infinite reverse" }}
          />
          <div
            className="absolute -bottom-24 -left-24 w-80 h-80 rounded-full bg-gradient-to-tr from-stone-300/30 via-amber-100/20 to-transparent blur-3xl pointer-events-none"
            style={{ animation: "lightDrift 9s ease-in-out infinite" }}
          />

          {/* 3. Subtle Swaying Botanical Shadows (Pinterest Komorebi Light & Shadow Play) */}
          <svg
            className="absolute -top-12 -left-12 w-80 h-80 text-stone-400/[0.07] pointer-events-none transform -rotate-12"
            viewBox="0 0 400 400"
            fill="currentColor"
            style={{ animation: "leafSway 14s ease-in-out infinite" }}
          >
            <path d="M120,40 C140,80 130,120 90,140 C50,160 30,130 40,90 C50,50 100,20 120,40 Z" />
            <path d="M180,90 C220,110 210,150 170,170 C130,190 110,160 120,120 C130,80 160,70 180,90 Z" />
            <path d="M210,190 C190,210 160,210 150,190 C140,170 160,145 185,155 Z" />
          </svg>

          {/* 4. Fine Tactile Micro-Grain Plaster Texture */}
          <div
            className="absolute inset-0 opacity-[0.035] pointer-events-none mix-blend-multiply"
            style={{
              backgroundImage:
                "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E\")",
            }}
          />

          {/* 5. Main Form Container */}
          <div className="relative z-10 max-w-2xl mx-auto px-4 sm:px-6">
            {/* Header */}
            <div className="text-center space-y-3 mb-10">
              <h2 className="font-playfair text-3xl sm:text-4xl text-neutral-900 font-normal tracking-tight">
                Post an Advisory Query
              </h2>
              <div className="w-12 h-px bg-stone-300 mx-auto" />
              <p className="text-stone-600 text-sm sm:text-base leading-relaxed font-light max-w-lg mx-auto">
                Please provide your details below.
              </p>
            </div>

            {/* Elevated Porcelain Form Card with Living Light Beam */}
            <div className="relative bg-white/90 backdrop-blur-md border border-stone-200/90 rounded-2xl p-7 sm:p-10 shadow-[0_20px_50px_rgba(0,0,0,0.04)] overflow-hidden">
              {/* Travelling Light Beam across the top border */}
              <div className="absolute top-0 left-0 right-0 h-[2px] overflow-hidden pointer-events-none">
                <div
                  className="w-1/2 h-full bg-gradient-to-r from-transparent via-amber-400/70 to-transparent"
                  style={{ animation: "lightSweep 6s ease-in-out infinite" }}
                />
              </div>

              {submitted ? (
                <div className="py-10 text-center space-y-4">
                  <div className="w-12 h-12 bg-neutral-900 text-white rounded-full flex items-center justify-center mx-auto shadow-md">
                    <CheckCircle2 className="w-6 h-6 stroke-[1.5]" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="font-playfair text-2xl text-neutral-900 font-normal">
                      Thank You
                    </h3>
                    <p className="text-stone-600 text-xs sm:text-sm font-light leading-relaxed max-w-sm mx-auto">
                      Your query has been transferred to WhatsApp chat with our consultancy team. We will connect with you shortly.
                    </p>
                  </div>
                  <div className="pt-2">
                    <button
                      type="button"
                      onClick={() => setSubmitted(false)}
                      className="text-xs uppercase tracking-wider font-semibold text-neutral-900 hover:text-stone-600 transition-colors"
                    >
                      Submit Another Query
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  {/* Row 1: Name & Phone */}
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="block text-[11px] font-mono uppercase tracking-wider text-stone-500">
                        Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Rajesh Kumar"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full bg-[#FAF9F6] border border-stone-200/90 rounded-xl px-4 py-3 text-base sm:text-sm text-neutral-900 placeholder:text-stone-400 focus:outline-none focus:border-neutral-900 focus:bg-white focus:ring-1 focus:ring-neutral-900/10 transition-all"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="block text-[11px] font-mono uppercase tracking-wider text-stone-500">
                        Phone *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="+91 98765 43210"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full bg-[#FAF9F6] border border-stone-200/90 rounded-xl px-4 py-3 text-base sm:text-sm text-neutral-900 placeholder:text-stone-400 focus:outline-none focus:border-neutral-900 focus:bg-white focus:ring-1 focus:ring-neutral-900/10 transition-all"
                      />
                    </div>
                  </div>

                  {/* Row 2: Email */}
                  <div className="space-y-1.5">
                    <label className="block text-[11px] font-mono uppercase tracking-wider text-stone-500">
                      Email *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="rajesh@enterprise.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-[#FAF9F6] border border-stone-200/90 rounded-xl px-4 py-3 text-base sm:text-sm text-neutral-900 placeholder:text-stone-400 focus:outline-none focus:border-neutral-900 focus:bg-white focus:ring-1 focus:ring-neutral-900/10 transition-all"
                    />
                  </div>

                  {/* Row 3: Message */}
                  <div className="space-y-1.5">
                    <label className="block text-[11px] font-mono uppercase tracking-wider text-stone-500">
                      Message
                    </label>
                    <textarea
                      rows={4}
                      placeholder="Please share details about your inquiry or project..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full bg-[#FAF9F6] border border-stone-200/90 rounded-xl px-4 py-3 text-base sm:text-sm text-neutral-900 placeholder:text-stone-400 focus:outline-none focus:border-neutral-900 focus:bg-white focus:ring-1 focus:ring-neutral-900/10 transition-all resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full inline-flex items-center justify-center space-x-2 bg-neutral-950 text-white hover:bg-neutral-800 py-3.5 px-8 rounded-full text-xs font-semibold uppercase tracking-[0.14em] transition-all duration-300 hover:scale-[1.01] active:scale-[0.99] shadow-md shadow-neutral-950/10"
                    >
                      <span>Submit Query</span>
                      <ArrowUpRight className="w-3.5 h-3.5 text-stone-400" />
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
