import { Metadata } from "next";
import Link from "next/link";
import { PageContainer } from "@/components/layout/PageContainer";
import { generatePageMetadata, generateWebPageSchema, generateBreadcrumbSchema } from "@/lib/seo";
import { seoConfig } from "@/data/seo";
import { brandData } from "@/data/brand";

export const metadata: Metadata = generatePageMetadata(
  seoConfig.pages.privacy.title,
  seoConfig.pages.privacy.description,
  "/privacy-policy"
);

export default function PrivacyPolicyPage() {
  const webPageSchema = generateWebPageSchema(
    seoConfig.pages.privacy.title,
    seoConfig.pages.privacy.description,
    "/privacy-policy"
  );

  const breadcrumbSchema = generateBreadcrumbSchema(
    [
      { name: "Home", item: "/" },
      { name: "Privacy Policy", item: "/privacy-policy" },
    ],
    "/privacy-policy"
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

      <section className="py-16 md:py-24 bg-[#FAF3EB] text-[#30251F] relative overflow-hidden">

        {/* AMBIENT GLOW */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-[#E5C378]/15 via-transparent to-transparent rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* HEADER */}
          <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-3 mb-3">
              <span className="w-8 h-px bg-[#D4AF37]"></span>
              <span className="text-xs font-semibold tracking-[0.24em] text-[#A41A50] uppercase">
                TRANSPARENCY &amp; TRUST
              </span>
              <span className="w-8 h-px bg-[#D4AF37]"></span>
            </div>

            <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#30251F] mb-4">
              Privacy Policy
            </h1>

            <p className="text-sm text-[#69564A]">
              Last Updated: October 2026 · {brandData.name} ({brandData.address.city}, Telangana)
            </p>
          </div>

          {/* POLICY CONTENT CARD */}
          <div className="bg-[#FFFFFF] rounded-3xl p-8 sm:p-12 border border-[#E5C378]/40 shadow-xl space-y-10">
            
            {/* SECTION 1 */}
            <div>
              <h2 className="font-serif text-xl sm:text-2xl font-bold text-[#30251F] mb-3 flex items-center gap-3">
                <span className="w-7 h-7 rounded-lg bg-[#FAF3EB] border border-[#E5C378]/50 text-[#A41A50] flex items-center justify-center text-xs">1</span>
                <span>Overview &amp; Information We Collect</span>
              </h2>
              <p className="text-sm sm:text-base text-[#51443B] leading-relaxed mb-3">
                At <strong>Kamal Selections</strong>, we prioritize the privacy and security of our visitors and customers. This website serves as an informational showcase for our physical retail store located at Ibrahim Complex, Main Road, Shadnagar.
              </p>
              <p className="text-sm sm:text-base text-[#51443B] leading-relaxed">
                We do not require account registration or collect sensitive financial data on this website. The only information collected is what you voluntarily provide when inquiring via our contact forms or direct WhatsApp links (such as your name, phone number, and inquiry message).
              </p>
            </div>

            {/* SECTION 2 */}
            <div>
              <h2 className="font-serif text-xl sm:text-2xl font-bold text-[#30251F] mb-3 flex items-center gap-3">
                <span className="w-7 h-7 rounded-lg bg-[#FAF3EB] border border-[#E5C378]/50 text-[#A41A50] flex items-center justify-center text-xs">2</span>
                <span>How We Use Your Information</span>
              </h2>
              <p className="text-sm sm:text-base text-[#51443B] leading-relaxed mb-3">
                Information voluntarily submitted through our website or direct phone/WhatsApp contacts is strictly used to:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-sm sm:text-base text-[#51443B]">
                <li>Respond to your inquiries regarding clothing availability, sizes, fabrics, and pricing.</li>
                <li>Provide directions, store opening hours, and location assistance for our Shadnagar showroom.</li>
                <li>Improve our customer service and boutique offerings based on local preferences.</li>
              </ul>
            </div>

            {/* SECTION 3 */}
            <div>
              <h2 className="font-serif text-xl sm:text-2xl font-bold text-[#30251F] mb-3 flex items-center gap-3">
                <span className="w-7 h-7 rounded-lg bg-[#FAF3EB] border border-[#E5C378]/50 text-[#A41A50] flex items-center justify-center text-xs">3</span>
                <span>Third-Party Links &amp; Services</span>
              </h2>
              <p className="text-sm sm:text-base text-[#51443B] leading-relaxed">
                Our website includes links to trusted third-party services such as <strong>Google Maps</strong> (for store directions), <strong>Google Business Reviews</strong>, <strong>Instagram</strong>, and <strong>WhatsApp</strong>. Interacting with these services operates under their respective privacy policies and terms of service.
              </p>
            </div>

            {/* SECTION 4 */}
            <div>
              <h2 className="font-serif text-xl sm:text-2xl font-bold text-[#30251F] mb-3 flex items-center gap-3">
                <span className="w-7 h-7 rounded-lg bg-[#FAF3EB] border border-[#E5C378]/50 text-[#A41A50] flex items-center justify-center text-xs">4</span>
                <span>Data Protection &amp; Confidentiality</span>
              </h2>
              <p className="text-sm sm:text-base text-[#51443B] leading-relaxed">
                We respect your trust. <strong>Kamal Selections does not sell, rent, or trade</strong> your personal contact details to any third-party marketing agencies or advertisers. Your contact details remain confidential between you and our store team.
              </p>
            </div>

            {/* SECTION 5 */}
            <div>
              <h2 className="font-serif text-xl sm:text-2xl font-bold text-[#30251F] mb-3 flex items-center gap-3">
                <span className="w-7 h-7 rounded-lg bg-[#FAF3EB] border border-[#E5C378]/50 text-[#A41A50] flex items-center justify-center text-xs">5</span>
                <span>Contact Us for Privacy Questions</span>
              </h2>
              <p className="text-sm sm:text-base text-[#51443B] leading-relaxed mb-4">
                If you have any questions or concerns regarding our privacy practices or wish to update your details, please reach out to us directly:
              </p>
              <div className="p-5 rounded-2xl bg-[#FAF3EB] border border-[#E5C378]/50 text-sm text-[#30251F]">
                <strong className="block text-[#A41A50] font-serif text-base mb-1">{brandData.name} Showroom</strong>
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
