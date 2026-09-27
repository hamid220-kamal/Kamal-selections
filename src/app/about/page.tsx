import { Metadata } from "next";
import Image from "next/image";
import { PageContainer } from "@/components/layout/PageContainer";
import { AboutHero } from "@/components/about/AboutHero";
import { generatePageMetadata } from "@/lib/seo";
import { seoConfig } from "@/data/seo";
import { brandData } from "@/data/brand";

export const metadata: Metadata = generatePageMetadata(
  seoConfig.pages.about.title,
  seoConfig.pages.about.description,
  "/about"
);

export default function AboutPage() {
  return (
    <PageContainer>
      <AboutHero />
      <section id="story" className="bg-[#F4EEE5] text-[#30251F]">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-14 sm:px-6 sm:py-20 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20 lg:px-8">
          <div className="relative mx-auto w-full max-w-lg">
            <div className="absolute -left-3 -top-3 h-full w-full border border-[#B37B49]/55" aria-hidden="true" />
            <div className="relative aspect-[4/5] overflow-hidden bg-[#D8CEC1]">
              <Image
                src="/assets/owner.png"
                alt="The owner of Kamal Selections at her store"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 42vw"
                className="object-cover object-center"
              />
            </div>
            <p className="mt-3 text-xs uppercase tracking-[0.18em] text-[#69564A]">
              Kamal Selections · Shadnagar
            </p>
          </div>

          <div className="max-w-xl py-2 lg:py-8">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#93643B]">
              A LOCAL STORE, A PERSONAL TOUCH
            </span>
            <h2 className="mt-4 font-serif text-4xl font-semibold leading-tight sm:text-5xl">
              A warm welcome, and a wardrobe for every occasion.
            </h2>
            <div className="my-7 h-px w-16 bg-[#B37B49]" aria-hidden="true" />
            <p className="text-lg leading-relaxed text-[#51443B]">
              Established in {brandData.establishedYear}, Kamal Selections brings together women&apos;s and kids&apos; fashion in Shadnagar. We welcome our neighbours to explore thoughtful everyday styles, festive outfits and little ones&apos; favourites in one friendly place.
            </p>
            <p className="mt-5 text-base leading-relaxed text-[#51443B]">
              Visit us at {brandData.address.fullAddress}. Our collection is chosen to offer variety, comfort and value, with the personal help of a local family-run store.
            </p>
            <a
              href="/store"
              className="mt-8 inline-flex min-h-11 items-center border border-[#4A0717] px-5 py-3 text-sm font-semibold text-[#4A0717] transition-colors hover:bg-[#4A0717] hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#4A0717]"
            >
              Visit Our Store <span className="ml-3" aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </section>
    </PageContainer>
  );
}
