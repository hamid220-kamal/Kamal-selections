"use client";

export function AboutCommunity() {
  return (
    <section className="relative w-full overflow-hidden bg-[#20040A]" id="community">
      {/* LUXURIOUS EDITORIAL BURGUNDY & GOLD CONTAINER */}
      <div className="relative w-full py-20 sm:py-28 lg:py-32 bg-gradient-to-br from-[#2E050F] via-[#20040A] to-[#140106] border-y border-[#E5C378]/30">
        {/* Subtle Decorative Ambient Glows */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#E5C378]/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#A41A50]/20 rounded-full blur-3xl pointer-events-none"></div>

        {/* EDITORIAL CONTENT */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
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

            {/* BADGE */}
            <div className="inline-block self-start lg:self-end">
              <div className="px-5 py-2.5 rounded-full bg-[#FAF3EB]/10 border border-[#E5C378]/40 backdrop-blur-md text-xs font-medium text-[#F8E5BA] tracking-wider uppercase">
                Serving Shadnagar Families Since 2021 ✦
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
