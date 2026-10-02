import { Metadata } from "next";
import { brandData } from "@/data/brand";
import { seoConfig } from "@/data/seo";

export function generatePageMetadata(
  title: string,
  description: string,
  path: string = "",
  ogImage: string = "/brand/logo/kamal-selections-logo.png"
): Metadata {
  const url = `${seoConfig.baseUrl}${path}`;
  const fullOgImageUrl = ogImage.startsWith("http")
    ? ogImage
    : `${seoConfig.baseUrl}${ogImage}`;

  return {
    metadataBase: new URL(seoConfig.baseUrl),
    title,
    description,
    authors: [{ name: "Hamid Kamal", url: seoConfig.baseUrl }],
    creator: "Hamid Kamal",
    publisher: brandData.name,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      siteName: brandData.name,
      locale: "en_IN",
      type: "website",
      images: [
        {
          url: fullOgImageUrl,
          width: 1200,
          height: 630,
          alt: `${brandData.name} — ${title}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [fullOgImageUrl],
      creator: "@kamal_selection_",
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
  };
}

export function generateDeveloperPersonSchema() {
  return {
    "@type": "Person",
    "@id": `${seoConfig.baseUrl}/#hamid-kamal`,
    name: "Hamid Kamal",
    jobTitle: "Software Developer & Designer",
    description:
      "Student and software developer who designed and built the official website for Kamal Selections in Shadnagar.",
    url: "https://hamid-ai-dev.vercel.app/",
    sameAs: ["https://hamid-ai-dev.vercel.app/"],
  };
}

export function generateLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ClothingStore",
    "@id": `${seoConfig.baseUrl}/#organization`,
    name: brandData.name,
    alternateName: "Kamal Selections Shadnagar",
    description: brandData.tagline,
    url: seoConfig.baseUrl,
    telephone: `+91${brandData.phone}`,
    logo: {
      "@type": "ImageObject",
      url: `${seoConfig.baseUrl}/brand/logo/kamal-selections-logo.png`,
    },
    image: [
      `${seoConfig.baseUrl}/images/store/kamal-selections-showroom-interior.png`,
      `${seoConfig.baseUrl}/images/store/kamal-selections-store-hero-facade.jpg`,
    ],
    address: {
      "@type": "PostalAddress",
      streetAddress: `${brandData.address.building}, ${brandData.address.street}`,
      addressLocality: brandData.address.city,
      addressRegion: brandData.address.state,
      postalCode: brandData.address.pincode,
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 17.0683,
      longitude: 78.2045,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        opens: brandData.hours.openingTime,
        closes: brandData.hours.closingTime,
      },
    ],
    priceRange: "₹₹",
    currenciesAccepted: "INR",
    paymentAccepted: "Cash, UPI",
    hasMap: brandData.maps.directionsUrl,
    sameAs: [brandData.social.instagramUrl],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Clothing Collections",
      itemListElement: [
        {
          "@type": "OfferCatalog",
          name: "Women's Wear",
          itemListElement: [
            { "@type": "Offer", name: "Dresses" },
            { "@type": "Offer", name: "Kurtis" },
            { "@type": "Offer", name: "Tops & Leggings" },
            { "@type": "Offer", name: "3-Piece Co-ord Sets" },
            { "@type": "Offer", name: "Party Wear" },
            { "@type": "Offer", name: "Modest Abaya & Burqa" },
          ],
        },
        {
          "@type": "OfferCatalog",
          name: "Kids' Wear",
          itemListElement: [
            { "@type": "Offer", name: "Girls' Wear & Birthday Frocks" },
            { "@type": "Offer", name: "Boys' Shirts & Trousers" },
            { "@type": "Offer", name: "Festive Kids Sets" },
          ],
        },
      ],
    },
  };
}

export function generateWebSiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${seoConfig.baseUrl}/#website`,
    url: seoConfig.baseUrl,
    name: brandData.name,
    description: seoConfig.defaultDescription,
    publisher: {
      "@id": `${seoConfig.baseUrl}/#organization`,
    },
    creator: generateDeveloperPersonSchema(),
    inLanguage: "en-IN",
  };
}

export function generateBreadcrumbSchema(
  items: { name: string; item: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((crumb, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: crumb.name,
      item: crumb.item.startsWith("http")
        ? crumb.item
        : `${seoConfig.baseUrl}${crumb.item}`,
    })),
  };
}

export function generateFAQSchema(
  faqs: { question: string; answer: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

