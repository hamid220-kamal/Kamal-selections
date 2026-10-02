"use client";

import { useState, FormEvent } from "react";

export function ContactSimpleEnquiry() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [enquiryPrompted, setEnquiryPrompted] = useState(false);
  const [whatsappLink, setWhatsappLink] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    let text = `Hi Kamal Selections!`;
    if (name.trim()) {
      text += ` My name is ${name.trim()}.`;
    }
    if (message.trim()) {
      text += ` I'd like to inquire about: ${message.trim()}`;
    } else {
      text += ` I'd like to inquire about your clothing collection and store visit in Shadnagar.`;
    }
    if (phone.trim()) {
      text += ` (Contact Number: ${phone.trim()})`;
    }

    const targetUrl = `https://wa.me/918332059777?text=${encodeURIComponent(text)}`;
    setWhatsappLink(targetUrl);
    setEnquiryPrompted(true);

    // Open WhatsApp in a new tab
    if (typeof window !== "undefined") {
      window.open(targetUrl, "_blank");
    }
  };

  return (
    <section className="py-16 md:py-24 bg-[#F4EEE5] text-[#30251F] relative border-t border-[#E5C378]/25" id="enquiry">
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
            Fill in your details below to send a direct prefilled WhatsApp enquiry to <strong className="text-[#A41A50]">8332059777</strong>.
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
                placeholder="e.g. 83320 59777"
                className="w-full px-4 py-3 rounded-xl border border-[#E5C378]/50 bg-[#FAF3EB]/40 text-[#30251F] placeholder-[#69564A]/60 text-sm focus:outline-none focus:ring-2 focus:ring-[#A41A50] focus:border-transparent transition"
              />
            </div>

            {/* MESSAGE FIELD */}
            <div>
              <label htmlFor="enquiry-message" className="block text-xs font-bold text-[#30251F] uppercase tracking-wider mb-2">
                Message / Inquiry Details
              </label>
              <textarea
                id="enquiry-message"
                name="message"
                rows={4}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="e.g. Inquiring about party wear 3-piece sets, saree availability, or kids frocks..."
                className="w-full px-4 py-3 rounded-xl border border-[#E5C378]/50 bg-[#FAF3EB]/40 text-[#30251F] placeholder-[#69564A]/60 text-sm focus:outline-none focus:ring-2 focus:ring-[#A41A50] focus:border-transparent transition resize-none"
              ></textarea>
            </div>

            {/* CTA BUTTON */}
            <div>
              <button
                type="submit"
                className="btn btn-primary btn-pill w-full justify-center text-sm font-bold uppercase tracking-wider py-4 shadow-lg flex items-center gap-2 bg-[#25D366] hover:bg-[#1EBE57] border-none text-white"
                id="submit-enquiry-btn"
              >
                <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414-.074-.124-.272-.198-.57-.347z"/>
                  <path d="M12 0C5.373 0 0 5.373 0 12c0 2.12.55 4.11 1.517 5.845L0 24l6.32-1.48C8.016 23.447 9.957 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.84 0-3.565-.488-5.06-1.34l-.362-.208-3.755.879.995-3.66-.231-.375C2.637 15.764 2 13.948 2 12c0-5.514 4.486-10 10-10s10 4.486 10 10-4.486 10-10 10z"/>
                </svg>
                <span>SEND ENQUIRY ON WHATSAPP →</span>
              </button>
            </div>

            {/* CONFIRMATION NOTIFICATION */}
            {enquiryPrompted && (
              <div className="p-5 rounded-2xl bg-[#FAF3EB] border border-[#25D366] text-center animate-fade-in shadow-md">
                <p className="text-xs font-bold text-[#A41A50] uppercase tracking-wider mb-1">
                  Connecting to WhatsApp (8332059777)
                </p>
                <p className="text-xs text-[#51443B] mb-3 leading-relaxed">
                  Opening WhatsApp with your prefilled message for <strong>{name}</strong>. If WhatsApp did not open automatically, tap below:
                </p>
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#25D366] text-white text-xs font-bold uppercase tracking-wider hover:bg-[#1EBE57] transition shadow-md"
                >
                  <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414-.074-.124-.272-.198-.57-.347z"/>
                  </svg>
                  <span>Open WhatsApp Enquiry</span>
                </a>
              </div>
            )}

            {/* FOOTNOTE */}
            <p className="text-center text-[11px] text-[#69564A] leading-relaxed pt-2">
              Direct WhatsApp inquiries connect directly with our store team at <strong>+91 83320 59777</strong> in Ibrahim Complex, Shadnagar.
            </p>

          </form>
        </div>

      </div>
    </section>
  );
}
