// Your game is going to play against the computer, 
// so begin with a function called getComputerChoice that will randomly return either 
//‘Rock’, ‘Paper’ or ‘Scissors’. We’ll use this function in the game to make the computer’s play.
// Tip: use the console to make sure this is returning the expected output before 
// moving to the next step!

/* function getComputerChoice(choice) {
    const random = [Math.floor(Math.random() * choice.length)]; //get a random index from a set of values
    return choice[random]; //return the value at the random index
}

const options = ['Rock', 'Paper', 'Scissor']; 
const randomValue = getComputerChoice(options); 

console.log(randomValue); */


function playRound(playerSelection, computerSelection) {
    // your code here!
  }
  
  const playerSelection = "rock";
  const computerSelection = getComputerChoice();
  console.log(playRound(playerSelection, computerSelection));
