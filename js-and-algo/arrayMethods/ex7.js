const users = require('./users.json')

// Write a named function that receives a single parameter, user.
// Using forEach and the named function you just wrote,
// console log "NAME lives in CITY, and owns the company COMPANY_NAME" for each user.

const something = (user)=>{
    console.log(`${user.name} lives in a ${user.address.city}, and owns the company ${user.company.name}`)
}
users.forEach(user => something(user))