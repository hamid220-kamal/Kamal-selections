"use client";

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function SearchModal({ isOpen, onClose }: SearchModalProps) {
  return (
    <div
      className={`search-overlay ${isOpen ? "active" : ""}`}
      id="search-modal"
      aria-hidden={!isOpen}
    >
      <div className="search-container">
        <button className="search-close" id="close-search-modal" onClick={onClose}>
          &times;
        </button>
        <div className="search-header">
          <h2>What are you looking for?</h2>
          <div className="search-input-wrap">
            <input
              type="text"
              placeholder="Search kurtis, frocks, kids wear, party wear..."
              id="search-input"
              autoFocus={isOpen}
            />
            <button className="search-submit">Search</button>
          </div>
        </div>
        <div className="search-tags">
          <span>Popular Searches:</span>
          <a href="#womens-wear" className="search-tag" onClick={onClose}>Cotton Kurtis</a>
          <a href="#womens-wear" className="search-tag" onClick={onClose}>Dresses</a>
          <a href="#kids-wear" className="search-tag" onClick={onClose}>Girls Lehenga</a>
          <a href="#kids-wear" className="search-tag" onClick={onClose}>Boys Kurta Set</a>
          <a href="#womens-wear" className="search-tag" onClick={onClose}>Party Wear</a>
        </div>
      </div>
    </div>
  );
}
