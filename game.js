/*a function called getComputerChoice that will randomly return either ‘Rock’, ‘Paper’ or ‘Scissors’.*/

/* 
make a variable called getComputerChoice
make a random function to get random output
when 1 return rock
when 2 return paper 
when 3 return scissors
*/

let randomNumber = 0;
let computerChoice = "";

function getRandomNumber() {
    return randomNumber = Math.floor(Math.random() * 3) + 1;
}

function getComputerChoice() {
    getRandomNumber();
    if (randomNumber === 1) {
        return computerChoice = 'Rock';
    }
    else if (randomNumber === 2) {
        return computerChoice = "Paper";
    }
    else if (randomNumber === 3) {
        return computerChoice = "Scissors";
    }
    else {
        return computerChoice = "Something went wrong.";
    }
}


getComputerChoice();
console.log(randomNumber);
console.log(computerChoice);


/*function getComputerChoice() {
}*/