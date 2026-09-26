import { Metadata } from "next";
import { PageContainer } from "@/components/layout/PageContainer";
import { WomensHero } from "@/components/women/WomensHero";
import { WomensCategories } from "@/components/women/WomensCategories";
import { WomensCTA } from "@/components/women/WomensCTA";
import { generatePageMetadata } from "@/lib/seo";
import { seoConfig } from "@/data/seo";

export const metadata: Metadata = generatePageMetadata(
  seoConfig.pages.women.title,
  seoConfig.pages.women.description,
  "/women"
);

export default function WomensPage() {
  return (
    <PageContainer>
      <WomensHero />
      <WomensCategories />
      <WomensCTA />
    </PageContainer>
  );
}
