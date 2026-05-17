var v = 10
var browser = "Chrome"
var browser = "Firefox" // Reassigning the variable
browser = "Edge" // Reassigning without var

var testCases = ["login", "signup", "checkout"]

for (var i = 0; i< testCases.length; i++) 
    {
        console.log("Running Testcase:", testCases[i])
    }

// Function declaration    
function say() {
    console.log("Hi from Function");
}

say(); // Calling the function