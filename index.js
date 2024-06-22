let randomNum = parseInt(Math.random() * 100 + 1);

const submitBtn = document.querySelector("#subt");
const userInput = document.querySelector("#guessField");
const guessSlot = document.querySelector(".guesses");
const guessRemaining = document.querySelector(".lastResult");
const lowOrHigh = document.querySelector(".lowOrHi");
const startOver = document.querySelector(".resultParas");

const p = document.createElement("p");

let prevGuesses = [];
let numGuesses = 1;
let playGame = true;

if (playGame) {
  submitBtn.addEventListener("click", (e) => {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    console.log(guess);
    validateGuess(guess);
  })
}

function validateGuess(guess) {
  if (isNaN(guess)) {
    alert("Please enter a valid number");
  } else if (guess < 1 || guess > 100) {
    alert("Please enter a number greater than or equal 1 and less than or equal 100");
  } else {
    prevGuesses.push(guess);
    if (numGuesses === 11) {
      displayGuess(guess);
      displayMessage(`Game Over. Random Number was: ${randomNum}`);
      endGame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}

function checkGuess(guess) {
  if (guess === randomNum) {
    displayMessage("You guessed it right");
    endGame();
  } else if (guess < randomNum) {
    displayMessage("Number is Tooooo low");
  } else if (guess > randomNum) {
    displayMessage("Number is Tooooo big");
  }
}

function displayGuess(guess) {
  userInput.value = "";
  guessSlot.innerHTML += `${guess}; `;
  numGuesses++;
  guessRemaining.innerHTML = `${11 - numGuesses}`;
}

function displayMessage(message) {
  lowOrHigh.innerHTML = `<h2>${message}</h2>`;
}

function endGame() {
  userInput.value = "";
  userInput.setAttribute("disabled", "");
  p.classList.add("button");
  p.innerHTML = `<h2 id="newGame">Start New Game</h2>`;
  startOver.appendChild(p);
  playGame = false;
  newGame();
}

function newGame() {
  const newGameButton = document.querySelector("#newGame");
  newGameButton.addEventListener("click", () => {
    randomNum = parseInt(Math.random() * 100 + 1);
    prevGuesses = [];
    numGuesses = 1;
    guessSlot.innerHTML = "";
    guessRemaining.innerHTML = `${11 - numGuesses}`;
    userInput.removeAttribute("disabled");
    startOver.removeChild(p);

    playGame = true;
  });
}
