"use client";

import Link from "next/link";

interface FooterProps {
  onOpenStoreModal?: () => void;
  onOpenSizeGuideModal?: () => void;
}

export function Footer({ onOpenStoreModal, onOpenSizeGuideModal }: FooterProps) {
  return (
    <footer className="site-footer" id="footer">
      {/* PHOTOREALISTIC BOUTIQUE BACKGROUND */}
      <img
        src="/images/footer/kamal-selections-boutique-footer-bg.jpg"
        alt=""
        className="footer-bg-image"
        aria-hidden="true"
        loading="lazy"
      />
      {/* DARK OVERLAY FOR READABILITY */}
      <div className="footer-bg-overlay" aria-hidden="true"></div>

      <div className="footer-main-container">
        <div className="footer-top-divider" aria-hidden="true"></div>
        {/* 1. TOP FOOTER BRAND AREA (HORIZONTAL SPLIT BLOCK) */}
        <div className="footer-brand-header">
          {/* LEFT: LOGO, TAGLINE & STORE LOCATION */}
          <div className="footer-brand-left">
            <Link href="/" className="footer-logo-link" aria-label="Kamal Selections Homepage">
              <img src="/brand/logo/kamal-selections-logo.png" alt="Kamal Selections Boutique Logo" className="footer-logo-img" />
            </Link>
            <p className="footer-tagline-script">Fashion for Every Woman &amp;<br />Every Little One</p>
            <span className="footer-sub-location">Women's &amp; Kids' Wear in Shadnagar</span>
          </div>

          {/* RIGHT: COMPACT FINAL INVITATION & DIRECT MAP CTA */}
          <div className="footer-brand-right">
            <div className="footer-invitation-box">
              <h3 className="invitation-heading">Come Find Your Style.</h3>
              <p className="invitation-sub">Visit Kamal Selections in Shadnagar.</p>
              <a href="https://www.google.com/maps/search/?api=1&query=Kamal+Selections+Ibrahim+Complex+Main+Road+Shadnagar+Telangana" target="_blank" rel="noopener noreferrer" className="btn btn-champagne-gold btn-pill btn-sm">
                <span>Get Directions &rarr;</span>
              </a>
            </div>
          </div>
        </div>

        <div className="footer-middle-divider" aria-hidden="true"></div>

        {/* 2. MAIN FOOTER NAVIGATION (4 COLUMNS) */}
        <nav className="footer-nav-grid" aria-label="Footer Navigation">
          {/* COLUMN 01: EXPLORE */}
          <div className="footer-nav-col">
            <h4 className="footer-col-title">EXPLORE</h4>
            <ul className="footer-links-list">
              <li><Link href="/">Home</Link></li>
              <li><Link href="/women">Women's Wear</Link></li>
              <li><Link href="/kids">Kids Wear</Link></li>
              <li><Link href="/about">About Us</Link></li>
              <li><Link href="/why-kamal-selections">Why Kamal Selections</Link></li>
            </ul>
          </div>

          {/* COLUMN 02: VISIT */}
          <div className="footer-nav-col">
            <h4 className="footer-col-title">VISIT</h4>
            <ul className="footer-links-list">
              <li><Link href="/store">Our Store</Link></li>
              <li><Link href="/contact">Contact</Link></li>
              <li><Link href="/faq">FAQ</Link></li>
              <li><Link href="/size-guide">Size Guide</Link></li>
            </ul>
          </div>

          {/* COLUMN 03: WOMEN'S WEAR */}
          <div className="footer-nav-col">
            <h4 className="footer-col-title">WOMEN'S WEAR</h4>
            <ul className="footer-links-list">
              <li><Link href="/women#dresses">Dresses</Link></li>
              <li><Link href="/women#kurtis">Kurtis</Link></li>
              <li><Link href="/women#tops">Tops</Link></li>
              <li><Link href="/women#leggings">Leggings</Link></li>
              <li><Link href="/women#burqa">Burqa</Link></li>
              <li><Link href="/women#3piece">3-Piece Sets</Link></li>
              <li><Link href="/women#partywear">Party Wear</Link></li>
            </ul>
          </div>

          {/* COLUMN 04: KIDS WEAR */}
          <div className="footer-nav-col">
            <h4 className="footer-col-title">KIDS WEAR</h4>
            <ul className="footer-links-list">
              <li><Link href="/kids#girls-clothing">Girls Wear</Link></li>
              <li><Link href="/kids#boys-clothing">Boys Wear</Link></li>
              <li><Link href="/kids#kids-frocks">Frocks</Link></li>
              <li><Link href="/kids#kids-sets">Kids Sets</Link></li>
            </ul>
          </div>
        </nav>

        <div className="footer-middle-divider" aria-hidden="true"></div>

        {/* 3. CONTACT INFORMATION STRIP WITH ELEGANT LINE ICONS */}
        <section className="footer-contact-strip" aria-label="Contact Information">
          {/* PHONE */}
          <div className="contact-strip-item">
            <div className="contact-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="#E5C378" strokeWidth="2">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
              </svg>
            </div>
            <div className="contact-text-wrap">
              <span className="contact-label">Phone</span>
              <a href="tel:8332059777" className="contact-val phone-link">8332059777</a>
            </div>
          </div>

          {/* ADDRESS */}
          <div className="contact-strip-item">
            <div className="contact-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="#E5C378" strokeWidth="2">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/>
                <circle cx="12" cy="9" r="2.5"/>
              </svg>
            </div>
            <div className="contact-text-wrap">
              <span className="contact-label">Address</span>
              <address className="contact-val">Ibrahim Complex, Main Road, Shadnagar, Telangana</address>
            </div>
          </div>

          {/* HOURS */}
          <div className="contact-strip-item">
            <div className="contact-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="#E5C378" strokeWidth="2">
                <circle cx="12" cy="12" r="10"/>
                <polyline points="12 6 12 12 16 14"/>
              </svg>
            </div>
            <div className="contact-text-wrap">
              <span className="contact-label">Hours</span>
              <span className="contact-val">10 AM — 9 PM · Open Daily</span>
            </div>
          </div>
        </section>

        {/* 4. SOCIAL MEDIA STRIP */}
        <section className="footer-social-strip" aria-label="Social Media Links">
          <span className="social-strip-title">FOLLOW KAMAL SELECTIONS</span>
          <a href="https://www.instagram.com/kamal_selection_/" target="_blank" rel="noopener noreferrer" className="social-insta-link" aria-label="Follow Kamal Selections on Instagram">
            <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
            </svg>
            <span>@kamal_selection_</span>
          </a>
        </section>

        <div className="footer-thin-divider" aria-hidden="true"></div>

        {/* 5. LEGAL NAVIGATION & BOTTOM BAR */}
        <div className="footer-bottom-bar">
          <div className="footer-legal-links">
            <Link href="/privacy-policy" className="legal-link">Privacy Policy</Link>
            <span className="legal-dot">•</span>
            <Link href="/terms" className="legal-link">Terms</Link>
          </div>

          <div className="footer-copyright-wrap">
            <span className="copyright-text">© 2026 Kamal Selections. All rights reserved.</span>
            <span className="copyright-location">Shadnagar, Telangana</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
