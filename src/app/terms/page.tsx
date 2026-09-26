import { Metadata } from "next";
import { PageContainer } from "@/components/layout/PageContainer";
import { generatePageMetadata } from "@/lib/seo";
import { seoConfig } from "@/data/seo";

export const metadata: Metadata = generatePageMetadata(
  seoConfig.pages.terms.title,
  seoConfig.pages.terms.description,
  "/terms"
);

export default function TermsPage() {
  return (
    <PageContainer>
      <section className="py-20 bg-[#FAF3EB] text-[#3E0A23]">
        <div className="max-w-3xl mx-auto px-4">
          <h1 className="font-serif text-3xl font-bold mb-6">Terms &amp; Conditions</h1>
          <p className="text-sm text-[#4A2B35] leading-relaxed">
            Welcome to Kamal Selections. Information on this website is for general showcase purposes. Products and styles are subject to physical store availability in Shadnagar.
          </p>
        </div>
      </section>
    </PageContainer>
  );
}
