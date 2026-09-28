"use client";

import Link from "next/link";
import { brandData } from "@/data/brand";

interface WomensStoreExperienceProps {
  onOpenStoreModal?: () => void;
}

export function WomensStoreExperience({ onOpenStoreModal }: WomensStoreExperienceProps = {}) {
  return (
    <section className="bg-[#380511] text-[#FAF5EB] relative overflow-hidden py-16 sm:py-20 lg:py-24" id="in-store-experience">
      
      {/* SUBTLE GOLD ORNAMENTAL ACCENTS */}
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
              SEE IT.<br />
              FEEL IT.<br />
              <span className="text-[#E5C378]">CHOOSE IT.</span>
            </h2>

            <p className="text-base sm:text-lg text-[#F8E5BA]/90 leading-relaxed mb-8 max-w-lg">
              Online inspiration is only the beginning. Visit Kamal Selections in Shadnagar to explore the collection in person.
            </p>

            {/* CTAS */}
            <div className="flex flex-wrap items-center gap-4">
              {onOpenStoreModal ? (
                <button
                  type="button"
                  onClick={onOpenStoreModal}
                  className="btn btn-primary btn-pill"
                  id="womens-store-visit-btn"
                >
                  <span>Visit Our Store</span>
                  <span aria-hidden="true" className="btn-arrow">→</span>
                </button>
              ) : (
                <Link
                  href="/store"
                  className="btn btn-primary btn-pill"
                  id="womens-store-visit-btn"
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
                id="womens-store-directions-btn"
              >
                <span>Get Directions</span>
                <span aria-hidden="true" className="btn-arrow">→</span>
              </a>
            </div>
          </div>

          {/* RIGHT: STORE ENVIRONMENT CARD (6 COLS) */}
          <div className="lg:col-span-6">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-[#E5C378]/40 bg-gradient-to-br from-[#2E0611] via-[#20040A] to-[#140106] p-8 sm:p-10 text-white">
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-[#E5C378]/25">
                <div>
                  <span className="text-[10px] font-bold text-[#E5C378] tracking-[0.22em] uppercase block mb-1">
                    PHYSICAL SHOWROOM
                  </span>
                  <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white">
                    Kamal Selections
                  </h3>
                </div>
                <div className="px-3.5 py-1.5 rounded-full bg-[#E5C378]/20 border border-[#E5C378]/40 text-[#F8E5BA] text-xs font-semibold">
                  Open Daily · 10 AM – 9 PM
                </div>
              </div>

              <p className="text-sm text-[#F8E5BA]/90 leading-relaxed mb-6">
                Located conveniently at Ibrahim Complex on Main Road, Shadnagar. Experience the tactile beauty of our women&apos;s collection in person.
              </p>

              <div className="space-y-3 mb-8">
                <div className="flex items-start gap-3 p-3.5 rounded-xl bg-white/5 border border-white/10">
                  <span className="text-[#E5C378] mt-0.5">✦</span>
                  <div className="text-xs">
                    <strong className="text-white block mb-0.5">Feel Genuine Textures</strong>
                    <span className="text-[#F8E5BA]/80">Inspect pure cottons, flowing georgettes, and artisanal embroidery first-hand.</span>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3.5 rounded-xl bg-white/5 border border-white/10">
                  <span className="text-[#E5C378] mt-0.5">✦</span>
                  <div className="text-xs">
                    <strong className="text-white block mb-0.5">Try Your Fit With Ease</strong>
                    <span className="text-[#F8E5BA]/80">Find the silhouette and size that flatters you naturally before choosing.</span>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between text-xs text-[#E5C378] pt-4 border-t border-[#E5C378]/25">
                <span>Ibrahim Complex, Main Road, Shadnagar</span>
                <span className="font-bold">Telangana 509216</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
