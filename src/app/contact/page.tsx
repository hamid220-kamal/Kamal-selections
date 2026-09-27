import { Metadata } from "next";
import { ContactPageContent } from "@/components/contact/ContactPageContent";
import { generatePageMetadata } from "@/lib/seo";
import { seoConfig } from "@/data/seo";

export const metadata: Metadata = generatePageMetadata(
  seoConfig.pages.contact.title,
  seoConfig.pages.contact.description,
  "/contact"
);

export default function ContactPage() {
  return <ContactPageContent />;
}
