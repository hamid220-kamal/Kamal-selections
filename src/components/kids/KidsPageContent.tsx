"use client";

import { useEffect, useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { MobileMenu } from "@/components/layout/MobileMenu";
import { Footer } from "@/components/layout/Footer";
import { KidsHero } from "@/components/kids/KidsHero";
import { KidsIntro } from "@/components/kids/KidsIntro";
import { KidsRange } from "@/components/kids/KidsRange";
import { KidsSplit } from "@/components/kids/KidsSplit";
import { KidsMoments } from "@/components/kids/KidsMoments";
import { KidsSignature } from "@/components/kids/KidsSignature";
import { KidsComfortStyle } from "@/components/kids/KidsComfortStyle";
import { KidsLookbook } from "@/components/kids/KidsLookbook";
import { KidsStoreExperience } from "@/components/kids/KidsStoreExperience";
import { KidsFamilyShopping } from "@/components/kids/KidsFamilyShopping";
import { KidsLocationStrip } from "@/components/kids/KidsLocationStrip";
import { KidsFinalBanner } from "@/components/kids/KidsFinalBanner";
import { StoreModal } from "@/components/modals/StoreModal";
import { SizeGuideModal } from "@/components/modals/SizeGuideModal";
import { SearchModal } from "@/components/modals/SearchModal";

export function KidsPageContent() {
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
    <div className="kids-page-wrapper bg-[#FAF3EB] min-h-screen text-[#3D2314] antialiased">
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

      {/* MAIN CONTENT - EXACT EDITORIAL SHOWCASE HIERARCHY */}
      <main>
        {/* HERO (PRESERVED 100% UNTOUCHED) */}
        <KidsHero onOpenStoreModal={() => setIsStoreModalOpen(true)} />

        {/* SECTION 1 — COLLECTION INTRO */}
        <KidsIntro />

        {/* SECTION 2 — OUR KIDS' WEAR RANGE (EDITORIAL MASONRY TILES) */}
        <KidsRange />

        {/* SECTION 3 — GIRLS + BOYS SPLIT */}
        <KidsSplit />

        {/* SECTION 4 — EVERYDAY → CELEBRATION */}
        <KidsMoments />

        {/* SECTION 5 — SIGNATURE KIDS EDITORIAL */}
        <KidsSignature />

        {/* SECTION 6 — COMFORT + STYLE */}
        <KidsComfortStyle />

        {/* SECTION 7 — KIDS STYLE GALLERY (LOOKBOOK) */}
        <KidsLookbook />

        {/* SECTION 8 — IN-STORE EXPERIENCE */}
        <KidsStoreExperience onOpenStoreModal={() => setIsStoreModalOpen(true)} />

        {/* SECTION 9 — FAMILY SHOPPING MESSAGE */}
        <KidsFamilyShopping onOpenStoreModal={() => setIsStoreModalOpen(true)} />

        {/* SECTION 10 — LOCATION STRIP */}
        <KidsLocationStrip />

        {/* SECTION 11 — FINAL DRAMATIC CTA */}
        <KidsFinalBanner onOpenStoreModal={() => setIsStoreModalOpen(true)} />
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
