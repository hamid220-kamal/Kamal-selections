import Link from "next/link";

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
          <Link href="/women" className="search-tag" onClick={onClose}>Cotton Kurtis</Link>
          <Link href="/women" className="search-tag" onClick={onClose}>Dresses</Link>
          <Link href="/kids" className="search-tag" onClick={onClose}>Girls Wear</Link>
          <Link href="/kids" className="search-tag" onClick={onClose}>Boys Sets</Link>
          <Link href="/women" className="search-tag" onClick={onClose}>Party Wear</Link>
        </div>
      </div>
    </div>
  );
}
