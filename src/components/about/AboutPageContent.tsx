"use client";

import { useEffect, useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { MobileMenu } from "@/components/layout/MobileMenu";
import { Footer } from "@/components/layout/Footer";
import { AboutHero } from "@/components/about/AboutHero";
import { AboutBeginning } from "@/components/about/AboutBeginning";
import { AboutTimeline } from "@/components/about/AboutTimeline";
import { AboutBeliefs } from "@/components/about/AboutBeliefs";
import { AboutSplit } from "@/components/about/AboutSplit";
import { AboutRealStore } from "@/components/about/AboutRealStore";
import { AboutApproach } from "@/components/about/AboutApproach";
import { AboutCommunity } from "@/components/about/AboutCommunity";
import { AboutLocation } from "@/components/about/AboutLocation";
import { AboutVisitUs } from "@/components/about/AboutVisitUs";
import { AboutContactStrip } from "@/components/about/AboutContactStrip";
import { AboutFinalCTA } from "@/components/about/AboutFinalCTA";
import { StoreModal } from "@/components/modals/StoreModal";
import { SizeGuideModal } from "@/components/modals/SizeGuideModal";
import { SearchModal } from "@/components/modals/SearchModal";

export function AboutPageContent() {
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
    <div className="about-page-wrapper bg-[#FAF3EB] min-h-screen text-[#30251F] antialiased">
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

      {/* MAIN CONTENT - EXACT STORYTELLING SHOWCASE HIERARCHY */}
      <main>
        {/* HERO (PRESERVED 100% UNTOUCHED) */}
        <AboutHero onOpenStoreModal={() => setIsStoreModalOpen(true)} />

        {/* SECTION 1 — OUR BEGINNING */}
        <AboutBeginning />

        {/* SECTION 2 — SINCE 2021 TIMELINE */}
        <AboutTimeline />

        {/* SECTION 3 — WHAT WE BELIEVE */}
        <AboutBeliefs />

        {/* SECTION 4 — FOR EVERY WOMAN & EVERY LITTLE ONE (SPLIT) */}
        <AboutSplit />

        {/* SECTION 5 — THE STORE BEHIND THE WEBSITE */}
        <AboutRealStore onOpenStoreModal={() => setIsStoreModalOpen(true)} />

        {/* SECTION 6 — OUR APPROACH */}
        <AboutApproach />

        {/* SECTION 7 — OUR COMMUNITY */}
        <AboutCommunity />

        {/* SECTION 8 — WHY SHADNAGAR */}
        <AboutLocation />

        {/* SECTION 9 — VISIT US */}
        <AboutVisitUs onOpenStoreModal={() => setIsStoreModalOpen(true)} />

        {/* SECTION 10 — CONTACT STRIP */}
        <AboutContactStrip />

        {/* FINAL CTA — EMOTIONAL BRAND STATEMENT */}
        <AboutFinalCTA />
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
