import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans, Cinzel, Cormorant_Garamond, Alex_Brush } from "next/font/google";
import "@/styles/globals.css";
import {
  generatePageMetadata,
  generateLocalBusinessSchema,
  generateWebSiteSchema,
  generateDeveloperPersonSchema,
} from "@/lib/seo";
import { seoConfig } from "@/data/seo";
import { GoogleReviewBadge } from "@/components/common/GoogleReviewBadge";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-sans-ui",
  display: "swap",
});

const cinzel = Cinzel({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  variable: "--font-serif-brand",
  display: "swap",
});

const cormorantGaramond = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-serif-heading",
  display: "swap",
});

const alexBrush = Alex_Brush({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-script",
  display: "swap",
});

export const metadata: Metadata = {
  ...generatePageMetadata(
    seoConfig.defaultTitle,
    seoConfig.defaultDescription,
    "/"
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
      generateDeveloperPersonSchema(),
    ],
  };

  return (
    <html
      lang="en"
      className={`${plusJakartaSans.variable} ${cinzel.variable} ${cormorantGaramond.variable} ${alexBrush.variable}`}
    >
      <head>
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

