function game() {
    let playerScore = 0;
    let computerScore = 0;
    for (let i = 0; i < 5; i++) {
        let playerSelection = prompt('Please type between Rock, Paper and Scissors: ').toLowerCase();
        if (playerSelection != 'rock' || playerSelection != 'paper' || playerSelection != 'scissors') {
            console.log('Please enter a valid option. Valid Options are ROCK, PAPER & SCISSORS')
            return;
        }
        let computerSelection = getComputerChoice();
        let results = playRound(playerSelection, computerSelection, playerScore, computerScore);
        playerScore = results.playerScore;
        computerScore = results.computerScore;
    }

    return playerScore > computerScore ? "You Win!" : playerScore < computerScore ? "You Lose!" : "It's a tie";
}

function playRound(playerSelection, computerSelection, playerScore, computerScore) {
    console.log(playerScore, computerScore);
    if (playerSelection === 'rock' && computerSelection === 'paper' ||
        playerSelection === 'paper' && computerSelection === 'scissors' ||
        playerSelection === 'scissors' && computerSelection === 'rock') {
        return {
            computerScore: (computerScore + 1),
            playerScore: (playerScore)
        };
        // return `You Lose! ${computerSelection} beats ${playerSelection}`;
    } else if (playerSelection === 'paper' && computerSelection === 'rock' ||
        playerSelection === 'scissors' && computerSelection === 'paper' ||
        playerSelection === 'rock' && computerSelection === 'scissors') {
        return {
            computerScore: computerScore,
            playerScore: (playerScore + 1)
        }
        // return `You Win! ${playerSelection} beats ${computerSelection}`;
    }
    return {
        computerScore: (computerScore + 1),
        playerScore: (playerScore + 1)
    }
    // return "It's a tie!";
}

function getComputerChoice() {
    let x = randomNumberGeneratorBetween(0, 2);
    return (x === 0) ? 'rock' : (x === 1) ? 'paper' : 'scissors';
}

function randomNumberGeneratorBetween(min, max) {
    let random = Math.random();
    return Math.round(random * (max - min)) + min;
}

console.log(game());