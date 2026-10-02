"use client";

import Image from "next/image";

const WOMENS_CATEGORIES = [
  "Dresses",
  "Kurtis",
  "Tops",
  "Leggings",
  "3-Piece Sets",
  "Party Wear",
  "Burqa",
];

const KIDS_CATEGORIES = [
  "Kids Frocks",
  "Kids Co-Ords",
  "Girls' Ethnic Wear",
  "Boys' Wear",
];

export function StoreRangeOverview() {
  return (
    <section className="py-16 md:py-24 bg-[#FAF3EB] text-[#30251F] relative border-t border-[#E5C378]/25" id="store-range">
      {/* BACKGROUND AMBIENT GLOWS */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-[#E5C378]/15 via-transparent to-transparent rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-[#A41A50]/10 via-transparent to-transparent rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-18">
          <div className="inline-flex items-center gap-3 mb-4">
            <span className="w-8 h-px bg-[#D4AF37]"></span>
            <span className="text-xs font-semibold tracking-[0.24em] text-[#A41A50] uppercase">
              IN-STORE RANGE OVERVIEW
            </span>
            <span className="w-8 h-px bg-[#D4AF37]"></span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#30251F] leading-[1.15] mb-4">
            ONE STORE.<br />
            <span className="italic font-normal text-[#A41A50]">PLENTY OF STYLE.</span>
          </h2>

          <p className="text-base sm:text-lg text-[#51443B] leading-relaxed">
            Our collection brings together graceful women&apos;s ethnic fashion and joyful kids&apos; wear under one welcoming roof in Shadnagar.
          </p>

          <div className="mt-4 inline-block px-4 py-1.5 rounded-full bg-[#FFFFFF] border border-[#E5C378]/50 text-xs font-medium text-[#69564A] shadow-sm">
            Informational Range Guide · In-Store Try-Ons &amp; Sizing Available
          </div>
        </div>

        {/* TWO-COLUMN VISUAL SHOWCASE */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
          
          {/* LEFT: WOMEN'S DEPARTMENT CARD (6 COLS) */}
          <div className="lg:col-span-6 bg-[#FFFFFF] rounded-3xl p-6 sm:p-8 border border-[#E5C378]/40 shadow-xl flex flex-col justify-between">
            <div>
              {/* PREMIUM FULL-BOX MODEL BANNER */}
              <div className="relative rounded-2xl overflow-hidden shadow-xl border border-[#E5C378]/40 min-h-[300px] sm:min-h-[360px] w-full mb-6 group">
                <Image
                  src="/images/store/kamal-womens-department-model.jpg"
                  alt="Kamal Selections Women's Ethnic Wear Collection Model"
                  fill
                  className="object-cover object-[center_20%] transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#20040A]/90 via-[#20040A]/30 to-transparent pointer-events-none" />

                <div className="absolute top-4 left-4 z-10">
                  <span className="px-3.5 py-1 rounded-full bg-[#20040A]/85 border border-[#E5C378]/60 text-[#E5C378] text-[10px] font-bold tracking-[0.2em] uppercase backdrop-blur-md shadow-md">
                    WOMEN&apos;S DEPARTMENT
                  </span>
                </div>

                <div className="absolute bottom-5 left-5 right-5 text-white z-10">
                  <h3 className="font-serif text-2xl sm:text-3xl font-bold mb-1">
                    Grace &amp; Elegance in Every Thread
                  </h3>
                  <p className="text-xs sm:text-sm text-[#F8E5BA]/90">
                    Sarees, Lehengas, 3-Piece Sets, Kurtis &amp; Everyday Basics
                  </p>
                </div>
              </div>

              {/* CATEGORIES CONCISE LABELS */}
              <div className="flex items-center justify-between mb-4 pb-2 border-b border-[#E5C378]/30">
                <span className="text-xs font-bold text-[#A41A50] tracking-[0.18em] uppercase">
                  7 Core Categories
                </span>
                <span className="text-xs text-[#69564A] font-serif italic">In-Store Collection</span>
              </div>

              <div className="flex flex-wrap gap-2.5">
                {WOMENS_CATEGORIES.map((name) => (
                  <div
                    key={name}
                    className="px-4 py-2 rounded-full bg-[#FAF3EB]/90 border border-[#E5C378]/40 hover:border-[#A41A50] hover:bg-[#380511] hover:text-[#F8E5BA] text-[#30251F] text-xs font-semibold transition-all duration-300 flex items-center gap-2 shadow-sm cursor-default"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#A41A50]"></span>
                    <span>{name}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-[#E5C378]/25 flex items-center justify-between text-xs text-[#A41A50] font-semibold">
              <span>Visit Kamal Selections Shadnagar</span>
              <span>Explore Women&apos;s Wear →</span>
            </div>
          </div>

          {/* RIGHT: KIDS' DEPARTMENT CARD (6 COLS) */}
          <div className="lg:col-span-6 bg-[#FFFFFF] rounded-3xl p-6 sm:p-8 border border-[#E5C378]/40 shadow-xl flex flex-col justify-between">
            <div>
              {/* PREMIUM FULL-BOX MODEL BANNER */}
              <div className="relative rounded-2xl overflow-hidden shadow-xl border border-[#E5C378]/40 min-h-[300px] sm:min-h-[360px] w-full mb-6 group">
                <Image
                  src="/images/store/kamal-kids-department-models.jpg"
                  alt="Kamal Selections Kids Festive & Daily Wear Models"
                  fill
                  className="object-cover object-[center_25%] transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#20040A]/90 via-[#20040A]/30 to-transparent pointer-events-none" />

                <div className="absolute top-4 left-4 z-10">
                  <span className="px-3.5 py-1 rounded-full bg-[#20040A]/85 border border-[#E5C378]/60 text-[#E5C378] text-[10px] font-bold tracking-[0.2em] uppercase backdrop-blur-md shadow-md">
                    KIDS&apos; DEPARTMENT
                  </span>
                </div>

                <div className="absolute bottom-5 left-5 right-5 text-white z-10">
                  <h3 className="font-serif text-2xl sm:text-3xl font-bold mb-1">
                    Joyful Styles for Girls &amp; Boys
                  </h3>
                  <p className="text-xs sm:text-sm text-[#F8E5BA]/90">
                    Festive Frocks, Net Lehengas, Nehru Jackets &amp; Co-Ord Sets
                  </p>
                </div>
              </div>

              {/* CATEGORIES CONCISE LABELS */}
              <div className="flex items-center justify-between mb-4 pb-2 border-b border-[#E5C378]/30">
                <span className="text-xs font-bold text-[#A41A50] tracking-[0.18em] uppercase">
                  Girls &amp; Boys Edit
                </span>
                <span className="text-xs text-[#69564A] font-serif italic">Ages 1 to 14</span>
              </div>

              <div className="flex flex-wrap gap-2.5">
                {KIDS_CATEGORIES.map((name) => (
                  <div
                    key={name}
                    className="px-4 py-2 rounded-full bg-[#FAF3EB]/90 border border-[#E5C378]/40 hover:border-[#A41A50] hover:bg-[#380511] hover:text-[#F8E5BA] text-[#30251F] text-xs font-semibold transition-all duration-300 flex items-center gap-2 shadow-sm cursor-default"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#A41A50]"></span>
                    <span>{name}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-[#E5C378]/25 flex items-center justify-between text-xs text-[#A41A50] font-semibold">
              <span>Cotton Lined &amp; Skin-Friendly Fabrics</span>
              <span>Explore Kids&apos; Wear →</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
