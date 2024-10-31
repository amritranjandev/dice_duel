'use strict';

/**
 * Dice Game
 * This script implements a two-player dice game where players take turns rolling a dice.
 * Each player accumulates a score, and the first player to reach or exceed 100 points wins.
 * 
 * Dependencies:
 * - HTML structure with elements: player scores, current scores, and buttons for new game, roll, and hold.
 * - Dice images stored in an 'images' folder.
 */

// Player and score elements
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score0El = document.querySelector('#score--0');
const score1El = document.querySelector('#score--1');
const current0El = document.querySelector('#current--0');
const current1El = document.querySelector('#current--1');

// Dice and button elements
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

// Game state variables
let currentScore, activePlayer, playing, scores;

/**
 * Initializes the game by resetting scores and UI elements to their default states.
 */
const init = function () {
    currentScore = 0;
    activePlayer = 0;
    playing = true;
    scores = [0, 0];

    // Reset displayed scores
    score0El.textContent = 0;
    score1El.textContent = 0;
    current0El.textContent = 0;
    current1El.textContent = 0;

    // Hide dice and reset player classes
    diceEl.classList.add('hidden');
    player0El.classList.remove('player--winner');
    player1El.classList.remove('player--winner');
    player0El.classList.add('player--active');
    player1El.classList.remove('player--active');
};
init();

/**
 * Switches the active player, resetting the current score for the outgoing player.
 */
const switchPlayer = function () {
    // Reset current score display
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    currentScore = 0;

    // Toggle active player
    activePlayer = activePlayer === 0 ? 1 : 0;
    player0El.classList.toggle('player--active');
    player1El.classList.toggle('player--active');
};

/**
 * Event listener for rolling the dice.
 * Generates a random dice roll, updates the current score if the roll is not 1,
 * and switches the player if the roll is 1.
 */
btnRoll.addEventListener('click', function () {
    if (playing) {
        // Generate random dice roll between 1 and 6
        const dice = Math.trunc(Math.random() * 6) + 1;

        // Display the dice image
        diceEl.classList.remove('hidden');
        diceEl.src = `images/dice-${dice}.png`;

        // Update current score or switch player if roll is 1
        if (dice !== 1) {
            currentScore += dice;
            document.getElementById(`current--${activePlayer}`).textContent = currentScore;
        } else {
            switchPlayer();
        }
    }
});

/**
 * Event listener for holding the current score.
 * Adds current score to active player's total score and checks for a win condition.
 * If no player has won, switches to the next player.
 */
btnHold.addEventListener('click', function () {
    if (playing) {
        // Add current score to active player's total
        scores[activePlayer] += currentScore;
        document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer];

        // Check if the active player has won
        if (scores[activePlayer] >= 100) {
            playing = false;
            diceEl.classList.add('hidden');
            document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
            document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
        } else {
            switchPlayer();
        }
    }
});

/**
 * Event listener for starting a new game.
 * Calls the init function to reset the game state.
 */
btnNew.addEventListener('click', init);
