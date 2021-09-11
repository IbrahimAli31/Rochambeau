const computer = document.querySelector(".computer img");
const player = document.querySelector(".player img");
const computerPoints = document.querySelector(".computer-score");
const playerPoints = document.querySelector(".player-score");
const options = document.querySelectorAll(".options button");

const resetButton = document.getElementById("reset");
let computerScore = 0;
let playerScore = 0;

options.forEach((option) => {
	option.addEventListener("click", () => {
		const userSelection = option.innerHTML.toLowerCase();
		const computerSelection = getComputerSelection();
		if (userSelection !== computerSelection) {
			updateScores(userSelection, computerSelection);
		}

		computer.classList.add("shakeComputer");
		player.classList.add("shakePlayer");
		player.src = `./assets/images/${userSelection}-image.png`;
		computer.src = `./assets/images/${computerSelection}-image.png`;

		setTimeout(() => {
			computer.classList.remove("shakeComputer");
			player.classList.remove("shakePlayer");
		}, 1000);
	});
});

const getComputerSelection = () => ['rock', 'paper', 'scissors'][Math.floor(Math.random() * (2 - 0 + 1) + 0)]

// This assumes that userSelection and computerSelection are different
const updateScores = (userSelection, computerSelection) => {
	switch (userSelection) {
		case 'rock':
			if (computerSelection === 'paper') {
				computerScore++;
			} else {
				playerScore++;
			}
			break;
		case 'paper':
			if (computerSelection === 'scissors') {
				computerScore++;
			} else {
				playerScore++;
			}
			break;
		case 'scissors':
			if (computerSelection === 'rock') {
				computerScore++;
			} else {
				playerScore++;
			}
			break;
		default:
	}
	computerPoints.innerHTML = computerScore;
	playerPoints.innerHTML = playerScore;
}
resetButton.addEventListener("click", () => {
	computerScore = 0;
	playerScore = 0;
	computerPoints.innerHTML = computerScore;
	playerPoints.innerHTML = playerScore;
});
