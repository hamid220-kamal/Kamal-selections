import { Metadata } from "next";
import { PageContainer } from "@/components/layout/PageContainer";
import { generatePageMetadata } from "@/lib/seo";
import { seoConfig } from "@/data/seo";

export const metadata: Metadata = generatePageMetadata(
  seoConfig.pages.sizeGuide.title,
  seoConfig.pages.sizeGuide.description,
  "/size-guide"
);

export default function SizeGuidePage() {
  return (
    <PageContainer>
      <section className="py-20 bg-[#FAF3EB] text-[#3E0A23]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <span className="text-xs uppercase tracking-widest text-[#CFA753]">FITTING GUIDE</span>
          <h1 className="font-serif text-4xl font-bold mt-2 mb-8">Size Guide</h1>
          <div className="bg-white p-6 rounded-2xl border border-[#E5C378]/40 max-w-2xl mx-auto">
            <h3 className="font-serif text-xl font-bold mb-4 text-left">Women's Clothing Sizing</h3>
            <p className="text-sm text-[#4A2B35] text-left">
              Sizes typically range from S (36) to XXL (44) for Kurtis, Dresses, Tops and 3-Piece Sets. Visit our store in Shadnagar for assistance and exact fitting.
            </p>
          </div>
        </div>
      </section>
    </PageContainer>
  );
}
