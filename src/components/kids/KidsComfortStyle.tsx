"use client";

const VALUE_POINTS = [
  {
    title: "COMFORT FIRST",
    desc: "Easy-to-wear styles for active little ones.",
    icon: (
      <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
      </svg>
    ),
  },
  {
    title: "PLAYFUL DETAILS",
    desc: "Colors, prints and silhouettes children can enjoy.",
    icon: (
      <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <circle cx="12" cy="12" r="10"/>
        <path d="M8 14s1.5 2 4 2 4-2 4-2"/>
        <line x1="9" y1="9" x2="9.01" y2="9" strokeWidth="2.5" strokeLinecap="round"/>
        <line x1="15" y1="9" x2="15.01" y2="9" strokeWidth="2.5" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    title: "EVERYDAY OPTIONS",
    desc: "Styles for regular days and outings.",
    icon: (
      <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <circle cx="12" cy="12" r="4"/>
        <path d="M12 2v2"/>
        <path d="M12 20v2"/>
        <path d="M4.93 4.93l1.41 1.41"/>
        <path d="M17.66 17.66l1.41 1.41"/>
        <path d="M2 12h2"/>
        <path d="M20 12h2"/>
        <path d="M6.34 17.66l-1.41 1.41"/>
        <path d="M19.07 4.93l-1.41 1.41"/>
      </svg>
    ),
  },
  {
    title: "SPECIAL MOMENTS",
    desc: "Festive looks for celebrations and family occasions.",
    icon: (
      <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
      </svg>
    ),
  },
];

export function KidsComfortStyle() {
  return (
    <section className="py-16 md:py-20 bg-[#FAF3EB] text-[#3D2314] relative border-t border-[#E5C378]/25" id="kids-comfort-style">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-3 mb-4">
            <span className="w-8 h-px bg-[#D4AF37]"></span>
            <span className="text-xs font-semibold tracking-[0.24em] text-[#A41A50] uppercase">
              DESIGNED FOR REAL CHILDREN
            </span>
            <span className="w-8 h-px bg-[#D4AF37]"></span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#3D2314] mb-5 leading-tight">
            STYLE THEY CAN<br />
            <span className="italic font-normal text-[#A41A50]">ACTUALLY LIVE IN.</span>
          </h2>

          <p className="text-base sm:text-lg text-[#5A484D] leading-relaxed">
            Kidswear at Kamal Selections is chosen with parents and children in mind — allowing easy mobility, charming aesthetics, and effortless wear.
          </p>
        </div>

        {/* FOUR FEATURE PILLARS WITH GENEROUS WHITESPACE */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {VALUE_POINTS.map((item, idx) => (
            <div
              key={item.title}
              className="p-8 rounded-2xl bg-[#FFFFFF] border border-[#E5C378]/40 shadow-sm flex flex-col justify-between transition-all duration-300 hover:shadow-lg hover:border-[#D4AF37] group"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#FAF3EB] border border-[#E5C378]/50 flex items-center justify-center text-[#A41A50] mb-6 group-hover:bg-[#A41A50] group-hover:text-white transition-colors duration-300">
                  {item.icon}
                </div>

                <span className="text-[10px] font-bold text-[#D4AF37] tracking-[0.2em] uppercase block mb-2">
                  PILLAR 0{idx + 1}
                </span>

                <h3 className="font-serif text-xl font-bold text-[#3D2314] mb-3 tracking-wide">
                  {item.title}
                </h3>

                <p className="text-sm text-[#69564A] leading-relaxed">
                  {item.desc}
                </p>
              </div>

              <div className="w-8 h-0.5 bg-[#E5C378]/40 mt-6 group-hover:w-16 group-hover:bg-[#A41A50] transition-all duration-300"></div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
