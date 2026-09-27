"use client";

import { useState, FormEvent } from "react";
import { brandData } from "@/data/brand";

export function ContactSimpleEnquiry() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [enquiryPrompted, setEnquiryPrompted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim()) return;

    // Truthful client behavior: As instructed, do NOT create fake server success states.
    // Prompt the visitor to connect directly with the store via phone.
    setEnquiryPrompted(true);
  };

  return (
    <section className="py-20 md:py-28 bg-[#F4EEE5] text-[#30251F] relative border-t border-[#E5C378]/25" id="enquiry">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* HEADER */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-3 mb-4">
            <span className="w-8 h-px bg-[#D4AF37]"></span>
            <span className="text-xs font-semibold tracking-[0.24em] text-[#A41A50] uppercase">
              ENQUIRE WITH THE STORE
            </span>
            <span className="w-8 h-px bg-[#D4AF37]"></span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#30251F] mb-4">
            HAVE A QUESTION?
          </h2>

          <p className="text-base sm:text-lg text-[#51443B] leading-relaxed">
            Tell us what you&apos;re looking for and we&apos;ll help you connect with the store.
          </p>
        </div>

        {/* ELEGANT COMPACT FORM CARD */}
        <div className="bg-[#FFFFFF] rounded-3xl p-8 sm:p-12 border border-[#E5C378]/40 shadow-xl max-w-2xl mx-auto">
          <form onSubmit={handleSubmit} className="space-y-6">
            
            {/* NAME FIELD */}
            <div>
              <label htmlFor="enquiry-name" className="block text-xs font-bold text-[#30251F] uppercase tracking-wider mb-2">
                Your Name <span className="text-[#A41A50]">*</span>
              </label>
              <input
                id="enquiry-name"
                name="name"
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="e.g. Priya Sharma"
                className="w-full px-4 py-3 rounded-xl border border-[#E5C378]/50 bg-[#FAF3EB]/40 text-[#30251F] placeholder-[#69564A]/60 text-sm focus:outline-none focus:ring-2 focus:ring-[#A41A50] focus:border-transparent transition"
              />
            </div>

            {/* PHONE NUMBER FIELD */}
            <div>
              <label htmlFor="enquiry-phone" className="block text-xs font-bold text-[#30251F] uppercase tracking-wider mb-2">
                Phone Number <span className="text-[#A41A50]">*</span>
              </label>
              <input
                id="enquiry-phone"
                name="phone"
                type="tel"
                required
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="e.g. 98765 43210"
                className="w-full px-4 py-3 rounded-xl border border-[#E5C378]/50 bg-[#FAF3EB]/40 text-[#30251F] placeholder-[#69564A]/60 text-sm focus:outline-none focus:ring-2 focus:ring-[#A41A50] focus:border-transparent transition"
              />
            </div>

            {/* MESSAGE FIELD */}
            <div>
              <label htmlFor="enquiry-message" className="block text-xs font-bold text-[#30251F] uppercase tracking-wider mb-2">
                Message (Optional)
              </label>
              <textarea
                id="enquiry-message"
                name="message"
                rows={4}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="e.g. Inquiring about party wear 3-piece sets or kids frocks for an upcoming function..."
                className="w-full px-4 py-3 rounded-xl border border-[#E5C378]/50 bg-[#FAF3EB]/40 text-[#30251F] placeholder-[#69564A]/60 text-sm focus:outline-none focus:ring-2 focus:ring-[#A41A50] focus:border-transparent transition resize-none"
              ></textarea>
            </div>

            {/* CTA BUTTON */}
            <div>
              <button
                type="submit"
                className="btn btn-primary btn-pill w-full justify-center text-sm font-bold uppercase tracking-wider py-4 shadow-lg"
                id="submit-enquiry-btn"
              >
                <span>SEND ENQUIRY →</span>
              </button>
            </div>

            {/* TRUTHFUL DIRECT-CALL PROMPT UPON FORM SUBMISSION */}
            {enquiryPrompted && (
              <div className="p-4 rounded-xl bg-[#FAF3EB] border border-[#D4AF37] text-center animate-fade-in">
                <p className="text-xs font-semibold text-[#A41A50] uppercase tracking-wider mb-1">
                  Ready to Connect with the Store
                </p>
                <p className="text-sm text-[#51443B] mb-3">
                  Thank you, {name}! For the fastest response, tap below to speak directly with our team at Kamal Selections in Shadnagar:
                </p>
                <a
                  href={`tel:${brandData.phone}`}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#A41A50] text-white text-xs font-bold uppercase tracking-wider hover:bg-[#861240] transition"
                >
                  <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.2">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                  </svg>
                  <span>Call {brandData.phone}</span>
                </a>
              </div>
            )}

            {/* FOOTNOTE */}
            <p className="text-center text-[11px] text-[#69564A] leading-relaxed pt-2">
              We respect your privacy. Calls connect directly with our physical store in Ibrahim Complex, Shadnagar.
            </p>

          </form>
        </div>

      </div>
    </section>
  );
}
