"use client";

import Link from "next/link";
import Image from "next/image";
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
                className="btn btn-pill border-2 border-[#A41A50] text-[#A41A50] hover:bg-[#A41A50] hover:text-white font-bold transition-all shadow-sm"
                id="about-store-directions-btn"
              >
                <span>Get Directions</span>
                <span aria-hidden="true" className="btn-arrow">→</span>
              </a>
            </div>
          </div>

          {/* RIGHT: REAL SHOWROOM FULL PHOTO CARD (7 COLS) */}
          <div className="lg:col-span-7 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-[#E5C378]/40 min-h-[380px] sm:min-h-[440px] lg:min-h-[480px] w-full">
              <Image
                src="/images/store/kamal-selections-showroom-interior.png"
                alt="Kamal Selections Physical Showroom Interior in Shadnagar"
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 55vw"
                priority
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
