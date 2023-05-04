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
        return gameResult = "You lose! The computer chose paper and paper wraps around rock.";
    }
    else if (playerSelection === "ROCK" && computerChoice === "SCISSOR") {
        addPlayerScore();
        return gameResult = "You win! The computer chose scissor and rock crushes scissor.";
    }
    else if (playerSelection === "PAPER" && computerChoice === "ROCK") {
        addPlayerScore();
        return gameResult = "You win! The computer chose rock and paper wraps around rock.";
    }
    else if (playerSelection === "PAPER" && computerChoice === "SCISSOR") {
        addComputerScore();
        return gameResult = "You lose! The computer chose scissor and scissor cuts paper.";
    }
    else if (playerSelection === "SCISSOR" && computerChoice === "PAPER") {
        addPlayerScore();
        return gameResult = "You win! The computer chose scissor and scissor cuts paper.";
    }
    else if (playerSelection === "SCISSOR" && computerChoice === "ROCK") {
        addComputerScore();
        return gameResult = "You lose! The computer chose rock and rock crushes scissor!";
    }
    else {
        return gameResult = "Please make a choice between rock, paper or scissor.";
    }
}

/* Play the game until the player or the computer has 3 points */

do {
    getComputerChoice();
    getInputPlayer();
    playRound();
    console.log(gameResult);
    console.log('Your score is' + ' ' + playerScore);
    console.log('The computer\'s score is' + ' ' + computerScore);
}
while (playerScore < 3 && computerScore < 3);

/* Letting the user know who won the competition. */

if (playerScore === 3) {
    console.log("YEAH YEAH YOU WON, I wish I could give you a confetti party on your screen but I still need to learn that.")
}
else if (computerScore === 3) {
    console.log("OH DAMN YOU LOSE, that's sad")
}

