import { expect, test } from "@playwright/test";

const siteUrl =
  process.env.NEXT_PUBLIC_WEB_URL?.replace(/\/+$/, "") ||
  "https://musk-xchat.lol";

test("homepage keeps canonical indexing while legacy public pages are noindex", async ({
  page,
}) => {
  await page.goto("/en", { waitUntil: "domcontentloaded" });

  await expect(page.locator('head meta[name="robots"]')).toHaveAttribute(
    "content",
    "index, follow"
  );
  await expect(page.locator('head link[rel="canonical"]')).toHaveAttribute(
    "href",
    siteUrl
  );

  await page.goto("/en/pricing", { waitUntil: "domcontentloaded" });

  await expect(page.locator('head meta[name="robots"]')).toHaveAttribute(
    "content",
    "noindex, follow"
  );
});

test("sitemap only exposes the localized homepage set", async ({
  page,
}) => {
  const sitemapResponse = await page.request.get("/sitemap.xml");
  expect(sitemapResponse.ok()).toBeTruthy();

  const sitemapXml = await sitemapResponse.text();

  expect(sitemapXml).toContain(`${siteUrl}/`);
  expect(sitemapXml).toContain(`${siteUrl}/zh`);
  expect(sitemapXml).not.toContain("/pricing");
  expect(sitemapXml).not.toContain("/posts");
  expect(sitemapXml).not.toContain("/privacy-policy");
});
