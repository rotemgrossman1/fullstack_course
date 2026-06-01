// An Armstrong number is a number that is the sum of its own digits 
// each raised to the power of the number of digits.
//  For example, 153 is an Armstrong number because
//  153 = 1³ + 5³ + 3³ (1 + 125 + 27 = 153).

// Print all 3-digit Armstrong numbers.
function Armstrong(){
for(let i = 100; i < 1000; i++){
    let hunds = Math.floor(i/100);
    let tens = Math.floor((i/10)%10);
    let ones = i%10;

    let sum = Math.pow(ones,3) + Math.pow(tens,3) + Math.pow(hunds,3)
    if(sum == i){
        console.log(i);
    }
   
}
}