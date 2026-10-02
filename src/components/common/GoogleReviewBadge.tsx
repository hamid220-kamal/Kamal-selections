"use client";

import { useEffect, useState } from "react";
import { brandData } from "@/data/brand";

export function GoogleReviewBadge() {
  const [mounted, setMounted] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    // Delay badge appearance until initial page render is fully settled
    const timer = setTimeout(() => {
      setMounted(true);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  if (!mounted || isDismissed) return null;

  return (
    <aside
      aria-label="Google Review Floating Prompt"
      className="fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-50 transition-all duration-500 ease-in-out"
    >
      {isMinimized ? (
        /* MINIMIZED FLOATING PILL BADGE */
        <button
          type="button"
          onClick={() => setIsMinimized(false)}
          className="flex items-center gap-2.5 px-4 py-2.5 rounded-full bg-[#FFFFFF] border border-[#E5C378] text-[#30251F] shadow-2xl hover:shadow-2xl hover:scale-105 transition-all group cursor-pointer backdrop-blur-md"
          title="Open Google Review badge"
        >
          {/* GOOGLE ICON */}
          <div className="w-6 h-6 rounded-full bg-[#FAF3EB] border border-[#E5C378]/50 flex items-center justify-center shrink-0">
            <svg viewBox="0 0 24 24" width="14" height="14">
              <path
                fill="#4285F4"
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
              />
              <path
                fill="#34A853"
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
              />
              <path
                fill="#FBBC05"
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
              />
              <path
                fill="#EA4335"
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
              />
            </svg>
          </div>

          <div className="flex items-center gap-1.5 text-xs font-bold text-[#A41A50]">
            <span className="text-[#D4AF37]">★★★★★</span>
            <span>Review Us</span>
          </div>
        </button>
      ) : (
        /* EXPANDED LUXURY REVIEW CARD */
        <div className="w-[310px] sm:w-[340px] rounded-3xl bg-[#FFFFFF] border border-[#E5C378]/60 shadow-2xl p-5 text-[#30251F] relative overflow-hidden animate-slide-up backdrop-blur-md">
          {/* AMBIENT BG GLOW */}
          <div className="absolute -top-10 -right-10 w-32 h-32 bg-[#E5C378]/20 rounded-full blur-2xl pointer-events-none" />

          {/* TOP BAR: ICON & MINIMIZE / DISMISS BUTTONS */}
          <div className="flex items-center justify-between mb-3.5 pb-2.5 border-b border-[#E5C378]/30">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-lg bg-[#FAF3EB] border border-[#E5C378]/50 flex items-center justify-center shrink-0 shadow-sm">
                <svg viewBox="0 0 24 24" width="16" height="16">
                  <path
                    fill="#4285F4"
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  />
                  <path
                    fill="#34A853"
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  />
                  <path
                    fill="#FBBC05"
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
                  />
                  <path
                    fill="#EA4335"
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
                  />
                </svg>
              </div>
              <span className="text-[10px] font-bold text-[#A41A50] tracking-[0.2em] uppercase">
                Google Business Review
              </span>
            </div>

            <div className="flex items-center gap-1">
              <button
                type="button"
                onClick={() => setIsMinimized(true)}
                className="w-6 h-6 rounded-full bg-[#FAF3EB] hover:bg-[#E5C378]/30 text-[#69564A] flex items-center justify-center text-xs transition-colors"
                title="Minimize badge"
              >
                ─
              </button>
              <button
                type="button"
                onClick={() => setIsDismissed(true)}
                className="w-6 h-6 rounded-full bg-[#FAF3EB] hover:bg-[#A41A50] hover:text-white text-[#69564A] flex items-center justify-center text-xs transition-colors"
                title="Close badge"
              >
                ✕
              </button>
            </div>
          </div>

          {/* CARD BODY */}
          <div className="mb-4">
            <div className="flex items-center gap-1 text-[#D4AF37] text-sm mb-1">
              <span>★</span>
              <span>★</span>
              <span>★</span>
              <span>★</span>
              <span>★</span>
              <span className="text-xs font-bold text-[#30251F] ml-1">Rate Us</span>
            </div>

            <h4 className="font-serif text-lg font-bold text-[#30251F] mb-1 leading-snug">
              Loved Shopping With Us?
            </h4>
            <p className="text-xs text-[#69564A] leading-relaxed">
              Help others in Shadnagar discover Kamal Selections by sharing a quick 5-star Google review!
            </p>
          </div>

          {/* CTA BUTTON */}
          <a
            href={brandData.maps.reviewUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-3 px-4 rounded-2xl bg-gradient-to-r from-[#A41A50] to-[#80123D] text-white text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all"
            id="floating-google-review-btn"
          >
            <span>Review on Google</span>
            <span aria-hidden="true">→</span>
          </a>
        </div>
      )}
    </aside>
  );
}
