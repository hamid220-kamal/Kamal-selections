import type { Metadata } from "next";
import "@/styles/globals.css";
import { generatePageMetadata, generateLocalBusinessSchema } from "@/lib/seo";
import { seoConfig } from "@/data/seo";
import { GoogleReviewBadge } from "@/components/common/GoogleReviewBadge";

export const metadata: Metadata = generatePageMetadata(
  seoConfig.defaultTitle,
  seoConfig.defaultDescription
);

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const localBusinessSchema = generateLocalBusinessSchema();

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
            __html: JSON.stringify(localBusinessSchema),
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
