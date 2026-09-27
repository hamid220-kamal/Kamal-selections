"use client";

const MOMENTS = [
  {
    title: "EVERYDAY",
    desc: "Comfortable everyday fashion",
    image: "/assets/cat-kurtis.jpg",
    alt: "Comfortable everyday cotton kurti from Kamal Selections",
  },
  {
    title: "ELEGANT",
    desc: "Refined styles for gatherings",
    image: "/assets/cat-3piece.jpg",
    alt: "Refined three-piece festive suit for gatherings",
  },
  {
    title: "CELEBRATION",
    desc: "Statement looks for special occasions",
    image: "/assets/cat-partywear.jpg",
    alt: "Statement festive wear for weddings and celebrations",
  },
];

export function WomensMoments() {
  return (
    <section className="py-20 md:py-28 bg-[#FDFBF7] text-[#3D2314] relative border-t border-[#E5C378]/25" id="style-moments">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* LEFT STORYTELLING COLUMN (5 COLS) */}
          <div className="lg:col-span-5">
            <div className="inline-flex items-center gap-3 mb-4">
              <span className="w-8 h-px bg-[#D4AF37]"></span>
              <span className="text-xs font-semibold tracking-[0.24em] text-[#A41A50] uppercase">
                STYLE JOURNEY
              </span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#3D2314] leading-[1.15] mb-6">
              FROM EVERYDAY<br />
              <span className="text-[#A41A50] italic font-normal">TO OCCASION.</span>
            </h2>

            <p className="text-base sm:text-lg text-[#5A484D] leading-relaxed mb-8">
              Whether you&apos;re dressing for a regular day out, a family gathering or a celebration, our women&apos;s collection brings together styles for different moments.
            </p>

            <div className="p-5 rounded-2xl bg-[#FAF3EB] border border-[#E5C378]/40">
              <span className="text-xs font-bold text-[#A41A50] tracking-wider uppercase block mb-1">
                Thoughtfully Chosen Range
              </span>
              <p className="text-xs sm:text-sm text-[#69564A]">
                Each silhouette at Kamal Selections is chosen with care so women in Shadnagar can easily find looks for routine wear or special festive events.
              </p>
            </div>
          </div>

          {/* RIGHT THREE STACKED VISUAL MOMENTS (7 COLS) */}
          <div className="lg:col-span-7 space-y-5">
            {MOMENTS.map((moment, idx) => (
              <div
                key={moment.title}
                className="group relative overflow-hidden rounded-2xl bg-[#FFFFFF] border border-[#E5C378]/35 shadow-md flex flex-col sm:flex-row items-center transition-all duration-300 hover:shadow-xl hover:border-[#D4AF37]"
              >
                {/* Visual Thumbnail */}
                <div className="relative w-full sm:w-44 h-48 sm:h-36 shrink-0 overflow-hidden">
                  <img
                    src={moment.image}
                    alt={moment.alt}
                    className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-500 ease-out"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t sm:bg-gradient-to-r from-black/50 sm:from-transparent to-transparent"></div>
                </div>

                {/* Content Details */}
                <div className="p-5 sm:p-6 flex-grow flex items-center justify-between w-full">
                  <div>
                    <span className="text-[10px] font-bold text-[#D4AF37] tracking-[0.2em] uppercase block mb-1">
                      0{idx + 1} · OCCASION FOCUS
                    </span>
                    <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#3D2314] tracking-wide mb-1">
                      {moment.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#69564A]">
                      {moment.desc}
                    </p>
                  </div>

                  {/* Gold Divider Line Accent */}
                  <div className="hidden sm:block w-12 h-px bg-[#E5C378]/60 ml-4 shrink-0"></div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
