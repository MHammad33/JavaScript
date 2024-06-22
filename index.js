const randomNum = parseInt(Math.random() * 100 + 1);

const submitBtn = document.querySelector("#c");
const userInput = document.querySelector("#guessField");
const guesses = document.querySelector(".guesses");
const guessRemaining = document.querySelector(".lastResult");
const lowOrHigh = document.querySelector(".lowOrHi");
const startOver = document.querySelector(".resultParas");

const p = document.createElement("p");

let prevGuesses = [];
let numGuesses = 1;
let playGame = true;

function validateGuess(guess) { }
function checkGuess(guess) { }
function displayMessage(message) { }
function displayGuess() { }
function newGame() { }
function endGame() { }