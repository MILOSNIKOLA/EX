// Récupérer les éléments du DOM
const form = document.getElementById("form");
const choice = document.getElementById("choice");
const countdownDisplay = document.getElementById("countdownDisplay");
const minusBtn = document.getElementById("minusBtn");
const controls = document.getElementById("controls");

// Initialiser la valeur par défaut
choice.value = 5;

let totalSeconds = 0;
let countdownInterval = null;

// Fonction pour mettre à jour l'affichage
function updateDisplay() {
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;

  // Formater l'affichage avec des zéros
  const display =
    String(minutes).padStart(2, "0") + ":" + String(seconds).padStart(2, "0");
  countdownDisplay.textContent = display;
}

// Fonction pour lancer le compte à rebours
function startCountdown() {
  if (totalSeconds === 0) {
    alert("Veuillez entrer un nombre valide de minutes");
    return;
  }

  // Désactiver le form pendant le compte à rebours
  form.style.pointerEvents = "none";
  choice.disabled = true;
  document.getElementById("start").disabled = true;

  // Afficher le bouton moins
  controls.style.display = "block";

  // Mettre à jour l'affichage initial
  updateDisplay();

  // Lancer le compte à rebours
  countdownInterval = setInterval(() => {
    if (totalSeconds > 0) {
      totalSeconds--;
      updateDisplay();
    } else {
      // Arrêter le compte à rebours
      clearInterval(countdownInterval);
      countdownDisplay.textContent = "00:00";
      alert("Compte à rebours terminé !");

      // Réactiver le form
      form.style.pointerEvents = "auto";
      choice.disabled = false;
      document.getElementById("start").disabled = false;
      controls.style.display = "none";
      totalSeconds = 0;
      choice.value = "";
    }
  }, 1000);
}

// Créer un événement à la validation du form pour lancer le compte à rebours
form.addEventListener("submit", (e) => {
  e.preventDefault();

  const minutes = parseInt(choice.value);

  if (isNaN(minutes) || minutes <= 0) {
    alert("Veuillez entrer un nombre de minutes valide");
    return;
  }

  totalSeconds = minutes * 60;
  startCountdown();
});

// Événement pour le bouton moins 1 minute
minusBtn.addEventListener("click", () => {
  if (totalSeconds >= 60) {
    totalSeconds -= 60;
    updateDisplay();
  } else if (totalSeconds > 0) {
    totalSeconds = 0;
    updateDisplay();
  }
});
