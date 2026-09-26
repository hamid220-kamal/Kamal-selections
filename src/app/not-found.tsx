import Link from "next/link";
import { PageContainer } from "@/components/layout/PageContainer";

export default function NotFound() {
  return (
    <PageContainer>
      <section className="py-24 bg-[#1A030C] text-[#FFF8EA] text-center min-h-[70vh] flex items-center justify-center">
        <div className="max-w-xl mx-auto px-4">
          <span className="text-xs uppercase tracking-widest text-[#E5C378]">404 ERROR</span>
          <h1 className="font-serif text-4xl font-bold mt-2 mb-4">
            Looks like this style went missing.
          </h1>
          <p className="text-[#FFF8EA]/80 mb-8">
            The page you are looking for might have been removed or is temporarily unavailable.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/"
              className="bg-[#E5C378] text-[#2A0717] px-6 py-3 rounded-full font-bold text-xs"
            >
              Back Home
            </Link>
            <Link
              href="/women"
              className="border border-[#FFF8EA]/40 text-[#FFF8EA] px-6 py-3 rounded-full font-semibold text-xs hover:bg-white/10"
            >
              Explore Women&apos;s Wear
            </Link>
            <Link
              href="/kids"
              className="border border-[#FFF8EA]/40 text-[#FFF8EA] px-6 py-3 rounded-full font-semibold text-xs hover:bg-white/10"
            >
              Explore Kids Wear
            </Link>
          </div>
        </div>
      </section>
    </PageContainer>
  );
}
