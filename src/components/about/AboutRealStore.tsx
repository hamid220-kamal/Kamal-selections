"use client";

import Link from "next/link";
import { brandData } from "@/data/brand";

interface AboutRealStoreProps {
  onOpenStoreModal?: () => void;
}

export function AboutRealStore({ onOpenStoreModal }: AboutRealStoreProps = {}) {
  return (
    <section className="py-16 md:py-20 bg-[#F4EEE5] text-[#30251F] relative overflow-hidden" id="real-store">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* LEFT: TEXT CONTENT & ACTION (5 COLS) */}
          <div className="lg:col-span-5">
            <div className="inline-flex items-center gap-3 mb-4">
              <span className="w-8 h-px bg-[#D4AF37]"></span>
              <span className="text-xs font-semibold tracking-[0.24em] text-[#A41A50] uppercase">
                PHYSICAL PRESENCE
              </span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#30251F] leading-[1.15] mb-6">
              WE&apos;RE A REAL STORE,<br />
              <span className="italic font-normal text-[#A41A50]">NOT JUST A WEBSITE.</span>
            </h2>

            <p className="text-base sm:text-lg text-[#51443B] leading-relaxed mb-6">
              Browse online for inspiration, then visit Kamal Selections in Shadnagar to explore the collection in person.
            </p>

            <p className="text-sm text-[#69564A] leading-relaxed mb-8">
              We know clothing is tactile — finding the right fit, feeling the texture of the fabric, and choosing the exact color tone works best when you can try it yourself.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              {onOpenStoreModal ? (
                <button
                  type="button"
                  onClick={onOpenStoreModal}
                  className="btn btn-primary btn-pill"
                  id="about-store-visit-btn"
                >
                  <span>Visit Our Store</span>
                  <span aria-hidden="true" className="btn-arrow">→</span>
                </button>
              ) : (
                <Link
                  href="/store"
                  className="btn btn-primary btn-pill"
                  id="about-store-visit-btn"
                >
                  <span>Visit Our Store</span>
                  <span aria-hidden="true" className="btn-arrow">→</span>
                </Link>
              )}

              <a
                href={brandData.maps.directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline btn-pill"
                id="about-store-directions-btn"
              >
                <span>Get Directions</span>
                <span aria-hidden="true" className="btn-arrow">→</span>
              </a>
            </div>
          </div>

          {/* RIGHT: REAL SHOWROOM EXPERIENCE CARD (7 COLS) */}
          <div className="lg:col-span-7 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-[#E5C378]/40 bg-gradient-to-br from-[#2E050F] via-[#20040A] to-[#140106] p-8 sm:p-10 text-white">
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-[#E5C378]/25">
                <div>
                  <span className="text-[10px] font-bold text-[#E5C378] tracking-[0.24em] uppercase block mb-1">
                    PHYSICAL BOUTIQUE
                  </span>
                  <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white">
                    Kamal Selections Showroom
                  </h3>
                </div>
                <div className="px-3.5 py-1.5 rounded-full bg-[#E5C378]/20 border border-[#E5C378]/40 text-[#F8E5BA] text-xs font-semibold">
                  Open Daily · 10 AM – 9 PM
                </div>
              </div>

              <p className="text-sm text-[#F8E5BA]/90 leading-relaxed mb-6">
                Situated at the heart of Shadnagar on Main Road. Designed for customers who value inspecting pure fabrics, comparing subtle color variations, and trying garments with complete comfort.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mb-8">
                <div className="p-3.5 rounded-xl bg-white/5 border border-white/10">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-[#E5C378]">✦</span>
                    <strong className="text-xs text-white">Spacious Trial Rooms</strong>
                  </div>
                  <p className="text-[11px] text-[#F8E5BA]/80">Comfortable, private fitting rooms for women and children.</p>
                </div>

                <div className="p-3.5 rounded-xl bg-white/5 border border-white/10">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-[#E5C378]">✦</span>
                    <strong className="text-xs text-white">Warm Personal Service</strong>
                  </div>
                  <p className="text-[11px] text-[#F8E5BA]/80">Attentive assistance to help you pair silhouettes and sizes.</p>
                </div>
              </div>

              <div className="pt-4 border-t border-[#E5C378]/20 flex items-center justify-between text-xs text-[#E5C378]">
                <span>Ibrahim Complex, Main Road, Shadnagar</span>
                <span className="font-semibold uppercase tracking-wider">Welcome In-Store</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
