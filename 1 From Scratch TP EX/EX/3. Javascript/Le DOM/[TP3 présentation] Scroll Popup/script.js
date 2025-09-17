// Créer un événement au scroll

// Réduire la navbar quand on descend vers le vite, la remettre à sa taille initiale si on remonte tout en haut

// Faire apparaitre l'image de la partie improvise

// Faire apparaitre la popup quand on est en bas du site

// Bonus : quand on clicke sur la popup elle disparait pour toujours


/************** NAVBAR **************/

const nav = document.querySelector('nav');

window.addEventListener('scroll', () => {
   
    if (window.scrollY > 0) {
        nav.style.height = "50px";
    } else {
        nav.style.height = "100px";
    }
})

/**************** IMAGE **************/

const image = document.getElementById('imgImporovise');

window.addEventListener('scroll', () =>  {
    if (window.scrollX > 500) {
        image.style.opacity = 1;
        image.style.transform = "translateX(0)";
    } else {
        image.style.opacity = 0;
        image.style.transform = "translateX(-200px)";
    }
})















    