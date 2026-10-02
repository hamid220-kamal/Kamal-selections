"use client";

import { useEffect, useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { MobileMenu } from "@/components/layout/MobileMenu";
import { Footer } from "@/components/layout/Footer";
import { StoreHero } from "@/components/store/StoreHero";
import { StoreIntro } from "@/components/store/StoreIntro";
import { StoreExperience } from "@/components/store/StoreExperience";
import { StoreRangeOverview } from "@/components/store/StoreRangeOverview";
import { StoreGallery } from "@/components/store/StoreGallery";
import { StoreCollectionsSplit } from "@/components/store/StoreCollectionsSplit";
import { StoreFindUs } from "@/components/store/StoreFindUs";
import { StoreMap } from "@/components/store/StoreMap";
import { StoreVisitInfo } from "@/components/store/StoreVisitInfo";
import { StoreLocalPresence } from "@/components/store/StoreLocalPresence";
import { StoreVisitCTA } from "@/components/store/StoreVisitCTA";
import { StoreInstagram } from "@/components/store/StoreInstagram";
import { StoreLocationCard } from "@/components/store/StoreLocationCard";
import { StoreModal } from "@/components/modals/StoreModal";
import { SizeGuideModal } from "@/components/modals/SizeGuideModal";
import { SearchModal } from "@/components/modals/SearchModal";

export function StorePageContent() {
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
    <div className="store-page-wrapper bg-[#FAF3EB] min-h-screen text-[#30251F] antialiased">
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
        onOpenSearchModal={() => setIsSearchModalOpen(true)}
      />

      {/* MAIN CONTENT - EXACT STORE SHOWCASE HIERARCHY */}
      <main>
        {/* HERO (PRESERVED 100% UNTOUCHED) */}
        <StoreHero />

        {/* SECTION 1 — STORE INTRO */}
        <StoreIntro />

        {/* SECTION 2 — THE STORE EXPERIENCE */}
        <StoreExperience />

        {/* SECTION 3 — WHAT YOU'LL FIND */}
        <StoreRangeOverview />

        {/* SECTION 4 — COMPLETE 4-IMAGE AUTHENTIC STORE GALLERY */}
        <StoreGallery />

        {/* SECTION 5 — WOMEN + KIDS SPLIT */}
        <StoreCollectionsSplit />

        {/* SECTION 6 — FIND US */}
        <StoreFindUs />

        {/* SECTION 7 — MAP */}
        <StoreMap />

        {/* SECTION 8 — VISIT INFORMATION */}
        <StoreVisitInfo />

        {/* SECTION 9 — LOCAL PRESENCE */}
        <StoreLocalPresence />

        {/* SECTION 10 — VISIT CTA */}
        <StoreVisitCTA />

        {/* SECTION 11 — INSTAGRAM */}
        <StoreInstagram />

        {/* SECTION 12 — FINAL LOCATION CARD */}
        <StoreLocationCard />
      </main>

      {/* GLOBAL FOOTER */}
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
