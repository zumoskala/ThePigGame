'use strict';

const score0EL = document.getElementById('score--0');
const score1EL = document.getElementById('score--1');
let currScore0 = document.getElementById('current--0');
let currScore1 = document.getElementById('current--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const player0EL = document.querySelector('.player--0');
const player1EL = document.querySelector('.player--1');
let scores, current, activePlayer, playing;

const init = function() {
  //Starting conditions
  scores = [0, 0];
  score0EL.textContent = scores[0];
  score1EL.textContent = scores[1];
  currScore0.textContent = 0;
  currScore1.textContent = 0;
  diceEl.classList.add('hidden');
  current = 0;
  activePlayer = 0;
  playing = true;
  player0EL.classList.remove('player--winner');
  player1EL.classList.remove('player--winner');
  player0EL.classList.add('player--active');
  player1EL.classList.remove('player--active');
  diceEl.classList.add('hidden');
};
init();

const switchPlayer = function() {
  current = 0;
  document.getElementById(`current--${activePlayer}`).textContent = current;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0EL.classList.toggle('player--active');
  player1EL.classList.toggle('player--active');
};

//Rolling button functionality
btnRoll.addEventListener('click', function() {
  if (playing) {
    //1. Generate a random dice roll
    const rolledNumber = Math.floor(Math.random() * 6) + 1;
    //2. Display dice
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${rolledNumber}.png`;
    //3. Check for 1s
    if (rolledNumber !== 1) {
      //Add dice to current score
      current += rolledNumber;
      document.getElementById(`current--${activePlayer}`).textContent = current;
    } else {
      //change player
      switchPlayer();
    }
  }
});


//Button New Game functionality
btnNew.addEventListener('click', init);

//Button Hold functionality
btnHold.addEventListener('click', function() {
  if (playing) {
    //1. Add current score to the active player
    scores[activePlayer] += current;
    document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer];
    //2. Check if score > 100
    if (scores[activePlayer] >= 10) {
      //Finish game
      document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
      document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
      playing = false;
    } else {
      //Switch to the next player
      switchPlayer();
    }
  }
});
