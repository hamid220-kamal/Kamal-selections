import { Metadata } from "next";
import { brandData } from "@/data/brand";
import { seoConfig } from "@/data/seo";

export function generatePageMetadata(
  title: string,
  description: string,
  path: string = ""
): Metadata {
  const url = `${seoConfig.baseUrl}${path}`;

  return {
    title,
    description,
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
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export function generateLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ClothingStore",
    name: brandData.name,
    description: brandData.tagline,
    url: seoConfig.baseUrl,
    telephone: brandData.phone,
    address: {
      "@type": "PostalAddress",
      streetAddress: `${brandData.address.building}, ${brandData.address.street}`,
      addressLocality: brandData.address.city,
      addressRegion: brandData.address.state,
      postalCode: brandData.address.pincode,
      addressCountry: "IN",
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
    sameAs: [brandData.social.instagramUrl],
  };
}
