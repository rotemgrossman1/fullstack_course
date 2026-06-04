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


//#3
// Given a string, return the number of vowels (a, e, i, o, u) it contains.
// Treat uppercase and lowercase the same.
//
// Constraints: input may contain spaces and mixed case. Vowels are only a e i o u.
//
// Hint: a string of vowels makes the membership check clean —
// check if each character is inside it.
//
// Input:  "hello world" →  Output: 3
// Input:  "Algorithm"   →  Output: 3

function countVowels(str) {
  let count = 0;
  // for(let i = 0; i < str.length; i++){
  //   if(str[i] === 'a' || str[i] === 'e' || str[i] === 'i' || str[i] === 'o' || str[i] === 'u' ||
  //      str[i] === 'A' || str[i] === 'E' || str[i] === 'I' || str[i] === 'O' || str[i] === 'U'){
  //       count++
  //   }
  // }
  let strArr = str.split('');
  

  return count
}
console.log(countVowels('hello world'))
console.log(countVowels('Algorithm'))