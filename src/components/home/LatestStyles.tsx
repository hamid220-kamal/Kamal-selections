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
        {/* ASYMMETRICAL EDITORIAL SOCIAL GALLERY (6 POSTS) */}
        <div className="latest-gallery-asymmetric animate-on-scroll stagger-children delay-2">
          {/* ITEM 1: LARGE PORTRAIT (FEATURED) */}
          <div className="gallery-tile tile-large-portrait">
            <a
              href="https://www.instagram.com/kamal_selection_/"
              target="_blank"
              rel="noopener noreferrer"
              className="tile-img-wrapper bg-gradient-to-b from-[#2A050E] to-[#160207] p-7 flex flex-col justify-between h-full border border-[#E5C378]/35 rounded-2xl block text-white no-underline transition-all duration-300 hover:border-[#D4AF37] hover:shadow-2xl"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-full bg-[#E5C378]/20 border border-[#E5C378]/50 flex items-center justify-center text-[#E5C378]">
                    <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                  </div>
                  <div>
                    <span className="text-xs font-bold text-white block">@kamal_selection_</span>
                    <span className="text-[10px] text-[#E5C378]">Ibrahim Complex · Shadnagar</span>
                  </div>
                </div>
                <span className="text-[10px] font-bold px-2.5 py-1 rounded-full bg-[#E5C378]/20 text-[#F8E5BA] border border-[#E5C378]/40">
                  FEATURED
                </span>
              </div>

              <div className="my-8">
                <span className="text-xs font-semibold tracking-[0.2em] text-[#E5C378] uppercase block mb-2">
                  CURATED INSPIRATION
                </span>
                <h3 className="font-serif text-3xl font-bold text-white leading-tight mb-3">
                  Festive Celebrations &amp; Heritage Silhouettes.
                </h3>
                <p className="text-sm text-[#F8E5BA]/90 leading-relaxed">
                  Discover rich bridal lehengas, anarkalis and celebratory wedding edits curated for the modern Indian family.
                </p>
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-[#E5C378]/25 text-xs text-[#E5C378]">
                <span className="font-semibold">#FestiveCollection #Shadnagar</span>
                <span>View on Instagram →</span>
              </div>
            </a>
          </div>

          {/* ITEM 2: MEDIUM 1 */}
          <div className="gallery-tile tile-medium-1">
            <a
              href="https://www.instagram.com/kamal_selection_/"
              target="_blank"
              rel="noopener noreferrer"
              className="tile-img-wrapper bg-gradient-to-b from-[#25040C] to-[#140207] p-6 flex flex-col justify-between h-full border border-[#E5C378]/30 rounded-2xl block text-white no-underline transition-all duration-300 hover:border-[#D4AF37]"
            >
              <div className="flex items-center justify-between text-xs">
                <span className="text-[10px] font-bold tracking-wider text-[#E5C378] uppercase">WOMEN&apos;S LOOKBOOK</span>
                <span className="text-[#F8E5BA]/60">Fresh Picks</span>
              </div>
              <div className="my-4">
                <h4 className="font-serif text-xl font-bold text-white mb-1.5">Graceful Silk Drapes</h4>
                <p className="text-xs text-[#F8E5BA]/80 leading-relaxed">Lightweight Chanderi and pure georgette fabrics designed for easy elegance.</p>
              </div>
              <span className="text-xs text-[#E5C378] font-semibold">#EthnicElegance →</span>
            </a>
          </div>

          {/* ITEM 3: MEDIUM 2 */}
          <div className="gallery-tile tile-medium-2">
            <a
              href="https://www.instagram.com/kamal_selection_/"
              target="_blank"
              rel="noopener noreferrer"
              className="tile-img-wrapper bg-gradient-to-b from-[#1E030A] to-[#100105] p-6 flex flex-col justify-between h-full border border-[#E5C378]/30 rounded-2xl block text-white no-underline transition-all duration-300 hover:border-[#D4AF37]"
            >
              <div className="flex items-center justify-between text-xs">
                <span className="text-[10px] font-bold tracking-wider text-[#E5C378] uppercase">KIDS CELEBRATION</span>
                <span className="text-[#F8E5BA]/60">Playful &amp; Bright</span>
              </div>
              <div className="my-4">
                <h4 className="font-serif text-xl font-bold text-white mb-1.5">Little Looks, Big Smiles</h4>
                <p className="text-xs text-[#F8E5BA]/80 leading-relaxed">Comfort-first festive outfits tailored so children can celebrate without fuss.</p>
              </div>
              <span className="text-xs text-[#E5C378] font-semibold">#KidsFestiveWear →</span>
            </a>
          </div>

          {/* ITEM 4: LANDSCAPE BANNER */}
          <div className="gallery-tile tile-landscape">
            <a
              href="https://www.instagram.com/kamal_selection_/"
              target="_blank"
              rel="noopener noreferrer"
              className="tile-img-wrapper bg-gradient-to-r from-[#320612] via-[#20040A] to-[#140206] p-7 flex flex-col sm:flex-row items-center justify-between gap-6 h-full border border-[#E5C378]/35 rounded-2xl block text-white no-underline transition-all duration-300 hover:border-[#D4AF37]"
            >
              <div className="max-w-md">
                <div className="inline-flex items-center gap-2 mb-2">
                  <span className="w-6 h-px bg-[#E5C378]"></span>
                  <span className="text-[10px] font-bold tracking-[0.24em] text-[#E5C378] uppercase">COMMUNITY STORIES</span>
                </div>
                <h3 className="font-serif text-2xl font-bold text-white mb-2">Dressing Generations in Shadnagar.</h3>
                <p className="text-xs text-[#F8E5BA]/90 leading-relaxed">
                  Tag @kamal_selection_ on Instagram in your celebration photos to be featured on our community board.
                </p>
              </div>
              <span className="btn btn-gold btn-sm btn-pill shrink-0">Follow Along →</span>
            </a>
          </div>

          {/* ITEM 5: SUPPORTING 1 */}
          <div className="gallery-tile tile-support-1">
            <a
              href="https://www.instagram.com/kamal_selection_/"
              target="_blank"
              rel="noopener noreferrer"
              className="tile-img-wrapper bg-gradient-to-b from-[#20040A] to-[#120105] p-5 flex flex-col justify-between h-full border border-[#E5C378]/25 rounded-2xl block text-white no-underline transition-all duration-300 hover:border-[#D4AF37]"
            >
              <span className="text-[10px] font-bold text-[#E5C378] uppercase tracking-wider">KURTI EDIT</span>
              <h4 className="font-serif text-lg font-bold text-white">Daily Chic</h4>
              <span className="text-[11px] text-[#F8E5BA]/75">Breathable Cotton Kurtis →</span>
            </a>
          </div>

          {/* ITEM 6: SUPPORTING 2 */}
          <div className="gallery-tile tile-support-2">
            <a
              href="https://www.instagram.com/kamal_selection_/"
              target="_blank"
              rel="noopener noreferrer"
              className="tile-img-wrapper bg-gradient-to-b from-[#25050D] to-[#140207] p-5 flex flex-col justify-between h-full border border-[#E5C378]/25 rounded-2xl block text-white no-underline transition-all duration-300 hover:border-[#D4AF37]"
            >
              <span className="text-[10px] font-bold text-[#E5C378] uppercase tracking-wider">STORE UPDATE</span>
              <h4 className="font-serif text-lg font-bold text-white">New Arrivals Weekly</h4>
              <span className="text-[11px] text-[#E5C378]">Visit Today →</span>
            </a>
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
