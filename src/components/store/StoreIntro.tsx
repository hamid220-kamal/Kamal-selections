"use client";

import Link from "next/link";
import { brandData } from "@/data/brand";

export function StoreIntro() {
  return (
    <section className="py-20 md:py-28 bg-[#FAF3EB] text-[#30251F] relative overflow-hidden" id="store-details">
      {/* AMBIENT GLOW */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-[#E5C378]/15 via-transparent to-transparent rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* LEFT: EDITORIAL COPY (6 COLS) */}
          <div className="lg:col-span-6">
            {/* EYEBROW */}
            <div className="inline-flex items-center gap-3 mb-4">
              <span className="w-8 h-px bg-[#D4AF37]"></span>
              <span className="text-xs font-semibold tracking-[0.24em] text-[#A41A50] uppercase">
                THE KAMAL SELECTIONS STORE
              </span>
            </div>

            {/* HEADING */}
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#30251F] leading-[1.15] mb-6">
              WHERE STYLE<br />
              <span className="italic font-normal text-[#A41A50]">MEETS REAL LIFE.</span>
            </h2>

            {/* SUPPORTING TEXT */}
            <p className="text-base sm:text-lg text-[#51443B] leading-relaxed mb-6">
              Step inside Kamal Selections and explore women&apos;s and kids&apos; fashion in person — see the colours, feel the fabrics and choose what feels right for you.
            </p>

            {/* SCRIPT ACCENT */}
            <p className="font-script text-3xl sm:text-4xl text-[#A41A50] mb-8">
              A warm welcome on Main Road.
            </p>

            {/* HIGHLIGHT PILL BADGES */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6 border-t border-[#E5C378]/35 mb-8">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#FFFFFF] border border-[#E5C378]/50 flex items-center justify-center text-[#A41A50] shrink-0 shadow-sm">
                  <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/>
                    <circle cx="12" cy="9" r="2.5"/>
                  </svg>
                </div>
                <div>
                  <h4 className="text-xs font-bold text-[#30251F] uppercase tracking-wider">Ibrahim Complex</h4>
                  <p className="text-xs text-[#69564A]">Main Road, Shadnagar</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#FFFFFF] border border-[#E5C378]/50 flex items-center justify-center text-[#A41A50] shrink-0 shadow-sm">
                  <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10"/>
                    <polyline points="12 6 12 12 16 14"/>
                  </svg>
                </div>
                <div>
                  <h4 className="text-xs font-bold text-[#30251F] uppercase tracking-wider">{brandData.hours.daysOpen}</h4>
                  <p className="text-xs text-[#69564A]">{brandData.hours.displayHours}</p>
                </div>
              </div>
            </div>

            {/* DIRECT ACTION BUTTONS */}
            <div className="flex flex-wrap items-center gap-4">
              <a
                href={brandData.maps.directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary btn-pill"
                id="store-intro-directions-btn"
              >
                <span>Get Directions</span>
                <span aria-hidden="true" className="btn-arrow">→</span>
              </a>

              <a
                href={`tel:${brandData.phone}`}
                className="btn btn-outline btn-pill"
                id="store-intro-call-btn"
              >
                <span>Call Store</span>
                <span aria-hidden="true" className="btn-arrow">→</span>
              </a>
            </div>
          </div>

          {/* RIGHT: AUTHENTIC STOREFRONT SIGNAGE IMAGE (6 COLS) */}
          <div className="lg:col-span-6 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Outer Decorative Gold Offset Border */}
              <div className="absolute -left-3 -top-3 sm:-left-4 sm:-top-4 w-full h-full border border-[#D4AF37]/50 rounded-3xl pointer-events-none" aria-hidden="true" />
              
              {/* Image Container */}
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border border-[#E5C378]/40 bg-[#D8CEC1]">
                <img
                  src="/images/store/kamal-selections-boutique-exterior-shadnagar.jpg"
                  alt="Kamal Selections boutique exterior and entrance welcoming shoppers in Shadnagar"
                  className="w-full h-full object-cover object-[center_26%] transform hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#20040A]/60 via-transparent to-transparent"></div>

                {/* In-Store Badge */}
                <div className="absolute top-4 left-4 z-10">
                  <span className="px-3.5 py-1 rounded-full bg-[#20040A]/80 border border-[#D4AF37]/50 text-[#F8E5BA] text-[10px] font-bold tracking-[0.2em] uppercase backdrop-blur-md shadow-md">
                    STOREFRONT &amp; SIGNAGE
                  </span>
                </div>

                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs text-[#FAF3EB] bg-[#20040A]/70 backdrop-blur-md px-4 py-2.5 rounded-xl border border-[#E5C378]/30">
                  <span className="font-semibold uppercase tracking-wider">Ibrahim Complex</span>
                  <span>Main Road, Shadnagar</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
