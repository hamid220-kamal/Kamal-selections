"use client";

export function KidsLookbook() {
  return (
    <section className="py-20 md:py-28 bg-[#FDFBF7] text-[#3D2314] relative overflow-hidden" id="kids-gallery">
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
              A Glimpse of Joyful Styles.
            </h2>
          </div>
          <p className="text-sm text-[#69564A] max-w-sm">
            Gentle pastel palettes, playful prints and festive elegance chosen for childhood celebrations in Shadnagar.
          </p>
        </div>

        {/* ASYMMETRIC OVERLAPPING CINEMATIC GALLERY */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-5 lg:gap-6 items-start">
          
          {/* COLUMN 1 (5 COLS): LARGE PORTRAIT (GIRLS OCCASION WEAR) */}
          <div className="md:col-span-5 relative group overflow-hidden rounded-2xl shadow-xl border border-[#E5C378]/35 aspect-[3/4] sm:aspect-[4/5] md:aspect-[3/4]">
            <img
              src="/images/kids/cat-girls-wear.jpg"
              alt="Girls festive collection at Kamal Selections"
              className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-700 ease-out"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent"></div>
            <div className="absolute bottom-5 left-5 z-10">
              <span className="px-3 py-1 rounded-full bg-[#E5C378]/25 border border-[#E5C378]/50 text-[#F8E5BA] text-[10px] font-bold tracking-[0.2em] uppercase backdrop-blur-md">
                GIRLS
              </span>
              <p className="font-serif text-xl sm:text-2xl text-white font-bold mt-2">
                Celebration Details
              </p>
            </div>
          </div>

          {/* COLUMN 2 (7 COLS): TOP HORIZONTAL & DUAL TILES */}
          <div className="md:col-span-7 space-y-5 lg:space-y-6">
            
            {/* WIDE HORIZONTAL (FESTIVE HERO KIDS MOMENT) */}
            <div className="relative group overflow-hidden rounded-2xl shadow-xl border border-[#E5C378]/35 h-56 sm:h-64 md:h-72">
              <img
                src="/images/kids/center-kids-hero.jpg"
                alt="Festive family kids clothing at Kamal Selections"
                className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-700 ease-out"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent"></div>
              <div className="absolute bottom-5 left-5 z-10">
                <span className="px-3 py-1 rounded-full bg-[#E5C378]/25 border border-[#E5C378]/50 text-[#F8E5BA] text-[10px] font-bold tracking-[0.2em] uppercase backdrop-blur-md">
                  KIDS FROCKS
                </span>
                <p className="font-serif text-xl sm:text-2xl text-white font-bold mt-2">
                  Twirl-Ready Elegance
                </p>
              </div>
            </div>

            {/* TWO SQUARES SIDE-BY-SIDE (BOYS & KIDS SETS) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 lg:gap-6">
              
              {/* BOYS */}
              <div className="relative group overflow-hidden rounded-2xl shadow-lg border border-[#E5C378]/35 h-60 sm:h-64">
                <img
                  src="/images/kids/cat-boys-wear.jpg"
                  alt="Smart boys wear at Kamal Selections"
                  className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-700 ease-out"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent"></div>
                <div className="absolute bottom-4 left-4 z-10">
                  <span className="px-2.5 py-0.5 rounded-full bg-[#E5C378]/25 border border-[#E5C378]/50 text-[#F8E5BA] text-[9px] font-bold tracking-[0.2em] uppercase backdrop-blur-md">
                    BOYS
                  </span>
                  <p className="font-serif text-lg text-white font-bold mt-1.5">
                    Smart &amp; Playful
                  </p>
                </div>
              </div>

              {/* KIDS SETS */}
              <div className="relative group overflow-hidden rounded-2xl shadow-lg border border-[#E5C378]/35 h-60 sm:h-64">
                <img
                  src="/images/kids/cat-kids-sets.jpg"
                  alt="Coordinated kids sets at Kamal Selections"
                  className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-700 ease-out"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent"></div>
                <div className="absolute bottom-4 left-4 z-10">
                  <span className="px-2.5 py-0.5 rounded-full bg-[#E5C378]/25 border border-[#E5C378]/50 text-[#F8E5BA] text-[9px] font-bold tracking-[0.2em] uppercase backdrop-blur-md">
                    KIDS SETS
                  </span>
                  <p className="font-serif text-lg text-white font-bold mt-1.5">
                    Everyday Co-ords
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
