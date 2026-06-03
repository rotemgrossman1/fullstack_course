const math = require('../mathCommon')
console.log(math.add(5, math.PI)); 
console.log(math.subtract(3,2))

//in order to get some of the functions and atributes of the obj from required we can do
const {add, PI} = require('../mathCommon')
console.log(add(5,PI));