
// Create an array with user objects that have a zip-code that starts with "5".

// You should be left with the objects whose IDs are 3, 4, and 7.


const users = require('./users.json');
const fives = users.filter(user=> user.address.zipcode[0] === '5')

console.log(fives);
