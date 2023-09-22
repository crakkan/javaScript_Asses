// Write a program which can give grades to students according to theirs scores:
// - 80-100, A
// - 70-89, B
// - 60-69, C
// - 50-59, D
// - 0-49, F

// solution
const prompt = require('prompt-sync')();

let grade = prompt('enter your marks:');

if (grade >= 80) {
    console.log('A');
} else if (grade >= 70) {
    console.log('B');
} else if (grade >= 60) {
    console.log('C');
} else if (grade >= 50) {
    console.log('D');
} else if (grade >= 0) {
    console.log('F')
} else {
    console.log('absent');
}