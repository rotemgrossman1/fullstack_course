// #7 
// Given two strings, return true if they are anagrams of each other,
// false otherwise. An anagram uses the same characters the same number
// of times, just in a different order.
//
// Constraints: strings will only contain lowercase letters, no spaces.
//
// Input:  "listen", "silent"  →  Output: true
// Input:  "hello",  "world"   →  Output: false
// Input:  "cat",    "car"     →  Output: false

function isAnagram(a, b) {
  // your code here
  a= a.split('')//turn a and b to arrays
  b= b.split('')
  a.sort()
  b.sort()
  if(a.length !== b.length){
    return false;
  }
  for(let i = 0; i<a.length; i++){
    if(a[i]!==b[i]){
        return false;
    }
  }
  return true;
}

function isAnagram2(a, b) {
  // your code here
    if(a.length !== b.length){
        return false;
    }
    const count = {}
    for(let i = 0; i<a.length; i++){
        count[a[i]] = (count[a[i]] || 0) + 1//if the character is not in the count object, we initialize it to 0 and then we increment it by 1, if it is already in the count object, we just increment it by 1
        count[b[i]] = (count[b[i]] || 0) - 1
    }
    //after the loop, if the two strings are anagrams, all the values in the count object should be 0, if any value is not 0, it means that the two strings are not anagrams, so we return false. If all values are 0, it means that the two strings are anagrams, so we return true.
    for(let key in count){
        if(count[key] !== 0){
            return false;
        }
    }
    return true;
}
//explanation: we create an empty object count, then we loop through both strings at the same time, for each character in string a we increment the count of that character in the count object, and for each character in string b we decrement the count of that character in the count object. Finally, we loop through the count object and if any value is not zero, it means that the two strings are not anagrams, so we return false. If all values are zero, it means that the two strings are anagrams, so we return true.
// Input:  "listen", "silent"  →  Output: true
// Input:  "hello",  "world"   →  Output: false
// Input:  "cat",    "car"     →  Output: false
console.log(isAnagram2("listen", "silent")) //true
console.log(isAnagram2("hello", "world")) //false
console.log(isAnagram2("cat", "car")) //false