import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';

test.describe('Login Tests - Epaysystems', () => {

  test('Validate error on invalid login', async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.navigateToLogin();

    // Random invalid credentials
    const randomUser = `user_${Math.random().toString(36).substring(7)}`;
    const randomPass = `pass_${Math.random().toString(36).substring(7)}`;

    await loginPage.login(randomUser, randomPass);

    // Assertion
    await expect(loginPage.errorMessage).toBeVisible();

    const errorText = await loginPage.getErrorMessage();
    console.log('Error Message:', errorText);

    // Optional strong validation
    await expect(errorText?.toLowerCase()).toContain('invalid');
  });

});