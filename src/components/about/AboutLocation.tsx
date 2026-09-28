"use client";

import { brandData } from "@/data/brand";

export function AboutLocation() {
  return (
    <section className="py-20 md:py-24 bg-[#FAF3EB] text-[#30251F] relative border-t border-[#E5C378]/25" id="why-shadnagar">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#FFFFFF] rounded-3xl border border-[#E5C378]/40 p-8 sm:p-12 shadow-lg flex flex-col md:flex-row items-center justify-between gap-8 sm:gap-12">
          
          {/* LEFT: LOCATION STORY */}
          <div className="md:w-1/2">
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="w-6 h-px bg-[#D4AF37]"></span>
              <span className="text-[11px] font-bold tracking-[0.24em] text-[#A41A50] uppercase">
                COMMUNITY TIES &amp; LOCATION
              </span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#30251F] mb-4">
              PROUDLY IN SHADNAGAR.
            </h2>

            <p className="text-base sm:text-lg text-[#51443B] leading-relaxed mb-6">
              Located at Ibrahim Complex on Main Road, Kamal Selections is built around serving the women and families of Shadnagar.
            </p>

            <div className="p-4 rounded-2xl bg-[#FAF3EB] border border-[#E5C378]/50 mb-6">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-[#FFFFFF] border border-[#D4AF37] flex items-center justify-center text-[#A41A50] shrink-0 mt-0.5">
                  <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/>
                    <circle cx="12" cy="9" r="2.5"/>
                  </svg>
                </div>
                <div>
                  <span className="text-[10px] font-bold text-[#A41A50] uppercase tracking-wider block">
                    PHYSICAL ADDRESS
                  </span>
                  <p className="text-sm font-serif font-bold text-[#30251F]">
                    Ibrahim Complex, Main Road
                  </p>
                  <p className="text-xs text-[#69564A]">
                    Shadnagar, Telangana — 509216
                  </p>
                </div>
              </div>
            </div>

            <a
              href={brandData.maps.directionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary btn-pill btn-sm"
              id="about-location-maps-btn"
            >
              <span>Get Directions</span>
              <span aria-hidden="true" className="btn-arrow">→</span>
            </a>
          </div>

          {/* RIGHT: SHADNAGAR SHOWROOM LANDMARK GUIDE */}
          <div className="md:w-1/2 w-full">
            <div className="relative rounded-2xl overflow-hidden shadow-xl border border-[#E5C378]/40 bg-gradient-to-br from-[#2E050F] via-[#20040A] to-[#140106] p-7 sm:p-9 text-white group">
              <div className="flex items-center justify-between mb-5 pb-3 border-b border-[#E5C378]/25">
                <span className="text-[10px] font-bold text-[#E5C378] tracking-[0.22em] uppercase">
                  STORE LANDMARK GUIDE
                </span>
                <span className="text-xs text-[#F8E5BA]/80 font-serif italic">Heart of Town</span>
              </div>

              <h3 className="font-serif text-2xl font-bold text-white mb-2">
                Main Road Convenience.
              </h3>
              <p className="text-xs text-[#F8E5BA]/90 leading-relaxed mb-6">
                Situated prominently along the main commercial corridor of Shadnagar, easily accessible from all residential neighborhoods and transit stops.
              </p>

              <div className="space-y-3 mb-6">
                <div className="flex items-start gap-3 p-3 rounded-xl bg-white/5 border border-white/10">
                  <span className="text-[#E5C378] text-xs mt-0.5">✦</span>
                  <div className="text-xs">
                    <strong className="text-white block mb-0.5">Ibrahim Complex Landmark</strong>
                    <span className="text-[#F8E5BA]/80">Easily recognized commercial building with wide front access.</span>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 rounded-xl bg-white/5 border border-white/10">
                  <span className="text-[#E5C378] text-xs mt-0.5">✦</span>
                  <div className="text-xs">
                    <strong className="text-white block mb-0.5">Extended Opening Hours</strong>
                    <span className="text-[#F8E5BA]/80">Open 10:00 AM to 9:00 PM every day of the week, including Sundays.</span>
                  </div>
                </div>
              </div>

              <div className="pt-3 border-t border-[#E5C378]/20 flex items-center justify-between text-xs text-[#E5C378]">
                <span>Pincode: 509216</span>
                <span className="font-semibold uppercase tracking-wider">Telangana, India</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
