// Fonction pour générer et appliquer une nouvelle couleur
function changerCouleur() {
    // Créer 3 variables pour stocker 3 chiffres aléatoires (0-255 pour RGB)
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);

    // Donner au body une couleur de fond en rgb()
    document.body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;

    // Montrer sur le body la couleur rgb()
    const colorDisplay = document.getElementById('colorDisplay');
    colorDisplay.textContent = `RGB(${r}, ${g}, ${b})`;
}

// Appeler la fonction au chargement de la page
changerCouleur();

// Changer la couleur automatiquement toutes les secondes (illimité)
setInterval(changerCouleur, 1000);

// Ajouter un événement de clic sur le container pour changer la couleur
const container = document.querySelector('.container');
container.addEventListener('click', changerCouleur);

