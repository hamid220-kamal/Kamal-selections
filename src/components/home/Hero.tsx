"use client";

import Link from "next/link";

interface HeroProps {
  onOpenStoreModal?: () => void;
  onOpenSizeGuideModal?: () => void;
  onOpenSearchModal?: () => void;
}

export function Hero({ onOpenStoreModal }: HeroProps) {
  return (
    <section className="hero-section" id="home">
      {/* EDITORIAL BACKGROUND IMAGE LAYER */}
      <div className="hero-bg-container">
        <img
          src="/assets/hero-bg.jpg"
          alt="Kamal Selections Fashion Editorial - Stylish Indian Mother and Children in Contemporary Festive Wear"
          className="hero-bg-img"
          id="hero-bg-img"
        />
        <div className="hero-burgundy-overlay"></div>
        <div className="hero-vignette"></div>
      </div>

      {/* BOTANICAL FLORAL LINE ART DECORATIONS */}
      <div className="corner-decoration corner-bottom-left" aria-hidden="true">
        <svg viewBox="0 0 250 250" className="botanical-svg">
          <g stroke="url(#goldGrad)" strokeWidth="1" fill="none" opacity="0.45">
            <path d="M 10,240 Q 60,180 120,190 T 220,120" />
            <path d="M 30,220 C 20,200 10,180 35,170 C 45,185 40,205 30,220 Z" />
            <path d="M 30,220 C 40,200 60,190 55,175 C 40,180 32,200 30,220 Z" />
            <path d="M 70,195 C 60,170 50,150 75,140 C 85,160 80,180 70,195 Z" />
            <path d="M 120,170 C 110,140 100,120 130,110 C 140,130 135,155 120,170 Z" />
            <circle cx="35" cy="170" r="2" fill="url(#goldGrad)" />
            <circle cx="75" cy="140" r="2" fill="url(#goldGrad)" />
            <circle cx="130" cy="110" r="2" fill="url(#goldGrad)" />
          </g>
        </svg>
      </div>

      <div className="corner-decoration corner-bottom-right" aria-hidden="true">
        <svg viewBox="0 0 250 250" className="botanical-svg">
          <g stroke="url(#goldGrad)" strokeWidth="1" fill="none" opacity="0.35">
            <path d="M 240,240 Q 180,180 190,120 T 120,20" />
            <path d="M 220,220 C 200,200 180,190 205,170 C 215,185 210,205 220,220 Z" />
            <path d="M 195,170 C 170,150 150,140 175,120 C 185,140 180,160 195,170 Z" />
          </g>
        </svg>
      </div>

      {/* HERO MAIN CONTENT GRID */}
      <div className="hero-content-wrapper">
        <div className="hero-text-column">
          {/* EYEBROW WITH GOLD DIVIDERS & LOTUS MOTIF */}
          <div className="hero-eyebrow-container animate-fade-in">
            <span className="eyebrow-line"></span>
            <span className="eyebrow-text">WELCOME TO KAMAL SELECTIONS</span>
            <span className="eyebrow-line"></span>
          </div>

          {/* ELEGANT GOLD LOTUS SYMBOL */}
          <div className="lotus-motif animate-fade-in delay-1" aria-hidden="true">
            <svg viewBox="0 0 60 30" className="lotus-icon">
              <defs>
                <linearGradient id="goldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#CFA753" />
                  <stop offset="50%" stopColor="#E5C378" />
                  <stop offset="100%" stopColor="#C42766" />
                </linearGradient>
              </defs>
              <path d="M 30,5 C 22,12 18,22 30,28 C 42,22 38,12 30,5 Z" fill="url(#goldGrad)" opacity="0.9" />
              <path d="M 30,28 C 20,24 10,18 8,10 C 18,12 25,20 30,28 Z" fill="url(#goldGrad)" opacity="0.75" />
              <path d="M 30,28 C 40,24 50,18 52,10 C 42,12 35,20 30,28 Z" fill="url(#goldGrad)" opacity="0.75" />
              <path d="M 30,28 C 12,28 2,20 0,14 C 12,14 22,22 30,28 Z" fill="url(#goldGrad)" opacity="0.5" />
              <path d="M 30,28 C 48,28 58,20 60,14 C 48,14 38,22 30,28 Z" fill="url(#goldGrad)" opacity="0.5" />
            </svg>
          </div>

          {/* MAIN HEADING */}
          <h1 className="hero-main-title animate-slide-up delay-2">
            KAMAL SELECTIONS
          </h1>

          {/* LARGE ELEGANT SUPPORTING STATEMENT */}
          <p className="hero-script-statement animate-slide-up delay-3">
            Fashion for Every Woman &amp;<br />Every Little One
          </p>

          {/* LOCATION LINE */}
          <div className="hero-location-line animate-fade-in delay-4">
            <svg className="location-pin-icon" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="#E5C378" strokeWidth="2">
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/>
              <circle cx="12" cy="9" r="2.5" fill="#E5C378"/>
            </svg>
            <span>Women’s &amp; Kids’ Wear in Shadnagar</span>
            <span className="est-badge">Est. 2021</span>
          </div>

          {/* CTA BUTTONS GROUP */}
          <div className="hero-cta-group animate-slide-up delay-5">
            <Link href="/women" className="btn btn-primary btn-pill">
              <span>Explore Women’s Wear</span>
              <svg className="btn-arrow" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </Link>

            <a href="#kids-wear" className="btn btn-secondary btn-pill">
              <span>Explore Kids Wear</span>
              <svg className="btn-arrow" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </a>

            <button onClick={onOpenStoreModal} className="btn btn-outline btn-pill" id="open-store-modal-btn">
              <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/>
                <circle cx="12" cy="9" r="2.5"/>
              </svg>
              <span>Visit Store</span>
            </button>
          </div>

          {/* SUBTLE BENEFIT INDICATORS */}
          <div className="hero-benefits-grid animate-fade-in delay-6">
            <div className="benefit-item">
              <div className="benefit-icon-wrapper">
                <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="url(#goldGrad)" strokeWidth="1.6">
                  <path d="M8 4l4 2 4-2 2 3-3 2v11H9V9L6 7l2-3z" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M9 14h6" strokeLinecap="round"/>
                </svg>
              </div>
              <div className="benefit-text">
                <span className="benefit-title">Trendy Styles</span>
                <span className="benefit-sub">for Every Occasion</span>
              </div>
            </div>

            <div className="benefit-divider" aria-hidden="true"></div>

            <div className="benefit-item">
              <div className="benefit-icon-wrapper">
                <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="url(#goldGrad)" strokeWidth="1.6">
                  <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                </svg>
              </div>
              <div className="benefit-text">
                <span className="benefit-title">Quality Fashion</span>
                <span className="benefit-sub">for Little Ones</span>
              </div>
            </div>

            <div className="benefit-divider" aria-hidden="true"></div>

            <div className="benefit-item">
              <div className="benefit-icon-wrapper">
                <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="url(#goldGrad)" strokeWidth="1.6">
                  <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"/>
                  <line x1="7" y1="7" x2="7.01" y2="7" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </div>
              <div className="benefit-text">
                <span className="benefit-title">Fashion that fits</span>
                <span className="benefit-sub">your Budget</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* BOTTOM OF HERO: SCROLL DOWN INDICATOR & CURVED CREAM TRANSITION */}
      <div className="hero-bottom-bar">
        <a href="#womens-wear" className="scroll-down-indicator" aria-label="Scroll to collection preview">
          <div className="mouse-icon">
            <div className="mouse-wheel"></div>
          </div>
          <span className="scroll-text">SCROLL DOWN</span>
          <svg className="scroll-arrow" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <polyline points="6 9 12 15 18 9"></polyline>
          </svg>
        </a>

        <div className="hero-curve-transition" aria-hidden="true">
          <svg viewBox="0 0 1440 120" preserveAspectRatio="none" className="curve-svg">
            <path d="M0,32 C280,100 520,120 720,120 C920,120 1160,100 1440,32 L1440,120 L0,120 Z" fill="#FDF8F2"></path>
          </svg>
        </div>
      </div>
    </section>
  );
}
