const isEven = require('./ex1')
test("should return true if n is even, false otherwise", ()=> {
    let trueAns = isEven(4)
    expect(trueAns).toBe(true)
    let falseAns = isEven(3)
    expect(falseAns).toBe(false)
})
//additional test for ex5
test("check for non integer inputs", ()=> {
    expect(isEven("5")).toBe(false)
    expect(isEven(null)).toBe(false)
    expect(isEven(undefined)).toBe(false)
})