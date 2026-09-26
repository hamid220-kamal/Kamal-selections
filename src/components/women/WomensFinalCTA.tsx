"use client";

import Link from "next/link";
import Image from "next/image";
import { womensData } from "@/data/womens";

export function WomensFinalCTA() {
  return (
    <section className="relative py-28 overflow-hidden bg-[#2A0717]" id="women-final-cta">
      
      {/* BACKGROUND EDITORIAL IMAGE WITH OVERLAY */}
      <Image
        src={womensData.editorial.image || "/images/women/editorial/final-cta-bg.jpg"}
        alt="Kamal Selections Women's Wear Closing Editorial"
        fill
        sizes="100vw"
        className="object-cover object-center opacity-30 mix-blend-luminosity"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-[#1A030C] via-[#2A0717]/80 to-[#1A030C]/90" />

      {/* CONTENT */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-[#FAF5EB] space-y-6">
        
        <span className="inline-block text-xs font-bold tracking-widest text-[#D4AF37] uppercase">
          KAMAL SELECTIONS · SHADNAGAR
        </span>

        <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#FAF5EB] leading-tight">
          Find Your Next Look.
        </h2>

        <p className="text-base sm:text-xl text-[#FAF5EB]/85 font-sans max-w-xl mx-auto leading-relaxed">
          Explore women's fashion at Kamal Selections in Shadnagar.
        </p>

        {/* CTA BUTTONS */}
        <div className="pt-4 flex flex-wrap items-center justify-center gap-4 sm:gap-6">
          <Link
            href="/store"
            className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-[#D4AF37] text-[#380511] font-bold text-sm tracking-wide shadow-lg hover:bg-[#E5C378] hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 group"
          >
            <span>Visit Our Store</span>
            <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
          </Link>

          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-transparent text-[#FAF5EB] font-semibold text-sm tracking-wide border border-[#FAF5EB]/40 hover:border-[#FAF5EB] hover:bg-[#FAF5EB]/10 transition-all duration-300"
          >
            <span>Contact Us</span>
          </Link>
        </div>

        <div className="pt-6 text-xs text-[#FAF5EB]/60">
          Ibrahim Complex, Main Road, Shadnagar · Open 10 AM — 9 PM Daily
        </div>

      </div>

    </section>
  );
}
