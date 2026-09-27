"use client";

import { brandData } from "@/data/brand";

export function StoreMap() {
  return (
    <section className="py-12 md:py-16 bg-[#F4EEE5] text-[#30251F] relative border-t border-[#E5C378]/25" id="store-map">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* MAP WRAPPER WITH SUBTLE FRAME */}
        <div className="bg-[#FFFFFF] rounded-3xl p-4 sm:p-6 border border-[#E5C378]/40 shadow-lg">
          
          {/* Top Bar above map */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-[#E5C378]/25 mb-4">
            <div>
              <span className="text-[10px] font-bold text-[#A41A50] tracking-[0.2em] uppercase block">
                INTERACTIVE MAP
              </span>
              <h3 className="font-serif text-lg sm:text-xl font-bold text-[#30251F]">
                Kamal Selections on the Map
              </h3>
            </div>

            <a
              href={brandData.maps.directionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline btn-pill btn-sm self-start sm:self-auto"
              id="map-open-google-btn"
            >
              <span>Open in Google Maps</span>
              <span aria-hidden="true" className="btn-arrow">→</span>
            </a>
          </div>

          {/* Embedded Google Map iframe (clean, contained height) */}
          <div className="relative w-full h-[320px] sm:h-[400px] rounded-2xl overflow-hidden border border-[#E5C378]/35 bg-[#FAF3EB]">
            <iframe
              src={brandData.maps.embedUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Kamal Selections Store Location in Shadnagar, Telangana"
              className="w-full h-full grayscale-[15%] contrast-[105%]"
            ></iframe>
          </div>

          {/* Bottom Footnote */}
          <div className="mt-3 flex items-center justify-between text-[11px] text-[#69564A]">
            <span>Ibrahim Complex, Main Road, Shadnagar</span>
            <span className="hidden sm:inline italic font-serif">Central Town Location</span>
          </div>

        </div>

      </div>
    </section>
  );
}
