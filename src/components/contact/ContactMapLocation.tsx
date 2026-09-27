"use client";

import { brandData } from "@/data/brand";

export function ContactMapLocation() {
  return (
    <section className="py-20 md:py-24 bg-[#FAF3EB] text-[#30251F] relative border-t border-[#E5C378]/25" id="store-location">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="bg-[#FFFFFF] rounded-3xl border border-[#E5C378]/40 p-6 sm:p-10 lg:p-12 shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* LEFT: STORE LOCATION DETAILS (5 COLS) */}
            <div className="lg:col-span-5">
              <div className="inline-flex items-center gap-2 mb-3">
                <span className="w-6 h-px bg-[#D4AF37]"></span>
                <span className="text-[11px] font-bold tracking-[0.24em] text-[#A41A50] uppercase">
                  STORE NAVIGATION
                </span>
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#30251F] mb-6">
                FIND KAMAL<br />
                <span className="italic font-normal text-[#A41A50]">SELECTIONS.</span>
              </h2>

              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl bg-[#FAF3EB] border border-[#E5C378]/50 flex items-center justify-center text-[#A41A50] shrink-0 mt-0.5">
                    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/>
                      <circle cx="12" cy="9" r="2.5"/>
                    </svg>
                  </div>
                  <div>
                    <span className="text-[10px] font-bold text-[#69564A] tracking-wider uppercase block">Address</span>
                    <p className="font-serif font-bold text-base text-[#30251F]">
                      Ibrahim Complex, Main Road
                    </p>
                    <p className="text-xs text-[#69564A]">
                      Shadnagar, Telangana — 509216
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl bg-[#FAF3EB] border border-[#E5C378]/50 flex items-center justify-center text-[#A41A50] shrink-0 mt-0.5">
                    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                    </svg>
                  </div>
                  <div>
                    <span className="text-[10px] font-bold text-[#69564A] tracking-wider uppercase block">Phone</span>
                    <a
                      href={`tel:${brandData.phone}`}
                      className="font-serif font-bold text-lg text-[#30251F] hover:text-[#A41A50] transition-colors"
                    >
                      {brandData.phone}
                    </a>
                  </div>
                </div>
              </div>

              <a
                href={brandData.maps.directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary btn-pill"
                id="contact-map-directions-btn"
              >
                <span>Open in Google Maps</span>
                <span aria-hidden="true" className="btn-arrow">→</span>
              </a>
            </div>

            {/* RIGHT: MAP EMBED (7 COLS) */}
            <div className="lg:col-span-7">
              <div className="relative w-full h-[320px] sm:h-[380px] rounded-2xl overflow-hidden border border-[#E5C378]/40 bg-[#FAF3EB] shadow-md">
                <iframe
                  src={brandData.maps.embedUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Kamal Selections Location Map in Shadnagar"
                  className="w-full h-full grayscale-[15%] contrast-[105%]"
                ></iframe>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
