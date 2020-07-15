let target;

const humanGuessInput = document.getElementById('human-guess');
const computerGuessInput = document.getElementById('computer-guess');

const guessButton = document.getElementById('guess');
const nextRoundButton = document.getElementById('next-round');

$(document).ready(function(){
  $('#human-guess').mask('0000');
});

guessButton.addEventListener('click', () => {
  // Generate the target value
  target = generateTarget();
  // Retrieve the player's guess
  const currentHumanGuess = humanGuessInput.value;
  // 
  const currentComputerGuess = computerGuessInput.value;
  // Make a random 'computer guess'
  const computerGuess = Math.floor(Math.random() * 10);

  // Determine if the human or computer wins:
  const humanIsWinner = compareGuesses(currentHumanGuess, currentComputerGuess, target)
  const winner = humanIsWinner ? 'human' : 'computer'

  // Set the correct disabled state for the buttons
  guessButton.setAttribute('disabled', true)
  nextRoundButton.removeAttribute('disabled');
});

nextRoundButton.addEventListener('click', () => {
  
  // Set the correct disabled state for the buttons
  nextRoundButton.setAttribute('disabled', true);
  guessButton.removeAttribute('disabled');

  // Reset the guess input box and the target number display:
  guessButton.innerText = 'Calcular';
  humanGuessInput.value = '';
  computerGuessInput.value = '';
  
});
