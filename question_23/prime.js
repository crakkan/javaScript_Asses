// Write a program to check that the number given by the user is a prime number or not.

// solution
const prompt = require('prompt-sync')();
// Function to check if a number is prime
function isPrime(number) {
    if (number <= 1) {
        return false; // Numbers less than or equal to 1 are not prime
    }

    if (number <= 3) {
        return true; // 2 and 3 are prime
    }

    if (number % 2 === 0 || number % 3 === 0) {
        return false; // Divisible by 2 or 3 are not prime
    }

    for (let i = 5; i * i <= number; i += 6) {
        if (number % i === 0 || number % (i + 2) === 0) {
            return false; // Divisible by any number in the form of 6k +/- 1 is not prime
        }
    }

    return true; // If none of the above conditions matched, the number is prime
}

// Get user input
const userNumber = parseInt(prompt("Enter a number:"));

// Check if the user's number is prime
if (isPrime(userNumber)) {
    console.log(userNumber + " is a prime number.");
} else {
    console.log(userNumber + " is not a prime number.");
}
