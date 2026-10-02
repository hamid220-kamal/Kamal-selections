import { Metadata } from "next";
import { HomePageContent } from "@/components/home/HomePageContent";
import { generatePageMetadata, generateWebPageSchema, generateBreadcrumbSchema } from "@/lib/seo";
import { seoConfig } from "@/data/seo";

export const metadata: Metadata = generatePageMetadata(
  seoConfig.pages.home.title,
  seoConfig.pages.home.description,
  "/"
);

export default function HomePage() {
  const webPageSchema = generateWebPageSchema(
    seoConfig.pages.home.title,
    seoConfig.pages.home.description,
    "/"
  );

  const breadcrumbSchema = generateBreadcrumbSchema(
    [{ name: "Home", item: "/" }],
    "/"
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
      <HomePageContent />
    </>
  );
}

