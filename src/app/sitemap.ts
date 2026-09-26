import { MetadataRoute } from "next";
import { seoConfig } from "@/data/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/women",
    "/kids",
    "/about",
    "/why-kamal-selections",
    "/store",
    "/contact",
    "/faq",
    "/size-guide",
    "/privacy-policy",
    "/terms",
  ];

  return routes.map((route) => ({
    url: `${seoConfig.baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1.0 : 0.8,
  }));
}
