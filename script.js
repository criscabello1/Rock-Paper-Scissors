// I have to create a function getComputerChoice wich generate a random
// value and since this value, returns "rock", "paper" or "scissors"

function getComputerChoise(){
  const coputerChoice = Math.floor(Math.random()*3) + 1
	if (coputerChoice == 1) return 'rock'
	else if (coputerChoice == 2) return 'paper'
  else return 'scissors'
}

