"use client";

import Link from "next/link";
import Image from "next/image";
import { brandData } from "@/data/brand";

interface FooterProps {
  onOpenStoreModal?: () => void;
  onOpenSizeGuideModal?: () => void;
}

export function Footer({ onOpenStoreModal, onOpenSizeGuideModal }: FooterProps) {
  const scrollToTop = () => {
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <footer className="site-footer" id="footer">
      {/* PHOTOREALISTIC BOUTIQUE BACKGROUND */}
      <Image
        src="/images/footer/kamal-selections-boutique-footer-bg.jpg"
        alt=""
        className="footer-bg-image"
        aria-hidden="true"
        fill
        sizes="100vw"
        quality={75}
      />
      {/* DARK LUXURY OVERLAY FOR MAXIMUM CONTRAST */}
      <div className="footer-bg-overlay" aria-hidden="true"></div>

      <div className="footer-main-container">
        
        {/* 1. TOP BRAND SHOWCASE HEADER */}
        <div className="footer-top-bar">
          <div className="footer-brand-summary">
            <Link href="/" className="footer-logo-link" aria-label="Kamal Selections Homepage">
              <Image
                src="/brand/logo/kamal-selections-logo.png"
                alt="Kamal Selections Boutique Logo"
                className="footer-logo-img"
                width={130}
                height={52}
              />
            </Link>
            <p className="footer-motto">
              Feel trendy. Feel authentic. — <span className="text-[#E5C378]">Shadnagar</span>
            </p>
          </div>

          <div className="footer-actions-wrap">
            <a
              href={brandData.social.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="footer-insta-pill"
              aria-label="Follow Kamal Selections on Instagram"
            >
              <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
              <span>@kamal_selection_</span>
            </a>

            <button
              onClick={onOpenStoreModal}
              className="btn btn-gold btn-sm btn-pill"
              id="footer-store-modal-trigger"
            >
              <span>Store Info &amp; Hours</span>
            </button>
          </div>
        </div>

        <div className="footer-divider-line" aria-hidden="true"></div>

        {/* 2. MAIN 4-COLUMN UNIFIED CONTENT GRID */}
        <div className="footer-columns-grid">
          
          {/* COLUMN 1: ABOUT & PROMISE */}
          <div className="footer-column">
            <h4 className="footer-heading">ABOUT THE STORE</h4>
            <p className="footer-about-text">
              Kamal Selections is Shadnagar&apos;s trusted fashion destination offering handpicked women&apos;s ethnic wear, designer dresses, kurtis, and comfortable, vibrant clothing for children.
            </p>
            <div className="footer-timing-badge">
              <span className="timing-dot"></span>
              <span>Open Daily: 10:00 AM – 9:00 PM</span>
            </div>
          </div>

          {/* COLUMN 2: WOMEN'S & KIDS' COLLECTIONS */}
          <div className="footer-column">
            <h4 className="footer-heading">COLLECTIONS</h4>
            <ul className="footer-nav-list">
              <li><Link href="/women">Women&apos;s Ethnic Wear</Link></li>
              <li><Link href="/women#kurtis">Embroidered Kurtis</Link></li>
              <li><Link href="/women#dresses">Festive Dresses &amp; Gowns</Link></li>
              <li><Link href="/women#3piece-sets">Co-ord 3-Piece Sets</Link></li>
              <li><Link href="/women#burqa">Modest Abaya &amp; Burqa</Link></li>
              <li><Link href="/kids">Kids&apos; Wear (Girls &amp; Boys)</Link></li>
              <li><Link href="/kids#frocks">Birthday Frocks &amp; Sets</Link></li>
            </ul>
          </div>

          {/* COLUMN 3: QUICK LINKS & CUSTOMER SUPPORT */}
          <div className="footer-column">
            <h4 className="footer-heading">CUSTOMER CARE</h4>
            <ul className="footer-nav-list">
              <li><Link href="/about">About Our Heritage</Link></li>
              <li><Link href="/store">Showroom &amp; Directions</Link></li>
              <li>
                <button onClick={onOpenSizeGuideModal} className="footer-btn-link">
                  Size Guide &amp; Fitting
                </button>
              </li>
              <li><Link href="/faq">Frequently Asked Questions</Link></li>
              <li><Link href="/contact">Contact Store Team</Link></li>
            </ul>
          </div>

          {/* COLUMN 4: VISIT US & SHOWROOM ADDRESS */}
          <div className="footer-column footer-contact-col">
            <h4 className="footer-heading">VISIT SHADNAGAR</h4>
            
            <div className="footer-address-box">
              <div className="flex items-start gap-2.5 mb-3">
                <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="#E5C378" strokeWidth="2" className="shrink-0 mt-0.5">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/>
                  <circle cx="12" cy="9" r="2.5"/>
                </svg>
                <address className="footer-address not-italic">
                  <strong className="text-white block">Kamal Selections</strong>
                  Ibrahim Complex, Main Road,<br />
                  Shadnagar, Telangana 509216
                </address>
              </div>

              <div className="flex items-center gap-2.5 mb-4">
                <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="#E5C378" strokeWidth="2" className="shrink-0">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                </svg>
                <a href="tel:8332059777" className="footer-phone-link">
                  +91 8332059777
                </a>
              </div>

              <a
                href={brandData.maps.directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-directions-btn"
              >
                <span>Get Google Maps Directions</span>
                <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>

        </div>

        <div className="footer-divider-line" aria-hidden="true"></div>

        {/* 3. BOTTOM LEGAL & COPYRIGHT BAR */}
        <div className="footer-bottom-bar">
          <div className="footer-copyright">
            <span>© 2026 Kamal Selections. All rights reserved.</span>
            <span className="copyright-sub">
              Shadnagar, Telangana · Website designed &amp; developed by{" "}
              <a
                href="https://hamid-ai-dev.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#E5C378] hover:underline font-medium"
              >
                Hamid Kamal
              </a>
            </span>
          </div>

          <div className="footer-bottom-links">
            <Link href="/privacy-policy" className="footer-legal-link">Privacy Policy</Link>
            <span className="dot-sep">•</span>
            <Link href="/terms" className="footer-legal-link">Terms</Link>
            <span className="dot-sep">•</span>
            <button onClick={scrollToTop} className="back-to-top-btn" aria-label="Back to top">
              <span>Back to Top</span>
              <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.5">
                <polyline points="18 15 12 9 6 15"></polyline>
              </svg>
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
