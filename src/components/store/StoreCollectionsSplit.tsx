"use client";

import Link from "next/link";
import Image from "next/image";

export function StoreCollectionsSplit() {
  return (
    <section className="py-16 md:py-24 bg-[#F4EEE5] text-[#30251F] relative overflow-hidden" id="departments-split">
      {/* AMBIENT GLOWS */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-[#E5C378]/15 via-transparent to-transparent rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-[#A41A50]/10 via-transparent to-transparent rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* HEADER */}
        <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
          <div className="inline-flex items-center gap-3 mb-3">
            <span className="w-8 h-px bg-[#D4AF37]"></span>
            <span className="text-xs font-semibold tracking-[0.24em] text-[#A41A50] uppercase">
              TWO IN-STORE DEPARTMENTS
            </span>
            <span className="w-8 h-px bg-[#D4AF37]"></span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#30251F]">
            Style For Every Member.
          </h2>
        </div>

        {/* TWO-COLUMN FULL-BOX PHOTO CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 items-stretch">
          
          {/* LEFT: WOMEN'S WEAR FULL BOX CARD */}
          <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-[#E5C378]/40 min-h-[440px] sm:min-h-[500px] flex flex-col justify-between p-7 sm:p-9 group">
            <Image
              src="/images/store/kamal-store-womens-card.jpg"
              alt="Kamal Selections Women's Wear Department"
              fill
              className="object-cover object-[center_20%] transition-transform duration-700 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
            {/* GRADIENT OVERLAY */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#20040A]/90 via-[#20040A]/35 to-black/20 pointer-events-none" />

            {/* TOP LABELED BADGE */}
            <div className="relative z-10 flex items-center justify-between">
              <span className="px-3.5 py-1 rounded-full bg-[#20040A]/85 border border-[#E5C378]/60 text-[#E5C378] text-[10px] font-bold tracking-[0.22em] uppercase backdrop-blur-md shadow-md">
                WOMEN&apos;S DEPARTMENT
              </span>
              <span className="text-xs text-[#F8E5BA]/90 font-serif italic backdrop-blur-md bg-black/30 px-3 py-1 rounded-full border border-white/10">
                In-Store Racks
              </span>
            </div>

            {/* BOTTOM LABELED TEXT & CTA */}
            <div className="relative z-10 text-white mt-auto pt-16">
              <h3 className="font-serif text-3xl sm:text-4xl font-bold tracking-wide mb-2 text-white">
                Women&apos;s Wear
              </h3>
              <p className="text-xs sm:text-sm text-[#F8E5BA]/90 leading-relaxed mb-6 max-w-md">
                Sarees, Lehengas, 3-Piece Sets, Kurtis &amp; Festive Party Wear
              </p>

              <div>
                <Link
                  href="/women"
                  className="btn btn-primary btn-pill"
                  id="store-explore-womens-btn"
                >
                  <span>Explore Women&apos;s Wear</span>
                  <span aria-hidden="true" className="btn-arrow">→</span>
                </Link>
              </div>
            </div>
          </div>

          {/* RIGHT: KIDS' WEAR FULL BOX CARD */}
          <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-[#E5C378]/40 min-h-[440px] sm:min-h-[500px] flex flex-col justify-between p-7 sm:p-9 group">
            <Image
              src="/images/store/kamal-store-kids-card.jpg"
              alt="Kamal Selections Kids' Wear Department"
              fill
              className="object-cover object-[center_20%] transition-transform duration-700 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
            {/* GRADIENT OVERLAY */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#20040A]/90 via-[#20040A]/35 to-black/20 pointer-events-none" />

            {/* TOP LABELED BADGE */}
            <div className="relative z-10 flex items-center justify-between">
              <span className="px-3.5 py-1 rounded-full bg-[#20040A]/85 border border-[#E5C378]/60 text-[#E5C378] text-[10px] font-bold tracking-[0.22em] uppercase backdrop-blur-md shadow-md">
                KIDS&apos; DEPARTMENT
              </span>
              <span className="text-xs text-[#F8E5BA]/90 font-serif italic backdrop-blur-md bg-black/30 px-3 py-1 rounded-full border border-white/10">
                In-Store Section
              </span>
            </div>

            {/* BOTTOM LABELED TEXT & CTA */}
            <div className="relative z-10 text-white mt-auto pt-16">
              <h3 className="font-serif text-3xl sm:text-4xl font-bold tracking-wide mb-2 text-white">
                Kids&apos; Wear
              </h3>
              <p className="text-xs sm:text-sm text-[#F8E5BA]/90 leading-relaxed mb-6 max-w-md">
                Festive Frocks, Net Lehengas, Sherwanis &amp; Active Co-Ords (Ages 1 to 14)
              </p>

              <div>
                <Link
                  href="/kids"
                  className="btn btn-outline btn-pill border-white/40 text-white hover:bg-white hover:text-[#380511]"
                  id="store-explore-kids-btn"
                >
                  <span>Explore Kids&apos; Wear</span>
                  <span aria-hidden="true" className="btn-arrow">→</span>
                </Link>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
