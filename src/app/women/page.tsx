import { Metadata } from "next";
import { WomensPageContent } from "@/components/women/WomensPageContent";
import { generatePageMetadata } from "@/lib/seo";

export const metadata: Metadata = generatePageMetadata(
  "Women's Wear in Shadnagar | Kamal Selections",
  "Kamal Selections women's wear in Shadnagar, including dresses, kurtis, tops, leggings, burqa, 3-piece sets and party wear.",
  "/women"
);

export default function WomensPage() {
  return <WomensPageContent />;
}
