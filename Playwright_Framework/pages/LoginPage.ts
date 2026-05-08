import { Page, Locator } from '@playwright/test';

export class LoginPage {
  readonly page: Page;
  readonly usernameInput: Locator;
  readonly passwordInput: Locator;
  readonly loginButton: Locator;
  readonly errorMessage: Locator;

  constructor(page: Page) {
    this.page = page;
    this.usernameInput = page.locator('id="txtCorpID"');
    this.usernameInput = page.locator('name="txtLoginID"');
    this.passwordInput = page.locator('id="txtPassword"');
    this.loginButton = page.locator('button:has-text("Login"), input[type="submit"]');
    this.errorMessage = page.locator('.error, .alert, .validation-message');
  }

  async navigateToLogin() {
    await this.page.goto('https://epaysystems.com/');
    
    // Click login link (update selector based on actual DOM)
    await this.page.click('text=Login');
  }

  async login(username: string, password: string) {
    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);
    await this.loginButton.click();
  }

  async getErrorMessage() {
    return await this.errorMessage.textContent();
  }
}