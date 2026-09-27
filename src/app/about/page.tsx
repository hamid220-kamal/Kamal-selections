import { Metadata } from "next";
import { AboutPageContent } from "@/components/about/AboutPageContent";
import { generatePageMetadata } from "@/lib/seo";
import { seoConfig } from "@/data/seo";

export const metadata: Metadata = generatePageMetadata(
  seoConfig.pages.about.title,
  seoConfig.pages.about.description,
  "/about"
);

export default function AboutPage() {
  return <AboutPageContent />;
}
