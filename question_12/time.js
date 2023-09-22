// Create a human readable time format using the Date time object
// - YYYY-MM-DD HH:mm
// - DD-MM-YYYY HH:mm
// - DD/MM/YYYY HH:mm

// solution

let currentDate = new Date();

// YYYY-MM-DD HH:mm
let timeOne = currentDate.getFullYear() + '-' + currentDate.getMonth() + '-' + currentDate.getDate() + ' ' + currentDate.getHours() + ':' + currentDate.getMinutes();
console.log(timeOne);

// DD-MM-YYYY HH:mm
let timeTwo = currentDate.getDate() + '-' + currentDate.getMonth() + '-' + currentDate.getFullYear() + ' ' + currentDate.getHours() + ':' + currentDate.getMinutes();
console.log(timeTwo);

// DD/MM/YYYY HH:mm
let timeThree = currentDate.getFullYear() + '/' + currentDate.getMonth() + '/' + currentDate.getDate() + ' ' + currentDate.getHours() + ':' + currentDate.getMinutes();
console.log(timeThree);