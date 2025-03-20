import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle("Tim Mackenzie - QA Engineer");
});

test('navbar', async ({ page }) => {
    await page.goto('/');
    const navBar = await page.getByTestId('navbar');
    expect(navBar).toBeVisible;
    expect(navBar).toBeInViewport;
    const blogLink = await page.getByTestId('blog-link');
    expect(blogLink).toBeEnabled;
})