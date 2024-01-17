function computerChoice() {
    const choices = ["rock", "paper", "scissors"];
    return choices[Math.floor(Math.random() * choices.length)];
}

function singleRound(playerSelection, computerSelection){
    const options = ["rock", "paper", "scissors"];
        const playerIndex = options.indexOf(playerSelection);
        const computerIndex = options.indexOf(computerSelection);
    
        if (playerIndex === computerIndex) {
            return "It's a tie!";
        }
    
        if (
            (playerSelection === "paper" && computerSelection === "rock") ||
            (playerSelection === "rock" && computerSelection === "scissors") ||
            (playerSelection === "scissors" && computerSelection === "paper")
        ) {
            return `You win! ${playerSelection} beats ${computerSelection}!`;
        } else {
            return `You lost! ${computerSelection} beats ${playerSelection}!`;
        }
    }
const playerSelection = "rock";
const computerSelection = computerChoice();

console.log(singleRound(playerSelection, computerSelection));

function game(){
    for (let i = 0; i < 5; i++){
        console.log(singleRound)
    }
};
