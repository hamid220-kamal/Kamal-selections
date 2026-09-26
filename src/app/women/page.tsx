import { Metadata } from "next";
import { WomensPageContent } from "@/components/women/WomensPageContent";
import { generatePageMetadata } from "@/lib/seo";

export const metadata: Metadata = generatePageMetadata(
  "Women's Wear in Shadnagar | Kamal Selections",
  "Discover women's fashion at Kamal Selections in Shadnagar. Explore trendy dresses, kurtis, tops, leggings, burqa, 3-piece sets and party wear at prices that fit your budget.",
  "/women"
);

export default function WomensPage() {
  return <WomensPageContent />;
}
