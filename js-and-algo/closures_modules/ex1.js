
// reate a StringFormatter module. It should have two functions:

// capitalizeFirst - receives a string and returns the string with the first letter uppercased,
// and the next ones lowercased
// toSkewerCase - receives a string and replaces any spaces with a dash

function StringFormatter(){
    function capitalizeFirst(word){
        let first = word[0].toUpperCase()
        let rest = word.slice(1).toLowerCase()
        return first + rest
    }
    function toSkewerCase(str){
        newStr = ""
        for(let i = 0; i < str.length; i++){
            if(str[i] === " "){
                newStr= str.slice(0,i) + "-" + str.slice(i+1)
            }
            
        }
        return newStr
    }
    return { capitalizeFirst, toSkewerCase }
}
const formatter = StringFormatter()
console.log(formatter.capitalizeFirst("doroThy")) //should return Dorothy
console.log(formatter.toSkewerCase("blue box")) //should return blue-box
