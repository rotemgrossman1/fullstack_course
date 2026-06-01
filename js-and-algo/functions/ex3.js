// Write a JavaScript function that accepts two parameters:
//  one being an array of integers, and the other being a number.
//  The function should return true or false depending on whether the number exists in the array.

// Hint: You should loop through the array, and for each item in the array, 
// check if it equals the number that was passed.

// checkExists([1, 2, 3], 2) - should return true

// checkExists([1, 2, 3], 5) - should return false

const checkExists = function(numbers, x){
    for(let num of numbers){
        if(num === x)
            return true
    }
    return false;
}

console.log(checkExists([1, 2, 3], 5))
console.log(checkExists([1, 2, 3], 2))
