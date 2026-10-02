import Image from "next/image";

interface BrandIntroductionProps {
  onOpenStoreModal?: () => void;
}

export function BrandIntroduction({ onOpenStoreModal }: BrandIntroductionProps) {
  return (
    <section className="section-brand-intro" id="about-us">
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

      <div className="intro-container">
        {/* LEFT COLUMN: CONTENT */}
        <div className="intro-content-col">
          {/* EYEBROW WITH ACCENT LINES */}
          <div className="intro-eyebrow-wrap animate-on-scroll fade-in">
            <span className="eyebrow-accent-line"></span>
            <span className="intro-eyebrow-text">STYLE THAT FITS YOUR EVERYDAY</span>
            <span className="eyebrow-accent-line"></span>
          </div>

          {/* LARGE SERIF HEADING */}
          <h2 className="intro-heading animate-on-scroll slide-up">
            KAMAL SELECTIONS
          </h2>

          {/* SUPPORTING COPY */}
          <p className="intro-description animate-on-scroll slide-up delay-1">
            Kamal Selections brings together women’s and kids’ fashion in Shadnagar, with styles designed for everyday wear and special occasions. From timeless classics to trendy looks, we help you and your little ones dress with confidence.
          </p>

          {/* ELEGANT SCRIPT BRAND STATEMENT */}
          <div className="intro-script-statement animate-on-scroll slide-up delay-2">
            <span className="script-text">Fashion for Every Woman &amp;<br />Every Little One</span>
            <span className="script-underline"></span>
          </div>

          {/* FOUR MINIMAL FEATURE ITEMS */}
          <div className="intro-features-grid animate-on-scroll stagger-children delay-3">
            <div className="feature-item">
              <div className="feature-icon-circle">
                <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <path d="M8 4l4 2 4-2 2 3-3 2v11H9V9L6 7l2-3z" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M9 14h6" strokeLinecap="round"/>
                </svg>
              </div>
              <span className="feature-label">Women’s<br />Wear</span>
            </div>

            <div className="feature-item">
              <div className="feature-icon-circle">
                <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <circle cx="12" cy="12" r="9"/>
                  <circle cx="9" cy="10" r="1" fill="currentColor"/>
                  <circle cx="15" cy="10" r="1" fill="currentColor"/>
                  <path d="M9 15c.5 1.5 2 2 3 2s2.5-.5 3-2" strokeLinecap="round"/>
                </svg>
              </div>
              <span className="feature-label">Kids<br />Wear</span>
            </div>

            <div className="feature-item">
              <div className="feature-icon-circle">
                <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <path d="M12 2l2.4 6.6L21 11l-6.6 2.4L12 20l-2.4-6.6L3 11l6.6-2.4L12 2z"/>
                </svg>
              </div>
              <span className="feature-label">Trendy<br />Styles</span>
            </div>

            <div className="feature-item">
              <div className="feature-icon-circle">
                <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                </svg>
              </div>
              <span className="feature-label">Quality<br />Fashion</span>
            </div>
          </div>

          {/* ABOUT US BUTTON */}
          <div className="intro-cta-wrap animate-on-scroll fade-in delay-4">
            <button className="btn btn-burgundy btn-pill" id="open-store-modal-intro" onClick={onOpenStoreModal}>
              <span>About Us</span>
              <svg className="btn-arrow" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.2">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </button>
          </div>
        </div>

        {/* RIGHT COLUMN: EDITORIAL VISUAL IN ARCHED FRAME */}
        <div className="intro-visual-col animate-on-scroll slide-left">
          <div className="arched-frame-wrapper">
            <div className="arched-image-container">
              <Image
                src="/images/home/kamal-selections-festive-ethnic-collection.jpg"
                alt="Kamal Selections - Festive Women's Fashion in Shadnagar"
                className="arched-fashion-img"
                width={600}
                height={750}
                sizes="(max-width: 640px) 92vw, (max-width: 1024px) 45vw, 550px"
                loading="lazy"
              />
              <div className="arched-img-overlay" aria-hidden="true"></div>
            </div>

            {/* ELEGANT CIRCULAR BADGE NEAR TOP-RIGHT */}
            <div className="badge-since-2021">
              <div className="badge-inner">
                <svg viewBox="0 0 40 20" className="badge-lotus-icon" width="28" height="14" fill="none" stroke="#CFA753" strokeWidth="1.5">
                  <path d="M 20,2 C 15,7 12,14 20,18 C 28,14 25,7 20,2 Z" fill="#CFA753" fillOpacity="0.25" />
                  <path d="M 20,18 C 14,15 8,10 6,5 C 13,6 17,12 20,18 Z" />
                  <path d="M 20,18 C 26,15 32,10 34,5 C 27,6 23,12 20,18 Z" />
                </svg>
                <span className="badge-sub">Store</span>
                <span className="badge-year">Shadnagar</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* BOTTOM SECTION TRANSITION: SUBTLE CURVED WAVE TO SECTION 3 */}
      <div className="intro-bottom-curve" aria-hidden="true">
        <svg viewBox="0 0 1440 90" preserveAspectRatio="none" className="curve-wave-svg">
          <path d="M0,45 C360,90 720,10 1080,60 C1260,85 1380,35 1440,20 L1440,90 L0,90 Z" fill="#FDF8F2"></path>
        </svg>
      </div>
    </section>
  );
}
