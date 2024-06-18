'use strict';

// Selecting elements 
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRollDice = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');


score0el.textContent = 0;
score1el.textContent = 0;
diceEl.classList.add('hidden');


// rolling the dice 
btnRollDice.addEventListener('click', function (){

    // getting number by rolling the dice 
    const dice = Math.trunc(Math.random() * 6) + 1;

    // display dice 
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${dice}.png`;

    // check if the roll is 1 : & if true switch to the next player 
    
})