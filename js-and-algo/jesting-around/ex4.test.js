const validate = require('./ex4');

describe('validate() TDD Tests', () => {

    // Rule 1: It should receive an array of booleans
    test('should return false if the array contains non-boolean types', () => {
        const mixedArray = [true, false, 'true', 1];
        const allNumbers = [1, 2, 3];
        
        expect(validate(mixedArray)).toBe(false);
        expect(validate(allNumbers)).toBe(false);
    });

    // Rule 2: Verify there is at least one boolean, else return the error object
    test('should return an error object if the array is empty', () => {
        const emptyArray = [];
        
        // Using .toEqual() because it's an object {}
        expect(validate(emptyArray)).toEqual({ error: "Need at least one boolean" });
    });

    // Rule 3: If there are more trues than falses, return true
    test('should return true when there are strictly more true values than false values', () => {
        const moreTrue = [true, true, false];
        const allTrue = [true, true, true];
        
        expect(validate(moreTrue)).toBe(true);
        expect(validate(allTrue)).toBe(true);
    });

    // Rule 4: Otherwise, return false (equal amounts, or more falses)
    test('should return false if falses outnumber trues or if they are equal', () => {
        const equalCounts = [true, false]; // This is your [false, true] case!
        const moreFalse = [false, false, true];

        expect(validate(equalCounts)).toBe(false);
        expect(validate(moreFalse)).toBe(false);
    });

});