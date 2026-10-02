import { Metadata } from "next";
import { ContactPageContent } from "@/components/contact/ContactPageContent";
import { generatePageMetadata, generateBreadcrumbSchema } from "@/lib/seo";
import { seoConfig } from "@/data/seo";

export const metadata: Metadata = generatePageMetadata(
  seoConfig.pages.contact.title,
  seoConfig.pages.contact.description,
  "/contact"
);

export default function ContactPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", item: "/" },
    { name: "Contact Us", item: "/contact" },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <ContactPageContent />
    </>
  );
}

