const buttons = document.querySelectorAll("[data-choice]");
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

var playerScore = 0;
var computerScore = 0;

for (let button of buttons) {
    button.addEventListener("click", function () {
        let playerChoice = this.getAttribute("data-choice");
        playGame(playerChoice);
    });
}

function playGame(playerChoice) {
    let computerChoice = Math.floor(Math.random() * 3);

    playerImages[playerChoice].style.display = "block";
    computerImages[choices[computerChoice]].style.display = "block";

    for (let choice of choices) {
        if (choice !== playerChoice) {
            playerImages[choice].style.display = "none";
        }
        if (choice !== choices[computerChoice]) {
            computerImages[choice].style.display = "none";
        }
    }

    let result = checkWinner(choices[computerChoice], choices[playerChoice]);
    updateScores(result);
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
    };
}
function playerWinner(winner) {
    var modal = document.getElementById('myModal');
    var modalContent = document.querySelector('.modal-content p');
    modalContent.innerText = 'Congratulations you won!';
    modal.style.display = 'block';

    var span = document.getElementsByClassName('close')[0];

    span.onclick = function() {
        modal.style.display = 'none';
    }

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
    }

    window.onclick = function(event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    };
}
