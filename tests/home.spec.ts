import { test, expect } from '@playwright/test';

test('homepage shows welcome message', async ({ page }) => {
  await page.goto('http://localhost:3000/');
  await expect(page.locator('h1')).toHaveText('Hello from MCP demo');
});
