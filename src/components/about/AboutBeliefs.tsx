"use client";

const BELIEFS = [
  {
    title: "CHOICE",
    desc: "A range of women's and kids' styles for different occasions.",
    icon: (
      <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <rect x="3" y="3" width="7" height="7" rx="1.5" />
        <rect x="14" y="3" width="7" height="7" rx="1.5" />
        <rect x="14" y="14" width="7" height="7" rx="1.5" />
        <rect x="3" y="14" width="7" height="7" rx="1.5" />
      </svg>
    ),
  },
  {
    title: "VALUE",
    desc: "Fashion that remains accessible for everyday families.",
    icon: (
      <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"/>
        <line x1="7" y1="7" x2="7.01" y2="7" strokeWidth="2.5" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    title: "PERSONAL",
    desc: "A physical store where customers can explore, compare and choose in person.",
    icon: (
      <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
        <polyline points="9 22 9 12 15 12 15 22"/>
      </svg>
    ),
  },
];

export function AboutBeliefs() {
  return (
    <section className="py-16 md:py-20 bg-[#F4EEE5] text-[#30251F] relative border-t border-[#E5C378]/25" id="beliefs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* EDITORIAL HEADER */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-3 mb-4">
            <span className="w-8 h-px bg-[#D4AF37]"></span>
            <span className="text-xs font-semibold tracking-[0.24em] text-[#A41A50] uppercase">
              OUR CORE PHILOSOPHY
            </span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold text-[#30251F] leading-[1.12] mb-6">
            FASHION SHOULD<br />
            <span className="italic font-normal text-[#A41A50]">FEEL LIKE YOU.</span>
          </h2>

          <p className="text-base sm:text-lg text-[#51443B] leading-relaxed">
            We believe choosing clothes should be simple — find something you like, see it in person, try different styles and choose what feels right for you.
          </p>
        </div>

        {/* THREE REFINED PRINCIPLE CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {BELIEFS.map((belief, idx) => (
            <div
              key={belief.title}
              className="p-8 sm:p-10 rounded-3xl bg-[#FFFFFF] border border-[#E5C378]/40 shadow-sm flex flex-col justify-between transition-all duration-300 hover:shadow-xl hover:border-[#D4AF37] group"
            >
              <div>
                <div className="w-14 h-14 rounded-2xl bg-[#FAF3EB] border border-[#E5C378]/60 flex items-center justify-center text-[#A41A50] mb-8 group-hover:bg-[#A41A50] group-hover:text-white transition-colors duration-300">
                  {belief.icon}
                </div>

                <span className="text-[10px] font-bold text-[#D4AF37] tracking-[0.24em] uppercase block mb-2">
                  PRINCIPLE 0{idx + 1}
                </span>

                <h3 className="font-serif text-2xl font-bold text-[#30251F] mb-3 tracking-wide">
                  {belief.title}
                </h3>

                <p className="text-sm sm:text-base text-[#69564A] leading-relaxed">
                  {belief.desc}
                </p>
              </div>

              <div className="w-10 h-0.5 bg-[#E5C378]/50 mt-8 group-hover:w-20 group-hover:bg-[#A41A50] transition-all duration-300" />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
