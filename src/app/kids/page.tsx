import { Metadata } from "next";
import { KidsPageContent } from "@/components/kids/KidsPageContent";
import { generatePageMetadata } from "@/lib/seo";
import { seoConfig } from "@/data/seo";

export const metadata: Metadata = generatePageMetadata(
  seoConfig.pages.kids.title,
  seoConfig.pages.kids.description,
  "/kids"
);

export default function KidsPage() {
  return <KidsPageContent />;
}
