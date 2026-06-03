//reduce is mostly used for summing values, but it has many more uses
//another use is simillar to group by in sql, we can count how many times each word appears in a sentence
let arr=[1,3,5,7,9]

//sumArr
let sum = 0;
for(let i=0;i<arr.length;i++){
    sum+=arr[i]
}

console.log(sum)

//using reduce
const sumReduce = arr.reduce(function(sum,num){
    return sum+num
},0)
//explanation fir the above function
//the first parameter is the callback function, which takes two parameters, the first one is the accumulator (sum in this case) and the second one is the current value (num in this case)
//the second parameter is the initial value of the accumulator, in this case it is 0
//so in our case, num iterates through the array and adds each number to the sum, starting from 0

console.log(sumReduce)


const sentence = ["hello", "world", "hello", "hello", "world", "i", "am", "learning", "javascript", "reduce", "function", "so", "function", "and", "javascript", "are", "the", "most", "common", "words", "in", "this", "sentence"]
const wordCount = sentence.reduce(function(counts, word){
    counts[word] = (counts[word] || 0) + 1 //if the word is not in the counts object, it will be undefined, so we use || to set it to 0, then we add 1 to it
    return counts //return the counts object for the next iteration
}, {})
//sort the wordcount object from highest to lowest
const sortedWordCount = Object.entries(wordCount).sort((a, b) => b[1] - a[1]).reduce((obj, [word, count]) => {
    obj[word] = count;
    return obj;
}, {});
console.log(sortedWordCount)
