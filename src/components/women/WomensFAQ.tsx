"use client";

import { useState } from "react";
import Link from "next/link";
import { womensData } from "@/data/womens";

export function WomensFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 bg-[#FDFBF7] relative" id="women-faq">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* HEADER */}
        <div className="text-center space-y-3 mb-14">
          <span className="text-xs font-bold tracking-widest text-[#D4AF37] uppercase">
            QUESTIONS &amp; ANSWERS
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#380511]">
            Women's Wear — FAQs
          </h2>
          <div className="w-16 h-[2px] bg-[#D4AF37] mx-auto my-2"></div>
          <p className="text-base text-[#3D2314]/80">
            Frequently asked questions about our women's clothing range and store availability.
          </p>
        </div>

        {/* ACCORDION LIST */}
        <div className="space-y-4">
          {womensData.faqs.map((faq, idx) => (
            <div
              key={idx}
              className="bg-[#FAF5EB] rounded-2xl border border-[#E5C378]/30 overflow-hidden shadow-xs transition-colors duration-300"
            >
              <button
                onClick={() => toggleFAQ(idx)}
                className="w-full text-left p-5 sm:p-6 flex items-center justify-between space-x-4 focus:outline-none"
                aria-expanded={openIndex === idx}
              >
                <span className="font-serif text-lg sm:text-xl font-bold text-[#380511]">
                  {faq.question}
                </span>
                <span
                  className={`w-7 h-7 rounded-full bg-[#4A0717]/10 text-[#4A0717] flex items-center justify-center font-bold text-base shrink-0 transition-transform duration-300 ${
                    openIndex === idx ? "rotate-180 bg-[#4A0717] text-[#FAF5EB]" : ""
                  }`}
                >
                  ↓
                </span>
              </button>

              {openIndex === idx && (
                <div className="px-5 pb-6 sm:px-6 sm:pb-6 text-sm sm:text-base text-[#3D2314]/85 leading-relaxed font-sans border-t border-[#E5C378]/20 pt-4">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* VIEW ALL FAQS LINK */}
        <div className="text-center pt-10">
          <Link
            href="/faq"
            className="inline-flex items-center text-sm font-semibold text-[#4A0717] hover:text-[#380511] group py-2"
          >
            <span className="border-b border-[#4A0717]/40 group-hover:border-[#4A0717] transition-colors pb-0.5">
              View All FAQs
            </span>
            <span className="ml-1.5 group-hover:translate-x-1 transition-transform">→</span>
          </Link>
        </div>

      </div>
    </section>
  );
}
