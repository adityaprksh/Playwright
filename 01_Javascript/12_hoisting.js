//Hoisting is a JavaScript mechanism where variable and function declarations are moved 
// to the top of their containing scope during the compilation phase. 
// This means that you can use variables and functions before they are declared in the code.

// JS Engine
// LINE BY LINE, , JIT Compilation

console.log(greeting);
var greeting = "Hello";
console.log(greeting);

// Behind the scenes:

// var greeting;              <-- hoisted with undefined
// console.log(greeting);    <-- undefined
// greeting = "Hello!";      <-- assignment stays in place
// console.log(greeting);    <-- "Hello!"


// var a;
console.log(a);
var a = "Aditya";
console.log(a);


//-- Hoisting with functions

function getUserStatus() { // JS Engine
    //var status_code; JS Engine (optimized the code)
    console.log(status_code);
    var status_code = "Active";
    console.log(status_code);
}
getUserStatus();