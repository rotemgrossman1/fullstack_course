// // 
// Find the user who's suite is "Apt. 950" - console log her company's name.

// Your code should print out "Considine-Lockman".
const users = require('./users.json')
const desired = users.find(user=>user.address.suite === "Apt. 950")
console.log(desired.company.name)
