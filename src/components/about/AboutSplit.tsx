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
          <div className="relative group overflow-hidden rounded-3xl bg-[#FFFFFF] border border-[#E5C378]/35 shadow-xl flex flex-col transition-all duration-500 hover:shadow-2xl hover:border-[#D4AF37]">
            <div className="relative aspect-[3/4] sm:aspect-[4/5] w-full overflow-hidden">
              <img
                src="/images/women/women-store-browsing.jpg"
                alt="Women browsing ethnic clothing at Kamal Selections in Shadnagar"
                className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-700 ease-out"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#2A050E]/85 via-transparent to-transparent"></div>
              
              {/* Category Stamp */}
              <div className="absolute top-5 left-5 z-10">
                <span className="px-3.5 py-1 rounded-full bg-[#FAF3EB]/90 backdrop-blur-md border border-[#E5C378]/60 text-[#A41A50] text-[10px] font-bold tracking-[0.22em] uppercase shadow-sm">
                  WOMEN&apos;S WEAR
                </span>
              </div>

              {/* Minimal Text Overlay */}
              <div className="absolute bottom-6 left-6 right-6 z-10 text-white">
                <h3 className="font-serif text-2xl sm:text-3xl font-bold tracking-wide mb-2 drop-shadow-md">
                  FOR EVERY WOMAN
                </h3>
                <p className="text-sm text-[#F8E5BA] max-w-sm drop-shadow leading-relaxed mb-4">
                  From everyday styles to outfits for celebrations, explore a range designed for different moments.
                </p>
                <Link
                  href="/women"
                  className="inline-flex items-center text-xs font-bold uppercase tracking-wider text-white hover:text-[#E5C378] transition-colors"
                >
                  <span>Explore Women&apos;s Showcase</span>
                  <span className="ml-2">→</span>
                </Link>
              </div>
            </div>

            {/* Editorial Footer */}
            <div className="p-4 sm:p-5 bg-gradient-to-r from-[#FFF5F7] to-[#FFFFFF] border-t border-[#E5C378]/25 flex items-center justify-between">
              <span className="text-xs font-semibold text-[#A41A50] uppercase tracking-wider">
                Dresses · Kurtis · 3-Piece Sets · Party Wear
              </span>
              <span className="text-xs text-[#69564A] italic font-serif">
                In-Store Selection
              </span>
            </div>
          </div>

          {/* RIGHT: KIDS EDITORIAL */}
          <div className="relative group overflow-hidden rounded-3xl bg-[#FFFFFF] border border-[#E5C378]/35 shadow-xl flex flex-col transition-all duration-500 hover:shadow-2xl hover:border-[#D4AF37]">
            <div className="relative aspect-[3/4] sm:aspect-[4/5] w-full overflow-hidden">
              <img
                src="/images/kids/kids-intro-lifestyle.jpg"
                alt="Indian children smiling in festive clothing at Kamal Selections lookbook"
                className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-700 ease-out"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#20040A]/85 via-transparent to-transparent"></div>

              {/* Category Stamp */}
              <div className="absolute top-5 left-5 z-10">
                <span className="px-3.5 py-1 rounded-full bg-[#FAF3EB]/90 backdrop-blur-md border border-[#E5C378]/60 text-[#1D4ED8] text-[10px] font-bold tracking-[0.22em] uppercase shadow-sm">
                  KIDS&apos; WEAR
                </span>
              </div>

              {/* Minimal Text Overlay */}
              <div className="absolute bottom-6 left-6 right-6 z-10 text-white">
                <h3 className="font-serif text-2xl sm:text-3xl font-bold tracking-wide mb-2 drop-shadow-md">
                  FOR EVERY LITTLE ONE
                </h3>
                <p className="text-sm text-[#F8E5BA] max-w-sm drop-shadow leading-relaxed mb-4">
                  Playful, comfortable and occasion-ready styles for girls and boys across every age.
                </p>
                <Link
                  href="/kids"
                  className="inline-flex items-center text-xs font-bold uppercase tracking-wider text-white hover:text-[#E5C378] transition-colors"
                >
                  <span>Explore Kids&apos; Showcase</span>
                  <span className="ml-2">→</span>
                </Link>
              </div>
            </div>

            {/* Editorial Footer */}
            <div className="p-4 sm:p-5 bg-gradient-to-r from-[#F0F5FA] to-[#FFFFFF] border-t border-[#E5C378]/25 flex items-center justify-between">
              <span className="text-xs font-semibold text-[#1D4ED8] uppercase tracking-wider">
                Frocks · Sets · Girls&apos; &amp; Boys&apos; Clothing
              </span>
              <span className="text-xs text-[#69564A] italic font-serif">
                In-Store Selection
              </span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
