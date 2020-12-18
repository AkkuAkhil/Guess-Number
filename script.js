'use strict';

let randomNumber, myScore;
const init = function () {
  randomNumber = Math.trunc(Math.random() * 20) + 1;
  myScore = 20;
};

init();
let highScore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guessNumber = Number(document.querySelector('.guess').value);
  if (!guessNumber) {
    displayMessage('⛔️ No number!');
  } else if (guessNumber === randomNumber) {
    displayMessage('🎉 Correct Number!');

    document.querySelector('.number').textContent = randomNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    if (myScore > highScore) {
      highScore = myScore;
      document.querySelector('.highscore').textContent = highScore;
    }
  } else if (guessNumber !== randomNumber) {
    if (myScore > 1) {
      displayMessage(
        guessNumber > randomNumber ? '📈 Too high!' : '📉 Too low!'
      );
      myScore--;
      document.querySelector('.score').textContent = myScore;
    } else {
      displayMessage('💥 You lost the game!');
      document.querySelector('.score').textContent = 0;
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  init();
  displayMessage('Start guessing...');
  document.querySelector('.score').textContent = myScore;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';

  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
