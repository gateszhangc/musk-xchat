import { MetadataRoute } from "next";
import { getSiteUrl } from "@/lib/site-url";
import { locales } from "@/i18n/locale";
import { getAbsoluteLocalizedUrl } from "@/i18n/url";

const PUBLIC_ROUTES: Array<{
  path: string;
  changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
  priority: number;
}> = [
  { path: "/", changeFrequency: "daily", priority: 1.0 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = getSiteUrl();
  const now = new Date();
  const entries: MetadataRoute.Sitemap = [];

  for (const route of PUBLIC_ROUTES) {
    for (const locale of locales) {
      entries.push({
        url: getAbsoluteLocalizedUrl(siteUrl, locale, route.path),
        lastModified: now,
        changeFrequency: route.changeFrequency,
        priority: route.priority,
      });
    }
  }

  return entries;
}
