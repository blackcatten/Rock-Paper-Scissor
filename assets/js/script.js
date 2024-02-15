const buttons = document.querySelector("showImage");
const playerScoreDisplay = document.getElementById("player-score");
const computerScoreDisplay = document.getElementById("computer-score");
const playerImages = {
    rock: document.getElementById("image-rock"),
    paper: document.getElementById("image-paper"),
    scissors: document.getElementById("image-scissors")
};
const computerImages = {
    rock: document.getElementById("computer-image-rock"),
    paper: document.getElementById("computer-image-paper"),
    scissors: document.getElementById("computer-image-scissors")
};
const choices = ["rock", "paper", "scissors"];

let playerScore = 0;
let computerScore = 0;

/**
 * This function showImage is responsible for hiding, showing image and 
 * calls the updatingScore method.
 * @param: choice this is a number that refers to the player chioce.
 */
function showImage(choice) {
    document.getElementById('image-rock').style.display = 'none';
    document.getElementById('image-paper').style.display = 'none';
    document.getElementById('image-scissors').style.display = 'none';

    if (choice === 0) {
        document.getElementById('image-rock').style.display = 'block';
    } else if (choice === 1) {
        document.getElementById('image-paper').style.display = 'block';
    } else if (choice === 2) {
        document.getElementById('image-scissors').style.display = 'block';
    }
/** 
 * This function for the computer to select images at random.                            
 * The image appears after the computer has selected one of them. 
 * @param: computerChoice this is a number that refers to the computer chioce.
 */ 

    let computerChoice = Math.floor(Math.random() * 3);

    document.getElementById('computer-image-rock').style.display = 'none';
    document.getElementById('computer-image-paper').style.display = 'none';
    document.getElementById('computer-image-scissors').style.display = 'none';

    if (computerChoice === 0) {
        document.getElementById('computer-image-rock').style.display = 'block';
    } else if (computerChoice === 1) {
        document.getElementById('computer-image-paper').style.display = 'block';
    } else if (computerChoice === 2) {
        document.getElementById('computer-image-scissors').style.display = 'block';
    }
    updateScore(choice, computerChoice);
}

/**
 * @param {number} playerChoice - Player's choice (0 for rock, 1 for paper, 2 for scissors).
 * @param {number} computerChoice - Computer's choice (0 for rock, 1 for paper, 2 for scissors).
 * computerScore and playerScore are used to show points.
 */
function updateScore(playerChoice, computerChoice) {
    if (
        (playerChoice === 0 && computerChoice === 2) ||
        (playerChoice === 1 && computerChoice === 0) ||
        (playerChoice === 2 && computerChoice === 1)
    ) {
        playerScore++;
    } else if (
        (computerChoice === 0 && playerChoice === 2) ||
        (computerChoice === 1 && playerChoice === 0) ||
        (computerChoice === 2 && playerChoice === 1)
    ) {
        computerScore++;
    }

    document.getElementById('player-score').innerText = playerScore;
    document.getElementById('computer-score').innerText = computerScore;

    if (playerScore === 3) {
        playerWinner(playerScore === 3 ? 'Player' : 'Computer');
        
        playerScore = 0;
        computerScore = 0;
    } else if (computerScore === 3) {
        computerWinner(playerScore === 3 ? 'Player' : 'Computer');
        
        playerScore = 0;
        computerScore = 0;
    }
}

/**
 * This function declares which image wins.  
 */
function checkWinner(computerChoice, playerChoice) {
    if (
        (playerChoice === 'rock' && computerChoice === 'scissors') ||
        (playerChoice === 'scissors' && computerChoice === 'paper') ||
        (playerChoice === 'paper' && computerChoice === 'rock')
    ) {
        playerScore++;
    } else if (
        (computerChoice === 'rock' && playerChoice === 'scissors') ||
        (computerChoice === 'scissors' && playerChoice === 'paper') ||
        (computerChoice === 'paper' && playerChoice === 'rock')
    ) {
        computerScore++;
    }
}

/**
 * The funktion displays a message when the player wins.
 */
function playerWinner(winner) {
    let modal = document.getElementById('myModal');
    let modalContent = document.querySelector('.modal-content p');
    modalContent.innerText = 'Congratulations you won!';
    modal.style.display = 'block';

    let span = document.getElementsByClassName('close')[0];

    span.onclick = function() {
        modal.style.display = 'none';
    };

    window.onclick = function(event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    };
}

/**
 * The funktion displays a message when the computer wins.
 */
function computerWinner(winner) {
    let modal = document.getElementById('myModal');
    let modalContent = document.querySelector('.modal-content p');
    modalContent.innerText ='Computer won! You Lost!';
    modal.style.display = 'block';

    let span = document.getElementsByClassName('close')[0];

    span.onclick = function() {
        modal.style.display = 'none';
    };

    window.onclick = function(event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    };
}
