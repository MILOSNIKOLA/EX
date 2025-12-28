# Portfolio Next.js - MilosNikola

Site portfolio moderne construit avec Next.js 14, React, TypeScript et Sass.

## 🚀 Démarrage Rapide

```bash
# Installer les dépendances
npm install

# Lancer le serveur de développement
npm run dev
```

Ouvrez [http://localhost:3000](http://localhost:3000) dans votre navigateur.

## 📁 Structure du Projet

```
├── app/                    # Pages Next.js (App Router)
├── components/             # Composants React
│   ├── layout/            # Header, Footer, Navigation
│   ├── ui/                # Composants UI réutilisables
│   └── sections/          # Sections de pages
├── lib/data/              # Données statiques (projets, services)
├── styles/                # Variables Sass partagées
└── public/                # Assets statiques
```

## 🎨 Design

- **Thème** : Sombre professionnel
- **Couleurs** : Indigo (#6366f1), Purple (#8b5cf6)
- **Typographie** : Inter (Google Fonts)
- **Styles** : CSS Modules + Sass

## 📄 Pages

- `/` - Page d'accueil (Hero + Services)
- `/about` - À propos (avec stats)
- `/projects` - Portfolio de projets
- `/contact` - Formulaire de contact

## 🛠️ Technologies

- [Next.js 14](https://nextjs.org/)
- [React 18](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Sass](https://sass-lang.com/)

## 📝 Scripts

- `npm run dev` - Démarre le serveur de développement
- `npm run build` - Build de production
- `npm run start` - Démarre le serveur de production
- `npm run lint` - Lint le code

## 🔧 Personnalisation

### Modifier les projets

Éditez `lib/data/projects.ts` :

```typescript
export const projects: Project[] = [
  {
    id: '1',
    title: 'Votre Projet',
    description: 'Description...',
    // ...
  },
]
```

### Modifier les couleurs

Éditez `styles/_variables.scss` :

```scss
$primary-color: #6366f1;
$secondary-color: #8b5cf6;
```

## 🚀 Déploiement

### Vercel (Recommandé)

```bash
npm install -g vercel
vercel
```

### Autres plateformes

```bash
npm run build
npm start
```

## 📚 Documentation

- Voir `GUIDE_DEMARRAGE.md` pour un guide complet
- Voir `README_NEXTJS.md` pour la documentation détaillée

## 📄 Licence

MIT

