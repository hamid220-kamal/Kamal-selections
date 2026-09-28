"use client";

import { brandData } from "@/data/brand";

export function StoreHero() {
  return (
    <section className="hero-section" id="store-hero">
      {/* FULL-BLEED EDITORIAL BACKGROUND IMAGE LAYER */}
      <div className="hero-bg-container">
        <img
          src="/images/store/kamal-selections-store-hero-facade.jpg"
          alt="Kamal Selections physical fashion showroom facade and entrance at Ibrahim Complex, Main Road, Shadnagar"
          className="hero-bg-img"
          id="hero-bg-img"
        />
        <div className="hero-burgundy-overlay"></div>
        <div className="hero-vignette"></div>
      </div>

      {/* BOTANICAL FLORAL LINE ART DECORATIONS */}
      <div className="corner-decoration corner-bottom-left" aria-hidden="true">
        <svg viewBox="0 0 250 250" className="botanical-svg">
          <defs>
            <linearGradient id="goldGradStoreHero" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#CFA753" />
              <stop offset="50%" stopColor="#E5C378" />
              <stop offset="100%" stopColor="#C42766" />
            </linearGradient>
          </defs>
          <g stroke="url(#goldGradStoreHero)" strokeWidth="1" fill="none" opacity="0.45">
            <path d="M 10,240 Q 60,180 120,190 T 220,120" />
            <path d="M 30,220 C 20,200 10,180 35,170 C 45,185 40,205 30,220 Z" />
            <path d="M 30,220 C 40,200 60,190 55,175 C 40,180 32,200 30,220 Z" />
            <path d="M 70,195 C 60,170 50,150 75,140 C 85,160 80,180 70,195 Z" />
            <circle cx="35" cy="170" r="2" fill="url(#goldGradStoreHero)" />
            <circle cx="75" cy="140" r="2" fill="url(#goldGradStoreHero)" />
          </g>
        </svg>
      </div>

      <div className="corner-decoration corner-bottom-right" aria-hidden="true">
        <svg viewBox="0 0 250 250" className="botanical-svg">
          <g stroke="url(#goldGradStoreHero)" strokeWidth="1" fill="none" opacity="0.35">
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
            <span className="eyebrow-text">VISIT KAMAL SELECTIONS</span>
          </div>

          {/* MAIN HEADING (LARGE GOLD SERIF) */}
          <h1 className="hero-main-title animate-slide-up delay-2">
            SEE THE<br />STYLE IN PERSON.
          </h1>

          {/* SCRIPT STATEMENT (WARM IVORY HANDWRITING) */}
          <p className="hero-script-statement animate-slide-up delay-3">
            Your next favourite look<br />might be waiting here.
          </p>

          {/* SUPPORTING COPY */}
          <p className="hero-desc-copy animate-slide-up delay-4">
            Explore women&apos;s and kids&apos; fashion at our store in Ibrahim Complex, Main Road, Shadnagar.
          </p>

          {/* REFINED LOCATION INFORMATION & CONFIRMED STORE HOURS */}
          <div className="store-hero-meta-block animate-slide-up delay-4">
            {/* Location row */}
            <div className="store-hero-location-row">
              <div className="store-hero-pin-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="#E5C378" strokeWidth="2">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/>
                  <circle cx="12" cy="9" r="2.5" fill="#E5C378"/>
                </svg>
              </div>
              <div className="store-hero-location-text">
                <span className="store-building-name">IBRAHIM COMPLEX</span>
                <span className="store-street-name">Main Road, Shadnagar</span>
              </div>
            </div>

            {/* Confirmed Store Hours & Contact line */}
            <div className="store-hero-hours-phone">
              <div className="store-hours-badge">
                <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="#E5C378" strokeWidth="2" aria-hidden="true">
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12 6 12 12 16 14" />
                </svg>
                <span>OPEN DAILY · 10 AM – 9 PM</span>
              </div>

              <a
                href={`tel:${brandData.phone}`}
                className="store-phone-badge"
                aria-label={`Call Kamal Selections store at ${brandData.phone}`}
              >
                <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="#E5C378" strokeWidth="2" aria-hidden="true">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                </svg>
                <span>{brandData.phone}</span>
              </a>
            </div>
          </div>

          {/* CTA BUTTONS GROUP */}
          <div className="hero-cta-group animate-slide-up delay-5">
            <a
              href={brandData.maps.directionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary btn-pill"
              id="get-directions-hero-btn"
            >
              <span>Get Directions</span>
              <span aria-hidden="true" className="btn-arrow">→</span>
            </a>

            <a href="#store-details" className="btn btn-outline btn-pill" id="view-store-details-btn">
              <span>View Store Details</span>
              <span aria-hidden="true">↓</span>
            </a>
          </div>

          {/* LOWER FEATURE ROW (THREE GOLD LINE ICONS) */}
          <div className="hero-benefits-grid animate-slide-up delay-8">
            <div className="benefit-item">
              <div className="benefit-icon-wrapper">
                <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="url(#goldGradStoreHero)" strokeWidth="1.6">
                  <path d="M20.38 3.46L16 2a4 4 0 0 1-8 0L3.62 3.46a2 2 0 0 0-1.34 2.23l.58 3.5a2 2 0 0 0 1.28 1.55L6 11.5V20a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-8.5l1.86-.76a2 2 0 0 0 1.28-1.55l.58-3.5a2 2 0 0 0-1.34-2.23z"/>
                </svg>
              </div>
              <div className="benefit-text">
                <span className="benefit-title">Women&apos;s Wear</span>
                <span className="benefit-sub">Dresses · Kurtis · More</span>
              </div>
            </div>

            <div className="benefit-divider" aria-hidden="true"></div>

            <div className="benefit-item">
              <div className="benefit-icon-wrapper">
                <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="url(#goldGradStoreHero)" strokeWidth="1.6">
                  <circle cx="12" cy="7" r="4"/>
                  <path d="M5.5 21a6.5 6.5 0 0 1 13 0"/>
                </svg>
              </div>
              <div className="benefit-text">
                <span className="benefit-title">Kids Wear</span>
                <span className="benefit-sub">Girls · Boys · Kids Sets</span>
              </div>
            </div>

            <div className="benefit-divider" aria-hidden="true"></div>

            <div className="benefit-item">
              <div className="benefit-icon-wrapper">
                <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="url(#goldGradStoreHero)" strokeWidth="1.6">
                  <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
                  <polyline points="9 22 9 12 15 12 15 22"/>
                </svg>
              </div>
              <div className="benefit-text">
                <span className="benefit-title">Visit Us</span>
                <span className="benefit-sub">Ibrahim Complex · Shadnagar</span>
              </div>
            </div>
          </div>

          {/* SCROLL DOWN INDICATOR */}
          <a href="#store-details" className="scroll-down-indicator" aria-label="Scroll to store details">
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
