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
            body.style.background = "#db680a";
            // body.style.color = "ff";
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
console.log(string2.split(" ")); // Transforme la chaîne en tableau (ici en séparant par les espaces)
console.log(string2.trim()); // Enlève les espaces au début et à la fin de la chaîne
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

let newArray = array + array2;
console.log(newArray); // Affiche la concaténation des deux tableaux (mais en string)
console.log(array.concat(array2)); // Affiche la concaténation des deux tableaux (en array)
console.log(array.join(" - ")); // Affiche les éléments du tableau séparés par " - "
console.log(array.pop()); // Supprime le dernier élément du tableau et l'affiche
console.log(array.shift()); // Supprime le premier élément du tableau et l'affiche
console.log(array.push("Ruby")); // Ajoute "Ruby" à la fin du tableau et affiche la nouvelle longueur du tableau
console.log(array.unshift("HTML")); // Ajoute "HTML" au début du tableau et affiche la nouvelle longueur du tableau
console.log(array.slice(1, 3)); // Affiche les éléments du tableau de l'index 1 à l'index 3 (exclu) 
console.log(array.splice(1, 2, "C#", "Swift")); // Supprime 2 éléments à partir de l'index 1 et ajoute "C#" et "Swift" à leur place
console.log(array.sort()); // Trie les éléments du tableau par ordre alphabétique
console.log(array.reverse()); // Inverse l'ordre des éléments du tableau
console.log(array.includes("PHP")); // Vérifie si "PHP" est dans le tableau et affiche true ou false
console.log(array.indexOf("Python")); // Affiche l'index de "Python" dans le tableau
console.log(array.length); // Affiche la longueur du tableau
console.log(Array.isArray(array)); // Vérifie si c'est un tableau et affiche true ou false

array.forEach((langages) => {
    console.log(langages);
});

// IMPORTANTE

let arrayNum = [4, 74, 28, 12, 1];
console.log(arrayNum.reduce((x, y) => x + y));

console.log(arrayNum.map(x => x * 2));

let filteredArray = arrayNum.filter(x => x > 10);
console.log(filteredArray);

// FILTER, SORT, MAP

// console.log(arrayNum.filter((number) => number > 10));
console.log(arrayNum.sort()); // Tri par ordre croissant
console.log(arrayNum.sort((a, b) => b - a)); // Tri par ordre décroissant
console.log(arrayNum.map((number) => number * 3));
console.log();

// 1h53