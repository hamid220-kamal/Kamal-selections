"use client";

import Image from "next/image";
import Link from "next/link";
import { womensData } from "@/data/womens";
import { brandData } from "@/data/brand";

interface WomensCategoryMosaicProps {
  onOpenStoreModal?: () => void;
}

export function WomensCategoryMosaic({ onOpenStoreModal }: WomensCategoryMosaicProps = {}) {
  const categories = womensData.categories;

  // Category mapping:
  // 0: Dresses (large)
  // 1: Kurtis (large/medium)
  // 2: Tops (medium)
  // 3: Leggings (medium)
  // 4: Burqa (compact)
  // 5: 3-Piece Sets (compact)
  // 6: Party Wear (compact)
  const dresses = categories.find((c) => c.id === "dresses") || categories[0];
  const kurtis = categories.find((c) => c.id === "kurtis") || categories[1];
  const tops = categories.find((c) => c.id === "tops") || categories[2];
  const leggings = categories.find((c) => c.id === "leggings") || categories[3];
  const burqa = categories.find((c) => c.id === "burqa") || categories[4];
  const threePiece = categories.find((c) => c.id === "3piece-sets") || categories[5];
  const partyWear = categories.find((c) => c.id === "party-wear") || categories[6];

  return (
    <section className="py-20 sm:py-24 bg-[#FDFBF7]" id="categories">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* SECTION HEADER — STORE-FIRST INFORMATIONAL PRESENTATION */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16 space-y-3">
          <span className="inline-block text-xs font-bold tracking-[0.22em] text-[#D4AF37] uppercase">
            AVAILABLE IN STORE · OUR WOMEN&apos;S WEAR RANGE
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#380511]">
            Styles for Every Woman
          </h2>
          <div className="w-16 h-[2px] bg-[#D4AF37] mx-auto my-2" aria-hidden="true" />
          <p className="text-base sm:text-lg text-[#3D2314]/80 leading-relaxed">
            From everyday essentials to occasion-ready styles, discover the kinds of women&apos;s fashion available at Kamal Selections, Shadnagar.
          </p>
        </div>

        {/* INFORMATIONAL CATEGORY SHOWCASE GRID — NO ARROWS, NO ROUTING, CURSOR DEFAULT */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-6">
          
          {/* 01: DRESSES — LARGE VISUAL (LG SPAN 7) */}
          {dresses && (
            <div className="lg:col-span-7 group relative overflow-hidden rounded-2xl bg-[#FAF5EB] border border-[#E5C378]/30 shadow-md flex flex-col justify-end min-h-[380px] lg:min-h-[460px] p-6 sm:p-8 cursor-default">
              <Image
                src={dresses.image}
                alt={dresses.altText}
                fill
                sizes="(max-width: 1024px) 100vw, 60vw"
                className="object-cover object-top group-hover:scale-[1.03] transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#380511]/92 via-[#380511]/35 to-transparent pointer-events-none" />
              
              <div className="relative z-10 space-y-1.5 text-[#FAF5EB]">
                <span className="text-[11px] font-mono font-bold tracking-widest text-[#D4AF37] uppercase">
                  IN STORE STYLE
                </span>
                <h3 className="font-serif text-3xl sm:text-4xl font-bold tracking-wide">
                  {dresses.name}
                </h3>
                <p className="text-sm sm:text-base text-[#FAF5EB]/85 font-sans max-w-md">
                  {dresses.description}
                </p>
              </div>
            </div>
          )}

          {/* 02: KURTIS — LARGE / MEDIUM VISUAL (LG SPAN 5) */}
          {kurtis && (
            <div className="lg:col-span-5 group relative overflow-hidden rounded-2xl bg-[#FAF5EB] border border-[#E5C378]/30 shadow-md flex flex-col justify-end min-h-[340px] lg:min-h-[460px] p-6 sm:p-8 cursor-default">
              <Image
                src={kurtis.image}
                alt={kurtis.altText}
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover object-center group-hover:scale-[1.03] transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#380511]/92 via-[#380511]/35 to-transparent pointer-events-none" />
              
              <div className="relative z-10 space-y-1.5 text-[#FAF5EB]">
                <span className="text-[11px] font-mono font-bold tracking-widest text-[#D4AF37] uppercase">
                  IN STORE STYLE
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold tracking-wide">
                  {kurtis.name}
                </h3>
                <p className="text-xs sm:text-sm text-[#FAF5EB]/85 font-sans max-w-sm">
                  {kurtis.description}
                </p>
              </div>
            </div>
          )}

          {/* 03: TOPS — MEDIUM VISUAL (LG SPAN 6) */}
          {tops && (
            <div className="lg:col-span-6 group relative overflow-hidden rounded-2xl bg-[#FAF5EB] border border-[#E5C378]/30 shadow-md flex flex-col justify-end min-h-[320px] p-6 sm:p-8 cursor-default">
              <Image
                src={tops.image}
                alt={tops.altText}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-center group-hover:scale-[1.03] transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#380511]/92 via-[#380511]/35 to-transparent pointer-events-none" />
              
              <div className="relative z-10 space-y-1.5 text-[#FAF5EB]">
                <span className="text-[11px] font-mono font-bold tracking-widest text-[#D4AF37] uppercase">
                  IN STORE STYLE
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold tracking-wide">
                  {tops.name}
                </h3>
                <p className="text-xs sm:text-sm text-[#FAF5EB]/85 font-sans">
                  {tops.description}
                </p>
              </div>
            </div>
          )}

          {/* 04: LEGGINGS — MEDIUM VISUAL (LG SPAN 6) */}
          {leggings && (
            <div className="lg:col-span-6 group relative overflow-hidden rounded-2xl bg-[#FAF5EB] border border-[#E5C378]/30 shadow-md flex flex-col justify-end min-h-[320px] p-6 sm:p-8 cursor-default">
              <Image
                src={leggings.image}
                alt={leggings.altText}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-top group-hover:scale-[1.03] transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#380511]/92 via-[#380511]/35 to-transparent pointer-events-none" />
              
              <div className="relative z-10 space-y-1.5 text-[#FAF5EB]">
                <span className="text-[11px] font-mono font-bold tracking-widest text-[#D4AF37] uppercase">
                  IN STORE STYLE
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold tracking-wide">
                  {leggings.name}
                </h3>
                <p className="text-xs sm:text-sm text-[#FAF5EB]/85 font-sans">
                  {leggings.description}
                </p>
              </div>
            </div>
          )}

          {/* 05: BURQA — COMPACT VISUAL (LG SPAN 4) */}
          {burqa && (
            <div className="lg:col-span-4 group relative overflow-hidden rounded-2xl bg-[#FAF5EB] border border-[#E5C378]/30 shadow-md flex flex-col justify-end min-h-[300px] p-6 cursor-default">
              <Image
                src={burqa.image}
                alt={burqa.altText}
                fill
                sizes="(max-width: 1024px) 100vw, 33vw"
                className="object-cover object-top group-hover:scale-[1.03] transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#380511]/92 via-[#380511]/40 to-transparent pointer-events-none" />
              
              <div className="relative z-10 space-y-1.5 text-[#FAF5EB]">
                <span className="text-[11px] font-mono font-bold tracking-widest text-[#D4AF37] uppercase">
                  IN STORE STYLE
                </span>
                <h3 className="font-serif text-xl sm:text-2xl font-bold tracking-wide">
                  {burqa.name}
                </h3>
                <p className="text-xs text-[#FAF5EB]/85 font-sans">
                  {burqa.description}
                </p>
              </div>
            </div>
          )}

          {/* 06: 3-PIECE SETS — COMPACT VISUAL (LG SPAN 4) */}
          {threePiece && (
            <div className="lg:col-span-4 group relative overflow-hidden rounded-2xl bg-[#FAF5EB] border border-[#E5C378]/30 shadow-md flex flex-col justify-end min-h-[300px] p-6 cursor-default">
              <Image
                src={threePiece.image}
                alt={threePiece.altText}
                fill
                sizes="(max-width: 1024px) 100vw, 33vw"
                className="object-cover object-top group-hover:scale-[1.03] transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#380511]/92 via-[#380511]/40 to-transparent pointer-events-none" />
              
              <div className="relative z-10 space-y-1.5 text-[#FAF5EB]">
                <span className="text-[11px] font-mono font-bold tracking-widest text-[#D4AF37] uppercase">
                  IN STORE STYLE
                </span>
                <h3 className="font-serif text-xl sm:text-2xl font-bold tracking-wide">
                  {threePiece.name}
                </h3>
                <p className="text-xs text-[#FAF5EB]/85 font-sans">
                  {threePiece.description}
                </p>
              </div>
            </div>
          )}

          {/* 07: PARTY WEAR — COMPACT VISUAL (LG SPAN 4) */}
          {partyWear && (
            <div className="lg:col-span-4 group relative overflow-hidden rounded-2xl bg-[#FAF5EB] border border-[#E5C378]/30 shadow-md flex flex-col justify-end min-h-[300px] p-6 cursor-default">
              <Image
                src={partyWear.image}
                alt={partyWear.altText}
                fill
                sizes="(max-width: 1024px) 100vw, 33vw"
                className="object-cover object-top group-hover:scale-[1.03] transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#380511]/92 via-[#380511]/40 to-transparent pointer-events-none" />
              
              <div className="relative z-10 space-y-1.5 text-[#FAF5EB]">
                <span className="text-[11px] font-mono font-bold tracking-widest text-[#D4AF37] uppercase">
                  IN STORE STYLE
                </span>
                <h3 className="font-serif text-xl sm:text-2xl font-bold tracking-wide">
                  {partyWear.name}
                </h3>
                <p className="text-xs text-[#FAF5EB]/85 font-sans">
                  {partyWear.description}
                </p>
              </div>
            </div>
          )}

        </div>

        {/* LOCAL CTA — PROMPT REQUIREMENT 17 */}
        <div className="mt-16 sm:mt-20 p-8 sm:p-12 rounded-3xl bg-[#FAF5EB] border border-[#E5C378]/40 shadow-lg text-center max-w-4xl mx-auto">
          <span className="text-xs font-bold tracking-[0.2em] text-[#D4AF37] uppercase block mb-3">
            VISIT OUR PHYSICAL STORE IN SHADNAGAR
          </span>
          <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#380511]">
            See It. Try It. Love It.
          </h3>
          <p className="mt-3 text-sm sm:text-base text-[#3D2314]/80 max-w-2xl mx-auto leading-relaxed">
            Visit Kamal Selections at Ibrahim Complex, Main Road, Shadnagar and explore our latest women&apos;s and kids&apos; styles in person.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/store"
              className="inline-flex min-h-12 items-center gap-2 rounded-full bg-[#4A0717] px-8 text-sm font-semibold text-[#FAF5EB] shadow-md transition-colors hover:bg-[#380511]"
            >
              <span>Visit Our Store</span>
              <span aria-hidden="true">→</span>
            </Link>
            <a
              href={brandData.maps.directionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-12 items-center gap-2 rounded-full border border-[#4A0717]/40 bg-white/70 px-7 text-sm font-semibold text-[#4A0717] transition-colors hover:bg-white"
            >
              <span>Get Directions</span>
              <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
