"use client";

const APPROACH_POINTS = [
  {
    title: "STYLE",
    desc: "Keeping the collection relevant to today's fashion.",
    icon: (
      <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.8">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
      </svg>
    ),
  },
  {
    title: "CHOICE",
    desc: "Giving customers different styles to explore.",
    icon: (
      <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.8">
        <circle cx="12" cy="12" r="10"/>
        <line x1="12" y1="8" x2="12" y2="16"/>
        <line x1="8" y1="12" x2="16" y2="12"/>
      </svg>
    ),
  },
  {
    title: "VALUE",
    desc: "Keeping fashion accessible to local families.",
    icon: (
      <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
      </svg>
    ),
  },
  {
    title: "WELCOME",
    desc: "Creating a comfortable place to browse and choose.",
    icon: (
      <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
        <circle cx="9" cy="7" r="4"/>
        <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
        <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
      </svg>
    ),
  },
];

export function AboutApproach() {
  return (
    <section className="py-20 md:py-28 bg-[#FAF3EB] text-[#30251F] relative border-t border-[#E5C378]/25" id="approach">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* HEADER */}
        <div className="text-center max-w-2xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-3 mb-4">
            <span className="w-8 h-px bg-[#D4AF37]"></span>
            <span className="text-xs font-semibold tracking-[0.24em] text-[#A41A50] uppercase">
              OUR GUIDING STANDARDS
            </span>
            <span className="w-8 h-px bg-[#D4AF37]"></span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#30251F] mb-4">
            WHAT MATTERS TO US.
          </h2>

          <p className="text-base text-[#69564A]">
            Four simple principles that define how we choose our clothing and welcome our customers.
          </p>
        </div>

        {/* FOUR PRINCIPLES GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {APPROACH_POINTS.map((item, idx) => (
            <div
              key={item.title}
              className="p-8 rounded-2xl bg-[#FFFFFF] border border-[#E5C378]/40 shadow-sm flex flex-col justify-between transition-all duration-300 hover:shadow-lg hover:border-[#D4AF37] group"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#FAF3EB] border border-[#E5C378]/50 flex items-center justify-center text-[#A41A50] mb-6 group-hover:bg-[#A41A50] group-hover:text-white transition-colors duration-300">
                  {item.icon}
                </div>

                <span className="text-[10px] font-bold text-[#D4AF37] tracking-[0.2em] uppercase block mb-2">
                  FOCUS 0{idx + 1}
                </span>

                <h3 className="font-serif text-xl font-bold text-[#30251F] mb-3 tracking-wide">
                  {item.title}
                </h3>

                <p className="text-sm text-[#69564A] leading-relaxed">
                  {item.desc}
                </p>
              </div>

              <div className="w-8 h-0.5 bg-[#E5C378]/40 mt-6 group-hover:w-16 group-hover:bg-[#A41A50] transition-all duration-300" />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
