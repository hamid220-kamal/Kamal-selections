"use client";

import Link from "next/link";
import { brandData } from "@/data/brand";

interface AboutRealStoreProps {
  onOpenStoreModal?: () => void;
}

export function AboutRealStore({ onOpenStoreModal }: AboutRealStoreProps = {}) {
  return (
    <section className="py-20 md:py-28 bg-[#F4EEE5] text-[#30251F] relative overflow-hidden" id="real-store">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* LEFT: TEXT CONTENT & ACTION (5 COLS) */}
          <div className="lg:col-span-5">
            <div className="inline-flex items-center gap-3 mb-4">
              <span className="w-8 h-px bg-[#D4AF37]"></span>
              <span className="text-xs font-semibold tracking-[0.24em] text-[#A41A50] uppercase">
                PHYSICAL PRESENCE
              </span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#30251F] leading-[1.15] mb-6">
              WE&apos;RE A REAL STORE,<br />
              <span className="italic font-normal text-[#A41A50]">NOT JUST A WEBSITE.</span>
            </h2>

            <p className="text-base sm:text-lg text-[#51443B] leading-relaxed mb-6">
              Browse online for inspiration, then visit Kamal Selections in Shadnagar to explore the collection in person.
            </p>

            <p className="text-sm text-[#69564A] leading-relaxed mb-8">
              We know clothing is tactile — finding the right fit, feeling the texture of the fabric, and choosing the exact color tone works best when you can try it yourself.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              {onOpenStoreModal ? (
                <button
                  type="button"
                  onClick={onOpenStoreModal}
                  className="btn btn-primary btn-pill"
                  id="about-store-visit-btn"
                >
                  <span>Visit Our Store</span>
                  <span aria-hidden="true" className="btn-arrow">→</span>
                </button>
              ) : (
                <Link
                  href="/store"
                  className="btn btn-primary btn-pill"
                  id="about-store-visit-btn"
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
                id="about-store-directions-btn"
              >
                <span>Get Directions</span>
                <span aria-hidden="true" className="btn-arrow">→</span>
              </a>
            </div>
          </div>

          {/* RIGHT: REAL STORE PHOTOGRAPHY WITH GOLD LABEL (7 COLS) */}
          <div className="lg:col-span-7 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-[#E5C378]/50 aspect-[16/10] sm:aspect-[16/10]">
              <img
                src="/images/store/store-hero-bg.jpg"
                alt="Kamal Selections retail store interior and display in Shadnagar"
                className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-700 ease-out"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#20040A]/60 via-transparent to-transparent"></div>

              {/* TOP SUBTLE GOLD LABEL BADGE */}
              <div className="absolute top-5 left-5 z-10">
                <span className="px-4 py-1.5 rounded-full bg-[#20040A]/80 border border-[#D4AF37]/60 text-[#F8E5BA] text-[11px] font-bold tracking-[0.24em] uppercase backdrop-blur-md shadow-md">
                  IBRAHIM COMPLEX · SHADNAGAR
                </span>
              </div>

              {/* BOTTOM STRIP */}
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs text-[#FAF3EB] bg-[#20040A]/70 backdrop-blur-md px-4 py-2.5 rounded-xl border border-[#E5C378]/30">
                <span className="font-semibold uppercase tracking-wider">Main Road, Shadnagar</span>
                <span>Open Daily · 10 AM to 9 PM</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
