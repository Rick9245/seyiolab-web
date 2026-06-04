import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://seyiolab.com"),
  title: "Seyio Lab — Studio français d’édition de logiciels SaaS & IA",
  description:
    "Seyio Lab est un studio français d’édition de logiciels SaaS, IA et applications métiers basé à Courbevoie.",
  icons: { icon: "/favicon.svg", apple: "/apple-touch-icon.png" },
  robots: { index: true, follow: true },
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