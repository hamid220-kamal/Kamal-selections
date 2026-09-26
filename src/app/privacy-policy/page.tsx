import { Metadata } from "next";
import { PageContainer } from "@/components/layout/PageContainer";
import { generatePageMetadata } from "@/lib/seo";
import { seoConfig } from "@/data/seo";

export const metadata: Metadata = generatePageMetadata(
  seoConfig.pages.privacy.title,
  seoConfig.pages.privacy.description,
  "/privacy-policy"
);

export default function PrivacyPolicyPage() {
  return (
    <PageContainer>
      <section className="py-20 bg-[#FAF3EB] text-[#3E0A23]">
        <div className="max-w-3xl mx-auto px-4">
          <h1 className="font-serif text-3xl font-bold mb-6">Privacy Policy</h1>
          <p className="text-sm text-[#4A2B35] leading-relaxed">
            Kamal Selections values your privacy. We do not collect personal information on this website except when you voluntarily contact us.
          </p>
        </div>
      </section>
    </PageContainer>
  );
}
