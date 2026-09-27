"use client";

import Link from "next/link";
import { brandData } from "@/data/brand";

interface KidsStoreExperienceProps {
  onOpenStoreModal?: () => void;
}

export function KidsStoreExperience({ onOpenStoreModal }: KidsStoreExperienceProps = {}) {
  return (
    <section className="bg-[#380511] text-[#FAF5EB] relative overflow-hidden py-16 sm:py-20 lg:py-24" id="in-store-experience">
      
      {/* SUBTLE GOLD & BURGUNDY ACCENTS */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-[#E5C378]/10 to-transparent rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-[#A41A50]/20 to-transparent rounded-full blur-2xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* LEFT: TEXT CONTENT & CTAS (6 COLS) */}
          <div className="lg:col-span-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-[#E5C378]/15 border border-[#E5C378]/30 flex items-center justify-center text-[#E5C378]">
                <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
                  <polyline points="9 22 9 12 15 12 15 22"/>
                </svg>
              </div>
              <span className="text-xs font-semibold tracking-[0.24em] text-[#E5C378] uppercase">
                VISIT OUR STORE
              </span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#FFFFFF] leading-tight mb-4 tracking-wide">
              SEE THEIR STYLE<br />
              <span className="text-[#E5C378]">IN PERSON.</span>
            </h2>

            <p className="text-base sm:text-lg text-[#F8E5BA]/90 leading-relaxed mb-8 max-w-lg">
              Online inspiration is only the beginning. Visit Kamal Selections in Shadnagar and explore our kids&apos; range in store.
            </p>

            {/* CTAS */}
            <div className="flex flex-wrap items-center gap-4">
              {onOpenStoreModal ? (
                <button
                  type="button"
                  onClick={onOpenStoreModal}
                  className="btn btn-primary btn-pill"
                  id="kids-store-visit-btn"
                >
                  <span>Visit Our Store</span>
                  <span aria-hidden="true" className="btn-arrow">→</span>
                </button>
              ) : (
                <Link
                  href="/store"
                  className="btn btn-primary btn-pill"
                  id="kids-store-visit-btn"
                >
                  <span>Visit Our Store</span>
                  <span aria-hidden="true" className="btn-arrow">→</span>
                </Link>
              )}

              <a
                href={brandData.maps.directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline btn-pill"
                id="kids-store-directions-btn"
              >
                <span>Get Directions</span>
                <span aria-hidden="true" className="btn-arrow">→</span>
              </a>
            </div>
          </div>

          {/* RIGHT: STORE PHOTOGRAPHY (6 COLS) */}
          <div className="lg:col-span-6">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-[#E5C378]/35 aspect-[16/10] sm:aspect-[16/9]">
              <img
                src="/images/store/store-hero-bg.jpg"
                alt="Kamal Selections boutique store interior in Shadnagar"
                className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-700 ease-out"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#20040A]/60 via-transparent to-transparent"></div>
              
              {/* Bottom Tag */}
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs text-[#F8E5BA] bg-[#20040A]/70 backdrop-blur-md px-4 py-2 rounded-xl border border-[#E5C378]/30">
                <span className="font-semibold uppercase tracking-wider">Ibrahim Complex · Main Road</span>
                <span>Shadnagar, Telangana</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
