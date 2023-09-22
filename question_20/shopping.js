// In the following shopping cart add, remove, edit items
// => const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
// - add 'Meat' in the beginning of your shopping cart if it has not been already added
// - add Sugar at the end of your shopping cart if it has not been already added
// - remove 'Honey'
// - modify Tea to 'Green Tea'

// solution

const shoppingCart = [
    'Milk',
    'Cofee',
    'Tea',
    'Honey',
];
// add 'Meat' in the beginning of your shopping cart if it has not been already added
let addItem = shoppingCart.unshift('Meat');
console.log(shoppingCart);
// add Sugar at the end of your shopping cart if it has not been already added
let addSugar = shoppingCart.push('sugar');
console.log(shoppingCart);
// remove 'Honey';
let expelHoney = shoppingCart.slice(0, 3);
console.log(expelHoney);
// modify Tea to 'Green Tea'
let indecOfTea = shoppingCart.indexOf('Tea');
shoppingCart[indecOfTea] = 'Green Tea';
console.log(shoppingCart);
