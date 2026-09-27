"use client";

import { brandData } from "@/data/brand";

export function AboutLocation() {
  return (
    <section className="py-20 md:py-24 bg-[#FAF3EB] text-[#30251F] relative border-t border-[#E5C378]/25" id="why-shadnagar">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#FFFFFF] rounded-3xl border border-[#E5C378]/40 p-8 sm:p-12 shadow-lg flex flex-col md:flex-row items-center justify-between gap-8 sm:gap-12">
          
          {/* LEFT: LOCATION STORY */}
          <div className="md:w-3/5">
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="w-6 h-px bg-[#D4AF37]"></span>
              <span className="text-[11px] font-bold tracking-[0.24em] text-[#A41A50] uppercase">
                COMMUNITY TIES
              </span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#30251F] mb-4">
              PROUDLY IN SHADNAGAR.
            </h2>

            <p className="text-base sm:text-lg text-[#51443B] leading-relaxed mb-6">
              Located at Ibrahim Complex on Main Road, Kamal Selections is built around serving the women and families of Shadnagar.
            </p>

            <div className="flex items-center gap-3 text-xs text-[#69564A]">
              <span className="w-2 h-2 rounded-full bg-[#A41A50]"></span>
              <span>Central Shadnagar Location</span>
              <span className="text-[#D4AF37]">·</span>
              <span>Easily Accessible by Foot &amp; Transit</span>
            </div>
          </div>

          {/* RIGHT: SUBTLE ARCHITECTURAL / LOCATION CARD */}
          <div className="md:w-2/5 w-full">
            <div className="p-6 rounded-2xl bg-[#FAF3EB] border border-[#E5C378]/50 shadow-inner text-center relative overflow-hidden">
              {/* Gold Location Pin Icon */}
              <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-[#FFFFFF] border-2 border-[#D4AF37] shadow-md flex items-center justify-center text-[#A41A50]">
                <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/>
                  <circle cx="12" cy="9" r="2.5"/>
                </svg>
              </div>

              <span className="text-[10px] font-bold text-[#A41A50] tracking-[0.2em] uppercase block mb-1">
                OUR TOWN &amp; LOCATION
              </span>
              
              <h3 className="font-serif text-xl font-bold text-[#30251F] mb-1">
                Shadnagar, Telangana
              </h3>
              
              <p className="text-xs text-[#69564A] leading-relaxed mb-5">
                Ibrahim Complex, Main Road<br />
                PIN: 509216
              </p>

              <a
                href={brandData.maps.directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline btn-pill btn-sm w-full justify-center"
                id="about-location-maps-btn"
              >
                <span>View on Google Maps</span>
                <span aria-hidden="true" className="btn-arrow">→</span>
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
