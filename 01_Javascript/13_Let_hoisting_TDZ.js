// // JavaScript "let" Hoisting and Temporal Dead Zone (TDZ) Example

// // Unlike "var", variables declared with "let" are not hoisted in the same way.
// // They are hoisted but not initialized, which leads to a Temporal Dead Zone (TDZ) until the declaration is reached.

// // TDZ means that you cannot access the variable before it is declared, and doing so will throw a ReferenceError.

// console.log(score); // ReferenceError: Cannot access 'score' before initialization
// let score = 100;


// {
//     // ---- TDZ for "score" starts here ----
//     // console.log(score);  // ReferenceError!
//     // score = 50;          // ReferenceError!
//     // typeof score;        // ReferenceError!
//     // ---- TDZ for "score" ends here ----
//     let score = 100;        // Declaration reached, TDZ ends
//     console.log(score);     // 100 (safe to access now)
// }


// // TDZ also applies to "const" declarations

// console.log(apiKey); // ReferenceError: Cannot access 'apiKey' before initialization

// const apiKey = "12345-ABCDE";


// let hoisting with a function

let x = "global";
if (true) {
    // TDZ for block-scoped "x" starts here
    // console.log(x);   // ReferenceError (NOT "global"!)
    let x = "block";     // TDZ ends
    console.log(x);      // "block"
}
console.log(x);
