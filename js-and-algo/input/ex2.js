const prompt = require('prompt-sync')({ sigint: true });
const quiz = [{
        question: "What is 2 + 2?",
        answer: "4"
    },
    {
        question: "What is the capital of France?",
        answer: "Paris"
    },
    {
        question: "What year is it?",
        answer: "2026"
    }
];
let score = 0;
console.log("----- welcome-------")
for(let i = 1; i<4; i++){
    const usrAns = prompt(`qusetion ${i-1}: ${quiz[i-1].question}`)
    if (usrAns.trim().toLowerCase() === quiz[i-1].answer.toLowerCase()) {
        console.log("Correct!\n");
        score++;
    } else {
        console.log(`Incorrect. The correct answer was: ${quiz[i-1].answer}\n`);
    }
}
console.log("--- Quiz Finished ---");
console.log(`Final Score: ${score}/${quiz.length} correct!`);