import Image from "next/image";

export function KidsIntro() {
  return (
    <section className="py-16 md:py-20 bg-[#FAF3EB] text-[#3D2314] relative overflow-hidden" id="collection-intro">
      {/* SUBTLE BOTANICAL BACKGROUND ACCENT */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-bl from-[#E5C378]/15 via-transparent to-transparent rounded-full blur-2xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* LEFT EDITORIAL TEXT (7 COLS) */}
          <div className="lg:col-span-7">
            {/* EYEBROW */}
            <div className="inline-flex items-center gap-3 mb-4">
              <span className="w-8 h-px bg-[#D4AF37]"></span>
              <span className="text-xs font-semibold tracking-[0.24em] text-[#A41A50] uppercase">
                EXPLORE KIDS&apos; FASHION
              </span>
            </div>

            {/* HEADING */}
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#3D2314] leading-[1.15] mb-6">
              Little Styles.<br />
              <span className="italic font-normal text-[#A41A50]">Big Personality.</span>
            </h2>

            {/* SUPPORTING TEXT */}
            <p className="text-base sm:text-lg text-[#5A484D] leading-relaxed max-w-xl mb-6">
              Discover comfortable, playful and occasion-ready styles for little ones at Kamal Selections, Shadnagar.
            </p>

            {/* SCRIPT ACCENT */}
            <p className="font-script text-3xl sm:text-4xl text-[#A41A50] mb-8">
              Fashion for Playful Smiles.
            </p>

            {/* 3 HIGHLIGHT BADGES */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-[#E5C378]/35">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#FFFFFF] border border-[#E5C378]/50 flex items-center justify-center shrink-0 text-[#A41A50] shadow-sm">
                  <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.8">
                    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                  </svg>
                </div>
                <div>
                  <h4 className="text-xs font-bold text-[#3D2314] uppercase tracking-wider">Comfort First</h4>
                  <p className="text-xs text-[#69564A]">Easy Every Day</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#FFFFFF] border border-[#E5C378]/50 flex items-center justify-center shrink-0 text-[#A41A50] shadow-sm">
                  <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.8">
                    <path d="M12 2l2.4 6.6L21 11l-6.6 2.4L12 20l-2.4-6.6L3 11l6.6-2.4L12 2z"/>
                  </svg>
                </div>
                <div>
                  <h4 className="text-xs font-bold text-[#3D2314] uppercase tracking-wider">Playful Styles</h4>
                  <p className="text-xs text-[#69564A]">Vibrant &amp; Cheerful</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#FFFFFF] border border-[#E5C378]/50 flex items-center justify-center shrink-0 text-[#A41A50] shadow-sm">
                  <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.8">
                    <circle cx="12" cy="12" r="10"/>
                    <path d="M8 14s1.5 2 4 2 4-2 4-2"/>
                    <line x1="9" y1="9" x2="9.01" y2="9" strokeWidth="2.5" strokeLinecap="round"/>
                    <line x1="15" y1="9" x2="15.01" y2="9" strokeWidth="2.5" strokeLinecap="round"/>
                  </svg>
                </div>
                <div>
                  <h4 className="text-xs font-bold text-[#3D2314] uppercase tracking-wider">Festive &amp; Casual</h4>
                  <p className="text-xs text-[#69564A]">All Celebrations</p>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT EDITORIAL PHOTOGRAPH WITH GOLD STAMP (5 COLS) */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Ambient Glow */}
              <div className="absolute -inset-4 bg-gradient-to-tr from-[#E5C378]/25 to-[#A41A50]/20 rounded-3xl blur-2xl -z-10"></div>
              
              {/* Image Container */}
              <div className="relative aspect-[4/3] sm:aspect-[5/4] rounded-2xl overflow-hidden shadow-2xl border border-[#E5C378]/40">
                <Image
                  src="/images/kids/kamal-selections-kids-lifestyle-shopping.jpg"
                  alt="Children smiling together in festive clothing from Kamal Selections in Shadnagar"
                  className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-700 ease-out"
                  fill
                  sizes="(max-width: 768px) 100vw, 40vw"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#2A050E]/40 via-transparent to-transparent"></div>
              </div>

              {/* Circular Gold Editorial Seal Badge */}
              <div className="absolute -top-4 -right-4 sm:-top-6 sm:-right-6 w-22 h-22 sm:w-24 sm:h-24 rounded-full bg-gradient-to-br from-[#F8E5BA] via-[#FAF3EB] to-[#E5C378] border-2 border-[#D4AF37] shadow-xl flex flex-col items-center justify-center text-center p-2 z-10">
                <span className="text-[9px] sm:text-[10px] font-bold tracking-[0.16em] text-[#4A0717] uppercase leading-tight">
                  KIDS FASHION
                </span>
                <span className="text-[8px] sm:text-[9px] font-medium text-[#69564A] tracking-wider uppercase">
                  SHADNAGAR
                </span>
                <span className="text-[10px] sm:text-[11px] font-serif font-bold text-[#A41A50] uppercase leading-tight">
                  JOYFUL STYLES
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
