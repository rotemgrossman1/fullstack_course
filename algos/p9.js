// #9
// Given a string of words separated by spaces, return the sentence
// with the word order reversed. The words themselves should stay intact.
//
// Constraints: the string will always have at least one word.
// You may not use any built-in reverse functions.
//
// Input:  "hello world"          →  Output: "world hello"
// Input:  "the quick brown fox"  →  Output: "fox brown quick the"
// Input:  "one"                  →  Output: "one"

function reverseWords(str) {
  // your code here
  let words = []
  //place the str string inside words array seperated by space
  words = str.split(" ")
  str =""
  for(let i = words.length-1; i>=0; i--){
    str+=words[i]+" "
  }
  return str
}

// Tests
console.log(reverseWords("hello world"));          // → "world hello"
console.log(reverseWords("the quick brown fox"));  // → "fox brown quick the"
console.log(reverseWords("one"));                  // → "one"

