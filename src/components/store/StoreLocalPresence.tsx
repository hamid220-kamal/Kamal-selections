"use client";

export function StoreLocalPresence() {
  return (
    <section className="py-20 md:py-24 bg-[#F4EEE5] text-[#30251F] relative border-t border-[#E5C378]/25" id="local-presence">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#FFFFFF] rounded-3xl border border-[#E5C378]/40 p-8 sm:p-12 lg:p-14 shadow-lg flex flex-col md:flex-row items-center justify-between gap-8 sm:gap-12 relative overflow-hidden">
          
          {/* Subtle Ambient Background Gradient */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-bl from-[#E5C378]/15 via-[#FAD0C4]/10 to-transparent rounded-full blur-2xl pointer-events-none"></div>

          <div className="md:w-3/5 relative z-10">
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="w-6 h-px bg-[#D4AF37]"></span>
              <span className="text-[11px] font-bold tracking-[0.24em] text-[#A41A50] uppercase">
                COMMUNITY CONNECTION
              </span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#30251F] mb-4">
              PROUDLY IN<br />
              <span className="italic font-normal text-[#A41A50]">SHADNAGAR.</span>
            </h2>

            <p className="text-base sm:text-lg text-[#51443B] leading-relaxed mb-6">
              Kamal Selections is a local fashion store built around serving women and families in Shadnagar.
            </p>

            <p className="text-sm text-[#69564A] leading-relaxed">
              We started here in 2021 with the idea that shopping for quality clothes shouldn&apos;t require long trips into Hyderabad. Everything we offer is chosen with our local community in mind.
            </p>
          </div>

          <div className="md:w-2/5 w-full relative z-10">
            <div className="p-6 sm:p-8 rounded-2xl bg-[#FAF3EB] border border-[#E5C378]/50 shadow-inner text-center">
              <span className="font-serif text-3xl sm:text-4xl font-bold text-[#A41A50] block mb-1">
                2021
              </span>
              <span className="text-xs uppercase tracking-[0.2em] font-bold text-[#D4AF37] block mb-3">
                FOUNDED IN SHADNAGAR
              </span>
              <p className="text-xs text-[#69564A] leading-relaxed">
                A dedicated physical space for women&apos;s ethnic wear, kids&apos; party outfits, and everyday family fashion.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
