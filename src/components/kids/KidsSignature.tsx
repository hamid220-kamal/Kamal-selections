import Image from "next/image";

export function KidsSignature() {
  return (
    <section className="relative w-full overflow-hidden bg-[#20040A]" id="kids-signature">
      {/* FULL-WIDTH CINEMATIC BACKGROUND IMAGE */}
      <div className="relative w-full h-[60vh] sm:h-[70vh] lg:h-[80vh] min-h-[460px]">
        <Image
          src="/images/kids/kamal-selections-kids-signature-campaign.jpg"
          alt="Indian children in coordinated festive clothing from Kamal Selections lookbook in Shadnagar"
          className="w-full h-full object-cover object-center"
          fill
          sizes="100vw"
          loading="lazy"
        />

        {/* ELEGANT BURGUNDY GRADIENT OVERLAYS */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#2A050E]/85 via-[#2A050E]/40 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#1F030B]/90 via-transparent to-transparent"></div>

        {/* MINIMAL EDITORIAL TEXT BLOCK OVERLAY */}
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="max-w-xl text-white">
              
              {/* BRAND EYEBROW WITH THIN GOLD LINE */}
              <div className="inline-flex items-center gap-3 mb-4">
                <span className="w-10 h-px bg-[#E5C378]"></span>
                <span className="text-xs sm:text-sm font-semibold tracking-[0.3em] text-[#E5C378] uppercase">
                  KAMAL SELECTIONS
                </span>
              </div>

              {/* SERIF CAMPAIGN STATEMENT */}
              <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold leading-[1.12] mb-5 tracking-tight text-[#FAF5EB]">
                Little ones deserve<br />
                <span className="italic font-normal text-[#E5C378]">great style too.</span>
              </h2>

              {/* SCRIPT SUBTEXT */}
              <p className="font-script text-2xl sm:text-3xl text-[#F8E5BA]/90 mb-4">
                Memories made in happy outfits.
              </p>

              {/* SHORT LOCAL NOTE */}
              <p className="text-xs sm:text-sm text-[#F8E5BA]/80 tracking-wide">
                Available to explore in person at our Shadnagar boutique store.
              </p>

            </div>
          </div>
        </div>

        {/* BOTTOM METADATA BADGE */}
        <div className="absolute bottom-6 right-6 hidden sm:block z-10">
          <div className="px-4 py-2 rounded-full bg-[#2A050E]/70 border border-[#E5C378]/35 backdrop-blur-md text-[11px] font-medium text-[#F8E5BA] tracking-wider uppercase">
            Kids Fashion Showcase · In-Store Collection
          </div>
        </div>
      </div>
    </section>
  );
}
