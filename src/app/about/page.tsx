import { Metadata } from "next";
import { AboutPageContent } from "@/components/about/AboutPageContent";
import { generatePageMetadata, generateBreadcrumbSchema } from "@/lib/seo";
import { seoConfig } from "@/data/seo";

export const metadata: Metadata = generatePageMetadata(
  seoConfig.pages.about.title,
  seoConfig.pages.about.description,
  "/about"
);

export default function AboutPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", item: "/" },
    { name: "About Us", item: "/about" },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <AboutPageContent />
    </>
  );
}

