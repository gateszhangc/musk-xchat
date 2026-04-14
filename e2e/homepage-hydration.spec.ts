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
    page.getByRole("heading", { name: /Musk XChat/i, level: 1 })
  ).toBeVisible();
  await page.getByRole("link", { name: /What Is xChat/i }).press("Enter");
  await expect(page).toHaveURL(/#overview$/);
  await expect(
    page.getByRole("heading", {
      name: /The real xChat question is whether X is building a messenger or an everything-app wedge\./i,
      level: 2,
    })
  ).toBeVisible();

  expect(missingChunkRequests).toEqual([]);
});
