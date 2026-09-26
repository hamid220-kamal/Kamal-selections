import { Metadata } from "next";
import { PageContainer } from "@/components/layout/PageContainer";
import { generatePageMetadata } from "@/lib/seo";
import { seoConfig } from "@/data/seo";
import { storeDetailsData } from "@/data/store";

export const metadata: Metadata = generatePageMetadata(
  seoConfig.pages.whyUs.title,
  seoConfig.pages.whyUs.description,
  "/why-kamal-selections"
);

export default function WhyKamalSelectionsPage() {
  return (
    <PageContainer>
      <section className="py-20 bg-[#2A0717] text-[#FFF8EA]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <span className="text-xs uppercase tracking-widest text-[#E5C378]">WHY CHOOSE US</span>
          <h1 className="font-serif text-4xl font-bold mt-2 mb-6">Style That Fits Your Budget</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left mt-8">
            {storeDetailsData.features.map((feature, idx) => (
              <div key={idx} className="p-6 bg-[#1A030C] border border-[#E5C378]/30 rounded-2xl">
                <span className="text-[#E5C378] font-bold text-sm block mb-1">0{idx + 1}</span>
                <p className="text-base font-medium">{feature}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </PageContainer>
  );
}
