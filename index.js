const computerChoiceDisplay = document.getElementById("computer-choice");
const userChoiceDisplay = document.getElementById("user-choice");
const result = document.getElementById("results");
const possibleChoices = document.querySelectorAll("button");

let userChoice, computerChoice;

possibleChoices.forEach((possibleChoice) => {
  possibleChoice.addEventListener("click", (e) => {
    userChoice = e.target.id;
    userChoiceDisplay.innerHTML = userChoice;
    generateComputerChoice();
    getResult(userChoice, computerChoice);
  });
});

function generateComputerChoice() {
  const choices = ["rock", "paper", "scissors"];

  let randomNumber = Math.floor(Math.random() * choices.length);
  computerChoice = choices[randomNumber];
  computerChoiceDisplay.innerHTML = computerChoice;

  console.log(randomNumber); // just to see its working
}

function getResult(userChoice, computerChoice) {
  if (userChoice === computerChoice) {
    result.innerHTML = "its a draw";
  } else {
    switch (userChoice + computerChoice) {
      case "paperrock":
      case "rockscissors":
      case "scissorspaper":
        result.innerHTML = "user wins!";
        break;
      default:
        result.innerHTML = "computer wins!";
        break;
    }
  }
}
