function computerPlay() {
    /// Returns the computer choice - random pick from Rock, Paper or Scissors

    const OPTIONS = ["rock", "paper", "scissors"];
    let choiceNumber = Math.floor(Math.random() * 3);
    let choice = OPTIONS[choiceNumber];

    return choice;
}

function playRound(playerSelection, computerSelection) {
    /// Takes as input the player selection and compares it to the computer selection. Returns the winner or loser message

    // Convert player selection to lowercase
    playerSelection = playerSelection.toLowerCase();

    // Format player and computer choices so first letters are upper case
    const playerSelectionFormatted = playerSelection.substr(0,1).toUpperCase() + playerSelection.substr(1)
    const computerSelectionFormatted = computerSelection.substr(0,1).toUpperCase() + computerSelection.substr(1)

    // Create variable to track round outcome
    let roundOutcome = null;

    // Determine outcome by comparing choices
    if (playerSelection == "rock") {
        switch(computerSelection) {

            case "rock":
                roundOutcome = "tie";
                break;

            case "paper":
                roundOutcome = "lose";
                break;

            case "scissors":
                roundOutcome = "win";
                break;

        }
    } else if (playerSelection == "paper") {
        switch(computerSelection) {

            case "rock":
                roundOutcome = "win";
                break;

            case "paper":
                roundOutcome = "tie";
                break;

            case "scissors":
                roundOutcome = "lose";
                break;

        }
    } else if (playerSelection == "scissors" ){
        switch(computerSelection) {

            case "rock":
                roundOutcome = "lose";
                break;

            case "paper":
                roundOutcome = "win";
                break;

            case "scissors":
                roundOutcome = "tie";
                break;

        }
    } else {
        return "Invalid selection";
    }

    // Construct round outcome message
    if (roundOutcome == "win") {
        roundOutcomeMessage= `You win! ${ playerSelectionFormatted } beats ${ computerSelectionFormatted }.`;
    } else if (roundOutcome == "lose") {
        roundOutcomeMessage = `You lose! ${ computerSelectionFormatted } beats ${ playerSelectionFormatted }.`;
    } else {
        roundOutcomeMessage = 'Tie!';
    }


    // Store outcome and message in a dict
    let roundResults = {
        roundOutcome: roundOutcome,
        roundOutcomeMessage: roundOutcomeMessage
    };

    // Return the results dict
    return roundResults;

}

function game() {
    // Run the game for a number of rounds and output the overall winner

    const ROUNDS = 5;
    let playerWins = 0;
    let computerWins = 0;

    for (let i = 0; i < ROUNDS; i++) {
        // Play a round
        playerSelection = prompt('Make your choice!');
        computerSelection = computerPlay();

        roundResults = playRound(playerSelection, computerSelection);

        if (roundResults.roundOutcome == "win") {
            console.log(roundResults.roundOutcomeMessage);
            playerWins++;
        } else if (roundResults.roundOutcome == "lose") {
            console.log(roundResults.roundOutcomeMessage);
            computerWins++;
        } else {
            console.log(roundResults.roundOutcomeMessage)
        }

    }

    // Calculate and output the overall winner of the game

    if (playerWins > computerWins) {
        console.log(`Won: ${ playerWins }, Lost: ${ computerWins }, Tied: ${ ROUNDS - (playerWins + computerWins) } - You win!`)
    } else if (playerWins < computerWins) {
        console.log(`Won: ${ playerWins }, Lost: ${ computerWins }, Tied: ${ ROUNDS - (playerWins + computerWins) } - You lose!`)
    } else {
        console.log(`Won: ${ playerWins }, Lost: ${ computerWins }, Tied: ${ ROUNDS - (playerWins + computerWins) } - You tie!`)
    }

}