import { MetadataRoute } from "next";
import { getSiteUrl } from "@/lib/site-url";
import { locales } from "@/i18n/locale";
import { getAbsoluteLocalizedUrl } from "@/i18n/url";
import { MUSK_XCHAT_UPDATED_AT } from "@/lib/musk-xchat-site";

const PUBLIC_ROUTES: Array<{
  path: string;
  changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
  priority: number;
}> = [
  { path: "/", changeFrequency: "daily", priority: 1.0 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = getSiteUrl();
  const lastModified = new Date(`${MUSK_XCHAT_UPDATED_AT}T00:00:00.000Z`);
  const entries: MetadataRoute.Sitemap = [];

  for (const route of PUBLIC_ROUTES) {
    for (const locale of locales) {
      entries.push({
        url: getAbsoluteLocalizedUrl(siteUrl, locale, route.path),
        lastModified,
        changeFrequency: route.changeFrequency,
        priority: route.priority,
      });
    }
  }

  return entries;
}
