// var in JS is not trust worthy.
// It is function scoped, which can lead to unexpected behavior when used inside loops or blocks.
// It can be re-declared and updated within the same scope, which can cause confusion and bugs in larger codebases.
// It does not have block scope, so it can lead to issues when used inside loops or conditional statements.

var v = 10 // Global Scope
console.log("From global scope:", v)

function printHello() {
    var v = 20 // Function Scope
    console.log("From function scope:", v)
    if (true) {
        var v = 30 // Still Function Scope, not block scope
        console.log("From if block:", v)
    }   
}
printHello()
console.log("Back to global scope:", v) // Still 10, unaffected by function scope


//-------------------------------------------------------------------------

var a = 10; // Global Scope
console.log(a);
// Defination of the function
function printHello() {
    console.log("Hello TheTestingAcademy!");
    var a = 20; // Local Scope
    console.log(a);
    if (true) {
        var a = 30;
        console.log(a); // 30
    }
    console.log("F ->", a);
}

console.log("G ->", a);

printHello();