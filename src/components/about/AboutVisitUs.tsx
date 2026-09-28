"use client";

import Link from "next/link";
import { brandData } from "@/data/brand";

interface AboutVisitUsProps {
  onOpenStoreModal?: () => void;
}

export function AboutVisitUs({ onOpenStoreModal }: AboutVisitUsProps = {}) {
  return (
    <section className="bg-[#380511] text-[#FAF5EB] relative overflow-hidden py-16 sm:py-20 lg:py-24" id="visit-us">
      {/* BACKGROUND AMBIENT GLOWS */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-[#E5C378]/10 to-transparent rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-[#A41A50]/20 to-transparent rounded-full blur-2xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* LEFT: TEXT CONTENT & CTAS (7 COLS) */}
          <div className="lg:col-span-7">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-[#E5C378]/15 border border-[#E5C378]/30 flex items-center justify-center text-[#E5C378]">
                <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
                  <polyline points="9 22 9 12 15 12 15 22"/>
                </svg>
              </div>
              <span className="text-xs font-semibold tracking-[0.24em] text-[#E5C378] uppercase">
                IN-PERSON EXPERIENCE
              </span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#FFFFFF] leading-tight mb-4 tracking-wide">
              COME SEE THE COLLECTION<br />
              <span className="text-[#E5C378]">IN PERSON.</span>
            </h2>

            <p className="text-base sm:text-lg text-[#F8E5BA]/90 leading-relaxed mb-8 max-w-lg">
              There&apos;s only so much a screen can show. Visit Kamal Selections and explore the styles yourself.
            </p>

            {/* CTAS */}
            <div className="flex flex-wrap items-center gap-4">
              {onOpenStoreModal ? (
                <button
                  type="button"
                  onClick={onOpenStoreModal}
                  className="btn btn-primary btn-pill"
                  id="about-visit-store-btn"
                >
                  <span>Visit Our Store</span>
                  <span aria-hidden="true" className="btn-arrow">→</span>
                </button>
              ) : (
                <Link
                  href="/store"
                  className="btn btn-primary btn-pill"
                  id="about-visit-store-btn"
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
                id="about-get-directions-btn"
              >
                <span>Get Directions</span>
                <span aria-hidden="true" className="btn-arrow">→</span>
              </a>
            </div>
          </div>

          {/* RIGHT: STORE ENVIRONMENT PREVIEW CARD (5 COLS) */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-[#E5C378]/40 bg-gradient-to-br from-[#2E050F] via-[#20040A] to-[#140106] p-7 sm:p-9 text-white">
              <div className="flex items-center justify-between mb-5 pb-3 border-b border-[#E5C378]/25">
                <span className="text-[10px] font-bold text-[#E5C378] tracking-[0.22em] uppercase">
                  STORE AMENITIES
                </span>
                <span className="text-xs text-[#F8E5BA]/80 font-serif italic">In-Person Comfort</span>
              </div>

              <h3 className="font-serif text-2xl font-bold text-white mb-2">
                A Welcoming Space.
              </h3>
              <p className="text-xs text-[#F8E5BA]/90 leading-relaxed mb-6">
                Step inside for a peaceful shopping experience designed for women, children, and families looking for quality clothing.
              </p>

              <div className="space-y-3 mb-6">
                <div className="flex items-start gap-3 p-3 rounded-xl bg-white/5 border border-white/10">
                  <span className="text-[#E5C378] text-xs mt-0.5">✦</span>
                  <div className="text-xs">
                    <strong className="text-white block mb-0.5">Air-Conditioned Showroom</strong>
                    <span className="text-[#F8E5BA]/80">Well-lit, orderly display racks with easy browsing.</span>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 rounded-xl bg-white/5 border border-white/10">
                  <span className="text-[#E5C378] text-xs mt-0.5">✦</span>
                  <div className="text-xs">
                    <strong className="text-white block mb-0.5">Multiple Payment Options</strong>
                    <span className="text-[#F8E5BA]/80">UPI, all major credit/debit cards &amp; cash accepted.</span>
                  </div>
                </div>
              </div>

              <div className="pt-3 border-t border-[#E5C378]/20 flex items-center justify-between text-xs text-[#E5C378]">
                <span className="font-semibold uppercase tracking-wider">Ibrahim Complex · Main Road</span>
                <span>Shadnagar</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
