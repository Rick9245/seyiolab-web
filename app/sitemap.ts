import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  const services = [
    "developpement-saas",
    "crm-outils-internes",
    "intelligence-artificielle",
    "simulateurs-en-ligne",
  ];

  return [
    { url: "https://seyiolab.com", lastModified, changeFrequency: "monthly", priority: 1 },
    { url: "https://seyiolab.com/portfolio", lastModified, changeFrequency: "monthly", priority: 0.8 },
    ...services.map((slug) => ({
      url: `https://seyiolab.com/services/${slug}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    { url: "https://seyiolab.com/mentions-legales", lastModified, changeFrequency: "yearly", priority: 0.5 },
    { url: "https://seyiolab.com/politique-confidentialite", lastModified, changeFrequency: "yearly", priority: 0.5 },
  ];
}
