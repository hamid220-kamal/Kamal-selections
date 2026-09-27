"use client";

import Image from "next/image";

export function AboutBeginning() {
  return (
    <section className="py-20 md:py-28 bg-[#F4EEE5] text-[#30251F] relative overflow-hidden" id="story">
      {/* SUBTLE GOLD & WARM BLUSH ACCENT GLOW */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-[#E5C378]/15 via-transparent to-transparent rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* LEFT: AUTHENTIC STORE / OWNER IMAGE (5 COLS) */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Outer Decorative Gold Border Offset */}
              <div className="absolute -left-3 -top-3 sm:-left-4 sm:-top-4 w-full h-full border border-[#D4AF37]/50 rounded-2xl pointer-events-none" aria-hidden="true" />
              
              {/* Image Container */}
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl border border-[#E5C378]/40 bg-[#D8CEC1]">
                <Image
                  src="/assets/owner.png"
                  alt="Kamal Selections in-store shopping experience in Shadnagar"
                  fill
                  sizes="(max-width: 1024px) 100vw, 42vw"
                  className="object-cover object-center transform hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#20040A]/50 via-transparent to-transparent"></div>
              </div>

              {/* Caption Tag */}
              <div className="mt-4 flex items-center justify-between text-xs text-[#69564A]">
                <span className="uppercase tracking-[0.2em] font-semibold text-[#A41A50]">
                  Kamal Selections · Shadnagar
                </span>
                <span className="font-serif italic">Est. 2021</span>
              </div>
            </div>
          </div>

          {/* RIGHT: EDITORIAL STORY TEXT (7 COLS) */}
          <div className="lg:col-span-7">
            {/* EYEBROW */}
            <div className="inline-flex items-center gap-3 mb-4">
              <span className="w-8 h-px bg-[#D4AF37]"></span>
              <span className="text-xs font-semibold tracking-[0.24em] text-[#A41A50] uppercase">
                OUR BEGINNING
              </span>
            </div>

            {/* HEADING */}
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#30251F] leading-[1.18] mb-6 tracking-tight">
              BUILT WITH A SIMPLE IDEA:<br />
              <span className="italic font-normal text-[#A41A50]">
                GOOD FASHION SHOULD FEEL ACCESSIBLE.
              </span>
            </h2>

            {/* GOLD DIVIDER */}
            <div className="w-16 h-0.5 bg-[#D4AF37] mb-6" aria-hidden="true" />

            {/* SUPPORTING COPY */}
            <p className="text-base sm:text-lg text-[#51443B] leading-relaxed mb-6">
              Kamal Selections began in 2021 in Shadnagar with a simple purpose — to bring women&apos;s and kids&apos; fashion together in one place, with styles families could explore comfortably and affordably.
            </p>

            {/* SCRIPT ACCENT */}
            <p className="font-script text-3xl sm:text-4xl text-[#A41A50] mb-8">
              A warm welcome, and styles for every moment.
            </p>

            {/* GROUNDED COMMUNITY HIGHLIGHT BOX */}
            <div className="p-6 rounded-2xl bg-[#FFFFFF] border border-[#E5C378]/40 shadow-sm">
              <span className="text-xs font-bold text-[#A41A50] uppercase tracking-wider block mb-2">
                Locally Rooted &amp; Welcoming
              </span>
              <p className="text-xs sm:text-sm text-[#69564A] leading-relaxed">
                Rather than an impersonal digital catalog, we built a physical store where women and families can touch the fabrics, try on silhouettes, and make choices with confidence.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
