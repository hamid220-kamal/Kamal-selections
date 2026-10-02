import { Metadata } from "next";
import { HomePageContent } from "@/components/home/HomePageContent";
import { generatePageMetadata } from "@/lib/seo";
import { seoConfig } from "@/data/seo";

export const metadata: Metadata = generatePageMetadata(
  seoConfig.pages.home.title,
  seoConfig.pages.home.description,
  "/"
);

export default function HomePage() {
  return <HomePageContent />;
}
