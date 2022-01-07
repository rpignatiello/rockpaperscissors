let playerWins, computerWins, scoreDisplay, roundDisplay;

window.onload = function() {
  scoreDisplay = document.getElementById("score");
  roundDisplay = document.getElementById("round-results");
  playerWins = 0;
  computerWins = 0;
};

function computerPlay(){
  let choice = Math.floor(Math.random() * 3)
  if(choice == 0) {
    return "ROCK";
  } else if (choice == 1) {
    return "PAPER";
  }else if (choice == 2) {
    return "SCISSORS";
  }
  return;
}

function playRound(playerChoice, computerSelection) {
  let playerInput = playerChoice;
  if((playerInput == "ROCK" && computerSelection == "PAPER") || (playerInput == "PAPER" && computerSelection == "SCISSORS") || (playerInput == "SCISSORS" && computerSelection == "ROCK")){
    /* PLAYER LOSES */
    computerWins++;
    roundDisplay.innerHTML = "You lose! " + computerSelection + " beats " + playerInput;
  }else if ((playerInput == "PAPER" && computerSelection == "ROCK") || (playerInput == "SCISSORS" && computerSelection == "PAPER") || (playerInput == "ROCK" && computerSelection == "SCISSORS")){
    /* PLAYER WINS */
    playerWins++;
    roundDisplay.innerHTML = "You Win! " + playerInput + " beats " + computerSelection;
  }else if (playerInput == computerSelection){
    /* TIE */
    roundDisplay.innerHTMl = "It's a tie! You both picked " + playerInput;
  }
  updateScore();
  return;
}

function game() {
  if(playerWins == 3 || computerWins == 3){
    if(playerWins > computerWins){
      scoreDisplay.innerHTML = "Your Score: " + playerWins + "<br>Computer Score:" + computerWins + "<br>You Win! Refresh to Play Again";
      roundDisplay.innerHTML = "";
    }else if(computerWins > playerWins) {
      scoreDisplay.innerHTML = "Your Score: " + playerWins + "<br>Computer Score:" + computerWins + "<br>You Lose! Refresh to Play Again";
      roundDisplay.innerHTML = "";
    }
  }
  console.log("game function ended");
  return;
}

function updateScore() {
  scoreDisplay.innerHTML = "Your Score: " + playerWins + "<br>Computer Score:" + computerWins;
  game();
}
