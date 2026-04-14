import { expect, test } from "@playwright/test";

const analyticsId = process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID || "";
const clarityId = process.env.NEXT_PUBLIC_CLARITY_PROJECT_ID || "";

test.skip(!clarityId, "NEXT_PUBLIC_CLARITY_PROJECT_ID is required for this check");

test("runtime analytics env reaches the production page", async ({ page }) => {
  const response = await page.goto("/en", { waitUntil: "domcontentloaded" });

  expect(response?.ok()).toBeTruthy();

  await expect(
    page.locator('head link[rel="dns-prefetch"][href="https://clarity.ms"]')
  ).toHaveCount(1);
  await expect(
    page.locator('head link[rel="dns-prefetch"][href="https://www.googletagmanager.com"]')
  ).toHaveCount(analyticsId ? 1 : 0);

  await page.mouse.click(20, 20);

  await expect(page.locator("script#ms-clarity")).toHaveCount(1);
  const clarityText = await page
    .locator("script#ms-clarity")
    .evaluate((element) => element.textContent || "");

  expect(clarityText).toContain(clarityId);

  if (!analyticsId) {
    await expect(page.locator("script#ga-init")).toHaveCount(0);
    await expect(page.locator('script[src*="gtag/js?id="]')).toHaveCount(0);
    return;
  }

  await expect(page.locator("script#ga-init")).toHaveCount(1);
  await expect(
    page.locator(`script[src*="gtag/js?id=${analyticsId}"]`)
  ).toHaveCount(1);

  const gaInitText = await page
    .locator("script#ga-init")
    .evaluate((element) => element.textContent || "");

  expect(gaInitText).toContain(analyticsId);
});
