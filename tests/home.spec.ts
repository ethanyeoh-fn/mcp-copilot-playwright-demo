import { test, expect } from '@playwright/test';

test('homepage shows welcome message', async ({ page }) => {
  await page.goto('http://localhost:3000/');
  await expect(page.locator('h1')).toHaveText('We are running testing for change test and auto testing with commit coding');
});
