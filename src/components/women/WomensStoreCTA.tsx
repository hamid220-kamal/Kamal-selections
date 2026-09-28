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
          
          {/* LEFT: STORE DESTINATION CARD (SPAN 6) */}
          <div className="lg:col-span-6 relative">
            <div className="relative p-8 rounded-3xl overflow-hidden shadow-2xl border border-[#E5C378]/40 bg-gradient-to-br from-[#380511] to-[#20040A] text-[#FAF5EB]">
              <div className="space-y-3">
                <span className="text-xs font-mono font-bold tracking-widest text-[#D4AF37] uppercase block">
                  SHADNAGAR STORE DESTINATION
                </span>
                <p className="font-serif text-2xl font-bold">
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
              See It. Try It. Love It.
            </h2>

            <p className="text-base sm:text-lg text-[#3D2314]/85 leading-relaxed font-sans">
              Visit Kamal Selections at Ibrahim Complex, Main Road, Shadnagar and explore our latest women&apos;s and kids&apos; styles in person.
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
                href="/store"
                className="inline-flex items-center justify-center px-7 py-3.5 rounded-full bg-[#4A0717] text-[#FAF5EB] font-medium text-sm tracking-wide shadow-md hover:bg-[#380511] hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 group"
              >
                <span>Visit Our Store</span>
                <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
              </a>

              <a
                href={brandData.maps.directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-7 py-3.5 rounded-full bg-[#FAF5EB] text-[#4A0717] font-semibold text-sm tracking-wide border border-[#E5C378]/60 shadow-xs hover:bg-[#FDFBF7] transition-all duration-300"
              >
                <span>Get Directions</span>
                <span className="ml-1.5">→</span>
              </a>

              <a
                href={`tel:${brandData.phone}`}
                className="inline-flex items-center justify-center px-6 py-3.5 rounded-full bg-transparent text-[#380511] font-semibold text-sm tracking-wide hover:underline"
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
