import { Metadata } from "next";
import { StorePageContent } from "@/components/store/StorePageContent";
import { generatePageMetadata, generateWebPageSchema, generateBreadcrumbSchema } from "@/lib/seo";
import { seoConfig } from "@/data/seo";

export const metadata: Metadata = generatePageMetadata(
  seoConfig.pages.store.title,
  seoConfig.pages.store.description,
  "/store"
);

export default function StorePage() {
  const webPageSchema = generateWebPageSchema(
    seoConfig.pages.store.title,
    seoConfig.pages.store.description,
    "/store"
  );

  const breadcrumbSchema = generateBreadcrumbSchema(
    [
      { name: "Home", item: "/" },
      { name: "Our Store", item: "/store" },
    ],
    "/store"
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
      <StorePageContent />
    </>
  );
}


