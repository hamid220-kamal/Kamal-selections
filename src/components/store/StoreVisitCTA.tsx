"use client";

import { brandData } from "@/data/brand";

export function StoreVisitCTA() {
  return (
    <section className="bg-[#380511] text-[#FAF5EB] relative overflow-hidden py-20 sm:py-24 lg:py-28" id="visit-cta">
      {/* AMBIENT GLOWS */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-[#E5C378]/15 to-transparent rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-[#A41A50]/20 to-transparent rounded-full blur-2xl pointer-events-none"></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        
        {/* EYEBROW */}
        <div className="inline-flex items-center gap-3 mb-5">
          <span className="w-8 h-px bg-[#E5C378]"></span>
          <span className="text-xs font-semibold tracking-[0.26em] text-[#E5C378] uppercase">
            VISIT OUR PHYSICAL STORE
          </span>
          <span className="w-8 h-px bg-[#E5C378]"></span>
        </div>

        {/* DRAMATIC SERIF HEADING */}
        <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold text-[#FFFFFF] leading-[1.12] mb-5 tracking-tight">
          DON&apos;T JUST SCROLL.<br />
          <span className="text-[#E5C378]">COME SEE IT.</span>
        </h2>

        {/* SUPPORTING TEXT */}
        <p className="text-base sm:text-lg text-[#F8E5BA]/90 max-w-xl mx-auto mb-10 leading-relaxed">
          Visit Kamal Selections in person and explore the collection for yourself. Touch the fabrics, see the colours under true lighting, and find what fits you best.
        </p>

        {/* BUTTONS */}
        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
          <a
            href={brandData.maps.directionsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary btn-pill btn-lg shadow-xl"
            id="visit-cta-directions-btn"
          >
            <span>Get Directions</span>
            <span aria-hidden="true" className="btn-arrow">→</span>
          </a>

          <a
            href={`tel:${brandData.phone}`}
            className="btn btn-outline btn-pill btn-lg border-[#E5C378]/60 text-[#FAF5EB] hover:bg-[#E5C378]/20"
            id="visit-cta-call-btn"
          >
            <span>Call Us</span>
            <span aria-hidden="true" className="btn-arrow">→</span>
          </a>
        </div>

        <p className="mt-8 text-xs text-[#F8E5BA]/70">
          Ibrahim Complex, Main Road, Shadnagar · Open Daily 10 AM – 9 PM
        </p>

      </div>
    </section>
  );
}
