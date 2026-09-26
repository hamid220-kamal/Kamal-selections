import { Metadata } from "next";
import { PageContainer } from "@/components/layout/PageContainer";
import { generatePageMetadata } from "@/lib/seo";
import { seoConfig } from "@/data/seo";
import { brandData } from "@/data/brand";

export const metadata: Metadata = generatePageMetadata(
  seoConfig.pages.about.title,
  seoConfig.pages.about.description,
  "/about"
);

export default function AboutPage() {
  return (
    <PageContainer>
      <section className="py-20 bg-[#FAF3EB] text-[#3E0A23]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <span className="text-xs uppercase tracking-widest text-[#CFA753]">ABOUT KAMAL SELECTIONS</span>
          <h1 className="font-serif text-4xl font-bold mt-2 mb-6">Our Story</h1>
          <p className="text-lg text-[#4A2B35] leading-relaxed mb-4">
            Established in {brandData.establishedYear}, Kamal Selections brings together women&apos;s and kids&apos; fashion in Shadnagar.
          </p>
          <p className="text-base text-[#4A2B35] leading-relaxed">
            Located at {brandData.address.fullAddress}, we focus on providing quality, variety, and value for everyday clothing and special occasions.
          </p>
        </div>
      </section>
    </PageContainer>
  );
}
