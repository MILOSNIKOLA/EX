// Créer 3 ronds de tailles différentes (dont un qui remplacera la souris)

// Ajouter un événement sur la fenetre (window) puis animer la position de ces ronds (top, left injecter "e")

// S'assurer que les liens sont clickables

// Donner un style de transparence aux 2 plus gros ronds (mix-blend-mode)

// mix-blend-mode: difference;
const difference = document.querySelector(".body");

window.addEventListener("mouseup", (e) => {
  difference.style.mixBlendMode = "overlay";
//   difference.style.transform = "scale(1) translate(-50%, -50%)";
});