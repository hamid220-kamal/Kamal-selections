"use client";

import { brandData } from "@/data/brand";

export function StoreLocationCard() {
  return (
    <section className="py-14 sm:py-16 bg-[#F4EEE5] text-[#30251F] border-t border-[#E5C378]/30" id="final-location">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#FFFFFF] rounded-2xl border border-[#E5C378]/50 p-6 sm:p-8 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-6">
          
          {/* LEFT: LOCATION WITH GOLD PIN */}
          <div className="flex items-center gap-4 text-center sm:text-left">
            <div className="w-12 h-12 rounded-full bg-[#FAF3EB] border border-[#D4AF37]/60 flex items-center justify-center text-[#A41A50] shrink-0">
              <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/>
                <circle cx="12" cy="9" r="2.5" fill="#D4AF37"/>
              </svg>
            </div>

            <div>
              <span className="text-[10px] font-bold text-[#A41A50] tracking-[0.2em] uppercase block">
                KAMAL SELECTIONS
              </span>
              <h3 className="font-serif text-lg sm:text-xl font-bold text-[#30251F]">
                Ibrahim Complex · Main Road
              </h3>
              <p className="text-xs text-[#69564A]">
                Shadnagar, Telangana · <a href={`tel:${brandData.phone}`} className="font-semibold text-[#30251F] hover:underline">{brandData.phone}</a>
              </p>
            </div>
          </div>

          {/* RIGHT: COMPACT GET DIRECTIONS BUTTON */}
          <div>
            <a
              href={brandData.maps.directionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary btn-pill btn-sm"
              id="final-card-directions-btn"
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
