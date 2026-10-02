import { Metadata } from "next";
import { ContactPageContent } from "@/components/contact/ContactPageContent";
import { generatePageMetadata, generateWebPageSchema, generateBreadcrumbSchema } from "@/lib/seo";
import { seoConfig } from "@/data/seo";

export const metadata: Metadata = generatePageMetadata(
  seoConfig.pages.contact.title,
  seoConfig.pages.contact.description,
  "/contact"
);

export default function ContactPage() {
  const webPageSchema = generateWebPageSchema(
    seoConfig.pages.contact.title,
    seoConfig.pages.contact.description,
    "/contact"
  );

  const breadcrumbSchema = generateBreadcrumbSchema(
    [
      { name: "Home", item: "/" },
      { name: "Contact Us", item: "/contact" },
    ],
    "/contact"
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
      <ContactPageContent />
    </>
  );
}


