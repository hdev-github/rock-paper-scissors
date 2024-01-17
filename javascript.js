function computerChoice() {
    const choices = ["rock", "paper", "scissors"];
    return choices[Math.floor(Math.random() * choices.length)];
}

let playerScore = 0;
let computerScore = 0;
const maxScore = 5;

function singleRound(playerSelection, computerSelection) {
    const options = ["rock", "paper", "scissors"];
    const playerIndex = options.indexOf(playerSelection);
    const computerIndex = options.indexOf(computerSelection);
    const displayResult = document.querySelector('#displayResult');
    const displayScore = document.querySelector('#displayScore');
    const outcome = document.querySelector('#outcome')


    if (playerIndex === computerIndex) {
        displayResult.textContent = 'It\'s a tie!';
    } else if (
        (playerSelection === "paper" && computerSelection === "rock") ||
        (playerSelection === "rock" && computerSelection === "scissors") ||
        (playerSelection === "scissors" && computerSelection === "paper")
    ) {
        displayResult.textContent = `You won! ${playerSelection} beats ${computerSelection}`;
    playerScore++} else {
        displayResult.textContent = `You lost! ${computerSelection} beats ${playerSelection}!`;
        computerScore++}

        displayScore.textContent = `You: ${playerScore} | Computer: ${computerScore}`;
        if (playerScore === maxScore || computerScore === maxScore){
            displayWinner();
            resetGame();
        }
}

function displayWinner(){
    const outcome = document.querySelector('#outcome');
    if (playerScore === maxScore) {
        outcome.textContent = `Well done, you won!`;
    } else if (computerScore === maxScore) {
        outcome.textContent = `Unlucky champ, better luck next time!`
    }
}
function resetGame (){
    playerScore = 0;
    computerScore = 0;
}

const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    button.addEventListener('click', function() {
        const playerSelection = button.id;
        const computerSelection = computerChoice();
        singleRound(playerSelection, computerSelection);
    });
});
