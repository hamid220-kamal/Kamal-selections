"use client";

export function AboutTimeline() {
  return (
    <section className="py-16 md:py-20 bg-[#FAF3EB] text-[#30251F] relative border-t border-[#E5C378]/25" id="timeline">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* SECTION HEADER */}
        <div className="text-center mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-3 mb-4">
            <span className="w-8 h-px bg-[#D4AF37]"></span>
            <span className="text-xs font-semibold tracking-[0.24em] text-[#A41A50] uppercase">
              OUR JOURNEY
            </span>
            <span className="w-8 h-px bg-[#D4AF37]"></span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#30251F] mb-4">
            Our Store Journey.
          </h2>

          <p className="text-sm sm:text-base text-[#69564A] max-w-md mx-auto">
            A continuous physical presence and trusted retail clothing boutique on Main Road, Shadnagar.
          </p>
        </div>

        {/* ELEGANT MINIMAL TIMELINE (2 NODES CONNECTED BY GOLD LINE) */}
        <div className="relative">
          {/* Vertical Gold Connecting Line */}
          <div className="absolute left-1/2 top-4 bottom-4 w-px bg-gradient-to-b from-[#D4AF37] via-[#E5C378] to-[#A41A50] -translate-x-1/2 hidden sm:block" aria-hidden="true" />

          <div className="space-y-12 sm:space-y-16">
            
            {/* NODE 1: FOUNDATION */}
            <div className="relative flex flex-col sm:flex-row items-center justify-between gap-6 sm:gap-12">
              {/* Left Side Content */}
              <div className="sm:w-1/2 sm:text-right">
                <span className="text-xs font-bold text-[#A41A50] uppercase tracking-widest block mb-1">
                  STORE FOUNDATION
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#30251F] mb-2">
                  THE BEGINNING
                </h3>
                <p className="text-sm text-[#51443B] leading-relaxed max-w-sm sm:ml-auto">
                  Kamal Selections opened its showroom in Shadnagar to offer women and children a dedicated space for festive and everyday outfits.
                </p>
              </div>

              {/* Center Node Badge */}
              <div className="z-10 w-16 h-16 rounded-full bg-gradient-to-br from-[#F8E5BA] via-[#FAF3EB] to-[#E5C378] border-2 border-[#D4AF37] shadow-lg flex items-center justify-center shrink-0">
                <span className="font-serif font-bold text-xs text-[#4A0717] tracking-wider uppercase">
                  STORE
                </span>
              </div>

              {/* Right Side Spacer */}
              <div className="sm:w-1/2 hidden sm:block">
                <span className="inline-block px-4 py-1.5 rounded-full bg-[#FFFFFF] border border-[#E5C378]/50 text-xs font-medium text-[#69564A]">
                  Ibrahim Complex · Main Road
                </span>
              </div>
            </div>

            {/* NODE 2: TODAY */}
            <div className="relative flex flex-col sm:flex-row items-center justify-between gap-6 sm:gap-12">
              {/* Left Side Spacer */}
              <div className="sm:w-1/2 hidden sm:block text-right">
                <span className="inline-block px-4 py-1.5 rounded-full bg-[#FFFFFF] border border-[#E5C378]/50 text-xs font-medium text-[#69564A]">
                  Everyday &amp; Occasion Wear
                </span>
              </div>

              {/* Center Node Badge */}
              <div className="z-10 w-16 h-16 rounded-full bg-gradient-to-br from-[#A41A50] to-[#4A0717] border-2 border-[#E5C378] shadow-lg flex items-center justify-center shrink-0 text-white">
                <span className="font-serif font-bold text-xs tracking-wider uppercase">
                  Today
                </span>
              </div>

              {/* Right Side Content */}
              <div className="sm:w-1/2 sm:text-left">
                <span className="text-xs font-bold text-[#A41A50] uppercase tracking-widest block mb-1">
                  OUR CONTINUING COMMITMENT
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#30251F] mb-2">
                  Serving Local Families
                </h3>
                <p className="text-sm text-[#51443B] leading-relaxed max-w-sm">
                  Kamal Selections continues to serve families in Shadnagar with women&apos;s and kids&apos; clothing, keeping customer comfort and variety at the heart of our store.
                </p>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
