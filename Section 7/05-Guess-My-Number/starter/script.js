'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20; // state variable
let highScore = 0;

// Function for displaying the message -

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};
// Logic for high score

// score > highScore = > highScore = score;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value); // This is input filed..so here..the values are of string type

  // Game Logic -
  // 1) Check if there's no input -
  // If guess has no value..then..guess = false
  // SO..!guess = > !false = > true
  if (!guess) {
    // true
    displayMessage('⛔️ No number!');
  } else if (guess === secretNumber) {
    // Change the bakcground color when user guesses the correct number
    displayMessage('🎉 Correct Number');
    document.querySelector('.number').textContent = secretNumber; // We are giving the class number..our secret number

    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
    // When the guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? '📈 Too High!' : '📉 Too Low!');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('😳 You have lost the game!');
      document.querySelector('.score').textContent = 0;
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  // restore values
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  displayMessage('Start guessing...');
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
