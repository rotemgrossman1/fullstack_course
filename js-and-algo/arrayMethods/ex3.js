


const users = require('./users.json');
const justIds = users.filter(user=> user.address.zipcode[0] === '5').map(user=> user.id)

console.log(justIds);
