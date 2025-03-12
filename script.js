function getHumanChoice() {
    let choice = prompt("Rock, Paper, or Scissors?")
    return choice.toLowerCase()
}

function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3)
    switch(choice) {
        case 0:
            return "rock"
            break
        case 1:
            return "paper"
            break
        case 2:
            return "scissors"
            break
    }
}

function playRound(humanChoice, computerChoice) {
    let text = ""
    switch(humanChoice) {
        case "rock":
            switch(computerChoice) {
                case "rock":
                    text = "It's a tie!"
                    break
                case "paper":
                    text = "You lose! Paper beats Rock."
                    break
                case "scissors":
                    text = "You win! Rock beats Scissors."
                    break
            }
            break
        case "paper":
            switch(computerChoice) {
                case "rock":
                    text = "You win! Paper beats Rock."
                    break
                case "paper":
                    text = "It's a tie!"
                    break
                case "scissors":
                    text = "You lose! Scissors beats Paper."
                    break
            }
            break
        case "scissors":
            switch(computerChoice) {
                case "rock":
                    text = "You lose! Rock beats Scissors."
                    break
                case "paper":
                    text = "You win! Scissors beats Paper."
                    break
                case "scissors":
                    text = "It's a tie!"
                    break
            }
            break
    }

    console.log(text)
}

function playGame() {
    let humanScore = 0
    let computerScore = 0
}
const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection)