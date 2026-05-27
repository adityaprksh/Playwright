// 06_JS_Identifiers.js
// Examples of common JavaScript naming conventions

// 1. camelCase for variables and function names
let userName = 'Alice';
let accountBalance = 1200.5;

function calculateDiscount(price, percentage) {
  return price * (percentage / 100);
}

console.log(calculateDiscount(accountBalance, 15));

// 2. PascalCase for class names and constructor functions
class ShoppingCart {
  constructor(owner) {
    this.owner = owner;
    this.items = [];
  }

  addItem(item) {
    this.items.push(item);
  }
}

const cart = new ShoppingCart(userName);
cart.addItem('Laptop');
console.log(cart);

// 3. UPPER_SNAKE_CASE for constants
const MAX_LOGIN_ATTEMPTS = 5;
const API_BASE_URL = 'https://api.example.com';

console.log(MAX_LOGIN_ATTEMPTS, API_BASE_URL);

// 4. kebab-case is not valid for JS identifiers, but often used in file names or CSS classes
// Example: "my-component.js" or "button-primary" in CSS

// 5. snake_case is sometimes used for legacy code or external APIs
let user_id = 42;
let api_response = { success: true };
console.log(user_id, api_response);

// Naming tips:
// - Use descriptive names
// - Avoid single-letter names except for counters or simple loops
// - Keep style consistent across your project
