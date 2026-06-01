const numbers = [1,2,3,4,5,6,7,8,9,10]
// delete the second and third elements
numbers.splice(1,2);
// console.log(numbers);
// change the fourth element to 1
numbers[3]=1;
// console.log(numbers);
// delete the last 4 elements

numbers.splice(-4);
// console.log(numbers);

// add another element 0 to the beginning of the array

numbers.unshift(0);
// print the modified array
console.log(numbers);