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



// KyyPress

const keypressContainer = document.querySelector(".keypress");
const key = document.getElementById("key");

document.addEventListener("keypress", (e) => {
    // console.log(e.key);
    key.textContent = e.key;  
    
})