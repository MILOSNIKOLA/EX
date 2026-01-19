// 1 - Tester le lien de l'API dans le navigateur (https://restcountries.com/v3.1/all)
// API URL : https://restcountries.com/v3.1/all

// Variables globales
let allCountries = [];
let currentSort = null;

// Éléments du DOM (seront initialisés après DOMContentLoaded)
let inputSearch;
let inputRange;
let rangeValue;
let countriesContainer;
let minToMaxBtn;
let maxToMinBtn;
let alphaBtn;

// 8 - Fonction pour afficher/cacher le loader
function showLoader() {
  let loader = document.getElementById("loader");
  if (!loader) {
    loader = document.createElement("div");
    loader.id = "loader";
    loader.style.cssText =
      "text-align: center; padding: 20px; font-size: 1.2rem; grid-column: 1/-1;";
    loader.textContent = "⏳ Chargement des données...";
    countriesContainer.appendChild(loader);
  }
  loader.style.display = "block";
}

function hideLoader() {
  const loader = document.getElementById("loader");
  if (loader) {
    loader.style.display = "none";
  }
}

// 2 - Créer une fonction pour "fetcher" les données, afficher les données dans la console
// 9 - Gérer les erreurs avec un try catch
async function fetchCountries() {
  try {
    // Vérifier que le container existe
    if (!countriesContainer) {
      console.error("❌ countriesContainer non trouvé !");
      return;
    }

    showLoader();
    console.log("📡 Tentative de connexion à l'API...");

    // Utiliser fetch avec des en-têtes appropriés
    const apiUrl =
      "https://restcountries.com/v3.1/all?fields=name,population,region,capital,flag,languages,currencies,subregion,area,cca2";

    const response = await fetch(apiUrl, {
      method: "GET",
      headers: {
        Accept: "application/json",
      },
    });

    console.log(
      "📊 Réponse API reçue - Status:",
      response.status,
      response.statusText,
    );

    if (!response.ok) {
      const errorText = await response.text();
      console.error("❌ Détail de l'erreur API:", errorText);
      throw new Error(`Erreur HTTP ${response.status}: ${response.statusText}`);
    }

    const data = await response.json();
    console.log("✅ Données reçues:", data.length, "pays");

    // 3 - Passer les données à une variable
    allCountries = data;
    hideLoader();

    // Afficher les pays
    displayCountries(allCountries);
  } catch (error) {
    hideLoader();
    console.error("❌ Erreur complète:", error.message, error);

    if (countriesContainer) {
      let errorMsg = error.message;

      // Message d'aide selon le type d'erreur
      if (error.message.includes("Failed to fetch")) {
        errorMsg =
          "❌ Problème de connexion réseau ou CORS.<br>Vérifiez votre connexion internet.";
      } else if (error.message.includes("HTTP 400")) {
        errorMsg = "❌ Erreur 400 - Vérifiez l'URL de l'API.";
      }

      countriesContainer.innerHTML = `<p style="color: red; text-align: center; font-size: 1.2rem; grid-column: 1/-1; line-height: 1.6;">
        ${errorMsg}<br><br><small>Vérifiez la console (F12) pour plus de détails</small>
      </p>`;
    }
  }
}

// 4 - Créer une fonction d'affichage, et paramétrer l'affichage des cartes de chaque pays grace à la méthode MAP
// 10 - Ajouter un drapeau pour chaque pays (data.flags.png)
function displayCountries(countries) {
  countriesContainer.innerHTML = "";

  // Filtrer et limiter les pays à afficher
  const filtered = filterAndSortCountries(countries);

  if (filtered.length === 0) {
    countriesContainer.innerHTML =
      '<p style="text-align: center; grid-column: 1/-1;">Aucun pays trouvé</p>';
    return;
  }

  filtered.map((country) => {
    const card = document.createElement("div");
    card.className = "country-card";
    card.style.cssText = `
      background: var(--card-bg);
      border: 1px solid var(--border-color);
      border-radius: 8px;
      padding: 15px;
      cursor: pointer;
      transition: transform 0.3s, box-shadow 0.3s;
      text-align: center;
    `;

    // Récupérer les informations du pays
    const countryCode = country.cca2?.toLowerCase() || "xx";
    const flagUrl = `https://flagcdn.com/h160/${countryCode}.png`;
    const population = country.population?.toLocaleString("fr-FR") || "N/A";
    const region = country.region || "N/A";
    const capital = country.capital?.[0] || "N/A";

    card.innerHTML = `
      <div style="background: white; padding: 5px; border-radius: 10px; margin-bottom: 15px; box-shadow: 0 6px 20px rgba(0, 0, 0, 0.4);">
        <img src="${flagUrl}" alt="${country.name.common}" style="width: 100%; height: 100px; object-fit: cover; border-radius: 8px; display: block;">
      </div>
      <h3 style="margin: 10px 0; color: var(--button-bg); font-size: 1.3rem;">${country.name.common}</h3>
      <p style="margin: 8px 0; color: #b0b0b0;"><strong>Population:</strong> ${population}</p>
      <p style="margin: 8px 0; color: #b0b0b0;"><strong>Région:</strong> ${region}</p>
      <p style="margin: 8px 0; color: #b0b0b0;"><strong>Capitale:</strong> ${capital}</p>
      <button class="favorite-btn">
        ${isFavorite(country.name.common) ? "❤️ Favori" : "🤍 Ajouter aux favoris"}
      </button>
    `;

    // 11 - Bonus : Afficher plus d'informations au clic sur une carte (modal)
    card.addEventListener("click", () => {
      openModal(country);
    });

    // Gestion des favoris
    const favoriteBtn = card.querySelector(".favorite-btn");
    favoriteBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      toggleFavorite(country.name.common);
      displayCountries(allCountries);
    });

    card.addEventListener("mouseenter", () => {
      card.style.transform = "translateY(-5px)";
      card.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.1)";
    });

    card.addEventListener("mouseleave", () => {
      card.style.transform = "translateY(0)";
      card.style.boxShadow = "none";
    });

    countriesContainer.appendChild(card);
  });
}

// 5 - Récupérer ce qui est tapé dans l'input et filtrer (avant le map) les données
// 6 - Avec la méthode Slice gérer le nombre de pays affichés (inputRange.value)
function filterAndSortCountries(countries) {
  let filtered = countries.filter((country) =>
    country.name.common.toLowerCase().includes(inputSearch.value.toLowerCase()),
  );

  // Appliquer le tri
  if (currentSort === "minToMax") {
    filtered.sort((a, b) => a.population - b.population);
  } else if (currentSort === "maxToMin") {
    filtered.sort((a, b) => b.population - a.population);
  } else if (currentSort === "alpha") {
    filtered.sort((a, b) => a.name.common.localeCompare(b.name.common));
  }

  // Limiter avec le range
  return filtered.slice(0, parseInt(inputRange.value));
}

// Note: Les écouteurs d'événements sont ajoutés dans la fonction initializeApp()

// 11 - Modal pour afficher plus d'informations
function openModal(country) {
  let modal = document.getElementById("modal");
  if (modal) {
    modal.remove();
  }

  modal = document.createElement("div");
  modal.id = "modal";
  modal.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
  `;

  const countryCode = country.cca2?.toLowerCase() || "xx";
  const flagUrl = `https://flagcdn.com/h240/${countryCode}.png`;
  const population = country.population?.toLocaleString("fr-FR") || "N/A";
  const region = country.region || "N/A";
  const subregion = country.subregion || "N/A";
  const capital = country.capital?.[0] || "N/A";
  const languages = country.languages
    ? Object.values(country.languages).join(", ")
    : "N/A";
  const currencies = country.currencies
    ? Object.keys(country.currencies).join(", ")
    : "N/A";
  const area = country.area?.toLocaleString("fr-FR") || "N/A";

  modal.innerHTML = `
    <div style="background: var(--modal-bg); padding: 30px; border-radius: 15px; max-width: 500px; max-height: 80vh; overflow-y: auto; color: var(--text-color); box-shadow: 0 10px 40px rgba(102, 126, 234, 0.3); border: 2px solid var(--border-color);">
      <button onclick="document.getElementById('modal').remove()" style="float: right; background: none; border: none; font-size: 1.5rem; cursor: pointer; color: var(--text-color);">✕</button>
      <div style="background: white; padding: 8px; border-radius: 12px; margin-bottom: 20px; box-shadow: 0 6px 20px rgba(0, 0, 0, 0.4);">
        <img src="${flagUrl}" alt="${country.name.common}" style="width: 100%; height: 180px; object-fit: cover; border-radius: 10px; display: block;">
      </div>
      <h2 style="text-align: center; margin-bottom: 20px; color: var(--button-bg);">${country.name.common}</h2>
      <p style="color: #b0b0b0;"><strong>Région:</strong> ${region}</p>
      <p style="color: #b0b0b0;"><strong>Sous-région:</strong> ${subregion}</p>
      <p style="color: #b0b0b0;"><strong>Capitale:</strong> ${capital}</p>
      <p style="color: #b0b0b0;"><strong>Population:</strong> ${population}</p>
      <p style="color: #b0b0b0;"><strong>Superficie:</strong> ${area} km²</p>
      <p style="color: #b0b0b0;"><strong>Langues:</strong> ${languages}</p>
      <p style="color: #b0b0b0;"><strong>Devises:</strong> ${currencies}</p>
      <button class="favorite-btn" style="width: 100%; padding: 12px; margin-top: 20px;">
        ${isFavorite(country.name.common) ? "❤️ Favori" : "🤍 Ajouter aux favoris"}
      </button>
    </div>
  `;

  modal.querySelector(".favorite-btn").addEventListener("click", () => {
    toggleFavorite(country.name.common);
    modal.remove();
    displayCountries(allCountries);
  });

  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.remove();
    }
  });

  document.body.appendChild(modal);
}

// 20 - Ajouter la fonctionnalité "pays favoris" avec stockage en local (localStorage)
function isFavorite(countryName) {
  const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
  return favorites.includes(countryName);
}

function toggleFavorite(countryName) {
  let favorites = JSON.parse(localStorage.getItem("favorites")) || [];
  if (favorites.includes(countryName)) {
    favorites = favorites.filter((fav) => fav !== countryName);
  } else {
    favorites.push(countryName);
  }
  localStorage.setItem("favorites", JSON.stringify(favorites));
}

// 19 - Ajouter un mode dark/light (toggle) avec stockage en local (localStorage)
function initTheme() {
  const savedTheme = localStorage.getItem("theme") || "light";
  setTheme(savedTheme);
}

function setTheme(theme) {
  document.documentElement.style.setProperty(
    "--bg-color",
    theme === "dark" ? "#1a1a1a" : "#ffffff",
  );
  document.documentElement.style.setProperty(
    "--text-color",
    theme === "dark" ? "#ffffff" : "#000000",
  );
  document.documentElement.style.setProperty(
    "--card-bg",
    theme === "dark" ? "#2a2a2a" : "#f5f5f5",
  );
  document.documentElement.style.setProperty(
    "--border-color",
    theme === "dark" ? "#444" : "#ddd",
  );
  document.documentElement.style.setProperty(
    "--modal-bg",
    theme === "dark" ? "#2a2a2a" : "#ffffff",
  );
  document.documentElement.style.setProperty(
    "--button-bg",
    theme === "dark" ? "#3a3a3a" : "#e0e0e0",
  );

  document.body.style.background = theme === "dark" ? "#1a1a1a" : "#ffffff";
  document.body.style.color = theme === "dark" ? "#ffffff" : "#000000";
  localStorage.setItem("theme", theme);
}

function toggleTheme() {
  const currentTheme = localStorage.getItem("theme") || "light";
  const newTheme = currentTheme === "light" ? "dark" : "light";
  setTheme(newTheme);
}

// Ajouter les CSS variables et le style des cartes
const style = document.createElement("style");
style.textContent = `
  :root {
    --bg-color: #0f1419;
    --text-color: #ffffff;
    --card-bg: #1a1f2e;
    --border-color: #667eea;
    --modal-bg: #1a1f2e;
    --button-bg: #667eea;
    --accent-color: #764ba2;
  }
  
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  body {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    transition: background 0.3s, color 0.3s;
    background: linear-gradient(135deg, #0f1419 0%, #1a1f2e 100%);
    color: var(--text-color);
    min-height: 100vh;
  }
  
  .countries-container {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    gap: 25px;
    padding: 40px 20px;
    max-width: 1400px;
    margin: 0 auto;
  }
  
  .country-card {
    background: var(--card-bg);
    border: 2px solid var(--border-color);
    border-radius: 15px;
    padding: 20px;
    cursor: pointer;
    transition: all 0.3s ease;
    box-shadow: 0 8px 20px rgba(102, 126, 234, 0.15);
  }
  
  .country-card:hover {
    transform: translateY(-8px);
    box-shadow: 0 15px 40px rgba(102, 126, 234, 0.3);
    border-color: var(--accent-color);
  }
  
  .country-card h3 {
    color: var(--button-bg);
    margin: 15px 0;
    font-size: 1.4rem;
  }
  
  .country-card p {
    color: #b0b0b0;
    margin: 8px 0;
    font-size: 0.95rem;
  }
  
  .favorite-btn {
    background: linear-gradient(135deg, var(--button-bg) 0%, var(--accent-color) 100%) !important;
    color: white !important;
    border: none !important;
    padding: 10px 15px !important;
    border-radius: 8px !important;
    cursor: pointer !important;
    transition: all 0.3s !important;
    font-weight: bold !important;
    margin-top: 15px !important;
  }
  
  .favorite-btn:hover {
    transform: scale(1.05);
    box-shadow: 0 5px 15px rgba(102, 126, 234, 0.4) !important;
  }
  
  .btnSort {
    background: linear-gradient(135deg, var(--button-bg) 0%, var(--accent-color) 100%);
    border: none;
    padding: 12px 20px;
    border-radius: 8px;
    cursor: pointer;
    transition: all 0.3s;
    margin: 8px 5px;
    color: white;
    font-weight: bold;
    box-shadow: 0 4px 15px rgba(102, 126, 234, 0.3);
  }
  
  .btnSort:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(102, 126, 234, 0.5);
  }
  
  .btnSort:active {
    transform: translateY(0);
  }
  
  #themeBtn {
    display: block;
    margin: 15px auto;
    padding: 12px 20px;
    background: linear-gradient(135deg, #fbbf24 0%, #f97316 100%);
    border: none;
    border-radius: 8px;
    cursor: pointer;
    color: white;
    transition: all 0.3s;
    font-weight: bold;
    box-shadow: 0 4px 15px rgba(249, 115, 22, 0.3);
  }
  
  #themeBtn:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(249, 115, 22, 0.5);
  }
  
  /* Mode sombre appliqué */
  body.dark-mode {
    --bg-color: #0f1419;
    --text-color: #ffffff;
    --card-bg: #1a1f2e;
  }
  
  /* Mode clair */
  body.light-mode {
    --bg-color: #f8f9fa;
    --text-color: #1a1f2e;
    --card-bg: #ffffff;
    --border-color: #667eea;
  }
  
  body.light-mode .country-card {
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
  }
  
  body.light-mode .country-card:hover {
    box-shadow: 0 15px 40px rgba(102, 126, 234, 0.2);
  }
  
  body.light-mode .country-card p {
    color: #666;
  }
  
  /* Responsive */
  @media (max-width: 768px) {
    .countries-container {
      grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
      gap: 15px;
      padding: 20px;
    }
    
    .btnSort {
      padding: 10px 12px;
      font-size: 0.9rem;
    }
    
    input {
      font-size: 1rem;
      margin: 10px auto;
    }
  }
  
  @media (max-width: 480px) {
    .countries-container {
      grid-template-columns: 1fr;
    }
    
    input[type="range"] {
      width: 100%;
    }
    
    .btnSort {
      display: block;
      width: 90%;
      margin: 8px auto;
    }
    
    .filter-container {
      padding: 20px 10px;
    }
  }
`;
document.head.appendChild(style);

// Fonction d'initialisation
function initializeApp() {
  console.log("🚀 Initialisation de l'application...");

  // Initialiser les éléments du DOM
  inputSearch = document.getElementById("inputSearch");
  inputRange = document.getElementById("inputRange");
  rangeValue = document.getElementById("rangeValue");
  countriesContainer = document.querySelector(".countries-container");
  minToMaxBtn = document.getElementById("minToMax");
  maxToMinBtn = document.getElementById("maxToMin");
  alphaBtn = document.getElementById("alpha");

  console.log("🔍 Éléments trouvés:", {
    inputSearch: !!inputSearch,
    inputRange: !!inputRange,
    countriesContainer: !!countriesContainer,
    minToMaxBtn: !!minToMaxBtn,
    maxToMinBtn: !!maxToMinBtn,
    alphaBtn: !!alphaBtn,
  });

  // Vérifier que tous les éléments existent
  if (!countriesContainer || !inputSearch) {
    console.error("❌ Erreur: Elements du DOM non trouvés");
    alert(
      "❌ Erreur: Les éléments HTML ne sont pas trouvés. Vérifiez que index.html contient tous les éléments requis.",
    );
    return;
  }

  // Ajouter le bouton dark/light
  const filterContainer = document.querySelector(".filter-container");
  if (!filterContainer) {
    console.error("❌ filter-container non trouvé !");
    return;
  }

  const themeBtn = document.createElement("button");
  themeBtn.id = "themeBtn";
  themeBtn.textContent = "🌙 Mode sombre";
  themeBtn.addEventListener("click", () => {
    toggleTheme();
    const currentTheme = localStorage.getItem("theme") || "light";
    themeBtn.textContent =
      currentTheme === "dark" ? "☀️ Mode clair" : "🌙 Mode sombre";
  });
  filterContainer.appendChild(themeBtn);

  // Initialiser le thème
  initTheme();
  const currentTheme = localStorage.getItem("theme") || "light";
  themeBtn.textContent =
    currentTheme === "dark" ? "☀️ Mode clair" : "🌙 Mode sombre";

  // Ajouter les écouteurs d'événements
  minToMaxBtn.addEventListener("click", () => {
    currentSort = "minToMax";
    displayCountries(allCountries);
  });

  maxToMinBtn.addEventListener("click", () => {
    currentSort = "maxToMin";
    displayCountries(allCountries);
  });

  alphaBtn.addEventListener("click", () => {
    currentSort = "alpha";
    displayCountries(allCountries);
  });

  inputRange.addEventListener("input", () => {
    rangeValue.textContent = inputRange.value;
    displayCountries(allCountries);
  });

  inputSearch.addEventListener("input", () => {
    displayCountries(allCountries);
  });

  console.log("✅ Application initialisée avec succès !");

  // Lancer le chargement des données
  fetchCountries();
}

// Attendre que le DOM soit chargé
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initializeApp);
} else {
  initializeApp();
}
