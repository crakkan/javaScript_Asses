// The following is an array of 10 students ages:
// => const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
// - Sort the array and find the min and max age
// - Find the median age(one middle item or two middle items divided by two)
// - Find the average age(all items divided by number of items)
// - Find the range of the ages(max minus min)
// - Compare the value of (min - average) and (max - average), use abs() method

// solution

const age = [
    19,
    22,
    19,
    24,
    20,
    25,
    26,
    24,
    25,
    24,
];

// - Sort the array and find the min age
let heigh = Math.min(...age);
console.log('min age: ', heigh);

// - Sort the array and find the max age
let low = Math.max(...age);
console.log('max age: ', low);

// - Find the median age(one middle item or two middle items divided by two);
// let sortAge = age.sort((a, b) => a - b);
// let middleIndex = Math.floor(sortAge.length / 2);
// console.log(middleIndex);

const sortedAges = age.sort((a, b) => a - b);

const middleIndex = Math.floor(sortedAges.length / 2);

if (sortedAges.length % 2 === 0) {
    // Array has an even number of elements
    const middleValue1 = sortedAges[middleIndex - 1];
    const middleValue2 = sortedAges[middleIndex];
    const median = (middleValue1 + middleValue2) / 2;
    console.log('Median age:', median);
} else {
    // Array has an odd number of elements
    const median = sortedAges[middleIndex];
    console.log('Median age:', median);
}

// Find the average age(all items divided by number of items)
let sumOfAge = age.reduce((total, age) => total + age, 0);
let averageAge = sumOfAge / age.length;
console.log('average age:', averageAge);

// - Find the range of the ages(max minus min)
let ageRange = heigh - low;
console.log('age range:', ageRange);

// - Compare the value of (min - average) and (max - average), use abs() method
let minDiff = Math.abs(low - averageAge);
let maxDiff = Math.abs(heigh - averageAge);
console.log('min diffrence:', minDiff);
console.log('max diffrence:', maxDiff);