"use client";

const WOMENS_CATEGORIES = [
  { name: "Dresses", desc: "Easy elegance for everyday & special occasions" },
  { name: "Kurtis", desc: "Comfortable silhouettes with subtle modern flair" },
  { name: "Tops", desc: "Casual & trendy styles for daily pairing" },
  { name: "Leggings", desc: "Everyday essentials in multiple colors" },
  { name: "3-Piece Sets", desc: "Coordinated festive & traditional sets" },
  { name: "Party Wear", desc: "Statement looks for celebrations & weddings" },
  { name: "Burqa", desc: "Modest styles with graceful finishes" },
];

const KIDS_CATEGORIES = [
  { name: "Kids Frocks", desc: "Playful silhouettes for little girls" },
  { name: "Kids Sets", desc: "Easy coordinated looks for everyday wear" },
  { name: "Girls' Clothing", desc: "Comfortable styles for every occasion" },
  { name: "Boys' Clothing", desc: "Smart, playful looks made for active days" },
];

export function StoreRangeOverview() {
  return (
    <section className="py-16 md:py-20 bg-[#FAF3EB] text-[#30251F] relative border-t border-[#E5C378]/25" id="store-range">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-3 mb-4">
            <span className="w-8 h-px bg-[#D4AF37]"></span>
            <span className="text-xs font-semibold tracking-[0.24em] text-[#A41A50] uppercase">
              IN-STORE RANGE OVERVIEW
            </span>
            <span className="w-8 h-px bg-[#D4AF37]"></span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#30251F] leading-[1.15] mb-5">
            ONE STORE.<br />
            <span className="italic font-normal text-[#A41A50]">PLENTY OF STYLE.</span>
          </h2>

          <p className="text-base sm:text-lg text-[#51443B] leading-relaxed">
            Our collection brings together women&apos;s and kids&apos; fashion under one roof.
          </p>

          <div className="mt-4 inline-block px-4 py-1.5 rounded-full bg-[#FFFFFF] border border-[#E5C378]/50 text-xs font-medium text-[#69564A]">
            Informational Range Guide · In-Store Availability in Shadnagar
          </div>
        </div>

        {/* TWO-COLUMN EDITORIAL SHOWCASE (WOMEN'S & KIDS' CATEGORIES) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* LEFT: WOMEN'S WEAR LIST (7 COLS) */}
          <div className="lg:col-span-7 bg-[#FFFFFF] rounded-3xl p-8 sm:p-10 border border-[#E5C378]/40 shadow-lg">
            <div className="flex items-center justify-between pb-6 mb-6 border-b border-[#E5C378]/30">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#FAF3EB] border border-[#E5C378]/50 flex items-center justify-center text-[#A41A50]">
                  <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.8">
                    <path d="M20.38 3.46L16 2a4 4 0 0 1-8 0L3.62 3.46a2 2 0 0 0-1.34 2.23l.58 3.5a2 2 0 0 0 1.28 1.55L6 11.5V20a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-8.5l1.86-.76a2 2 0 0 0 1.28-1.55l.58-3.5a2 2 0 0 0-1.34-2.23z"/>
                  </svg>
                </div>
                <div>
                  <span className="text-[10px] font-bold text-[#D4AF37] tracking-[0.2em] uppercase block">
                    WOMEN&apos;S DEPARTMENT
                  </span>
                  <h3 className="font-serif text-2xl font-bold text-[#30251F]">
                    Women&apos;s Wear
                  </h3>
                </div>
              </div>

              <span className="text-xs text-[#69564A] italic font-serif hidden sm:inline">
                7 Core Categories
              </span>
            </div>

            {/* List of categories as non-clickable editorial tiles */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {WOMENS_CATEGORIES.map((item) => (
                <div
                  key={item.name}
                  className="p-4 rounded-2xl bg-[#FAF3EB]/60 border border-[#E5C378]/30 hover:bg-[#FAF3EB] transition-colors"
                >
                  <div className="flex items-center gap-2 mb-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#A41A50]"></span>
                    <h4 className="font-serif font-bold text-base text-[#30251F]">
                      {item.name}
                    </h4>
                  </div>
                  <p className="text-xs text-[#69564A] pl-3.5 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT: KIDS' WEAR LIST (5 COLS) */}
          <div className="lg:col-span-5 bg-[#FFFFFF] rounded-3xl p-8 sm:p-10 border border-[#E5C378]/40 shadow-lg">
            <div className="flex items-center justify-between pb-6 mb-6 border-b border-[#E5C378]/30">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#FAF3EB] border border-[#E5C378]/50 flex items-center justify-center text-[#1D4ED8]">
                  <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.8">
                    <circle cx="12" cy="7" r="4"/>
                    <path d="M5.5 21a6.5 6.5 0 0 1 13 0"/>
                  </svg>
                </div>
                <div>
                  <span className="text-[10px] font-bold text-[#D4AF37] tracking-[0.2em] uppercase block">
                    KIDS&apos; DEPARTMENT
                  </span>
                  <h3 className="font-serif text-2xl font-bold text-[#30251F]">
                    Kids&apos; Wear
                  </h3>
                </div>
              </div>

              <span className="text-xs text-[#69564A] italic font-serif hidden sm:inline">
                Girls &amp; Boys
              </span>
            </div>

            {/* List of kids categories */}
            <div className="space-y-4">
              {KIDS_CATEGORIES.map((item) => (
                <div
                  key={item.name}
                  className="p-4 rounded-2xl bg-[#FAF3EB]/60 border border-[#E5C378]/30 hover:bg-[#FAF3EB] transition-colors"
                >
                  <div className="flex items-center gap-2 mb-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#1D4ED8]"></span>
                    <h4 className="font-serif font-bold text-base text-[#30251F]">
                      {item.name}
                    </h4>
                  </div>
                  <p className="text-xs text-[#69564A] pl-3.5 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* Note at bottom */}
            <div className="mt-6 p-4 rounded-xl bg-[#FAF3EB] border border-[#E5C378]/30 text-center">
              <p className="text-xs text-[#69564A] leading-relaxed">
                Visit our physical store to check ongoing designs, fabric feels, and available sizes.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
