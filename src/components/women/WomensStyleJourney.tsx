"use client";

import Image from "next/image";
import { womensData } from "@/data/womens";

export function WomensStyleJourney() {
  const stages = womensData.styleJourney;

  return (
    <section className="py-24 bg-[#FAF5EB] relative overflow-hidden border-t border-b border-[#E5C378]/20" id="style-journey">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-bold tracking-widest text-[#D4AF37] uppercase">
            VERSATILE WARDROBE
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#380511]">
            From Everyday to Occasion
          </h2>
          <div className="w-16 h-[2px] bg-[#D4AF37] mx-auto my-2"></div>
          <p className="text-base sm:text-lg text-[#3D2314]/80">
            Curated collections thoughtfully designed to accompany every moment of your week.
          </p>
        </div>

        {/* 3 VISUAL PANELS WITH CONNECTING LINE */}
        <div className="relative">
          
          {/* CONNECTING LINE (VISIBLE ON DESKTOP LG SCREENS) */}
          <div className="hidden lg:block absolute top-1/2 left-16 right-16 h-[2px] bg-gradient-to-r from-[#D4AF37]/20 via-[#4A0717]/40 to-[#D4AF37]/20 -translate-y-12 z-0" aria-hidden="true" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10 relative z-10">
            {stages.map((stage, idx) => (
              <div
                key={stage.number}
                className="group relative bg-[#FDFBF7] rounded-2xl overflow-hidden border border-[#E5C378]/30 shadow-md hover:shadow-xl transition-all duration-500 flex flex-col"
              >
                {/* STAGE NUMBER BADGE */}
                <div className="absolute top-4 left-4 z-20 bg-[#4A0717] text-[#FAF5EB] px-3.5 py-1 rounded-full text-xs font-mono font-bold tracking-widest shadow-md">
                  {stage.number}
                </div>

                {/* IMAGE PANEL */}
                <div className="relative aspect-[4/5] w-full overflow-hidden">
                  <Image
                    src={stage.image}
                    alt={stage.altText}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover object-top group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#380511]/90 via-[#380511]/20 to-transparent" />

                  {/* OVERLAY TAG */}
                  <div className="absolute bottom-4 left-4 right-4">
                    <span className="inline-block px-3 py-1 bg-[#D4AF37] text-[#380511] text-[11px] font-extrabold uppercase tracking-widest rounded-md shadow-xs mb-2">
                      {stage.tag}
                    </span>
                    <h3 className="font-serif text-2xl font-bold text-[#FAF5EB] tracking-wide">
                      {stage.title}
                    </h3>
                  </div>
                </div>

                {/* DESCRIPTION */}
                <div className="p-6 bg-[#FDFBF7] flex-1 flex flex-col justify-between">
                  <p className="text-sm text-[#3D2314]/85 leading-relaxed font-sans">
                    {stage.description}
                  </p>
                  
                  <div className="pt-4 flex items-center text-xs font-bold text-[#4A0717] uppercase tracking-wider group-hover:translate-x-1.5 transition-transform duration-300">
                    <span>Explore Stage Styles</span>
                    <span className="ml-1.5">→</span>
                  </div>
                </div>

              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
