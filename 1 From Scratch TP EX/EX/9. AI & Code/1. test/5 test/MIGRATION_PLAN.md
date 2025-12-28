# Plan de Migration vers Next.js

## 📋 État Actuel

- **Structure** : Un seul fichier HTML avec sections (SPA-like)
- **Styles** : Sass bien organisé avec variables et mixins
- **Thème** : Sombre professionnel (#0f172a, #1e293b)
- **Sections** : Home (hero), About, Services, Portfolio, Contact
- **JavaScript** : Vanilla JS pour animations et interactions

## 🎯 Objectif

Migrer vers Next.js 14+ avec :
- Architecture App Router
- Composants React réutilisables
- Pages séparées (home, about, projects, contact)
- CSS Modules pour les styles (ou Sass compatible Next.js)
- Site léger et performant

## 📁 Nouvelle Architecture

```
nextjs-portfolio/
├── app/
│   ├── layout.tsx              # Layout racine
│   ├── page.tsx                # Page d'accueil
│   ├── about/
│   │   └── page.tsx            # Page À propos
│   ├── projects/
│   │   └── page.tsx            # Page Projets
│   ├── contact/
│   │   └── page.tsx            # Page Contact
│   ├── globals.css             # Styles globaux
│   └── layout.module.css       # Styles du layout
├── components/
│   ├── layout/
│   │   ├── Header.tsx          # Navigation
│   │   ├── Footer.tsx          # Footer
│   │   └── Navigation.tsx      # Menu navigation
│   ├── ui/
│   │   ├── Button.tsx          # Bouton réutilisable
│   │   ├── Card.tsx            # Carte de projet/service
│   │   ├── Section.tsx         # Wrapper de section
│   │   └── Container.tsx       # Container responsive
│   ├── sections/
│   │   ├── Hero.tsx            # Section hero
│   │   ├── About.tsx           # Section about
│   │   ├── Services.tsx        # Section services
│   │   ├── Projects.tsx        # Grille de projets
│   │   └── Contact.tsx         # Formulaire de contact
│   └── animations/
│       └── FadeIn.tsx          # Animation fade-in
├── lib/
│   ├── data/
│   │   ├── projects.ts         # Données des projets
│   │   └── services.ts         # Données des services
│   └── utils.ts                # Utilitaires
├── styles/
│   ├── variables.css           # Variables CSS (remplace Sass vars)
│   ├── mixins.css              # Classes utilitaires
│   └── components/             # Styles par composant
│       ├── button.module.css
│       ├── card.module.css
│       └── ...
├── public/                     # Assets statiques
├── next.config.js
├── package.json
└── tsconfig.json
```

## 🚀 Étapes de Migration

### Phase 1 : Setup Next.js (Fait maintenant)
- ✅ Initialiser Next.js avec TypeScript
- ✅ Configurer Sass/SCSS support
- ✅ Créer la structure de dossiers

### Phase 2 : Layout & Navigation
- Créer Header avec Navigation
- Créer Footer
- Mettre en place le layout racine
- Gérer le state du menu mobile

### Phase 3 : Styles & Design System
- Convertir variables Sass en CSS Variables
- Créer les composants UI de base (Button, Card)
- Migrer les styles vers CSS Modules
- Garder les animations

### Phase 4 : Pages & Composants
- Page d'accueil (Hero + Services)
- Page À propos (avec stats)
- Page Projets (grille avec données)
- Page Contact (formulaire)

### Phase 5 : Optimisations
- Lazy loading des composants
- Optimisation des images
- SEO (metadata)
- Performance (bundle size)

## 🎨 Design System

### Couleurs (Variables CSS)
```css
--primary: #6366f1;
--primary-dark: #4f46e5;
--secondary: #8b5cf6;
--bg-dark: #0f172a;
--bg-section: #1e293b;
--text-primary: #ffffff;
--text-secondary: #e2e8f0;
```

### Typographie
- **Police principale** : Inter (Google Fonts)
- **Headings** : Font-weight 700-800
- **Body** : Font-weight 400-500

### Composants UI
- **Button** : Primary, Secondary, Ghost
- **Card** : Project card, Service card
- **Section** : Container avec padding cohérent
- **Container** : Max-width 1200px, responsive

## 📝 Notes Importantes

1. **Sass vs CSS Modules** : 
   - Option A : Garder Sass avec `sass` package (recommandé pour votre cas)
   - Option B : Migrer vers CSS Modules pur
   - **Recommandation** : Garder Sass car votre structure est déjà bien organisée

2. **Routing** :
   - Next.js App Router utilise les dossiers pour le routing
   - `/about` = `app/about/page.tsx`
   - `/projects` = `app/projects/page.tsx`

3. **Data Management** :
   - Projets dans `lib/data/projects.ts` (export array)
   - Services dans `lib/data/services.ts`
   - Facile à convertir en CMS plus tard

4. **Animations** :
   - Utiliser `framer-motion` (optionnel, léger)
   - Ou CSS animations pures
   - Intersection Observer pour animations au scroll

## ✅ Checklist de Migration

- [ ] Setup Next.js
- [ ] Créer layout de base
- [ ] Migrer Header/Footer
- [ ] Créer composants UI
- [ ] Créer pages
- [ ] Migrer styles
- [ ] Migrer animations JS
- [ ] Tester responsive
- [ ] Optimiser performance
- [ ] Déployer

