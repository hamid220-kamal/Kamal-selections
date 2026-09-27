import { Metadata } from "next";
import { PageContainer } from "@/components/layout/PageContainer";
import { ContactHero } from "@/components/contact/ContactHero";
import { generatePageMetadata } from "@/lib/seo";
import { seoConfig } from "@/data/seo";
import { brandData } from "@/data/brand";

export const metadata: Metadata = generatePageMetadata(
  seoConfig.pages.contact.title,
  seoConfig.pages.contact.description,
  "/contact"
);

export default function ContactPage() {
  return (
    <PageContainer>
      <ContactHero />
      <section id="contact-details" className="py-20 bg-[#FAF3EB] text-[#3E0A23]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <span className="text-xs uppercase tracking-widest text-[#CFA753]">GET IN TOUCH</span>
          <h2 className="font-serif text-4xl font-bold mt-2 mb-6">Contact Us</h2>
          <div className="bg-white p-8 rounded-2xl border border-[#E5C378]/40 max-w-lg mx-auto text-left">
            <p className="text-base mb-3"><strong>Phone:</strong> <a href={`tel:${brandData.phone}`} className="text-[#C42766]">{brandData.phone}</a></p>
            <p className="text-base mb-3"><strong>Address:</strong> {brandData.address.fullAddress}</p>
            <p className="text-base mb-4"><strong>Instagram:</strong> <a href={brandData.social.instagramUrl} target="_blank" rel="noopener noreferrer" className="text-[#C42766]">{brandData.social.instagramHandle}</a></p>
            <a
              href={brandData.maps.directionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#A41A50] text-white px-6 py-2.5 rounded-full text-xs font-bold"
            >
              Get Directions &rarr;
            </a>
          </div>
        </div>
      </section>
    </PageContainer>
  );
}
