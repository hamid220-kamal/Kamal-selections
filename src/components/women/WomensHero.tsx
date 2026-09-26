"use client";

import Link from "next/link";
import Image from "next/image";

interface WomensHeroProps {
  onOpenStoreModal?: () => void;
}

export function WomensHero({ onOpenStoreModal }: WomensHeroProps) {
  return (
    <section className="relative overflow-hidden bg-[#FAF5EB] pt-28 pb-16 lg:pt-36 lg:pb-24 border-b border-[#E5C378]/20" id="women-hero">
      {/* BOTANICAL CORNER LINE-ART ACCENTS */}
      <div className="absolute top-4 left-4 w-40 h-40 pointer-events-none opacity-25 z-0" aria-hidden="true">
        <svg viewBox="0 0 200 200" className="w-full h-full">
          <g stroke="#CFA753" strokeWidth="1.2" fill="none">
            <path d="M 10,10 Q 70,80 150,40 T 180,120" />
            <path d="M 30,10 C 50,40 80,60 50,90 C 30,70 20,40 30,10 Z" fill="#F4C4D9" fillOpacity="0.2" />
            <path d="M 70,40 C 100,60 120,90 90,120 C 70,100 60,70 70,40 Z" fill="#F4C4D9" fillOpacity="0.15" />
          </g>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* LEFT COLUMN: ~45% EDITORIAL CONTENT */}
          <div className="lg:col-span-6 flex flex-col justify-center text-left space-y-6">
            
            {/* EYEBROW */}
            <div className="inline-flex items-center space-x-3 animate-on-scroll fade-in">
              <span className="h-[1px] w-8 bg-[#CFA753]"></span>
              <span className="text-xs sm:text-sm font-semibold tracking-widest text-[#4A0717] uppercase">
                KAMAL SELECTIONS · WOMEN'S WEAR
              </span>
              <span className="h-[1px] w-8 bg-[#CFA753]"></span>
            </div>

            {/* SEMANTIC H1 HEADING */}
            <div className="space-y-2">
              <span className="sr-only">Women's Wear in Shadnagar</span>
              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#380511] leading-[1.12] tracking-tight">
                Style Made <br />
                <span className="italic text-[#4A0717] font-normal font-serif">for Every Woman.</span>
              </h1>
            </div>

            {/* SUPPORTING PARAGRAPH */}
            <p className="text-base sm:text-lg text-[#3D2314]/85 leading-relaxed max-w-xl">
              Explore women's fashion designed for everyday comfort, celebrations and everything in between.
            </p>

            {/* CATEGORY STRIP */}
            <div className="py-2.5 px-4 bg-[#FDFBF7] border border-[#E5C378]/30 rounded-full inline-block max-w-max shadow-xs">
              <p className="text-xs sm:text-sm font-medium text-[#4A0717] tracking-wide">
                Dresses · Kurtis · Tops · Leggings · 3-Piece Sets · Party Wear
              </p>
            </div>

            {/* CTA GROUP */}
            <div className="pt-2 flex flex-wrap items-center gap-4 sm:gap-6">
              <a
                href="#categories"
                className="inline-flex items-center justify-center px-7 py-3.5 rounded-full bg-[#4A0717] text-[#FAF5EB] font-medium text-sm tracking-wide shadow-md hover:bg-[#380511] hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 group"
              >
                <span>Explore Collection</span>
                <span className="ml-2 group-hover:translate-y-0.5 transition-transform">↓</span>
              </a>

              <Link
                href="/store"
                onClick={(e) => {
                  if (onOpenStoreModal) {
                    e.preventDefault();
                    onOpenStoreModal();
                  }
                }}
                className="inline-flex items-center text-sm font-semibold text-[#4A0717] hover:text-[#380511] group py-2"
              >
                <span className="border-b border-[#4A0717]/40 group-hover:border-[#4A0717] transition-colors pb-0.5">
                  Visit Our Store
                </span>
                <span className="ml-1.5 group-hover:translate-x-1 transition-transform">→</span>
              </Link>
            </div>

            {/* LOCATION BADGE */}
            <div className="pt-2 flex items-center space-x-2 text-xs text-[#3D2314]/70">
              <span className="text-[#CFA753]">📍</span>
              <span>Ibrahim Complex, Main Road, Shadnagar</span>
            </div>

          </div>

          {/* RIGHT COLUMN: EDITORIAL ARCHED FRAME VISUAL */}
          <div className="lg:col-span-6 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md lg:max-w-lg aspect-[3/4] p-3 sm:p-4">
              
              {/* BACKDROP DECORATIVE GOLDEN ACCENT FRAME */}
              <div 
                className="absolute inset-0 translate-x-3 translate-y-3 rounded-t-[140px] rounded-b-2xl border-2 border-[#D4AF37]/40 bg-[#FAF5EB] z-0" 
                aria-hidden="true"
              />

              {/* ARCHED IMAGE CONTAINER */}
              <div className="relative h-full w-full overflow-hidden rounded-t-[140px] rounded-b-2xl shadow-xl z-10 border border-[#E5C378]/30 group">
                <Image
                  src="/images/women/hero/hero-portrait.jpg"
                  alt="Kamal Selections Women's Wear Fashion Editorial in Shadnagar"
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                  className="object-cover object-top group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                
                {/* ELEGANT SUBTLE GRADIENT OVERLAY AT BOTTOM */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#380511]/40 via-transparent to-transparent opacity-60" />
                
                <div className="absolute bottom-4 left-4 right-4 text-center">
                  <span className="inline-block px-3 py-1 bg-[#FAF5EB]/90 backdrop-blur-md rounded-full text-[11px] font-semibold text-[#4A0717] tracking-widest uppercase shadow-sm">
                    Shadnagar Fashion Editorial
                  </span>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
