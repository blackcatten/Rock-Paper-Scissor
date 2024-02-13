const choices = ["rock", "paper", "scissors"]
const imageIds = {
    player: ['image-rock', 'image-paper', 'image-scissors'],
    computer: ['computer-image-rock', 'computer-image-paper', 'computer-image-scissors']
};
var playerScore = 0;
var computerScore = 0;

function hideAllImages(images) {
    images.forEach(image => {
        document.getElementById(image).style.display = 'none';
    });
}

function showImage(choice, role) {
    hideAllImages(imageIds[role]);
    document.getElementById(imageIds[role][choice]).style.display = 'block';
}

function startGame(playerChoice) {
    showImage(playerChoice, 'player');

    const computerChoice = Math.floor(Math.random() * 3);
    showImage(computerChoice, 'computer');

    updateScore(playerChoice, computerChoice);
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
    }
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
    }
}
