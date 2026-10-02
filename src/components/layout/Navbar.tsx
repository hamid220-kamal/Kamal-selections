"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavbarProps {
  onOpenStoreModal?: () => void;
  onOpenSizeGuideModal?: () => void;
  onOpenSearchModal?: () => void;
  onToggleMobileMenu?: () => void;
}

export function Navbar({
  onOpenStoreModal,
  onOpenSizeGuideModal,
  onOpenSearchModal,
  onToggleMobileMenu,
}: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`navbar-header ${isScrolled ? "scrolled" : ""}`} id="navbar">
      <div className="navbar-container">
        {/* LOGO */}
        <Link href="/" className="brand-logo" aria-label="Kamal Selections Home">
          <img src="/brand/logo/kamal-selections-logo.png" alt="Kamal Selections Boutique Logo" className="brand-logo-img" />
          <span className="brand-logo-text">Kamal Selections</span>
        </Link>

        {/* DESKTOP NAVIGATION LINKS */}
        <nav className="nav-menu" aria-label="Main Navigation">
          <ul className="nav-list">
            <li className="nav-item">
              <Link href="/" className={`nav-link ${pathname === "/" ? "active" : ""}`}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/women" className={`nav-link ${pathname === "/women" ? "active" : ""}`}>
                Women’s Wear
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/kids" className={`nav-link ${pathname === "/kids" ? "active" : ""}`}>
                Kids Wear
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/about" className={`nav-link ${pathname === "/about" ? "active" : ""}`}>
                About Us
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/store" className={`nav-link ${pathname === "/store" ? "active" : ""}`}>
               Our Store
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/contact" className={`nav-link ${pathname === "/contact" ? "active" : ""}`}>
                Contact
              </Link>
            </li>
          </ul>
        </nav>

        {/* RIGHT ACTIONS */}
        <div className="nav-actions">
          {onOpenSearchModal && (
            <button
              className="icon-btn search-trigger"
              id="open-search-modal-btn"
              aria-label="Open Search"
              onClick={onOpenSearchModal}
            >
              <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8"></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
              </svg>
            </button>
          )}
          <button
            className="icon-btn menu-trigger"
            id="mobile-menu-btn"
            aria-label="Toggle Navigation Menu"
            onClick={onToggleMobileMenu}
          >
            <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <line x1="3" y1="7" x2="21" y2="7"></line>
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="9" y1="17" x2="21" y2="17"></line>
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}
