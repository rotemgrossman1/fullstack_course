/*
  Write your code in the corresponding method
  Please note: You must also add the correct arguments to the methods
*/

//Exercise 1
const findFactorial = function(num) {
  if(num === 0){
    return 1
  }
  return num * findFactorial(num-1)

}
//check it
console.log(findFactorial(0)) //1
console.log(findFactorial(1)) //1
console.log(findFactorial(5)) //120

//Exercise 2
const reverseString = function(str, idx) {
  let arr = typeof str === 'string' ? str.split('') : str;

  // Base case: Stop when the index reaches the midpoint
  if (idx === Math.floor(arr.length / 2)) {
    return arr.join(''); // Join back into a string when done
  }
  
  let temp = arr[idx]
  arr[idx] = arr[arr.length-1-idx] 
  arr[arr.length-1-idx] = temp
  return reverseString(arr, idx+1)
}
//check it
console.log(reverseString('hello', 0))// "olleh"
console.log(reverseString('algorithm', 0))// "mhtirogla"

//Exercise 3
const arr1 = [1, 2, 3]
const arr2 = []

const swap = function(arr1, arr2) {
  if(arr1.length===0){
    return
  }else{
    const element = arr1.splice(0, 1)[0]//removes the element at index 0 and stores it inside element const
    arr2.push(element)
    return swap(arr1, arr2)
  }

}
swap(arr1, arr2)
console.log(arr1) //[]
console.log(arr2) //[1, 2, 3]

//Exercise 4

class Stack {
  constructor() {
    this.items = [];
  }
  // Add to the top
  push(element) {
    this.items.push(element);
  }
  // Remove from the top
  pop() {
    if (this.isEmpty()) return "Underflow";
    return this.items.pop();
  }
  // Check if empty
  isEmpty() {
    return this.items.length === 0;
  }
}
const stack1 = new Stack()
stack1.push(1)
stack1.push(2)
stack1.push(3)
const stack2 = new Stack()

const swapStacks = function(stack1, stack2) {
  if(stack1.isEmpty()){
    return
  }else{
    const element = stack1.pop()
    stack2.push(element)
    return swapStacks(stack1, stack2)
  }

}
swapStacks(stack1, stack2)
console.log(stack1) //[]
console.log(stack2) //[1, 2, 3]

/* DO NOT REMOVE THE EXPORTS BELOW */
module.exports = { findFactorial, reverseString, swap }