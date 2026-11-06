import type { MetadataRoute } from "next";
import { business, services } from "@/data/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return [
    { url: `${business.url}/`, lastModified: now, priority: 1 },
    { url: `${business.url}/tarifs`, lastModified: now, priority: 0.9 },
    { url: `${business.url}/realisations`, lastModified: now, priority: 0.7 },
    ...services.map((s) => ({ url: `${business.url}/services/${s.slug}`, lastModified: now, priority: 0.8 })),
  ];
}
