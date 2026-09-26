"use client";

export function LatestStyles() {
  return (
    <section className="section-latest-styles" id="latest-styles">
      {/* GOLD BOTANICAL CORNER ACCENTS */}
      <div className="botanical-corner corner-top-left" aria-hidden="true">
        <svg viewBox="0 0 200 200" className="botanical-line-svg">
          <g stroke="url(#goldGrad)" strokeWidth="1.2" fill="none" opacity="0.3">
            <path d="M 10,10 Q 70,80 150,40 T 180,120" />
            <path d="M 30,10 C 50,40 80,60 50,90 C 30,70 20,40 30,10 Z" fill="#E5C378" fillOpacity="0.1" />
          </g>
        </svg>
      </div>

      <div className="latest-styles-container">
        {/* SECTION HEADER */}
        <div className="latest-header-wrap text-center animate-on-scroll fade-in">
          <div className="showcase-eyebrow-wrap justify-center">
            <span className="eyebrow-accent-line gold-line"></span>
            <span className="showcase-eyebrow-text gold-text">LATEST STYLES</span>
            <span className="eyebrow-accent-line gold-line"></span>
          </div>

          <h2 className="latest-main-heading animate-on-scroll slide-up">
            See What’s New
          </h2>

          <p className="latest-supporting-text animate-on-scroll slide-up delay-1">
            Follow Kamal Selections for fresh fashion inspiration, new styles and everyday looks.
          </p>

          {/* INSTAGRAM HANDLE BADGE */}
          <a href="https://www.instagram.com/kamal_selection_/" target="_blank" rel="noopener noreferrer" className="insta-handle-badge animate-on-scroll fade-in delay-2">
            <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
            </svg>
            <span>@kamal_selection_</span>
          </a>
        </div>

        {/* ASYMMETRICAL EDITORIAL GALLERY (6 IMAGES) */}
        <div className="latest-gallery-asymmetric animate-on-scroll stagger-children delay-2">
          {/* ITEM 1: LARGE PORTRAIT (FEATURED) */}
          <div className="gallery-tile tile-large-portrait">
            <div className="tile-img-wrapper">
              <img src="/assets/cat-partywear.jpg" alt="Kamal Selections Party Wear Collection" loading="lazy" />
              <div className="tile-overlay">
                <div className="tile-overlay-content">
                  <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="#E5C378" strokeWidth="2">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                  </svg>
                  <span className="tile-category-tag">Party Wear</span>
                </div>
              </div>
            </div>
          </div>

          {/* ITEM 2: MEDIUM PORTRAIT */}
          <div className="gallery-tile tile-medium-1">
            <div className="tile-img-wrapper">
              <img src="/assets/cat-dresses.jpg" alt="Kamal Selections Dresses & Kurtis Collection" loading="lazy" />
              <div className="tile-overlay">
                <div className="tile-overlay-content">
                  <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="#E5C378" strokeWidth="2">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                  </svg>
                  <span className="tile-category-tag">Women’s Wear</span>
                </div>
              </div>
            </div>
          </div>

          {/* ITEM 3: MEDIUM PORTRAIT */}
          <div className="gallery-tile tile-medium-2">
            <div className="tile-img-wrapper">
              <img src="/assets/center-kids-hero.jpg" alt="Kamal Selections Kids Wear Collection" loading="lazy" />
              <div className="tile-overlay">
                <div className="tile-overlay-content">
                  <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="#E5C378" strokeWidth="2">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                  </svg>
                  <span className="tile-category-tag">Kids Wear</span>
                </div>
              </div>
            </div>
          </div>

          {/* ITEM 4: LANDSCAPE BANNER */}
          <div className="gallery-tile tile-landscape">
            <div className="tile-img-wrapper">
              <img src="/assets/hero-bg-alt.jpg" alt="Kamal Selections New Style Collection" loading="lazy" />
              <div className="tile-overlay">
                <div className="tile-overlay-content">
                  <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="#E5C378" strokeWidth="2">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                  </svg>
                  <span className="tile-category-tag">New Style</span>
                </div>
              </div>
            </div>
          </div>

          {/* ITEM 5: SUPPORTING IMAGE */}
          <div className="gallery-tile tile-support-1">
            <div className="tile-img-wrapper">
              <img src="/assets/cat-kurtis.jpg" alt="Kamal Selections Designer Kurtis" loading="lazy" />
              <div className="tile-overlay">
                <div className="tile-overlay-content">
                  <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="#E5C378" strokeWidth="2">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                  </svg>
                  <span className="tile-category-tag">Kurtis</span>
                </div>
              </div>
            </div>
          </div>

          {/* ITEM 6: SUPPORTING DETAIL IMAGE */}
          <div className="gallery-tile tile-support-2">
            <div className="tile-img-wrapper">
              <img src="/assets/collage-fabric.jpg" alt="Kamal Selections Fabric Detail" loading="lazy" />
              <div className="tile-overlay">
                <div className="tile-overlay-content">
                  <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="#E5C378" strokeWidth="2">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                  </svg>
                  <span className="tile-category-tag">Fabric Detail</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* INSTAGRAM CTA BLOCK BELOW GALLERY */}
        <div className="latest-cta-footer text-center animate-on-scroll fade-in delay-3">
          <span className="journey-sub-title">FOLLOW OUR JOURNEY</span>
          <span className="journey-handle">@kamal_selection_</span>
          <div className="cta-btn-wrapper">
            <a href="https://www.instagram.com/kamal_selection_/" target="_blank" rel="noopener noreferrer" className="btn btn-gold btn-pill">
              <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
              </svg>
              <span>Follow on Instagram</span>
              <svg className="btn-arrow" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.2">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* BOTTOM TRANSITION: SOFT CREAM CURVED WAVE TOWARD SECTION 8 ("QUESTIONS?") */}
      <div className="latest-bottom-curve" aria-hidden="true">
        <svg viewBox="0 0 1440 90" preserveAspectRatio="none" className="curve-wave-svg">
          <path d="M0,45 C320,90 680,10 1040,65 C1240,90 1380,35 1440,20 L1440,90 L0,90 Z" fill="#FDF8F2"></path>
        </svg>
      </div>
    </section>
  );
}
