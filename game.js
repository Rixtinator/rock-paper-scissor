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

let playerData = 0;
let playerScore = 0;
let computerScore = 0;

function getPlayerData() {
    getComputerChoice();
    console.log(options.gameOptions[computerChoice - 1].name);

    playerData = Number(this.dataset.id);

    function getPlayerObject(playerData, options) {
        let playerChoiceObject = options.gameOptions.find(obj => {
            return obj.id === playerData;
        });
        return playerChoiceObject;
    }

    const playerSelection = getPlayerObject(playerData, options);
    console.log(playerSelection.beats.includes(computerChoice));
    if (playerSelection.beats.includes(computerChoice)) {
        playerWinsRound();
        console.log(playerSelection.beatsMsg); //add function beats
    }
    else if (playerSelection.loses.includes(computerChoice)) {
        computerWinsRound();
        console.log(playerSelection.losesMsg); //add function loses
    }
    else {
        showScore();
        console.log("You chose the same.") //add function same
    }
}

function playerWinsRound() {
    ++playerScore;
    showScore();
}

function computerWinsRound() {
    ++computerScore;
    showScore();
}

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



// let playerChoiceObject = options.gameOptions.filter(obj => {
//     return obj.id === playerData;
// });
// console.log(playerChoiceObject);
// return playerChoiceObject;
// }

// const playerSelection = getPlayerData(playerData, options);
// console.log(playerSelection);


/* Hides won & lost classes until game ends */
document.getElementById("won").style.display = "none";
document.getElementById("lost").style.display = "none";



// const buttons = document.querySelectorAll(".button");
// buttons.forEach(button => button.addEventListener("click", playGame));

// function playGame() {
//     if (computerScore < 3 && playerScore < 3) {
//         playerSelection = this.id;
//         playerData = Number(this.dataset.id);

//         let playerChoiceObject = options.gameOptions.filter(obj => {
//             return obj.id === playerData;
//         });
//         return playerChoiceObject;
//     }

//     console.log(playerChoiceObject);

//     playRound();
//     hoverStay();
// }


// function playRound() {
//     combat();
//     showComputerChoice();
//     showScore();
//     checkScore();
// }

// function hoverStay() {
//     const hoverRock = document.getElementById("rock");
//     const hoverPaper = document.getElementById("paper");
//     const hoverScissors = document.getElementById("scissors");
//     if (playerSelection === "rock") {
//         hoverRock.classList.add("hover-stay");
//         hoverPaper.classList.remove("hover-stay");
//         hoverScissors.classList.remove("hover-stay");
//     }
//     else if (playerSelection === "paper") {
//         hoverPaper.classList.add("hover-stay");
//         hoverRock.classList.remove("hover-stay");
//         hoverScissors.classList.remove("hover-stay");
//     }
//     else if (playerSelection === "scissors") {
//         hoverScissors.classList.add("hover-stay");
//         hoverRock.classList.remove("hover-stay");
//         hoverPaper.classList.remove("hover-stay");
//     }

// }

// const resultsContainer = document.getElementById("results");

// const imgRock = document.createElement("img");
// imgRock.classList.add("imgChoice");
// imgRock.src = "img/img-rock.png";

// const imgPaper = document.createElement("img");
// imgPaper.classList.add("imgChoice");
// imgPaper.src = "img/img-paper.png";

// const imgScissors = document.createElement("img");
// imgScissors.classList.add("imgChoice");
// imgScissors.src = "img/img-scissor.png";

// const pResult = document.createElement("p");
// pResult.classList.add("p-results");

// const pChoice = document.createElement("p");
// pChoice.classList.add("p-choice");
// pChoice.innerText = "The computer chose:";

// function showComputerChoice() {
//     resultsContainer.appendChild(pChoice);
//     showImage();
//     resultsContainer.appendChild(pResult);
//     pResult.innerText = gameResult;
// }

// function showImage() {
//     if (computerChoice === "rock") {
//         resultsContainer.appendChild(imgRock);
//         imgPaper.remove();
//         imgScissors.remove();
//     }
//     if (computerChoice === "paper") {
//         resultsContainer.appendChild(imgPaper);
//         imgRock.remove();
//         imgScissors.remove();
//     }
//     if (computerChoice === "scissors") {
//         resultsContainer.appendChild(imgScissors);
//         imgPaper.remove();
//         imgRock.remove();
//     }
// }

// let playerScore = 0;
// let computerScore = 0;

// const scoreContainer = document.getElementById("score");

// const pScorePlayer = document.createElement("p");
// pScorePlayer.classList.add("score-player");

// const pScoreComputer = document.createElement("p");
// pScoreComputer.classList.add("score-computer");

// function showScore() {
//     scoreContainer.appendChild(pScorePlayer);
//     scoreContainer.appendChild(pScoreComputer);
//     pScorePlayer.innerText = `Your score: ${playerScore}`;
//     pScoreComputer.innerText = `Computers Score: ${computerScore}`;
// }

// let gameResult = "";

// function combat() {
//     getComputerChoice();
//     if (playerSelection === computerChoice) {
//         gameResult = "You choose the same, try again.";
//     }
//     else if (playerSelection === "rock" && computerChoice === "paper") {
//         gameResult = "You lose! Paper wraps around rock.";
//     }
//     else if (playerSelection === "rock" && computerChoice === "scissors") {
//         ++playerScore;
//         gameResult = "You win! Rock crushes scissors.";
//     }
//     else if (playerSelection === "paper" && computerChoice === "rock") {
//         ++playerScore;
//         gameResult = "You win! Paper wraps around rock.";
//     }
//     else if (playerSelection === "paper" && computerChoice === "scissors") {
//         ++computerScore;
//         gameResult = "You lose! Scissors cuts paper.";
//     }
//     else if (playerSelection === "scissors" && computerChoice === "paper") {
//         ++playerScore;
//         gameResult = "You win! Scissors cuts paper.";
//     }
//     else if (playerSelection === "scissors" && computerChoice === "rock") {
//         ++computerScore;
//         gameResult = "You lose! Rock crushes scissors!";
//     }
//     else {
//         gameResult = "Please make a choice between rock, paper or scissors.";
//     }
//     return gameResult;
// }

// /* Hides won & lost classes until game ends */
// document.getElementById("won").style.display = "none";
// document.getElementById("lost").style.display = "none";

// function checkScore() {
//     if (computerScore >= 3) {
//         document.getElementById("lost").style.display = "flex";
//     }
//     else if (playerScore >= 3) {
//         document.getElementById("won").style.display = "flex";
//     }
// }

// const btnTryAgain = document.querySelectorAll(".btn-try-again");
// btnTryAgain.forEach(button => button.addEventListener("click", tryAgain));

// function tryAgain() {
//     computerScore = 0;
//     playerScore = 0;
//     showScore();
//     document.getElementById("won").style.display = "none";
//     document.getElementById("lost").style.display = "none";
//     deleteChoice();
// }

// function deleteChoice() {
//     const hoverRock = document.getElementById("rock");
//     const hoverPaper = document.getElementById("paper");
//     const hoverScissors = document.getElementById("scissors");
//     hoverRock.classList.remove("hover-stay");
//     hoverScissors.classList.remove("hover-stay");
//     hoverPaper.classList.remove("hover-stay");
// }