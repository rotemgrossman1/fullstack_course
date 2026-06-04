// Exercise 1
// What is the complexity of the following code?
const getBalance = function (bankOperations) {
  let balance = 0
  for (let op of bankOperations) {
    balance += op
   }
   return balance
}
getBalance([-27, -43, -2400, -700, 15000, 58])
//ANSWER: O(n), we go through each item of the array once


// Exercise 2
// What is the time complexity of the following code?
const printSome = function (complaints) {
  for (let i = 1; i < complaints.length; i = i * 2)
    console.log(complaints[i].text);
}
//ANSWER: O(log(n)), the index i doubles itself each iteration so 1,2,4,8,16.... is log(n)

// Exercise 3
// What is the complexity of the getHyp function?
const allSides = [
  { a: 3, b: 4 },
  { a: 15, b: 21 },
  { a: 41, b: 8 },
  { a: 12, b: 6 }
]
    
const relevantSides = allSides.filter(s => s.a % 3 == 0)
for (let sides of relevantSides) {
  console.log(getHype(sides))
}
    
const getHype = function (sides) {
  let a = sides.a
  let b = sides.b
  let sumOfSquares = a * a + b * b
  return Math.sqrt(sumOfSquares)
}
//ANSWER: O(1), the getHyped function looks for sides.a and sides.b which is O(1) 
// and multiplies and sums them whch is also O(1)


//Exercise 4 
// Take this one slowly. What is the complexity of the getDistributions function?
const studentAnswers = {
  brBlds: {
    1: "a",
    2: "a",
    3: "c"
  },
  dvOna: {
    1: "a",
    2: "c",
    3: "c"
  },
  nmPrz: {
    1: "a",
    2: "b",
    3: "a"
  }
}
const studentGithubs = ["brBlds", "dvOna", "nmPrz"]
    
const distributions = {
  1: {},
  2: {},
  3: {}
}
    
const getDistributions = function (studentAnswers) {
  studentGithubs.forEach(sg => {
    let answers = studentAnswers[sg]
    
    Object.keys(answers).forEach(questionNumber => {
      let letterAnswer = answers[questionNumber]
    
      distributions[questionNumber][letterAnswer] ?
        distributions[questionNumber][letterAnswer]++ :
        distributions[questionNumber][letterAnswer] = 1
    })
  })
    
  return distributions
}
    
getDistributions(studentAnswers)

//ANSWER O(m*n) where m is the number of students and n is the number of answers


// Exercise 5
// What is the complexity of the emailManager function?

const sendEmails = (email, recepients) => recepients.forEach(r => r.sendEmail(email))
    
const emailManager = function () {
  let email = generateEmail()
    
  $.get('/recepients', function (recepients) {
      sendEmails(email, recepients)
  })
}
//ANSWER: O(n) where n is the amount of recipients
    

