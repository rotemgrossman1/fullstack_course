// Create an array of only names, 
// then only keep the names that start with with the letter "C".

// You should be left with 
// ["Clementine Bauch", "Chelsey Dietrich", "Clementia DuBuque"]

const users = require('./users.json')
const onlyNames = users.map(user => user.name).filter(user => user.charAt(0) === 'C')
console.log(onlyNames)