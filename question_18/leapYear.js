// Write a program which tells the number of days in a month, now consider leap year.

// solution

const prompt = require('prompt-sync')();

// Get user input for the year
let leapYear = prompt('Year:');

// Function to check if a year is a leap year
function findLeap(leapYear) {
    // Leap years are divisible by 4
    // However, years divisible by 100 are not leap years, unless they are also divisible by 400
    return (leapYear % 4 === 0 && leapYear % 100 !== 0) || (leapYear % 400 == 0);
}

// Check if the year is a leap year
if (findLeap(leapYear)) {
    console.log(leapYear + ' is a leap year');
} else {
    console.log(leapYear + ' not a leap year');
}

