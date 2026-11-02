'use client';

import React, { useEffect, useRef, useState } from 'react';

export default function EditorialHistory() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="w-full bg-[#FAF8F5] border-t border-b border-neutral-200/70 py-28 relative"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Centered Headline with smooth fade-up */}
        <div
          className={`text-center max-w-2xl mx-auto mb-16 space-y-3 transition-all duration-700 ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <span className="text-[11px] uppercase tracking-[0.3em] font-semibold text-neutral-400 block">
            Chapter 01 • Heritage
          </span>
          <h2 className="font-playfair text-3xl sm:text-4xl lg:text-5xl text-neutral-900 font-normal">
            Our History
          </h2>
          <div className="w-12 h-px bg-neutral-300 mx-auto mt-4" />
        </div>

        {/* Main Two-Column Editorial Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Authentic Editorial Paragraphs with Staggered Fade-Up */}
          <div className="lg:col-span-7 space-y-8">
            {/* Paragraph 1: Food Truck */}
            <p
              className={`text-neutral-700 text-base sm:text-lg leading-relaxed font-light transition-all duration-700 ease-out delay-100 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
            >
              Food has always been the dream and the end game. Being major epicureans, the team at District 7 started their venture from a quirky food truck at Panampilly Nagar in 2014 as a mere experiment. Quickly becoming a well touted and widely featured food truck in Kochi with its extremely popular burgers and wraps lent them the confidence to expand into the café and restaurant models.
            </p>

            {/* Paragraph 2: Restro-Café */}
            <p
              className={`text-neutral-700 text-base sm:text-lg leading-relaxed font-light transition-all duration-700 ease-out delay-200 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
            >
              The resto-café launched in 2017 and was modeled to create a fun and chic space for guests to hang out, play games and relax till late night. With Kochi having very few late night spots, this feature quickly caught on with its young crowd and the café is now very well known for its super loaded cheesy fries, steaks and burgers. The restrocafe is now setting up to open new branches in other cities as well.
            </p>

            {/* Paragraph 3: Encore & Expansion */}
            <p
              className={`text-neutral-700 text-base sm:text-lg leading-relaxed font-light transition-all duration-700 ease-out delay-300 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
            >
              District 7 Encore – With fewer restaurants experimenting with fusion, molecular gastronomy and international flavors, the team at District 7 was inspired by a deep desire to bring forth exceptional multi cuisine and essence to Kerala. Thus was born – Encore in 2022, a swanky and premium standalone restaurant with bespoke interiors, genteel service and a highly curated menu showcasing South East Asian, Mediterranean and European cuisine.
            </p>
          </div>

          {/* Right Column: The District 7 Promise Card on Crisp White Background */}
          <div
            className={`lg:col-span-5 transition-all duration-700 ease-out delay-200 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          >
            <div className="bg-white p-6 sm:p-10 border border-neutral-200/80 rounded-2xl space-y-5 sm:space-y-6 shadow-sm hover:shadow-md transition-all duration-300">
              <span className="text-[10px] uppercase tracking-[0.3em] font-semibold text-neutral-400 block">
                The District 7 Promise
              </span>

              <p className="font-playfair text-lg sm:text-2xl text-neutral-900 leading-snug font-normal italic">
                &ldquo;We offer the best dining experience in town with our delicious and diverse menu options. Come and enjoy our cozy and elegant ambiance with your loved ones. We are committed to providing exceptional service and great food, making your visit unforgettable.&rdquo;
              </p>

              <div className="pt-3 sm:pt-4 border-t border-neutral-200 space-y-3">
                <a
                  href="tel:+917736030777"
                  className="btn-primary w-full text-center block py-3 text-xs sm:text-sm"
                >
                  Reserve Now
                </a>
                <span className="block text-center text-xs text-neutral-500 font-light">
                  Direct Line: +91 7736 030 777
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Heritage Key Metrics Bar */}
        <div
          className={`mt-14 sm:mt-20 pt-8 sm:pt-10 border-t border-neutral-200/80 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 text-center transition-all duration-700 ease-out delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <div className="group p-3 rounded-xl bg-white/60 sm:bg-transparent border sm:border-0 border-neutral-200/60 transition-transform duration-300 hover:-translate-y-0.5">
            <span className="font-playfair text-2xl sm:text-4xl text-neutral-900 font-normal">2014</span>
            <p className="text-[10px] sm:text-[11px] uppercase tracking-[0.15em] sm:tracking-[0.2em] text-neutral-400 font-medium mt-1">Est. In Kochi</p>
          </div>
          <div className="group p-3 rounded-xl bg-white/60 sm:bg-transparent border sm:border-0 border-neutral-200/60 transition-transform duration-300 hover:-translate-y-0.5">
            <span className="font-playfair text-2xl sm:text-4xl text-neutral-900 font-normal">3</span>
            <p className="text-[10px] sm:text-[11px] uppercase tracking-[0.15em] sm:tracking-[0.2em] text-neutral-400 font-medium mt-1">Unique Concepts</p>
          </div>
          <div className="group p-3 rounded-xl bg-white/60 sm:bg-transparent border sm:border-0 border-neutral-200/60 transition-transform duration-300 hover:-translate-y-0.5">
            <span className="font-playfair text-2xl sm:text-4xl text-neutral-900 font-normal">2 &amp; 3 AM</span>
            <p className="text-[10px] sm:text-[11px] uppercase tracking-[0.15em] sm:tracking-[0.2em] text-neutral-400 font-medium mt-1">Late Night Dining</p>
          </div>
          <div className="group p-3 rounded-xl bg-white/60 sm:bg-transparent border sm:border-0 border-neutral-200/60 transition-transform duration-300 hover:-translate-y-0.5">
            <span className="font-playfair text-2xl sm:text-4xl text-neutral-900 font-normal">10+</span>
            <p className="text-[10px] sm:text-[11px] uppercase tracking-[0.15em] sm:tracking-[0.2em] text-neutral-400 font-medium mt-1">Years of Craft</p>
          </div>
        </div>
      </div>
    </section>
  );
}

