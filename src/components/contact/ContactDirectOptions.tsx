"use client";

import { brandData } from "@/data/brand";

export function ContactDirectOptions() {
  return (
    <section className="py-16 md:py-20 bg-[#FAF3EB] text-[#30251F] relative overflow-hidden" id="contact-details">
      {/* AMBIENT GLOW */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-[#E5C378]/15 via-transparent to-transparent rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-3 mb-4">
            <span className="w-8 h-px bg-[#D4AF37]"></span>
            <span className="text-xs font-semibold tracking-[0.24em] text-[#A41A50] uppercase">
              WE&apos;RE HERE TO HELP
            </span>
            <span className="w-8 h-px bg-[#D4AF37]"></span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#30251F] leading-[1.15] mb-5">
            GET IN TOUCH,<br />
            <span className="italic font-normal text-[#A41A50]">YOUR WAY.</span>
          </h2>

          <p className="text-base sm:text-lg text-[#51443B] leading-relaxed">
            Have a question about our women&apos;s or kids&apos; wear? Need help finding the store? We&apos;re just a call away.
          </p>
        </div>

        {/* THREE ELEGANT CONTACT OPTIONS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* OPTION 1: CALL US */}
          <a
            href={`tel:${brandData.phone}`}
            className="group relative p-8 sm:p-10 rounded-3xl bg-[#FFFFFF] border border-[#E5C378]/40 shadow-sm flex flex-col justify-between transition-all duration-300 hover:shadow-xl hover:border-[#D4AF37] focus-visible:outline-2 focus-visible:outline-[#A41A50]"
            aria-label={`Call Kamal Selections directly at ${brandData.phone}`}
          >
            <div>
              <div className="w-14 h-14 rounded-2xl bg-[#FAF3EB] border border-[#E5C378]/60 flex items-center justify-center text-[#A41A50] mb-8 group-hover:bg-[#A41A50] group-hover:text-white transition-colors duration-300">
                <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                </svg>
              </div>

              <span className="text-[10px] font-bold text-[#D4AF37] tracking-[0.22em] uppercase block mb-2">
                OPTION 01 · PHONE
              </span>

              <h3 className="font-serif text-2xl font-bold text-[#30251F] mb-1 tracking-wide">
                CALL US
              </h3>

              <p className="font-serif text-2xl font-bold text-[#A41A50] mb-3">
                {brandData.phone}
              </p>

              <p className="text-sm text-[#69564A] leading-relaxed">
                Speak directly with Kamal Selections for enquiries on clothing availability, store timings and directions.
              </p>
            </div>

            <div className="pt-6 mt-6 border-t border-[#E5C378]/25 flex items-center justify-between">
              <span className="text-xs font-bold uppercase tracking-wider text-[#A41A50] group-hover:translate-x-1 transition-transform inline-flex items-center gap-1.5">
                <span>Call Now</span>
                <span aria-hidden="true">→</span>
              </span>
              <span className="text-[11px] text-[#69564A]">Direct Line</span>
            </div>
          </a>

          {/* OPTION 2: VISIT US */}
          <a
            href={brandData.maps.directionsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative p-8 sm:p-10 rounded-3xl bg-[#FFFFFF] border border-[#E5C378]/40 shadow-sm flex flex-col justify-between transition-all duration-300 hover:shadow-xl hover:border-[#D4AF37] focus-visible:outline-2 focus-visible:outline-[#A41A50]"
            aria-label="Get directions to Kamal Selections store on Google Maps"
          >
            <div>
              <div className="w-14 h-14 rounded-2xl bg-[#FAF3EB] border border-[#E5C378]/60 flex items-center justify-center text-[#A41A50] mb-8 group-hover:bg-[#A41A50] group-hover:text-white transition-colors duration-300">
                <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/>
                  <circle cx="12" cy="9" r="2.5"/>
                </svg>
              </div>

              <span className="text-[10px] font-bold text-[#D4AF37] tracking-[0.22em] uppercase block mb-2">
                OPTION 02 · LOCATION
              </span>

              <h3 className="font-serif text-2xl font-bold text-[#30251F] mb-1 tracking-wide">
                VISIT OUR STORE
              </h3>

              <p className="font-serif text-lg font-bold text-[#30251F] mb-3 leading-snug">
                Ibrahim Complex,<br />Main Road, Shadnagar
              </p>

              <p className="text-sm text-[#69564A] leading-relaxed">
                Experience the collection in person. Open daily from 10 AM to 9 PM in central Shadnagar.
              </p>
            </div>

            <div className="pt-6 mt-6 border-t border-[#E5C378]/25 flex items-center justify-between">
              <span className="text-xs font-bold uppercase tracking-wider text-[#A41A50] group-hover:translate-x-1 transition-transform inline-flex items-center gap-1.5">
                <span>Get Directions</span>
                <span aria-hidden="true">→</span>
              </span>
              <span className="text-[11px] text-[#69564A]">Google Maps</span>
            </div>
          </a>

          {/* OPTION 3: FOLLOW US */}
          <a
            href={brandData.social.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative p-8 sm:p-10 rounded-3xl bg-[#FFFFFF] border border-[#E5C378]/40 shadow-sm flex flex-col justify-between transition-all duration-300 hover:shadow-xl hover:border-[#D4AF37] focus-visible:outline-2 focus-visible:outline-[#A41A50]"
            aria-label="Visit Kamal Selections official Instagram profile"
          >
            <div>
              <div className="w-14 h-14 rounded-2xl bg-[#FAF3EB] border border-[#E5C378]/60 flex items-center justify-center text-[#A41A50] mb-8 group-hover:bg-[#A41A50] group-hover:text-white transition-colors duration-300">
                <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                </svg>
              </div>

              <span className="text-[10px] font-bold text-[#D4AF37] tracking-[0.22em] uppercase block mb-2">
                OPTION 03 · SOCIAL
              </span>

              <h3 className="font-serif text-2xl font-bold text-[#30251F] mb-1 tracking-wide">
                FOLLOW US
              </h3>

              <p className="font-serif text-lg font-bold text-[#A41A50] mb-3">
                {brandData.social.instagramHandle}
              </p>

              <p className="text-sm text-[#69564A] leading-relaxed">
                See our latest festive styles, new collection arrivals and store announcements on Instagram.
              </p>
            </div>

            <div className="pt-6 mt-6 border-t border-[#E5C378]/25 flex items-center justify-between">
              <span className="text-xs font-bold uppercase tracking-wider text-[#A41A50] group-hover:translate-x-1 transition-transform inline-flex items-center gap-1.5">
                <span>Instagram</span>
                <span aria-hidden="true">→</span>
              </span>
              <span className="text-[11px] text-[#69564A]">@kamal_selection_</span>
            </div>
          </a>

        </div>

      </div>
    </section>
  );
}
