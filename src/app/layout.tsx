import type { Metadata, Viewport } from "next";
import "@/styles/globals.css";
import {
  generatePageMetadata,
  generateLocalBusinessSchema,
  generateWebSiteSchema,
} from "@/lib/seo";
import { seoConfig } from "@/data/seo";
import { GoogleReviewBadge } from "@/components/common/GoogleReviewBadge";

export const metadata: Metadata = {
  ...generatePageMetadata(
    seoConfig.defaultTitle,
    seoConfig.defaultDescription,
    ""
  ),
  icons: {
    icon: "/brand/logo/kamal-selections-logo.png",
    shortcut: "/brand/logo/kamal-selections-logo.png",
    apple: "/brand/logo/kamal-selections-logo.png",
  },
  manifest: "/manifest.webmanifest",
};

export const viewport: Viewport = {
  themeColor: "#3E0A23",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const schemaGraph = {
    "@context": "https://schema.org",
    "@graph": [
      generateLocalBusinessSchema(),
      generateWebSiteSchema(),
    ],
  };

  return (
    <html lang="en">
      <head>
        {/* Google Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Alex+Brush&family=Cinzel:wght@400;500;600;700;800&family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;0,700;1,400;1,600&family=Outfit:wght@300;400;500;600;700&family=Plus+Jakarta+Sans:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schemaGraph),
          }}
        />
      </head>
      <body>
        {children}
        <GoogleReviewBadge />
      </body>
    </html>
  );
}

