
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://seyiolab.com"),
  title: "Seyio Lab — Studio français d’édition de logiciels SaaS & IA",
  description: "Seyio Lab est un studio français d’édition de logiciels SaaS et IA basé à Courbevoie. Créateur de produits digitaux innovants : legal-tech, immobilier, gestion et applications cloud.",
  keywords: ["Seyio Lab", "studio SaaS", "logiciel SaaS", "IA", "legal-tech", "proptech", "Courbevoie", "France"],
  alternates: { canonical: "/" },
  openGraph: {
    title: "Seyio Lab — Studio SaaS & IA",
    description: "Studio français d’édition de logiciels SaaS et IA.",
    url: "https://seyiolab.com",
    siteName: "Seyio Lab",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
    locale: "fr_FR",
    type: "website"
  },
  twitter: { card: "summary_large_image", title: "Seyio Lab", description: "Studio français d’édition de logiciels SaaS et IA.", images: ["/og-image.png"] },
  icons: { icon: "/favicon.svg", apple: "/apple-touch-icon.png" },
  robots: { index: true, follow: true }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const jsonLd = {"@context":"https://schema.org","@type":"Organization",name:"Seyio Lab",url:"https://seyiolab.com",logo:"https://seyiolab.com/logo.svg",address:{"@type":"PostalAddress",addressLocality:"Courbevoie",addressCountry:"FR"},founder:"Yacov Serero"};
  return <html lang="fr"><body><script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(jsonLd)}} />{children}</body></html>;
}
