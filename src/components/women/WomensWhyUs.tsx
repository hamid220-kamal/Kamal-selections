"use client";

const FEATURES = [
  {
    title: "TREND-LED STYLES",
    desc: "Fresh looks for modern wardrobes.",
    icon: (
      <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
      </svg>
    ),
  },
  {
    title: "EVERYDAY COMFORT",
    desc: "Styles made for real life.",
    icon: (
      <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M20.38 3.46L16 2a4 4 0 0 1-8 0L3.62 3.46a2 2 0 0 0-1.34 2.23l.58 3.5a2 2 0 0 0 1.28 1.55L6 11.5V20a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-8.5l1.86-.76a2 2 0 0 0 1.28-1.55l.58-3.5a2 2 0 0 0-1.34-2.23z"/>
      </svg>
    ),
  },
  {
    title: "CHOICE FOR EVERY BUDGET",
    desc: "Fashion without unnecessary pricing pressure.",
    icon: (
      <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"/>
        <line x1="7" y1="7" x2="7.01" y2="7" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    title: "LOCAL & PERSONAL",
    desc: "A store you can visit, explore and choose from in person.",
    icon: (
      <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
        <polyline points="9 22 9 12 15 12 15 22"/>
      </svg>
    ),
  },
];

export function WomensWhyUs() {
  return (
    <section className="py-20 md:py-28 bg-[#FAF5EB] text-[#3D2314] relative border-b border-[#E5C378]/25" id="why-choose-us">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* HEADER */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center justify-center gap-3 mb-3">
            <span className="w-8 h-px bg-[#D4AF37]"></span>
            <span className="text-xs font-semibold tracking-[0.24em] text-[#A41A50] uppercase">
              THOUGHTFUL FASHION
            </span>
            <span className="w-8 h-px bg-[#D4AF37]"></span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#3D2314] tracking-tight">
            WHY WOMEN CHOOSE<br />
            <span className="text-[#A41A50] font-normal italic">KAMAL SELECTIONS.</span>
          </h2>
        </div>

        {/* 4 REFINED CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {FEATURES.map((feat) => (
            <div
              key={feat.title}
              className="p-8 rounded-2xl bg-[#FFFFFF] border border-[#E5C378]/35 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col items-start group"
            >
              <div className="w-12 h-12 rounded-xl bg-[#FAF3EB] border border-[#E5C378]/50 flex items-center justify-center text-[#A41A50] mb-6 group-hover:scale-110 transition-transform duration-300">
                {feat.icon}
              </div>

              <h3 className="font-sans font-bold text-sm text-[#3D2314] tracking-wider uppercase mb-2">
                {feat.title}
              </h3>

              <p className="text-sm text-[#69564A] leading-relaxed">
                {feat.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
