/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

class Game {
    constructor() {
        this.missed = 0;
        this.phrases = this.createPhrases();
        this.activePhrase = null;
    }

    createPhrases() {
        const phrases = [
            new Phrase('we are going to have peace even if we have to fight for it'),
            new Phrase('your name is unknown your deed is immortal'),
            new Phrase('the pope how many divisions has he got'),
            new Phrase('the frontier of america is on the rhine'),
            new Phrase('tora tora tora'),
            new Phrase('if everyone thinks alike someone is not thinking')
        ];
        return phrases;
    }

    startGame() {
        document.querySelector('#overlay').style.display = 'none';
        this.activePhrase = this.getRandomPhrase();
        this.activePhrase.addPhraseToDisplay();
    }

    getRandomPhrase() {
        return this.phrases[Math.floor(Math.random() * 5)];
    }

    // handles onscreen keyboard button clicks
    handleInteraction(button) {
        button.disabled = true;
        if (!this.activePhrase.phrase.includes(button.textContent)) {
            button.classList = 'wrong';
            this.removeLife();
            return;
        }
        if (this.activePhrase.phrase.includes(button.textContent)) {
            button.classList = 'chosen';
            this.activePhrase.showMatchedLetter(button.textContent);
        }
        if (this.checkForWin()) {
            this.gameOver(true);
        }
    }

    removeLife() {
        this.missed += 1;
        let gameLives = document.querySelector('img[src="images/liveHeart.png"]');
        if (this.missed < 5) {
            gameLives.src = 'images/lostHeart.png';
        } else if (this.missed === 5) {
            this.gameOver(false);
        }
    }

    gameOver(gameWon) {
        const gameOverMessage = document.getElementById('game-over-message');
        const gameOverlay = document.querySelector('#overlay');

        gameOverlay.style.display = 'block';
        gameOverlay.classList = gameWon ? 'win' : 'lose';
        gameOverMessage.textContent = gameWon ? 'Battle\'s won! Good Job, Commander!' : 'Temporary retreat is not failure, we shall try again';

        this.resetGame();
    }

    // did we win?
    checkForWin() {
        return document.querySelectorAll('li.hide').length === 0;
    }

    resetGame() {
        const letters = document.querySelector('ul');
        const qwerty = document.querySelectorAll('.keyrow button');
        const hearts = document.querySelectorAll('#scoreboard img');

        letters.innerHTML = null;

        qwerty.forEach(key => {
            key.className = 'key';
            key.disabled = false;
        });

        hearts.forEach(heart => heart.src = 'images/liveHeart.png');
    }
}