"use client";

export function WomensLookbook() {
  return (
    <section className="py-16 md:py-20 bg-[#FDFBF7] text-[#3D2314] relative overflow-hidden" id="style-gallery">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* HEADER */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 md:mb-18 gap-6">
          <div>
            <div className="inline-flex items-center gap-3 mb-3">
              <span className="w-8 h-px bg-[#D4AF37]"></span>
              <span className="text-xs font-semibold tracking-[0.24em] text-[#A41A50] uppercase">
                CURATED LOOKBOOK
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#3D2314]">
              A Glimpse of the Range.
            </h2>
          </div>
          <p className="text-sm text-[#69564A] max-w-sm">
            Carefully curated palettes, comfortable fits and celebratory details designed for every season.
          </p>
        </div>

        {/* ASYMMETRIC OVERLAPPING CINEMATIC STYLE LOOKBOOK */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-5 lg:gap-6 items-stretch">
          
          {/* COLUMN 1 (5 COLS): LARGE FEATURED CARD (FESTIVE PALETTE) */}
          <div className="md:col-span-5 relative group overflow-hidden rounded-2xl shadow-xl border border-[#E5C378]/35 bg-gradient-to-b from-[#2E050F] via-[#20040A] to-[#140106] p-7 sm:p-9 flex flex-col justify-between text-white">
            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="px-3 py-1 rounded-full bg-[#E5C378]/20 border border-[#E5C378]/40 text-[#F8E5BA] text-[10px] font-bold tracking-[0.2em] uppercase">
                  LOOKBOOK FOCUS
                </span>
                <span className="text-xs text-[#E5C378] font-serif italic">Edition 2026</span>
              </div>

              <span className="text-[11px] font-semibold tracking-[0.24em] text-[#E5C378] uppercase block mb-2">
                CELEBRATION PALETTES
              </span>
              <h3 className="font-serif text-3xl sm:text-4xl font-bold text-white mb-4 leading-tight">
                Royal Wine &amp; Muted Gold.
              </h3>
              <p className="text-sm text-[#F8E5BA]/90 leading-relaxed mb-6">
                Deep hues paired with subtle zari borders create a timeless aesthetic for weddings, receptions, and festivals in Shadnagar.
              </p>

              <div className="space-y-2 pt-4 border-t border-[#E5C378]/25 text-xs text-[#F8E5BA]/80">
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#E5C378]"></span>
                  <span><strong>Silhouettes:</strong> Flared Anarkalis &amp; Velvet Lehengas</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#E5C378]"></span>
                  <span><strong>Finishes:</strong> Hand-worked sequins &amp; gota patti</span>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-[#E5C378]/20 flex items-center justify-between text-xs text-[#E5C378]">
              <span className="font-semibold uppercase tracking-wider">Kamal Selections Showroom</span>
              <span>Available in Store →</span>
            </div>
          </div>

          {/* COLUMN 2 (7 COLS): TOP HORIZONTAL & DUAL TILES */}
          <div className="md:col-span-7 flex flex-col gap-5 lg:gap-6 justify-between">
            
            {/* WIDE HORIZONTAL (DAYWEAR EDIT) */}
            <div className="relative group overflow-hidden rounded-2xl shadow-xl border border-[#E5C378]/35 bg-gradient-to-r from-[#FAF3EB] to-[#FFFFFF] p-7 flex flex-col justify-between border-l-4 border-l-[#A41A50]">
              <div className="flex items-center justify-between mb-3">
                <span className="text-[10px] font-bold tracking-[0.2em] text-[#A41A50] uppercase">
                  EVERYDAY &amp; OFFICE EDIT
                </span>
                <span className="text-xs text-[#69564A]">Pure Comfort</span>
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#30251F] mb-2">
                Effortless Cotton &amp; Modal Kurtis
              </h3>
              <p className="text-sm text-[#51443B] leading-relaxed mb-4">
                Breathable fabrics tailored for long working hours and daily ease, with contemporary necklines and refined threadwork accents.
              </p>
              <div className="flex items-center gap-3 text-xs font-semibold text-[#A41A50]">
                <span>Pastel Tones</span>
                <span>•</span>
                <span>Machine-Washable</span>
                <span>•</span>
                <span>Sizes S to 3XL</span>
              </div>
            </div>

            {/* TWO SQUARES SIDE-BY-SIDE */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 lg:gap-6 flex-grow">
              
              {/* CARD 1: ARTISANAL DETAILS */}
              <div className="relative group overflow-hidden rounded-2xl shadow-lg border border-[#E5C378]/35 bg-[#FFFFFF] p-6 flex flex-col justify-between">
                <div>
                  <span className="text-[10px] font-bold text-[#D4AF37] tracking-[0.2em] uppercase block mb-1">
                    CRAFT FOCUS
                  </span>
                  <h4 className="font-serif text-xl font-bold text-[#30251F] mb-2">
                    Zari &amp; Threadwork
                  </h4>
                  <p className="text-xs text-[#69564A] leading-relaxed">
                    Delicate embroidery that enhances the garment without feeling heavy or rigid.
                  </p>
                </div>
                <span className="text-[11px] font-semibold text-[#A41A50] mt-4 block">
                  See Real Detailing in Store →
                </span>
              </div>

              {/* CARD 2: OCCASION COORDINATES */}
              <div className="relative group overflow-hidden rounded-2xl shadow-lg border border-[#E5C378]/35 bg-[#FFFFFF] p-6 flex flex-col justify-between">
                <div>
                  <span className="text-[10px] font-bold text-[#D4AF37] tracking-[0.2em] uppercase block mb-1">
                    COORDINATION
                  </span>
                  <h4 className="font-serif text-xl font-bold text-[#30251F] mb-2">
                    3-Piece Dupatta Sets
                  </h4>
                  <p className="text-xs text-[#69564A] leading-relaxed">
                    Complete harmony between kurta, tailored pants and rich flowing dupattas.
                  </p>
                </div>
                <span className="text-[11px] font-semibold text-[#A41A50] mt-4 block">
                  Explore in Shadnagar →
                </span>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
