import { expect, test } from "@playwright/test";

test("homepage hydrates without missing next chunks", async ({ page }) => {
  const missingChunkRequests: string[] = [];

  page.on("response", (response) => {
    if (
      response.status() === 404 &&
      response.url().includes("/_next/static/chunks/")
    ) {
      missingChunkRequests.push(response.url());
    }
  });

  const response = await page.goto("/en", { waitUntil: "networkidle" });

  expect(response?.ok()).toBeTruthy();

  await expect(
    page.getByRole("heading", { name: /Bloodhounds/i, level: 1 })
  ).toBeVisible();
  await page.getByRole("link", { name: /Jump to Episodes/i }).press("Enter");
  await expect(page).toHaveURL(/#episodes$/);
  await expect(
    page.getByRole("heading", {
      name: /The first eight episodes move like a debt spiral with gloves on\./i,
      level: 2,
    })
  ).toBeVisible();

  expect(missingChunkRequests).toEqual([]);
});
