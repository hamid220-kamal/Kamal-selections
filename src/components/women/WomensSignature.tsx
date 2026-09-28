"use client";

export function WomensSignature() {
  return (
    <section className="relative w-full py-16 sm:py-20 bg-[#20040A] overflow-hidden select-none" id="signature-visual">
      {/* LUXURY AMBIENT GLOWS & BOTANICAL LINES */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-[#E5C378]/15 via-[#A41A50]/20 to-transparent rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-[#E5C378]/10 via-[#2A050E]/40 to-transparent rounded-full blur-3xl pointer-events-none"></div>

      {/* DELICATE GOLD BORDER ACCENTS */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <div className="border border-[#E5C378]/30 rounded-3xl p-10 sm:p-16 lg:p-20 bg-gradient-to-b from-[#2A050E]/80 via-[#20040A]/90 to-[#180207] backdrop-blur-md shadow-2xl relative">
          
          {/* Subtle Corner Gold Ornaments */}
          <div className="absolute top-4 left-4 w-4 h-4 border-t-2 border-l-2 border-[#D4AF37]/60"></div>
          <div className="absolute top-4 right-4 w-4 h-4 border-t-2 border-r-2 border-[#D4AF37]/60"></div>
          <div className="absolute bottom-4 left-4 w-4 h-4 border-b-2 border-l-2 border-[#D4AF37]/60"></div>
          <div className="absolute bottom-4 right-4 w-4 h-4 border-b-2 border-r-2 border-[#D4AF37]/60"></div>

          <div className="inline-flex items-center gap-3 mb-6">
            <span className="w-8 h-px bg-[#D4AF37]"></span>
            <span className="text-xs font-semibold tracking-[0.3em] text-[#E5C378] uppercase">
              KAMAL SELECTIONS · SHADNAGAR
            </span>
            <span className="w-8 h-px bg-[#D4AF37]"></span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold text-[#FFFFFF] leading-tight mb-4">
            Fashion that feels<br />
            <span className="font-script text-4xl sm:text-6xl lg:text-7xl text-[#F8E5BA] font-normal italic">
              beautifully yours.
            </span>
          </h2>

          <p className="text-base sm:text-lg text-[#F8E5BA]/90 max-w-xl mx-auto leading-relaxed mt-6">
            Thoughtfully selected silhouettes, soft fabrics and flattering fits created to bring everyday grace and festive celebration together.
          </p>

          <div className="w-16 h-0.5 bg-[#D4AF37] mx-auto mt-8 opacity-75"></div>
        </div>
      </div>
    </section>
  );
}
