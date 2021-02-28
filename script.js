'use strict';

const score0EL = document.getElementById('score--0');
const score1EL = document.getElementById('score--1');
let currScore0 = document.getElementById('current--0');
let currScore1 = document.getElementById("current--1");
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const player0EL = document.querySelector(".player--0");
const player1EL = document.querySelector(".player--1");


//Starting conditions
const scores = [0, 0]
score0EL.textContent = scores[0];
score1EL.textContent = scores[1];
currScore0.textContent = 0;
currScore1.textContent = 0
diceEl.classList.add('hidden');
let current = 0;
let activePlayer = 0;

//Rolling button functionality

btnRoll.addEventListener('click', function() {
  //1. Generate a random dice roll
  const rolledNumber = Math.floor(Math.random() * 6) + 1;
  //2. Display dice
  diceEl.classList.remove('hidden');
  diceEl.src = `dice-${rolledNumber}.png`;
  //3. Check for 1s
  if(rolledNumber !== 1) {
    //Add dice to current score
    current += rolledNumber;
    document.getElementById(`current--${activePlayer}`).textContent = current;
  } else {
    //change player
    current = 0;
    document.getElementById(`current--${activePlayer}`).textContent = current;
    activePlayer = activePlayer === 0 ? 1 : 0;
    player0EL.classList.toggle("player--active");
    player1EL.classList.toggle("player--active");

  }
});
