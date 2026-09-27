"use client";

import { brandData } from "@/data/brand";

export function ContactFinalCTA() {
  return (
    <section className="relative py-24 sm:py-28 lg:py-32 bg-[#2A050E] text-[#FAF5EB] overflow-hidden" id="contact-final-cta">
      
      {/* BOTANICAL CORNER LINE ART (TOP RIGHT) */}
      <div className="absolute top-0 right-0 w-72 h-72 sm:w-96 sm:h-96 opacity-25 pointer-events-none" aria-hidden="true">
        <svg viewBox="0 0 250 250" className="w-full h-full">
          <defs>
            <linearGradient id="goldGradContactCTA" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#CFA753" />
              <stop offset="50%" stopColor="#E5C378" />
              <stop offset="100%" stopColor="#D4AF37" />
            </linearGradient>
          </defs>
          <g stroke="url(#goldGradContactCTA)" strokeWidth="1" fill="none">
            <path d="M 240,10 Q 180,60 190,120 T 120,220" />
            <path d="M 220,30 C 200,20 180,10 205,35 C 215,45 210,40 220,30 Z" />
            <path d="M 195,70 C 170,60 150,50 175,75 C 185,85 180,80 195,70 Z" />
            <circle cx="205" cy="35" r="2" fill="url(#goldGradContactCTA)" />
            <circle cx="175" cy="75" r="2" fill="url(#goldGradContactCTA)" />
          </g>
        </svg>
      </div>

      {/* BOTANICAL CORNER LINE ART (BOTTOM LEFT) */}
      <div className="absolute bottom-0 left-0 w-72 h-72 sm:w-96 sm:h-96 opacity-25 pointer-events-none" aria-hidden="true">
        <svg viewBox="0 0 250 250" className="w-full h-full">
          <g stroke="url(#goldGradContactCTA)" strokeWidth="1" fill="none">
            <path d="M 10,240 Q 60,180 120,190 T 220,120" />
            <path d="M 30,220 C 20,200 10,180 35,170 C 45,185 40,205 30,220 Z" />
            <path d="M 70,195 C 60,170 50,150 75,140 C 85,160 80,180 70,195 Z" />
          </g>
        </svg>
      </div>

      {/* AMBIENT GLOW */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-r from-[#A41A50]/20 via-[#E5C378]/10 to-[#A41A50]/20 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        
        {/* EYEBROW */}
        <div className="inline-flex items-center gap-3 mb-5">
          <span className="w-8 h-px bg-[#E5C378]"></span>
          <span className="text-xs font-semibold tracking-[0.26em] text-[#E5C378] uppercase">
            KAMAL SELECTIONS · SHADNAGAR
          </span>
          <span className="w-8 h-px bg-[#E5C378]"></span>
        </div>

        {/* DRAMATIC SERIF HEADING */}
        <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-[#FFFFFF] leading-[1.12] mb-4 tracking-tight">
          WE&apos;RE JUST<br />
          <span className="text-[#E5C378]">A CALL AWAY.</span>
        </h2>

        {/* SMALL HANDWRITTEN SCRIPT ACCENT */}
        <p className="font-script text-3xl sm:text-4xl text-[#E5C378] mb-6">
          Come visit. Explore. Find your style.
        </p>

        {/* SUPPORTING TEXT */}
        <p className="text-base sm:text-lg text-[#F8E5BA]/90 max-w-xl mx-auto mb-10 leading-relaxed">
          Whether you need advice on a festival look or directions from the bus station, our team is ready to welcome you to our Shadnagar store.
        </p>

        {/* BUTTONS */}
        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
          <a
            href={`tel:${brandData.phone}`}
            className="btn btn-primary btn-pill btn-lg shadow-xl"
            id="contact-final-call-btn"
          >
            <span>Call Us ({brandData.phone})</span>
            <span aria-hidden="true" className="btn-arrow">→</span>
          </a>

          <a
            href={brandData.maps.directionsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline btn-pill btn-lg border-[#E5C378]/60 text-[#FAF5EB] hover:bg-[#E5C378]/20"
            id="contact-final-directions-btn"
          >
            <span>Get Directions</span>
            <span aria-hidden="true" className="btn-arrow">→</span>
          </a>
        </div>

      </div>
    </section>
  );
}
