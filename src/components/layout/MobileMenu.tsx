"use client";

import { useEffect } from "react";
import Link from "next/link";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenStoreModal?: () => void;
  onOpenSizeGuideModal?: () => void;
  onOpenSearchModal?: () => void;
}

export function MobileMenu({
  isOpen,
  onClose,
  onOpenSearchModal,
}: MobileMenuProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };

    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  return (
    <div
      className={`mobile-drawer ${isOpen ? "active" : ""}`}
      id="mobile-drawer"
      aria-hidden={!isOpen}
    >
      <div className="drawer-overlay" id="drawer-overlay" onClick={onClose}></div>
      <div className="drawer-content">
        <div className="drawer-header">
          <div className="drawer-brand">
            <span className="drawer-title">KAMAL SELECTIONS</span>
            <span className="drawer-sub">Est. 2021 • Shadnagar</span>
          </div>
          <button className="close-btn" id="close-drawer-btn" aria-label="Close menu" onClick={onClose}>
            &times;
          </button>
        </div>
        <ul className="drawer-nav">
          <li><Link href="/" className="drawer-link" onClick={onClose}>Home</Link></li>
          <li><Link href="/women" className="drawer-link" onClick={onClose}>Women’s Wear</Link></li>
          <li><Link href="/kids" className="drawer-link" onClick={onClose}>Kids Wear</Link></li>
          <li><Link href="/about" className="drawer-link" onClick={onClose}>About Us</Link></li>
          <li><Link href="/store" className="drawer-link" onClick={onClose}>Our Store</Link></li>
          <li><Link href="/contact" className="drawer-link" onClick={onClose}>Contact</Link></li>
          {onOpenSearchModal && (
            <li>
              <button
                type="button"
                className="drawer-link text-left w-full flex items-center gap-2"
                onClick={() => {
                  onClose();
                  onOpenSearchModal();
                }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="11" cy="11" r="8"></circle>
                  <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                </svg>
                <span>Search Collections</span>
              </button>
            </li>
          )}
        </ul>
        <div className="drawer-footer">
          <p className="drawer-location">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/>
              <circle cx="12" cy="9" r="2.5"/>
            </svg>
            Shadnagar, Telangana, India
          </p>
          <Link
            href="/store"
            className="btn btn-primary btn-block"
            id="drawer-visit-btn"
            onClick={onClose}
          >
            Visit Our Store
          </Link>
        </div>
      </div>
    </div>
  );
}
