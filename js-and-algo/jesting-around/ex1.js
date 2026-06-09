//should return true if n is even, false otherwise
function isEven(n){
    if(typeof n !== "number" || !Number.isInteger(n)) {
        return false
    }
    return n % 2 == 0 ? true : false

}
module.exports = isEven
