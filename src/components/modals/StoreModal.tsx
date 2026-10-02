"use client";

import { brandData } from "@/data/brand";

interface StoreModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function StoreModal({ isOpen, onClose }: StoreModalProps) {
  return (
    <div className={`modal ${isOpen ? "active" : ""}`} id="store-modal" aria-hidden={!isOpen}>
      <div className="modal-backdrop" id="store-modal-backdrop" onClick={onClose}></div>
      <div className="modal-card">
        <button className="modal-close" id="close-store-modal" onClick={onClose} aria-label="Close store info">
          &times;
        </button>
        <div className="modal-header">
          <div className="modal-icon">
            <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="#E5C378" strokeWidth="2">
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/>
              <circle cx="12" cy="9" r="2.5"/>
            </svg>
          </div>
          <h3 className="modal-title">Visit {brandData.name}</h3>
          <p className="modal-sub">{brandData.address.city}, {brandData.address.state} · Retail Fashion Store</p>
        </div>
        <div className="modal-body">
          <div className="store-info-box">
            <div className="info-row">
              <strong>📍 Store Address:</strong>
              <p>{brandData.address.fullAddress} {brandData.address.pincode}, India</p>
            </div>
            <div className="info-row">
              <strong>⏰ Store Timings:</strong>
              <p>{brandData.hours.displayHours}</p>
            </div>
            <div className="info-row">
              <strong>📞 Phone / WhatsApp:</strong>
              <p>+91 {brandData.phone}</p>
            </div>
            <div className="info-row">
              <strong>🛍️ Categories Available:</strong>
              <p>Women's Kurtis, Dresses, Leggings, Burqa, 3-Piece Sets &amp; Complete Kids Wear Range</p>
            </div>
          </div>
        </div>
        <div className="modal-footer">
          <a href={brandData.maps.directionsUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-block">
            Get Directions on Google Maps &rarr;
          </a>
        </div>
      </div>
    </div>
  );
}
