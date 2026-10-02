"use client";

import { useEffect, useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { MobileMenu } from "@/components/layout/MobileMenu";
import { Footer } from "@/components/layout/Footer";
import { ContactHero } from "@/components/contact/ContactHero";
import { ContactDirectOptions } from "@/components/contact/ContactDirectOptions";
import { ContactSimpleEnquiry } from "@/components/contact/ContactSimpleEnquiry";
import { ContactHelpTopics } from "@/components/contact/ContactHelpTopics";
import { ContactVisitStore } from "@/components/contact/ContactVisitStore";
import { ContactMapLocation } from "@/components/contact/ContactMapLocation";
import { ContactSocial } from "@/components/contact/ContactSocial";
import { ContactQuickStrip } from "@/components/contact/ContactQuickStrip";
import { ContactFinalCTA } from "@/components/contact/ContactFinalCTA";
import { StoreModal } from "@/components/modals/StoreModal";
import { SizeGuideModal } from "@/components/modals/SizeGuideModal";
import { SearchModal } from "@/components/modals/SearchModal";

export function ContactPageContent() {
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
    <div className="contact-page-wrapper bg-[#FAF3EB] min-h-screen text-[#30251F] antialiased">
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

      {/* MAIN CONTENT - EXACT LOCAL STORE CONTACT HIERARCHY */}
      <main>
        {/* HERO (PRESERVED 100% UNTOUCHED) */}
        <ContactHero />

        {/* SECTION 1 — DIRECT CONTACT (CALL, VISIT, FOLLOW) */}
        <ContactDirectOptions />

        {/* SECTION 2 — SIMPLE ENQUIRY FORM */}
        <ContactSimpleEnquiry />

        {/* SECTION 3 — WHAT CAN WE HELP WITH? */}
        <ContactHelpTopics />

        {/* SECTION 4 — VISIT THE STORE */}
        <ContactVisitStore />

        {/* SECTION 5 — LOCATION / MAP */}
        <ContactMapLocation />

        {/* SECTION 6 — SOCIAL CONNECTION */}
        <ContactSocial />

        {/* SECTION 7 — QUICK CONTACT STRIP */}
        <ContactQuickStrip />

        {/* SECTION 8 — FINAL CTA (WE'RE JUST A CALL AWAY) */}
        <ContactFinalCTA />
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
