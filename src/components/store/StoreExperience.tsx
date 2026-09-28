"use client";

const EXPERIENCE_STEPS = [
  {
    step: "01",
    title: "EXPLORE",
    desc: "Take your time browsing through women's ethnic racks and children's collections at an unhurried, comfortable pace.",
    caption: "Unhurried Browsing",
    highlights: ["Wide showroom aisles", "Clearly organized sizes", "Full collection visible"],
    bgGrad: "from-[#FAF3EB] via-[#FFFFFF] to-[#F5ECE0]",
  },
  {
    step: "02",
    title: "COMPARE",
    desc: "Feel real textures, inspect handwork and delicate zari borders, and compare subtle shades under true warm lighting.",
    caption: "Feel The Fabric & Details",
    highlights: ["Pure cotton & silk touch", "Color tone clarity", "Inspect inner linings"],
    bgGrad: "from-[#FBF5EB] via-[#FFFFFF] to-[#F7EFE2]",
  },
  {
    step: "03",
    title: "CHOOSE",
    desc: "Try outfits in private fitting rooms and make confident decisions with guidance from our welcoming showroom team.",
    caption: "Confident Decisions",
    highlights: ["Private trial rooms", "Sizing adjustments", "Family consultation"],
    bgGrad: "from-[#FDF2F4] via-[#FFFFFF] to-[#FBE8EC]",
  },
];

export function StoreExperience() {
  return (
    <section className="py-20 md:py-28 bg-[#F4EEE5] text-[#30251F] relative border-t border-[#E5C378]/25" id="store-experience">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-3 mb-4">
            <span className="w-8 h-px bg-[#D4AF37]"></span>
            <span className="text-xs font-semibold tracking-[0.24em] text-[#A41A50] uppercase">
              THE IN-STORE EXPERIENCE
            </span>
            <span className="w-8 h-px bg-[#D4AF37]"></span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#30251F] mb-4">
            Browsing Made Natural.
          </h2>

          <p className="text-base text-[#69564A]">
            Shopping in person lets you find the right fit, judge real fabrics, and enjoy unhurried choices.
          </p>
        </div>

        {/* THREE-PART NUMBERED EDITORIAL STORY */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
          {EXPERIENCE_STEPS.map((step) => (
            <div
              key={step.step}
              className={`group relative rounded-3xl overflow-hidden bg-gradient-to-b ${step.bgGrad} border border-[#E5C378]/40 shadow-md p-8 sm:p-9 flex flex-col justify-between transition-all duration-500 hover:shadow-2xl hover:border-[#D4AF37]`}
            >
              <div>
                <div className="flex items-center justify-between mb-6 pb-4 border-b border-[#E5C378]/30">
                  <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#FAF3EB] border border-[#D4AF37]/60 text-sm font-bold text-[#A41A50] font-serif shadow-sm">
                    {step.step}
                  </span>
                  <span className="text-[10px] font-bold text-[#D4AF37] tracking-[0.2em] uppercase">
                    {step.caption}
                  </span>
                </div>

                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#3D2314] tracking-wide mb-3">
                  {step.title}
                </h3>

                <p className="text-sm text-[#51443B] leading-relaxed mb-6">
                  {step.desc}
                </p>

                <div className="space-y-2 pt-2 border-t border-[#E5C378]/25 text-xs text-[#69564A]">
                  {step.highlights.map((item) => (
                    <div key={item} className="flex items-center gap-2">
                      <span className="text-[#A41A50]">✦</span>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-[#E5C378]/25 flex items-center justify-between text-xs text-[#69564A]">
                <span className="uppercase tracking-wider font-semibold text-[#A41A50]">
                  In-Store Step
                </span>
                <span className="font-serif italic">
                  Shadnagar Showroom
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
