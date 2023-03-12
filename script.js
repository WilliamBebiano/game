function computerPlay() {
    const choices = ["rock", "paper", "scissors"];
    const randomNumber = Math.floor(Math.random() * choices.length);
    return choices[randomNumber];
  }
  
  let playAgain = true;
  
  function selectGameOption(selection) {
    if (selection === null) {
      return null;
    }
    
    const selecting = ["r", "p", "s", "rock", "paper", "scissors"];
    selection =  selection ? selection.trim().toLowerCase() : null;
    
    if (selecting.includes(selection)) {
      if (selection === "r" || selection === "rock") {
        return "rock";
      } else if (selection === "p" || selection === "paper") {
        return "paper";
      } else if (selection === "s" || selection === "scissors") {
        return "scissors";
      }
    }
    
    return null;
  }
  
  function evaluateUserInput(roundCounter) {
    while (true) {
      let playerInput = prompt(`Round ${roundCounter}: Rock 👊, Paper ✋, or Scissors✌️?`);
      if (playerInput === null || playerInput === '') {
        if (playerInput === '') {
          alert('You must enter a value.');
        }
        else if (playerInput === null) {
          alert('Game cancelled by user');
          return 'cancel';
        }
      } else {
        playerInput = playerInput.trim().toLowerCase();
        const selecting = ["r", "p", "s", "rock", "paper", "scissors"];
        if (selecting.includes(playerInput)) {
          if (playerInput === "r" || playerInput === "rock") {
            return "rock";
          } else if (playerInput === "p" || playerInput === "paper") {
            return "paper";
          } else if (playerInput === "s" || playerInput === "scissors") {
            return "scissors";
          }
        }
      }
      alert(`Invalid input: ${playerInput}`);
    }
  }  
  
  function askToCancel() {
    const cancelResponse = prompt("Do you really want to cancel the game? (Y/N)").trim().toLowerCase();
    if (cancelResponse === "y" || cancelResponse === "yes") {
      playAgain = false;
      alert('Game cancelled by user');
      return 'cancel';
    }
  }
  
  
  
  function playRound(playerSelection, computerSelection, roundCounter) {
    if (playerSelection === computerSelection) {
      return `Round ${roundCounter}: It's a tie!`;
    } else if (
      (playerSelection === "rock" && computerSelection === "scissors") ||
      (playerSelection === "paper" && computerSelection === "rock") ||
      (playerSelection === "scissors" && computerSelection === "paper")
    ) {
      return `You win! ${playerSelection} beats ${computerSelection} : Round ${roundCounter}.`;
    } else {
      return `You lose! ${computerSelection} beats ${playerSelection} : Round ${roundCounter}.`;
    }
  }
  
  function game() {
    let playerScore = 0;
    let computerScore = 0;
    let roundCounter = 0;
    let playAgain = true;
  
    alert("Welcome to Rock, Paper, Scissors! You can play by typing 'rock' or 'r', 'paper' or 'p', 'scissors' or 's'. Let's begin!");
  
    while (playAgain) {
      roundCounter++;
      let playerInput = evaluateUserInput(roundCounter);
      if (playerInput === 'cancel') {
        playAgain = false;
        break;
      }
  
      const playerSelection = selectGameOption(playerInput);
      const computerSelection = computerPlay();
      const result = playRound(playerSelection, computerSelection, roundCounter);
      console.log(result);
  
      if (result.startsWith("You win!")) {
        playerScore++;
      } else if (result.startsWith("You lose!")) {
        computerScore++;
      }
  
      const scoreMessage = `Current score: You ${playerScore} - ${computerScore} Computer`;
      const choiceMessage = `Current choices : You ${playerSelection} x ${computerSelection}  Computer`;
      console.log(scoreMessage);
      alert(`${scoreMessage} \n${choiceMessage} \n${result}`);
  
      if (roundCounter >= 5) {
        if (playerScore > computerScore) {
          console.log("You win the game!😁 \nPEW PEW Madafakas");
          alert("You win the game!😁 \nPEW PEW Madafakas");
        } else if (playerScore < computerScore) {
          console.log("You lose the game😭! \nNOT TODAY!");
          alert("You lose the game😭! \nNOT TODAY!");
        } else {
          console.log("The game is tied!");
          alert("The game is tied!");
        }
  
        const playAgainResponse = prompt("Do you want to play again? (Y/N)");
        if (playAgainResponse !== null) {
          const validatedPlayAgainResponse = playAgainResponse.trim().toLowerCase();
          if (validatedPlayAgainResponse === "n" || validatedPlayAgainResponse === "no") {
            playAgain = false;
          } else if (validatedPlayAgainResponse === "y" || validatedPlayAgainResponse === "yes") {
            const sureResponse = prompt("Are you sure? This will reset the game. (Y/N)").trim().toLowerCase();
            if (sureResponse === "y" || sureResponse === "yes") {
              roundCounter = 0;
              playerScore = 0;
              computerScore = 0;
            }
          } else {
            alert(`Invalid input: ${playAgainResponse}`);
          }
        } else {
          playAgain = false;
        }
      }
    }
    console.log("Thanks for playing!");
  }

game();
  