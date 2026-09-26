"use client";

import Image from "next/image";

export function WomensEditorial() {
  return (
    <section className="relative py-24 bg-[#FAF5EB] overflow-hidden border-t border-b border-[#E5C378]/20" id="editorial-feature">
      
      {/* BACKGROUND GRAPHIC MOTIF */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-96 h-96 bg-[#D4AF37]/5 rounded-full blur-3xl pointer-events-none" aria-hidden="true" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* LEFT: LARGE FASHION MAGAZINE EDITORIAL PHOTO (SPAN 7) */}
          <div className="lg:col-span-7 relative">
            <div className="relative aspect-[4/5] sm:aspect-[16/11] lg:aspect-[4/3] w-full rounded-2xl overflow-hidden shadow-2xl border border-[#E5C378]/30 group">
              <Image
                src="/images/women/editorial/featured-editorial.jpg"
                alt="Kamal Selections Women's Fashion Editorial - From Everyday to Elegant"
                fill
                sizes="(max-width: 1024px) 100vw, 55vw"
                className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-[#380511]/40 via-transparent to-transparent opacity-80" />
            </div>

            {/* FLOATING CORNER BADGE */}
            <div className="absolute -bottom-6 -right-2 sm:right-6 bg-[#FDFBF7] border border-[#E5C378]/40 shadow-lg px-5 py-3 rounded-xl hidden sm:block">
              <span className="block text-[10px] font-bold tracking-widest text-[#D4AF37] uppercase">
                EDITORIAL EDIT
              </span>
              <span className="text-xs font-serif italic font-semibold text-[#380511]">
                Kamal Selections Shadnagar
              </span>
            </div>
          </div>

          {/* RIGHT: OVERLAPPING EDITORIAL TEXT SPREAD (SPAN 5) */}
          <div className="lg:col-span-5 flex flex-col justify-center space-y-6">
            
            <div className="inline-flex items-center space-x-2">
              <span className="w-6 h-[1.5px] bg-[#D4AF37]"></span>
              <span className="text-xs font-bold tracking-widest text-[#4A0717] uppercase">
                WOMEN'S COLLECTION
              </span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#380511] leading-tight tracking-wide">
              FROM EVERYDAY <br />
              <span className="italic font-normal text-[#4A0717]">TO ELEGANT.</span>
            </h2>

            <p className="text-base sm:text-lg text-[#3D2314]/85 leading-relaxed font-sans">
              Styles that fit naturally into the moments that make up your day.
            </p>

            <p className="text-sm text-[#3D2314]/70 leading-relaxed">
              Designed with a balance of comfort, timeless silhouettes, and authentic craftsmanship to make every occasion feel effortlessly graceful.
            </p>

            <div className="pt-4">
              <a
                href="#collection-grid"
                className="inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-[#4A0717] text-[#FAF5EB] font-medium text-sm tracking-wide shadow-md hover:bg-[#380511] hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 group"
              >
                <span>Explore Styles</span>
                <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
              </a>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
