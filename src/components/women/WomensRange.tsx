import Image from "next/image";

interface CategoryTile {
  id: string;
  name: string;
  phrase: string;
  image: string;
  alt: string;
  colSpanClass: string;
  heightClass: string;
}

const CATEGORIES: CategoryTile[] = [
  {
    id: "dresses",
    name: "Dresses",
    phrase: "Easy elegance for everyday and occasions.",
    image: "/images/women/categories/kamal-selections-womens-designer-dresses.jpg",
    alt: "Designer dresses and flowing ethnic gowns at Kamal Selections in Shadnagar",
    colSpanClass: "lg:col-span-8",
    heightClass: "h-64 sm:h-80 md:h-96",
  },
  {
    id: "kurtis",
    name: "Kurtis",
    phrase: "Comfortable silhouettes with modern detail.",
    image: "/images/women/categories/kamal-selections-womens-embroidered-kurtis.jpg",
    alt: "Embroidered ethnic kurtis for daily wear and festive celebrations at Kamal Selections",
    colSpanClass: "lg:col-span-4",
    heightClass: "h-64 sm:h-80 md:h-96",
  },
  {
    id: "tops",
    name: "Tops",
    phrase: "Casual styles for everyday looks.",
    image: "/images/women/categories/kamal-selections-womens-casual-trendy-tops.jpg",
    alt: "Contemporary women's casual and stylish tops at Kamal Selections",
    colSpanClass: "lg:col-span-4",
    heightClass: "h-64 sm:h-72",
  },
  {
    id: "leggings",
    name: "Leggings",
    phrase: "Everyday essentials for easy pairing.",
    image: "/images/women/categories/kamal-selections-womens-premium-leggings.jpg",
    alt: "Premium comfortable stretch leggings at Kamal Selections",
    colSpanClass: "lg:col-span-4",
    heightClass: "h-64 sm:h-72",
  },
  {
    id: "burqa",
    name: "Burqa",
    phrase: "Modest styles with a graceful finish.",
    image: "/images/women/categories/kamal-selections-womens-modest-burqa-collection.jpg",
    alt: "Graceful and modest burqa collection at Kamal Selections",
    colSpanClass: "lg:col-span-4",
    heightClass: "h-64 sm:h-72",
  },
  {
    id: "3piece-sets",
    name: "3-Piece Sets",
    phrase: "Complete looks with coordinated style.",
    image: "/images/women/categories/kamal-selections-womens-three-piece-ethnic-suits.jpg",
    alt: "Three-piece coordinated ethnic suits and dupatta sets at Kamal Selections",
    colSpanClass: "lg:col-span-5",
    heightClass: "h-64 sm:h-80",
  },
  {
    id: "party-wear",
    name: "Party Wear",
    phrase: "Statement looks for celebrations.",
    image: "/images/women/categories/kamal-selections-womens-sequined-partywear.jpg",
    alt: "Midnight blue festive party wear lehenga at Kamal Selections",
    colSpanClass: "lg:col-span-7",
    heightClass: "h-64 sm:h-80",
  },
];

export function WomensRange() {
  return (
    <section className="py-16 md:py-20 bg-[#FAF5EB] text-[#3D2314] relative" id="categories">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* SECTION HEADER */}
        <div className="text-center max-w-2xl mx-auto mb-14 md:mb-18">
          <div className="inline-flex items-center justify-center gap-3 mb-3">
            <span className="w-8 h-px bg-[#D4AF37]"></span>
            <span className="text-xs font-semibold tracking-[0.24em] text-[#A41A50] uppercase">
              OUR WOMEN&apos;S WEAR RANGE
            </span>
            <span className="w-8 h-px bg-[#D4AF37]"></span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#3D2314] tracking-tight mb-4">
            STYLES FOR EVERY WOMAN
          </h2>

          <p className="text-sm sm:text-base text-[#69564A] leading-relaxed max-w-xl mx-auto">
            From everyday essentials to occasion-ready styles, discover the kinds of women&apos;s fashion available at Kamal Selections, Shadnagar.
          </p>
        </div>

        {/* BALANCED EDITORIAL FASHION GRID (FULL SUBJECT VISIBILITY) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-5 sm:gap-6 lg:gap-8">
          {CATEGORIES.map((cat, idx) => {
            // Balanced responsive grid:
            // 2 featured cards on top (6 cols each)
            // 3 essential cards in middle (4 cols each)
            // 2 celebration cards on bottom (6 cols each)
            const spanClass =
              idx < 2
                ? "lg:col-span-6"
                : idx < 5
                ? "lg:col-span-4"
                : "lg:col-span-6";

            return (
              <div
                key={cat.id}
                id={cat.id}
                className={`${spanClass} relative rounded-3xl overflow-hidden shadow-xl border border-[#E5C378]/35 bg-[#20040A] group select-none transition-all duration-500 hover:shadow-2xl hover:border-[#D4AF37]`}
              >
                {/* 4:5 Portrait Aspect Ratio preserves 100% vertical model height (head to toe) */}
                <div className="relative aspect-[4/5] w-full overflow-hidden">
                  <Image
                    src={cat.image}
                    alt={cat.alt}
                    className="w-full h-full object-cover object-[center_15%] transform group-hover:scale-105 transition-transform duration-700 ease-out"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    loading="lazy"
                  />

                  {/* Gradient Vignette Overlay for Typography Legibility */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1F030B]/90 via-[#1F030B]/30 to-transparent pointer-events-none"></div>

                  {/* Top Category Badge */}
                  <div className="absolute top-4 left-4 z-10">
                    <span className="px-3 py-1 rounded-full bg-[#FAF3EB]/90 backdrop-blur-md border border-[#D4AF37]/50 text-[#A41A50] text-[10px] font-bold tracking-[0.2em] uppercase shadow-sm">
                      {cat.name}
                    </span>
                  </div>

                  {/* Bottom Editorial Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-7 z-10">
                    <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#FFFFFF] tracking-wide mb-1 drop-shadow-md">
                      {cat.name}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#F8E5BA] font-light tracking-wide max-w-md drop-shadow">
                      {cat.phrase}
                    </p>
                  </div>

                  {/* Subtle Corner Gold Accent */}
                  <div className="absolute top-4 right-4 w-2 h-2 rounded-full bg-[#E5C378]/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </div>
            );
          })}
        </div>

        {/* BOTTOM REASSURANCE BAR */}
        <div className="mt-12 text-center text-xs text-[#7A665A] tracking-wider uppercase">
          <span>Available to explore and try in person at our Shadnagar store</span>
        </div>

      </div>
    </section>
  );
}
