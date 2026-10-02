"use client";

import Link from "next/link";
import Image from "next/image";

export function AboutSplit() {
  return (
    <section className="py-16 md:py-20 bg-[#FAF3EB] text-[#30251F] relative overflow-hidden border-t border-[#E5C378]/25" id="dual-focus">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* SECTION HEADER */}
        <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
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

        {/* TWO TALL EDITORIAL CARDS WITH TEXT AT BOTTOM */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 items-stretch">
          
          {/* LEFT: WOMEN'S EDITORIAL CARD */}
          <div className="relative group overflow-hidden rounded-3xl border border-[#E5C378]/40 shadow-xl min-h-[480px] sm:min-h-[540px] lg:min-h-[580px] p-6 sm:p-8 flex flex-col justify-end text-white transition-all duration-500 hover:shadow-2xl hover:border-[#D4AF37]">
            {/* FULL BACKGROUND PHOTO */}
            <Image
              src="/images/women/categories/kamal-selections-womens-designer-dresses.jpg"
              alt="Kamal Selections Women's Wear Collection in Shadnagar"
              fill
              className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
            {/* SUBTLE BOTTOM GRADIENT OVERLAY ONLY */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

            <div className="relative z-10 space-y-2">
              <div className="flex items-center justify-between mb-3">
                <span className="px-3.5 py-1 rounded-full bg-black/40 backdrop-blur-md border border-[#E5C378]/50 text-[#F8E5BA] text-[10px] font-bold tracking-[0.22em] uppercase">
                  WOMEN&apos;S WEAR
                </span>
                <span className="text-xs text-[#E5C378] font-serif italic">Everyday to Bridal</span>
              </div>

              <span className="text-[11px] font-semibold tracking-[0.24em] text-[#E5C378] uppercase block">
                COLLECTION FOCUS
              </span>
              <h3 className="font-serif text-3xl sm:text-4xl font-bold tracking-wide text-white">
                FOR EVERY WOMAN
              </h3>
              <p className="text-sm text-[#F8E5BA]/90 leading-relaxed max-w-md pb-2">
                Kurtis, Anarkalis, Lehengas &amp; 3-Piece Sets designed for everyday comfort and festive occasions.
              </p>

              <div className="pt-4 border-t border-white/20 flex items-center justify-between">
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
          </div>

          {/* RIGHT: KIDS' EDITORIAL CARD */}
          <div className="relative group overflow-hidden rounded-3xl border border-[#E5C378]/40 shadow-xl min-h-[480px] sm:min-h-[540px] lg:min-h-[580px] p-6 sm:p-8 flex flex-col justify-end text-white transition-all duration-500 hover:shadow-2xl hover:border-[#D4AF37]">
            {/* FULL BACKGROUND PHOTO */}
            <Image
              src="/images/kids/categories/kamal-selections-girls-ethnic-wear.jpg"
              alt="Kamal Selections Kids' Wear Collection in Shadnagar"
              fill
              className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
            {/* SUBTLE BOTTOM GRADIENT OVERLAY ONLY */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

            <div className="relative z-10 space-y-2">
              <div className="flex items-center justify-between mb-3">
                <span className="px-3.5 py-1 rounded-full bg-black/40 backdrop-blur-md border border-[#E5C378]/50 text-[#F8E5BA] text-[10px] font-bold tracking-[0.22em] uppercase">
                  KIDS&apos; WEAR
                </span>
                <span className="text-xs text-[#E5C378] font-serif italic">Ages 1 to 14</span>
              </div>

              <span className="text-[11px] font-semibold tracking-[0.24em] text-[#E5C378] uppercase block">
                COLLECTION FOCUS
              </span>
              <h3 className="font-serif text-3xl sm:text-4xl font-bold tracking-wide text-white">
                FOR EVERY LITTLE ONE
              </h3>
              <p className="text-sm text-[#F8E5BA]/90 leading-relaxed max-w-md pb-2">
                Playful frocks, sherwanis &amp; kurta sets crafted with soft-lined fabrics for all-day ease.
              </p>

              <div className="pt-4 border-t border-white/20 flex items-center justify-between">
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

      </div>
    </section>
  );
}
