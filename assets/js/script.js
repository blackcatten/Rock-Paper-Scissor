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

    var computerChoice = Math.floor(Math.random() * 3);

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
function playerWinner(winner) {
    var modal = document.getElementById('myModal');
    var modalContent = document.querySelector('.modal-content p');
    modalContent.innerText = 'Congratulations you won!';
    modal.style.display = 'block';

    var span = document.getElementsByClassName('close')[0];

    span.onclick = function() {
        modal.style.display = 'none';
    };

    window.onclick = function(event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    };
}

function computerWinner(winner) {
    var modal = document.getElementById('myModal');
    var modalContent = document.querySelector('.modal-content p');
    modalContent.innerText ='Computer won! You Lost!';
    modal.style.display = 'block';

    var span = document.getElementsByClassName('close')[0];

    span.onclick = function() {
        modal.style.display = 'none';
    };

    window.onclick = function(event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    };
}
