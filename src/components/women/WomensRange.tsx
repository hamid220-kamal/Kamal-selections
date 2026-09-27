"use client";

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
    image: "/assets/cat-dresses.jpg",
    alt: "Indian woman wearing a flowing floral dress at Kamal Selections",
    colSpanClass: "lg:col-span-8",
    heightClass: "h-64 sm:h-80 md:h-96",
  },
  {
    id: "kurtis",
    name: "Kurtis",
    phrase: "Comfortable silhouettes with modern detail.",
    image: "/assets/cat-kurtis.jpg",
    alt: "Yellow embroidered kurti available at Kamal Selections in Shadnagar",
    colSpanClass: "lg:col-span-4",
    heightClass: "h-64 sm:h-80 md:h-96",
  },
  {
    id: "tops",
    name: "Tops",
    phrase: "Casual styles for everyday looks.",
    image: "/assets/cat-tops.jpg",
    alt: "Contemporary women's tops at Kamal Selections",
    colSpanClass: "lg:col-span-4",
    heightClass: "h-64 sm:h-72",
  },
  {
    id: "leggings",
    name: "Leggings",
    phrase: "Everyday essentials for easy pairing.",
    image: "/assets/cat-leggings.jpg",
    alt: "Premium comfortable leggings at Kamal Selections",
    colSpanClass: "lg:col-span-4",
    heightClass: "h-64 sm:h-72",
  },
  {
    id: "burqa",
    name: "Burqa",
    phrase: "Modest styles with a graceful finish.",
    image: "/assets/cat-burqa.jpg",
    alt: "Graceful and modest burqa styles at Kamal Selections",
    colSpanClass: "lg:col-span-4",
    heightClass: "h-64 sm:h-72",
  },
  {
    id: "3piece",
    name: "3-Piece Sets",
    phrase: "Complete looks with coordinated style.",
    image: "/assets/cat-3piece.jpg",
    alt: "Coordinated three-piece ethnic suit at Kamal Selections",
    colSpanClass: "lg:col-span-5",
    heightClass: "h-64 sm:h-80",
  },
  {
    id: "partywear",
    name: "Party Wear",
    phrase: "Statement looks for celebrations.",
    image: "/assets/cat-partywear.jpg",
    alt: "Midnight blue festive party wear lehenga at Kamal Selections",
    colSpanClass: "lg:col-span-7",
    heightClass: "h-64 sm:h-80",
  },
];

export function WomensRange() {
  return (
    <section className="py-20 md:py-28 bg-[#FAF5EB] text-[#3D2314] relative" id="categories">
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

        {/* ASYMMETRIC EDITORIAL MASONRY GRID (NON-CLICKABLE TILES) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-5 sm:gap-6">
          {CATEGORIES.map((cat) => (
            <div
              key={cat.id}
              id={cat.id}
              className={`${cat.colSpanClass} ${cat.heightClass} relative rounded-2xl overflow-hidden shadow-lg border border-[#E5C378]/30 group select-none`}
            >
              {/* Background Photograph */}
              <img
                src={cat.image}
                alt={cat.alt}
                className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-700 ease-out"
                loading="lazy"
              />

              {/* Gradient Vignette Overlay for Typography Legibility */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#20040A]/90 via-[#20040A]/40 to-transparent pointer-events-none"></div>

              {/* Bottom Editorial Content */}
              <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-7 z-10">
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#FFFFFF] tracking-wide mb-1 drop-shadow-sm">
                  {cat.name}
                </h3>
                <p className="text-xs sm:text-sm text-[#F8E5BA] font-light tracking-wide max-w-md drop-shadow-sm">
                  {cat.phrase}
                </p>
              </div>

              {/* Subtle Corner Gold Accent */}
              <div className="absolute top-4 right-4 w-2 h-2 rounded-full bg-[#E5C378]/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>

        {/* BOTTOM REASSURANCE BAR */}
        <div className="mt-12 text-center text-xs text-[#7A665A] tracking-wider uppercase">
          <span>Available to explore and try in person at our Shadnagar store</span>
        </div>

      </div>
    </section>
  );
}
