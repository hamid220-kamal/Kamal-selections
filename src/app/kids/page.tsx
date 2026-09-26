import { Metadata } from "next";
import { PageContainer } from "@/components/layout/PageContainer";
import { KidsHero } from "@/components/kids/KidsHero";
import { KidsCategories } from "@/components/kids/KidsCategories";
import { KidsCTA } from "@/components/kids/KidsCTA";
import { generatePageMetadata } from "@/lib/seo";
import { seoConfig } from "@/data/seo";

export const metadata: Metadata = generatePageMetadata(
  seoConfig.pages.kids.title,
  seoConfig.pages.kids.description,
  "/kids"
);

export default function KidsPage() {
  return (
    <PageContainer>
      <KidsHero />
      <KidsCategories />
      <KidsCTA />
    </PageContainer>
  );
}
