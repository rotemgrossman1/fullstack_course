//create a valid json file
const fs = require('fs');

// Create a JSON parser that handles invalid JSON gracefully.

// Take a string input (could be valid or invalid JSON)
// Use try-catch to handle JSON.parse() errors
// Return parsed object on success, or error message on failure
// Test with both valid and invalid JSON strings 
function safeJsonParse(str){
    try{
        return JSON.parse(str)
    }catch(error){
        console.log('Failed to parse: ', error.message)
        return "Invalid JSON format";
    }
}
console.log(safeJsonParse('{"name": "John"}')); 
// Output: { name: "John" }

console.log(safeJsonParse('invalid json')); 
// Output: "Invalid JSON format"