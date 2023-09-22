// Use the Date object to do the following activities
// - What is the year today?
// - What is the month today as a number?
// - What is the date today?
// - What is the day today as a number?
// - What is the hours now?
// - What is the minutes now?
// - Find out the numbers of seconds elapsed from January 1, 1970 to now.

// solution

let currentDate = new Date();

// What is the year today?
let currentYeare = currentDate.getFullYear();
console.log('Current Year: ', currentYeare);

// What is the month today as a number?
let currentMonth = currentDate.getMonth();
console.log('Current Month: ', currentMonth);

// What is the date today?
let currentDay = currentDate.getDate();
console.log('Current Date: ', currentDay);

// What is the day today as a number?
let currentdin = currentDate.getDay();
console.log('Current Day: ', currentdin);

// What is the hours now?
let currentHour = currentDate.getHours();
console.log('Current Hour: ', currentHour);

// What is the minutes now?
let currentMinute = currentDate.getMinutes();
console.log('Current Minutes: ', currentMinute);

// Find out the numbers of seconds elapsed from January 1, 1970 to now.
let secsince = Math.floor(currentDate.getTime() / 1970);
console.log('Seconds science: ', secsince);



