// #8
// Given an array of integers and a target number, return all pairs
// of elements that add up to the target. Each pair should be returned
// as an array of two numbers, and you should return an array of all pairs.
// Avoid duplicate pairs.
//
// Constraints: the array may contain positive and negative integers.
// A number cannot be paired with itself at the same index.
//
// Hint: think about every possible combination of two elements,
// then check if they add up to the target.
//
// Input:  [1, 2, 3, 4, 5], target 6  →  Output: [[1,5], [2,4]]
// Input:  [1, 1, 2, 3],    target 4  →  Output: [[1,3]]
// Input:  [0, -1, 2, -3],  target -1 →  Output: [[0,-1], [2,-3]]

function findPairs(arr, target) {
  // your code here
  //declare a 2d array
  let pairs = []
  arr.sort((a,b)=>a-b)
  let start = 0
  let end = arr.length-1
  while(start<end){
    let result =arr[start]+arr[end]
    if(result === target){
        //found target
        const pair = [arr[start], arr[end]]
        pairs.push(pair)
        start++
        end--
    }else if(result<target){
        start++
    }
    else{
        end--
    }
    
  }
return pairs

}

function findPairs(arr, target) {
  // your code here
  //declare a 2d array
  let setArr = new Set(arr)
  let pairs = new Set()
  for(let num of setArr){
    let complement = target - num
    //we need no duplicate sin the final pairs set
    if(setArr.has(complement) && complement !== num){
        let pair = [num, complement].sort((a,b)=>a-b)
        pairs.add(pair.toString())
    }
    
  }
  //return pairs as an array
    pairs = Array.from(pairs).map(pair => pair.split(',').map(Number))
 
    return pairs

}

// Tests
console.log(findPairs([1, 2, 3, 4, 5], 6)); // → [[1,5], [2,4]]
console.log(findPairs([1, 1, 2, 3], 4));     // → [[1,3]]
console.log(findPairs([0, -1, 2, -3], -1));  // → [[0,-1], [2,-3]]

