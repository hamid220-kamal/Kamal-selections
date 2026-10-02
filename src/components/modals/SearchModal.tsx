"use client";

import { useState, useEffect, FormEvent } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function SearchModal({ isOpen, onClose }: SearchModalProps) {
  const [query, setQuery] = useState("");
  const router = useRouter();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  const handleSearch = (e: FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;

    const q = query.toLowerCase().trim();
    onClose();

    if (q.includes("kid") || q.includes("frock") || q.includes("boy") || q.includes("girl") || q.includes("child")) {
      if (q.includes("frock")) {
        router.push("/kids#frocks");
      } else if (q.includes("boy")) {
        router.push("/kids#boys-wear");
      } else if (q.includes("girl")) {
        router.push("/kids#girls-wear");
      } else {
        router.push("/kids");
      }
    } else if (q.includes("kurti") || q.includes("dress") || q.includes("top") || q.includes("legging") || q.includes("burqa") || q.includes("party") || q.includes("saree") || q.includes("3piece") || q.includes("suit") || q.includes("women")) {
      if (q.includes("kurti")) {
        router.push("/women#kurtis");
      } else if (q.includes("dress")) {
        router.push("/women#dresses");
      } else if (q.includes("party")) {
        router.push("/women#party-wear");
      } else if (q.includes("burqa") || q.includes("abaya")) {
        router.push("/women#burqa");
      } else if (q.includes("top")) {
        router.push("/women#tops");
      } else if (q.includes("3piece") || q.includes("suit")) {
        router.push("/women#3piece-sets");
      } else {
        router.push("/women");
      }
    } else if (q.includes("store") || q.includes("timing") || q.includes("address") || q.includes("location") || q.includes("map")) {
      router.push("/store");
    } else if (q.includes("contact") || q.includes("phone") || q.includes("whatsapp")) {
      router.push("/contact");
    } else {
      router.push("/women");
    }
  };

  return (
    <div
      className={`search-overlay ${isOpen ? "active" : ""}`}
      id="search-modal"
      aria-hidden={!isOpen}
    >
      <div className="search-container">
        <button className="search-close" id="close-search-modal" onClick={onClose} aria-label="Close Search">
          &times;
        </button>
        <div className="search-header">
          <h2>What are you looking for?</h2>
          <form onSubmit={handleSearch} className="search-input-wrap">
            <input
              type="text"
              placeholder="Search kurtis, frocks, kids wear, party wear..."
              id="search-input"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              autoFocus={isOpen}
            />
            <button type="submit" className="search-submit">Search</button>
          </form>
        </div>
        <div className="search-tags">
          <span>Popular Searches:</span>
          <Link href="/women#kurtis" className="search-tag" onClick={onClose}>Cotton Kurtis</Link>
          <Link href="/women#dresses" className="search-tag" onClick={onClose}>Dresses</Link>
          <Link href="/kids#girls-wear" className="search-tag" onClick={onClose}>Girls Wear</Link>
          <Link href="/kids#kids-sets" className="search-tag" onClick={onClose}>Boys Sets</Link>
          <Link href="/women#party-wear" className="search-tag" onClick={onClose}>Party Wear</Link>
        </div>
      </div>
    </div>
  );
}
