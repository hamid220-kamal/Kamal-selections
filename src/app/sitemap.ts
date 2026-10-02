import { MetadataRoute } from "next";
import { seoConfig } from "@/data/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    { route: "", changeFrequency: "daily" as const, priority: 1.0 },
    { route: "/women", changeFrequency: "weekly" as const, priority: 0.9 },
    { route: "/kids", changeFrequency: "weekly" as const, priority: 0.9 },
    { route: "/store", changeFrequency: "weekly" as const, priority: 0.9 },
    { route: "/contact", changeFrequency: "weekly" as const, priority: 0.9 },
    { route: "/about", changeFrequency: "monthly" as const, priority: 0.8 },
    { route: "/faq", changeFrequency: "weekly" as const, priority: 0.8 },
    { route: "/why-kamal-selections", changeFrequency: "monthly" as const, priority: 0.8 },
    { route: "/size-guide", changeFrequency: "monthly" as const, priority: 0.7 },
    { route: "/privacy-policy", changeFrequency: "yearly" as const, priority: 0.3 },
    { route: "/terms", changeFrequency: "yearly" as const, priority: 0.3 },
  ];

  return routes.map(({ route, changeFrequency, priority }) => ({
    url: `${seoConfig.baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency,
    priority,
  }));
}

