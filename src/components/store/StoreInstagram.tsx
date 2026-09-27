"use client";

import { brandData } from "@/data/brand";

export function StoreInstagram() {
  return (
    <section className="py-16 md:py-20 bg-[#FAF3EB] text-[#30251F] border-t border-[#E5C378]/25" id="instagram">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Instagram Icon Badge */}
        <div className="w-14 h-14 mx-auto mb-5 rounded-2xl bg-[#FFFFFF] border border-[#E5C378]/60 flex items-center justify-center text-[#A41A50] shadow-sm">
          <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
            <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
            <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
          </svg>
        </div>

        <span className="text-[10px] font-bold text-[#A41A50] tracking-[0.24em] uppercase block mb-2">
          OFFICIAL INSTAGRAM
        </span>

        <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#30251F] mb-4">
          SEE WHAT&apos;S NEW.
        </h2>

        <p className="text-base text-[#69564A] max-w-lg mx-auto mb-8 leading-relaxed">
          Follow Kamal Selections for the latest styles, updates and store content.
        </p>

        <a
          href={brandData.social.instagramUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-outline btn-pill inline-flex items-center gap-2 border-[#A41A50] text-[#A41A50] hover:bg-[#A41A50] hover:text-white"
          id="store-instagram-btn"
        >
          <span>Follow on Instagram ({brandData.social.instagramHandle})</span>
          <span aria-hidden="true" className="btn-arrow">→</span>
        </a>

      </div>
    </section>
  );
}
