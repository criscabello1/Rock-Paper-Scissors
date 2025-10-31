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

// MY game will play 5 rounds. I will write a function named playGame that calls playRound to play 5 rounds, keeps track of the scores and declares a winner at the end.

function playGame(){
	// For keeping track of the scores i will have 2 variables that will change
	let humanScore = 0
	let computerScore = 0
	// I will write a function that takes the human and computer player choices as arguments, plays a single round, increments the round winner’s score and logs a winner announcement.
	function playRound(){
		humanSelection = getHumanChoice();
		computerSelection = getComputerChoice();
		console.log(`Computer choices ${computerSelection}`)
		if (humanSelection == computerSelection) console.log('Draw')
			else if (humanSelection == 'rock' && computerSelection == 'scissors' || humanSelection == 'paper' && computerSelection == 'rock' || humanSelection == 'scissors' && computerSelection == 'paper') {
		humanScore++
		console.log('You win!')
	}
	else{
		computerScore++
		console.log('Computer wins!')
	}
	console.log(`Computer : ${computerScore} You: ${humanScore}` )
}
playRound();
playRound();
playRound();
playRound();
playRound();
}

playGame()