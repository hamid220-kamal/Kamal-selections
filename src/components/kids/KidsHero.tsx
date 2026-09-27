import Image from "next/image";
import Link from "next/link";

export function KidsHero() {
  return (
    <section className="relative isolate overflow-hidden bg-[#241117] text-[#FFF8EA]">
      <Image
        src="/images/kids/center-kids-hero.jpg"
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover object-[center_42%]"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[#1A030C]/95 via-[#1A030C]/70 to-[#1A030C]/20" aria-hidden="true" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#1A030C]/65 via-transparent to-[#1A030C]/15" aria-hidden="true" />

      <div className="relative z-10 mx-auto flex min-h-[520px] max-w-7xl items-center px-5 pb-16 pt-28 sm:min-h-[580px] sm:px-8 sm:pb-20 sm:pt-36 lg:px-12">
        <div className="max-w-2xl">
          <span className="inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-[#F0CE83]">
            <span className="h-px w-8 bg-[#F0CE83]" aria-hidden="true" />
            Kids Wear Collection
          </span>
          <h1 className="mt-5 max-w-xl font-serif text-4xl font-semibold leading-[1.08] sm:text-6xl">
            Little looks for their biggest days.
          </h1>
          <p className="mt-5 max-w-lg text-base leading-relaxed text-[#FFF8EA]/85 sm:text-lg">
            From playful everyday outfits to celebration-ready styles, find something they will love wearing.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-x-7 gap-y-4">
            <Link
              href="#categories"
              className="inline-flex min-h-12 items-center gap-3 bg-[#E5C378] px-6 text-sm font-semibold text-[#241117] transition-colors hover:bg-[#F3DDA8] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#FFF8EA]"
            >
              Explore the collection <span aria-hidden="true">↓</span>
            </Link>
            <span className="text-sm text-[#FFF8EA]/75">Girls · Boys · Frocks · Sets</span>
          </div>
        </div>
      </div>
    </section>
  );
}
