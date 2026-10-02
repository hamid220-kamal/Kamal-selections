import { Metadata } from "next";
import Link from "next/link";
import { PageContainer } from "@/components/layout/PageContainer";
import {
  generatePageMetadata,
  generateWebPageSchema,
  generateBreadcrumbSchema,
  generateFAQSchema,
} from "@/lib/seo";
import { seoConfig } from "@/data/seo";
import { faqData } from "@/data/faq";

export const metadata: Metadata = generatePageMetadata(
  seoConfig.pages.faq.title,
  seoConfig.pages.faq.description,
  "/faq"
);

export default function FAQPage() {
  const webPageSchema = generateWebPageSchema(
    seoConfig.pages.faq.title,
    seoConfig.pages.faq.description,
    "/faq"
  );

  const breadcrumbSchema = generateBreadcrumbSchema(
    [
      { name: "Home", item: "/" },
      { name: "FAQ", item: "/faq" },
    ],
    "/faq"
  );

  const faqSchema = generateFAQSchema(faqData, "/faq");

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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <section className="py-20 bg-[#FDF8F2] text-[#3E0A23]">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-xs uppercase tracking-widest text-[#CFA753]">
              KNOWLEDGE BASE &amp; STORE INFORMATION
            </span>
            <h1 className="font-serif text-4xl font-bold mt-2">
              Frequently Asked Questions
            </h1>
            <p className="text-sm text-[#4A2B35] mt-2 max-w-xl mx-auto">
              Find direct, factual answers about Kamal Selections clothing store in Shadnagar, Telangana.
            </p>
          </div>
          <div className="space-y-6 mb-12">
            {faqData.map((item) => (
              <div
                key={item.id}
                className="p-6 bg-white rounded-2xl border border-[#E5C378]/30 shadow-sm"
              >
                <h2 className="font-serif text-lg font-bold text-[#3E0A23] mb-2">
                  {item.question}
                </h2>
                <p className="text-sm text-[#4A2B35] leading-relaxed">
                  {item.answer}
                </p>
              </div>
            ))}
          </div>

          {/* CONTEXTUAL INTERNAL NAVIGATION LINKS */}
          <div className="pt-8 border-t border-[#E5C378]/30 text-center">
            <h3 className="font-serif text-lg font-bold text-[#3E0A23] mb-4">
              Explore More at Kamal Selections
            </h3>
            <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-semibold">
              <Link
                href="/women"
                className="bg-[#3E0A23] text-[#FFF8EA] px-5 py-2.5 rounded-full hover:bg-[#A41A50] transition-all"
              >
                Women&apos;s Wear at Kamal Selections
              </Link>
              <Link
                href="/kids"
                className="border border-[#3E0A23]/40 text-[#3E0A23] px-5 py-2.5 rounded-full hover:bg-[#3E0A23] hover:text-white transition-all"
              >
                Kids Wear at Kamal Selections
              </Link>
              <Link
                href="/store"
                className="border border-[#3E0A23]/40 text-[#3E0A23] px-5 py-2.5 rounded-full hover:bg-[#3E0A23] hover:text-white transition-all"
              >
                Visit our Shadnagar store
              </Link>
              <Link
                href="/contact"
                className="border border-[#3E0A23]/40 text-[#3E0A23] px-5 py-2.5 rounded-full hover:bg-[#3E0A23] hover:text-white transition-all"
              >
                Contact Kamal Selections
              </Link>
            </div>
          </div>
        </div>
      </section>
    </PageContainer>
  );
}


