// Write a program to print the given patterns using the loops-
// 	a. Print a triangle pattern, if the given input is 3 then the pattern should be similar to the given output
//     *
//     **
//     ***

//  b. Print a square pattern, if the input is 3 then the output should be similar to the given output
//     ***
//     ***
//     ***

//  c. Print a pyramid pattern, if the input is 3 then the output should be similar to the given output
//       *
//      ***
//      *****
// solution

// Define the number of rows for the triangle
const rows = 5;

// Loop through each row
for (let i = 1; i <= rows; i++) {
    // Create a string to store the characters for this row
    let row = '';

    // Add asterisks to the row based on the current row number
    for (let j = 1; j <= i; j++) {
        row += '*';
    }

    // Print the row
    console.log(row);
}



// Define the number of rows and columns for the square
const size = 5;

// Loop through each row
for (let i = 1; i <= size; i++) {
    // Create a string to store the characters for this row
    let rowr = '';

    // Loop through each column in the current row
    for (let j = 1; j <= size; j++) {
        rowr += '*';
    }

    // Print the row
    console.log(rowr);
}

// Define the number of rows for the complete triangle
const numberOfRows = 5;

// Loop through each row
for (let i = 1; i <= numberOfRows; i++) {
    // Create a string to store the characters for this row
    let rowc = '';

    // Add spaces to center-align the asterisks in each row
    for (let j = 1; j <= numberOfRows - i; j++) {
        rowc += ' ';
    }

    // Add asterisks to the row based on the current row number
    for (let k = 1; k <= 2 * i - 1; k++) {
        rowc += '*';
    }

    // Print the row
    console.log(rowc);
}




