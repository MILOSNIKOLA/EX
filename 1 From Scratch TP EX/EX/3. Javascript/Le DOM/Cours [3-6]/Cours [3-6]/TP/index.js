// Rappel des types de données
let string = "Chaine de caractères"; // String
let number = 42; // Number
let boolean = true; // Boolean
let aray = [1, 2, 3]; // Array
let object = { key: "value" }; // Object
let func = function() { return "Je suis une fonction"; }; // Function
let nul = null; // Null
let undef = undefined; // Undefined
let sym = Symbol("symbole"); // Symbol

// let maVariable = "Bonjour le monde!";
// console.log(typeof maVariable); // Affiche "string"

// Tableaux
let array = ["pomme", "banane", "cerise"];
console.log(array); // Affiche "object"
console.log(array[0]); // Affiche "object" // Affiche "pomme"
console.log(array[0][0]); // Affiche "p" (le premier caractère de "pomme")
console.log(array.length); // Affiche 3
// Dans un tableau , on met les crochets [], 
// et dans un objet, on met les accolades {}
let array2 = ["pomme", 42, true, null, undefined, { prenom: "Milos" }, [1, 2, 3]];
console.log(array2); // Affiche le tableau avec différents types de données
console.log(array2[5].prenom); // Affiche "value"

// Objets
let objet = {
    prenom: "Milos",
    age: 30,
    ville: "Paris",
    technologies: ["JavaScript", "HTML", "CSS"],
    admin: false,
};

objet.adresse = "22 rue du code"; // Ajout d'une nouvelle propriété

console.log(objet); // Affiche l'objet complet
console.log(objet.prenom); // Affiche "Milos"
console.log(objet["age"]); // Affiche 30
console.log(objet.technologies[0]) // Affiche "JavaScript"
console.log(objet.admin); // Affiche false

let data = [
    {
    nom: "Mike",
    age: 25,
    technologies: ["JavaScript", "React", "Node.js"],
    admin: false,
    },
    {
    nom: "Mike",
    age: 45,
    technologies: ["PHP", "React", "Typescript"],
    admin: false,
    },
    {
    nom: "Dragan",
    age: 37,
    technologies: ["JavaScript", "HTML", "CSS"],
    admin: true,
    }
];


// 23min

// Fonctions