"use client";

import { brandData } from "@/data/brand";

export function StoreFindUs() {
  return (
    <section className="py-16 md:py-20 bg-[#FAF3EB] text-[#30251F] relative border-t border-[#E5C378]/25" id="find-us">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="bg-[#FFFFFF] rounded-3xl border border-[#E5C378]/40 p-8 sm:p-12 lg:p-14 shadow-xl flex flex-col md:flex-row items-center justify-between gap-8 sm:gap-12 relative overflow-hidden">
          {/* Subtle gold ambient corner glow */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-bl from-[#E5C378]/15 to-transparent rounded-full blur-2xl pointer-events-none"></div>

          {/* LEFT: STORE ADDRESS & DETAILS */}
          <div className="md:w-3/5 relative z-10">
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="w-6 h-px bg-[#D4AF37]"></span>
              <span className="text-[11px] font-bold tracking-[0.24em] text-[#A41A50] uppercase">
                PHYSICAL STORE ADDRESS
              </span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#30251F] mb-4">
              FIND US IN<br />
              <span className="italic font-normal text-[#A41A50]">SHADNAGAR.</span>
            </h2>

            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 rounded-2xl bg-[#FAF3EB] border border-[#E5C378]/60 flex items-center justify-center text-[#A41A50] shrink-0 mt-1 shadow-sm">
                <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/>
                  <circle cx="12" cy="9" r="2.5"/>
                </svg>
              </div>

              <div>
                <h3 className="font-serif text-2xl font-bold text-[#30251F] tracking-wide mb-1">
                  KAMAL SELECTIONS
                </h3>
                <p className="text-base text-[#51443B] leading-relaxed">
                  Ibrahim Complex, Main Road<br />
                  Shadnagar, Telangana — 509216
                </p>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-[#69564A] leading-relaxed">
              Located on Main Road inside Ibrahim Complex, easily accessible for local shoppers and visiting families from neighbouring villages.
            </p>
          </div>

          {/* RIGHT: PROMINENT CTA PANEL */}
          <div className="md:w-2/5 w-full relative z-10">
            <div className="p-6 sm:p-8 rounded-2xl bg-[#FAF3EB] border border-[#E5C378]/50 shadow-inner text-center">
              <span className="text-[10px] font-bold text-[#A41A50] tracking-[0.2em] uppercase block mb-2">
                PLAN YOUR VISIT
              </span>

              <h4 className="font-serif text-xl font-bold text-[#30251F] mb-2">
                Easy Directions
              </h4>

              <p className="text-xs text-[#69564A] leading-relaxed mb-6">
                Open in your phone&apos;s map app for turn-by-turn navigation directly to our doorstep.
              </p>

              <a
                href={brandData.maps.directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary btn-pill w-full justify-center shadow-lg"
                id="find-us-directions-btn"
              >
                <span>Get Directions</span>
                <span aria-hidden="true" className="btn-arrow">→</span>
              </a>

              <a
                href={`tel:${brandData.phone}`}
                className="mt-3 inline-block text-xs font-semibold text-[#A41A50] hover:underline"
              >
                Need directions? Call {brandData.phone}
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
