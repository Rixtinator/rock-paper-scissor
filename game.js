/* A function called getComputerChoice that will randomly return either 'rock', ‘paper’ or ‘scissors’. */

let randomNumber = 0;
let computerChoice = "";

function getRandomNumber() {
    return randomNumber = Math.floor(Math.random() * 3) + 1;
}

function getComputerChoice() {
    getRandomNumber();
    return (randomNumber === 1) ? computerChoice = "rock"
        : (randomNumber === 2) ? computerChoice = "paper"
            : (randomNumber === 3) ? computerChoice = "scissors"
                : computerChoice = "Oops, something went wrong."
}

/* Get input from player */

const elements = document.querySelectorAll(".button");
elements.forEach(element => element.addEventListener("click", playerSelection));

function playerSelection() {
    playerSelection = this.id;
    playRound();
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

/* A single round of Rock, paper, scissors." */

let gameResult = "";

function playRound() {
    getComputerChoice();
    if (playerSelection === computerChoice) {
        console.log('same test');
        //return gameResult = "You choose the same.";
    }
    else if (playerSelection === "rock" && computerChoice === "paper") {
        console.log('rock vs paper');
        //addComputerScore(); 
        //return gameResult = "You lose! The computer chose paper and paper wraps around rock.";
    }
    else if (playerSelection === "rock" && computerChoice === "scissors") {
        console.log('rock vs scissors');
        //addPlayerScore();
        //return gameResult = "You win! The computer chose scissors and rock crushes scissors.";
    }
    else if (playerSelection === "paper" && computerChoice === "rock") {
        console.log('paper vs rock');
        //addPlayerScore();
        //return gameResult = "You win! The computer chose rock and paper wraps around rock.";
    }
    else if (playerSelection === "paper" && computerChoice === "scissors") {
        console.log('paper vs scissors');
        //addComputerScore();
        //return gameResult = "You lose! The computer chose scissors and scissors cuts paper.";
    }
    else if (playerSelection === "scissors" && computerChoice === "paper") {
        console.log('same test');
        //addPlayerScore();
        //return gameResult = "You win! The computer chose scissors and scissors cuts paper.";
    }
    else if (playerSelection === "scissors" && computerChoice === "rock") {
        console.log('yeah yeah')
        //addComputerScore();
        //return gameResult = "You lose! The computer chose rock and rock crushes scissors!";
    }
    else {
        console.log('else else')
        //return gameResult = "Please make a choice between rock, paper or scissors.";
    }
}

console.log(gameResult);
console.log(computerScore);
console.log(playerScore);

/* Play the game until the player or the computer has 3 points */


