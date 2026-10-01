"use client";

import Image from "next/image";
import { brandData } from "@/data/brand";

export function AboutLocation() {
  return (
    <section className="py-16 md:py-20 bg-[#FAF3EB] text-[#30251F] relative border-t border-[#E5C378]/25" id="why-shadnagar">
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

          {/* RIGHT: SHADNAGAR STORE FRONT / BOARD PHOTO CARD */}
          <div className="md:w-1/2 w-full">
            <div className="relative rounded-2xl overflow-hidden shadow-xl border border-[#E5C378]/40 min-h-[360px] sm:min-h-[400px] w-full">
              <Image
                src="/images/store/kamal-selections-storefront-shadnagar.png"
                alt="Kamal Selections Storefront Sign Board in Shadnagar"
                fill
                className="object-cover object-center"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
