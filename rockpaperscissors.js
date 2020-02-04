const read = require("readline-sync");
const choice = ["rock", "paper", "scissors"];
const q = read.question(
  "Do you want to play rock paper scissors? [yes or enter nothing for no]"
);
if (q) {
  startGame();
} else {
  return;
}
function startGame() {
  const final = Math.round(Math.random() * 2);
  const x = read.question("Your move:");
  console.log("computer picked " + choice[final]);
  switch (x.toLowerCase()) {
    case "rock":
      if (choice[final] == "rock") {
        console.log("tie!");
      } else if (choice[final] == "scissors") {
        console.log("You win");
      } else {
        console.log("You lose");
      }
      break;
    case "scissors":
      if (choice[final] == "scissors") {
        console.log("tie!");
      } else if (choice[final] == "paper") {
        console.log("You win");
      } else {
        console.log("You lose");
      }
      break;
    case "paper":
      if (choice[final] == "paper") {
        console.log("tie!");
      } else if (choice[final] == "rock") {
        console.log("You win");
      } else {
        console.log("You lose");
      }
      break;
  }
  let p = read.question(
    "Do you want to play again? [yes or enter nothing for no]"
  );
  if (!p) {
    return;
  } else {
    startGame();
  }
}
