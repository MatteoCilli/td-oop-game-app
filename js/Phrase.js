class Phrase {
    constructor(phrase) {
        this.phrase = phrase.toLowerCase();
    }

    // display phrase on game board
    addPhraseToDisplay() {
        const phraseDiv = document.getElementById('phrase');
        const characters = this.phrase.split('')

        characters.forEach(character => {
            let li;
            if (character !== ' ') {
                li = `<li class="hide letter ${character}">${character}</li>`;
            } else {
                li = `<li class="space"> </li>`;
            }
            phraseDiv.firstElementChild.innerHTML += li;
        });
    }

    // checks if letter is in phrase
    checkLetter(letter) {
        return this.phrase.includes(letter);
    }

    // display passed letter on screen if match is found
    showMatchedLetter(letter) {
        document.querySelectorAll(`.${letter}`).forEach(
            matchedLetter => matchedLetter.classList.replace('hide', 'show')
        );
    }
}