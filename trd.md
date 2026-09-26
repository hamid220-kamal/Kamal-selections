# Kamal Selections

## Technical Requirements Document

### TRD v1.0

---

# 1. Technical Objective

Build a production-grade, mobile-first website for **Kamal Selections** with:

* Strong local SEO foundation
* AEO-friendly information architecture
* GEO/entity optimization
* High performance
* Cinematic visual experience
* Zero backend dependency in V1
* Zero hosting cost
* Simple deployment through Vercel
* Easy future migration to CMS/database/e-commerce

The architecture must prioritize:

**SEO + speed + maintainability + conversion**

over unnecessary technical complexity.

---

# 2. Recommended Stack

## Frontend

**Next.js**

Use the current stable Next.js App Router architecture.

## Language

**TypeScript**

## Styling

**Tailwind CSS**

## UI

Custom components.

Avoid depending on a large UI framework for the entire site.

## Animation

Use:

**Framer Motion / Motion**

for controlled interactions.

Use native CSS wherever possible.

For the cinematic homepage, animations should progressively enhance the experience rather than control the content rendering.

## Icons

**Lucide React**

## Hosting

**Vercel**

## Repository

**GitHub**

## Database

**None in V1**

## CMS

**None in V1**

## Authentication

**None in V1**

## Payments

**None in V1**

---

# 3. Architecture

```text
                    INTERNET
                       │
             ┌─────────▼─────────┐
             │      Vercel       │
             │ CDN + Deployment  │
             └─────────┬─────────┘
                       │
                 Next.js App
                       │
       ┌───────────────┼────────────────┐
       │               │                │
       ▼               ▼                ▼
   Static Pages    SEO Metadata     Structured Data
       │               │                │
       └───────────────┼────────────────┘
                       │
               Conversion Layer
                       │
        ┌──────────────┼──────────────┐
        ▼              ▼              ▼
      Call          WhatsApp       Google Maps
```

No database is required.

No API server is required.

No server-side authentication is required.

---

# 4. Rendering Strategy

The website should be **static-first**.

Use Next.js Server Components wherever possible.

### Primary pages

Pre-render at build time.

Examples:

```text
/
 /women
 /kids
 /about
 /store
 /contact
 /faq
 /size-guide
 /privacy
 /terms
```

This gives search engines highly accessible HTML without depending on client-side JavaScript.

---

# 5. Client-Side JavaScript Strategy

JavaScript should only be loaded where needed.

### Server components

Use for:

* Main page content
* SEO content
* Navigation
* Footer
* Product/category information
* Structured data

### Client components

Use only for:

* Mobile navigation interaction
* Animation controls
* Scroll effects
* Image galleries
* Interactive FAQ
* Analytics event handlers where required

Avoid making the entire homepage a `"use client"` component.

---

# 6. Project Structure

Recommended:

```text
kamal-selections/
│
├── app/
│   ├── page.tsx
│   ├── layout.tsx
│   ├── globals.css
│   │
│   ├── women/
│   │   └── page.tsx
│   │
│   ├── kids/
│   │   └── page.tsx
│   │
│   ├── about/
│   │   └── page.tsx
│   │
│   ├── store/
│   │   └── page.tsx
│   │
│   ├── contact/
│   │   └── page.tsx
│   │
│   ├── faq/
│   │   └── page.tsx
│   │
│   ├── size-guide/
│   │   └── page.tsx
│   │
│   ├── privacy/
│   │   └── page.tsx
│   │
│   ├── terms/
│   │   └── page.tsx
│   │
│   ├── sitemap.ts
│   ├── robots.ts
│   └── not-found.tsx
│
├── components/
│   ├── navigation/
│   ├── hero/
│   ├── sections/
│   ├── cards/
│   ├── cta/
│   ├── footer/
│   ├── seo/
│   └── motion/
│
├── content/
│   ├── business.ts
│   ├── women.ts
│   ├── kids.ts
│   ├── faq.ts
│   └── size-guide.ts
│
├── lib/
│   ├── seo.ts
│   ├── schema.ts
│   ├── analytics.ts
│   └── links.ts
│
├── public/
│   ├── brand/
│   ├── hero/
│   ├── women/
│   ├── kids/
│   └── store/
│
├── types/
│   └── index.ts
│
└── package.json
```

---

# 7. Business Data Layer

All important business information should exist in one source.

Example:

```text
business.ts
```

Containing:

```text
name
legal/display name
description
foundingYear
phone
address
city
state
postalCode
openingHours
latitude
longitude
instagram
googleMaps
logo
```

This prevents inconsistent information across pages.

---

# 8. Canonical Business Identity

Every page must consistently understand the business as:

**Kamal Selections**

Primary location:

**Ibrahim Complex, Main Road, Shadnagar, Telangana**

Founded:

**2021**

Phone:

**8332059777**

Primary categories:

**Women's Wear + Kids Wear**

Positioning:

**Fashion for Every Woman & Every Little One**

---

# 9. URL Architecture

Use short, human-readable URLs.

```text
/
 /women
 /kids
 /about
 /store
 /contact
 /faq
 /size-guide
 /privacy
 /terms
```

Do NOT create keyword-stuffed URLs such as:

```text
/best-dress-shop-in-shadnagar
/top-ladies-dress-shop-shadnagar
/cheap-best-womens-clothing-shadnagar
```

Those provide little additional value and create a doorway-page risk.

---

# 10. Page SEO Architecture

Every indexable page must have:

* Unique `<title>`
* Unique meta description
* Canonical URL
* One clear H1
* Logical H2/H3 structure
* Descriptive image alt text
* Internal links
* Open Graph metadata
* Twitter/X metadata where useful
* Appropriate structured data
* Crawlable content

---

# 11. Homepage SEO

Conceptual title:

**Kamal Selections | Women's & Kids' Wear in Shadnagar**

Meta description should naturally explain:

* Kamal Selections
* Shadnagar
* women's wear
* kids' wear
* store location
* major categories

Avoid writing a keyword list.

---

# 12. Women's Page SEO

Primary topic:

**Women's Wear in Shadnagar**

Content should naturally cover:

* Dresses
* Kurtis
* Tops
* Leggings
* Burqa
* 3-piece sets
* Party wear

The page should contain useful descriptive content rather than merely displaying image cards.

---

# 13. Kids Page SEO

Primary topic:

**Kids Wear in Shadnagar**

Cover:

* Girls clothing
* Boys clothing
* Kids frocks
* Kids sets

Again, useful content first.

---

# 14. Internal Linking System

Internal links should form a semantic network.

Example:

```text
HOME
 │
 ├── Women's Wear
 │      ├── Dresses
 │      ├── Kurtis
 │      ├── Party Wear
 │      └── 3-Piece Sets
 │
 └── Kids Wear
        ├── Girls Wear
        ├── Boys Wear
        ├── Frocks
        └── Kids Sets
```

Even if individual category pages are not created in V1, those concepts should be clearly represented within the relevant pages.

---

# 15. Local SEO Architecture

The site should establish a clear relationship:

```text
Kamal Selections
        ↓
Shadnagar
        ↓
Women's Wear
        ↓
Kids Wear
        ↓
Physical Store
```

Important location references should appear naturally in:

* Homepage
* Women's page
* Kids page
* Store page
* Contact page
* Footer

Do not repeat the city name unnaturally in every paragraph.

---

# 16. LocalBusiness Structured Data

Implement JSON-LD for the business.

Core fields:

```text
@type
name
image
logo
url
telephone
address
geo
openingHoursSpecification
sameAs
```

Where accurate and appropriate.

The implementation should use Google's current supported structured-data requirements at deployment time.

---

# 17. Entity Relationships

Structured references should establish:

```text
Kamal Selections
       │
       ├── locatedIn → Shadnagar
       │
       ├── offers → Women's Wear
       │
       ├── offers → Kids Wear
       │
       ├── founded → 2021
       │
       ├── telephone → 8332059777
       │
       └── sameAs → Instagram
```

This is the technical foundation for the site's entity understanding.

---

# 18. AEO Architecture

The website should contain answer-ready information.

Create an FAQ section with questions based on genuine customer intent.

Examples:

### What does Kamal Selections sell?

Answer with the actual categories.

### Where is Kamal Selections located?

Provide exact address.

### What time does Kamal Selections open?

Provide 10 AM–9 PM.

### Does Kamal Selections sell women's dresses?

Yes, with category details.

### Does Kamal Selections sell kids' clothing?

Yes, with category details.

### How can I contact Kamal Selections?

Phone + WhatsApp.

### Does Kamal Selections offer online ordering?

V1 should clearly explain that the website is currently a showcase/contact platform rather than a live e-commerce store.

This prevents confusion.

---

# 19. FAQ Schema

Only use FAQ structured data if the implementation remains eligible under Google's current requirements.

The visible FAQ content must exactly correspond to the structured data.

Never create hidden FAQ content solely for search engines.

---

# 20. GEO / Generative Search Architecture

The technical system should maximize factual clarity rather than attempt to manipulate AI systems.

Important information should be:

* Explicit
* Consistent
* Crawlable
* Structured
* Contextually linked
* Supported by real business information

The same core business facts should appear consistently across:

* Website
* Google Business Profile
* Instagram
* Relevant legitimate directories

---

# 21. Content Architecture

Content should be organized around topics.

```text
Women's Fashion
│
├── Dresses
├── Kurtis
├── Tops
├── Leggings
├── Burqa
├── 3-Piece Sets
└── Party Wear

Kids Fashion
│
├── Girls Wear
├── Boys Wear
├── Frocks
└── Kids Sets
```

Future content can expand these topical clusters.

---

# 22. SEO Content Rules

Every content page must satisfy at least one genuine user purpose.

Before publishing a page, ask:

1. What question does this answer?
2. Who is this for?
3. What unique information does Kamal Selections provide?
4. Is the information accurate?
5. Would a real customer find this useful?

If the answer is simply:

> "We need another page because we want another keyword."

Do not create the page.

---

# 23. AI Content Policy

AI can assist with:

* Drafting
* Ideation
* Image generation
* Rewriting
* Content formatting
* Social-media adaptation

AI must NOT be used to mass-produce:

* Hundreds of nearly identical location pages
* Fake customer experiences
* Fake reviews
* Fake product availability
* Fake store photography presented as real
* Unsupported claims
* Automatically generated keyword pages

Human review is required before publishing important business content.

---

# 24. Image Architecture

Use Next.js Image optimization.

Formats:

* AVIF where supported
* WebP fallback

Images should have:

* meaningful filenames
* dimensions
* appropriate compression
* descriptive alt text
* lazy loading when below the fold

Hero/LCP images should be prioritized.

---

# 25. Image Naming

Avoid:

```text
IMG_8374.jpg
image-final-new2.png
ai-generated-7.png
```

Prefer:

```text
kamal-selections-womens-wear-shadnagar.webp
kamal-selections-kids-wear-shadnagar.webp
kamal-selections-storefront-shadnagar.webp
```

This isn't a magic ranking factor, but it improves asset organization and context.

---

# 26. Performance Requirements

Target:

### Mobile

Excellent performance under realistic Indian mobile-network conditions.

### Core Web Vitals

Target:

* LCP < 2.5s
* INP < 200ms
* CLS < 0.1

These are targets, not guarantees.

---

# 27. Performance Rules

Avoid:

* Huge background videos
* Uncompressed 4K images
* Excessive JavaScript
* Multiple animation libraries
* Autoplay video above the fold
* Heavy third-party widgets
* Large font libraries

Use:

* Next Image
* responsive image sizes
* lazy loading
* code splitting
* server components
* CSS animations where sufficient
* compressed assets
* minimal third-party scripts

---

# 28. Cinematic Animation Architecture

The animation layer should be isolated.

Example:

```text
components/motion/
    ScrollReveal.tsx
    ParallaxImage.tsx
    TextReveal.tsx
    ImageTransition.tsx
```

The page must still render meaningful content without these effects.

---

# 29. Mobile Navigation

The navigation should prioritize:

**Logo**

**Women's**

**Kids**

**Visit Store**

**Menu**

The mobile menu should expose:

* Home
* Women's Wear
* Kids Wear
* About
* Store
* Contact
* FAQ
* Size Guide

Primary conversion buttons should remain easy to access.

---

# 30. Conversion Tracking

Implement analytics events.

Required events:

```text
whatsapp_click
phone_click
directions_click
instagram_click
women_category_click
kids_category_click
contact_submit
faq_expand
```

Future events:

```text
product_enquiry
campaign_click
store_visit_intent
```

---

# 31. Analytics Stack

Use a free analytics stack.

Recommended baseline:

**Google Analytics 4**

plus:

**Google Search Console**

Search Console becomes the primary source for:

* Search queries
* Impressions
* Clicks
* CTR
* Indexed pages
* Search appearance
* Technical indexing problems

---

# 32. Google Business Profile Integration

The website should link prominently to the verified Google Business Profile/Maps destination.

Primary CTA:

**Get Directions**

The business information shown on the website must match the verified listing.

---

# 33. WhatsApp Architecture

Currently:

**No WhatsApp Business account exists for 8332059777.**

Therefore the TRD must not assume WhatsApp functionality is already operational.

Before launch:

1. Decide whether the existing number will become WhatsApp Business.
2. Set up the account.
3. Configure business profile.
4. Add store hours.
5. Add business description.
6. Configure greeting/away messages.
7. Test click-to-chat.
8. Then activate website WhatsApp CTAs.

The website should use a centralized WhatsApp URL configuration so changing the number later requires changing one value.

---

# 34. Phone Architecture

Phone number must also be stored centrally.

CTA:

```text
tel:+918332059777
```

Do not hardcode the number across multiple components.

---

# 35. Google Maps Architecture

Centralize the official directions URL.

Buttons:

**Get Directions**

**Find Us on Google Maps**

The exact destination should point to the verified Kamal Selections listing rather than a generic search whenever possible.

---

# 36. SEO Files

Generate:

```text
/sitemap.xml
/robots.txt
```

Sitemap must contain only canonical indexable URLs.

Do not include:

* redirects
* duplicate URLs
* privacy pages if strategically excluded
* nonexistent pages
* query-string variants

---

# 37. Canonical Strategy

Every indexable page receives a canonical URL.

Example:

```text
https://[official-domain]/women
```

Avoid duplicate versions such as:

```text
/women/
/women?category=dresses
/women?utm_source=...
```

Canonical configuration should be handled systematically.

---

# 38. Open Graph

Every important page should have:

* title
* description
* branded image
* URL

Sharing the website on:

* WhatsApp
* Instagram DMs
* Facebook
* other platforms

should produce a professional preview.

---

# 39. 404 Experience

Custom 404 page:

**Looks like this style got away from us.**

Then provide:

* Home
* Women's Wear
* Kids Wear
* Visit Store

No dead ends.

---

# 40. Accessibility

Minimum requirements:

* semantic HTML
* keyboard navigation
* visible focus states
* alt text
* appropriate heading hierarchy
* accessible buttons
* accessible navigation
* sufficient contrast
* reduced-motion support

For users with reduced-motion preferences, cinematic animations should reduce or disable appropriately.

---

# 41. Security

Because V1 has no backend:

Attack surface is minimal.

Required:

* HTTPS
* secure deployment
* dependency updates
* no exposed secrets
* environment variables for future services
* no API keys inside client-side source
* no unnecessary third-party scripts

---

# 42. Deployment

Deployment target:

**Vercel**

Workflow:

```text
Developer
   ↓
GitHub
   ↓
Pull / Push
   ↓
Vercel Build
   ↓
Preview Deployment
   ↓
Testing
   ↓
Production
```

Every significant change should first be tested through a preview deployment.

---

# 43. Domain Strategy

Development:

```text
kamalselections.vercel.app
```

Possible production domain:

```text
kamalselections.in
```

Do not purchase a domain until availability and naming are confirmed.

Once purchased:

```text
kamalselections.in
        ↓
Vercel
```

The Vercel URL should redirect/canonicalize toward the official domain.

---

# 44. Environment Variables

V1 should require almost none.

Potential future:

```text
NEXT_PUBLIC_SITE_URL
NEXT_PUBLIC_GA_ID
NEXT_PUBLIC_WHATSAPP_NUMBER
```

Never expose:

* private API keys
* database passwords
* service-role keys

---

# 45. Testing Requirements

Before production:

### Functional

* Navigation
* All buttons
* Phone CTA
* WhatsApp CTA
* Maps CTA
* Instagram
* Forms
* Mobile menu

### SEO

* Metadata
* Canonicals
* Sitemap
* Robots
* Structured data
* Indexability
* Internal links

### Performance

* Mobile Lighthouse
* Desktop Lighthouse
* Image sizes
* JavaScript bundle
* LCP/CLS/INP

### Responsive

Test:

* Mobile
* Tablet
* Laptop
* Desktop
* Large desktop

### Browser

At minimum:

* Chrome
* Safari
* Firefox
* Edge

---

# 46. SEO Launch Checklist

Before launch:

```text
[ ] Official domain configured
[ ] HTTPS active
[ ] Google Search Console configured
[ ] Sitemap submitted
[ ] Robots verified
[ ] Canonicals verified
[ ] Titles verified
[ ] Descriptions verified
[ ] H1 structure verified
[ ] Structured data validated
[ ] Business information verified
[ ] Google Business Profile website linked
[ ] Maps CTA tested
[ ] Phone CTA tested
[ ] WhatsApp CTA tested
[ ] Instagram CTA tested
[ ] Open Graph tested
[ ] 404 tested
[ ] Mobile performance tested
[ ] Image optimization verified
```

---

# 47. Post-Launch SEO System

The launch is not the SEO strategy.

After launch:

### Week 1

Indexing + technical monitoring.

### Weeks 2–4

Identify:

* impressions
* queries
* pages receiving impressions
* pages receiving clicks
* local search patterns

### Month 2

Improve pages based on actual search data.

### Month 3

Build useful supporting content based on real demand.

Do not blindly create hundreds of pages.

---

# 48. Local Authority System

The long-term system should be:

```text
Google Business Profile
          │
          ├── Photos
          ├── Reviews
          ├── Posts
          └── Business information
                    │
                    ▼
Website ──────── Instagram
    │
    ├── Local information
    ├── Women's Wear
    ├── Kids Wear
    └── Helpful content
                    │
                    ▼
             Local discovery
```

Each channel reinforces the same real-world business.

---

# 49. Future Migration Path

V1:

```text
Static content
```

V2:

```text
CMS
 ↓
Product catalog
```

V3:

```text
CMS
 ↓
Inventory
 ↓
Orders
```

V4:

```text
Inventory
 ↓
POS
 ↓
Payments
 ↓
Delivery
 ↓
Customer accounts
```

The V1 code should keep business/content data separated from UI components so this migration remains practical.

---

# 50. Recommended V1 Cost

## Development

₹0

## Hosting

₹0

## GitHub

₹0

## Analytics

₹0

## Search Console

₹0

## Google Business Profile

₹0

## Database

₹0

## CMS

₹0

## Domain

Potential future expense.

Therefore:

### V1 target infrastructure cost

**₹0 excluding optional domain purchase.**

---

# 51. Definition of Done

The V1 website is considered complete when:

1. All required pages exist.
2. Website works on mobile and desktop.
3. Official Kamal Selections branding is correctly represented.
4. Women's and Kids' Wear are clearly positioned.
5. Store information is accurate.
6. Phone CTA works.
7. WhatsApp CTA works after WhatsApp Business setup.
8. Google Maps CTA works.
9. Instagram CTA works.
10. SEO metadata is implemented.
11. Structured data is implemented correctly.
12. Sitemap exists.
13. Robots exists.
14. Canonicals are correct.
15. Search Console is configured.
16. Analytics events are working.
17. Images are optimized.
18. Core content is crawlable without JavaScript-dependent rendering.
19. Cinematic animation does not compromise usability.
20. No fake stock, fake reviews, or unsupported claims are present.
21. Vercel production deployment works.
22. The website has a clear path toward future catalog/e-commerce functionality.

---

# 52. Technical Principle

The most important architectural decision is:

> **Do not build the complexity before the business needs it.**

V1 should be a **high-performance local fashion discovery platform**, not an ERP disguised as a website.

The first objective is to prove:

**Can digital discovery bring real people into Kamal Selections?**

Once the answer becomes measurable, the technical system can grow with the business.
