// #11
// Given two arrays, return a new array containing only the elements
// that appear in both arrays. Each element in the result should be unique.
//
// Constraints: the result can be in any order.
// Each element in the result must appear only once even if it
// appears multiple times in both arrays.
//
// Input:  [1, 2, 3, 4], [3, 4, 5, 6]     →  Output: [3, 4]
// Input:  [1, 1, 2, 3], [1, 2, 2]        →  Output: [1, 2]
// Input:  [1, 2, 3],    [4, 5, 6]        →  Output: []

function intersection(arr1, arr2) {
    let a = new Set(arr1)
    let b = new Set(arr2)
    let merged = new Set()
    for (let item of a) {
        if (b.has(item)) {
            merged.add(item);
        }
  }
  //convert the set to an array
  merged = [...merged]
  return merged
}

// Tests
console.log(intersection([1, 2, 3, 4], [3, 4, 5, 6]));  // → [3, 4]
console.log(intersection([1, 1, 2, 3], [1, 2, 2]));     // → [1, 2]
console.log(intersection([1, 2, 3], [4, 5, 6]));        // → []