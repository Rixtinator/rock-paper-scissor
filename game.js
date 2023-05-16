
let randomNumber = 0;
let computerChoice = "";


// wat als fire wordt toegevoegd?


function getRandomNumber() {
    return randomNumber = Math.floor(Math.random() * 3) + 1;
}

function getComputerChoice() {
    getRandomNumber();

    // case break

    // alleen 1 ding returnen.
    return (randomNumber === 1) ? computerChoice = "rock"
        : (randomNumber === 2) ? computerChoice = "paper"
            : (randomNumber === 3) ? computerChoice = "scissors"
                : computerChoice = "Oops, something went wrong."
}

const buttons = document.querySelectorAll(".button");
buttons.forEach(button => button.addEventListener("click", playGame));

function playGame() {
    // can we start function?
    // can we start the game? isGameReady? 

    // const setup = {
    //     "hoi": [],
    //     'rock': 1,
    //     'paper': 2,
    //     'scissor': 3,
    //     'fire': 4
    // };

    // // array
    // // indexed
    // const array = [1, 2, 3, 4, 5];
    // const name = "Tjerk";
    // console.log(array[1]);
    // console.log(name[2]);

    // console.log(setup.fire);


    if (computerScore < 3 && playerScore < 3) {
        playerSelection = this.id;

        playerData = Number(this.dataset.id)

        // alles waar ik niet op heb geklikt moet geen schaduw hebben.
        // alleen waar ik op heb geklikt moet een schaduw

        playRound();
        hoverStay();

        const options = {
            "gameOptions": [
                { id: 1, name: "Rock", beats: [0, 2, 4], beatMsg: [{ id: 3, msg: "I beat spock" }] },
                { id: 2, name: "Paper", beats: [0, 2, 4], beatMsg: [{ id: 3, msg: "I beat spock" }] },
                { id: 3, name: "Scissor", beats: [0, 2, 4], beatMsg: [{ id: 3, msg: "I beat spock" }] },
            ]
        };





        function getOptionObject(playerData, options) {


            let thing = options.gameOptions.filter(obj => {
                return obj.id === playerData;
            });


            return thing;
        }

        const playerSelection = getOptionObject(playerData, options);

        // komt dit nummer oftwel id voor in deze array, ja laat dan die specifieke beatMSG zien (computer had x daarom verslagen)
        playerSelection.beats.includes(computerChoice)


        // player heeft de goeie dus dan beatmsg van de player



    }
}

function playRound() {
    combat();
    showComputerChoice();
    showScore();
    checkScore();
}

function hoverStay() {
    const hoverRock = document.getElementById("rock");
    const hoverPaper = document.getElementById("paper");
    const hoverScissors = document.getElementById("scissors");
    if (playerSelection === "rock") {
        hoverRock.classList.add("hover-stay");
        hoverPaper.classList.remove("hover-stay");
        hoverScissors.classList.remove("hover-stay");
    }
    else if (playerSelection === "paper") {
        hoverPaper.classList.add("hover-stay");
        hoverRock.classList.remove("hover-stay");
        hoverScissors.classList.remove("hover-stay");
    }
    else if (playerSelection === "scissors") {
        hoverScissors.classList.add("hover-stay");
        hoverRock.classList.remove("hover-stay");
        hoverPaper.classList.remove("hover-stay");
    }
}

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

const pChoice = document.createElement("p");
pChoice.classList.add("p-choice");
pChoice.innerText = "The computer chose:";

function showComputerChoice() {
    resultsContainer.appendChild(pChoice);
    showImage();
    resultsContainer.appendChild(pResult);
    pResult.innerText = gameResult;
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

let playerScore = 0;
let computerScore = 0;

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

let gameResult = "";

function combat() {
    getComputerChoice();

    const hoi = "Tjerk";

    console.log(`${hoi} is cool`);



    //console.log(options.gameOptions[0]);

    // 1

    // const chosenOption = [];
    // const computerOption = [];



    if (playerSelection === computerChoice) {
        gameResult = "You choose the same, try again.";
    }
    else if (playerSelection === "rock" && computerChoice === "paper") {
        gameResult = "You lose! Paper wraps around rock.";
    }
    else if (playerSelection === "rock" && computerChoice === "scissors") {
        ++playerScore;
        gameResult = "You win! Rock crushes scissors.";
    }
    else if (playerSelection === "paper" && computerChoice === "rock") {
        ++playerScore;
        gameResult = "You win! Paper wraps around rock.";
    }
    else if (playerSelection === "paper" && computerChoice === "scissors") {
        ++computerScore;
        gameResult = "You lose! Scissors cuts paper.";
    }
    else if (playerSelection === "scissors" && computerChoice === "paper") {
        ++playerScore;
        gameResult = "You win! Scissors cuts paper.";
    }
    else if (playerSelection === "scissors" && computerChoice === "rock") {
        ++computerScore;
        gameResult = "You lose! Rock crushes scissors!";
    }
    else {
        gameResult = "Please make a choice between rock, paper or scissors.";
    }
    return gameResult;
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