https://williambebiano.github.io/game/

This code is an implementation of a simple game called Rock, Paper, Scissors. It allows the user to play against the computer in a series of rounds, and keeps track of the score.

Here is a step-by-step explanation of the code:

1. The computerPlay() function generates a random selection of either "Rock", "Paper", or "Scissors" using the Math.random() function and returns the selection.

2. The selectGameOption(selection) function maps the user's input (either "rock", "paper", "scissors", "r", "p", or "s") to the corresponding game option ("rock", "paper", or "scissors") and returns it.

3. The playRound(playerSelection, computerSelection) function takes two arguments, the player's selection and the computer's selection, compares them according to the rules of the game and returns a string indicating the outcome of the round (either "It's a tie!", "You win! [playerSelection] beats [computerSelection].", or "You lose! [computerSelection] beats [playerSelection].").

4. The game() function is the main function that initiates the game. It sets the initial scores of the player and the computer to zero, and then starts a loop for five rounds.

5. Within the loop, the player is prompted to input their selection. If the input is not valid (i.e., not one of the six valid inputs), the player is alerted and the loop continues to the next round.

6. The player's input is then mapped to the corresponding game option using the selectGameOption() function, and the computer's selection is generated using the computerPlay() function.

7. The playRound() function is called with the player's selection and the computer's selection, and the result is logged to the console.

8. The score is updated based on the outcome of the round, and a message displaying the current score and the choices of both the player and the computer is logged to the console and displayed in an alert box.

9. Once the loop is complete, the final score is compared, and the player is alerted whether they won, lost or tied the game.

10. Finally, an initial alert is displayed welcoming the user to the game and explaining how to play, and the game() function is called to start the game.
