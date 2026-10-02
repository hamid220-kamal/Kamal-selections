import Link from "next/link";
import Image from "next/image";

interface KidsPreviewProps {
  onOpenStoreModal?: () => void;
}

export function KidsPreview({ onOpenStoreModal }: KidsPreviewProps) {
  return (
    <section className="section-kids-showcase" id="kids-wear">
      {/* BOTANICAL BACKGROUND ACCENTS */}
      <div className="botanical-corner corner-top-left" aria-hidden="true">
        <svg viewBox="0 0 200 200" className="botanical-line-svg">
          <g stroke="#CFA753" strokeWidth="1.2" fill="none" opacity="0.3">
            <path d="M 10,10 Q 80,60 140,30 T 170,110" />
            <path d="M 30,10 C 50,30 80,50 60,80 C 40,60 30,30 30,10 Z" fill="#F4C4D9" fillOpacity="0.2" />
          </g>
        </svg>
      </div>

      <div className="botanical-corner corner-bottom-right" aria-hidden="true">
        <svg viewBox="0 0 200 200" className="botanical-line-svg">
          <g stroke="#CFA753" strokeWidth="1.2" fill="none" opacity="0.3">
            <path d="M 190,190 Q 120,130 60,160 T 20,80" />
            <path d="M 170,180 C 150,150 120,130 140,100 C 160,120 170,150 170,180 Z" fill="#F4C4D9" fillOpacity="0.2" />
          </g>
        </svg>
      </div>

      <div className="kids-showcase-container">
        {/* 1. LEFT ZONE: CONTENT & CATEGORY ICON PILLS */}
        <div className="kids-content-col">
          {/* EYEBROW */}
          <div className="showcase-eyebrow-wrap animate-on-scroll fade-in">
            <span className="eyebrow-accent-line"></span>
            <span className="showcase-eyebrow-text">KIDS WEAR</span>
            <span className="eyebrow-accent-line"></span>
          </div>

          {/* MAIN TITLE */}
          <h2 className="kids-showcase-title animate-on-scroll slide-up">
            Kids Wear <span className="title-sub-location">in Shadnagar</span>
          </h2>

          {/* SUPPORTING COPY */}
          <p className="kids-showcase-desc animate-on-scroll slide-up delay-1">
            From playful everyday looks to special occasion outfits, explore a delightful collection of kids’ fashion at Kamal Selections.
          </p>

          {/* SCRIPT STATEMENT */}
          <div className="kids-script-statement animate-on-scroll slide-up delay-2">
            <span className="script-text">Little Styles,<br />Big Personalities</span>
            <span className="script-underline"></span>
          </div>

          {/* FOUR CATEGORY ICON PILLS */}
          <div className="kids-icon-pills-grid animate-on-scroll stagger-children delay-3">
            <div className="pill-item">
              <div className="pill-icon-circle soft-pink-circle">
                <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <circle cx="12" cy="7" r="4"/>
                  <path d="M6 21v-2a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v2"/>
                </svg>
              </div>
              <span className="pill-label">Girls Wear</span>
            </div>

            <div className="pill-item">
              <div className="pill-icon-circle soft-pink-circle">
                <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <path d="M7 4h10l2 4-3 2v8H8v-8L5 8l2-4z"/>
                </svg>
              </div>
              <span className="pill-label">Boys Wear</span>
            </div>

            <div className="pill-item">
              <div className="pill-icon-circle soft-pink-circle">
                <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <path d="M8 4l4 2 4-2 2 3-3 2v11H9V9L6 7l2-3z" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <span className="pill-label">Frocks</span>
            </div>

            <div className="pill-item">
              <div className="pill-icon-circle soft-pink-circle">
                <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <rect x="4" y="4" width="16" height="16" rx="2"/>
                  <line x1="12" y1="4" x2="12" y2="20"/>
                </svg>
              </div>
              <span className="pill-label">Kids Sets</span>
            </div>
          </div>

          {/* PRIMARY CTA BUTTON */}
          <div className="kids-cta-wrap animate-on-scroll fade-in delay-4">
            <Link href="/kids" className="btn btn-burgundy btn-pill" id="open-kids-page">
              <span>Explore Kids Wear</span>
              <svg className="btn-arrow" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.2">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </Link>
          </div>
        </div>

        {/* 2. CENTER ZONE: LARGE HERO IMAGE OF CHILDREN */}
        <div className="kids-hero-portrait-col animate-on-scroll slide-up">
          <div className="badge-trendy-styles badge-kids-trendy">
            <div className="badge-trendy-inner">
              <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="#CFA753" strokeWidth="1.6">
                <path d="M12 2l2.4 6.6L21 11l-6.6 2.4L12 20l-2.4-6.6L3 11l6.6-2.4L12 2z"/>
              </svg>
              <span className="badge-trendy-text">Trendy<br />Styles</span>
            </div>
          </div>

          <div className="kids-arch-frame relative w-full min-h-[380px] sm:min-h-[440px] overflow-hidden rounded-[32px]">
            <Image
              src="/images/home/kamal-selections-kids-celebration-attire.jpg"
              alt="Kamal Selections Kids Festive and Celebration Clothing Showcase"
              className="portrait-img object-cover object-center"
              fill
              sizes="(max-width: 640px) 90vw, (max-width: 1024px) 35vw, 420px"
              loading="lazy"
            />
            <div className="portrait-img-shadow" aria-hidden="true"></div>
          </div>
        </div>

        {/* 3. RIGHT ZONE: FOUR CATEGORY EDITORIAL CARDS (2x2) */}
        <div className="kids-gallery-grid-col animate-on-scroll slide-left">
          <div className="kids-2x2-grid">
            <Link href="/kids" className="category-card-item kids-card group relative block overflow-hidden rounded-2xl border border-[#E5C378]/30 shadow-md no-underline min-h-[140px]">
              <Image
                src="/images/home/kids-cat-girlswear.jpg"
                alt="Kamal Selections Girls Wear"
                className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                fill
                sizes="(max-width: 640px) 45vw, (max-width: 1024px) 20vw, 220px"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent pointer-events-none" />
              <div className="relative z-10 p-4 sm:p-5 flex flex-col justify-end h-full">
                <h3 className="font-serif text-xl sm:text-2xl text-[#FFFFFF] font-bold tracking-wide drop-shadow-md">
                  Girls Wear
                </h3>
              </div>
            </Link>

            <Link href="/kids" className="category-card-item kids-card group relative block overflow-hidden rounded-2xl border border-[#E5C378]/30 shadow-md no-underline min-h-[140px]">
              <Image
                src="/images/home/kids-cat-boyswear.jpg"
                alt="Kamal Selections Boys Wear"
                className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                fill
                sizes="(max-width: 640px) 45vw, (max-width: 1024px) 20vw, 220px"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent pointer-events-none" />
              <div className="relative z-10 p-4 sm:p-5 flex flex-col justify-end h-full">
                <h3 className="font-serif text-xl sm:text-2xl text-[#FFFFFF] font-bold tracking-wide drop-shadow-md">
                  Boys Wear
                </h3>
              </div>
            </Link>

            <Link href="/kids" className="category-card-item kids-card group relative block overflow-hidden rounded-2xl border border-[#E5C378]/30 shadow-md no-underline min-h-[140px]">
              <Image
                src="/images/home/kids-cat-frocks.jpg"
                alt="Kamal Selections Frocks"
                className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                fill
                sizes="(max-width: 640px) 45vw, (max-width: 1024px) 20vw, 220px"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent pointer-events-none" />
              <div className="relative z-10 p-4 sm:p-5 flex flex-col justify-end h-full">
                <h3 className="font-serif text-xl sm:text-2xl text-[#FFFFFF] font-bold tracking-wide drop-shadow-md">
                  Frocks
                </h3>
              </div>
            </Link>

            <Link href="/kids" className="category-card-item kids-card group relative block overflow-hidden rounded-2xl border border-[#E5C378]/30 shadow-md no-underline min-h-[140px]">
              <Image
                src="/images/home/kids-cat-kidssets.jpg"
                alt="Kamal Selections Kids Sets"
                className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                fill
                sizes="(max-width: 640px) 45vw, (max-width: 1024px) 20vw, 220px"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent pointer-events-none" />
              <div className="relative z-10 p-4 sm:p-5 flex flex-col justify-end h-full">
                <h3 className="font-serif text-xl sm:text-2xl text-[#FFFFFF] font-bold tracking-wide drop-shadow-md">
                  Kids Sets
                </h3>
              </div>
            </Link>
          </div>
        </div>
      </div>

      {/* BOTTOM TRANSITION: FLOWING CURVED WAVE TO SECTION 5 */}
      <div className="kids-bottom-curve" aria-hidden="true">
        <svg viewBox="0 0 1440 95" preserveAspectRatio="none" className="curve-wave-svg">
          <path d="M0,35 C320,95 680,15 1040,70 C1240,95 1380,35 1440,25 L1440,95 L0,95 Z" fill="#FDF8F2"></path>
        </svg>
      </div>
    </section>
  );
}
