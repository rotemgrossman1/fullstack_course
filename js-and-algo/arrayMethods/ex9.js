// Use .reduce() to create an object that counts
//  how many students received each letter grade.

// Grading scale:

// A: 90-100
// B: 80-89
// C: 70-79
// F: Below 70
// Input example:
let studentScores = [92, 87, 76, 95, 88, 72, 91, 83, 79, 96, 85, 74, 89, 93, 81];

let scoresCounts = studentScores.reduce((counts, score) => {
    let grade;


    if (score >= 90) {
        grade = 'A';
    } else if (score >= 80) {
        grade = 'B';
    } else if (score >= 70) {
        grade = 'C';
    } else {
        grade = 'F';
    }

    counts[grade] = (counts[grade] || 0) + 1;

    return counts;
}, { A: 0, B: 0, C: 0, F: 0 }); 

console.log(scoresCounts);
// Output: { A: 5, B: 7, C: 3, F: 0 }