"use client";

import Image from "next/image";
import { womensData } from "@/data/womens";

export function WomensCategoryMosaic() {
  const categories = womensData.categories;

  // Layout map for asymmetric grid composition
  // Dresses (large), Kurtis (medium), 3-Piece Sets (medium), others (compact)
  return (
    <section className="py-20 bg-[#FDFBF7]" id="categories">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* SECTION HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-bold tracking-widest text-[#D4AF37] uppercase">
            COLLECTION NAVIGATOR
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#380511]">
            Explore Women's Categories
          </h2>
          <div className="w-16 h-[2px] bg-[#D4AF37] mx-auto my-2"></div>
          <p className="text-base sm:text-lg text-[#3D2314]/80">
            Find styles for everyday dressing, special occasions and everything in between.
          </p>
        </div>

        {/* ASYMMETRIC EDITORIAL GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-6">
          
          {/* 01: DRESSES - FEATURED LARGE CARD (LG SPAN 7, TALL) */}
          {categories[0] && (
            <div key={categories[0].id} className="lg:col-span-7 group relative overflow-hidden rounded-2xl bg-[#FAF5EB] border border-[#E5C378]/30 shadow-md flex flex-col justify-end min-h-[380px] lg:min-h-[460px] p-6 sm:p-8 transition-transform duration-500 hover:-translate-y-1">
              <Image
                src={categories[0].image}
                alt={categories[0].altText}
                fill
                sizes="(max-width: 1024px) 100vw, 60vw"
                className="object-cover object-top group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#380511]/90 via-[#380511]/30 to-transparent" />
              
              <div className="relative z-10 space-y-2 text-[#FAF5EB]">
                <span className="text-xs font-mono font-bold tracking-widest text-[#D4AF37] uppercase">
                  01 — FEATURED CATEGORY
                </span>
                <h3 className="font-serif text-3xl sm:text-4xl font-bold tracking-wide">
                  {categories[0].name}
                </h3>
                <p className="text-sm sm:text-base text-[#FAF5EB]/85 font-sans max-w-md">
                  {categories[0].description}
                </p>
                <div className="pt-2 inline-flex items-center text-xs font-semibold uppercase tracking-wider text-[#D4AF37] group-hover:translate-x-2 transition-transform duration-300">
                  <span>Explore Category</span>
                  <span className="ml-2">→</span>
                </div>
              </div>
            </div>
          )}

          {/* 02: KURTIS - MEDIUM CARD (LG SPAN 5) */}
          {categories[1] && (
            <div key={categories[1].id} className="lg:col-span-5 group relative overflow-hidden rounded-2xl bg-[#FAF5EB] border border-[#E5C378]/30 shadow-md flex flex-col justify-end min-h-[340px] lg:min-h-[460px] p-6 sm:p-8 transition-transform duration-500 hover:-translate-y-1">
              <Image
                src={categories[1].image}
                alt={categories[1].altText}
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#380511]/90 via-[#380511]/30 to-transparent" />
              
              <div className="relative z-10 space-y-2 text-[#FAF5EB]">
                <span className="text-xs font-mono font-bold tracking-widest text-[#D4AF37] uppercase">
                  02 — CATEGORY
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold tracking-wide">
                  {categories[1].name}
                </h3>
                <p className="text-xs sm:text-sm text-[#FAF5EB]/85 font-sans max-w-sm">
                  {categories[1].description}
                </p>
                <div className="pt-2 inline-flex items-center text-xs font-semibold uppercase tracking-wider text-[#D4AF37] group-hover:translate-x-2 transition-transform duration-300">
                  <span>Explore Category</span>
                  <span className="ml-2">→</span>
                </div>
              </div>
            </div>
          )}

          {/* 03: 3-PIECE SETS - MEDIUM CARD (LG SPAN 5) */}
          {categories[5] && (
            <div key={categories[5].id} className="lg:col-span-5 group relative overflow-hidden rounded-2xl bg-[#FAF5EB] border border-[#E5C378]/30 shadow-md flex flex-col justify-end min-h-[320px] p-6 sm:p-8 transition-transform duration-500 hover:-translate-y-1">
              <Image
                src={categories[5].image}
                alt={categories[5].altText}
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover object-top group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#380511]/90 via-[#380511]/30 to-transparent" />
              
              <div className="relative z-10 space-y-2 text-[#FAF5EB]">
                <span className="text-xs font-mono font-bold tracking-widest text-[#D4AF37] uppercase">
                  06 — CATEGORY
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold tracking-wide">
                  {categories[5].name}
                </h3>
                <p className="text-xs sm:text-sm text-[#FAF5EB]/85 font-sans">
                  {categories[5].description}
                </p>
                <div className="pt-2 inline-flex items-center text-xs font-semibold uppercase tracking-wider text-[#D4AF37] group-hover:translate-x-2 transition-transform duration-300">
                  <span>Explore Category</span>
                  <span className="ml-2">→</span>
                </div>
              </div>
            </div>
          )}

          {/* 04: TOPS (LG SPAN 7) */}
          {categories[2] && (
            <div key={categories[2].id} className="lg:col-span-7 group relative overflow-hidden rounded-2xl bg-[#FAF5EB] border border-[#E5C378]/30 shadow-md flex flex-col justify-end min-h-[320px] p-6 sm:p-8 transition-transform duration-500 hover:-translate-y-1">
              <Image
                src={categories[2].image}
                alt={categories[2].altText}
                fill
                sizes="(max-width: 1024px) 100vw, 60vw"
                className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#380511]/90 via-[#380511]/30 to-transparent" />
              
              <div className="relative z-10 space-y-2 text-[#FAF5EB]">
                <span className="text-xs font-mono font-bold tracking-widest text-[#D4AF37] uppercase">
                  03 — CATEGORY
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold tracking-wide">
                  {categories[2].name}
                </h3>
                <p className="text-xs sm:text-sm text-[#FAF5EB]/85 font-sans">
                  {categories[2].description}
                </p>
                <div className="pt-2 inline-flex items-center text-xs font-semibold uppercase tracking-wider text-[#D4AF37] group-hover:translate-x-2 transition-transform duration-300">
                  <span>Explore Category</span>
                  <span className="ml-2">→</span>
                </div>
              </div>
            </div>
          )}

          {/* LOWER ROW: LEGGINGS (LG SPAN 4), BURQA (LG SPAN 4), PARTY WEAR (LG SPAN 4) */}
          {[categories[3], categories[4], categories[6]].map((cat, idx) => {
            if (!cat) return null;
            const itemNum = cat.id === "leggings" ? "04" : cat.id === "burqa" ? "05" : "07";
            return (
              <div key={cat.id} className="lg:col-span-4 group relative overflow-hidden rounded-2xl bg-[#FAF5EB] border border-[#E5C378]/30 shadow-md flex flex-col justify-end min-h-[300px] p-6 transition-transform duration-500 hover:-translate-y-1">
                <Image
                  src={cat.image}
                  alt={cat.altText}
                  fill
                  sizes="(max-width: 1024px) 50vw, 33vw"
                  className="object-cover object-top group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#380511]/90 via-[#380511]/40 to-transparent" />
                
                <div className="relative z-10 space-y-1.5 text-[#FAF5EB]">
                  <span className="text-xs font-mono font-bold tracking-widest text-[#D4AF37] uppercase">
                    {itemNum} — CATEGORY
                  </span>
                  <h3 className="font-serif text-xl sm:text-2xl font-bold tracking-wide">
                    {cat.name}
                  </h3>
                  <p className="text-xs text-[#FAF5EB]/85 font-sans line-clamp-2">
                    {cat.description}
                  </p>
                  <div className="pt-2 inline-flex items-center text-xs font-semibold uppercase tracking-wider text-[#D4AF37] group-hover:translate-x-1.5 transition-transform duration-300">
                    <span>Explore</span>
                    <span className="ml-1.5">→</span>
                  </div>
                </div>
              </div>
            );
          })}

        </div>
      </div>
    </section>
  );
}
