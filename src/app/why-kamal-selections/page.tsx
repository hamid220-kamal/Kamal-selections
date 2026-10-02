import { Metadata } from "next";
import Link from "next/link";
import { PageContainer } from "@/components/layout/PageContainer";
import { generatePageMetadata, generateBreadcrumbSchema } from "@/lib/seo";
import { seoConfig } from "@/data/seo";
import { storeDetailsData } from "@/data/store";

export const metadata: Metadata = generatePageMetadata(
  seoConfig.pages.whyUs.title,
  seoConfig.pages.whyUs.description,
  "/why-kamal-selections"
);

export default function WhyKamalSelectionsPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", item: "/" },
    { name: "Why Kamal Selections", item: "/why-kamal-selections" },
  ]);

  return (
    <PageContainer>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <section className="py-20 bg-[#2A0717] text-[#FFF8EA]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <span className="text-xs uppercase tracking-widest text-[#E5C378]">WHY CHOOSE US</span>
          <h1 className="font-serif text-4xl font-bold mt-2 mb-6">Style That Fits Your Budget</h1>
          <p className="text-sm sm:text-base text-[#FFF8EA]/80 max-w-2xl mx-auto mb-8 leading-relaxed">
            Local shoppers in Shadnagar choose Kamal Selections for our physical showroom experience, curated women's ethnic collection, comfortable children's fashion, and honest pricing.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left mt-8 mb-12">
            {storeDetailsData.features.map((feature, idx) => (
              <div key={idx} className="p-6 bg-[#1A030C] border border-[#E5C378]/30 rounded-2xl">
                <span className="text-[#E5C378] font-bold text-sm block mb-1">0{idx + 1}</span>
                <p className="text-base font-medium">{feature}</p>
              </div>
            ))}
          </div>

          {/* CONTEXTUAL INTERNAL NAVIGATION LINKS */}
          <div className="pt-6 border-t border-[#E5C378]/20 flex flex-wrap items-center justify-center gap-4 text-xs font-semibold">
            <Link href="/women" className="bg-[#E5C378] text-[#2A0717] px-5 py-2.5 rounded-full hover:bg-white transition-all">
              Explore Women&apos;s Wear
            </Link>
            <Link href="/kids" className="border border-[#E5C378]/60 text-[#E5C378] px-5 py-2.5 rounded-full hover:bg-[#E5C378] hover:text-[#2A0717] transition-all">
              Browse Kids Wear
            </Link>
            <Link href="/store" className="border border-[#E5C378]/60 text-[#E5C378] px-5 py-2.5 rounded-full hover:bg-[#E5C378] hover:text-[#2A0717] transition-all">
              Visit Our Shadnagar Store
            </Link>
            <Link href="/contact" className="border border-[#E5C378]/60 text-[#E5C378] px-5 py-2.5 rounded-full hover:bg-[#E5C378] hover:text-[#2A0717] transition-all">
              Contact Store Team
            </Link>
          </div>
        </div>
      </section>
    </PageContainer>
  );
}


