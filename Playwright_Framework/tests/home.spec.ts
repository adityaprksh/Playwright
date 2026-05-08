import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/HomePage';

test.describe('Epaysystems Home Page Tests', () => {

  test('Scroll to bottom and verify footer is visible', async ({ page }) => {
    const homePage = new HomePage(page);

    await homePage.navigate();
    await homePage.scrollToBottom();

    await expect(page.locator('footer')).toBeVisible();
  });

});

