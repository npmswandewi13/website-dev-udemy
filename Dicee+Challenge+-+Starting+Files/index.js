// Generate random number between 1 and 6
var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomNumber2 = Math.floor(Math.random() * 6) + 1;

// Print random number (console)
console.log(randomNumber1);
console.log(randomNumber2);

// Select the left img (dice) element from DOM
var img1 = document.querySelector('.img1');
var img2 = document.querySelector('.img2');

// Set the src attributes in img based on the random number
img1.setAttribute('src', `./images/dice${randomNumber1}.png`);
img2.setAttribute('src', `./images/dice${randomNumber2}.png`);

// Select the title of the website
var title = document.querySelector('h1');

// Determine the result after rolling dice
if (randomNumber1 > randomNumber2) {
    title.innerHTML = "Player 1 Wins! 🚩";
} else if (randomNumber1 < randomNumber2) {
    title.innerHTML = "Player 2 Wins! 🚩";
} else {
    title.innerHTML = "Draw ✨";
}
