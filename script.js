let humanScore = 0;
let computerScore = 0;

function getHumanChoice() {
    let choice = prompt("Rock, Paper, or Scissors?");
    return choice.toLowerCase();
}

function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3)
    switch(choice) {
        case 0:
            return "rock";
            break;
        case 1:
            return "paper";
            break;
        case 2:
            return "scissors";
            break;
    }
}

function playRound(humanChoice, computerChoice) {
    let text = "";
    switch(humanChoice) {
        case "rock":
            switch(computerChoice) {
                case "rock":
                    text = "It's a tie!";
                    break;
                case "paper":
                    text = "You lose! Paper beats Rock.";
                    computerScore++;
                    break;
                case "scissors":
                    text = "You win! Rock beats Scissors.";
                    humanScore++;
                    break;
            }
            break
        case "paper":
            switch(computerChoice) {
                case "rock":
                    text = "You win! Paper beats Rock.";
                    humanScore++;
                    break;
                case "paper":
                    text = "It's a tie!";
                    break;
                case "scissors":
                    text = "You lose! Scissors beats Paper.";
                    computerScore++;
                    break;
            }
            break
        case "scissors":
            switch(computerChoice) {
                case "rock":
                    text = "You lose! Rock beats Scissors.";
                    computerScore++;
                    break;
                case "paper":
                    text = "You win! Scissors beats Paper.";
                    humanScore++;
                    break;
                case "scissors":
                    text = "It's a tie!";
                    break;
            }
            break;
    }

    console.log(humanScore);
    console.log(computerScore);
    console.log(text);

    const result = document.querySelector("#results");
    result.textContent = text;

    const displayHumanScore = document.querySelector("#playerScore");
    displayHumanScore.textContent = humanScore;

    const displayComputerScore = document.querySelector("#computerScore");
    displayComputerScore.textContent = computerScore;

    if(humanScore == 5) {
        humanScore = 0;
        computerScore = 0;
    
        result.textContent = "You Win the Game!";
    } else if(computerScore == 5) {
        humanScore = 0;
        computerScore = 0;

        result.textContent = "You Lose the Game!";
    }
}

const btnRock = document.querySelector("#btnRock");
btnRock.addEventListener("click", function() {
    const computerChoice = getComputerChoice();
    playRound("rock", computerChoice);
});

const btnPaper = document.querySelector("#btnPaper");
btnPaper.addEventListener("click", function() {
    const computerChoice = getComputerChoice();
    playRound("paper", computerChoice);
});

const btnScissors = document.querySelector("#btnScissors");
btnScissors.addEventListener("click", function() {
    const computerChoice = getComputerChoice();
    playRound("scissors", computerChoice);
});