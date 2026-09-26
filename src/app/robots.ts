import { MetadataRoute } from "next";
import { seoConfig } from "@/data/seo";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${seoConfig.baseUrl}/sitemap.xml`,
  };
}
