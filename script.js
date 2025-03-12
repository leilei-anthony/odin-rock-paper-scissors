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
    let winner = 0
    switch(humanChoice) {
        case "rock":
            switch(computerChoice) {
                case "rock":
                    text = "It's a tie!"
                    winner = 0
                    break
                case "paper":
                    text = "You lose! Paper beats Rock."
                    winner = -1
                    break
                case "scissors":
                    text = "You win! Rock beats Scissors."
                    winner = 1
                    break
            }
            break
        case "paper":
            switch(computerChoice) {
                case "rock":
                    text = "You win! Paper beats Rock."
                    winner = 1
                    break
                case "paper":
                    text = "It's a tie!"
                    winner = 0
                    break
                case "scissors":
                    text = "You lose! Scissors beats Paper."
                    winner = -1
                    break
            }
            break
        case "scissors":
            switch(computerChoice) {
                case "rock":
                    text = "You lose! Rock beats Scissors."
                    winner = -1
                    break
                case "paper":
                    text = "You win! Scissors beats Paper."
                    winner = 1
                    break
                case "scissors":
                    text = "It's a tie!"
                    winner = 0
                    break
            }
            break
    }

    console.log(text)
    return winner
}

function playGame(rounds) {
    let humanScore = 0
    let computerScore = 0

    for(let i = 0; i < rounds; i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();

        let winner = playRound(humanSelection, computerSelection)

        switch(winner) {
            case -1:
                computerScore++
                break
            case 0:
                break
            case 1:
                humanScore++
                break
        }
    }

    if(humanScore > computerScore) {
        text = "You won!\nYour Score: " + humanScore + "\nComputerScore: " + computerScore
    } else if(humanScore < computerScore) {
        text = "You lost!\nYour Score: " + humanScore + "\nComputerScore: " + computerScore
    } else if(humanScore == computerScore) {
        text = "It's a Tie!\nYour Score: " + humanScore + "\nComputerScore: " + computerScore
    }

    console.log(text)
}

playGame(5)