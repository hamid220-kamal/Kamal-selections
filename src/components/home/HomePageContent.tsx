"use client";

import { useEffect, useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { MobileMenu } from "@/components/layout/MobileMenu";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/home/Hero";
import { BrandIntroduction } from "@/components/home/BrandIntroduction";
import { WomensPreview } from "@/components/home/WomensPreview";
import { KidsPreview } from "@/components/home/KidsPreview";
import { WhyKamalSelections } from "@/components/home/WhyKamalSelections";
import { StorePreview } from "@/components/home/StorePreview";
import { FAQPreview } from "@/components/home/FAQPreview";
import { FinalVisitCTA } from "@/components/home/FinalVisitCTA";
import { StoreModal } from "@/components/modals/StoreModal";
import { SizeGuideModal } from "@/components/modals/SizeGuideModal";

export function HomePageContent() {
  const [isStoreModalOpen, setIsStoreModalOpen] = useState(false);
  const [isSizeGuideOpen, setIsSizeGuideOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    // Scroll triggered animation observer for .animate-on-scroll elements
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
    <div className="homepage-wrapper">
      {/* HEADER / NAVBAR */}
      <Navbar
        onOpenStoreModal={() => setIsStoreModalOpen(true)}
        onOpenSizeGuideModal={() => setIsSizeGuideOpen(true)}
        onToggleMobileMenu={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      />

      {/* MOBILE DRAWER NAV */}
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        onOpenStoreModal={() => setIsStoreModalOpen(true)}
        onOpenSizeGuideModal={() => setIsSizeGuideOpen(true)}
      />

      {/* MAIN SECTIONS */}
      <main>
        {/* SECTION 1: HERO */}
        <Hero
          onOpenStoreModal={() => setIsStoreModalOpen(true)}
          onOpenSizeGuideModal={() => setIsSizeGuideOpen(true)}
        />

        {/* SECTION 2: BRAND INTRODUCTION */}
        <BrandIntroduction onOpenStoreModal={() => setIsStoreModalOpen(true)} />

        {/* SECTION 3: WOMEN'S WEAR SHOWCASE */}
        <WomensPreview onOpenStoreModal={() => setIsStoreModalOpen(true)} />

        {/* SECTION 4: KIDS WEAR SHOWCASE */}
        <KidsPreview onOpenStoreModal={() => setIsStoreModalOpen(true)} />

        {/* SECTION 5: WHY KAMAL SELECTIONS */}
        <WhyKamalSelections onOpenStoreModal={() => setIsStoreModalOpen(true)} />

        {/* SECTION 6: OUR STORE */}
        <StorePreview />

        {/* SECTION 7: FAQ */}
        <FAQPreview onOpenStoreModal={() => setIsStoreModalOpen(true)} />

        {/* SECTION 9: FINAL VISIT CTA */}
        <FinalVisitCTA />
      </main>

      {/* FOOTER */}
      <Footer
        onOpenStoreModal={() => setIsStoreModalOpen(true)}
        onOpenSizeGuideModal={() => setIsSizeGuideOpen(true)}
      />

      {/* MODALS */}
      <StoreModal
        isOpen={isStoreModalOpen}
        onClose={() => setIsStoreModalOpen(false)}
      />
      <SizeGuideModal
        isOpen={isSizeGuideOpen}
        onClose={() => setIsSizeGuideOpen(false)}
      />
    </div>
  );
}
