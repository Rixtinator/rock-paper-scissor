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

const buttons = document.querySelectorAll(".button");
buttons.forEach(button => button.addEventListener("click", playerSelection));

function playerSelection() {
    playerSelection = this.id;
    playRound();
    console.log(gameResult);
    console.log(playerScore);
    console.log(computerScore);
}

/*
Show result (computer choice and who won the round)
adding text 'The computer choose: -choice-'
adding img matching the computers choice
adding tekst 'you won this round or the computer won this round' (gameResult?)
*/

function showResult() {

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
        console.log(computerChoice);
        return gameResult = "You choose the same.";
    }
    else if (playerSelection === "rock" && computerChoice === "paper") {
        console.log(computerChoice);
        addComputerScore();
        return gameResult = "You lose! The computer chose paper and paper wraps around rock.";
    }
    else if (playerSelection === "rock" && computerChoice === "scissors") {
        console.log(computerChoice);
        addPlayerScore();
        return gameResult = "You win! The computer chose scissors and rock crushes scissors.";
    }
    else if (playerSelection === "paper" && computerChoice === "rock") {
        console.log(computerChoice);
        addPlayerScore();
        return gameResult = "You win! The computer chose rock and paper wraps around rock.";
    }
    else if (playerSelection === "paper" && computerChoice === "scissors") {
        console.log(computerChoice);
        addComputerScore();
        return gameResult = "You lose! The computer chose scissors and scissors cuts paper.";
    }
    else if (playerSelection === "scissors" && computerChoice === "paper") {
        console.log(computerChoice);
        addPlayerScore();
        return gameResult = "You win! The computer chose scissors and scissors cuts paper.";
    }
    else if (playerSelection === "scissors" && computerChoice === "rock") {
        console.log(computerChoice);
        addComputerScore();
        return gameResult = "You lose! The computer chose rock and rock crushes scissors!";
    }
    else {
        console.log(computerChoice);
        return gameResult = "Please make a choice between rock, paper or scissors.";
    }
}

/* Play the game until the player or the computer has 3 points */


