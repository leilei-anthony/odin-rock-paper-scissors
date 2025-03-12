let humanScore = 0
let computerScore = 0

function getHumanChoice() {
    return prompt("Rock, Paper, or Scissors?")
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

