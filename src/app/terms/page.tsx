import { Metadata } from "next";
import Link from "next/link";
import { PageContainer } from "@/components/layout/PageContainer";
import { generatePageMetadata } from "@/lib/seo";
import { seoConfig } from "@/data/seo";
import { brandData } from "@/data/brand";

export const metadata: Metadata = generatePageMetadata(
  seoConfig.pages.terms.title,
  seoConfig.pages.terms.description,
  "/terms"
);

export default function TermsPage() {
  return (
    <PageContainer>
      <section className="py-16 md:py-24 bg-[#FAF3EB] text-[#30251F] relative overflow-hidden">
        {/* AMBIENT GLOW */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-[#E5C378]/15 via-transparent to-transparent rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* HEADER */}
          <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-3 mb-3">
              <span className="w-8 h-px bg-[#D4AF37]"></span>
              <span className="text-xs font-semibold tracking-[0.24em] text-[#A41A50] uppercase">
                STORE TERMS &amp; GUIDELINES
              </span>
              <span className="w-8 h-px bg-[#D4AF37]"></span>
            </div>

            <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#30251F] mb-4">
              Terms &amp; Conditions
            </h1>

            <p className="text-sm text-[#69564A]">
              Effective Date: October 2026 · {brandData.name} (Ibrahim Complex, Shadnagar)
            </p>
          </div>

          {/* TERMS CONTENT CARD */}
          <div className="bg-[#FFFFFF] rounded-3xl p-8 sm:p-12 border border-[#E5C378]/40 shadow-xl space-y-10">
            
            {/* SECTION 1 */}
            <div>
              <h2 className="font-serif text-xl sm:text-2xl font-bold text-[#30251F] mb-3 flex items-center gap-3">
                <span className="w-7 h-7 rounded-lg bg-[#FAF3EB] border border-[#E5C378]/50 text-[#A41A50] flex items-center justify-center text-xs">1</span>
                <span>Acceptance of Terms</span>
              </h2>
              <p className="text-sm sm:text-base text-[#51443B] leading-relaxed">
                Welcome to the official website of <strong>Kamal Selections</strong>. By accessing or browsing this website, you agree to comply with and be bound by the following Terms &amp; Conditions. These terms govern the informational showcase of our physical clothing boutique in Shadnagar.
              </p>
            </div>

            {/* SECTION 2 */}
            <div>
              <h2 className="font-serif text-xl sm:text-2xl font-bold text-[#30251F] mb-3 flex items-center gap-3">
                <span className="w-7 h-7 rounded-lg bg-[#FAF3EB] border border-[#E5C378]/50 text-[#A41A50] flex items-center justify-center text-xs">2</span>
                <span>Informational Catalog &amp; Store Availability</span>
              </h2>
              <p className="text-sm sm:text-base text-[#51443B] leading-relaxed mb-3">
                All garments, sarees, lehengas, frocks, kurtis, and accessories displayed on this website represent sample collections and ongoing style categories available at our physical store.
              </p>
              <ul className="list-disc pl-6 space-y-2 text-sm sm:text-base text-[#51443B]">
                <li>Product availability, exact fabric shades, and sizing are subject to physical store stock at Ibrahim Complex, Main Road, Shadnagar.</li>
                <li>Prices, promotional offers, and collection updates may vary and are finalized at our physical checkout counters.</li>
              </ul>
            </div>

            {/* SECTION 3 */}
            <div>
              <h2 className="font-serif text-xl sm:text-2xl font-bold text-[#30251F] mb-3 flex items-center gap-3">
                <span className="w-7 h-7 rounded-lg bg-[#FAF3EB] border border-[#E5C378]/50 text-[#A41A50] flex items-center justify-center text-xs">3</span>
                <span>In-Store Payment &amp; Try-On Policy</span>
              </h2>
              <p className="text-sm sm:text-base text-[#51443B] leading-relaxed">
                Purchases and try-ons take place directly inside our physical air-conditioned showroom. We accept major payment methods including <strong>UPI (PhonePe/Google Pay/Paytm)</strong>, credit/debit cards, and cash. Billing receipts are issued directly at our store counter upon purchase.
              </p>
            </div>

            {/* SECTION 4 */}
            <div>
              <h2 className="font-serif text-xl sm:text-2xl font-bold text-[#30251F] mb-3 flex items-center gap-3">
                <span className="w-7 h-7 rounded-lg bg-[#FAF3EB] border border-[#E5C378]/50 text-[#A41A50] flex items-center justify-center text-xs">4</span>
                <span>Intellectual Property &amp; Brand Copyright</span>
              </h2>
              <p className="text-sm sm:text-base text-[#51443B] leading-relaxed">
                The content, brand name &quot;Kamal Selections&quot;, logo, photography, design elements, and text on this website are the property of Kamal Selections. Unauthorized reproduction, scraping, or commercial misuse of website imagery or brand assets is strictly prohibited.
              </p>
            </div>

            {/* SECTION 5 */}
            <div>
              <h2 className="font-serif text-xl sm:text-2xl font-bold text-[#30251F] mb-3 flex items-center gap-3">
                <span className="w-7 h-7 rounded-lg bg-[#FAF3EB] border border-[#E5C378]/50 text-[#A41A50] flex items-center justify-center text-xs">5</span>
                <span>Jurisdiction &amp; Store Location</span>
              </h2>
              <p className="text-sm sm:text-base text-[#51443B] leading-relaxed">
                These terms are governed by the laws of India. Any disputes or inquiries relating to in-store purchases or services are subject to the local jurisdiction of Shadnagar / Telangana, India.
              </p>
            </div>

            {/* SECTION 6 */}
            <div>
              <h2 className="font-serif text-xl sm:text-2xl font-bold text-[#30251F] mb-3 flex items-center gap-3">
                <span className="w-7 h-7 rounded-lg bg-[#FAF3EB] border border-[#E5C378]/50 text-[#A41A50] flex items-center justify-center text-xs">6</span>
                <span>Contact Details</span>
              </h2>
              <div className="p-5 rounded-2xl bg-[#FAF3EB] border border-[#E5C378]/50 text-sm text-[#30251F]">
                <strong className="block text-[#A41A50] font-serif text-base mb-1">{brandData.name}</strong>
                <p className="mb-1">{brandData.address.fullAddress}</p>
                <p className="mb-1">Phone / WhatsApp: <a href={`tel:${brandData.phone}`} className="font-bold text-[#A41A50] underline">+{brandData.phone}</a></p>
                <p>Hours: {brandData.hours.displayHours}</p>
              </div>
            </div>

            {/* RETURN CTA */}
            <div className="pt-6 border-t border-[#E5C378]/30 text-center">
              <Link href="/" className="btn btn-outline btn-pill border-[#A41A50] text-[#A41A50] hover:bg-[#A41A50] hover:text-white">
                <span>← Return to Home</span>
              </Link>
            </div>

          </div>

        </div>
      </section>
    </PageContainer>
  );
}
