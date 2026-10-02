"use client";

import Link from "next/link";
import Image from "next/image";

interface KidsHeroProps {
  onOpenStoreModal?: () => void;
}

export function KidsHero({ onOpenStoreModal }: KidsHeroProps = {}) {
  return (
    <section className="hero-section" id="kids-hero">
      {/* FULL-BLEED EDITORIAL BACKGROUND IMAGE LAYER */}
      <div className="hero-bg-container">
        <Image
          src="/images/kids/kamal-selections-kids-wear-hero-banner.jpg"
          alt="Kamal Selections Kids Wear - Little Looks For Their Biggest Days"
          className="hero-bg-img"
          id="hero-bg-img"
          priority
          fill
          sizes="100vw"
          quality={80}
        />
        <div className="hero-burgundy-overlay"></div>
        <div className="hero-vignette"></div>
      </div>

      {/* BOTANICAL FLORAL LINE ART DECORATIONS */}
      <div className="corner-decoration corner-bottom-left" aria-hidden="true">
        <svg viewBox="0 0 250 250" className="botanical-svg">
          <defs>
            <linearGradient id="goldGradKidsHero" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#CFA753" />
              <stop offset="50%" stopColor="#E5C378" />
              <stop offset="100%" stopColor="#C42766" />
            </linearGradient>
          </defs>
          <g stroke="url(#goldGradKidsHero)" strokeWidth="1" fill="none" opacity="0.45">
            <path d="M 10,240 Q 60,180 120,190 T 220,120" />
            <path d="M 30,220 C 20,200 10,180 35,170 C 45,185 40,205 30,220 Z" />
            <path d="M 30,220 C 40,200 60,190 55,175 C 40,180 32,200 30,220 Z" />
            <path d="M 70,195 C 60,170 50,150 75,140 C 85,160 80,180 70,195 Z" />
            <path d="M 120,170 C 110,140 100,120 130,110 C 140,130 135,155 120,170 Z" />
            <circle cx="35" cy="170" r="2" fill="url(#goldGradKidsHero)" />
            <circle cx="75" cy="140" r="2" fill="url(#goldGradKidsHero)" />
            <circle cx="130" cy="110" r="2" fill="url(#goldGradKidsHero)" />
          </g>
        </svg>
      </div>

      <div className="corner-decoration corner-bottom-right" aria-hidden="true">
        <svg viewBox="0 0 250 250" className="botanical-svg">
          <g stroke="url(#goldGradKidsHero)" strokeWidth="1" fill="none" opacity="0.35">
            <path d="M 240,240 Q 180,180 190,120 T 120,20" />
            <path d="M 220,220 C 200,200 180,190 205,170 C 215,185 210,205 220,220 Z" />
            <path d="M 195,170 C 170,150 150,140 175,120 C 185,140 180,160 195,170 Z" />
          </g>
        </svg>
      </div>

      {/* HERO MAIN CONTENT GRID */}
      <div className="hero-content-wrapper">
        <div className="hero-text-column">
          
          {/* EYEBROW WITH GOLD DIVIDER */}
          <div className="hero-eyebrow-container animate-slide-up delay-1">
            <span className="eyebrow-line"></span>
            <span className="eyebrow-text">KAMAL SELECTIONS · KIDS WEAR</span>
          </div>

          {/* MAIN HEADING (LARGE GOLD SERIF) */}
          <h1 className="hero-main-title animate-slide-up delay-2">
            KIDS WEAR
          </h1>

          {/* SCRIPT STATEMENT (WARM IVORY HANDWRITING) */}
          <p className="hero-script-statement animate-slide-up delay-3">
            Little styles.<br />Big smiles.
          </p>

          {/* SUPPORTING COPY */}
          <p className="hero-desc-copy animate-slide-up delay-4">
            Comfortable, playful and stylish outfits for every little moment — from everyday wear to special occasions.
          </p>

          {/* CATEGORY INFORMATION (INFORMATIONAL ONLY — NON-CLICKABLE) */}
          <div className="hero-category-tags animate-slide-up delay-4" aria-label="Available kids clothing categories">
            <span>KIDS FROCKS</span>
            <span className="tag-dot">·</span>
            <span>KIDS SETS</span>
            <span className="tag-dot">·</span>
            <span>BOYS CLOTHING</span>
            <span className="tag-dot">·</span>
            <span>GIRLS CLOTHING</span>
          </div>

          {/* CTA BUTTONS GROUP */}
          <div className="hero-cta-group animate-slide-up delay-5">
            <a href="#categories" className="btn btn-primary btn-pill">
              <span>Explore Kids Wear</span>
              <svg className="btn-arrow" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </a>

            {onOpenStoreModal ? (
              <button onClick={onOpenStoreModal} className="btn btn-outline btn-pill" id="open-store-modal-kids-btn">
                <span>Visit Store</span>
                <svg className="btn-arrow" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </button>
            ) : (
              <Link href="/store" className="btn btn-outline btn-pill" id="open-store-modal-kids-btn">
                <span>Visit Store</span>
                <svg className="btn-arrow" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </Link>
            )}
          </div>

          {/* LOWER FEATURE ROW (THREE GOLD LINE ICONS) */}
          <div className="hero-benefits-grid animate-fade-in delay-6">
            <div className="benefit-item">
              <div className="benefit-icon-wrapper">
                <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="url(#goldGradKidsHero)" strokeWidth="1.6">
                  <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                </svg>
              </div>
              <div className="benefit-text">
                <span className="benefit-title">Comfort First</span>
                <span className="benefit-sub">Made for Little Ones</span>
              </div>
            </div>

            <div className="benefit-divider" aria-hidden="true"></div>

            <div className="benefit-item">
              <div className="benefit-icon-wrapper">
                <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="url(#goldGradKidsHero)" strokeWidth="1.6">
                  <path d="M12 2l2.4 6.6L21 11l-6.6 2.4L12 20l-2.4-6.6L3 11l6.6-2.4L12 2z"/>
                </svg>
              </div>
              <div className="benefit-text">
                <span className="benefit-title">Playful Styles</span>
                <span className="benefit-sub">For Every Occasion</span>
              </div>
            </div>

            <div className="benefit-divider" aria-hidden="true"></div>

            <div className="benefit-item">
              <div className="benefit-icon-wrapper">
                <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="url(#goldGradKidsHero)" strokeWidth="1.6">
                  <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"/>
                  <line x1="7" y1="7" x2="7.01" y2="7" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </div>
              <div className="benefit-text">
                <span className="benefit-title">Family-Friendly</span>
                <span className="benefit-sub">Styles &amp; Prices</span>
              </div>
            </div>
          </div>

          {/* SCROLL DOWN INDICATOR */}
          <a href="#categories" className="scroll-down-indicator" aria-label="Scroll to explore kids collection">
            <span className="scroll-pill-icon" aria-hidden="true">
              <span className="scroll-pill-wheel"></span>
            </span>
            <span className="scroll-text">SCROLL DOWN</span>
          </a>

        </div>
      </div>

      {/* BOTTOM OF HERO: CURVED CREAM TRANSITION */}
      <div className="hero-bottom-bar">
        <div className="hero-curve-transition" aria-hidden="true">
          <svg viewBox="0 0 1440 120" preserveAspectRatio="none" className="curve-svg">
            <path d="M0,32 C280,100 520,120 720,120 C920,120 1160,100 1440,32 L1440,120 L0,120 Z" fill="#FAF3EB"></path>
          </svg>
        </div>
      </div>
    </section>
  );
}
