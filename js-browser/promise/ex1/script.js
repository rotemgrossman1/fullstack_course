function checkLuckyNumber(num) {
  // TODO: Create and return a promise that:
  // 1. Waits 800ms (use setTimeout)
  // 2. Resolves with "Lucky!" if number is divisible by 7
  // 3. Resolves with "Not lucky" for other positive numbers
  // 4. Rejects with Error("Invalid number") if number is negative or zero
  return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(num<=0){
              reject(new Error("Invalid number"))
            }
            else if(num%7 === 0){
              resolve("Lucky!")
            } else{
              resolve("Not lucky")
            }
        }, 800);
    })
}

// Test Case 1: Lucky Number
checkLuckyNumber(14)
  .then(result => console.log("Test 1 (14):", result)) // Expected: Lucky!
  .catch(err => console.error("Test 1 Error:", err.message));

// Test Case 2: Not Lucky Number
checkLuckyNumber(5)
  .then(result => console.log("Test 2 (5):", result))   // Expected: Not lucky
  .catch(err => console.error("Test 2 Error:", err.message));

// Test Case 3: Invalid Number (Negative)
checkLuckyNumber(-3)
  .then(result => console.log("Test 3 (-3):", result))
  .catch(err => console.error("Test 3 Error:", err.message)); // Expected: Invalid number

// Test Case 4: Invalid Number (Zero)
checkLuckyNumber(0)
  .then(result => console.log("Test 4 (0):", result))
  .catch(err => console.error("Test 4 Error:", err.message)); // Expected: Invalid number