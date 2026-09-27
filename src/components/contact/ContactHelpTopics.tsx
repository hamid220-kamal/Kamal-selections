"use client";

const HELP_TOPICS = [
  {
    title: "WOMEN'S WEAR",
    desc: "Looking for dresses, kurtis, tops, 3-piece sets or other women's styles.",
    icon: (
      <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M20.38 3.46L16 2a4 4 0 0 1-8 0L3.62 3.46a2 2 0 0 0-1.34 2.23l.58 3.5a2 2 0 0 0 1.28 1.55L6 11.5V20a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-8.5l1.86-.76a2 2 0 0 0 1.28-1.55l.58-3.5a2 2 0 0 0-1.34-2.23z"/>
      </svg>
    ),
  },
  {
    title: "KIDS WEAR",
    desc: "Looking for girls' or boys' clothing, frocks or kids' sets.",
    icon: (
      <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.8">
        <circle cx="12" cy="7" r="4"/>
        <path d="M5.5 21a6.5 6.5 0 0 1 13 0"/>
      </svg>
    ),
  },
  {
    title: "STORE INFORMATION",
    desc: "Need help finding Kamal Selections in Shadnagar?",
    icon: (
      <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/>
        <circle cx="12" cy="9" r="2.5"/>
      </svg>
    ),
  },
  {
    title: "GENERAL ENQUIRY",
    desc: "Have another question for the store?",
    icon: (
      <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.8">
        <circle cx="12" cy="12" r="10"/>
        <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/>
        <line x1="12" y1="17" x2="12.01" y2="17" strokeWidth="2.5"/>
      </svg>
    ),
  },
];

export function ContactHelpTopics() {
  return (
    <section className="py-20 md:py-28 bg-[#FAF3EB] text-[#30251F] relative border-t border-[#E5C378]/25" id="help-topics">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* HEADER */}
        <div className="text-center max-w-2xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-3 mb-4">
            <span className="w-8 h-px bg-[#D4AF37]"></span>
            <span className="text-xs font-semibold tracking-[0.24em] text-[#A41A50] uppercase">
              REASONS TO CONNECT
            </span>
            <span className="w-8 h-px bg-[#D4AF37]"></span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#30251F] mb-4">
            WHAT CAN WE HELP YOU WITH?
          </h2>

          <p className="text-base text-[#69564A]">
            Whether you&apos;re curious about upcoming festive collections or navigating to Ibrahim Complex, we&apos;re happy to assist.
          </p>
        </div>

        {/* FOUR REFINED CARDS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {HELP_TOPICS.map((topic, idx) => (
            <div
              key={topic.title}
              className="p-8 rounded-2xl bg-[#FFFFFF] border border-[#E5C378]/40 shadow-sm flex flex-col justify-between transition-all duration-300 hover:shadow-lg hover:border-[#D4AF37] group"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#FAF3EB] border border-[#E5C378]/50 flex items-center justify-center text-[#A41A50] mb-6 group-hover:bg-[#A41A50] group-hover:text-white transition-colors duration-300">
                  {topic.icon}
                </div>

                <span className="text-[10px] font-bold text-[#D4AF37] tracking-[0.2em] uppercase block mb-2">
                  TOPIC 0{idx + 1}
                </span>

                <h3 className="font-serif text-xl font-bold text-[#30251F] mb-3 tracking-wide">
                  {topic.title}
                </h3>

                <p className="text-sm text-[#69564A] leading-relaxed">
                  {topic.desc}
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
