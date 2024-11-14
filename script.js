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
