"use client";

import Link from "next/link";
import Image from "next/image";

interface AboutHeroProps {
  onOpenStoreModal?: () => void;
}

export function AboutHero({ onOpenStoreModal }: AboutHeroProps = {}) {
  return (
    <section className="hero-section" id="about-hero">
      {/* FULL-BLEED EDITORIAL BACKGROUND IMAGE LAYER */}
      <div className="hero-bg-container">
        <Image
          src="/images/about/kamal-selections-heritage-family-story.jpg"
          alt="Kamal Selections family heritage and Indian fashion showroom story in Shadnagar"
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
            <linearGradient id="goldGradAboutHero" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#CFA753" />
              <stop offset="50%" stopColor="#E5C378" />
              <stop offset="100%" stopColor="#C42766" />
            </linearGradient>
          </defs>
          <g stroke="url(#goldGradAboutHero)" strokeWidth="1" fill="none" opacity="0.45">
            <path d="M 10,240 Q 60,180 120,190 T 220,120" />
            <path d="M 30,220 C 20,200 10,180 35,170 C 45,185 40,205 30,220 Z" />
            <path d="M 30,220 C 40,200 60,190 55,175 C 40,180 32,200 30,220 Z" />
            <path d="M 70,195 C 60,170 50,150 75,140 C 85,160 80,180 70,195 Z" />
            <path d="M 120,170 C 110,140 100,120 130,110 C 140,130 135,155 120,170 Z" />
            <circle cx="35" cy="170" r="2" fill="url(#goldGradAboutHero)" />
            <circle cx="75" cy="140" r="2" fill="url(#goldGradAboutHero)" />
            <circle cx="130" cy="110" r="2" fill="url(#goldGradAboutHero)" />
          </g>
        </svg>
      </div>

      <div className="corner-decoration corner-bottom-right" aria-hidden="true">
        <svg viewBox="0 0 250 250" className="botanical-svg">
          <g stroke="url(#goldGradAboutHero)" strokeWidth="1" fill="none" opacity="0.35">
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
            <span className="eyebrow-text">OUR STORY · KAMAL SELECTIONS</span>
          </div>

          {/* MAIN HEADING (LARGE GOLD SERIF) */}
          <h1 className="hero-main-title animate-slide-up delay-2">
            MORE THAN<br />A CLOTHING STORE.
          </h1>

          {/* SCRIPT STATEMENT (WARM IVORY HANDWRITING) */}
          <p className="hero-script-statement animate-slide-up delay-3">
            Chosen with care.<br />Made for your everyday.
          </p>

          {/* EDITORIAL SUPPORTING PARAGRAPH */}
          <div className="flex items-start gap-4 max-w-[510px] mb-5">
            {/* SUPPORTING COPY */}
            <p className="hero-desc-copy animate-slide-up delay-4 !mb-0">
              Kamal Selections serves women and families in Shadnagar with thoughtfully selected fashion for everyday life, celebrations and special occasions.
            </p>
          </div>

          {/* CTA BUTTONS GROUP */}
          <div className="hero-cta-group animate-slide-up delay-5">
            <a href="#story" className="btn btn-primary btn-pill">
              <span>Discover Our Story</span>
              <span aria-hidden="true">↓</span>
            </a>

            {onOpenStoreModal ? (
              <button onClick={onOpenStoreModal} className="btn btn-outline btn-pill" id="open-store-modal-about-btn">
                <span>Visit Our Store</span>
                <span aria-hidden="true" className="btn-arrow">→</span>
              </button>
            ) : (
              <Link href="/store" className="btn btn-outline btn-pill" id="open-store-modal-about-btn">
                <span>Visit Our Store</span>
                <span aria-hidden="true" className="btn-arrow">→</span>
              </Link>
            )}
          </div>

          {/* LOWER FEATURE ROW (THREE GOLD LINE ICONS) */}
          <div className="hero-benefits-grid animate-slide-up delay-8">
            <div className="benefit-item">
              <div className="benefit-icon-wrapper">
                <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="url(#goldGradAboutHero)" strokeWidth="1.6">
                  <circle cx="12" cy="12" r="9"/>
                  <polyline points="12 7 12 12 15 15"/>
                </svg>
              </div>
              <div className="benefit-text">
                <span className="benefit-title">Open Daily</span>
                <span className="benefit-sub">10 AM – 9 PM</span>
              </div>
            </div>

            <div className="benefit-divider" aria-hidden="true"></div>

            <div className="benefit-item">
              <div className="benefit-icon-wrapper">
                <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="url(#goldGradAboutHero)" strokeWidth="1.6">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                  <circle cx="9" cy="7" r="4"/>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                </svg>
              </div>
              <div className="benefit-text">
                <span className="benefit-title">Women&apos;s &amp; Kids&apos;</span>
                <span className="benefit-sub">Fashion for Families</span>
              </div>
            </div>

            <div className="benefit-divider" aria-hidden="true"></div>

            <div className="benefit-item">
              <div className="benefit-icon-wrapper">
                <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="url(#goldGradAboutHero)" strokeWidth="1.6">
                  <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"/>
                  <line x1="7" y1="7" x2="7.01" y2="7" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </div>
              <div className="benefit-text">
                <span className="benefit-title">Value Focused</span>
                <span className="benefit-sub">Styles for Every Budget</span>
              </div>
            </div>
          </div>

          {/* SCROLL DOWN INDICATOR */}
          <a href="#story" className="scroll-down-indicator" aria-label="Scroll to explore our story">
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
            <path d="M0,32 C280,100 520,120 720,120 C920,120 1160,100 1440,32 L1440,120 L0,120 Z" fill="#F4EEE5"></path>
          </svg>
        </div>
      </div>
    </section>
  );
}
