"use client";

import { brandData } from "@/data/brand";

export function ContactVisitStore() {
  return (
    <section className="py-16 md:py-20 bg-[#F4EEE5] text-[#30251F] relative overflow-hidden" id="visit-store">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* LEFT: STORE PHOTOGRAPHY (6 COLS) */}
          <div className="lg:col-span-6 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              <div className="absolute -left-3 -top-3 sm:-left-4 sm:-top-4 w-full h-full border border-[#D4AF37]/50 rounded-3xl pointer-events-none" aria-hidden="true" />
              
              <div className="relative aspect-[4/3] sm:aspect-[16/11] rounded-3xl overflow-hidden shadow-2xl border border-[#E5C378]/40 bg-[#D8CEC1]">
                <img
                  src="/images/contact/kamal-selections-shadnagar-evening-showroom.jpg"
                  alt="Kamal Selections illuminated boutique showroom in Shadnagar welcoming evening visitors"
                  className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#20040A]/60 via-transparent to-transparent"></div>

                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs text-[#FAF3EB] bg-[#20040A]/70 backdrop-blur-md px-4 py-2.5 rounded-xl border border-[#E5C378]/30">
                  <span className="font-semibold uppercase tracking-wider">Ibrahim Complex</span>
                  <span>Shadnagar, Telangana</span>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT: TEXT CONTENT & ACTIONS (6 COLS) */}
          <div className="lg:col-span-6">
            <div className="inline-flex items-center gap-3 mb-4">
              <span className="w-8 h-px bg-[#D4AF37]"></span>
              <span className="text-xs font-semibold tracking-[0.24em] text-[#A41A50] uppercase">
                IN-PERSON EXPERIENCE
              </span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#30251F] leading-[1.15] mb-6">
              WHY MESSAGE WHEN<br />
              <span className="italic font-normal text-[#A41A50]">YOU CAN COME SEE IT?</span>
            </h2>

            <p className="text-base sm:text-lg text-[#51443B] leading-relaxed mb-6">
              Visit us in person and explore the collection at your own pace. Discover the touch of genuine fabrics, see rich dyes under authentic store lights, and receive friendly, personal assistance.
            </p>

            {/* Address Box */}
            <div className="p-5 rounded-2xl bg-[#FFFFFF] border border-[#E5C378]/40 shadow-sm mb-8">
              <span className="text-[10px] font-bold text-[#A41A50] uppercase tracking-wider block mb-1">
                OUR PHYSICAL STORE
              </span>
              <h3 className="font-serif text-xl font-bold text-[#30251F]">
                KAMAL SELECTIONS
              </h3>
              <p className="text-sm text-[#69564A] leading-relaxed">
                Ibrahim Complex, Main Road, Shadnagar, Telangana — 509216
              </p>
            </div>

            {/* CTAS */}
            <div className="flex flex-wrap items-center gap-4">
              <a
                href={brandData.maps.directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary btn-pill"
                id="visit-store-directions-btn"
              >
                <span>Get Directions</span>
                <span aria-hidden="true" className="btn-arrow">→</span>
              </a>

              <a
                href={`tel:${brandData.phone}`}
                className="btn btn-outline btn-pill"
                id="visit-store-call-btn"
              >
                <span>Call Us</span>
                <span aria-hidden="true" className="btn-arrow">→</span>
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
