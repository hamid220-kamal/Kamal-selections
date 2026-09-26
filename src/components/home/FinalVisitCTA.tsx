"use client";

export function FinalVisitCTA() {
  return (
    <section className="section-final-visit-cta" id="visit-us">
      {/* BACKGROUND EDITORIAL CAMPAIGN PHOTO & DEEP BURGUNDY OVERLAY */}
      <div className="final-cta-bg-wrapper" aria-hidden="true">
        <img src="/assets/final-cta-bg.jpg" alt="Kamal Selections Fashion Campaign Visual" className="final-cta-bg-img" loading="lazy" />
        <div className="final-cta-burgundy-overlay"></div>
      </div>

      {/* SUBTLE CHAMPAGNE GOLD BOTANICAL LINE ACCENT FRAME */}
      <div className="final-cta-frame-accent" aria-hidden="true">
        <svg viewBox="0 0 600 400" width="100%" height="100%" preserveAspectRatio="none">
          <path d="M 30,30 L 570,30 L 570,370 L 30,370 Z" stroke="#E5C378" strokeOpacity="0.18" strokeWidth="1" fill="none"/>
          <path d="M 50,50 Q 300,20 550,50" stroke="url(#goldGradFinal)" strokeOpacity="0.35" strokeWidth="1.2" fill="none"/>
          <circle cx="50" cy="50" r="3" fill="#E5C378" fillOpacity="0.5"/>
          <circle cx="550" cy="50" r="3" fill="#E5C378" fillOpacity="0.5"/>
          <defs>
            <linearGradient id="goldGradFinal" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#CFA753"/>
              <stop offset="50%" stopColor="#E5C378"/>
              <stop offset="100%" stopColor="#C42766"/>
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* CENTER CONTENT CONTAINER */}
      <div className="final-cta-center-content">
        {/* SMALL EYEBROW */}
        <div className="showcase-eyebrow-wrap justify-center animate-on-scroll fade-in">
          <span className="eyebrow-accent-line gold-line"></span>
          <span className="showcase-eyebrow-text gold-text">KAMAL SELECTIONS · SHADNAGAR</span>
          <span className="eyebrow-accent-line gold-line"></span>
        </div>

        {/* MAIN HEADING */}
        <h2 className="final-visit-heading animate-on-scroll slide-up delay-1">
          Your Next Style<br />
          <span className="champagne-serif-accent">Starts Here.</span>
        </h2>

        {/* SUPPORTING COPY */}
        <p className="final-visit-supporting animate-on-scroll slide-up delay-2">
          Discover women's and kids' fashion at Kamal Selections.
        </p>

        <p className="final-visit-invitation animate-on-scroll slide-up delay-2">
          Visit us in Shadnagar.
        </p>

        {/* CTA BUTTONS GROUP */}
        <div className="final-visit-cta-group animate-on-scroll fade-in delay-3">
          {/* PRIMARY CTA: LARGE CHAMPAGNE/CREAM BUTTON */}
          <a href="https://www.google.com/maps/search/?api=1&query=Kamal+Selections+Ibrahim+Complex+Main+Road+Shadnagar+Telangana" target="_blank" rel="noopener noreferrer" className="btn btn-champagne-gold btn-pill btn-lg">
            <span>Get Directions</span>
            <svg className="btn-arrow" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.2">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </a>

          {/* SECONDARY CTA: MINIMAL OUTLINED BUTTON */}
          <a href="tel:8332059777" className="btn btn-outline-cream btn-pill btn-lg">
            <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
            </svg>
            <span>Call 8332059777</span>
          </a>
        </div>

        {/* SMALL SUBTLE INFORMATION LINE */}
        <div className="final-visit-info-line animate-on-scroll fade-in delay-4">
          <span className="info-address">Ibrahim Complex, Main Road, Shadnagar</span>
          <span className="info-dot">•</span>
          <span className="info-hours">Open Daily · 10 AM — 9 PM</span>
        </div>
      </div>
    </section>
  );
}
