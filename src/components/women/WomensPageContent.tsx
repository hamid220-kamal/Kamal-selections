"use client";

import { useEffect, useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { MobileMenu } from "@/components/layout/MobileMenu";
import { Footer } from "@/components/layout/Footer";
import { WomensHero } from "@/components/women/WomensHero";
import { WomensCategoryMosaic } from "@/components/women/WomensCategoryMosaic";
import { WomensEditorial } from "@/components/women/WomensEditorial";
import { WomensCollectionGrid } from "@/components/women/WomensCollectionGrid";
import { WomensStyleJourney } from "@/components/women/WomensStyleJourney";
import { WomensDetailSection } from "@/components/women/WomensDetailSection";
import { WomensStoreCTA } from "@/components/women/WomensStoreCTA";
import { WomensFAQ } from "@/components/women/WomensFAQ";
import { WomensFinalCTA } from "@/components/women/WomensFinalCTA";
import { StoreModal } from "@/components/modals/StoreModal";
import { SizeGuideModal } from "@/components/modals/SizeGuideModal";
import { SearchModal } from "@/components/modals/SearchModal";

export function WomensPageContent() {
  const [isStoreModalOpen, setIsStoreModalOpen] = useState(false);
  const [isSizeGuideOpen, setIsSizeGuideOpen] = useState(false);
  const [isSearchModalOpen, setIsSearchModalOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    // Intersection Observer for scroll animations
    const animatedElements = document.querySelectorAll(".animate-on-scroll");

    if ("IntersectionObserver" in window) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("visible");
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.1 }
      );

      animatedElements.forEach((el) => observer.observe(el));
    } else {
      animatedElements.forEach((el) => el.classList.add("visible"));
    }
  }, []);

  return (
    <div className="womens-page-wrapper bg-[#FDFBF7] min-h-screen text-[#3D2314] antialiased">
      {/* GLOBAL NAVBAR */}
      <Navbar
        onOpenStoreModal={() => setIsStoreModalOpen(true)}
        onOpenSizeGuideModal={() => setIsSizeGuideOpen(true)}
        onOpenSearchModal={() => setIsSearchModalOpen(true)}
        onToggleMobileMenu={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      />

      {/* MOBILE DRAWER NAV */}
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        onOpenStoreModal={() => setIsStoreModalOpen(true)}
        onOpenSizeGuideModal={() => setIsSizeGuideOpen(true)}
      />

      {/* MAIN CONTENT - 9 SECTIONS IN EXACT REQUIRED ORDER */}
      <main>
        {/* 01 — WOMEN'S WEAR HERO */}
        <WomensHero onOpenStoreModal={() => setIsStoreModalOpen(true)} />

        {/* 02 — CATEGORY NAVIGATION */}
        <WomensCategoryMosaic />

        {/* 03 — FEATURED FASHION EDITORIAL */}
        <WomensEditorial />

        {/* 04 — WOMEN'S COLLECTION GRID */}
        <WomensCollectionGrid />

        {/* 05 — EVERYDAY → OCCASION JOURNEY */}
        <WomensStyleJourney />

        {/* 06 — STYLE DETAIL / CRAFTSMANSHIP SECTION */}
        <WomensDetailSection />

        {/* 07 — VISIT OUR STORE CTA */}
        <WomensStoreCTA onOpenStoreModal={() => setIsStoreModalOpen(true)} />

        {/* 08 — WOMEN'S WEAR FAQ */}
        <WomensFAQ />

        {/* 09 — FINAL WOMEN'S WEAR CTA */}
        <WomensFinalCTA />
      </main>

      {/* 10 — GLOBAL FOOTER */}
      <Footer
        onOpenStoreModal={() => setIsStoreModalOpen(true)}
        onOpenSizeGuideModal={() => setIsSizeGuideOpen(true)}
      />

      {/* INTERACTIVE MODALS */}
      <StoreModal
        isOpen={isStoreModalOpen}
        onClose={() => setIsStoreModalOpen(false)}
      />
      <SizeGuideModal
        isOpen={isSizeGuideOpen}
        onClose={() => setIsSizeGuideOpen(false)}
      />
      <SearchModal
        isOpen={isSearchModalOpen}
        onClose={() => setIsSearchModalOpen(false)}
      />
    </div>
  );
}
