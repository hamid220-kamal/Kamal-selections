"use client";

import Link from "next/link";

interface WomensHeroProps {
  onOpenStoreModal?: () => void;
}

export function WomensHero({ onOpenStoreModal }: WomensHeroProps) {
  return (
    <section className="section-women-hero" id="women-hero">
      {/* BOTANICAL CORNER LINE-ART DECORATIONS */}
      <div className="botanical-corner corner-top-left" aria-hidden="true">
        <svg viewBox="0 0 200 200" className="botanical-line-svg">
          <g stroke="#CFA753" strokeWidth="1.2" fill="none" opacity="0.35">
            <path d="M 10,10 Q 70,80 150,40 T 180,120" />
            <path d="M 30,10 C 50,40 80,60 50,90 C 30,70 20,40 30,10 Z" fill="#F4C4D9" fillOpacity="0.15" />
            <path d="M 70,40 C 100,60 120,90 90,120 C 70,100 60,70 70,40 Z" fill="#F4C4D9" fillOpacity="0.12" />
          </g>
        </svg>
      </div>

      <div className="botanical-corner corner-bottom-left" aria-hidden="true">
        <svg viewBox="0 0 200 200" className="botanical-line-svg">
          <g stroke="#CFA753" strokeWidth="1.2" fill="none" opacity="0.35">
            <path d="M 10,190 Q 80,120 40,50 T 120,20" />
            <path d="M 20,160 C 40,140 70,120 90,150 C 70,170 40,180 20,160 Z" fill="#F4C4D9" fillOpacity="0.15" />
          </g>
        </svg>
      </div>

      <div className="women-hero-container">
        {/* LEFT COLUMN: ~45% EDITORIAL CONTENT */}
        <div className="women-hero-content-col">
          {/* SMALL EYEBROW */}
          <div className="showcase-eyebrow-wrap animate-on-scroll fade-in">
            <span className="eyebrow-accent-line"></span>
            <span className="showcase-eyebrow-text">KAMAL SELECTIONS · WOMEN'S WEAR</span>
            <span className="eyebrow-accent-line"></span>
          </div>

          {/* LARGE MAIN HEADING (H1 FOR SEO) */}
          <h1 className="women-hero-heading animate-on-scroll slide-up delay-1">
            Style Made<br />
            <span className="burgundy-serif-accent">for Every Woman.</span>
          </h1>

          {/* SUPPORTING PARAGRAPH */}
          <p className="women-hero-description animate-on-scroll slide-up delay-2">
            Explore women's fashion designed for everyday comfort, celebrations and everything in between.
          </p>

          {/* COMPACT CATEGORY LINE */}
          <div className="women-category-strip animate-on-scroll slide-up delay-3">
            <span className="category-strip-text">
              Dresses · Kurtis · Tops · Leggings · 3-Piece Sets · Party Wear
            </span>
          </div>

          {/* CTA GROUP */}
          <div className="women-hero-cta-group animate-on-scroll slide-up delay-4">
            <a href="#categories" className="btn btn-burgundy btn-pill">
              <span>Explore Collection ↓</span>
            </a>

            <Link
              href="/store"
              className="secondary-text-link"
              onClick={(e) => {
                if (onOpenStoreModal) {
                  e.preventDefault();
                  onOpenStoreModal();
                }
              }}
            >
              <span>Visit Our Store →</span>
              <span className="link-underline"></span>
            </Link>
          </div>

          {/* MICRO INFORMATION LINE */}
          <div className="women-hero-micro-info animate-on-scroll fade-in delay-5">
            <span className="micro-info-pin">📍</span>
            <span className="micro-info-text">Women's Fashion · Shadnagar</span>
          </div>
        </div>

        {/* RIGHT COLUMN: ~55% EDITORIAL ARCHED FRAME VISUAL */}
        <div className="women-hero-visual-col animate-on-scroll slide-left delay-2">
          <div className="women-arched-frame-wrapper">
            <div className="women-arched-backdrop-accent" aria-hidden="true"></div>
            <div className="women-arched-image-container">
              <img
                src="/assets/center-womens-hero.jpg"
                alt="Kamal Selections Women's Wear Fashion Editorial in Shadnagar"
                className="women-arched-fashion-img"
                loading="eager"
              />
            </div>
          </div>
        </div>
      </div>

      {/* BOTTOM TRANSITION WAVE TOWARD SECTION 2 ("Explore Women's Categories") */}
      <div className="women-hero-bottom-curve" aria-hidden="true">
        <svg viewBox="0 0 1440 60" preserveAspectRatio="none" className="curve-wave-svg">
          <path d="M0,25 C360,60 720,10 1080,45 C1260,55 1380,25 1440,15 L1440,60 L0,60 Z" fill="#FDF8F2"></path>
        </svg>
      </div>
    </section>
  );
}
