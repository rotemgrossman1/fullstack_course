
const simplify = require('./ex3')
test(`should return a clean string without these symbols: "!", "#", ".", ",", "'"`, ()=> {
    let str = (`=*'not a ! clean # .. , ' string # beacause it's not clean!!`)
    let simplifiedStr = simplify(str)
    expect(simplifiedStr).toEqual(`=*not a  clean     string  beacause its not clean`)
})

//ex5 extention test, check for non string inputs
test("check for non string inputs", ()=> {
    expect(simplify(123)).toEqual("")
    expect(simplify(null)).toEqual("")
    expect(simplify(undefined)).toEqual("")
})