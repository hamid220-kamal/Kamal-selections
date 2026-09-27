"use client";

export function WomensSignature() {
  return (
    <section className="relative w-full h-[60vh] min-h-[460px] max-h-[680px] overflow-hidden select-none" id="signature-visual">
      {/* FULL-BLEED EDITORIAL IMAGE */}
      <img
        src="/assets/womens-hero-banner.jpg"
        alt="Kamal Selections Signature Women's Style"
        className="w-full h-full object-cover object-center transform scale-100 hover:scale-105 transition-transform duration-1000 ease-out"
        loading="lazy"
      />

      {/* SUBTLE DARK BURGUNDY GRADIENT OVERLAY */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#20040A]/85 via-[#20040A]/40 to-transparent"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-[#20040A]/60 via-transparent to-transparent"></div>

      {/* MINIMAL OVERLAY TEXT */}
      <div className="absolute inset-0 flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-md">
            <span className="text-xs font-semibold tracking-[0.3em] text-[#E5C378] uppercase block mb-3">
              KAMAL SELECTIONS
            </span>
            <p className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#FFFFFF] leading-tight mb-2 drop-shadow-md">
              Fashion that feels<br />
              <span className="font-script text-4xl sm:text-5xl text-[#F8E5BA] font-normal italic">
                like you.
              </span>
            </p>
            <div className="w-12 h-0.5 bg-[#D4AF37] mt-4 opacity-75"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
