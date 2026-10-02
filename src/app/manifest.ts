import { MetadataRoute } from "next";
import { seoConfig } from "@/data/seo";
import { brandData } from "@/data/brand";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Kamal Selections — Women's & Kids' Clothing Store",
    short_name: "Kamal Selections",
    description: seoConfig.defaultDescription,
    start_url: "/",
    display: "standalone",
    background_color: "#FAF3EB",
    theme_color: "#3E0A23",
    icons: [
      {
        src: "/brand/logo/kamal-selections-logo.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/brand/logo/kamal-selections-logo.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
