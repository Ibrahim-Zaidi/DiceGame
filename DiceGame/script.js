'use strict';

let dice1 = Math.trunc(Math.random() * 6) + 1;
let dice2 = Math.trunc(Math.random() * 6) + 1;
const diceA = document.querySelector('.diceA');
const diceB = document.querySelector('.diceB');

if (dice1 > dice2) {

    document.querySelector('h1').textContent = 'Player one is the winner';
    diceA.src = `./images/dice${dice1}.png`;

} else if (dice2 > dice1) {

    document.querySelector('h1').textContent = 'Player two is the winner';
    diceB.src = `./images/dice${dice2}.png`

} else if (dice1 === dice2)    document.querySelector('h1').textContent = 'No Winner!';

