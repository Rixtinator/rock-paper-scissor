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

/* Get input from player */

let playerSelection = "";

function getInputPlayer() {
    playerSelection = prompt("What do you choose?");
    playerSelection = playerSelection.toUpperCase();
    return playerSelection;
}

/* Adding score to player or computer." */

let playerScore = 0;
let computerScore = 0;

function addPlayerScore() {
    ++playerScore;
}

function addComputerScore() {
    ++computerScore;
}

/* A single round of Rock, Paper, Scissors." */

let gameResult = "";

function playRound() {
    if (playerSelection === computerChoice) {
        return gameResult = "You choose the same.";
    }
    else if (playerSelection === "ROCK" && computerChoice === "PAPER") {
        addComputerScore();
        return gameResult = "You lose! Paper beats Rock!";
    }
    else if (playerSelection === "ROCK" && computerChoice === "SCISSOR") {
        addPlayerScore();
        return gameResult = "You win! Rock beats Scissor!";
    }
    else if (playerSelection === "PAPER" && computerChoice === "ROCK") {
        addPlayerScore();
        return gameResult = "You win! Paper beats Rock!";
    }
    else if (playerSelection === "PAPER" && computerChoice === "SCISSOR") {
        addComputerScore();
        return gameResult = "You lose! Scissor beats Paper!";
    }
    else if (playerSelection === "SCISSOR" && computerChoice === "PAPER") {
        addPlayerScore();
        return gameResult = "You win! Scissor beats Paper!";
    }
    else if (playerSelection === "SCISSOR" && computerChoice === "ROCK") {
        addComputerScore();
        return gameResult = "You lose! Rock beats Scissor!";
    }
    else {
        return gameResult = "Oops, something went wrong.";
    }
}

/* The game itself */

function game() {
    getComputerChoice();
    console.log(computerChoice);
    getInputPlayer();
    console.log(playerSelection);
    playRound();
    console.log(gameResult);
    console.log(playerScore);
    console.log(computerScore);
}

/* Loop round 3 times */
let i = 0;

do {
    game();
    ++i;
}
while (i < 3);

