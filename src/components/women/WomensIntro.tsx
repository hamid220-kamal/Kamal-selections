"use client";

export function WomensIntro() {
  return (
    <section className="py-20 md:py-28 bg-[#FDFBF7] text-[#3D2314] relative overflow-hidden" id="collection-intro">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* LEFT EDITORIAL TEXT (7 COLS) */}
          <div className="lg:col-span-7">
            {/* EYEBROW */}
            <div className="inline-flex items-center gap-3 mb-4">
              <span className="w-8 h-px bg-[#D4AF37]"></span>
              <span className="text-xs font-semibold tracking-[0.22em] text-[#A41A50] uppercase">
                EXPLORE WOMEN&apos;S FASHION
              </span>
            </div>

            {/* HEADING */}
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#3D2314] leading-[1.15] mb-6">
              Styles for<br />
              <span className="italic font-normal text-[#A41A50]">Every Part</span> of Her Day.
            </h2>

            {/* SUPPORTING TEXT */}
            <p className="text-base sm:text-lg text-[#5A484D] leading-relaxed max-w-xl mb-6">
              From everyday comfort to celebrations and special occasions, discover women&apos;s styles available at Kamal Selections, Shadnagar.
            </p>

            {/* SCRIPT ACCENT */}
            <p className="font-script text-3xl sm:text-4xl text-[#A41A50] mb-8">
              Fashion for Real Life.
            </p>

            {/* 3 HIGHLIGHT BADGES */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-[#E5C378]/30">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#FAF3EB] border border-[#E5C378]/50 flex items-center justify-center shrink-0 text-[#A41A50]">
                  <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.8">
                    <path d="M20.38 3.46L16 2a4 4 0 0 1-8 0L3.62 3.46a2 2 0 0 0-1.34 2.23l.58 3.5a2 2 0 0 0 1.28 1.55L6 11.5V20a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-8.5l1.86-.76a2 2 0 0 0 1.28-1.55l.58-3.5a2 2 0 0 0-1.34-2.23z"/>
                  </svg>
                </div>
                <div>
                  <h4 className="text-xs font-bold text-[#3D2314] uppercase tracking-wider">Comfortable Fits</h4>
                  <p className="text-xs text-[#69564A]">All Day Ease</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#FAF3EB] border border-[#E5C378]/50 flex items-center justify-center shrink-0 text-[#A41A50]">
                  <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.8">
                    <circle cx="12" cy="12" r="9"/>
                    <path d="M12 3a9 9 0 0 0 0 18v-18z"/>
                  </svg>
                </div>
                <div>
                  <h4 className="text-xs font-bold text-[#3D2314] uppercase tracking-wider">Modern &amp; Traditional</h4>
                  <p className="text-xs text-[#69564A]">Curated Styles</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#FAF3EB] border border-[#E5C378]/50 flex items-center justify-center shrink-0 text-[#A41A50]">
                  <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.8">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                </div>
                <div>
                  <h4 className="text-xs font-bold text-[#3D2314] uppercase tracking-wider">Quality Fabrics</h4>
                  <p className="text-xs text-[#69564A]">Lasting Value</p>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT EDITORIAL PHOTOGRAPH WITH GOLD STAMP (5 COLS) */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Soft decorative ambient glow */}
              <div className="absolute -inset-4 bg-gradient-to-tr from-[#E5C378]/20 to-[#A41A50]/15 rounded-3xl blur-2xl -z-10"></div>
              
              {/* Main Image Container */}
              <div className="relative aspect-[4/3] sm:aspect-[5/4] rounded-2xl overflow-hidden shadow-2xl border border-[#E5C378]/40">
                <img
                  src="/images/women/kamal-selections-womens-boutique-browsing.jpg"
                  alt="Customer exploring curated ethnic dresses and kurtis at Kamal Selections boutique in Shadnagar"
                  className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#2A050E]/40 via-transparent to-transparent"></div>
              </div>

              {/* Circular Gold Editorial Seal Badge */}
              <div className="absolute -top-4 -right-4 sm:-top-6 sm:-right-6 w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-gradient-to-br from-[#F8E5BA] via-[#FAF3EB] to-[#E5C378] border-2 border-[#D4AF37] shadow-xl flex flex-col items-center justify-center text-center p-2 z-10">
                <span className="text-[9px] sm:text-[10px] font-bold tracking-[0.18em] text-[#4A0717] uppercase leading-tight">
                  STYLE
                </span>
                <span className="text-[8px] sm:text-[9px] font-medium text-[#69564A] tracking-wider uppercase">
                  FOR EVERY
                </span>
                <span className="text-[10px] sm:text-[11px] font-serif font-bold text-[#A41A50] uppercase leading-tight">
                  WOMAN
                </span>
                <div className="w-3 h-0.5 bg-[#D4AF37] mt-1"></div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
