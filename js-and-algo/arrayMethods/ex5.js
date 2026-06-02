// Determine whether all of the users live in the city of "South Christy" 
// - you should find the answer to be false in a single, beautiful line of code.

const users = require('./users.json')
console.log(users.every(user => user.address.city ==='South Christy'))
