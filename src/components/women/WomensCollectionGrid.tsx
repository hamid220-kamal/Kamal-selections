"use client";

import { useState } from "react";
import Image from "next/image";
import { womensData, CollectionGridItem } from "@/data/womens";

export function WomensCollectionGrid() {
  const [activeFilter, setActiveFilter] = useState<string>("All");
  const [selectedItem, setSelectedItem] = useState<CollectionGridItem | null>(null);

  const filters = ["All", ...womensData.categories.map((category) => category.name)];

  const filteredItems = activeFilter === "All"
    ? womensData.collectionGrid
    : womensData.collectionGrid.filter((item) => item.category === activeFilter);

  return (
    <section className="py-24 bg-[#FDFBF7]" id="collection-grid">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <span className="text-xs font-bold tracking-widest text-[#D4AF37] uppercase">
            VISUAL GALLERY
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#380511]">
            Styles Worth Discovering
          </h2>
          <div className="w-16 h-[2px] bg-[#D4AF37] mx-auto my-2"></div>
          <p className="text-base sm:text-lg text-[#3D2314]/80">
            Explore the different looks available across our women's collection.
          </p>
        </div>

        {/* CATEGORY FILTER TABS */}
        <div className="mb-5 overflow-x-auto pb-2">
          <div className="flex w-max min-w-full items-center justify-center gap-2 sm:gap-3">
          {filters.map((filter) => (
            <button
              key={filter}
              type="button"
              aria-pressed={activeFilter === filter}
              onClick={() => setActiveFilter(filter)}
              className={`shrink-0 border px-4 py-2 text-xs sm:text-sm font-medium transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#4A0717] ${
                activeFilter === filter
                  ? "border-[#4A0717] bg-[#4A0717] text-[#FAF5EB]"
                  : "border-[#E5C378]/50 bg-transparent text-[#3D2314]/80 hover:border-[#4A0717]"
              }`}
            >
              {filter}
            </button>
          ))}
          </div>
        </div>
        <p className="mb-8 text-center text-sm text-[#3D2314]/75" aria-live="polite">
          Visual style showcase — visit Kamal Selections in Shadnagar to explore live collections.
        </p>

        {/* MASONRY / EDITORIAL SHOWCASE GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredItems.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => setSelectedItem(item)}
              className="group flex w-full cursor-pointer flex-col overflow-hidden rounded-lg border border-[#E5C378]/40 bg-[#FAF5EB] text-left shadow-sm transition-shadow duration-300 hover:shadow-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#4A0717]"
            >
              {/* IMAGE CONTAINER WITH VARYING ASPECT RATIO */}
              <div
                className={`relative w-full overflow-hidden ${
                  item.aspect === "tall"
                    ? "aspect-[3/4]"
                    : item.aspect === "square"
                    ? "aspect-square"
                    : "aspect-[4/5]"
                }`}
              >
                <Image
                  src={item.image}
                  alt={item.altText}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover object-top group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#380511]/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-5">
                  <span className="text-xs font-semibold text-[#D4AF37] uppercase tracking-wider">
                    Enlarge Photo
                  </span>
                </div>
              </div>

              {/* CARD INFORMATION */}
              <div className="p-5 flex-1 flex flex-col justify-between space-y-2">
                <div>
                  <span className="text-[11px] font-semibold text-[#D4AF37] uppercase tracking-widest block">
                    {item.category}
                  </span>
                  <h3 className="font-serif text-xl font-bold text-[#380511] mt-1 group-hover:text-[#4A0717] transition-colors">
                    {item.title}
                  </h3>
                </div>
                <p className="text-xs text-[#3D2314]/75 font-sans">
                  {item.descriptor}
                </p>
              </div>
            </button>
          ))}
        </div>

      </div>

      {/* DETAIL INSPECTION MODAL (NON-COMMERCE LOOK PREVIEW) */}
      {selectedItem && (
        <div
          className="fixed inset-0 z-50 bg-[#1A030C]/80 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6"
          onClick={() => setSelectedItem(null)}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="collection-look-title"
            className="bg-[#FAF5EB] rounded-2xl border border-[#E5C378]/40 shadow-2xl max-w-2xl w-full overflow-hidden p-6 sm:p-8 space-y-6 relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedItem(null)}
              className="absolute top-4 right-4 w-9 h-9 rounded-full bg-[#380511]/10 text-[#380511] flex items-center justify-center font-bold text-lg hover:bg-[#380511] hover:text-[#FAF5EB] transition-colors"
              aria-label="Close detail modal"
            >
              ✕
            </button>

            <div className="relative aspect-[4/3] w-full rounded-xl overflow-hidden shadow-inner">
              <Image
                src={selectedItem.image}
                alt={selectedItem.altText}
                fill
                className="object-cover object-top"
              />
            </div>

            <div className="space-y-3">
              <span className="text-xs font-bold tracking-widest text-[#D4AF37] uppercase">
                {selectedItem.category} SHOWCASE
              </span>
              <h3 id="collection-look-title" className="font-serif text-2xl font-bold text-[#380511]">
                {selectedItem.title}
              </h3>
              <p className="text-sm text-[#3D2314]/85 leading-relaxed">
                {selectedItem.descriptor}. Experience this style and explore our complete in-store catalog at Kamal Selections, Shadnagar.
              </p>
            </div>

            <div className="pt-2 flex flex-wrap gap-4 items-center justify-between border-t border-[#E5C378]/20">
              <span className="text-xs text-[#3D2314]/60 italic">
                Photographed showcase item · Visit store to explore live collections
              </span>
              <a
                href="/store"
                className="px-6 py-2.5 rounded-full bg-[#4A0717] text-[#FAF5EB] text-xs font-bold tracking-wider hover:bg-[#380511] transition-colors"
              >
                Visit Store →
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
