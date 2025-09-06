// SELECTEURS 


// document.querySelector("h4").style.background = "red";

// const baliseHTML = document.querySelector("h4");

// console.log(baliseHTML);

// baliseHTML.style.color = "green";


// Click event


const questionContainer = document.querySelector(".click-event");
const btn1 = document.querySelector("#btn-1");
const btn2 = document.getElementById("btn-2");
const response = document.querySelector("p");

// console.log(btn1, btn2);


questionContainer.addEventListener("click", () => {

questionContainer.classList.toggle("question-clicked");

})

btn1.addEventListener("click", () => {
    response.classList.add("show-response");
    response.style.background = "green";
    questionContainer.style.background = "#096919ff";
    response.style.visibility = "visible";
    
})

btn2.addEventListener("click", () => {
    response.classList.add("show-response");
    response.style.background = "red";
    questionContainer.style.background = "#690909ff";
    response.style.visibility = "visible";
})

// Mouse event 

const mousemove = document.querySelector(".mousemove");

window.addEventListener("mousemove", (e) => {
   mousemove.style.left = e.pageX + "px";
   mousemove.style.top = e.pageY + "px";
});

// window.addEventListener("mousedown", () => {
//     mousemove.style.transform = "scale(2.5)";
// })

response.addEventListener("mouseover", () => {
    response.style.transform = "rotate(5deg)";
})

// 



// KeyPress

const keypressContainer = document.querySelector(".keypress");
const key = document.getElementById("key");

document.addEventListener("keypress", (e) => {
    // console.log(e.key);
    key.textContent = e.key;  
    
})

// Scroll event

const nav = document.querySelector("nav");

window.addEventListener("scroll", () => {
    
    console.log(window.scrollY);

    if (window.scrollY > 200) {
        nav.style.top = 0;
    } else {
        nav.style.top = "-50px";
    }
});


// Form Events

const inputName = document.querySelector('input[type="text"]');
const select = document.querySelector('select');
const form = document.querySelector("form");
let pseudo = "";
let language = "";

   inputName.addEventListener('input', (e) => {
    pseudo = e.target.value;
   }) 

   select.addEventListener('input', (e) => {
    language = e.target.value;
   })

form.addEventListener("submit", (e) => {
    e.preventDefault();

    console.log(cgv.checked);
    
    if (cgv.checked) {          /*textContent , sve zapisuje ,sve*/
        document.querySelector("form > div").innerHTML = ` 
        <h3>Pseudo : ${pseudo}</h3>`
        + `<h4>Langage préféré : ${language}</h4>`;
        //Afficher les résultats
    } else {
        alert("Veuillez remplir les champs");
    }
})

// Load event

window.addEventListener("load", () => {
    // console.log("Document chargé");
})

// 

const boxes = document.querySelectorAll(".box");
// console.log(boxes);

boxes.forEach((box => {
    box.addEventListener("click", (e) => {
        console.log(e.target);
        
    });
}))

// addEventListener !== onclick

document.body.onclick = function() {
    console.log("click 1");
}

// Il est limité à un seul evenment

// BOM (Browser Object Model)

// console.log(window.innerHeight);


// Timeout et Interval

// setTimeout(() => {
//     alert("Hello World");
// }, 3000);

//  