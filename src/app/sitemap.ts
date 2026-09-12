import type { MetadataRoute } from "next";

// Production site origin for the sitemap. The route only emits entries when a
// real origin is configured; no domain is hard-coded here. Set
// NEXT_PUBLIC_SITE_URL (or SITE_URL) in the production environment.
const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? process.env.SITE_URL;

const publicRoutes = [
  "/",
  "/services",
  "/about",
  "/contact",
  "/privacy-policy",
  "/terms",
  "/fulfillment-policy",
];

export default function sitemap(): MetadataRoute.Sitemap {
  if (!baseUrl) return [];

  const origin = baseUrl.replace(/\/+$/, "");

  return publicRoutes.map((route) => ({
    url: route === "/" ? origin : `${origin}${route}`,
    lastModified: new Date(),
  }));
}