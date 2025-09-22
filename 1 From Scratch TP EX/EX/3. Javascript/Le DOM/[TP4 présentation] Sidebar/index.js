// Créer un événement au click sur le hamburger menu pour sortir la sidebar, ranger la sidebar si on reclick dessus

// Ranger la sidebar si on click sur le contenu principal

// BONUS
// Créer en css l'hamburger menu qui se transforme en croix

// Aide
// Priorités en CSS : id > classe > baliseHtml


// const hamb = document.getElementById('side-bar');
// const toggle = document.getElementById('toggle-btn');

// hamb.addEventListener('click', () => {
//     toggle.classList.toggle('active'); 
// });

const sidebar = document.getElementById('side-bar');
const btn = document.getElementById('btn');
const content = document.querySelector('.content');

// Fonction pour ouvrir/fermer la sidebar
function toggleSidebar(e) {
  e.stopPropagation();
  sidebar.classList.toggle('active');
  btn.classList.toggle('open');
}

// Ferme la sidebar si on clique sur le contenu principal
function closeSidebar() {
  sidebar.classList.remove('active');
  btn.classList.remove('open');
}

// Clic sur bouton hamburger
btn.addEventListener('click', toggleSidebar);

// Clic sur le contenu pour refermer la sidebar si elle est ouverte
content.addEventListener('click', () => {
  if (sidebar.classList.contains('active')) {
    closeSidebar();
  }
});
