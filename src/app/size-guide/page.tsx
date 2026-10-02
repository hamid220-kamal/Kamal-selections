import { Metadata } from "next";
import Link from "next/link";
import { PageContainer } from "@/components/layout/PageContainer";
import { generatePageMetadata, generateWebPageSchema, generateBreadcrumbSchema } from "@/lib/seo";
import { seoConfig } from "@/data/seo";

export const metadata: Metadata = generatePageMetadata(
  seoConfig.pages.sizeGuide.title,
  seoConfig.pages.sizeGuide.description,
  "/size-guide"
);

export default function SizeGuidePage() {
  const webPageSchema = generateWebPageSchema(
    seoConfig.pages.sizeGuide.title,
    seoConfig.pages.sizeGuide.description,
    "/size-guide"
  );

  const breadcrumbSchema = generateBreadcrumbSchema(
    [
      { name: "Home", item: "/" },
      { name: "Size Guide", item: "/size-guide" },
    ],
    "/size-guide"
  );

  return (
    <PageContainer>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <section className="py-20 bg-[#FAF3EB] text-[#3E0A23]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <span className="text-xs uppercase tracking-widest text-[#CFA753]">FITTING GUIDE</span>
          <h1 className="font-serif text-4xl font-bold mt-2 mb-8">Size Guide</h1>
          <div className="bg-white p-6 rounded-2xl border border-[#E5C378]/40 max-w-2xl mx-auto text-left shadow-sm mb-10">
            <h2 className="font-serif text-xl font-bold mb-4 text-[#3E0A23]">Women&apos;s Clothing Sizing</h2>
            <p className="text-sm text-[#4A2B35] leading-relaxed mb-4">
              Sizes typically range from S (36) to XXL (44) for Kurtis, Dresses, Tops and 3-Piece Sets. Visit our physical store in Shadnagar for personalized fitting assistance and try-ons.
            </p>
            <h2 className="font-serif text-xl font-bold mb-4 text-[#3E0A23]">Kids&apos; Wear Sizing</h2>
            <p className="text-sm text-[#4A2B35] leading-relaxed">
              Kids&apos; dresses, frocks, and sets are sized by age group (from toddlers up to 14 years). Our store team in Shadnagar will gladly assist you in choosing the perfect fit for your child.
            </p>
          </div>

          {/* CONTEXTUAL INTERNAL NAVIGATION LINKS */}
          <div className="pt-6 border-t border-[#E5C378]/30 flex flex-wrap items-center justify-center gap-4 text-xs font-semibold">
            <Link href="/women" className="bg-[#3E0A23] text-[#FFF8EA] px-5 py-2.5 rounded-full hover:bg-[#A41A50] transition-all">
              Women&apos;s Wear at Kamal Selections
            </Link>
            <Link href="/kids" className="border border-[#3E0A23]/40 text-[#3E0A23] px-5 py-2.5 rounded-full hover:bg-[#3E0A23] hover:text-white transition-all">
              Kids Wear at Kamal Selections
            </Link>
            <Link href="/store" className="border border-[#3E0A23]/40 text-[#3E0A23] px-5 py-2.5 rounded-full hover:bg-[#3E0A23] hover:text-white transition-all">
              Visit our Shadnagar store
            </Link>
            <Link href="/contact" className="border border-[#3E0A23]/40 text-[#3E0A23] px-5 py-2.5 rounded-full hover:bg-[#3E0A23] hover:text-white transition-all">
              Contact Kamal Selections
            </Link>
          </div>
        </div>
      </section>
    </PageContainer>
  );
}



