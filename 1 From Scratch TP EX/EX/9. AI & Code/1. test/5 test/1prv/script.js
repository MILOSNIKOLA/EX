// Navigation mobile
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});

// Theme (Jour / Nuit) - bascule et persistance

function applyTheme(theme, toggleEl) {
  if (theme === "light") {
    document.documentElement.setAttribute("data-theme", "light");
    if (toggleEl) {
      toggleEl.textContent = "🌞";
      toggleEl.setAttribute("aria-pressed", "true");
    }
  } else {
    document.documentElement.removeAttribute("data-theme");
    if (toggleEl) {
      toggleEl.textContent = "🌙";
      toggleEl.setAttribute("aria-pressed", "false");
    }
  }
  try {
    localStorage.setItem("theme", theme);
  } catch (e) {
    // ignore
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const themeToggle = document.getElementById("themeToggle");
  const saved = localStorage.getItem("theme");
  const prefersLight =
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: light)").matches;
  const initial = saved || (prefersLight ? "light" : "dark");
  applyTheme(initial, themeToggle);

  if (themeToggle) {
    themeToggle.addEventListener("click", () => {
      const isLight =
        document.documentElement.getAttribute("data-theme") === "light";
      const next = isLight ? "dark" : "light";
      applyTheme(next, themeToggle);
    });

    // Keyboard support (Enter / Space)
    themeToggle.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        themeToggle.click();
      }
    });
  }
});

// Fermer le menu mobile quand on clique sur un lien
document.querySelectorAll(".nav-link").forEach((link) => {
  link.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
  });
});

// Active la classe 'active' sur le lien de navigation correspondant à la section visible
const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".nav-link");

function highlightNavigation() {
  const scrollY = window.pageYOffset;

  sections.forEach((section) => {
    const sectionHeight = section.offsetHeight;
    const sectionTop = section.offsetTop - 100;
    const sectionId = section.getAttribute("id");

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      navLinks.forEach((link) => {
        link.classList.remove("active");
        if (link.getAttribute("href") === `#${sectionId}`) {
          link.classList.add("active");
        }
      });
    }
  });
}

window.addEventListener("scroll", highlightNavigation);

// Animations au scroll avec délais progressifs
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -80px 0px",
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry, index) => {
    if (entry.isIntersecting) {
      // Délai progressif pour un effet en cascade
      setTimeout(() => {
        entry.target.classList.add("visible");
      }, index * 100);
    }
  });
}, observerOptions);

// Ajouter la classe fade-in aux éléments à animer
document.addEventListener("DOMContentLoaded", () => {
  // Animer les cartes de service avec délais
  const serviceCards = document.querySelectorAll(".service-card");
  serviceCards.forEach((card, index) => {
    card.classList.add("fade-in");
    card.style.transitionDelay = `${index * 0.1}s`;
    observer.observe(card);
  });

  // Animer les items de portfolio
  const portfolioItems = document.querySelectorAll(".portfolio-item");
  portfolioItems.forEach((item) => {
    item.classList.add("fade-in");
    observer.observe(item);
  });

  // Animer les stats
  const statItems = document.querySelectorAll(".stat-item");
  statItems.forEach((item) => {
    item.classList.add("fade-in");
    observer.observe(item);
  });

  // Animer les autres sections
  const aboutText = document.querySelector(".about-text");
  const contactInfo = document.querySelector(".contact-info");
  const contactForm = document.querySelector(".contact-form");

  [aboutText, contactInfo, contactForm].forEach((el) => {
    if (el) {
      el.classList.add("fade-in");
      observer.observe(el);
    }
  });

  // Animation du badge hero au chargement
  const heroBadge = document.querySelector(".hero-badge");
  if (heroBadge) {
    heroBadge.style.animation = "fadeInDown 0.8s ease 0.2s both";
  }
});

// Animation des statistiques (compteur) avec effet d'accélération
function animateCounter(element) {
  const target = parseInt(element.getAttribute("data-target"));
  const duration = 2500; // 2.5 secondes
  let startTime = null;
  const easeOutQuart = (t) => 1 - Math.pow(1 - t, 4);

  const updateCounter = (timestamp) => {
    if (!startTime) startTime = timestamp;
    const progress = Math.min((timestamp - startTime) / duration, 1);
    const easedProgress = easeOutQuart(progress);
    const current = Math.floor(target * easedProgress);

    element.textContent = current;

    if (progress < 1) {
      requestAnimationFrame(updateCounter);
    } else {
      element.textContent = target;
    }
  };

  requestAnimationFrame(updateCounter);
}

// Observer pour déclencher l'animation des compteurs
const statsObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const statNumber = entry.target.querySelector(".stat-number");
        if (statNumber && !statNumber.classList.contains("animated")) {
          statNumber.classList.add("animated");
          animateCounter(statNumber);
        }
      }
    });
  },
  { threshold: 0.5 }
);

document.querySelectorAll(".stat-item").forEach((stat) => {
  statsObserver.observe(stat);
});

// Gestion du formulaire de contact
const contactForm = document.getElementById("contactForm");

if (contactForm) {
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();

    // Récupérer les valeurs du formulaire
    const formData = {
      name: document.getElementById("name").value,
      email: document.getElementById("email").value,
      subject: document.getElementById("subject").value,
      message: document.getElementById("message").value,
    };

    // Animation du bouton
    const submitBtn = contactForm.querySelector('button[type="submit"]');
    const originalText = submitBtn.innerHTML;
    submitBtn.innerHTML = "<span>Envoi en cours...</span>";
    submitBtn.disabled = true;
    submitBtn.style.opacity = "0.7";

    // Simulate send (in a real app you would call an API)
    setTimeout(() => {
      // Show confirmation message
      alert(
        `Thanks ${formData.name}! Your message was sent successfully.\n\nWe will reply to ${formData.email} shortly.`
      );

      // Reset form
      contactForm.reset();

      // Restore button
      submitBtn.innerHTML = originalText;
      submitBtn.disabled = false;
      submitBtn.style.opacity = "1";
    }, 1000);

    // Ici, vous pouvez ajouter du code pour envoyer les données à un serveur
    // Par exemple avec fetch() :
    /*
        fetch('/api/contact', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData)
        })
        .then(response => response.json())
        .then(data => {
            alert('Message envoyé avec succès !');
            contactForm.reset();
        })
        .catch(error => {
            alert('Erreur lors de l\'envoi du message. Veuillez réessayer.');
        });
        */
  });
}

// Smooth scroll pour tous les liens d'ancrage
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      const offsetTop = target.offsetTop - 80; // Compenser la hauteur de la navbar
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
  });
});

// Effet parallaxe et gestion de la navbar au scroll
let lastScroll = 0;
const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
  const scrolled = window.pageYOffset;

  // Ajouter une classe quand on scroll
  if (scrolled > 100) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }

  // Parallaxe léger sur les formes flottantes
  const shapes = document.querySelectorAll(".shape");
  shapes.forEach((shape, index) => {
    const speed = (index + 1) * 0.3;
    shape.style.transform = `translateY(${scrolled * speed}px)`;
  });
});
