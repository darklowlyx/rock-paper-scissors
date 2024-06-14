// ROCK PAPER SCISSORS

const choices = ["rock", "paper", "scissors"];
const playerDisplay = document.getElementById("playerDisplay");
const computerDisplay = document.getElementById("computerDisplay");
const resultDisplay = document.getElementById("resultDisplay");
const playerScoreDisplay = document.getElementById("playerScoreDisplay");
const computerScoreDisplay = document.getElementById("computerScoreDisplay");
let playerScore = 0;
let computerScore = 0;

function choicesDisplay(choice){
	switch (choice) {
		case "rock":
			return "👊🏻";
			break;
		case "paper":
			return "✋🏻";
			break;
		case "scissors":
			return "✌🏻";
			break;
	}
}

function playGame(playerChoice) {
	const computerChoice = choices[Math.floor(Math.random() * 3)];
	let result = "";

	if (playerChoice === computerChoice){
		result = "IT'S A TIE!";
	}
	else{
		switch(playerChoice){
			case "rock":
				result = (computerChoice === "scissors") ? "YOU WIN!": "YOU LOSE!";
				break;
			case "paper":
				result = (computerChoice === "rock") ? "YOU WIN!": "YOU LOSE!";
				break;
			case "scissors":
				result = (computerChoice === "paper") ? "YOU WIN!": "YOU LOSE!";
				break;
		}
	}

	playerDisplay.textContent = `🧑🏻‍🦱-${choicesDisplay(playerChoice)}`;
	computerDisplay.textContent = `🤖-${choicesDisplay(computerChoice)}`;
	resultDisplay.textContent = result;

	resultDisplay.classList.remove("green-text", "red-text");

	switch(result){
		case "YOU WIN!":
			resultDisplay.classList.add("green-text");
			playerScore++;
			playerScoreDisplay.textContent = playerScore;
			break;
		case "YOU LOSE!":
			resultDisplay.classList.add("red-text");
			computerScore++;
			computerScoreDisplay.textContent = computerScore;
			break;
	}
}

