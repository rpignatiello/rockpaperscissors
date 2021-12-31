let playerWins, computerWins;

function test() {
  return "test";
  const computerSelection = computerPlay();
  const playerChoice = "Rock";
}

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
  let playerInput = playerChoice.toUpperCase();

  if((playerInput == "ROCK" && computerSelection == "PAPER") || (playerInput == "PAPER" && computerSelection == "SCISSORS") || (playerInput == "SCISSORS" && computerSelection == "ROCK")){
    /* PLAYER LOSES */
    computerWins++;
    return "You Lose! " + computerSelection + " beats " + playerInput + "!";
  }else if ((playerInput == "PAPER" && computerSelection == "ROCK") || (playerInput == "SCISSORS" && computerSelection == "PAPER") || (playerInput == "ROCK" && computerSelection == "SCISSORS")){
    /* PLAYER WINS */
    playerWins++;
    return "You Win! " + playerInput + " beats " + computerSelection + "!";
  }else if (playerInput == computerSelection){
    /* TIE */
    return "It's a Tie! You both selected: " + playerInput + ".";
  }
  return "error";
}

function game() {
  playerWins = 0;
  computerWins = 0;
  while((playerWins + computerWins) < 5){
    let choice = prompt("Rock, Paper, or Scissors: ");
    alert(playRound(choice, computerPlay()));
  }
  if(playerWins > computerWins){
    alert("You Win!");
  }else if(computerWins > playerWins) {
    alert("You Lose!");
  }
}
