// Create a simple calculator program in JavaScript which can perform the addition, substraction, multiplication and division on given numbers.

// solution

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function add(num1, num2) {
    return num1 + num2;
}

function subtract(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    if (num2 === 0) {
        return "Division by zero is not allowed.";
    }
    return num1 / num2;
}

rl.question("Enter the first number: ", function (num1) {
    rl.question("Enter the second number: ", function (num2) {
        num1 = parseFloat(num1);
        num2 = parseFloat(num2);

        if (!isNaN(num1) && !isNaN(num2)) {
            console.log(`Sum: ${add(num1, num2)}`);
            console.log(`Difference: ${subtract(num1, num2)}`);
            console.log(`Product: ${multiply(num1, num2)}`);
            console.log(`Quotient: ${divide(num1, num2)}`);
        } else {
            console.log("Invalid input. Please enter valid numbers.");
        }

        rl.close();
    });
});
