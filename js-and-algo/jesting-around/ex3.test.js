
const simplify = require('./ex3')
test(`should return a clean string without these symbols: "!", "#", ".", ",", "'"`, ()=> {
    let str = (`=*'not a ! clean # .. , ' string # beacause it's not clean!!`)
    let simplifiedStr = simplify(str)
    expect(simplifiedStr).toEqual(`=*not a  clean     string  beacause its not clean`)
})