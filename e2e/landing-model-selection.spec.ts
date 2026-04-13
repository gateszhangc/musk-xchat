import { expect, test } from "@playwright/test";

test("bloodhounds landing exposes core watch links and source-backed stats", async ({
  page,
}) => {
  await page.goto("/en");

  await expect(
    page.getByRole("heading", { name: /Bloodhounds/i, level: 1 })
  ).toBeVisible();
  await expect(page.getByText(/Unofficial Netflix series guide/i)).toBeVisible();

  const netflixLink = page.getByRole("link", { name: /Watch on Netflix/i });
  await expect(netflixLink).toHaveAttribute(
    "href",
    "https://www.netflix.com/hk-en/title/81444051"
  );

  const imdbLink = page.getByRole("link", { name: /View IMDb/i });
  await expect(imdbLink).toHaveAttribute(
    "href",
    "https://www.imdb.com/title/tt26315487/"
  );

  const seasonsCard = page.locator("div", { hasText: "Seasons on Netflix" }).first();
  await expect(seasonsCard).toContainText("2");
  const imdbCard = page.locator("div", { hasText: "Episodes on IMDb" }).first();
  await expect(imdbCard).toContainText("15");
  await expect(page.getByText(/Boxing x Crime/i)).toBeVisible();
  await expect(page.getByRole("heading", { name: /Jason Kim/i })).toBeVisible();
});

test("bloodhounds landing renders episode guide and faq content", async ({
  page,
}) => {
  await page.goto("/en");

  await page.getByRole("link", { name: /Jump to Episodes/i }).press("Enter");
  await expect(page).toHaveURL(/#episodes$/);
  await expect(page.getByRole("heading", { name: /Episode 1/i })).toBeVisible();
  await expect(page.getByText(/Season 2 status/i)).toBeVisible();

  await page.getByRole("link", { name: /FAQ/i }).click();
  await expect(page).toHaveURL(/#faq$/);

  const faqTrigger = page.getByRole("button", {
    name: /Where can you watch Bloodhounds\?/i,
  });
  await faqTrigger.click();
  await expect(
    page.getByText(/Netflix is the primary streaming home\./i)
  ).toBeVisible();
});
