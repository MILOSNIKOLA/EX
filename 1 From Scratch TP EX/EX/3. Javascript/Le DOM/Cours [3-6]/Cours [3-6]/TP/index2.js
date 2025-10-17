
// Methode Objet


let data = [
    {
    nom: "Mika",
    age: 25,
    technologies: ["JavaScript", "React", "Node.js"],
    admin: false
    },
    {
    nom: "Nikola",
    age: 31,
    technologies: ["PHP", "React", "Typescript"],
    admin: true
    },
    {
    nom: "Dragan",
    age: 37,
    technologies: ["JavaScript", "HTML", "CSS"],
    admin: true
    }
];

document.body.innerHTML = data
// .filter((user) => user.admin)
.filter((user) => user.nom.includes("a"))
.sort((a, b) => b.age - a.age)
.map((user) => 
`
<div class="user-card">
    <h3>${user.nom}</h3>
    <p>Age: ${user.age} ans</p>
    <p>Admin: ${user.admin ? "Oui" : "Non"}</p>
</div>
`
).join("");

