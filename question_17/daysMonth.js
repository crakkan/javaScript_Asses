// Write a program which tells the number of days in a month.

// solution

const prompt = require('prompt-sync')();

let days = prompt('Month:');

let oddMonth = ['January', 'March', 'May', 'July', 'August', 'Octuber', 'December'];
// oddMonth = 31;
let evenMonth = ['April', 'June', 'September', 'November'];
// evenMonth = 30;
let single = 'February'

if (oddMonth.includes(days)) {
    console.log('This month have ', 31, 'days');
} else if (evenMonth.includes(days)) {
    console.log('This month have ', 30, 'days');
} else if (single.includes(days)) {
    console.log('This month have ', 28, 'days');
} else {
    console.log('first');
}

