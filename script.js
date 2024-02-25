// Your game is going to play against the computer, 
// so begin with a function called getComputerChoice that will randomly return either 
//‘Rock’, ‘Paper’ or ‘Scissors’. We’ll use this function in the game to make the computer’s play.
// Tip: use the console to make sure this is returning the expected output before 
// moving to the next step!



function getComputerChoice() {
    let choices = ['rock', 'paper', 'scissors']
    let random = Math.floor(Math.random() * choices.length); //random code 
    let computerChoice = choices[random];
    return computerChoice; // change to return when combining it with the second exercise 
}

/* This is for the second exercise 
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
    
  const userInput = prompt("rock, paper or scissors?");
  const playerSelection = userInput;
  const computerSelection = getComputerChoice();
  console.log(playRound(playerSelection, computerSelection));*/

  function playRound(playerSelection, computerSelection) {
    playerChoice = playerSelection.toLowerCase(); 
    
    if (playerChoice === computerSelection) {
        return "Draw"; 
    } else if (
        (playerChoice === 'paper' && computerSelection === 'rock') || 
        (playerChoice === 'rock' && computerSelection === 'scissors') ||
        (playerChoice === 'scissors' && computerSelection === 'paper')
    ) {
        return "Win";
    } else {
        return "Lose";
    }
  }

  function playGame() {
    let playerScore = 0;
    let computerScore = 0;

    for (let i = 0; i < 5; i++) {
        const userInput = prompt("rock, paper or scissors?");
        const playerSelection = userInput;
        const computerSelection = getComputerChoice();
        const result = playRound(playerSelection, computerSelection);
        console.log(result);

        if (result.includes("Win")) {
            playerScore++;
        } else if (result.includes("Lose")) {
            computerScore++;
        }
    }

    if (playerScore > computerScore) {
        console.log ("Wahey you won the game!");
    } else if (playerScore < computerScore) {
        console.log ("Sorry mate, you lost");
    } else {
        console.log ("Its a tie!");
    }
  } 
  
 playGame();


