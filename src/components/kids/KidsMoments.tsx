"use client";

const KIDS_MOMENTS = [
  {
    title: "EVERYDAY PLAY",
    desc: "Comfortable breathable cotton sets and easy tees for daily activities and school breaks.",
    fabrics: "Soft Breathable Cotton · French Terry · Gentle Knits",
    tone: "Lightweight, irritation-free garments designed for active movement.",
    bgGrad: "from-[#FAF3EB] via-[#FFFFFF] to-[#F5ECE0]",
  },
  {
    title: "FAMILY DAYS",
    desc: "Smart coordinates, casual shirts, and twirl-ready frocks for weekend outings and gatherings.",
    fabrics: "Linen Blends · Crisp Poplin · Fine Cambric",
    tone: "Effortlessly polished looks that keep children comfortable all day.",
    bgGrad: "from-[#FBF5EB] via-[#FFFFFF] to-[#F7EFE2]",
  },
  {
    title: "CELEBRATIONS",
    desc: "Festive sherwanis, kurtas, and pastel lehengas tailored for weddings and festive pujas.",
    fabrics: "Brocade Accents · Soft Chanderi · Lined Jacquard",
    tone: "Traditional grandeur with soft inner linings to protect sensitive skin.",
    bgGrad: "from-[#FDF2F4] via-[#FFFFFF] to-[#FBE8EC]",
  },
];

export function KidsMoments() {
  return (
    <section className="py-20 md:py-28 bg-[#FDFBF7] text-[#3D2314] relative border-t border-[#E5C378]/25" id="kids-moments">
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
              FROM PLAYTIME<br />
              <span className="text-[#A41A50] italic font-normal">TO CELEBRATIONS.</span>
            </h2>

            <p className="text-base sm:text-lg text-[#5A484D] leading-relaxed mb-8">
              Whether it&apos;s morning playtime, an afternoon family outing, or an evening celebration, our kids&apos; selection brings together outfits for each chapter of their childhood.
            </p>

            <div className="p-5 rounded-2xl bg-[#FAF3EB] border border-[#E5C378]/40">
              <span className="text-xs font-bold text-[#A41A50] tracking-wider uppercase block mb-1">
                Thoughtfully Handpicked For Kids
              </span>
              <p className="text-xs sm:text-sm text-[#69564A]">
                Each garment at Kamal Selections balances ease of movement with joyful aesthetics, so children stay cheerful throughout long family functions in Shadnagar.
              </p>
            </div>
          </div>

          {/* RIGHT THREE STACKED OCCASION CARDS (7 COLS) */}
          <div className="lg:col-span-7 space-y-5">
            {KIDS_MOMENTS.map((moment, idx) => (
              <div
                key={moment.title}
                className={`group relative overflow-hidden rounded-2xl bg-gradient-to-r ${moment.bgGrad} border border-[#E5C378]/35 shadow-md p-6 sm:p-7 transition-all duration-300 hover:shadow-xl hover:border-[#D4AF37]`}
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="space-y-1.5 max-w-lg">
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] font-bold text-[#A41A50] tracking-[0.2em] uppercase">
                        0{idx + 1} · OCCASION FOCUS
                      </span>
                      <span className="w-4 h-px bg-[#D4AF37]"></span>
                    </div>

                    <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#3D2314] tracking-wide">
                      {moment.title}
                    </h3>

                    <p className="text-sm text-[#51443B] leading-relaxed">
                      {moment.desc}
                    </p>

                    <div className="pt-2 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-[#69564A]">
                      <span className="font-semibold text-[#A41A50]">Fabrics: {moment.fabrics}</span>
                      <span className="italic">{moment.tone}</span>
                    </div>
                  </div>

                  <div className="hidden sm:flex items-center justify-center w-12 h-12 rounded-full bg-[#FAF3EB] border border-[#D4AF37]/50 text-[#A41A50] shrink-0 font-serif font-bold">
                    0{idx + 1}
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
