"use client";

import { useState } from "react";
import { brandData } from "@/data/brand";

export function StoreMap() {
  const [loadIframe, setLoadIframe] = useState(false);

  return (
    <section className="py-12 md:py-16 bg-[#F4EEE5] text-[#30251F] relative border-t border-[#E5C378]/25" id="store-map">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* MAP WRAPPER WITH SUBTLE FRAME */}
        <div className="bg-[#FFFFFF] rounded-3xl p-4 sm:p-6 border border-[#E5C378]/40 shadow-lg">
          
          {/* Top Bar above map */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-[#E5C378]/25 mb-4">
            <div>
              <span className="text-[10px] font-bold text-[#A41A50] tracking-[0.2em] uppercase block">
                STORE LOCATION MAP
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

          {/* Embedded Google Map container */}
          <div className="relative w-full h-[320px] sm:h-[400px] rounded-2xl overflow-hidden border border-[#E5C378]/35 bg-[#FAF3EB]">
            {loadIframe ? (
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
            ) : (
              <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center bg-gradient-to-br from-[#FAF3EB] to-[#F4EEE5]">
                <div className="w-14 h-14 rounded-full bg-[#3E0A23]/10 border border-[#E5C378]/60 flex items-center justify-center text-[#A41A50] mb-3 shadow-inner">
                  <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/>
                    <circle cx="12" cy="9" r="2.5"/>
                  </svg>
                </div>
                <h4 className="font-serif text-lg font-bold text-[#30251F] mb-1">
                  Ibrahim Complex, Main Road, Shadnagar
                </h4>
                <p className="text-xs text-[#69564A] max-w-sm mb-4">
                  Telangana 509216 · Open Daily 10:00 AM – 9:00 PM
                </p>
                <div className="flex items-center gap-3 flex-wrap justify-center">
                  <button
                    type="button"
                    onClick={() => setLoadIframe(true)}
                    className="btn btn-primary btn-pill btn-sm"
                  >
                    <span>Load Interactive Map</span>
                  </button>
                  <a
                    href={brandData.maps.directionsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline btn-pill btn-sm"
                  >
                    <span>Get Instant Directions</span>
                    <span aria-hidden="true">↗</span>
                  </a>
                </div>
              </div>
            )}
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
