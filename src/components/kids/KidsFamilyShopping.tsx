"use client";

import Link from "next/link";

interface KidsFamilyShoppingProps {
  onOpenStoreModal?: () => void;
}

export function KidsFamilyShopping({ onOpenStoreModal }: KidsFamilyShoppingProps = {}) {
  return (
    <section className="py-20 md:py-28 bg-[#FAF3EB] text-[#3D2314] relative overflow-hidden border-t border-[#E5C378]/25" id="family-shopping">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#FFFFFF] rounded-3xl border border-[#E5C378]/40 p-8 sm:p-12 lg:p-16 shadow-xl relative overflow-hidden">
          
          {/* Subtle Ambient Background Gradient */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-[#E5C378]/15 via-[#FAD0C4]/10 to-transparent rounded-full blur-3xl pointer-events-none"></div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center relative z-10">
            
            {/* LEFT: TEXT CONTENT & CTAS (6 COLS) */}
            <div className="lg:col-span-6">
              <div className="inline-flex items-center gap-3 mb-4">
                <span className="w-8 h-px bg-[#D4AF37]"></span>
                <span className="text-xs font-semibold tracking-[0.24em] text-[#A41A50] uppercase">
                  FAMILY WARDROBE
                </span>
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#3D2314] leading-[1.15] mb-5">
                ONE STORE.<br />
                <span className="italic font-normal text-[#A41A50]">STYLE FOR THE WHOLE FAMILY.</span>
              </h2>

              <p className="text-base sm:text-lg text-[#5A484D] leading-relaxed mb-8 max-w-lg">
                Explore women&apos;s and kids&apos; fashion together at Kamal Selections. From matching festive tones to coordinated occasion looks, dress your family under one welcoming roof in Shadnagar.
              </p>

              {/* TWO CLEAN BUTTONS: Women's Wear & Visit Store */}
              <div className="flex flex-wrap items-center gap-4">
                <Link
                  href="/women"
                  className="btn btn-primary btn-pill"
                  id="family-womens-wear-btn"
                >
                  <span>Women&apos;s Wear</span>
                  <span aria-hidden="true" className="btn-arrow">→</span>
                </Link>

                {onOpenStoreModal ? (
                  <button
                    type="button"
                    onClick={onOpenStoreModal}
                    className="btn btn-outline btn-pill"
                    id="family-visit-store-btn"
                  >
                    <span>Visit Our Store</span>
                    <span aria-hidden="true" className="btn-arrow">→</span>
                  </button>
                ) : (
                  <Link
                    href="/store"
                    className="btn btn-outline btn-pill"
                    id="family-visit-store-btn"
                  >
                    <span>Visit Our Store</span>
                    <span aria-hidden="true" className="btn-arrow">→</span>
                  </Link>
                )}
              </div>
            </div>

            {/* RIGHT: FAMILY WARDROBE HIGHLIGHT CARD (6 COLS) */}
            <div className="lg:col-span-6">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-[#E5C378]/40 bg-gradient-to-br from-[#2E050F] via-[#20040A] to-[#140106] p-8 sm:p-10 text-white">
                <div className="flex items-center justify-between mb-6 pb-4 border-b border-[#E5C378]/25">
                  <span className="text-[10px] font-bold text-[#E5C378] tracking-[0.24em] uppercase">
                    HARMONIOUS STYLING
                  </span>
                  <span className="text-xs text-[#F8E5BA]/80 font-serif italic">Shadnagar Showroom</span>
                </div>

                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white mb-4">
                  Celebration Wardrobe Together.
                </h3>
                <p className="text-sm text-[#F8E5BA]/90 leading-relaxed mb-6">
                  Save time shopping across multiple stores. Find coordinated mother-daughter festive palettes and father-son styling under one welcoming roof.
                </p>

                <div className="space-y-3 pt-2">
                  <div className="flex items-start gap-3 p-3.5 rounded-xl bg-white/5 border border-white/10">
                    <span className="text-[#E5C378] mt-0.5">✦</span>
                    <div className="text-xs">
                      <strong className="text-white block mb-0.5">Matching Festive Color Stories</strong>
                      <span className="text-[#F8E5BA]/80">Harmonized pastels, maroons, and royal blues for family ceremonies and festivals.</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-3.5 rounded-xl bg-white/5 border border-white/10">
                    <span className="text-[#E5C378] mt-0.5">✦</span>
                    <div className="text-xs">
                      <strong className="text-white block mb-0.5">Family-Friendly Shopping Pace</strong>
                      <span className="text-[#F8E5BA]/80">Relaxed seating and patient staff so parents and kids can choose with complete peace of mind.</span>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-4 border-t border-[#E5C378]/20 flex items-center justify-between text-xs text-[#E5C378]">
                  <span>Ibrahim Complex, Shadnagar</span>
                  <span className="font-semibold uppercase tracking-wider">Women &amp; Kids Showroom</span>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
