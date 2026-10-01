"use client";

import Link from "next/link";
import Image from "next/image";

interface KidsFamilyShoppingProps {
  onOpenStoreModal?: () => void;
}

export function KidsFamilyShopping({ onOpenStoreModal }: KidsFamilyShoppingProps = {}) {
  return (
    <section className="py-16 md:py-20 bg-[#FAF3EB] text-[#3D2314] relative overflow-hidden border-t border-[#E5C378]/25" id="family-shopping">
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

            {/* RIGHT: FAMILY WARDROBE FULL PHOTO CARD (6 COLS) */}
            <div className="lg:col-span-6">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-[#E5C378]/40 min-h-[380px] sm:min-h-[440px] lg:min-h-[480px] w-full group">
                <Image
                  src="/images/store/kamal-selections-family-wardrobe.jpg"
                  alt="Kamal Selections Curated Family Ethnic Collection"
                  fill
                  className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#20040A]/40 via-transparent to-black/10 pointer-events-none" />
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
