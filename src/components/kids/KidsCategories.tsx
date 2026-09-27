import Image from "next/image";
import { kidsData } from "@/data/kids";

export function KidsCategories() {
  return (
    <section className="bg-[#FAF3EB] py-16 sm:py-20" id="categories">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-9 flex flex-wrap items-end justify-between gap-4 sm:mb-12">
          <div className="max-w-2xl">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#9A6B3F]">Made for little moments</span>
            <h2 className="mt-3 font-serif text-3xl font-semibold text-[#3E0A23] sm:text-4xl">Explore kids&apos; collections</h2>
            <p className="mt-3 max-w-xl text-sm leading-relaxed text-[#4A2B35]/80 sm:text-base">
              Comfortable favourites and special-day outfits, all waiting to be discovered in store.
            </p>
          </div>
          <span className="border-b border-[#B37B49]/50 pb-2 text-sm text-[#69564A]">
            {kidsData.categories.length} collections
          </span>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4">
          {kidsData.categories.map((cat) => (
            <article
              key={cat.id}
              className="group relative isolate aspect-[4/5] min-h-[320px] overflow-hidden rounded-md bg-[#D9CBB9] sm:min-h-0"
            >
              <Image
                src={cat.image}
                alt={cat.altText}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1A030C]/90 via-[#1A030C]/10 to-transparent" aria-hidden="true" />
              <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
                <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#F0CE83]">Kamal Selections</span>
                <h3 className="mt-2 font-serif text-2xl font-semibold text-white">{cat.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/85">{cat.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
