// Créer 3 ronds de tailles différentes (dont un qui remplacera la souris)

// Ajouter un événement sur la fenetre (window) puis animer la position de ces ronds (top, left injecter "e")

// S'assurer que les liens sont clickables

// Donner un style de transparence aux 2 plus gros ronds (mix-blend-mode)

// mix-blend-mode: difference;

const circle = document.querySelector(".circle");
// const circle1 = document.querySelector(".circle-1");
// const circle2 = document.querySelector(".circle-2");
// const circle3 = document.querySelector(".circle-3");
// const mousemove = document.querySelector(".mousemove");

window.addEventListener("mousemove", (e) => {
  // circle1.style.left = e.pageX + "px";
  // circle1.style.top = e.pageY + "px";
  // circle2.style.left = e.pageX + "px";
  // circle2.style.top = e.pageY + "px";
  // circle3.style.left = e.pageX + "px";
  // circle3.style.top = e.pageY + "px";
  console.log(e.circle1);
  
})

const mousemove = document.querySelector(".mousemove");
const circle1 = document.querySelector(".circle-1");
const circle2 = document.querySelector(".circle-2");
const circle3 = document.querySelector(".circle-3");

window.addEventListener("mousemove", (e) => {
   mousemove.style.left = e.pageX + "px";
   mousemove.style.top = e.pageY + "px";
   console.log(e);
   
  circle.style.transform = "translate(-50%, -50%)";
  circle1.style.transform = "translate(-50%, -50%)";
  circle2.style.transform = "translate(-50%, -50%)";
  circle3.style.transform = "translate(-50%, -50%)";
  circle1.style.left = e.pageX + "px";
  circle1.style.top = e.pageY + "px";
  circle2.style.left = e.pageX + "px";
  circle2.style.top = e.pageY + "px";
  circle3.style.left = e.pageX + "px";
  circle3.style.top = e.pageY + "px";
  circle.style.left = e.pageX + "px";
  circle.style.top = e.pageY + "px";
  });