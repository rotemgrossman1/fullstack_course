//#1
// Given an array of integers, return the largest number in the array.
// You may not use any built-in max functions.
//
// Constraints: the array will always have at least one element.
// Think about what variable you need to track as you loop through.
//
// Hint: start by assuming the first element is the max, then update
// your assumption as you go.
//
// Input:  [3, 7, 1, 9, 4]  →  Output: 9
// Input:  [-5, -1, -8, -3] →  Output: -1

function findMax(arr) {
  // your code here
  let max = arr[0]
  for(num of arr){
    // if(num > max){
    //     max = num;
    // }
    max = (num>max ? num:max)
  }
  return max
} 

console.log(findMax([3, 7, 1, 9, 4]));

//#2
// Given a string, return it reversed.
// You may not use any built-in reverse functions.
//
// Constraints: the string will only contain lowercase letters.
// Think about iterating from the end toward the beginning.
//
// Hint: you can build a new string character by character by iterating backwards.
//
// Input:  "hello"     →  Output: "olleh"
// Input:  "algorithm" →  Output: "mhtirogla"

function reverseString(str) {
    let n = str.length;
    for(let i = (n-1); i > n/2; i--){
        let temp = str[i]
        str[i] = str[n-i-1]
        str[n-i] = temp
    }
    return str
}
console.log(reverseString('algorithm'))
console.log(reverseString('hello'))