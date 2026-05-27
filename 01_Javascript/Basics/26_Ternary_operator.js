// Explain the ternary operator in JavaScript.
// The ternary operator is a compact form of if-else.
// Syntax: condition ? valueIfTrue : valueIfFalse

const age = 20;
const canVote = age >= 18 ? 'Yes, can vote' : 'No, too young';
console.log(canVote); // Output: Yes, can vote

// Example with a variable assignment:
const score = 69;
const grade = score >= 90 ? 'A' : score >= 80 ? 'B' : score >= 70 ? 'C'  : 'F';
console.log(grade); // Output: F

//Check if Raj will go to Goa
let raj = 20;
let raj_will_go_goa = raj >= 20 ? "Yes, will go" : "No, Can't go"
console.log(raj_will_go_goa)


//Check the status code and its category
let statusCode = 500
let category = statusCode < 300 ? "Success" : 
                statusCode < 400 ? "Redirect" : 
                statusCode < 500 ? "Client error" : "Server Error";
console.log(`Status ${statusCode}: ${category}`)