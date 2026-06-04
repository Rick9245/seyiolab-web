import Link from "next/link";
import type { Metadata } from "next";

export type ServiceItem = { title: string; text: string };

export type ServiceData = {
  slug: string;
  badge: string;
  h1: string;
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
  intro: string;
  benefits: ServiceItem[];
  useCases: ServiceItem[];
  approach: ServiceItem[];
};

export function serviceMetadata(d: ServiceData): Metadata {
  const path = `/services/${d.slug}`;
  return {
    title: d.metaTitle,
    description: d.metaDescription,
    keywords: d.keywords,
    alternates: { canonical: path },
    openGraph: {
      type: "article",
      locale: "fr_FR",
      url: path,
      siteName: "Seyio Lab",
      title: `${d.metaTitle} — Seyio Lab`,
      description: d.metaDescription,
      images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Seyio Lab" }],
    },
    twitter: {
      card: "summary_large_image",
      title: `${d.metaTitle} — Seyio Lab`,
      description: d.metaDescription,
      images: ["/og-image.png"],
    },
  };
}

export default function ServicePageView({ data }: { data: ServiceData }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: data.metaTitle,
    description: data.metaDescription,
    serviceType: data.h1,
    areaServed: "FR",
    url: `https://seyiolab.com/services/${data.slug}`,
    provider: {
      "@type": "Organization",
      name: "Seyio Lab",
      url: "https://seyiolab.com",
    },
  };

  return (
    <main className="container legal">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <Link href="/">← Retour à l’accueil</Link>

      <div className="kicker">{data.badge}</div>
      <h1>{data.h1}</h1>
      <p className="text">{data.intro}</p>

      <h2>Bénéfices clés</h2>
      <div className="services-grid">
        {data.benefits.map((item) => (
          <article className="service-card" key={item.title}>
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </article>
        ))}
      </div>

      <h2>Cas d’usage</h2>
      <div className="services-grid">
        {data.useCases.map((item) => (
          <article className="service-card" key={item.title}>
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </article>
        ))}
      </div>

      <h2>L’approche Seyio Lab</h2>
      <div className="services-grid">
        {data.approach.map((item) => (
          <article className="service-card" key={item.title}>
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </article>
        ))}
      </div>

      <div className="service-cta">
        <a className="btn" href="/#contact">
          Discuter de votre projet
        </a>
        <Link className="btn secondary" href="/portfolio">
          Voir le portfolio
        </Link>
      </div>
    </main>
  );
}
