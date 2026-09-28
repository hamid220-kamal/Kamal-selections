"use client";

import Link from "next/link";

export function AboutSplit() {
  return (
    <section className="py-20 md:py-28 bg-[#FAF3EB] text-[#30251F] relative overflow-hidden border-t border-[#E5C378]/25" id="dual-focus">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* SECTION HEADER */}
        <div className="text-center max-w-2xl mx-auto mb-14 md:mb-20">
          <div className="inline-flex items-center gap-3 mb-3">
            <span className="w-8 h-px bg-[#D4AF37]"></span>
            <span className="text-xs font-semibold tracking-[0.24em] text-[#A41A50] uppercase">
              TWO COLLECTIONS · ONE ROOF
            </span>
            <span className="w-8 h-px bg-[#D4AF37]"></span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#30251F]">
            Fashion for Every Woman<br />
            <span className="italic font-normal text-[#A41A50]">&amp; Every Little One.</span>
          </h2>
        </div>

        {/* TWO-PART ASYMMETRIC EDITORIAL GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-stretch">
          
          {/* LEFT: WOMEN'S EDITORIAL */}
          <div className="relative group overflow-hidden rounded-3xl bg-gradient-to-br from-[#2E050F] via-[#20040A] to-[#140106] border border-[#E5C378]/40 shadow-xl p-8 sm:p-10 flex flex-col justify-between text-white transition-all duration-500 hover:shadow-2xl hover:border-[#D4AF37]">
            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="px-3.5 py-1 rounded-full bg-[#E5C378]/20 border border-[#E5C378]/50 text-[#F8E5BA] text-[10px] font-bold tracking-[0.22em] uppercase">
                  WOMEN&apos;S WEAR
                </span>
                <span className="text-xs text-[#E5C378] font-serif italic">Everyday to Bridal</span>
              </div>

              <span className="text-[11px] font-semibold tracking-[0.24em] text-[#E5C378] uppercase block mb-2">
                COLLECTION FOCUS
              </span>
              <h3 className="font-serif text-3xl sm:text-4xl font-bold tracking-wide mb-4">
                FOR EVERY WOMAN
              </h3>
              <p className="text-sm text-[#F8E5BA]/90 leading-relaxed mb-6">
                From comfortable everyday cotton kurtis and chic office-wear coordinates to breathtaking festive lehengas, party wear, and regal 3-piece sets.
              </p>

              <div className="space-y-2 pt-4 border-t border-[#E5C378]/25 text-xs text-[#F8E5BA]/80">
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#E5C378]"></span>
                  <span><strong>Range:</strong> Kurtis, Suits, Anarkalis, Lehengas &amp; Co-ords</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#E5C378]"></span>
                  <span><strong>Fabrics:</strong> Pure Cotton, Modal, Chanderi Silk &amp; Organza</span>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-[#E5C378]/20 flex items-center justify-between">
              <span className="text-xs text-[#E5C378] font-semibold uppercase tracking-wider">Sizes S to 3XL</span>
              <Link
                href="/women"
                className="inline-flex items-center text-xs font-bold uppercase tracking-wider text-white hover:text-[#E5C378] transition-colors"
                id="about-split-women-link"
              >
                <span>Explore Women&apos;s Showcase</span>
                <span className="ml-2">→</span>
              </Link>
            </div>
          </div>

          {/* RIGHT: KIDS' EDITORIAL */}
          <div className="relative group overflow-hidden rounded-3xl bg-gradient-to-br from-[#121B2F] via-[#0C1220] to-[#060A12] border border-[#E5C378]/40 shadow-xl p-8 sm:p-10 flex flex-col justify-between text-white transition-all duration-500 hover:shadow-2xl hover:border-[#D4AF37]">
            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="px-3.5 py-1 rounded-full bg-[#E5C378]/20 border border-[#E5C378]/50 text-[#F8E5BA] text-[10px] font-bold tracking-[0.22em] uppercase">
                  KIDS&apos; WEAR
                </span>
                <span className="text-xs text-[#E5C378] font-serif italic">Ages 1 to 14</span>
              </div>

              <span className="text-[11px] font-semibold tracking-[0.24em] text-[#E5C378] uppercase block mb-2">
                COLLECTION FOCUS
              </span>
              <h3 className="font-serif text-3xl sm:text-4xl font-bold tracking-wide mb-4">
                FOR EVERY LITTLE ONE
              </h3>
              <p className="text-sm text-[#F8E5BA]/90 leading-relaxed mb-6">
                Playful, soft-lined, and festive outfits for girls and boys. Crafted to keep children cheerful and completely at ease throughout long family functions.
              </p>

              <div className="space-y-2 pt-4 border-t border-[#E5C378]/25 text-xs text-[#F8E5BA]/80">
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#E5C378]"></span>
                  <span><strong>Range:</strong> Party Frocks, Sherwanis, Kurta Sets &amp; Daily Co-ords</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#E5C378]"></span>
                  <span><strong>Comfort:</strong> Soft Inner Lining, Skin-Safe Dyes &amp; Flexible Fits</span>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-[#E5C378]/20 flex items-center justify-between">
              <span className="text-xs text-[#E5C378] font-semibold uppercase tracking-wider">Toddlers to Teens</span>
              <Link
                href="/kids"
                className="inline-flex items-center text-xs font-bold uppercase tracking-wider text-white hover:text-[#E5C378] transition-colors"
                id="about-split-kids-link"
              >
                <span>Explore Kids&apos; Showcase</span>
                <span className="ml-2">→</span>
              </Link>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
