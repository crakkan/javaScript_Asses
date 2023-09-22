// Get user input using prompt(“Enter your age:”). If user is 18 or older , give feedback:'You are old enough to drive' but if not 18 give another feedback stating to wait for the number of years he needs to turn 18.

// solution

const prompt = require('prompt-sync')();

let userAge = prompt('enter your age:');

if (userAge >= 18) {
    console.log('You are old enough to drive')
} else {
    console.log('wait for the number of years you needs to turn 18.')
};

