// Literals are nothing but the fixed values that we assign to variables.
// They can be of various types, such as numbers, strings, booleans, arrays, objects, etc.

let name = "Aditya"; // This is a string literal assigned to the variable 'name'.
let isStudent = true; // This is a boolean literal assigned to the variable 'isStudent'.
let pi = 3.14; // This is a numeric literal assigned to the variable 'pi'.
let nullValue = null; // This is a null literal assigned to the variable 'nullValue'.
let undefinedValue; // This variable is declared but not assigned, so it has the value 'undefined'.

// typeof - operatr - It will tell you what is a data type that it has. 
console.log(typeof name);
console.log(typeof pi);
console.log(typeof isStudent);
console.log(typeof nullValue);
console.log(typeof undefinedValue);

// ============================================================
// Topic: All Number Types in JavaScript
// File: 26_Literal_Number_all.js
// ============================================================

/*
  In JavaScript, numbers are ALWAYS of type "number" (except BigInt).
  There is no separate int, float, double, etc.
  JS uses IEEE 754 double-precision 64-bit binary format.
*/


// --------------------------------------------------------
// 1. INTEGER LITERALS
// --------------------------------------------------------

// Decimal (Base 10) - most common
let decimal = 42;
console.log("Decimal:", decimal); // 42

// Binary (Base 2) - starts with 0b or 0B
let binary = 0b1010; // 10 in decimal
console.log("Binary 0b1010:", binary); // 10

// Octal (Base 8) - starts with 0o or 0O
let octal = 0o52; // 42 in decimal
console.log("Octal 0o52:", octal); // 42

// Hexadecimal (Base 16) - starts with 0x or 0X
let hex = 0x2A; // 42 in decimal
console.log("Hexadecimal 0x2A:", hex); // 42


// --------------------------------------------------------
// 2. FLOATING-POINT LITERALS
// --------------------------------------------------------

let float1 = 3.14;
let float2 = -0.5;
let float3 = .5;    // valid, but avoid for readability
let float4 = 5.;    // valid, but avoid for readability

console.log("Float 3.14:", float1);
console.log("Float -0.5:", float2);
console.log("Float .5:", float3);
console.log("Float 5.:", float4);

// Exponential notation
let exp1 = 1.5e3;   // 1.5 * 10^3 = 1500
let exp2 = 1.5e-3;  // 1.5 * 10^-3 = 0.0015
let exp3 = 2E10;    // 2 * 10^10 = 20000000000

console.log("Exponential 1.5e3:", exp1);   // 1500
console.log("Exponential 1.5e-3:", exp2);  // 0.0015
console.log("Exponential 2E10:", exp3);    // 20000000000


// --------------------------------------------------------
// 3. NUMERIC SEPARATORS (ES2021+)
// --------------------------------------------------------

let million = 1_000_000;
let binarySep = 0b1010_0001;
let hexSep = 0xFF_FF;

console.log("Separator 1_000_000:", million);      // 1000000
console.log("Separator 0b1010_0001:", binarySep);  // 161
console.log("Separator 0xFF_FF:", hexSep);         // 65535


// --------------------------------------------------------
// 4. BIGINT - For arbitrarily large integers
// --------------------------------------------------------

let big = 123456789012345678901234567890n;
let big2 = BigInt("123456789012345678901234567890");
let bigFromNum = BigInt(42);

console.log("BigInt literal:", big);
console.log("BigInt from string:", big2);
console.log("BigInt from number:", bigFromNum);
console.log("typeof BigInt:", typeof big); // "bigint"

// BigInt operations
console.log("BigInt + 1n:", big + 1n);
// Cannot mix BigInt with Number: 10n + 5 -> TypeError


// --------------------------------------------------------
// 5. SPECIAL NUMERIC VALUES
// --------------------------------------------------------

// Infinity
console.log("Infinity:", Infinity);           // Infinity
console.log("1 / 0:", 1 / 0);                 // Infinity
console.log("-1 / 0:", -1 / 0);               // -Infinity
console.log("typeof Infinity:", typeof Infinity); // "number"

// -Infinity
console.log("-Infinity:", -Infinity);

// NaN (Not a Number) - result of invalid math
console.log("NaN:", NaN);                     // NaN
console.log("0 / 0:", 0 / 0);                 // NaN
console.log("'hello' * 2:", "hello" * 2);     // NaN
console.log("typeof NaN:", typeof NaN);       // "number" (quirky!)




// --------------------------------------------------------
// 7. NUMBER PROPERTIES (Constants)
// --------------------------------------------------------

console.log("\n--- Number Properties ---");
console.log("MAX_VALUE:", Number.MAX_VALUE);             // ~1.79e308
console.log("MIN_VALUE:", Number.MIN_VALUE);             // ~5e-324
console.log("MAX_SAFE_INTEGER:", Number.MAX_SAFE_INTEGER); // 9007199254740991
console.log("MIN_SAFE_INTEGER:", Number.MIN_SAFE_INTEGER); // -9007199254740991
console.log("POSITIVE_INFINITY:", Number.POSITIVE_INFINITY);
console.log("NEGATIVE_INFINITY:", Number.NEGATIVE_INFINITY);
console.log("NaN property:", Number.NaN);
console.log("EPSILON:", Number.EPSILON);                 // smallest diff between 2 numbers


// --------------------------------------------------------
// 8. NUMBER METHODS
// --------------------------------------------------------


// --------------------------------------------------------
// SUMMARY TABLE
// --------------------------------------------------------

/*
  | Type/Form          | Example            | Notes                          |
  |--------------------|--------------------|--------------------------------|
  | Decimal Integer    | 42                 | Standard whole numbers         |
  | Binary             | 0b1010             | Base 2, starts with 0b         |
  | Octal              | 0o52               | Base 8, starts with 0o         |
  | Hexadecimal        | 0x2A               | Base 16, starts with 0x        |
  | Float              | 3.14               | Decimal numbers                |
  | Exponential        | 1.5e3              | Scientific notation            |
  | Numeric Separator  | 1_000_000          | ES2021+, for readability       |
  | BigInt             | 123n or BigInt(123)| Arbitrary large integers       |
  | Infinity           | Infinity           | Result of division by zero     |
  | NaN                | NaN                | Invalid numeric operation      |
  | Number Object      | new Number(42)     | Avoid, use primitive           |
*/


// ============================================================
// END
// ============================================================

// ============================================================
// Topic: null vs undefined in JavaScript
// File: 23_null_undefined.js
// ============================================================

/*
  SIMPLE DEFINITIONS:

  undefined  ->  A variable exists, but it has not been assigned any value yet.
                 JavaScript itself sets this automatically.

  null       ->  A variable exists, but the developer explicitly assigns "no value" or "empty".
                 It is intentional absence of any value.
*/


// --------------------------------------------------------
// 1. undefined
// --------------------------------------------------------

let userName; // declared but not assigned
console.log(userName);        // undefined
console.log(typeof userName); // "undefined"

function greet() {
    // no return statement
}
console.log(greet());         // undefined


// --------------------------------------------------------
// 2. null
// --------------------------------------------------------

let profilePicture = null; // developer explicitly says "no picture yet"
console.log(profilePicture);        // null
console.log(typeof profilePicture); // "object"  <-- known JS quirk!

let score = 100;
score = null; // developer clears the value intentionally
console.log(score); // null


// --------------------------------------------------------
// 3. Key Differences (Summary Table)
// --------------------------------------------------------

/*
  | Feature              | undefined                     | null                           |
  |----------------------|-------------------------------|--------------------------------|
  | Meaning              | Not assigned yet              | Intentionally empty            |
  | Who sets it?         | JavaScript automatically      | Developer manually             |
  | Type                 | undefined                     | object (historical bug in JS)  |
  | == comparison        | null == undefined  -> true    |                                |
  | === comparison       | null === undefined -> false   |                                |
*/


// --------------------------------------------------------
// 4. Practical Comparisons
// --------------------------------------------------------

let a;
let b = null;

console.log(a == b);   // true  (loose equality sees them as similar)
console.log(a === b);  // false (strict equality: different types)

console.log(typeof a); // "undefined"
console.log(typeof b); // "object"


// --------------------------------------------------------
// 5. When to use what?
// --------------------------------------------------------

/*
  Use undefined:
  - When checking if a variable/property has been initialized.
  - Let JS handle it; don’t assign undefined manually.

  Use null:
  - When you want to deliberately clear or reset a value.
  - When a function should return "nothing" on purpose.
  - To represent an empty or unknown object reference.
*/


// --------------------------------------------------------
// 6. Quick Check Function
// --------------------------------------------------------

function checkValue(value) {
    if (value === undefined) {
        return "Value is undefined (not assigned yet)";
    }
    if (value === null) {
        return "Value is null (explicitly empty)";
    }
    return "Value is: " + value;
}

console.log(checkValue());           // undefined
console.log(checkValue(null));       // null
console.log(checkValue("hello"));    // hello


// ============================================================
// END
// ============================================================