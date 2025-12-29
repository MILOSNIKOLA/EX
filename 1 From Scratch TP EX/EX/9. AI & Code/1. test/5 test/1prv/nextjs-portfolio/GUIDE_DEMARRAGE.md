# 🚀 Guide de Démarrage Rapide

## Installation

```bash
# 1. Aller dans le dossier
cd nextjs-portfolio

# 2. Installer les dépendances
npm install

# 3. Lancer le serveur de développement
npm run dev
```

Le site sera accessible sur `http://localhost:3000`

## 📋 Structure Créée

### ✅ Pages
- `/` - Page d'accueil (Hero + Services)
- `/about` - Page À propos (avec stats animées)
- `/projects` - Page Projets (grille de projets)
- `/contact` - Page Contact (formulaire)

### ✅ Composants Layout
- `Header` - Navigation fixe avec menu mobile
- `Footer` - Footer avec liens
- `Navigation` - Menu de navigation réutilisable

### ✅ Composants UI
- `Button` - Bouton réutilisable (primary/secondary)
- `ProjectCard` - Carte de projet avec hover effects

### ✅ Sections
- `Hero` - Section hero avec animations
- `Services` - Grille de services
- `Projects` - Grille de projets
- `About` - Section about avec stats
- `Contact` - Formulaire de contact

### ✅ Données
- `lib/data/projects.ts` - Liste des projets
- `lib/data/services.ts` - Liste des services

## 🎨 Styles

Les styles Sass ont été migrés vers **CSS Modules** :
- Chaque composant a son `.module.scss`
- Variables partagées dans `styles/_variables.scss`
- Styles globaux dans `app/globals.scss`

## 🔄 Prochaines Étapes

1. **Personnaliser les données** :
   - Modifier `lib/data/projects.ts` avec vos vrais projets
   - Modifier `lib/data/services.ts` avec vos services
   - Ajouter des images dans `public/`

2. **Ajouter des images** :
   - Créer un dossier `public/images/`
   - Utiliser `next/image` pour optimiser les images

3. **SEO** :
   - Modifier les metadata dans `app/layout.tsx`
   - Ajouter des metadata spécifiques par page

4. **Déploiement** :
   - Vercel (recommandé pour Next.js) : `vercel`
   - Netlify : Connecter votre repo
   - Autres : `npm run build` puis déployer le dossier `.next`

## 💡 Astuces

- **Hot Reload** : Les modifications sont automatiquement rechargées
- **TypeScript** : Le code est typé pour éviter les erreurs
- **CSS Modules** : Les styles sont scoped automatiquement
- **Routing** : Les routes sont automatiques basées sur les dossiers `app/`

## 🐛 Problèmes Courants

### Erreur de compilation Sass
Si vous avez des erreurs Sass, vérifiez que `sass` est installé :
```bash
npm install sass --save-dev
```

### Erreur TypeScript
Si TypeScript se plaint, vérifiez `tsconfig.json` et les types installés.

### Styles qui ne s'appliquent pas
Vérifiez que vous importez bien les styles : `import styles from './Component.module.scss'`


