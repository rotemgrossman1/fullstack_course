// #17
// Given a string and a number K, return the maximum number of vowels
// in any substring of length K.
// Vowels are: a, e, i, o, u (lowercase only).
//
// Constraints: K will always be less than or equal to the string length.
// The string will only contain lowercase letters.
// You may not use any built-in methods to count vowels.
//
// Hint: count vowels in the first K characters as your starting window.
// As the window slides forward, what character leaves and what enters?
//
// Input:  "abciiidef", K=3  →  Output: 3  ("iii")
// Input:  "aeiou",     K=2  →  Output: 2  ("ae", "ei", "io", "ou" all have 2)
// Input:  "leetcode",  K=3  →  Output: 2  ("lee", "eet", "ode")
function isVowel(char){
    if(char === 'a' || char === 'u' || char === 'e' || char === 'i' || char === 'o'){
        return true
    }else{
        return false
    }
}
function countVoules(str, start, end){
    let sum = 0;
    for(let i = start; i<=end; i++){
        if(isVowel(str[i])){
            sum++
        }
    }
    return sum
}
function maxVowels(str, k) {
    // your code here
    
    //we are at the beggining need to count vouls
    let curr = countVoules(str, 0, k-1)
    //console.log(`the beginning k chars vowels sum is: ${curr}`)
    let start = 1;
    let end = k;
    let max = curr
    while(end<str.length){
        //console.log(`current window: ${str.slice(start, end+1)}, vowels: ${curr}`)
        if(curr>=max){
            max =curr
        }
        if(max===k){
            return max
        }
        if(isVowel(str[start])){
            curr--
        }
        if(isVowel(str[end])){
            curr++
        }
        
        
        start++
        end++
    }
    return max
}

// Tests
console.log(maxVowels("abciiidef", 3)); // → 3
console.log(maxVowels("aeiou", 2));     // → 2
console.log(maxVowels("leetcode", 3));  // → 2
// Additional test cases
console.log(maxVowels("rhythms", 4));// → 0 (no vowels)
console.log(maxVowels("aabbccddeeiioouu", 5));// → 5 (substring "eeiio" has 5 vowels)
console.log(maxVowels("abcdeiouxyz", 4));// → 4 (substring "eiou" has 4 vowels)
console.log(maxVowels("ayyyay", 5));// → 2 