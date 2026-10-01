"use client";

import Image from "next/image";

export function KidsLookbook() {
  return (
    <section className="py-16 md:py-24 bg-[#FDFBF7] text-[#3D2314] relative overflow-hidden" id="kids-gallery">
      {/* AMBIENT GLOW ACCENTS */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-[#E5C378]/15 via-[#FAD0C4]/10 to-transparent rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-[#A41A50]/10 via-transparent to-transparent rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* SECTION HEADER */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 md:mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-3 mb-3">
              <span className="w-8 h-px bg-[#D4AF37]"></span>
              <span className="text-xs font-semibold tracking-[0.24em] text-[#A41A50] uppercase">
                CURATED LOOKBOOK
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#3D2314]">
              A Glimpse of Joyful Styles.
            </h2>
          </div>
          <p className="text-base text-[#69564A] max-w-md leading-relaxed">
            Gentle pastel palettes, playful prints, and festive elegance chosen for childhood celebrations in Shadnagar.
          </p>
        </div>

        {/* LOOKBOOK VISUAL GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          
          {/* LEFT FEATURED HERO CARD (6 COLS) */}
          <div className="lg:col-span-6 relative rounded-3xl overflow-hidden shadow-2xl border border-[#E5C378]/40 min-h-[440px] sm:min-h-[520px] lg:min-h-[580px] flex flex-col justify-end group">
            <Image
              src="/images/store/kamal-kids-festive-editorial.jpg"
              alt="Kamal Selections Kids Festive Wear - Lehenga and Sherwani"
              fill
              className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
              sizes="(max-width: 1024px) 100vw, 50vw"
              priority
            />
            {/* GRADIENT OVERLAY */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#20040A]/90 via-[#20040A]/30 to-transparent pointer-events-none" />

            <div className="relative z-10 p-7 sm:p-9 text-white">
              <span className="inline-block px-3 py-1 rounded-full bg-[#E5C378]/20 border border-[#E5C378]/40 text-[#E5C378] text-[10px] font-bold tracking-[0.2em] uppercase mb-3 backdrop-blur-md">
                CELEBRATION PALETTES
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-2">
                Pastel Twirls &amp; Festive Suits
              </h3>
              <p className="text-xs sm:text-sm text-[#F8E5BA]/90 leading-relaxed max-w-md">
                Joyful pastel net lehengas and tailored silk kurta-sherwani sets crafted with soft breathable linings for unrestricted fun.
              </p>
            </div>
          </div>

          {/* RIGHT COLUMN (6 COLS) - TOP PHOTO & BOTTOM CARDS */}
          <div className="lg:col-span-6 flex flex-col gap-6 justify-between">
            
            {/* TOP PHOTO CARD */}
            <div className="relative rounded-3xl overflow-hidden shadow-xl border border-[#E5C378]/40 min-h-[260px] sm:min-h-[300px] flex flex-col justify-end group">
              <Image
                src="/images/store/kamal-kids-everyday-style.jpg"
                alt="Kamal Selections Kids Everyday & Party Wear Racks"
                fill
                className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#20040A]/85 via-[#20040A]/20 to-transparent pointer-events-none" />

              <div className="relative z-10 p-6 sm:p-7 text-white">
                <span className="text-[10px] font-bold tracking-[0.22em] text-[#E5C378] uppercase block mb-1">
                  EVERYDAY &amp; OUTINGS EDIT
                </span>
                <h4 className="font-serif text-xl sm:text-2xl font-bold text-white">
                  Breathable Cotton Co-Ords &amp; Party Frocks
                </h4>
              </div>
            </div>

            {/* BOTTOM 2 FEATURE TILES */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 flex-grow">
              
              {/* TILE 1: SENSITIVE SKIN */}
              <div className="rounded-2xl border border-[#E5C378]/35 bg-[#FFFFFF] p-6 shadow-md flex flex-col justify-between hover:border-[#E5C378] transition-colors">
                <div>
                  <div className="w-8 h-8 rounded-lg bg-[#E5C378]/15 text-[#A41A50] flex items-center justify-center text-sm mb-3">
                    ✦
                  </div>
                  <span className="text-[10px] font-bold text-[#D4AF37] tracking-[0.2em] uppercase block mb-1">
                    CARE &amp; COMFORT
                  </span>
                  <h5 className="font-serif text-lg font-bold text-[#30251F] mb-2">
                    Lined for Sensitive Skin
                  </h5>
                  <p className="text-xs text-[#69564A] leading-relaxed">
                    100% breathable inner cotton linings ensure festive embroidery never touches or irritates delicate skin.
                  </p>
                </div>
              </div>

              {/* TILE 2: FLEXIBLE FITS */}
              <div className="rounded-2xl border border-[#E5C378]/35 bg-[#380511] p-6 shadow-md text-white flex flex-col justify-between hover:border-[#E5C378] transition-colors">
                <div>
                  <div className="w-8 h-8 rounded-lg bg-[#E5C378]/20 text-[#E5C378] flex items-center justify-center text-sm mb-3">
                    ★
                  </div>
                  <span className="text-[10px] font-bold text-[#E5C378] tracking-[0.2em] uppercase block mb-1">
                    FLEXIBLE FITS
                  </span>
                  <h5 className="font-serif text-lg font-bold text-white mb-2">
                    Growth-Friendly Hems
                  </h5>
                  <p className="text-xs text-[#F8E5BA]/85 leading-relaxed">
                    Elasticated waistbands and adjustable seams designed to keep pace with your child&apos;s active routine.
                  </p>
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
