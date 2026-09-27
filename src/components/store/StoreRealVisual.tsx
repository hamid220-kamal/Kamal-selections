"use client";

export function StoreRealVisual() {
  return (
    <section className="relative w-full overflow-hidden bg-[#20040A]" id="store-visual">
      <div className="relative w-full h-[60vh] sm:h-[70vh] lg:h-[75vh] min-h-[460px]">
        {/* LARGE IMMERSIVE REAL STORE PHOTOGRAPH */}
        <img
          src="/images/store/store-hero-bg.jpg"
          alt="Authentic inside view of Kamal Selections clothing store displays in Shadnagar"
          className="w-full h-full object-cover object-center"
          loading="lazy"
        />

        {/* ELEGANT GRADIENT OVERLAYS */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#20040A]/85 via-[#20040A]/40 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#1F030B]/90 via-transparent to-transparent"></div>

        {/* MINIMAL SUBTLE TEXT OVERLAY */}
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="max-w-xl text-white">
              
              <div className="inline-flex items-center gap-3 mb-4">
                <span className="w-10 h-px bg-[#E5C378]"></span>
                <span className="text-xs sm:text-sm font-semibold tracking-[0.28em] text-[#E5C378] uppercase">
                  INSIDE KAMAL SELECTIONS
                </span>
              </div>

              <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold leading-[1.12] mb-4 tracking-tight text-[#FAF5EB]">
                COME IN.<br />
                <span className="italic font-normal text-[#E5C378]">TAKE A LOOK AROUND.</span>
              </h2>

              <p className="text-base sm:text-lg text-[#F8E5BA]/90 leading-relaxed max-w-md">
                A warm, organized space designed for comfortable family browsing right on Main Road, Shadnagar.
              </p>

            </div>
          </div>
        </div>

        {/* BOTTOM METADATA BADGE */}
        <div className="absolute bottom-6 right-6 hidden sm:block z-10">
          <div className="px-4 py-2 rounded-full bg-[#20040A]/80 border border-[#E5C378]/35 backdrop-blur-md text-[11px] font-medium text-[#F8E5BA] tracking-wider uppercase">
            Real In-Store Environment · Ibrahim Complex
          </div>
        </div>
      </div>
    </section>
  );
}
