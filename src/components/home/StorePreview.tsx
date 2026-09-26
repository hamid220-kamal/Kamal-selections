"use client";

export function StorePreview() {
  return (
    <section className="section-our-store" id="our-store">
      {/* SUBTLE ARCHITECTURAL LINE ACCENTS */}
      <div className="botanical-corner corner-top-left" aria-hidden="true">
        <svg viewBox="0 0 200 200" className="botanical-line-svg">
          <g stroke="#CFA753" strokeWidth="1.2" fill="none" opacity="0.25">
            <path d="M 10,10 L 190,10 L 190,190" />
            <circle cx="10" cy="10" r="4" fill="#CFA753" fillOpacity="0.3" />
          </g>
        </svg>
      </div>

      <div className="store-main-container">
        {/* MAIN SPLIT COMPOSITION: LEFT IMAGE PLACEHOLDER (~55%) & RIGHT INFO CARD (~45%) */}
        <div className="store-split-grid">
          {/* LEFT ~55%: LARGE REAL STORE PHOTO PLACEHOLDER AREA */}
          <div className="store-photo-column animate-on-scroll slide-up">
            <div className="real-store-photo-container">
              {/* CLEANLY LABELED PLACEHOLDER FOR REAL STORE PHOTO */}
              <div className="store-photo-placeholder">
                <div className="placeholder-icon">
                  <svg viewBox="0 0 24 24" width="48" height="48" fill="none" stroke="#CFA753" strokeWidth="1.5">
                    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
                    <polyline points="9 22 9 12 15 12 15 22"/>
                  </svg>
                </div>
                <span className="placeholder-main-label">YOUR REAL STORE PHOTO HERE</span>
                <span className="placeholder-sub-info">Storefront Exterior • Signboard • Interior View</span>
              </div>

              {/* OPTIONAL SMALL PILL TAG */}
              <div className="store-location-badge">
                <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="#CFA753" strokeWidth="2">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/>
                  <circle cx="12" cy="9" r="2.5" fill="#CFA753"/>
                </svg>
                <span>KAMAL SELECTIONS · SHADNAGAR</span>
              </div>
            </div>
          </div>

          {/* RIGHT ~45%: OVERLAPPING LOCATION INFORMATION CARD */}
          <div className="store-info-column animate-on-scroll slide-left delay-1">
            <div className="store-info-card">
              {/* EYEBROW */}
              <div className="showcase-eyebrow-wrap">
                <span className="eyebrow-accent-line"></span>
                <span className="showcase-eyebrow-text">VISIT OUR STORE</span>
                <span className="eyebrow-accent-line"></span>
              </div>

              {/* MAIN HEADING */}
              <h2 className="store-card-heading">
                Come Find Your<br />
                <span className="serif-sub-title">Next Style.</span>
              </h2>

              <p className="store-brand-sub">Kamal Selections — Shadnagar</p>

              {/* TYPOGRAPHIC INFORMATION ROWS */}
              <div className="store-info-rows">
                {/* 📍 ADDRESS */}
                <div className="info-block">
                  <div className="info-block-icon" aria-hidden="true">📍</div>
                  <div className="info-block-text">
                    <span className="info-label">Store Address</span>
                    <address className="info-val">
                      Ibrahim Complex, Main Road,<br />
                      Shadnagar, Telangana
                    </address>
                  </div>
                </div>

                {/* 🕐 STORE HOURS */}
                <div className="info-block">
                  <div className="info-block-icon" aria-hidden="true">🕐</div>
                  <div className="info-block-text">
                    <span className="info-label">Store Hours</span>
                    <span className="info-val">Open Daily: 10 AM — 9 PM</span>
                  </div>
                </div>

                {/* ☎ CONTACT */}
                <div className="info-block">
                  <div className="info-block-icon" aria-hidden="true">☎</div>
                  <div className="info-block-text">
                    <span className="info-label">Call Store</span>
                    <a href="tel:8332059777" className="info-val phone-link">8332059777</a>
                  </div>
                </div>
              </div>

              {/* CTAS: PRIMARY DIRECTIONS & SECONDARY CALL */}
              <div className="store-cta-group">
                <a href="https://www.google.com/maps/search/?api=1&query=Kamal+Selections+Ibrahim+Complex+Main+Road+Shadnagar+Telangana" target="_blank" rel="noopener noreferrer" className="btn btn-burgundy btn-pill">
                  <span>Get Directions</span>
                  <svg className="btn-arrow" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.2">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </a>

                <a href="tel:8332059777" className="btn btn-outline-burgundy btn-pill">
                  <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                  </svg>
                  <span>Call Store</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* MAP PREVIEW AREA */}
        <div className="store-map-preview-wrap animate-on-scroll fade-in delay-2">
          <div className="map-card-container">
            <iframe 
              className="google-map-iframe"
              title="Kamal Selections Shadnagar Map Location"
              src="https://maps.google.com/maps?q=Shadnagar,%20Telangana&t=&z=15&ie=UTF8&iwloc=&output=embed"
              loading="lazy"
              allowFullScreen>
            </iframe>

            <div className="map-overlay-banner">
              <div className="map-banner-info">
                <span className="map-banner-title">Kamal Selections · Ibrahim Complex</span>
                <span className="map-banner-address">Main Road, Shadnagar, Telangana</span>
              </div>
              <a href="https://www.google.com/maps/search/?api=1&query=Kamal+Selections+Ibrahim+Complex+Main+Road+Shadnagar+Telangana" target="_blank" rel="noopener noreferrer" className="btn btn-gold btn-sm">
                <span>Get Directions &rarr;</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* BOTTOM BURGUNDY-TO-CREAM TRANSITION TOWARD SECTION 7 ("LATEST STYLES") */}
      <div className="store-bottom-curve" aria-hidden="true">
        <svg viewBox="0 0 1440 90" preserveAspectRatio="none" className="curve-wave-svg">
          <path d="M0,45 C320,90 680,10 1040,65 C1240,90 1380,35 1440,20 L1440,90 L0,90 Z" fill="#2A0717"></path>
        </svg>
      </div>
    </section>
  );
}
