"use client";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenStoreModal?: () => void;
  onOpenSizeGuideModal?: () => void;
}

export function MobileMenu({
  isOpen,
  onClose,
  onOpenStoreModal,
  onOpenSizeGuideModal,
}: MobileMenuProps) {
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
          <li><a href="#home" className="drawer-link active-drawer" onClick={onClose}>Home</a></li>
          <li><a href="#womens-wear" className="drawer-link" onClick={onClose}>Women’s Wear</a></li>
          <li><a href="#kids-wear" className="drawer-link" onClick={onClose}>Kids Wear</a></li>
          <li><a href="#about-us" className="drawer-link" onClick={onClose}>About Us</a></li>
          <li>
            <a
              href="#our-store"
              className="drawer-link"
              id="mobile-store-link"
              onClick={(e) => {
                e.preventDefault();
                onClose();
                onOpenStoreModal?.();
              }}
            >
              Our Store
            </a>
          </li>
          <li><a href="#contact" className="drawer-link" onClick={onClose}>Contact</a></li>
          <li><a href="#faq" className="drawer-link" onClick={onClose}>FAQ</a></li>
          <li>
            <a
              href="#size-guide"
              className="drawer-link"
              id="mobile-size-link"
              onClick={(e) => {
                e.preventDefault();
                onClose();
                onOpenSizeGuideModal?.();
              }}
            >
              Size Guide
            </a>
          </li>
        </ul>
        <div className="drawer-footer">
          <p className="drawer-location">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/>
              <circle cx="12" cy="9" r="2.5"/>
            </svg>
            Shadnagar, Telangana, India
          </p>
          <button
            className="btn btn-primary btn-block"
            id="drawer-visit-btn"
            onClick={() => {
              onClose();
              onOpenStoreModal?.();
            }}
          >
            Visit Our Store
          </button>
        </div>
      </div>
    </div>
  );
}
