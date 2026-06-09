const isEven = require('./ex1')
test("should return true if n is even, false otherwise", ()=> {
    let trueAns = isEven(4)
    expect(trueAns).toBe(true)
    let falseAns = isEven(3)
    expect(falseAns).toBe(false)
})