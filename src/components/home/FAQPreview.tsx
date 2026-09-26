"use client";

interface FAQPreviewProps {
  onOpenStoreModal?: () => void;
}

export function FAQPreview({ onOpenStoreModal }: FAQPreviewProps) {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Where is Kamal Selections located?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Kamal Selections is located at Ibrahim Complex, Main Road, Shadnagar, Telangana.",
        },
      },
      {
        "@type": "Question",
        name: "What does Kamal Selections sell?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Kamal Selections is a retail clothing store offering women's wear and kids' wear.",
        },
      },
      {
        "@type": "Question",
        name: "What women's wear is available?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Our women's wear categories include dresses, kurtis, tops, leggings, burqa, 3-piece sets and party wear.",
        },
      },
      {
        "@type": "Question",
        name: "Do you sell kids' clothing?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Our kids' wear range includes girls' wear, boys' wear, frocks and kids' sets.",
        },
      },
      {
        "@type": "Question",
        name: "What are the store timings?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The store is open daily from 10 AM to 9 PM.",
        },
      },
      {
        "@type": "Question",
        name: "How can I contact Kamal Selections?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "You can call Kamal Selections at 8332059777 or visit the store in Shadnagar.",
        },
      },
    ],
  };

  return (
    <section className="section-faq-homepage" id="faq">
      {/* SUBTLE BLUSH-PINK GRADIENT AMBIENT LIGHTING */}
      <div className="blush-ambient-glow glow-top-left" aria-hidden="true"></div>
      <div className="blush-ambient-glow glow-bottom-right" aria-hidden="true"></div>

      {/* SCHEMA.ORG FAQPAGE STRUCTURED DATA */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />

      <div className="faq-main-container">
        {/* DESKTOP 2-COLUMN SPLIT COMPOSITION (~40% LEFT / ~60% RIGHT) */}
        <div className="faq-split-grid">
          {/* LEFT COLUMN: HEADING, DECORATIVE ART & PROMPT */}
          <div className="faq-intro-column">
            <div className="showcase-eyebrow-wrap animate-on-scroll fade-in">
              <span className="eyebrow-accent-line"></span>
              <span className="showcase-eyebrow-text">QUESTIONS?</span>
              <span className="eyebrow-accent-line"></span>
            </div>

            <h2 className="faq-main-heading animate-on-scroll slide-up">
              Everything You<br />
              <span className="burgundy-serif-accent">Need to Know.</span>
            </h2>

            <p className="faq-supporting-text animate-on-scroll slide-up delay-1">
              Planning a visit? Here are a few quick answers about Kamal Selections, our collections and our store.
            </p>

            {/* ELEGANT BOTANICAL / THREAD GOLD LINE DECORATIVE DETAIL */}
            <div className="faq-decorative-art animate-on-scroll fade-in delay-2" aria-hidden="true">
              <svg viewBox="0 0 240 100" width="220" height="90" fill="none">
                <path d="M 10,50 Q 60,10 110,50 T 210,50" stroke="url(#goldThreadGrad)" strokeWidth="1.5" strokeLinecap="round"/>
                <path d="M 30,70 Q 90,30 140,65 T 230,40" stroke="#C42766" strokeOpacity="0.35" strokeWidth="1.2" strokeDasharray="4 4"/>
                <circle cx="110" cy="50" r="4" fill="#E5C378"/>
                <circle cx="210" cy="50" r="3" fill="#C42766"/>
                <defs>
                  <linearGradient id="goldThreadGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#CFA753"/>
                    <stop offset="50%" stopColor="#E5C378"/>
                    <stop offset="100%" stopColor="#C42766"/>
                  </linearGradient>
                </defs>
              </svg>
            </div>

            {/* STILL HAVE A QUESTION PROMPT CARD */}
            <div className="faq-prompt-card animate-on-scroll slide-up delay-3">
              <div className="prompt-icon-wrap" aria-hidden="true">
                <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="#C42766" strokeWidth="2">
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
                </svg>
              </div>
              <div className="prompt-text-wrap">
                <span className="prompt-title">Still have a question?</span>
                <span className="prompt-sub">Call or visit our store in Shadnagar</span>
              </div>
              <button className="btn btn-burgundy btn-sm btn-pill" id="open-store-modal-faq-prompt" onClick={onOpenStoreModal}>
                <span>Contact Us &rarr;</span>
              </button>
            </div>
          </div>

          {/* RIGHT COLUMN: 6 ACCORDION QUESTIONS */}
          <div className="faq-accordion-column animate-on-scroll slide-left delay-1">
            <div className="faq-accordion-list">
              {/* QUESTION 1 */}
              <details className="faq-accordion-item" open>
                <summary className="faq-question-btn">
                  <span className="faq-question-text">Where is Kamal Selections located?</span>
                  <span className="faq-icon-indicator" aria-hidden="true">
                    <span className="icon-line line-h"></span>
                    <span className="icon-line line-v"></span>
                  </span>
                </summary>
                <div className="faq-answer-wrapper">
                  <div className="faq-answer-content">
                    <p>Kamal Selections is located at Ibrahim Complex, Main Road, Shadnagar, Telangana.</p>
                  </div>
                </div>
              </details>

              {/* QUESTION 2 */}
              <details className="faq-accordion-item">
                <summary className="faq-question-btn">
                  <span className="faq-question-text">What does Kamal Selections sell?</span>
                  <span className="faq-icon-indicator" aria-hidden="true">
                    <span className="icon-line line-h"></span>
                    <span className="icon-line line-v"></span>
                  </span>
                </summary>
                <div className="faq-answer-wrapper">
                  <div className="faq-answer-content">
                    <p>Kamal Selections is a retail clothing store offering women's wear and kids' wear.</p>
                  </div>
                </div>
              </details>

              {/* QUESTION 3 */}
              <details className="faq-accordion-item">
                <summary className="faq-question-btn">
                  <span className="faq-question-text">What women's wear is available?</span>
                  <span className="faq-icon-indicator" aria-hidden="true">
                    <span className="icon-line line-h"></span>
                    <span className="icon-line line-v"></span>
                  </span>
                </summary>
                <div className="faq-answer-wrapper">
                  <div className="faq-answer-content">
                    <p>Our women's wear categories include dresses, kurtis, tops, leggings, burqa, 3-piece sets and party wear.</p>
                  </div>
                </div>
              </details>

              {/* QUESTION 4 */}
              <details className="faq-accordion-item">
                <summary className="faq-question-btn">
                  <span className="faq-question-text">Do you sell kids' clothing?</span>
                  <span className="faq-icon-indicator" aria-hidden="true">
                    <span className="icon-line line-h"></span>
                    <span className="icon-line line-v"></span>
                  </span>
                </summary>
                <div className="faq-answer-wrapper">
                  <div className="faq-answer-content">
                    <p>Yes. Our kids' wear range includes girls' wear, boys' wear, frocks and kids' sets.</p>
                  </div>
                </div>
              </details>

              {/* QUESTION 5 */}
              <details className="faq-accordion-item">
                <summary className="faq-question-btn">
                  <span className="faq-question-text">What are the store timings?</span>
                  <span className="faq-icon-indicator" aria-hidden="true">
                    <span className="icon-line line-h"></span>
                    <span className="icon-line line-v"></span>
                  </span>
                </summary>
                <div className="faq-answer-wrapper">
                  <div className="faq-answer-content">
                    <p>The store is open daily from 10 AM to 9 PM.</p>
                  </div>
                </div>
              </details>

              {/* QUESTION 6 */}
              <details className="faq-accordion-item">
                <summary className="faq-question-btn">
                  <span className="faq-question-text">How can I contact Kamal Selections?</span>
                  <span className="faq-icon-indicator" aria-hidden="true">
                    <span className="icon-line line-h"></span>
                    <span className="icon-line line-v"></span>
                  </span>
                </summary>
                <div className="faq-answer-wrapper">
                  <div className="faq-answer-content">
                    <p>You can call Kamal Selections at 8332059777 or visit the store in Shadnagar.</p>
                  </div>
                </div>
              </details>
            </div>

            {/* FAQ BOTTOM CTA BLOCK */}
            <div className="faq-bottom-cta animate-on-scroll fade-in delay-3">
              <span className="faq-bottom-question">Have another question?</span>
              <div className="faq-cta-buttons">
                <button className="btn btn-burgundy btn-pill" id="open-store-modal-faq-bottom" onClick={onOpenStoreModal}>
                  <span>Contact Us</span>
                  <svg className="btn-arrow" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.2">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </button>

                <a href="#faq" className="secondary-text-link" id="view-all-faqs-link">
                  <span>View All FAQs</span>
                  <span className="link-underline"></span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* BOTTOM TRANSITION WAVE TOWARD FINAL CTA SECTION */}
      <div className="faq-bottom-curve" aria-hidden="true">
        <svg viewBox="0 0 1440 90" preserveAspectRatio="none" className="curve-wave-svg">
          <path d="M0,45 C320,90 680,10 1040,65 C1240,90 1380,35 1440,20 L1440,90 L0,90 Z" fill="#1A030C"></path>
        </svg>
      </div>
    </section>
  );
}
