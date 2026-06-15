// #15
// Given an array of integers and a number K, find the maximum sum
// of any K consecutive elements in the array.
//
// Constraints: K will always be less than or equal to the array length.
// The array will contain at least K elements.
//
// Input:  [2, 1, 5, 1, 3, 2], K=3  →  Output: 9   (5+1+3)
// Input:  [1, 2, 3, 4, 5],    K=2  →  Output: 9   (4+5)
// Input:  [4, 4, 4, 4],       K=1  →  Output: 4

function maxSumSubarray(arr, k, i=0, sums=[]) {
  // your code here
  if(i===0){
    let currSum
    for(let j = 0; j < k; j++){
        currSum+=arr[j]
    }
  }else{
    let checkedIdx = i + k - 1
    if(checkedIdx < arr.length){
        if(arr[i-1]<arrr[checkedIdx]){
            currSum-=arr[i-1]
            currSum+=arr[checkedIdx]
            maxSumSubarray(arr, k, i++, sums)
        }
    }
  }

  
  

}

// Tests
console.log(maxSumSubarray([2, 1, 5, 1, 3, 2], 3)); // → 9
console.log(maxSumSubarray([1, 2, 3, 4, 5], 2));     // → 9
console.log(maxSumSubarray([4, 4, 4, 4], 1));        // → 4