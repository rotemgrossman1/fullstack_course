//unit testing is a singular test
// unit testing gives us confidence in our code
// the only way to be sure with our code is testing it
// mocking- if i want to write unit test for a file, we need to remove its imports which are not nessacerry
//usually unit test and integration test are in the responsibility of the software developers
//end to end is a test for the full application
//jest - a testing platform
const {add, multiply} = require('./math')
describe('Math functions', () =>{
    it('should add 2 numbers', () =>{
        expect (add(2,3)).toBe(5)
    })
    it('should multiply 2 numbers', () =>{
        expect (add(2,3)).toBe(6)
    })
})