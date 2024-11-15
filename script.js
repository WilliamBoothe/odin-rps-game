let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
  let randomNumber = Math.floor(Math.random() * 3) + 1;

  if (randomNumber === 1) {
    return "Rock";
  } else if (randomNumber === 2) {
    return "Paper";
  } else {
    return "Scissors";
  }
}

function getHumanChoice() {
  let choice = 0;
  while (isNaN(choice) || choice < 1 || choice > 3) {
    choice = parseInt(
      prompt("Choose your weapon:\n1 - Rock\n2 - Paper\n3 - Scissors")
    );
  }

  if (choice === 1) {
    return "Rock";
  } else if (choice === 2) {
    return "Paper";
  } else {
    return "Scissors";
  }
}

function playRound(humanChoice, computerChoice) {
  console.log("You chose: " + humanChoice);
  console.log("The computer chose: " + computerChoice);
  if (humanChoice === computerChoice) {
    console.log("It's a tie!");
    return;
  }

  let humanWin = null;
  switch (humanChoice) {
    case "Rock":
      humanWin = computerChoice === "Scissors";
      break;
    case "Paper":
      humanWin = computerChoice === "Rock";
      break;
    case "Scissors":
      humanWin = computerChoice === "Paper";
      break;
    default:
      humanWin = false;
  }

  if (humanWin) {
    humanScore++;
    console.log("You win!");
  } else {
    computerScore++;
    console.log("You lose!");
  }
}

function playGame() {
  for (let i = 0; i < 5; i++) {
    console.log("Round " + (i + 1) + ":");
    playRound(getHumanChoice(), getComputerChoice());
    console.log("");
  }
  console.log("Your score: " + humanScore);
  console.log("Computer score: " + computerScore);
}

playGame();
