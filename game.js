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

/* A function that plays a single round of Rock Paper Scissors." */

let gameResult = "";
let playerScore = 0;

function playRound() {
    if (playerSelection === computerChoice) {
        return gameResult = "You choose the same."
    }
    else if (playerSelection === "ROCK" && computerChoice === "PAPER") {
        return gameResult = "You lose! Paper beats Rock!"
    }
    else if (playerSelection === "ROCK" && computerChoice === "SCISSOR") {
        return gameResult = "You win! Rock beats Scissor!"
    }
    else if (playerSelection === "PAPER" && computerChoice === "ROCK") {
        return gameResult = "You win! Paper beats Rock!"
    }
    else if (playerSelection === "PAPER" && computerChoice === "SCISSOR") {
        return gameResult = "You lose! Scissor beats Paper!"
    }
    else if (playerSelection === "SCISSOR" && computerChoice === "PAPER") {
        return gameResult = "You win! Scissor beats Paper!"
    }
    else if (playerSelection === "SCISSOR" && computerChoice === "ROCK") {
        return gameResult = "You lose! Rock beats Scissor!"
    }
    else {
        return gameResult = "Oops, something went wrong."
    }
}

/*
function playRound() {
                    : (playerSelection === "PAPER" && computerChoice === "SCISSOR") ? gameResult = "You lose! Scissor beats Paper!"
                        : (playerSelection === "SCISSOR" && computerChoice === "PAPER") ? gameResult = "You win! Scissor beats Paper!"
                            : (playerSelection === "SCISSOR" && computerChoice === "ROCK") ? gameResult = "You lose! Rock beats Scissor!"
                                : "Oops, something went wrong."
}
*/

/*
keeping score
if gameresult = you win > score player + 1 
if gameresult = you lose > score computer + 1 


if player score hoger dan score computer "YOU WIN"
if player score lager dan score computer "YOU LOSE"
*/

function game() {
    getComputerChoice();
    console.log(computerChoice);
    getInputPlayer();
    console.log(playerSelection);
    playRound();
    console.log(playRound(gameResult));
    console.log(playerScore);
}



/* Loop round 5 times */
let i = 0;

do {
    game();
    i++;
    playerScore++;
}
while (i < 5);

