# Instructions pour compiler le Sass

## Installation de Sass

Vous avez plusieurs options pour installer Sass :

### Option 1 : Via npm (recommandé)

1. Installez Node.js si ce n'est pas déjà fait : https://nodejs.org/

2. Installez les dépendances :
   ```bash
   npm install
   ```

3. Compilez le Sass :
   ```bash
   npm run sass
   ```

   Ou en mode watch (recompilation automatique) :
   ```bash
   npm run sass:watch
   ```

### Option 2 : Via Dart Sass (standalone)

1. Téléchargez Dart Sass : https://sass-lang.com/dart-sass

2. Décompressez et ajoutez au PATH

3. Compilez :
   ```bash
   sass scss/style.scss style.css
   ```

   Ou en mode watch :
   ```bash
   sass --watch scss/style.scss:style.css
   ```

### Option 3 : Via VS Code Extension

1. Installez l'extension "Live Sass Compiler" dans VS Code

2. Cliquez sur "Watch Sass" dans la barre d'état

3. Le fichier CSS sera automatiquement généré

## Structure des fichiers SCSS

Les fichiers sont organisés dans le dossier `scss/` :

- `_variables.scss` : Variables globales (couleurs, espacements, etc.)
- `_mixins.scss` : Mixins réutilisables
- `_base.scss` : Styles de base
- `_navigation.scss` : Navigation
- `_hero.scss` : Section hero
- `_buttons.scss` : Boutons
- `_sections.scss` : Styles communs des sections
- `_about.scss` : Section à propos
- `_services.scss` : Section services
- `_portfolio.scss` : Section portfolio
- `_contact.scss` : Section contact
- `_footer.scss` : Footer
- `_animations.scss` : Animations CSS
- `_responsive.scss` : Media queries
- `style.scss` : Fichier principal qui importe tout

## Note importante

⚠️ **Ne modifiez jamais directement `style.css`** - ce fichier est généré automatiquement. Modifiez uniquement les fichiers dans `scss/`.
