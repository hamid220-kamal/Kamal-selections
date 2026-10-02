import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/home/Hero";
import { BrandIntroduction } from "@/components/home/BrandIntroduction";
import { WomensPreview } from "@/components/home/WomensPreview";
import { KidsPreview } from "@/components/home/KidsPreview";
import { WhyKamalSelections } from "@/components/home/WhyKamalSelections";
import { StorePreview } from "@/components/home/StorePreview";
import { FAQPreview } from "@/components/home/FAQPreview";
import { FinalVisitCTA } from "@/components/home/FinalVisitCTA";

export function HomePageContent() {
  return (
    <div className="homepage-wrapper">
      {/* HEADER / NAVBAR */}
      <Navbar />

      {/* MAIN SECTIONS */}
      <main>
        {/* SECTION 1: HERO */}
        <Hero />

        {/* SECTION 2: BRAND INTRODUCTION */}
        <BrandIntroduction />

        {/* SECTION 3: WOMEN'S WEAR SHOWCASE */}
        <WomensPreview />

        {/* SECTION 4: KIDS WEAR SHOWCASE */}
        <KidsPreview />

        {/* SECTION 5: WHY KAMAL SELECTIONS */}
        <WhyKamalSelections />

        {/* SECTION 6: OUR STORE */}
        <StorePreview />

        {/* SECTION 7: FAQ */}
        <FAQPreview />

        {/* SECTION 8: FINAL VISIT CTA */}
        <FinalVisitCTA />
      </main>

      {/* FOOTER */}
      <Footer />
    </div>
  );
}

