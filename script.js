function game() {
    let playerScore = score.playerScore;
    let computerScore = score.computerScore;
    for (let i = 0; i < 5; i++) {
        playerSelection = prompt('Please type between Rock, Paper and Scissors: ').toLowerCase();
        if (playerSelection != 'rock' && playerSelection != 'paper' && playerSelection != 'scissors') {
            console.log('Please enter a valid option. Valid Options are ROCK, PAPER & SCISSORS');
            i--; // replay same round!
            continue;
        }
        score = playRound(playerSelection, computerSelection, playerScore, computerScore);
    }
    return playerScore > computerScore ? "You Win!" : playerScore < computerScore ? "You Lose!" : "It's a tie";
}

function playRound(playerSelection, computerSelection) {
    console.log(score.playerScore, score.computerScore);    

    if (playerSelection === 'rock' && computerSelection === 'paper' ||
        playerSelection === 'paper' && computerSelection === 'scissors' ||
        playerSelection === 'scissors' && computerSelection === 'rock') {
        return {
            'computerScore': (score.computerScore + 1),
            'playerScore': (score.playerScore)
        };
        // return `You Lose! ${computerSelection} beats ${playerSelection}`;
    } else if (playerSelection === 'paper' && computerSelection === 'rock' ||
        playerSelection === 'scissors' && computerSelection === 'paper' ||
        playerSelection === 'rock' && computerSelection === 'scissors') {
        return {
            'computerScore': score.computerScore,
            'playerScore': (score.playerScore + 1)
        }
        // return `You Win! ${playerSelection} beats ${computerSelection}`;
    }
    return {
        'computerScore': (score.computerScore + 1),
        'playerScore': (score.playerScore + 1)
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

let playerSelection = "";
let computerSelection = getComputerChoice();
let score = {
    'playerScore': 0,
    'computerScore': 0
};

console.log(game());