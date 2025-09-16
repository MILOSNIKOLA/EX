// Créer un événément au scroll

// Cacher la navbar si l'utilisateur comment à descendre et la sortir quand il remonte

// Stocker la valeur du précédent niveau de scroll pour savoir si l'on est monté ou descendu

// Connaitre niveau de scroll (window.scrollY)

const navbar = document.querySelector("#navbar");
let lastScrollY = window.scrollY;

window.addEventListener("scroll", () => {
  const currentScrollY = window.scrollY;

  if (currentScrollY > lastScrollY) {
    // L'utilisateur a défilé vers le bas
    console.log("Scroll vers le bas");
    navbar.style.top = "-80px";
  } else {
    // L'utilisateur a défilé vers le haut
    console.log("Scroll vers le haut");
    navbar.style.top = "0";
  }

  lastScrollY = currentScrollY;
 
});

// window.scroll({
//   top: 100,
//   left: 100,
//   behavior: "auto",
// });