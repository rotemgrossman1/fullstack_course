const users = require('./users.json');

const mailAndCompany = users.map(user =>{
    return{
        email: user.email,
        company: user.company.name
    }
})

console.log(mailAndCompany);