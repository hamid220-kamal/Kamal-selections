"use client";

const EXPERIENCE_STEPS = [
  {
    step: "01",
    title: "EXPLORE",
    desc: "Take your time browsing different women's and kids' styles.",
    image: "/images/women/women-store-browsing.jpg",
    alt: "Customer browsing ethnic wear racks at Kamal Selections",
    caption: "Unhurried Browsing",
  },
  {
    step: "02",
    title: "COMPARE",
    desc: "See different colours, designs and silhouettes in person.",
    image: "/assets/cat-partywear.jpg",
    alt: "Comparing intricate embroidery and silhouettes in store",
    caption: "Feel The Fabric & Details",
  },
  {
    step: "03",
    title: "CHOOSE",
    desc: "Find the style that feels right for you and your family.",
    image: "/images/home/collage-kids.jpg",
    alt: "Happy family finding coordinated clothing at Kamal Selections",
    caption: "Confident Decisions",
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
              className="group relative rounded-3xl overflow-hidden bg-[#FFFFFF] border border-[#E5C378]/35 shadow-md flex flex-col transition-all duration-500 hover:shadow-2xl hover:border-[#D4AF37]"
            >
              {/* Image Container with Editorial Proportions */}
              <div className="relative aspect-[4/3] sm:aspect-[5/4] w-full overflow-hidden">
                <img
                  src={step.image}
                  alt={step.alt}
                  className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-700 ease-out"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#20040A]/70 via-transparent to-transparent"></div>

                {/* Step Number Badge */}
                <div className="absolute top-4 left-4 z-10">
                  <span className="inline-flex items-center justify-center w-11 h-11 rounded-full bg-[#FAF3EB]/95 border border-[#D4AF37]/60 text-xs font-bold text-[#A41A50] tracking-wider shadow-md backdrop-blur-md">
                    {step.step}
                  </span>
                </div>

                {/* In-Image Caption */}
                <div className="absolute bottom-4 left-4 right-4 z-10 text-white">
                  <span className="text-[10px] font-bold text-[#E5C378] tracking-[0.2em] uppercase block mb-1">
                    {step.caption}
                  </span>
                  <h3 className="font-serif text-2xl font-bold tracking-wide drop-shadow-md">
                    {step.title}
                  </h3>
                </div>
              </div>

              {/* Editorial Description Body */}
              <div className="p-6 sm:p-7 flex-grow flex flex-col justify-between">
                <p className="text-sm text-[#51443B] leading-relaxed mb-6">
                  {step.desc}
                </p>

                <div className="pt-4 border-t border-[#E5C378]/25 flex items-center justify-between text-xs text-[#69564A]">
                  <span className="uppercase tracking-wider font-semibold text-[#A41A50]">
                    In-Store Step
                  </span>
                  <span className="font-serif italic">
                    Shadnagar
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
