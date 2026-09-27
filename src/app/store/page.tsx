import { Metadata } from "next";
import { PageContainer } from "@/components/layout/PageContainer";
import { StoreHero } from "@/components/store/StoreHero";
import { generatePageMetadata } from "@/lib/seo";
import { seoConfig } from "@/data/seo";
import { storeDetailsData } from "@/data/store";

export const metadata: Metadata = generatePageMetadata(
  seoConfig.pages.store.title,
  seoConfig.pages.store.description,
  "/store"
);

export default function StorePage() {
  return (
    <PageContainer>
      <StoreHero />
      <section id="store-details" className="py-20 bg-[#FAF3EB] text-[#3E0A23]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <span className="text-xs uppercase tracking-widest text-[#CFA753]">PHYSICAL STORE LOCATION</span>
          <h2 className="font-serif text-4xl font-bold mt-2 mb-6">Visit Kamal Selections</h2>
          <div className="bg-white p-8 rounded-2xl border border-[#E5C378]/40 shadow-sm text-left max-w-xl mx-auto mb-8">
            <h3 className="font-serif text-xl font-bold mb-4">{storeDetailsData.storeName}</h3>
            <p className="mb-2"><strong>📍 Address:</strong> {storeDetailsData.location}</p>
            <p className="mb-2"><strong>⏰ Timings:</strong> {storeDetailsData.displayHours}</p>
            <p className="mb-4"><strong>☎ Call:</strong> <a href={`tel:${storeDetailsData.phone}`} className="text-[#C42766] font-bold">{storeDetailsData.phone}</a></p>
            <a
              href={storeDetailsData.directionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#3E0A23] text-white px-6 py-2.5 rounded-full text-xs font-bold"
            >
              Get Directions on Google Maps &rarr;
            </a>
          </div>
        </div>
      </section>
    </PageContainer>
  );
}
