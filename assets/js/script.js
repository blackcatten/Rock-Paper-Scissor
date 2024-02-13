const choices = ["rock", "paper", "scissors"]

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
}
