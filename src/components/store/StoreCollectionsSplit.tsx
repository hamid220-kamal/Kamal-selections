"use client";

import Link from "next/link";

export function StoreCollectionsSplit() {
  return (
    <section className="py-16 md:py-20 bg-[#F4EEE5] text-[#30251F] relative overflow-hidden" id="departments-split">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* HEADER */}
        <div className="text-center max-w-2xl mx-auto mb-14 md:mb-18">
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

        {/* TWO-COLUMN EDITORIAL GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-stretch">
          
          {/* LEFT: WOMEN'S WEAR */}
          <div className="relative group overflow-hidden rounded-3xl bg-gradient-to-br from-[#2E050F] via-[#20040A] to-[#140106] border border-[#E5C378]/40 shadow-xl p-8 sm:p-10 flex flex-col justify-between text-white transition-all duration-500 hover:shadow-2xl hover:border-[#D4AF37]">
            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="px-3.5 py-1 rounded-full bg-[#E5C378]/20 border border-[#E5C378]/50 text-[#F8E5BA] text-[10px] font-bold tracking-[0.22em] uppercase">
                  WOMEN&apos;S DEPARTMENT
                </span>
                <span className="text-xs text-[#E5C378] font-serif italic">In-Store Racks</span>
              </div>

              <h3 className="font-serif text-3xl font-bold tracking-wide mb-3">
                Women&apos;s Wear
              </h3>
              <p className="text-sm text-[#F8E5BA]/90 leading-relaxed mb-6">
                Explore a full range of kurtis, dresses, 3-piece sets, leggings and festive party wear selected for modern lifestyles and celebratory occasions in Shadnagar.
              </p>

              <div className="space-y-2.5 pt-4 border-t border-[#E5C378]/25 text-xs text-[#F8E5BA]/80 mb-8">
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#E5C378]"></span>
                  <span><strong>Silhouettes:</strong> Flared Anarkalis, Daily Kurtis &amp; Wedding Lehengas</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#E5C378]"></span>
                  <span><strong>Fabrics:</strong> Pure Cotton, Modal, Chanderi Silk &amp; Organza</span>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-[#E5C378]/20">
              <Link
                href="/women"
                className="btn btn-primary btn-pill w-full sm:w-auto text-center"
                id="store-explore-womens-btn"
              >
                <span>Explore Women&apos;s Wear</span>
                <span aria-hidden="true" className="btn-arrow">→</span>
              </Link>
            </div>
          </div>

          {/* RIGHT: KIDS WEAR */}
          <div className="relative group overflow-hidden rounded-3xl bg-gradient-to-br from-[#121B2F] via-[#0C1220] to-[#060A12] border border-[#E5C378]/40 shadow-xl p-8 sm:p-10 flex flex-col justify-between text-white transition-all duration-500 hover:shadow-2xl hover:border-[#D4AF37]">
            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="px-3.5 py-1 rounded-full bg-[#E5C378]/20 border border-[#E5C378]/50 text-[#F8E5BA] text-[10px] font-bold tracking-[0.22em] uppercase">
                  KIDS&apos; DEPARTMENT
                </span>
                <span className="text-xs text-[#E5C378] font-serif italic">In-Store Section</span>
              </div>

              <h3 className="font-serif text-3xl font-bold tracking-wide mb-3">
                Kids&apos; Wear
              </h3>
              <p className="text-sm text-[#F8E5BA]/90 leading-relaxed mb-6">
                Discover delightful frocks, easy coordinated sets, traditional festive sherwanis, and daily active clothing made to keep children happy and comfortable.
              </p>

              <div className="space-y-2.5 pt-4 border-t border-[#E5C378]/25 text-xs text-[#F8E5BA]/80 mb-8">
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#E5C378]"></span>
                  <span><strong>Ages:</strong> Toddler sizes (1 yr) to teenage attire (14+ yrs)</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#E5C378]"></span>
                  <span><strong>Comfort:</strong> Soft inner lining &amp; breathable everyday cotton</span>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-[#E5C378]/20">
              <Link
                href="/kids"
                className="btn btn-outline btn-pill w-full sm:w-auto text-center"
                id="store-explore-kids-btn"
              >
                <span>Explore Kids&apos; Wear</span>
                <span aria-hidden="true" className="btn-arrow">→</span>
              </Link>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
