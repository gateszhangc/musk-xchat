import { expect, test } from "@playwright/test";

test("root path resolves to the localized homepage", async ({ page }) => {
  const response = await page.goto("/");

  expect(response?.ok()).toBeTruthy();
  await expect(page).toHaveURL(/\/en$/);
  await expect(
    page.getByRole("heading", { name: /Bloodhounds/i, level: 1 })
  ).toBeVisible();
  await expect(page).toHaveTitle(/Bloodhounds Netflix Guide/i);
});
