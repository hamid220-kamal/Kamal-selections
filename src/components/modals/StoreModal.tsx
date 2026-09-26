"use client";

interface StoreModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function StoreModal({ isOpen, onClose }: StoreModalProps) {
  return (
    <div className={`modal ${isOpen ? "active" : ""}`} id="store-modal" aria-hidden={!isOpen}>
      <div className="modal-backdrop" id="store-modal-backdrop" onClick={onClose}></div>
      <div className="modal-card">
        <button className="modal-close" id="close-store-modal" onClick={onClose}>
          &times;
        </button>
        <div className="modal-header">
          <div className="modal-icon">
            <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="#E5C378" strokeWidth="2">
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/>
              <circle cx="12" cy="9" r="2.5"/>
            </svg>
          </div>
          <h3 className="modal-title">Visit Kamal Selections</h3>
          <p className="modal-sub">Shadnagar, Telangana • Established 2021</p>
        </div>
        <div className="modal-body">
          <div className="store-info-box">
            <div className="info-row">
              <strong>📍 Store Address:</strong>
              <p>Kamal Selections, Main Road Market, Shadnagar, Ranga Reddy District, Telangana 509216, India</p>
            </div>
            <div className="info-row">
              <strong>⏰ Store Timings:</strong>
              <p>Monday – Sunday: 10:00 AM – 9:30 PM (Open 7 Days)</p>
            </div>
            <div className="info-row">
              <strong>🛍️ Categories Available:</strong>
              <p>Women's Kurtis, Dresses, Leggings, Burqa &amp; Complete Kids Wear Range</p>
            </div>
          </div>
        </div>
        <div className="modal-footer">
          <a href="https://www.google.com/maps/search/?api=1&query=Kamal+Selections+Ibrahim+Complex+Main+Road+Shadnagar+Telangana" target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-block">
            Get Directions on Google Maps &rarr;
          </a>
        </div>
      </div>
    </div>
  );
}
