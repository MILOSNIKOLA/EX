// const { body } = require("express-validator");



document.body.addEventListener("click", (e) => {
// console.log(e.target.id);
const body = document.querySelector("body");
    // if (e.target.id === "javascript" ) {
    //     body.style.background = "yellow"
    // }
    // else if (e.target.id === "php") {
    //     body.style.background = "blue"
    // }
    // else if (e.target.id === "python") {
    //     body.style.background = "green"
    // } else {
    //    body.style.background = "red"
    // }

    switch (e.target.id) {
        case "javascript":
            body.style.background = "yellow";
            // body.style.color = "#b3b305ff";
            break;
        case "php":
            body.style.background = "blue";
            // body.style.color = "#4f1585";
            break;
        case "python":
            body.style.background = "green";
            // body.style.color = "#005300";
            break;
        default:
            body.style.background = "red";
           
    }
})

// Methodes string

let string2 = "Javascript est un langage orienté objet";
console.log(string2.length); // Affiche la longueur de la chaîne
console.log(string2.indexOf("langage")); // Affiche la position du mot "langage"
console.log(string2.replace("Javascript", "PHP")); // Remplace "Javascript" par "PHP"
console.log(string2.toUpperCase()); // Met toute la chaîne en majuscules
console.log(string2.toLowerCase()); // Met toute la chaîne en minuscules
console.log(string2[string2.length - 1]); // Affiche le dernier caractère de la chaîne
console.log(string2.slice(0, 10)); // Affiche les 10 premiers caractères,coupe à partir de l'index 0 jusqu'à l'index 10
console.log(string2.split(" ")); // Transforme la chaîne en tableau
console.log(string2.replace('Javascript','PHP'));

// Methotdes Number

let number = 42.56789;
console.log(number.toFixed(2)); // Affiche 42.57 (arrondi à 2 décimales)
console.log(parseInt("42px")); // Affiche 42 (convertit en entier)
console.log(parseFloat("42.56px")); // Affiche 42.56 (convertit en nombre à virgule flottante)
console.log(Number("42")); // Affiche 42 (convertit en nombre)
console.log(Number("42abc")); // Affiche NaN (Not a Number)
console.log(isNaN("42abc")); // Affiche true (vérifie si ce n'est pas un nombre)
console.log(isNaN("42")); // Affiche false (vérifie si c'est un nombre)

// console.log(Math.floor(Math.random() * 50));


// Methodes Array

let array = ['JavaScript', 'PHP', 'Python', 'Java', 'C++'];
let array2 = ['HTML'];

