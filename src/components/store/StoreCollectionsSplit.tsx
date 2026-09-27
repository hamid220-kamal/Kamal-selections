"use client";

import Link from "next/link";

export function StoreCollectionsSplit() {
  return (
    <section className="py-20 md:py-28 bg-[#F4EEE5] text-[#30251F] relative overflow-hidden" id="departments-split">
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
          <div className="relative group overflow-hidden rounded-3xl bg-[#FFFFFF] border border-[#E5C378]/35 shadow-xl flex flex-col transition-all duration-500 hover:shadow-2xl hover:border-[#D4AF37]">
            <div className="relative aspect-[4/3] sm:aspect-[16/11] w-full overflow-hidden">
              <img
                src="/images/women/women-store-browsing.jpg"
                alt="Women's ethnic collection in store at Kamal Selections"
                className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-700 ease-out"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#20040A]/80 via-transparent to-transparent"></div>

              <div className="absolute top-4 left-4 z-10">
                <span className="px-3.5 py-1 rounded-full bg-[#FAF3EB]/90 backdrop-blur-md border border-[#E5C378]/60 text-[#A41A50] text-[10px] font-bold tracking-[0.22em] uppercase shadow-sm">
                  WOMEN&apos;S WEAR
                </span>
              </div>

              <div className="absolute bottom-5 left-5 right-5 z-10 text-white">
                <h3 className="font-serif text-2xl sm:text-3xl font-bold tracking-wide drop-shadow-md mb-1.5">
                  Women&apos;s Wear
                </h3>
                <p className="text-sm text-[#F8E5BA] drop-shadow leading-relaxed max-w-sm">
                  Everyday styles, elegant looks and occasion-ready fashion for women.
                </p>
              </div>
            </div>

            <div className="p-6 sm:p-7 flex-grow flex flex-col justify-between bg-gradient-to-b from-[#FFFFFF] to-[#FAF3EB]/40">
              <p className="text-sm text-[#51443B] leading-relaxed mb-6">
                Explore a full range of kurtis, dresses, 3-piece sets, leggings and festive party wear selected for modern lifestyles and celebratory occasions.
              </p>

              <div>
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
          </div>

          {/* RIGHT: KIDS WEAR */}
          <div className="relative group overflow-hidden rounded-3xl bg-[#FFFFFF] border border-[#E5C378]/35 shadow-xl flex flex-col transition-all duration-500 hover:shadow-2xl hover:border-[#D4AF37]">
            <div className="relative aspect-[4/3] sm:aspect-[16/11] w-full overflow-hidden">
              <img
                src="/images/kids/kids-intro-lifestyle.jpg"
                alt="Kids festive outfits in store at Kamal Selections"
                className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-700 ease-out"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0F1E36]/80 via-transparent to-transparent"></div>

              <div className="absolute top-4 left-4 z-10">
                <span className="px-3.5 py-1 rounded-full bg-[#FAF3EB]/90 backdrop-blur-md border border-[#E5C378]/60 text-[#1D4ED8] text-[10px] font-bold tracking-[0.22em] uppercase shadow-sm">
                  KIDS WEAR
                </span>
              </div>

              <div className="absolute bottom-5 left-5 right-5 z-10 text-white">
                <h3 className="font-serif text-2xl sm:text-3xl font-bold tracking-wide drop-shadow-md mb-1.5">
                  Kids Wear
                </h3>
                <p className="text-sm text-[#F8E5BA] drop-shadow leading-relaxed max-w-sm">
                  Playful and comfortable styles for girls and boys.
                </p>
              </div>
            </div>

            <div className="p-6 sm:p-7 flex-grow flex flex-col justify-between bg-gradient-to-b from-[#FFFFFF] to-[#FAF3EB]/40">
              <p className="text-sm text-[#51443B] leading-relaxed mb-6">
                Discover delightful frocks, easy coordinated sets, traditional festive garments, and daily active clothing made to keep children happy and comfortable.
              </p>

              <div>
                <Link
                  href="/kids"
                  className="btn btn-outline btn-pill w-full sm:w-auto text-center"
                  id="store-explore-kids-btn"
                >
                  <span>Explore Kids Wear</span>
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
