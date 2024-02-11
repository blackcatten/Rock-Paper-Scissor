function showImage (choice) {
    document.getElementById('image-rock').style.display = 'none';
    document.getElementById('image-paper').style.display = 'none';
    document.getElementById('image-scissor').style.display = 'none';

if (choice===0) {
document.getElementById('image-rock').style.display = 'block';
} else if (choice === 1) {
    document.getElementById('image-paper').style.display = 'block';
} else if (choice === 2) {
    document.getElementById('image-scissor').style.display = 'block';
}
}
