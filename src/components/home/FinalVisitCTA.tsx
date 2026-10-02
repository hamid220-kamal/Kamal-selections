"use client";

import Image from "next/image";
import { brandData } from "@/data/brand";

export function FinalVisitCTA() {
  return (
    <section className="relative py-16 sm:py-24 md:py-28 bg-[#380511] text-[#FAF5EB] overflow-hidden" id="visit-us">
      {/* BACKGROUND EDITORIAL CAMPAIGN PHOTO & DEEP BURGUNDY OVERLAY */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <Image
          src="/images/home/kamal-selections-in-store-experience-banner.jpg"
          alt="Visit Kamal Selections Showroom at Ibrahim Complex, Main Road, Shadnagar"
          fill
          className="object-cover object-center opacity-30"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#20040A]/90 via-[#380511]/95 to-[#20040A]/90" />
      </div>

      {/* AMBIENT GLOW ACCENTS */}
      <div className="absolute top-0 right-0 w-[28rem] h-[28rem] bg-gradient-to-bl from-[#E5C378]/15 via-[#A41A50]/20 to-transparent rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[24rem] h-[24rem] bg-gradient-to-tr from-[#A41A50]/25 via-transparent to-transparent rounded-full blur-3xl pointer-events-none" />

      {/* CENTER CONTENT CONTAINER WITH RESPONSIVE GOLD BORDER FRAME */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="relative rounded-3xl border border-[#E5C378]/40 bg-[#20040A]/70 backdrop-blur-md p-6 sm:p-10 md:p-14 text-center shadow-2xl overflow-hidden">
          
          {/* DECORATIVE CORNER ACCENTS */}
          <div className="absolute top-3 left-3 w-4 h-4 border-t-2 border-l-2 border-[#E5C378]/60 rounded-tl pointer-events-none" />
          <div className="absolute top-3 right-3 w-4 h-4 border-t-2 border-r-2 border-[#E5C378]/60 rounded-tr pointer-events-none" />
          <div className="absolute bottom-3 left-3 w-4 h-4 border-b-2 border-l-2 border-[#E5C378]/60 rounded-bl pointer-events-none" />
          <div className="absolute bottom-3 right-3 w-4 h-4 border-b-2 border-r-2 border-[#E5C378]/60 rounded-br pointer-events-none" />

          {/* SMALL EYEBROW */}
          <div className="inline-flex items-center gap-3 mb-4">
            <span className="w-6 sm:w-10 h-px bg-[#D4AF37]"></span>
            <span className="text-[10px] sm:text-xs font-bold tracking-[0.24em] text-[#E5C378] uppercase">
              KAMAL SELECTIONS · SHADNAGAR
            </span>
            <span className="w-6 sm:w-10 h-px bg-[#D4AF37]"></span>
          </div>

          {/* MAIN HEADING */}
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight mb-3">
            YOUR NEXT STYLE<br />
            <span className="italic font-normal text-[#E5C378]">STARTS HERE.</span>
          </h2>

          {/* SUPPORTING COPY */}
          <p className="text-xs sm:text-sm md:text-base text-[#F8E5BA]/90 leading-relaxed mb-2 max-w-lg mx-auto">
            Discover women&apos;s and kids&apos; fashion at Kamal Selections.
          </p>

          <p className="font-serif italic text-base sm:text-lg text-[#E5C378] mb-8">
            Visit us in Shadnagar.
          </p>

          {/* CTA BUTTONS GROUP - RESPONSIVE STACK FOR MOBILE */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 sm:gap-4 w-full max-w-md mx-auto mb-8">
            {/* PRIMARY CTA: GET DIRECTIONS */}
            <a
              href={brandData.maps.directionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-6 py-3.5 rounded-full bg-gradient-to-r from-[#E5C378] via-[#D4AF37] to-[#C59B27] text-[#20040A] font-bold text-xs sm:text-sm uppercase tracking-wider shadow-xl hover:shadow-2xl hover:scale-105 transition-all text-center inline-flex items-center justify-center gap-2"
              id="final-cta-get-directions-btn"
            >
              <span>Get Directions</span>
              <span aria-hidden="true">→</span>
            </a>

            {/* SECONDARY CTA: CALL STORE */}
            <a
              href={`tel:${brandData.phone}`}
              className="w-full sm:w-auto px-6 py-3.5 rounded-full border border-[#E5C378]/60 bg-white/5 text-[#E5C378] hover:bg-[#E5C378]/20 font-bold text-xs sm:text-sm uppercase tracking-wider transition-all text-center inline-flex items-center justify-center gap-2"
              id="final-cta-call-btn"
            >
              <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
              </svg>
              <span>Call {brandData.phone}</span>
            </a>
          </div>

          {/* STORE LOCATION & HOURS INFO LINE */}
          <div className="pt-5 border-t border-[#E5C378]/25 flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 text-xs text-[#F8E5BA]/85">
            <span>{brandData.address.building}, {brandData.address.street}, {brandData.address.city}</span>
            <span className="hidden sm:inline text-[#E5C378]">•</span>
            <span className="font-semibold text-[#E5C378]">{brandData.hours.displayHours}</span>
          </div>

        </div>
      </div>
    </section>
  );
}
