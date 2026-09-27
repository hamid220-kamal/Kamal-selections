"use client";

import { brandData } from "@/data/brand";

export function ContactQuickStrip() {
  return (
    <section className="py-12 md:py-16 bg-[#FAF3EB] text-[#30251F] border-t border-[#E5C378]/30" id="quick-strip">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#FFFFFF] rounded-2xl border border-[#E5C378]/50 p-6 sm:p-8 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6 md:gap-8">
          
          {/* PHONE */}
          <a
            href={`tel:${brandData.phone}`}
            className="flex items-center gap-3 text-center md:text-left group"
          >
            <div className="w-10 h-10 rounded-full bg-[#FAF3EB] border border-[#E5C378]/50 flex items-center justify-center text-[#A41A50] shrink-0 group-hover:bg-[#A41A50] group-hover:text-white transition-colors">
              <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
              </svg>
            </div>
            <div>
              <span className="text-[10px] font-bold text-[#69564A] tracking-wider uppercase block">Phone</span>
              <span className="font-serif text-lg font-bold text-[#30251F] group-hover:text-[#A41A50] transition-colors">
                {brandData.phone}
              </span>
            </div>
          </a>

          {/* GOLD SEPARATOR */}
          <div className="hidden md:block w-px h-10 bg-[#E5C378]/50"></div>

          {/* LOCATION */}
          <a
            href={brandData.maps.directionsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 text-center md:text-left group"
          >
            <div className="w-10 h-10 rounded-full bg-[#FAF3EB] border border-[#E5C378]/50 flex items-center justify-center text-[#A41A50] shrink-0 group-hover:bg-[#A41A50] group-hover:text-white transition-colors">
              <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/>
                <circle cx="12" cy="9" r="2.5"/>
              </svg>
            </div>
            <div>
              <span className="text-[10px] font-bold text-[#69564A] tracking-wider uppercase block">Location</span>
              <span className="font-serif text-base font-bold text-[#30251F] group-hover:text-[#A41A50] transition-colors">
                Ibrahim Complex, Main Road, Shadnagar
              </span>
            </div>
          </a>

          {/* GOLD SEPARATOR */}
          <div className="hidden md:block w-px h-10 bg-[#E5C378]/50"></div>

          {/* INSTAGRAM */}
          <a
            href={brandData.social.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 text-center md:text-left group"
          >
            <div className="w-10 h-10 rounded-full bg-[#FAF3EB] border border-[#E5C378]/50 flex items-center justify-center text-[#A41A50] shrink-0 group-hover:bg-[#A41A50] group-hover:text-white transition-colors">
              <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
              </svg>
            </div>
            <div>
              <span className="text-[10px] font-bold text-[#69564A] tracking-wider uppercase block">Instagram</span>
              <span className="font-serif text-base font-bold text-[#A41A50] group-hover:underline">
                {brandData.social.instagramHandle}
              </span>
            </div>
          </a>

        </div>
      </div>
    </section>
  );
}
