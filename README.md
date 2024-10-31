# Dice Duel 🎲

Dice Duel is a two-player dice-rolling game built with JavaScript, HTML, and CSS. Players take turns rolling the dice to accumulate points, but if they roll a `1`, their turn ends, and they lose their current round's points. The first player to reach or exceed 100 points wins the game!

## Live Demo 🚀

You can play the game online at: [https://dice-duel-game.netlify.app/](https://dice-duel-game.netlify.app/)

Try it out and enjoy the gameplay!

## Game Rules 📝

1. **Roll the Dice** : On your turn, press "Roll Dice" to roll a six-sided die.

* If you roll any number other than `1`, that number is added to your current round's score.
* If you roll a `1`, your turn ends, and you lose all points accumulated during that round.

1. **Hold Your Score** : Press "Hold" to save your round's score to your total score, and end your turn.
2. **Winning the Game** : The first player to reach or exceed 100 points wins!

## Features 🚀

* **Interactive UI** : Enjoy a clean and responsive user interface with real-time score updates.
* **Random Dice Rolls** : Each roll is randomized, making for exciting gameplay.
* **Dynamic Turn Switching** : The game automatically switches turns after each roll of `1` or a "Hold".

## Installation and Setup 📥

To run this game locally:

1. Clone the repository:

   `git clone https://github.com/your-username/dice-duel.git`
2. Navigate to the project directory:

   `cd dice-duel`
3. Open the `index.html` file in your browser.

## Project Structure 📂

dice-duel/
├── index.html         # HTML for the game layout
├── style.css          # CSS for styling
├── script.js          # JavaScript logic for the game
└── images/
    ├── dice-1.png     # Images for each dice face
    ├── dice-2.png
    ├── dice-3.png
    ├── dice-4.png
    ├── dice-5.png
    └── dice-6.png

## How to Play 🎮

1. Start a new game by pressing "New Game".
2. On your turn, press "Roll Dice" to roll a random number between 1 and 6.
3. Decide to keep rolling to accumulate points, or press "Hold" to secure your score.
4. The game continues until one player reaches 100 points.

## Contributing 🤝

Feel free to fork the repository, create a new branch, and submit a pull request if you’d like to make improvements or add new features!

## License 📜

This project is licensed under the MIT License. See the [LICENSE](./LICENSE) file for details.
