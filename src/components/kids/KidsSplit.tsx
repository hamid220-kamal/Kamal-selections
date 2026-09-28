"use client";

export function KidsSplit() {
  return (
    <section className="py-16 md:py-20 bg-[#FAF3EB] text-[#3D2314] relative overflow-hidden" id="girls-boys-editorial">
      {/* BACKGROUND DECORATIVE ACCENTS */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-[#FAD0C4]/15 via-transparent to-transparent rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-tl from-[#CFDEF3]/20 via-transparent to-transparent rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* SECTION HEADER */}
        <div className="text-center max-w-2xl mx-auto mb-14 md:mb-18">
          <div className="inline-flex items-center gap-3 mb-3">
            <span className="w-8 h-px bg-[#D4AF37]"></span>
            <span className="text-xs font-semibold tracking-[0.24em] text-[#A41A50] uppercase">
              TWO DISTINCT EDITORIALS
            </span>
            <span className="w-8 h-px bg-[#D4AF37]"></span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#3D2314]">
            Stories in Every Stitch.
          </h2>
        </div>

        {/* TWO-PART ASYMMETRIC EDITORIAL GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-stretch">
          
          {/* LEFT: GIRLS EDITORIAL */}
          <div className="relative group overflow-hidden rounded-3xl bg-[#FFFFFF] border border-[#E5C378]/35 shadow-xl flex flex-col transition-all duration-500 hover:shadow-2xl hover:border-[#D4AF37]">
            {/* Image Container with Editorial Asymmetric Crop */}
            <div className="relative aspect-[3/4] sm:aspect-[4/5] w-full overflow-hidden">
              <img
                src="/images/kids/kamal-selections-girls-pastel-lehenga.jpg"
                alt="Little girl in pastel pink embroidered festive lehenga from Kamal Selections"
                className="w-full h-full object-cover object-top transform group-hover:scale-105 transition-transform duration-700 ease-out"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#2A050E]/80 via-transparent to-transparent"></div>
              
              {/* Category Stamp */}
              <div className="absolute top-5 left-5 z-10">
                <span className="px-3.5 py-1 rounded-full bg-[#FAF3EB]/90 backdrop-blur-md border border-[#E5C378]/60 text-[#A41A50] text-[10px] font-bold tracking-[0.22em] uppercase shadow-sm">
                  GIRLS
                </span>
              </div>

              {/* Minimal Text Overlay */}
              <div className="absolute bottom-6 left-6 right-6 z-10 text-white">
                <p className="font-script text-3xl sm:text-4xl text-[#F8E5BA] mb-2 leading-tight drop-shadow">
                  Playful. Pretty.
                </p>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold tracking-wide mb-1 drop-shadow-md">
                  Her Own Style.
                </h3>
                <p className="text-xs sm:text-sm text-[#FDFBF7]/90 max-w-sm drop-shadow">
                  Graceful silhouettes, soft pastels and occasion-ready charm created for little moments of joy.
                </p>
              </div>
            </div>

            {/* Editorial Footer Strip */}
            <div className="p-4 sm:p-5 bg-gradient-to-r from-[#FFF5F7] to-[#FFFFFF] border-t border-[#E5C378]/25 flex items-center justify-between">
              <span className="text-xs font-semibold text-[#A41A50] uppercase tracking-wider">
                Frocks · Traditional Sets · Everyday Wear
              </span>
              <span className="text-xs text-[#69564A] italic font-serif">
                In-Store at Shadnagar
              </span>
            </div>
          </div>

          {/* RIGHT: BOYS EDITORIAL */}
          <div className="relative group overflow-hidden rounded-3xl bg-[#FFFFFF] border border-[#E5C378]/35 shadow-xl flex flex-col transition-all duration-500 hover:shadow-2xl hover:border-[#D4AF37]">
            {/* Image Container with Editorial Asymmetric Crop */}
            <div className="relative aspect-[3/4] sm:aspect-[4/5] w-full overflow-hidden">
              <img
                src="/images/kids/kamal-selections-boys-emerald-sherwani.jpg"
                alt="Young boy in emerald green festive sherwani from Kamal Selections"
                className="w-full h-full object-cover object-top transform group-hover:scale-105 transition-transform duration-700 ease-out"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0F1E36]/85 via-transparent to-transparent"></div>

              {/* Category Stamp */}
              <div className="absolute top-5 left-5 z-10">
                <span className="px-3.5 py-1 rounded-full bg-[#FAF3EB]/90 backdrop-blur-md border border-[#E5C378]/60 text-[#1D4ED8] text-[10px] font-bold tracking-[0.22em] uppercase shadow-sm">
                  BOYS
                </span>
              </div>

              {/* Minimal Text Overlay */}
              <div className="absolute bottom-6 left-6 right-6 z-10 text-white">
                <p className="font-script text-3xl sm:text-4xl text-[#F8E5BA] mb-2 leading-tight drop-shadow">
                  Comfortable. Confident.
                </p>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold tracking-wide mb-1 drop-shadow-md">
                  Ready to Go.
                </h3>
                <p className="text-xs sm:text-sm text-[#FDFBF7]/90 max-w-sm drop-shadow">
                  Smart ethnic jackets, comfortable sets and durable looks made for celebrations and active days.
                </p>
              </div>
            </div>

            {/* Editorial Footer Strip */}
            <div className="p-4 sm:p-5 bg-gradient-to-r from-[#F0F5FA] to-[#FFFFFF] border-t border-[#E5C378]/25 flex items-center justify-between">
              <span className="text-xs font-semibold text-[#1D4ED8] uppercase tracking-wider">
                Kurta Sets · Smart Casuals · Festive Looks
              </span>
              <span className="text-xs text-[#69564A] italic font-serif">
                In-Store at Shadnagar
              </span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
