import { Metadata } from "next";
import { KidsPageContent } from "@/components/kids/KidsPageContent";
import { generatePageMetadata, generateWebPageSchema, generateBreadcrumbSchema } from "@/lib/seo";
import { seoConfig } from "@/data/seo";

export const metadata: Metadata = generatePageMetadata(
  seoConfig.pages.kids.title,
  seoConfig.pages.kids.description,
  "/kids"
);

export default function KidsPage() {
  const webPageSchema = generateWebPageSchema(
    seoConfig.pages.kids.title,
    seoConfig.pages.kids.description,
    "/kids"
  );

  const breadcrumbSchema = generateBreadcrumbSchema(
    [
      { name: "Home", item: "/" },
      { name: "Kids' Wear", item: "/kids" },
    ],
    "/kids"
  );

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
      <KidsPageContent />
    </>
  );
}


