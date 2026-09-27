"use client";

import Link from "next/link";

interface WomensPreviewProps {
  onOpenStoreModal?: () => void;
}

export function WomensPreview({ onOpenStoreModal }: WomensPreviewProps) {
  return (
    <section className="section-womens-showcase" id="womens-wear">
      {/* BOTANICAL BACKGROUND ACCENTS */}
      <div className="botanical-corner corner-top-right" aria-hidden="true">
        <svg viewBox="0 0 200 200" className="botanical-line-svg">
          <g stroke="#CFA753" strokeWidth="1.2" fill="none" opacity="0.3">
            <path d="M 190,10 Q 120,80 50,40 T 20,120" />
            <path d="M 170,10 C 150,40 120,60 150,90 C 170,70 180,40 170,10 Z" fill="#F4C4D9" fillOpacity="0.15" />
          </g>
        </svg>
      </div>

      <div className="womens-showcase-container">
        {/* 1. LEFT COLUMN: EDITORIAL CONTENT & CATEGORY ICON PILLS */}
        <div className="womens-content-col">
          {/* EYEBROW */}
          <div className="showcase-eyebrow-wrap animate-on-scroll fade-in">
            <span className="eyebrow-accent-line"></span>
            <span className="showcase-eyebrow-text">WOMEN’S WEAR</span>
            <span className="eyebrow-accent-line"></span>
          </div>

          {/* MAIN TITLE */}
          <h2 className="womens-showcase-title animate-on-scroll slide-up">
            Women’s Wear <span className="title-sub-location">in Shadnagar</span>
          </h2>

          {/* SUPPORTING COPY */}
          <p className="womens-showcase-desc animate-on-scroll slide-up delay-1">
            From everyday essentials to special occasions, explore a beautiful range of women’s fashion at Kamal Selections.
          </p>

          {/* SCRIPT STATEMENT */}
          <div className="womens-script-statement animate-on-scroll slide-up delay-2">
            <span className="script-text">Style, Comfort &amp;<br />Confidence — Every Day</span>
            <span className="script-underline"></span>
          </div>

          {/* CATEGORY ICON PILLS (2 ROWS X 4 ITEMS) */}
          <div className="womens-icon-pills-grid animate-on-scroll stagger-children delay-3">
            <div className="pill-item">
              <div className="pill-icon-circle">
                <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <path d="M8 4l4 2 4-2 2 3-3 2v11H9V9L6 7l2-3z" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M9 14h6" strokeLinecap="round"/>
                </svg>
              </div>
              <span className="pill-label">Dresses</span>
            </div>

            <div className="pill-item">
              <div className="pill-icon-circle">
                <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <path d="M6 4h12l1 6-3 2v10H8V12L5 10l1-6z"/>
                  <path d="M12 4v6"/>
                </svg>
              </div>
              <span className="pill-label">Kurtis</span>
            </div>

            <div className="pill-item">
              <div className="pill-icon-circle">
                <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <path d="M7 4h10l2 4-3 2v8H8v-8L5 8l2-4z"/>
                </svg>
              </div>
              <span className="pill-label">Tops</span>
            </div>

            <div className="pill-item">
              <div className="pill-icon-circle">
                <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <path d="M6 3h12l-1 18H7L6 3z"/>
                  <line x1="12" y1="3" x2="12" y2="21"/>
                </svg>
              </div>
              <span className="pill-label">Leggings</span>
            </div>

            <div className="pill-item">
              <div className="pill-icon-circle">
                <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <circle cx="12" cy="7" r="4"/>
                  <path d="M5 21v-3a4 4 0 0 1 4-4h6a4 4 0 0 1 4 4v3"/>
                </svg>
              </div>
              <span className="pill-label">Burqa</span>
            </div>

            <div className="pill-item">
              <div className="pill-icon-circle">
                <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <rect x="4" y="4" width="16" height="16" rx="2"/>
                  <line x1="12" y1="4" x2="12" y2="20"/>
                </svg>
              </div>
              <span className="pill-label">3-Piece Sets</span>
            </div>

            <div className="pill-item">
              <div className="pill-icon-circle">
                <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <path d="M12 2l2.4 6.6L21 11l-6.6 2.4L12 20l-2.4-6.6L3 11l6.6-2.4L12 2z"/>
                </svg>
              </div>
              <span className="pill-label">Party Wear</span>
            </div>
          </div>

          {/* PRIMARY CTA BUTTON */}
          <div className="womens-cta-wrap animate-on-scroll fade-in delay-4">
            <Link href="/women" className="btn btn-burgundy btn-pill" id="open-store-modal-womens">
              <span>Explore Women’s Wear</span>
              <svg className="btn-arrow" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.2">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </Link>
          </div>
        </div>

        {/* 2. CENTER COLUMN: LARGE HERO FASHION PORTRAIT */}
        <div className="womens-hero-portrait-col animate-on-scroll slide-up">
          <div className="portrait-arch-frame">
            <img src="/assets/center-womens-hero.jpg" alt="Kamal Selections Women's Wear Showcase" className="portrait-img" loading="lazy" />
            <div className="portrait-img-shadow" aria-hidden="true"></div>
          </div>
        </div>

        {/* 3. RIGHT COLUMN: ASYMMETRICAL CATEGORY GALLERY GRID */}
        <div className="womens-gallery-grid-col animate-on-scroll slide-left">
          {/* OPTIONAL MICRO-DETAIL: BADGE "TRENDY STYLES" */}
          <div className="badge-trendy-styles">
            <div className="badge-trendy-inner">
              <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="#CFA753" strokeWidth="1.6">
                <path d="M12 2l2.4 6.6L21 11l-6.6 2.4L12 20l-2.4-6.6L3 11l6.6-2.4L12 2z"/>
              </svg>
              <span className="badge-trendy-text">Trendy<br />Styles</span>
            </div>
          </div>

          <div className="gallery-cards-wrapper">
            {/* TOP ROW: LARGE CARDS (DRESSES & KURTIS) */}
            <div className="gallery-row row-large">
              <div className="category-card-item card-large">
                <div className="card-img-wrap">
                  <img src="/assets/cat-dresses.jpg" alt="Dresses Style" loading="lazy" />
                  <div className="card-gradient-overlay"></div>
                </div>
                <div className="card-label-bar">
                  <span className="card-cat-name">Dresses</span>
                </div>
              </div>

              <div className="category-card-item card-large">
                <div className="card-img-wrap">
                  <img src="/assets/cat-kurtis.jpg" alt="Kurtis Style" loading="lazy" />
                  <div className="card-gradient-overlay"></div>
                </div>
                <div className="card-label-bar">
                  <span className="card-cat-name">Kurtis</span>
                </div>
              </div>
            </div>

            {/* MIDDLE ROW: MEDIUM CARDS (TOPS & LEGGINGS) */}
            <div className="gallery-row row-medium">
              <div className="category-card-item card-medium">
                <div className="card-img-wrap">
                  <img src="/assets/cat-tops.jpg" alt="Tops Style" loading="lazy" />
                  <div className="card-gradient-overlay"></div>
                </div>
                <div className="card-label-bar">
                  <span className="card-cat-name">Tops</span>
                </div>
              </div>

              <div className="category-card-item card-medium">
                <div className="card-img-wrap">
                  <img src="/assets/cat-leggings.jpg" alt="Leggings Style" loading="lazy" />
                  <div className="card-gradient-overlay"></div>
                </div>
                <div className="card-label-bar">
                  <span className="card-cat-name">Leggings</span>
                </div>
              </div>
            </div>

            {/* BOTTOM ROW: SMALL CARDS (BURQA, 3-PIECE SETS, PARTY WEAR) */}
            <div className="gallery-row row-small">
              <div className="category-card-item card-small">
                <div className="card-img-wrap">
                  <img src="/assets/cat-burqa.jpg" alt="Burqa Style" loading="lazy" />
                  <div className="card-gradient-overlay"></div>
                </div>
                <div className="card-label-bar">
                  <span className="card-cat-name">Burqa</span>
                </div>
              </div>

              <div className="category-card-item card-small">
                <div className="card-img-wrap">
                  <img src="/assets/cat-3piece.jpg" alt="3-Piece Sets Style" loading="lazy" />
                  <div className="card-gradient-overlay"></div>
                </div>
                <div className="card-label-bar">
                  <span className="card-cat-name">3-Piece Sets</span>
                </div>
              </div>

              <div className="category-card-item card-small">
                <div className="card-img-wrap">
                  <img src="/assets/cat-partywear.jpg" alt="Party Wear Style" loading="lazy" />
                  <div className="card-gradient-overlay"></div>
                </div>
                <div className="card-label-bar">
                  <span className="card-cat-name">Party Wear</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* BOTTOM TRANSITION: FLOWING BLUSH/CREAM CURVED WAVE TO SECTION 4 (KIDS WEAR) */}
      <div className="womens-bottom-curve" aria-hidden="true">
        <svg viewBox="0 0 1440 100" preserveAspectRatio="none" className="curve-wave-svg">
          <path d="M0,40 C360,100 720,20 1080,75 C1260,100 1380,40 1440,25 L1440,100 L0,100 Z" fill="#FDF8F2"></path>
        </svg>
      </div>
    </section>
  );
}
