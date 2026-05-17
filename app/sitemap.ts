import type { MetadataRoute } from "next";
export default function sitemap(): MetadataRoute.Sitemap { return [
{ url: "https://seyiolab.com", lastModified: new Date(), changeFrequency: "monthly", priority: 1 },
{ url: "https://seyiolab.com/mentions-legales", lastModified: new Date(), changeFrequency: "yearly", priority: 0.5 },
{ url: "https://seyiolab.com/politique-confidentialite", lastModified: new Date(), changeFrequency: "yearly", priority: 0.5 }
]; }
