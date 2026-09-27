import { Metadata } from "next";
import { StorePageContent } from "@/components/store/StorePageContent";
import { generatePageMetadata } from "@/lib/seo";
import { seoConfig } from "@/data/seo";

export const metadata: Metadata = generatePageMetadata(
  seoConfig.pages.store.title,
  seoConfig.pages.store.description,
  "/store"
);

export default function StorePage() {
  return <StorePageContent />;
}
