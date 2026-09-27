"use client";

import Link from "next/link";

interface WhyKamalSelectionsProps {
  onOpenStoreModal?: () => void;
}

export function WhyKamalSelections({ onOpenStoreModal }: WhyKamalSelectionsProps) {
  return (
    <section className="section-why-us" id="why-us">
      {/* GOLD BOTANICAL LINE-ART ACCENTS */}
      <div className="botanical-corner corner-top-left" aria-hidden="true">
        <svg viewBox="0 0 200 200" className="botanical-line-svg">
          <g stroke="url(#goldGrad)" strokeWidth="1.2" fill="none" opacity="0.35">
            <path d="M 10,10 Q 70,80 150,40 T 180,120" />
            <path d="M 30,10 C 50,40 80,60 50,90 C 30,70 20,40 30,10 Z" fill="#E5C378" fillOpacity="0.12" />
          </g>
        </svg>
      </div>

      <div className="botanical-corner corner-bottom-right" aria-hidden="true">
        <svg viewBox="0 0 200 200" className="botanical-line-svg">
          <g stroke="url(#goldGrad)" strokeWidth="1.2" fill="none" opacity="0.35">
            <path d="M 190,190 Q 120,130 60,160 T 20,80" />
          </g>
        </svg>
      </div>

      <div className="why-us-container">
        {/* 1. LEFT ZONE: STATEMENT TYPOGRAPHY & CTA */}
        <div className="why-content-col">
          {/* EYEBROW */}
          <div className="why-eyebrow-wrap animate-on-scroll fade-in">
            <span className="eyebrow-accent-line gold-line"></span>
            <span className="why-eyebrow-text">WHY KAMAL SELECTIONS</span>
            <span className="eyebrow-accent-line gold-line"></span>
          </div>

          {/* MAIN HEADING */}
          <h2 className="why-main-heading animate-on-scroll slide-up">
            Style That Fits<br />
            <span className="gold-text-gradient">Your Budget.</span>
          </h2>

          {/* SUPPORTING COPY */}
          <p className="why-supporting-text animate-on-scroll slide-up delay-1">
            Discover women's and kids' fashion with a focus on variety, everyday style and value — right here in Shadnagar.
          </p>

          {/* CTA BUTTONS GROUP */}
          <div className="why-cta-group animate-on-scroll fade-in delay-3">
            <button className="btn btn-gold btn-pill" id="open-store-modal-why" onClick={onOpenStoreModal}>
              <span>Discover Our Store</span>
              <svg className="btn-arrow" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.2">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </button>

            <Link href="/women" className="secondary-text-link">
              <span>Explore Our Collections</span>
              <span className="link-underline"></span>
            </Link>
          </div>
        </div>

        {/* 2. CENTER ZONE: FASHION DETAILS COLLAGE */}
        <div className="why-collage-col animate-on-scroll slide-up delay-1">
          <div className="fashion-collage-grid">
            <div className="collage-item collage-1">
              <img src="/assets/collage-fabric.jpg" alt="Fine Indian embroidery detail" loading="lazy" />
              <div className="collage-border-frame"></div>
            </div>

            <div className="collage-item collage-2">
              <img src="/assets/collage-kurti.jpg" alt="Designer Kurti pattern detail" loading="lazy" />
              <div className="collage-border-frame"></div>
            </div>

            <div className="collage-item collage-3">
              <img src="/assets/collage-kids.jpg" alt="Kids festive outfit detail" loading="lazy" />
              <div className="collage-border-frame"></div>
            </div>

            <div className="collage-item collage-4">
              <img src="/assets/collage-styling.jpg" alt="Ethnic styling & sequins detail" loading="lazy" />
              <div className="collage-border-frame"></div>
            </div>
          </div>
        </div>

        {/* 3. RIGHT ZONE: FOUR REASON CARDS */}
        <div className="why-reasons-col animate-on-scroll slide-left delay-2">
          <div className="reasons-cards-wrapper">
            {/* REASON 01 */}
            <div className="reason-card-item">
              <div className="reason-header">
                <span className="reason-number">01</span>
                <h3 className="reason-title">Value-Focused</h3>
              </div>
              <p className="reason-desc">Fashion options designed with everyday budgets in mind.</p>
              <div className="reason-divider"></div>
            </div>

            {/* REASON 02 */}
            <div className="reason-card-item">
              <div className="reason-header">
                <span className="reason-number">02</span>
                <h3 className="reason-title">Women + Kids</h3>
              </div>
              <p className="reason-desc">Shop women's and kids' clothing in one convenient destination.</p>
              <div className="reason-divider"></div>
            </div>

            {/* REASON 03 */}
            <div className="reason-card-item">
              <div className="reason-header">
                <span className="reason-number">03</span>
                <h3 className="reason-title">Everyday + Occasion</h3>
              </div>
              <p className="reason-desc">Styles for everyday dressing, celebrations and special occasions.</p>
              <div className="reason-divider"></div>
            </div>

            {/* REASON 04 */}
            <div className="reason-card-item">
              <div className="reason-header">
                <span className="reason-number">04</span>
                <h3 className="reason-title">Local &amp; Convenient</h3>
              </div>
              <p className="reason-desc">Find women's and kids' fashion right here in Shadnagar.</p>
            </div>
          </div>
        </div>
      </div>

      {/* BOTTOM TRANSITION: CURVED WAVE TOWARD SECTION 6 ("OUR STORE") */}
      <div className="why-bottom-curve" aria-hidden="true">
        <svg viewBox="0 0 1440 90" preserveAspectRatio="none" className="curve-wave-svg">
          <path d="M0,45 C320,90 680,10 1040,65 C1240,90 1380,35 1440,20 L1440,90 L0,90 Z" fill="#FDF8F2"></path>
        </svg>
      </div>
    </section>
  );
}
