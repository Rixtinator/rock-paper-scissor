/* A function called getComputerChoice that will randomly return either ‘Rock’, ‘Paper’ or ‘Scissors’. */

let randomNumber = 0;
let computerChoice = "";

function getRandomNumber() {
    return randomNumber = Math.floor(Math.random() * 3) + 1;
}

function getComputerChoice() {
    getRandomNumber();
    return (randomNumber === 1) ? computerChoice = "ROCK"
        : (randomNumber === 2) ? computerChoice = "PAPER"
            : (randomNumber === 3) ? computerChoice = "SCISSOR"
                : computerChoice = "Oops, something went wrong."
}

getComputerChoice();
console.log(randomNumber);
console.log(computerChoice);

/* Get input from player */

let playerSelection = prompt("What do you choose?");
playerSelection = playerSelection.toUpperCase();

console.log(playerSelection);

/* A function that plays a single round of Rock Paper Scissors." */

let gameResult = "";

function playRound() {
    return (playerSelection === computerChoice) ? gameResult = "You choose the same, try again."
        : (playerSelection === "ROCK" && computerChoice === "PAPER") ? gameResult = "You lose! Paper beats Rock!"
            : (playerSelection === "ROCK" && computerChoice) === "SCISSOR" ? gameResult = "You win! Rock beats Scissor!"
                : (playerSelection === "PAPER" && computerChoice === "ROCK") ? gameResult = "You win! Paper beats Rock!"
                    : (playerSelection === "PAPER" && computerChoice === "SCISSOR") ? gameResult = "You lose! Scissor beats Paper!"
                        : (playerSelection === "SCISSOR" && computerChoice === "PAPER") ? gameResult = "You win! Scissor beats Paper!"
                            : (playerSelection === "SCISSOR" && computerChoice === "ROCK") ? gameResult = "You lose! Rock beats Scissor!"
                                : "Oops, something went wrong."
}

console.log(playRound(gameResult));