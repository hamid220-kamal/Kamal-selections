"use client";

import { brandData } from "@/data/brand";

export function StoreVisitInfo() {
  const INFO_ITEMS = [
    {
      label: "LOCATION",
      value: brandData.address.fullAddress,
      sub: "Ibrahim Complex, Main Road, Shadnagar",
      icon: (
        <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/>
          <circle cx="12" cy="9" r="2.5"/>
        </svg>
      ),
      action: (
        <a
          href={brandData.maps.directionsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs font-semibold text-[#A41A50] hover:underline"
        >
          Directions →
        </a>
      ),
    },
    {
      label: "STORE HOURS",
      value: brandData.hours.daysOpen,
      sub: brandData.hours.displayHours,
      icon: (
        <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="10"/>
          <polyline points="12 6 12 12 16 14"/>
        </svg>
      ),
      action: <span className="text-xs font-semibold text-[#2E7D32]">Open Every Day</span>,
    },
    {
      label: "PHONE",
      value: brandData.phone,
      sub: "Call for store inquiries & guidance",
      icon: (
        <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
        </svg>
      ),
      action: (
        <a href={`tel:${brandData.phone}`} className="text-xs font-semibold text-[#A41A50] hover:underline">
          Call Now →
        </a>
      ),
    },
    {
      label: "STORE FOCUS",
      value: "Women's & Kids' Wear",
      sub: "Ethnic, casual and festive clothing",
      icon: (
        <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M20.38 3.46L16 2a4 4 0 0 1-8 0L3.62 3.46a2 2 0 0 0-1.34 2.23l.58 3.5a2 2 0 0 0 1.28 1.55L6 11.5V20a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-8.5l1.86-.76a2 2 0 0 0 1.28-1.55l.58-3.5a2 2 0 0 0-1.34-2.23z"/>
        </svg>
      ),
      action: <span className="text-xs font-semibold text-[#69564A]">Physical Retail</span>,
    },
  ];

  return (
    <section className="py-16 md:py-20 bg-[#FAF3EB] text-[#30251F] relative border-t border-[#E5C378]/25" id="visit-information">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* HEADER */}
        <div className="text-center max-w-2xl mx-auto mb-14 md:mb-18">
          <div className="inline-flex items-center gap-3 mb-3">
            <span className="w-8 h-px bg-[#D4AF37]"></span>
            <span className="text-xs font-semibold tracking-[0.24em] text-[#A41A50] uppercase">
              STORE DETAILS
            </span>
            <span className="w-8 h-px bg-[#D4AF37]"></span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#30251F]">
            Visit Information.
          </h2>
          <p className="text-sm text-[#69564A] mt-2">
            Confirmed facts to help you plan your visit to our Shadnagar store.
          </p>
        </div>

        {/* FOUR CLEAN CONFIRMED INFORMATION PANELS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {INFO_ITEMS.map((item) => (
            <div
              key={item.label}
              className="p-7 rounded-2xl bg-[#FFFFFF] border border-[#E5C378]/40 shadow-sm flex flex-col justify-between hover:shadow-lg transition-shadow"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#FAF3EB] border border-[#E5C378]/50 flex items-center justify-center text-[#A41A50] mb-5">
                  {item.icon}
                </div>

                <span className="text-[10px] font-bold text-[#D4AF37] tracking-[0.22em] uppercase block mb-1">
                  {item.label}
                </span>

                <h3 className="font-serif text-xl font-bold text-[#30251F] mb-1">
                  {item.value}
                </h3>

                <p className="text-xs text-[#69564A] leading-relaxed mb-4">
                  {item.sub}
                </p>
              </div>

              <div className="pt-4 border-t border-[#E5C378]/25 flex items-center justify-between">
                {item.action}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
