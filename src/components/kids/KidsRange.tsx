"use client";

const KIDS_CATEGORIES = [
  {
    id: "frocks",
    name: "Kids Frocks",
    desc: "Playful silhouettes for little girls.",
    image: "/images/kids/cat-frocks.jpg",
    alt: "Playful kids frock silhouette at Kamal Selections",
    tag: "GIRLS' COLLECTION",
    accentColor: "from-[#FAD0C4]/40 to-[#FFD1FF]/20",
    badgeBg: "bg-[#FDF2F4] text-[#A41A50] border-[#FAD0C4]",
    gridSpan: "lg:col-span-7",
    imageHeight: "h-72 sm:h-80 lg:h-96",
  },
  {
    id: "sets",
    name: "Kids Sets",
    desc: "Easy coordinated looks for everyday wear.",
    image: "/images/kids/cat-kids-sets.jpg",
    alt: "Coordinated kids outfit sets at Kamal Selections",
    tag: "COORDINATED WEAR",
    accentColor: "from-[#E0C3FC]/30 to-[#8EC5FC]/20",
    badgeBg: "bg-[#F5F0FA] text-[#6B46C1] border-[#E0C3FC]",
    gridSpan: "lg:col-span-5",
    imageHeight: "h-72 sm:h-80 lg:h-96",
  },
  {
    id: "girls",
    name: "Girls' Clothing",
    desc: "Comfortable styles for every little occasion.",
    image: "/images/kids/cat-girls-wear.jpg",
    alt: "Girls festive and everyday clothing at Kamal Selections",
    tag: "OCCASION & CASUAL",
    accentColor: "from-[#FFE5D9]/40 to-[#FFF1E6]/20",
    badgeBg: "bg-[#FFF6F0] text-[#B85D19] border-[#FFE5D9]",
    gridSpan: "lg:col-span-5",
    imageHeight: "h-72 sm:h-80 lg:h-96",
  },
  {
    id: "boys",
    name: "Boys' Clothing",
    desc: "Smart, playful looks made for active days.",
    image: "/images/kids/cat-boys-wear.jpg",
    alt: "Smart boys clothing at Kamal Selections",
    tag: "ACTIVE & SMART",
    accentColor: "from-[#CFDEF3]/40 to-[#E0EAFC]/20",
    badgeBg: "bg-[#F0F5FA] text-[#1D4ED8] border-[#CFDEF3]",
    gridSpan: "lg:col-span-7",
    imageHeight: "h-72 sm:h-80 lg:h-96",
  },
];

export function KidsRange() {
  return (
    <section className="py-20 md:py-28 bg-[#FDFBF7] text-[#3D2314] relative border-t border-[#E5C378]/30" id="categories">
      {/* BACKGROUND AMBIENT GLOW */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-gradient-to-tr from-[#E5C378]/10 via-[#FAD0C4]/15 to-transparent rounded-full blur-3xl pointer-events-none -translate-y-1/2"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* SECTION HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-3 mb-4">
            <span className="w-8 h-px bg-[#D4AF37]"></span>
            <span className="text-xs font-semibold tracking-[0.24em] text-[#A41A50] uppercase">
              OUR KIDS&apos; WEAR RANGE
            </span>
            <span className="w-8 h-px bg-[#D4AF37]"></span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#3D2314] tracking-tight mb-5">
            MADE FOR EVERY<br />
            <span className="italic font-normal text-[#A41A50]">LITTLE MOMENT.</span>
          </h2>

          <p className="text-base sm:text-lg text-[#5A484D] leading-relaxed">
            From everyday outfits to celebrations, our kids&apos; range brings together styles for girls and boys across different ages and occasions.
          </p>

          <div className="mt-4 inline-block px-4 py-1.5 rounded-full bg-[#FAF3EB] border border-[#E5C378]/40 text-xs font-medium text-[#69564A]">
            In-Store Showcase · Non-Catalog Visual Guide
          </div>
        </div>

        {/* ASYMMETRIC EDITORIAL MASONRY GRID (NON-CLICKABLE REPRESENTATIONS) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
          {KIDS_CATEGORIES.map((cat) => (
            <div
              key={cat.id}
              className={`${cat.gridSpan} group relative rounded-3xl overflow-hidden bg-[#FFFFFF] border border-[#E5C378]/35 shadow-lg flex flex-col transition-all duration-500 hover:shadow-2xl hover:border-[#D4AF37]`}
            >
              {/* IMAGE WRAPPER */}
              <div className={`relative w-full ${cat.imageHeight} overflow-hidden`}>
                <img
                  src={cat.image}
                  alt={cat.alt}
                  className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-700 ease-out"
                  loading="lazy"
                />
                
                {/* Soft gradient overlay at bottom of image */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#20040A]/80 via-[#20040A]/20 to-transparent"></div>

                {/* Subtle top pastel tint for warmth */}
                <div className={`absolute inset-0 bg-gradient-to-br ${cat.accentColor} mix-blend-multiply opacity-30 pointer-events-none`}></div>

                {/* Category Pill Tag */}
                <div className="absolute top-4 left-4 z-10">
                  <span className={`inline-block px-3 py-1 rounded-full text-[10px] font-bold tracking-[0.2em] uppercase border shadow-sm backdrop-blur-md ${cat.badgeBg}`}>
                    {cat.tag}
                  </span>
                </div>

                {/* Overlay Text Inside Image */}
                <div className="absolute bottom-5 left-5 right-5 z-10 text-white">
                  <h3 className="font-serif text-2xl sm:text-3xl font-bold tracking-wide drop-shadow-md mb-1.5">
                    {cat.name}
                  </h3>
                  <p className="text-sm text-[#F8E5BA] drop-shadow font-normal max-w-md">
                    {cat.desc}
                  </p>
                </div>
              </div>

              {/* EDITORIAL BOTTOM BAR */}
              <div className="p-4 sm:p-5 bg-gradient-to-r from-[#FAF3EB] to-[#FFFFFF] border-t border-[#E5C378]/25 flex items-center justify-between">
                <span className="text-[11px] font-semibold text-[#A41A50] tracking-wider uppercase">
                  Available in Store · Shadnagar
                </span>
                <span className="text-[11px] text-[#69564A] italic font-serif">
                  Carefully Selected
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
