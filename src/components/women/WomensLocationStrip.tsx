"use client";

import { brandData } from "@/data/brand";

export function WomensLocationStrip() {
  return (
    <section className="py-16 md:py-20 bg-[#FAF3EB] text-[#3D2314] border-t border-[#E5C378]/30" id="store-location-strip">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#FFFFFF] rounded-2xl border border-[#E5C378]/40 p-8 sm:p-10 shadow-lg flex flex-col lg:flex-row items-center justify-between gap-8">
          
          {/* STORE & ADDRESS */}
          <div className="flex items-start gap-4 max-w-md">
            <div className="w-12 h-12 rounded-xl bg-[#FAF3EB] border border-[#E5C378]/50 flex items-center justify-center shrink-0 text-[#A41A50] mt-1">
              <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/>
                <circle cx="12" cy="9" r="2.5"/>
              </svg>
            </div>
            <div>
              <span className="text-[10px] font-bold tracking-[0.2em] text-[#A41A50] uppercase block mb-1">
                OUR PHYSICAL STORE
              </span>
              <h3 className="font-serif text-2xl font-bold text-[#3D2314] tracking-wide mb-1">
                KAMAL SELECTIONS
              </h3>
              <p className="text-sm text-[#69564A] leading-relaxed">
                Ibrahim Complex, Main Road<br />
                Shadnagar, Telangana — 509216
              </p>
            </div>
          </div>

          {/* CONTACT & SOCIAL HIGHLIGHTS */}
          <div className="flex flex-wrap items-center gap-6 sm:gap-8">
            {/* Phone */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#FAF3EB] border border-[#E5C378]/50 flex items-center justify-center text-[#A41A50] shrink-0">
                <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                </svg>
              </div>
              <div>
                <span className="text-[10px] font-bold text-[#69564A] tracking-wider uppercase block">Phone</span>
                <a
                  href={`tel:${brandData.phone}`}
                  className="font-serif text-lg font-bold text-[#3D2314] hover:text-[#A41A50] transition-colors"
                >
                  {brandData.phone}
                </a>
              </div>
            </div>

            {/* Instagram */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#FAF3EB] border border-[#E5C378]/50 flex items-center justify-center text-[#A41A50] shrink-0">
                <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                </svg>
              </div>
              <div>
                <span className="text-[10px] font-bold text-[#69564A] tracking-wider uppercase block">Instagram</span>
                <a
                  href={brandData.social.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-semibold text-[#A41A50] hover:underline"
                >
                  {brandData.social.instagramHandle}
                </a>
              </div>
            </div>

            {/* Directions Link */}
            <a
              href={brandData.maps.directionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary btn-pill btn-sm"
              id="location-strip-directions-btn"
            >
              <span>Get Directions</span>
              <span aria-hidden="true" className="btn-arrow">→</span>
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
