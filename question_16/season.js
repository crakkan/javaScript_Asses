// Check if the season is Autumn, Winter, Spring or Summer. If the user input is :
// September, October or November, the season is Autumn.
// December, January or February, the season is Winter.
// March, April or May, the season is Spring
// June, July or August, the season is Summer

// solution
const prompt = require('prompt-sync')();

let season = prompt('month:');


let Autumn = ['September', 'October', 'November'];
let Winter = ['December', 'January', 'February'];
let Spring = ['March', 'April', 'May'];
let Summer = ['June', 'July', 'August'];

if (Autumn.includes(season)) {
    console.log('Autumn');
} else if (Winter.includes(season)) {
    console.log('Winter');
} else if (Spring.includes(season)) {
    console.log('Spring');
} else if (Summer.includes(season)) {
    console.log('Summer');
} else {
    console.log('none');
}
