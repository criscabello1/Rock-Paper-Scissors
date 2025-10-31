// I have to create a function getComputerChoice wich generate a random
// value and since this value, returns "rock", "paper" or "scissors"

function getComputerChoise(){
  const coputerChoice = Math.floor(Math.random()*3) + 1
	if (coputerChoice == 1) return 'rock'
	else if (coputerChoice == 2) return 'paper'
  else return 'scissors'
}

// Now i have to create a function that request an input from the user.
// I will do this with a prompt. I'll save the prompt to a variable
// and depending of the value of this variable the function will return the valid choises.

function getHumanChoise(){
  const humanChoise = +prompt('Enter a number for your choise: (1 = "rock", 2 = "paper", 3 = "scissors")')
	if (humanChoise == 1) return 'rock'
	else if (humanChoise == 2) return 'paper'
	else if (humanChoise == 3) return 'scissors' 

}

