"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { MobileMenu } from "./MobileMenu";

interface NavbarProps {
  onOpenStoreModal?: () => void;
  onOpenSizeGuideModal?: () => void;
  onToggleMobileMenu?: () => void;
}

export function Navbar({
  onOpenStoreModal,
  onOpenSizeGuideModal,
  onToggleMobileMenu,
}: NavbarProps = {}) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleToggle = () => {
    if (onToggleMobileMenu) {
      onToggleMobileMenu();
    } else {
      setIsMobileOpen((prev) => !prev);
    }
  };

  return (
    <>
      <header className={`navbar-header ${isScrolled ? "scrolled" : ""}`} id="navbar">
        <div className="navbar-container">
          {/* LOGO */}
          <Link href="/" className="brand-logo" aria-label="Kamal Selections Home">
            <Image
              src="/brand/logo/kamal-selections-logo.png"
              alt="Kamal Selections Boutique Logo"
              className="brand-logo-img"
              width={160}
              height={64}
              priority
            />
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
            <button
              className="icon-btn menu-trigger"
              id="mobile-menu-btn"
              aria-label="Toggle Navigation Menu"
              onClick={handleToggle}
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

      {/* MOBILE DRAWER NAV */}
      <MobileMenu
        isOpen={isMobileOpen}
        onClose={() => setIsMobileOpen(false)}
        onOpenStoreModal={onOpenStoreModal}
        onOpenSizeGuideModal={onOpenSizeGuideModal}
      />
    </>
  );
}

