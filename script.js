function computerPlay() {
    const choices = ["Rock", "Paper", "Scissors"];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

function selectGameOption(selection) {
    const selecting = {
        r: "rock",
        p: "paper",
        s: "scissors",
    };
    return selecting[selection.toLowerCase()];
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();

    if (playerSelection === computerSelection) {
        return "It's a tie!";
    } else if (
        (playerSelection === "rock" && computerSelection === "scissors") ||
        (playerSelection === "paper" && computerSelection === "rock") ||
        (playerSelection === "scissors" && computerSelection === "paper")
    ) {
        return `You win! ${playerSelection} beats ${computerSelection}.`;
    } else {
        return `You lose! ${computerSelection} beats ${playerSelection}.`;
    }
}

function game() {
    let playerScore = 0;
    let computerScore = 0;

    for (let i = 0; i < 5; i++) {
        let playerInput = prompt("Rock 👊, Paper ✋, or Scissors✌️?");
        const playerSelection = selectGameOption(playerInput);
        if (!playerSelection) {
            alert(`Invalid input: ${playerInput}`);
            i--;
            continue;
        }
        const computerSelection = computerPlay();
        const result = playRound(playerSelection, computerSelection);
        console.log(result);

        if (result.startsWith("You win!")) {
            playerScore++;
        } else if (result.startsWith("You lose!")) {
            computerScore++;
        }
        const scoreMessage = `Current score: You ${playerScore} - ${computerScore} Computer`;
        const choiceMessage = `Current choices : You ${playerSelection} x ${computerSelection}  Computer`
        console.log(scoreMessage);
        alert(`${scoreMessage} \n${choiceMessage} \n${result}`);
    }

    if (playerScore > computerScore) {
        alert("You win the game!😁 \nPEW PEW Madafakas");
    } else if (playerScore < computerScore) {
        alert("You lose the game😭! \nNOT TODAY!");
    } else {
        alert("The game is tied!");
    }
}

alert("Welcome to Rock, Paper, Scissors! You can play by typing 'rock' or 'r', 'paper' or 'p', 'scissors' or 's'. Let's begin!");
game();
