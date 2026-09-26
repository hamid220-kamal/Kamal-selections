"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

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

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`navbar-header ${isScrolled ? "scrolled" : ""}`} id="navbar">
      <div className="navbar-container">
        {/* LOGO */}
        <Link href="/" className="brand-logo" aria-label="Kamal Selections Home">
          <img src="/assets/logo.png" alt="Kamal Selection Logo" className="brand-logo-img" />
        </Link>

        {/* DESKTOP NAVIGATION LINKS */}
        <nav className="nav-menu" aria-label="Main Navigation">
          <ul className="nav-list">
            <li className="nav-item">
              <Link href="#home" className="nav-link active">Home</Link>
            </li>
            <li className="nav-item">
              <Link href="/women" className="nav-link">Women’s Wear</Link>
            </li>
            <li className="nav-item">
              <Link href="#kids-wear" className="nav-link">Kids Wear</Link>
            </li>
            <li className="nav-item">
              <Link href="#about-us" className="nav-link">About Us</Link>
            </li>
            <li className="nav-item">
              <a
                href="#our-store"
                className="nav-link"
                id="open-store-modal-nav"
                onClick={(e) => {
                  e.preventDefault();
                  onOpenStoreModal?.();
                }}
              >
                Our Store
              </a>
            </li>
            <li className="nav-item">
              <Link href="#contact" className="nav-link">Contact</Link>
            </li>
            <li className="nav-item">
              <Link href="#faq" className="nav-link">FAQ</Link>
            </li>
            <li className="nav-item">
              <a
                href="#size-guide"
                className="nav-link"
                id="open-size-guide-nav"
                onClick={(e) => {
                  e.preventDefault();
                  onOpenSizeGuideModal?.();
                }}
              >
                Size Guide
              </a>
            </li>
          </ul>
        </nav>

        {/* RIGHT ACTIONS */}
        <div className="nav-actions">
          <button
            className="icon-btn search-trigger"
            id="search-btn"
            aria-label="Search Collection"
            onClick={onOpenSearchModal}
          >
            <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
          </button>

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
