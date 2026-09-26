"use client";

import Image from "next/image";
import { womensData } from "@/data/womens";

export function WomensDetailSection() {
  const detail = womensData.styleDetail;

  return (
    <section className="py-24 bg-[#FDFBF7] relative overflow-hidden" id="style-detail">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* LEFT: TEXT CONTENT & HIGHLIGHT POINTS (SPAN 6) */}
          <div className="lg:col-span-6 space-y-6">
            
            <div className="inline-flex items-center space-x-2">
              <span className="w-6 h-[1.5px] bg-[#D4AF37]"></span>
              <span className="text-xs font-bold tracking-widest text-[#4A0717] uppercase">
                TEXTILE & FINISH APPRECIATION
              </span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#380511] leading-tight">
              {detail.heading}
            </h2>

            <p className="text-base sm:text-lg text-[#3D2314]/85 leading-relaxed font-sans">
              {detail.subheading}
            </p>

            <div className="w-20 h-[2px] bg-[#D4AF37]/60 my-4" />

            {/* HIGHLIGHT LIST */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {detail.highlights.map((point, idx) => (
                <div key={idx} className="flex items-start space-x-3 p-3.5 rounded-xl bg-[#FAF5EB] border border-[#E5C378]/25">
                  <span className="w-5 h-5 rounded-full bg-[#4A0717] text-[#D4AF37] text-xs flex items-center justify-center font-bold shrink-0 mt-0.5">
                    ✓
                  </span>
                  <span className="text-xs sm:text-sm font-medium text-[#3D2314]">
                    {point}
                  </span>
                </div>
              ))}
            </div>

            <div className="pt-4 text-xs text-[#3D2314]/70 italic">
              ✦ Each garment in our store is selected for comfortable fit, durable stitching, and vibrant wear.
            </div>

          </div>

          {/* RIGHT: MACRO DETAIL PHOTO (SPAN 6) */}
          <div className="lg:col-span-6 relative">
            <div className="relative aspect-[4/3] sm:aspect-[16/11] lg:aspect-[4/3] w-full rounded-2xl overflow-hidden shadow-2xl border border-[#E5C378]/30 group">
              <Image
                src={detail.image}
                alt={detail.altText}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#380511]/40 via-transparent to-transparent opacity-60" />
            </div>

            {/* FLOATING DECORATIVE BADGE */}
            <div className="absolute -bottom-5 -left-2 sm:left-6 bg-[#FAF5EB] border border-[#E5C378]/40 shadow-xl px-5 py-3 rounded-xl">
              <span className="block text-[11px] font-bold tracking-widest text-[#4A0717] uppercase">
                MACRO DETAIL VIEW
              </span>
              <span className="text-xs text-[#3D2314]/80 font-sans">
                Fine Embroidery &amp; Texture Finish
              </span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
