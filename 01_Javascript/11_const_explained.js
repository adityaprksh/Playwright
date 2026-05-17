
// `const` declares a variable whose binding cannot be reassigned.
// The value itself may still be mutable if it is an object or array.

const baseURL = "https://practicesoftwaretesting.com/";
console.log(baseURL);

// Example: primitive value cannot be reassigned
const maxAttempts = 5;
console.log(maxAttempts);
// maxAttempts = 10; // Error: Assignment to constant variable.

// Example: object declared with const can still be modified
const user = {
  name: 'Alice',
  role: 'tester'
};

user.role = 'senior tester'; // allowed
console.log(user);

// Example: array declared with const can still be mutated
const scores = [90, 85, 78];
scores.push(92); // allowed
console.log(scores);

// Note:
// - `const` is block-scoped, like `let`.
// - Use `const` by default for values that should not be reassigned.
// - Reserve `let` only when you need to reassign the variable later.
