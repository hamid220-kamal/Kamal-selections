"use client";

export function StoreGallery() {
  return (
    <section className="py-20 md:py-28 bg-[#FAF3EB] text-[#30251F] relative overflow-hidden border-t border-[#E5C378]/25" id="store-gallery">
      {/* AMBIENT BACKGROUND GLOW */}
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-gradient-to-tr from-[#E5C378]/15 via-transparent to-transparent rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-3 mb-4">
            <span className="w-8 h-px bg-[#D4AF37]"></span>
            <span className="text-xs font-semibold tracking-[0.24em] text-[#A41A50] uppercase">
              AUTHENTIC STORE GALLERY
            </span>
            <span className="w-8 h-px bg-[#D4AF37]"></span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#30251F] leading-[1.15] mb-5">
            STEP INSIDE<br />
            <span className="italic font-normal text-[#A41A50]">KAMAL SELECTIONS.</span>
          </h2>

          <p className="text-base sm:text-lg text-[#51443B] leading-relaxed">
            Take a visual tour through our physical store in Ibrahim Complex, Main Road, Shadnagar — from our storefront signage to our women&apos;s and kids&apos; showrooms.
          </p>
        </div>

        {/* 4-IMAGE EDITORIAL SHOWCASE COMPOSITION */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
          
          {/* IMAGE 1: FEATURED LARGE (7 COLS) — MAIN ENTRANCE & SHOWROOM OVERVIEW (store1.png) */}
          <div className="lg:col-span-7 group relative rounded-3xl overflow-hidden bg-[#FFFFFF] border border-[#E5C378]/40 shadow-xl flex flex-col justify-between transition-all duration-500 hover:shadow-2xl hover:border-[#D4AF37]">
            <div className="relative aspect-[16/11] sm:aspect-[16/10] w-full overflow-hidden bg-[#E8DFD5]">
              <img
                src="/store1.png"
                alt="Kamal Selections main entrance and showroom overview with well-lit clothing displays in Shadnagar"
                className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-700 ease-out"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#20040A]/80 via-[#20040A]/20 to-transparent"></div>

              {/* Tag */}
              <div className="absolute top-4 left-4 z-10">
                <span className="px-3.5 py-1 rounded-full bg-[#FAF3EB]/95 backdrop-blur-md border border-[#D4AF37]/60 text-[#A41A50] text-[10px] font-bold tracking-[0.2em] uppercase shadow-md">
                  MAIN ENTRANCE &amp; SHOWROOM
                </span>
              </div>

              {/* Overlay text */}
              <div className="absolute bottom-5 left-5 right-5 z-10 text-white">
                <h3 className="font-serif text-2xl sm:text-3xl font-bold tracking-wide drop-shadow-md mb-1">
                  Showroom Overview
                </h3>
                <p className="text-xs sm:text-sm text-[#F8E5BA] drop-shadow leading-relaxed max-w-lg">
                  Spacious aisles, organized garment displays, and warm boutique lighting welcome every shopper.
                </p>
              </div>
            </div>

            <div className="p-4 sm:p-5 bg-gradient-to-r from-[#FAF3EB] to-[#FFFFFF] border-t border-[#E5C378]/25 flex items-center justify-between">
              <span className="text-xs font-semibold text-[#A41A50] uppercase tracking-wider">
                Store Interior · Main Entrance View
              </span>
              <span className="text-xs text-[#69564A] italic font-serif">
                Ibrahim Complex, Shadnagar
              </span>
            </div>
          </div>

          {/* IMAGE 2: COMPLEMENTARY (5 COLS) — STORE EXTERIOR / SIGNAGE (store board.png) */}
          <div className="lg:col-span-5 group relative rounded-3xl overflow-hidden bg-[#FFFFFF] border border-[#E5C378]/40 shadow-xl flex flex-col justify-between transition-all duration-500 hover:shadow-2xl hover:border-[#D4AF37]">
            <div className="relative aspect-[16/11] sm:aspect-[16/10] w-full overflow-hidden bg-[#E8DFD5]">
              <img
                src="/store board.png"
                alt="Kamal Selections exterior storefront and prominent signage board at Ibrahim Complex, Main Road, Shadnagar"
                className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-700 ease-out"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#20040A]/80 via-[#20040A]/20 to-transparent"></div>

              {/* Tag */}
              <div className="absolute top-4 left-4 z-10">
                <span className="px-3.5 py-1 rounded-full bg-[#FAF3EB]/95 backdrop-blur-md border border-[#D4AF37]/60 text-[#4A0717] text-[10px] font-bold tracking-[0.2em] uppercase shadow-md">
                  STOREFRONT &amp; SIGNAGE
                </span>
              </div>

              {/* Overlay text */}
              <div className="absolute bottom-5 left-5 right-5 z-10 text-white">
                <h3 className="font-serif text-2xl font-bold tracking-wide drop-shadow-md mb-1">
                  Exterior Signage Board
                </h3>
                <p className="text-xs sm:text-sm text-[#F8E5BA] drop-shadow leading-relaxed">
                  Located on Main Road, Ibrahim Complex — clear landmark for visiting families.
                </p>
              </div>
            </div>

            <div className="p-4 sm:p-5 bg-gradient-to-r from-[#FAF3EB] to-[#FFFFFF] border-t border-[#E5C378]/25 flex items-center justify-between">
              <span className="text-xs font-semibold text-[#4A0717] uppercase tracking-wider">
                Storefront Landmark
              </span>
              <span className="text-xs text-[#69564A] italic font-serif">
                Main Road Entrance
              </span>
            </div>
          </div>

          {/* IMAGE 3: (6 COLS) — WOMEN'S COLLECTION / SHOWROOM INTERIOR (store2.png) */}
          <div className="lg:col-span-6 group relative rounded-3xl overflow-hidden bg-[#FFFFFF] border border-[#E5C378]/40 shadow-xl flex flex-col justify-between transition-all duration-500 hover:shadow-2xl hover:border-[#D4AF37]">
            <div className="relative aspect-[16/11] sm:aspect-[16/10] w-full overflow-hidden bg-[#E8DFD5]">
              <img
                src="/store2.png"
                alt="Kamal Selections women's wear collection and ethnic garment racks inside the Shadnagar showroom"
                className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-700 ease-out"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#20040A]/80 via-[#20040A]/20 to-transparent"></div>

              {/* Tag */}
              <div className="absolute top-4 left-4 z-10">
                <span className="px-3.5 py-1 rounded-full bg-[#FAF3EB]/95 backdrop-blur-md border border-[#D4AF37]/60 text-[#A41A50] text-[10px] font-bold tracking-[0.2em] uppercase shadow-md">
                  WOMEN&apos;S COLLECTION
                </span>
              </div>

              {/* Overlay text */}
              <div className="absolute bottom-5 left-5 right-5 z-10 text-white">
                <h3 className="font-serif text-2xl font-bold tracking-wide drop-shadow-md mb-1">
                  Women&apos;s Department
                </h3>
                <p className="text-xs sm:text-sm text-[#F8E5BA] drop-shadow leading-relaxed">
                  Full racks of kurtis, festive 3-piece sets, party wear, dresses and daily essentials.
                </p>
              </div>
            </div>

            <div className="p-4 sm:p-5 bg-gradient-to-r from-[#FFF5F7] to-[#FFFFFF] border-t border-[#E5C378]/25 flex items-center justify-between">
              <span className="text-xs font-semibold text-[#A41A50] uppercase tracking-wider">
                Ethnic &amp; Casual Racks
              </span>
              <span className="text-xs text-[#69564A] italic font-serif">
                Touch &amp; Feel in Person
              </span>
            </div>
          </div>

          {/* IMAGE 4: (6 COLS) — KIDS COLLECTION / COUNTER & INTERIOR (store3.png) */}
          <div className="lg:col-span-6 group relative rounded-3xl overflow-hidden bg-[#FFFFFF] border border-[#E5C378]/40 shadow-xl flex flex-col justify-between transition-all duration-500 hover:shadow-2xl hover:border-[#D4AF37]">
            <div className="relative aspect-[16/11] sm:aspect-[16/10] w-full overflow-hidden bg-[#E8DFD5]">
              <img
                src="/store3.png"
                alt="Kamal Selections kids wear collection, billing counter, and interior garment displays in Shadnagar"
                className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-700 ease-out"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0F1E36]/80 via-[#0F1E36]/20 to-transparent"></div>

              {/* Tag */}
              <div className="absolute top-4 left-4 z-10">
                <span className="px-3.5 py-1 rounded-full bg-[#FAF3EB]/95 backdrop-blur-md border border-[#D4AF37]/60 text-[#1D4ED8] text-[10px] font-bold tracking-[0.2em] uppercase shadow-md">
                  KIDS&apos; SECTION &amp; COUNTER
                </span>
              </div>

              {/* Overlay text */}
              <div className="absolute bottom-5 left-5 right-5 z-10 text-white">
                <h3 className="font-serif text-2xl font-bold tracking-wide drop-shadow-md mb-1">
                  Kids&apos; Wear &amp; Billing Area
                </h3>
                <p className="text-xs sm:text-sm text-[#F8E5BA] drop-shadow leading-relaxed">
                  Dedicated children&apos;s frocks and sets, with attentive service at the checkout counter.
                </p>
              </div>
            </div>

            <div className="p-4 sm:p-5 bg-gradient-to-r from-[#F0F5FA] to-[#FFFFFF] border-t border-[#E5C378]/25 flex items-center justify-between">
              <span className="text-xs font-semibold text-[#1D4ED8] uppercase tracking-wider">
                Children&apos;s Clothing &amp; Service
              </span>
              <span className="text-xs text-[#69564A] italic font-serif">
                Friendly Staff Assistance
              </span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
