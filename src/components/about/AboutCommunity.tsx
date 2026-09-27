"use client";

export function AboutCommunity() {
  return (
    <section className="relative w-full overflow-hidden bg-[#20040A]" id="community">
      <div className="relative w-full h-[55vh] sm:h-[65vh] lg:h-[70vh] min-h-[440px]">
        {/* LIFESTYLE PHOTOGRAPH */}
        <img
          src="/images/home/collage-kids.jpg"
          alt="Families exploring clothing together in Shadnagar at Kamal Selections"
          className="w-full h-full object-cover object-center"
          loading="lazy"
        />

        {/* BURGUNDY GRADIENT OVERLAYS */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#2A050E]/90 via-[#2A050E]/60 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#1F030B]/90 via-transparent to-transparent"></div>

        {/* OVERLAY CONTENT */}
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="max-w-2xl text-white">
              
              {/* EYEBROW */}
              <div className="inline-flex items-center gap-3 mb-4">
                <span className="w-10 h-px bg-[#E5C378]"></span>
                <span className="text-xs sm:text-sm font-semibold tracking-[0.28em] text-[#E5C378] uppercase">
                  OUR COMMUNITY
                </span>
              </div>

              {/* HEADING */}
              <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold leading-[1.12] mb-5 tracking-tight text-[#FAF5EB]">
                LOCAL STORE.<br />
                LOCAL FAMILIES.<br />
                <span className="italic font-normal text-[#E5C378]">REAL CONNECTIONS.</span>
              </h2>

              {/* SUPPORTING TEXT */}
              <p className="text-base sm:text-lg text-[#F8E5BA]/95 leading-relaxed max-w-xl">
                Kamal Selections is part of the everyday shopping life of Shadnagar — a place where families can come together, explore fashion and find something that feels right.
              </p>

            </div>
          </div>
        </div>

        {/* CORNER BADGE */}
        <div className="absolute bottom-6 right-6 hidden sm:block z-10">
          <div className="px-4 py-2 rounded-full bg-[#2A050E]/80 border border-[#E5C378]/40 backdrop-blur-md text-xs font-medium text-[#F8E5BA] tracking-wider uppercase">
            Serving Shadnagar Since 2021
          </div>
        </div>
      </div>
    </section>
  );
}
