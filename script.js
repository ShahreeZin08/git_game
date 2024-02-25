// Your game is going to play against the computer, 
// so begin with a function called getComputerChoice that will randomly return either 
//‘Rock’, ‘Paper’ or ‘Scissors’. We’ll use this function in the game to make the computer’s play.
// Tip: use the console to make sure this is returning the expected output before 
// moving to the next step!



function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors']
    const random = Math.floor(Math.random() * choices.length);
    const computerChoice = choices[random];
    return computerChoice;
}

function playRound(playerSelection, computerSelection) {
    playerChoice = playerSelection.toLowerCase();
    
    if (playerChoice === computerSelection) {
        return "It's a draw!"; 
    } else if (
        (playerChoice === 'paper' && computerSelection === 'rock') || 
        (playerChoice === 'rock' && computerSelection === 'scissors') ||
        (playerChoice === 'scissors' && computerSelection === 'paper')
    ) {
        return "You Win! " + playerSelection + " beats " + computerSelection;
    } else {
        return "You Lose! " + computerSelection + " beats " + playerSelection;
    }

  }
  
  const playerSelection = "paper";
  const computerSelection = getComputerChoice();
  console.log(playRound(playerSelection, computerSelection));
