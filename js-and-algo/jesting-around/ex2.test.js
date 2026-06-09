const removeAtLeastOne = require('./ex2')
test("should remove at least one element from the array `arr`", ()=> {
    let arr = ([1,2,3,4,5,6,7,8,])
    const originalLength = arr.length;
    let cutDownArr = removeAtLeastOne(arr)
    
    //we want to check that cut down length is less than arr length

    expect(cutDownArr.length).toBeLessThan(originalLength)
    
})
//ex5 additional test, check for non array inputs
test("check for non array inputs", ()=> {
    expect(removeAtLeastOne("not an array")).toEqual([])
    expect(removeAtLeastOne(null)).toEqual([])
    expect(removeAtLeastOne(undefined)).toEqual([])
})