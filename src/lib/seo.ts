import { Metadata } from "next";
import { brandData } from "@/data/brand";
import { seoConfig } from "@/data/seo";

export function generatePageMetadata(
  title: string,
  description: string,
  path: string = "",
  ogImage: string = "/brand/logo/kamal-selections-logo.png"
): Metadata {
  const normalizedPath = path ? (path.startsWith("/") ? path : `/${path}`) : "";
  const canonicalUrl = `${seoConfig.baseUrl}${normalizedPath}`;
  const fullOgImageUrl = ogImage.startsWith("http")
    ? ogImage
    : `${seoConfig.baseUrl}${ogImage}`;

  return {
    metadataBase: new URL(seoConfig.baseUrl),
    title,
    description,
    authors: [{ name: "Hamid Kamal", url: seoConfig.developer.url }],
    creator: "Hamid Kamal",
    publisher: brandData.name,
    verification: {
      google: "rbGIuYx-CG_UjgEcXqTy93OcCqfGouuSt-YbH4lRoGg",
    },
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title,
      description,
      url: canonicalUrl,
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
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${seoConfig.baseUrl}/#developer`,
    name: "Hamid Kamal",
    jobTitle: "Software Developer & Designer",
    description:
      "Software developer and designer who created and built the official website for Kamal Selections in Shadnagar.",
    url: "https://hamid-ai-dev.vercel.app/",
    sameAs: ["https://hamid-ai-dev.vercel.app/"],
  };
}

export function generateLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": ["ClothingStore", "LocalBusiness", "Organization"],
    "@id": `${seoConfig.baseUrl}/#business`,
    name: brandData.name,
    alternateName: "Kamal Selections Shadnagar",
    description:
      "Women's & Kids' Clothing Store located at Ibrahim Complex, Main Road, Shadnagar, Telangana 509216, India.",
    url: `${seoConfig.baseUrl}/`,
    telephone: `+91${brandData.phone}`,
    logo: {
      "@type": "ImageObject",
      url: `${seoConfig.baseUrl}/brand/logo/kamal-selections-logo.png`,
    },
    image: [
      `${seoConfig.baseUrl}/brand/logo/kamal-selections-logo.png`,
      `${seoConfig.baseUrl}/images/store/kamal-selections-showroom-interior.png`,
      `${seoConfig.baseUrl}/images/store/kamal-selections-store-hero-facade.jpg`,
      `${seoConfig.baseUrl}/images/store/kamal-selections-storefront-shadnagar.png`,
    ],
    address: {
      "@type": "PostalAddress",
      buildingName: brandData.address.building,
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
    areaServed: {
      "@type": "AdministrativeArea",
      name: "Shadnagar, Telangana, India",
    },
    hasMap: brandData.maps.directionsUrl,
    sameAs: [brandData.social.instagramUrl],
    founder: {
      "@id": `${seoConfig.baseUrl}/#developer`,
    },
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
    url: `${seoConfig.baseUrl}/`,
    name: brandData.name,
    description: seoConfig.defaultDescription,
    publisher: {
      "@id": `${seoConfig.baseUrl}/#business`,
    },
    about: {
      "@id": `${seoConfig.baseUrl}/#business`,
    },
    creator: {
      "@id": `${seoConfig.baseUrl}/#developer`,
    },
    inLanguage: "en-IN",
  };
}

export function generateWebPageSchema(
  name: string,
  description: string,
  path: string
) {
  const normalizedPath = path ? (path.startsWith("/") ? path : `/${path}`) : "";
  const pageUrl = `${seoConfig.baseUrl}${normalizedPath}`;
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${pageUrl}#webpage`,
    url: pageUrl,
    name,
    description,
    inLanguage: "en-IN",
    isPartOf: {
      "@id": `${seoConfig.baseUrl}/#website`,
    },
    about: {
      "@id": `${seoConfig.baseUrl}/#business`,
    },
    breadcrumb: {
      "@id": `${pageUrl}#breadcrumb`,
    },
  };
}

export function generateBreadcrumbSchema(
  items: { name: string; item: string }[],
  currentPath: string = ""
) {
  const normalizedPath = currentPath
    ? currentPath.startsWith("/")
      ? currentPath
      : `/${currentPath}`
    : "";
  const pageUrl = `${seoConfig.baseUrl}${normalizedPath}`;
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "@id": `${pageUrl}#breadcrumb`,
    itemListElement: items.map((crumb, index) => {
      const crumbPath = crumb.item.startsWith("/")
        ? crumb.item
        : `/${crumb.item}`;
      const itemUrl = crumb.item.startsWith("http")
        ? crumb.item
        : `${seoConfig.baseUrl}${crumbPath === "/" ? "" : crumbPath}`;
      return {
        "@type": "ListItem",
        position: index + 1,
        name: crumb.name,
        item: itemUrl || `${seoConfig.baseUrl}/`,
      };
    }),
  };
}

export function generateFAQSchema(
  faqs: { question: string; answer: string }[],
  currentPath: string = "/faq"
) {
  const normalizedPath = currentPath.startsWith("/")
    ? currentPath
    : `/${currentPath}`;
  const pageUrl = `${seoConfig.baseUrl}${normalizedPath}`;
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": `${pageUrl}#faq`,
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



