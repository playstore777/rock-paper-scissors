function Game() {
    score = playRound(playerSelection, computerSelection, score);
}

function playRound() {
    // console.log(playerScore, computerScore);

    if (playerSelection === 'rock' && computerSelection === 'paper' ||
        playerSelection === 'paper' && computerSelection === 'scissors' ||
        playerSelection === 'scissors' && computerSelection === 'rock') {
        return {
            'playerScore': score.playerScore,
            'computerScore': (score.computerScore + 1)
        };
    } else if (playerSelection === 'paper' && computerSelection === 'rock' ||
        playerSelection === 'scissors' && computerSelection === 'paper' ||
        playerSelection === 'rock' && computerSelection === 'scissors') {
        return {
            'playerScore': (score.playerScore + 1),
            'computerScore': score.computerScore
        }
    }

    return {
        'playerScore': (score.playerScore + 1),
        'computerScore': (score.computerScore + 1)
    }
}

function getComputerChoice() {
    let x = randomNumberGeneratorBetween(0, 2);
    /*
    ***Much smaller version of doing the same is: ***

    let x = Math.random();
    return (x <= 1/3) ? 'rock' : (x <= 2/3) ? 'paper' : 'scissors';
    */
    return (x === 0) ? 'rock' : (x === 1) ? 'paper' : 'scissors';
}

function randomNumberGeneratorBetween(min, max) {
    let random = Math.random();
    return Math.round(random * (max - min)) + min;
}

function resultGenerator() {
    if (score.playerScore === 5 && score.computerScore === 5) {
        score = {
            'playerScore': 0,
            'computerScore': 0
        }
        return "It's a tie!";
    } else if (score.playerScore === 5) {
        score = {
            'playerScore': 0,
            'computerScore': 0
        }
        return 'You Win!';
    } else if (score.computerScore === 5) {
        score = {
            'playerScore': 0,
            'computerScore': 0
        }
        return 'You Lose!';
    }
}

let playerSelection = "";
let computerSelection = getComputerChoice();
let score = {
    'playerScore': 0,
    'computerScore': 0,
};

// DOM part
let body = document.querySelector('body');
const buttons = document.querySelectorAll('button');
let resultDiv = document.createElement('div');
let scoreDiv = document.createElement('div');

buttons.forEach(button =>
    button.addEventListener('click', function (e) {
        playerSelection = this.textContent.toLowerCase();
        Game();
        let results = resultGenerator() || '***whoever gets 5 score first Wins!***';
        resultDiv.innerHTML = "Result is: " + `<b>${results}</b>`;
        let colorClass = results === "You Win!" ? 'green' : results === "You Lose!" ? 'red' : 'white';
        resultDiv.classList.add(colorClass);
        scoreDiv.textContent = `Player: ${score.playerScore} | Computer: ${score.computerScore}`;
    }
    )
)

// Insert into DOM
body.insertBefore(scoreDiv, document.querySelector('h1'));
body.append(resultDiv);

/***
 * Things to be done:
 * Need to replace buttons with Rock, Paper and Scissors images.
 * also add some hover animation, like scaling size or rotating etc.
 * Maybe add some cool audio or effects!
 */
