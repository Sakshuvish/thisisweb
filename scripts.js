function clickYesButton() {
    document.getElementById('love-message').innerText = 'Do you love me 💖';
    document.querySelector('.heart-img').src = 'image.png';
    window.location.href = 'second-page.html'; // Redirect to the second page
}

function clickNoButton() {
    document.getElementById('love-message').innerText = 'Are you sure? 😢';
    swapButtons();
}

function swapButtons() {
    let yesButton = document.getElementById('yes-button');
    let noButton = document.getElementById('no-button');

    // Swap the IDs
    yesButton.id = 'temp-id';
    noButton.id = 'yes-button';
    yesButton.id = 'no-button';

    // Swap the inner text
    let tempText = yesButton.innerText;
    yesButton.innerText = noButton.innerText;
    noButton.innerText = tempText;

    // Swap the click events
    yesButton.setAttribute('onclick', 'clickNoButton()');
    noButton.setAttribute('onclick', 'clickYesButton()');
}
// scripts.js

function clickYesButton() {
    // Redirect to the main.html page
    window.location.href = 'main.html';
}
