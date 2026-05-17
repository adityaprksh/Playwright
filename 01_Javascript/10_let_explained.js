// Let in JS is block scoped, which means it is only accessible within the block it is defined in (e.g., inside a loop, if statement, or function).
// It cannot be re-declared within the same scope, which helps prevent accidental variable overwriting and makes code easier to debug.
// It can be updated within its scope, allowing for more flexible variable management while still maintaining clear boundaries.

let x = 50 // Global Scope
console.log("From global scope:", x)

let count = 0
count += 1
count += 1
console.log("Count after updates:", count)

// let count = 100 // This will throw an error because 'count' has already been declared in the same scope

let testStatus = "pending"
if (testStatus === "pending") {
    let testStatus = "running" // This is a new variable, different from the one outside the block
    let testExecutionTime = "1 minute" // This variable is only accessible within this block
    console.log("Inside if block:", testStatus) // Outputs "running"
    
}

console.log("Outside if block:", testStatus) // Outputs "pending"


//-------------------------------------------------------------------------

let a = 10; // Global Scope
console.log(a);
// Defination of the function
function printHello() {
    console.log("Hello TheTestingAcademy!");
    let a = 20; // Local Scope
    console.log(a);
    if (true) {
        let a = 30;
        console.log(a); // 30
    }
    console.log("F ->", a);
}

console.log("G ->", a);

printHello();