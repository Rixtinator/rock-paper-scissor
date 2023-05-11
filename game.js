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

/* Show result (computer choice and who won the round)*/

const resultsContainer = document.getElementById("results");

const imgRock = document.createElement("img");
imgRock.classList.add("imgChoice");
imgRock.src = "img/img-rock.png";

const imgPaper = document.createElement("img");
imgPaper.classList.add("imgChoice");
imgPaper.src = "img/img-paper.png";

const imgScissors = document.createElement("img");
imgScissors.classList.add("imgChoice");
imgScissors.src = "img/img-scissor.png";

const pResult = document.createElement("p");
pResult.classList.add("p-results");
pResult.innerText = "You won or you lost, I don't know."

const pChoice = document.createElement("p");
pChoice.classList.add("p-choice");
pChoice.innerText = "The computer chose:";

function showComputerChoice() {
    resultsContainer.appendChild(pChoice);
    showImage();
    resultsContainer.appendChild(pResult);
}

function showImage() {
    if (computerChoice === "rock") {
        resultsContainer.appendChild(imgRock);
        imgPaper.remove();
        imgScissors.remove();
    }
    if (computerChoice === "paper") {
        resultsContainer.appendChild(imgPaper);
        imgRock.remove();
        imgScissors.remove();
    }
    if (computerChoice === "scissors") {
        resultsContainer.appendChild(imgScissors);
        imgPaper.remove();
        imgRock.remove();
    }
}

const scoreContainer = document.getElementById("score");

const pScorePlayer = document.createElement("p");
pScorePlayer.classList.add("score-player");
pScorePlayer.innerText = `Your Score: `;

const pScoreComputer = document.createElement("p");
pScoreComputer.classList.add("score-computer");
pScoreComputer.innerText = `Computers Score: `;

function showScore() {
    scoreContainer.appendChild(pScorePlayer);
    scoreContainer.appendChild(pScoreComputer);
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
    showComputerChoice();
    showScore();
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


