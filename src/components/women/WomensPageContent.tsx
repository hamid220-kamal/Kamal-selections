"use client";

import { useEffect, useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { MobileMenu } from "@/components/layout/MobileMenu";
import { Footer } from "@/components/layout/Footer";
import { WomensHero } from "@/components/women/WomensHero";
import { WomensIntro } from "@/components/women/WomensIntro";
import { WomensRange } from "@/components/women/WomensRange";
import { WomensMoments } from "@/components/women/WomensMoments";
import { WomensSignature } from "@/components/women/WomensSignature";
import { WomensWhyUs } from "@/components/women/WomensWhyUs";
import { WomensLookbook } from "@/components/women/WomensLookbook";
import { WomensStoreExperience } from "@/components/women/WomensStoreExperience";
import { WomensLocationStrip } from "@/components/women/WomensLocationStrip";
import { WomensFinalBanner } from "@/components/women/WomensFinalBanner";
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
        onOpenSearchModal={() => setIsSearchModalOpen(true)}
      />

      {/* MAIN CONTENT - EXACT EDITORIAL SHOWCASE HIERARCHY */}
      <main>
        {/* HERO (PRESERVED 100% UNTOUCHED) */}
        <WomensHero onOpenStoreModal={() => setIsStoreModalOpen(true)} />

        {/* SECTION 1 — COLLECTION INTRO */}
        <WomensIntro />

        {/* SECTION 2 — OUR WOMEN'S WEAR RANGE (EDITORIAL MASONRY TILES) */}
        <WomensRange />

        {/* SECTION 3 — EVERYDAY → OCCASION */}
        <WomensMoments />

        {/* SECTION 4 — SIGNATURE VISUAL */}
        <WomensSignature />

        {/* SECTION 5 — WHY WOMEN CHOOSE KAMAL SELECTIONS */}
        <WomensWhyUs />

        {/* SECTION 6 — STYLE GALLERY (LOOKBOOK) */}
        <WomensLookbook />

        {/* SECTION 7 — IN-STORE MESSAGE ("SEE IT. FEEL IT. CHOOSE IT.") */}
        <WomensStoreExperience onOpenStoreModal={() => setIsStoreModalOpen(true)} />

        {/* SECTION 8 — LOCATION STRIP */}
        <WomensLocationStrip />

        {/* SECTION 9 — FINAL DRAMATIC CTA */}
        <WomensFinalBanner onOpenStoreModal={() => setIsStoreModalOpen(true)} />
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
