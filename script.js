// For keeping track of the scores i will have 2 variables that will change
let humanScore = 0
let computerScore = 0

// I have to create a function getComputerChoice wich generate a random
// value and since this value, returns "rock", "paper" or "scissors"

function getComputerChoice(){
  const coputerChoice = Math.floor(Math.random()*3) + 1
	if (coputerChoice == 1) return 'rock'
	else if (coputerChoice == 2) return 'paper'
  else return 'scissors'
}

// Now i have to create a function that request an input from the user.
// I will do this with a prompt. I'll save the prompt to a variable
// and depending of the value of this variable the function will return the valid choices.

function getHumanChoice(){
  const humanChoice = +prompt('Enter a number for your choice: (1 = "rock", 2 = "paper", 3 = "scissors")')
	if (humanChoice == 1) return 'rock'
	else if (humanChoice == 2) return 'paper'
	else if (humanChoice == 3) return 'scissors' 

}

// I will write a function that takes the human and computer player choices as arguments, plays a single round, increments the round winner’s score and logs a winner announcement.
function playRound(humanChoice, computerChoice){
	console.log(`Computer choices ${computerChoice}`)
	if (humanChoice == computerChoice) console.log('Draw')
	else if (humanChoice == 'rock' && computerChoice == 'scissors' || humanChoice == 'paper' && computerChoice == 'rock' || humanChoice == 'scissors' && computerChoice == 'paper') {
    humanScore++
		console.log('You win!')
  }
	else{
		computerScore++
		console.log('Computer wins!')
	}
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);
console.log(`Computer : ${computerScore} You: ${humanScore}` )