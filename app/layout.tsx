import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata } from "next";
import "./globals.css";

const siteDescription =
  "Seyio Lab est un studio français d’édition de logiciels SaaS, IA et applications métiers basé à Courbevoie. Nous créons nos propres produits et développons des applications web sur mesure : SaaS, CRM, outils internes, IA et simulateurs.";

export const metadata: Metadata = {
  metadataBase: new URL("https://seyiolab.com"),
  title: {
    default: "Seyio Lab — Studio français d’édition de logiciels SaaS & IA",
    template: "%s — Seyio Lab",
  },
verification: {
  google: "ZAWvkQWkyi1o0YJA",
},
  description: siteDescription,
  keywords: [
    "Seyio Lab",
    "studio SaaS",
    "édition de logiciels",
    "développement SaaS sur mesure",
    "application métier",
    "CRM sur mesure",
    "intelligence artificielle",
    "automatisation",
    "simulateur en ligne",
    "développement web",
    "Courbevoie",
    "France",
  ],
  authors: [{ name: "Seyio Lab" }],
  creator: "Seyio Lab",
  publisher: "Seyio Lab",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://seyiolab.com",
    siteName: "Seyio Lab",
    title: "Seyio Lab — Studio français d’édition de logiciels SaaS & IA",
    description: siteDescription,
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Seyio Lab — Studio d’édition de logiciels SaaS & IA",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Seyio Lab — Studio français d’édition de logiciels SaaS & IA",
    description: siteDescription,
    images: ["/og-image.png"],
  },
  icons: { icon: "/favicon.svg", apple: "/apple-touch-icon.png" },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "SEYIO LAB",
    url: "https://seyiolab.com",
    email: "contact@seyiolab.com",
  };

  return (
    <html lang="fr">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}