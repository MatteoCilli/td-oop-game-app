/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */


let game;

// starts a new game when clicking the 'Start Game' button
document.getElementById('btn__reset').addEventListener('click', () => {
    game = new Game();
    game.startGame();
});

// makes '.key' buttons interactive on click
document.getElementById('qwerty').addEventListener('click', event => {
    if (event.target.tagName === 'BUTTON') {
        game.handleInteraction(event.target);
    }
});

// on keydown respond to keyboard input, for more interactivity

document.addEventListener('keydown', event => {
    document.querySelectorAll(`.key`).forEach(element => {
        if (element.innerHTML === event.key) {
            if (!element.classList.contains('wrong') && !element.classList.contains('chosen')) {
                game.handleInteraction(element);
            }
        }
    });
});