// Declare an array containing the multiple values and use lastIndexOf to determine the position of the first and last occurrence of a word "pw skills".

// solution

// Declare an array containing multiple values
const myArray = [
    'aman',
    'pw skills',
    'hitesh sir',
    'anurag sir',
    'pw skills'
];

const arr = myArray.lastIndexOf('pw skills', 3);
console.log(arr);
