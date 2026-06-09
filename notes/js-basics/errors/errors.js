function divide(a,b){
    if(b===0){
        throw new Error("cannot divide by zero")
    }
    return a/b
}
console.log(divide(3,4))
console.log(divide(2,1))