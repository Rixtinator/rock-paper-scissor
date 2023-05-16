let computerChoice = 0;

function getComputerChoice() {
    computerChoice = Math.floor(Math.random() * 3) + 1; //id number (1, 2 of 3)
}

const options = {
    "gameOptions": [
        { id: 1, name: "rock", beats: [3], loses: [2], beatsMsg: "You win! Rock crushes scissors.", losesMsg: "You lose! Paper wraps around rock." },
        { id: 2, name: "paper", beats: [1], loses: [3], beatsMsg: "You win! Paper wraps around rock.", losesMsg: "You lose! Scissors cuts paper." },
        { id: 3, name: "scissors", beats: [2], loses: [1], beatsMsg: "You win! Scissors cuts paper.", losesMsg: "You lose! Rock crushes scissors!" },
    ]
}

const buttons = document.querySelectorAll(".button");
buttons.forEach(button => button.addEventListener("click", getPlayerData));

function isGameReady() {
    if (computerScore < 3 && playerScore < 3) {
        return true;
    }
    else {
        return false;
    }
}

let playerData = 0;
let playerScore = 0;
let computerScore = 0;
let message = "";

function getPlayerData() {
    if (isGameReady()) {
        getComputerChoice();
        hoverStay();
        playerData = Number(this.dataset.id);

        function getPlayerObject(playerData, options) {
            let playerChoiceObject = options.gameOptions.find(obj => {
                return obj.id === playerData;
            });
            return playerChoiceObject;
        }

        const playerSelection = getPlayerObject(playerData, options);
        if (playerSelection.beats.includes(computerChoice)) {
            message = playerSelection.beatsMsg;
            showComputerChoice();
            playerWinsRound();
        }
        else if (playerSelection.loses.includes(computerChoice)) {
            message = playerSelection.losesMsg;
            showComputerChoice();
            computerWinsRound();
        }
        else {
            message = "You chose the same.";
            showComputerChoice();
            showScore();
            checkScore();
        }
    }
}

function playerWinsRound() {
    ++playerScore;
    showScore();
    checkScore();
}

function computerWinsRound() {
    ++computerScore;
    showScore();
    checkScore();
}

const resultsContainer = document.getElementById("results");

function showComputerChoice() {
    resultsContainer.appendChild(pChoice);
    showImage();
    resultsContainer.appendChild(pResult);
    pResult.innerText = message;
}

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

const pChoice = document.createElement("p");
pChoice.classList.add("p-choice");
pChoice.innerText = "The computer chose:";

function showImage() {
    if (computerChoice === 1) {
        resultsContainer.appendChild(imgRock);
        imgPaper.remove();
        imgScissors.remove();
    }
    if (computerChoice === 2) {
        resultsContainer.appendChild(imgPaper);
        imgRock.remove();
        imgScissors.remove();
    }
    if (computerChoice === 3) {
        resultsContainer.appendChild(imgScissors);
        imgPaper.remove();
        imgRock.remove();
    }
}

// SHOW SCORE 

const scoreContainer = document.getElementById("score");

const pScorePlayer = document.createElement("p");
pScorePlayer.classList.add("score-player");

const pScoreComputer = document.createElement("p");
pScoreComputer.classList.add("score-computer");

function showScore() {
    scoreContainer.appendChild(pScorePlayer);
    scoreContainer.appendChild(pScoreComputer);
    pScorePlayer.innerText = `Your score: ${playerScore}`;
    pScoreComputer.innerText = `Computers Score: ${computerScore}`;
}

function hoverStay() {
    const hoverRock = document.getElementById("rock");
    const hoverPaper = document.getElementById("paper");
    const hoverScissors = document.getElementById("scissors");
    if (playerData === 1) {
        hoverRock.classList.add("hover-stay");
        hoverPaper.classList.remove("hover-stay");
        hoverScissors.classList.remove("hover-stay");
    }
    else if (playerData === 2) {
        hoverPaper.classList.add("hover-stay");
        hoverRock.classList.remove("hover-stay");
        hoverScissors.classList.remove("hover-stay");
    }
    else if (playerData === 3) {
        hoverScissors.classList.add("hover-stay");
        hoverRock.classList.remove("hover-stay");
        hoverPaper.classList.remove("hover-stay");
    }
}

/* Hides won & lost classes until game ends */
document.getElementById("won").style.display = "none";
document.getElementById("lost").style.display = "none";

function checkScore() {
    if (computerScore >= 3) {
        document.getElementById("lost").style.display = "flex";
    }
    else if (playerScore >= 3) {
        document.getElementById("won").style.display = "flex";
    }
}

const btnTryAgain = document.querySelectorAll(".btn-try-again");
btnTryAgain.forEach(button => button.addEventListener("click", tryAgain));

function tryAgain() {
    computerScore = 0;
    playerScore = 0;
    showScore();
    document.getElementById("won").style.display = "none";
    document.getElementById("lost").style.display = "none";
    deleteChoice();
}

function deleteChoice() {
    const hoverRock = document.getElementById("rock");
    const hoverPaper = document.getElementById("paper");
    const hoverScissors = document.getElementById("scissors");
    hoverRock.classList.remove("hover-stay");
    hoverScissors.classList.remove("hover-stay");
    hoverPaper.classList.remove("hover-stay");
}