"use client";

import Link from "next/link";
import { brandData } from "@/data/brand";

interface WomensFinalBannerProps {
  onOpenStoreModal?: () => void;
}

export function WomensFinalBanner({ onOpenStoreModal }: WomensFinalBannerProps = {}) {
  return (
    <section className="relative bg-[#2A050E] text-[#FAF5EB] py-24 sm:py-32 overflow-hidden text-center select-none" id="final-cta">
      
      {/* BOTANICAL GOLD CORNER DECORATION */}
      <div className="absolute -bottom-8 -left-8 w-64 h-64 pointer-events-none opacity-25">
        <svg viewBox="0 0 250 250" className="w-full h-full">
          <g stroke="#E5C378" strokeWidth="1" fill="none">
            <path d="M 10,240 Q 60,180 120,190 T 220,120" />
            <path d="M 30,220 C 20,200 10,180 35,170 C 45,185 40,205 30,220 Z" />
            <circle cx="35" cy="170" r="3" fill="#E5C378" />
          </g>
        </svg>
      </div>

      <div className="absolute -top-8 -right-8 w-64 h-64 pointer-events-none opacity-20">
        <svg viewBox="0 0 250 250" className="w-full h-full">
          <g stroke="#E5C378" strokeWidth="1" fill="none">
            <path d="M 240,10 Q 180,70 190,130 T 120,230" />
            <path d="M 220,30 C 200,50 180,60 205,80 C 215,65 210,45 220,30 Z" />
            <circle cx="205" cy="80" r="3" fill="#E5C378" />
          </g>
        </svg>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* EYEBROW */}
        <div className="inline-flex items-center justify-center gap-3 mb-4">
          <span className="w-10 h-px bg-[#E5C378]"></span>
          <span className="text-xs font-semibold tracking-[0.28em] text-[#E5C378] uppercase">
            KAMAL SELECTIONS · SHADNAGAR
          </span>
          <span className="w-10 h-px bg-[#E5C378]"></span>
        </div>

        {/* DRAMATIC SERIF HEADING */}
        <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#FFFFFF] leading-[1.1] mb-4">
          YOUR NEXT<br />
          FAVOURITE LOOK<br />
          <span className="text-[#E5C378]">IS WAITING.</span>
        </h2>

        {/* HANDWRITTEN ACCENT */}
        <p className="font-script text-3xl sm:text-4xl text-[#F8E5BA] mb-10">
          Come discover it in store.
        </p>

        {/* BUTTONS */}
        <div className="flex flex-wrap items-center justify-center gap-4">
          {onOpenStoreModal ? (
            <button
              type="button"
              onClick={onOpenStoreModal}
              className="btn btn-primary btn-pill"
              id="final-visit-store-btn"
            >
              <span>Visit Our Store</span>
              <span aria-hidden="true" className="btn-arrow">→</span>
            </button>
          ) : (
            <Link
              href="/store"
              className="btn btn-primary btn-pill"
              id="final-visit-store-btn"
            >
              <span>Visit Our Store</span>
              <span aria-hidden="true" className="btn-arrow">→</span>
            </Link>
          )}

          <a
            href={`tel:${brandData.phone}`}
            className="btn btn-secondary btn-pill"
            id="final-call-store-btn"
          >
            <span>Call Us</span>
            <span aria-hidden="true" className="btn-arrow">→</span>
          </a>
        </div>

        <p className="mt-8 text-xs text-[#E5C378]/70 tracking-widest uppercase">
          Open Daily · 10 AM — 9 PM · Ibrahim Complex, Main Road, Shadnagar
        </p>
      </div>
    </section>
  );
}
