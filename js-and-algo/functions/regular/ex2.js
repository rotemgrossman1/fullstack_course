// Write a function that takes in an array of numbers.

// The function should loop through the numbers and
//  (using the function from Exercise 1) print out the odd numbers.
function isEven(num){
    return num % 2 === 0;
}

function onlyOdd(numbers){
    for(let i in numbers){
        if(!isEven(numbers[i])){
            console.log(numbers[i]);
        }
    }
}
numbers =[1,2,3,4,5];
onlyOdd(numbers);

