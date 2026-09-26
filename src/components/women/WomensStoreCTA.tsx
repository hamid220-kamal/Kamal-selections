"use client";

import Image from "next/image";
import { brandData } from "@/data/brand";

interface WomensStoreCTAProps {
  onOpenStoreModal?: () => void;
}

export function WomensStoreCTA({ onOpenStoreModal }: WomensStoreCTAProps) {
  return (
    <section className="py-24 bg-[#FAF5EB] relative border-t border-b border-[#E5C378]/20" id="visit-store">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* LEFT: STORE PHOTO & LOCATION BADGE (SPAN 6) */}
          <div className="lg:col-span-6 relative">
            <div className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden shadow-2xl border border-[#E5C378]/30 group">
              <Image
                src="/images/store/store-front.jpg"
                alt="Kamal Selections Store in Shadnagar, Telangana"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#380511]/80 via-[#380511]/20 to-transparent" />

              <div className="absolute bottom-6 left-6 right-6 text-[#FAF5EB] space-y-1">
                <span className="text-xs font-mono font-bold tracking-widest text-[#D4AF37] uppercase">
                  SHADNAGAR STORE DESTINATION
                </span>
                <p className="font-serif text-xl font-bold">
                  {brandData.name}
                </p>
                <p className="text-xs text-[#FAF5EB]/80 font-sans">
                  {brandData.address.fullAddress}
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT: STORE INFORMATION & CTAS (SPAN 6) */}
          <div className="lg:col-span-6 flex flex-col justify-center space-y-6">
            
            <div className="inline-flex items-center space-x-2">
              <span className="w-6 h-[1.5px] bg-[#D4AF37]"></span>
              <span className="text-xs font-bold tracking-widest text-[#4A0717] uppercase">
                IN-STORE SHOPPING EXPERIENCE
              </span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#380511] leading-tight">
              See It. Feel It. Try It.
            </h2>

            <p className="text-base sm:text-lg text-[#3D2314]/85 leading-relaxed font-sans">
              Explore the collection in person at Kamal Selections, Shadnagar.
            </p>

            {/* DETAILS CARD */}
            <div className="p-6 bg-[#FDFBF7] rounded-2xl border border-[#E5C378]/30 shadow-sm space-y-4">
              
              <div className="flex items-start space-x-3.5">
                <span className="text-lg text-[#D4AF37] shrink-0 mt-0.5">📍</span>
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#380511] block">Address</span>
                  <span className="text-sm font-medium text-[#3D2314]">
                    {brandData.address.building}, {brandData.address.street}, {brandData.address.city}, {brandData.address.state}
                  </span>
                </div>
              </div>

              <div className="flex items-start space-x-3.5 pt-2 border-t border-[#E5C378]/20">
                <span className="text-lg text-[#D4AF37] shrink-0 mt-0.5">⏰</span>
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#380511] block">Store Hours</span>
                  <span className="text-sm font-medium text-[#3D2314]">
                    {brandData.hours.displayHours}
                  </span>
                </div>
              </div>

              <div className="flex items-start space-x-3.5 pt-2 border-t border-[#E5C378]/20">
                <span className="text-lg text-[#D4AF37] shrink-0 mt-0.5">📞</span>
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#380511] block">Phone Contact</span>
                  <a href={`tel:${brandData.phone}`} className="text-sm font-semibold text-[#4A0717] hover:underline">
                    {brandData.phone}
                  </a>
                </div>
              </div>

            </div>

            {/* ACTION BUTTONS */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <a
                href={brandData.maps.directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-7 py-3.5 rounded-full bg-[#4A0717] text-[#FAF5EB] font-medium text-sm tracking-wide shadow-md hover:bg-[#380511] hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 group"
              >
                <span>Get Directions</span>
                <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
              </a>

              <a
                href={`tel:${brandData.phone}`}
                className="inline-flex items-center justify-center px-7 py-3.5 rounded-full bg-[#FAF5EB] text-[#4A0717] font-semibold text-sm tracking-wide border border-[#E5C378]/60 shadow-xs hover:bg-[#FDFBF7] transition-all duration-300"
              >
                <span>Call Store</span>
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
