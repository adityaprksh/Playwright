# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: login.spec.ts >> Login Tests - Epaysystems >> Validate error on invalid login
- Location: tests\login.spec.ts:6:7

# Error details

```
Error: locator.fill: Unknown engine "name" while parsing selector name="txtLoginID"
Call log:
  - waiting for locator('name="txtLoginID"')

```

# Page snapshot

```yaml
- generic [ref=e2]:
  - banner [ref=e3]:
    - generic [ref=e4]:
      - generic:
        - 'link "Logo: Blueforce.com" [ref=e6] [cursor=pointer]':
          - /url: "#"
          - 'img "Logo: Blueforce.com" [ref=e7]'
        - list [ref=e8]:
          - listitem [ref=e9]:
            - link "English - United States" [ref=e10] [cursor=pointer]:
              - /url: "#"
  - generic [ref=e11]:
    - generic [ref=e15]:
      - heading "Login to EPAY Time & Labor" [level=1] [ref=e16]
      - generic [ref=e18]:
        - generic [ref=e19]:
          - generic [ref=e21]: Company
          - textbox [ref=e23]
        - generic [ref=e24]:
          - generic [ref=e26]: Login ID
          - generic [ref=e27]:
            - textbox [ref=e28]
            - paragraph [ref=e29]:
              - generic [ref=e30]: 
              - generic [ref=e31]: Password is case sensitive
        - generic [ref=e32]:
          - generic [ref=e34]: Password
          - textbox [ref=e36]
        - generic [ref=e39]:
          - generic [ref=e43] [cursor=pointer]:
            - generic [ref=e44]:
              - checkbox "Remember me" [ref=e45]
              - insertion [ref=e46]
            - text: Remember me
          - button "Login" [ref=e48] [cursor=pointer]
        - generic [ref=e51]:
          - link "Forgot Login ID?" [ref=e52] [cursor=pointer]:
            - /url: javascript:void(0)
          - text: "|"
          - link "Forgot Password?" [ref=e53] [cursor=pointer]:
            - /url: "#"
      - text:  
      - generic [ref=e55]:
        - text: "["
        - generic [ref=e56]: 
        - text: 877-800-3729 Option 2
        - generic [ref=e57]: 
        - link "support@epaysystems.com" [ref=e59] [cursor=pointer]:
          - /url: mailto:support@epaysystems.com
        - text: "]"
      - link "Watch the Instructional Video to Recover Your Login Credentials" [ref=e62] [cursor=pointer]:
        - /url: http://offers.epaysystems.com/recovering-login-credentials
      - text:    
    - generic [ref=e64]:
      - generic [ref=e66]:
        - generic [ref=e67]: Our mobile Manager app is now live!
        - generic [ref=e68]: Find EPAY Time Plus in the app store.
      - generic [ref=e72]:
        - img "New Generation Mobile App QR Code" [ref=e74]
        - generic [ref=e75]:
          - generic [ref=e76]: Scan the QR Code to download the app.
          - generic [ref=e77]: "Note: For access, Time Plus must be enabled for your organization. Contact your system admin for details."
  - generic [ref=e80]:
    - text: Software Version
    - strong [ref=e81]: V7 SP 5.6.3
  - text:    
```

# Test source

```ts
  1  | import { Page, Locator } from '@playwright/test';
  2  | 
  3  | export class LoginPage {
  4  |   readonly page: Page;
  5  |   readonly usernameInput: Locator;
  6  |   readonly passwordInput: Locator;
  7  |   readonly loginButton: Locator;
  8  |   readonly errorMessage: Locator;
  9  | 
  10 |   constructor(page: Page) {
  11 |     this.page = page;
  12 |     this.usernameInput = page.locator('id="txtCorpID"');
  13 |     this.usernameInput = page.locator('name="txtLoginID"');
  14 |     this.passwordInput = page.locator('id="txtPassword"');
  15 |     this.loginButton = page.locator('button:has-text("Login"), input[type="submit"]');
  16 |     this.errorMessage = page.locator('.error, .alert, .validation-message');
  17 |   }
  18 | 
  19 |   async navigateToLogin() {
  20 |     await this.page.goto('https://epaysystems.com/');
  21 |     
  22 |     // Click login link (update selector based on actual DOM)
  23 |     await this.page.click('text=Login');
  24 |   }
  25 | 
  26 |   async login(username: string, password: string) {
> 27 |     await this.usernameInput.fill(username);
     |                              ^ Error: locator.fill: Unknown engine "name" while parsing selector name="txtLoginID"
  28 |     await this.passwordInput.fill(password);
  29 |     await this.loginButton.click();
  30 |   }
  31 | 
  32 |   async getErrorMessage() {
  33 |     return await this.errorMessage.textContent();
  34 |   }
  35 | }
```