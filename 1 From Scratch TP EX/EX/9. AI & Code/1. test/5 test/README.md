# Site Web - Portfolio Professionnel

Site web moderne et professionnel créé avec HTML, Sass (SCSS) et JavaScript.

## 🚀 Installation

### Prérequis
- Node.js et npm installés sur votre système

### Étapes d'installation

1. **Installer les dépendances**
   ```bash
   npm install
   ```

2. **Compiler le Sass**
   
   Pour une compilation unique :
   ```bash
   npm run sass
   ```
   
   Pour compiler en mode watch (recompilation automatique lors des modifications) :
   ```bash
   npm run sass:watch
   ```
   
   Pour compiler en mode compressé (production) :
   ```bash
   npm run sass:compressed
   ```

## 📁 Structure du projet

```
.
├── scss/                  # Fichiers sources Sass
│   ├── _variables.scss    # Variables (couleurs, espacements, etc.)
│   ├── _mixins.scss       # Mixins réutilisables
│   ├── _base.scss         # Styles de base et reset
│   ├── _navigation.scss   # Styles de la navigation
│   ├── _hero.scss         # Section hero
│   ├── _buttons.scss      # Styles des boutons
│   ├── _sections.scss     # Styles communs aux sections
│   ├── _about.scss        # Section à propos
│   ├── _services.scss     # Section services
│   ├── _portfolio.scss    # Section portfolio
│   ├── _contact.scss      # Section contact
│   ├── _footer.scss       # Footer
│   ├── _animations.scss   # Animations
│   ├── _responsive.scss   # Media queries
│   └── style.scss         # Fichier principal (importe tous les autres)
├── index.html             # Page HTML principale
├── script.js              # JavaScript
├── style.css              # CSS compilé (généré automatiquement)
└── package.json           # Configuration npm
```

## 🎨 Personnalisation

### Modifier les couleurs

Éditez le fichier `scss/_variables.scss` pour changer les couleurs du site :

```scss
$primary-color: #6366f1;
$secondary-color: #8b5cf6;
// etc.
```

### Modifier les breakpoints

Les breakpoints responsive sont définis dans `scss/_variables.scss` :

```scss
$breakpoint-md: 968px;
$breakpoint-sm: 640px;
```

## 📝 Notes

- Le fichier `style.css` est généré automatiquement depuis les fichiers SCSS
- Ne modifiez pas directement `style.css`, modifiez plutôt les fichiers dans `scss/`
- Le fichier `style.css.map` est généré pour le debugging dans les DevTools du navigateur

## 🛠️ Technologies utilisées

- HTML5
- Sass/SCSS
- JavaScript (Vanilla)
- CSS Grid & Flexbox
- Animations CSS

## 📄 Licence

MIT
