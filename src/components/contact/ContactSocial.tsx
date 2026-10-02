"use client";

import Image from "next/image";
import { brandData } from "@/data/brand";

const INSTA_POSTS = [
  {
    image: "/images/store/kamal-womens-department-model.jpg",
    alt: "Kamal Selections Festive Saree Collection on Instagram",
    likes: "248",
    tag: "#NewArrivals",
  },
  {
    image: "/images/store/kamal-kids-department-models.jpg",
    alt: "Kamal Selections Kids Festive Wear on Instagram",
    likes: "312",
    tag: "#KidsWear",
  },
  {
    image: "/images/store/kamal-selections-new-angle-showroom.jpg",
    alt: "Kamal Selections Showroom Interior in Shadnagar",
    likes: "419",
    tag: "#StoreUpdates",
  },
  {
    image: "/images/store/kamal-selections-family-wardrobe.jpg",
    alt: "Kamal Selections Family Ethnic Wardrobe",
    likes: "185",
    tag: "#ShadnagarShowroom",
  },
];

export function ContactSocial() {
  return (
    <section className="py-20 md:py-28 bg-[#FAF3EB] text-[#30251F] relative overflow-hidden border-t border-[#E5C378]/30" id="social">
      {/* AMBIENT GLOW ACCENTS */}
      <div className="absolute top-0 right-0 w-[30rem] h-[30rem] bg-gradient-to-bl from-[#E5C378]/20 via-[#FAD0C4]/15 to-transparent rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[25rem] h-[25rem] bg-gradient-to-tr from-[#A41A50]/10 via-transparent to-transparent rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* HEADER */}
        <div className="text-center max-w-2xl mx-auto mb-14 md:mb-18">
          
          {/* INSTAGRAM ICON BADGE */}
          <div className="w-14 h-14 mx-auto mb-5 rounded-2xl bg-[#FFFFFF] border border-[#E5C378]/60 flex items-center justify-center text-[#A41A50] shadow-md backdrop-blur-md">
            <svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" strokeWidth="1.8">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
            </svg>
          </div>

          <div className="inline-flex items-center gap-3 mb-3">
            <span className="w-8 h-px bg-[#D4AF37]"></span>
            <span className="text-xs font-bold tracking-[0.24em] text-[#A41A50] uppercase">
              SOCIAL CONNECTION
            </span>
            <span className="w-8 h-px bg-[#D4AF37]"></span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#30251F] mb-4">
            STAY IN THE LOOP.
          </h2>

          <p className="text-base text-[#69564A] leading-relaxed max-w-lg mx-auto mb-8">
            Follow <span className="text-[#A41A50] font-semibold">{brandData.social.instagramHandle}</span> for new festive arrivals, behind-the-scenes draping, and daily Shadnagar showroom highlights.
          </p>

          <a
            href={brandData.social.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary btn-pill bg-[#A41A50] text-[#FFFFFF] border-none shadow-xl hover:bg-[#80123D] hover:shadow-2xl hover:scale-105 transition-all inline-flex items-center gap-2"
            id="contact-instagram-cta-btn"
          >
            <span>Follow {brandData.social.instagramHandle}</span>
            <span aria-hidden="true" className="btn-arrow">→</span>
          </a>
        </div>

        {/* MOCK INSTAGRAM FEED GRID */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {INSTA_POSTS.map((post, idx) => (
            <a
              key={idx}
              href={brandData.social.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="relative aspect-square rounded-2xl overflow-hidden shadow-lg border border-[#E5C378]/50 bg-[#FFFFFF] group cursor-pointer"
            >
              <Image
                src={post.image}
                alt={post.alt}
                fill
                className="object-cover object-center transition-transform duration-700 group-hover:scale-110"
                sizes="(max-width: 640px) 50vw, 25vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#20040A]/90 via-[#20040A]/20 to-transparent opacity-75 group-hover:opacity-90 transition-opacity" />

              {/* OVERLAY CONTENT */}
              <div className="absolute inset-0 p-4 flex flex-col justify-between z-10">
                <div className="flex items-center justify-between">
                  <span className="px-2.5 py-1 rounded-full bg-[#20040A]/80 border border-[#E5C378]/50 text-[#E5C378] text-[9px] font-bold tracking-wider backdrop-blur-md">
                    {post.tag}
                  </span>
                  <div className="w-7 h-7 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity">
                    <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                      <polyline points="15 3 21 3 21 9"/>
                      <line x1="10" y1="14" x2="21" y2="3"/>
                    </svg>
                  </div>
                </div>

                <div className="flex items-center gap-1.5 text-xs text-[#F8E5BA] font-semibold">
                  <span>♥ {post.likes}</span>
                </div>
              </div>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
}
