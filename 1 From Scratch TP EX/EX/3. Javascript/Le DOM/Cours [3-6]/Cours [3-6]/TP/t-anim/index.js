//  Anime.js

const target = document.getElementById('target');
let array = ["développeur", "intégrateur", "freelance"];
let wordIndex = 0;
let letterIndex = 0;

const createLetter = () => {
    const letter = document.createElement('span');
    target.appendChild(letter);

    letter.textContent = array[wordIndex][letterIndex];

    setTimeout(() => {
        letter.remove();
    },2800);
}

// createLetter();

// setInterval > setTimeout , qui peut s'appeler elle meme

// setInterval(() => {
//     letterIndex++;
//     createLetter();
// }, 200)

const loop = () => {
    setTimeout(() => {
        if(wordIndex >= array.length) {
            wordIndex = 0;
        }
        if (letterIndex < array[wordIndex].length) {
            createLetter();
            letterIndex++;
            loop();
        } else {
            wordIndex++;
            letterIndex = 0;
            setTimeout(() => {
                loop();
            }, 2800);
           
        }
    }, 60)
}


loop();

