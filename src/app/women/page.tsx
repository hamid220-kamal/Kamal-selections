import { Metadata } from "next";
import { WomensPageContent } from "@/components/women/WomensPageContent";
import {
  generatePageMetadata,
  generateWebPageSchema,
  generateBreadcrumbSchema,
  generateFAQSchema,
} from "@/lib/seo";
import { seoConfig } from "@/data/seo";
import { womensData } from "@/data/womens";

export const metadata: Metadata = generatePageMetadata(
  seoConfig.pages.women.title,
  seoConfig.pages.women.description,
  "/women"
);

export default function WomensPage() {
  const webPageSchema = generateWebPageSchema(
    seoConfig.pages.women.title,
    seoConfig.pages.women.description,
    "/women"
  );

  const breadcrumbSchema = generateBreadcrumbSchema(
    [
      { name: "Home", item: "/" },
      { name: "Women's Wear", item: "/women" },
    ],
    "/women"
  );

  const faqSchema = generateFAQSchema(womensData.faqs, "/women");

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <WomensPageContent />
    </>
  );
}


