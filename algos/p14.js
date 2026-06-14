// #14
// Given a SORTED array of integers and a target number, return true
// if any two elements add up to the target, false otherwise.
//
// Constraints: the array is sorted in ascending order.
// You may not use any extra arrays, objects, or hash maps.
//
// Input:  [1, 2, 3, 4, 6], target 6   →  Output: true   (2 + 4 = 6)
// Input:  [1, 2, 3, 4, 6], target 11  →  Output: false  (max pair is 4+6=10)
// Input:  [-2, 1, 3, 5, 8], target 6  →  Output: true   (1 + 5 = 6)

function hasPairWithSum(arr, target) {
  // your code here
  let ptr1 = 0
  let ptr2 = arr.length-1

  while(ptr1<ptr2){
    let curr = arr[ptr1]+arr[ptr2]
    if(curr === target){
        return true
    }else if(curr<target){
        ptr1++
    }else{
        ptr2--
    }
  }
  return false
}

// Tests
console.log(hasPairWithSum([1, 2, 3, 4, 6], 6));    // → true
console.log(hasPairWithSum([1, 2, 3, 4, 6], 11));   // → false
console.log(hasPairWithSum([-2, 1, 3, 5, 8], 6));   // → true