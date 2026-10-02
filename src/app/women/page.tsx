import { Metadata } from "next";
import { WomensPageContent } from "@/components/women/WomensPageContent";
import { generatePageMetadata, generateBreadcrumbSchema } from "@/lib/seo";
import { seoConfig } from "@/data/seo";

export const metadata: Metadata = generatePageMetadata(
  seoConfig.pages.women.title,
  seoConfig.pages.women.description,
  "/women"
);

export default function WomensPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", item: "/" },
    { name: "Women's Wear", item: "/women" },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <WomensPageContent />
    </>
  );
}

