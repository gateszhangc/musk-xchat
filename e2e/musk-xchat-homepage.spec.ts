import { expect, test } from "@playwright/test";

test("musk xchat landing exposes overview, compare, and keyword framing", async ({
  page,
}) => {
  await page.goto("/en");

  await expect(
    page.getByRole("heading", { name: /Musk XChat/i, level: 1 })
  ).toBeVisible();
  await expect(page.getByText(/Independent xChat explainer/i)).toBeVisible();
  await expect(
    page.getByText(/trying to separate product ambition from product reality/i)
  ).toBeVisible();

  const compareLink = page.getByRole("link", { name: /Compare Apps/i });
  await compareLink.click();
  await expect(page).toHaveURL(/#compare$/);

  await expect(page.getByText(/Inside X accounts and phased rollout logic/i)).toBeVisible();
  await expect(page.getByRole("columnheader", { name: /xChat/i })).toBeVisible();
  await expect(page.getByText(/Read claims cautiously until independently validated/i)).toBeVisible();
});

test("musk xchat landing renders timeline and faq content", async ({
  page,
}) => {
  await page.goto("/en");

  await page.getByRole("link", { name: /Timeline/i }).click();
  await expect(page).toHaveURL(/#timeline$/);
  await expect(page.getByText(/May 30, 2025/i)).toBeVisible();
  await expect(page.getByText(/September 4, 2025/i)).toBeVisible();

  await page.getByRole("link", { name: /Read FAQ/i }).click();
  await expect(page).toHaveURL(/#faq$/);

  const faqTrigger = page.getByRole("button", {
    name: /Is xChat end-to-end encrypted\?/i,
  });
  await faqTrigger.click();
  await expect(
    page.getByText(/Treat that as unresolved\./i)
  ).toBeVisible();
  await expect(
    page.getByText(/Not affiliated with X Corp\., xAI, or Elon Musk\./i)
  ).toBeVisible();
});
