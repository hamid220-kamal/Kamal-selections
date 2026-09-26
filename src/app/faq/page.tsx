import { Metadata } from "next";
import { PageContainer } from "@/components/layout/PageContainer";
import { generatePageMetadata } from "@/lib/seo";
import { seoConfig } from "@/data/seo";
import { faqData } from "@/data/faq";

export const metadata: Metadata = generatePageMetadata(
  seoConfig.pages.faq.title,
  seoConfig.pages.faq.description,
  "/faq"
);

export default function FAQPage() {
  return (
    <PageContainer>
      <section className="py-20 bg-[#FDF8F2] text-[#3E0A23]">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-xs uppercase tracking-widest text-[#CFA753]">KNOWLEDGE BASE</span>
            <h1 className="font-serif text-4xl font-bold mt-2">Frequently Asked Questions</h1>
          </div>
          <div className="space-y-6">
            {faqData.map((item) => (
              <div key={item.id} className="p-6 bg-white rounded-2xl border border-[#E5C378]/30">
                <h3 className="font-serif text-lg font-bold text-[#3E0A23] mb-2">{item.question}</h3>
                <p className="text-sm text-[#4A2B35]">{item.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </PageContainer>
  );
}
